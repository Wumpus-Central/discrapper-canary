n.d(t, {
    default: () => g,
    r: () => p
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(153867),
    s = n(835473),
    o = n(600164),
    c = n(626135),
    d = n(998502),
    u = n(981631),
    h = n(388032),
    m = n(251627);
let p = 'Activity Encourages Hardware Acceleration';
function g(e) {
    var t;
    let { applicationId: n, ...g } = e,
        [_, f] = l.useState(!1),
        [E] = (0, s.Z)([n]),
        I = null !== (t = null == E ? void 0 : E.name) && void 0 !== t ? t : 'This Activity';
    l.useEffect(() => {
        c.default.track(u.rMx.OPEN_MODAL, { type: p });
    }, []);
    let C = () => {
        let e = 'temporary';
        _ && ((e = 'permanent'), a.ZP.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
            c.default.track(u.rMx.MODAL_DISMISSED, {
                type: p,
                dismiss_type: e
            }),
            g.onClose();
    };
    return (0, i.jsxs)(r.Y0X, {
        className: m.root,
        'aria-label': h.intl.string(h.t.NQkK4u),
        ...g,
        children: [
            (0, i.jsxs)(r.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(r.Text, {
                        className: m.__invalid_header,
                        variant: 'text-lg/normal',
                        children: h.intl.string(h.t.NQkK4u)
                    }),
                    (0, i.jsx)(r.olH, {
                        onClick: C,
                        className: m.closeButton
                    })
                ]
            }),
            (0, i.jsx)(r.hzk, {
                className: m.content,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    className: m.__invalid_ratingBody,
                    children: h.intl.format(h.t.B9eiaG, { applicationName: I })
                })
            }),
            (0, i.jsxs)(r.mzw, {
                className: m.footer,
                direction: o.Z.Direction.HORIZONTAL,
                children: [
                    (0, i.jsx)(r.XZJ, {
                        type: r.XZJ.Types.INVERTED,
                        size: 18,
                        value: _,
                        onChange: () => f(!_),
                        children: (0, i.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            children: h.intl.string(h.t['5E9SBw'])
                        })
                    }),
                    (0, i.jsx)(r.zxk, {
                        color: r.zxk.Colors.PRIMARY,
                        onClick: C,
                        children: h.intl.string(h.t['Ibf5/v'])
                    }),
                    (0, i.jsx)(r.zxk, {
                        color: r.zxk.Colors.BRAND,
                        onClick: () => {
                            c.default.track(u.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: n }), d.ZP.setEnableHardwareAcceleration(!0);
                        },
                        children: h.intl.string(h.t['/wlDqq'])
                    })
                ]
            })
        ]
    });
}
