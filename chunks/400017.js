t.d(n, { default: () => k });
var c = t(477900),
    o = t(980707),
    s = t(477782),
    e = t(376357),
    r = t(173936),
    a = t(442433),
    l = t(957565),
    d = t(660183);
function k(i) {
    let { link: n } = i;
    return (0, c.jsx)(o.W, {
        navId: "gif-picker",
        onClose: a.Z_,
        "aria-label": d.intl.string(d.t.XoasSC),
        onSelect: void 0,
        children: (0, c.jsx)(s.Dr, {
            id: "gif-picker-copy-link",
            label: d.intl.string(d.t.WqhZss),
            action: () => {
                (0, l.C)(n, () => {
                    (0, e.P0)((0, e.ox)(d.intl.string(d.t["+5kSoW"]), e.Ck.SUCCESS));
                });
            },
            icon: r.LinkIcon,
            leadingAccessory: { type: "icon", icon: r.LinkIcon },
        }),
    });
}
