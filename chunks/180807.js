"use strict";
n.d(t, { A: () => p }), n(321073);
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(477782),
    a = n(964355),
    o = n(955572),
    l = n(775602),
    d = n(406360),
    _ = n(614738),
    u = n(954571),
    c = n(964404),
    E = n(873298),
    h = n(253932),
    m = n(985018),
    f = n(652215),
    g = n(864386);
function p() {
    let e,
        t,
        n =
            ((e = h.hH.useSetting()),
            (t = h.Xi.useSetting()),
            [
                (0, i.jsxs)(
                    s.rX,
                    {
                        label: m.intl.string(m.t["C/5V0A"]),
                        children: [
                            (0, i.jsx)(s.iD, {
                                id: "compact-ui",
                                group: "list-density",
                                label: m.intl.string(m.t["7iegX4"]),
                                checked: t === E.NS.COMPACT,
                                action: () => {
                                    h.Xi.updateSetting(E.NS.COMPACT);
                                },
                            }),
                            (0, i.jsx)(s.iD, {
                                id: "default-ui",
                                group: "list-density",
                                label: m.intl.string(m.t.bBvAEH),
                                checked: t === E.NS.DEFAULT,
                                action: () => {
                                    h.Xi.updateSetting(E.NS.DEFAULT);
                                },
                            }),
                            (0, i.jsx)(s.iD, {
                                id: "cozy-ui",
                                group: "list-density",
                                label: m.intl.string(m.t["4cuYHx"]),
                                checked: t === E.NS.COZY,
                                action: () => {
                                    h.Xi.updateSetting(E.NS.COZY);
                                },
                            }),
                        ],
                    },
                    "list-density",
                ),
                (0, i.jsxs)(
                    s.rX,
                    {
                        label: m.intl.string(m.t.nKRoPv),
                        children: [
                            (0, i.jsx)(s.iD, {
                                id: "cozy-chat",
                                group: "chat-density",
                                label: m.intl.string(m.t.Jqj4cZ),
                                checked: !e,
                                action: () => {
                                    h.hH.updateSetting(!1), (0, o.AC)();
                                },
                            }),
                            (0, i.jsx)(s.iD, {
                                id: "compact-chat",
                                group: "chat-density",
                                label: m.intl.string(m.t["1JNcPS"]),
                                checked: e,
                                action: () => {
                                    h.hH.updateSetting(!0), (0, o.AC)();
                                },
                            }),
                        ],
                    },
                    "chat-density",
                ),
            ]),
        {
            saturation: p,
            useReducedMotion: A,
            roleStyle: I,
            highContrastMode: T,
            switchIconsEnabled: S,
        } = (0, r.cf)([l.A], () => ({
            saturation: l.A.saturation,
            useReducedMotion: l.A.useReducedMotion,
            roleStyle: l.A.roleStyle,
            highContrastMode: l.A.isHighContrastModeEnabled,
            switchIconsEnabled: l.A.isSwitchIconsEnabled,
        })),
        N = (0, r.bG)([l.A], () => l.A.displayNameStylesEnabled),
        C = (0, _.y)("useAccessibilityItems"),
        R = (0, r.bG)([c.Ay], () => c.Ay.hdrDynamicRange),
        O = (0, d.i)("useAccessibilityItems"),
        y = [
            { name: m.intl.string(m.t.D5Fma9), value: "no-limit" },
            { name: m.intl.string(m.t.ldcGIH), value: "standard" },
        ],
        v = [
            { name: m.intl.string(m.t.YEOEi6), value: "username" },
            { name: m.intl.string(m.t.mQaro3), value: "dot" },
            { name: m.intl.string(m.t.Ji2EVJ), value: "hidden" },
        ],
        D = [
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.sL, {
                        id: "reduced-motion",
                        label: m.intl.string(m.t.b3XBzg),
                        checked: A,
                        action: () => (0, o.qz)(A ? "no-preference" : "reduce"),
                    }),
                },
                "reduced-motion",
            ),
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.sL, {
                        id: "high-contrast",
                        label: m.intl.string(m.t.aZlePv),
                        checked: T,
                        action: () => (0, o.uh)(T ? l._.DEFAULT : l._.HIGH),
                    }),
                },
                "high-contrast",
            ),
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.aK, {
                        id: "input",
                        label: m.intl.string(m.t["5PWWCY"]),
                        control: (e, t) =>
                            (0, i.jsx)(a.i, {
                                ...e,
                                ref: t,
                                value: 100 * p,
                                onChange: (e) => (0, o.HU)(e / 100),
                                "aria-label": m.intl.string(m.t["5PWWCY"]),
                            }),
                    }),
                },
                "input",
            ),
        ];
    return (
        D.push(...n),
        O &&
            D.push(
                (0, i.jsx)(
                    s.rX,
                    {
                        children: (0, i.jsx)(s.Dr, {
                            id: "hdr-dynamic-range",
                            label: m.intl.string(m.t.nemtgW),
                            children: y.map((e) => {
                                let { name: t, value: n } = e;
                                return (0, i.jsx)(
                                    s.iD,
                                    {
                                        id: n,
                                        group: "hdr-dynamic-range",
                                        checked: n === R,
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
        D.push(
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.Dr, {
                        id: "role-colors",
                        label: m.intl.string(m.t.uSOPWm),
                        children: v.map((e) => {
                            let { name: t, value: n } = e;
                            return (0, i.jsx)(
                                s.iD,
                                { id: n, group: "role-colors", checked: n === I, label: t, action: () => (0, o.IX)(n) },
                                n,
                            );
                        }),
                    }),
                },
                "role-colors",
            ),
            (0, i.jsx)(
                s.rX,
                {
                    children: (0, i.jsx)(s.sL, {
                        id: "display-name-styles",
                        label: m.intl.string(g.default["2gFUEw"]),
                        checked: N,
                        action: function () {
                            u.default.track(f.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, { enabled: !N }),
                                (0, o.Dm)(!N);
                        },
                    }),
                },
                "display-name-styles",
            ),
        ),
        C &&
            D.push(
                (0, i.jsx)(
                    s.rX,
                    {
                        children: (0, i.jsx)(s.sL, {
                            id: "switch-icons",
                            label: m.intl.string(m.t["S3z+pV"]),
                            checked: S,
                            action: () => (0, o.Gm)(!S),
                        }),
                    },
                    "switch-icons",
                ),
            ),
        D
    );
}
