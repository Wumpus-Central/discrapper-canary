"use strict";
n.d(t, { A: () => h }), n(321073);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(955572),
    o = n(775602),
    l = n(406360),
    u = n(614738),
    c = n(954571),
    d = n(964404),
    _ = n(652215),
    f = n(985018),
    p = n(927961);
function h() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n,
            highContrastMode: h,
            switchIconsEnabled: m,
        } = (0, i.cf)([o.A], () => ({
            saturation: o.A.saturation,
            useReducedMotion: o.A.useReducedMotion,
            roleStyle: o.A.roleStyle,
            highContrastMode: o.A.isHighContrastModeEnabled,
            switchIconsEnabled: o.A.isSwitchIconsEnabled,
        })),
        g = (0, i.bG)([o.A], () => o.A.displayNameStylesEnabled),
        E = (0, u.y)("useAccessibilityItems"),
        A = (0, i.bG)([d.Ay], () => d.Ay.hdrDynamicRange),
        I = (0, l.i)("useAccessibilityItems"),
        T = [
            { name: f.intl.string(f.t.D5Fma9), value: "no-limit" },
            { name: f.intl.string(f.t.ldcGIH), value: "standard" },
        ],
        y = [
            { name: f.intl.string(f.t.YEOEi6), value: "username" },
            { name: f.intl.string(f.t.mQaro3), value: "dot" },
            { name: f.intl.string(f.t.Ji2EVJ), value: "hidden" },
        ];
    function S() {
        c.default.track(_.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !g }), (0, s.Dm)(!g);
    }
    let v = [
        (0, r.jsx)(
            a.rXV,
            {
                children: (0, r.jsx)(a.sLh, {
                    id: "reduced-motion",
                    label: f.intl.string(f.t.b3XBzg),
                    checked: t,
                    action: () => (0, s.qz)(t ? "no-preference" : "reduce"),
                }),
            },
            "reduced-motion",
        ),
        (0, r.jsx)(
            a.rXV,
            {
                children: (0, r.jsx)(a.sLh, {
                    id: "high-contrast",
                    label: f.intl.string(f.t.aZlePv),
                    checked: h,
                    action: () => (0, s.uh)(h ? o._.DEFAULT : o._.HIGH),
                }),
            },
            "high-contrast",
        ),
        (0, r.jsx)(
            a.rXV,
            {
                children: (0, r.jsx)(a.aK1, {
                    id: "input",
                    label: f.intl.string(f.t["5PWWCY"]),
                    control: (t, n) =>
                        (0, r.jsx)(a.i42, {
                            ...t,
                            ref: n,
                            value: 100 * e,
                            onChange: (e) => (0, s.HU)(e / 100),
                            "aria-label": f.intl.string(f.t["5PWWCY"]),
                        }),
                }),
            },
            "input",
        ),
    ];
    return (
        I &&
            v.push(
                (0, r.jsx)(
                    a.rXV,
                    {
                        children: (0, r.jsx)(a.Drp, {
                            id: "hdr-dynamic-range",
                            label: f.intl.string(f.t.nemtgW),
                            children: T.map((e) => {
                                let { name: t, value: n } = e;
                                return (0, r.jsx)(
                                    a.iDA,
                                    {
                                        id: n,
                                        group: "hdr-dynamic-range",
                                        checked: n === A,
                                        label: t,
                                        action: () => (0, s.FU)(n),
                                    },
                                    n,
                                );
                            }),
                        }),
                    },
                    "hdr-dynamic-range",
                ),
            ),
        v.push(
            (0, r.jsx)(
                a.rXV,
                {
                    children: (0, r.jsx)(a.Drp, {
                        id: "role-colors",
                        label: f.intl.string(f.t.uSOPWm),
                        children: y.map((e) => {
                            let { name: t, value: i } = e;
                            return (0, r.jsx)(
                                a.iDA,
                                { id: i, group: "role-colors", checked: i === n, label: t, action: () => (0, s.IX)(i) },
                                i,
                            );
                        }),
                    }),
                },
                "role-colors",
            ),
            (0, r.jsx)(
                a.rXV,
                {
                    children: (0, r.jsx)(a.sLh, {
                        id: "display-name-styles",
                        label: f.intl.string(p.default["2gFUEw"]),
                        checked: g,
                        action: S,
                    }),
                },
                "display-name-styles",
            ),
        ),
        E &&
            v.push(
                (0, r.jsx)(
                    a.rXV,
                    {
                        children: (0, r.jsx)(a.sLh, {
                            id: "switch-icons",
                            label: f.intl.string(f.t["S3z+pV"]),
                            checked: m,
                            action: () => (0, s.Gm)(!m),
                        }),
                    },
                    "switch-icons",
                ),
            ),
        v
    );
}
