n.d(t, {
    CH: () => l,
    Co: () => s,
    j4: () => a,
});
var r = n(433517),
    i = n(427164);
let a = "gateway_encoding_override",
    o = (0, i.le)({
        name: "2025-12-desktop-json-gateway-encoding",
        kind: "user",
        defaultConfig: { enableDesktopJSONGatewayEncoding: !1 },
        variations: { 1: { enableDesktopJSONGatewayEncoding: !0 } },
    });
function s(e) {
    return o.useConfig({ location: e }).enableDesktopJSONGatewayEncoding;
}
function l() {
    return r.K.get(a);
}
