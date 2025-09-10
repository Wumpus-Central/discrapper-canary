n.d(i, { default: () => p });
var r = n(951288),
    a = n(667202),
    s = n(635552),
    e = n(300284),
    l = n(342386),
    o = n(388032),
    c = n(117771);
let p = (t) => {
    let { transitionState: i, onClose: n, product: p } = t,
        u = (0, e.Z)(),
        { handleUseNow: d, isApplying: g } = (0, s.W)({
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
                    n(), (0, l.Z)(), null == u || u();
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
