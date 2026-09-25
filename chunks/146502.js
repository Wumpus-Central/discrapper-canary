i.d(n, { default: () => l });
var r = i(477900);
i(582128);
var s = i(732159),
    u = i(364806),
    e = i(375708);
function l(t) {
    let { ruleName: n, onConfirm: i, ...l } = t,
        { setEditingRule: c } = (0, u.U)(),
        f = n ?? e.intl.string(e.t.ffR2cM);
    return (0, r.jsx)(s.u, {
        ...l,
        title: e.intl.string(e.t.kknTmH),
        subtitle: e.intl.format(e.t["ff/gx7"], { ruleName: f }),
        confirmText: e.intl.string(e.t["cY+Oob"]),
        onConfirm: function () {
            (c(null), i?.());
        },
    });
}
