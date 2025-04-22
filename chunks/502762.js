n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(576635),
    c = n(213053),
    u = n(652853),
    d = n(750883);
let f = Object.assign(
    i.forwardRef(function (e, t) {
        let { user: n, displayProfile: i, themeType: a, className: f, pendingThemeColors: _, themeOverride: p, children: h, forceShowPremium: m = !1 } = e,
            {
                theme: g,
                primaryColor: E,
                secondaryColor: b
            } = (0, l.Z)({
                user: n,
                displayProfile: i,
                pendingThemeColors: _,
                isPreview: m
            }),
            { profileThemeStyle: y, profileThemeClassName: v } = (0, c.Z)({
                theme: null != p ? p : g,
                themeType: a,
                primaryColor: E,
                secondaryColor: b
            });
        return (0, r.jsx)('div', {
            className: o()(d.outer, v, f),
            style: y,
            ref: t,
            children: (0, r.jsx)('div', {
                className: d.inner,
                children: (0, r.jsx)(s.ze6, {
                    theme: null != p ? p : g,
                    children: (0, r.jsx)(u.X, {
                        themeType: a,
                        theme: null != p ? p : g,
                        primaryColor: E,
                        secondaryColor: b,
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
