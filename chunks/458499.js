var i = t(477900);
t(582128);
var n = t(855986),
    l = t(43990),
    s = t(165862),
    r = t(477782),
    c = t(750943),
    o = t(428610),
    d = t(946274),
    u = t(413599),
    m = t(792996);
t.d(
    a,
    {},
    {
        A: function (e) {
            let { lastEdit: a, cropAndUpload: t, onChangeImage: p, onClose: g } = e,
                h = (0, n.bG)([u.A], () => u.A.theme);
            function v() {
                (0, d.AM)(a.unprocessedFile, (e, i) => t(e, i, a.transform));
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
                                        icon: c.ImagePlusIcon,
                                        leadingAccessory: { type: "icon", icon: c.ImagePlusIcon },
                                    }),
                                    (0, i.jsx)(r.Dr, {
                                        id: "reposition-image",
                                        label: m.intl.string(m.t.je0LTI),
                                        action: v,
                                        icon: o.CropIcon,
                                        leadingAccessory: { type: "icon", icon: o.CropIcon },
                                    }),
                                ],
                            }),
                        }),
                    }),
            });
        },
    },
);
