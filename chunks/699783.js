a.d(e, { default: () => g });
var s = a(54381),
    n = a(473749),
    l = a(793030),
    i = a(399606),
    r = a(194359),
    o = a(726521),
    u = a(681678),
    c = a(594174),
    k = a(51144),
    d = a(991981),
    p = a(134612),
    C = a(388032);
function g(t) {
    let { userId: e, channelId: a, transitionState: g, onBlock: b, onBlockAndReport: f, onClose: h, onCancel: v } = t,
        Z = (0, d.q)(a),
        m = n.useCallback(() => {
            r.Z.blockUser(e, { location: p.zr }).then(() => {
                u.Z.showBlockSuccessToast(e, a);
            });
        }, [e, a]),
        w = n.useCallback(() => {
            m(), b(), h();
        }, [m, b, h]),
        x = n.useCallback(() => {
            m(), (0, o.wk)(Z), f(), h();
        }, [Z, m, f, h]),
        z = n.useCallback(() => (null == v || v(), null == h || h(), Promise.resolve()), [v, h]),
        M = (0, i.e7)([c.default], () => c.default.getUser(e)),
        U = k.ZP.useName(M);
    return (0, s.jsx)(l.Modal, {
        transitionState: g,
        onClose: z,
        title: C.intl.formatToPlainString(C.t.x5pOn9, { name: U }),
        subtitle: C.intl.string(C.t.aedkso),
        actions: [
            {
                text: C.intl.string(C.t["3pzujz"]),
                onClick: x,
                variant: "secondary",
            },
            {
                text: C.intl.string(C.t.MzsUsp),
                onClick: w,
                variant: "primary",
            },
        ],
    });
}
