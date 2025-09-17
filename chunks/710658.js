a.d(e, { default: () => k });
var n = a(951288),
    i = a(647438),
    c = a(667202),
    o = a(635552),
    r = a(300284),
    s = a(342386),
    d = a(626135),
    l = a(526167),
    p = a(981631),
    u = a(388032),
    b = a(461999),
    f = a(793167);
let k = (t) => {
    let { transitionState: e, onClose: a, product: k } = t;
    i.useEffect(() => {
        d.default.track(p.rMx.OPEN_MODAL, { type: "September Marketing Moment 2025 Claim Modal" });
    }, []);
    let g = (0, r.Z)(),
        { handleUseNow: h, isApplying: m } = (0, o.W)({
            product: k,
            onSuccess: a,
            onError: a,
        });
    return (0, n.jsx)(c.I, {
        gradientColor: "nitro-pink",
        title: u.intl.string(u.t.qYWlf3),
        subtitle: u.intl.string(u.t.x01cl5),
        actions: [
            {
                text: u.intl.string(u.t["2p2aY2"]),
                variant: "secondary",
                onClick: () => {
                    a(), (0, s.default)(), null == g || g();
                },
            },
            {
                text: u.intl.string(u.t.MAS7uL),
                variant: "primary",
                onClick: h,
                loading: m,
            },
        ],
        graphic: {
            type: "video",
            src: (0, l.rO)() ? b.Z : f.Z,
            loop: !0,
        },
        transitionState: e,
        onClose: a,
    });
};
