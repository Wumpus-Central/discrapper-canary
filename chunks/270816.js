"use strict";
n.d(t, { H: () => c });
var i = n(627968),
    r = n(64700),
    s = n(477782),
    a = n(827343),
    o = n(74848),
    l = n(731854),
    u = n(375708);
function c(e) {
    let {
            deviceType: t,
            analyticsLocations: n,
            asSubmenu: c = !1,
            onDeviceSelect: d,
            selectedDeviceId: _,
            menuGroupOverrideProps: f,
            menuItemOverrideProps: h,
            computeMenuRadioItemOverrideProps: p,
        } = e,
        { setDevice: E, getLabel: m } = {
            [l.oh.AUDIO_INPUT]: { setDevice: a.A.setInputDevice, getLabel: () => u.intl.string(u.t.ElbIXN) },
            [l.oh.AUDIO_OUTPUT]: { setDevice: a.A.setOutputDevice, getLabel: () => u.intl.string(u.t["6Ww0iH"]) },
            [l.oh.VIDEO_INPUT]: { setDevice: a.A.setVideoDevice, getLabel: () => u.intl.string(u.t.F122Gz) },
        }[t],
        g = (0, o.tR)(t),
        { id: A, name: I } = (0, o.x5)(t),
        T = _ ?? A,
        S = r.useMemo(
            () =>
                g.find((e) => {
                    let { id: t } = e;
                    return t === T;
                }),
            [g, T],
        ),
        N = g.map((e) => {
            let r,
                { id: a, disabled: l, name: u } = e,
                c = u,
                _ = (0, o.d)(u);
            return (
                null != _ && ((c = _.prefix), (r = _.subName)),
                (0, i.jsx)(
                    s.iD,
                    {
                        id: `${t}-${a}`,
                        group: `${t}-devices`,
                        disabled: l,
                        label: c,
                        subtext: r,
                        checked: a === T,
                        action: () => {
                            (d?.(a) ?? !0) && E(a, { analyticsLocations: n });
                        },
                        ...p?.(a),
                    },
                    `${t}-${a}`,
                )
            );
        });
    return c
        ? (0, i.jsx)(s.Dr, { id: `${t}-devices`, label: m(), subtext: S?.name ?? I, ...h, children: N })
        : (0, i.jsx)(s.rX, { label: m(), ...f, children: N });
}
