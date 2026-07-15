t.d(i, { H: () => o });
var s = t(627968),
    d = t(64700),
    n = t(477782),
    c = t(827343),
    l = t(74848),
    a = t(106713),
    r = t(731854),
    u = t(375708);
function o(e) {
    let {
            deviceType: i,
            analyticsLocations: t,
            asSubmenu: o = !1,
            onDeviceSelect: b,
            selectedDeviceId: p,
            menuGroupOverrideProps: D,
            menuItemOverrideProps: h,
            computeMenuRadioItemOverrideProps: v,
        } = e,
        { setDevice: I, getLabel: g } = {
            [r.oh.AUDIO_INPUT]: { setDevice: c.A.setInputDevice, getLabel: () => u.intl.string(u.t.ElbIXN) },
            [r.oh.AUDIO_OUTPUT]: { setDevice: c.A.setOutputDevice, getLabel: () => u.intl.string(u.t["6Ww0iH"]) },
            [r.oh.VIDEO_INPUT]: { setDevice: c.A.setVideoDevice, getLabel: () => u.intl.string(u.t.F122Gz) },
        }[i],
        m = (0, l.tR)(i),
        { id: x, name: A } = (0, l.x5)(i),
        f = p ?? x,
        U = d.useMemo(
            () =>
                m.find((e) => {
                    let { id: i } = e;
                    return i === f;
                }),
            [m, f],
        ),
        { showDeviceFormFactorIndicators: $ } = a.A.useConfig({ location: "useDeviceMenuItems" }),
        k = m.map((e) => {
            let d,
                c = e.name,
                a = (0, l.d)(e.name);
            null != a && ((c = a.prefix), (d = a.subName));
            let r = {};
            if ($) {
                let t = (0, l.d4)(e, i);
                r = { leadingAccessory: { type: "icon", icon: t }, leftIcon: t };
            }
            return (0, s.jsx)(
                n.iD,
                {
                    id: `${i}-${e.id}`,
                    group: `${i}-devices`,
                    disabled: e.disabled,
                    label: c,
                    subtext: d,
                    checked: e.id === f,
                    action: () => {
                        (b?.(e.id) ?? !0) && I(e.id, { analyticsLocations: t });
                    },
                    ...v?.(e.id),
                    ...r,
                },
                `${i}-${e.id}`,
            );
        });
    return o
        ? (0, s.jsx)(n.Dr, { id: `${i}-devices`, label: g(), subtext: U?.name ?? A, ...h, children: k })
        : (0, s.jsx)(n.rX, { label: g(), ...D, children: k });
}
