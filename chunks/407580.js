"use strict";
n.d(t, { A: () => g });
var r = n(311907),
    i = n(73153),
    s = n(626584),
    a = n(69114),
    o = n(322683),
    l = n(734057),
    u = n(498642),
    c = n(544180),
    d = n(954571),
    _ = n(652215);
let f = new s.A("MessageRoundtripTrackerStore");
function p(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function h(e) {
    let t = l.A.getBasicChannel(e.channelId);
    if (null == t)
        return void f.warn(`Ignoring a messageData for channel ${e.channelId} because we can't find that channel.`);
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        i = (0, o.O)();
    d.default.track(_.HAw.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, a.A)(),
        api_latency_ms: n,
        gateway_latency_ms: r,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: u.A.getMemberCount(t.guild_id),
        mobile_network_type: c.A.getType(),
        num_attachments: e.attachmentCount,
        ...(null != i && { mobile_signal_strength_level: i }),
    });
}
class E extends r.Ay.Store {
    initialize() {
        this.waitFor(l.A, u.A, c.A);
    }
    pendingMessages = new Map();
    recordMessageSendAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = (n.attachments?.length ?? 0) + (n.attachmentsToUpload?.length ?? 0),
            i = {
                initialSendTimestamp: Date.now(),
                apiResponseTimestamp: null,
                gatewaySeenTimestamp: null,
                channelId: e,
                attachmentCount: r,
            };
        this.pendingMessages.set(t, i),
            setTimeout(() => {
                let e = this.pendingMessages.get(t);
                null != e && (h(e), this.pendingMessages.delete(t));
            }, 3e4);
    }
    recordMessageSendApiResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, apiResponseTimestamp: Date.now() };
            p(n) ? (h(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, gatewaySeenTimestamp: Date.now() };
            p(n) ? (h(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
}
let m = new E(i.h, {
        MESSAGE_CREATE: function (e) {
            let { optimistic: t, message: n } = e,
                r = n.nonce;
            t || null == r || m.recordGatewayResponse(r);
        },
    }),
    g = m;
