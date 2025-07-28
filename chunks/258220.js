(n.d(t, {
    default: () => f,
    r: () => h
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(82659),
    a = n(481060),
    o = n(153867),
    s = n(835473),
    c = n(626135),
    u = n(998502),
    d = n(981631),
    p = n(388032);
let h = 'Activity Encourages Hardware Acceleration';
function f(e) {
    var t;
    let { applicationId: n, transitionState: f, onClose: g } = e,
        [m, b] = i.useState(!1),
        [_] = (0, s.Z)([n]),
        O = null != (t = null == _ ? void 0 : _.name) ? t : 'This Activity';
    i.useEffect(() => {
        c.default.track(d.rMx.OPEN_MODAL, { type: h });
    }, []);
    let E = async () => {
            let e = 'temporary';
            (m && ((e = 'permanent'), o.ZP.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
                c.default.track(d.rMx.MODAL_DISMISSED, {
                    type: h,
                    dismiss_type: e
                }),
                await g());
        },
        y = async () => {
            (c.default.track(d.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: n }), u.ZP.setEnableHardwareAcceleration(!0), await E());
        };
    return (0, r.jsx)(l.Modal, {
        size: 'md',
        transitionState: f,
        onClose: E,
        'aria-label': p.intl.string(p.t.NQkK4u),
        title: p.intl.string(p.t.NQkK4u),
        actionBarInput: (0, r.jsx)(a.XZJ, {
            type: a.XZJ.Types.INVERTED,
            size: 18,
            value: m,
            onChange: () => b(!m),
            children: (0, r.jsx)(a.Text, {
                variant: 'text-sm/normal',
                children: p.intl.string(p.t['5E9SBw'])
            })
        }),
        actions: [
            {
                variant: 'secondary',
                text: p.intl.string(p.t['Ibf5/v']),
                onClick: E
            },
            {
                variant: 'primary',
                text: p.intl.string(p.t['/wlDqq']),
                onClick: y
            }
        ],
        children: (0, r.jsx)(a.Text, {
            variant: 'text-md/normal',
            children: p.intl.format(p.t.B9eiaG, { applicationName: O })
        })
    });
}
