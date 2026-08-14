t.d(n, { default: () => C });
var s = t(477900),
    c = t(980707),
    e = t(477782),
    o = t(691540),
    r = t(857250),
    a = t(97483),
    l = t(173936),
    d = t(442433),
    p = t(957565),
    k = t(375708);
function C(i) {
    let { link: n } = i;
    return (0, s.jsx)(c.W, {
        navId: "gif-picker",
        onClose: d.Z_,
        "aria-label": k.intl.string(k.t.XoasSC),
        onSelect: void 0,
        children: (0, s.jsx)(e.Dr, {
            id: "gif-picker-copy-link",
            label: k.intl.string(k.t.WqhZss),
            action: () => {
                (0, p.C)(n, () => {
                    (0, o.P0)((0, r.o)(k.intl.string(k.t["+5kSoW"]), a.Ck.SUCCESS));
                });
            },
            icon: l.q,
            leadingAccessory: { type: "icon", icon: l.q },
        }),
    });
}
