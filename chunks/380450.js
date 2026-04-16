"use strict";
n.d(t, { A: () => m }), n(321073);
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(955572),
    o = n(775602),
    l = n(406360),
    u = n(614738),
    c = n(954571),
    d = n(964404),
    _ = n(361082),
    f = n(652215),
    p = n(985018),
    h = n(864386);
function m() {
    let e = (0, _.A)(),
        {
            saturation: t,
            useReducedMotion: n,
            roleStyle: m,
            highContrastMode: E,
            switchIconsEnabled: g,
        } = (0, i.cf)([o.A], () => ({
            saturation: o.A.saturation,
            useReducedMotion: o.A.useReducedMotion,
            roleStyle: o.A.roleStyle,
            highContrastMode: o.A.isHighContrastModeEnabled,
            switchIconsEnabled: o.A.isSwitchIconsEnabled,
        })),
        A = (0, i.bG)([o.A], () => o.A.displayNameStylesEnabled),
        I = (0, u.y)("useAccessibilityItems"),
        T = (0, i.bG)([d.Ay], () => d.Ay.hdrDynamicRange),
        S = (0, l.i)("useAccessibilityItems"),
        y = [
            { name: p.intl.string(p.t.D5Fma9), value: "no-limit" },
            { name: p.intl.string(p.t.ldcGIH), value: "standard" },
        ],
        v = [
            { name: p.intl.string(p.t.YEOEi6), value: "username" },
            { name: p.intl.string(p.t.mQaro3), value: "dot" },
            { name: p.intl.string(p.t.Ji2EVJ), value: "hidden" },
        ];
    function N() {
        c.default.track(f.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !A }), (0, a.Dm)(!A);
    }
    let C = [
        (0, r.jsx)(
            s.rXV,
            {
                children: (0, r.jsx)(s.sLh, {
                    id: "reduced-motion",
                    label: p.intl.string(p.t.b3XBzg),
                    checked: n,
                    action: () => (0, a.qz)(n ? "no-preference" : "reduce"),
                }),
            },
            "reduced-motion",
        ),
        (0, r.jsx)(
            s.rXV,
            {
                children: (0, r.jsx)(s.sLh, {
                    id: "high-contrast",
                    label: p.intl.string(p.t.aZlePv),
                    checked: E,
                    action: () => (0, a.uh)(E ? o._.DEFAULT : o._.HIGH),
                }),
            },
            "high-contrast",
        ),
        (0, r.jsx)(
            s.rXV,
            {
                children: (0, r.jsx)(s.aK1, {
                    id: "input",
                    label: p.intl.string(p.t["5PWWCY"]),
                    control: (e, n) =>
                        (0, r.jsx)(s.i42, {
                            ...e,
                            ref: n,
                            value: 100 * t,
                            onChange: (e) => (0, a.HU)(e / 100),
                            "aria-label": p.intl.string(p.t["5PWWCY"]),
                        }),
                }),
            },
            "input",
        ),
    ];
    return (
        C.push(...e),
        S &&
            C.push(
                (0, r.jsx)(
                    s.rXV,
                    {
                        children: (0, r.jsx)(s.Drp, {
                            id: "hdr-dynamic-range",
                            label: p.intl.string(p.t.nemtgW),
                            children: y.map((e) => {
                                let { name: t, value: n } = e;
                                return (0, r.jsx)(
                                    s.iDA,
                                    {
                                        id: n,
                                        group: "hdr-dynamic-range",
                                        checked: n === T,
                                        label: t,
                                        action: () => (0, a.FU)(n),
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
                s.rXV,
                {
                    children: (0, r.jsx)(s.Drp, {
                        id: "role-colors",
                        label: p.intl.string(p.t.uSOPWm),
                        children: v.map((e) => {
                            let { name: t, value: n } = e;
                            return (0, r.jsx)(
                                s.iDA,
                                { id: n, group: "role-colors", checked: n === m, label: t, action: () => (0, a.IX)(n) },
                                n,
                            );
                        }),
                    }),
                },
                "role-colors",
            ),
            (0, r.jsx)(
                s.rXV,
                {
                    children: (0, r.jsx)(s.sLh, {
                        id: "display-name-styles",
                        label: p.intl.string(h.default["2gFUEw"]),
                        checked: A,
                        action: N,
                    }),
                },
                "display-name-styles",
            ),
        ),
        I &&
            C.push(
                (0, r.jsx)(
                    s.rXV,
                    {
                        children: (0, r.jsx)(s.sLh, {
                            id: "switch-icons",
                            label: p.intl.string(p.t["S3z+pV"]),
                            checked: g,
                            action: () => (0, a.Gm)(!g),
                        }),
                    },
                    "switch-icons",
                ),
            ),
        C
    );
}
