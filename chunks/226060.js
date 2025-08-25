n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(399606),
    s = n(159691),
    l = n(481060),
    c = n(430824),
    u = n(267101),
    d = n(240864),
    f = n(57949),
    _ = n(400916),
    p = n(388032);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: i } = e,
        h = (0, o.e7)([d.Z], () => d.Z.getGuildProduct(n)),
        g = (0, o.e7)([c.Z], () => c.Z.getGuild(t), [t]);
    if ((a()(null != g, "guild cannot be null"), a()(null != h, "guildProductListing cannot be null"), (0, u.SO)(g)))
        return (0, r.jsx)(l.ua7, {
            text: p.intl.string(p.t.sAJr9f),
            children: (e) =>
                (0, r.jsx)(
                    s.zx,
                    E(
                        m(
                            {
                                variant: "primary",
                                text: p.intl.string(p.t.xUi3BA),
                            },
                            e,
                        ),
                        { disabled: !0 },
                    ),
                ),
        });
    if (h.has_entitlement)
        return null != h.attachments
            ? (0, r.jsx)(_.Z, {
                  guildId: g.id,
                  productId: h.id,
              })
            : (0, r.jsx)(s.zx, {
                  variant: "secondary",
                  text: p.intl.string(p.t.RcTOGB),
                  disabled: !0,
              });
    {
        let e = () =>
            (0, f.z)({
                guildProductListing: h,
                guildId: g.id,
                sourceAnalyticsLocations: i,
            });
        return (0, r.jsx)(s.zx, {
            text: p.intl.string(p.t.xUi3BA),
            onClick: e,
        });
    }
}
