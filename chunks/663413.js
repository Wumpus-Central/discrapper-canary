"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(422998),
    l = n(873263),
    u = n(17928),
    c = n(49621),
    d = n(590703),
    _ = n(265059),
    f = n(567249),
    h = n(597619),
    p = n(726249),
    E = n(203480),
    m = n(652215);
let g = new Set([m.BVt.LOGIN, m.BVt.REGISTER]),
    A = r.memo(function (e) {
        let { children: t, skipsSettingDefaultPageTitle: s } = e;
        (0, p.cu)({ skipsSettingDefaultPageTitle: s });
        let { clientThemesClassName: A, clientThemesCSS: I } = (0, d.Ay)(),
            T = r.createElement("style", { [d.Vg]: !0 }, I);
        return (0, i.jsxs)(o.mg, {
            children: [
                (function (e) {
                    let { lang: t, style: n, className: s } = (0, h.xb)(),
                        o = (0, l.zy)(),
                        c = r.useMemo(() => g.has(o.pathname), [o.pathname]);
                    (0, E.A)(window, c);
                    let d = (0, u.bG)([_.A, f.A], () =>
                        f.A.getWindowOpen(m.MLl.DEVTOOLS_POPOUT) ? 0 : _.A.sidebarWidth,
                    );
                    return (0, i.jsx)("html", {
                        lang: t,
                        style: `${n} --devtools-sidebar-width: ${d}px;`,
                        className: a()(s, e, { overlay: __OVERLAY__ }),
                    });
                })(A),
                (function () {
                    let [e, t] = r.useState([]);
                    return (
                        r.useEffect(() => {
                            Promise.all(
                                c.x.map((e) =>
                                    n(907790)(`./${e}.woff2`).then((e) => {
                                        let { default: t } = e;
                                        return t;
                                    }),
                                ),
                            ).then((e) => t(e));
                        }, []),
                        (0, i.jsx)(i.Fragment, {
                            children: e.map((e, t) =>
                                (0, i.jsx)(
                                    "link",
                                    {
                                        rel: "preload",
                                        href: e,
                                        as: "font",
                                        type: "font/woff2",
                                        crossOrigin: "anonymous",
                                    },
                                    t,
                                ),
                            ),
                        })
                    );
                })(),
                T,
                t,
            ],
        });
    });
