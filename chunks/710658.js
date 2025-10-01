n.d(e, { default: () => g });
var i = n(951288),
    r = n(647438),
    l = n(667202),
    s = n(635552),
    a = n(300284),
    o = n(342386),
    u = n(626135),
    d = n(526167),
    c = n(981631),
    p = n(388032),
    f = n(483187),
    y = n(811086);
let g = (t) => {
    let { transitionState: e, onClose: n, product: g } = t;
    r.useEffect(() => {
        u.default.track(c.rMx.OPEN_MODAL, { type: "September Marketing Moment 2025 Claim Modal" });
    }, []);
    let b = (0, a.Z)(),
        { handleUseNow: m, isApplying: h } = (0, s.W)({
            product: g,
            onSuccess: n,
            onError: n,
        });
    return (0, i.jsx)(l.ExpressiveModal, {
        gradientColor: "nitro-pink",
        title: p.intl.string(p.t.qYWlf3),
        subtitle: p.intl.string(p.t.x01cl5),
        actions: [
            {
                text: p.intl.string(p.t["2p2aY2"]),
                variant: "secondary",
                onClick: () => {
                    n(), (0, o.default)(), null == b || b();
                },
            },
            {
                text: p.intl.string(p.t.MAS7uL),
                variant: "primary",
                onClick: m,
                loading: h,
            },
        ],
        graphic: {
            type: "video",
            src: (0, d.rO)() ? f.Z : y.Z,
            loop: !0,
        },
        transitionState: e,
        onClose: n,
    });
};
