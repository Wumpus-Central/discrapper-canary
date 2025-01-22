var i = r(47120);
var a = r(259443),
    o = r(442837),
    s = r(570140),
    l = r(186102),
    u = r(873741),
    c = r(592125),
    d = r(650774),
    f = r(866960),
    p = r(626135),
    h = r(981631);
function _(e, n, r) {
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
let m = new a.Yd('MessageRoundtripTrackerStore');
function g(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function E(e) {
    let n = c.Z.getBasicChannel(e.channelId);
    if (null == n) {
        m.warn('Ignoring a messageData for channel '.concat(e.channelId, " because we can't find that channel."));
        return;
    }
    if (Math.random() > 0.1) return;
    let r = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        a = (0, u.d)();
    p.default.track(h.rMx.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, l.Z)(),
        api_latency_ms: r,
        gateway_latency_ms: i,
        channel_id: n.id,
        channel_type: n.type,
        guild_id: n.guild_id,
        guild_size: d.Z.getMemberCount(n.guild_id),
        mobile_network_type: f.Z.getType(),
        ...(null != a && { mobile_signal_strength_level: a })
    });
}
function v(e) {
    let { optimistic: n, message: r } = e,
        i = r.nonce;
    if (!n && null != i) b.recordGatewayResponse(i);
}
class y extends o.ZP.Store {
    recordMessageSendAttempt(e, n) {
        let r = {
            initialSendTimestamp: Date.now(),
            apiResponseTimestamp: null,
            gatewaySeenTimestamp: null,
            channelId: e
        };
        this.pendingMessages.set(n, r),
            setTimeout(() => {
                let e = this.pendingMessages.get(n);
                null != e && (E(e), this.pendingMessages.delete(n));
            }, 30000);
    }
    recordMessageSendApiResponse(e) {
        let n = this.pendingMessages.get(e);
        if (null != n) {
            let r = {
                ...n,
                apiResponseTimestamp: Date.now()
            };
            g(r) ? (E(r), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, r);
        }
    }
    recordGatewayResponse(e) {
        let n = this.pendingMessages.get(e);
        if (null != n) {
            let r = {
                ...n,
                gatewaySeenTimestamp: Date.now()
            };
            g(r) ? (E(r), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, r);
        }
    }
    constructor(...e) {
        super(...e), _(this, 'pendingMessages', new Map());
    }
}
let b = new y(s.Z, { MESSAGE_CREATE: v });
n.Z = b;
