a.d(t, { A: () => m });
var i = a(477900);
a(582128);
var l = a(17928),
    n = a(43990),
    s = a(980707),
    r = a(477782),
    o = a(750943),
    d = a(428610),
    c = a(946274),
    u = a(363195),
    p = a(375708);
function m(e) {
    let { lastEdit: t, cropAndUpload: a, onChangeImage: m, onClose: g } = e,
        h = (0, l.bG)([u.A], () => u.A.theme);
    function v() {
        (0, c.AM)(t.unprocessedFile, (e, i) => a(e, i, t.transform));
    }
    return (0, i.jsx)(n.N, {
        theme: h,
        children: (e) =>
            (0, i.jsx)("div", {
                className: e,
                children: (0, i.jsx)(s.W, {
                    "data-menu-migrated": !0,
                    navId: "personal-widget-image-edit-menu",
                    onClose: g,
                    onSelect: void 0,
                    "aria-label": p.intl.string(p.t.RWkUzH),
                    children: (0, i.jsxs)(r.rX, {
                        children: [
                            (0, i.jsx)(r.Dr, {
                                id: "change-image",
                                label: p.intl.string(p.t.dh0LD5),
                                action: m,
                                icon: o.X,
                                leadingAccessory: { type: "icon", icon: o.X },
                            }),
                            (0, i.jsx)(r.Dr, {
                                id: "reposition-image",
                                label: p.intl.string(p.t.je0LTI),
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
