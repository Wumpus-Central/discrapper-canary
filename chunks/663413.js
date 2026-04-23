"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(422998),
    l = n(873263),
    u = n(311907),
    c = n(49621),
    d = n(590703),
    _ = n(265059),
    f = n(87001),
    p = n(611635),
    h = n(726249),
    E = n(203480),
    m = n(652215);
let g = new Set([m.BVt.LOGIN, m.BVt.REGISTER]),
    A = i.memo(function (e) {
        let { children: t, skipsSettingDefaultPageTitle: s } = e;
        (0, h.cu)({ skipsSettingDefaultPageTitle: s });
        let { clientThemesClassName: A, clientThemesCSS: I } = (0, d.Ay)(),
            T = i.createElement("style", { [d.Vg]: !0 }, I);
        return (0, r.jsxs)(o.mg, {
            children: [
                (function (e) {
                    let { lang: t, style: n, className: s } = (0, p.xb)(),
                        o = (0, l.zy)(),
                        c = i.useMemo(() => g.has(o.pathname), [o.pathname]);
                    (0, E.A)(window, c);
                    let d = (0, u.bG)([_.A, f.A], () =>
                        f.A.getWindowOpen(m.MLl.DEVTOOLS_POPOUT) ? 0 : _.A.sidebarWidth,
                    );
                    return (0, r.jsx)("html", {
                        lang: t,
                        style: `${n} --devtools-sidebar-width: ${d}px;`,
                        className: a()(s, e, { overlay: __OVERLAY__ }),
                    });
                })(A),
                (function () {
                    let [e, t] = i.useState([]);
                    return (
                        i.useEffect(() => {
                            Promise.all(
                                c.x.map((e) =>
                                    n(907790)(`./${e}.woff2`).then((e) => {
                                        let { default: t } = e;
                                        return t;
                                    }),
                                ),
                            ).then((e) => t(e));
                        }, []),
                        (0, r.jsx)(r.Fragment, {
                            children: e.map((e, t) =>
                                (0, r.jsx)(
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
