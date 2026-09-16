n.d(a, { A: () => h });
var t = n(477900);
n(582128);
var i = n(17928),
    l = n(43990),
    s = n(980707),
    r = n(477782),
    c = n(750943),
    d = n(428610),
    o = n(946274),
    u = n(363195),
    m = n(375708);
function h(e) {
    let { lastEdit: a, cropAndUpload: n, onChangeImage: h, onClose: g } = e,
        p = (0, i.bG)([u.A], () => u.A.theme);
    function v() {
        (0, o.AM)(a.unprocessedFile, (e, t) => n(e, t, a.transform));
    }
    return (0, t.jsx)(l.N, {
        theme: p,
        children: (e) =>
            (0, t.jsx)("div", {
                className: e,
                children: (0, t.jsx)(s.W, {
                    "data-menu-migrated": !0,
                    navId: "personal-widget-image-edit-menu",
                    onClose: g,
                    onSelect: void 0,
                    "aria-label": m.intl.string(m.t.RWkUzH),
                    children: (0, t.jsxs)(r.rX, {
                        children: [
                            (0, t.jsx)(r.Dr, {
                                id: "change-image",
                                label: m.intl.string(m.t.dh0LD5),
                                action: h,
                                icon: c.X,
                                leadingAccessory: { type: "icon", icon: c.X },
                            }),
                            (0, t.jsx)(r.Dr, {
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
