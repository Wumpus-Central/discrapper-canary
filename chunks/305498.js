n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(64700),
    l = n(342494),
    a = n(732955),
    s = n(397927),
    o = n(976860),
    c = n(652215),
    u = n(49999),
    d = n(49370),
    p = n(985018),
    h = n(880055);

function g(e) {
    let { targetElementRef: t, dismissPopover: n, lastGrantedRewardAmount: g, children: f } = e,
        m = i.useCallback(() => {
            n(u.i.TAKE_ACTION), (0, o.pX)("".concat(c.BVt.NITRO_HOME, "?section=orbs"));
        }, [n]),
        A = (0, r.jsx)(l.AM, {
            targetElementRef: t,
            onRequestClose: () => n(u.i.USER_DISMISS),
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
            caretConfig: {
                align: "start",
            },
            size: "md",
            title: p.intl.string(d.default["78+gLr"]),
            body: p.intl.formatToPlainString(d.default.Ry1TXC, {
                orbsCount: g,
            }),
            actions: [
                {
                    text: p.intl.string(p.t.RzWDqY),
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
        children: [
            (0, r.jsx)("div", {
                children: f,
            }),
            A,
        ],
    });
}
