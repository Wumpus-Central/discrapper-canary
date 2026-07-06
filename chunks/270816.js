"use strict";
n.d(t, { H: () => d });
var i = n(627968),
    r = n(64700),
    s = n(477782),
    a = n(827343),
    o = n(74848),
    l = n(106713),
    u = n(731854),
    c = n(375708);
function d(e) {
    let {
            deviceType: t,
            analyticsLocations: n,
            asSubmenu: d = !1,
            onDeviceSelect: _,
            selectedDeviceId: h,
            menuGroupOverrideProps: f,
            menuItemOverrideProps: E,
            computeMenuRadioItemOverrideProps: p,
        } = e,
        { setDevice: m, getLabel: g } = {
            [u.oh.AUDIO_INPUT]: { setDevice: a.A.setInputDevice, getLabel: () => c.intl.string(c.t.ElbIXN) },
            [u.oh.AUDIO_OUTPUT]: { setDevice: a.A.setOutputDevice, getLabel: () => c.intl.string(c.t["6Ww0iH"]) },
            [u.oh.VIDEO_INPUT]: { setDevice: a.A.setVideoDevice, getLabel: () => c.intl.string(c.t.F122Gz) },
        }[t],
        A = (0, o.tR)(t),
        { id: I, name: T } = (0, o.x5)(t),
        S = h ?? I,
        N = r.useMemo(
            () =>
                A.find((e) => {
                    let { id: t } = e;
                    return t === S;
                }),
            [A, S],
        ),
        { showDeviceFormFactorIndicators: C } = l.A.useConfig({ location: "useDeviceMenuItems" }),
        y = A.map((e) => {
            let r,
                a = e.name,
                l = (0, o.d)(e.name);
            null != l && ((a = l.prefix), (r = l.subName));
            let u = {};
            if (C) {
                let n = (0, o.d4)(e, t);
                u = { leadingAccessory: { type: "icon", icon: n }, leftIcon: n };
            }
            return (0, i.jsx)(
                s.iD,
                {
                    id: `${t}-${e.id}`,
                    group: `${t}-devices`,
                    disabled: e.disabled,
                    label: a,
                    subtext: r,
                    checked: e.id === S,
                    action: () => {
                        (_?.(e.id) ?? !0) && m(e.id, { analyticsLocations: n });
                    },
                    ...p?.(e.id),
                    ...u,
                },
                `${t}-${e.id}`,
            );
        });
    return d
        ? (0, i.jsx)(s.Dr, { id: `${t}-devices`, label: g(), subtext: N?.name ?? T, ...E, children: y })
        : (0, i.jsx)(s.rX, { label: g(), ...f, children: y });
}
