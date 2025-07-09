(n.d(t, { default: () => f }), n(388685));
var i = n(255367),
    a = n(73800),
    o = n(755721),
    l = n(481060),
    r = n(493773),
    d = n(626135),
    c = n(326279),
    s = n(465322),
    u = n(533583),
    m = n(981631),
    N = n(388032),
    p = n(815646);
function v(e) {
    switch (e) {
        case u.Q.INPUT:
            return u.a.INPUT;
        case u.Q.OUTPUT:
            return u.a.OUTPUT;
        case u.Q.INPUT_AND_OUTPUT:
            return u.a.INPUT_AND_OUTPUT;
        default:
            return null;
    }
}
function f(e) {
    let t,
        { device: n, certifiedDeviceMetadata: f, onClose: D, transitionState: _ } = e,
        [x, h] = (0, a.useState)(null != n ? v(n.type) : null),
        C = (0, a.useRef)(!1),
        { optOutPerDevice: T } = (0, s.H)({ location: 'ConnectedDevice' });
    function y() {
        ((C.current = !0), c.Wz(n.displayName));
    }
    ((0, r.zq)(() => {
        C.current || y();
    }),
        (0, a.useEffect)(() => {
            d.default.track(m.rMx.OPEN_MODAL, {
                type: null != f ? 'New Audio Device Detected - Certified' : 'New Audio Device Detected - Not Certified',
                device_name: null != f ? ''.concat(f.vendor.name, ' ').concat(f.model.name) : n.displayName
            });
        }, [n.displayName, f]));
    let E = null != f ? N.intl.string(N.t.kiqvHR) : N.intl.string(N.t.AbnGIy);
    switch (n.type) {
        case u.Q.INPUT:
            t =
                null != f
                    ? N.intl.format(N.t.NqNqy8, {
                          vendorName: f.vendor.name,
                          modelName: f.model.name
                      })
                    : N.intl.format(N.t.stSaRk, { name: n.displayName });
            break;
        case u.Q.OUTPUT:
            t =
                null != f
                    ? N.intl.format(N.t.uPgqIC, {
                          vendorName: f.vendor.name,
                          modelName: f.model.name
                      })
                    : N.intl.format(N.t.jyhYp6, { name: n.displayName });
            break;
        default:
            t = (0, i.jsxs)(a.Fragment, {
                children: [
                    null != f
                        ? N.intl.format(N.t['4Xyzx8'], {
                              vendorName: f.vendor.name,
                              modelName: f.model.name
                          })
                        : N.intl.format(N.t.Z7XQcn, { name: n.displayName }),
                    (0, i.jsx)(l.FXm, {
                        value: x,
                        className: p.options,
                        onChange: (e) => {
                            let { value: t } = e;
                            return h(v(t));
                        },
                        options: [
                            {
                                name: N.intl.string(N.t.vhxqwc),
                                value: u.Q.INPUT_AND_OUTPUT
                            },
                            {
                                name: N.intl.string(N.t['Kqs9+P']),
                                value: u.Q.INPUT
                            },
                            {
                                name: N.intl.string(N.t.GGlM3d),
                                value: u.Q.OUTPUT
                            }
                        ]
                    })
                ]
            });
    }
    return (0, i.jsxs)(l.Y0X, {
        transitionState: _,
        'aria-label': E,
        parentComponent: 'ConnectedDeviceDetectionModal',
        children: [
            (0, i.jsx)(l.xBx, {
                separator: !1,
                children: (0, i.jsx)(l.X6q, {
                    variant: 'heading-lg/semibold',
                    children: E
                })
            }),
            (0, i.jsx)(l.hzk, {
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: (0, i.jsxs)(
                        a.Fragment,
                        {
                            children: [
                                t,
                                (0, i.jsx)(o.zx, {
                                    className: p.neverShow,
                                    look: o.zx.Looks.LINK,
                                    color: o.zx.Colors.LINK,
                                    onClick: () => {
                                        (T
                                            ? ((C.current = !0),
                                              c.Gl(n.displayName),
                                              d.default.track(m.rMx.MODAL_DISMISSED, {
                                                  type: null != f ? 'New Audio Device Detected - Certified' : 'New Audio Device Detected - Not Certified',
                                                  location_object: n.displayName,
                                                  dismiss_type: 'permanent'
                                              }))
                                            : ((C.current = !0),
                                              c.oI(),
                                              d.default.track(m.rMx.MODAL_DISMISSED, {
                                                  type: null != f ? 'New Audio Device Detected - Certified' : 'New Audio Device Detected - Not Certified',
                                                  dismiss_type: 'permanent'
                                              })),
                                            D());
                                    },
                                    children: T ? N.intl.formatToPlainString(N.t.cwS3Ex, { device: n.displayName }) : N.intl.string(N.t['5E9SBw'])
                                })
                            ]
                        },
                        n.displayName
                    )
                })
            }),
            (0, i.jsx)(l.mzw, {
                children: (0, i.jsxs)('div', {
                    className: p.footerButtons,
                    children: [
                        (0, i.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: p.cancelButton,
                            children: (0, i.jsx)(l.zxk, {
                                variant: 'secondary',
                                text: N.intl.string(N.t.vPBgq6),
                                onClick: () => {
                                    (y(), D());
                                }
                            })
                        }),
                        (0, i.jsx)(l.zxk, {
                            variant: 'primary',
                            text: N.intl.string(N.t.ydkoDQ),
                            onClick: () => {
                                ((C.current = !0), null != x && c.mo(n.displayName, x, 'New Audio Device Detected Modal'), D());
                            }
                        })
                    ]
                })
            })
        ]
    });
}
