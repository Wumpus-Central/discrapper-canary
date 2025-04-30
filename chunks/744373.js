t.d(n, { default: () => s });
var a = t(200651);
t(192379);
var o = t(399606),
    i = t(478923),
    r = t(594174),
    c = t(626135),
    u = t(981631);
function s(e) {
    let { transitionState: n, onClose: t, userId: s, onCancel: d, confirmBlock: f } = e,
        l = (0, o.e7)([r.default], () => r.default.getUser(s));
    if (null != l)
        return (0, a.jsx)(i.default, {
            transitionState: n,
            user: l,
            onBlock: () => {
                f(), c.default.track(u.rMx.BLOCK_USER_CONFIRMED);
            },
            onClose: t,
            onCancel: d
        });
}
