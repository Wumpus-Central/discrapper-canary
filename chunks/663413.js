"use strict";
n.d(t, { A: () => p });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(667498),
    o = n(806163),
    d = n(17928),
    c = n(590703),
    u = n(265059),
    _ = n(567249),
    E = n(597619),
    A = n(726249),
    h = n(203480),
    I = n(652215);
let f = new Set([I.BVt.LOGIN, I.BVt.REGISTER]),
    p = r.memo(function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e;
        (0, A.cu)({ skipsSettingDefaultPageTitle: n });
        let { clientThemesClassName: a, clientThemesCSS: p } = (0, c.Ay)(),
            T = r.createElement("style", { [c.Vg]: !0 }, p);
        return (0, i.jsxs)(l.mg, {
            children: [
                (function (e) {
                    let { lang: t, style: n, className: a } = (0, E.xb)(),
                        l = (0, o.zy)(),
                        c = r.useMemo(() => f.has(l.pathname), [l.pathname]);
                    (0, h.A)(window, c);
                    let A = (0, d.bG)([u.A, _.A], () =>
                        _.A.getWindowOpen(I.MLl.DEVTOOLS_POPOUT) ? 0 : u.A.sidebarWidth,
                    );
                    return (0, i.jsx)("html", {
                        lang: t,
                        style: `${n} --devtools-sidebar-width: ${A}px;`,
                        className: s()(a, e, { overlay: __OVERLAY__ }),
                    });
                })(a),
                T,
                t,
            ],
        });
    });
