"use strict";
n.d(t, { H: () => u });
var i = n(627968),
    r = n(64700),
    a = n(477782),
    s = n(827343),
    l = n(74848),
    o = n(106713),
    d = n(731854),
    c = n(375708);
function u(e) {
    let {
            deviceType: t,
            analyticsLocations: n,
            asSubmenu: u = !1,
            onDeviceSelect: _,
            selectedDeviceId: E,
            menuGroupOverrideProps: A,
            menuItemOverrideProps: h,
            computeMenuRadioItemOverrideProps: I,
        } = e,
        { setDevice: f, getLabel: p } = {
            [d.oh.AUDIO_INPUT]: { setDevice: s.A.setInputDevice, getLabel: () => c.intl.string(c.t.ElbIXN) },
            [d.oh.AUDIO_OUTPUT]: { setDevice: s.A.setOutputDevice, getLabel: () => c.intl.string(c.t["6Ww0iH"]) },
            [d.oh.VIDEO_INPUT]: { setDevice: s.A.setVideoDevice, getLabel: () => c.intl.string(c.t.F122Gz) },
        }[t],
        T = (0, l.tR)(t),
        { id: m, name: g } = (0, l.x5)(t),
        S = E ?? m,
        N = r.useMemo(
            () =>
                T.find((e) => {
                    let { id: t } = e;
                    return t === S;
                }),
            [T, S],
        ),
        { showDeviceFormFactorIndicators: C } = o.A.useConfig({ location: "useDeviceMenuItems" }),
        R = T.map((e) => {
            let r,
                s = e.name,
                o = (0, l.d)(e.name);
            null != o && ((s = o.prefix), (r = o.subName));
            let d = {};
            if (C) {
                let n = (0, l.d4)(e, t);
                d = { leadingAccessory: { type: "icon", icon: n }, leftIcon: n };
            }
            return (0, i.jsx)(
                a.iD,
                {
                    id: `${t}-${e.id}`,
                    group: `${t}-devices`,
                    disabled: e.disabled,
                    label: s,
                    subtext: r,
                    checked: e.id === S,
                    action: () => {
                        (_?.(e.id) ?? !0) && f(e.id, { analyticsLocations: n });
                    },
                    ...I?.(e.id),
                    ...d,
                },
                `${t}-${e.id}`,
            );
        });
    return u
        ? (0, i.jsx)(a.Dr, { id: `${t}-devices`, label: p(), subtext: N?.name ?? g, ...h, children: R })
        : (0, i.jsx)(a.rX, { label: p(), ...A, children: R });
}
