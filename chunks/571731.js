a.d(t, { A: () => C });
var n = a(627968),
    l = a(64700),
    i = a(311907),
    s = a(331322),
    r = a(834730),
    o = a(691540),
    d = a(97483),
    c = a(534514),
    u = a(404778),
    m = a(292666),
    h = a(783878),
    p = a(123292),
    x = a(821609),
    g = a(544420),
    v = a(56562),
    b = a(15285),
    _ = a(769015),
    f = a(454908),
    j = a(760751);
let A = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function y(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: l } = (0, f.I)(t.id);
    return (0, n.jsxs)(s.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != l && (0, n.jsx)(_.A, { game: l }),
            (0, n.jsxs)(s.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, n.jsx)(r.E, { variant: "text-md/normal", children: l?.name }),
                    a && (0, n.jsx)(r.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function C() {
    let e = (0, i.bG)([b.Ay], () => b.Ay.getRunningGames()),
        t = (0, i.bG)([b.Ay], () => b.Ay.getDebugRunningGame()),
        [a, r] = (0, l.useState)(t?.id ?? ""),
        _ = (0, l.useMemo)(
            () =>
                A.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        f = (e) => {
            if (null == e || "" === e) return void (0, g.xt)(null);
            let t = j.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, o.P0)({
                    id: "devtools-set-debug-game-error",
                    type: d.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, g.xt)({
                id: t.id,
                name: t.name,
                exeName: a.name,
                exePath: "",
                lastFocused: Date.now() / 1e3,
                pid: -1,
                pidPath: [],
                hidden: !1,
                elevated: !1,
                processName: a.name,
                distributor: n,
                windowHandle: void 0,
                fullscreenType: v.aI.UNKNOWN,
                cmdLine: "",
                nativeProcessObserverId: -1,
            });
        };
    return (0, n.jsxs)(s.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, n.jsxs)(s.B, {
                gap: 8,
                children: [
                    (0, n.jsx)(c.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, n.jsx)("div", {
                            children: e.map((e) =>
                                (0, n.jsx)(y, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, n.jsx)(u.c, {}),
            (0, n.jsxs)(s.B, {
                gap: 8,
                children: [
                    (0, n.jsx)(c.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, n.jsx)(m.k, { label: "Custom Game ID", value: a, onChange: r }),
                    (0, n.jsx)(h.Z, {
                        label: "Pick a Preset Game",
                        options: _,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            f(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, n.jsxs)(s.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, n.jsx)(p.Q, { variant: "secondary", text: "Clear", onClick: () => f(null) }),
                            (0, n.jsx)(x.$, { variant: "primary", text: "Detect Game", onClick: () => f(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
