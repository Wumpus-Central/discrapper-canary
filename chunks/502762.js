var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(576635),
    c = r(213053),
    d = r(652853),
    f = r(228168),
    p = r(287301);
let h = a.forwardRef(function (e, n) {
        let { user: r, displayProfile: a, profileType: o, className: h, pendingThemeColors: _, themeOverride: m, children: g, forceShowPremium: E = !1 } = e,
            {
                theme: v,
                primaryColor: y,
                secondaryColor: b
            } = (0, u.Z)({
                user: r,
                displayProfile: a,
                pendingThemeColors: _,
                isPreview: E
            }),
            { profileThemeStyle: I, profileThemeClassName: T } = (0, c.Z)({
                theme: null != m ? m : v,
                primaryColor: y,
                secondaryColor: b
            }),
            S = {
                [p.biteSize]: o === f.y0.BITE_SIZE,
                [p.fullSize]: o === f.y0.FULL_SIZE,
                [p.panel]: o === f.y0.PANEL
            };
        return (0, i.jsx)('div', {
            className: s()(p.outer, T, S, h),
            style: I,
            ref: n,
            children: (0, i.jsx)('div', {
                className: s()(p.inner, S),
                children: (0, i.jsx)(l.ThemeContextProvider, {
                    theme: null != m ? m : v,
                    children: (0, i.jsx)(d.X, {
                        profileType: o,
                        theme: null != m ? m : v,
                        primaryColor: y,
                        secondaryColor: b,
                        children: g
                    })
                })
            })
        });
    }),
    _ = a.forwardRef(function (e, n) {
        let { children: r, className: a } = e,
            { profileType: o } = (0, d.z)(),
            l = {
                [p.biteSize]: o === f.y0.BITE_SIZE,
                [p.fullSize]: o === f.y0.FULL_SIZE,
                [p.panel]: o === f.y0.PANEL
            };
        return (0, i.jsx)('div', {
            ref: n,
            className: s()(p.overlay, l, a),
            children: r
        });
    });
n.Z = Object.assign(h, { Overlay: _ });
