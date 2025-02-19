n.d(t, {
    $V: () => A,
    Bz: () => R,
    ZP: () => x,
    hc: () => P
}),
    n(653041),
    n(47120),
    n(26686);
var r = n(512722),
    i = n.n(r),
    o = n(544891),
    a = n(911969),
    s = n(367907),
    l = n(710845),
    c = n(432877),
    u = n(873741),
    d = n(314897),
    f = n(866960),
    p = n(70956),
    _ = n(403182),
    h = n(651655),
    m = n(861990),
    g = n(141795),
    E = n(981631),
    v = n(959517);
function b(e, t, n) {
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = null;
__OVERLAY__ && (N = n(237997).Z);
var A = (function (e) {
    return (e[(e.SEND = 0)] = 'SEND'), (e[(e.EDIT = 1)] = 'EDIT'), (e[(e.COMMAND = 2)] = 'COMMAND'), e;
})({});
let C = (e) => 0 === e.type,
    R = (e) => 1 === e.type,
    P = (e) => (C(e) ? e.message.nonce : R(e) ? e.message.messageId : e.message.data.id),
    w = [+p.Z.Millis.MINUTE, 5 * p.Z.Millis.MINUTE];
class D extends h.Z {
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
            let r = this.queue.shift(),
                { message: i } = r;
            0 === i.type && i.message.channelId === e ? t.push(i.message) : n.push(r);
        }
        return this.queue.push(...n), this.logger.log('Cancel pending send requests', t.length), t;
    }
    startQueueMetricTimers(e) {
        let t = w.map((e) =>
            setTimeout(() => {
                (0, s.yw)(E.rMx.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
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
                isNaN(e) ? t(null, n) : t({ retryAfter: e * p.Z.Millis.SECOND });
            } else t(null, n);
        };
    }
    handleSend(e, t) {
        let n;
        let { channelId: r } = e,
            i = I(e, ['channelId']),
            a = (0, u.d)(),
            s = y({ mobile_network_type: f.Z.getType() }, i, null != a && { signal_strength: a });
        if (c.ZP.get('send_fail_100')) {
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
        null == N || (N.isInstanceLocked() ? (n = { location: E.ADE.OVERLAY_LOCKED_ACTIVATED }) : N.isInstanceLocked() || (n = N.isPinned(E.Odu.TEXT) ? { location: E.ADE.OVERLAY_UNLOCKED_PINNED } : { location: E.ADE.OVERLAY_UNLOCKED }));
        let l = this.createResponseHandler(e.nonce, t),
            d = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            o.tn.post(
                S(
                    y(
                        {
                            url: E.ANM.MESSAGES(r),
                            body: s,
                            context: n,
                            oldFormErrors: !0
                        },
                        v.hs
                    ),
                    {
                        signal: d.signal,
                        rejectWithError: !0,
                        onRequestCreated: () => {
                            null != e.nonce && this.requests.set(e.nonce, d);
                        }
                    }
                ),
                l
            );
    }
    handleEdit(e, t) {
        var { channelId: n, messageId: r } = e,
            i = I(e, ['channelId', 'messageId']);
        let a = new AbortController();
        o.tn.patch(
            {
                url: E.ANM.MESSAGE(n, r),
                body: i,
                retries: 1,
                oldFormErrors: !0,
                signal: a.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                    this.requests.set(r, a);
                }
            },
            this.createResponseHandler(r, t)
        );
    }
    handleCommand(e, t) {
        let n,
            { applicationId: r, guildId: s, channelId: l, data: c, nonce: u, attachments: f, maxSizeCallback: p, analytics_location: h, sectionName: v, source: b } = e,
            y = {
                type: a.B8.APPLICATION_COMMAND,
                application_id: r,
                guild_id: s,
                channel_id: l,
                session_id: d.default.getSessionId(),
                data: c,
                nonce: u,
                analytics_location: h,
                section_name: v,
                source: b
            };
        if (null != f) {
            (y.data.attachments = []), (n = []);
            let e = f;
            y.data.attachments = e.map((e, t) => (i()(e.status === g.m.COMPLETED, 'Uploads must be staged before trying to send a message'), (0, m.B)(e, t)));
        }
        let O = new AbortController();
        o.tn.post(
            {
                url: E.ANM.INTERACTIONS,
                fields: [
                    {
                        name: 'payload_json',
                        value: JSON.stringify(y)
                    }
                ],
                attachments: n,
                signal: O.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(u, O),
                        e.on('progress', (e) => {
                            let { total: t } = e,
                                n = (0, _.dg)(s);
                            null != t && t > n && (this.cancelRequest(u), null == p || p(n));
                        });
                }
            },
            this.createResponseHandler(u, t)
        );
    }
    constructor(e = 5) {
        super(new l.Z('MessageQueue')), b(this, 'maxSize', void 0), b(this, 'requests', void 0), b(this, 'analyticsTimeouts', void 0), (this.maxSize = e), (this.requests = new Map()), (this.analyticsTimeouts = new Map());
    }
}
let x = new D();
