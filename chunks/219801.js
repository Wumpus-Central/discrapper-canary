a.d(e, { default: () => d });
var n = a(627968);
a(64700);
var u = a(702841),
    s = a(262797),
    l = a(287809),
    r = a(174459),
    c = a(652215);
function d(t) {
    let { transitionState: e, onClose: a, userId: d, onCancel: i, confirmBlock: o } = t,
        f = (0, u.bG)([l.default], () => l.default.getUser(d));
    if (null != f)
        return (0, n.jsx)(s.default, {
            transitionState: e,
            user: f,
            onBlock: function () {
                o(), r.default.track(c.HAw.BLOCK_USER_CONFIRMED);
            },
            onClose: a,
            onCancel: i,
        });
}
