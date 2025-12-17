n.d(t, {
    default: () => g,
    r: () => f,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(793030),
    a = n(481060),
    o = n(153867),
    s = n(835473),
    c = n(626135),
    u = n(998502),
    d = n(981631),
    p = n(388032);
let f = "Activity Encourages Hardware Acceleration";
function g(e) {
    var t;
    let { applicationId: n, transitionState: g, onClose: h } = e,
        [m, b] = i.useState(!1),
        [_] = (0, s.Z)([n]),
        E = null != (t = null == _ ? void 0 : _.name) ? t : "This Activity";
    i.useEffect(() => {
        c.default.track(d.rMx.OPEN_MODAL, { type: f });
    }, []);
    let O = async () => {
            let e = "temporary";
            m && ((e = "permanent"), o.ZP.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
                c.default.track(d.rMx.MODAL_DISMISSED, {
                    type: f,
                    dismiss_type: e,
                }),
                await h();
        },
        v = async () => {
            c.default.track(d.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: n }),
                u.ZP.setEnableHardwareAcceleration(!0),
                await O();
        };
    return (0, r.jsx)(l.Modal, {
        size: "md",
        transitionState: g,
        onClose: O,
        "aria-label": p.intl.string(p.t.NQkK4l),
        title: p.intl.string(p.t.NQkK4l),
        actionBarInput: (0, r.jsx)(a.Checkbox, {
            checked: m,
            onChange: () => b(!m),
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
                onClick: v,
            },
        ],
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: p.intl.format(p.t.B9eiaK, { applicationName: E }),
        }),
    });
}
