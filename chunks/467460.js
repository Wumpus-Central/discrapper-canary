n.d(t, {
    F: () => m,
    a: () => b,
}),
    n(388685);
var r = n(951288),
    i = n(704215),
    l = n(28664),
    a = n(481060),
    o = n(774078),
    s = n(266454),
    c = n(535278),
    u = n(246965),
    d = n(197155),
    p = n(476398);
let f = (e) => {
        let { digit: t } = e;
        return (0, r.jsx)("div", {
            className: d.digit,
            children: (0, r.jsx)(a.Text, {
                variant: "text-xxs/semibold",
                color: "text-primary",
                children: t,
            }),
        });
    },
    h = (e) => {
        let { value: t } = e,
            n = t.toString().padStart(2, "0"),
            [i, l] = [n[0], n[1]];
        return (0, r.jsxs)("div", {
            className: d.timeUnit,
            children: [(0, r.jsx)(f, { digit: i }), (0, r.jsx)(f, { digit: l })],
        });
    },
    g = (e) => {
        let { countdown: t, tooltipText: n } = e,
            { days: o, hours: c, minutes: u, seconds: f } = t,
            g = o > 0 ? [o, c, u] : c > 0 ? [c, u, f] : [u, f],
            m = (0, s.zu)(i.z.NITRO_TAB_BADGE_COUNTDOWN);
        return (0, r.jsx)(l.u, {
            text: n,
            position: "right",
            children: (0, r.jsxs)(a.P3F, {
                onClick: () => (0, s.Q3)(i.z.NITRO_TAB_BADGE_COUNTDOWN),
                children: [
                    !m &&
                        (0, r.jsx)("img", {
                            src: p,
                            alt: "",
                            className: d.gradientCircles,
                        }),
                    (0, r.jsx)(a.Kqy, {
                        gap: 0,
                        direction: "horizontal",
                        className: d.countdownContainer,
                        children: g.map((e, t) =>
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(h, { value: e }, t),
                                    t !== g.length - 1 &&
                                        (0, r.jsx)("div", {
                                            className: d.delinator,
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
    m = (e) => {
        let { trialOffer: t, subscriptionTier: n } = e,
            i = new Date(t.expires_at),
            l = (0, o.Z)(i, 1000);
        return null == l
            ? null
            : (0, r.jsx)(g, {
                  countdown: l,
                  tooltipText: (0, u.A)(n, l),
              });
    },
    b = (e) => {
        let { discountOffer: t } = e,
            n = new Date(t.expires_at),
            i = (0, o.Z)(n, 1000);
        return null == i
            ? null
            : (0, r.jsx)(g, {
                  countdown: i,
                  tooltipText: (0, c.A)(i, Number(t.discount.amount)),
              });
    };
