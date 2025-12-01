n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(576635),
    c = n(213053),
    u = n(652853),
    d = n(639701);
let f = Object.assign(
    i.forwardRef(function (e, t) {
        let {
                user: n,
                displayProfile: i,
                themeType: a,
                className: f,
                pendingThemeColors: p,
                themeOverride: _,
                children: m,
                forceShowPremium: h = !1,
                forceUserTheme: g = !1,
            } = e,
            {
                theme: E,
                primaryColor: b,
                secondaryColor: y,
            } = (0, l.Z)({
                user: n,
                displayProfile: i,
                pendingThemeColors: p,
                isPreview: h,
                forceUserTheme: g,
            }),
            { profileThemeStyle: O, profileThemeClassName: v } = (0, c.Z)({
                theme: null != _ ? _ : E,
                themeType: a,
                primaryColor: b,
                secondaryColor: y,
                forceUserTheme: g,
            });
        return (0, r.jsx)("div", {
            className: o()(d.outer, v, f),
            style: O,
            ref: t,
            children: (0, r.jsx)("div", {
                className: d.inner,
                children: (0, r.jsx)(s.ze6, {
                    theme: null != _ ? _ : E,
                    children: (0, r.jsx)(u.X, {
                        themeType: a,
                        theme: null != _ ? _ : E,
                        primaryColor: b,
                        secondaryColor: y,
                        userId: n.id,
                        children: m,
                    }),
                }),
            }),
        });
    }),
    {
        Overlay: i.forwardRef(function (e, t) {
            let { children: n, className: i } = e;
            return (0, r.jsx)("div", {
                ref: t,
                className: o()(d.overlay, i),
                children: n,
            });
        }),
    },
);
