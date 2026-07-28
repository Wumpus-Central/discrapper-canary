"use strict";
n.d(t, { A: () => T });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(667498),
    o = n(806163),
    d = n(17928),
    c = n(49621),
    u = n(590703),
    _ = n(265059),
    E = n(567249),
    A = n(597619),
    h = n(726249),
    I = n(203480),
    f = n(652215);
let p = new Set([f.BVt.LOGIN, f.BVt.REGISTER]),
    T = r.memo(function (e) {
        let { children: t, skipsSettingDefaultPageTitle: a } = e;
        (0, h.cu)({ skipsSettingDefaultPageTitle: a });
        let { clientThemesClassName: T, clientThemesCSS: m } = (0, u.Ay)(),
            g = r.createElement("style", { [u.Vg]: !0 }, m);
        return (0, i.jsxs)(l.mg, {
            children: [
                (function (e) {
                    let { lang: t, style: n, className: a } = (0, A.xb)(),
                        l = (0, o.zy)(),
                        c = r.useMemo(() => p.has(l.pathname), [l.pathname]);
                    (0, I.A)(window, c);
                    let u = (0, d.bG)([_.A, E.A], () =>
                        E.A.getWindowOpen(f.MLl.DEVTOOLS_POPOUT) ? 0 : _.A.sidebarWidth,
                    );
                    return (0, i.jsx)("html", {
                        lang: t,
                        style: `${n} --devtools-sidebar-width: ${u}px;`,
                        className: s()(a, e, { overlay: __OVERLAY__ }),
                    });
                })(T),
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
                g,
                t,
            ],
        });
    });
