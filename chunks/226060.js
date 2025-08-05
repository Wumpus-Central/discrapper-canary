n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(512722),
    a = n.n(i),
    o = n(399606),
    s = n(481060),
    l = n(607070),
    c = n(430824),
    u = n(506071),
    d = n(267101),
    f = n(240864),
    _ = n(57949),
    p = n(400916),
    h = n(388032);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: i } = e,
        m = (0, o.e7)([f.Z], () => f.Z.getGuildProduct(n)),
        E = (0, o.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        y = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        O = (0, u.n)();
    if ((a()(null != E, 'guild cannot be null'), a()(null != m, 'guildProductListing cannot be null'), (0, d.SO)(E)))
        return (0, r.jsx)(s.ua7, {
            text: h.intl.string(h.t.sAJr9f),
            children: (e) =>
                (0, r.jsx)(
                    s.zxk,
                    b(
                        g(
                            {
                                variant: 'primary',
                                text: h.intl.string(h.t.xUi3BA)
                            },
                            e
                        ),
                        { disabled: !0 }
                    )
                )
        });
    if (m.has_entitlement)
        return null != m.attachments
            ? (0, r.jsx)(p.Z, {
                  guildId: E.id,
                  productId: m.id
              })
            : (0, r.jsx)(s.zxk, {
                  variant: 'secondary',
                  text: h.intl.string(h.t.RcTOGB),
                  disabled: !0
              });
    {
        let e = () =>
            (0, _.z)({
                guildProductListing: m,
                guildId: E.id,
                sourceAnalyticsLocations: i
            });
        return (0, r.jsx)(s.gtL, {
            shineSize: s.gtL.ShineSizes.SMALL,
            pauseAnimation: y || !O,
            onClick: e,
            children: h.intl.string(h.t.xUi3BA)
        });
    }
}
