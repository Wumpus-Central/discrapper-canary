n.d(t, { A: () => p });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    r = n(544420),
    o = n(56562),
    d = n(15285),
    c = n(885151),
    u = n(769015),
    m = n(760751);
let h = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function x(e) {
    let { runningGame: t, isDebugGame: n } = e,
        { data: i } = (0, c.k)(t.id);
    return (0, a.jsxs)(l.BJc, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != i && (0, a.jsx)(u.A, { game: i }),
            (0, a.jsxs)(l.BJc, {
                justify: "center",
                gap: 0,
                children: [
                    (0, a.jsx)(l.Text, { variant: "text-md/normal", children: i?.name }),
                    n && (0, a.jsx)(l.Text, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function p() {
    let e = (0, s.bG)([d.Ay], () => d.Ay.getRunningGames()),
        t = (0, s.bG)([d.Ay], () => d.Ay.getDebugRunningGame()),
        [n, c] = (0, i.useState)(t?.id ?? ""),
        u = (0, i.useMemo)(
            () =>
                h.map((e) => {
                    let { label: t, value: n } = e;
                    return { label: t, value: n, id: n };
                }),
            [],
        ),
        p = (e) => {
            if (null == e || "" === e) return void (0, r.xt)(null);
            let t = m.A.getDetectableGame(e),
                n = t?.executables[0],
                a = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == n)
                return (0, l.showToast)({
                    id: "devtools-set-debug-game-error",
                    type: l.ToastType.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, r.xt)({
                id: t.id,
                name: t.name,
                exeName: n.name,
                exePath: "",
                lastFocused: Date.now() / 1e3,
                pid: -1,
                pidPath: [],
                hidden: !1,
                elevated: !1,
                processName: n.name,
                distributor: a,
                windowHandle: void 0,
                fullscreenType: o.aI.UNKNOWN,
                cmdLine: "",
                nativeProcessObserverId: -1,
            });
        };
    return (0, a.jsxs)(l.BJc, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, a.jsxs)(l.BJc, {
                gap: 8,
                children: [
                    (0, a.jsx)(l.Heading, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, a.jsx)("div", {
                            children: e.map((e) =>
                                (0, a.jsx)(x, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, a.jsx)(l.cGx, {}),
            (0, a.jsxs)(l.BJc, {
                gap: 8,
                children: [
                    (0, a.jsx)(l.Heading, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, a.jsx)(l.ksK, { label: "Custom Game ID", value: n, onChange: c }),
                    (0, a.jsx)(l.ZiE, {
                        label: "Pick a Preset Game",
                        options: u,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            p(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, a.jsxs)(l.BJc, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, a.jsx)(l.QWc, { variant: "secondary", text: "Clear", onClick: () => p(null) }),
                            (0, a.jsx)(l.Button, { variant: "primary", text: "Detect Game", onClick: () => p(n) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
