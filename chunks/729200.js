n.d(t, { g: () => i });
let r = (0, n(427164).le)({
    name: "2025-08-proxy-request-signing-ticket",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function i() {
    return r.getConfig({ location: "getIsProxyRequestSigningTicketEnabled" }).enabled;
}
