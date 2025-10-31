n.d(t, {
    F: () => h,
    a: () => g,
}),
    n(388685);
var r = n(951288),
    i = n(704215),
    l = n(28664),
    a = n(481060),
    s = n(774078),
    o = n(266454),
    c = n(533246),
    u = n(197155),
    d = n(476398);
let p = (e) => {
        let { digit: t } = e;
        return (0, r.jsx)("div", {
            className: u.digit,
            children: (0, r.jsx)(a.Text, {
                variant: "text-xs/semibold",
                color: "text-primary",
                children: t,
            }),
        });
    },
    f = (e) => {
        let { value: t } = e,
            n = t.toString().padStart(2, "0"),
            [i, l] = [n[0], n[1]];
        return (0, r.jsxs)("div", {
            className: u.timeUnit,
            children: [(0, r.jsx)(p, { digit: i }), (0, r.jsx)(p, { digit: l })],
        });
    },
    m = (e) => {
        let { expiresAt: t, tooltipText: n } = e,
            { days: c, hours: p, minutes: m, seconds: h } = (0, s.Z)(Date.parse(t), 1000),
            g = c > 0 ? [c, p, m] : p > 0 ? [p, m, h] : [m, h],
            _ = (0, o.zu)(i.z.NITRO_TAB_BADGE_OFFER_REMINDER);
        return (0, r.jsx)(l.u, {
            text: n,
            position: "right",
            children: (0, r.jsxs)("div", {
                children: [
                    !_ &&
                        (0, r.jsx)("img", {
                            src: d,
                            alt: "",
                            className: u.gradientCircles,
                        }),
                    (0, r.jsx)(a.Kqy, {
                        gap: 0,
                        direction: "horizontal",
                        className: u.countdownContainer,
                        children: g.map((e, t) =>
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(f, { value: e }, t),
                                    t !== g.length - 1 &&
                                        (0, r.jsx)("div", {
                                            className: u.delinator,
                                            children: ":",
                                        }),
                                ],
                            }),
                        ),
                    }),
                ],
            }),
        });
    },
    h = (e) => {
        let { trialOffer: t } = e,
            n = (0, c.YF)(t);
        return (0, r.jsx)(m, {
            expiresAt: t.expires_at,
            tooltipText: n,
        });
    },
    g = (e) => {
        let { discountOffer: t } = e,
            n = (0, c.h$)(t);
        return (0, r.jsx)(m, {
            expiresAt: t.expires_at,
            tooltipText: n,
        });
    };
