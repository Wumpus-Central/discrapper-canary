a.d(e, { default: () => C });
var s = a(627968),
    l = a(64700),
    n = a(158954),
    r = a(417597),
    i = a(49229),
    o = a(928658),
    u = a(662502),
    c = a(287809),
    k = a(427262),
    d = a(192311),
    p = a(327337),
    b = a(985018);
function C(t) {
    let { userId: e, channelId: a, transitionState: C, onBlock: g, onBlockAndReport: h, onClose: v, onCancel: A } = t,
        f = (0, d.W)(a),
        m = l.useCallback(() => {
            i.A.blockUser(e, { location: p.Rx }).then(() => {
                u.A.showBlockSuccessToast(e, a);
            });
        }, [e, a]),
        x = l.useCallback(() => {
            m(), g(), v();
        }, [m, g, v]),
        M = l.useCallback(() => {
            m(), (0, o.jJ)(f), h(), v();
        }, [f, m, h, v]),
        U = l.useCallback(() => (null == A || A(), null == v || v(), Promise.resolve()), [A, v]),
        j = (0, r.bG)([c.default], () => c.default.getUser(e)),
        w = k.Ay.useName(j);
    return (0, s.jsx)(n.Modal, {
        transitionState: C,
        onClose: U,
        title: b.intl.formatToPlainString(b.t.x5pOn9, { name: w }),
        subtitle: b.intl.string(b.t.aedkso),
        actions: [
            {
                text: b.intl.string(b.t["3pzujz"]),
                onClick: M,
                variant: "secondary",
            },
            {
                text: b.intl.string(b.t.MzsUsp),
                onClick: x,
                variant: "primary",
            },
        ],
    });
}
