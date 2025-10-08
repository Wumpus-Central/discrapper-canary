n.d(t, { default: () => p }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(755721),
    r = n(481060),
    o = n(493773),
    c = n(626135),
    s = n(326279),
    d = n(533583),
    u = n(981631),
    m = n(388032),
    N = n(193183);
function T(e) {
    switch (e) {
        case d.Q.INPUT:
            return d.a.INPUT;
        case d.Q.OUTPUT:
            return d.a.OUTPUT;
        case d.Q.INPUT_AND_OUTPUT:
            return d.a.INPUT_AND_OUTPUT;
        default:
            return null;
    }
}
function p(e) {
    let t,
        { device: n, certifiedDeviceMetadata: p, onClose: f, transitionState: v } = e,
        [U, h] = (0, i.useState)(null != n ? T(n.type) : null),
        x = (0, i.useRef)(!1);
    function _() {
        (x.current = !0), s.Wz(n.displayName);
    }
    (0, o.zq)(() => {
        x.current || _();
    }),
        (0, i.useEffect)(() => {
            c.default.track(u.rMx.OPEN_MODAL, {
                type: null != p ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                device_name: null != p ? "".concat(p.vendor.name, " ").concat(p.model.name) : n.displayName,
            });
        }, [n.displayName, p]);
    let D = null != p ? m.intl.string(m.t.kiqvHR) : m.intl.string(m.t.AbnGIy);
    switch (n.type) {
        case d.Q.INPUT:
            t =
                null != p
                    ? m.intl.format(m.t.NqNqy8, {
                          vendorName: p.vendor.name,
                          modelName: p.model.name,
                      })
                    : m.intl.format(m.t.stSaRk, { name: n.displayName });
            break;
        case d.Q.OUTPUT:
            t =
                null != p
                    ? m.intl.format(m.t.uPgqIC, {
                          vendorName: p.vendor.name,
                          modelName: p.model.name,
                      })
                    : m.intl.format(m.t.jyhYp6, { name: n.displayName });
            break;
        default:
            t = (0, a.jsxs)(i.Fragment, {
                children: [
                    null != p
                        ? m.intl.format(m.t["4Xyzx8"], {
                              vendorName: p.vendor.name,
                              modelName: p.model.name,
                          })
                        : m.intl.format(m.t.Z7XQcn, { name: n.displayName }),
                    (0, a.jsx)(r.FXm, {
                        value: (function (e) {
                            if (null == e) return null;
                            switch (e) {
                                case d.a.INPUT:
                                    return d.Q.INPUT;
                                case d.a.OUTPUT:
                                    return d.Q.OUTPUT;
                                case d.a.INPUT_AND_OUTPUT:
                                    return d.Q.INPUT_AND_OUTPUT;
                                default:
                                    return null;
                            }
                        })(U),
                        onChange: (e) => h(T(e)),
                        options: [
                            {
                                name: m.intl.string(m.t.vhxqwc),
                                value: d.Q.INPUT_AND_OUTPUT,
                            },
                            {
                                name: m.intl.string(m.t["Kqs9+P"]),
                                value: d.Q.INPUT,
                            },
                            {
                                name: m.intl.string(m.t.GGlM3d),
                                value: d.Q.OUTPUT,
                            },
                        ],
                    }),
                ],
            });
    }
    return (0, a.jsxs)(r.Y0X, {
        transitionState: v,
        "aria-label": D,
        parentComponent: "ConnectedDeviceDetectionModal",
        children: [
            (0, a.jsx)(r.xBx, {
                separator: !1,
                children: (0, a.jsx)(r.X6q, {
                    variant: "heading-lg/semibold",
                    children: D,
                }),
            }),
            (0, a.jsx)(r.hzk, {
                children: (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: (0, a.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                t,
                                (0, a.jsx)(l.zx, {
                                    className: N.neverShow,
                                    look: l.zx.Looks.LINK,
                                    color: l.zx.Colors.LINK,
                                    onClick: () => {
                                        (x.current = !0),
                                            s.Gl(n.displayName),
                                            c.default.track(u.rMx.MODAL_DISMISSED, {
                                                type:
                                                    null != p
                                                        ? "New Audio Device Detected - Certified"
                                                        : "New Audio Device Detected - Not Certified",
                                                location_object: n.displayName,
                                                dismiss_type: "permanent",
                                            }),
                                            f();
                                    },
                                    children: m.intl.formatToPlainString(m.t.cwS3Ex, { device: n.displayName }),
                                }),
                            ],
                        },
                        n.displayName,
                    ),
                }),
            }),
            (0, a.jsx)(r.mzw, {
                children: (0, a.jsxs)("div", {
                    className: N.footerButtons,
                    children: [
                        (0, a.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: N.cancelButton,
                            children: (0, a.jsx)(r.zxk, {
                                variant: "secondary",
                                text: m.intl.string(m.t.vPBgq6),
                                onClick: () => {
                                    _(), f();
                                },
                            }),
                        }),
                        (0, a.jsx)(r.zxk, {
                            variant: "primary",
                            text: m.intl.string(m.t.ydkoDQ),
                            onClick: () => {
                                (x.current = !0),
                                    null != U && s.mo(n.displayName, U, "New Audio Device Detected Modal"),
                                    f();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
