n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(536285),
    s = n(857458),
    c = n(388905),
    d = n(703656),
    u = n(388032),
    _ = n(232186);
let h = function (e) {
    let { match: t, location: n, attemptDeepLink: l } = e,
        [h, g] = r.useState(0);
    r.useEffect(() => {
        o.default.once('connected', () => {
            g(1);
        }),
            o.default.once('disconnected', () => {
                (0, d.uL)((0, s.M)());
            }),
            o.default.connect();
    }, []),
        r.useEffect(() => {
            if (0 !== h) return;
            let e = setTimeout(() => (0, d.uL)((0, s.M)()), 3000);
            return () => clearTimeout(e);
        }, [h]);
    let p = r.useCallback(
        async (e, t) => {
            try {
                g(2), await l(e, t), g(3);
            } catch (e) {
                console.error('Error opening deeplink', e);
            }
        },
        [l]
    );
    if ((0, d.DB)()) return null;
    switch (h) {
        case 1:
            return (0, i.jsxs)(c.ZP, {
                children: [
                    (0, i.jsx)(c.Dx, {
                        className: _.marginBottom8,
                        children: u.intl.string(u.t.qllnGh)
                    }),
                    (0, i.jsx)(c.DK, { children: u.intl.string(u.t.SXCxyc) }),
                    (0, i.jsx)(c.zx, {
                        className: _.marginTop40,
                        onClick: () => p(t, n),
                        children: u.intl.string(u.t.UQvCf3)
                    }),
                    (0, i.jsx)(c.zx, {
                        className: a()(_.marginTop8, _.marginCenterHorz),
                        color: c.zx.Colors.LINK,
                        look: c.zx.Looks.LINK,
                        onClick: () => (0, d.uL)((0, s.M)()),
                        children: u.intl.string(u.t['2ixEBg'])
                    })
                ]
            });
        case 0:
        case 2:
            return (0, i.jsxs)(c.ZP, {
                children: [(0, i.jsx)(c.Dx, { children: u.intl.string(u.t['Z+hCVV']) }), (0, i.jsx)(c.Hh, {})]
            });
        case 3:
            return (0, i.jsxs)(c.ZP, {
                children: [
                    (0, i.jsx)(c.Dx, {
                        className: _.marginBottom8,
                        children: u.intl.string(u.t.csrAMD)
                    }),
                    (0, i.jsx)(c.DK, { children: u.intl.string(u.t.ghBJz8) })
                ]
            });
    }
};
