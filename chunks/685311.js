n.d(t, { Z: () => p }), n(301563), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(536285),
    s = n(857458),
    c = n(388905),
    u = n(703656),
    d = n(388032),
    h = n(455812);
let p = function (e) {
    let { match: t, location: n, attemptDeepLink: o } = e,
        [p, _] = i.useState(0);
    i.useEffect(() => {
        l.default.once('connected', () => {
            _(1);
        }),
            l.default.once('disconnected', () => {
                (0, u.uL)((0, s.M)());
            }),
            l.default.connect();
    }, []),
        i.useEffect(() => {
            if (0 !== p) return;
            let e = setTimeout(() => (0, u.uL)((0, s.M)()), 3000);
            return () => clearTimeout(e);
        }, [p]);
    let g = i.useCallback(
        async (e, t) => {
            try {
                _(2), await o(e, t), _(3);
            } catch (e) {
                console.error('Error opening deeplink', e);
            }
        },
        [o]
    );
    if ((0, u.DB)()) return null;
    switch (p) {
        case 1:
            return (0, r.jsxs)(c.ZP, {
                children: [
                    (0, r.jsx)(c.Dx, {
                        className: h.marginBottom8,
                        children: d.NW.string(d.t.qllnGh)
                    }),
                    (0, r.jsx)(c.DK, { children: d.NW.string(d.t.SXCxyc) }),
                    (0, r.jsx)(c.zx, {
                        className: h.marginTop40,
                        onClick: () => g(t, n),
                        children: d.NW.string(d.t.UQvCf3)
                    }),
                    (0, r.jsx)(c.zx, {
                        className: a()(h.marginTop8, h.marginCenterHorz),
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
                        className: h.marginBottom8,
                        children: d.NW.string(d.t.csrAMD)
                    }),
                    (0, r.jsx)(c.DK, { children: d.NW.string(d.t.ghBJz8) })
                ]
            });
    }
};
