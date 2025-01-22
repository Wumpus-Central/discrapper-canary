r.d(n, {
    $V: function () {
        return i;
    },
    Bz: function () {
        return N;
    },
    hc: function () {
        return R;
    }
});
var i,
    a = r(653041);
var o = r(47120);
var s = r(512722),
    l = r.n(s),
    u = r(544891),
    c = r(911969),
    d = r(367907),
    f = r(710845),
    p = r(432877),
    h = r(873741),
    _ = r(314897),
    m = r(866960),
    g = r(70956),
    E = r(403182),
    v = r(651655),
    y = r(861990),
    b = r(141795),
    I = r(981631),
    T = r(959517);
function S(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let A = null;
__OVERLAY__ && (A = r(237997).Z),
    !(function (e) {
        (e[(e.SEND = 0)] = 'SEND'), (e[(e.EDIT = 1)] = 'EDIT'), (e[(e.COMMAND = 2)] = 'COMMAND');
    })(i || (i = {}));
let C = (e) => 0 === e.type,
    N = (e) => 1 === e.type,
    R = (e) => (C(e) ? e.message.nonce : N(e) ? e.message.messageId : e.message.data.id),
    O = [1 * g.Z.Millis.MINUTE, 5 * g.Z.Millis.MINUTE];
class D extends v.Z {
    isFull() {
        return this.queue.length >= this.maxSize;
    }
    drain(e, n) {
        switch ((this.logger.log('Draining Message Queue with: ', e.type), e.type)) {
            case 0:
                this.handleSend(e.message, n);
                break;
            case 1:
                this.handleEdit(e.message, n);
                break;
            case 2:
                this.handleCommand(e.message, n);
        }
    }
    cancelRequest(e) {
        var n;
        this.logger.log('Cancel message send: ', e), null === (n = this.requests.get(e)) || void 0 === n || n.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e);
    }
    cancelPendingSendRequests(e) {
        let n = [],
            r = [];
        for (; this.queue.length > 0; ) {
            let i = this.queue.shift(),
                { message: a } = i;
            0 === a.type && a.message.channelId === e ? n.push(a.message) : r.push(i);
        }
        return this.queue.push(...r), this.logger.log('Cancel pending send requests', n.length), n;
    }
    startQueueMetricTimers(e) {
        let n = O.map((e) =>
            setTimeout(() => {
                (0, d.yw)(I.rMx.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
            }, e)
        );
        this.analyticsTimeouts.set(e, n);
    }
    cancelQueueMetricTimers(e) {
        var n;
        null === (n = this.analyticsTimeouts.get(e)) || void 0 === n || n.forEach(clearTimeout), this.analyticsTimeouts.delete(e);
    }
    createResponseHandler(e, n) {
        return (r) => {
            if ((null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), r.hasErr)) return n(null, r);
            if (null != r.body && (r.body.code === I.evJ.SLOWMODE_RATE_LIMITED || r.body.code === I.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)) n(null, r);
            else if (429 === r.status) {
                let e = parseInt(r.headers['retry-after']);
                isNaN(e) ? n(null, r) : n({ retryAfter: e * g.Z.Millis.SECOND });
            } else n(null, r);
        };
    }
    handleSend(e, n) {
        let r;
        let { channelId: i, ...a } = e,
            o = (0, h.d)(),
            s = {
                mobile_network_type: m.Z.getType(),
                ...a,
                ...(null != o && { signal_strength: o })
            };
        if (p.ZP.get('send_fail_100')) {
            this.logger.log('Skipping message send because send_fail_100 is enabled'),
                n(null, {
                    ok: !1,
                    hasErr: !1,
                    status: 500,
                    headers: {},
                    body: '{}',
                    text: 'Simulated failure'
                });
            return;
        }
        null != A && (A.isInstanceLocked() ? (r = { location: I.ADE.OVERLAY_LOCKED_ACTIVATED }) : !A.isInstanceLocked() && (r = A.isPinned(I.Odu.TEXT) ? { location: I.ADE.OVERLAY_UNLOCKED_PINNED } : { location: I.ADE.OVERLAY_UNLOCKED }));
        let l = this.createResponseHandler(e.nonce, n),
            c = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            u.tn.post(
                {
                    url: I.ANM.MESSAGES(i),
                    body: s,
                    context: r,
                    oldFormErrors: !0,
                    ...T.hs,
                    signal: c.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, c);
                    }
                },
                l
            );
    }
    handleEdit(e, n) {
        let { channelId: r, messageId: i, ...a } = e,
            o = new AbortController();
        u.tn.patch(
            {
                url: I.ANM.MESSAGE(r, i),
                body: a,
                retries: 1,
                oldFormErrors: !0,
                signal: o.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                    this.requests.set(i, o);
                }
            },
            this.createResponseHandler(i, n)
        );
    }
    handleCommand(e, n) {
        let r,
            { applicationId: i, guildId: a, channelId: o, data: s, nonce: d, attachments: f, maxSizeCallback: p, analytics_location: h, sectionName: m, source: g } = e,
            v = {
                type: c.B8.APPLICATION_COMMAND,
                application_id: i,
                guild_id: a,
                channel_id: o,
                session_id: _.default.getSessionId(),
                data: s,
                nonce: d,
                analytics_location: h,
                section_name: m,
                source: g
            };
        if (null != f) {
            (v.data.attachments = []), (r = []);
            let e = f;
            v.data.attachments = e.map((e, n) => (l()(e.status === b.m.COMPLETED, 'Uploads must be staged before trying to send a message'), (0, y.B)(e, n)));
        }
        let T = new AbortController();
        u.tn.post(
            {
                url: I.ANM.INTERACTIONS,
                fields: [
                    {
                        name: 'payload_json',
                        value: JSON.stringify(v)
                    }
                ],
                attachments: r,
                signal: T.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(d, T),
                        e.on('progress', (e) => {
                            let { total: n } = e,
                                r = (0, E.dg)(a);
                            null != n && n > r && (this.cancelRequest(d), null == p || p(r));
                        });
                }
            },
            this.createResponseHandler(d, n)
        );
    }
    constructor(e = 5) {
        super(new f.Z('MessageQueue')), S(this, 'maxSize', void 0), S(this, 'requests', void 0), S(this, 'analyticsTimeouts', void 0), (this.maxSize = e), (this.requests = new Map()), (this.analyticsTimeouts = new Map());
    }
}
n.ZP = new D();
