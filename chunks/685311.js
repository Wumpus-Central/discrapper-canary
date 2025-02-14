n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(536285),
    o = n(857458),
    c = n(388905),
    d = n(703656),
    u = n(388032),
    h = n(483938);
let _ = function (e) {
    let { match: t, location: n, attemptDeepLink: a } = e,
        [_, m] = r.useState(0);
    r.useEffect(() => {
        s.default.once('connected', () => {
            m(1);
        }),
            s.default.once('disconnected', () => {
                (0, d.uL)((0, o.M)());
            }),
            s.default.connect();
    }, []),
        r.useEffect(() => {
            if (0 !== _) return;
            let e = setTimeout(() => (0, d.uL)((0, o.M)()), 3000);
            return () => clearTimeout(e);
        }, [_]);
    let g = r.useCallback(
        async (e, t) => {
            try {
                m(2), await a(e, t), m(3);
            } catch (e) {
                console.error('Error opening deeplink', e);
            }
        },
        [a]
    );
    if ((0, d.DB)()) return null;
    switch (_) {
        case 1:
            return (0, i.jsxs)(c.ZP, {
                children: [
                    (0, i.jsx)(c.Dx, {
                        className: h.marginBottom8,
                        children: u.intl.string(u.t.qllnGh)
                    }),
                    (0, i.jsx)(c.DK, { children: u.intl.string(u.t.SXCxyc) }),
                    (0, i.jsx)(c.zx, {
                        className: h.marginTop40,
                        onClick: () => g(t, n),
                        children: u.intl.string(u.t.UQvCf3)
                    }),
                    (0, i.jsx)(c.zx, {
                        className: l()(h.marginTop8, h.marginCenterHorz),
                        color: c.zx.Colors.LINK,
                        look: c.zx.Looks.LINK,
                        onClick: () => (0, d.uL)((0, o.M)()),
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
                        className: h.marginBottom8,
                        children: u.intl.string(u.t.csrAMD)
                    }),
                    (0, i.jsx)(c.DK, { children: u.intl.string(u.t.ghBJz8) })
                ]
            });
    }
};
