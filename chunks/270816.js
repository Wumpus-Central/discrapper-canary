t.d(i, { H: () => o });
var s = t(477900),
    d = t(582128),
    c = t(477782),
    l = t(827343),
    n = t(74848),
    r = t(106713),
    u = t(731854),
    a = t(375708);
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
            [u.oh.AUDIO_INPUT]: { setDevice: l.A.setInputDevice, getLabel: () => a.intl.string(a.t.ElbIXN) },
            [u.oh.AUDIO_OUTPUT]: { setDevice: l.A.setOutputDevice, getLabel: () => a.intl.string(a.t["6Ww0iH"]) },
            [u.oh.VIDEO_INPUT]: { setDevice: l.A.setVideoDevice, getLabel: () => a.intl.string(a.t.F122Gz) },
        }[i],
        x = (0, n.tR)(i),
        f = (0, n.x5)(i),
        A = p ?? f.id,
        U = d.useMemo(
            () =>
                x.find((e) => {
                    let { id: i } = e;
                    return i === A;
                }),
            [x, A],
        ),
        { showDeviceFormFactorIndicators: $ } = r.A.useConfig({ location: "useDeviceMenuItems" }),
        k = x.map((e) => {
            let { prefix: d, subName: l } = (0, n.d)(e),
                r = {};
            if ($) {
                let i = (0, n.d4)(e);
                r = { leadingAccessory: { type: "icon", icon: i }, leftIcon: i };
            }
            return (0, s.jsx)(
                c.iD,
                {
                    id: `${i}-${e.id}`,
                    group: `${i}-devices`,
                    disabled: e.disabled,
                    label: d,
                    subtext: l,
                    checked: e.id === A,
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
        ? (0, s.jsx)(c.Dr, { id: `${i}-devices`, label: g(), subtext: (0, n.d)(U ?? f).prefix, ...h, children: k })
        : (0, s.jsx)(c.rX, { label: g(), ...D, children: k });
}
