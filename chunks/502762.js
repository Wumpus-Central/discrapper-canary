n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(576635),
    c = n(213053),
    u = n(652853),
    d = n(750883);
let f = Object.assign(
    i.forwardRef(function (e, t) {
        let { user: n, displayProfile: i, themeType: o, className: f, pendingThemeColors: _, themeOverride: p, children: h, forceShowPremium: m = !1 } = e,
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
            { profileThemeStyle: y, profileThemeClassName: O } = (0, c.Z)({
                theme: null != p ? p : g,
                themeType: o,
                primaryColor: E,
                secondaryColor: b
            });
        return (0, r.jsx)('div', {
            className: a()(d.outer, O, f),
            style: y,
            ref: t,
            children: (0, r.jsx)('div', {
                className: d.inner,
                children: (0, r.jsx)(s.ze6, {
                    theme: null != p ? p : g,
                    children: (0, r.jsx)(u.X, {
                        themeType: o,
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
                className: a()(d.overlay, i),
                children: n
            });
        })
    }
);
