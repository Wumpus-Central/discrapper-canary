n.d(t, { Z: () => g }), n(301563), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(536285),
    s = n(857458),
    c = n(388905),
    u = n(703656),
    d = n(388032),
    p = n(20493);
let g = function (e) {
    let { match: t, location: n, attemptDeepLink: o } = e,
        [g, h] = i.useState(0);
    i.useEffect(() => {
        l.default.once('connected', () => {
            h(1);
        }),
            l.default.once('disconnected', () => {
                (0, u.uL)((0, s.M)());
            }),
            l.default.connect();
    }, []),
        i.useEffect(() => {
            if (0 !== g) return;
            let e = setTimeout(() => (0, u.uL)((0, s.M)()), 3000);
            return () => clearTimeout(e);
        }, [g]);
    let f = i.useCallback(
        async (e, t) => {
            try {
                h(2), await o(e, t), h(3);
            } catch (e) {
                console.error('Error opening deeplink', e);
            }
        },
        [o]
    );
    if ((0, u.DB)()) return null;
    switch (g) {
        case 1:
            return (0, r.jsxs)(c.ZP, {
                children: [
                    (0, r.jsx)(c.Dx, {
                        className: p.marginBottom8,
                        children: d.NW.string(d.t.qllnGh)
                    }),
                    (0, r.jsx)(c.DK, { children: d.NW.string(d.t.SXCxyc) }),
                    (0, r.jsx)(c.zx, {
                        className: p.marginTop40,
                        onClick: () => f(t, n),
                        children: d.NW.string(d.t.UQvCf3)
                    }),
                    (0, r.jsx)(c.zx, {
                        className: a()(p.marginTop8, p.marginCenterHorz),
                        color: c.zx.Colors.LINK,
                        look: c.zx.Looks.LINK,
                        onClick: () => (0, u.uL)((0, s.M)()),
                        children: d.NW.string(d.t['2ixEBg'])
                    })
                ]
            });
        case 0:
        case 2:
            return (0, r.jsxs)(c.ZP, {
                children: [(0, r.jsx)(c.Dx, { children: d.NW.string(d.t['Z+hCVV']) }), (0, r.jsx)(c.Hh, {})]
            });
        case 3:
            return (0, r.jsxs)(c.ZP, {
                children: [
                    (0, r.jsx)(c.Dx, {
                        className: p.marginBottom8,
                        children: d.NW.string(d.t.csrAMD)
                    }),
                    (0, r.jsx)(c.DK, { children: d.NW.string(d.t.ghBJz8) })
                ]
            });
    }
};
