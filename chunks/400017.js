t.d(n, { default: () => C });
var c = t(477900),
    o = t(980707),
    s = t(477782),
    e = t(691540),
    r = t(857250),
    a = t(97483),
    l = t(173936),
    d = t(442433),
    k = t(957565),
    p = t(375708);
function C(i) {
    let { link: n } = i;
    return (0, c.jsx)(o.W, {
        navId: "gif-picker",
        onClose: d.Z_,
        "aria-label": p.intl.string(p.t.XoasSC),
        onSelect: void 0,
        children: (0, c.jsx)(s.Dr, {
            id: "gif-picker-copy-link",
            label: p.intl.string(p.t.WqhZss),
            action: () => {
                (0, k.C)(n, () => {
                    (0, e.P0)((0, r.o)(p.intl.string(p.t["+5kSoW"]), a.Ck.SUCCESS));
                });
            },
            icon: l.LinkIcon,
            leadingAccessory: { type: "icon", icon: l.LinkIcon },
        }),
    });
}
