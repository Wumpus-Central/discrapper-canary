n.d(t, {
    default: () => h,
    r: () => f,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(793030),
    a = n(481060),
    s = n(153867),
    o = n(835473),
    c = n(626135),
    u = n(998502),
    d = n(981631),
    p = n(388032);
let f = "Activity Encourages Hardware Acceleration";
function h(e) {
    var t;
    let { applicationId: n, transitionState: h, onClose: g } = e,
        [m, _] = i.useState(!1),
        [b] = (0, o.Z)([n]),
        E = null != (t = null == b ? void 0 : b.name) ? t : "This Activity";
    i.useEffect(() => {
        c.default.track(d.rMx.OPEN_MODAL, { type: f });
    }, []);
    let O = async () => {
            let e = "temporary";
            m && ((e = "permanent"), s.ZP.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
                c.default.track(d.rMx.MODAL_DISMISSED, {
                    type: f,
                    dismiss_type: e,
                }),
                await g();
        },
        y = async () => {
            c.default.track(d.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: n }),
                u.ZP.setEnableHardwareAcceleration(!0),
                await O();
        };
    return (0, r.jsx)(l.Modal, {
        size: "md",
        transitionState: h,
        onClose: O,
        "aria-label": p.intl.string(p.t.NQkK4l),
        title: p.intl.string(p.t.NQkK4l),
        actionBarInput: (0, r.jsx)(a.Checkbox, {
            checked: m,
            onChange: () => _(!m),
            label: p.intl.string(p.t["5E9SB9"]),
            labelType: "secondary",
        }),
        actions: [
            {
                variant: "secondary",
                text: p.intl.string(p.t["Ibf5/h"]),
                onClick: O,
            },
            {
                variant: "primary",
                text: p.intl.string(p.t["/wlDqi"]),
                onClick: y,
            },
        ],
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: p.intl.format(p.t.B9eiaK, { applicationName: E }),
        }),
    });
}
