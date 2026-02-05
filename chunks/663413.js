"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(422998),
    l = n(960488),
    u = n(311907),
    c = n(49621),
    d = n(590703),
    _ = n(265059),
    f = n(87001),
    p = n(611635),
    h = n(726249),
    m = n(203480),
    g = n(652215);
let E = new Set([g.BVt.LOGIN, g.BVt.REGISTER]);
function A(e) {
    let { lang: t, style: n, className: a } = (0, p.xb)(),
        o = (0, l.zy)(),
        c = i.useMemo(() => E.has(o.pathname), [o.pathname]);
    (0, m.A)(window, c);
    let d = (0, u.bG)([_.A, f.A], () => (f.A.getWindowOpen(g.MLl.DEVTOOLS_POPOUT) ? 0 : _.A.sidebarWidth));
    return (0, r.jsx)("html", {
        lang: t,
        style: `${n} --devtools-sidebar-width: ${d}px;`,
        className: s()(a, e, { overlay: __OVERLAY__ }),
    });
}
function I() {
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
                    { rel: "preload", href: e, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
                    t,
                ),
            ),
        })
    );
}
function T(e) {
    let { children: t, skipsSettingDefaultPageTitle: n } = e;
    (0, h.cu)({ skipsSettingDefaultPageTitle: n });
    let { clientThemesClassName: a, clientThemesCSS: s } = (0, d.Ay)(),
        l = i.createElement("style", { [d.Vg]: !0 }, s);
    return (0, r.jsxs)(o.mg, { children: [A(a), I(), l, t] });
}
let y = i.memo(T);
