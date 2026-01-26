n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(64700),
    l = n(362599),
    a = n(342494),
    s = n(732955),
    o = n(397927),
    c = n(976860),
    u = n(652215),
    d = n(49999),
    p = n(49370),
    h = n(985018);

function g(e) {
    let { targetElementRef: t, dismissPopover: n, lastGrantedRewardAmount: g, children: f } = e,
        m = i.useCallback(() => {
            n(d.i.TAKE_ACTION), (0, c.pX)("".concat(u.BVt.NITRO_HOME, "?section=orbs"));
        }, [n]),
        A = (0, r.jsx)(a.AM, {
            targetElementRef: t,
            onRequestClose: () => n(d.i.USER_DISMISS),
            graphic: {
                type: "rive",
                rive: l.Z,
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
                orbsCount: g,
            }),
            actions: [
                {
                    text: h.intl.string(h.t.RzWDqY),
                    icon: s.tvc,
                    onClick: m,
                },
            ],
            gradientColor: {
                type: "custom",
                start: o.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
                end: o.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_END,
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
