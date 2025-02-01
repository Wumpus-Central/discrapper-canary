n.d(t, {
    $V: () => T,
    Bz: () => S,
    ZP: () => R,
    hc: () => A
}),
    n(653041),
    n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(544891),
    s = n(911969),
    o = n(367907),
    l = n(710845),
    u = n(432877),
    c = n(873741),
    d = n(314897),
    f = n(866960),
    _ = n(70956),
    p = n(403182),
    h = n(651655),
    m = n(861990),
    g = n(141795),
    E = n(981631),
    v = n(959517);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let I = null;
__OVERLAY__ && (I = n(237997).Z);
var T = (function (e) {
    return (e[(e.SEND = 0)] = 'SEND'), (e[(e.EDIT = 1)] = 'EDIT'), (e[(e.COMMAND = 2)] = 'COMMAND'), e;
})({});
let b = (e) => 0 === e.type,
    S = (e) => 1 === e.type,
    A = (e) => (b(e) ? e.message.nonce : S(e) ? e.message.messageId : e.message.data.id),
    N = [1 * _.Z.Millis.MINUTE, 5 * _.Z.Millis.MINUTE];
class C extends h.Z {
    isFull() {
        return this.queue.length >= this.maxSize;
    }
    drain(e, t) {
        switch ((this.logger.log('Draining Message Queue with: ', e.type), e.type)) {
            case 0:
                this.handleSend(e.message, t);
                break;
            case 1:
                this.handleEdit(e.message, t);
                break;
            case 2:
                this.handleCommand(e.message, t);
        }
    }
    cancelRequest(e) {
        var t;
        this.logger.log('Cancel message send: ', e), null === (t = this.requests.get(e)) || void 0 === t || t.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e);
    }
    cancelPendingSendRequests(e) {
        let t = [],
            n = [];
        for (; this.queue.length > 0; ) {
            let i = this.queue.shift(),
                { message: r } = i;
            0 === r.type && r.message.channelId === e ? t.push(r.message) : n.push(i);
        }
        return this.queue.push(...n), this.logger.log('Cancel pending send requests', t.length), t;
    }
    startQueueMetricTimers(e) {
        let t = N.map((e) =>
            setTimeout(() => {
                (0, o.yw)(E.rMx.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
            }, e)
        );
        this.analyticsTimeouts.set(e, t);
    }
    cancelQueueMetricTimers(e) {
        var t;
        null === (t = this.analyticsTimeouts.get(e)) || void 0 === t || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e);
    }
    createResponseHandler(e, t) {
        return (n) => {
            if ((null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr)) return t(null, n);
            if (null != n.body && (n.body.code === E.evJ.SLOWMODE_RATE_LIMITED || n.body.code === E.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)) t(null, n);
            else if (429 === n.status) {
                let e = parseInt(n.headers['retry-after']);
                isNaN(e) ? t(null, n) : t({ retryAfter: e * _.Z.Millis.SECOND });
            } else t(null, n);
        };
    }
    handleSend(e, t) {
        let n;
        let { channelId: i, ...r } = e,
            s = (0, c.d)(),
            o = {
                mobile_network_type: f.Z.getType(),
                ...r,
                ...(null != s && { signal_strength: s })
            };
        if (u.ZP.get('send_fail_100')) {
            this.logger.log('Skipping message send because send_fail_100 is enabled'),
                t(null, {
                    ok: !1,
                    hasErr: !1,
                    status: 500,
                    headers: {},
                    body: '{}',
                    text: 'Simulated failure'
                });
            return;
        }
        null == I || (I.isInstanceLocked() ? (n = { location: E.ADE.OVERLAY_LOCKED_ACTIVATED }) : I.isInstanceLocked() || (n = I.isPinned(E.Odu.TEXT) ? { location: E.ADE.OVERLAY_UNLOCKED_PINNED } : { location: E.ADE.OVERLAY_UNLOCKED }));
        let l = this.createResponseHandler(e.nonce, t),
            d = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            a.tn.post(
                {
                    url: E.ANM.MESSAGES(i),
                    body: o,
                    context: n,
                    oldFormErrors: !0,
                    ...v.hs,
                    signal: d.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, d);
                    }
                },
                l
            );
    }
    handleEdit(e, t) {
        let { channelId: n, messageId: i, ...r } = e,
            s = new AbortController();
        a.tn.patch(
            {
                url: E.ANM.MESSAGE(n, i),
                body: r,
                retries: 1,
                oldFormErrors: !0,
                signal: s.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                    this.requests.set(i, s);
                }
            },
            this.createResponseHandler(i, t)
        );
    }
    handleCommand(e, t) {
        let n,
            { applicationId: i, guildId: o, channelId: l, data: u, nonce: c, attachments: f, maxSizeCallback: _, analytics_location: h, sectionName: v, source: y } = e,
            I = {
                type: s.B8.APPLICATION_COMMAND,
                application_id: i,
                guild_id: o,
                channel_id: l,
                session_id: d.default.getSessionId(),
                data: u,
                nonce: c,
                analytics_location: h,
                section_name: v,
                source: y
            };
        if (null != f) {
            (I.data.attachments = []), (n = []);
            let e = f;
            I.data.attachments = e.map((e, t) => (r()(e.status === g.m.COMPLETED, 'Uploads must be staged before trying to send a message'), (0, m.B)(e, t)));
        }
        let T = new AbortController();
        a.tn.post(
            {
                url: E.ANM.INTERACTIONS,
                fields: [
                    {
                        name: 'payload_json',
                        value: JSON.stringify(I)
                    }
                ],
                attachments: n,
                signal: T.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(c, T),
                        e.on('progress', (e) => {
                            let { total: t } = e,
                                n = (0, p.dg)(o);
                            null != t && t > n && (this.cancelRequest(c), null == _ || _(n));
                        });
                }
            },
            this.createResponseHandler(c, t)
        );
    }
    constructor(e = 5) {
        super(new l.Z('MessageQueue')), y(this, 'maxSize', void 0), y(this, 'requests', void 0), y(this, 'analyticsTimeouts', void 0), (this.maxSize = e), (this.requests = new Map()), (this.analyticsTimeouts = new Map());
    }
}
let R = new C();
