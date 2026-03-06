"use strict";
n.d(t, { H: () => d });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(827343),
    o = n(74848),
    l = n(731854),
    u = n(985018);
function c(e) {
    return {
        [l.oh.AUDIO_INPUT]: { setDevice: a.A.setInputDevice, getLabel: () => u.intl.string(u.t.ElbIXN) },
        [l.oh.AUDIO_OUTPUT]: { setDevice: a.A.setOutputDevice, getLabel: () => u.intl.string(u.t["6Ww0iH"]) },
        [l.oh.VIDEO_INPUT]: { setDevice: a.A.setVideoDevice, getLabel: () => u.intl.string(u.t.F122Gz) },
    }[e];
}
function d(e) {
    let {
            deviceType: t,
            analyticsLocations: n,
            asSubmenu: a = !1,
            onDeviceSelect: l,
            selectedDeviceId: u,
            menuGroupOverrideProps: d,
            menuItemOverrideProps: _,
            computeMenuRadioItemOverrideProps: f,
        } = e,
        { setDevice: p, getLabel: h } = c(t),
        m = (0, o.tR)(t),
        { id: E, name: g } = (0, o.x5)(t),
        A = u ?? E,
        I = i.useMemo(
            () =>
                m.find((e) => {
                    let { id: t } = e;
                    return t === A;
                }),
            [m, A],
        ),
        T = m.map((e) => {
            let i,
                { id: a, disabled: u, name: c } = e,
                d = c,
                _ = (0, o.d)(c);
            return (
                null != _ && ((d = _.prefix), (i = _.subName)),
                (0, r.jsx)(
                    s.iDA,
                    {
                        id: `${t}-${a}`,
                        group: `${t}-devices`,
                        disabled: u,
                        label: d,
                        subtext: i,
                        checked: a === A,
                        action: () => {
                            (l?.(a) ?? !0) && p(a, { analyticsLocations: n });
                        },
                        ...f?.(a),
                    },
                    `${t}-${a}`,
                )
            );
        });
    return a
        ? (0, r.jsx)(s.Drp, { id: `${t}-devices`, label: h(), subtext: I?.name ?? g, ..._, children: T })
        : (0, r.jsx)(s.rXV, { label: h(), ...d, children: T });
}
