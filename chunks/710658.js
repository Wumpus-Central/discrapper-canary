n.d(i, { default: () => p });
var r = n(951288),
    a = n(667202),
    s = n(37234),
    e = n(635552),
    l = n(300284),
    o = n(388032),
    c = n(117771);
let p = (t) => {
    let { transitionState: i, onClose: n, product: p } = t,
        u = (0, l.Z)(),
        { handleUseNow: d, isApplying: g } = (0, e.W)({
            product: p,
            onSuccess: n,
            onError: n,
        });
    return (0, r.jsx)(a.I, {
        gradientColor: "nitro-pink",
        title: o.intl.string(o.t.qYWlf3),
        subtitle: o.intl.string(o.t.x01cl5),
        actions: [
            {
                text: o.intl.string(o.t["2p2aY2"]),
                variant: "secondary",
                onClick: () => {
                    n(), (0, s.xf)(), null == u || u();
                },
            },
            {
                text: o.intl.string(o.t.MAS7uL),
                variant: "primary",
                onClick: d,
                loading: g,
            },
        ],
        graphic: {
            type: "image",
            src: c.Z,
        },
        transitionState: i,
        onClose: n,
    });
};
