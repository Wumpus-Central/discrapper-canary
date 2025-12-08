n.d(t, { Z: () => x }), n(388685), n(539854);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    o = n(758713),
    s = n(657707),
    c = n(28664),
    d = n(388032),
    u = n(226788);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
let g = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
function f(e) {
    var { platform: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        i = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                    (n = r[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["platform"]);
    switch (t) {
        case o.z.DESKTOP:
            return (0, a.jsx)(s.pzj, m({ size: "xs" }, n));
        case o.z.XBOX:
            return (0, a.jsx)(s.Mko, m({ size: "xs" }, n));
        case o.z.PLAYSTATION:
            return (0, a.jsx)(s.Tsp, m({ size: "xs" }, n));
        case o.z.NINTENDO:
            return (0, a.jsx)(s.aPH, m({ size: "xs" }, n));
        default:
            return null;
    }
}
function p(e) {
    let { platforms: t } = e;
    return (0, a.jsx)("div", {
        className: l()(u.row, u.gapSm),
        style: { alignItems: "center" },
        children: t.map((e) =>
            (0, a.jsx)(
                c.u,
                {
                    text: (function (e) {
                        switch (e) {
                            case o.z.DESKTOP:
                                return d.intl.string(d.t.KT6uCJ);
                            case o.z.XBOX:
                                return d.intl.string(d.t.DDWUJp);
                            case o.z.PLAYSTATION:
                                return d.intl.string(d.t.fzMz2s);
                            case o.z.NINTENDO:
                                return d.intl.string(d.t.AMW8je);
                            default:
                                return null;
                        }
                    })(e),
                    children: (0, a.jsx)(f, { platform: e }),
                },
                e,
            ),
        ),
    });
}
function x(e) {
    let { detectedGame: t, className: n } = e,
        r = i.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(o.z.DESKTOP) && (e.has(o.z.MACOS) || e.has(o.z.LINUX)) && n.push(o.z.DESKTOP),
                n.filter((e) => g.includes(e))
            );
        }, [t.platforms]);
    return 0 === r.length
        ? null
        : (0, a.jsx)("div", {
              className: l()(u.column, u.gapLg, n),
              children: r.length > 0 && (0, a.jsx)(p, { platforms: r }),
          });
}
