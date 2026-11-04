var n = a(477900);
a(582128);
var u = a(164636),
    s = a(796788),
    l = a(287809),
    r = a(129230),
    c = a(652215);
a.d(
    e,
    {},
    {
        default: function (t) {
            let { transitionState: e, onClose: a, userId: d, onCancel: i, confirmBlock: o } = t,
                f = (0, u.bG)([l.default], () => l.default.getUser(d));
            if (null != f)
                return (0, n.jsx)(s.default, {
                    transitionState: e,
                    user: f,
                    onBlock: function () {
                        (o(), r.default.track(c.HAw.BLOCK_USER_CONFIRMED));
                    },
                    onClose: a,
                    onCancel: i,
                });
        },
    },
);
