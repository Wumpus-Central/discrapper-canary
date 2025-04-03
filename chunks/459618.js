n.d(t, { Z: () => I }), n(47120);
var r = n(259443),
    i = n(442837),
    o = n(570140),
    a = n(186102),
    s = n(873741),
    l = n(592125),
    c = n(650774),
    u = n(866960),
    d = n(626135),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
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
let g = new r.Yd('MessageRoundtripTrackerStore');
function E(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function b(e) {
    let t = l.Z.getBasicChannel(e.channelId);
    if (null == t) return void g.warn('Ignoring a messageData for channel '.concat(e.channelId, " because we can't find that channel."));
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        i = (0, s.d)();
    d.default.track(
        f.rMx.SEND_MESSAGE_ROUNDTRIP,
        p(
            m(p({}, (0, a.Z)()), {
                api_latency_ms: n,
                gateway_latency_ms: r,
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id,
                guild_size: c.Z.getMemberCount(t.guild_id),
                mobile_network_type: u.Z.getType()
            }),
            null != i && { mobile_signal_strength_level: i }
        )
    );
}
function y(e) {
    let { optimistic: t, message: n } = e,
        r = n.nonce;
    t || null == r || O.recordGatewayResponse(r);
}
class v extends i.ZP.Store {
    recordMessageSendAttempt(e, t) {
        let n = {
            initialSendTimestamp: Date.now(),
            apiResponseTimestamp: null,
            gatewaySeenTimestamp: null,
            channelId: e
        };
        this.pendingMessages.set(t, n),
            setTimeout(() => {
                let e = this.pendingMessages.get(t);
                null != e && (b(e), this.pendingMessages.delete(t));
            }, 30000);
    }
    recordMessageSendApiResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = m(p({}, t), { apiResponseTimestamp: Date.now() });
            E(n) ? (b(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = m(p({}, t), { gatewaySeenTimestamp: Date.now() });
            E(n) ? (b(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    constructor(...e) {
        super(...e), _(this, 'pendingMessages', new Map());
    }
}
let O = new v(o.Z, { MESSAGE_CREATE: y }),
    I = O;
