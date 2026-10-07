t.d(i, { H: () => o });
var d = t(477900),
    s = t(582128),
    c = t(477782),
    l = t(827343),
    n = t(74848),
    u = t(106713),
    a = t(731854),
    r = t(660183);
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
        { setDevice: f, getLabel: I } = {
            [a.oh.AUDIO_INPUT]: { setDevice: l.default.setInputDevice, getLabel: () => r.intl.string(r.t.ElbIXN) },
            [a.oh.AUDIO_OUTPUT]: { setDevice: l.default.setOutputDevice, getLabel: () => r.intl.string(r.t["6Ww0iH"]) },
            [a.oh.VIDEO_INPUT]: { setDevice: l.default.setVideoDevice, getLabel: () => r.intl.string(r.t.F122Gz) },
        }[i],
        g = (0, n.tR)(i),
        x = (0, n.x5)(i),
        U = p ?? x.id,
        $ = s.useMemo(
            () =>
                g.find((e) => {
                    let { id: i } = e;
                    return i === U;
                }),
            [g, U],
        ),
        { showDeviceFormFactorIndicators: k } = u.A.useConfig({ location: "useDeviceMenuItems" }),
        O = g.map((e) => {
            let { prefix: s, subName: l } = (0, n.d)(e),
                u = {};
            if (k) {
                let i = (0, n.d4)(e);
                u = { leadingAccessory: { type: "icon", icon: i }, leftIcon: i };
            }
            return (0, d.jsx)(
                c.iD,
                {
                    id: `${i}-${e.id}`,
                    group: `${i}-devices`,
                    disabled: e.disabled,
                    label: s,
                    subtext: l,
                    checked: e.id === U,
                    action: () => {
                        (b?.(e.id) ?? !0) && f(e.id, { analyticsLocations: t });
                    },
                    ...v?.(e.id),
                    ...u,
                },
                `${i}-${e.id}`,
            );
        });
    return o
        ? (0, d.jsx)(c.Dr, { id: `${i}-devices`, label: I(), subtext: (0, n.d)($ ?? x).prefix, ...h, children: O })
        : (0, d.jsx)(c.rX, { label: I(), ...D, children: O });
}
