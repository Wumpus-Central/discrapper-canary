var a = n(477900),
    e = n(582128),
    s = n(732159),
    l = n(317634),
    r = n(135294),
    u = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { transitionState: i, onClose: n, guildId: c } = t,
                o = e.useCallback(() => (0, l.s)(c, { enabled: !1 }), [c]);
            return (0, a.jsx)(s.u, {
                transitionState: i,
                onClose: n,
                title: u.intl.string(r.default.uG3Bwy),
                subtitle: u.intl.string(r.default.HyZ4FE),
                confirmText: u.intl.string(u.t.R9GHya),
                cancelText: u.intl.string(u.t["ETE/oC"]),
                variant: "critical",
                onConfirm: o,
            });
        },
    },
);
