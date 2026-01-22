n.d(t, { A: () => A });
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
    f = n(985018),
    h = n(880055);
function A(e) {
    let { targetElementRef: t, dismissPopover: n, children: A } = e,
        { orbsRewardAmount: g } = (0, c.uX)("PremiumOrbRewardsOrbDropPopover"),
        m = i.useCallback(() => {
            n(d.i.TAKE_ACTION), (0, o.pX)(u.BVt.APPLICATION_STORE);
        }, [n]),
        b = (0, r.jsx)(l.AM, {
            targetElementRef: t,
            onRequestClose: () => n(d.i.USER_DISMISS),
            graphic: {
                type: "image",
                src: h.A,
            },
            badge: {
                type: "beta",
                variant: "expressive",
            },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: f.intl.string(p.default["78+gLr"]),
            body: f.intl.formatToPlainString(p.default.Ry1TXC, { orbsCount: g }),
            actions: [
                {
                    text: f.intl.string(f.t.RzWDqY),
                    icon: a.tvc,
                    onClick: m,
                },
            ],
            gradientColor: {
                type: "custom",
                start: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
                end: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_END,
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", { children: A }), b],
    });
}
