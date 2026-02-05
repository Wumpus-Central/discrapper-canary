"use strict";
n.d(t, { H: () => f });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(827343),
    o = n(954571),
    l = n(74848),
    u = n(652215),
    c = n(731854),
    d = n(985018);
function _(e) {
    return {
        [c.oh.AUDIO_INPUT]: {
            setDevice: s.A.setInputDevice,
            getLabel: () => d.intl.string(d.t.ElbIXN),
            getLocation: (e) => `${e}.useInputDeviceMenuItems`,
        },
        [c.oh.AUDIO_OUTPUT]: {
            setDevice: s.A.setOutputDevice,
            getLabel: () => d.intl.string(d.t["6Ww0iH"]),
            getLocation: (e) => `${e}.useOutputDeviceMenuItems`,
        },
        [c.oh.VIDEO_INPUT]: {
            setDevice: s.A.setVideoDevice,
            getLabel: () => d.intl.string(d.t.F122Gz),
            getLocation: (e) => `${e}.useVideoDeviceMenuItems`,
        },
    }[e];
}
function f(e) {
    let {
            deviceType: t,
            analyticsLocations: n,
            asSubmenu: s = !1,
            onDeviceSelect: c,
            showAllDevices: f = !1,
            selectedDeviceId: p,
            menuGroupOverrideProps: h,
            menuItemOverrideProps: m,
            computeMenuRadioItemOverrideProps: g,
        } = e,
        { setDevice: E, getLabel: A, getLocation: I } = _(t),
        [T, y] = i.useState(f),
        S = I(n[n.length - 1]),
        [v, C] = (0, l.tR)(t, { location: S }),
        b = T ? v.concat(C) : v,
        { id: N, name: R } = (0, l.x5)(t),
        O = p ?? N,
        D = i.useMemo(
            () =>
                v.concat(C).find((e) => {
                    let { id: t } = e;
                    return t === O;
                }),
            [v, C, O],
        ),
        L = b.map((e) => {
            let i,
                { id: s, disabled: o, name: u } = e,
                d = u,
                _ = (0, l.d)(u);
            return (
                null != _ && ((d = _.prefix), (i = _.subName)),
                (0, r.jsx)(
                    a.iDA,
                    {
                        id: `${t}-${s}`,
                        group: `${t}-devices`,
                        disabled: o,
                        label: d,
                        subtext: i,
                        checked: s === O,
                        action: () => {
                            (c?.(s) ?? !0) && E(s, { analyticsLocations: n });
                        },
                        ...g?.(s),
                    },
                    `${t}-${s}`,
                )
            );
        }),
        w = (0, r.jsx)(a.Drp, {
            id: "SHOW_MORE",
            label: d.intl.string(d.t.E99UMh),
            dontCloseOnAction: !0,
            action: () => {
                y(!0),
                    o.default.track(u.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
                        device_type: t,
                        location: S,
                        shown_device_count: v.length,
                        hidden_device_count: C.length,
                        location_stack: n,
                    });
            },
        }),
        x = !T && C?.length > 0;
    return s
        ? (0, r.jsxs)(a.Drp, { id: `${t}-devices`, label: A(), subtext: D?.name ?? R, ...m, children: [L, x && w] })
        : (0, r.jsxs)(a.rXV, { label: A(), ...h, children: [L, x && w] });
}
