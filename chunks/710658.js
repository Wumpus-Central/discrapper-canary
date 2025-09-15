a.d(n, { default: () => u });
var i = a(951288),
    e = a(667202),
    c = a(635552),
    s = a(300284),
    o = a(342386),
    r = a(526167),
    d = a(388032),
    l = a(461999),
    p = a(793167);
let u = (t) => {
    let { transitionState: n, onClose: a, product: u } = t,
        b = (0, s.Z)(),
        { handleUseNow: f, isApplying: h } = (0, c.W)({
            product: u,
            onSuccess: a,
            onError: a,
        });
    return (0, i.jsx)(e.I, {
        gradientColor: "nitro-pink",
        title: d.intl.string(d.t.qYWlf3),
        subtitle: d.intl.string(d.t.x01cl5),
        actions: [
            {
                text: d.intl.string(d.t["2p2aY2"]),
                variant: "secondary",
                onClick: () => {
                    a(), (0, o.default)(), null == b || b();
                },
            },
            {
                text: d.intl.string(d.t.MAS7uL),
                variant: "primary",
                onClick: f,
                loading: h,
            },
        ],
        graphic: {
            type: "video",
            src: (0, r.rO)() ? l.Z : p.Z,
            loop: !0,
        },
        transitionState: n,
        onClose: a,
    });
};
