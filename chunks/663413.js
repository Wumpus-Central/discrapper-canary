var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(667498),
    o = n(806163),
    d = n(855986),
    c = n(590703),
    u = n(265059),
    _ = n(293432),
    E = n(611635),
    A = n(892019),
    h = n(726249),
    f = n(203480),
    I = n(652215);
n(389215);
let p = new Set([I.BVt.LOGIN, I.BVt.REGISTER]),
    m = r.memo(function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e;
        (0, h.cu)({ skipsSettingDefaultPageTitle: n });
        let { clientThemesClassName: a, clientThemesCSS: m } = (0, c.Ay)(),
            g = r.createElement("style", { [c.Vg]: !0 }, m);
        return (0, i.jsxs)(l.mg, {
            children: [
                (function (e) {
                    let { lang: t, style: n, className: a } = (0, E.x)(),
                        l = (0, o.zy)(),
                        c = r.useMemo(() => p.has(l.pathname), [l.pathname]);
                    ((0, f.A)(window, c), (0, A.A)(document.documentElement));
                    let h = (0, d.bG)([u.A, _.A], () =>
                        _.A.getWindowOpen(I.MLl.DEVTOOLS_POPOUT) ? 0 : u.A.sidebarWidth,
                    );
                    return (0, i.jsx)("html", {
                        lang: t,
                        style: `${n} --devtools-sidebar-width: ${h}px;`,
                        className: s()(a, e, { overlay: __OVERLAY__ }),
                    });
                })(a),
                g,
                t,
            ],
        });
    });
n.d(t, {}, { A: m });
