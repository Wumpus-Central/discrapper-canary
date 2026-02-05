s.d(e, { default: () => C });
var a = s(627968),
    n = s(64700),
    l = s(158954),
    i = s(417597),
    r = s(49229),
    o = s(928658),
    c = s(662502),
    u = s(287809),
    k = s(427262),
    d = s(192311),
    p = s(327337),
    b = s(985018);
function C(t) {
    let { userId: e, channelId: s, transitionState: C, onBlock: g, onBlockAndReport: h, onClose: A, onCancel: f } = t,
        m = (0, d.W)(s),
        v = n.useCallback(() => {
            r.A.blockUser(e, { location: p.Rx }).then(() => {
                c.A.showBlockSuccessToast(e, s);
            });
        }, [e, s]),
        x = n.useCallback(() => {
            v(), g(), A();
        }, [v, g, A]),
        M = n.useCallback(() => {
            v(), (0, o.jJ)(m), h(), A();
        }, [m, v, h, A]),
        U = n.useCallback(() => (f?.(), A?.(), Promise.resolve()), [f, A]),
        j = (0, i.bG)([u.default], () => u.default.getUser(e)),
        w = k.Ay.useName(j);
    return (0, a.jsx)(l.Modal, {
        transitionState: C,
        onClose: U,
        title: b.intl.formatToPlainString(b.t.x5pOn9, { name: w }),
        subtitle: b.intl.string(b.t.aedkso),
        actions: [
            { text: b.intl.string(b.t["3pzujz"]), onClick: M, variant: "secondary" },
            { text: b.intl.string(b.t.MzsUsp), onClick: x, variant: "primary" },
        ],
    });
}
