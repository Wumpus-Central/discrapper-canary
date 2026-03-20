"use strict";
n.d(t, { A: () => E }), n(321073);
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
    _ = n(358776),
    f = n(361082),
    p = n(652215),
    h = n(985018),
    m = n(241015);
function E() {
    let e = (0, _.bp)("useAccessibilityItems"),
        t = (0, f.A)(),
        {
            saturation: n,
            useReducedMotion: E,
            roleStyle: g,
            highContrastMode: A,
            switchIconsEnabled: I,
        } = (0, i.cf)([o.A], () => ({
            saturation: o.A.saturation,
            useReducedMotion: o.A.useReducedMotion,
            roleStyle: o.A.roleStyle,
            highContrastMode: o.A.isHighContrastModeEnabled,
            switchIconsEnabled: o.A.isSwitchIconsEnabled,
        })),
        T = (0, i.bG)([o.A], () => o.A.displayNameStylesEnabled),
        S = (0, u.y)("useAccessibilityItems"),
        y = (0, i.bG)([d.Ay], () => d.Ay.hdrDynamicRange),
        v = (0, l.i)("useAccessibilityItems"),
        N = [
            { name: h.intl.string(h.t.D5Fma9), value: "no-limit" },
            { name: h.intl.string(h.t.ldcGIH), value: "standard" },
        ],
        C = [
            { name: h.intl.string(h.t.YEOEi6), value: "username" },
            { name: h.intl.string(h.t.mQaro3), value: "dot" },
            { name: h.intl.string(h.t.Ji2EVJ), value: "hidden" },
        ];
    function R() {
        c.default.track(p.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !T }), (0, a.Dm)(!T);
    }
    let O = [
        (0, r.jsx)(
            s.rXV,
            {
                children: (0, r.jsx)(s.sLh, {
                    id: "reduced-motion",
                    label: h.intl.string(h.t.b3XBzg),
                    checked: E,
                    action: () => (0, a.qz)(E ? "no-preference" : "reduce"),
                }),
            },
            "reduced-motion",
        ),
        (0, r.jsx)(
            s.rXV,
            {
                children: (0, r.jsx)(s.sLh, {
                    id: "high-contrast",
                    label: h.intl.string(h.t.aZlePv),
                    checked: A,
                    action: () => (0, a.uh)(A ? o._.DEFAULT : o._.HIGH),
                }),
            },
            "high-contrast",
        ),
        (0, r.jsx)(
            s.rXV,
            {
                children: (0, r.jsx)(s.aK1, {
                    id: "input",
                    label: h.intl.string(h.t["5PWWCY"]),
                    control: (e, t) =>
                        (0, r.jsx)(s.i42, {
                            ...e,
                            ref: t,
                            value: 100 * n,
                            onChange: (e) => (0, a.HU)(e / 100),
                            "aria-label": h.intl.string(h.t["5PWWCY"]),
                        }),
                }),
            },
            "input",
        ),
    ];
    return (
        e && O.push(...t),
        v &&
            O.push(
                (0, r.jsx)(
                    s.rXV,
                    {
                        children: (0, r.jsx)(s.Drp, {
                            id: "hdr-dynamic-range",
                            label: h.intl.string(h.t.nemtgW),
                            children: N.map((e) => {
                                let { name: t, value: n } = e;
                                return (0, r.jsx)(
                                    s.iDA,
                                    {
                                        id: n,
                                        group: "hdr-dynamic-range",
                                        checked: n === y,
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
        O.push(
            (0, r.jsx)(
                s.rXV,
                {
                    children: (0, r.jsx)(s.Drp, {
                        id: "role-colors",
                        label: h.intl.string(h.t.uSOPWm),
                        children: C.map((e) => {
                            let { name: t, value: n } = e;
                            return (0, r.jsx)(
                                s.iDA,
                                { id: n, group: "role-colors", checked: n === g, label: t, action: () => (0, a.IX)(n) },
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
                        label: h.intl.string(m.default["2gFUEw"]),
                        checked: T,
                        action: R,
                    }),
                },
                "display-name-styles",
            ),
        ),
        S &&
            O.push(
                (0, r.jsx)(
                    s.rXV,
                    {
                        children: (0, r.jsx)(s.sLh, {
                            id: "switch-icons",
                            label: h.intl.string(h.t["S3z+pV"]),
                            checked: I,
                            action: () => (0, a.Gm)(!I),
                        }),
                    },
                    "switch-icons",
                ),
            ),
        O
    );
}
