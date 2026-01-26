n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(342494),
    a = n(732955),
    s = n(397927),
    o = n(976860),
    c = n(84483),
    u = n(652215),
    d = n(49999),
    p = n(49370),
    h = n(985018),
    g = n(880055);

function f(e) {
    let { targetElementRef: t, dismissPopover: n, children: f } = e,
        { orbsRewardAmount: m } = (0, c.uX)("PremiumOrbRewardsOrbDropPopover"),
        A = i.useCallback(() => {
            n(d.i.TAKE_ACTION), (0, o.pX)("".concat(u.BVt.NITRO_HOME, "?section=orbs"));
        }, [n]),
        _ = (0, r.jsx)(l.AM, {
            targetElementRef: t,
            onRequestClose: () => n(d.i.USER_DISMISS),
            graphic: {
                type: "image",
                src: g.A,
            },
            badge: {
                type: "beta",
                variant: "expressive",
            },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: {
                align: "start",
            },
            size: "md",
            title: h.intl.string(p.default["78+gLr"]),
            body: h.intl.formatToPlainString(p.default.Ry1TXC, {
                orbsCount: m,
            }),
            actions: [
                {
                    text: h.intl.string(h.t.RzWDqY),
                    icon: a.tvc,
                    onClick: A,
                },
            ],
            gradientColor: {
                type: "custom",
                start: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
                end: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_END,
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                children: f,
            }),
            _,
        ],
    });
}
