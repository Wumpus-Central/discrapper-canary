n.d(i, { default: () => c });
var e = n(627968);
n(64700);
var s = n(417597),
    r = n(994288),
    l = n(287809),
    a = n(954571),
    o = n(652215);
function c(t) {
    let { transitionState: i, onClose: n, userId: c, onCancel: d, confirmBlock: u } = t,
        x = (0, s.bG)([l.default], () => l.default.getUser(c));
    if (null != x)
        return (0, e.jsx)(r.default, {
            transitionState: i,
            user: x,
            onBlock: () => {
                u(), a.default.track(o.HAw.BLOCK_USER_CONFIRMED);
            },
            onClose: n,
            onCancel: d,
        });
}
