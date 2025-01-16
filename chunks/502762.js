var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(576635),
    c = r(213053),
    d = r(652853),
    f = r(228168),
    _ = r(287301);
let h = a.forwardRef(function (e, n) {
        let { user: r, displayProfile: a, profileType: s, className: h, pendingThemeColors: p, themeOverride: m, children: g, forceShowPremium: E = !1 } = e,
            {
                theme: v,
                primaryColor: I,
                secondaryColor: T
            } = (0, u.Z)({
                user: r,
                displayProfile: a,
                pendingThemeColors: p,
                isPreview: E
            }),
            { profileThemeStyle: b, profileThemeClassName: y } = (0, c.Z)({
                theme: null != m ? m : v,
                primaryColor: I,
                secondaryColor: T
            }),
            S = {
                [_.biteSize]: s === f.y0.BITE_SIZE,
                [_.fullSize]: s === f.y0.FULL_SIZE,
                [_.panel]: s === f.y0.PANEL
            };
        return (0, i.jsx)('div', {
            className: o()(_.outer, y, S, h),
            style: b,
            ref: n,
            children: (0, i.jsx)('div', {
                className: o()(_.inner, S),
                children: (0, i.jsx)(l.ThemeContextProvider, {
                    theme: null != m ? m : v,
                    children: (0, i.jsx)(d.X, {
                        profileType: s,
                        theme: null != m ? m : v,
                        primaryColor: I,
                        secondaryColor: T,
                        children: g
                    })
                })
            })
        });
    }),
    p = a.forwardRef(function (e, n) {
        let { children: r, className: a } = e,
            { profileType: s } = (0, d.z)(),
            l = {
                [_.biteSize]: s === f.y0.BITE_SIZE,
                [_.fullSize]: s === f.y0.FULL_SIZE,
                [_.panel]: s === f.y0.PANEL
            };
        return (0, i.jsx)('div', {
            ref: n,
            className: o()(_.overlay, l, a),
            children: r
        });
    });
n.Z = Object.assign(h, { Overlay: p });
