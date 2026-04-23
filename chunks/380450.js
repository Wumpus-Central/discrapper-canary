"use strict";
n.d(t, { A: () => m }), n(321073);
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(477782),
    a = n(964355),
    o = n(955572),
    l = n(775602),
    u = n(406360),
    c = n(614738),
    d = n(954571),
    _ = n(964404),
    f = n(361082),
    p = n(652215),
    h = n(985018),
    E = n(864386);
function m() {
    let e = (0, f.A)(),
        {
            saturation: t,
            useReducedMotion: n,
            roleStyle: m,
            highContrastMode: g,
            switchIconsEnabled: A,
        } = (0, i.cf)([l.A], () => ({
            saturation: l.A.saturation,
            useReducedMotion: l.A.useReducedMotion,
            roleStyle: l.A.roleStyle,
            highContrastMode: l.A.isHighContrastModeEnabled,
            switchIconsEnabled: l.A.isSwitchIconsEnabled,
        })),
        I = (0, i.bG)([l.A], () => l.A.displayNameStylesEnabled),
        T = (0, c.y)("useAccessibilityItems"),
        S = (0, i.bG)([_.Ay], () => _.Ay.hdrDynamicRange),
        y = (0, u.i)("useAccessibilityItems"),
        N = [
            { name: h.intl.string(h.t.D5Fma9), value: "no-limit" },
            { name: h.intl.string(h.t.ldcGIH), value: "standard" },
        ],
        v = [
            { name: h.intl.string(h.t.YEOEi6), value: "username" },
            { name: h.intl.string(h.t.mQaro3), value: "dot" },
            { name: h.intl.string(h.t.Ji2EVJ), value: "hidden" },
        ],
        C = [
            (0, r.jsx)(
                s.rX,
                {
                    children: (0, r.jsx)(s.sL, {
                        id: "reduced-motion",
                        label: h.intl.string(h.t.b3XBzg),
                        checked: n,
                        action: () => (0, o.qz)(n ? "no-preference" : "reduce"),
                    }),
                },
                "reduced-motion",
            ),
            (0, r.jsx)(
                s.rX,
                {
                    children: (0, r.jsx)(s.sL, {
                        id: "high-contrast",
                        label: h.intl.string(h.t.aZlePv),
                        checked: g,
                        action: () => (0, o.uh)(g ? l._.DEFAULT : l._.HIGH),
                    }),
                },
                "high-contrast",
            ),
            (0, r.jsx)(
                s.rX,
                {
                    children: (0, r.jsx)(s.aK, {
                        id: "input",
                        label: h.intl.string(h.t["5PWWCY"]),
                        control: (e, n) =>
                            (0, r.jsx)(a.i, {
                                ...e,
                                ref: n,
                                value: 100 * t,
                                onChange: (e) => (0, o.HU)(e / 100),
                                "aria-label": h.intl.string(h.t["5PWWCY"]),
                            }),
                    }),
                },
                "input",
            ),
        ];
    return (
        C.push(...e),
        y &&
            C.push(
                (0, r.jsx)(
                    s.rX,
                    {
                        children: (0, r.jsx)(s.Dr, {
                            id: "hdr-dynamic-range",
                            label: h.intl.string(h.t.nemtgW),
                            children: N.map((e) => {
                                let { name: t, value: n } = e;
                                return (0, r.jsx)(
                                    s.iD,
                                    {
                                        id: n,
                                        group: "hdr-dynamic-range",
                                        checked: n === S,
                                        label: t,
                                        action: () => (0, o.FU)(n),
                                    },
                                    n,
                                );
                            }),
                        }),
                    },
                    "hdr-dynamic-range",
                ),
            ),
        C.push(
            (0, r.jsx)(
                s.rX,
                {
                    children: (0, r.jsx)(s.Dr, {
                        id: "role-colors",
                        label: h.intl.string(h.t.uSOPWm),
                        children: v.map((e) => {
                            let { name: t, value: n } = e;
                            return (0, r.jsx)(
                                s.iD,
                                { id: n, group: "role-colors", checked: n === m, label: t, action: () => (0, o.IX)(n) },
                                n,
                            );
                        }),
                    }),
                },
                "role-colors",
            ),
            (0, r.jsx)(
                s.rX,
                {
                    children: (0, r.jsx)(s.sL, {
                        id: "display-name-styles",
                        label: h.intl.string(E.default["2gFUEw"]),
                        checked: I,
                        action: function () {
                            d.default.track(p.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !I }),
                                (0, o.Dm)(!I);
                        },
                    }),
                },
                "display-name-styles",
            ),
        ),
        T &&
            C.push(
                (0, r.jsx)(
                    s.rX,
                    {
                        children: (0, r.jsx)(s.sL, {
                            id: "switch-icons",
                            label: h.intl.string(h.t["S3z+pV"]),
                            checked: A,
                            action: () => (0, o.Gm)(!A),
                        }),
                    },
                    "switch-icons",
                ),
            ),
        C
    );
}
