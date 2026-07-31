n.d(t, { default: () => N });
var a = n(477900),
    i = n(582128),
    l = n(189213),
    o = n(123292),
    r = n(144228),
    d = n(174459),
    m = n(457394),
    s = n(792205),
    c = n(652215),
    u = n(375708);
function N(e) {
    let t,
        { device: n, certifiedDeviceMetadata: N, onClose: p, transitionState: v } = e,
        [y, f] = i.useState(s.f[n.type]),
        T = null != N ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
        {
            handleSwitch: D,
            handleDontSwitch: U,
            handleIgnore: _,
        } = (0, m.t_)({
            device: n,
            switchDeviceLocation: "New Audio Device Detected Modal",
            onMount: () => d.default.track(c.HAw.OPEN_MODAL, { type: T, device_name: (0, m.eq)(n, N) }),
            onIgnore: () =>
                d.default.track(c.HAw.MODAL_DISMISSED, {
                    type: T,
                    location_object: n.displayName,
                    dismiss_type: "permanent",
                }),
        }),
        k = null != N ? u.intl.string(u.t.kiqvHd) : u.intl.string(u.t.AbnGI5);
    switch (n.type) {
        case s.E.INPUT:
            t =
                null != N
                    ? u.intl.format(u.t.NqNqy2, { vendorName: N.vendor.name, modelName: N.model.name })
                    : u.intl.format(u.t.stSaRi, { name: n.displayName });
            break;
        case s.E.OUTPUT:
            t =
                null != N
                    ? u.intl.format(u.t.uPgqIA, { vendorName: N.vendor.name, modelName: N.model.name })
                    : u.intl.format(u.t.jyhYp1, { name: n.displayName });
            break;
        case s.E.INPUT_AND_OUTPUT:
            t =
                null != N
                    ? u.intl.format(u.t["4Xyzxy"], { vendorName: N.vendor.name, modelName: N.model.name })
                    : u.intl.format(u.t.Z7XQcr, { name: n.displayName });
    }
    return (0, a.jsx)(l.Modal, {
        title: k,
        subtitle: t,
        actions: [
            {
                text: u.intl.string(u.t.vPBgq7),
                variant: "secondary",
                onClick: () => {
                    U(), p();
                },
            },
            {
                text: u.intl.string(u.t.ydkoDT),
                variant: "primary",
                onClick: () => {
                    D(y), p();
                },
            },
        ],
        actionBarInput: (0, a.jsx)(o.Q, {
            text: u.intl.format(u.t.cwS3E6, { device: n.displayName }),
            onClick: () => {
                _(), p();
            },
        }),
        onClose: p,
        transitionState: v,
        children:
            n.type === s.E.INPUT_AND_OUTPUT &&
            (0, a.jsx)(r.z, {
                value: y,
                onChange: f,
                options: [
                    { name: u.intl.string(u.t.vhxqwT), value: s.f.INPUT_AND_OUTPUT },
                    { name: u.intl.string(u.t["Kqs9+J"]), value: s.f.INPUT },
                    { name: u.intl.string(u.t.GGlM3e), value: s.f.OUTPUT },
                ],
            }),
    });
}
