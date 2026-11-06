var l = r(855986);
r(723702);
var n = r(821925);
function c() {
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.A.getNativeStorefrontCountry(), {});
}
function o() {
    let { payment_gateway: t, country_code: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c();
    return null != t ? `${t}:${e ?? ""}` : "";
}
(r(652215),
    r.d(
        e,
        {},
        {
            Kd: o,
            Nm: function () {
                return (0, l.bG)([n.A], () => o(c(n.A.getNativeStorefrontCountry())));
            },
            tz: c,
        },
    ));
