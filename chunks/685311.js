n.d(t, { Z: () => g }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(536285),
    c = n(857458),
    u = n(388905),
    d = n(703656),
    h = n(388032),
    f = n(478411);
let g = function (e) {
    let { match: t, location: n, attemptDeepLink: s } = e,
        [g, m] = i.useState(0);
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
            if (0 !== g) return;
            let e = setTimeout(() => (0, d.uL)((0, c.M)()), 3000);
            return () => clearTimeout(e);
        }, [g]);
    let p = i.useCallback(
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
    switch (g) {
        case 1:
            return (0, r.jsxs)(u.ZP, {
                children: [
                    (0, r.jsx)(u.Dx, {
                        className: f.marginBottom8,
                        children: h.intl.string(h.t.qllnGm),
                    }),
                    (0, r.jsx)(u.DK, { children: h.intl.string(h.t.SXCxye) }),
                    (0, r.jsx)("div", {
                        className: f.marginTop40,
                        children: (0, r.jsx)(l.Button, {
                            text: h.intl.string(h.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => p(t, n),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: a()(f.marginTop8, f.marginCenterHorz),
                        children: (0, r.jsx)(l.Avr, {
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
                        className: f.marginBottom8,
                        children: h.intl.string(h.t.csrAMJ),
                    }),
                    (0, r.jsx)(u.DK, { children: h.intl.string(h.t.ghBJz9) }),
                ],
            });
    }
};
