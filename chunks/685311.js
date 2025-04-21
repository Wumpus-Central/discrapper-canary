n.d(t, { Z: () => g }), n(35282), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(536285),
    a = n(857458),
    c = n(388905),
    u = n(703656),
    d = n(388032),
    h = n(20493);
let g = function (e) {
    let { match: t, location: n, attemptDeepLink: l } = e,
        [g, p] = i.useState(0);
    i.useEffect(() => {
        o.default.once('connected', () => {
            p(1);
        }),
            o.default.once('disconnected', () => {
                (0, u.uL)((0, a.M)());
            }),
            o.default.connect();
    }, []),
        i.useEffect(() => {
            if (0 !== g) return;
            let e = setTimeout(() => (0, u.uL)((0, a.M)()), 3000);
            return () => clearTimeout(e);
        }, [g]);
    let m = i.useCallback(
        async (e, t) => {
            try {
                p(2), await l(e, t), p(3);
            } catch (e) {
                console.error('Error opening deeplink', e);
            }
        },
        [l]
    );
    if ((0, u.DB)()) return null;
    switch (g) {
        case 1:
            return (0, r.jsxs)(c.ZP, {
                children: [
                    (0, r.jsx)(c.Dx, {
                        className: h.marginBottom8,
                        children: d.intl.string(d.t.qllnGh)
                    }),
                    (0, r.jsx)(c.DK, { children: d.intl.string(d.t.SXCxyc) }),
                    (0, r.jsx)(c.zx, {
                        className: h.marginTop40,
                        onClick: () => m(t, n),
                        children: d.intl.string(d.t.UQvCf3)
                    }),
                    (0, r.jsx)(c.zx, {
                        className: s()(h.marginTop8, h.marginCenterHorz),
                        color: c.zx.Colors.LINK,
                        look: c.zx.Looks.LINK,
                        onClick: () => (0, u.uL)((0, a.M)()),
                        children: d.intl.string(d.t['2ixEBg'])
                    })
                ]
            });
        case 0:
        case 2:
            return (0, r.jsxs)(c.ZP, {
                children: [(0, r.jsx)(c.Dx, { children: d.intl.string(d.t['Z+hCVV']) }), (0, r.jsx)(c.Hh, {})]
            });
        case 3:
            return (0, r.jsxs)(c.ZP, {
                children: [
                    (0, r.jsx)(c.Dx, {
                        className: h.marginBottom8,
                        children: d.intl.string(d.t.csrAMD)
                    }),
                    (0, r.jsx)(c.DK, { children: d.intl.string(d.t.ghBJz8) })
                ]
            });
    }
};
