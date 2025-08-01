e.d(a, { default: () => b });
var s = e(255367),
    l = e(73800),
    n = e(399606),
    i = e(82659),
    r = e(194359),
    o = e(726521),
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
            r.Z.blockUser(a, { location: p.zr }).then(() => {
                c.Z.showBlockSuccessToast(a, e);
            });
        }, [a, e]),
        x = l.useCallback(() => {
            (w(), h(), g());
        }, [w, h, g]),
        z = l.useCallback(() => {
            (w(), (0, o.wk)(v), f(), g());
        }, [v, w, f, g]),
        P = l.useCallback(() => (null == m || m(), null == g || g(), Promise.resolve()), [m, g]),
        S = (0, n.e7)([u.default], () => u.default.getUser(a)),
        U = k.ZP.useName(S);
    return (0, s.jsx)(i.Modal, {
        transitionState: b,
        onClose: P,
        title: C.intl.formatToPlainString(C.t.x5pOn5, { name: U }),
        subtitle: C.intl.string(C.t.aedksr),
        actions: [
            {
                text: C.intl.string(C.t['3pzuj4']),
                onClick: z,
                variant: 'secondary'
            },
            {
                text: C.intl.string(C.t.MzsUsr),
                onClick: x,
                variant: 'primary'
            }
        ]
    });
}
