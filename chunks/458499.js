t.d(a, { A: () => h });
var i = t(477900);
t(582128);
var n = t(17928),
    l = t(43990),
    s = t(980707),
    r = t(477782),
    c = t(750943),
    d = t(428610),
    o = t(946274),
    u = t(363195),
    m = t(375708);
function h(e) {
    let { lastEdit: a, cropAndUpload: t, onChangeImage: h, onClose: g } = e,
        p = (0, n.bG)([u.A], () => u.A.theme);
    function v() {
        (0, o.AM)(a.unprocessedFile, (e, i) => t(e, i, a.transform));
    }
    return (0, i.jsx)(l.N, {
        theme: p,
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
