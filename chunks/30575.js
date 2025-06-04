n.d(t, { default: () => f }), n(388685);
var i = n(255367),
    a = n(73800),
    l = n(481060),
    o = n(493773),
    r = n(626135),
    d = n(326279),
    c = n(465322),
    s = n(533583),
    u = n(981631),
    m = n(388032),
    N = n(815646);
function p(e) {
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
function f(e) {
    let t,
        { device: n, certifiedDeviceMetadata: f, onClose: v, transitionState: D } = e,
        [_, h] = (0, a.useState)(null != n ? p(n.type) : null),
        x = (0, a.useRef)(!1),
        { optOutPerDevice: C } = (0, c.H)({ location: 'ConnectedDevice' });
    function T() {
        (x.current = !0), d.Wz(n.displayName);
    }
    (0, o.zq)(() => {
        x.current || T();
    }),
        (0, a.useEffect)(() => {
            r.default.track(u.rMx.OPEN_MODAL, {
                type: null != f ? 'New Audio Device Detected - Certified' : 'New Audio Device Detected - Not Certified',
                device_name: null != f ? ''.concat(f.vendor.name, ' ').concat(f.model.name) : n.displayName
            });
        }, [n.displayName, f]);
    let y = null != f ? m.intl.string(m.t.kiqvHR) : m.intl.string(m.t.AbnGIy);
    switch (n.type) {
        case s.Q.INPUT:
            t =
                null != f
                    ? m.intl.format(m.t.NqNqy8, {
                          vendorName: f.vendor.name,
                          modelName: f.model.name
                      })
                    : m.intl.format(m.t.stSaRk, { name: n.displayName });
            break;
        case s.Q.OUTPUT:
            t =
                null != f
                    ? m.intl.format(m.t.uPgqIC, {
                          vendorName: f.vendor.name,
                          modelName: f.model.name
                      })
                    : m.intl.format(m.t.jyhYp6, { name: n.displayName });
            break;
        default:
            t = (0, i.jsxs)(a.Fragment, {
                children: [
                    null != f
                        ? m.intl.format(m.t['4Xyzx8'], {
                              vendorName: f.vendor.name,
                              modelName: f.model.name
                          })
                        : m.intl.format(m.t.Z7XQcn, { name: n.displayName }),
                    (0, i.jsx)(l.FXm, {
                        value: _,
                        className: N.options,
                        onChange: (e) => {
                            let { value: t } = e;
                            return h(p(t));
                        },
                        options: [
                            {
                                name: m.intl.string(m.t.vhxqwc),
                                value: s.Q.INPUT_AND_OUTPUT
                            },
                            {
                                name: m.intl.string(m.t['Kqs9+P']),
                                value: s.Q.INPUT
                            },
                            {
                                name: m.intl.string(m.t.GGlM3d),
                                value: s.Q.OUTPUT
                            }
                        ]
                    })
                ]
            });
    }
    return (0, i.jsxs)(l.Y0X, {
        transitionState: D,
        'aria-label': y,
        children: [
            (0, i.jsx)(l.xBx, {
                separator: !1,
                children: (0, i.jsx)(l.X6q, {
                    variant: 'heading-lg/semibold',
                    children: y
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
                                (0, i.jsx)(l.zxk, {
                                    className: N.neverShow,
                                    look: l.zxk.Looks.LINK,
                                    color: l.zxk.Colors.LINK,
                                    onClick: () => {
                                        C
                                            ? ((x.current = !0),
                                              d.Gl(n.displayName),
                                              r.default.track(u.rMx.MODAL_DISMISSED, {
                                                  type: null != f ? 'New Audio Device Detected - Certified' : 'New Audio Device Detected - Not Certified',
                                                  location_object: n.displayName,
                                                  dismiss_type: 'permanent'
                                              }))
                                            : ((x.current = !0),
                                              d.oI(),
                                              r.default.track(u.rMx.MODAL_DISMISSED, {
                                                  type: null != f ? 'New Audio Device Detected - Certified' : 'New Audio Device Detected - Not Certified',
                                                  dismiss_type: 'permanent'
                                              })),
                                            v();
                                    },
                                    children: C ? m.intl.formatToPlainString(m.t.cwS3Ex, { device: n.displayName }) : m.intl.string(m.t['5E9SBw'])
                                })
                            ]
                        },
                        n.displayName
                    )
                })
            }),
            (0, i.jsx)(l.mzw, {
                children: (0, i.jsxs)('div', {
                    className: N.footerButtons,
                    children: [
                        (0, i.jsx)(l.zxk, {
                            color: l.zxk.Colors.PRIMARY,
                            onClick: () => {
                                T(), v();
                            },
                            className: N.cancelButton,
                            children: m.intl.string(m.t.vPBgq6)
                        }),
                        (0, i.jsx)(l.zxk, {
                            onClick: () => {
                                (x.current = !0), null != _ && d.mo(n.displayName, _, 'New Audio Device Detected Modal'), v();
                            },
                            children: m.intl.string(m.t.ydkoDQ)
                        })
                    ]
                })
            })
        ]
    });
}
