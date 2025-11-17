e.d(a, { default: () => b });
var s = e(54381),
    l = e(473749),
    n = e(793030),
    i = e(399606),
    o = e(194359),
    r = e(726521),
    c = e(681678),
    u = e(594174),
    k = e(51144),
    d = e(991981),
    p = e(134612),
    C = e(388032);
function b(t) {
    let { userId: a, channelId: e, transitionState: b, onBlock: h, onBlockAndReport: f, onClose: g, onCancel: m } = t,
        v = (0, d.q)(e),
        w = l.useCallback(() => {
            o.Z.blockUser(a, { location: p.zr }).then(() => {
                c.Z.showBlockSuccessToast(a, e);
            });
        }, [a, e]),
        x = l.useCallback(() => {
            w(), h(), g();
        }, [w, h, g]),
        z = l.useCallback(() => {
            w(), (0, r.wk)(v), f(), g();
        }, [v, w, f, g]),
        P = l.useCallback(() => (null == m || m(), null == g || g(), Promise.resolve()), [m, g]),
        S = (0, i.e7)([u.default], () => u.default.getUser(a)),
        U = k.ZP.useName(S);
    return (0, s.jsx)(n.Modal, {
        transitionState: b,
        onClose: P,
        title: C.intl.formatToPlainString(C.t.x5pOn9, { name: U }),
        subtitle: C.intl.string(C.t.aedkso),
        actions: [
            {
                text: C.intl.string(C.t["3pzujz"]),
                onClick: z,
                variant: "secondary",
            },
            {
                text: C.intl.string(C.t.MzsUsp),
                onClick: x,
                variant: "primary",
            },
        ],
    });
}
