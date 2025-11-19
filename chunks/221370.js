n.d(t, { Z: () => x }), n(388685), n(539854);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    a = n.n(r),
    s = n(758713),
    o = n(657707),
    c = n(28664),
    d = n(388032),
    u = n(456486);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let f = [s.z.DESKTOP, s.z.XBOX, s.z.PLAYSTATION, s.z.NINTENDO];
function g(e) {
    var { platform: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++)
                    (n = r[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["platform"]);
    switch (t) {
        case s.z.DESKTOP:
            return (0, i.jsx)(o.pzj, m({ size: "xs" }, n));
        case s.z.XBOX:
            return (0, i.jsx)(o.Mko, m({ size: "xs" }, n));
        case s.z.PLAYSTATION:
            return (0, i.jsx)(o.Tsp, m({ size: "xs" }, n));
        case s.z.NINTENDO:
            return (0, i.jsx)(o.aPH, m({ size: "xs" }, n));
        default:
            return null;
    }
}
function p(e) {
    let { platforms: t } = e;
    return (0, i.jsx)("div", {
        className: a()(u.row, u.gapSm),
        style: { alignItems: "center" },
        children: t.map((e) =>
            (0, i.jsx)(
                c.u,
                {
                    text: (function (e) {
                        switch (e) {
                            case s.z.DESKTOP:
                                return d.intl.string(d.t.KT6uCJ);
                            case s.z.XBOX:
                                return d.intl.string(d.t.DDWUJp);
                            case s.z.PLAYSTATION:
                                return d.intl.string(d.t.fzMz2s);
                            case s.z.NINTENDO:
                                return d.intl.string(d.t.AMW8je);
                            default:
                                return null;
                        }
                    })(e),
                    children: (0, i.jsx)(g, { platform: e }),
                },
                e,
            ),
        ),
    });
}
function x(e) {
    let { detectedGame: t, className: n } = e,
        r = l.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(s.z.DESKTOP) && (e.has(s.z.MACOS) || e.has(s.z.LINUX)) && n.push(s.z.DESKTOP),
                n.filter((e) => f.includes(e))
            );
        }, [t.platforms]);
    return 0 === r.length
        ? null
        : (0, i.jsx)("div", {
              className: a()(u.column, u.gapLg, n),
              children: r.length > 0 && (0, i.jsx)(p, { platforms: r }),
          });
}
