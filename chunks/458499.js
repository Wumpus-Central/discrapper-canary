a.d(n, { A: () => h });
var i = a(477900);
a(582128);
var l = a(17928),
    s = a(43990),
    t = a(980707),
    r = a(477782),
    c = a(750943),
    o = a(428610),
    d = a(946274),
    u = a(363195),
    m = a(375708);
function h(e) {
    let { lastEdit: n, cropAndUpload: a, onChangeImage: h, onClose: g } = e,
        p = (0, l.bG)([u.A], () => u.A.theme);
    function x() {
        (0, d.AM)(n.unprocessedFile, (e, i) => a(e, i, n.transform));
    }
    return (0, i.jsx)(s.N, {
        theme: p,
        children: (e) =>
            (0, i.jsx)("div", {
                className: e,
                children: (0, i.jsx)(t.W, {
                    "data-menu-migrated": !0,
                    navId: "personal-widget-image-edit-menu",
                    onClose: g,
                    onSelect: void 0,
                    "aria-label": m.intl.string(m.t.RWkUzH),
                    children: (0, i.jsxs)(r.rX, {
                        children: [
                            (0, i.jsx)(r.Dr, {
                                id: "change-image",
                                label: m.intl.string(m.t.dh0LD5),
                                action: h,
                                icon: c.X,
                                leadingAccessory: { type: "icon", icon: c.X },
                            }),
                            (0, i.jsx)(r.Dr, {
                                id: "reposition-image",
                                label: m.intl.string(m.t.je0LTI),
                                action: x,
                                icon: o.K,
                                leadingAccessory: { type: "icon", icon: o.K },
                            }),
                        ],
                    }),
                }),
            }),
    });
}
