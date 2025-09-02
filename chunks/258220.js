n.d(t, {
    default: () => g,
    r: () => h,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(82659),
    a = n(755721),
    o = n(481060),
    s = n(153867),
    c = n(835473),
    u = n(626135),
    d = n(998502),
    p = n(981631),
    f = n(388032);
let h = "Activity Encourages Hardware Acceleration";
function g(e) {
    var t;
    let { applicationId: n, transitionState: g, onClose: m } = e,
        [b, _] = i.useState(!1),
        [O] = (0, c.Z)([n]),
        E = null != (t = null == O ? void 0 : O.name) ? t : "This Activity";
    i.useEffect(() => {
        u.default.track(p.rMx.OPEN_MODAL, { type: h });
    }, []);
    let y = async () => {
            let e = "temporary";
            b && ((e = "permanent"), s.ZP.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
                u.default.track(p.rMx.MODAL_DISMISSED, {
                    type: h,
                    dismiss_type: e,
                }),
                await m();
        },
        v = async () => {
            u.default.track(p.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: n }),
                d.ZP.setEnableHardwareAcceleration(!0),
                await y();
        };
    return (0, r.jsx)(l.Modal, {
        size: "md",
        transitionState: g,
        onClose: y,
        "aria-label": f.intl.string(f.t.NQkK4u),
        title: f.intl.string(f.t.NQkK4u),
        actionBarInput: (0, r.jsx)(a.$q, {
            type: a.M0.INVERTED,
            size: 18,
            value: b,
            onChange: () => _(!b),
            children: (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: f.intl.string(f.t["5E9SBw"]),
            }),
        }),
        actions: [
            {
                variant: "secondary",
                text: f.intl.string(f.t["Ibf5/v"]),
                onClick: y,
            },
            {
                variant: "primary",
                text: f.intl.string(f.t["/wlDqq"]),
                onClick: v,
            },
        ],
        children: (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            children: f.intl.format(f.t.B9eiaG, { applicationName: E }),
        }),
    });
}
