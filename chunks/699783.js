a.d(e, { default: () => g });
var s = a(255367),
    n = a(73800),
    l = a(399606),
    r = a(82659),
    i = a(194359),
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
            i.Z.blockUser(e, { location: p.zr }).then(() => {
                u.Z.showBlockSuccessToast(e, a);
            });
        }, [e, a]),
        w = n.useCallback(() => {
            (m(), b(), h());
        }, [m, b, h]),
        x = n.useCallback(() => {
            (m(), (0, o.wk)(Z), f(), h());
        }, [Z, m, f, h]),
        M = n.useCallback(() => (null == v || v(), null == h || h(), Promise.resolve()), [v, h]),
        U = (0, l.e7)([c.default], () => c.default.getUser(e)),
        z = k.ZP.useName(U);
    return (0, s.jsx)(r.Modal, {
        transitionState: g,
        onClose: M,
        title: C.intl.formatToPlainString(C.t.x5pOn5, { name: z }),
        subtitle: C.intl.string(C.t.aedksr),
        actions: [
            {
                text: C.intl.string(C.t['3pzuj4']),
                onClick: x,
                variant: 'secondary'
            },
            {
                text: C.intl.string(C.t.MzsUsr),
                onClick: w,
                variant: 'primary'
            }
        ]
    });
}
