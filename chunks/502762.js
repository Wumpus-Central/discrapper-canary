n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(576635),
    c = n(213053),
    u = n(652853),
    d = n(750883);
let f = Object.assign(
    i.forwardRef(function (e, t) {
        let { user: n, displayProfile: i, themeType: a, className: f, pendingThemeColors: _, themeOverride: p, children: h, forceShowPremium: m = !1, forceUserTheme: g = !1 } = e,
            {
                theme: E,
                primaryColor: b,
                secondaryColor: y
            } = (0, l.Z)({
                user: n,
                displayProfile: i,
                pendingThemeColors: _,
                isPreview: m,
                forceUserTheme: g
            }),
            { profileThemeStyle: O, profileThemeClassName: v } = (0, c.Z)({
                theme: null != p ? p : E,
                themeType: a,
                primaryColor: b,
                secondaryColor: y,
                forceUserTheme: g
            });
        return (0, r.jsx)('div', {
            className: o()(d.outer, v, f),
            style: O,
            ref: t,
            children: (0, r.jsx)('div', {
                className: d.inner,
                children: (0, r.jsx)(s.ze6, {
                    theme: null != p ? p : E,
                    children: (0, r.jsx)(u.X, {
                        themeType: a,
                        theme: null != p ? p : E,
                        primaryColor: b,
                        secondaryColor: y,
                        children: h
                    })
                })
            })
        });
    }),
    {
        Overlay: i.forwardRef(function (e, t) {
            let { children: n, className: i } = e;
            return (0, r.jsx)('div', {
                ref: t,
                className: o()(d.overlay, i),
                children: n
            });
        })
    }
);
