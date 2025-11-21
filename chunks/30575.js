n.d(t, { default: () => p }), n(388685);
var a = n(54381),
    i = n(473749),
    l = n(755721),
    r = n(481060),
    o = n(493773),
    s = n(626135),
    d = n(326279),
    c = n(533583),
    u = n(981631),
    m = n(388032),
    N = n(193183);
function T(e) {
    switch (e) {
        case c.Q.INPUT:
            return c.a.INPUT;
        case c.Q.OUTPUT:
            return c.a.OUTPUT;
        case c.Q.INPUT_AND_OUTPUT:
            return c.a.INPUT_AND_OUTPUT;
        default:
            return null;
    }
}
function p(e) {
    let t,
        { device: n, certifiedDeviceMetadata: p, onClose: v, transitionState: f } = e,
        [U, h] = (0, i.useState)(null != n ? T(n.type) : null),
        _ = (0, i.useRef)(!1);
    function x() {
        (_.current = !0), d.Wz(n.displayName);
    }
    (0, o.zq)(() => {
        _.current || x();
    }),
        (0, i.useEffect)(() => {
            s.default.track(u.rMx.OPEN_MODAL, {
                type: null != p ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                device_name: null != p ? "".concat(p.vendor.name, " ").concat(p.model.name) : n.displayName,
            });
        }, [n.displayName, p]);
    let D = null != p ? m.intl.string(m.t.kiqvHd) : m.intl.string(m.t.AbnGI5);
    switch (n.type) {
        case c.Q.INPUT:
            t =
                null != p
                    ? m.intl.format(m.t.NqNqy2, {
                          vendorName: p.vendor.name,
                          modelName: p.model.name,
                      })
                    : m.intl.format(m.t.stSaRi, { name: n.displayName });
            break;
        case c.Q.OUTPUT:
            t =
                null != p
                    ? m.intl.format(m.t.uPgqIA, {
                          vendorName: p.vendor.name,
                          modelName: p.model.name,
                      })
                    : m.intl.format(m.t.jyhYp1, { name: n.displayName });
            break;
        default:
            t = (0, a.jsxs)("div", {
                className: N.radioMessageContainer,
                children: [
                    (0, a.jsx)("div", {
                        children:
                            null != p
                                ? m.intl.format(m.t["4Xyzxy"], {
                                      vendorName: p.vendor.name,
                                      modelName: p.model.name,
                                  })
                                : m.intl.format(m.t.Z7XQcr, { name: n.displayName }),
                    }),
                    (0, a.jsx)(r.FXm, {
                        value: (function (e) {
                            if (null == e) return null;
                            switch (e) {
                                case c.a.INPUT:
                                    return c.Q.INPUT;
                                case c.a.OUTPUT:
                                    return c.Q.OUTPUT;
                                case c.a.INPUT_AND_OUTPUT:
                                    return c.Q.INPUT_AND_OUTPUT;
                                default:
                                    return null;
                            }
                        })(U),
                        onChange: (e) => h(T(e)),
                        options: [
                            {
                                name: m.intl.string(m.t.vhxqwT),
                                value: c.Q.INPUT_AND_OUTPUT,
                            },
                            {
                                name: m.intl.string(m.t["Kqs9+J"]),
                                value: c.Q.INPUT,
                            },
                            {
                                name: m.intl.string(m.t.GGlM3e),
                                value: c.Q.OUTPUT,
                            },
                        ],
                    }),
                ],
            });
    }
    return (0, a.jsxs)(r.Y0X, {
        transitionState: f,
        "aria-label": D,
        parentComponent: "ConnectedDeviceDetectionModal",
        children: [
            (0, a.jsx)(r.xBx, {
                separator: !1,
                children: (0, a.jsx)(r.Heading, {
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
                                        (_.current = !0),
                                            d.Gl(n.displayName),
                                            s.default.track(u.rMx.MODAL_DISMISSED, {
                                                type:
                                                    null != p
                                                        ? "New Audio Device Detected - Certified"
                                                        : "New Audio Device Detected - Not Certified",
                                                location_object: n.displayName,
                                                dismiss_type: "permanent",
                                            }),
                                            v();
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
                                    x(), v();
                                },
                            }),
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            text: m.intl.string(m.t.ydkoDT),
                            onClick: () => {
                                (_.current = !0),
                                    null != U && d.mo(n.displayName, U, "New Audio Device Detected Modal"),
                                    v();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
