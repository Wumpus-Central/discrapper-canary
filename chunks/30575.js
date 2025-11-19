n.d(t, { default: () => p }), n(388685);
var a = n(54381),
    i = n(473749),
    l = n(755721),
    r = n(481060),
    o = n(493773),
    c = n(626135),
    d = n(326279),
    s = n(533583),
    u = n(981631),
    m = n(388032),
    N = n(193183);
function T(e) {
    switch (e) {
        case s.Q.INPUT:
            return s.a.INPUT;
        case s.Q.OUTPUT:
            return s.a.OUTPUT;
        case s.Q.INPUT_AND_OUTPUT:
            return s.a.INPUT_AND_OUTPUT;
        default:
            return null;
    }
}
function p(e) {
    let t,
        { device: n, certifiedDeviceMetadata: p, onClose: f, transitionState: v } = e,
        [U, h] = (0, i.useState)(null != n ? T(n.type) : null),
        _ = (0, i.useRef)(!1);
    function D() {
        (_.current = !0), d.Wz(n.displayName);
    }
    (0, o.zq)(() => {
        _.current || D();
    }),
        (0, i.useEffect)(() => {
            c.default.track(u.rMx.OPEN_MODAL, {
                type: null != p ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                device_name: null != p ? "".concat(p.vendor.name, " ").concat(p.model.name) : n.displayName,
            });
        }, [n.displayName, p]);
    let x = null != p ? m.intl.string(m.t.kiqvHd) : m.intl.string(m.t.AbnGI5);
    switch (n.type) {
        case s.Q.INPUT:
            t =
                null != p
                    ? m.intl.format(m.t.NqNqy2, {
                          vendorName: p.vendor.name,
                          modelName: p.model.name,
                      })
                    : m.intl.format(m.t.stSaRi, { name: n.displayName });
            break;
        case s.Q.OUTPUT:
            t =
                null != p
                    ? m.intl.format(m.t.uPgqIA, {
                          vendorName: p.vendor.name,
                          modelName: p.model.name,
                      })
                    : m.intl.format(m.t.jyhYp1, { name: n.displayName });
            break;
        default:
            t = (0, a.jsxs)(i.Fragment, {
                children: [
                    null != p
                        ? m.intl.format(m.t["4Xyzxy"], {
                              vendorName: p.vendor.name,
                              modelName: p.model.name,
                          })
                        : m.intl.format(m.t.Z7XQcr, { name: n.displayName }),
                    (0, a.jsx)(r.FXm, {
                        value: (function (e) {
                            if (null == e) return null;
                            switch (e) {
                                case s.a.INPUT:
                                    return s.Q.INPUT;
                                case s.a.OUTPUT:
                                    return s.Q.OUTPUT;
                                case s.a.INPUT_AND_OUTPUT:
                                    return s.Q.INPUT_AND_OUTPUT;
                                default:
                                    return null;
                            }
                        })(U),
                        onChange: (e) => h(T(e)),
                        options: [
                            {
                                name: m.intl.string(m.t.vhxqwT),
                                value: s.Q.INPUT_AND_OUTPUT,
                            },
                            {
                                name: m.intl.string(m.t["Kqs9+J"]),
                                value: s.Q.INPUT,
                            },
                            {
                                name: m.intl.string(m.t.GGlM3e),
                                value: s.Q.OUTPUT,
                            },
                        ],
                    }),
                ],
            });
    }
    return (0, a.jsxs)(r.Y0X, {
        transitionState: v,
        "aria-label": x,
        parentComponent: "ConnectedDeviceDetectionModal",
        children: [
            (0, a.jsx)(r.xBx, {
                separator: !1,
                children: (0, a.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: x,
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
                                        (_.current = !0),
                                            d.Gl(n.displayName),
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
                                    children: m.intl.formatToPlainString(m.t.cwS3E6, { device: n.displayName }),
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
                            children: (0, a.jsx)(r.Button, {
                                variant: "secondary",
                                text: m.intl.string(m.t.vPBgq7),
                                onClick: () => {
                                    D(), f();
                                },
                            }),
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            text: m.intl.string(m.t.ydkoDT),
                            onClick: () => {
                                (_.current = !0),
                                    null != U && d.mo(n.displayName, U, "New Audio Device Detected Modal"),
                                    f();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
