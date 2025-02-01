n.d(t, { Z: () => _ });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(576635),
    u = n(213053),
    c = n(652853),
    d = n(228168),
    f = n(287301);
let _ = Object.assign(
    r.forwardRef(function (e, t) {
        let { user: n, displayProfile: r, profileType: a, className: _, pendingThemeColors: p, themeOverride: h, children: m, forceShowPremium: g = !1 } = e,
            {
                theme: E,
                primaryColor: v,
                secondaryColor: y
            } = (0, l.Z)({
                user: n,
                displayProfile: r,
                pendingThemeColors: p,
                isPreview: g
            }),
            { profileThemeStyle: I, profileThemeClassName: T } = (0, u.Z)({
                theme: null != h ? h : E,
                primaryColor: v,
                secondaryColor: y
            }),
            b = {
                [f.biteSize]: a === d.y0.BITE_SIZE,
                [f.fullSize]: a === d.y0.FULL_SIZE,
                [f.panel]: a === d.y0.PANEL
            };
        return (0, i.jsx)('div', {
            className: s()(f.outer, T, b, _),
            style: I,
            ref: t,
            children: (0, i.jsx)('div', {
                className: s()(f.inner, b),
                children: (0, i.jsx)(o.ze6, {
                    theme: null != h ? h : E,
                    children: (0, i.jsx)(c.X, {
                        profileType: a,
                        theme: null != h ? h : E,
                        primaryColor: v,
                        secondaryColor: y,
                        children: m
                    })
                })
            })
        });
    }),
    {
        Overlay: r.forwardRef(function (e, t) {
            let { children: n, className: r } = e,
                { profileType: a } = (0, c.z)(),
                o = {
                    [f.biteSize]: a === d.y0.BITE_SIZE,
                    [f.fullSize]: a === d.y0.FULL_SIZE,
                    [f.panel]: a === d.y0.PANEL
                };
            return (0, i.jsx)('div', {
                ref: t,
                className: s()(f.overlay, o, r),
                children: n
            });
        })
    }
);
