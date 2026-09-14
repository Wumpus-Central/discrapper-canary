a.d(t, { A: () => p });
var i = a(477900);
a(582128);
var n = a(17928),
    l = a(43990),
    s = a(980707),
    r = a(477782),
    o = a(750943),
    u = a(428610),
    d = a(946274),
    c = a(363195),
    m = a(375708);
function p(e) {
    let { lastEdit: t, cropAndUpload: a, onChangeImage: p, onClose: g } = e,
        h = (0, n.bG)([c.A], () => c.A.theme);
    function v() {
        (0, d.AM)(t.unprocessedFile, (e, i) => a(e, i, t.transform));
    }
    return (0, i.jsx)(l.N, {
        theme: h,
        children: (e) =>
            (0, i.jsx)("div", {
                className: e,
                children: (0, i.jsx)(s.W, {
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
                                action: p,
                                icon: o.X,
                                leadingAccessory: { type: "icon", icon: o.X },
                            }),
                            (0, i.jsx)(r.Dr, {
                                id: "reposition-image",
                                label: m.intl.string(m.t.je0LTI),
                                action: v,
                                icon: u.K,
                                leadingAccessory: { type: "icon", icon: u.K },
                            }),
                        ],
                    }),
                }),
            }),
    });
}
