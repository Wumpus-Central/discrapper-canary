l.d(t, { H: () => d });
var n = l(627968),
    i = l(64700),
    s = l(477782),
    a = l(827343),
    r = l(74848),
    o = l(731854),
    c = l(985018);
function d(e) {
    let {
            deviceType: t,
            analyticsLocations: l,
            asSubmenu: d = !1,
            onDeviceSelect: u,
            selectedDeviceId: h,
            menuGroupOverrideProps: g,
            menuItemOverrideProps: f,
            computeMenuRadioItemOverrideProps: A,
        } = e,
        { setDevice: v, getLabel: _ } = {
            [o.oh.AUDIO_INPUT]: { setDevice: a.A.setInputDevice, getLabel: () => c.intl.string(c.t.ElbIXN) },
            [o.oh.AUDIO_OUTPUT]: { setDevice: a.A.setOutputDevice, getLabel: () => c.intl.string(c.t["6Ww0iH"]) },
            [o.oh.VIDEO_INPUT]: { setDevice: a.A.setVideoDevice, getLabel: () => c.intl.string(c.t.F122Gz) },
        }[t],
        m = (0, r.tR)(t),
        { id: p, name: x } = (0, r.x5)(t),
        C = h ?? p,
        E = i.useMemo(
            () =>
                m.find((e) => {
                    let { id: t } = e;
                    return t === C;
                }),
            [m, C],
        ),
        I = m.map((e) => {
            let i,
                { id: a, disabled: o, name: c } = e,
                d = c,
                h = (0, r.d)(c);
            return (
                null != h && ((d = h.prefix), (i = h.subName)),
                (0, n.jsx)(
                    s.iD,
                    {
                        id: `${t}-${a}`,
                        group: `${t}-devices`,
                        disabled: o,
                        label: d,
                        subtext: i,
                        checked: a === C,
                        action: () => {
                            (u?.(a) ?? !0) && v(a, { analyticsLocations: l });
                        },
                        ...A?.(a),
                    },
                    `${t}-${a}`,
                )
            );
        });
    return d
        ? (0, n.jsx)(s.Dr, { id: `${t}-devices`, label: _(), subtext: E?.name ?? x, ...f, children: I })
        : (0, n.jsx)(s.rX, { label: _(), ...g, children: I });
}
