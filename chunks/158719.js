"use strict";
n.d(t, { UR: () => i.U, _D: () => s, oT: () => i.o });
var r = n(945810),
    i = n(947829);
let a = (0, r.mj)({
    name: "2025-12-desktop-json-gateway-encoding",
    kind: "user",
    defaultConfig: { enableDesktopJSONGatewayEncoding: !1 },
    variations: { 1: { enableDesktopJSONGatewayEncoding: !0 } },
});
function s(e) {
    return a.useConfig({ location: e }).enableDesktopJSONGatewayEncoding;
}
