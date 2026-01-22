n.d(t, { A: () => v }), n(896048);
var r = n(311907),
    i = n(73153),
    a = n(626584),
    s = n(69114),
    o = n(322683),
    l = n(734057),
    c = n(498642),
    u = n(544180),
    d = n(954571),
    f = n(652215);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = new a.A("MessageRoundtripTrackerStore");
function E(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function b(e) {
    let t = l.A.getBasicChannel(e.channelId);
    if (null == t)
        return void g.warn(
            "Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."),
        );
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        i = (0, o.O)();
    d.default.track(
        f.HAw.SEND_MESSAGE_ROUNDTRIP,
        _(
            m(_({}, (0, s.A)()), {
                api_latency_ms: n,
                gateway_latency_ms: r,
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id,
                guild_size: c.A.getMemberCount(t.guild_id),
                mobile_network_type: u.A.getType(),
                num_attachments: e.attachmentCount,
            }),
            null != i && { mobile_signal_strength_level: i },
        ),
    );
}
function y(e) {
    let { optimistic: t, message: n } = e,
        r = n.nonce;
    t || null == r || A.recordGatewayResponse(r);
}
class O extends r.Ay.Store {
    initialize() {
        this.waitFor(l.A, c.A, u.A);
    }
    recordMessageSendAttempt(e, t) {
        var n, r, i, a;
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            o =
                (null != (n = null == (i = s.attachments) ? void 0 : i.length) ? n : 0) +
                (null != (r = null == (a = s.attachmentsToUpload) ? void 0 : a.length) ? r : 0),
            l = {
                initialSendTimestamp: Date.now(),
                apiResponseTimestamp: null,
                gatewaySeenTimestamp: null,
                channelId: e,
                attachmentCount: o,
            };
        this.pendingMessages.set(t, l),
            setTimeout(() => {
                let e = this.pendingMessages.get(t);
                null != e && (b(e), this.pendingMessages.delete(t));
            }, 30000);
    }
    recordMessageSendApiResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = m(_({}, t), { apiResponseTimestamp: Date.now() });
            E(n) ? (b(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = m(_({}, t), { gatewaySeenTimestamp: Date.now() });
            E(n) ? (b(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    constructor(...e) {
        super(...e), p(this, "pendingMessages", new Map());
    }
}
let A = new O(i.h, { MESSAGE_CREATE: y }),
    v = A;
