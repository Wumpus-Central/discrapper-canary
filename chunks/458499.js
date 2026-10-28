a.d(t, { A: () => h });
var i = a(477900);
a(582128);
var n = a(17928),
    l = a(43990),
    s = a(980707),
    r = a(477782),
    c = a(750943),
    d = a(428610),
    o = a(946274),
    u = a(363195),
    m = a(105292);
function h(e) {
    let { lastEdit: t, cropAndUpload: a, onChangeImage: h, onClose: p } = e,
        g = (0, n.bG)([u.A], () => u.A.theme);
    function v() {
        (0, o.AM)(t.unprocessedFile, (e, i) => a(e, i, t.transform));
    }
    return (0, i.jsx)(l.N, {
        theme: g,
        children: (e) =>
            (0, i.jsx)("div", {
                className: e,
                children: (0, i.jsx)(s.W, {
                    "data-menu-migrated": !0,
                    navId: "personal-widget-image-edit-menu",
                    onClose: p,
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
                                action: v,
                                icon: d.K,
                                leadingAccessory: { type: "icon", icon: d.K },
                            }),
                        ],
                    }),
                }),
            }),
    });
}
