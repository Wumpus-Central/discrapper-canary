n.d(t, { Z: () => p }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(536285),
    c = n(857458),
    u = n(388905),
    d = n(703656),
    h = n(388032),
    g = n(197571);
let p = function (e) {
    let { match: t, location: n, attemptDeepLink: s } = e,
        [p, m] = i.useState(0);
    i.useEffect(() => {
        o.default.once("connected", () => {
            m(1);
        }),
            o.default.once("disconnected", () => {
                (0, d.uL)((0, c.M)());
            }),
            o.default.connect();
    }, []),
        i.useEffect(() => {
            if (0 !== p) return;
            let e = setTimeout(() => (0, d.uL)((0, c.M)()), 3000);
            return () => clearTimeout(e);
        }, [p]);
    let f = i.useCallback(
        async (e, t) => {
            try {
                m(2), await s(e, t), m(3);
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [s],
    );
    if ((0, d.DB)()) return null;
    switch (p) {
        case 1:
            return (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: g.marginBottom8,
                        children: h.intl.string(h.t.qllnGm),
                    }),
                    (0, r.jsx)(u.DK, { children: h.intl.string(h.t.SXCxye) }),
                    (0, r.jsx)("div", {
                        className: g.marginTop40,
                        children: (0, r.jsx)(a.Button, {
                            text: h.intl.string(h.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => f(t, n),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: l()(g.marginTop8, g.marginCenterHorz),
                        children: (0, r.jsx)(a.Avr, {
                            text: h.intl.string(h.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, d.uL)((0, c.M)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, r.jsxs)(u.ZP, {
                children: [(0, r.jsx)(u.Dx, { children: h.intl.string(h.t["Z+hCVU"]) }), (0, r.jsx)(u.Hh, {})],
            });
        case 3:
            return (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: g.marginBottom8,
                        children: h.intl.string(h.t.csrAMJ),
                    }),
                    (0, r.jsx)(u.DK, { children: h.intl.string(h.t.ghBJz9) }),
                ],
            });
    }
};
