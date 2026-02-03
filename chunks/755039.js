n.d(t, {
    A: () => s,
});
var a = n(627968);
n(64700);
var l = n(92674),
    r = n(397927),
    i = n(717283);

function s(e) {
    let { text: t } = e,
        n = (0, r.pnh)(t, {
            from: {
                opacity: 0,
                transform: "translate3d(0, 107%, 0)",
            },
            enter: {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
            config: {
                duration: 220,
                clamp: !0,
            },
        });
    return (0, a.jsx)("div", {
        className: i.k,
        children: n((e, t) =>
            (0, a.jsx)(l.animated.div, {
                className: i.H,
                style: e,
                children: t,
            }),
        ),
    });
}
