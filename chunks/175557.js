n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(108930),
    s = n(86406),
    a = n(146068),
    l = n(308545),
    o = n(397697),
    c = n(129871),
    d = n(206851),
    u = n(246933),
    m = n(995414),
    p = n(308083);
function g(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e) {
    var { banner: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['banner']);
    switch (t) {
        case p.qC.NIGHT_SKY:
            return (0, r.jsx)(o.Z, g({}, n));
        case p.qC.CASTLE:
            return (0, r.jsx)(i.Z, g({}, n));
        case p.qC.WORLD_MAP:
            return (0, r.jsx)(m.Z, g({}, n));
        case p.qC.SEA_FOAM:
            return (0, r.jsx)(c.Z, g({}, n));
        case p.qC.WARP_TUNNEL:
            return (0, r.jsx)(u.Z, g({}, n));
        case p.qC.HOUSE:
            return (0, r.jsx)(a.Z, g({}, n));
        case p.qC.HEIGHTMAP:
            return (0, r.jsx)(s.Z, g({}, n));
        case p.qC.MESH:
            return (0, r.jsx)(l.Z, g({}, n));
        case p.qC.SPATTER:
            return (0, r.jsx)(d.Z, g({}, n));
    }
    return null;
}
