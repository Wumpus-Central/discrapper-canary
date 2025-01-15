n(47120);
var i,
    r,
    s = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    c = n(536285),
    d = n(857458),
    u = n(388905),
    h = n(703656),
    g = n(388032),
    m = n(275477);
((r = i || (i = {}))[(r.INITIAL = 0)] = 'INITIAL'), (r[(r.RPC_CONNECTED = 1)] = 'RPC_CONNECTED'), (r[(r.APP_OPENING = 2)] = 'APP_OPENING'), (r[(r.APP_OPENED = 3)] = 'APP_OPENED');
t.Z = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [r, o] = l.useState(0);
    l.useEffect(() => {
        c.default.once('connected', () => {
            o(1);
        }),
            c.default.once('disconnected', () => {
                (0, h.uL)((0, d.M)());
            }),
            c.default.connect();
    }, []),
        l.useEffect(() => {
            if (0 !== r) return;
            let e = setTimeout(() => (0, h.uL)((0, d.M)()), 3000);
            return () => clearTimeout(e);
        }, [r]);
    let f = l.useCallback(
        async (e, t) => {
            try {
                o(2), await i(e, t), o(3);
            } catch (e) {
                console.error('Error opening deeplink', e);
            }
        },
        [i]
    );
    if ((0, h.DB)()) return null;
    switch (r) {
        case 1:
            return (0, s.jsxs)(u.ZP, {
                children: [
                    (0, s.jsx)(u.Dx, {
                        className: m.marginBottom8,
                        children: g.intl.string(g.t.qllnGh)
                    }),
                    (0, s.jsx)(u.DK, { children: g.intl.string(g.t.SXCxyc) }),
                    (0, s.jsx)(u.zx, {
                        className: m.marginTop40,
                        onClick: () => f(t, n),
                        children: g.intl.string(g.t.UQvCf3)
                    }),
                    (0, s.jsx)(u.zx, {
                        className: a()(m.marginTop8, m.marginCenterHorz),
                        color: u.zx.Colors.LINK,
                        look: u.zx.Looks.LINK,
                        onClick: () => (0, h.uL)((0, d.M)()),
                        children: g.intl.string(g.t['2ixEBg'])
                    })
                ]
            });
        case 0:
        case 2:
            return (0, s.jsxs)(u.ZP, {
                children: [(0, s.jsx)(u.Dx, { children: g.intl.string(g.t['Z+hCVV']) }), (0, s.jsx)(u.Hh, {})]
            });
        case 3:
            return (0, s.jsxs)(u.ZP, {
                children: [
                    (0, s.jsx)(u.Dx, {
                        className: m.marginBottom8,
                        children: g.intl.string(g.t.csrAMD)
                    }),
                    (0, s.jsx)(u.DK, { children: g.intl.string(g.t.ghBJz8) })
                ]
            });
    }
};
