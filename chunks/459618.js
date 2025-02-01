n.d(t, { Z: () => y }), n(47120);
var i = n(259443),
    r = n(442837),
    a = n(570140),
    s = n(186102),
    o = n(873741),
    l = n(592125),
    u = n(650774),
    c = n(866960),
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
let p = new i.Yd('MessageRoundtripTrackerStore');
function h(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function m(e) {
    let t = l.Z.getBasicChannel(e.channelId);
    if (null == t) {
        p.warn('Ignoring a messageData for channel '.concat(e.channelId, " because we can't find that channel."));
        return;
    }
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        r = (0, o.d)();
    d.default.track(f.rMx.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, s.Z)(),
        api_latency_ms: n,
        gateway_latency_ms: i,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: u.Z.getMemberCount(t.guild_id),
        mobile_network_type: c.Z.getType(),
        ...(null != r && { mobile_signal_strength_level: r })
    });
}
function g(e) {
    let { optimistic: t, message: n } = e,
        i = n.nonce;
    !t && null != i && v.recordGatewayResponse(i);
}
class E extends r.ZP.Store {
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
                null != e && (m(e), this.pendingMessages.delete(t));
            }, 30000);
    }
    recordMessageSendApiResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = {
                ...t,
                apiResponseTimestamp: Date.now()
            };
            h(n) ? (m(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = {
                ...t,
                gatewaySeenTimestamp: Date.now()
            };
            h(n) ? (m(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    constructor(...e) {
        super(...e), _(this, 'pendingMessages', new Map());
    }
}
let v = new E(a.Z, { MESSAGE_CREATE: g }),
    y = v;
