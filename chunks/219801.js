a.d(t, { default: () => n });
var c = a(627968);
a(64700);
var d = a(417597),
    f = a(994288),
    s = a(287809),
    u = a(954571),
    l = a(652215);
function n(e) {
    let { transitionState: t, onClose: a, userId: n, onCancel: r, confirmBlock: o } = e,
        i = (0, d.bG)([s.default], () => s.default.getUser(n));
    if (null != i)
        return (0, c.jsx)(f.default, {
            transitionState: t,
            user: i,
            onBlock: () => {
                o(), u.default.track(l.HAw.BLOCK_USER_CONFIRMED);
            },
            onClose: a,
            onCancel: r,
        });
}
