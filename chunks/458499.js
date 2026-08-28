a.d(t, { A: () => m });
var l = a(477900);
a(582128);
var i = a(17928),
    n = a(43990),
    s = a(980707),
    r = a(477782),
    o = a(750943),
    c = a(428610),
    d = a(946274),
    u = a(363195),
    p = a(375708);
function m(e) {
    let { lastEdit: t, cropAndUpload: a, onChangeImage: m, onClose: g } = e,
        h = (0, i.bG)([u.A], () => u.A.theme);
    function v() {
        (0, d.AM)(t.unprocessedFile, (e, l) => a(e, l, t.transform));
    }
    return (0, l.jsx)(n.N, {
        theme: h,
        children: (e) =>
            (0, l.jsx)("div", {
                className: e,
                children: (0, l.jsx)(s.W, {
                    "data-menu-migrated": !0,
                    navId: "personal-widget-image-edit-menu",
                    onClose: g,
                    onSelect: void 0,
                    "aria-label": p.intl.string(p.t.RWkUzH),
                    children: (0, l.jsxs)(r.rX, {
                        children: [
                            (0, l.jsx)(r.Dr, {
                                id: "change-image",
                                label: p.intl.string(p.t.dh0LD5),
                                action: m,
                                icon: o.X,
                                leadingAccessory: { type: "icon", icon: o.X },
                            }),
                            (0, l.jsx)(r.Dr, {
                                id: "reposition-image",
                                label: p.intl.string(p.t.je0LTI),
                                action: v,
                                icon: c.K,
                                leadingAccessory: { type: "icon", icon: c.K },
                            }),
                        ],
                    }),
                }),
            }),
    });
}
