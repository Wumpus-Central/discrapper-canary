t.d(n, { default: () => p });
var c = t(477900),
    s = t(980707),
    e = t(477782),
    o = t(858899),
    a = t(173936),
    r = t(442433),
    l = t(957565),
    d = t(105292);
function p(i) {
    let { link: n } = i;
    return (0, c.jsx)(s.W, {
        navId: "gif-picker",
        onClose: r.Z_,
        "aria-label": d.intl.string(d.t.XoasSC),
        onSelect: void 0,
        children: (0, c.jsx)(e.Dr, {
            id: "gif-picker-copy-link",
            label: d.intl.string(d.t.WqhZss),
            action: () => {
                (0, l.C)(n, () => {
                    (0, o.P0)({ text: d.intl.string(d.t["+5kSoW"]), variant: "success" });
                });
            },
            icon: a.LinkIcon,
            leadingAccessory: { type: "icon", icon: a.LinkIcon },
        }),
    });
}
