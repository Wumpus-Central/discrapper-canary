n.d(t, {
    $V: () => A,
    Bz: () => R,
    ZP: () => L,
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
    d = n(931301),
    f = n(314897),
    _ = n(866960),
    p = n(70956),
    h = n(403182),
    m = n(651655),
    g = n(861990),
    E = n(141795),
    b = n(981631),
    y = n(959517);
function v(e, t, n) {
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
function O(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var A = (function (e) {
    return (e[(e.SEND = 0)] = 'SEND'), (e[(e.EDIT = 1)] = 'EDIT'), (e[(e.COMMAND = 2)] = 'COMMAND'), e;
})({});
let C = (e) => 0 === e.type,
    R = (e) => 1 === e.type,
    P = (e) => (C(e) ? e.message.nonce : R(e) ? e.message.messageId : e.message.data.id),
    w = [+p.Z.Millis.MINUTE, 5 * p.Z.Millis.MINUTE];
class D extends m.Z {
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
        this.logger.log('Cancel message send: ', e), null == (t = this.requests.get(e)) || t.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e);
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
                (0, s.yw)(b.rMx.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
            }, e)
        );
        this.analyticsTimeouts.set(e, t);
    }
    cancelQueueMetricTimers(e) {
        var t;
        null == (t = this.analyticsTimeouts.get(e)) || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e);
    }
    createResponseHandler(e, t) {
        return (n) => {
            if ((null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr)) return t(null, n);
            if (null != n.body && (n.body.code === b.evJ.SLOWMODE_RATE_LIMITED || n.body.code === b.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)) t(null, n);
            else if (429 === n.status) {
                let e = parseInt(n.headers['retry-after']);
                isNaN(e) ? t(null, n) : t({ retryAfter: e * p.Z.Millis.SECOND });
            } else t(null, n);
        };
    }
    handleSend(e, t) {
        let n,
            { channelId: r } = e,
            i = T(e, ['channelId']),
            a = (0, u.d)(),
            s = O({ mobile_network_type: _.Z.getType() }, i, null != a && { signal_strength: a });
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
        let l = (0, d.Z)();
        null != l && ((n = { location: l }), this.logger.log('Overlay location: ', n));
        let f = this.createResponseHandler(e.nonce, t),
            p = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            o.tn.post(
                S(
                    O(
                        {
                            url: b.ANM.MESSAGES(r),
                            body: s,
                            context: n,
                            oldFormErrors: !0
                        },
                        y.hs
                    ),
                    {
                        signal: p.signal,
                        rejectWithError: !0,
                        onRequestCreated: () => {
                            null != e.nonce && this.requests.set(e.nonce, p);
                        }
                    }
                ),
                f
            );
    }
    handleEdit(e, t) {
        var { channelId: n, messageId: r } = e,
            i = T(e, ['channelId', 'messageId']);
        let a = new AbortController();
        o.tn.patch(
            {
                url: b.ANM.MESSAGE(n, r),
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
            { applicationId: r, guildId: s, channelId: l, data: c, nonce: u, attachments: d, maxSizeCallback: _, analytics_location: p, sectionName: m, source: y } = e,
            v = {
                type: a.B8.APPLICATION_COMMAND,
                application_id: r,
                guild_id: s,
                channel_id: l,
                session_id: f.default.getSessionId(),
                data: c,
                nonce: u,
                analytics_location: p,
                section_name: m,
                source: y
            };
        if (null != d) {
            (v.data.attachments = []), (n = []);
            let e = d;
            v.data.attachments = e.map((e, t) => (i()(e.status === E.m.COMPLETED, 'Uploads must be staged before trying to send a message'), (0, g.B)(e, t)));
        }
        let O = new AbortController();
        o.tn.post(
            {
                url: b.ANM.INTERACTIONS,
                fields: [
                    {
                        name: 'payload_json',
                        value: JSON.stringify(v)
                    }
                ],
                attachments: n,
                signal: O.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(u, O),
                        e.on('progress', (e) => {
                            let { total: t } = e,
                                n = (0, h.dg)(s);
                            null != t && t > n && (this.cancelRequest(u), null == _ || _(n));
                        });
                }
            },
            this.createResponseHandler(u, t)
        );
    }
    constructor(e = 5) {
        super(new l.Z('MessageQueue')), v(this, 'maxSize', void 0), v(this, 'requests', void 0), v(this, 'analyticsTimeouts', void 0), (this.maxSize = e), (this.requests = new Map()), (this.analyticsTimeouts = new Map());
    }
}
let L = new D();
