(a.d(t, { x: () => xZ }), a(321073));
var n,
    l,
    i,
    s,
    r = a(477900),
    o = a(582128),
    d = a(855986),
    c = a(314116),
    u = a(270003),
    m = a(143129),
    h = a(532446),
    p = a(821609),
    g = a(834730),
    x = a(95362),
    v = a(611677),
    b = a(404778),
    j = a(691885),
    f = a(95477),
    y = a(77729),
    E = a(73153),
    C = a(865116);
function S(e, t) {
    let a = "boolean" == typeof t ? t : !C.Ay.get(e);
    E.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var _ = a(986322),
    N = a(905552),
    A = a(718197),
    k = a(157257),
    D = a(507868),
    I = a(419490),
    T = a(489496),
    R = a(325392),
    O = a(574206),
    w = a(564973),
    M = a(227628),
    P = a(468550),
    L = a(196765);
let U = (0, L.v)(() => ({ enabled: !1, pending: null, lastResult: null }));
function G(e) {
    U.setState({ enabled: e });
}
function F(e) {
    U.setState({ pending: e });
}
function B(e) {
    U.setState({ lastResult: e });
}
var $ = a(781710),
    V = a(696016),
    W = a(264572).hp;
function H() {
    let e = U((e) => e.enabled),
        t = U((e) => e.pending),
        a = U((e) => e.lastResult),
        n = o.useCallback(async (e, t, a, n) => {
            let l = A.Ay.getMediaEngine();
            if (null == l.setClipsPerfMonitoring) return (B("setClipsPerfMonitoring unsupported in this build"), null);
            F(n);
            try {
                let n = await l.setClipsPerfMonitoring(e, t, a);
                return (G(n.enabled), n);
            } catch (e) {
                return (B(`${n} failed: ${e instanceof Error ? e.message : String(e)}`), null);
            } finally {
                F(null);
            }
        }, []),
        l = o.useCallback(
            async (t) => {
                G(t);
                let a = await n(t, !1, !1, t ? "enable" : "disable");
                null != a ? B(`recorder ${a.enabled ? "enabled" : "disabled"}`) : G(e);
            },
            [n, e],
        ),
        i = o.useCallback(async () => {
            let t = await n(e, !0, !1, "save");
            if (null == t) return;
            if ("" === t.html) return void B("save: server returned empty html");
            let a = `clips-perf-${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            try {
                let e = W.from(t.html, "utf8"),
                    n = await y.A.fileManager.saveWithDialog2(e, a);
                if (null != n && !0 === n.canceledByUser) return void B("save: canceled");
                B(`saved ${t.eventCount} events (${t.html.length} bytes)`);
            } catch (e) {
                B(`save failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, [n, e]),
        s = o.useCallback(async () => {
            let t = await n(e, !1, !0, "clear");
            null != t && B(`cleared ${t.eventCount} events`);
        }, [n, e]);
    return (0, r.jsxs)(u.n, {
        label: "Clips v3 Performance",
        children: [
            (0, r.jsx)(m.d, {
                label: "Record Clips v3 performance",
                description: "Toggles the in-process perf recorder inside discord_clips.exe.",
                checked: e,
                disabled: null != t,
                onChange: l,
            }),
            (0, r.jsxs)(h.M, {
                children: [
                    (0, r.jsx)(p.$, { text: "Save as file...", disabled: null != t, onClick: i }),
                    (0, r.jsx)(p.$, { text: "Clear recording", variant: "secondary", disabled: null != t, onClick: s }),
                ],
            }),
            (null != t || null != a) &&
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: null != t ? `working: ${t}...` : a,
                }),
        ],
    });
}
let z = [
    { label: "Laughter Model", flag: V.pZ.LAUGHTER },
    { label: "Shouting Model", flag: V.pZ.SHOUTING },
    { label: "Events", flag: V.pZ.GAME_EVENTS },
];
function K() {
    let e = (0, d.bG)([D.A], () => D.A.isStaffBypassDisabled()),
        t = (0, d.bG)([D.A], () => D.A.isStaffBypassActive()),
        a = (0, d.bG)([D.A], () => D.A.hasLoadedCapabilities()),
        n = (0, d.bG)([D.A], () => D.A.getGameCapabilities().size),
        l = (0, d.bG)([_.Ay], () => _.Ay.getVisibleGame()),
        i = l?.id,
        s = (0, d.bG)([D.A], () => D.A.getCapabilities(i), [i]),
        o = (0, d.bG)([D.A], () => null != i && D.A.getGameCapabilities().has(i), [i]),
        c = (0, d.bG)([D.A], () => D.A.isGameAllowed(i), [i]);
    return (0, r.jsxs)(u.n, {
        label: "Autoclipping Game Capabilities",
        children: [
            (0, r.jsx)(m.d, {
                label: "Ignore staff bypass",
                description:
                    "Staff normally get autoclipping for every game. Turn this on to be treated as a regular user, so autoclipping follows the server capabilities map. Resets to off each time Discord launches.",
                checked: e,
                onChange: T.jE,
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-md/normal",
                children: ["capabilities: ", a ? `loaded, ${n} game(s)` : "not loaded yet"],
            }),
            (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["staff bypass active: ", String(t)] }),
            null == l
                ? (0, r.jsx)(g.E, { variant: "body-md/normal", children: "no visible game running" })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(g.E, { variant: "body-md/normal", children: [l.name, " (", l.id, ")"] }),
                          (0, r.jsxs)(g.E, {
                              variant: "body-md/normal",
                              children: ["autoclipping: ", c ? "Yes" : "No"],
                          }),
                          (0, r.jsxs)(g.E, {
                              variant: "body-md/normal",
                              children: ["in capabilities map: ", o ? "Yes" : "No", " (bitmask ", s, ")"],
                          }),
                          z.map((e) => {
                              let { label: t, flag: a } = e;
                              return (0, r.jsxs)(
                                  g.E,
                                  { variant: "body-md/normal", children: [t, ": ", (s & a) != 0 ? "Yes" : "No"] },
                                  t,
                              );
                          }),
                          !o &&
                              c &&
                              (0, r.jsx)(g.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children:
                                      'This game isn\'t in the map \u2014 autoclipping is on via the staff bypass, so every capability above reads No. Turn on "Ignore staff bypass" to see what a regular user gets.',
                              }),
                      ],
                  }),
            (0, r.jsx)(p.$, {
                text: "refetch capabilities",
                variant: "secondary",
                disabled: null == i,
                onClick: () => {
                    null != i && w.b.refetchMany([i]);
                },
            }),
        ],
    });
}
function Y(e, t) {
    let a = new O.k(e);
    for (let e of t) a.recordSavedClip(e);
    return (a.end(), a);
}
function q() {
    let e = (0, d.bG)([C.Ay], () => C.Ay.get("clips_ignore_platform_requirement")),
        t = (0, M.MZ)((e) => e.isOpen),
        a = (0, P.sY)((e) => e.isOpen),
        [n, l] = o.useState(3),
        i = o.useCallback((e) => {
            let t = Object.values(I.Ay.getClips()),
                a = t.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = t.filter((e) => e.applicationId === n).slice(0, e);
            (I.Ay.devSetLastClipsSession(Y(n, l)), (0, P.M8)(n));
        }, []),
        s = o.useCallback(
            (e) => {
                e ? i(n) : (0, P.kF)();
            },
            [i, n],
        ),
        E = o.useCallback(() => {
            let e = Object.values(I.Ay.getClips()),
                t = (0, N.A)(_.Ay, k.A),
                a =
                    (t?.id != null ? e.find((e) => e.applicationId === t.id) : void 0) ??
                    e.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = e.filter((e) => e.applicationId === n).slice(0, 10);
            (I.Ay.devSetLastClipsSession(Y(n, l)), (0, M.w9)());
        }, []),
        A = o.useCallback(
            (e) => {
                e ? E() : (0, M.yj)();
            },
            [E],
        ),
        D = o.useCallback(
            (e) => {
                (l(e), a && i(e));
            },
            [i, a],
        ),
        [O, w] = o.useState(V.rb.KILL),
        [L, U] = o.useState(1),
        [G, F] = o.useState(""),
        B = (0, d.bG)([I.Ay], () => I.Ay.isAutoStashEnabled()),
        W = o.useCallback((e) => {
            e
                ? (0, c.A)({
                      title: "Stash all gaming sessions?",
                      subtitle:
                          "Every gaming session will be stashed to your Desktop (inside the `decider_stash` folder) when it ends. This setting is not persistent \u2014 it resets to off each time Discord launches.",
                      confirmText: "Enable",
                      variant: "primary",
                      onConfirm: () => {
                          T.mN(!0);
                      },
                  })
                : T.mN(!1);
        }, []),
        [z, q] = o.useState([]),
        [J, Q] = o.useState(void 0),
        X = o.useCallback((e) => {
            (q(e), Q((t) => (null != t && e.includes(t) ? t : e[0])));
        }, []),
        Z = o.useCallback(async () => {
            let e = y.A?.clips?.debugListStashedClipDeciderSessions;
            null != e && X(await e());
        }, [X]);
    o.useEffect(() => {
        let e = !0,
            t = y.A?.clips?.debugListStashedClipDeciderSessions;
        if (null != t)
            return (
                t().then((t) => {
                    e && X(t);
                }),
                () => {
                    e = !1;
                }
            );
    }, [X]);
    let ee = (0, d.bG)([I.Ay], () => I.Ay.getState().clipsSettings.enableAutoclipping),
        et = (0, d.bG)([I.Ay], () => I.Ay.getEnableAutoclipping());
    return (0, r.jsx)(x.Ip, {
        children: (0, r.jsxs)(v.l, {
            children: [
                (0, r.jsx)(u.n, {
                    label: "Platform",
                    children: (0, r.jsx)(m.d, {
                        label: C.gO.clips_ignore_platform_requirement.label,
                        description:
                            "Show Clips settings and the library on unsupported platforms. Nitro is still required. Capture and export remain unsupported. Persists across restarts.",
                        checked: e,
                        onChange: (e) => S("clips_ignore_platform_requirement", e),
                    }),
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(h.M, {
                        children: [
                            (0, r.jsx)(p.$, { text: "Manual", onClick: () => T.Ts({ type: V.Gy.MANUAL }) }),
                            (0, r.jsx)(p.$, {
                                text: "Distributed",
                                onClick: () =>
                                    T.Ts({
                                        type: V.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(p.$, {
                                text: "Shouting",
                                onClick: () => T.Ts({ type: V.Gy.SHOUTING, userId: "123", confidence: 1 }),
                            }),
                            (0, r.jsx)(p.$, { text: "Laughter", onClick: () => R.A.debugCreateRankableLaughterClip() }),
                        ],
                    }),
                }),
                (0, r.jsxs)(u.n, {
                    label: "Game Event Creator",
                    children: [
                        (0, r.jsxs)(h.M, {
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Event Type",
                                    value: O,
                                    onSelectionChange: (e) => w(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: V.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: V.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: V.rb.DEATH },
                                        { id: "assist", label: "Assist", value: V.rb.ASSIST },
                                        { id: "item", label: "Item", value: V.rb.ITEM },
                                        { id: "victory", label: "Victory", value: V.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: V.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: V.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: V.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: V.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Importance",
                                    value: L,
                                    onSelectionChange: U,
                                    options: [
                                        { id: "low", label: "Low", value: 0 },
                                        { id: "medium", label: "Medium", value: 0.5 },
                                        { id: "high", label: "High", value: 1 },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.k, {
                            label: "Description (optional)",
                            value: G,
                            onChange: F,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(p.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                T.Ts({ type: V.Gy.GAME_EVENT, eventType: O, importance: L, description: G });
                            },
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Auto-stash decider data",
                            description:
                                "Stashes every gaming session to your Desktop when it ends. Resets to off on each Discord launch.",
                            checked: B,
                            onChange: W,
                        }),
                        (0, r.jsx)(j.l, {
                            label: "Stash session (re-run ranking)",
                            value: J,
                            onSelectionChange: (e) => Q(e),
                            options: z.map((e) => ({ id: e, label: e, value: e })),
                            placeholder: 0 === z.length ? "No stashed sessions" : "Most recent",
                            disabled: 0 === z.length,
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                        (0, r.jsxs)(h.M, {
                            children: [
                                (0, r.jsx)(p.$, {
                                    text: "re-run ranking",
                                    onClick: () => {
                                        R.i.debugRerunRanking(J).catch((e) => {
                                            V.GU.error("re-run ranking failed", e);
                                        });
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    text: "run automontage",
                                    onClick: () => {
                                        R.i.debugRunAutoMontage(J).catch((e) => {
                                            V.GU.error("run automontage failed", e);
                                        });
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    text: "refresh sessions",
                                    variant: "secondary",
                                    onClick: () => {
                                        Z();
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.n, { label: "Clip Metadata Tool", children: (0, r.jsx)($.A, {}) }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(H, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(K, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsxs)(u.n, {
                    label: "Reminder UI",
                    children: [
                        (0, r.jsx)(m.d, {
                            label: "Clips Quick Bar",
                            description:
                                "Force-show the inline quick bar above the account panel. Fabricates a session (up to 10 clips) from your recent clips so it can be tested without capturing a real game session.",
                            checked: t,
                            onChange: A,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Clips Reminder",
                            description:
                                "Force-show the post-session ClipsReminder panel. Fabricates a session from your most recent clips (and game) so it can be tested without capturing a real game session.",
                            checked: a,
                            onChange: s,
                        }),
                        (0, r.jsx)(j.l, {
                            label: "Clip count",
                            value: n,
                            onSelectionChange: D,
                            options: [
                                { id: "1", label: "1 clip", value: 1 },
                                { id: "2", label: "2 clips", value: 2 },
                                { id: "3", label: "3 clips", value: 3 },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(b.c, {}),
                        (0, r.jsxs)(u.n, {
                            label: "Clips Settings",
                            children: [
                                (0, r.jsxs)(g.E, {
                                    variant: "body-md/normal",
                                    children: ["autoclippingEnabled (internal): ", String(ee)],
                                }),
                                (0, r.jsxs)(g.E, {
                                    variant: "body-md/normal",
                                    children: ["autoclippingEnabled (exposed): ", String(et)],
                                }),
                                (0, r.jsx)(p.$, {
                                    text: "unset autoclipping default",
                                    onClick: () => {
                                        T.uL(void 0, !1);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var J = a(503698),
    Q = a.n(J),
    X = a(939249),
    Z = a(683071),
    ee = a(534514),
    et = a(538064),
    ea = a(265059),
    en = a(869146);
(a(323874), a(14289), a(35956));
var el = a(789645),
    ei = a(110574),
    es = a(65593),
    er = a(528689),
    eo = a(122088),
    ed = a(569386),
    ec = a(287809),
    eu = a(901139),
    em = a(641886),
    eh = a(780898),
    ep = a(652215),
    eg = a(993382),
    ex = a(427262);
function ev(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        n = ex.Ay.useName(a) ?? "";
    return (0, r.jsx)(eg.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        playingSoundboard: !1,
        streaming: !1,
        status: ep.clD.ONLINE,
        currentUser: a,
        activities: [],
        applicationStream: void 0,
        userTag: "",
        speakingWhileMuted: !1,
        occluded: !1,
        dismissibleContents: { avatar: [], settings: [] },
        isOrbchievementsEnabled: !1,
        awaitingRemote: !1,
        nameplate: t,
        voiceChannel: null,
        isQuestBarEmpty: !0,
        isListenAlongVisible: !1,
    });
}
var eb = a(736653),
    ej = a(653523),
    ef = a(475601);
function ey(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, eb.Ay)();
    return (0, r.jsxs)("div", {
        className: ef.N,
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: ef.Z,
                children: em.Z6.map((e) => {
                    let l = n !== ep.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        i = t === e.name;
                    return (0, r.jsx)(
                        ej.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: i },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var eE = a(181254),
    eC = a(95701),
    eS = a(331884);
function e_(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, eS.i)(),
        l = new eC.cq({ id: "0", type: ep.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(eE.th, { selected: t, channel: l, user: n, nameplate: a });
}
var eN = a(698638),
    eA = a(52940);
function ek() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, i] = (0, o.useState)(null),
        { node: s } = (0, eo.Ay)(ed.k, ""),
        d = (0, eu.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, eu.DE)(),
        { setImgCache: m } = (0, eu.TW)(),
        h = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? i({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : i((t) =>
                          null == t ? { previewToolKey: e, palette: em.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [d],
        ),
        x = (0, o.useCallback)((e) => {
            i((t) => (null == t ? null : { ...t, palette: e }));
        }, []),
        v = (0, o.useCallback)(
            (e) => {
                u(e);
            },
            [u],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: eA.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: eA.gO,
                        children: [
                            (0, r.jsx)(p.$, {
                                size: "sm",
                                onClick: () => {
                                    (n(!1), t((e) => !e));
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, r.jsx)(p.$, {
                                size: "sm",
                                onClick: () => {
                                    (t(!1), n((e) => !e));
                                },
                                variant: "secondary",
                                text: "Toggle Gradients",
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: eA.uQ,
                        children: [
                            e && (0, r.jsx)(er.A, { node: s }),
                            a &&
                                (0, r.jsx)(ey, {
                                    selected: l?.palette?.name,
                                    onSelect: (e) => {
                                        (l?.previewToolKey != null && c(l.previewToolKey, l.previewToolKey, e), x(e));
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: eA.iW,
                children: [
                    (0, r.jsx)(eD, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: eA.Uo,
                        children: [
                            (0, r.jsx)(g.E, {
                                variant: "body-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(es.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eN.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    (m(t, t, (0, eh.nI)(n)), c(t, t, em.Wj));
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: eA.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(eI, { src: t, onSetStatic: h, removeAsset: v }, t);
                                }),
                            }),
                            (0, r.jsx)(eR, {
                                label: "gradient override",
                                onChange: (e) => x({ name: em.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(eT, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eD(e) {
    let { nameplate: t } = e,
        [a, n] = (0, o.useState)(320),
        l = (0, o.useRef)(null),
        i = (0, o.useRef)(null),
        s = (0, o.useRef)(null),
        d = (0, o.useRef)(document),
        c = (0, o.useCallback)((e) => {
            if (null != l.current) {
                let t = l.current.getBoundingClientRect();
                n(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        u = (0, o.useCallback)(
            (e) => {
                (e.preventDefault(), e.stopPropagation());
                let t = e.currentTarget.ownerDocument;
                function a(e) {
                    (e.preventDefault(), c(e));
                }
                function n() {
                    (null != i.current && (t.removeEventListener("mousemove", i.current), (i.current = null)),
                        null != s.current && (t.removeEventListener("mouseup", s.current), (s.current = null)));
                }
                ((d.current = t),
                    (i.current = a),
                    (s.current = n),
                    t.addEventListener("mousemove", a),
                    t.addEventListener("mouseup", n));
            },
            [c],
        );
    return (
        (0, o.useEffect)(
            () => () => {
                (null != i.current && (d.current.removeEventListener("mousemove", i.current), (i.current = null)),
                    null != s.current && (d.current.removeEventListener("mouseup", s.current), (s.current = null)));
            },
            [],
        ),
        (0, r.jsx)(x.Ip, {
            className: eA.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: eA.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(eO, { nameplate: t }),
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(ew, { nameplate: t }),
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(eM, { nameplate: t }),
                    (0, r.jsx)("div", { className: eA.Di, onMouseDown: u }),
                ],
            }),
        })
    );
}
function eI(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: eA.xO,
        children: [
            (0, r.jsx)(X.D, {
                onClick: () => n(t),
                className: eA.yV,
                children: (0, r.jsx)(el.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: eA.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: eA.Lu,
                children: (0, r.jsx)(p.$, {
                    onClick: () => a(t),
                    size: "sm",
                    variant: "secondary",
                    text: "set nameplate",
                }),
            }),
        ],
    });
}
function eT(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: eA.Uu,
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "coming soon" }),
            (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function eR(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: eA.Im,
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: eA.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eO(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([ec.default], () => ec.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: eA.VH,
        children: (0, r.jsxs)("div", {
            className: eA.H1,
            children: [
                (0, r.jsx)(g.E, { className: eA.Pf, variant: "body-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(ei.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(g.E, { className: eA.Pf, variant: "body-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ei.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(ei.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function ew(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eA.VH,
        children: (0, r.jsxs)("div", {
            className: eA.H1,
            children: [
                (0, r.jsx)(g.E, { className: eA.Pf, variant: "body-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(e_, { nameplate: t }),
                (0, r.jsx)(g.E, { className: eA.Pf, variant: "body-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(e_, { selected: !0, nameplate: t }), (0, r.jsx)(e_, { selected: !0 })],
                }),
            ],
        }),
    });
}
function eM(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eA.VH,
        children: (0, r.jsx)("div", { className: eA.X2, children: (0, r.jsx)(ev, { nameplate: t }) }),
    });
}
a(508300);
var eP = a(115560),
    eL = a(157559),
    eU = a(307955),
    eG = a(993408),
    eF = a(969951),
    eB = a(559474),
    e$ = a(816866),
    eV = a(87558),
    eW = a(575593),
    eH = a(631903),
    ez = a(224640),
    eK = a(408278),
    eY = a(972213),
    eq = a(43990),
    eJ = a(192308),
    eQ = a(646514),
    eX = a(231723),
    eZ = a(900686),
    e0 = a(641318),
    e1 = a(362781),
    e2 = a(435558),
    e3 = a.n(e2),
    e6 = a(855915),
    e5 = a(971217);
let e8 = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, e2.cloneDeep)(t), [t]),
        n = o.useMemo(
            () => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0),
            [t.effects],
        ),
        l = o.useMemo(() => {
            if (n) {
                var e;
                let n =
                    1 ===
                    (e = a.effects.reduce((e, t) => {
                        let a = 1 + (t.randomizedSources ?? []).length;
                        return a > 1 ? (1 === e ? a : Math.min(a, e)) : e;
                    }, 1))
                        ? -1
                        : Math.floor(Math.random() * e);
                n > 0 &&
                    t.effects.forEach((e, t) => {
                        null != e.randomizedSources &&
                            e.randomizedSources.length > 0 &&
                            (a.effects[t].src = e.randomizedSources[n - 1].src);
                    });
            }
            return a;
        }, [t.effects, a, n]),
        i = "debug",
        { layerData: s } = (0, e6.A)({ skuId: i, layers: l.effects });
    return (0, r.jsx)(e5.p, { profileEffect: l, skuId: i, layerData: s });
};
var e4 = a(586886),
    e9 = a(778765);
let e7 =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    te = { [eV.qH.THUMBNAIL]: null, [eV.qH.STATIC]: null, [eV.qH.REDUCED_MOTION]: null },
    tt = "debug",
    ta = "reduced-motion-preview-modal";
function tn(e) {
    let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
    return (0, r.jsx)(ez.d, {
        transitionState: t,
        size: "md",
        onClose: a,
        maxHeight: "viewport",
        children: (0, r.jsxs)("div", {
            className: e4.Xd,
            children: [
                (0, r.jsx)("div", {
                    className: e4.y6,
                    children: (0, r.jsx)(eK.K, {
                        "aria-label": "Close",
                        onClick: a,
                        icon: eY.XLargeIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: e4.rU,
                    children: [
                        (0, r.jsx)(eq.N, {
                            theme: l,
                            children: (e) =>
                                (0, r.jsx)("img", { src: e7, alt: "", className: Q()(e4.aM, e), "aria-hidden": !0 }),
                        }),
                        null != n &&
                            "" !== n &&
                            (0, r.jsx)("img", { src: n, className: e4.SD, alt: "Reduced motion preview" }),
                    ],
                }),
            ],
        }),
    });
}
function tl(e) {
    let { type: t, frame: a, theme: n, onClear: l } = e,
        i = t === eV.qH.REDUCED_MOTION,
        s = i ? e7 : e9.A,
        o = (0, r.jsx)(eq.N, {
            theme: n,
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("img", { src: s, alt: "", className: Q()(e4.aM, e), "aria-hidden": !0 }),
                        a?.src != null &&
                            "" !== a.src &&
                            (0, r.jsx)("img", { src: a.src, className: Q()(e4.SD, e), alt: "" }),
                    ],
                }),
        });
    return (0, r.jsxs)("div", {
        className: e4.pK,
        children: [
            (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: t }),
            i
                ? (0, r.jsx)(X.D, {
                      className: Q()(e4.zd, e4.eB),
                      onClick: function () {
                          (0, eJ.kB)(ta)
                              ? (0, eJ.Oo)(ta)
                              : (0, eJ.mM)(
                                    () =>
                                        Promise.resolve((e) =>
                                            (0, r.jsx)(tn, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                        ),
                                    { modalKey: ta, onCloseRequest: () => (0, eJ.Oo)(ta) },
                                );
                      },
                      children: o,
                  })
                : (0, r.jsx)("div", { className: e4.zd, children: o }),
            null != a && (0, r.jsx)(p.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
        ],
    });
}
let ti = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, e$.wu)(),
            n = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
            [l, i] = o.useState(!0),
            s = o.useRef({}),
            [c, u] = o.useState(!1),
            [m, h] = o.useState(!1),
            [x, v] = o.useState(8),
            [b, j] = o.useState([]),
            [f, y] = o.useState(te),
            E = o.useRef([]),
            [C, S] = o.useState(t.name),
            _ = C.toLowerCase().replace(/\s+/g, "_"),
            N = o.useMemo(
                () => ({
                    type: eW.R.PROFILE_EFFECT,
                    skuId: tt,
                    title: tt,
                    description: tt,
                    accessibilityLabel: tt,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: b,
                    animationType: eH.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [b],
            ),
            A = c ? eQ.A.themes.DARK : eQ.A.themes.LIGHT;
        function k(e) {
            let t = e.currentTarget.files;
            return null == t ? null : t[0];
        }
        function D(e, t) {
            let a = k(t);
            null != a &&
                (0, eV.Mz)(a, (t) => {
                    y((n) => ({ ...n, [e]: (0, eV.GT)(t, a) }));
                });
        }
        (o.useEffect(() => {
            let e = t.effects;
            e.length > 0 &&
                j(
                    e.map((e) => ({
                        ...e,
                        name: e.name ?? (0, eV.XG)(e.src),
                        randomizedSources: e.randomizedSources?.map((e) => ({
                            ...e,
                            filename: e.filename ?? (0, eV.XG)(e.src),
                        })),
                    })),
                );
        }, [t.effects]),
            o.useEffect(() => {
                let e = t.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, a] = e;
                        if (null != a) {
                            if ("" !== a.src && null != a.src && ("" === a.base64 || null == a.base64))
                                y((e) => ({ ...e, [t]: a }));
                            else if ("" !== a.base64 && null != a.base64) {
                                let e = (0, eV.fB)(a.base64);
                                ((a.src = e), E.current.push(e), y((e) => ({ ...e, [t]: a })));
                            }
                        }
                    });
            }, [t.stillFrames]));
        let I = { profileEffect: t, upsertProfileEffect: a },
            T = o.useRef(I);
        return (o.useEffect(() => {
            T.current = I;
        }),
        o.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = T.current;
            e.readonly || t({ skuId: e.skuId, name: C, effects: b, stillFrames: f });
        }, [b, f, C]),
        o.useEffect(
            () => () => {
                (E.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (E.current = []));
            },
            [],
        ),
        null == n)
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: e4.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eU.A, {
                                  ref: (e) => {
                                      s.current.animated = e;
                                  },
                                  onChange: function (e) {
                                      let t = k(e);
                                      null != t &&
                                          (0, eV.Mz)(t, async (e) => {
                                              let a = await (0, eV.Ay)(e, t, b.length);
                                              j((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eU.A, {
                                  ref: (e) => {
                                      s.current.thumbnail = e;
                                  },
                                  onChange: (e) => D(eV.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eU.A, {
                                  ref: (e) => {
                                      s.current.static = e;
                                  },
                                  onChange: (e) => D(eV.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eU.A, {
                                  ref: (e) => {
                                      s.current.reducedMotion = e;
                                  },
                                  onChange: (e) => D(eV.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: e4.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: Q()(e4.nM, e4.uW),
                                  children: [
                                      (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: C,
                                          className: e4.hF,
                                          onChange: (e) => {
                                              S(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e4.nM,
                                  children: [
                                      (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: c,
                                          className: e4.OO,
                                          onChange: () => {
                                              u(!c);
                                          },
                                      }),
                                      (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: m,
                                          className: e4.OO,
                                          onChange: () => {
                                              h(!m);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e4.nM,
                                  children: [
                                      (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: x,
                                          onChange: (e) => v(+e.target.value),
                                      }),
                                      (0, r.jsxs)(g.E, { variant: "body-sm/normal", children: [x, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: Q()(e4.nz, e4.VH),
                                  style: { borderRadius: x },
                                  children: [
                                      m
                                          ? (0, r.jsx)("div", {
                                                className: e4.jq,
                                                children: (0, r.jsx)(e1.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: eX.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: e4.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eq.N, {
                                                theme: A,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: Q()(e4.aM, e),
                                                        children: (0, r.jsx)("img", { src: e9.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: e4.KJ,
                                              children: (0, r.jsx)(e8, { profileEffect: N }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      m &&
                                      (0, r.jsxs)("div", {
                                          className: Q()(e4.f5, e4.VH),
                                          style: { borderRadius: x },
                                          children: [
                                              (0, r.jsx)(e0.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  hideProfileFrame: !0,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(e8, { profileEffect: N }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: e4.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: e4.nM,
                                          children: [
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => s.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(g.E, {
                                                  variant: "body-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: e4.nM,
                                          children: [
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => s.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => s.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => s.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)("div", {
                                          className: e4.q6,
                                          children: (0, r.jsx)("div", {
                                              className: e4.nM,
                                              children: (0, r.jsx)(p.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      (i(!1), setTimeout(() => i(!0), 100));
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: Q()(e4.q6, e4.XA),
                                          children: [
                                              (0, r.jsx)(g.E, {
                                                  variant: "body-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(g.E, {
                                                  variant: "body-sm/semibold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: e4.nM,
                                                  children: [
                                                      (0, r.jsx)(eZ.A, {
                                                          fileContents: () => (0, eV.rs)(b),
                                                          contentType: "text/plain",
                                                          fileName: `${_}_timing_config.txt`,
                                                          children: (0, r.jsx)(p.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eZ.A, {
                                                          fileContents: function () {
                                                              return JSON.stringify({
                                                                  ...t,
                                                                  name: C,
                                                                  readonly: !1,
                                                                  effects: b,
                                                                  stillFrames: f,
                                                              });
                                                          },
                                                          contentType: "text/plain",
                                                          fileName: `${_}_config.txt`,
                                                          children: (0, r.jsx)(p.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Full Config",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: e4.uW,
                                          children: [
                                              (0, r.jsx)(ee.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: "Still Frames",
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: e4.mv,
                                                  children: Object.entries(f).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          tl,
                                                          {
                                                              type: t,
                                                              frame: a,
                                                              theme: A,
                                                              onClear: () => {
                                                                  y((e) => ({ ...e, [t]: null }));
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      b.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, r.jsxs)("div", {
                                              className: Q()(e4.uW, e4.l7),
                                              children: [
                                                  (0, r.jsx)(g.E, {
                                                      variant: "body-md/semibold",
                                                      children: "Rules of Randomized Effects",
                                                  }),
                                                  (0, r.jsxs)("ol", {
                                                      children: [
                                                          (0, r.jsx)("li", {
                                                              children:
                                                                  "When an effect has randomization, all layers with random options must have the same number of options.",
                                                          }),
                                                          (0, r.jsx)("li", {
                                                              children:
                                                                  "The duration for the random options of a layer must be the same",
                                                          }),
                                                          (0, r.jsx)("li", {
                                                              children:
                                                                  "If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)",
                                                          }),
                                                          (0, r.jsx)("li", {
                                                              children:
                                                                  'Click "Replay Animation" to "reroll" the randomization',
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: Q()(e4.Vg, e4.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: e4.cD,
                                          children: (0, r.jsx)(p.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: function () {
                                                  (j([]), y(te));
                                              },
                                          }),
                                      }),
                                      b.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: e4.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: e4.D1,
                                                          children: [
                                                              (0, r.jsx)(ee.D, {
                                                                  variant: "heading-sm/semibold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: e4.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(ee.D, {
                                                                              variant: "heading-sm/semibold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(ee.D, {
                                                                                                  variant:
                                                                                                      "heading-xs/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: e4.oq,
                                                                                              alt: "",
                                                                                          }),
                                                                                      ],
                                                                                  },
                                                                                  e.filename ?? `randomized-${t}`,
                                                                              ),
                                                                          ),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: Q()(e4.Vg, e4.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e4.nz,
                                                                  children: [
                                                                      (0, r.jsx)(g.E, {
                                                                          variant: "body-md/semibold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: e4.hF,
                                                                          onChange: (e) => {
                                                                              j((a) => {
                                                                                  let n = [...a],
                                                                                      l = a[t];
                                                                                  return (
                                                                                      (l.start = +e.target.value),
                                                                                      (n[t] = l),
                                                                                      n
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, r.jsxs)("div", {
                                                                  className: e4.nz,
                                                                  children: [
                                                                      (0, r.jsx)(g.E, {
                                                                          variant: "body-md/semibold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: e4.hF,
                                                                          onChange: (e) => {
                                                                              j((a) => {
                                                                                  let n = [...a],
                                                                                      l = a[t];
                                                                                  return (
                                                                                      (l.duration = +e.target.value),
                                                                                      (n[t] = l),
                                                                                      n
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: Q()(e4.Vg, e4.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e4.nz,
                                                                  children: [
                                                                      (0, r.jsx)(g.E, {
                                                                          variant: "body-md/semibold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: e4.OO,
                                                                          onChange: (e) => {
                                                                              j((a) => {
                                                                                  let n = [...a],
                                                                                      l = a[t];
                                                                                  return (
                                                                                      (l.loop = e.target.checked),
                                                                                      (n[t] = l),
                                                                                      n
                                                                                  );
                                                                              });
                                                                          },
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, r.jsx)("div", {
                                                                  className: e4.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(g.E, {
                                                                                  variant: "body-md/semibold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: e4.hF,
                                                                                  onChange: (e) => {
                                                                                      j((a) => {
                                                                                          let n = [...a],
                                                                                              l = a[t];
                                                                                          return (
                                                                                              (l.loopDelay =
                                                                                                  +e.target.value),
                                                                                              (n[t] = l),
                                                                                              n
                                                                                          );
                                                                                      });
                                                                                  },
                                                                                  contentEditable: !0,
                                                                              }),
                                                                          ],
                                                                      }),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, r.jsx)("div", {
                                                          style: { display: "none" },
                                                          children: (0, r.jsx)(eU.A, {
                                                              ref: (e) => {
                                                                  s.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = k(e)) &&
                                                                      (0, eV.Mz)(a, (e) => {
                                                                          j((n) => {
                                                                              let l = [...n],
                                                                                  i = n[t];
                                                                              if (null == i) return n;
                                                                              let s = { ...i };
                                                                              return (
                                                                                  null == s.randomizedSources &&
                                                                                      (s.randomizedSources = []),
                                                                                  s.randomizedSources.push({
                                                                                      src: e,
                                                                                      filename: a.name,
                                                                                  }),
                                                                                  (l[t] = s),
                                                                                  l
                                                                              );
                                                                          });
                                                                      });
                                                              },
                                                              multiple: !1,
                                                          }),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: Q()(e4.nM, e4._N),
                                                          children: [
                                                              (0, r.jsx)(p.$, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      s.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, r.jsx)(p.$, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      j((t) => t.filter((t) => t !== e));
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              },
                                              t,
                                          ),
                                      ),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    ts = "Make sure you're only uploading text files!";
function tr(e) {
    let { profileEffect: t, onClick: a } = e,
        { deleteProfileEffect: n } = (0, e$.wu)();
    return (0, r.jsxs)(X.D, {
        className: e4.B0,
        onClick: a,
        children: [
            (0, r.jsx)("div", { className: e4.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
            (0, r.jsxs)("div", {
                className: e4.eL,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/semibold", children: t.name }),
                    (0, r.jsx)(p.$, {
                        variant: "critical-secondary",
                        text: "Delete",
                        onClick: (e) => {
                            (e.preventDefault(), e.stopPropagation(), n(t.skuId));
                        },
                    }),
                ],
            }),
        ],
    });
}
function to() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, e$.wu)(),
        [n, l] = o.useState(),
        i = o.useRef(null),
        { categories: s } = (0, eF.A)(),
        d = o.useMemo(() => (0, eG.Wj)(s), [s]),
        [c, u] = o.useState(""),
        m = o.useMemo(
            () =>
                "" === c
                    ? d
                    : d.filter((e) => {
                          let t = c.toLowerCase(),
                              a = e.title?.toLowerCase() ?? "",
                              n = e.description?.toLowerCase() ?? "";
                          return a.includes(t) || n.includes(t);
                      }),
            [c, d],
        ),
        h = o.useCallback(
            (e, a) => {
                if (null == a || !e.type.startsWith("text/")) return (0, eB.Ni)(ts);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eB.Ni)(ts);
                let i = JSON.parse(atob(l));
                ((i.skuId = (0, eP.A)()), t(i), (0, eB.GF)("Profile Effect (maybe??) imported!"));
            },
            [t],
        ),
        x = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eB.Ni)("Error uploading file. Try again!")
                    : (0, eB.KE)(e.currentTarget.files, h, eB.Ni);
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: e4.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: e4.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: Q()(e4.uW, e4.nM),
                                    children: [
                                        (0, r.jsx)(ee.D, {
                                            variant: "heading-xl/semibold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(p.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await eL.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, eB.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: e4.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(tr, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: Q()(e4.nM, e4._N, e4.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: e4.au,
                                    children: [
                                        (0, r.jsx)(g.E, {
                                            variant: "body-md/normal",
                                            color: "text-overlay-light",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eU.A, { ref: i, onChange: x, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: function () {
                                        t({ skuId: (0, eP.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: e4.uW,
                            children: [
                                (0, r.jsx)(ee.D, { variant: "heading-xl/semibold", children: "All Effects" }),
                                (0, r.jsx)(f.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: e4.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            X.D,
                                            {
                                                className: e4.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [eV.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eV.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eV.qH.REDUCED_MOTION]:
                                                            null != e.reducedMotionSrc && "" !== e.reducedMotionSrc
                                                                ? {
                                                                      src: e.reducedMotionSrc,
                                                                      name: "reduced_motion.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                    };
                                                    l({
                                                        skuId: e.skuId,
                                                        name: e.title,
                                                        effects: e.effects,
                                                        stillFrames: t,
                                                        readonly: !0,
                                                    });
                                                },
                                                children: (0, r.jsx)("div", {
                                                    className: e4.Hd,
                                                    children: (0, r.jsx)(g.E, {
                                                        variant: "body-md/normal",
                                                        color: "text-overlay-light",
                                                        children: e.title,
                                                    }),
                                                }),
                                            },
                                            e.skuId,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
            null != n && (0, r.jsx)(ti, { profileEffect: n }),
        ],
    });
}
var td = a(935399),
    tc = a(462887),
    tu = a(289873),
    tm = a(478016),
    th = a(565645),
    tp = a(7584),
    tg = a(974504),
    tx = a(207803),
    tv = a(84540),
    tb = a(836602),
    tj = a(527212),
    tf = a(917445),
    ty = a(841702),
    tE = a(892118),
    tC = a(744808),
    tS = a(965452),
    t_ = a(626768),
    tN = a(464896);
function tA() {
    let e = (0, eb.Ay)();
    return (0, r.jsxs)("div", {
        className: tS.z3,
        children: [
            (0, r.jsx)("img", { src: (0, tc.M)(e) ? t_ : tN, alt: "" }),
            (0, r.jsx)(g.E, {
                variant: "body-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tk() {
    let e = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        t = (0, tj.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, tf.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetching: n } = (0, ty.b5)(),
        l = o.useMemo(() => (0, eG.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: i }, s] = (0, d.yK)([tb.A], () => [tb.A.getPendingChanges(), tb.A.showNotice()]),
        c = void 0 === i ? t?.profileFrame : i,
        u = null != c ? a.get(c.skuId) : void 0,
        m = (0, tE.s)(u?.items[0]) ? u.items[0] : void 0;
    return (
        (0, td.l0)(tx.RE),
        (0, r.jsxs)("div", {
            className: tS.kL,
            children: [
                (0, r.jsxs)(ee.D, {
                    variant: "heading-xl/semibold",
                    children: [
                        (0, r.jsx)(th.A, {
                            emojiName: tp.Ay.getByName("frame_with_picture")?.surrogates,
                            className: tS.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(tu.y, {}),
                0 === l.length && !n && (0, r.jsx)(tA, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: tS.MK,
                        children: [
                            (0, r.jsx)(g.E, {
                                variant: "body-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: tS.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(p.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == c ? tm.U : void 0,
                                                disabled: null == c,
                                                onClick: () => (0, tv.p)({ profileFrame: null }),
                                            }),
                                        },
                                        "none",
                                    ),
                                    l.map((e) => {
                                        let t = a.get(e.skuId);
                                        return null == t
                                            ? null
                                            : (0, r.jsx)(
                                                  "li",
                                                  {
                                                      children: (0, r.jsx)(p.$, {
                                                          text: t.name,
                                                          variant: "secondary",
                                                          fullWidth: !0,
                                                          icon: c?.skuId === e.skuId ? tm.U : void 0,
                                                          disabled: c?.skuId === e.skuId,
                                                          onClick: () => (0, tv.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            s && (0, r.jsx)(tg.A, {}),
                            (0, r.jsxs)("div", {
                                className: tS.VH,
                                children: [
                                    (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: tS.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: e9.A, alt: "" }),
                                            null != m && (0, r.jsx)(tC.A, { frame: m, isPreview: !0 }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        })
    );
}
var tD = a(164636),
    tI = a(793574),
    tT = a(354328),
    tR = a(4227),
    tO = a(682301),
    tw = a(987421),
    tM = a(61750),
    tP = a(499454),
    tL = a(682901);
let tU = "devtools-collectibles-gift";
var tG = a(80101);
let tF = /^\d{17,20}$/,
    tB = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tR.A.getPurchase;
                return (
                    (tR.A.getPurchase = (e) => void 0),
                    tR.A.emitChange(),
                    a(1),
                    () => {
                        ((tR.A.getPurchase = e), tR.A.emitChange());
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tG.Do, children: (0, r.jsx)(tw.A, { ...e }, t) })
        );
    },
    t$ = function () {
        let e = (0, tD.bG)([ec.default], () => ec.default.getCurrentUser());
        (0, ty.b5)();
        let t = (0, tT.A)("shop_include_unpublished"),
            [a, n] = o.useState(""),
            l = a.trim(),
            i = tF.test(l),
            {
                product: s,
                category: d,
                state: c,
            } = (0, tO.IK)(l, { shouldFetchProduct: i, seedCategoryStore: !0, includeUnpublished: t }),
            u = "loading" !== c;
        return null == e
            ? (0, r.jsx)(g.E, { variant: "body-md/normal", children: "No user found" })
            : (0, r.jsxs)("div", {
                  className: tG.kL,
                  children: [
                      (0, r.jsxs)("div", {
                          className: tG.uW,
                          children: [
                              (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                              (0, r.jsxs)("div", {
                                  className: tG.qp,
                                  children: [
                                      (0, r.jsx)(g.E, {
                                          variant: "body-md/semibold",
                                          className: tG.NB,
                                          children: "Primary Product SKU ID",
                                      }),
                                      (0, r.jsx)(f.k, { value: a, onChange: n, placeholder: "Enter product SKU ID" }),
                                      !u &&
                                          i &&
                                          (0, r.jsx)(g.E, {
                                              variant: "body-sm/normal",
                                              className: tG.KQ,
                                              children: "Loading products...",
                                          }),
                                      u &&
                                          i &&
                                          null == s &&
                                          (0, r.jsx)(g.E, {
                                              variant: "body-sm/normal",
                                              className: tG.kc,
                                              children: "Product not found",
                                          }),
                                      null != s &&
                                          (0, r.jsxs)(g.E, {
                                              variant: "body-sm/normal",
                                              className: tG.xT,
                                              children: ["Found: ", s.name],
                                          }),
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: tG.uW,
                          children: [
                              (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                              null != s && null != d
                                  ? (0, r.jsxs)("div", {
                                        className: tG.i1,
                                        children: [
                                            (0, r.jsx)(tB, { skuId: s.skuId }),
                                            (0, r.jsx)(p.$, {
                                                variant: "primary",
                                                onClick: function () {
                                                    null != s &&
                                                        null != e &&
                                                        (0, tM.A)({
                                                            product: s,
                                                            analyticsLocations: [tI.A.COLLECTIBLES_SHOP_CARD],
                                                        });
                                                },
                                                text: "Show Collectibles Collected Modal",
                                            }),
                                            (0, r.jsx)(p.$, {
                                                variant: "primary",
                                                onClick: function () {
                                                    null != s &&
                                                        null != e &&
                                                        (async function (e) {
                                                            let { skuId: t, sender: a } = e,
                                                                n = {
                                                                    code: tU,
                                                                    user: { id: a.id },
                                                                    sku_id: t,
                                                                    uses: 0,
                                                                    max_uses: 1,
                                                                    expires_at: null,
                                                                    redeemed: !1,
                                                                    application_id: ep.FYj,
                                                                    gift_style: tL.o2.STANDARD_BOX,
                                                                };
                                                            (await E.h.dispatch({
                                                                type: "GIFT_CODE_RESOLVE_SUCCESS",
                                                                giftCode: n,
                                                            }),
                                                                (0, tP.h)({ processedCode: tU }));
                                                        })({ skuId: s.skuId, sender: e });
                                                },
                                                text: "Show Gift Accept Modal",
                                            }),
                                        ],
                                    })
                                  : (0, r.jsx)("div", {
                                        className: tG.qf,
                                        children: (0, r.jsx)(g.E, {
                                            variant: "body-md/normal",
                                            className: tG.X2,
                                            children: "Enter a valid product SKU ID to see the preview",
                                        }),
                                    }),
                          ],
                      }),
                  ],
              });
    };
var tV = a(646695);
let tW = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 };
function tH(e) {
    let { setTab: t } = e,
        n = (0, d.bG)([en.A], () => en.A.getWindowOpen(ep.MLl.DEVTOOLS_POPOUT));
    return (0, r.jsxs)("div", {
        className: tV.Qs,
        children: [
            (0, r.jsx)(X.D, {
                onClick: () => {
                    t(1);
                },
                children: (0, r.jsx)("div", {
                    className: Q()(tV.vK, tV.Dg),
                    children: (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Profile Effects",
                    }),
                }),
            }),
            (0, r.jsx)(X.D, {
                onClick: () => {
                    t(2);
                },
                children: (0, r.jsx)("div", {
                    className: Q()(tV.vK, tV.st),
                    children: (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Nameplates",
                    }),
                }),
            }),
            (0, r.jsx)(X.D, {
                onClick: () => {
                    t(3);
                },
                children: (0, r.jsx)("div", {
                    className: Q()(tV.vK, tV.BW),
                    children: (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Profile Frames",
                    }),
                }),
            }),
            (0, r.jsx)(X.D, {
                onClick: () => {
                    t(4);
                },
                children: (0, r.jsx)("div", {
                    className: Q()(tV.vK, tV.IP),
                    children: (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Products",
                    }),
                }),
            }),
            !n &&
                (0, r.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(Z.w, {
                        type: "warning",
                        title: "Not enough space?",
                        message: "You can pop out the DevTools to see the full layout.",
                        action: {
                            text: "Popout DevTools",
                            onClick: () =>
                                Promise.all([a.e(868577), a.e(253209)])
                                    .then(a.bind(a, 902592))
                                    .then((e) => {
                                        let { openDevToolsPopout: t } = e;
                                        return t();
                                    }),
                        },
                        role: "none",
                    }),
                }),
        ],
    });
}
let tz = function () {
    let [e, t] = o.useState(() => {
        let e = ea.A.lastOpenSubTabId;
        return null != e && e in tW ? tW[e] : 0;
    });
    return (
        o.useEffect(() => {
            null != ea.A.lastOpenSubTabId && (0, et.Jt)({ lastOpenSubTabId: null });
        }, []),
        (0, r.jsxs)(x.Ip, {
            className: tV.iE,
            children: [
                (0, r.jsxs)("div", {
                    className: tV.C$,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                        0 !== e && (0, r.jsx)(p.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                    ],
                }),
                (function () {
                    switch (e) {
                        case 1:
                            return (0, r.jsx)(to, {});
                        case 2:
                            return (0, r.jsx)(ek, {});
                        case 3:
                            return (0, r.jsx)(tk, {});
                        case 4:
                            return (0, r.jsx)(t$, {});
                        default:
                            return (0, r.jsx)(tH, { setTab: t });
                    }
                })(),
            ],
        })
    );
};
var tK = a(681154),
    tY = a(306264),
    tq = a(506774),
    tJ = a(331322),
    tQ = a(587895),
    tX = a(429913),
    tZ = a(475825),
    t0 = a(730441);
function t1(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: i, selectedRowKey: s, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: t0.CZ,
        children: (0, r.jsx)(tZ.OZ, {
            className: n,
            innerClassName: t0.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = t0.ZR;
                return (0, r.jsx)(
                    "div",
                    {
                        className: n,
                        children: c.map((e) => {
                            let n = e.cellClassName,
                                l = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)` };
                            return (0, r.jsx)(
                                "div",
                                { className: n, style: l, children: e.renderHeader?.(e, a) },
                                `dev-tools-th-${t}-${e.key}`,
                            );
                        }),
                    },
                    `dev-tools-header-${t}`,
                );
            },
            rowHeight: d,
            renderRow: (e) => {
                let { rowIndex: t } = e,
                    n = a[t];
                if (null == n) return null;
                let o = n.key,
                    u = Q()(t0.jD, { [t0.wD]: o === s, rowClassName: l });
                return (0, r.jsx)(
                    X.D,
                    {
                        className: u,
                        onClick: () => i?.(n),
                        children: c.map((e) => {
                            let a = e.cellClassName,
                                l = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)`, height: `calc(${d}px - 16px)` };
                            return (0, r.jsx)(
                                "div",
                                { className: a, style: l, children: e.render?.(n, void 0, t) },
                                `dev-tools-td-${t}-${e.key}`,
                            );
                        }),
                    },
                    `dev-tools-tr-${t}`,
                );
            },
        }),
    });
}
var t2 = a(409626),
    t3 = a(692969),
    t6 = a(760751),
    t5 = a(403362),
    t8 = a(435738),
    t4 = a(99753),
    t9 = a(702476),
    t7 = a(574520),
    ae = a(214693),
    at = a(583846),
    aa = a(424994),
    an = a(14570);
function al(e) {
    let { id: t } = e,
        a = (0, d.bG)([ec.default], () => ec.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(X.D, {
              className: an._,
              onClick: function () {
                  (0, t9.openUserProfileModal)({ sourceAnalyticsLocations: [tI.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(g.E, { variant: "body-md/semibold", children: a.username }),
          });
}
function ai() {
    let e = (0, d.bG)([t4.A], () => t4.A.getFeed(aa.X1.GLOBAL_FEED)),
        t = (0, d.bG)([t4.A], () => t4.A.getFilters()),
        a = (0, d.cf)(
            [t7.A],
            () => {
                let t = {};
                for (let a of e?.entries ?? []) t[(0, t7.$)(a.content)] = t7.A.canRenderContent(a.content);
                return t;
            },
            [e],
        ),
        n = (0, d.bG)([t8.A], () => t8.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, ae.l)(t, l)) return [];
        let i = a[(0, t7.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: an.p,
                children: [
                    (0, r.jsx)(al, { type: l.author_type, id: l.author_id }),
                    !i && (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Expired or no matching presence" }),
                    (0, at.I5)(l) &&
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var as = a(576470),
    ar = a(693879);
function ao() {
    let e = (0, d.bG)([t4.A], () => t4.A.getFeed(aa.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, d.cf)(
            [t4.A],
            () => t4.A.getFeedState(aa.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, d.bG)([t4.A], () => t4.A.getLastFeedFetchDate(aa.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(g.E, { variant: "body-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(g.E, {
                      variant: "body-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(as.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(g.E, {
                variant: "body-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(ar.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var ad = a(225418);
let ac = [
    {
        key: "type",
        cellClassName: Q()(ad.Hn, ad.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(g.E, { variant: "body-md/semibold", children: tK.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: Q()(ad.Hn, ad.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(g.E, { variant: "body-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: ad.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(au, { type: t });
        },
    },
];
function au(e) {
    let { type: t } = e,
        a = (0, d.bG)([t4.A], () => t4.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(m.d, {
        checked: n,
        onChange: function () {
            n
                ? E.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : E.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function am() {
    var e;
    let t,
        a = (0, d.bG)([t4.A], () => t4.A.getFeed(aa.X1.GLOBAL_FEED)),
        n = (0, d.bG)([t4.A], () => t4.A.getDebugImpressionCappingDisabled()),
        l = (0, d.bG)([t8.A], () => t8.A.getDebugFastImpressionCappingEnabled()),
        i =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = e3().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        s = (0, d.bG)([t4.A], () => t4.A.getFeedState(aa.X1.GLOBAL_FEED)?.loading === !0),
        [c, u] = o.useState(""),
        m = (0, d.bG)(
            [t6.A, tQ.A],
            () => (parseInt(c) > 0 ? c : (t6.A.searchGamesByName(c)[0] ?? tQ.A.getApplicationByName(c)?.id)),
            [c],
        ),
        h = (0, t3.A)({
            applicationId: m,
            location: "DevToolsContentInventory",
            source: t2.GameProfileSources.DevTools,
        }),
        v = Object.entries(tq.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        b = (0, tX.A)(v).filter(t5.Vq);
    return (0, r.jsx)("div", {
        className: t0.nd,
        children: (0, r.jsxs)(x.Ip, {
            className: ad.Qs,
            children: [
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-md/semibold", children: "Inventory" }),
                        i.length > 0 && (0, r.jsx)(t1, { columns: ac, data: i }),
                        (0, r.jsx)(ao, {}),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                E.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: aa.X1.GLOBAL_FEED,
                                    feature: tY.M.INBOX,
                                });
                            },
                            loading: s,
                        }),
                    ],
                }),
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                E.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                E.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                E.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                E.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(ai, {}),
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-md/semibold", children: "Game Profile" }),
                        (0, r.jsx)(f.k, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && u(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key && (c === e.currentTarget.value ? h?.(e) : u(e.currentTarget.value));
                            },
                            error:
                                c.length > 0 && null == h ? `No game profile for ${m ?? c + " - try by id"}.` : void 0,
                            helperText: null != h ? "Game profile found" : void 0,
                        }),
                        (0, r.jsx)("ul", {
                            children: b.map((e) =>
                                (0, r.jsx)(
                                    "li",
                                    { children: (0, r.jsx)(ah, { application: e }) },
                                    `follow-game-${e.id}`,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ah(e) {
    let { application: t } = e,
        a = (0, t3.A)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: t2.GameProfileSources.DevTools,
        });
    return (0, r.jsx)(X.D, {
        onClick: a,
        children: (0, r.jsx)(g.E, { variant: "body-xs/normal", color: "text-muted", children: t.name }),
    });
}
var ap = a(267355),
    ag = a(887287),
    ax = a(222506),
    av = a(293432),
    ab = a(188321),
    aj = a(25202);
function af(e) {
    let { label: t, value: a } = e;
    return (0, r.jsxs)(tJ.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            (0, r.jsx)(g.E, { variant: "body-md/normal", color: "text-muted", children: t }),
            (0, r.jsx)(g.E, { variant: "body-md/medium", children: a }),
        ],
    });
}
function ay(e) {
    return e ? "yes" : "no";
}
function aE(e) {
    return e > 0 ? `${e} fps` : "uncapped";
}
function aC() {
    let e = (0, d.cf)([ab.A, ag.A, ax.A, av.A], () => ({
            storedEnabledChoice: ab.A.getStoredEnabledChoice(),
            hasRunningGame: ab.A.hasRunningGame,
            isThrottling: ab.A.isThrottling,
            frameRate: (0, aj.A)(),
            overlayFrameRate: (0, aj.j)(),
            isOverlayOpen: (0, ap.D)(),
            isDiscordFocused: ab.A.isDiscordFocused,
            isDiscordHovered: ab.A.isDiscordHovered,
        })),
        t = e.isThrottling
            ? null
            : !1 === e.storedEnabledChoice
              ? "Turned off in Settings > System > Game Mode."
              : e.hasRunningGame
                ? e.isDiscordFocused
                    ? "Relaxed: levers lift while Discord is focused."
                    : e.isDiscordHovered
                      ? "Relaxed: levers lift while the cursor is over Discord."
                      : "The 2026-08-game-mode experiment is off for this account."
                : "No non-launcher game is running.";
    return (0, r.jsxs)(tJ.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(tJ.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Status" }),
                    (0, r.jsx)(af, { label: "Throttling", value: ay(e.isThrottling) }),
                    (0, r.jsx)(af, { label: "Running game detected", value: ay(e.hasRunningGame) }),
                    (0, r.jsx)(af, { label: "Discord focused", value: ay(e.isDiscordFocused) }),
                    (0, r.jsx)(af, { label: "Discord hovered", value: ay(e.isDiscordHovered) }),
                    null != t && (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: "Set a debug running game from the Detected Games tab to simulate a game.",
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(tJ.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Applied Levers" }),
                    (0, r.jsx)(af, { label: "Frame rate cap", value: aE(e.frameRate) }),
                    (0, r.jsx)(af, { label: "Overlay frame rate cap", value: aE(e.overlayFrameRate) }),
                    (0, r.jsx)(af, { label: "Reduce motion", value: ay(e.isThrottling) }),
                    (0, r.jsx)(af, { label: "Pause animated media", value: ay(e.isThrottling) }),
                    (0, r.jsx)(af, { label: "Overlay open", value: ay(e.isOverlayOpen) }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children:
                            "Levers key off Throttling, except the frame rate caps: the main cap also lifts while the overlay is open, and the overlay cap holds whenever game mode is active, ignoring focus and hover. Values live in GameModeConstants.tsx.",
                    }),
                ],
            }),
        ],
    });
}
var aS = a(890497),
    a_ = a(769015),
    aN = a(311043),
    aA = a(454908),
    ak = a(282435);
function aD(e) {
    return ak.jN.get(e) ?? 0;
}
function aI(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, aA.I)(t),
        l = (0, d.bG)([aN.A], () => aN.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)(tJ.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(a_.A, { game: a, size: a_.M.SMALL }),
                    (0, r.jsxs)(tJ.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-md/semibold", children: a.name }),
                            (0, r.jsx)(g.E, { variant: "footnote/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function aT() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([t6.A], () => t6.A.games),
        i = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => aD(t.value) - aD(e.value)),
            [l],
        ),
        s = o.useMemo(() => ({ baseSort: (e, t) => aD(t.item.value) - aD(e.item.value), keys: ["label"] }), []),
        c = o.useCallback((e) => {
            (t(e), null != e && n(""));
        }, []),
        u = o.useCallback((e) => {
            (n(e), e.trim().length > 0 && t(null));
        }, []),
        m = a.trim(),
        h = m.length > 0 ? m : (e ?? void 0),
        x = (0, t3.A)({ gameId: h, location: "DevToolsGameProfile", source: t2.GameProfileSources.DevTools });
    return (0, r.jsx)("div", {
        className: t0.nd,
        children: (0, r.jsxs)(tJ.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(tJ.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Game Profile" }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Search" }),
                        (0, r.jsx)(aS.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: i,
                            value: m.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: c,
                            selectionMode: "single",
                            clearable: !0,
                            matchSorterOptions: s,
                        }),
                    ],
                }),
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Game ID" }),
                        (0, r.jsx)(f.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: u,
                        }),
                        m.length > 0 && (0, r.jsx)(aI, { gameId: m }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    variant: "primary",
                    text: "Open Game Profile",
                    fullWidth: !0,
                    disabled: null == x,
                    onClick: x ?? void 0,
                }),
            ],
        }),
    });
}
var aR = a(923477),
    aO = a(750672);
function aw() {
    let e = (0, aR.O)((e) => e.requestHighlightFirstCard);
    return (0, r.jsxs)("div", {
        className: Q()(t0.nd, aO.k),
        children: [
            (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Game Server Hosting" }),
            (0, r.jsx)(g.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children:
                    'Replays the post-purchase scroll + highlight on the first card in the "Your game servers" list, exactly like clicking "View game server" after checkout. Open the Game Servers shop tab (/shop?tab=game-servers) with at least one owned server first.',
            }),
            (0, r.jsx)(p.$, { variant: "secondary", text: "Run post-purchase highlight (first card)", onClick: e }),
        ],
    });
}
var aM = a(554146),
    aP = a(594061),
    aL = a(617617),
    aU = a(355898),
    aG = a(644103),
    aF = a(574560),
    aB = a(434265);
let a$ = [
        aM.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        aM.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
        aM.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
    ].map((e) => ({ id: String(e), label: aM.M[e], value: e })),
    aV = { "global-cooldown": "global cooldown", "per-game-cooldown": "per-game cooldown", disabled: "disabled" };
function aW() {
    let [e, t] = o.useState("dismissals"),
        [a, n] = o.useState(aM.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, d.bG)([aL.A], () => aL.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        i = (0, d.bG)([aF.A], () => aF.A.getAllGameUpsellDismissals(a)),
        s = o.useMemo(() => Object.keys(i ?? {}), [i]),
        c = (0, tX.A)(s),
        [u, m] = o.useState(""),
        [h, x] = o.useState([]);
    o.useEffect(
        () =>
            (0, aG.Y)((e) => {
                x((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let v = o.useMemo(() => {
            let e = new Set();
            for (let t of h) for (let a of t.applicationIds) e.add(a);
            return [...e];
        }, [h]),
        y = (0, tX.A)(v),
        E = o.useMemo(() => Object.fromEntries(v.map((e, t) => [e, y[t]])), [v, y]),
        C =
            l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
                ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
                : "Never";
    return (0, r.jsxs)("div", {
        className: aB.nd,
        children: [
            (0, r.jsxs)("div", {
                className: aB.$H,
                children: [
                    (0, r.jsx)(X.D, {
                        className: Q()(aB.V3, { [aB.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(X.D, {
                        className: Q()(aB.V3, { [aB.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", h.length > 0 ? `(${h.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: aB.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: aB.uW,
                              children: (0, r.jsx)(j.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: a$,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: aB.uW,
                              children: [
                                  (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Global DCF State" }),
                                  (0, r.jsxs)(g.E, { variant: "body-sm/normal", children: ["Last dismissed: ", C] }),
                                  (0, r.jsxs)(g.E, {
                                      variant: "body-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                                  (0, r.jsx)(p.$, {
                                      variant: "secondary",
                                      text: "Reset Global DCF State",
                                      onClick: () => (0, aP._N)(a),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: aB.uW,
                              children: [
                                  (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Mark as Dismissed" }),
                                  (0, r.jsx)(f.k, {
                                      label: "Game ID",
                                      value: u,
                                      onChange: (e) => m(e),
                                      placeholder: "Enter Game ID",
                                  }),
                                  (0, r.jsx)(p.$, {
                                      variant: "secondary",
                                      text: "Mark as Dismissed",
                                      disabled: "" === u.trim(),
                                      onClick: () => {
                                          ((0, aU.M)([u.trim()], a), m(""));
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(b.c, {}),
                          (0, r.jsxs)("div", {
                              className: Q()(aB.uW, aB.LY),
                              children: [
                                  (0, r.jsxs)(ee.D, {
                                      variant: "heading-sm/semibold",
                                      children: ["Per-Game Dismissals (", s.length, ")"],
                                  }),
                                  0 === s.length
                                      ? (0, r.jsx)(g.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: "No dismissal data for this content type.",
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                s.map((e, t) => {
                                                    let n = c[t],
                                                        l = i?.[e];
                                                    if (null == l) return null;
                                                    let s = n?.getIconURL(32);
                                                    return (0, r.jsxs)(
                                                        "div",
                                                        {
                                                            className: aB.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: aB.MY,
                                                                    children: [
                                                                        null != s &&
                                                                            (0, r.jsx)("img", {
                                                                                src: s,
                                                                                alt: "",
                                                                                className: aB.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: aB.qi,
                                                                            children: [
                                                                                (0, r.jsx)(g.E, {
                                                                                    variant: "body-sm/semibold",
                                                                                    children: n?.name ?? "Unknown App",
                                                                                }),
                                                                                (0, r.jsx)(g.E, {
                                                                                    variant: "body-xs/normal",
                                                                                    color: "text-muted",
                                                                                    children: e,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, r.jsx)(p.$, {
                                                                            variant: "secondary",
                                                                            text: "Clear",
                                                                            onClick: () => (0, aU.e)(e, a),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(g.E, {
                                                                    variant: "body-xs/normal",
                                                                    children: [
                                                                        "Last dismissed: ",
                                                                        new Date(l.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(g.E, {
                                                                    variant: "body-xs/normal",
                                                                    children: ["Times dismissed: ", l.timesDismissed],
                                                                }),
                                                            ],
                                                        },
                                                        e,
                                                    );
                                                }),
                                                (0, r.jsx)(p.$, {
                                                    variant: "critical-primary",
                                                    text: "Clear All",
                                                    onClick: () => {
                                                        for (let e of s) (0, aU.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: aB.Lj,
                      children: (0, r.jsxs)("div", {
                          className: aB.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: aB.aq,
                                  children: [
                                      (0, r.jsxs)(ee.D, {
                                          variant: "heading-sm/semibold",
                                          children: ["Hook Calls (", h.length, ")"],
                                      }),
                                      (0, r.jsx)(p.$, { variant: "secondary", text: "Clear", onClick: () => x([]) }),
                                  ],
                              }),
                              0 === h.length
                                  ? (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "No calls recorded yet. Hook calls to useShouldShowGameUpsellForMultipleGames will appear here.",
                                    })
                                  : h.map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: aB.Nr,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: aB.O9,
                                                        children: [
                                                            (0, r.jsx)(g.E, {
                                                                variant: "body-xs/semibold",
                                                                children: new Date(e.timestamp).toLocaleTimeString(),
                                                            }),
                                                            e.disabled &&
                                                                (0, r.jsx)("span", {
                                                                    className: aB.t7,
                                                                    children: "(disabled)",
                                                                }),
                                                            (0, r.jsx)(g.E, {
                                                                variant: "body-xs/normal",
                                                                color: "text-muted",
                                                                children: aM.M[e.dismissibleContent],
                                                            }),
                                                        ],
                                                    }),
                                                    0 === e.applicationIds.length
                                                        ? (0, r.jsx)(g.E, {
                                                              variant: "body-xs/normal",
                                                              color: "text-muted",
                                                              children: "No apps",
                                                          })
                                                        : e.applicationIds.map((t) => {
                                                              let a = E[t],
                                                                  n = a?.getIconURL(20),
                                                                  l = e.eligibleToShow.includes(t),
                                                                  i = e.excludedReasons[t];
                                                              return (0, r.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className: aB.Ss,
                                                                      children: [
                                                                          null != n &&
                                                                              (0, r.jsx)("img", {
                                                                                  src: n,
                                                                                  alt: "",
                                                                                  className: aB.rb,
                                                                              }),
                                                                          (0, r.jsx)("span", {
                                                                              className: aB.Jd,
                                                                              children: a?.name ?? t,
                                                                          }),
                                                                          l
                                                                              ? (0, r.jsx)("span", {
                                                                                    className: aB.OK,
                                                                                    children: "eligible",
                                                                                })
                                                                              : null != i
                                                                                ? (0, r.jsx)("span", {
                                                                                      className: aB.t7,
                                                                                      children: aV[i],
                                                                                  })
                                                                                : null,
                                                                      ],
                                                                  },
                                                                  t,
                                                              );
                                                          }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                          ],
                      }),
                  }),
        ],
    });
}
var aH = a(696986),
    az = a(47167),
    aK = a(734057),
    aY = a(994500),
    aq = a(398269),
    aJ = a(394953),
    aQ = a(618216);
let aX = [
        {
            key: "channelName",
            cellClassName: Q()(aQ.Hn, aQ.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(g.E, { variant: "body-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: Q()(aQ.Hn, aQ.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(g.E, { variant: "body-md/normal", children: t });
            },
        },
    ],
    aZ = [
        {
            key: "channelName",
            cellClassName: Q()(aQ.Hn, aQ.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(g.E, { variant: "body-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: Q()(aQ.Hn, aQ.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(g.E, { variant: "body-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: Q()(aQ.Hn, aQ.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(g.E, { variant: "body-md/normal", children: t });
            },
        },
    ];
function a0() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, aJ.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: i,
            isLoadingComplete: s,
        } = (0, tD.cf)([aq.A], () => ({
            isLoading: aq.A.isLoading,
            hasLoadedEver: aq.A.hasLoadedEver,
            hasPreloaded: aq.A.hasPreloaded,
            hasMoreToLoad: aq.A.hasMoreToLoad,
            isLoadingComplete: aq.A.isLoadingComplete,
        })),
        o = (0, tD.bG)([aq.A], () => aq.A.currentRequestAnalyticsPayload),
        d = (0, tD.cf)([aq.A], () => aq.A.getChannelInfoMap()),
        c = (0, tD.cf)([aK.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = aK.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        u = (0, tD.cf)([aK.A], () =>
            t.reduce((e, t) => {
                let a = aK.A.getChannel(t);
                return ((e[t] = a ?? null), e);
            }, {}),
        ),
        h = (0, tD.bG)([aq.A], () => aq.A.getInboxMessages()),
        p = (0, tD.bG)([aq.A], () => aq.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: t0.nd,
        children: (0, r.jsxs)(x.Ip, {
            className: aQ.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(m.d, {
                                label: "Nav On Click",
                                checked: !!p,
                                onChange: (e) => {
                                    E.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(aH.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(t1, {
                            columns: aX,
                            data: Object.entries(u).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, az.m1)(a, ec.default, aY.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Store State" }),
                        (0, r.jsxs)("div", { children: ["Is Loading: ", a ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has Preloaded: ", l ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has Loaded Ever: ", n ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has More To Load: ", i ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Is Loading Complete: ", s ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Last Loading Trigger: ", o?.loadingTrigger] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(t1, {
                            columns: aZ,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = c[a]) ? (0, az.m1)(t, ec.default, aY.A) : "",
                                    loadState: n.loadState,
                                };
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var a1 = a(976860),
    a2 = a(7891),
    a3 = a(786800);
let a6 = function () {
    return (0, r.jsxs)("div", {
        className: a3.k,
        children: [
            (0, r.jsx)(g.E, {
                variant: "body-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(p.$, {
                onClick: () => {
                    ((0, a2.Ov)(), (0, a1.pX)(ep.BVt.QUEST_HOME));
                },
                text: "Clear History",
            }),
            (0, r.jsx)(g.E, {
                variant: "body-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var a5 = a(271866),
    a8 = a(868511),
    a4 = a(147964),
    a9 = a(30512),
    a7 = a(13981),
    ne = a(760716),
    nt = a(115093),
    na = a(970628);
let nn = window.GLOBAL_ENV.RELEASE_CHANNEL === nt.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function nl() {
    let e = (0, ne.i)((e) => e.overrideApplicationId),
        t = (0, ne.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        n = (0, ne.i)((e) => e.overrideNitroEligibilityForSocialLayerStorefront),
        l = (0, ne.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
        i = (0, ne.i)((e) => e.isNitroEligibleForSocialLayerStorefront),
        s = (0, ne.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront),
        [c, u] = o.useState(nn),
        [h, g] = o.useState(ep.FYj),
        x = o.useCallback(
            (e) => {
                e ? t(c) : t(null);
            },
            [c, t],
        ),
        v = o.useCallback(
            (e) => {
                (u(e), a && t(e));
            },
            [a, t],
        ),
        b = (0, ne.i)((e) => e.showSelfActivity),
        j = (0, ne.i)((e) => e.setShowSelfActivity),
        y = (0, ne.i)((e) => e.recommendationApplicationIds),
        E = (0, ne.i)((e) => e.setRecommendationApplicationIds),
        C = o.useCallback(
            (e) => {
                e ? E(h) : E(null);
            },
            [h, E],
        ),
        S = (0, d.bG)([a4.A], () => null != a4.A.testModeApplicationId),
        _ = o.useCallback((e) => {
            e ? (0, eJ.qf)((e) => (0, r.jsx)(a8.A, { ...e })) : a5.cL();
        }, []),
        N = (0, t3.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: c,
            source: t2.GameProfileSources.Embed,
            trackEntryPointImpression: !0,
        }),
        A = o.useCallback(
            (e) => {
                N?.(e);
            },
            [N],
        ),
        k = o.useCallback(() => {
            (0, a1.pX)(ep.BVt.COLLECTIBLES_SHOP_GAME_SHOP(c));
        }, [c]);
    return (0, r.jsx)("div", {
        className: Q()(t0.nd, na.n),
        children: (0, r.jsxs)("div", {
            className: na.k,
            children: [
                (0, r.jsx)(f.k, { label: "Application ID", value: c, onChange: v }),
                (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Activity Override" }),
                (0, r.jsx)(m.d, { label: "Override activity application ID", checked: a, onChange: x }),
                (0, r.jsx)(m.d, { label: "Show own voice activity (bypass self check)", checked: b, onChange: j }),
                (0, r.jsx)(m.d, { label: "Enable application test mode", checked: S, onChange: _ }),
                (0, r.jsx)(p.$, { text: "Open Game Profile Modal", onClick: A }),
                (0, r.jsx)(p.$, { text: "Navigate to App Game Shop", onClick: k }),
                (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Game Exit Promo" }),
                Object.values(a9.U3).map((e) =>
                    (0, r.jsx)(
                        p.$,
                        {
                            text: "Preview",
                            onClick: () => {
                                ((0, a7.ik)({ type: "replaced" }), (0, a7.sC)(e.id, { isPreview: !0 }));
                            },
                        },
                        e.id,
                    ),
                ),
                (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Wishlists" }),
                (0, r.jsx)(f.k, {
                    label: "Recommendation application IDs",
                    value: h,
                    onChange: g,
                    disabled: null == y,
                }),
                (0, r.jsx)(m.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != y,
                    onChange: C,
                }),
                (0, r.jsx)(m.d, {
                    label: "Override nitro eligibility for social layer storefront",
                    checked: n,
                    onChange: l,
                }),
                (0, r.jsx)(m.d, { label: "Is nitro eligible for social layer storefront", checked: i, onChange: s }),
            ],
        }),
    });
}
var ni = a(540999),
    ns = a(723702);
(a(650750), a(772958));
var nr = a(58736);
(a(558179), a(21574));
var no = a(231545),
    nd = a(761929),
    nc = a(180808);
function nu(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, nd.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: nd.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: nc.Di });
}
function nm(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        i = o.useRef(null),
        [s, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: i,
        className: nc.kL,
        style: { minHeight: l, height: s },
        children: [
            (0, r.jsx)(nu, { resizableNode: i, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: Q()(nc.KZ, a), children: t }),
        ],
    });
}
var nh = a(231643),
    np = a(362688);
(a(140346), np.fu.NONE, np.fu.NONE);
var ng = a(825484),
    nx = a(688810),
    nv = a(975460),
    nb = a(724302),
    nj = a(487431),
    nf = a(712440),
    ny = a(733110),
    nE = a(134861),
    nC = a(71393),
    nS = a(967198),
    n_ = a(942370),
    nN = a(792996),
    nA = a(86495),
    nk = a(681135);
function nD() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, nx.Ay)(tI.A.DEV_TOOLS),
        [i, s] = o.useState(""),
        c = (0, d.bG)([nS.A], () => nS.A.getGuildId()),
        u = (0, d.bG)([nC.A], () => nC.A.getGuild(c)),
        m = u?.gameApplicationIds ?? [],
        h = (0, tX.A)(m).filter((e) => null != e),
        x = (0, d.bG)([_.Ay, k.A], () => (0, N.A)(_.Ay, k.A)),
        v = (0, tX.h)(i),
        j = (0, nv.g)(v),
        y = (0, d.yK)(
            [tQ.A],
            () => v?.linkedGames?.map((e) => tQ.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        E = (0, nb.RD)(v, { allowedFlows: [n_._.RPC], debug: !0 }),
        C = (0, nb.RD)(v, { allowedFlows: [n_._.WEB], debug: !0 }),
        S = (0, d.bG)([nE.A], () => null != j && nE.A.isConnected(j.id)),
        A = (0, nb.RD)(v, { debug: !0 }),
        { canDeauthorize: D, deauthorize: I } =
            ((e = A.connectionApp?.id),
            (t = (0, d.bG)([ny.A], () => ny.A.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && nf.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: Q()(t0.nd, nk.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nk.kL,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Application" }),
                    (0, r.jsx)(f.k, { label: "Application ID", value: i, onChange: s }),
                    null != x && null != x.id
                        ? (0, r.jsx)(p.$, {
                              onClick: () => s(x.id),
                              variant: "primary",
                              text: `Use detected game: ${x.name} (${x.id})`,
                          })
                        : null,
                    null != u
                        ? h.length > 0
                            ? (0, r.jsxs)("div", {
                                  className: nk.Mc,
                                  children: [
                                      (0, r.jsxs)(g.E, {
                                          variant: "body-sm/semibold",
                                          color: "text-subtle",
                                          children: [u.name, " (", u.id, ") \xb7 Official games"],
                                      }),
                                      (0, r.jsx)(ng.e, {
                                          size: "sm",
                                          wrap: !0,
                                          children: h.map((e) =>
                                              (0, r.jsx)(
                                                  p.$,
                                                  {
                                                      onClick: () => s(e.id),
                                                      variant: i === e.id ? "primary" : "secondary",
                                                      text: `${e.name} (${e.id})`,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                      }),
                                  ],
                              })
                            : (0, r.jsxs)(g.E, {
                                  variant: "body-md/normal",
                                  color: "text-subtle",
                                  children: [u.name, " (", u.id, ") \xb7 No official games"],
                              })
                        : (0, r.jsx)(g.E, {
                              variant: "body-md/normal",
                              color: "text-subtle",
                              children: "No guild selected",
                          }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)("div", {
                        className: nk.J3,
                        children: [
                            (0, r.jsxs)(g.E, {
                                variant: "body-md/normal",
                                children: ["Application Name: ", null != v ? v.name : "N/A"],
                            }),
                            (0, r.jsxs)(g.E, {
                                variant: "body-md/normal",
                                children: [
                                    "Linked Games:",
                                    " ",
                                    y.length > 0
                                        ? y.map((e) => ((0, nv.t)(v)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                        : "N/A",
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)("div", {
                className: nk.kL,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Authorization status" }),
                    (0, r.jsx)(nj.VT, {
                        flow: n_._.RPC,
                        showGlobalFlowToggle: !0,
                        overallStatus: E.debug.isSubscribedToAuthorizeRequest
                            ? nj.nW.OVERALL_GOOD
                            : S
                              ? nj.nW.WARN
                              : nj.nW.OVERALL_BAD,
                        name: nN.intl.string(nA.default.AGLx00),
                        steps: [
                            {
                                status: S ? nj.nW.GOOD : nj.nW.BAD,
                                text: nN.intl.string(nA.default.kxF9br),
                                description: S ? null : nN.intl.string(nA.default.PFxxJa),
                                learnMoreLink: S
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: E.debug.isSubscribedToAuthorizeRequest
                                    ? nj.nW.GOOD
                                    : S
                                      ? nj.nW.WARN
                                      : nj.nW.BAD,
                                text: nN.intl.string(nA.default.S94dzs),
                                description:
                                    E.debug.isSubscribedToAuthorizeRequest || !S
                                        ? null
                                        : nN.intl.string(nA.default.aTULMB),
                                learnMoreLink:
                                    E.debug.isSubscribedToAuthorizeRequest || !S
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: A.chosenFlow === n_._.RPC,
                    }),
                    (0, r.jsx)(nj.VT, {
                        flow: n_._.WEB,
                        showGlobalFlowToggle: !0,
                        overallStatus: C.debug.hasConnectionEntrypointUrl ? nj.nW.OVERALL_GOOD : nj.nW.OVERALL_BAD,
                        name: nN.intl.string(nA.default.K3ObrU),
                        steps: [
                            {
                                status: C.debug.hasConnectionEntrypointUrl ? nj.nW.GOOD : nj.nW.BAD,
                                text: nN.intl.string(nA.default["8a7IrV"]),
                                description: C.debug.hasConnectionEntrypointUrl
                                    ? nN.intl.formatToPlainString(nA.default["9iLeL2"], {
                                          url: C.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: A.chosenFlow === n_._.WEB,
                    }),
                    (0, r.jsx)(nj.Sy, {
                        status: A.hasAlreadyLinked ? nj.nW.OVERALL_GOOD : nj.nW.OVERALL_BAD,
                        text: nN.intl.string(nN.t["Vu/zmQ"]),
                    }),
                    0 === A.debug.validFlows.length &&
                        (0, r.jsx)(g.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "body-md/medium",
                            children: nN.intl.string(nA.default.eg0mNa),
                        }),
                    (0, r.jsx)(p.$, {
                        disabled: !A.canStartAuthorization,
                        fullWidth: !0,
                        onClick: () => A.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsxs)(ng.e, {
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(p.$, {
                                disabled: !E.canStartAuthorization,
                                onClick: () => E.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start In-App Authorization",
                            }),
                            (0, r.jsx)(p.$, {
                                disabled: !C.canStartAuthorization,
                                onClick: () => C.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start Web Authorization",
                            }),
                        ],
                    }),
                    (0, r.jsx)(p.$, {
                        disabled: !D,
                        fullWidth: !0,
                        onClick: I,
                        variant: "critical-primary",
                        text: "Deauthorize",
                    }),
                ],
            }),
            v?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(b.c, {}),
                        (0, r.jsxs)("div", {
                            className: nk.kL,
                            children: [
                                (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Benefit configuration" }),
                                (0, r.jsx)("div", {
                                    className: nk.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: nk.Tc,
                                        children: [
                                            null != v.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: v.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: nk.L8,
                                                }),
                                            (0, r.jsx)(g.E, {
                                                variant: "body-md/semibold",
                                                children:
                                                    v.applicationAccountLinkBenefitConfig.reward_name ??
                                                    "Unnamed Reward",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var nI = a(812020),
    nT = a(584454),
    nR = a(404885);
function nO() {
    let e = (0, d.bG)([nI.A], () => nI.A.getDevToolsOverride()),
        t = (0, d.bG)([ec.default], () => (null != e ? (ec.default.getUser(e.otherUserId) ?? null) : null), [e]),
        [a, n] = o.useState(t?.username ?? ""),
        [l, i] = o.useState(e?.communicationProbability ?? 1),
        [s, c] = o.useState(e?.vcProbability ?? 1),
        u = a.trim(),
        m = (0, d.bG)([ec.default], () => (u.length > 0 ? (ec.default.findByTag(u) ?? null) : null), [u]),
        h = u.length > 0 && null == m,
        x = null != m && null != l && null != s;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(tJ.B, {
                gap: 8,
                padding: 8,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/semibold", children: "User Affinity Override" }),
                    (0, r.jsx)(g.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: "Injects a temporary affinity entry for the given user, resets on reload or logout.",
                    }),
                    (0, r.jsx)(f.k, {
                        label: "Target username",
                        value: a,
                        onChange: n,
                        placeholder: "pomelo_name",
                        error: h ? "No local user matches that username." : void 0,
                    }),
                    (0, r.jsxs)(tJ.B, {
                        gap: 8,
                        direction: "horizontal",
                        align: "end",
                        children: [
                            (0, r.jsx)(nT.Q, {
                                label: "Comm. affinity",
                                mode: "decimal",
                                min: 0,
                                max: 1,
                                step: 0.1,
                                value: l,
                                onChange: i,
                            }),
                            (0, r.jsx)(nT.Q, {
                                label: "Voice affinity",
                                mode: "decimal",
                                min: 0,
                                max: 1,
                                step: 0.1,
                                value: s,
                                onChange: c,
                            }),
                            (0, r.jsxs)(ng.e, {
                                children: [
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: null == e ? "Apply" : "Update",
                                        onClick: function () {
                                            x &&
                                                null != m &&
                                                null != l &&
                                                null != s &&
                                                (0, nR.C)({
                                                    userId: m.id,
                                                    communicationProbability: l,
                                                    vcProbability: s,
                                                });
                                        },
                                        disabled: !x,
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: "Clear",
                                        onClick: function () {
                                            ((0, nR.C)(null), n(""), i(1), c(1));
                                        },
                                        disabled: null == e,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != e &&
                        (0, r.jsxs)(g.E, {
                            variant: "body-xs/normal",
                            color: "text-feedback-positive",
                            children: ["Active: user ", t?.username ?? "unknown"],
                        }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
        ],
    });
}
var nw = a(541660);
function nM(e) {
    let { title: t, sortKey: a, activeSortKey: n, sortDir: l, onClick: i } = e,
        s = n === a ? ("desc" === l ? " \u25BC" : " \u25B2") : "";
    return (0, r.jsx)(X.D, {
        className: nw.K8,
        onClick: () => i(a),
        children: (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: t + s }),
    });
}
function nP() {
    let [e, t] = o.useState("affinity"),
        [a, n] = o.useState("desc"),
        l = o.useCallback(
            (a) => {
                e === a ? n((e) => ("asc" === e ? "desc" : "asc")) : (t(a), n("username" === a ? "asc" : "desc"));
            },
            [e],
        ),
        i = (0, d.yK)([nI.A, ec.default], () =>
            nI.A.getUserAffinities().map((e) => {
                let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
                return { user: ec.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
            }),
        ),
        s = o.useMemo(
            () =>
                [...i].sort((t, n) => {
                    let l;
                    if ("username" === e) {
                        let e = t.user?.username ?? t.key,
                            a = n.user?.username ?? n.key;
                        l = e.localeCompare(a);
                    } else l = t[e] - n[e];
                    return "desc" === a ? -l : l;
                }),
            [i, e, a],
        ),
        c = o.useMemo(
            () => [
                {
                    key: "user",
                    cellClassName: nw.iL,
                    renderHeader: () =>
                        (0, r.jsx)(nM, {
                            title: "USER",
                            sortKey: "username",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    render(e) {
                        let { user: t, key: a } = e;
                        return t?.username ?? a;
                    },
                },
                {
                    key: "affinity",
                    renderHeader: () =>
                        (0, r.jsx)(nM, {
                            title: "COMMUNICATION AFFINITY",
                            sortKey: "affinity",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nw.nz,
                    render(e) {
                        let { affinity: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "vcProbability",
                    renderHeader: () =>
                        (0, r.jsx)(nM, {
                            title: "VOICE AFFINITY",
                            sortKey: "vcProbability",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nw.nz,
                    render(e) {
                        let { vcProbability: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "isFriend",
                    renderHeader: () => (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "IS FRIEND" }),
                    cellClassName: nw.nz,
                    render(e) {
                        let { isFriend: t } = e;
                        return t.toString();
                    },
                },
            ],
            [e, a, l],
        );
    return (0, r.jsxs)("div", {
        className: nw.nd,
        children: [(0, r.jsx)(nO, {}), i.length > 0 && (0, r.jsx)(t1, { columns: c, rowClassName: nw.nM, data: s })],
    });
}
var nL = a(536637),
    nU = a.n(nL),
    nG = a(862482),
    nF = a(624479),
    nB = a(555704),
    n$ = a(285796),
    nV = a(241326),
    nW = a(683438),
    nH = a(297413),
    nz = a(379078),
    nK = a(704554),
    nY = a(957565),
    nq = a(5377),
    nJ = a(80703),
    nQ = a(46653);
let nX = 0,
    nZ = [],
    n0 = 0,
    n1 = [],
    n2 = !1;
class n3 extends d.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nQ.default, ni.A);
    }
    get loggedEvents() {
        return nZ;
    }
    get loggedEventsVersion() {
        return n0;
    }
    get loggedTriggers() {
        return n1;
    }
    get trackTriggers() {
        return n2;
    }
}
let n6 = new n3(E.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        ni.A.isDeveloper &&
            (nZ.push({
                key: (nX++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, nJ.d)(n) : nQ.default.getId(),
                timestamp: new Date(),
            }),
            n0++,
            nZ.length > 500 && (nZ = nZ.slice(-250)));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: i, previouslyTracked: s } = e;
        !ni.A.isDeveloper ||
            (n2 &&
                (n1 = [
                    ...n1,
                    {
                        key: (0, eP.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: i,
                        previouslyTracked: s,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                n1.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        n2 = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        ((nZ = []), n0++, (n1 = []));
    },
});
var n5 = a(658675);
function n8(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: Q()(t0.qo, t), children: a });
}
function n4(e) {
    let { name: t, children: a, copyValue: n } = e,
        [l, i] = o.useState(!1);
    return (
        o.useEffect(() => {
            if (l) {
                let e = setTimeout(() => i(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("dt", { className: t0.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: t0.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(X.D, {
                                  tag: "span",
                                  className: t0.nH,
                                  onClick: () => (0, nY.C)(n, () => i(!0)),
                                  children: l
                                      ? (0, r.jsx)(tm.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(nF.CopyIcon, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
}
function n9(e) {
    let { value: t } = e;
    return (0, r.jsx)(n5.P, { checked: t });
}
var n7 = a(412966);
let le = [
    {
        key: "Event",
        cellClassName: n7.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "Location",
        cellClassName: n7.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function lt(e) {
    let { children: t } = e;
    return (0, r.jsx)(x.Ip, { orientation: "auto", className: n7._D, children: (0, r.jsx)("dl", { children: t }) });
}
function la(e) {
    let { name: t, children: a, copyValue: n } = e,
        [l, i] = o.useState(!1);
    return (
        o.useEffect(() => {
            if (l) {
                let e = setTimeout(() => i(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, r.jsxs)("div", {
            className: n7.fY,
            children: [
                (0, r.jsx)("dt", { className: n7.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(X.D, {
                    tag: "span",
                    className: n7.nH,
                    onClick: () => (0, nY.C)(JSON.stringify(n), () => i(!0)),
                    children: l
                        ? (0, r.jsx)(tm.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(nF.CopyIcon, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let ln = new Set(["client_performance_cpu", "client_performance_memory"]),
    ll = [
        {
            id: "details",
            name: "Details",
            group: np.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: i,
                        filteredEvents: s,
                    } = e,
                    o = ec.default.getUser(l),
                    d = nU()(n);
                return (0, r.jsxs)("div", {
                    className: n7.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(nr.Ay, {
                            className: Q()(t0.jr, n7.nZ),
                            children: [
                                (0, r.jsx)(nr.Ay.Icon, { icon: nB.U, tooltip: t }),
                                (0, r.jsxs)(nr.Ay.Title, {
                                    wrapperClassName: n7.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(X.D, {
                                            tag: "span",
                                            className: n7.KE,
                                            onClick: () => (0, nY.C)(t),
                                            children: (0, r.jsx)(nF.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(nr.Ay.Icon, {
                                    icon: nF.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nY.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(nr.Ay.Icon, { icon: n$.a, tooltip: "Close", onClick: i }),
                            ],
                        }),
                        (0, r.jsxs)(n8, {
                            className: n7.ZK,
                            children: [
                                (0, r.jsx)(n4, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nq.i$)(d, "LLLL"),
                                        children: ["(", nU().locale(), ") ", (0, nq.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(n4, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(nH.A, { user: o }),
                                    }),
                                (0, r.jsx)(n4, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(lt, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = ln.has(a)
                                        ? (function (e, t, a) {
                                              let n = e.filter((e) => e.event === t);
                                              if (0 === n.length) return { average: null, count: 0 };
                                              let l = null,
                                                  i = 0;
                                              for (let e of n) {
                                                  let t = e.properties[a];
                                                  "number" == typeof t && ((i += 1), null == l ? (l = t) : (l += t));
                                              }
                                              return { average: null !== l ? l / n.length : null, count: i };
                                          })(s, t, a)
                                        : null;
                                return (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(
                                                la,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: n7.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    la,
                                                    {
                                                        name: `${a}_avg:`,
                                                        copyValue: { [a]: n || null },
                                                        children: (0, r.jsxs)("code", {
                                                            children: [l.average.toFixed(3), " (", l.count, ")"],
                                                        }),
                                                    },
                                                    `${a}_avg`,
                                                ),
                                        ],
                                    },
                                    `${a}_container`,
                                );
                            }),
                        }),
                    ],
                });
            },
        },
    ],
    li = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(li)
                    .filter((e) => {
                        let [t] = e;
                        return "events" !== t;
                    })
                    .map((t) => {
                        let [a, { filter: n }] = t;
                        return !n(e);
                    })
                    .every((e) => e),
        },
        experiments: {
            label: "Experiments",
            filter: (e) => ["experiment_user_triggered", "experiment_guild_triggered"].includes(e.event),
        },
        impressions: { label: "Impressions", filter: (e) => e.event.startsWith("impression_") },
        networkActions: { label: "Network", filter: (e) => e.event.startsWith("network_action") },
    },
    ls = {
        searchType: nz.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function lr() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, d.bG)([n6], () => n6.loggedEventsVersion),
        [l, i] = o.useState(() => Object.keys(li)),
        [s, c] = o.useState(n6.loggedEvents),
        u = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nK.RT)(t, n6.loggedEvents, u, ls, [n]);
    let m = s.filter((e) => {
            for (let t of l) if (li[t].filter(e)) return !0;
            return !1;
        }),
        [h, p] = o.useState(void 0),
        g = m.find((e) => e.key === h),
        { TabBar: x, renderSelectedTab: v } = (0, nh.A)({ tabs: ll }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: Q()(t0.nd, n7.nd),
        children: [
            (0, r.jsxs)("div", {
                className: n7.rh,
                children: [
                    (0, r.jsx)(nG.$n, {
                        className: n7.Q$,
                        look: nG.$n.Looks.BLANK,
                        size: nG.$n.Sizes.ICON,
                        onClick: et.eY,
                        children: (0, r.jsx)("span", {
                            title: nN.intl.string(nN.t.VkKicb),
                            children: (0, r.jsx)(nV.TrashIcon, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": nN.intl.string(nN.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: n7.Bi }),
                    (0, r.jsx)("div", {
                        className: n7.uW,
                        children: Object.entries(li).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                X.D,
                                {
                                    className: Q()(n7.pb, l.includes(t) && n7.bx),
                                    onClick: () => {
                                        i((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: a.label,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: n7.rh,
                children: (0, r.jsx)(nW.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(t1, { columns: le, data: m, selectedRowKey: h, onClickRow: (e) => p(e.key) }),
            null != g &&
                (0, r.jsxs)(nm, {
                    className: n7.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(x, {}), v({ loggedEvent: g, onClose: () => p(void 0), filteredEvents: m })],
                }),
        ],
    });
}
var lo = a(382483),
    ld = a(385113),
    lc = a(317672);
function lu(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(tJ.B, {
        gap: 8,
        padding: 8,
        className: lc.lt,
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(g.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(g.E, { variant: "body-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(g.E, {
                    variant: "body-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(g.E, {
                    variant: "body-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(g.E, {
                variant: "body-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(g.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          tJ.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: lc.YL,
                              children: [
                                  (0, r.jsx)(g.E, { variant: "body-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(g.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: ["Layout: ", a.layout],
                                  }),
                              ],
                          },
                          t,
                      );
                  }),
        ],
    });
}
function lm(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(tJ.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? lc.FM : lc.gt,
        children: [
            (0, r.jsx)(X.D, {
                className: lc.Av,
                onClick: n,
                children: (0, r.jsxs)(tJ.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.config_id, " \xb7 ", t.application_id],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Refetch",
                onClick: () => (0, lo.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function lh() {
    let e = (0, d.bG)([ld.A], () => ld.A.getFeaturedFetchState());
    return (0, r.jsxs)(tJ.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(tJ.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(g.E, { variant: "body-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, lo.Wq)({ force: !0 }),
            }),
        ],
    });
}
function lp() {
    let e = (0, d.bG)([ld.A], () => ld.A.getDeveloperFetchState());
    return (0, r.jsxs)(tJ.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(tJ.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(g.E, { variant: "body-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, lo.i$)({ force: !0 }),
            }),
        ],
    });
}
function lg() {
    let [e, t] = o.useState(""),
        a = (0, d.bG)([ld.A], () => (e.length > 0 ? ld.A.getFetchState(e) : null)),
        n = (0, d.bG)([ld.A], () => (e.length > 0 ? ld.A.getConfigs(e) : null));
    return (0, r.jsxs)(tJ.B, {
        gap: 8,
        children: [
            (0, r.jsx)(g.E, { variant: "body-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(f.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, lo.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(g.E, { variant: "body-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(tJ.B, { gap: 4, children: n.map((e) => (0, r.jsx)(lu, { config: e }, e.config_id)) }),
        ],
    });
}
function lx(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, d.bG)([ld.A], () => ld.A.getFeaturedFetchState());
    return (0, r.jsxs)(tJ.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(g.E, {
                variant: "body-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === ld.e.FETCHING &&
                (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    lm,
                    {
                        config: e,
                        isSelected: a === e.config_id,
                        onSelect: () => n(a === e.config_id ? null : e.config_id),
                    },
                    e.config_id,
                ),
            ),
        ],
    });
}
function lv(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(tJ.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(lu, { config: t }),
                ],
            }),
        ],
    });
}
function lb() {
    let [e, t] = o.useState(null),
        a = Object.values((0, d.bG)([ld.A], () => ld.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)(tJ.B, {
            gap: 16,
            padding: 8,
            className: lc.zr,
            children: [
                (0, r.jsx)(ee.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(p.$, {
                    size: "sm",
                    variant: "critical-secondary",
                    text: "Reset store",
                    onClick: () => E.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEBUG_RESET" }),
                }),
                (0, r.jsx)(lh, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lp, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lg, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lx, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(lv, { config: n }),
            ],
        }),
    });
}
var lj = a(513520),
    lf = a(134460),
    ly = a(468747);
let lE = [
    {
        key: "Channel",
        cellClassName: ly._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "SCORE" }),
        cellClassName: ly.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function lC() {
    o.useEffect(() => {
        (0, lj.I)();
    }, []);
    let e = (0, d.yK)([lf.A, aK.A], () =>
        lf.A.getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: aK.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(t1, { className: t0.nd, columns: lE, rowClassName: ly.nM, data: e });
}
function lS() {
    return (0, r.jsxs)(g.E, {
        variant: "body-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var l_ = a(105565),
    lN = a(517057),
    lA = a(333714);
function lk(e) {
    switch (e) {
        case l_.r.DC_DISMISSED:
            return "DISMISS:";
        case l_.r.DC_SHOWN:
            return "SHOW:";
        case l_.r.DC_SHOW_REQUEST:
            return "REQUEST TO SHOW:";
        default:
            return "UNKNOWN TYPE:";
    }
}
let lD = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${aM.M[a]}`;
            },
        },
    ],
    lI = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${aM.M[t]}`;
            },
        },
    ];
function lT() {
    let e = (0, d.bG)([l_.A], () => l_.A.getDCFEvents()),
        t = (0, lN.Ay)((e) => e.candidates),
        a = (0, lN.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? nU()(a).fromNow() : "n/a",
        l = (0, lN.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        i = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: lk(t) + a.toString(), event: lk(t), dismissibleContent: a };
        }),
        s = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: lA.KE,
        children: [
            (0, r.jsxs)("div", { className: lA.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: lA.pq, children: ["Last winner: ", null != l ? aM.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: lA.uI,
                children: (0, r.jsx)(t1, { className: lA.Th, columns: lI, data: s }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(t1, { columns: lD, data: i }),
        ],
    });
}
var lR = a(516521),
    lO = a(541689),
    lw = a(199773);
function lM() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(lP());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        (a.unshift(e), tq.w.set("RecentDismissibleOverrides", a));
    }, []);
    return [lP(), e];
}
function lP() {
    return tq.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var lL = a(662546),
    lU = a(643278),
    lG = a(256787),
    lF = a(20439);
let lB = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = aM.M[a],
        { isDismissed: i, handleToggleDismissState: s } = (0, lF.A)(l),
        [d, c] = o.useState(!1),
        u = o.useCallback(() => {
            (n?.(a), s());
        }, [n, s, a]),
        h = o.useCallback(
            (e) => {
                (e.preventDefault(), c(!0), navigator.clipboard.writeText(a.toLowerCase()));
            },
            [a],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(tJ.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eK.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? lL.O : lU.ClipboardListIcon,
                        onClick: h,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(m.d, {
                        label: `${a.toLowerCase()} (${aM.M[a]})`,
                        description: (0, lG.Zm)(l)
                            ? (function (e) {
                                  let t = aL.A.settings.userContent?.recurringDismissibleContentStates?.[e];
                                  if (null == t) return null;
                                  let a = [],
                                      { lastDismissedVersion: n, lastDismissedAtMs: l, lastDismissedObjectId: i } = t;
                                  if (
                                      (void 0 !== n && 0 !== n && a.push(`last_dismissed_version: ${n}`), void 0 !== l)
                                  ) {
                                      let e = Number(l),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      a.push(`last_dismissed_at: ${t}`);
                                  }
                                  return (void 0 !== i && "0" !== i && a.push(`last_dismissed_object_id: ${i}`),
                                  0 === a.length)
                                      ? null
                                      : a.join(", ");
                              })(l)
                            : null,
                        checked: i,
                        onChange: u,
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
        ],
    });
});
function l$(e) {
    let { items: t, onChange: a } = e,
        [n, l] = lM(),
        i = (0, o.useCallback)(
            (e) => {
                (l(e), a?.(e));
            },
            [l, a],
        );
    return (0, r.jsx)(tJ.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lB, { content: e, onChange: i }, e)),
    });
}
function lV(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lN.Ay)((e) => e.recentlyShown),
        [n, l] = lM(),
        i = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(aM.M[e]))
            .slice(0, 3);
    return 0 === i.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(l$, { items: i }) });
}
function lW(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lN.Ay)((e) => e.recentlyShown)
            .map((e) => aM.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(l$, { items: a }) });
}
var lH = a(607734);
function lz() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
            upsellBackoffOverridden: n,
        } = (0, d.cf)([lw.A], () => ({
            dailyCapReached: lw.A.hasUserHitDCCap(),
            dailyCapOverridden: lw.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lw.A.newUserMinAgeRequiredOverridden,
            upsellBackoffOverridden: lw.A.upsellBackoffOverridden,
        })),
        [l, i] = o.useState(""),
        [s, c] = o.useState(20),
        h = o.useMemo(
            () =>
                Object.keys(aM.M)
                    .filter((e) => e.toLowerCase().includes(l.toLowerCase()))
                    .reverse(),
            [l],
        ),
        x = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < h.length && c((e) => e + 100);
            },
            [s, h.length],
        );
    return (0, r.jsx)(lR.Ch, {
        onScroll: x,
        children: (0, r.jsxs)("div", {
            className: lH.KE,
            children: [
                (0, r.jsxs)(u.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(tJ.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, lO.Ab)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, aP.nT)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, aP.D1)(),
                                }),
                                (0, r.jsx)(g.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: lO.SE,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: lO.U$,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override 60-Minute Backoff Between DC Displays",
                            checked: n,
                            onChange: lO.M1,
                        }),
                    ],
                }),
                (0, r.jsx)(lW, {}),
                (0, r.jsx)(lV, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(nW.I, { query: l, onChange: i, onClear: () => i("") }),
                        (0, r.jsx)(l$, { items: h.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lK = a(276086),
    lY = a(154323),
    lq = a(504565);
function lJ() {
    let e = (0, d.bG)([lY.A], () => lY.A.allWithDescriptions(), [], d.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                m.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lK.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(b.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lq.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lq.x6,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Clear all", onClick: lK.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lq.vu, children: t }),
        ],
    });
}
var lQ = a(106839);
function lX() {
    let e = (0, d.bG)([t6.A], () => t6.A.detectableGamesEtag),
        t = (0, d.bG)([t6.A], () => t6.A.lastFetched),
        a = (0, d.bG)([t6.A], () => t6.A.games.length);
    return (0, r.jsxs)(tJ.B, {
        gap: 4,
        children: [
            (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Cache Status" }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: [(0, r.jsx)("strong", { children: "Total games:" }), " ", a],
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "ETag:" }),
                    " ",
                    "" === e ? "(empty)" : (0, r.jsx)("span", { className: lQ.ti, children: e }),
                ],
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "Last fetched:" }),
                    " ",
                    null == t ? "never" : new Date(t).toLocaleString(),
                ],
            }),
        ],
    });
}
function lZ(e) {
    let { game: t } = e,
        { data: a } = (0, aA.I)(t.id),
        n = null != a && a.name !== t.name;
    return (0, r.jsxs)(tJ.B, {
        gap: 12,
        className: lQ.f_,
        children: [
            (0, r.jsxs)(tJ.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                children: [
                    (0, r.jsx)(a_.A, { game: a, size: a_.M.LARGE }),
                    (0, r.jsxs)(tJ.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: t.name }),
                            (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: t.id }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(tJ.B, {
                gap: 4,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "GameStore" }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children:
                            null == a
                                ? "No record fetched. The icon above comes from here, not from the detectable payload, so it is blank."
                                : `name: ${a.name}`,
                    }),
                    n &&
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            children: "Differs from the detectable name above.",
                        }),
                ],
            }),
            (0, r.jsxs)(tJ.B, {
                gap: 4,
                className: lQ.Uq,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "DetectableGameStore" }),
                    (0, r.jsx)("pre", { className: lQ.aY, children: JSON.stringify(t, null, 2) }),
                ],
            }),
        ],
    });
}
function l0() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([t6.A], () => t6.A.games),
        i = o.useMemo(
            () =>
                l.filter((e) => null != e.name && "" !== e.name).map((e) => ({ id: e.id, value: e.id, label: e.name })),
            [l],
        ),
        s = o.useCallback((e) => {
            (t(e), null != e && n(""));
        }, []),
        c = o.useCallback((e) => {
            (n(e), e.trim().length > 0 && t(null));
        }, []),
        u = a.trim(),
        m = u.length > 0 ? u : (e ?? void 0),
        h = (0, d.bG)([t6.A], () => (null != m ? (t6.A.getDetectableGame(m) ?? null) : null), [m]);
    return (0, r.jsx)("div", {
        className: Q()(t0.nd, lQ.kL),
        children: (0, r.jsxs)(tJ.B, {
            gap: 16,
            padding: 12,
            className: lQ.rf,
            children: [
                (0, r.jsxs)(tJ.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Detectable Cache" }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "Inspect the local detectable games cache. Use this to verify whether a SKU or executable change has propagated to your client.",
                        }),
                    ],
                }),
                (0, r.jsx)(lX, {}),
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Search" }),
                        (0, r.jsx)(aS.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: i,
                            value: u.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: s,
                            selectionMode: "single",
                            clearable: !0,
                        }),
                    ],
                }),
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Game ID" }),
                        (0, r.jsx)(f.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: c,
                        }),
                    ],
                }),
                null != m &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(b.c, {}),
                            null != h
                                ? (0, r.jsx)(lZ, { game: h })
                                : (0, r.jsxs)(g.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-critical",
                                      children: ["No entry in cache for ID ", m, "."],
                                  }),
                        ],
                    }),
            ],
        }),
    });
}
var l1 = a(858899),
    l2 = a(123292),
    l3 = a(273626),
    l6 = a(56562);
let l5 = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
    { label: "World of Warcraft", value: "356875762940379136" },
];
function l8(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, aA.I)(t.id);
    return (0, r.jsxs)(tJ.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(a_.A, { game: n }),
            (0, r.jsxs)(tJ.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/normal", children: n?.name }),
                    a && (0, r.jsx)(g.E, { variant: "footnote/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function l4() {
    let e = (0, d.bG)([_.Ay], () => _.Ay.getRunningGames()),
        t = (0, d.bG)([_.Ay], () => _.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                l5.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        );
    function i(e) {
        if (null == e || "" === e) return void (0, l3.x)(null);
        let t = t6.A.getDetectableGame(e),
            a = t?.executables[0],
            n = t?.thirdPartySkus[0]?.distributor;
        if (null == t || null == a) return (0, l1.P0)({ text: "Invalid Game ID", variant: "critical" });
        (0, l3.x)({
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
            fullscreenType: l6.aI.UNKNOWN,
            cmdLine: "",
            nativeProcessObserverId: -1,
        });
    }
    return (0, r.jsxs)(tJ.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(tJ.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(l8, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(tJ.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(f.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(aS.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(tJ.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(l2.Q, { variant: "secondary", text: "Clear", onClick: () => i(null) }),
                            (0, r.jsx)(p.$, { variant: "primary", text: "Detect Game", onClick: () => i(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var l9 = a(620632),
    l7 = a(240248),
    ie = a(974009);
function it() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        s = o.useCallback(async () => {
            try {
                (t(!0), n(null), i(null));
                let e = await l9.Bo.put({
                    url: "/users/@me/developer-portal/onboarding",
                    body: { completed: !1 },
                    rejectWithError: !0,
                });
                n(`${e.status}: ${e.text}`);
            } catch (e) {
                i(e instanceof Error ? e.message : String(e));
            } finally {
                t(!1);
            }
        }, []);
    return (0, r.jsxs)(tJ.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(p.$, { variant: "primary", onClick: s, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, l7.uJ)(a) && (0, r.jsx)(g.E, { variant: "body-md/normal", color: "status-positive", children: a }),
            !(0, l7.uJ)(l) &&
                (0, r.jsx)(g.E, { variant: "body-md/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function ia() {
    return (0, r.jsx)("div", {
        className: ie.n,
        children: (0, r.jsx)(tJ.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(it, {}) }),
    });
}
a(172879);
var il = a(64015),
    ii = a.n(il),
    is = a(874804),
    ir = a(866665),
    io = a(782134),
    id = a(113494),
    ic = a(603349),
    iu = a(108715);
function im(e) {
    return parseFloat(e.toFixed(3));
}
let ih = [
    {
        key: "Store",
        cellClassName: iu.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "Time",
        cellClassName: iu.i7,
        render(e) {
            let { trace: t } = e;
            return `${im(t.time)} ms`;
        },
    },
];
function ip(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(x.Ip, { children: (0, r.jsx)(t1, { columns: ih, data: a }) });
}
let ig = [
    {
        id: "action",
        name: "Action",
        group: np.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = nU()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(n8, {
                        className: iu.mP,
                        children: [
                            (0, r.jsx)(n4, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nq.i$)(a, "LLLL"),
                                    children: (0, nq.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(n4, { name: "Total Time", children: [im(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(x.Ip, { className: iu.Dx, children: (0, r.jsx)(no.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: np.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(ip, { actionLog: t });
        },
    },
];
function ix(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...ig,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(ic.A, { className: iu.ik }), "Error"],
                              }),
                              group: np.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: Q()(iu.u4, t0.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: t0.R5,
                                                  children: (0, r.jsx)(nG.$n, {
                                                      className: t0.Q$,
                                                      size: nG.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(x.Ip, {
                                              className: iu.Dx,
                                              children: (0, r.jsx)(no.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : ig,
            [t],
        ),
        { TabBar: l, renderSelectedTab: i } = (0, nh.A)({ tabs: n }, [n]);
    return (0, r.jsxs)(nm, {
        className: iu.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(nr.Ay, {
                className: Q()(t0.jr, iu.nZ),
                children: [
                    (0, r.jsx)(nr.Ay.Icon, { icon: is.K, tooltip: t.name }),
                    (0, r.jsx)(nr.Ay.Title, {
                        wrapperClassName: Q()(t0.qd, t0.ZE),
                        className: t0.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(nr.Ay.Icon, {
                        icon: nF.CopyIcon,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return ((t[a] = ((n = e[a]), ep.AKn.test(n) ? "REDACTED" : n)), t);
                                }, {}),
                                null,
                                2,
                            );
                            (0, nY.C)(a, () =>
                                (0, l1.P0)({ text: "Copied action log data to clipboard", variant: "success" }),
                            );
                        },
                    }),
                ],
            }),
            i({ actionLog: t }),
        ],
    });
}
let iv = [
        {
            key: "Action",
            cellClassName: iu.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(ic.A, { className: iu.ik }), t.name],
                });
            },
        },
        {
            key: "Total Time",
            cellClassName: iu.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${im(t.totalTime)} ms`;
            },
        },
        {
            key: "Timestamp",
            cellClassName: iu.i7,
            render(e) {
                let { actionLog: t } = e;
                return nU()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    ib = {
        searchType: nz.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function ij() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = ii()(() => {
                        a([...e.logs]);
                    }, 500);
                    return (
                        e.on("log", t),
                        () => {
                            e.off("log", t);
                        }
                    );
                }, [e]),
                t
            );
        })(E.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [i, s] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, p] = o.useState(),
        g = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nK.RT)(t, u ? i : l, g, ib);
    let x = o.useCallback(
            (e) => {
                (s(l), m(e));
            },
            [l],
        ),
        v = t.trim().length > 0,
        b = o.useMemo(() => (v ? d : u ? i : l), [l, d, v, u, i]),
        j = u ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, r.jsxs)("div", {
        ref: e,
        className: Q()(t0.nd, iu.nd),
        children: [
            (0, r.jsxs)("div", {
                className: iu.KE,
                children: [
                    (0, r.jsx)(ir.m, {
                        text: j,
                        children: (0, r.jsx)(eK.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? io.PlayIcon : id.PauseIcon,
                            "aria-label": j,
                            onClick: () => x(!u),
                        }),
                    }),
                    (0, r.jsx)(nW.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(t1, {
                columns: iv,
                data: b,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => p(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(ix, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var iy = a(936388),
    iE = a(269248);
function iC() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: Q()(t0.nd, iE.n),
        children: (0, r.jsx)(p.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: iy.A.clearUploadedKeyVersions,
        }),
    });
}
var iS = a(409181),
    i_ = a(881520),
    iN = a(670455),
    iA = a(932661);
let ik = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function iD() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, i] = o.useState(1e3),
        [s, c] = o.useState(0),
        m = (0, d.bG)([i_.A], () => (null === e ? null : (i_.A.getFeedbackConfig(iN.MW[e]) ?? iS.u[iN.MW[e]]))),
        h = Object.entries(iN.MW),
        x = h.slice(h.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        v = o.useMemo(() => null != e && s >= 0 && s <= 100 && a >= 0, [e, s, a]);
    return (0, r.jsx)("div", {
        className: iA.kL,
        children: (0, r.jsxs)(tJ.B, {
            gap: 32,
            children: [
                (0, r.jsx)(j.l, {
                    label: "Feedback Survey",
                    options: x,
                    value: e,
                    onSelectionChange: t,
                    placeholder: "Select Feedback Survey",
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsxs)(u.n, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != m &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(tJ.B, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, r.jsx)(f.k, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: a.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => n(parseFloat(e)),
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: ik,
                                    value: l,
                                    onSelectionChange: i,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u.n, {
                    label: "Override Survey Chance",
                    children: (0, r.jsx)(f.k, {
                        label: "Override chance",
                        description: null != m ? `Current chance: ${100 * m.chance}%` : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: s.toString(),
                        type: "number",
                        onChange: (e) => c(parseFloat(e)),
                    }),
                }),
                (0, r.jsxs)(ng.e, {
                    children: [
                        (0, r.jsx)(p.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != m &&
                                    E.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: m.feedbackType })
                                ),
                            disabled: !v,
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != m &&
                                    E.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: m.feedbackType,
                                        cooldown: a * l,
                                        chance: s / 100,
                                    })
                                ),
                            disabled: !v,
                        }),
                    ],
                }),
                null == e &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(s >= 0 && s <= 100) &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var iI = a(447732),
    iT = a(931093),
    iR = a(334279),
    iO = a(663417),
    iw = a(147925),
    iM = a(557009);
function iP() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(!1),
        l = (0, o.useCallback)(async () => {
            try {
                n(!0);
                let e = await (async function () {
                    return (
                        await l9.Bo.get({
                            url: ep.Rsh.ENTITLEMENTS_FOR_APPLICATION(tL.tv),
                            oldFormErrors: !0,
                            query: { exclude_consumed: !0, exclude_ended: !0 },
                            rejectWithError: !0,
                        })
                    ).body.map((e) => iM.A.createFromServer(e));
                })();
                t(e);
            } finally {
                n(!1);
            }
        }, []),
        i = (0, o.useCallback)(
            async (e) => {
                (await (async function (e) {
                    await l9.Bo.post({
                        url: "/debug/entitlements/fractional-premium",
                        body: { count: 1, sku_id: e },
                        rejectWithError: !1,
                    });
                })(e),
                    await l());
            },
            [l],
        );
    return {
        grantFractionalPremium: i,
        deleteFractionalPremium: (0, o.useCallback)(
            async (e) => {
                (await (async function (e) {
                    let t = "/debug/entitlements/fractional-premium";
                    (null != e && (t = `${t}/${e}`), await l9.Bo.del({ url: t, rejectWithError: !0 }));
                })(e),
                    await l());
            },
            [l],
        ),
        triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
            (await (async function () {
                await l9.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
            })(),
                await l());
        }, [l]),
        refreshEntitlementList: l,
        entitlements: e,
        loading: a,
    };
}
var iL = a(267577),
    iU = a(370109);
let iG = {
    [iI.G.QUEST_REWARD]: "Quest Reward",
    [iI.G.DEVELOPER_GIFT]: "Developer Gift",
    [iI.G.INVOICE]: "Invoice",
    [iI.G.REVERSE_TRIAL]: "Reverse Trial",
    [iI.G.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    [iI.G.SUBSCRIPTION]: "Subscription",
    [iI.G.SUBSCRIPTION_MEMBER]: "Subscription Member",
};
function iF(e) {
    let t,
        { entitlement: a, active: n, onDelete: l } = e;
    function i(e) {
        return null != e ? (0, nq.i$)(e, "LLL") : "---";
    }
    return (0, r.jsxs)("div", {
        className: Q()(iL.Nr, n ? iU.C1 : ""),
        children: [
            (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["ID: ", a.id, " "] }),
            !n &&
                (0, r.jsxs)(g.E, {
                    variant: "body-md/normal",
                    children: ["SKU: ", iB.find((e) => e.value === a.skuId)?.label],
                }),
            null != a.startsAt &&
                null != a.endsAt &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Start: ", i(a.startsAt), " "] }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["End: ", i(a.endsAt), " "] }),
                    ],
                }),
            (0, r.jsxs)(g.E, {
                variant: "body-md/normal",
                children: [
                    "Entitlement source type: ",
                    null != (t = a.sourceType) && t in iG ? iG[t] : `Unknown source type ${t}`,
                ],
            }),
            n &&
                null != l &&
                (0, r.jsx)(nG.$n, {
                    className: iL.RW,
                    size: nG.$n.Sizes.TINY,
                    color: nG.$n.Colors.RED,
                    look: nG.$n.Looks.OUTLINED,
                    onClick: l,
                    children: "Delete",
                }),
        ],
    });
}
let iB = [
    { id: "1h", label: "1 hour", value: iR.j.PREMIUM_TIER_2_1_HOUR },
    { id: "1d", label: "1 day", value: iR.j.PREMIUM_TIER_2_1_DAY },
    { id: "3d", label: "3 days", value: iR.j.PREMIUM_TIER_2_3_DAY },
];
function i$() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(iR.j.PREMIUM_TIER_2_1_HOUR),
        [l, i] = o.useState([]),
        [s, d] = o.useState([]),
        {
            refreshEntitlementList: c,
            grantFractionalPremium: u,
            deleteFractionalPremium: m,
            triggerNextEntitlementFulfillment: h,
            entitlements: v,
            loading: b,
        } = iP();
    return (
        o.useEffect(() => {
            c();
        }, [c]),
        o.useEffect(() => {
            (i(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === iT.z.FRACTIONAL_REDEMPTION)),
                d(v.filter((e) => Object.values(iR.j).includes(e.skuId) && null == e.startsAt)));
        }, [v]),
        (0, r.jsx)(x.Ip, {
            className: t0.nd,
            children: (0, r.jsxs)("div", {
                className: iU.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: iU.dL,
                        children: [
                            (0, r.jsx)(g.E, {
                                style: { marginBottom: "8px" },
                                variant: "body-lg/semibold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(X.D, {
                                onClick: () => t(!e),
                                className: iL.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(iw.A, { direction: e ? iw.A.Directions.UP : iw.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(g.E, {
                                    variant: "body-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(g.E, {
                                    variant: "body-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed.",
                                }),
                            ],
                        }),
                    (0, r.jsxs)("section", {
                        style: { marginBottom: "8px" },
                        className: Q()([iL.uW, iU.Uo]),
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: iB,
                                onSelectionChange: n,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => u(a),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("section", {
                        className: iL.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: iU.dL,
                                children: [
                                    (0, r.jsx)(g.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "body-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: iL.GC,
                                        children: [
                                            (0, r.jsx)(nG.$n, {
                                                disabled: b,
                                                size: nG.$n.Sizes.TINY,
                                                color: nG.$n.Colors.PRIMARY,
                                                look: nG.$n.Looks.OUTLINED,
                                                onClick: () => h(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(nG.$n, {
                                                disabled: b,
                                                size: nG.$n.Sizes.TINY,
                                                color: nG.$n.Colors.RED,
                                                look: nG.$n.Looks.OUTLINED,
                                                onClick: () => m(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(nG.$n, {
                                                disabled: b,
                                                look: nG.$n.Looks.BLANK,
                                                size: nG.$n.Sizes.ICON,
                                                onClick: c,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(iO.RefreshIcon, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            l.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(g.E, {
                                            style: { marginTop: "15px" },
                                            variant: "body-md/semibold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    iF,
                                                    { entitlement: e, active: !0, onDelete: () => m(e.id) },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            s.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(g.E, {
                                            style: { marginTop: "15px" },
                                            variant: "body-md/semibold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: s.map((e) => (0, r.jsx)(iF, { entitlement: e }, e.id)),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var iV = a(832604),
    iW = a(264572).hp;
let iH = /[^a-zA-Z0-9_.-]+/g;
function iz(e) {
    let { runningGame: t } = e,
        a = (0, iV.A)(t.pid, void 0),
        [n, l] = (0, o.useState)(!1),
        i = t.name ?? t.exeName ?? "",
        s = null != a && !n;
    return (0, r.jsxs)(tJ.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 12,
        children: [
            (0, r.jsxs)(tJ.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                fullWidth: !1,
                children: [
                    null != a
                        ? (0, r.jsx)("img", { src: a, alt: i, width: 48, height: 48 })
                        : (0, r.jsx)(g.E, { variant: "footnote/normal", color: "text-muted", children: "no icon" }),
                    (0, r.jsxs)(tJ.B, {
                        direction: "vertical",
                        gap: 0,
                        fullWidth: !1,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-md/normal", children: i }),
                            (0, r.jsxs)(g.E, {
                                variant: "footnote/normal",
                                color: "text-muted",
                                children: [
                                    t.id ?? "(no id)",
                                    " \xb7 ",
                                    t.distributor ?? "unknown",
                                    ":",
                                    t.sku ?? "\u2014",
                                ],
                            }),
                            (0, r.jsx)(g.E, { variant: "footnote/normal", color: "text-muted", children: t.exePath }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                text: "Save Icon",
                onClick: async function () {
                    if (null != a) {
                        l(!0);
                        try {
                            let e,
                                t = await y.A.fileManager.saveWithDialog2(
                                    iW.from(a.slice(a.indexOf(",") + 1), "base64"),
                                    ((e = i.trim().replace(iH, "_")), `${e.length > 0 ? e : "icon"}.png`),
                                    void 0,
                                );
                            null == t ||
                                t.canceledByUser ||
                                (0, l1.P0)({ text: `Saved icon to ${t.directory}`, variant: "success" });
                        } catch {
                            (0, l1.P0)({ text: "Failed to save icon", variant: "critical" });
                        } finally {
                            l(!1);
                        }
                    }
                },
                disabled: !s,
            }),
        ],
    });
}
function iK() {
    let e = (0, d.bG)([_.Ay], () => _.Ay.getRunningGames());
    return (0, r.jsxs)(tJ.B, {
        gap: 16,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(tJ.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Game Icon Extractor" }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        children: "Save a running game's locally-detected icon as a PNG.",
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(tJ.B, {
                gap: 12,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Running Games" }),
                    0 === e.length
                        ? (0, r.jsx)(g.E, {
                              variant: "body-sm/normal",
                              children: "No games detected. Launch a game first.",
                          })
                        : e.map((e) => (0, r.jsx)(iz, { runningGame: e }, `${e.pid}-${e.exePath}`)),
                ],
            }),
        ],
    });
}
var iY = a(390544),
    iq = a(940456),
    iJ = a(475669),
    iQ = a(486223);
function iX() {
    let e = (0, d.bG)([nS.A], () => nS.A.getGuildId()),
        t = (0, d.bG)([nC.A], () => nC.A.getGuild(e)?.name),
        a = (0, d.bG)([iJ.A], () => iJ.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    E.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        i = o.useMemo(
            () =>
                Object.values(iY.M).map((e) =>
                    (0, r.jsx)(
                        p.$,
                        {
                            variant: "primary",
                            text: e,
                            onClick: () => {
                                l(e);
                            },
                        },
                        e,
                    ),
                ),
            [l],
        ),
        s = o.useCallback(() => {
            null != n &&
                null != e &&
                E.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(x.Ip, {
              className: iQ.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: iQ.uW,
                      children: (0, r.jsx)(ee.D, { variant: "heading-sm/medium", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: iQ.uW,
                      children: [
                          (0, r.jsx)(g.E, {
                              variant: "body-sm/medium",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: iQ.UD, children: i }),
                          (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: iQ.UD,
                              children: (0, r.jsx)(p.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: s,
                              }),
                          }),
                          (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "Reset server" }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, iq.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var iZ = a(257446);
function i0(e) {
    let { devSettingsCategory: t } = e,
        a = (0, d.bG)([C.Ay], () => C.Ay.allByCategory(t), [t], d.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => S(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: Q()(t0.nd, iZ.n), children: n });
}
var i1 = a(950305),
    i2 = a(231483),
    i3 = a(597770),
    i6 = a(433492),
    i5 = a(695458),
    i8 = a(796140),
    i4 = a(268791),
    i9 = a(836480),
    i7 = a(855473),
    se = a(626258),
    st = a(420854),
    sa = a(373846),
    sn = a(657044),
    sl = a(141060),
    si = a(608599),
    ss = a(685761),
    sr = a(157225),
    so = a(362704),
    sd = a(625903),
    sc = a(628284),
    su = a(320448),
    sm = a(613412),
    sh = a(830215),
    sp = a(662502),
    sg = a(619019),
    sx = a(499785),
    sv = a(315069);
class sb extends sv.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        (super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids));
    }
    static fromServer(e) {
        return new sb(e);
    }
    setPassword(e) {
        return ((this.password = e), this);
    }
}
let sj = { pools: null, users: null };
function sf(e) {
    (null == sj.users && (sj.users = new Map()), sj.users.set(e.id, new sg.A(e)));
}
class sy extends d.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (sj.pools = new Map(Object.entries(e.pools))),
            null != e.users && (sj.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != sj.pools ? Object.fromEntries(sj.pools) : null,
            users: null != sj.users ? Object.fromEntries(sj.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(sj.users?.values() ?? []).filter((t) => sj.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return sj.pools?.get(e) ?? null;
    }
    getUser(e) {
        return sj.users?.get(e) ?? null;
    }
    getPools() {
        return null === sj.pools ? null : Array.from(sj.pools.values());
    }
}
let sE = new sy(E.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        (null == sj.pools && (sj.pools = new Map()), sj.pools.set(t.id, t), a.forEach(sf));
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = sj.pools?.get(t);
        if (null == a) return !1;
        (a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                sj.users?.delete(e);
            }),
            sj.pools?.delete(t));
    },
});
var sC = a(835002),
    sS = a(844330),
    s_ = a(157416);
let sN = [
        i1.UserIcon,
        i2.ShieldIcon,
        i3.GiftIcon,
        i6.K,
        i5.m,
        i8.c,
        i4.$,
        i9.CompassIcon,
        i7.Z,
        se.A,
        st.E,
        sa.C,
        sn._,
        sl.i,
        si.L,
        ss.f,
        sr.N,
        so.Y,
        sd.SettingsIcon,
    ],
    sA = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ];
function sk() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, i] = o.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("form", {
                onSubmit: async (l) => {
                    (l.preventDefault(), i(!0));
                    try {
                        (await (async function (e, t) {
                            return await sx.A.get({
                                url: ep.Rsh.GENERATED_POOL_BY_ID(e),
                                trackedActionData: { event: sm.NetworkActionNames.USER_LOGIN },
                                rejectWithError: !1,
                            })
                                .then((e) => {
                                    let { ok: a, body: n } = e;
                                    if (!a) return void sp.A.showFailedToast(sC.OB.GENERIC_ERROR);
                                    let { generated_pool: l, users: i } = n;
                                    E.h.dispatch({
                                        type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                                        pool: sb.fromServer(l).setPassword(t),
                                        users: i.map((e) => new sg.A(e)),
                                    });
                                })
                                .catch(() => (sp.A.showFailedToast(sC.OB.GENERIC_ERROR), null));
                        })(e, a),
                            t(""),
                            n(""));
                    } finally {
                        i(!1);
                    }
                },
                children: (0, r.jsxs)(tJ.B, {
                    direction: "vertical",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, r.jsxs)(tJ.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(f.k, {
                                    fullWidth: !0,
                                    value: e,
                                    onChange: t,
                                    placeholder: "Pool ID",
                                    disabled: l,
                                }),
                                (0, r.jsx)(f.k, {
                                    type: "password",
                                    revealable: !0,
                                    fullWidth: !0,
                                    value: a,
                                    onChange: n,
                                    placeholder: "Password",
                                    disabled: l,
                                }),
                            ],
                        }),
                        (0, r.jsxs)(tJ.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(p.$, {
                                    type: "button",
                                    size: "md",
                                    fullWidth: !0,
                                    variant: "secondary",
                                    text: "Clear",
                                    onClick: () => {
                                        (t(""), n(""));
                                    },
                                    disabled: 0 === e.length || 0 === a.length || l,
                                }),
                                (0, r.jsx)(p.$, {
                                    type: "submit",
                                    size: "md",
                                    fullWidth: !0,
                                    variant: "primary",
                                    text: "Add Pool",
                                    disabled: 0 === e.length || 0 === a.length || l,
                                    loading: l,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(b.c, { gap: 4 }),
        ],
    });
}
function sD(e) {
    let { pool: t } = e,
        { id: a, summary: n } = t,
        l = sE.getUsersForPool(a),
        i = (0, d.bG)([nQ.default], () => nQ.default.getId()),
        s = sN[Number(a) % sN.length],
        c = sA[Number(a) % sA.length],
        u = o.useCallback(() => {
            E.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
        }, [a]);
    return (0, r.jsx)(tJ.B, {
        direction: "horizontal",
        align: "start",
        justify: "space-between",
        children: (0, r.jsx)(sS.A, {
            icon: (0, r.jsx)(g.E, {
                variant: "body-md/medium",
                color: c,
                className: s_.td,
                children: (0, r.jsx)(s, { size: "custom", width: 24, height: 24, color: "currentColor" }),
            }),
            title: n,
            className: s_.JC,
            subtitle: `${l.length} users`,
            children: (0, r.jsxs)(tJ.B, {
                direction: "vertical",
                gap: 4,
                padding: { left: 24, right: 8, bottom: 16 },
                fullWidth: !1,
                children: [
                    l.map((e, a) =>
                        (0, r.jsxs)(
                            o.Fragment,
                            {
                                children: [
                                    0 !== a && (0, r.jsx)(b.c, { gap: 4 }),
                                    (0, r.jsx)(
                                        X.D,
                                        {
                                            onClick: (a) => {
                                                (a.stopPropagation(),
                                                    (function (e, t) {
                                                        let a = sE.getUser(t);
                                                        if (null == a) throw Error("User not found");
                                                        let n = sE.getPool(e)?.password;
                                                        if (null == n) throw Error("Pool password not found");
                                                        if (null == a.email) throw Error("User email not found");
                                                        sh.A.login({
                                                            login: a.email,
                                                            password: n,
                                                            isMultiAccount: !0,
                                                            source: "generated_test_user",
                                                        }).catch(
                                                            () => (sp.A.showFailedToast(sC.OB.GENERIC_ERROR), null),
                                                        );
                                                    })(t.id, e.id));
                                            },
                                            "aria-disabled": i === e.id,
                                            className: Q()(s_.vk, { [s_.Pe]: i === e.id }),
                                            children: (0, r.jsxs)(
                                                tJ.B,
                                                {
                                                    direction: "horizontal",
                                                    align: "center",
                                                    justify: "space-between",
                                                    gap: 8,
                                                    padding: { right: 8 },
                                                    fullWidth: !1,
                                                    children: [
                                                        (0, r.jsxs)(tJ.B, {
                                                            direction: "horizontal",
                                                            align: "center",
                                                            gap: 8,
                                                            fullWidth: !1,
                                                            className: Q()({ [s_.WP]: i === e.id }),
                                                            children: [
                                                                (0, r.jsx)(i1.UserIcon, {
                                                                    size: "custom",
                                                                    width: 20,
                                                                    height: 20,
                                                                    color: "currentColor",
                                                                }),
                                                                (0, r.jsxs)("div", {
                                                                    children: [
                                                                        (0, r.jsx)(g.E, {
                                                                            variant: "body-sm/normal",
                                                                            color: "text-default",
                                                                            children: e.username,
                                                                        }),
                                                                        (0, r.jsx)(g.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: s_.c1,
                                                                            children: e.email,
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        i === e.id
                                                            ? (0, r.jsx)(g.E, {
                                                                  variant: "body-sm/normal",
                                                                  color: "text-feedback-positive",
                                                                  children: (0, r.jsx)(sc.y, {
                                                                      size: "sm",
                                                                      color: "currentColor",
                                                                  }),
                                                              })
                                                            : (0, r.jsx)(su._, { size: "sm", color: "currentColor" }),
                                                    ],
                                                },
                                                e.id,
                                            ),
                                        },
                                        e.id,
                                    ),
                                ],
                            },
                            e.id,
                        ),
                    ),
                    (0, r.jsx)("div", {
                        className: s_.UD,
                        children: (0, r.jsx)(p.$, {
                            icon: nV.TrashIcon,
                            text: "",
                            size: "sm",
                            variant: "secondary",
                            onClick: u,
                        }),
                    }),
                ],
            }),
        }),
    });
}
function sI() {
    let e = (0, d.yK)([sE], () => sE.getPools() ?? []);
    return (0, r.jsxs)(tJ.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: s_.kL,
        children: [
            (0, r.jsx)(sk, {}),
            (0, r.jsx)(x.Ip, { className: s_.Ik, children: e?.map((e) => (0, r.jsx)(sD, { pool: e }, e.id)) }),
        ],
    });
}
var sT = a(582306),
    sR = a(884883),
    sO = a(846466);
function sw(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function sM(e, t) {
    return null != t ? `/users/@me/gift-intents/dismissals/${e}/${t}` : `/users/@me/gift-intents/dismissals/${e}`;
}
let sP = tL.np.FRIEND_ANNIVERSARY;
function sL(e) {
    return 403 === e?.status
        ? "Forbidden (403). This account is likely not in the backend-persistence experiment; clearing also requires a staff account."
        : e instanceof Error
          ? e.message
          : String(e);
}
function sU() {
    let e = (0, d.bG)([sR.A], () => sR.A.getDevToolTotalFriendAnniversaries()),
        t = (0, d.bG)([sR.A], () => sR.A.getDevToolCurrentDate()),
        a = (0, d.bG)([sR.A], () => sR.A.getMessageGiftIntentLastShownMap()),
        n = (0, d.bG)([sR.A], () => sR.A.getHighestAffinityFriendAnniversaries()),
        l = (0, d.bG)([sR.A], () => sR.A.getHighAffinityFriendAnniversaries()),
        i = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()?.isStaff() ?? !1),
        s = (0, d.bG)(
            [aY.A],
            () => aY.A.getFriendIDs().filter((e) => !aY.A.isIgnored(e) && null != aY.A.getSince(e)).length,
        ),
        c = (0, d.bG)([aL.A], () => {
            let e = Number(aL.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
            return Number.isNaN(e) || 0 === e ? null : e;
        }),
        [u, m] = o.useState([]),
        [h, v] = o.useState(null),
        [b, f] = o.useState(!1),
        [y, C] = o.useState(!1),
        [S, _] = o.useState(!1),
        [N, A] = o.useState(void 0),
        k = o.useCallback(async () => {
            C(!0);
            try {
                let { body: e } = await l9.Bo.get({ url: "/users/@me/gift-intent-dismissals", rejectWithError: !0 });
                (m(e.dismissals ?? []), v(null), f(!1));
            } catch (t) {
                let e = t.status;
                (v(sL(t)), f(403 === e), 403 === e && m([]));
            } finally {
                C(!1);
            }
        }, []);
    async function D(e) {
        _(!0);
        try {
            (await e(), v(null), await k());
        } catch (e) {
            v(sL(e));
        } finally {
            _(!1);
        }
    }
    o.useEffect(() => {
        k();
    }, [k, c]);
    let I = u.filter((e) => e.intent_type === sP),
        T = new Map(I.map((e) => [e.target_id, Number(e.dismissed_at_ms)])),
        R = Array.from(new Set([...Object.keys(a), ...T.keys()])),
        O = Array.from(new Set([...n, ...l])),
        w = O.map((e) => ({ id: e, value: e, label: ec.default.getUser(e)?.username ?? `Unknown User (${e})` })),
        M = y || S;
    function P(e) {
        E.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
    }
    function L(e) {
        let t = nI.A.getUserAffinity(e);
        return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
    }
    return (0, r.jsx)(x.Ip, {
        className: t0.nd,
        children: (0, r.jsxs)("div", {
            className: sO.l$,
            children: [
                (0, r.jsx)(g.E, { className: sO.Iv, variant: "body-lg/semibold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: sO.Pm,
                    children: (0, r.jsxs)(tJ.B, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Number of anniversaries to generate",
                                selectionMode: "single",
                                options: [
                                    { id: "none", label: "None", value: null },
                                    { id: "1", label: "1", value: 1 },
                                    { id: "2", label: "2", value: 2 },
                                    { id: "3", label: "3", value: 3 },
                                    { id: "4", label: "4", value: 4 },
                                    { id: "5", label: "5", value: 5 },
                                    { id: "10", label: "10", value: 10 },
                                    { id: "25", label: "25", value: 25 },
                                ],
                                value: e,
                                onSelectionChange: (e) => {
                                    P(e);
                                },
                            }),
                            (0, r.jsx)(p.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Re-randomize",
                                disabled: null == e,
                                onClick: function () {
                                    E.h.dispatch({ type: "DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES" });
                                },
                            }),
                            (0, r.jsx)(p.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    P(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: sO.Pm,
                        children: (0, r.jsxs)(tJ.B, {
                            gap: 8,
                            children: [
                                0 === s
                                    ? (0, r.jsx)(g.E, {
                                          variant: "body-xs/normal",
                                          color: "text-feedback-warning",
                                          children:
                                              "No friends with an anniversary date, so no anniversaries can be generated.",
                                      })
                                    : (0, r.jsxs)(g.E, {
                                          variant: "body-xs/normal",
                                          children: [
                                              "Generated ",
                                              O.length,
                                              " of ",
                                              e,
                                              " requested",
                                              O.length < e
                                                  ? ` (only ${s} friend${1 === s ? "" : "s"} with an anniversary date).`
                                                  : ".",
                                          ],
                                      }),
                                (0, r.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                n.length > 0 &&
                                    (0, r.jsxs)(tJ.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                children: "Highest Affinity Friend Anniversaries:",
                                            }),
                                            n.map((e) => {
                                                let t = ec.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    g.E,
                                                    { variant: "body-xs/normal", children: [a, " (", L(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                l.length > 0 &&
                                    (0, r.jsxs)(tJ.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            l.map((e) => {
                                                let t = ec.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    g.E,
                                                    { variant: "body-xs/normal", children: [a, " (", L(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: sO.Pm,
                    children: (0, r.jsxs)(tJ.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(sT.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? nU()(t) : void 0,
                                onSelect: function (e) {
                                    let t = nU()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    E.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: function () {
                                    E.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: sO.Pm,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-md/normal",
                            children: "Reset gift message cooldown (per-user, 14d)",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: function () {
                                E.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sO.Pm,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: function () {
                                E.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: sO.Pm,
                    children: (0, r.jsxs)(tJ.B, {
                        gap: 12,
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-md/semibold", children: "Backend dismissal sync" }),
                            (0, r.jsxs)(tJ.B, {
                                gap: 4,
                                children: [
                                    b &&
                                        (0, r.jsx)(g.E, {
                                            variant: "body-xs/normal",
                                            color: "text-feedback-warning",
                                            children:
                                                "This account is not in the backend-persistence experiment, so nothing here will persist to the server.",
                                        }),
                                    !i &&
                                        (0, r.jsx)(g.E, {
                                            variant: "body-xs/normal",
                                            color: "text-feedback-warning",
                                            children: "Clearing server dismissals requires a staff account.",
                                        }),
                                    (0, r.jsxs)(g.E, {
                                        variant: "body-xs/normal",
                                        children: [
                                            "Server last recorded a dismissal:",
                                            " ",
                                            null != c ? sw(c) : "never",
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(tJ.B, {
                                gap: 8,
                                direction: "horizontal",
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        text: "Refresh",
                                        onClick: () => {
                                            k();
                                        },
                                        disabled: M,
                                    }),
                                    (0, r.jsx)(p.$, {
                                        size: "sm",
                                        variant: "primary",
                                        text: "Clear all",
                                        onClick: function () {
                                            D(() => l9.Bo.del({ url: sM(sP), rejectWithError: !0 }));
                                        },
                                        disabled: M || !i || b || 0 === I.length,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(tJ.B, {
                                gap: 8,
                                direction: "horizontal",
                                align: "end",
                                children: [
                                    (0, r.jsx)(j.l, {
                                        label: "Dismiss a generated anniversary on the server",
                                        selectionMode: "single",
                                        options: w,
                                        value: N,
                                        onSelectionChange: (e) => {
                                            A(e);
                                        },
                                    }),
                                    (0, r.jsx)(p.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        text: "Dismiss on server",
                                        onClick: function () {
                                            null != N &&
                                                D(() =>
                                                    l9.Bo.post({
                                                        url: "/users/@me/gift-intents/dismiss",
                                                        body: { intent_type: sP, target_id: N },
                                                        rejectWithError: !0,
                                                    }),
                                                );
                                        },
                                        disabled: M || b || null == N,
                                    }),
                                ],
                            }),
                            0 === w.length &&
                                (0, r.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    children: "Generate friend anniversaries above to pick a target to dismiss.",
                                }),
                            null != h &&
                                (0, r.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    color: "text-feedback-critical",
                                    children: h,
                                }),
                            y && (0, r.jsx)(g.E, { variant: "body-xs/normal", children: "Loading..." }),
                            !y &&
                                0 === R.length &&
                                (0, r.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    children: "No dismissals recorded locally or on the server.",
                                }),
                            !y &&
                                R.length > 0 &&
                                (0, r.jsxs)(tJ.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(g.E, {
                                            variant: "body-xs/semibold",
                                            children: "Local vs. server (per friend):",
                                        }),
                                        R.map((e) => {
                                            let t = ec.default.getUser(e),
                                                n = t?.username ?? `Unknown User (${e})`,
                                                l = a[e],
                                                s = T.get(e);
                                            return (0, r.jsxs)(
                                                tJ.B,
                                                {
                                                    gap: 8,
                                                    direction: "horizontal",
                                                    justify: "space-between",
                                                    align: "center",
                                                    children: [
                                                        (0, r.jsxs)(g.E, {
                                                            variant: "body-xs/normal",
                                                            children: [
                                                                n,
                                                                ": local ",
                                                                null != l ? sw(l) : "none",
                                                                ", server",
                                                                " ",
                                                                null != s ? sw(s) : "none",
                                                            ],
                                                        }),
                                                        null != s &&
                                                            (0, r.jsx)(p.$, {
                                                                size: "sm",
                                                                variant: "secondary",
                                                                text: "Clear",
                                                                onClick: () => {
                                                                    D(() =>
                                                                        l9.Bo.del({
                                                                            url: sM(sP, e),
                                                                            rejectWithError: !0,
                                                                        }),
                                                                    );
                                                                },
                                                                disabled: M || !i || b,
                                                            }),
                                                    ],
                                                },
                                                e,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
var sG = a(116711),
    sF = a(28863),
    sB = a(517461),
    s$ = a(214947),
    sV = a(403581),
    sW = a(34188),
    sH = a(577473);
let sz = [
    "ILLO_BLUE",
    "ILLO_GREEN",
    "ILLO_PINK",
    "ILLO_ORANGE",
    "ILLO_PURPLE",
    "ILLO_YELLOW",
    "BLUE_NEW",
    "GREEN_NEW",
    "NEUTRAL",
    "ORANGE_NEW",
    "RED_NEW",
    "TEAL_NEW",
    "YELLOW_NEW",
];
var sK = a(277583);
let sY = [0, 0.5, 1],
    sq = ["Center", "Inner ring", "Outer ring"],
    sJ = sY.length,
    sQ = "ILLO_BLUE",
    sX = "ILLO_BLUE_40",
    sZ = Array.from({ length: sJ }, () => sX),
    s0 = Array.from({ length: sJ }, () => sQ),
    s1 = ["1", "0.5", "0"],
    s2 = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    s3 = [
        { label: "Light", value: ep.NJ8.LIGHT, id: ep.NJ8.LIGHT },
        { label: "Ash", value: ep.NJ8.ASH, id: ep.NJ8.ASH },
        { label: "Dark", value: ep.NJ8.DARK, id: ep.NJ8.DARK },
        { label: "Onyx", value: ep.NJ8.ONYX, id: ep.NJ8.ONYX },
    ],
    s6 = { [ep.NJ8.ASH]: ep.NJ8.DARK, [ep.NJ8.ONYX]: ep.NJ8.DARK, [ep.NJ8.LIGHT]: ep.NJ8.DARK },
    s5 = { [ep.NJ8.LIGHT]: "light", [ep.NJ8.ASH]: "ash", [ep.NJ8.DARK]: "dark", [ep.NJ8.ONYX]: "onyx" },
    s8 = sz.map((e) => ({ label: e, value: e, id: e })),
    s4 = Object.fromEntries(
        sz.map((e) => [
            e,
            Object.keys(eQ.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eQ.A.unsafe_rawColors[e].resolve().rgba(),
                        i =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eQ.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eQ.A.unsafe_rawColors.OPACITY_WHITE_28,
                        s = (0, r.jsx)("span", {
                            className: sK.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${i.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: s };
                }),
        ]),
    );
var s9 = a(306327);
function s7(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function re(e, t) {
    let [a, n, l, i] = eQ.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: i };
}
function rt(e, t) {
    let a = eQ.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function ra(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(tJ.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(tJ.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/semibold", children: a }),
                    (0, r.jsx)(eK.K, {
                        icon: nF.CopyIcon,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: sK.RP, children: t }),
        ],
    });
}
function rn(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                sq.map((e, a) => {
                    let n;
                    return (
                        (n = s3
                            .map((e) => {
                                let n,
                                    l,
                                    { value: i } = e,
                                    s = s5[i],
                                    r = t[i];
                                return `  ${s}:
    color: ${-1 === (l = (n = String(r.colors[a]).toLowerCase()).lastIndexOf("_")) ? n.replace(/_/g, "-") : n.slice(0, l).replace(/_/g, "-") + "." + n.slice(l + 1)}
    opacity: ${r.opacities[a]}`;
                            })
                            .join("\n")),
                        `type: background
colors:
${n}
gradient-colors:
  color-mix: false
codegen:
  web: true
  mobile: false`
                    );
                }),
            [t],
        );
    return (0, r.jsxs)(tJ.B, {
        gap: 16,
        children: [
            (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Token YAML" }),
            sq.map((e, t) => (0, r.jsx)(ra, { yaml: a[t], label: e }, e)),
        ],
    });
}
function rl(e, t, a) {
    let {
            r: n,
            g: l,
            b: i,
            a: s,
        } = (function (e, t) {
            if (t <= e[0].position) {
                let t = e[0];
                return { r: t.r, g: t.g, b: t.b, a: t.opacity };
            }
            for (let a = 0; a < e.length - 1; a++) {
                let n = e[a],
                    l = e[a + 1];
                if (t <= l.position) {
                    if (l.position === n.position) return { r: n.r, g: n.g, b: n.b, a: n.opacity };
                    let e = (t - n.position) / (l.position - n.position);
                    return {
                        r: n.r + (l.r - n.r) * e,
                        g: n.g + (l.g - n.g) * e,
                        b: n.b + (l.b - n.b) * e,
                        a: n.opacity + (l.opacity - n.opacity) * e,
                    };
                }
            }
            let a = e[e.length - 1];
            return { r: a.r, g: a.g, b: a.b, a: a.opacity };
        })(t, a),
        r = 0.5 * s;
    return new s9.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + i * r) / 255,
    ]);
}
function ri(e, t, a) {
    var n;
    let l = a.map((e) => {
            let [t, a, n] = eQ.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        i = 1 / 0;
    for (let a of l) (n = e.contrast(rl(t, l, a.position), "WCAG21")) < i && (i = n);
    for (let a = 0; a < l.length - 1; a++) {
        let { contrast: n } = (function (e, t, a, n, l) {
            let i = 1 / 0,
                s = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(rl(e, t, o), "WCAG21");
                d < i && ((i = d), (s = o));
            }
            return { contrast: i, position: s };
        })(t, l, e, l[a].position, l[a + 1].position);
        n < i && (i = n);
    }
    return Math.round(100 * i) / 100;
}
function rs(e) {
    let [t, a, n] = eQ.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, i, s] = eQ.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eQ.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new s9.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: i * (1 - c) + o * c, b: s * (1 - c) + d * c },
    };
}
function rr() {
    return {
        colors: Array.from({ length: sJ }, () => void 0),
        scales: Array.from({ length: sJ }, () => void 0),
        opacities: Array.from({ length: sJ }, () => void 0),
    };
}
function ro() {
    return {
        [ep.NJ8.LIGHT]: rr(),
        [ep.NJ8.ASH]: { colors: [...sZ], scales: [...s0], opacities: [...s1] },
        [ep.NJ8.DARK]: rr(),
        [ep.NJ8.ONYX]: rr(),
    };
}
var rd = a(731466),
    rc = a(363839);
function ru() {
    let e = (0, sG.G9)(),
        [t, a] = o.useState(ep.NJ8.DARK),
        [n, l] = (0, sB.V)("DevToolsGradientContrastPanel_themeStops", ro()),
        i = n ?? ro(),
        [s, d] = o.useState(["", "", ""]),
        [c, u] = o.useState([null, null, null]),
        [m, h] = o.useState(null),
        [v, b] = o.useState(null),
        { images: j, renderPickers: y } = (function () {
            let [e, t] = o.useState(null),
                a = o.useRef(null),
                n = o.useCallback((e) => {
                    let a = e.target.files?.[0];
                    if (null == a) return;
                    let n = new FileReader();
                    ((n.onload = () => t({ src: n.result, name: a.name })), n.readAsDataURL(a), (e.target.value = ""));
                }, []),
                l = o.useCallback(
                    () =>
                        (0, r.jsxs)(tJ.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "center",
                            children: [
                                (0, r.jsx)("input", {
                                    ref: a,
                                    type: "file",
                                    accept: "image/jpeg,image/png,image/gif,image/webp,image/avif",
                                    onChange: n,
                                    style: { display: "none" },
                                }),
                                null != e
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(g.E, { variant: "body-sm/normal", children: e.name }),
                                              (0, r.jsx)(l2.Q, {
                                                  text: "Remove",
                                                  variant: "critical",
                                                  textVariant: "body-sm/medium",
                                                  onClick: () => t(null),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(p.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Upload button hover image",
                                          onClick: () => a.current?.click(),
                                      }),
                            ],
                        }),
                    [e, n],
                );
            return { images: { buttonBackground: e }, renderPickers: l };
        })(),
        E = "shop" === v ? j.buttonBackground?.src : void 0,
        C = o.useMemo(
            () =>
                Object.fromEntries(
                    s3.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let i = 0; i < sJ; i++) {
                                    let s,
                                        r,
                                        o,
                                        d = t;
                                    for (; null != d;) {
                                        let t = e[d];
                                        if (
                                            ((s ??= t.colors[i]),
                                            (r ??= t.scales[i]),
                                            (o ??= t.opacities[i]),
                                            null != s && null != r && null != o)
                                        )
                                            break;
                                        d = s6[d];
                                    }
                                    (a.push(s ?? sZ[i]), n.push(r ?? s0[i]), l.push(o ?? s1[i]));
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(i, t),
                        ];
                    }),
                ),
            [i],
        ),
        S = C[t],
        _ = o.useCallback(
            (e) => {
                l({ ...i, [t]: e(i[t]) });
            },
            [t, l, i],
        ),
        N = o.useMemo(() => rs({ theme: t, saturation: 1 }), [t]),
        A = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < sJ; t++) {
                let a = parseFloat(S.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: S.colors[t], opacity: a, position: sY[t] });
            }
            return e;
        }, [S]),
        k = o.useMemo(() => {
            if (null == A) return null;
            let { text: e, background: t } = N;
            return sq.map((a, n) =>
                s4[S.scales[n]].map((a) => {
                    let l = ri(e, t, s7(A, n, { ...A[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [A, N, S.scales]),
        D = o.useMemo(() => {
            try {
                return s3.map((e) => {
                    let { value: t, label: a } = e,
                        n = C[t],
                        l = [];
                    for (let e = 0; e < sJ; e++) {
                        let i = parseFloat(n.opacities[e]);
                        if (isNaN(i) || i < 0 || i > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: i, position: sY[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = rs(t),
                                i = ri(n, l, e),
                                s = i >= 4.5;
                            if (!s)
                                for (let t = 0; t < e.length; t++) {
                                    let i = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return sz.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == i) continue;
                                    let s = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of s4[i]) {
                                        if (o === e[t].color) continue;
                                        let i = ri(n, l, s7(e, t, { ...e[t], color: o }));
                                        if (i >= 4.5) {
                                            let e = Math.abs(parseInt(String(o).split("_").pop() ?? "0", 10) - s);
                                            e < r &&
                                                ((r = e),
                                                (a = { stopIndex: t, suggestedColor: o, resultingMinContrast: i }));
                                        }
                                    }
                                }
                            return { passes: s, minContrastRatio: i, suggestion: a };
                        })(l, { theme: t, saturation: 1 }),
                    };
                });
            } catch {
                return null;
            }
        }, [C]);
    return (0, r.jsx)(x.Ar, {
        className: sK.XG,
        children: (0, r.jsxs)(tJ.B, {
            gap: 24,
            padding: 8,
            className: sK.zr,
            children: [
                (0, r.jsx)(ee.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Onyx unless overridden.",
                        }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(sF.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(aS.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: s3,
                }),
                (0, r.jsxs)(tJ.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: sK.G9,
                            children: sq.map((e, t) => {
                                let a = "" !== s[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(tJ.B, {
                                                gap: 0,
                                                className: sK.hi,
                                                children: [
                                                    (0, r.jsx)(g.E, { variant: "body-md/medium", children: e }),
                                                    (0, r.jsx)(l2.Q, {
                                                        variant: "secondary",
                                                        textVariant: "body-xs/normal",
                                                        text: `(${rt(S.colors[t], parseFloat(S.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                rt(S.colors[t], parseFloat(S.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(aS.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: S.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = s4[e][0]?.value;
                                                    _((n) => ({
                                                        ...n,
                                                        scales: s7(n.scales, t, e),
                                                        colors: null != a ? s7(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: s8,
                                            }),
                                            (0, r.jsx)(aS.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: S.colors[t],
                                                onSelectionChange: (e) =>
                                                    _((a) => ({ ...a, colors: s7(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: k?.[t] ?? s4[S.scales[t]],
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: S.opacities[t],
                                                onChange: (e) => _((a) => ({ ...a, opacities: s7(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: `Hex${a && null != c[t] ? ` (dE: ${c[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: s[t],
                                                onChange: (e) => {
                                                    d((a) => s7(a, t, e));
                                                    let a = (function (e) {
                                                        if (!s2.test(e)) return null;
                                                        try {
                                                            return new s9.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = sX,
                                                                a = sQ,
                                                                n = 1 / 0;
                                                            for (let l of sz)
                                                                for (let i of s4[l]) {
                                                                    let s = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eQ.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new s9.A("srgb", [
                                                                                t / 255,
                                                                                a / 255,
                                                                                n / 255,
                                                                            ]);
                                                                        })(i.value),
                                                                        "2000",
                                                                    );
                                                                    s < n && ((n = s), (t = i.value), (a = l));
                                                                }
                                                            return {
                                                                color: t,
                                                                scale: a,
                                                                deltaE: Math.round(100 * n) / 100,
                                                            };
                                                        })(a);
                                                        (u((a) => s7(a, t, e.deltaE)),
                                                            _((a) => ({
                                                                ...a,
                                                                scales: s7(a.scales, t, e.scale),
                                                                colors: s7(a.colors, t, e.color),
                                                            })));
                                                    } else u((e) => s7(e, t, null));
                                                },
                                                placeholder: "#hex",
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                        }),
                    ],
                }),
                y(),
                (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Preview" }),
                (0, r.jsx)(sG.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eq.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(tJ.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: sK.$8,
                                        style: { background: eQ.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: [
                                            { id: "friends", icon: s$.$, text: "Friends" },
                                            { id: "nitro", icon: sV.t, text: "Nitro Home", nitroHoverGradient: !0 },
                                            { id: "shop", icon: sW.U, text: "Shop", useCustomGradient: !0 },
                                            {
                                                id: "quests",
                                                icon: sH.r,
                                                text: nN.intl.string(nN.t.JALI2K),
                                                useCustomGradient: !0,
                                            },
                                        ].map((e, t) =>
                                            (0, r.jsxs)(
                                                eE.z9,
                                                {
                                                    route: "",
                                                    selected: m === e.id,
                                                    onClick: () => h(e.id),
                                                    onMouseEnter: () => b(e.id),
                                                    onMouseLeave: () => b(null),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    className: "quests" === e.id ? Q()(rc.iE, rc.XO, rc.VU) : void 0,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: re(S.colors[0], parseFloat(S.opacities[0])),
                                                        hoverGradientMiddle: re(
                                                            S.colors[1],
                                                            parseFloat(S.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: re(S.colors[2], parseFloat(S.opacities[2])),
                                                    }),
                                                    ...{ "data-list-item-id": `devtools-preview-${t}` },
                                                    children: [
                                                        "quests" === e.id &&
                                                            j.buttonBackground?.src != null &&
                                                            (0, r.jsx)("img", {
                                                                src: j.buttonBackground.src,
                                                                className: rc.Nd,
                                                                alt: "",
                                                            }),
                                                        "shop" === e.id &&
                                                            null != E &&
                                                            (0, r.jsx)("div", {
                                                                className: rd.marketingButtonBackgroundNew,
                                                                children: (0, r.jsx)("img", {
                                                                    src: E,
                                                                    className: rd.marketingButtonBackgroundImage,
                                                                    alt: "",
                                                                    "aria-hidden": !0,
                                                                }),
                                                            }),
                                                    ],
                                                },
                                                e.id,
                                            ),
                                        ),
                                    }),
                                }),
                            }),
                    }),
                }),
                null != D &&
                    (0, r.jsxs)(tJ.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Results" }),
                            D.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          tJ.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(g.E, { variant: "body-md/semibold", children: a }),
                                                  (0, r.jsx)(Z.w, {
                                                      type: n.passes ? "success" : "critical",
                                                      message: `${n.passes ? "\u2713 Passes" : "\u2717 Fails"} WCAG AA \u{2014} Min contrast: ${n.minContrastRatio} : 1`,
                                                      role: "status",
                                                  }),
                                                  !n.passes &&
                                                      null != n.suggestion &&
                                                      (0, r.jsxs)(tJ.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(g.E, {
                                                                  variant: "body-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(g.E, {
                                                                  variant: "body-sm/normal",
                                                                  children: [
                                                                      sq[n.suggestion.stopIndex],
                                                                      ": ",
                                                                      (0, r.jsx)("strong", {
                                                                          children: n.suggestion.suggestedColor,
                                                                      }),
                                                                      " \u2192",
                                                                      " ",
                                                                      n.suggestion.resultingMinContrast,
                                                                      " : 1",
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  !n.passes &&
                                                      null == n.suggestion &&
                                                      (0, r.jsx)(g.E, {
                                                          variant: "body-sm/normal",
                                                          children:
                                                              "No single swap from the same color scale would fix the contrast ratio.",
                                                      }),
                                              ],
                                          },
                                          t,
                                      )
                                    : null;
                            }),
                        ],
                    }),
                (0, r.jsx)(rn, { allResolvedStops: C }),
            ],
        }),
    });
}
var rm = a(559201),
    rh = a(230135),
    rp = a(45780),
    rg = a(533993),
    rx = a(859241);
let rv = [
        aM.M.GUILD_POWERUP_PERKS_COACHMARK,
        aM.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        aM.M.GUILD_POWERUP_NOTIFICATION,
        aM.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
        aM.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE,
    ],
    rb = [
        aM.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        aM.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        aM.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        aM.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        aM.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    rj = [aM.V.ADOPT_CLAN_IDENTITY_NOTICE];
function rf(e) {
    switch (e) {
        case aM.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case aM.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case aM.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case aM.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case aM.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case aM.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var ry = a(374336);
async function rE(e, t, a) {
    (await l9.Bo.patch({
        url: ep.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : nU()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, rm.VU)(e),
        (0, rg.Xd)(e, !0));
}
function rC() {
    let e = (0, d.bG)([nS.A], () => nS.A.getGuildId()),
        t = (0, d.bG)([nC.A], () => nC.A.getGuild(e)?.name),
        a = (0, d.yK)([aL.A], () => [...rb, ...rj].filter((t) => null != e && (0, rp.zs)(t, e))),
        n = (0, d.yK)([rx.A], () => (null != e ? (rx.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(x.Ip, {
            className: ry.kL,
            children: [
                (0, r.jsx)("div", {
                    className: ry.uW,
                    children: (0, r.jsx)(ee.D, { variant: "heading-sm/medium", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: ry.uW,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            className: ry.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, rg.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ry.uW,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            className: ry.wx,
                            children: "Reset Progress Bar State",
                        }),
                        (0, r.jsx)(p.$, { variant: "primary", text: "Reset", onClick: rh.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ry.uW,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        rE(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        rE(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ry.uW,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            className: ry.wx,
                            children: "Reset User Level DCs",
                        }),
                        (0, r.jsx)(tJ.B, {
                            gap: 16,
                            children: rv.map((e) => (0, r.jsx)(lB, { className: ry.z6, content: aM.M[e] }, aM.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: ry.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: rb.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: rf(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rp._$)(t, e, !1)
                                            : ((0, aP._N)(aM.M.GUILD_POWERUP_NOTIFICATION), (0, rp.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ry.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: rj.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: rf(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rp._$)(t, e, !1)
                                            : ((0, aP._N)(aM.M.GUILD_POWERUP_NOTIFICATION), (0, rp.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: ry.uW,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            className: ry.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                !(async function (e) {
                                    await l9.Bo.post({
                                        url: ep.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e),
                                        rejectWithError: !0,
                                    });
                                })(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, iq.Wp)(!1);
                    },
                }),
            ],
        });
}
var rS = a(450510),
    r_ = a(648048);
function rN(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, d.yK)([rS.HP], () => [rS.HP.hasHotspot(t, !0), rS.HP.getHotspotOverride(t)]);
    return (0, r.jsx)(j.l, {
        label: t,
        errorMessage: a ? "Inactive" : void 0,
        successMessage: a ? "Active" : void 0,
        value: n,
        options: [
            { id: "none", value: void 0, label: "No Override" },
            { id: "active", value: !0, label: "Force Active" },
            { id: "inactive", value: !1, label: "Force Inactive" },
        ],
        onSelectionChange: (e) => (null != e ? (0, rS.Kl)(t, e) : (0, rS.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function rA() {
    return (0, r.jsx)(x.Ip, {
        className: t0.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: r_.IN,
            children: (0, r.jsx)(tJ.B, {
                gap: 20,
                children: Object.keys(rS._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(rN, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var rk = a(95498),
    rD = a(855522),
    rI = a(37646),
    rT = a(773669);
function rR() {
    let e = (0, d.bG)([rT.default], () => rT.default.locale),
        [t, a] = o.useState(),
        n = (0, rk.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => nN.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(nr.Ay, {
                children: [
                    (0, r.jsx)(nr.Ay.Icon, { icon: rI.U, tooltip: "Locale" }),
                    (0, r.jsx)(nr.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(n8, {
                children: [
                    (0, r.jsx)(n4, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(n4, { name: "App", children: e }),
                    (0, r.jsx)(n4, { name: "System", children: nN.systemLocale }),
                    (0, r.jsx)(n4, { name: "@discord/intl", children: nN.intl.currentLocale }),
                    (0, r.jsx)(n4, { name: "common i18n", children: rD.A.getLocale() }),
                    (0, r.jsx)(n4, { name: "Moment", children: nU().locale() }),
                ],
            }),
            (0, r.jsxs)(nr.Ay, {
                children: [
                    (0, r.jsx)(nr.Ay.Icon, { icon: rI.U, tooltip: "Messages" }),
                    (0, r.jsx)(nr.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(n8, {
                children: (0, r.jsx)(n4, { name: "Unique Rendered Main Messages", children: Object.keys(nN.t).length }),
            }),
            (0, r.jsx)("div", {
                style: { margin: 16 },
                children: (0, r.jsx)(f.k, {
                    onChange: function (e) {
                        a(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, r.jsxs)(n8, {
                children: [
                    (0, r.jsx)(n4, { name: "Hashed key", children: n }),
                    (0, r.jsx)(n4, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(no.A, { data: l?.(e) }),
        ],
    });
}
var rO = a(172471);
function rw() {
    let { node: e } = (0, eo.Ay)(rO.F, "");
    return (0, r.jsx)(x.Ip, {
        className: t0.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(er.A, { node: e }, e.key),
        }),
    });
}
var rM = a(361158),
    rP = a(80556),
    rL = a(129939),
    rU = a(15e3),
    rG = a(87404);
function rF() {
    return (0, r.jsx)(x.Ip, {
        className: t0.nd,
        children: (0, r.jsxs)("div", {
            className: iU.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: iU.uW,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: iU.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: function () {
                                    (0, rM.B8)(() => (0, r.jsx)(rU.A, {}), { layerKey: rG._s, Layer: rP.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: iU.uW,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: iU.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: function () {
                                    (0, rM.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rL.A, { onClose: t });
                                        },
                                        { layerKey: rG._s, Layer: rP.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: iU.uW,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: iU.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: function () {
                                    rM.xr.setState({ fullScreenLayers: [] });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var rB = a(687813),
    r$ = a(604121);
let rV = {
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Messages_Opt.lottie":
        () => a.e(136508).then(a.t.bind(a, 655671, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Notifications_Opt.lottie":
        () => a.e(405252).then(a.t.bind(a, 323823, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_CombinedEE.lottie":
        () => a.e(565154).then(a.t.bind(a, 670649, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_Opt.lottie":
        () => a.e(277248).then(a.t.bind(a, 342787, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_You_Opt.lottie": () =>
        a.e(393401).then(a.t.bind(a, 959328, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Requests_Messages.lottie": () =>
        a.e(748614).then(a.t.bind(a, 713893, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Activities.lottie": () =>
        a.e(32431).then(a.t.bind(a, 857778, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/AppsIcon.lottie": () =>
        a.e(337415).then(a.t.bind(a, 996858, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Camera.lottie": () =>
        a.e(475913).then(a.t.bind(a, 999344, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Deafen.lottie": () =>
        a.e(61309).then(a.t.bind(a, 433356, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/EndCall.lottie": () =>
        a.e(727847).then(a.t.bind(a, 72922, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/GIF.lottie": () =>
        a.e(932886).then(a.t.bind(a, 456309, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Gift.lottie": () =>
        a.e(243734).then(a.t.bind(a, 733813, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Microphone.lottie": () =>
        a.e(926620).then(a.t.bind(a, 890007, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpend.lottie": () =>
        a.e(492568).then(a.t.bind(a, 149707, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpendLightTheme.lottie": () =>
        a.e(282715).then(a.t.bind(a, 147734, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Screenshare.lottie": () =>
        a.e(829721).then(a.t.bind(a, 218048, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Settings.lottie": () =>
        a.e(494483).then(a.t.bind(a, 155806, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Soundboard.lottie": () =>
        a.e(350115).then(a.t.bind(a, 535662, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Sticker.lottie": () =>
        a.e(897473).then(a.t.bind(a, 956248, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Waveform.lottie": () =>
        a.e(665373).then(a.t.bind(a, 914028, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge01.lottie":
        () => a.e(875199).then(a.t.bind(a, 904066, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge02.lottie":
        () => a.e(633900).then(a.t.bind(a, 185319, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge03.lottie":
        () => a.e(665405).then(a.t.bind(a, 743372, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge06.lottie":
        () => a.e(227648).then(a.t.bind(a, 195011, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge09.lottie":
        () => a.e(729095).then(a.t.bind(a, 619578, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge12.lottie":
        () => a.e(994131).then(a.t.bind(a, 676574, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge15.lottie":
        () => a.e(765404).then(a.t.bind(a, 384407, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge18.lottie":
        () => a.e(911817).then(a.t.bind(a, 110320, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge24.lottie":
        () => a.e(284996).then(a.t.bind(a, 248476, 17)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-action.lottiejson": () =>
        a.e(719534).then(a.t.bind(a, 87037, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-idle.lottiejson": () =>
        a.e(812250).then(a.t.bind(a, 553998, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-loop.lottiejson": () =>
        a.e(58526).then(a.t.bind(a, 138157, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-action.lottiejson": () =>
        a.e(964376).then(a.t.bind(a, 37259, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-idle.lottiejson": () =>
        a.e(730800).then(a.t.bind(a, 683891, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-loop.lottiejson": () =>
        a.e(852436).then(a.t.bind(a, 45887, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-action.lottiejson": () =>
        a.e(403086).then(a.t.bind(a, 118301, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-idle.lottiejson": () =>
        a.e(437690).then(a.t.bind(a, 733057, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-loop.lottiejson": () =>
        a.e(582078).then(a.t.bind(a, 553101, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-action.lottiejson": () =>
        a.e(751992).then(a.t.bind(a, 558251, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-idle.lottiejson": () =>
        a.e(264400).then(a.t.bind(a, 94995, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-loop.lottiejson": () =>
        a.e(239476).then(a.t.bind(a, 367327, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-action.lottiejson":
        () => a.e(827568).then(a.t.bind(a, 579571, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-loop.lottiejson":
        () => a.e(525676).then(a.t.bind(a, 322151, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-action.lottiejson":
        () => a.e(710803).then(a.t.bind(a, 27870, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-idle.lottiejson":
        () => a.e(410191).then(a.t.bind(a, 837074, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-loop.lottiejson":
        () => a.e(761223).then(a.t.bind(a, 547450, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-action.lottiejson": () =>
        a.e(969842).then(a.t.bind(a, 809865, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-idle.lottiejson": () =>
        a.e(699166).then(a.t.bind(a, 334829, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-action.lottiejson": () =>
        a.e(698287).then(a.t.bind(a, 380082, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-idle.lottiejson": () =>
        a.e(212427).then(a.t.bind(a, 676614, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-loop.lottiejson": () =>
        a.e(831939).then(a.t.bind(a, 900110, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-action.lottiejson": () =>
        a.e(371305).then(a.t.bind(a, 629456, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-idle.lottiejson": () =>
        a.e(170625).then(a.t.bind(a, 254424, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-loop.lottiejson": () =>
        a.e(233449).then(a.t.bind(a, 690576, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-action.lottiejson": () =>
        a.e(346791).then(a.t.bind(a, 690842, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-idle.lottiejson": () =>
        a.e(828115).then(a.t.bind(a, 755678, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-loop.lottiejson": () =>
        a.e(408891).then(a.t.bind(a, 778422, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-action.lottiejson": () =>
        a.e(958009).then(a.t.bind(a, 433504, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-idle.lottiejson": () =>
        a.e(702897).then(a.t.bind(a, 976584, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-loop.lottiejson": () =>
        a.e(252793).then(a.t.bind(a, 858464, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Anime_v01_Lottie.lottiejson": () =>
        a.e(674149).then(a.t.bind(a, 965892, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Arcade_v01.lottiejson": () =>
        a.e(739468).then(a.t.bind(a, 44194, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlackHoles_v01.lottiejson": () =>
        a.e(4289).then(a.t.bind(a, 141208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlastOff_v04.lottiejson": () =>
        a.e(277339).then(a.t.bind(a, 420054, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Crystal_v04.lottiejson": () =>
        a.e(366414).then(a.t.bind(a, 33565, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fireworks_v03.lottiejson": () =>
        a.e(331165).then(a.t.bind(a, 414956, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fusion_v03.lottiejson": () =>
        a.e(158541).then(a.t.bind(a, 221340, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Pop_v04.lottiejson": () =>
        a.e(910169).then(a.t.bind(a, 710208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_PowerUp_v05.lottiejson": () =>
        a.e(276601).then(a.t.bind(a, 333984, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Puzzle_v01_Lottie.lottiejson": () =>
        a.e(484163).then(a.t.bind(a, 211342, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Spotlight_v01_Lottie.lottiejson": () =>
        a.e(252029).then(a.t.bind(a, 714316, 19)),
    "discord_app/images/burst_reactions/BurstReaction_StarBlast_v03.lottiejson": () =>
        a.e(623997).then(a.t.bind(a, 851404, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Tube_v01_Lottie.lottiejson": () =>
        a.e(667133).then(a.t.bind(a, 821644, 19)),
    "discord_app/images/burst_reactions/BurstReaction_UFO_v01_Lottie.lottiejson": () =>
        a.e(684765).then(a.t.bind(a, 51244, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Whirlwind_v01_Lottie.lottiejson": () =>
        a.e(235583).then(a.t.bind(a, 668994, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Spotlight_v1.lottiejson": () =>
        a.e(47862).then(a.t.bind(a, 911573, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Anime_v1.lottiejson": () =>
        a.e(946711).then(a.t.bind(a, 23434, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Arcade_v1.lottiejson": () =>
        a.e(751153).then(a.t.bind(a, 743496, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlackHoles_v1.lottiejson": () =>
        a.e(32803).then(a.t.bind(a, 252462, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlastOff_v1.lottiejson": () =>
        a.e(819842).then(a.t.bind(a, 341529, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Crystal_v1.lottiejson": () =>
        a.e(585529).then(a.t.bind(a, 762464, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fireworks_v1.lottiejson": () =>
        a.e(697197).then(a.t.bind(a, 47036, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fusion_v1.lottiejson": () =>
        a.e(192933).then(a.t.bind(a, 279172, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Pop_v1.lottiejson": () =>
        a.e(905560).then(a.t.bind(a, 824888, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_PowerUp_v1.lottiejson": () =>
        a.e(863011).then(a.t.bind(a, 432302, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Puzzle_v1.lottiejson": () =>
        a.e(369845).then(a.t.bind(a, 854420, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Spotlight_v1.lottiejson": () =>
        a.e(888607).then(a.t.bind(a, 997730, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_StarBlast_v2.lottiejson": () =>
        a.e(696874).then(a.t.bind(a, 281073, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Tube_v1.lottiejson": () =>
        a.e(894147).then(a.t.bind(a, 192718, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_UFO_v2.lottiejson": () =>
        a.e(84992).then(a.t.bind(a, 513667, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Whirlwind_v1.lottiejson": () =>
        a.e(349693).then(a.t.bind(a, 754124, 19)),
    "discord_app/modules/guild_member_verification/images/islandMiddleAnimation.lottiejson": () =>
        a.e(739900).then(a.t.bind(a, 144759, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_dt.json": () =>
        a.e(515048).then(a.t.bind(a, 366043, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_lt.json": () =>
        a.e(612512).then(a.t.bind(a, 789091, 19)),
    "discord_common/js/shared/animations/app/activities/AppsIconWordlePromo.lottiejson": () =>
        a.e(173550).then(a.t.bind(a, 527613, 19)),
    "discord_common/js/shared/animations/app/nearby/nearby.lottiejson": () => a.e(293780).then(a.t.bind(a, 957439, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/dark.lottiejson": () =>
        a.e(245470).then(a.t.bind(a, 622637, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/light.lottiejson": () =>
        a.e(23478).then(a.t.bind(a, 262037, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscription_system_message_easter_egg/index.lottiejson":
        () => a.e(698150).then(a.t.bind(a, 633343, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/hd_streaming.lottiejson": () =>
        a.e(520795).then(a.t.bind(a, 551574, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-2/index.lottiejson": () =>
        a.e(869421).then(a.t.bind(a, 548375, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Bubbles_v03.lottiejson": () =>
        a.e(91770).then(a.t.bind(a, 95553, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Portal_v03.lottiejson": () =>
        a.e(196515).then(a.t.bind(a, 956481, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Slime_v02.lottiejson": () =>
        a.e(109302).then(a.t.bind(a, 16341, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Slime_v1.lottiejson": () =>
        a.e(247554).then(a.t.bind(a, 748761, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Bubbles_v2.lottiejson": () =>
        a.e(807739).then(a.t.bind(a, 106870, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Portal_v1.lottiejson": () =>
        a.e(979067).then(a.t.bind(a, 458486, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Slime_v2.lottiejson": () =>
        a.e(924584).then(a.t.bind(a, 388059, 19)),
    "discord_app/modules/app_launcher/native/images/onboarding_glow.lottiejson": () =>
        a.e(507985).then(a.t.bind(a, 9640, 19)),
    "discord_app/modules/global_discovery_apps/discovering-dabatouille-animation.lottiejson": () =>
        a.e(995947).then(a.t.bind(a, 604902, 19)),
    "discord_app/modules/guild_boosting/animations/animated_guild_icon.lottiejson": () =>
        a.e(24645).then(a.t.bind(a, 624420, 19)),
    "discord_app/modules/guild_member_verification/images/wavingHandLottieAnimation.lottiejson": () =>
        a.e(515423).then(a.t.bind(a, 155147, 19)),
    "discord_app/modules/guild_onboarding/native/animations/landing.lottiejson": () =>
        a.e(124093).then(a.t.bind(a, 280780, 19)),
    "discord_app/modules/guild_onboarding/web/animations/balloon-dog.lottiejson": () =>
        a.e(225961).then(a.t.bind(a, 739408, 19)),
    "discord_app/modules/guild_onboarding/web/animations/bubble-island-02.lottiejson": () =>
        a.e(187356).then(a.t.bind(a, 194199, 19)),
    "discord_app/modules/guild_onboarding/web/animations/grilling-island-02.lottiejson": () =>
        a.e(556026).then(a.t.bind(a, 113473, 19)),
    "discord_app/modules/guild_onboarding/web/animations/main-island-02.lottiejson": () =>
        a.e(416301).then(a.t.bind(a, 694268, 19)),
    "discord_app/modules/guild_onboarding/web/animations/waffle-island-02.lottiejson": () =>
        a.e(722191).then(a.t.bind(a, 896018, 19)),
    "discord_app/modules/poggermode/images/enable_animation.lottiejson": () =>
        a.e(504660).then(a.t.bind(a, 662336, 19)),
    "discord_app/modules/premium/powerups/web/images/server_boost_highlight.json": () =>
        a.e(867807).then(a.t.bind(a, 217762, 19)),
    "discord_app/modules/quests/images/confetti.lottiejson": () => a.e(40119).then(a.t.bind(a, 718698, 19)),
    "discord_app/modules/quests/web/images/quest_bar_background.json": () => a.e(837316).then(a.t.bind(a, 599279, 19)),
    "discord_app/modules/quests/web/images/quest_bar_sparkle.json": () => a.e(897536).then(a.t.bind(a, 478979, 19)),
    "discord_app/modules/self_mod/inappropriate_conversation/images/vibing_wumpus.lottiejson": () =>
        a.e(114823).then(a.t.bind(a, 718074, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/dark.lottiejson": () =>
        a.e(480467).then(a.t.bind(a, 661022, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/light.lottiejson": () =>
        a.e(892705).then(a.t.bind(a, 111992, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/coachmark/seasonal-gifting-coachmark.lottiejson":
        () => a.e(561250).then(a.t.bind(a, 762361, 19)),
    "discord_common/js/shared/animations/app/playstation/playstation_connecting.lottiejson": () =>
        a.e(435066).then(a.t.bind(a, 844512, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/emoji.lottiejson": () =>
        a.e(717124).then(a.t.bind(a, 616175, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_dark.lottiejson": () =>
        a.e(394675).then(a.t.bind(a, 735678, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_light.lottiejson": () =>
        a.e(278465).then(a.t.bind(a, 247704, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/profile_customization.lottiejson": () =>
        a.e(762807).then(a.t.bind(a, 202282, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/unlock.lottiejson": () =>
        a.e(131838).then(a.t.bind(a, 650125, 19)),
    "discord_common/js/shared/animations/app/premium_marketing/index.lottiejson": () =>
        a.e(406954).then(a.t.bind(a, 964529, 19)),
    "discord_common/js/shared/animations/app/premium_payment_guild/index.lottiejson": () =>
        a.e(945870).then(a.t.bind(a, 738503, 19)),
    "discord_common/js/shared/animations/app/premium-activated-tier-1/premium-activated-tier-1.lottiejson": () =>
        a.e(505642).then(a.t.bind(a, 242993, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-0/index.lottiejson": () =>
        a.e(678503).then(a.t.bind(a, 635489, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-1/index.lottiejson": () =>
        a.e(119898).then(a.t.bind(a, 262546, 19)),
    "discord_common/js/shared/animations/app/xbox/voice_connect.lottiejson": () =>
        a.e(40348).then(a.t.bind(a, 971799, 19)),
    "discord_common/js/shared/animations/app/xbox/xbox_connecting.lottiejson": () =>
        a.e(876121).then(a.t.bind(a, 709376, 19)),
};
function rW(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rB.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rB.strFromU8(n[t])) }), {}),
                            i = l["manifest.json"];
                        t(l[`animations/${i.animations[0].id}.json`]);
                    });
                }),
        );
}
function rH() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, i] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(tJ.B, {
            gap: 24,
            children: [
                (0, r.jsx)(aS.Z, {
                    options: Object.keys(rV).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(f.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, r.jsx)(f.k, { value: l.toString(), onChange: (e) => i(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = rV[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rW).then(e3().cloneDeep)
                                            : await t().then((e) => e3().cloneDeep(e.default)),
                                    ),
                                ],
                                { type: "application/json" },
                            ),
                            n = URL.createObjectURL(a),
                            l = document.createElement("a");
                        ((l.href = n),
                            (l.download = `${e.split("/").pop()}.json`),
                            document.body.appendChild(l),
                            l.click(),
                            document.body.removeChild(l),
                            URL.revokeObjectURL(n));
                    },
                    text: "Download",
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        style: { width: a, height: l },
                        children: (0, r.jsx)(
                            r$.a,
                            {
                                importData: () => {
                                    let t = rV[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rW).then(e3().cloneDeep)
                                        : t().then((e) => e3().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rz = a(442433),
    rK = a(327891);
let rY = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e(344751).then(a.bind(a, 575538));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await Promise.all([a.e(202622), a.e(588251), a.e(590559)]).then(a.bind(a, 913525)),
                t = new rK.kJ({
                    id: "123456789",
                    name: "Test Activity",
                    icon: null,
                    description: "A test activity for devtools",
                    type: 1,
                    coverImage: void 0,
                    primarySkuId: void 0,
                    bot: void 0,
                    splash: void 0,
                    thirdPartySkus: [],
                    isMonetized: !1,
                    isVerified: !1,
                    roleConnectionsVerificationUrl: void 0,
                    parentId: void 0,
                    connectionEntrypointUrl: void 0,
                });
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rz.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e(309004), a.e(419690), a.e(845322), a.e(110758)]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(nC.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e(876364),
                    a.e(668756),
                    a.e(996907),
                    a.e(8159),
                    a.e(361922),
                    a.e(307564),
                    a.e(965886),
                    a.e(231541),
                    a.e(301850),
                    a.e(936875),
                    a.e(862179),
                    a.e(722784),
                    a.e(906470),
                    a.e(774550),
                    a.e(923981),
                    a.e(331696),
                    a.e(806391),
                    a.e(817298),
                    a.e(707551),
                    a.e(424216),
                    a.e(840100),
                    a.e(341432),
                    a.e(173896),
                    a.e(57358),
                    a.e(722765),
                    a.e(156912),
                    a.e(754596),
                    a.e(191601),
                    a.e(232e3),
                    a.e(21486),
                    a.e(304419),
                    a.e(45268),
                    a.e(617281),
                    a.e(164716),
                    a.e(170282),
                    a.e(603977),
                    a.e(655327),
                    a.e(335532),
                    a.e(138545),
                    a.e(536490),
                    a.e(771137),
                    a.e(403655),
                    a.e(212037),
                    a.e(577154),
                    a.e(877730),
                    a.e(611899),
                    a.e(527552),
                    a.e(769266),
                    a.e(487873),
                    a.e(765626),
                    a.e(683302),
                    a.e(660608),
                    a.e(744554),
                    a.e(118203),
                    a.e(331212),
                    a.e(638259),
                    a.e(635958),
                    a.e(683621),
                    a.e(711162),
                    a.e(275179),
                    a.e(289789),
                    a.e(116125),
                    a.e(977412),
                    a.e(19385),
                    a.e(692811),
                    a.e(122218),
                    a.e(356664),
                    a.e(495861),
                    a.e(309004),
                    a.e(430997),
                    a.e(728136),
                    a.e(343116),
                    a.e(680029),
                    a.e(387634),
                    a.e(710727),
                    a.e(966623),
                    a.e(466147),
                    a.e(462984),
                    a.e(50342),
                    a.e(256373),
                    a.e(409391),
                    a.e(479971),
                    a.e(202622),
                    a.e(810262),
                    a.e(346313),
                    a.e(836681),
                    a.e(553203),
                    a.e(115368),
                    a.e(343233),
                    a.e(756684),
                    a.e(736621),
                    a.e(419690),
                    a.e(583827),
                    a.e(495748),
                    a.e(138728),
                    a.e(708364),
                    a.e(452823),
                    a.e(556967),
                    a.e(647011),
                    a.e(269178),
                    a.e(553584),
                    a.e(466913),
                    a.e(583518),
                    a.e(752695),
                    a.e(71719),
                    a.e(893767),
                    a.e(213848),
                    a.e(588307),
                    a.e(462500),
                    a.e(676376),
                    a.e(898358),
                    a.e(842935),
                    a.e(73091),
                    a.e(37786),
                    a.e(886692),
                    a.e(637038),
                    a.e(916373),
                    a.e(528038),
                    a.e(616658),
                    a.e(702210),
                    a.e(118504),
                    a.e(8458),
                    a.e(11810),
                    a.e(404332),
                    a.e(890152),
                    a.e(174337),
                    a.e(347871),
                    a.e(287973),
                    a.e(314863),
                    a.e(623386),
                    a.e(375428),
                    a.e(384951),
                    a.e(560165),
                    a.e(712390),
                    a.e(884063),
                    a.e(113446),
                    a.e(161309),
                    a.e(694529),
                    a.e(303807),
                    a.e(143330),
                    a.e(995210),
                    a.e(114751),
                    a.e(849898),
                    a.e(966016),
                    a.e(838336),
                    a.e(317699),
                    a.e(257032),
                    a.e(772238),
                    a.e(845322),
                    a.e(945651),
                    a.e(218489),
                    a.e(114748),
                    a.e(426386),
                    a.e(128219),
                    a.e(652191),
                    a.e(8422),
                    a.e(639855),
                    a.e(214530),
                    a.e(149409),
                    a.e(928246),
                    a.e(632607),
                    a.e(935277),
                ]).then(a.bind(a, 871638)),
                t = Object.values(nC.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildFolderContextMenu: async () => {
            let { default: e } = await Promise.all([a.e(114748), a.e(459612)]).then(a.bind(a, 865815));
            return (t) => (0, r.jsx)(e, { ...t, folderId: 1, folderColor: void 0, folderName: void 0, unread: !1 });
        },
        DeveloperContextMenu: async () => {
            let { default: e } = await a.e(715687).then(a.bind(a, 646938));
            return (t) => (0, r.jsx)(e, { ...t, id: "123456789", label: "Copy Test ID" });
        },
        UserSettingsMenu: async () => {
            let { default: e } = await Promise.all([a.e(594045), a.e(926132), a.e(908501)]).then(a.bind(a, 351988));
            return (t) => (0, r.jsx)(e, { ...t, onClose: rz.Z_ });
        },
        ExpressionPickerContextMenu: async () => {
            let { default: e } = await a.e(446132).then(a.bind(a, 233503));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ForumTagContextMenu: async () => {
            let { default: e } = await a.e(432612).then(a.bind(a, 960015)),
                t = { id: "123456789", name: "Test Forum Tag" };
            return () => (0, r.jsx)(e, { tag: t });
        },
        GuildRoleConnectionsModalContextMenu: async () => {
            let { default: e } = await a.e(868001).then(a.bind(a, 699896));
            return (t) =>
                (0, r.jsx)(e, {
                    ...t,
                    roleId: "123456789",
                    onLeaveRole: () => {
                        (console.log("Leave role clicked"), (0, rz.Z_)());
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e(886456), a.e(789346)]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = ec.default.getCurrentUser(),
                i = {
                    id: "mock-entry-123",
                    author_id: l?.id ?? "123456789",
                    author_type: n.USER,
                    content_type: t.PLAYED_GAME,
                    participants: [],
                    traits: [],
                    extra: { type: "played_game_extra", game_name: "Test Game", application_id: "123456789" },
                };
            return () => (0, r.jsx)(e, { entry: i, requestId: "mock-request-123" });
        },
        AddQuestionsContextMenu: async () => {
            let { AddQuestionsContextMenu: e } = await Promise.all([
                    a.e(289789),
                    a.e(722765),
                    a.e(11810),
                    a.e(838336),
                ]).then(a.bind(a, 892921)),
                t = Object.values(nC.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              (console.log("Add form field:", e), (0, rz.Z_)());
                          },
                          guild: t,
                          allowTerms: !0,
                      });
        },
        ChannelListThreadContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e(926132),
                    a.e(491001),
                    a.e(947502),
                    a.e(343266),
                    a.e(965789),
                    a.e(412255),
                    a.e(63340),
                    a.e(697367),
                    a.e(536478),
                    a.e(703869),
                    a.e(426760),
                    a.e(420105),
                ]).then(a.bind(a, 949488)),
                t = nC.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(aK.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = aK.A.getAllThreadsForParent(t.id);
                    if (e.length > 0) {
                        n = e[0];
                        break;
                    }
                }
                if (null != n) break;
            }
            return null == n
                ? (console.log("No thread channel found for ChannelListThreadContextMenu"), () => null)
                : (t) => (0, r.jsx)(e, { ...t, channel: n });
        },
        MembersTableSortContextMenu: async () => {
            let { default: e } = await Promise.all([a.e(73091), a.e(945651)]).then(a.bind(a, 779662)),
                t = Object.values(nC.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rz.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e(118203),
                    a.e(71719),
                    a.e(462500),
                    a.e(966016),
                    a.e(945651),
                ]).then(a.bind(a, 311567)),
                t = Object.values(nC.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rz.Z_ });
        },
    },
    rq = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e(583518), a.e(255197), a.e(250974)]).then(a.bind(a, 324269)),
                { default: t } = await a.e(255197).then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rJ() {
    let e = o.useMemo(
            () =>
                Object.keys(rY)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rq)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        s = o.useCallback(
            (e) => {
                null != a && (0, rz.L3)(e, rY[a]);
            },
            [a],
        ),
        d = null != l ? rq[l] : null;
    return (0, r.jsx)(x.Ip, {
        className: t0.nd,
        children: (0, r.jsxs)(tJ.B, {
            className: iU.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "Context Menus" }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)(tJ.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(aS.Z, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: a,
                            onSelectionChange: n,
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(p.$, { variant: "primary", text: "Open", disabled: null == a, onClick: s }),
                    ],
                }),
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "Popout Menus" }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)(tJ.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(aS.Z, {
                        label: "Render a Popout Menu",
                        placeholder: "Select a popout",
                        options: t,
                        value: l,
                        onSelectionChange: i,
                        selectionMode: "single",
                    }),
                }),
                null != d &&
                    (0, r.jsx)(o.Suspense, {
                        fallback: (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: "Loading...",
                        }),
                        children: (0, r.jsx)(d, {}),
                    }),
            ],
        }),
    });
}
var rQ = a(253506),
    rX = a(665260),
    rZ = a(97808),
    r0 = a(778712),
    r1 = a(308528),
    r2 = a(138399),
    r3 = a(571694),
    r6 = a(963852),
    r5 = a(704844),
    r8 = a(309010),
    r4 = a(645959),
    r9 = a(716371),
    r7 = a(32946);
let oe = [
    { id: "USER_JOIN", value: ep.lAJ.USER_JOIN, label: "User Join" },
    { id: "CHANNEL_PINNED_MESSAGE", value: ep.lAJ.CHANNEL_PINNED_MESSAGE, label: "Channel Pinned Message" },
    { id: "GUILD_BOOST", value: ep.lAJ.GUILD_BOOST, label: "Guild Boost" },
    { id: "GUILD_BOOST_TIER_1", value: ep.lAJ.GUILD_BOOST_TIER_1, label: "Guild Boost Tier 1" },
    { id: "GUILD_BOOST_TIER_2", value: ep.lAJ.GUILD_BOOST_TIER_2, label: "Guild Boost Tier 2" },
    { id: "GUILD_BOOST_TIER_3", value: ep.lAJ.GUILD_BOOST_TIER_3, label: "Guild Boost Tier 3" },
    { id: "THREAD_CREATED", value: ep.lAJ.THREAD_CREATED, label: "Thread Created" },
    { id: "CHANNEL_FOLLOW_ADD", value: ep.lAJ.CHANNEL_FOLLOW_ADD, label: "Channel Follow Add" },
    { id: "STAGE_START", value: ep.lAJ.STAGE_START, label: "Stage Start" },
    { id: "STAGE_END", value: ep.lAJ.STAGE_END, label: "Stage End" },
    { id: "STAGE_SPEAKER", value: ep.lAJ.STAGE_SPEAKER, label: "Stage Speaker" },
    { id: "STAGE_RAISE_HAND", value: ep.lAJ.STAGE_RAISE_HAND, label: "Stage Raise Hand" },
    { id: "STAGE_TOPIC", value: ep.lAJ.STAGE_TOPIC, label: "Stage Topic" },
    { id: "VOICE_SESSION", value: ep.lAJ.VOICE_SESSION, label: "Voice Session" },
    { id: "FRIEND_REQUEST_ACCEPTED", value: ep.lAJ.FRIEND_REQUEST_ACCEPTED, label: "Friend Request Accepted" },
    { id: "GUILD_DISCOVERY_DISQUALIFIED", value: ep.lAJ.GUILD_DISCOVERY_DISQUALIFIED, label: "Discovery Disqualified" },
    { id: "GUILD_DISCOVERY_REQUALIFIED", value: ep.lAJ.GUILD_DISCOVERY_REQUALIFIED, label: "Discovery Requalified" },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",
        value: ep.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
        label: "Discovery Grace Initial Warning",
    },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",
        value: ep.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
        label: "Discovery Grace Final Warning",
    },
    { id: "RECIPIENT_ADD", value: ep.lAJ.RECIPIENT_ADD, label: "Recipient Add" },
    { id: "RECIPIENT_REMOVE", value: ep.lAJ.RECIPIENT_REMOVE, label: "Recipient Remove" },
    { id: "CALL", value: ep.lAJ.CALL, label: "Call" },
];
function ot() {
    let [e, t] = o.useState(ep.lAJ.USER_JOIN),
        a = (0, d.bG)([r8.Ay], () => r8.Ay.getChannelId(), []),
        n = o.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, r6.Ay)({ channelId: a, content: "", type: e, state: ep.cmJ.SENT });
            r2.A.receiveMessage(a, t, !1);
        }, [a, e]),
        l = o.useCallback(() => {
            if (null != a)
                for (let { value: e } of oe) {
                    let t = (0, r6.Ay)({ channelId: a, content: "", type: e, state: ep.cmJ.SENT });
                    r2.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, r.jsxs)("div", {
        className: r7.gs,
        children: [
            (0, r.jsx)(aS.Z, {
                label: "Inject System Message",
                selectionMode: "single",
                options: oe,
                placeholder: "Select type",
                value: e,
                onSelectionChange: t,
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Inject",
                onClick: n,
                disabled: null == a || null == e,
            }),
            (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Inject All", onClick: l, disabled: null == a }),
        ],
    });
}
function oa() {
    let e = (0, d.yK)([r4.A], () => r4.A.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, d.cf)([aK.A, ec.default, aY.A], () => ({
            selectedChannel: aK.A.getChannel(t),
            options: e.map((e) => {
                let t = aK.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, az.m1)(t, ec.default, aY.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rZ.eu, { src: (0, r3.Y)(t), "aria-hidden": !0, size: r0._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        i = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rX.PQ)(n.recipientFlags ?? 0, rQ.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            r5.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        s = !!n?.isPrivate() && (0, rX.Lt)(n.recipientFlags ?? 0, rQ.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: r7.gs,
        children: [
            (0, r.jsx)(aS.Z, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: l,
                placeholder: "Select DM",
                value: t,
                onSelectionChange: a,
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: s ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: i,
                disabled: null == t,
            }),
        ],
    });
}
function on() {
    let e = o.useCallback(() => {
        r1.A.openPrivateChannel({ recipientIds: [r9.K] });
    }, []);
    return (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function ol() {
    let e = (0, d.bG)([C.Ay], () => C.Ay.allByCategory(C.xW.MESSAGING), [], d.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => S(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: Q()(t0.nd, r7.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: r7.yF }),
            (0, r.jsx)(ot, {}),
            (0, r.jsx)("div", { className: r7.yF }),
            (0, r.jsx)(oa, {}),
            (0, r.jsx)("div", { className: r7.yF }),
            (0, r.jsx)(on, {}),
        ],
    });
}
var oi = a(205693),
    os = a(772707),
    or = a(150934),
    oo = a(171576),
    od = a(598653),
    oc = a(166403),
    ou = a(188567),
    om = a(204925),
    oh = a(55010);
let op = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e(429232).then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nN.intl.string(nN.t.ZLRYGU),
                confirmButtonText: nN.intl.string(nN.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e(919840).then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nN.intl.string(nN.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: nN.intl.string(nN.t["13ofGu"]),
                impression: { impressionName: sm.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e(469663), a.e(518467)]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: oo.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    AgeAssuranceGatePrompt: async () => {
        let { default: e } = await a.e(922337).then(a.bind(a, 361016));
        return (t) => (0, r.jsx)(e, { ...t, source: om.w_.NSFW_SERVER });
    },
    DateOfBirthGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e(533651), a.e(682758), a.e(280022), a.e(991007)]).then(
            a.bind(a, 189282),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: om.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e(280959).then(a.bind(a, 784578));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([a.e(533651), a.e(682758), a.e(319623), a.e(280022), a.e(401143)]).then(
            a.bind(a, 284778),
        );
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NUFModal: async () => {
        let { default: e } = await Promise.all([
            a.e(188406),
            a.e(315907),
            a.e(122326),
            a.e(533651),
            a.e(944492),
            a.e(419580),
            a.e(197804),
            a.e(756856),
            a.e(682758),
            a.e(548521),
            a.e(280022),
            a.e(320898),
            a.e(993265),
            a.e(258118),
        ]).then(a.bind(a, 109766));
        return (t) => (0, r.jsx)(e, { ...t, onSlideChange: () => {} });
    },
    ClaimAccountModal: async () => {
        let { default: e } = await Promise.all([a.e(213042), a.e(319623), a.e(121007)]).then(a.bind(a, 110744));
        return (t) => (0, r.jsx)(e, { claimRequired: !0, ...t });
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await Promise.all([a.e(51194), a.e(909018)]).then(a.bind(a, 466702));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123" });
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await Promise.all([a.e(513221), a.e(710727), a.e(307133)]).then(a.bind(a, 580812));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123", messageId: null });
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await a.e(452343).then(a.bind(a, 725034));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123" });
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.all([a.e(590275), a.e(766806), a.e(989545), a.e(757786)]).then(
            a.bind(a, 938401),
        );
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e(796531).then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: oi.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(os.k, {
                ...t,
                title: "Dynamic Graphics Demo",
                subtitle: "This modal demonstrates the dynamic graphics system",
                graphic: {
                    type: "dynamic",
                    component: e.DEMO,
                    aspectRatio: "6/4",
                    props: { text: "Dynamic Content Loaded!" },
                },
                actions: [{ variant: "primary", text: "Close", onClick: t.onClose }],
                children: (0, r.jsx)("div", {
                    children:
                        "This modal showcases the new dynamic graphics system where components can be loaded dynamically based on enum values, providing type safety while maintaining runtime flexibility.",
                }),
            });
    },
    OverlayDisabledSurveyModal: async () => {
        let { default: e } = await Promise.all([a.e(914052), a.e(82318)]).then(a.bind(a, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(a.bind(a, 918825));
        return (a) => (0, r.jsx)(e, { ...a, clientSettingType: t.LEGACY_GAME, gameId: "123456789" });
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await Promise.all([a.e(489361), a.e(80347)]).then(
                a.bind(a, 318998),
            ),
            { CancellationContext: t } = await Promise.resolve().then(a.bind(a, 916974)),
            { PremiumTypes: n } = await Promise.resolve().then(a.bind(a, 682901)),
            l = {
                id: "test-subscription-id",
                userId: "test-user-id",
                status: 1,
                currency: "usd",
                currentPeriodStart: new Date(),
                currentPeriodEnd: new Date(Date.now() + 2592e6),
                items: [{ id: "test-item-id", planId: "511651880837840896", quantity: 1 }],
                paymentSourceId: "test-payment-source",
                renewalMutations: null,
                hasActiveTrial: !1,
            };
        function i(a) {
            let { ref: i, ...s } = a,
                [d, c] = o.useState(null),
                { onClose: u, transitionState: m } = s,
                h = o.useMemo(
                    () => ({
                        setStep: () => {},
                        premiumType: n.TIER_2,
                        onClose: u,
                        transitionState: m,
                        premiumSubscription: l,
                        analyticsLocations: [],
                        analyticsLocation: void 0,
                        confettiCanvas: null,
                        churnUserDiscountOffer: null,
                        isFetchingChurnDiscountOffer: !1,
                        fullPrice: "$9.99",
                        discountedPrice: void 0,
                        planId: "511651880837840896",
                        paymentsBlocked: !1,
                        renewalInvoice: null,
                        renewalInvoiceDetails: null,
                        handleCancellation: async () => {},
                        applyOffer: async () => {},
                        pauseDuration: d,
                        setPauseDuration: c,
                    }),
                    [u, m, d],
                );
            return (0, r.jsx)(t.Provider, { value: h, children: (0, r.jsx)(e, {}) });
        }
        return ((i.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, r.jsx)(i, { ...e }));
    },
    NewMemberActionModal: async () => {
        let { default: e } = await Promise.all([a.e(266281), a.e(287973), a.e(652191), a.e(813949), a.e(354569)]).then(
                a.bind(a, 251632),
            ),
            { NewMemberActionTypes: t } = await Promise.resolve().then(a.bind(a, 374084)),
            n = {
                channelId: "123456789",
                title: "Welcome to the server!",
                description: "Say hello in the welcome channel",
                actionType: t.CHAT,
                emoji: null,
                icon: null,
            };
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                action: n,
                onSave: (e, t, a) => {
                    console.log("NewMemberActionModal onSave:", { action: e, iconData: t, shouldSaveIcon: a });
                },
                onDelete: () => {
                    console.log("NewMemberActionModal onDelete");
                },
            });
    },
    PlayStationModal: async () => {
        let { default: e } = await Promise.all([a.e(187880), a.e(465694), a.e(861293)]).then(a.bind(a, 971642)),
            t = await Promise.resolve().then(a.bind(a, 643501)),
            { createChannelRecord: n } = await Promise.resolve().then(a.bind(a, 95701)),
            l = n({
                id: "123456789",
                name: "test-voice-channel",
                type: 2,
                guild_id: "987654321",
                position: 0,
                permissionOverwrites: {},
                parent_id: void 0,
                nsfw: !1,
                topic: void 0,
                lastMessageId: void 0,
                bitrate: 64e3,
                userLimit: 0,
                rateLimitPerUser: 0,
                icon: null,
                ownerId: null,
                application_id: null,
                lastPinTimestamp: null,
                rtcRegion: null,
                videoQualityMode: null,
                messageCount: 0,
                memberCount: 0,
                threadMetadata: void 0,
                member: void 0,
                defaultAutoArchiveDuration: void 0,
                flags: 0,
                totalMessageSent: 0,
                availableTags: [],
                appliedTags: [],
                defaultReactionEmoji: null,
                defaultThreadRateLimitPerUser: 0,
                defaultSortOrder: null,
                defaultForumLayout: 0,
            }),
            i = {
                "device-1": { id: "device-1", name: "PS5 - Living Room", platform: "playstation" },
                "device-2": { id: "device-2", name: "PS5 - Bedroom", platform: "playstation" },
                "device-3": { id: "device-3", name: "PS4 - Office", platform: "playstation" },
            },
            s = (a) => {
                let n = t.default.getDevicesForPlatform,
                    s = t.default.getFetchingDevices,
                    o = t.default.getLastSelectedDeviceByPlatform,
                    d = t.default.getAwaitingRemoteSessionInfo;
                ((t.default.getDevicesForPlatform = (e) => (e === ep.fg2.PLAYSTATION ? i : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== ep.fg2.PLAYSTATION && s.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === ep.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null));
                let c = a.onClose;
                return (
                    (a.onClose = async () => {
                        ((t.default.getDevicesForPlatform = n),
                            (t.default.getFetchingDevices = s),
                            (t.default.getLastSelectedDeviceByPlatform = o),
                            (t.default.getAwaitingRemoteSessionInfo = d),
                            await c());
                    }),
                    (0, r.jsx)(e, { ...a, channel: l, platform: ep.fg2.PLAYSTATION })
                );
            };
        return ((s.displayName = "PlayStationModalWrapper"), s);
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([a.e(568035), a.e(627495)]).then(a.bind(a, 651930));
        return (t) => (0, r.jsx)(e, { ...t, detected: { applicationId: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([a.e(726464), a.e(637867), a.e(480098)]).then(a.bind(a, 894683));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123456789" });
    },
    CreateTagModal: async () => {
        let { default: e } = await Promise.all([a.e(143172), a.e(347326)]).then(a.bind(a, 950989));
        return (t) => (0, r.jsx)(e, { ...t, channelId: "123456789", guildId: "987654321" });
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await Promise.all([a.e(143172), a.e(347326)]).then(a.bind(a, 950989)),
            t = { id: "tag-123", name: "Bug Report", emojiId: "123456789", emojiName: "\uD83D\uDC1B", moderated: !0 };
        return (a) => (0, r.jsx)(e, { ...a, channelId: "123456789", guildId: "987654321", tag: t });
    },
    ConfirmModal: async () => {
        let { ConfirmModal: e } = await Promise.all([a.e(304823), a.e(223976), a.e(977260)]).then(a.bind(a, 397927));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                title: "Confirm Action",
                subtitle: "Are you sure you want to perform this action? This action cannot be undone.",
                confirmText: "Confirm",
                onConfirm: () => console.log("ConfirmModal: Confirmed"),
                onCancel: () => console.log("ConfirmModal: Cancelled"),
            });
    },
    AlertModal: async () => {
        let { Alert: e } = await Promise.all([a.e(844331), a.e(542369)]).then(a.bind(a, 291064));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                title: "Alert",
                body: "This is an alert message with a single action.",
                confirmText: "OK",
                onConfirm: () => console.log("AlertModal: Confirmed"),
            });
    },
    AlertModalWithCancel: async () => {
        let { Alert: e } = await Promise.all([a.e(844331), a.e(542369)]).then(a.bind(a, 291064));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                title: "Confirm Action",
                body: "Are you sure you want to proceed with this action?",
                confirmText: "Yes",
                cancelText: "No",
                onConfirm: () => console.log("AlertModalWithCancel: Confirmed"),
                onCancel: () => console.log("AlertModalWithCancel: Cancelled"),
            });
    },
    AlertModalWithSecondary: async () => {
        let { Alert: e } = await Promise.all([a.e(844331), a.e(542369)]).then(a.bind(a, 291064));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                title: "Settings Change",
                body: "This will change your account settings.",
                confirmText: "Apply",
                cancelText: "Cancel",
                secondaryConfirmText: "Don't show this again",
                onConfirm: () => console.log("AlertModalWithSecondary: Confirmed"),
                onCancel: () => console.log("AlertModalWithSecondary: Cancelled"),
                onConfirmSecondary: () => console.log("AlertModalWithSecondary: Secondary action confirmed"),
            });
    },
    GuildDisableCommunicationModal: async () => {
        let {
                Button: e,
                Text: t,
                Heading: n,
                Checkbox: l,
                ButtonGroup: i,
            } = await Promise.all([a.e(304823), a.e(223976), a.e(977260)]).then(a.bind(a, 397927)),
            { DisableCommunicationDuration: s, getFriendlyDurationString: o } = await Promise.resolve().then(
                a.bind(a, 200700),
            ),
            d = await Promise.resolve().then(a.t.bind(a, 582128, 19)),
            c = "TestUser";
        function u(a) {
            let [u, m] = d.useState(s.DURATION_60_SEC),
                [h, p] = d.useState(""),
                [g, x] = d.useState(!1),
                [v, b] = d.useState(!1),
                j = [
                    { value: s.DURATION_60_SEC, label: o(s.DURATION_60_SEC) },
                    { value: s.DURATION_5_MIN, label: o(s.DURATION_5_MIN) },
                    { value: s.DURATION_10_MIN, label: o(s.DURATION_10_MIN) },
                    { value: s.DURATION_1_HOUR, label: o(s.DURATION_1_HOUR) },
                    { value: s.DURATION_1_DAY, label: o(s.DURATION_1_DAY) },
                    { value: s.DURATION_1_WEEK, label: o(s.DURATION_1_WEEK) },
                ],
                f = d.useCallback(async () => {
                    (x(!0),
                        console.log("GuildDisableCommunicationModal: Timing out user", {
                            user: c,
                            duration: o(u),
                            reason: null != h ? h : "No reason provided",
                            resolveFlag: v,
                        }),
                        await new Promise((e) => setTimeout(e, 1e3)),
                        x(!1),
                        a.onClose());
                }, [u, h, v, a]);
            return (0, r.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, r.jsxs)(n, {
                        variant: "heading-lg/semibold",
                        className: "mb-2",
                        children: ["Disable Communication for ", c, "#", "0001"],
                    }),
                    (0, r.jsx)(t, {
                        variant: "body-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: "This will temporarily disable the user's ability to communicate in this server.",
                    }),
                    (0, r.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, r.jsx)(n, { variant: "heading-xs/semibold", className: "mb-2", children: "Duration" }),
                            (0, r.jsx)(i, {
                                children: j.map((t) =>
                                    (0, r.jsx)(
                                        e,
                                        {
                                            variant: u === t.value ? "primary" : "secondary",
                                            size: "sm",
                                            text: t.label,
                                            onClick: () => m(t.value),
                                        },
                                        t.value,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, r.jsx)(n, {
                                variant: "heading-xs/semibold",
                                className: "mb-2",
                                children: "Reason (Optional)",
                            }),
                            (0, r.jsx)("textarea", {
                                value: h,
                                onChange: (e) => p(e.target.value),
                                placeholder: "Enter reason for timeout...",
                                style: {
                                    width: "100%",
                                    minHeight: "80px",
                                    padding: "8px",
                                    border: "1px solid var(--border-subtle)",
                                    borderRadius: "4px",
                                    backgroundColor: "var(--background-base-low)",
                                    color: "var(--text-strong)",
                                    resize: "vertical",
                                },
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: "mb-4",
                        children: (0, r.jsx)(l, { checked: v, onChange: b, label: "Resolve associated mod report" }),
                    }),
                    (0, r.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, r.jsx)(e, { variant: "secondary", text: "Cancel", onClick: a.onClose }),
                            (0, r.jsx)(e, { variant: "primary", text: "Timeout User", onClick: f, disabled: g }),
                        ],
                    }),
                ],
            });
        }
        return (e) => (0, r.jsx)(u, { ...e });
    },
    GuildPowerupDeactivateModal: async () => {
        let {
                Button: e,
                Text: t,
                Heading: n,
                Checkbox: l,
            } = await Promise.all([a.e(304823), a.e(223976), a.e(977260)]).then(a.bind(a, 397927)),
            i = await Promise.resolve().then(a.t.bind(a, 582128, 19)),
            s = "Level 3 Server Boost",
            o = 200,
            d = 60,
            c = 8;
        function u(a) {
            let [u, m] = i.useState(!1),
                [h, p] = i.useState(!1),
                g = i.useCallback(async () => {
                    (p(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: s,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2e3)),
                        p(!1),
                        a.onClose());
                }, [a]);
            return (0, r.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, r.jsxs)(n, { variant: "heading-lg/semibold", className: "mb-2", children: ["Deactivate ", s] }),
                    (0, r.jsxs)(t, {
                        variant: "body-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: [
                            "This will remove the ",
                            s,
                            " from your server and disable all associated features.",
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: "mb-4",
                        style: {
                            backgroundColor: "var(--background-base-lower)",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-subtle)",
                        },
                        children: [
                            (0, r.jsx)(n, {
                                variant: "heading-xs/semibold",
                                className: "mb-2",
                                children: "Current Features",
                            }),
                            (0, r.jsxs)("div", {
                                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
                                children: [
                                    (0, r.jsxs)(t, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", o, " emoji slots"],
                                    }),
                                    (0, r.jsxs)(t, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", d, " sticker slots"],
                                    }),
                                    (0, r.jsxs)(t, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", c, " sound slots"],
                                    }),
                                    (0, r.jsx)(t, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        children: "\u2022 Custom server banner",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: "mb-4",
                        style: {
                            backgroundColor: "var(--background-danger)",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-feedback-critical)",
                        },
                        children: [
                            (0, r.jsxs)(t, {
                                variant: "body-sm/medium",
                                color: "text-feedback-critical",
                                className: "mb-2",
                                children: [
                                    (0, r.jsx)("span", {
                                        role: "img",
                                        "aria-label": "Warning",
                                        children: "\u26A0\uFE0F",
                                    }),
                                    " ",
                                    "Warning",
                                ],
                            }),
                            (0, r.jsx)(t, {
                                variant: "body-sm/medium",
                                color: "text-feedback-critical",
                                children:
                                    "Deactivating this powerup will immediately remove all Level 3 features from your server. Members will lose access to custom emojis, stickers, and other premium features. This action cannot be undone.",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: "mb-4",
                        children: (0, r.jsx)(l, {
                            checked: u,
                            onChange: m,
                            label: "I understand that deactivating this powerup will remove all Level 3 features from my server",
                            labelType: "secondary",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, r.jsx)(e, { variant: "secondary", text: "Cancel", onClick: a.onClose }),
                            (0, r.jsx)(e, {
                                variant: "critical-primary",
                                text: "Deactivate Level",
                                onClick: g,
                                disabled: !u,
                                loading: h,
                            }),
                        ],
                    }),
                ],
            });
        }
        return (e) => (0, r.jsx)(u, { ...e });
    },
    DataHarvestModal: async () => {
        let { default: e } = await a.e(292063).then(a.bind(a, 970018));
        return (t) =>
            (0, r.jsx)(e, {
                modalProps: t,
                onConfirm: (e) => {
                    (console.log("DataHarvestModal: Requesting data export for:", e),
                        setTimeout(() => {
                            console.log("DataHarvestModal: Data export request submitted successfully");
                        }, 1e3));
                },
            });
    },
    EnableCommunityModal: async () => {
        let { default: e } = await Promise.all([a.e(443159), a.e(553203), a.e(82721), a.e(452823), a.e(761120)]).then(
            a.bind(a, 218595),
        );
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: async () => {
                    (console.log("EnableCommunityModal: Closed"), await t.onClose());
                },
            });
    },
    DeprivateModal: async () => {
        let e = (await Promise.all([a.e(315273), a.e(254857)]).then(a.bind(a, 147696))).default;
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123456789012345678", startingChannelId: "987654321098765432" });
    },
    CameraPreviewModal: async () => {
        let { default: e } = await Promise.all([a.e(650100), a.e(410534)]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e(650100), a.e(410534)]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !0, onEnable: () => console.log("Camera enabled") });
    },
    ModeratorReportResolveConfirmModal: async () => {
        let { default: e } = await Promise.resolve().then(a.bind(a, 390897));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                handleResolveFlag: () => console.log("ModeratorReportResolveConfirmModal: Flag resolved"),
            });
    },
    SelectFriendsModal: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 303682));
        return (a) => {
            let { onClose: n, ...l } = a;
            return (0, r.jsx)(e, {
                onClose: async () => {
                    (console.log("SelectFriendsModal: Closed"), await n());
                },
                startingScreen: t.SELECT_FRIENDS,
                ...l,
            });
        };
    },
    SelectFriendsModalReminder: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 303682));
        return (a) => {
            let { onClose: n, ...l } = a;
            return (0, r.jsx)(e, {
                onClose: async () => {
                    (console.log("SelectFriendsModalReminder: Closed"), await n());
                },
                startingScreen: t.REMINDER,
                ...l,
            });
        };
    },
    FavoritesGuildAddChannelModal: async () => {
        let { default: e } = await Promise.all([
            a.e(866475),
            a.e(937139),
            a.e(850979),
            a.e(236946),
            a.e(692639),
            a.e(890480),
            a.e(440963),
            a.e(766031),
            a.e(394317),
            a.e(79362),
            a.e(320914),
        ]).then(a.bind(a, 677993));
        return (t) => (0, r.jsx)(e, { ...t, parentId: null, source: "devtools" });
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([
            a.e(866475),
            a.e(937139),
            a.e(58243),
            a.e(236946),
            a.e(692639),
            a.e(890480),
            a.e(440963),
            a.e(766031),
            a.e(394317),
            a.e(521743),
        ]).then(a.bind(a, 190930));
        return (t) =>
            (0, r.jsx)(e, { ...t, applicationId: "123456789", mediaUrl: "https://picsum.photos/400/300.jpg" });
    },
    CallUserConfirmationModal: async () => {
        let { default: e } = await a.e(19106).then(a.bind(a, 502054));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onSubmit: () => {
                    (console.log("CallUserConfirmationModal: Call confirmed"), t.onClose());
                },
            });
    },
    OptInReorderAttemptModal: async () => {
        let { default: e } = await Promise.all([a.e(57729), a.e(697585), a.e(24848)]).then(a.bind(a, 354643));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()),
            });
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await Promise.all([a.e(710727), a.e(245535)]).then(a.bind(a, 935074));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose()),
            });
    },
    ConsentCheckBoxModal: async () => {
        let { ConfirmModal: e } = await Promise.all([a.e(304823), a.e(223976), a.e(977260)]).then(a.bind(a, 397927)),
            { Text: t, Heading: n } = await Promise.all([a.e(304823), a.e(223976), a.e(977260)]).then(
                a.bind(a, 397927),
            ),
            l = await Promise.resolve().then(a.t.bind(a, 582128, 19));
        function i(a) {
            let [i, s] = l.useState(!1),
                [o, d] = l.useState(!1);
            return (0, r.jsx)(e, {
                ...a,
                title: "Consent CheckBox Examples",
                confirmText: "Close",
                cancelText: "",
                onConfirm: () => (console.log("ConsentCheckBoxModal: Modal closed"), a.onClose()),
                onCancel: () => {},
                children: (0, r.jsxs)("div", {
                    style: { padding: "20px", display: "flex", flexDirection: "column", gap: "20px" },
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(n, {
                                    variant: "heading-sm/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Terms of Service Consent",
                                }),
                                (0, r.jsx)(or.S, {
                                    label: "I agree to Discord's Terms of Service and Privacy Policy",
                                    checked: i,
                                    onChange: (e) => s(e),
                                    labelType: "secondary",
                                }),
                                (0, r.jsxs)(t, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Consent status: ", i ? "Agreed" : "Not agreed"],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(n, {
                                    variant: "heading-sm/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Promotional Email Consent",
                                }),
                                (0, r.jsx)(or.S, {
                                    label: "I would like to receive promotional emails from Discord about new features, events, and other updates.",
                                    checked: o,
                                    onChange: (e) => d(e),
                                    labelType: "secondary",
                                }),
                                (0, r.jsxs)(t, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Promo consent status: ", o ? "Opted in" : "Not opted in"],
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        return ((i.displayName = "ConsentCheckBoxModalContent"), (e) => (0, r.jsx)(i, { ...e }));
    },
    GuildRaidLockdownFeedbackModal: async () => {
        let { default: e } = await Promise.all([a.e(660608), a.e(346313)]).then(a.bind(a, 336496));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
            });
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await Promise.all([a.e(955424), a.e(623386), a.e(78618), a.e(149409), a.e(970232)]).then(
                a.bind(a, 313003),
            ),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 537975)),
            n = t({
                id: "123456789",
                name: "Test Server",
                description: "A test server for development",
                ownerId: "987654321",
                icon: null,
                splash: null,
                banner: null,
                homeHeader: null,
                features: [],
                preferredLocale: "en-US",
                afkChannelId: null,
                afkTimeout: 300,
                systemChannelId: null,
                verificationLevel: 2,
                joinedAt: new Date(),
                defaultMessageNotifications: 0,
                mfaLevel: 0,
                application_id: null,
                explicitContentFilter: 0,
                vanityURLCode: null,
                premiumTier: 0,
                premiumSubscriberCount: 0,
                premiumProgressBarEnabled: !1,
                systemChannelFlags: 0,
                discoverySplash: null,
                rulesChannelId: null,
                safetyAlertsChannelId: null,
                publicUpdatesChannelId: null,
                maxStageVideoChannelUsers: 10,
                maxVideoChannelUsers: 25,
                maxMembers: 5e5,
                nsfwLevel: 0,
                ownerConfiguredContentLevel: null,
                hubType: null,
                latestOnboardingQuestionId: null,
                profile: null,
                premiumFeatures: null,
                moderatorReporting: null,
            });
        return (t) => (0, r.jsx)(e, { ...t, guild: n });
    },
    GuildVerificationLevelModalCommunity: async () => {
        let { default: e } = await Promise.all([a.e(955424), a.e(623386), a.e(78618), a.e(149409), a.e(970232)]).then(
                a.bind(a, 313003),
            ),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 537975)),
            { GuildFeatures: n } = await Promise.resolve().then(a.bind(a, 652215)),
            l = t({
                id: "123456789",
                name: "Test Community Server",
                description: "A test community server for development",
                ownerId: "987654321",
                icon: null,
                splash: null,
                banner: null,
                homeHeader: null,
                features: [n.COMMUNITY],
                preferredLocale: "en-US",
                afkChannelId: null,
                afkTimeout: 300,
                systemChannelId: null,
                verificationLevel: 3,
                joinedAt: new Date(),
                defaultMessageNotifications: 0,
                mfaLevel: 0,
                application_id: null,
                explicitContentFilter: 0,
                vanityURLCode: null,
                premiumTier: 0,
                premiumSubscriberCount: 0,
                premiumProgressBarEnabled: !1,
                systemChannelFlags: 0,
                discoverySplash: null,
                rulesChannelId: null,
                safetyAlertsChannelId: null,
                publicUpdatesChannelId: null,
                maxStageVideoChannelUsers: 10,
                maxVideoChannelUsers: 25,
                maxMembers: 5e5,
                nsfwLevel: 0,
                ownerConfiguredContentLevel: null,
                hubType: null,
                latestOnboardingQuestionId: null,
                profile: null,
                premiumFeatures: null,
                moderatorReporting: null,
            });
        return (t) => (0, r.jsx)(e, { ...t, guild: l });
    },
    EmojiAddModal: async () => {
        let { EmojiAddModal: e } = await Promise.all([a.e(225560), a.e(990410)]).then(a.bind(a, 126033));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                initialTierEmojiIds: new Set(["emoji1"]),
                onSubmit: (e) => {
                    console.log("EmojiAddModal: Selected emojis:", Array.from(e));
                },
                transitionToManageEmoji: () => {
                    console.log("EmojiAddModal: Transition to manage emoji clicked");
                },
                onClose: () => (console.log("EmojiAddModal: Modal closed"), t.onClose()),
            });
    },
    StreamFullModal: async () => {
        let { default: e } = await a.e(425894).then(a.bind(a, 166789));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    VoiceCallFeedback: async () => {
        let { default: e } = await Promise.all([
                a.e(36781),
                a.e(713710),
                a.e(139032),
                a.e(155925),
                a.e(137381),
                a.e(259375),
                a.e(364174),
            ]).then(a.bind(a, 9501)),
            t = {
                channel_id: "123456789",
                channel_type: ep.rbe.GUILD_VOICE,
                guild_id: "987654321",
                rtc_connection_id: "devtools-rtc-connection",
                duration: 6e4,
                voice_state_count: 2,
                video_stream_count: 0,
                video_enabled: !1,
                media_session_id: "devtools-media-session",
                duration_muted_ms: 0,
                output_audio_route_type: null,
            };
        return (a) => (0, r.jsx)(e, { ...a, analyticsData: t });
    },
    StreamFeedback: async () => {
        let { default: e } = await Promise.all([
                a.e(36781),
                a.e(713710),
                a.e(139032),
                a.e(155925),
                a.e(137381),
                a.e(259375),
                a.e(617171),
                a.e(862767),
            ]).then(a.bind(a, 218738)),
            t = { ownerId: "987654321", guildId: "123456789", channelId: "123456789", streamType: oh.U4.GUILD },
            n = { id: "123456789", name: "Test Game" },
            l = {
                rtc_connection_id: "devtools-rtc-connection",
                media_session_id: "devtools-media-session",
                duration: 6e4,
                stream_region: "us-west",
                max_viewers: 3,
                avg_bitrate: 2500,
                avg_fps: 60,
                avg_resolution: 1080,
                inbound_bitrate_estimate_percentile99: 3e3,
                parent_media_session_id: null,
            };
        return (a) => (0, r.jsx)(e, { ...a, isStreamer: !1, stream: t, streamApplication: n, analyticsData: l });
    },
    FamilyCenterAcceptLinkModal: async () => {
        let e = ec.default.getUser("12345"),
            t = ec.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e(916131), a.e(155738), a.e(331385)]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = ec.default.getUser("12345"),
            t = ec.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e(916131), a.e(155738), a.e(384811)]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = ec.default.getUser("12345"),
            t = ec.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e(916131), a.e(155738), a.e(817219)]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = ec.default.getUser("12345"),
            t = ec.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e(321855), a.e(943139)]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([a.e(683023), a.e(272875)]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e(634508), a.e(967884)]).then(a.bind(a, 307399)),
            t = oc.A.getPremiumGroupSubscription();
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, subscription: t });
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await Promise.all([a.e(56498), a.e(134068)]).then(a.bind(a, 428959));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                premiumGroupSubscriptionId: "1234567890",
                premiumGroupInviteId: "1234567890",
                isExistingSub: !1,
                premiumGroupPrimaryName: "Test User",
            });
    },
    QuarantineModeInfoModal: async () => {
        let { default: e } = await a.e(474575).then(a.bind(a, 218642));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    CaptchaTestModal: async () => {
        let { default: e } = await a.e(842213).then(a.bind(a, 881092));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PasswordConfirm: async () => {
        let { default: e } = await Promise.resolve().then(a.bind(a, 662758));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                title: "Confirm Password",
                actionText: "Submit",
                handleSubmit: async (e) => {
                    (console.log("PasswordConfirm: Password submitted:", e),
                        await new Promise((e) => setTimeout(e, 1e3)));
                },
            });
    },
    BlockedDomainModal: async () => {
        let { default: e } = await Promise.all([a.e(364956), a.e(420577), a.e(335681), a.e(690611)]).then(
            a.bind(a, 443198),
        );
        return (t) => (0, r.jsx)(e, { ...t, url: "https://example-phishing-site.com/malicious-page" });
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await Promise.all([a.e(494150), a.e(962684)]).then(a.bind(a, 228855)),
            t = Object.keys(nC.A.getGuilds())[0];
        return (a) => (0, r.jsx)(e, { ...a, guildId: t });
    },
    UrgentMessageModal: async () => {
        let { default: e } = await Promise.all([a.e(689913), a.e(758114)]).then(a.bind(a, 752313));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    UserAgreementsModal: async () => {
        let { default: e } = await Promise.all([a.e(50726), a.e(482911), a.e(922220)]).then(a.bind(a, 639719));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await Promise.all([a.e(796057), a.e(553203), a.e(452823), a.e(971905)]).then(
                a.bind(a, 868952),
            ),
            t = Object.values(nC.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([
            a.e(827776),
            a.e(249938),
            a.e(791370),
            a.e(548018),
            a.e(773152),
            a.e(625281),
        ]).then(a.bind(a, 516259));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e(752924),
            a.e(807432),
            a.e(601495),
            a.e(807265),
            a.e(555603),
            a.e(799753),
            a.e(579023),
            a.e(248672),
        ]).then(a.bind(a, 654e3));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupSubscribeModal: async () => {
        let { default: e } = await Promise.all([a.e(499709), a.e(569595)]).then(a.bind(a, 526710));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserOnboarding: async () => {
        let { default: e } = await Promise.all([
            a.e(188406),
            a.e(315907),
            a.e(122326),
            a.e(533651),
            a.e(260634),
            a.e(194399),
            a.e(419580),
            a.e(82721),
            a.e(197804),
            a.e(756856),
            a.e(319623),
            a.e(548521),
            a.e(695206),
            a.e(220626),
        ]).then(a.bind(a, 365097));
        return (t) => (0, r.jsx)(e, { ...t });
    },
};
function og() {
    let e = o.useMemo(
            () =>
                Object.keys(op)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(x.Ip, {
        className: t0.nd,
        children: (0, r.jsxs)("div", {
            className: iU.l$,
            children: [
                (0, r.jsx)("section", {
                    className: iU.uW,
                    children: (0, r.jsxs)(tJ.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(aS.Z, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                onSelectionChange: a,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, eJ.mM)(op[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: iU.uW,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: iU.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: function () {
                                    ((0, od.o)(!0), ou._.dispatch(ep.jej.PREMIUM_SUBSCRIPTION_CREATED));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ox = a(933832),
    ov = a(472229),
    ob = a(739053),
    oj = a(669316),
    of = a(959165),
    oy = a(19191),
    oE = a(879610);
async function oC(e, t) {
    try {
        await l9.Bo.post({ url: ep.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, ob._D)();
    }
}
async function oS(e, t) {
    try {
        await l9.Bo.del({ url: ep.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, ob._D)();
    }
}
function o_(e) {
    let { acked: t, expired: a, inStore: n, onClick: l, secondaryBadge: i } = e,
        s = "Created";
    return (
        a ? (s = "Expired") : t ? (s = "Acked") : n && (s = "Active"),
        (0, r.jsxs)("div", {
            className: iU.fC,
            children: [
                (0, r.jsx)(X.D, {
                    onClick: l,
                    className: Q()(iU.qS, iU.vk, { [iU.vu]: n, [iU.R1]: t, [iU._7]: a }),
                    children: (0, r.jsxs)(g.E, {
                        variant: "body-sm/medium",
                        color: t ? void 0 : "text-overlay-light",
                        children: [s, n ? " *" : ""],
                    }),
                }),
                null != i &&
                    i.active &&
                    (0, r.jsx)("div", {
                        className: Q()(iU.qS, iU.k3),
                        children: (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: i.label,
                        }),
                    }),
            ],
        })
    );
}
function oN(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [i, s] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, m] = o.useState(!1),
        [h, p] = o.useState(!1);
    o.useEffect(() => {
        u && p(!0);
        let e = setTimeout(() => {
            p(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: x, expiresAt: v, trialId: b, subscriptionTrial: j, referrer: f } = t,
        y =
            a.find((e) => {
                let { value: t } = e;
                return t === b;
            })?.label ?? "Unknown";
    null != f && (y = `${y} from @${f.username}`);
    let E = null != v,
        C = t.hasExpired,
        S = t.isRedeemed,
        _ = j?.skuId === tL.pe.TIER_0;
    async function N(e) {
        m(!0);
        try {
            await l9.Bo.patch({
                url: ep.Rsh.UPDATE_USER_OFFER(x, "trial"),
                body: {
                    ...("expiresAt" in e && { expires_at: e.expiresAt }),
                    ...("referrerId" in e && { referrer_id: e.referrerId }),
                },
                rejectWithError: !0,
            });
        } finally {
            (n(), m(!1));
        }
    }
    return (
        o.useEffect(() => {
            if (i) {
                let e = setTimeout(() => {
                    s(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
            if (d) {
                let e = setTimeout(() => {
                    c(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [i, d]),
        (0, r.jsxs)("div", {
            className: Q()(iU.Nr, _ ? iU.Qf : iU.C1),
            children: [
                (0, r.jsx)("div", {
                    className: Q()(iU.nM, iU.S7),
                    children: (0, r.jsx)(ee.D, {
                        variant: "heading-lg/semibold",
                        color: "text-overlay-light",
                        children: y,
                    }),
                }),
                (0, r.jsxs)(X.D, {
                    className: Q()(iU.nM, iU.QB),
                    onClick: () => {
                        (0, nY.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Offer: ", x],
                        }),
                        i
                            ? (0, r.jsx)(ox.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: iU.Kk })
                            : (0, r.jsx)(nF.CopyIcon, { size: "xs", color: "currentColor", className: iU.Kk }),
                    ],
                }),
                (0, r.jsxs)(X.D, {
                    className: Q()(iU.nM, iU.QB),
                    onClick: () => {
                        (0, nY.C)(b, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Trial: ", b],
                        }),
                        d
                            ? (0, r.jsx)(ox.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: iU.Kk })
                            : (0, r.jsx)(nF.CopyIcon, { size: "xs", color: "currentColor", className: iU.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: iU.nM,
                    children: (0, r.jsxs)(g.E, {
                        variant: "body-sm/medium",
                        color: "text-overlay-light",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, oE.re)({
                                intervalType: j?.interval ?? tL.WT.MONTH,
                                intervalCount: j?.intervalCount ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: iU.nM,
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, ov.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nq.Xm)(v?.toISOString()),
                            onChange: (e) => {
                                N({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iU.nM,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: "Referrer ID:",
                        }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: f?.id ?? "",
                            onChange: (e) => N({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsx)(o_, {
                    acked: E,
                    expired: C,
                    inStore: l,
                    onClick: async function () {
                        (m(!0), E ? await N({ expiresAt: null }) : await (0, ob.u1)(t), n(), m(!1));
                    },
                    secondaryBadge: { active: S, label: "Redeemed" },
                }),
                (0, r.jsx)(X.D, {
                    onClick: async () => {
                        (m(!0), await oS(x, "trial"), n(), m(!1));
                    },
                    children: (0, r.jsx)(nV.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: Q()(iU.Kk, iU.IT),
                    }),
                }),
                (0, r.jsx)("div", { className: Q()(iU.g4, { [iU.VP]: u || h }), children: (0, r.jsx)(tu.y, {}) }),
            ],
        })
    );
}
function oA(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [i, s] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, m] = o.useState(!1),
        [h, p] = o.useState(!1);
    o.useEffect(() => {
        u && p(!0);
        let e = setTimeout(() => {
            p(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: x, expiresAt: v, discountId: b, discount: j } = t,
        f =
            a.find((e) => {
                let { value: t } = e;
                return t === b;
            })?.label ?? "Unknown",
        y = null != v,
        E = t.hasExpired(),
        C = t.isApplied();
    async function S(e) {
        let { expiresAt: t } = e;
        m(!0);
        try {
            await l9.Bo.patch({
                url: ep.Rsh.UPDATE_USER_OFFER(x, "discount"),
                body: { expires_at: t },
                rejectWithError: !0,
            });
        } finally {
            (n(), m(!1));
        }
    }
    return (
        o.useEffect(() => {
            if (i) {
                let e = setTimeout(() => {
                    s(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
            if (d) {
                let e = setTimeout(() => {
                    c(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [i, d]),
        (0, r.jsxs)("div", {
            className: Q()(iU.Nr, iU.id),
            children: [
                (0, r.jsx)("div", {
                    className: Q()(iU.nM, iU.S7),
                    children: (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", color: "text-default", children: f }),
                }),
                (0, r.jsxs)(X.D, {
                    className: Q()(iU.nM, iU.QB),
                    onClick: () => {
                        (0, nY.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: ["Offer: ", x],
                        }),
                        i
                            ? (0, r.jsx)(ox.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: Q()(iU.Kk, iU.mK),
                              })
                            : (0, r.jsx)(nF.CopyIcon, { size: "xs", color: "currentColor", className: iU.Kk }),
                    ],
                }),
                (0, r.jsxs)(X.D, {
                    className: Q()(iU.nM, iU.QB),
                    onClick: () => {
                        (0, nY.C)(b, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: ["Discount: ", b],
                        }),
                        d
                            ? (0, r.jsx)(ox.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: Q()(iU.Kk, iU.mK),
                              })
                            : (0, r.jsx)(nF.CopyIcon, { size: "xs", color: "currentColor", className: iU.Kk }),
                    ],
                }),
                j?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: [j.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: iU.nM,
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, ov.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nq.Xm)(v?.toISOString()),
                            onChange: (e) =>
                                S({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsx)(o_, {
                    acked: y,
                    expired: E,
                    inStore: l,
                    onClick: async function () {
                        (m(!0), y ? await S({ expiresAt: null }) : await (0, ob.u1)(void 0, t), n(), m(!1));
                    },
                    secondaryBadge: { active: C, label: "Applied" },
                }),
                (0, r.jsx)(X.D, {
                    className: iU.aR,
                    onClick: async () => {
                        (m(!0), await oS(x, "discount"), n(), m(!1));
                    },
                    children: (0, r.jsx)(nV.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: Q()(iU.Kk, iU.fy),
                    }),
                }),
                (0, r.jsx)("div", { className: Q()(iU.g4, { [iU.VP]: u || h }), children: (0, r.jsx)(tu.y, {}) }),
            ],
        })
    );
}
function ok() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, i] = o.useState(),
        [s, c] = o.useState(),
        [u, m] = o.useState(!0),
        { discountOffers: h, trialOffers: v } = (0, d.cf)([oy.A], () => ({
            discountOffers: Object.values(oy.A.getState().userDiscountOffers).sort((e, t) => e.id.localeCompare(t.id)),
            trialOffers: Object.values(oy.A.getState().userTrialOffers).sort((e, t) => e.id.localeCompare(t.id)),
        })),
        [b, f] = o.useState([]),
        [y, E] = o.useState([]),
        [C, S] = o.useState(10080),
        [_, N] = o.useState([]),
        A = o.useMemo(() => new Set([...v, ...h].map((e) => e.id)), [v, h]),
        k = o.useMemo(() => [...v, ...b.filter((e) => !A.has(e.id))], [v, b, A]),
        D = o.useMemo(() => [...h, ...y.filter((e) => !A.has(e.id))], [h, y, A]),
        { entitlements: I, deleteFractionalPremium: T, refreshEntitlementList: R } = iP();
    return (
        o.useEffect(() => {
            R();
        }, [R]),
        o.useEffect(() => {
            N(I.filter((e) => e.sourceType === iI.G.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [I]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || u) &&
                (async function () {
                    try {
                        let { body: e } = await l9.Bo.get({ url: ep.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
                        return e;
                    } catch (e) {
                        return [];
                    }
                })().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    (t(a), n(r), null == l && i(a[0].value), null == s && c(r[0].value));
                });
        }, [e, a, l, s, u]),
        o.useEffect(() => {
            u &&
                (m(!1),
                oy.A.forceReset(),
                (0, ob._D)(),
                (async function () {
                    try {
                        let { body: e } = await l9.Bo.get({ url: ep.Rsh.USER_OFFERS, rejectWithError: !0 });
                        return {
                            trial: e.trial.map(of.A.createFromServer),
                            discount: e.discount.map(oj.A.createFromServer),
                        };
                    } catch (e) {
                        return { trial: [], discount: [] };
                    }
                })().then((e) => {
                    (f(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        E(e.discount.sort((e, t) => e.id.localeCompare(t.id))));
                }));
        }, [u]),
        (0, r.jsx)(x.Ip, {
            className: t0.nd,
            children: (0, r.jsxs)("div", {
                className: iU.l$,
                children: [
                    (0, r.jsxs)("section", {
                        className: iU.uW,
                        children: [
                            (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Utils" }),
                            (0, r.jsxs)("div", {
                                className: iU.Uo,
                                children: [
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear all User Offers",
                                        onClick: async function () {
                                            (await (async function () {
                                                try {
                                                    await l9.Bo.del({ url: ep.Rsh.USER_OFFERS, rejectWithError: !0 });
                                                } catch {
                                                } finally {
                                                    (await oy.A.forceReset(), await (0, ob._D)());
                                                }
                                            })(),
                                                m(!0));
                                        },
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Mobile Trials DismissibleContent",
                                        onClick: () => (0, aP.xB)(aM.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Offer Nagbar DismissibleContent",
                                        onClick: () => (0, aP._N)(aM.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Refresh DevTools",
                                        onClick: () => m(!0),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("section", {
                        className: iU.uW,
                        children: (0, r.jsxs)("div", {
                            className: iU.bd,
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Create a Trial Offer",
                                    options: e,
                                    formatOption: (e) => {
                                        let { label: t, value: a } = e;
                                        return { label: t, value: a, id: a };
                                    },
                                    value: l,
                                    placeholder: "Trial Type",
                                    onSelectionChange: i,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: async function () {
                                        null != l && (await oC(l, "trial"), m(!0));
                                    },
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("section", {
                        className: iU.uW,
                        children: (0, r.jsxs)("div", {
                            className: iU.bd,
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Create a Discount Offer",
                                    options: a,
                                    formatOption: (e) => {
                                        let { label: t, value: a } = e;
                                        return { label: t, value: a, id: a };
                                    },
                                    value: s,
                                    placeholder: "Discount Type",
                                    onSelectionChange: c,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: async function () {
                                        null != s && (await oC(s, "discount"), m(!0));
                                    },
                                }),
                            ],
                        }),
                    }),
                    k.length > 0 &&
                        (0, r.jsxs)("section", {
                            className: iU.uW,
                            children: [
                                (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Existing Trial Offers" }),
                                (0, r.jsx)(g.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                k.map((t) =>
                                    (0, r.jsx)(
                                        oN,
                                        { offer: t, offerOptions: e, forceRefetch: () => m(!0), inStore: A.has(t.id) },
                                        t.id,
                                    ),
                                ),
                            ],
                        }),
                    D.length > 0 &&
                        (0, r.jsxs)("section", {
                            className: iU.uW,
                            children: [
                                (0, r.jsx)(ee.D, {
                                    variant: "heading-sm/semibold",
                                    children: "Existing Discount Offers",
                                }),
                                (0, r.jsx)(g.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                D.map((e) =>
                                    (0, r.jsx)(
                                        oA,
                                        { offer: e, offerOptions: a, forceRefetch: () => m(!0), inStore: A.has(e.id) },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    (0, r.jsx)("section", {
                        className: iU.uW,
                        children: (0, r.jsxs)("div", {
                            className: iU.bd,
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Create a Reverse Trial Entitlement",
                                    options: [
                                        { id: "5min", label: "5 minutes", value: 5 },
                                        { id: "1hour", label: "1 hour", value: 60 },
                                        { id: "1day", label: "1 day", value: 1440 },
                                        { id: "1week", label: "1 week", value: 10080 },
                                    ],
                                    value: C,
                                    placeholder: "Reverse Trial Length",
                                    onSelectionChange: S,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: async function () {
                                        let e = new Date(Date.now() + 60 * C * 1e3).toISOString();
                                        (await (async function (e) {
                                            await l9.Bo.post({
                                                url: ep.Rsh.CREATE_REVERSE_TRIAL,
                                                body: { ends_at: e },
                                                rejectWithError: !0,
                                            });
                                        })(e),
                                            R());
                                    },
                                }),
                            ],
                        }),
                    }),
                    _.length > 0 &&
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(g.E, {
                                    style: { marginTop: "15px" },
                                    variant: "body-md/semibold",
                                    children: "Active reverse trial",
                                }),
                                (0, r.jsx)("div", {
                                    children: _.map((e) =>
                                        (0, r.jsx)(iF, { entitlement: e, active: !0, onDelete: () => T(e.id) }, e.id),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        })
    );
}
var oD = a(431527),
    oI = a(26279),
    oT = a(628577);
let oR = {
        [oI.Re.UNSPECIFIED]: "Unspecified",
        [oI.Re.DRAFT]: "Draft",
        [oI.Re.SIGNED]: "Signed",
        [oI.Re.DISCARDED]: "Discarded",
        [oI.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
        [oI.Re.SIGNING_FAILED]: "Signing Failed",
    },
    oO = { [oI.BM.UNSPECIFIED]: "Unspecified", [oI.BM.ONE_TIME]: "One Time", [oI.BM.SUBSCRIPTION]: "Subscription" };
function ow() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(!0),
        [l, i] = o.useState(null),
        s = o.useCallback(async () => {
            (n(!0), i(null));
            try {
                let e = await l9.Bo.get({ url: `${ep.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
                t(e.body ?? []);
            } catch (e) {
                i(e instanceof Error ? e.message : "Failed to fetch orders");
            } finally {
                n(!1);
            }
        }, []);
    o.useEffect(() => {
        s();
    }, [s]);
    let [d, c] = o.useState(!1),
        [u, m] = o.useState(null),
        [h, v] = o.useState(() => {
            let e = r8.Ay.getChannelId();
            return null != e ? e : "";
        }),
        b = o.useCallback(async () => {
            (c(!0), m(null));
            try {
                let e = h.trim(),
                    t = await l9.Bo.post({
                        url: ep.Rsh.DEBUG_TEMPORAL_INFRA_PROOF_OF_CONCEPT,
                        body: "" !== e ? { channel_id: e } : {},
                        rejectWithError: !0,
                    }),
                    a = null != t.body ? t.body.run_id : "unknown";
                m(`Started workflow run ${a}`);
            } catch (e) {
                m(e instanceof Error ? e.message : "Failed to start workflow");
            } finally {
                c(!1);
            }
        }, [h]);
    return (0, r.jsx)(x.Ip, {
        className: t0.nd,
        children: (0, r.jsxs)("div", {
            className: iU.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: iU.dL,
                    style: { marginBottom: "16px" },
                    children: [
                        (0, r.jsxs)(g.E, { variant: "body-lg/semibold", children: ["Orders (last ", 5, ")"] }),
                        (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Refresh", onClick: s, loading: a }),
                    ],
                }),
                null != l && (0, r.jsx)(Z.w, { type: "critical", message: l, role: "alert" }),
                !a &&
                    null != e &&
                    0 === e.length &&
                    (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: "No orders found." }),
                null != e && e.map((e) => (0, r.jsx)(oM, { order: e }, e.id)),
                (0, r.jsxs)(tJ.B, {
                    direction: "vertical",
                    gap: 8,
                    style: { marginTop: "16px" },
                    children: [
                        (0, r.jsx)(f.k, {
                            fullWidth: !0,
                            value: h,
                            onChange: v,
                            placeholder: "Channel ID (blank to skip the message)",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Run Temporal Infra Proof of Concept",
                            onClick: b,
                            loading: d,
                        }),
                        null != u && (0, r.jsx)(g.E, { variant: "body-xs/normal", color: "text-muted", children: u }),
                    ],
                }),
            ],
        }),
    });
}
function oM(e) {
    let { order: t } = e,
        [a, n] = o.useState(!1),
        [l, i] = o.useState(!1),
        s = oR[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${s}`, isDisabled: !1 },
            { id: "revision", label: `Revision: ${t.revision}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            (navigator.clipboard.writeText(t.id), i(!0), setTimeout(() => i(!1), 2e3));
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: iU.Nr,
        children: [
            (0, r.jsxs)(tJ.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/semibold", children: t.id }),
                    (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(oD.C, { items: d, label: "Order information", layout: "inline" }),
            (0, r.jsxs)(tJ.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(g.E, { variant: "body-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  tJ.B,
                                  {
                                      direction: "horizontal",
                                      gap: 12,
                                      children: [
                                          (0, r.jsxs)(g.E, {
                                              variant: "body-xs/normal",
                                              children: ["SKU: ", e.sku_id],
                                          }),
                                          (0, r.jsxs)(g.E, {
                                              variant: "body-xs/normal",
                                              children: ["Qty: ", e.quantity],
                                          }),
                                          (0, r.jsxs)(g.E, {
                                              variant: "body-xs/normal",
                                              children: [
                                                  "Type: ",
                                                  oO[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
                                              ],
                                          }),
                                          null != e.subscription_plan_id &&
                                              (0, r.jsxs)(g.E, {
                                                  variant: "body-xs/normal",
                                                  children: ["Plan: ", e.subscription_plan_id],
                                              }),
                                      ],
                                  },
                                  e.id,
                              ),
                          ),
                ],
            }),
            null != t.billing_facet &&
                (0, r.jsxs)("div", {
                    className: oT.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(X.D, {
                            onClick: () => n((e) => !e),
                            className: oT.Eh,
                            children: [
                                (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(iw.A, { direction: a ? iw.A.Directions.UP : iw.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: oT.j3,
                                children: [
                                    (0, r.jsxs)("li", {
                                        children: [
                                            (0, r.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                children: "payment_gateway",
                                            }),
                                            (0, r.jsx)(g.E, {
                                                variant: "body-xs/normal",
                                                children: String(t.billing_facet.payment_gateway),
                                            }),
                                        ],
                                    }),
                                    null != t.billing_facet.payment_source_id &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-xs/semibold",
                                                    children: "payment_source_id",
                                                }),
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-xs/normal",
                                                    children: t.billing_facet.payment_source_id,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.currency &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-xs/semibold",
                                                    children: "selected currency",
                                                }),
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-xs/normal",
                                                    children: t.billing_facet.currency,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.invoice_preview &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "currency",
                                                        }),
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.currency,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "subtotal",
                                                        }),
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.subtotal,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "tax",
                                                        }),
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.tax,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "total",
                                                        }),
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.total,
                                                        }),
                                                    ],
                                                }),
                                                t.billing_facet.invoice_preview.line_items.length > 0 &&
                                                    (0, r.jsxs)("li", {
                                                        children: [
                                                            (0, r.jsx)(g.E, {
                                                                variant: "body-xs/semibold",
                                                                children: "invoice line items",
                                                            }),
                                                            (0, r.jsx)(tJ.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                tJ.B,
                                                                                {
                                                                                    direction: "horizontal",
                                                                                    gap: 12,
                                                                                    children: [
                                                                                        (0, r.jsxs)(g.E, {
                                                                                            variant: "body-xs/normal",
                                                                                            children: [
                                                                                                "ref: ",
                                                                                                e.ref_order_line_item_id,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(g.E, {
                                                                                            variant: "body-xs/normal",
                                                                                            children: [
                                                                                                "unit: ",
                                                                                                e.unit_price,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(g.E, {
                                                                                            variant: "body-xs/normal",
                                                                                            children: [
                                                                                                "qty: ",
                                                                                                e.quantity,
                                                                                            ],
                                                                                        }),
                                                                                    ],
                                                                                },
                                                                                e.ref_order_line_item_id,
                                                                            ),
                                                                    ),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
var oP = a(935462),
    oL = a(103557),
    oU = a(93688),
    oG = a(717400),
    oF = a(676955),
    oB = a(31300),
    o$ = a(500060),
    oV = a(391973),
    oW = a(684013),
    oH = a(765671),
    oz = a(235986),
    oK = a(742589),
    oY = a(41984),
    oq = a(181435),
    oJ = a(435736),
    oQ = a(661886),
    oX = a(861862),
    oZ = a(515183),
    o0 = a(127242),
    o1 = a(869014),
    o2 = a(528772),
    o3 = a(83880),
    o6 = a(532624),
    o5 = a(228342),
    o8 = a(927813),
    o4 = a(996439),
    o9 = a(350535),
    o7 = a(9302),
    de = a(644434),
    dt = a(998798);
let da = {
        [ep.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: ep.uss.CLICK_ZONE_DEBUG,
            id: (0, eP.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...o3.A.getWidgetDefaultSettings(ep.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [ep.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: ep.uss.PERFORMANCE_DEBUG,
            id: (0, eP.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...o3.A.getWidgetDefaultSettings(ep.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    dn = {};
function dl(e) {
    let { id: t } = e,
        [a, n] = o.useState(!1);
    return (
        o.useEffect(() => {
            let e;
            return (
                a &&
                    (e = setTimeout(() => {
                        n(!1);
                    }, 1e3)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [a]),
        (0, r.jsxs)(nG.$n, {
            look: nG.$n.Looks.LINK,
            color: nG.$n.Colors.LINK,
            size: nG.$n.Sizes.MIN,
            onClick: function () {
                (0, nY.C)(t, () => n(!0));
            },
            className: dt.DT,
            children: ["Game Id: ", t, " ", a ? nN.intl.string(nN.t.t5VZ88) : null],
        })
    );
}
let di = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.bG)([_.Ay], () => _.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, d.bG)([k.A], () => k.A.getGameForPID(t.pid)),
            { data: l } = (0, aA.I)(n?.id),
            i = (0, d.bG)([_.Ay], () => (null == a ? null : _.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: dt.st,
            children: [
                (0, r.jsx)(g.E, { variant: "body-md/semibold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(g.E, { variant: "body-sm/semibold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.gameId &&
                    (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: (0, r.jsx)(dl, { id: t.gameId }),
                    }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, oZ.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(g.E, { variant: "body-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: dt.st,
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, oZ.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != i &&
                    (0, r.jsxs)("div", {
                        className: dt.st,
                        children: [
                            (0, r.jsxs)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", i.source],
                            }),
                            (0, r.jsxs)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", i.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", i.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, oZ.gK)(i.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["hook: ", l?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", l?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", l?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", l?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    ds = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cf)([o5.default], () => o5.default.getOverlayPIDStatuses()),
            n = (0, d.cf)([oX.default], () => oX.default.getTrackedGames()),
            l = (0, d.bG)([o5.default], () => o5.default.isInputLocked(t), [t]),
            i = (0, d.bG)([o5.default], () => o5.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.bG)([o5.default], () => o5.default.DEV_isInputLocked(t), [t]),
            o = (0, d.bG)([o5.default], () => o5.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: dt.st,
            children: [
                (0, r.jsx)(g.E, { variant: "body-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Screen Type Resolution: ",
                        (function (e) {
                            let t = n[e]?.timer;
                            if (null == t || null == t.screenTypeResolutionTimestamp) return "...";
                            let a = t.screenTypeResolutionTimestamp - t.startTrackingTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Window Creation: ",
                        (function (e) {
                            let t = n[e]?.timer;
                            if (
                                null == t ||
                                null == t.moduleTrackingTimestamp ||
                                null == t.screenTypeResolutionTimestamp
                            )
                                return "...";
                            let a = t.moduleTrackingTimestamp - t.screenTypeResolutionTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Rendering: ",
                        (function (e) {
                            let t = n[e]?.timer;
                            if (null == t || null == t.overlayRenderingTimestamp || null == t.moduleTrackingTimestamp)
                                return "...";
                            let a = t.overlayRenderingTimestamp - t.moduleTrackingTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(g.E, { variant: "body-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", i],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", s],
                }),
                (0, r.jsxs)(g.E, { variant: "body-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function dr(e) {
    var t;
    let a =
        ((t = Object.values((0, d.yK)([o3.A], () => o3.A.getWidgetsForLayout(de.GJ)))), t.find((t) => t.type === e));
    return [
        a,
        function () {
            if (null != a) (0, oV.uv)(a.id);
            else {
                let t = da[e];
                if (null == t) return;
                let a = t(de.GJ);
                (0, oV.jn)(a);
            }
        },
    ];
}
function dd(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nq.i$)(nU()(e), "h:mm:ss.SSS");
}
let dc = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, d.bG)(
            [oX.default],
            () => {
                if (null == t) return "Unknown";
                let e = oX.default.getTrackedGameByPid(t)?.gameName;
                return null != e ? ((dn[t] = e), e) : (dn[t] ?? "Unknown");
            },
            [t],
        );
    return (0, r.jsx)(g.E, { ...a, variant: "body-md/semibold", color: "text-strong", children: n });
});
function du() {
    let e = (0, d.bG)([o0.A], () => o0.A.hasRenderDebugMode(oY.x7.TrackFocusPIDs)),
        t = (0, d.yK)([oX.default], () => oX.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: dt.st,
        children: [
            (0, r.jsxs)("div", {
                className: dt.Iv,
                children: [
                    (0, r.jsx)(m.d, {
                        checked: e,
                        onChange: () =>
                            void oW.A.setRenderDebugMode(
                                !o0.A.hasRenderDebugMode(oY.x7.TrackFocusPIDs),
                                oY.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(X.D, {
                        className: dt.LL,
                        onClick: () => oW.A.clearTrackedPids(),
                        children: (0, r.jsx)(nV.TrashIcon, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(x.Ip, {
                className: Q()(dt.st, dt.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(ir.m, {
                                    position: "left",
                                    text: n === oY.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(g.E, {
                                            variant: "body-sm/medium",
                                            color: n === oY.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(dc, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                dd(t),
                                            ],
                                        }),
                                    }),
                                }),
                            },
                            `${a}-${t}`,
                        );
                    }),
                ],
            }),
        ],
    });
}
let dm = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.bG)(
                [oX.default, _.Ay],
                () => {
                    if (null == t) return null;
                    let e = oX.default.getTrackedGameByPid(t)?.fullscreenType;
                    if (null != e) return e;
                    let a = _.Ay.getGameOrTransformedSubgameForPID(t);
                    return a?.fullscreenType ?? l6.aI.UNKNOWN;
                },
                [t],
            );
        return (0, r.jsxs)(g.E, {
            variant: "body-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, oZ.wR)(a) : "Unknown"],
        });
    }),
    dh = o.memo(function () {
        let e = (0, d.cf)([oX.default], () => oX.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = _.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, oZ.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
                        let l = await Promise.all(t);
                        a((e) =>
                            l.reduce(
                                (e, t) => {
                                    let [a, n, l] = t;
                                    if (null == n || null == a) return e;
                                    let i = e[a] ?? [],
                                        s = i[i.length - 1]?.screenType;
                                    return (
                                        (0 === i.length || s !== n) &&
                                            (e[a] = [...i, { pid: a, screenType: n, timestamp: l }]),
                                        e
                                    );
                                },
                                { ...e },
                            ),
                        );
                    }, +o8.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(ir.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(x.Ip, {
                        className: Q()(dt.st, dt.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(g.E, {
                                    variant: "body-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(dc, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(dm, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        g.E,
                                                        {
                                                            variant: "body-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, oZ.wR)(a)} @ ${dd(n)}`,
                                                        },
                                                        `${e.pid}-${a}-${n}`,
                                                    );
                                                }),
                                        ],
                                    },
                                    e.pid,
                                ),
                            ),
                        ],
                    }),
                }),
            })
        );
    }),
    dp = o.memo(function () {
        let e = (0, d.cf)([oX.default], () => oX.default.getTrackedGames()),
            t = (0, o7.getPID)(),
            a = (0, d.bG)([oX.default], () => oX.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, d.yK)([o2.A], () => [o2.A.enabled, o2.A.keepOpen]),
            i = (0, d.bG)([o5.default], () => o5.default.getFocusedPID()),
            s = (0, d.bG)([o5.default], () => o5.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: dt.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(ds, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", i?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", s ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    dg = [
        {
            mode: oY.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: oY.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: oY.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: oY.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oY.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oY.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: oY.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    dx = o.memo(function () {
        let [e, t] = dr(ep.uss.CLICK_ZONE_DEBUG),
            [a, n] = dr(ep.uss.PERFORMANCE_DEBUG),
            l = (0, d.bG)([o0.A], () => o0.A.getRenderDebugModes()),
            [i, s] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    s({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: dt.st,
                children: dg.map((i) => {
                    let s =
                        i.mode === oY.x7.OverlayRafManagerForceEnabled
                            ? `${i.label} (${o1.A.getLastRAFCallbackReason()})`
                            : i.label;
                    function d() {
                        return i.mode === oY.x7.ClickZones
                            ? null != e
                            : i.mode === oY.x7.WidgetAreas
                              ? null != a
                              : l.has(i.mode);
                    }
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(m.d, {
                                checked: d(),
                                onChange: function () {
                                    var e;
                                    let a = d();
                                    (i.mode === oY.x7.ClickZones && t(),
                                        i.mode === oY.x7.WidgetAreas && n(),
                                        (e = i.mode),
                                        oW.A.setRenderDebugMode(!a, e));
                                },
                                label: s,
                                description: i.tooltip,
                            }),
                        },
                        i.mode,
                    );
                }),
            })
        );
    }),
    dv = o.memo(function () {
        let e = (0, d.cf)([oX.default], () => oX.default.getTrackedGames()),
            t = (0, d.bG)([_.Ay], () => _.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(ir.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: dt.st,
                                children: [
                                    (0, r.jsx)(g.E, {
                                        variant: "body-md/semibold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    g.E,
                                                    {
                                                        variant: "body-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(dm, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(ir.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: dt.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(di, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    db = o.memo(function () {
        let e = (0, d.bG)([oX.default], () => oX.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: oY.V6.UNSET, value: oY.V6.UNSET, id: oY.V6.UNSET },
                { label: oY.V6.IN_PROCESS_V2, value: oY.V6.IN_PROCESS_V2, id: oY.V6.IN_PROCESS_V2 },
                { label: oY.V6.OUT_OF_PROCESS_V3, value: oY.V6.OUT_OF_PROCESS_V3, id: oY.V6.OUT_OF_PROCESS_V3 },
                {
                    label: oY.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: oY.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: oY.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(j.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: function (e) {
                (a(e), oW.A.forceRenderMode(e));
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function dj(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function i() {
        a(null);
    }
    return (0, r.jsxs)(oP.EO, {
        size: oP.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(oP.rQ, {
                align: oz.A.Align.CENTER,
                justify: oz.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(oP.s_, { onClick: i }),
                ],
            }),
            (0, r.jsx)(oP.$m, {
                children: (0, r.jsx)("div", {
                    className: dt.st,
                    children: (0, r.jsx)(oL.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(oP.jl, {
                children: (0, r.jsxs)(ng.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(n);
                            },
                        }),
                        (0, r.jsx)(p.$, { variant: "secondary", text: "Clear", onClick: i }),
                    ],
                }),
            }),
        ],
    });
}
let df = {
    native: { label: "Native", filter: (e) => e.type === oq.ON.NativeLegacy || e.type === oq.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === oq.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === oq.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === oq.ON.OOPModule || e.type === oq.ON.LegacyModule },
};
function dy(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oq.QJ.Info;
    if (t === oq.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case oq.ON.NativeLegacy:
            return "var(--yellow-500)";
        case oq.ON.NativeOOP:
            return "var(--green-500)";
        case oq.ON.Flux:
            return "var(--brand-400)";
        case oq.ON.Renderer:
            return "var(--brand-500)";
        case oq.ON.LegacyModule:
            return "var(--yellow-300)";
        case oq.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let dE = [
    {
        key: "type",
        cellClassName: dt.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = dC(t);
            return (0, r.jsx)("div", {
                className: dt.g$,
                style: { color: dy(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "Name",
        cellClassName: dt.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case oq.QJ.Info:
                                    return "text-strong";
                                case oq.QJ.Warning:
                                    return "text-feedback-warning";
                                case oq.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(g.E, { variant: "body-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "Timestamp",
        cellClassName: dt.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nq.i$)(nU()(t), "h:mm:ss.SSS");
        },
    },
];
function dC(e) {
    switch (e) {
        case oq.ON.NativeLegacy:
            return oU.W;
        case oq.ON.NativeOOP:
            return oG.q;
        case oq.ON.Renderer:
        case oq.ON.Flux:
            return oF.v;
        case oq.ON.LegacyModule:
            return oB.k;
        case oq.ON.OOPModule:
            return o$.o;
        default:
            return oB.k;
    }
}
function dS(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let d_ = ["__webpack_require__", "fn"],
    dN = ["web.js", "web.js.map"],
    dA = [
        {
            id: "details",
            name: "Details",
            group: np.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: i, nativeId: s, stack: o, data: d, timestamp: c, pid: u } = t,
                    m = nU()(c),
                    h = dC(l);
                return (0, r.jsxs)(x.Ar, {
                    className: dt.bW,
                    children: [
                        (0, r.jsxs)(oK.A, {
                            className: Q()(t0.jr, dt.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: dy(l, i) },
                                    className: dt.nr,
                                    children: (0, r.jsx)(h, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(oK.A.Title, {
                                    wrapperClassName: dt.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(X.D, {
                                            tag: "span",
                                            className: dt.KE,
                                            onClick: () => (0, nY.C)(n),
                                            children: (0, r.jsx)(nF.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(oK.A.Icon, {
                                    icon: nF.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nY.C)(dS(t));
                                    },
                                }),
                                (0, r.jsx)(oK.A.Icon, { icon: n$.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(n8, {
                            className: dt.ZK,
                            children: [
                                (0, r.jsx)(n4, {
                                    name: "Timestamp",
                                    copyValue: m.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: m.toISOString(),
                                        title: (0, nq.i$)(m, "LLLL"),
                                        children: (0, nq.i$)(m, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(n4, {
                                    name: "Log Type",
                                    copyValue: i,
                                    children: (0, r.jsx)("code", { children: i }),
                                }),
                                (0, r.jsx)(n4, {
                                    name: "PID",
                                    copyValue: u?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: u?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(n4, {
                                    name: "Native ID",
                                    copyValue: s?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: s?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(n4, {
                                    name: "Data",
                                    copyValue: dS(d),
                                    children: (0, r.jsx)("code", { children: dS(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(n4, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, i] = a,
                                                        s = n.split(/[\\/]/).pop();
                                                    return d_.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: dt.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !dN.includes(s ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: dt.lz,
                                                                                      title: n,
                                                                                      children: [s, ":", l, ":", i],
                                                                                  }),
                                                                                  ")",
                                                                              ],
                                                                          }),
                                                                  ],
                                                              },
                                                              t,
                                                          );
                                                }
                                                return (0, r.jsx)("div", { children: e }, t);
                                            }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    dk = {
        searchType: nz.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                i = [t, a, JSON.stringify(l)];
            return (null != n && i.push(n), i);
        },
        throttleMs: 100,
    };
function dD() {
    let { ref: e, height: t } = (0, oH.Ay)(),
        a = (0, d.bG)([o0.A], () => o0.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [i, s] = o.useState(!1),
        [c, u] = o.useState(null),
        [m, h] = o.useState(Object.keys(df)),
        [p, x] = (0, d.bG)([o0.A], () => o0.A.getOverlayLoggingBreadcrumbs(), [], o4.D),
        [v, b] = o.useState(null),
        j = v ?? p,
        f = null != v ? -1 : x;
    o.useEffect(() => {
        0 !== f &&
            (i
                ? u(j.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : u(null));
    }, [i, j, f]);
    let [y, E] = o.useState(""),
        C = o.useMemo(
            () =>
                0 === f
                    ? []
                    : j.filter((e) => {
                          if (i && null != c && e.timestamp < c) return !1;
                          for (let t of m) {
                              let { filter: a } = df[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [j, m, c, i, f],
        ),
        [S, _] = o.useState(C),
        [N, A] = o.useState(null),
        k = o.useMemo(() => j.find((e) => e.key === N), [j, N]),
        D = o.useCallback((e) => {
            _(e);
        }, []),
        { renderSelectedTab: I } = (0, nh.A)({ tabs: dA }, []);
    (0, nK.RT)(y, C, D, dk, [j]);
    let T = o.useCallback((e) => {
            (l(e), oW.A.setModuleLogging(e));
        }, []),
        [R, O] = o.useState(!1),
        w = o.useRef(null),
        M = o.useCallback(() => {
            ((0, nY.C)(JSON.stringify(C)), O(!0));
        }, [C]);
    o.useEffect(() => {
        if (R)
            return (
                (w.current = setTimeout(() => {
                    O(!1);
                }, 4e3)),
                () => {
                    null != w.current && clearTimeout(w.current);
                }
            );
    }, [R]);
    let P = o.useCallback((e) => {
            b(null != e ? JSON.parse(e) : null);
        }, []),
        L = o.useCallback(
            (e) => {
                if (e) return b(null);
                (0, eJ.qf)(
                    (e) =>
                        (0, r.jsx)(dj, {
                            modalProps: e,
                            onClose: (t) => {
                                (P(t), e.onClose());
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    eX.SY,
                );
            },
            [P],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: dt.rh,
        children: [
            (0, r.jsxs)("div", {
                className: dt.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: Q()(dt._V, dt.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: dt.iR,
                                children: (0, r.jsx)(or.S, { label: "Poll Native", checked: n, onChange: (e) => T(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: dt.iR,
                                children: (0, r.jsx)(or.S, {
                                    label: "Only Active Games",
                                    checked: i,
                                    onChange: (e) => s(e),
                                }),
                            }),
                            (0, r.jsxs)(X.D, {
                                className: dt.ny,
                                onClick: M,
                                children: [
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        children: R ? "Copied" : "Copy All",
                                    }),
                                    R
                                        ? (0, r.jsx)(ox.CheckmarkLargeIcon, {
                                              size: "sm",
                                              color: eQ.A.unsafe_rawColors.GREEN_330.css,
                                          })
                                        : (0, r.jsx)(nF.CopyIcon, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(X.D, {
                                className: dt.ny,
                                onClick: () => L(null != v),
                                children: (0, r.jsx)(g.E, {
                                    variant: "body-sm/normal",
                                    color: "currentColor",
                                    children: null != v ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: Q()(dt._V, dt.XQ),
                        children: Object.entries(df).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                X.D,
                                {
                                    className: Q()(dt.pb, m.includes(t) && dt.bx),
                                    onClick: () => {
                                        h((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        color: "currentColor",
                                        children: a.label,
                                    }),
                                },
                                t,
                            );
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: dt._V,
                        children: (0, r.jsx)(nW.I, {
                            query: y,
                            onChange: E,
                            onClear: () => E(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: Q()(dt.st, dt.CZ),
                children: (0, r.jsx)(t1, {
                    columns: dE,
                    data: S,
                    selectedRowKey: N ?? void 0,
                    onClickRow: (e) => A(e.key),
                }),
            }),
            null != k &&
                (0, r.jsx)(nm, {
                    className: Q()(dt.st, dt.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: I({ breadcrumb: k, onClose: () => A(null) }),
                }),
        ],
    });
}
let dI = o.memo(function () {
        let e = (0, d.bG)([oQ.A], () => oQ.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: dt.st,
            children: [
                (0, r.jsx)("div", {
                    className: dt.Iv,
                    children: (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    dT = o.memo(function () {
        let e = (0, d.bG)([o0.A], () => o0.A.isStateDebuggingEnabled()),
            t = (0, d.bG)([o0.A], () => o0.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    oW.A.setStateDebugging(!0),
                    () => {
                        oW.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: dt.st,
                children: [
                    (0, r.jsx)("div", {
                        className: dt.Iv,
                        children: (0, r.jsx)(m.d, {
                            checked: e,
                            onChange: () => oW.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function dR() {
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)("div", {
            className: Q()(t0.nd, dt.rf),
            children: [
                (0, r.jsx)(dx, {}),
                (0, r.jsx)(db, {}),
                (0, r.jsx)(dv, {}),
                (0, r.jsx)(dp, {}),
                (0, r.jsx)(du, {}),
                (0, r.jsx)(dh, {}),
                (0, r.jsx)(dI, {}),
                (0, r.jsx)(dT, {}),
            ],
        }),
    });
}
function dO(e) {
    switch (e) {
        case "Disabled":
            return;
        case "False":
            return !1;
        case "True":
            return !0;
    }
}
function dw(e) {
    return null == e ? "Disabled" : e ? "True" : "False";
}
let dM = o.memo(function () {
    let e = (0, oJ.wW)(),
        t = (0, d.bG)([o6.Ay], () => o6.Ay.getOverlayKeybind());
    return (0, r.jsxs)("div", {
        className: dt.st,
        children: [
            (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
            (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Experiment State" }),
            (0, r.jsx)(g.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: (0, r.jsx)("pre", {
                    children: JSON.stringify({ ...e, overlayKeybind: (0, o9.dI)(t.shortcut) }, void 0, 2),
                }),
            }),
            (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Overrides" }),
            (0, r.jsx)(j.l, {
                label: "Overlay User Status",
                description: "Override whether the current user was a new or existing user",
                value: dw(e.overrideIsNewOverlayUser),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Existing user", value: "False", id: "False" },
                    { label: "New user", value: "True", id: "True" },
                ],
                onSelectionChange: function (e) {
                    (0, oJ.sw)(dO(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(j.l, {
                label: "Override Previous Keybind Status",
                description: "Override whether the user's pre-experiment keybind was the default keybind",
                value: dw(e.overrideIsUsingDefaultOverlayKeybind),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Using default keybind", value: "True", id: "True" },
                    { label: "Not using default keybind", value: "False", id: "False" },
                ],
                onSelectionChange: function (e) {
                    (0, oJ.C3)(dO(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Actions" }),
            (0, r.jsx)(p.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oJ.xc)() }),
            (0, r.jsx)(p.$, { size: "sm", text: "Reset isUsingDefaultOverlayKeybind", onClick: () => (0, oJ.tM)() }),
        ],
    });
});
function dP() {
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsx)("div", { className: Q()(t0.nd, dt.rf), children: (0, r.jsx)(dM, {}) }),
    });
}
function dL() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                E.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    E.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: Q()(t0.nd, dt.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: dt._V,
                    children: [
                        (0, r.jsx)(X.D, {
                            className: Q()(dt.k0, "state" === e && dt.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(g.E, {
                                variant: "body-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(X.D, {
                            className: Q()(dt.k0, "logging" === e && dt.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(g.E, {
                                variant: "body-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(X.D, {
                            className: Q()(dt.k0, "experiments" === e && dt.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(g.E, {
                                variant: "body-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(dR, {}),
                "logging" === e && (0, r.jsx)(dD, {}),
                "experiments" === e && (0, r.jsx)(dP, {}),
            ],
        })
    );
}
var dU = a(25409);
let dG = { xbox_game_pass: "Xbox Game Pass" };
function dF(e) {
    return `/debug/partner-subs/${e}`;
}
async function dB(e, t) {
    await l9.Bo.post({ url: dF(e), body: t, rejectWithError: !0 });
}
function d$(e) {
    let { active: t } = e;
    return (0, r.jsx)("span", { className: `${dU.Od} ${t ? dU.xk : dU.kS}`, children: t ? "Active" : "Inactive" });
}
function dV(e) {
    let { partner: t, connectedAccount: a, onChanged: n } = e,
        [l, i] = o.useState(!1),
        s = { external_account_id: a.external_account_id },
        d = Object.keys(a.metadata).length > 0;
    async function c(e) {
        i(!0);
        try {
            await e();
        } finally {
            (await n(), i(!1));
        }
    }
    return (0, r.jsxs)(tJ.B, {
        gap: 8,
        className: dU.nM,
        children: [
            (0, r.jsxs)(tJ.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                children: [
                    (0, r.jsx)("div", { className: dU.un, children: a.external_account_id }),
                    (0, r.jsx)(d$, { active: a.is_active }),
                    (0, r.jsxs)(tJ.B, {
                        direction: "horizontal",
                        gap: 8,
                        fullWidth: !1,
                        className: dU.cm,
                        children: [
                            (0, r.jsx)(m.d, {
                                label: "",
                                checked: a.is_active,
                                onChange: (e) => c(() => dB(t, { ...s, is_active: e })),
                                disabled: l,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Unlink",
                                onClick: () =>
                                    c(() =>
                                        (async function (e, t) {
                                            await l9.Bo.del({ url: dF(e), body: t, rejectWithError: !0 });
                                        })(t, s),
                                    ),
                                disabled: l,
                            }),
                        ],
                    }),
                ],
            }),
            d && (0, r.jsx)("div", { className: dU.en, children: JSON.stringify(a.metadata) }),
        ],
    });
}
function dW(e) {
    var t;
    let { listing: a, onChanged: n } = e,
        [l, i] = o.useState(""),
        [s, d] = o.useState(!0),
        [c, u] = o.useState(!1);
    return (0, r.jsxs)(tJ.B, {
        gap: 12,
        className: dU.ns,
        children: [
            (0, r.jsxs)("div", {
                className: dU.CM,
                children: [
                    "Leave the id blank for a per-Discord-user default. Set the same id on multiple Discord accounts to test cross-account dedup of the ",
                    dG[(t = a.partner)] ?? t,
                    " membership.",
                ],
            }),
            (0, r.jsx)(f.k, {
                label: "External account id",
                placeholder: a.default_external_account_id,
                value: l,
                onChange: i,
            }),
            (0, r.jsx)(m.d, { label: "Active on link", checked: s, onChange: d }),
            (0, r.jsx)(tJ.B, {
                direction: "horizontal",
                justify: "start",
                children: (0, r.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    text: "Link account",
                    onClick: async function () {
                        u(!0);
                        try {
                            let e = { is_active: s },
                                t = l.trim();
                            ("" !== t && (e.external_account_id = t), await dB(a.partner, e), i(""));
                        } finally {
                            (await n(), u(!1));
                        }
                    },
                    disabled: c,
                }),
            }),
        ],
    });
}
function dH(e) {
    var t;
    let { listing: a, onChanged: n } = e;
    return (0, r.jsxs)(tJ.B, {
        gap: 8,
        className: dU.Oy,
        children: [
            (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: dG[(t = a.partner)] ?? t }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: [
                    "Backed by the ",
                    (0, r.jsx)("code", { children: a.connection_type }),
                    " connected account.",
                ],
            }),
            (0, r.jsx)("div", { className: dU.U, children: "Linked accounts" }),
            0 === a.connected_accounts.length
                ? (0, r.jsx)("div", { className: dU.Ie, children: "None linked yet." })
                : a.connected_accounts.map((e) =>
                      (0, r.jsx)(dV, { partner: a.partner, connectedAccount: e, onChanged: n }, e.connection_id),
                  ),
            (0, r.jsx)("div", { className: dU.U, children: "Link a new account" }),
            (0, r.jsx)(dW, { listing: a, onChanged: n }),
        ],
    });
}
function dz() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(null),
        l = o.useCallback(async () => {
            try {
                let e = await (async function () {
                    let { body: e } = await l9.Bo.get({ url: "/debug/partner-subs", rejectWithError: !0 });
                    return e;
                })();
                (t(e), n(null));
            } catch (e) {
                n(e instanceof Error ? e.message : String(e));
            }
        }, []);
    return (
        (0, td.Ay)(() => {
            l();
        }),
        (0, r.jsxs)(x.Ip, {
            className: Q()(t0.nd, dU.kL),
            children: [
                (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", className: t0.wx, children: "Partner Perks" }),
                (0, r.jsxs)(tJ.B, {
                    gap: 16,
                    children: [
                        null != a && (0, r.jsx)(g.E, { variant: "body-sm/normal", className: dU.kc, children: a }),
                        e.map((e) => (0, r.jsx)(dH, { listing: e, onChanged: l }, e.partner)),
                    ],
                }),
            ],
        })
    );
}
var dK = a(488428),
    dY = a(73825),
    dq = a(781300),
    dJ = a(589078),
    dQ = a(944304),
    dX = a(300233),
    dZ = a(599941),
    d0 = a(31637),
    d1 = a(4630),
    d2 = a(44120),
    d3 = a(778705),
    d6 = a(216678),
    d5 = a(194509),
    d8 = a(672619),
    d4 = a(533609),
    d9 = a(397093);
function d7(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, dZ.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(d0.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let ce = function () {
    let [e, t] = o.useState(tL.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, d.yK)([nC.A], () => nC.A.getGuildsArray()),
        [i] = (0, d.yK)([oc.A], () => [oc.A.getPremiumSubscription()]),
        s = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(s.length > 0 ? s[0].value : null),
        [h, v] = o.useState(""),
        [y, E] = o.useState({ plan_id: tL.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        C = "true" !== y.gift && null != i,
        [S, _] = o.useState(s.length > 0 ? s[0].value : null),
        { analyticsLocations: N } = (0, nx.Ay)(tI.A.PAYMENT_FLOW_TEST_PAGE),
        [A, k] = o.useState(""),
        [D, I] = o.useState(""),
        { balance: T, isFetching: R, error: O } = (0, d8.W0)(),
        { isSubmitting: w, responseMessage: M, redeemVirtualCurrency: P } = (0, d8.Qr)({ useOrdersAPI: !0 }),
        [L, U] = o.useState(""),
        [G, F] = o.useState(""),
        [B, $] = o.useState(""),
        [V, W] = o.useState("");
    return (0, r.jsx)(nx.f5, {
        value: N,
        children: (0, r.jsx)(x.Ip, {
            className: d9.XG,
            children: (0, r.jsxs)(tJ.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(tJ.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: tL.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tL.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tL.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(d5.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: nG.XD.PRIMARY,
                                look: nG.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(tJ.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: tL.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tL.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tL.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, d3.A)({ subscriptionTier: a, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(tJ.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Boost",
                                value: c,
                                options: s,
                                onSelectionChange: (e) => m(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != c
                                ? (0, r.jsx)(dQ.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(tJ.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(sF.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(tJ.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(f.k, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: h,
                                        onChange: (e) => v(e),
                                    }),
                                    (0, r.jsx)(ir.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: h.length < 1,
                                        children: (0, r.jsx)(p.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: h.length < 1,
                                            onClick: () => {
                                                window.open(ep.BVt.BILLING_PROMOTION_REDEMPTION(h));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Plan",
                                value: y.plan_id,
                                options: [
                                    { id: "tier_2", value: tL.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tL.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tL.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    E((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(j.l, {
                                label: "Type",
                                value: y.gift,
                                options: [
                                    { id: "gift", value: "true", label: "Gift" },
                                    { id: "not_gift", value: "false", label: "Not Gift" },
                                ],
                                onSelectionChange: (e) => {
                                    E((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, r.jsx)(ir.m, {
                        text: "Already subscribed",
                        shouldShow: C,
                        children: (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: C,
                            onClick: () => {
                                window.open(ep.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dK.As({ ...y }));
                            },
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(tJ.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    R
                                        ? (0, r.jsx)("div", {
                                              className: d9.wG,
                                              children: (0, r.jsx)(tu.y, { type: tu.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: d9.dB,
                                              children: [
                                                  null !== O &&
                                                      (0, r.jsxs)(g.E, {
                                                          variant: "body-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              O.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(d4.Gy, {
                                                      balance: T ?? 0,
                                                      balanceWidgetMode: d4.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsx)(f.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: L,
                                onChange: (e) => U(e),
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: w,
                                onClick: () => P(L, (0, eP.A)()),
                            }),
                            null != M && (0, r.jsx)(g.E, { variant: "body-sm/normal", children: M }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Premium Server Subscription For",
                                value: S,
                                options: s,
                                onSelectionChange: (e) => _(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dX.H, {
                                guildId: S?.id,
                                children: (0, r.jsx)(d7, { selectedGuildForGuildSub: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(tJ.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(u.n, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, r.jsx)(f.k, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: A,
                                        onChange: k,
                                    }),
                                    (0, r.jsx)(f.k, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: D,
                                        onChange: (e) => I(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, d1.openIAPPurchaseModal)({
                                        applicationId: A,
                                        skuId: D,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: ep.liQ.IN_APP },
                                        context: ep.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(tJ.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(u.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(tJ.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(f.k, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: G,
                                        onChange: F,
                                    }),
                                    (0, r.jsx)(f.k, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: B,
                                        onChange: (e) => $(e),
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, d6.q)({
                                                applicationId: G,
                                                skuId: B,
                                                analyticsLocations: N,
                                                checkoutFlow: dJ.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(tJ.B, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, r.jsx)(f.k, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: V,
                                onChange: (e) => W(e),
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, d2.A)({ skuId: V, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(tJ.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, dY.YG)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, dq.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Dismissible Content Framework",
                        children: (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, lO.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var ct = a(219887),
    ca = a(459357),
    cn = a(650314),
    cl = a(500380),
    ci = a(102609),
    cs = a(50258),
    cr = a(295405),
    co = a(548185);
let cd = [
        { label: "3DS and Failed Cards", value: "", disabled: !0 },
        { label: "Other", value: "OTHER" },
        { label: "Americas", value: "", disabled: !0 },
        { label: "United States", value: "US" },
        { label: "Canada", value: "CA" },
        { label: "Mexico", value: "MX" },
        { label: "Argentina", value: "AR" },
        { label: "Brazil", value: "BR" },
        { label: "Chile", value: "CL" },
        { label: "Colombia", value: "CO" },
        { label: "Costa Rica", value: "CR" },
        { label: "Ecuador", value: "EC" },
        { label: "Panama", value: "PA" },
        { label: "Paraguay", value: "PY" },
        { label: "Peru", value: "PE" },
        { label: "Uruguay", value: "UY" },
        { label: "Europe / Middle East", value: "", disabled: !0 },
        { label: "United Arab Emirates", value: "AE" },
        { label: "Austria", value: "AT" },
        { label: "Belgium", value: "BE" },
        { label: "Bulgaria", value: "BG" },
        { label: "Belarus", value: "BY" },
        { label: "Croatia", value: "HR" },
        { label: "Cyprus", value: "CY" },
        { label: "Czech Republic", value: "CZ" },
        { label: "Denmark", value: "DK" },
        { label: "Estonia", value: "EE" },
        { label: "Finland", value: "FI" },
        { label: "France", value: "FR" },
        { label: "Germany", value: "DE" },
        { label: "Gibraltar", value: "GI" },
        { label: "Greece", value: "GR" },
        { label: "Hungary", value: "HU" },
        { label: "Ireland", value: "IE" },
        { label: "Italy", value: "IT" },
        { label: "Latvia", value: "LV" },
        { label: "Liechtenstein", value: "LI" },
        { label: "Lithuania", value: "LT" },
        { label: "Luxembourg", value: "LU" },
        { label: "Malta", value: "MT" },
        { label: "Netherlands", value: "NL" },
        { label: "Norway", value: "NO" },
        { label: "Poland", value: "PL" },
        { label: "Portugal", value: "PT" },
        { label: "Romania", value: "RO" },
        { label: "Slovenia", value: "SI" },
        { label: "Slovakia", value: "SK" },
        { label: "Spain", value: "ES" },
        { label: "Sweden", value: "SE" },
        { label: "Switzerland", value: "CH" },
        { label: "United Kingdom", value: "GB" },
        { label: "Asia Pacific", value: "", disabled: !0 },
        { label: "Australia", value: "AU" },
        { label: "China", value: "CN" },
        { label: "Hong Kong", value: "HK" },
        { label: "India", value: "IN" },
        { label: "Japan", value: "JP" },
        { label: "Malaysia", value: "MY" },
        { label: "New Zealand", value: "NZ" },
        { label: "Singapore", value: "SG" },
        { label: "Taiwan", value: "TW" },
        { label: "Thailand", value: "TH" },
    ],
    cc = {
        OTHER: [
            { label: "Always Authenticate", value: "pm_card_authenticationRequired" },
            { label: "Decline after attaching", value: "pm_card_chargeCustomerFail" },
        ],
        US: [
            { label: "Visa", value: "pm_card_us" },
            { label: "Visa (debit)", value: "pm_card_visa_debit" },
            { label: "Mastercard", value: "pm_card_mastercard" },
            { label: "Mastercard (debit)", value: "pm_card_mastercard_debit" },
            { label: "Mastercard (prepaid)", value: "pm_card_mastercard_prepaid" },
            { label: "American Express", value: "pm_card_amex" },
            { label: "Discover", value: "pm_card_discover" },
            { label: "Diners Club", value: "pm_card_diners" },
        ],
        AR: [{ label: "Visa", value: "pm_card_ar" }],
        BR: [{ label: "Visa", value: "pm_card_br" }],
        CA: [{ label: "Visa", value: "pm_card_ca" }],
        CL: [{ label: "Visa", value: "pm_card_cl" }],
        CO: [{ label: "Visa", value: "pm_card_co" }],
        CR: [{ label: "Visa", value: "pm_card_cr" }],
        EC: [{ label: "Visa", value: "pm_card_ec" }],
        MX: [{ label: "Visa", value: "pm_card_mx" }],
        PA: [{ label: "Visa", value: "pm_card_pa" }],
        PY: [{ label: "Visa", value: "pm_card_py" }],
        PE: [{ label: "Visa", value: "pm_card_pe" }],
        UY: [{ label: "Visa", value: "pm_card_uy" }],
        AE: [
            { label: "Visa", value: "pm_card_ae" },
            { label: "Mastercard", value: "pm_card_ae_mastercard" },
        ],
        AT: [{ label: "Visa", value: "pm_card_at" }],
        BE: [{ label: "Visa", value: "pm_card_be" }],
        BG: [{ label: "Visa", value: "pm_card_bg" }],
        BY: [{ label: "Visa", value: "pm_card_by" }],
        CH: [{ label: "Visa", value: "pm_card_ch" }],
        CY: [{ label: "Visa", value: "pm_card_cy" }],
        CZ: [{ label: "Visa", value: "pm_card_cz" }],
        DK: [{ label: "Visa", value: "pm_card_dk" }],
        EE: [{ label: "Visa", value: "pm_card_ee" }],
        ES: [{ label: "Visa", value: "pm_card_es" }],
        FI: [{ label: "Visa", value: "pm_card_fi" }],
        FR: [
            { label: "Visa", value: "pm_card_fr" },
            { label: "Carte Bancaires / Visa", value: "pm_card_visa_carteBancaires" },
            { label: "Carte Bancaires / Mastercard", value: "pm_card_mastercard_carteBancaires" },
        ],
        DE: [{ label: "Visa", value: "pm_card_de" }],
        GB: [
            { label: "Visa", value: "pm_card_gb" },
            { label: "Visa (debit)", value: "pm_card_gb_debit" },
            { label: "Mastercard", value: "pm_card_gb_mastercard" },
        ],
        GI: [{ label: "Visa", value: "pm_card_gi" }],
        GR: [{ label: "Visa", value: "pm_card_gr" }],
        HR: [{ label: "Visa", value: "pm_card_hr" }],
        HU: [{ label: "Visa", value: "pm_card_hu" }],
        IE: [{ label: "Visa", value: "pm_card_ie" }],
        IT: [{ label: "Visa", value: "pm_card_it" }],
        LV: [{ label: "Visa", value: "pm_card_lv" }],
        LI: [{ label: "Visa", value: "pm_card_li" }],
        LT: [{ label: "Visa", value: "pm_card_lt" }],
        LU: [{ label: "Visa", value: "pm_card_lu" }],
        MT: [{ label: "Visa", value: "pm_card_mt" }],
        NL: [{ label: "Visa", value: "pm_card_nl" }],
        NO: [{ label: "Visa", value: "pm_card_no" }],
        PL: [{ label: "Visa", value: "pm_card_pl" }],
        PT: [{ label: "Visa", value: "pm_card_pt" }],
        RO: [{ label: "Visa", value: "pm_card_ro" }],
        SI: [{ label: "Visa", value: "pm_card_si" }],
        SK: [{ label: "Visa", value: "pm_card_sk" }],
        SE: [{ label: "Visa", value: "pm_card_se" }],
        AU: [
            { label: "Visa", value: "pm_card_au" },
            { label: "eftpos Australia / Visa", value: "pm_card_visa_debit_eftposAuCoBranded" },
            { label: "eftpos Australia / Mastercard", value: "pm_card_mastercard_debit_eftposAuCoBranded" },
        ],
        CN: [
            { label: "Visa", value: "pm_card_cn" },
            { label: "UnionPay", value: "pm_card_unionpay" },
        ],
        HK: [{ label: "Visa", value: "pm_card_hk" }],
        IN: [{ label: "Visa", value: "pm_card_in" }],
        JP: [
            { label: "Visa", value: "pm_card_jp" },
            { label: "JCB", value: "pm_card_jcb" },
        ],
        MY: [{ label: "Visa", value: "pm_card_my" }],
        NZ: [{ label: "Visa", value: "pm_card_nz" }],
        SG: [{ label: "Visa", value: "pm_card_sg" }],
        TW: [{ label: "Visa", value: "pm_card_tw" }],
        TH: [
            { label: "Visa (credit)", value: "pm_card_th_credit" },
            { label: "Visa (debit)", value: "pm_card_th_debit" },
        ],
    },
    cu = [
        { label: "None", value: "NONE" },
        { label: "Alabama", value: "AL" },
        { label: "Alaska", value: "AK" },
        { label: "Arizona", value: "AZ" },
        { label: "Arkansas", value: "AR" },
        { label: "California", value: "CA" },
        { label: "Colorado", value: "CO" },
        { label: "Connecticut", value: "CT" },
        { label: "Delaware", value: "DE" },
        { label: "Florida", value: "FL" },
        { label: "Georgia", value: "GA" },
        { label: "Hawaii", value: "HI" },
        { label: "Idaho", value: "ID" },
        { label: "Illinois", value: "IL" },
        { label: "Indiana", value: "IN" },
        { label: "Iowa", value: "IA" },
        { label: "Kansas", value: "KS" },
        { label: "Kentucky", value: "KY" },
        { label: "Louisiana", value: "LA" },
        { label: "Maine", value: "ME" },
        { label: "Maryland", value: "MD" },
        { label: "Massachusetts", value: "MA" },
        { label: "Michigan", value: "MI" },
        { label: "Minnesota", value: "MN" },
        { label: "Mississippi", value: "MS" },
        { label: "Missouri", value: "MO" },
        { label: "Montana", value: "MT" },
        { label: "Nebraska", value: "NE" },
        { label: "Nevada", value: "NV" },
        { label: "New Hampshire", value: "NH" },
        { label: "New Jersey", value: "NJ" },
        { label: "New Mexico", value: "NM" },
        { label: "New York", value: "NY" },
        { label: "North Carolina", value: "NC" },
        { label: "North Dakota", value: "ND" },
        { label: "Ohio", value: "OH" },
        { label: "Oklahoma", value: "OK" },
        { label: "Oregon", value: "OR" },
        { label: "Pennsylvania", value: "PA" },
        { label: "Puerto Rico", value: "PR" },
        { label: "Rhode Island", value: "RI" },
        { label: "South Carolina", value: "SC" },
        { label: "South Dakota", value: "SD" },
        { label: "Tennessee", value: "TN" },
        { label: "Texas", value: "TX" },
        { label: "Utah", value: "UT" },
        { label: "Vermont", value: "VT" },
        { label: "Virginia", value: "VA" },
        { label: "Washington", value: "WA" },
        { label: "West Virginia", value: "WV" },
        { label: "Wisconsin", value: "WI" },
        { label: "Wyoming", value: "WY" },
    ],
    cm = {
        NONE: null,
        AL: {
            name: "Alabama State Capitol",
            line_1: "600 Dexter Avenue",
            line_2: "",
            city: "Montgomery",
            state: "AL",
            postal_code: "36130",
            country: "US",
        },
        AK: {
            name: "Alaska State Capitol",
            line_1: "120 4th Street",
            line_2: "",
            city: "Juneau",
            state: "AK",
            postal_code: "99801",
            country: "US",
        },
        AZ: {
            name: "Arizona State Capitol",
            line_1: "1700 W Washington Street",
            line_2: "",
            city: "Phoenix",
            state: "AZ",
            postal_code: "85007",
            country: "US",
        },
        AR: {
            name: "Arkansas State Capitol",
            line_1: "500 Woodlane Street",
            line_2: "",
            city: "Little Rock",
            state: "AR",
            postal_code: "72201",
            country: "US",
        },
        CA: {
            name: "California State Capitol",
            line_1: "1315 10th Street",
            line_2: "",
            city: "Sacramento",
            state: "CA",
            postal_code: "95814",
            country: "US",
        },
        CO: {
            name: "Colorado State Capitol",
            line_1: "200 E Colfax Avenue",
            line_2: "",
            city: "Denver",
            state: "CO",
            postal_code: "80203",
            country: "US",
        },
        CT: {
            name: "Connecticut State Capitol",
            line_1: "210 Capitol Avenue",
            line_2: "",
            city: "Hartford",
            state: "CT",
            postal_code: "06106",
            country: "US",
        },
        DE: {
            name: "Delaware Legislative Hall",
            line_1: "411 Legislative Avenue",
            line_2: "",
            city: "Dover",
            state: "DE",
            postal_code: "19901",
            country: "US",
        },
        FL: {
            name: "Florida State Capitol",
            line_1: "400 S Monroe Street",
            line_2: "",
            city: "Tallahassee",
            state: "FL",
            postal_code: "32399",
            country: "US",
        },
        GA: {
            name: "Georgia State Capitol",
            line_1: "206 Washington Street SW",
            line_2: "",
            city: "Atlanta",
            state: "GA",
            postal_code: "30334",
            country: "US",
        },
        HI: {
            name: "Hawaii State Capitol",
            line_1: "415 S Beretania Street",
            line_2: "",
            city: "Honolulu",
            state: "HI",
            postal_code: "96813",
            country: "US",
        },
        ID: {
            name: "Idaho State Capitol",
            line_1: "700 W Jefferson Street",
            line_2: "",
            city: "Boise",
            state: "ID",
            postal_code: "83720",
            country: "US",
        },
        IL: {
            name: "Illinois State Capitol",
            line_1: "401 S 2nd Street",
            line_2: "",
            city: "Springfield",
            state: "IL",
            postal_code: "62701",
            country: "US",
        },
        IN: {
            name: "Indiana State Capitol",
            line_1: "200 W Washington Street",
            line_2: "",
            city: "Indianapolis",
            state: "IN",
            postal_code: "46204",
            country: "US",
        },
        IA: {
            name: "Iowa State Capitol",
            line_1: "1007 E Grand Avenue",
            line_2: "",
            city: "Des Moines",
            state: "IA",
            postal_code: "50319",
            country: "US",
        },
        KS: {
            name: "Kansas State Capitol",
            line_1: "300 SW 10th Avenue",
            line_2: "",
            city: "Topeka",
            state: "KS",
            postal_code: "66612",
            country: "US",
        },
        KY: {
            name: "Kentucky State Capitol",
            line_1: "700 Capitol Avenue",
            line_2: "",
            city: "Frankfort",
            state: "KY",
            postal_code: "40601",
            country: "US",
        },
        LA: {
            name: "Louisiana State Capitol",
            line_1: "900 N 3rd Street",
            line_2: "",
            city: "Baton Rouge",
            state: "LA",
            postal_code: "70804",
            country: "US",
        },
        ME: {
            name: "Maine State House",
            line_1: "210 State Street",
            line_2: "",
            city: "Augusta",
            state: "ME",
            postal_code: "04333",
            country: "US",
        },
        MD: {
            name: "Maryland State House",
            line_1: "100 State Circle",
            line_2: "",
            city: "Annapolis",
            state: "MD",
            postal_code: "21401",
            country: "US",
        },
        MA: {
            name: "Massachusetts State House",
            line_1: "24 Beacon Street",
            line_2: "",
            city: "Boston",
            state: "MA",
            postal_code: "02133",
            country: "US",
        },
        MI: {
            name: "Michigan State Capitol",
            line_1: "100 N Capitol Avenue",
            line_2: "",
            city: "Lansing",
            state: "MI",
            postal_code: "48933",
            country: "US",
        },
        MN: {
            name: "Minnesota State Capitol",
            line_1: "75 Rev Dr Martin Luther King Jr Blvd",
            line_2: "",
            city: "Saint Paul",
            state: "MN",
            postal_code: "55155",
            country: "US",
        },
        MS: {
            name: "Mississippi State Capitol",
            line_1: "400 High Street",
            line_2: "",
            city: "Jackson",
            state: "MS",
            postal_code: "39201",
            country: "US",
        },
        MO: {
            name: "Missouri State Capitol",
            line_1: "201 W Capitol Avenue",
            line_2: "",
            city: "Jefferson City",
            state: "MO",
            postal_code: "65101",
            country: "US",
        },
        MT: {
            name: "Montana State Capitol",
            line_1: "1301 E 6th Avenue",
            line_2: "",
            city: "Helena",
            state: "MT",
            postal_code: "59601",
            country: "US",
        },
        NE: {
            name: "Nebraska State Capitol",
            line_1: "1445 K Street",
            line_2: "",
            city: "Lincoln",
            state: "NE",
            postal_code: "68509",
            country: "US",
        },
        NV: {
            name: "Nevada State Capitol",
            line_1: "101 N Carson Street",
            line_2: "",
            city: "Carson City",
            state: "NV",
            postal_code: "89701",
            country: "US",
        },
        NH: {
            name: "New Hampshire State House",
            line_1: "107 N Main Street",
            line_2: "",
            city: "Concord",
            state: "NH",
            postal_code: "03301",
            country: "US",
        },
        NJ: {
            name: "New Jersey State House",
            line_1: "125 W State Street",
            line_2: "",
            city: "Trenton",
            state: "NJ",
            postal_code: "08608",
            country: "US",
        },
        NM: {
            name: "New Mexico State Capitol",
            line_1: "490 Old Santa Fe Trail",
            line_2: "",
            city: "Santa Fe",
            state: "NM",
            postal_code: "87501",
            country: "US",
        },
        NY: {
            name: "New York State Capitol",
            line_1: "State Street",
            line_2: "",
            city: "Albany",
            state: "NY",
            postal_code: "12224",
            country: "US",
        },
        NC: {
            name: "North Carolina State Capitol",
            line_1: "16 W Jones Street",
            line_2: "",
            city: "Raleigh",
            state: "NC",
            postal_code: "27601",
            country: "US",
        },
        ND: {
            name: "North Dakota State Capitol",
            line_1: "600 E Boulevard Avenue",
            line_2: "",
            city: "Bismarck",
            state: "ND",
            postal_code: "58505",
            country: "US",
        },
        OH: {
            name: "Ohio State House",
            line_1: "1 Capitol Square",
            line_2: "",
            city: "Columbus",
            state: "OH",
            postal_code: "43215",
            country: "US",
        },
        OK: {
            name: "Oklahoma State Capitol",
            line_1: "2300 N Lincoln Boulevard",
            line_2: "",
            city: "Oklahoma City",
            state: "OK",
            postal_code: "73105",
            country: "US",
        },
        OR: {
            name: "Oregon State Capitol",
            line_1: "900 Court Street NE",
            line_2: "",
            city: "Salem",
            state: "OR",
            postal_code: "97301",
            country: "US",
        },
        PA: {
            name: "Pennsylvania State Capitol",
            line_1: "501 N 3rd Street",
            line_2: "",
            city: "Harrisburg",
            state: "PA",
            postal_code: "17120",
            country: "US",
        },
        PR: {
            name: "Puerto Rico State Capitol",
            line_1: "1 Plaza de la Democracia",
            line_2: "",
            city: "San Juan",
            state: "PR",
            postal_code: "00901",
            country: "US",
        },
        RI: {
            name: "Rhode Island State House",
            line_1: "82 Smith Street",
            line_2: "",
            city: "Providence",
            state: "RI",
            postal_code: "02903",
            country: "US",
        },
        SC: {
            name: "South Carolina State House",
            line_1: "1100 Gervais Street",
            line_2: "",
            city: "Columbia",
            state: "SC",
            postal_code: "29201",
            country: "US",
        },
        SD: {
            name: "South Dakota State Capitol",
            line_1: "500 E Capitol Avenue",
            line_2: "",
            city: "Pierre",
            state: "SD",
            postal_code: "57501",
            country: "US",
        },
        TN: {
            name: "Tennessee State Capitol",
            line_1: "600 Dr Martin L King Jr Blvd",
            line_2: "",
            city: "Nashville",
            state: "TN",
            postal_code: "37243",
            country: "US",
        },
        TX: {
            name: "Texas State Capitol",
            line_1: "1100 Congress Avenue",
            line_2: "",
            city: "Austin",
            state: "TX",
            postal_code: "78701",
            country: "US",
        },
        UT: {
            name: "Utah State Capitol",
            line_1: "350 State Street",
            line_2: "",
            city: "Salt Lake City",
            state: "UT",
            postal_code: "84103",
            country: "US",
        },
        VT: {
            name: "Vermont State House",
            line_1: "115 State Street",
            line_2: "",
            city: "Montpelier",
            state: "VT",
            postal_code: "05633",
            country: "US",
        },
        VA: {
            name: "Virginia State Capitol",
            line_1: "1000 Bank Street",
            line_2: "",
            city: "Richmond",
            state: "VA",
            postal_code: "23218",
            country: "US",
        },
        WA: {
            name: "Washington State Capitol",
            line_1: "416 Sid Snyder Avenue SW",
            line_2: "",
            city: "Olympia",
            state: "WA",
            postal_code: "98504",
            country: "US",
        },
        WV: {
            name: "West Virginia State Capitol",
            line_1: "1900 Kanawha Boulevard E",
            line_2: "",
            city: "Charleston",
            state: "WV",
            postal_code: "25305",
            country: "US",
        },
        WI: {
            name: "Wisconsin State Capitol",
            line_1: "2 E Main Street",
            line_2: "",
            city: "Madison",
            state: "WI",
            postal_code: "53703",
            country: "US",
        },
        WY: {
            name: "Wyoming State Capitol",
            line_1: "2001 Capitol Avenue",
            line_2: "",
            city: "Cheyenne",
            state: "WY",
            postal_code: "82001",
            country: "US",
        },
    },
    ch = [
        { label: "None", value: "NONE" },
        { label: "Alberta", value: "AB" },
        { label: "British Columbia", value: "BC" },
        { label: "Manitoba", value: "MB" },
        { label: "New Brunswick", value: "NB" },
        { label: "Newfoundland and Labrador", value: "NL" },
        { label: "Northwest Territories", value: "NT" },
        { label: "Nova Scotia", value: "NS" },
        { label: "Nunavut", value: "NU" },
        { label: "Ontario", value: "ON" },
        { label: "Prince Edward Island", value: "PE" },
        { label: "Quebec", value: "QC" },
        { label: "Saskatchewan", value: "SK" },
        { label: "Yukon", value: "YT" },
    ],
    cp = {
        NONE: null,
        AB: {
            name: "Alberta Legislature Building",
            line_1: "10800 97 Avenue NW",
            line_2: "",
            city: "Edmonton",
            state: "AB",
            postal_code: "T5K 2B6",
            country: "CA",
        },
        BC: {
            name: "British Columbia Parliament Buildings",
            line_1: "501 Belleville Street",
            line_2: "",
            city: "Victoria",
            state: "BC",
            postal_code: "V8V 2L8",
            country: "CA",
        },
        MB: {
            name: "Manitoba Legislative Building",
            line_1: "450 Broadway",
            line_2: "",
            city: "Winnipeg",
            state: "MB",
            postal_code: "R3C 0V8",
            country: "CA",
        },
        NB: {
            name: "New Brunswick Legislative Building",
            line_1: "706 Queen Street",
            line_2: "",
            city: "Fredericton",
            state: "NB",
            postal_code: "E3B 1C5",
            country: "CA",
        },
        NL: {
            name: "Newfoundland and Labrador Confederation Building",
            line_1: "100 Prince Philip Drive",
            line_2: "",
            city: "St. John's",
            state: "NL",
            postal_code: "A1B 4J6",
            country: "CA",
        },
        NT: {
            name: "Northwest Territories Legislative Assembly",
            line_1: "4570 48 Street",
            line_2: "",
            city: "Yellowknife",
            state: "NT",
            postal_code: "X1A 1A2",
            country: "CA",
        },
        NS: {
            name: "Nova Scotia Province House",
            line_1: "1726 Hollis Street",
            line_2: "",
            city: "Halifax",
            state: "NS",
            postal_code: "B3J 2Y3",
            country: "CA",
        },
        NU: {
            name: "Nunavut Legislative Assembly",
            line_1: "926 Federal Road",
            line_2: "",
            city: "Iqaluit",
            state: "NU",
            postal_code: "X0A 0H0",
            country: "CA",
        },
        ON: {
            name: "Ontario Legislative Building",
            line_1: "111 Wellesley Street West",
            line_2: "",
            city: "Toronto",
            state: "ON",
            postal_code: "M7A 1A2",
            country: "CA",
        },
        PE: {
            name: "Prince Edward Island Province House",
            line_1: "165 Richmond Street",
            line_2: "",
            city: "Charlottetown",
            state: "PE",
            postal_code: "C1A 1J1",
            country: "CA",
        },
        QC: {
            name: "Quebec Parliament Building",
            line_1: "1045 Rue des Parlementaires",
            line_2: "",
            city: "Quebec City",
            state: "QC",
            postal_code: "G1A 1A3",
            country: "CA",
        },
        SK: {
            name: "Saskatchewan Legislative Building",
            line_1: "2405 Legislative Drive",
            line_2: "",
            city: "Regina",
            state: "SK",
            postal_code: "S4S 0B3",
            country: "CA",
        },
        YT: {
            name: "Yukon Legislative Assembly",
            line_1: "2071 2nd Avenue",
            line_2: "",
            city: "Whitehorse",
            state: "YT",
            postal_code: "Y1A 1B3",
            country: "CA",
        },
    };
function cg() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        [s, d] = o.useState(null),
        [c, u] = o.useState(null),
        [m, h] = o.useState("pm_card_us"),
        [v, b] = o.useState(!1),
        f = Object.values((0, tD.bG)([cr.A], () => cr.A.paymentSources)),
        y = cc[e];
    return (
        o.useEffect(() => {
            (0, dq.$o)();
        }, []),
        (0, r.jsx)(x.Ip, {
            className: t0.nd,
            children: (0, r.jsxs)("div", {
                className: iU.l$,
                children: [
                    (0, r.jsxs)(g.E, {
                        style: { marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: iU.Uo,
                        children: [
                            (0, r.jsx)(aS.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: cd
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: co.bI,
                                                src: (0, cl.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: function (e) {
                                    (t(e), h(cc[e][0].value), b(1 === cc[e].length));
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: cu.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (n(e), i(cm[e] ?? null));
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: s,
                                    options: ch.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (d(e), u(cp[e] ?? null));
                                    },
                                }),
                            (0, r.jsx)(j.l, {
                                selectionMode: "single",
                                label: "Card Token",
                                hideLabel: !0,
                                value: m,
                                options: y.map((e) => {
                                    let { value: t, label: a } = e;
                                    return { id: t, value: t, label: a };
                                }),
                                onSelectionChange: h,
                                disabled: v,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Create Stripe Credit Card",
                                onClick: async function () {
                                    let t = m;
                                    ("" === t && (t = "pm_card_us"),
                                        await l9.Bo.post({
                                            url: "/debug/payment-source",
                                            body: { token: t, address: "US" === e ? l : "CA" === e ? c : null },
                                            rejectWithError: !1,
                                        }),
                                        await (0, dq.$o)());
                                },
                            }),
                            f.length > 0 &&
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Delete All Payment Sources",
                                    onClick: async function () {
                                        (await l9.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }),
                                            await (0, dq.$o)());
                                    },
                                }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: async function () {
                                    (await l9.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }),
                                        window.location.reload());
                                },
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(cC, {}),
                    (0, r.jsx)(g.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(cf, {}),
                    (0, r.jsx)(g.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: "Existing Payment Sources",
                    }),
                    f.map((e) => (0, r.jsx)(cS, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let cx = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    cv = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    cb = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Express checkout disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Express checkout enabled: Review Footer" },
        { id: "2", value: "2", label: "Treatment (2) \u2014 Express checkout enabled: Payment Select" },
    ];
function cj(e) {
    let { experimentName: t, options: a = cx } = e,
        n = (0, tD.bG)([cs.A, nQ.default], () => {
            let e = nQ.default.getId(),
                a = cs.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, ci.t$)(ci.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(j.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function cf() {
    return (0, r.jsxs)(tJ.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(cj, { experimentName: ca.A.definition.name, options: cv }),
            (0, r.jsx)(cj, { experimentName: cn.I.definition.name, options: cb }),
        ],
    });
}
let cy = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    cE = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function cC() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, i] = o.useState(null),
        [s, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(null),
        g = parseInt(a, 10),
        x = !isNaN(g) && g >= 500 && g <= 5e3;
    return (0, r.jsxs)(tJ.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(tJ.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(j.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: cy,
                        onSelectionChange: t,
                    }),
                    (0, r.jsx)(f.k, {
                        label: "Amount (500\u20135000)",
                        type: "number",
                        value: a,
                        onChange: n,
                        min: 500,
                        max: 5e3,
                    }),
                    (0, r.jsx)(p.$, {
                        variant: "primary",
                        size: "sm",
                        text: "Generate Gift Card PIN",
                        onClick: async function () {
                            if (x) {
                                (d(!0), h(null), i(null), u(!1));
                                try {
                                    let t = await l9.Bo.post({
                                        url: "/billing/gift-card/create-on-demand-pin",
                                        body: { country: e, currency: cE[e], amount: g },
                                        rejectWithError: !0,
                                    });
                                    i(t.body.pin);
                                } catch (e) {
                                    h(e instanceof Error ? e.message : "Failed to generate PIN");
                                } finally {
                                    d(!1);
                                }
                            }
                        },
                        loading: s,
                        disabled: !x,
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(tJ.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(f.k, { label: "Generated PIN", value: l, onChange: () => {}, readOnly: !0 }),
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: c ? "Copied!" : "Copy",
                            onClick: () => {
                                (navigator.clipboard.writeText(l), u(!0), setTimeout(() => u(!1), 2e3));
                            },
                        }),
                    ],
                }),
            null != m && (0, r.jsx)(Z.w, { type: "critical", message: m, role: "alert" }),
        ],
    });
}
function cS(e) {
    let { paymentSource: t } = e;
    return (0, r.jsxs)("div", {
        className: iU.bd,
        children: [
            (0, r.jsx)(ct.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: co.bI, src: (0, cl.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "(Default)" })
                : (0, r.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: "Set as Default",
                      onClick: async function () {
                          (await l9.Bo.patch({
                              url: ep.Rsh.BILLING_PAYMENT_SOURCE(t.id),
                              body: { default: !0 },
                              rejectWithError: !1,
                          }),
                              await (0, dq.$o)());
                      },
                  }),
        ],
    });
}
var c_ = a(706712),
    cN = a(76573),
    cA = a(543862),
    ck = a(948325),
    cD = a(55373);
function cI() {
    return (0, r.jsxs)(x.Ip, { className: cD.kL, children: [(0, r.jsx)(cT, {}), (0, r.jsx)(cO, {})] });
}
function cT() {
    let e = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()?.perks ?? null),
        t = o.useMemo(
            () =>
                null == e
                    ? []
                    : Object.values(cN.bb)
                          .filter((e) => "number" == typeof e && e !== cN.bb.UNSPECIFIED)
                          .filter((t) => (0, ck.Nh)(e, t))
                          .map((t) => ({
                              id: t,
                              name: cN.bb[t],
                              sources: (0, ck.kQ)(e, t)?.map((e) => cN.g$[e]) ?? [],
                          })),
            [e],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ee.D, { className: cD.wx, variant: "heading-lg/semibold", children: "Active Perks" }),
            (0, r.jsx)(cR, { perks: e, activePerks: t }),
            (0, r.jsx)(ee.D, { className: cD.m_, variant: "heading-sm/semibold", children: "Debug" }),
            (0, r.jsxs)("p", {
                children: [
                    (0, r.jsx)("strong", { children: "Rules version:" }),
                    " ",
                    null != e ? e.rulesVersion : "n/a",
                ],
            }),
            (0, r.jsxs)("p", {
                children: [
                    (0, r.jsx)("strong", { children: "Active perks bitmask:" }),
                    " ",
                    (0, r.jsx)("code", { children: null != e ? JSON.stringify(e.activePerksBitmask) : "n/a" }),
                ],
            }),
        ],
    });
}
function cR(e) {
    let { perks: t, activePerks: a } = e;
    return null == t
        ? (0, r.jsx)("p", { className: cD.Qb, children: "No perks data available on the current user." })
        : 0 === a.length
          ? (0, r.jsx)("p", { className: cD.Qb, children: "No active perks." })
          : (0, r.jsxs)("table", {
                className: cD.Q,
                children: [
                    (0, r.jsx)("thead", {
                        children: (0, r.jsxs)("tr", {
                            children: [
                                (0, r.jsx)("th", { className: cD.Ts, children: "Perk" }),
                                (0, r.jsx)("th", { className: cD.Ts, children: "Sources" }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("tbody", {
                        children: a.map((e) =>
                            (0, r.jsxs)(
                                "tr",
                                {
                                    children: [
                                        (0, r.jsxs)("td", {
                                            className: cD.iH,
                                            children: [(0, r.jsx)("code", { children: e.name }), " (", e.id, ")"],
                                        }),
                                        (0, r.jsx)("td", {
                                            className: cD.iH,
                                            children: e.sources.length > 0 ? e.sources.join(", ") : "\u2014",
                                        }),
                                    ],
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            });
}
function cO() {
    let e = o.useCallback(() => {
            (0, aP._N)(aM.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, cA.FZ)(aM.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ee.D, { className: cD.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: cD.PW,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var cw = a(136722),
    cM = a(576705),
    cP = a(558393),
    cL = a(290261),
    cU = a(643566);
function cG(e) {
    let { title: t, can: a } = e,
        n = a ? ox.CheckmarkLargeIcon : el.P,
        l = (0, r.jsx)("div", {
            className: Q()(cU.v_, a ? cU.uU : cU.Ss),
            children: (0, r.jsx)(n, { className: cU.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: cU.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: cU.rv,
                children: (0, r.jsx)(g.E, { variant: "body-md/normal", children: t }),
            }),
        ],
    });
}
function cF() {
    let e = (0, d.bG)([r8.Ay], () => r8.Ay.getChannelId()),
        t = (0, d.bG)([nS.A], () => nS.A.getGuildId()),
        a = (0, d.bG)([aK.A], () => aK.A.getChannel(e)),
        n = (0, d.bG)([nC.A], () => nC.A.getGuild(t)),
        l = (0, d.bG)([cM.A], () => cM.A.computePermissions(a)),
        i = (0, d.bG)([cM.A], () => cM.A.computePermissions(n)),
        s = (0, az.Ay)(a, !0),
        o = null != a ? (0, cL.mW)(a, !1) : null,
        c = null != n ? cP.A.getGuildPermissionSpecMap(n) : null,
        u = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cw.zy(l, a);
            return (0, r.jsx)(cG, { title: t, can: n }, t);
        }),
        m = Object.values(c ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cw.zy(i, a);
            return (0, r.jsx)(cG, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: Q()(t0.nd, cU.nd),
        children: (0, r.jsxs)("div", {
            className: cU.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: cU.uW,
                    children: [
                        (0, r.jsx)(ee.D, {
                            variant: "heading-sm/semibold",
                            children: null != s ? `Permissions in ${s}` : "No channel selected",
                        }),
                        u,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: cU.uW,
                    children: [
                        (0, r.jsx)(ee.D, {
                            variant: "heading-sm/semibold",
                            children: null != n ? `Permissions in ${n.name}` : "No guild selected",
                        }),
                        m,
                    ],
                }),
            ],
        }),
    });
}
var cB = a(873298),
    c$ = a(775602),
    cV = a(413599),
    cW = a(253932),
    cH = a(631670),
    cz = a(817281),
    cK = a(955572),
    cY = a(189916),
    cq = a(435911),
    cJ = a(385803),
    cQ = a(381941);
let cX = [ep.NJ8.ASH, ep.NJ8.LIGHT, ep.NJ8.DARK, ep.NJ8.ONYX],
    cZ = [cB.NS.COMPACT, cB.NS.COZY, cB.NS.DEFAULT];
function c0(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function c1() {
    let e,
        t =
            ((e = ec.default.getCurrentUser()),
            oE.Ay.canUseClientThemes(e)
                ? Object.keys(cJ.ag)
                      .map((e) => Number(e))
                      .filter((e) => !(0, cY.oB)(e))
                : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = c0(a);
            if (null != n) {
                let t = cJ.ag[n];
                e = t?.theme ?? ep.NJ8.DARK;
            } else e = c0([ep.NJ8.ASH, ep.NJ8.DARK, ep.NJ8.ONYX]);
            await cz.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                aP.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = c0(cX);
            await cz.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                aP.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function c2() {
    let e = tR.A.purchases,
        t = (0, eG.x9)(e),
        a = (0, eG.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            (n && (e.avatarDecoration = c0([...t, null])), l && (e.nameplate = c0([...a, null])), (0, tv.p)(e));
            let i = tb.A.getPendingChanges(),
                s = (0, cq.Sk)(i);
            await (0, cH._L)(s).finally(cH.pZ);
        } catch (e) {}
}
function c3() {
    try {
        let e = c0(ep.hH7.FONT_SIZES);
        (0, cK.XS)(e);
        let t = c0(cQ.qh);
        (0, cK.AC)(t);
        let a = c0(cZ);
        cW.Xi.updateSetting(a);
    } catch (e) {}
}
function c6() {
    let { purchases: e } = (0, ty.b5)(),
        t = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        a = cW.eh.useSetting(),
        n = (0, d.bG)([cV.A], () => cV.A.theme),
        l = a.backgroundGradientPresetId,
        i = (0, eG.x9)(e),
        s = (0, eG.$W)(e),
        c = t?.avatarDecoration?.skuId,
        u = t?.collectibles?.nameplate?.skuId,
        m = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        h = null != u ? (s.find((e) => e.skuId === u) ?? null) : null,
        x = null != m ? e.get(m.skuId)?.name : null,
        v = null != h ? e.get(h.skuId)?.name : null,
        b = (0, d.bG)([c$.Ay], () => c$.Ay.fontSize),
        j = (0, d.bG)([c$.Ay], () => c$.Ay.messageGroupSpacing),
        f = cW.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = ec.default.getCurrentUser(),
                t = cW.eh.getSetting(),
                a = tR.A.purchases,
                n = (0, eG.x9)(a),
                l = (0, eG.$W)(a),
                i = cV.A.theme,
                s = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = c$.Ay.fontSize,
                m = c$.Ay.messageGroupSpacing,
                h = cW.Xi.getSetting();
            return () => {
                try {
                    (cz.u_(
                        { theme: i, backgroundGradientPresetId: s ?? void 0, customUserThemeSettings: void 0 },
                        aP.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, tv.p)({ avatarDecoration: d, nameplate: c }));
                    let e = tb.A.getPendingChanges(),
                        t = (0, cq.Sk)(e);
                    ((0, cH._L)(t).finally(cH.pZ), (0, cK.XS)(u), (0, cK.AC)(m), cW.Xi.updateSetting(h));
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lq.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ee.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(g.E, {
                            variant: "body-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: c1 }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: c2,
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: c3,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Theme: ", n] }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-md/normal",
                            children: ["Client Theme ID:", " ", null != l ? cJ.ag[l]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Avatar Decoration: ", x ?? "None"] }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Nameplate: ", v ?? "None"] }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Font Size: ", b, "px"] }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Message Spacing: ", j] }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-md/normal",
                            children: [
                                "UI Density: ",
                                f,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case cB.NS.COMPACT:
                                            return "Compact";
                                        case cB.NS.COZY:
                                            return "Cozy";
                                        case cB.NS.DEFAULT:
                                            return "Default";
                                        case cB.NS.RESPONSIVE:
                                            return "Responsive";
                                        default:
                                            return "Unknown";
                                    }
                                })(f),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var c5 = a(350835),
    c8 = a(155718),
    c4 = a(365185),
    c9 = a(611656),
    c7 = a(980822),
    ue = a(534465),
    ut = a(290863),
    ua = a(620678),
    un = a(705751),
    ul = a(747681);
let ui = { positive: "text-feedback-positive", critical: "text-feedback-critical", muted: "text-muted" };
function us(e) {
    return null == e ? "Not set" : (un.S7[e] ?? `unknown (${e})`);
}
function ur(e) {
    return (0, d.cf)(
        [tQ.A],
        () => ({
            isHydrated: null != e && tQ.A.isHydrated(e),
            isFetching: null != e && tQ.A.isFetchingApplication(e),
            didFail: null != e && tQ.A.didFetchingApplicationFail(e),
        }),
        [e],
    );
}
function uo(e) {
    let { id: t } = e;
    return (0, r.jsx)(g.E, { tag: "span", variant: "mono-md/normal", selectable: !0, children: t });
}
function ud(e) {
    let { label: t, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/medium", color: "text-muted", children: t }),
            (0, r.jsx)(g.E, { variant: "body-sm/normal", className: ul.Uq, children: a }),
        ],
    });
}
function uc(e) {
    var t;
    let { link: a } = e,
        n = a.application;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(uo, { id: a.id }),
            " \xb7 ",
            ((t = a.type), c8.Mh[t] ?? `unknown (${t})`),
            " \xb7",
            " ",
            null != n ? `${n.name} (${us(n.type)})` : "application missing, link is skipped",
        ],
    });
}
function uu(e) {
    var t;
    let { user: a, activity: n } = e,
        [l, i] = o.useState(!1),
        s = (0, tX.h)(n.application_id),
        d = ur(n.application_id),
        c = (0, c4.A)({ activity: n, user: a }),
        u = (0, ue.UE)({ user: a, activity: n, entry: c }),
        m = (0, tX.h)(u.applicationId),
        h = ur(u.applicationId),
        { gameId: x, gameRecord: v, isLoading: b } = (0, c7.A)({ applicationId: u.applicationId }),
        j = (0, t3.A)({
            location: "DevToolsPresenceResolution",
            source: t2.GameProfileSources.DevTools,
            trackEntryPointImpression: !1,
            ...u,
        }),
        f = (function (e) {
            let {
                activity: t,
                applicationId: a,
                application: n,
                didFail: l,
                isLoading: i,
                gameId: s,
                gameRecord: r,
                canOpen: o,
            } = e;
            return o
                ? { tone: "positive", text: `Opens the ${r?.name ?? "game"} profile.` }
                : null == a
                  ? null == t.application_id
                      ? { tone: "critical", text: "No application_id, so this is a name-only presence." }
                      : { tone: "muted", text: "Only PLAYING activities link to a game profile." }
                  : l
                    ? { tone: "critical", text: "Fetching the application failed." }
                    : i
                      ? { tone: "muted", text: "Resolving\u2026" }
                      : null == s
                        ? 0 === (n?.linkedGames ?? []).length
                            ? { tone: "critical", text: "The application has no linked games." }
                            : {
                                  tone: "critical",
                                  text: "The application has linked games, but none comes back as a GAME application.",
                              }
                        : null == r
                          ? { tone: "critical", text: `Linked game ${s} was not found.` }
                          : (0, c9.TC)(r)
                            ? { tone: "critical", text: `${r.name} is GAME_DISABLED.` }
                            : { tone: "critical", text: "The game profile cannot open." };
        })({
            activity: n,
            applicationId: u.applicationId,
            application: m,
            didFail: h.didFail,
            isLoading: b,
            gameId: x,
            gameRecord: v,
            canOpen: null != j,
        }),
        y = s?.linkedGames ?? [];
    return (0, r.jsxs)(tJ.B, {
        gap: 12,
        fullWidth: !1,
        className: ul.Eb,
        children: [
            (0, r.jsxs)(tJ.B, {
                gap: 4,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: n.name }),
                    (0, r.jsxs)(g.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: [
                            null == (t = n.type) ? "Not set" : (c5.$[t] ?? `unknown (${t})`),
                            null != n.platform ? ` \xb7 ${n.platform}` : "",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(g.E, { variant: "body-sm/semibold", color: ui[f.tone], children: f.text }),
            (0, r.jsxs)("div", {
                className: ul.zH,
                children: [
                    (0, r.jsx)(ud, {
                        label: "Application",
                        children: null != n.application_id ? (0, r.jsx)(uo, { id: n.application_id }) : "None",
                    }),
                    null != n.application_id &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(ud, { label: "Name", children: s?.name ?? "\u2014" }),
                                (0, r.jsx)(ud, { label: "Type", children: us(s?.type) }),
                                (0, r.jsx)(ud, {
                                    label: "Record",
                                    children: d.didFail
                                        ? "Fetch failed"
                                        : null == s
                                          ? d.isFetching
                                              ? "Fetching\u2026"
                                              : "Not loaded"
                                          : d.isHydrated
                                            ? "Full"
                                            : "Partial, linked games may be missing",
                                }),
                                (0, r.jsx)(ud, {
                                    label: "Linked games",
                                    children: y.length > 0 ? y.map((e) => (0, r.jsx)(uc, { link: e }, e.id)) : "None",
                                }),
                            ],
                        }),
                    (0, r.jsx)(ud, {
                        label: "Profile uses",
                        children:
                            null == u.applicationId
                                ? "Nothing"
                                : null == c
                                  ? "The activity's application"
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            "Content inventory entry ",
                                            (0, r.jsx)(uo, { id: c.id }),
                                            ", application ",
                                            (0, r.jsx)(uo, { id: u.applicationId }),
                                        ],
                                    }),
                    }),
                    (0, r.jsx)(ud, {
                        label: "Resolves to",
                        children:
                            null != x
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [v?.name ?? "Unfetched game", " ", (0, r.jsx)(uo, { id: x })],
                                  })
                                : "Nothing",
                    }),
                ],
            }),
            (0, r.jsxs)(tJ.B, {
                direction: "horizontal",
                gap: 16,
                align: "center",
                wrap: !0,
                children: [
                    (0, r.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: "Open Game Profile",
                        disabled: null == j,
                        onClick: j ?? void 0,
                    }),
                    (0, r.jsx)(l2.Q, {
                        variant: "secondary",
                        textVariant: "body-sm/medium",
                        text: l ? "Hide raw activity" : "Show raw activity",
                        onClick: () => i(!l),
                    }),
                ],
            }),
            l &&
                (0, r.jsx)("div", {
                    className: ul.aY,
                    children: (0, r.jsx)(g.E, {
                        variant: "mono-md/normal",
                        selectable: !0,
                        children: JSON.stringify(n, null, 2),
                    }),
                }),
        ],
    });
}
function um(e) {
    let { userId: t } = e,
        a = (0, d.bG)([ec.default], () => ec.default.getUser(t), [t]),
        n = (0, d.yK)([ut.A], () => ut.A.getActivities(t), [t]);
    return null == a
        ? (0, r.jsxs)(g.E, {
              variant: "body-sm/normal",
              color: "text-feedback-critical",
              children: ["User ", t, " is not loaded. Open their profile or a server you share with them first."],
          })
        : 0 === n.length
          ? (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: [
                    "No activities in PresenceStore for ",
                    a.username,
                    ". Presence only loads for friends and members of servers you have opened.",
                ],
            })
          : (0, r.jsxs)(tJ.B, {
                gap: 12,
                children: [
                    (0, r.jsxs)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [a.username, " \xb7 ", 1 === n.length ? "1 activity" : `${n.length} activities`],
                    }),
                    n.map((e, t) => (0, r.jsx)(uu, { user: a, activity: e }, `${t}:${e.type}:${e.name}`)),
                ],
            });
}
function uh() {
    let e = (0, ua.Qy)((e) => e.input),
        t = (0, ua.Qy)((e) => e.setInput),
        a = e.trim();
    return (0, r.jsx)("div", {
        className: Q()(t0.nd, ul.kL),
        children: (0, r.jsxs)(tJ.B, {
            gap: 24,
            padding: 12,
            fullWidth: !1,
            className: ul.rf,
            children: [
                (0, r.jsxs)(tJ.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Presence Resolution" }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "See which application each activity comes from, its linked games, and whether the profile card can open a game profile. Open this from Inspect Presence in an activity's menu, or paste a user ID.",
                        }),
                    ],
                }),
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "User ID" }),
                        (0, r.jsx)(f.k, {
                            label: "User ID",
                            hideLabel: !0,
                            placeholder: "Paste a user ID",
                            value: e,
                            onChange: t,
                        }),
                    ],
                }),
                a.length > 0 && (0, r.jsx)(um, { userId: a }),
            ],
        }),
    });
}
var up = a(656513),
    ug = a(885574),
    ux = a(508274),
    uv = a(837529);
let ub = [5793266, 2303016],
    uj = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function uf() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, uv.Zt)(),
        l = (0, eb.Ay)(),
        i = (0, d.bG)([aL.A], () => aL.A.settings.appearance?.clientThemeSettings),
        s =
            i?.customUserThemeSettings != null &&
            null != i.customUserThemeSettings.colors &&
            i.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, cz.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)(tJ.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(up.N, {
                            collapsibleContent: (0, r.jsxs)(tJ.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(g.E, {
                                        variant: "body-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-md/normal",
                                        color: "text-muted",
                                        children:
                                            "The intended use case for this tool is to allow you to preview both Nitro and non-Nitro profile component styles across a variety of user profiles regardless of their Nitro status or chosen theme colors.",
                                    }),
                                ],
                            }),
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, r.jsx)(p.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "What is this?",
                                    icon: ug.CircleInformationIcon,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, r.jsx)(b.c, {}),
                    ],
                }),
                null == e
                    ? (0, r.jsx)(p.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: ub }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(ng.e, {
                                  children: (0, r.jsx)(p.$, {
                                      variant: "critical-primary",
                                      text: "Clear Theme Override",
                                      onClick: function () {
                                          (o(), t(null));
                                      },
                                  }),
                              }),
                              (0, r.jsx)(j.l, {
                                  label: "Profile Type",
                                  selectionMode: "single",
                                  value: e.mode,
                                  options: uj,
                                  onSelectionChange: (a) => t({ ...e, mode: a }),
                              }),
                              "nitro" === e.mode
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(m.d, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (a) => t({ ...e, disableBanner: a }),
                                            }),
                                            (0, r.jsx)(p.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: ub }),
                                            }),
                                            (0, r.jsxs)(tJ.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(ux.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(tJ.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(ux.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[1] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [e.themeColors?.[0] ?? null, a] }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    })
                                  : (0, r.jsxs)(tJ.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(j.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(ep.NJ8).map((e) => ({
                                                    id: e,
                                                    label: e,
                                                    value: e,
                                                })),
                                                onSelectionChange: (a) => t({ ...e, themeType: a }),
                                                clearable: !0,
                                                disabled: s,
                                            }),
                                            s &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be saved and can be restored manually, or automatically when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(p.$, {
                                                            variant: "critical-secondary",
                                                            size: "sm",
                                                            text: "Use System Theme",
                                                            onClick: function () {
                                                                (i?.customUserThemeSettings != null &&
                                                                    n({
                                                                        theme: l,
                                                                        customUserThemeSettings:
                                                                            i.customUserThemeSettings,
                                                                    }),
                                                                    (0, cz.u_)({ theme: "system" }));
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be automatically restored when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(p.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Restore Custom Theme",
                                                            onClick: o,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                          ],
                      }),
            ],
        }),
    });
}
var uy = a(141931),
    uE = a(306173),
    uC = a(142617),
    uS = a(719718),
    u_ = a(925433),
    uN = a(225123),
    uA = a(237984),
    uk = a(43203),
    uD = a(349435),
    uI = a(674272),
    uT = a(466034),
    uR = a(10094),
    uO = a(683760);
function uw() {
    let e = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        t = (0, d.bG)([uO.A], () => {
            let e = uO.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, d.bG)([uO.A], () => uO.A.getPremiumTypeOverride());
    return (0, r.jsxs)(tJ.B, {
        gap: 16,
        children: [
            (0, r.jsx)(j.l, {
                label: "Override Client-Side Premium Type",
                options: tL.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, uR.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(l2.Q, {
                onClick: () => {
                    (0, uR.O)(void 0, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(sT.J, {
                label: "Override Client-Side Account Created At Date",
                value: nU()(t),
                onSelect: (e) => {
                    var t;
                    return ((t = e.toISOString()), void (0, uR.Y)(new Date(t)));
                },
            }),
            (0, r.jsx)(l2.Q, { onClick: () => (0, uR.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
}
var uM = a(253400),
    uP = a(327337),
    uL = a(431804),
    uU = a(377722),
    uG = a(221851);
function uF() {
    throw Error("Send help");
}
function uB() {
    let e = cW.j0.useSetting(),
        t = (0, uC.FX)("DevToolsQuickActions"),
        n = (0, d.bG)([uS.A], () => uS.A.isFetching),
        [l, i] = o.useState(!1);
    return l
        ? {}
        : (0, r.jsxs)(x.Ip, {
              children: [
                  (0, r.jsx)("div", { className: Q()(uU.N, uG.SX), children: (0, r.jsx)(uw, {}) }),
                  (0, r.jsx)("div", {
                      className: Q()(uU.N, uG.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, uI.A)({ source: uL.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: Q()(uU.N, uG.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = r8.Ay.getChannelId() ?? "21154681615024128"),
                                  void (0, eJ.mM)(
                                      async () => {
                                          let { default: t } = await Promise.all([
                                              a.e(456510),
                                              a.e(770940),
                                              a.e(302033),
                                              a.e(882830),
                                              a.e(120884),
                                          ]).then(a.bind(a, 556127));
                                          return (a) =>
                                              (0, r.jsx)(t, {
                                                  otherUserId: "9876543210",
                                                  channelId: e,
                                                  warningId: "test-warning-id",
                                                  warningType: uD._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: uP.V },
                                  )
                              );
                          },
                      }),
                  }),
                  t &&
                      (0, r.jsx)("div", {
                          className: Q()(uU.N, uG.QB),
                          children: (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Launch Checkpoint",
                              loading: n,
                              onClick: () => (0, u_.D)("devtools"),
                          }),
                      }),
                  (0, r.jsx)("div", {
                      className: Q()(uU.N, uG.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, eJ.mM)(
                                  async () => {
                                      let { default: e } = await a.e(842213).then(a.bind(a, 881092));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: Q()(uU.N, uG.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, uk.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: Q()(uU.N, uG.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: uE.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: Q()(uU.N, uG.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = uN.A.getSocket();
                              E.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: Q()(uU.N, uG.QB),
                      children: (0, r.jsx)(m.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cW.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: Q()(uU.N, uG.QB),
                      children: [
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, uA.o)(),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  (uN.A.getSocket().close(), uN.A.getSocket().connect());
                              },
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  E.h.dispatch({
                                      type: "CLEAR_CACHES",
                                      reason: "Requested by user",
                                      preventWritingCachesAgainThisSession: !0,
                                      resetSocket: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, uT.sy)(!0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: function () {
                                  l9.Bo.post({ url: ep.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: Q()(uU.N, uG.QB),
                      children: [
                          (0, r.jsx)(j.l, {
                              label: "Trigger native crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  { label: "Native libdiscord crash", value: void 0, id: "libdiscord" },
                                  { label: "Abort()", value: 0, id: "abort" },
                                  { label: "SIGSEGV()", value: 1, id: "sigsegv" },
                                  { label: "EXCEPTION_ACCESS_VIOLATION", value: 2, id: "exception_access_violation" },
                                  { label: "RaiseFailFastException", value: 3, id: "raise_fail_fast_exception" },
                                  { label: "Out of Memory", value: 4, id: "out_of_memory" },
                                  { label: "Modified Code", value: 5, id: "modified_code" },
                              ],
                              onSelectionChange: (e) => null != e && uM.Ay.crash(e),
                          }),
                          (0, r.jsx)(j.l, {
                              label: "Trigger JS crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  { label: "Native JS crash", value: void 0, id: "native_js_crash" },
                                  {
                                      label: "Delayed exception in renderer process",
                                      value: uy.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: uy.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: uy.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void uM.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => i(!0),
                          }),
                          (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: uF }),
                      ],
                  }),
              ],
          });
}
var u$ = a(457112),
    uV = a(653887),
    uW = a(799226);
function uH() {
    let e = Object.keys(u$).map((e) => (0, r.jsx)(uY, { riveName: e }, e));
    return (0, r.jsx)(x.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(tJ.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(g.E, {
                    variant: "body-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(uz, {}),
                (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(g.E, {
                    variant: "body-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function uz() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        [s, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, p] = o.useState(400),
        g = o.useCallback(() => {
            setTimeout(() => {
                (i(c.current?.getProperties() ?? {}), d(c.current?.getArtboards() ?? []), n({}));
            }, 1e3);
        }, []),
        x = o.useCallback(
            (e, t) => {
                null != a && n((a) => ({ ...a, [e]: { type: l?.[e]?.type, value: t } }));
            },
            [l, a],
        ),
        v = o.useCallback((e) => {
            (i(null), n(null), t(e));
        }, []);
    return (0, r.jsxs)(tJ.B, {
        gap: 16,
        children: [
            (0, r.jsx)(uY, { riveName: "Rive inspector", onRiveLoad: v }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(uV._, { src: e, ref: c, onLoad: g, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(tu.y, {}) : null,
            null != a &&
                (0, r.jsxs)(tJ.B, {
                    children: [
                        (0, r.jsxs)(tJ.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Dimensions" }),
                                (0, r.jsx)(f.k, {
                                    type: "number",
                                    label: "width",
                                    value: u.toString(),
                                    onChange: (e) => m(parseInt(e)),
                                }),
                                (0, r.jsx)(f.k, {
                                    type: "number",
                                    label: "height",
                                    value: h.toString(),
                                    onChange: (e) => p(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(tJ.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        uK,
                                        {
                                            property: e,
                                            type: l?.[e]?.type,
                                            value: a?.[e]?.value ?? l?.[e]?.value,
                                            onChange: (t) => x(e, t),
                                            artboards: s,
                                            values: l?.[e]?.values,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function uK(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: i, values: s } = e;
    switch (a) {
        case "string":
            return (0, r.jsx)(f.k, { label: t, value: n, onChange: (e) => l(e) });
        case "number":
            return (0, r.jsx)(f.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) });
        case "boolean":
            return (0, r.jsx)(m.d, { label: t, checked: n, onChange: (e) => l(e) });
        case "trigger":
            return (0, r.jsx)(p.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) });
        case "image":
            return (0, r.jsx)(f.k, { label: t, value: n, onChange: (e) => l(e) });
        case "color":
            return (0, r.jsx)(aS.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select a color...",
                options: Object.entries(eQ.A.colors).map((e) => {
                    let [t, a] = e;
                    return { label: t, value: a, id: t };
                }),
            });
        case "artboard":
            return (0, r.jsx)(aS.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select an artboard...",
                options: i.map((e) => ({ label: e, value: e, id: e })),
            });
        case "enum":
            return (0, r.jsx)(aS.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select a value...",
                options: (s ?? []).map((e) => ({ label: e, value: e, id: e })),
            });
        default:
            return null;
    }
}
function uY(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = u$[t]?.riveSrc,
        l = null == n,
        i = o.useRef(null),
        s = (0, uW.Gy)(n);
    return (0, r.jsxs)(
        tJ.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(tJ.B, {
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    children: [
                        (0, r.jsx)("input", {
                            type: "file",
                            accept: ".riv",
                            onChange: function (e) {
                                let t = e.target.files?.[0];
                                if (null == t) return;
                                let l = new FileReader();
                                ((l.onload = (e) => {
                                    let t = e.target?.result;
                                    (null != n && (0, uW.DS)(n, t), a?.(t));
                                }),
                                    l.readAsArrayBuffer(t));
                            },
                            ref: i,
                        }),
                        (0, r.jsx)(eK.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: function () {
                                (null != i.current && (i.current.value = ""),
                                    null != n && (0, uW.DS)(n, null),
                                    a?.(null));
                            },
                            icon: nV.TrashIcon,
                            variant: "critical-primary",
                            size: "sm",
                            disabled: null == s && !l,
                        }),
                    ],
                }),
            ],
        },
        t,
    );
}
var uq = a(926919),
    uJ = a(513521),
    uQ = a(111162);
function uX() {
    let e = (0, d.bG)([uQ.default], () => uQ.default.routingKeyTags);
    return (0, r.jsx)(lR.Ch, {
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-16)" },
            children: (0, r.jsxs)(u.n, {
                label: "Routing Key",
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: "text-muted",
                        children:
                            "A routing key is an opaque set of strings added to outbound network requests, which may be used for debugging and testing of the network path.",
                    }),
                    (0, r.jsxs)(tJ.B, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(ee.D, { variant: "heading-sm/medium", children: "Overrides" }),
                            (0, r.jsx)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: "Manually configure the routing key values",
                            }),
                            (0, r.jsx)(uJ.A, {
                                tagsLabel: "Routing Key Values",
                                placeholder: "Enter new value...",
                                tags: e.map((e) => ({ id: e, label: e })),
                                onAddTag: function (t) {
                                    e.includes(t) || (0, uq.f)([...e, t]);
                                },
                                onRemoveTag: function (t) {
                                    (0, uq.f)(e.filter((e) => !t.has(e)));
                                },
                            }),
                            e.length > 0
                                ? (0, r.jsx)(p.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: "Clear all",
                                      onClick: () => (0, uq.f)([]),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        }),
    });
}
var uZ = a(344292);
function u0(e) {
    let { game: t, meta: a } = e;
    return (0, r.jsxs)("div", {
        className: uZ.nM,
        children: [
            (0, r.jsxs)("div", {
                className: uZ.uV,
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/semibold",
                        className: uZ._k,
                        children: null == t.name || "" === t.name ? "(no name)" : t.name,
                    }),
                    null != a && (0, r.jsx)(g.E, { variant: "body-xs/normal", className: uZ.Bq, children: a }),
                ],
            }),
            (0, r.jsx)(g.E, {
                variant: "body-xs/normal",
                className: uZ.C0,
                children: null == t.exePath || "" === t.exePath ? "(no path)" : t.exePath,
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-xs/normal",
                className: uZ.en,
                children: ["pid ", t.pid, " \xb7 ", t.id ?? "(no id)"],
            }),
        ],
    });
}
function u1(e) {
    let { title: t, count: a, entries: n, renderMeta: l } = e;
    return (0, r.jsxs)(tJ.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(ee.D, { variant: "heading-xs/semibold", children: [t, " (", a, ")"] }),
            0 === n.length
                ? (0, r.jsx)(g.E, { variant: "body-sm/normal", className: uZ.Ie, children: "none" })
                : (0, r.jsx)(tJ.B, {
                      gap: 0,
                      children: n.map((e) =>
                          (0, r.jsx)(
                              u0,
                              { game: e.game, meta: l?.(e.outcome) },
                              `${e.game.pid}-${e.game.id ?? e.game.exeName}`,
                          ),
                      ),
                  }),
        ],
    });
}
function u2(e) {
    return "blocked" !== e.kind
        ? null
        : null != e.matchedExe
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    "blocked by exe substring ",
                    (0, r.jsx)("span", { className: uZ.ti, children: e.matchedExe }),
                ],
            })
          : null != e.matchedPattern
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      "blocked by pattern ",
                      (0, r.jsx)("span", { className: uZ.ti, children: e.matchedPattern }),
                  ],
              })
            : "blocked (no reason captured)";
}
function u3(e) {
    return "observed_app" !== e.kind
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  "matched observed app",
                  " ",
                  (0, r.jsxs)("span", {
                      className: uZ.ti,
                      children: [e.appName, e.streamerTool ? " (streamer tool)" : ""],
                  }),
              ],
          });
}
function u6() {
    var e;
    let t = (0, d.bG)([_.Ay], () => _.Ay.getDetectionDebug()),
        a = o.useMemo(() => {
            let e = [],
                a = [],
                n = [],
                l = [];
            if (null != t)
                for (let i of t.entries)
                    switch (i.outcome.kind) {
                        case "passed":
                            e.push(i);
                            break;
                        case "non_game":
                            a.push(i);
                            break;
                        case "observed_app":
                            n.push(i);
                            break;
                        case "blocked":
                            l.push(i);
                    }
            return { passed: e, nonGames: a, observedApps: n, blocked: l };
        }, [t]);
    return (0, r.jsx)("div", {
        className: Q()(t0.nd, uZ.kL),
        children: (0, r.jsxs)(tJ.B, {
            gap: 16,
            padding: 12,
            className: uZ.rf,
            children: [
                (0, r.jsxs)(tJ.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Running Game Detection" }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: [
                                "Inspect what native is reporting, which entries get filtered by the JS pipeline, and what ultimately lands in ",
                                (0, r.jsx)("code", { children: "RunningGameStore" }),
                                ". Updates whenever native reports a change.",
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(tJ.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Status" }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "Last update:" }),
                                " ",
                                null == (e = t?.timestamp) ? "never" : new Date(e).toLocaleTimeString(),
                            ],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "From native:" }),
                                " ",
                                t?.totalFromNative ?? 0,
                            ],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "Passed to RunningGameStore:" }),
                                " ",
                                a.passed.length,
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u1, { title: "Running games", count: a.passed.length, entries: a.passed }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u1, { title: "Filtered: non-game", count: a.nonGames.length, entries: a.nonGames }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u1, {
                    title: "Filtered: matched a hardcoded observed app",
                    count: a.observedApps.length,
                    entries: a.observedApps,
                    renderMeta: u3,
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u1, {
                    title: "Filtered: blocklist",
                    count: a.blocked.length,
                    entries: a.blocked,
                    renderMeta: u2,
                }),
            ],
        }),
    });
}
var u5 = a(290136),
    u8 = a(893007),
    u4 = a(629584),
    u9 = a(600239),
    u7 = a(940622),
    me = a(961895),
    mt = a(343991),
    ma = a(607027);
function mn() {
    (0, eJ.mM)(
        async () => {
            let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
            return (t) =>
                (0, r.jsx)(e, {
                    title: "No image or video files found!",
                    help: "Please drop one or more image or video files.",
                    ...t,
                });
        },
        { modalKey: mt.D },
    );
}
function ml(e) {
    (e.stopPropagation(), e.preventDefault());
}
let mi = (e) => {
    let { className: t, onDrop: a, children: n } = e,
        [l, i] = o.useState(!1),
        s = o.useRef(null),
        d = o.useCallback((e) => {
            (ml(e), i(!0), (0, eJ.Oo)(mt.D));
        }, []),
        c = o.useCallback((e) => {
            ml(e);
            let t = s.current,
                a = e.relatedTarget;
            (null != a && (null == t || t.contains(a))) || i(!1);
        }, []),
        u = o.useCallback(
            async (e) => {
                (ml(e), i(!1));
                let t = e.dataTransfer;
                if (null == t) return void mn();
                let n = await Promise.all(Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry())).then(
                    (e) => e.filter((e) => null != e),
                );
                n.length > 0 ? a(n) : mn();
            },
            [a],
        );
    return (0, r.jsxs)("div", {
        ref: s,
        className: Q()(t, ma.iE),
        onDragEnter: d,
        onDragOver: ml,
        onDragLeave: c,
        onDrop: u,
        children: [
            n,
            l &&
                (0, r.jsx)("div", {
                    className: ma.d2,
                    children: (0, r.jsxs)("div", {
                        className: ma.vW,
                        children: [
                            (0, r.jsx)(me.A, { icons: eN.ir }),
                            (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Upload Shop Assets" }),
                            (0, r.jsxs)("div", {
                                className: ma.GA,
                                children: [
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: "Drop file(s) into this panel to preview Shop assets!",
                                    }),
                                    (0, r.jsxs)(g.E, {
                                        variant: "body-sm/normal",
                                        children: [
                                            "Click",
                                            (0, r.jsx)(u5.CircleQuestionIcon, {
                                                className: ma.q4,
                                                size: "xs",
                                                color: eQ.A.colors.TEXT_DEFAULT,
                                            }),
                                            "above for more instructions.",
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
        ],
    });
};
var ms = a(374380),
    mr = a(597404),
    mo = a(455256);
let md = new Set([
        eB.RN.HERO_BANNER_STATIC,
        eB.RN.HERO_LOGO,
        eB.RN.PDP_BACKGROUND,
        eB.RN.LOGO,
        eB.RN.MOBILE_BANNER,
        eB.RN.MOBILE_BACKGROUND,
    ]),
    mc = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    mu = { max: 5e6, warn: 2e6 },
    mm = { max: 3e6, warn: 1e6 },
    mh = { max: 2e6, warn: 1e6 },
    mp = { max: 1e6, warn: 5e5 },
    mg = { max: 25e4, warn: 5e4 },
    mx = {
        [mo.J.PROFILE_EFFECT]: mu,
        [mo.J.AVATAR_DECORATION]: mm,
        [mo.J.PROFILE_FRAME]: mh,
        [eB.RN.HERO_BANNER_ANIMATED]: mu,
        [eB.RN.HERO_BANNER_RIVE]: mu,
        [eB.RN.CATALOG_BANNER_RIVE]: mu,
        [eB.RN.SHOP_BUTTON_BG_HOVER]: mm,
        [eB.RN.SHOP_BUTTON_BG_HOVER_DARK]: mm,
        [eB.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: mm,
        [eB.RN.SHOP_BUTTON_BG_RESTING]: mm,
        [eB.RN.SHOP_BUTTON_BG_RESTING_DARK]: mm,
        [eB.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: mm,
        [eB.RN.HERO_BANNER_STATIC]: mh,
        [eB.RN.UPSELL_BANNER]: mp,
        [eB.RN.UPSELL_BANNER_POPOUT]: mg,
        [eB.RN.MOBILE_BANNER]: mp,
        [eB.RN.MOBILE_BACKGROUND]: mg,
        [eB.RN.MOBILE_HERO]: mp,
        [eB.RN.PDP_BACKGROUND]: mg,
        [eB.RN.LOGO]: mg,
        [eB.RN.TAB_TOOLTIP]: mg,
    },
    mv = [eB.Kx.COLLECTION],
    mb = [eB.Kx.AVATAR_DECORATIONS, eB.Kx.FRAMES, eB.Kx.NAMEPLATES, eB.Kx.PROFILE_EFFECTS],
    mj = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/;
function mf(e) {
    let { names: t, addError: a } = e,
        n = t.filter((e) => !mj.test(e));
    n.length > 0 && a("File names must be in lowercase snake case", n);
}
function my(e, t, a, n, l) {
    let i = t.size,
        s = i > 1e6 ? `${(i / 1e6).toFixed(2)}MB` : `${(i / 1e3).toFixed(2)}KB`,
        r = `${l ?? t.name} - ${s}`;
    if (i > e.max) {
        let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
        a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
    } else i > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
}
function mE(e, t, a, n) {
    let l = mx[e];
    if (null != l) for (let e of t) e.name.endsWith(".txt") || my(l, e, a, n);
}
function mC(e) {
    let t = eB.aL[e];
    return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
}
let mS = ["png", "jpg"];
async function m_(e, t) {
    if (e.length < 2) return null;
    let a = (
        await Promise.all(
            e.map(async (e) => {
                try {
                    return t(
                        await (async function (e) {
                            let t = URL.createObjectURL(e);
                            try {
                                return await (0, eB.Lv)(t);
                            } finally {
                                URL.revokeObjectURL(t);
                            }
                        })(e),
                    );
                } catch {
                    return null;
                }
            }),
        )
    ).filter((e) => null != e);
    return a.length < 2 || new Set(a).size <= 1 ? null : a;
}
function mN(e) {
    return e.map((e) => `${e}px`).join(", ");
}
var mA = a(275537);
let mk = o.createContext({ setDropHandler: () => {} }),
    mD = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    mI = { id: "none", label: "[none selected]", value: null };
function mT() {
    (0, eJ.kB)(u9.k)
        ? (0, eJ.Oo)(u9.k)
        : (0, eJ.mM)(
              async () => {
                  let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: u9.k, onCloseRequest: () => (0, eJ.Oo)(u9.k) },
          );
}
function mR() {
    (0, eJ.kB)(u9.g)
        ? (0, eJ.Oo)(u9.g)
        : (0, eJ.mM)(
              async () => {
                  let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: u9.g, onCloseRequest: () => (0, eJ.Oo)(u9.g) },
          );
}
function mO() {
    let e = (0, e$.pF)(),
        { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, u7.JE)(),
        n = o.useMemo(() => [mI, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: mA.kO,
              children: [
                  (0, r.jsx)(aH.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mA.wR,
                      children: [
                          (0, r.jsx)(ee.D, {
                              variant: "heading-xs/semibold",
                              children: `Profile Effect (${e.length} to preview)`,
                          }),
                          (0, r.jsx)(eK.K, {
                              variant: "icon-only",
                              size: "sm",
                              onClick: mR,
                              icon: u5.CircleQuestionIcon,
                              "aria-label": "Open PFX preview instructions",
                          }),
                      ],
                  }),
                  (0, r.jsx)(j.l, {
                      label: "Profile Effect",
                      hideLabel: !0,
                      selectionMode: "single",
                      options: n,
                      value: t,
                      maxOptionsVisible: 50,
                      onSelectionChange: a,
                  }),
              ],
          });
}
function mw() {
    let e = (0, u7.bA)(),
        { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, u7.JE)(),
        n = o.useMemo(() => [mI, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: mA.kO,
              children: [
                  (0, r.jsx)(aH.h, { size: 16 }),
                  (0, r.jsx)(ee.D, {
                      variant: "heading-xs/semibold",
                      children: `Profile Frame (${e.length} to preview)`,
                  }),
                  (0, r.jsx)(j.l, {
                      label: "Profile Frame",
                      hideLabel: !0,
                      selectionMode: "single",
                      options: n,
                      value: t,
                      maxOptionsVisible: 50,
                      onSelectionChange: a,
                  }),
              ],
          });
}
function mM() {
    let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, u7.JE)(),
        { avatarDecorationAssets: a } = (0, u7.NE)(),
        n = o.useMemo(() => [mI, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
    return 0 === a.length
        ? null
        : (0, r.jsxs)("div", {
              className: mA.kO,
              children: [
                  (0, r.jsx)(aH.h, { size: 16 }),
                  (0, r.jsx)(ee.D, {
                      variant: "heading-xs/semibold",
                      children: `Avatar Decorations (${a.length} to preview)`,
                  }),
                  (0, r.jsx)(j.l, {
                      label: "Avatar Decorations",
                      hideLabel: !0,
                      selectionMode: "single",
                      options: n,
                      value: e,
                      maxOptionsVisible: 50,
                      onSelectionChange: t,
                  }),
              ],
          });
}
let mP = new Set([eB.RN.HERO_BANNER_STATIC, eB.RN.HERO_BANNER_ANIMATED, eB.RN.HERO_BANNER_RIVE]);
function mL(e) {
    let { clearAssets: t, clearIgnoredFiles: a } = e,
        { collectionAssets: n } = (0, u7.NE)(),
        {
            deleteCollectionAsset: l,
            clearAssets: i,
            heroLogoMaxHeight: s,
            setHeroLogoMaxHeight: d,
            heroResponsive: c,
            setHeroResponsive: u,
        } = (0, u7.JE)(),
        h = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
        x = h.some((e) => e.value === eB.RN.HERO_LOGO),
        v = h.some((e) => mP.has(e.value)),
        b = o.useCallback((e) => l(e), [l]),
        j = o.useCallback(() => {
            (i(), t(), a());
        }, [i, t, a]);
    return 0 === h.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(aH.h, { size: 16 }),
                  (x || v) &&
                      (0, r.jsxs)("div", {
                          className: mA.v7,
                          children: [
                              x &&
                                  (0, r.jsxs)("div", {
                                      className: mA.cj,
                                      children: [
                                          (0, r.jsx)(g.E, {
                                              variant: "body-md/normal",
                                              className: mA.Me,
                                              children: "Logo size",
                                          }),
                                          (0, r.jsx)("div", {
                                              className: mA.TQ,
                                              children: (0, r.jsx)(u8.A, {
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  defaultValue: s ?? 90,
                                                  onChangeEnd: (e) => d(Math.round(e)),
                                                  formatValue: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                          }),
                                          (0, r.jsx)(g.E, { variant: "body-sm/normal", children: `${s ?? 90}px` }),
                                      ],
                                  }),
                              v &&
                                  (0, r.jsxs)("div", {
                                      className: mA.sy,
                                      children: [
                                          (0, r.jsx)(m.d, { checked: c, onChange: u }),
                                          (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Responsive Hero" }),
                                      ],
                                  }),
                          ],
                      }),
                  (0, r.jsx)(aH.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mA.wR,
                      children: [
                          (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Uploaded Assets" }),
                          (0, r.jsx)(p.$, { variant: "critical-primary", size: "sm", onClick: j, text: "Clear All" }),
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      children: h.map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: mA._0,
                                  children: [
                                      (0, r.jsx)(eK.K, {
                                          variant: "icon-only",
                                          size: "sm",
                                          onClick: () => b(e.value),
                                          icon: el.P,
                                          "aria-label": "Remove asset",
                                      }),
                                      (0, r.jsx)(g.E, { variant: "body-md/normal", children: e.label }),
                                  ],
                              },
                              e.value,
                          ),
                      ),
                  }),
              ],
          });
}
function mU(e) {
    let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(aH.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mA.wR,
                      children: [
                          (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Ignored Files" }),
                          (0, r.jsx)(p.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              "li",
                              {
                                  className: mA.yk,
                                  children: (0, r.jsx)(g.E, { variant: "body-md/normal", children: e }),
                              },
                              `${e}-${t}`,
                          ),
                      ),
                  }),
              ],
          });
}
function mG() {
    let {
            validateShopAssetPackage: e,
            reset: t,
            validationComplete: a,
            warnings: n,
            errors: l,
        } = (function () {
            let [e, t] = o.useState(!1),
                [a, n] = o.useState({}),
                [l, i] = o.useState({}),
                s = o.useCallback(function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    i((a) => {
                        let n = a[e] ?? [];
                        return { ...a, [e]: [...n, ...t] };
                    });
                }, []),
                r = o.useCallback(function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    n((a) => {
                        let n = a[e] ?? [];
                        return { ...a, [e]: [...n, ...t] };
                    });
                }, []),
                d = o.useCallback(() => {
                    (t(!1), i({}), n({}));
                }, []);
            return {
                validationComplete: e,
                errors: l,
                warnings: a,
                validateShopAssetPackage: o.useCallback(
                    async (e) => {
                        try {
                            if (0 === e.length) return void s("No files found");
                            if (e.length > 1) return void s("Uploaded multiple files. Expected 1 directory.");
                            let t = e[0];
                            if (!t.isDirectory) return void s("Uploaded a file. Expected a directory.");
                            let a = await (async function (e) {
                                let t = e.createReader(),
                                    a = await new Promise((e) => t.readEntries(e)),
                                    n = new Set();
                                for (let e of a) e.isDirectory && n.add(e.name);
                                let l = mv.filter((e) => !n.has(e));
                                return (mb.some((e) => n.has(e)) || l.push(`at least one of: ${mb.join(", ")}`), l);
                            })(t);
                            a.length > 0 && s("Missing required directories", a);
                            let n = await (0, eB.eg)([t]);
                            ((function (e) {
                                let { files: t, addError: a, addWarning: n } = e;
                                for (let e of t.collectionFiles) {
                                    let t = (0, eB.pd)(e),
                                        l = null != t ? mx[t] : null;
                                    null != l && my(l, e, a, n);
                                }
                                mf({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                let l = new Set(t.collectionFiles.map((e) => (0, eB.pd)(e)).filter((e) => null != e)),
                                    i = Array.from(md)
                                        .filter((e) => !l.has(e))
                                        .map(mC);
                                i.length > 0 && a("Missing required files", i);
                                let s = Object.values(eB.RN)
                                    .filter((e) => !md.has(e))
                                    .filter((e) => !l.has(e))
                                    .map(mC);
                                s.length > 0 && n("Missing optional assets", s);
                            })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (mf({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                        Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                            let [t, l] = e,
                                                i = l.map((e) => e.name);
                                            (mf({
                                                names: i.map((e) => {
                                                    let t = e.indexOf("-");
                                                    return e.substring(0, t > 0 ? t : e.length);
                                                }),
                                                addError: a,
                                            }),
                                                mE(mo.J.PROFILE_EFFECT, l, a, n));
                                            let s = mc
                                                .filter((e) => !i.some((t) => t.startsWith(e) && t.endsWith(".png")))
                                                .map((e) => `${t}/${e}`);
                                            (s.length > 0 && a("Missing required PFX files with prefix", s),
                                                i.some((e) => e.endsWith(".txt")) ||
                                                    a(
                                                        "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                        [t],
                                                    ));
                                            let r = i
                                                .filter((e) => !mc.some((t) => e.startsWith(t)) && !e.endsWith(".txt"))
                                                .map((e) => `${t}/${e}`);
                                            r.length > 0 && n("Contains unrecognized files", r);
                                        }));
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (mf({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                        mE(mo.J.AVATAR_DECORATION, t.avatarDecorationFiles, a, n));
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e,
                                        l = Object.keys(t.profileFrameDirsMap)
                                            .filter((e) => !mj.test(e))
                                            .map((e) => `${eB.Kx.FRAMES}/${e}`);
                                    l.length > 0 && a("File names must be in lowercase snake case", l);
                                    let i = mx[mo.J.PROFILE_FRAME];
                                    Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                        let [t, l] = e,
                                            s = `${eB.Kx.FRAMES}/${t}`,
                                            r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                        ((null != l.previewFile && null != r && mS.includes(r)) ||
                                            a(
                                                "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                [`${s}/preview.{${mS.join("|")}}`],
                                            ),
                                            0 === l.layerFiles.length &&
                                                a(
                                                    "Profile frame must contain at least one foreground or background layer",
                                                    [`${s}/{foreground|background}/...`],
                                                ),
                                            l.unrecognizedSubdirs.length > 0 &&
                                                n(
                                                    "Profile frame contains unrecognized folders (expected foreground/, background/, or preview.png)",
                                                    l.unrecognizedSubdirs.map((e) => `${s}/${e}/`),
                                                ));
                                        let o = [];
                                        for (let { file: e, folder: t } of (null == l.previewFile ||
                                            mj.test(l.previewFile.name) ||
                                            o.push(`${s}/${l.previewFile.name}`),
                                        l.layerFiles))
                                            mj.test(e.name) || o.push(`${s}/${t}/${e.name}`);
                                        o.length > 0 && a("File names must be in lowercase snake case", o);
                                        let d = [];
                                        for (let { file: e, folder: t } of l.layerFiles) {
                                            let { parsed: a, errorType: n } = (0, mr.Mf)(e.name);
                                            if (null == a) {
                                                let a = null != n ? mr.h4[n] : "invalid";
                                                d.push(`${s}/${t}/${e.name}: ${a}`);
                                            }
                                        }
                                        if ((d.length > 0 && a("Invalid profile frame layer filenames", d), null != i))
                                            for (let { file: e, folder: t } of (null != l.previewFile &&
                                                my(i, l.previewFile, a, n, `${s}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                my(i, e, a, n, `${s}/${t}/${e.name}`);
                                    });
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addWarning: a } = e;
                                    t.ignoredFilenames.length > 0 &&
                                        a("Contains unrecognized files", t.ignoredFilenames);
                                })({ files: n, addError: s, addWarning: r }),
                                await Promise.all([
                                    (async function (e, t) {
                                        for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
                                            let e = new Map();
                                            for (let { file: t } of n.layerFiles) {
                                                let { parsed: a } = (0, mr.Mf)(t.name);
                                                if (a?.type !== ms.O.STAPLE) continue;
                                                let n = e.get(a.anchor) ?? [];
                                                (n.push(t), e.set(a.anchor, n));
                                            }
                                            for (let [n, l] of e) {
                                                let e = await m_(l, (e) => e.height);
                                                null != e &&
                                                    t(
                                                        "Staples with the same anchor (top/bottom) must all have the same height",
                                                        [`${a} (${String(n).toUpperCase()}) - ${mN(e)}`],
                                                    );
                                            }
                                        }
                                    })(n, s),
                                    (async function (e, t) {
                                        for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
                                            let e = n.layerFiles
                                                    .filter((e) => {
                                                        let { file: t } = e,
                                                            { parsed: a } = (0, mr.Mf)(t.name);
                                                        return (
                                                            a?.type === ms.O.STAPLE ||
                                                            a?.type === ms.O.BORDER ||
                                                            a?.type === ms.O.RAIL
                                                        );
                                                    })
                                                    .map((e) => {
                                                        let { file: t } = e;
                                                        return t;
                                                    }),
                                                l = await m_(e, (e) => e.width);
                                            null != l &&
                                                t("All layers (staples, borders, rails) must have the same width", [
                                                    `${a} - ${mN(l)}`,
                                                ]);
                                        }
                                    })(n, s),
                                ]));
                        } finally {
                            t(!0);
                        }
                    },
                    [s, r],
                ),
                reset: d,
            };
        })(),
        i = Object.entries(l),
        s = Object.entries(n),
        d = i.length > 0,
        c = s.length > 0,
        { setDropHandler: u } = o.useContext(mk),
        m = o.useCallback(
            (a) => {
                (t(), e(a));
            },
            [e, t],
        );
    return (
        o.useEffect(() => {
            u(m);
        }, [m, u]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                a
                    ? (0, r.jsxs)("div", {
                          className: mA._f,
                          children: [
                              (0, r.jsx)(g.E, {
                                  variant: "body-md/normal",
                                  color: d ? "text-feedback-critical" : "text-default",
                                  children: `${i.length} errors`,
                              }),
                              (0, r.jsx)(g.E, {
                                  variant: "body-md/normal",
                                  color: c ? "text-feedback-warning" : "text-default",
                                  children: `${s.length} warnings`,
                              }),
                              (0, r.jsx)(p.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                          ],
                      })
                    : (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Drop asset folder to validate." }),
                (0, r.jsx)(aH.h, { size: 16 }),
                d &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Errors" }),
                            (0, r.jsx)(aH.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mA.ck,
                                children: i.map((e, t) => {
                                    let [a, n] = e;
                                    return (0, r.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-md/semibold",
                                                    color: "text-feedback-critical",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, r.jsx)("ul", {
                                                        className: mA.ck,
                                                        children: n.map((e, t) =>
                                                            (0, r.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, r.jsx)(g.E, {
                                                                        variant: "body-sm/normal",
                                                                        color: "text-feedback-critical",
                                                                        children: e,
                                                                    }),
                                                                },
                                                                `${e}-${t}`,
                                                            ),
                                                        ),
                                                    }),
                                            ],
                                        },
                                        `${a}-${t}`,
                                    );
                                }),
                            }),
                        ],
                    }),
                c &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Warnings" }),
                            (0, r.jsx)(aH.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mA.ck,
                                children: Object.entries(n).map((e, t) => {
                                    let [a, n] = e;
                                    return (0, r.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-md/semibold",
                                                    color: "text-feedback-warning",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, r.jsx)("ul", {
                                                        className: mA.ck,
                                                        children: n.map((e, t) =>
                                                            (0, r.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, r.jsx)(g.E, {
                                                                        variant: "body-sm/normal",
                                                                        color: "text-feedback-warning",
                                                                        children: e,
                                                                    }),
                                                                },
                                                                `${e}-${t}`,
                                                            ),
                                                        ),
                                                    }),
                                            ],
                                        },
                                        `${a}-${t}`,
                                    );
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
function mF() {
    let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, u7.JE)(),
        { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: i, processAndUpsertAssets: s } = (0, eB.ds)(),
        { setDropHandler: d } = o.useContext(mk),
        c = o.useCallback(
            (e) => {
                (a(), s(e));
            },
            [s, a],
        );
    return (
        o.useEffect(() => {
            d(c);
        }, [c, d]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: mA.sy,
                    children: [
                        (0, r.jsx)(m.d, { checked: e, onChange: (e) => t(e) }),
                        (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Enable Preview" }),
                        (0, r.jsx)(eK.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: mT,
                            icon: u5.CircleQuestionIcon,
                            "aria-label": "Open preview instructions",
                        }),
                    ],
                }),
                (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Drop files in this panel to begin preview." }),
                (0, r.jsx)(mO, {}),
                (0, r.jsx)(mw, {}),
                (0, r.jsx)(mM, {}),
                (0, r.jsx)(mL, { clearAssets: l, clearIgnoredFiles: i }),
                (0, r.jsx)(mU, { ignoredFiles: n, handleClearIgnoredFiles: i }),
            ],
        })
    );
}
function mB() {
    let [e, t] = o.useState("preview");
    return (0, r.jsxs)("div", {
        className: mA.kL,
        children: [
            (0, r.jsx)(u4.I, {
                options: mD,
                value: e,
                onChange: (e) => {
                    let { value: a } = e;
                    return t(a);
                },
                className: mA.Vj,
                optionClassName: mA.UK,
            }),
            (0, r.jsx)(aH.h, { size: 8 }),
            "preview" === e && (0, r.jsx)(mF, {}),
            "validate" === e && (0, r.jsx)(mG, {}),
            (0, r.jsx)(aH.h, { size: 16 }),
        ],
    });
}
let m$ = (e) => {
    let { children: t, onDrop: a } = e,
        n = o.useRef(() => {}),
        l = o.useMemo(
            () => ({
                setDropHandler: (e) => {
                    n.current = e;
                },
            }),
            [],
        ),
        i = o.useCallback(
            (e) => {
                (a?.(e), n.current(e));
            },
            [a],
        );
    return (0, r.jsx)(mk.Provider, { value: l, children: (0, r.jsx)(mi, { onDrop: i, children: t }) });
};
var mV = a(663803),
    mW = a(110676),
    mH = a(590180),
    mz = a(335032);
function mK() {
    let e = (0, d.bG)([mH.A], () => mH.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: mz.k,
        children: [
            (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(mV.l, {
                value: e,
                onChange: (e) => {
                    (0, mW.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
}
var mY =
        (((n = {}).DEFAULT = "default"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    mq = a(295811);
function mJ() {
    let e = (0, d.bG)([mq.A], () => mq.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(mY).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(j.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, mW.Or)(e);
        },
        selectionMode: "single",
    });
}
function mQ(e) {
    let { className: t } = e,
        a = Object.keys(aM.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == a
        ? null
        : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(l$, { items: [a] }) });
}
var mX = a(291052);
function mZ(e) {
    let { title: t, expanded: a, onToggle: n, children: l } = e,
        i = o.useId();
    return (0, r.jsx)(up.N, {
        isExpanded: a,
        className: mX.uW,
        collapsibleContent: (0, r.jsx)("div", { id: i, className: mX.f5, children: l }),
        children: () =>
            (0, r.jsxs)("button", {
                type: "button",
                onClick: n,
                "aria-expanded": a,
                "aria-controls": i,
                className: mX.bV,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: t }),
                    (0, r.jsx)(su._, { size: "sm", color: "currentColor", className: Q()(mX.ai, { [mX.hg]: a }) }),
                ],
            }),
    });
}
function m0() {
    let e = (0, d.bG)([lY.A], () => lY.A.get("shop_disable_cache")),
        t = (0, d.bG)([lY.A], () => lY.A.get("shop_include_unpublished")),
        [a, n] = o.useState(new Set()),
        l = o.useCallback((e) => {
            n((t) => {
                let a = new Set(t);
                return (a.has(e) ? a.delete(e) : a.add(e), a);
            });
        }, []),
        i = o.useCallback(() => {
            n((e) => {
                if (e.has("assets")) return e;
                let t = new Set(e);
                return (t.add("assets"), t);
            });
        }, []);
    return (0, r.jsx)(m$, {
        onDrop: i,
        children: (0, r.jsxs)("div", {
            className: mX.Lm,
            children: [
                (0, r.jsxs)("div", {
                    className: mX.dQ,
                    children: [
                        (0, r.jsx)(m.d, {
                            label: "Disable collectibles cache",
                            checked: e,
                            onChange: (e) => (0, lK.L)("shop_disable_cache", e),
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Show unpublished collectibles",
                            checked: t,
                            onChange: (e) => (0, lK.L)("shop_include_unpublished", e),
                        }),
                    ],
                }),
                (0, r.jsxs)(mZ, {
                    title: "Layouts",
                    expanded: a.has("layouts"),
                    onToggle: () => l("layouts"),
                    children: [(0, r.jsx)(mQ, {}), (0, r.jsx)(mJ, {}), (0, r.jsx)(mK, {})],
                }),
                (0, r.jsx)(mZ, {
                    title: "Assets",
                    expanded: a.has("assets"),
                    onToggle: () => l("assets"),
                    children: (0, r.jsx)(mB, {}),
                }),
            ],
        }),
    });
}
let m1 = [
    { id: "unset", label: "Unset", value: cB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
    { id: "all", label: "All", value: cB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
    { id: "usersWithGame", label: "Users With Game", value: cB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
    { id: "none", label: "None", value: cB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
];
function m2() {
    let e = o.useRef(null),
        t = cW.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: Q()(t0.nd, na.n),
        children: (0, r.jsxs)("div", {
            className: na.k,
            children: [
                (0, r.jsx)(ee.D, { variant: "heading-lg/medium", children: "Settings" }),
                (0, r.jsx)(j.l, {
                    label: "Receive DMs In Game",
                    options: m1,
                    value: t,
                    onSelectionChange: cW.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var m3 = a(828596),
    m6 = a(937427),
    m5 = a(213682);
function m8() {
    let e = (0, d.bG)([m6.A], () => m6.A.getPromotionIdOverride()),
        [t, a] = o.useState(e ?? ""),
        n = o.useCallback(() => {
            (a(""), (0, m3.J_)(void 0));
        }, []),
        l = o.useCallback(() => {
            let e = t.trim();
            (0, m3.J_)("" !== e ? e : void 0);
        }, [t]),
        i = o.useCallback((e) => {
            a(e);
        }, []);
    return (0, r.jsxs)("div", {
        className: m5.k,
        children: [
            (0, r.jsx)(f.k, {
                fullWidth: !0,
                label: `Promotion ID Override (staff)${null != e ? ` \u{2014} active: ${e}` : ""}`,
                value: t,
                onChange: i,
                placeholder: "Paste a storefront promotion id",
            }),
            (0, r.jsxs)("div", {
                className: m5.o,
                children: [
                    (0, r.jsx)(p.$, { variant: "critical-primary", text: "Clear", onClick: n }),
                    (0, r.jsx)(p.$, { variant: "primary", text: "Set", onClick: l }),
                ],
            }),
        ],
    });
}
var m4 = a(209612);
function m9() {
    return (0, r.jsx)("div", { className: m4.n, children: (0, r.jsx)(m8, {}) });
}
var m7 = a(278416),
    he = a(53938);
function ht(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function ha(e) {
    let { store: t, dataGetter: a } = e,
        [n, l] = o.useState(a(t));
    return (
        o.useEffect(() => {
            function e() {
                return l(a(t));
            }
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, a]),
        (0, r.jsx)(x.Ip, { className: he.Dx, children: (0, r.jsx)(no.A, { data: n }) })
    );
}
function hn(e) {
    let { store: t } = e,
        [a, n] = o.useState(() => JSON.stringify(t.__getLocalVars(), null, 2)),
        [l, i] = o.useState(null),
        s = o.useCallback(() => {
            (n(JSON.stringify(t.__getLocalVars(), null, 2)), i(null));
        }, [t]);
    o.useEffect(() => (t.addChangeListener(s), () => t.removeChangeListener(s)), [t, s]);
    let d = o.useCallback(() => {
            let e;
            i(null);
            try {
                e = JSON.parse(a);
            } catch (e) {
                i(e instanceof SyntaxError ? e.message : "Invalid JSON");
                return;
            }
            let n = t.__getLocalVarsEditConfig?.();
            if (null == n) return void i("Store does not support editing");
            try {
                for (let e of n.preDispatches ?? []) E.h.dispatch(e);
                (E.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), s());
            } catch (e) {
                i(e instanceof Error ? e.message : String(e));
            }
        }, [a, t, s]),
        c = o.useCallback(() => {
            let e = t.__getLocalVarsEditConfig?.();
            if (e?.getPurgeVars == null) return void i("Store does not support purge");
            i(null);
            try {
                let t = e.getPurgeVars();
                for (let t of e.preDispatches ?? []) E.h.dispatch(t);
                (E.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), s());
            } catch (e) {
                i(e instanceof Error ? e.message : String(e));
            }
        }, [t, s]);
    return (0, r.jsxs)("div", {
        className: Q()(he.Dx, he.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: he.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: he.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: he.KA,
                children: [
                    (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Apply", onClick: d }),
                    (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: s }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Purge store", onClick: c }),
                ],
            }),
        ],
    });
}
let hl = [
    {
        key: "Name",
        cellClassName: he.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function hi(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: np.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: he.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(ha, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: np.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(ha, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: np.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: he.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(hn, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: i } = (0, nh.A)({ tabs: n }, []);
    return (0, r.jsxs)(nm, {
        className: he.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(nr.Ay, {
                className: Q()(t0.jr, he.nZ),
                children: [
                    (0, r.jsx)(nr.Ay.Icon, { icon: m7.TagIcon, tooltip: t.getName() }),
                    (0, r.jsx)(nr.Ay.Title, { children: t.getName() }),
                ],
            }),
            i({ store: t }),
        ],
    });
}
function hs() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = d.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(ht), [n])
            .filter((e) =>
                (function (e, t) {
                    let { store: a } = e;
                    return a.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [i, s] = o.useState(),
        c = n.find((e) => e._dispatchToken === i);
    return (0, r.jsxs)("div", {
        ref: e,
        className: Q()(t0.nd, he.nd),
        children: [
            (0, r.jsx)("div", {
                className: he.KE,
                children: (0, r.jsx)(nW.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(t1, { columns: hl, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != c &&
                (0, r.jsx)(hi, { store: c, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, i),
        ],
    });
}
var hr = a(435462),
    ho = a(176781),
    hd = a(173936),
    hc = a(292801),
    hu = a(849516),
    hm = a(606096),
    hh = a(406810),
    hp = a(152367),
    hg = a(27232),
    hx = a(8062),
    hv = a(739187),
    hb = a(378604);
let hj = {
        message: {},
        success: { variant: "success" },
        failure: { variant: "critical" },
        clip: { icon: ho.x },
        link: { icon: hd.LinkIcon },
        forward: { icon: hc.t, iconColor: eQ.A.colors.ICON_FEEDBACK_POSITIVE },
        invite: { icon: hu.u, iconColor: eQ.A.colors.ICON_BRAND },
        bookmark: { icon: hm.BookmarkIcon },
        clock: { icon: hh.ClockIcon },
        ai: { icon: hp.D },
        favorite: { icon: hg.StarIcon },
    },
    hf = Object.keys(hj),
    hy = hf.map((e) => ({ label: e, value: e, id: e })),
    hE = [
        { label: "top", value: "top", id: "top" },
        { label: "bottom", value: "bottom", id: "bottom" },
    ],
    hC = Object.values(ep.BRT).map((e) => ({ label: e, value: e, id: e }));
function hS(e) {
    let { name: t, currentText: a, queueLength: n } = e,
        l = null != a;
    return (0, r.jsxs)("div", {
        className: Q()(hb.M_, { [hb.wl]: l }),
        children: [
            (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: t }),
            (0, r.jsx)(g.E, {
                variant: "body-sm/normal",
                color: l ? "text-feedback-positive" : "text-muted",
                children: l ? `showing: \u{201C}${a}\u{201D}` : "idle",
            }),
            (0, r.jsxs)(g.E, { variant: "body-sm/normal", color: "text-muted", children: ["queued: ", n] }),
        ],
    });
}
function h_() {
    let [e, t] = o.useState("The quick brown fox jumps over the lazy dog"),
        [a, n] = o.useState("success"),
        [l, i] = o.useState("top"),
        [s, d] = o.useState(ep.BRT.APP),
        [c, u] = o.useState(String(3e3)),
        m = hx.a[s],
        h = (0, hr.WE)((e) => e.currentToastMap.get(m)?.toast),
        g = (0, hr.WE)((e) => e.queuedToastsMap.get(m)?.length ?? 0);
    function v(e, t) {
        return { ...hj[t], text: e, surface: m, position: l, duration: Number(c) > 0 ? Number(c) : 3e3 };
    }
    return (0, r.jsxs)(x.Ip, {
        className: hb.l$,
        children: [
            (0, r.jsxs)("section", {
                className: hb.uW,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Toast store" }),
                    (0, r.jsx)("div", {
                        className: hb.zQ,
                        children: (0, r.jsx)(hS, { name: "Mana store", currentText: h?.text, queueLength: g }),
                    }),
                ],
            }),
            (0, r.jsxs)("section", {
                className: hb.uW,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Config" }),
                    (0, r.jsxs)("div", {
                        className: hb.ne,
                        children: [
                            (0, r.jsx)(f.k, { label: "Text", value: e, onChange: t }),
                            (0, r.jsx)(aS.Z, {
                                label: "Type",
                                options: hy,
                                value: a,
                                onSelectionChange: n,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(aS.Z, {
                                label: "Position",
                                options: hE,
                                value: l,
                                onSelectionChange: i,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(aS.Z, {
                                label: "App context",
                                options: hC,
                                value: s,
                                onSelectionChange: d,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(f.k, { label: "Duration (ms)", value: c, onChange: u, type: "number" }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("section", {
                className: hb.uW,
                children: [
                    (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", children: "Show" }),
                    (0, r.jsxs)("div", {
                        className: hb.Uo,
                        children: [
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Show toast",
                                onClick: () => (0, l1.P0)(v(e, a)),
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                text: "Queue 3",
                                onClick: () => {
                                    ((0, l1.P0)(v(`${e} (1 of 3)`, a)),
                                        (0, l1.P0)(v(`${e} (2 of 3)`, a)),
                                        (0, l1.P0)(v(`${e} (3 of 3)`, a)));
                                },
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                text: "Every type",
                                onClick: () => {
                                    for (let t of hf) (0, l1.P0)(v(`${t}: ${e}`, t));
                                },
                            }),
                            (0, r.jsx)(p.$, { variant: "secondary", text: "Pop current", onClick: () => (0, hv.V)(s) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var hN = a(91871),
    hA = a.n(hN);
let hk = [
        {
            key: "ID",
            cellClassName: n7.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "Bucket",
            cellClassName: n7.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "Timestamp",
            cellClassName: n7.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    hD = [
        {
            id: "details",
            name: "Details",
            group: np.fu.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: a,
                            exposureType: n,
                            excluded: l,
                            timestamp: i,
                            location: s,
                            previouslyTracked: o,
                        },
                    } = e,
                    d = nU()(i);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(nr.Ay, {
                            className: Q()(t0.jr, n7.nZ),
                            children: [
                                (0, r.jsx)(nr.Ay.Icon, { icon: nB.U, tooltip: t }),
                                (0, r.jsx)(nr.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(n8, {
                            className: n7.ZK,
                            children: [
                                (0, r.jsx)(n4, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: i.toISOString(),
                                        title: (0, nq.i$)(d, "LLLL"),
                                        children: (0, nq.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(n4, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(n4, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(n4, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(n4, { name: "Override", children: (0, r.jsx)(n9, { value: a.override }) }),
                                (0, r.jsx)(n4, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(n4, { name: "Excluded", children: (0, r.jsx)(n9, { value: l }) }),
                                (0, r.jsx)(n4, { name: "Previously tracked", children: (0, r.jsx)(n9, { value: o }) }),
                                (0, r.jsx)(n4, { name: "Location", children: (0, r.jsx)("code", { children: s }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function hI() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, d.yK)([n6], () => n6.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || hA()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [i, s] = o.useState(void 0),
        c = l.find((e) => e.key === i),
        { TabBar: u, renderSelectedTab: m } = (0, nh.A)({ tabs: hD }, []),
        h = (0, d.bG)([n6], () => n6.trackTriggers),
        p = o.useCallback((e) => {
            E.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        g = h ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: Q()(t0.nd, n7.nd),
        children: [
            (0, r.jsxs)("div", {
                className: n7.rh,
                children: [
                    (0, r.jsx)(ir.m, {
                        text: g,
                        children: (0, r.jsx)(eK.K, {
                            size: "sm",
                            variant: h ? "active" : "primary",
                            icon: h ? id.PauseIcon : io.PlayIcon,
                            "aria-label": g,
                            onClick: () => p(!h),
                        }),
                    }),
                    (0, r.jsx)(nW.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eK.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": nN.intl.string(nN.t.VkKicb),
                        icon: nV.TrashIcon,
                        onClick: et.eY,
                    }),
                ],
            }),
            (0, r.jsx)(t1, { columns: hk, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != c &&
                (0, r.jsxs)(nm, {
                    className: n7.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(u, {}), m({ loggedTrigger: c })],
                }),
        ],
    });
}
var hT = a(324861),
    hR = a(903162);
let hO = function () {
        let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, hT.A)();
        return (0, r.jsx)("div", {
            className: hR.k,
            children: (0, r.jsxs)(u.n, {
                label: "Virtual Currency Configuration",
                description: "Click the button below to reset your onboarding state for Virtual Currency.",
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(p.$, {
                            text: "Reset Onboarding State",
                            onClick: () => {
                                (e(), t(), (0, a1.pX)(ep.BVt.APP));
                            },
                        }),
                    }),
                    (0, r.jsx)(Z.w, {
                        type: "info",
                        message:
                            "Your may have to refresh your client after being redirected to the main application in order to see these",
                        role: "none",
                    }),
                ],
            }),
        });
    },
    hw = [
        ["codecH264", "H264"],
        ["codecH265", "H265"],
        ["codecAv1", "AV1"],
    ],
    hM = [
        ["encNvidiaDx11", "nvidia-dx11"],
        ["encNvidiaCuda", "nvidia-cuda"],
        ["encAmdDx11", "amd-dx11"],
        ["encIntelDx11", "intel-dx11"],
        ["encIntelCpu", "intel-cpu"],
        ["encWmfCpu", "wmf-cpu"],
        ["encWmfGpu", "wmf-gpu"],
        ["encWmfDx11", "wmf-dx11"],
    ],
    hP = [
        ["capGraphicsCapture", "deny-graphics-capture", "whenFalse"],
        ["capDxgi", "deny-dxgi", "whenFalse"],
        ["capGdi", "deny-gdi", "whenFalse"],
        ["capVideoHook", "deny-video-hook", "whenFalse"],
        ["gdiForceBitblt", "gdi-force-bitblt", "whenTrue"],
        ["bypassHybridGpuFpsRestriction", "bypass-hybrid-gpu-fps", "whenTrue"],
        ["allowHdr", "deny-hdr", "whenFalse"],
    ],
    hL = {
        codecH264: !0,
        codecH265: !0,
        codecAv1: !0,
        encNvidiaDx11: !0,
        encNvidiaCuda: !0,
        encAmdDx11: !0,
        encIntelDx11: !0,
        encIntelCpu: !0,
        encWmfCpu: !0,
        encWmfGpu: !0,
        encWmfDx11: !0,
        capGraphicsCapture: !0,
        capDxgi: !0,
        capGdi: !0,
        capVideoHook: !0,
        gdiForceBitblt: !1,
        bypassHybridGpuFpsRestriction: !1,
        allowHdr: !0,
    },
    hU = { ...hL };
function hG(e, t) {
    return t
        .filter((t) => {
            let [a] = t;
            return !e[a];
        })
        .map((e) => {
            let [, t] = e;
            return t;
        })
        .join(",");
}
let hF = !1;
function hB() {
    if (hF) return !0;
    if (!A.Ay.isEnabled()) return !1;
    try {
        let e = A.Ay.getMediaEngine();
        return (
            e.on(oi.bg.Connection, () => {
                ni.A.isDeveloper && h$();
            }),
            e.once(oi.bg.Destroy, () => {
                hF = !1;
            }),
            (hF = !0),
            !0
        );
    } catch {
        return !1;
    }
}
function h$() {
    if (ni.A.isDeveloper && hB())
        try {
            var e;
            let t =
                    ((e = hU),
                    {
                        overrideDeniedVideoCodecs: hG(e, hw),
                        overrideDeniedVideoEncoders: hG(e, hM),
                        captureOverrides: hP
                            .filter((t) => {
                                let [a, , n] = t;
                                return "whenFalse" === n ? !e[a] : !!e[a];
                            })
                            .map((e) => {
                                let [, t] = e;
                                return t;
                            })
                            .join(","),
                    }),
                a = A.Ay.getMediaEngine();
            (a.eachConnection((e) => {
                e.setAudioVideoOverridesTransport(t);
            }),
                a.setClipsCaptureOverrides(t.captureOverrides));
        } catch {}
}
class hV extends d.Ay.DeviceSettingsStore {
    static displayName = "AudioVideoOverridesStore";
    static persistKey = "AudioVideoOverridesStore";
    initialize(e) {
        (this.waitFor(ni.A),
            (hU = null != e ? { ...hL, ...e } : { ...hL }),
            h$(),
            hF ||
                A.Ay.addChangeListener(function e() {
                    hB() && (h$(), A.Ay.removeChangeListener(e));
                }));
    }
    getUserAgnosticState() {
        return hU;
    }
    getSnapshot() {
        return hU;
    }
}
let hW = new hV(E.h, {
    AUDIO_VIDEO_OVERRIDES_UPDATE: function (e) {
        if (!ni.A.isDeveloper) return !1;
        ((hU = { ...hU, ...e.partial }), h$());
    },
});
var hH = a(731854);
let hz = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    hK = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    hY = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    hq = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function hJ(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(tJ.B, {
        gap: 8,
        children: [
            (0, r.jsx)(g.E, { variant: "body-lg/semibold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(
                    or.S,
                    {
                        label: a,
                        checked: !!n[t],
                        onChange: () => {
                            var e;
                            return (
                                (e = { [t]: !n[t] }),
                                void E.h.dispatch({ type: "AUDIO_VIDEO_OVERRIDES_UPDATE", partial: e })
                            );
                        },
                    },
                    t,
                );
            }),
        ],
    });
}
function hQ() {
    let e = (0, d.bG)([hW], () => hW.getSnapshot()),
        t = (0, d.bG)([A.Ay], () => A.Ay.supports(hH.O5.VIDEO));
    return (0, r.jsxs)(x.Ip, {
        className: t0.nd,
        children: [
            (0, r.jsx)(b.c, { gap: 16 }),
            (0, r.jsx)(hJ, { title: "Video Codecs (Sender)", toggles: hz, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hJ, { title: "Video Encoders", toggles: hK, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hJ, { title: "Capture Sources", toggles: hY, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hJ, { title: "Capture Options", toggles: hq, state: e }),
                      ],
                  })
                : null,
        ],
    });
}
var hX = a(109445);
function hZ() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, i] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        s = "processing" === l.status;
    return (0, r.jsx)(x.Ip, {
        className: t0.nd,
        children: (0, r.jsxs)("div", {
            className: hX.l7,
            children: [
                (0, r.jsx)(g.E, { variant: "body-lg/semibold", children: "Batch Audio Processor" }),
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(tJ.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(f.k, {
                            fullWidth: !0,
                            value: e,
                            onChange: t,
                            placeholder: "Input directory (wav files)",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await y.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(tJ.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(f.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await y.A.fileManager.showOpenDialog({
                                    properties: ["openDirectory", "createDirectory"],
                                });
                                e.length > 0 && n(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    variant: s ? "critical-primary" : "primary",
                    text: s ? "Cancel" : "Start Processing",
                    onClick: s
                        ? function () {
                              (A.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  i((e) => ({ ...e, status: "cancelled" })));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (i({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  A.Ay.getMediaEngine().processBatchAudioFiles(
                                      e,
                                      a,
                                      (e, t, a, n) => {
                                          i((l) => ({
                                              ...l,
                                              current: t,
                                              total: a,
                                              log: [...l.log, { filename: e, success: n }],
                                          }));
                                      },
                                      (e, t) => {
                                          i((a) => ({
                                              ...a,
                                              status: "processing" === a.status ? "complete" : "cancelled",
                                              processed: e,
                                              failed: t,
                                          }));
                                      },
                                  ));
                          },
                    disabled: !s && ("" === e || "" === a),
                }),
                "idle" !== l.status &&
                    (0, r.jsxs)(tJ.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(g.E, {
                                variant: "body-sm/semibold",
                                children: [
                                    "processing" === l.status && `Processing: ${l.current}/${l.total}`,
                                    "complete" === l.status && `Complete: ${l.processed} processed, ${l.failed} failed`,
                                    "cancelled" === l.status &&
                                        `Cancelled: ${l.processed} processed, ${l.failed} failed`,
                                ],
                            }),
                            l.log
                                .slice(-20)
                                .reverse()
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: hX.TZ,
                                            children: (0, r.jsxs)(g.E, {
                                                variant: "body-xs/normal",
                                                className: e.success ? hX.$D : hX.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(g.E, {
                                    variant: "body-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var h0 = a(395771),
    h1 = a(207228),
    h2 = a(533841);
let h3 = { appId: "0", appName: "DevTools" },
    h6 = { width: 0, height: 0, intervalMs: 1e3 },
    h5 = (0, L.v)(() => ({ latestUrl: null, received: 0, log: [] }));
function h8(e) {
    let t = h5.getState().latestUrl;
    (h5.setState((t) => {
        let a = {
            index: t.received + 1,
            receivedAt: Date.now(),
            encodeMs: e.encodeMs,
            width: e.width,
            height: e.height,
            format: e.mimeType.replace("image/", "").toUpperCase(),
            bytes: e.image.byteLength,
        };
        return {
            latestUrl: URL.createObjectURL(new Blob([e.image], { type: e.mimeType })),
            received: a.index,
            log: [a, ...t.log].slice(0, 200),
        };
    }),
        null != t && URL.revokeObjectURL(t));
}
function h4(e) {
    let { width: t, height: a, intervalMs: n } = e;
    return (0, h1.it)(h3, { ...(t > 0 || a > 0 ? { width: t, height: a } : {}), intervalMs: n }, h8);
}
let h9 = {
    framesReceived: 0,
    framesProcessed: 0,
    framesFailed: 0,
    framesSkippedSource: 0,
    framesSkippedBusy: 0,
    framesSkippedInterval: 0,
    framesReleaseTimedOut: 0,
    processingUs: 0,
    encodeFailed: !1,
};
function h7(e) {
    let t = parseInt(e, 10);
    return Number.isFinite(t) && t > 0 ? t : 0;
}
function pe() {
    let [e, t] = (0, sB.V)("DevToolsConjurePanel_settings", h6),
        a = e ?? h6,
        { latestUrl: n, log: l } = h5(),
        i = (0, d.bG)([h0.A], () => h0.A.isCapturing()),
        s = (0, h1.y8)(),
        c = (function () {
            let [e, t] = o.useState(null);
            return (
                o.useEffect(() => {
                    let e = !1;
                    async function a() {
                        let a = await (0, h1.Az)();
                        e || t(a);
                    }
                    a();
                    let n = setInterval(a, 1e3);
                    return () => {
                        ((e = !0), clearInterval(n));
                    };
                }, []),
                e ?? h9
            );
        })(),
        u = c.encodeFailed && !i;
    function h(e) {
        let n = { ...a, ...e };
        (t(n), i && h4(n));
    }
    return (0, r.jsx)(x.Ip, {
        className: t0.nd,
        children: (0, r.jsxs)(tJ.B, {
            gap: 12,
            className: h2.l7,
            children: [
                (0, r.jsx)(g.E, { variant: "body-lg/semibold", children: "Snapshot" }),
                !s &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "This native build does not support snapshots.",
                    }),
                u &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Snapshots turned off because PNG encoding failed. Turn capture on to try again.",
                    }),
                (0, r.jsxs)(tJ.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Stats" }),
                        (0, r.jsxs)(g.E, {
                            variant: "mono-md/bold",
                            children: [
                                "Received ",
                                c.framesReceived,
                                " \xb7 Processed ",
                                c.framesProcessed,
                                " \xb7 Avg processing",
                                " ",
                                (function (e) {
                                    let { framesProcessed: t, processingUs: a } = e;
                                    return t > 0 ? `${(a / t / 1e3).toFixed(1)} ms` : "-";
                                })(c),
                            ],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "mono-md/bold",
                            color: "text-muted",
                            children: [
                                "Skipped: wrong source ",
                                c.framesSkippedSource,
                                " \xb7 busy ",
                                c.framesSkippedBusy,
                                " \xb7 interval",
                                " ",
                                c.framesSkippedInterval,
                                " \xb7 Release timed out ",
                                c.framesReleaseTimedOut,
                                " \xb7 Failed",
                                " ",
                                c.framesFailed,
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children:
                        "PNG snapshots of the detected game. Frames from anything else being captured are dropped. 0x0 is the source resolution.",
                }),
                (0, r.jsxs)(tJ.B, {
                    direction: "horizontal",
                    gap: 8,
                    children: [
                        (0, r.jsx)(f.k, {
                            label: "Width",
                            type: "number",
                            min: 0,
                            value: a.width.toString(),
                            onChange: (e) => h({ width: h7(e) }),
                        }),
                        (0, r.jsx)(f.k, {
                            label: "Height",
                            type: "number",
                            min: 0,
                            value: a.height.toString(),
                            onChange: (e) => h({ height: h7(e) }),
                        }),
                        (0, r.jsx)(f.k, {
                            label: "Interval (ms)",
                            type: "number",
                            min: 0,
                            value: a.intervalMs.toString(),
                            onChange: (e) => h({ intervalMs: h7(e) }),
                        }),
                    ],
                }),
                (0, r.jsx)(m.d, {
                    label: "Capture",
                    checked: i,
                    disabled: !s,
                    onChange: function (e) {
                        e ? h4(a) : (0, h1.ik)();
                    },
                }),
                null != n
                    ? (0, r.jsx)("img", { className: h2.P9, src: n, alt: "Latest snapshot" })
                    : (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: "No snapshot yet." }),
                l.length > 0 &&
                    (0, r.jsxs)(tJ.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Log" }),
                            (0, r.jsx)("div", {
                                className: h2.Rm,
                                children: l.map((e) =>
                                    (0, r.jsx)(
                                        g.E,
                                        {
                                            variant: "mono-md/bold",
                                            color: "text-muted",
                                            children: (function (e) {
                                                let t,
                                                    {
                                                        index: a,
                                                        receivedAt: n,
                                                        encodeMs: l,
                                                        width: i,
                                                        height: s,
                                                        format: r,
                                                        bytes: o,
                                                    } = e;
                                                return `#${a}  ${((t = new Date(n)), `${t.toLocaleTimeString(void 0, { hour12: !1 })}.${t.getMilliseconds().toString().padStart(3, "0")}`)}  encode ${l}ms  ${i}x${s}  ${r}  ${Math.round(o / 1024)} KiB`;
                                            })(e),
                                        },
                                        e.index,
                                    ),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var pt = a(207898),
    pa = a.n(pt),
    pn = a(32880),
    pl = a(827343),
    pi = a(964486),
    ps = a(602674),
    pr = a(625841),
    po = a(74848),
    pd = a(913367);
function pc(e) {
    return `${e.toFixed(0)}%`;
}
function pu(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(g.E, { variant: "body-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(g.E, { variant: "body-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(g.E, { variant: "body-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function pm(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(up.N, {
        collapsibleContent: (0, r.jsx)(pu, { recording: t }),
        children: (e) => {
            let { onClick: i } = e;
            return (0, r.jsxs)(X.D, {
                onClick: i,
                children: [
                    (0, r.jsxs)(g.E, {
                        variant: "body-sm/semibold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(X.D, {
                        tag: "span",
                        onClick: (e) => {
                            (e.stopPropagation(), a ? l() : n(t));
                        },
                        children: a
                            ? (0, r.jsx)(id.PauseIcon, { size: "xxs" })
                            : (0, r.jsx)(io.PlayIcon, { size: "xxs" }),
                    }),
                    (0, r.jsx)(X.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            (e.stopPropagation(),
                                (a = new Blob([pa()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n));
                        },
                        children: (0, r.jsx)(pn.DownloadIcon, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function ph() {
    let { name: e } = (0, po.x5)(hH.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        i = (0, d.bG)([A.Ay], () => A.Ay.getKrispSuppressionLevel()),
        [s, c] = o.useState(null),
        u = o.useRef(null),
        h = o.useRef(null),
        [p, v] = o.useState(0.5),
        {
            krispModels: b,
            krispModelOverride: f,
            inputMode: y,
            echoCancellation: E,
            autoThreshold: C,
            vadUseKrisp: S,
            vadKrispActivationThreshold: _,
            noiseCancellation: N,
            noiseSuppression: k,
            noiseSuppressionSupported: D,
            noiseCancellationSupported: I,
            noiseCancellationEnableStats: T,
        } = (0, d.cf)([A.Ay], () => ({
            krispModels: A.Ay.getKrispModels(),
            krispModelOverride: A.Ay.getKrispModelOverride(),
            echoCancellation: A.Ay.getEchoCancellation(),
            autoThreshold: A.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: A.Ay.getModeOptions().vadUseKrisp,
            inputMode: A.Ay.getMode(),
            vadKrispActivationThreshold: A.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: A.Ay.getNoiseCancellation(),
            noiseSuppression: A.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: A.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: A.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: A.Ay.getKrispEnableStats(),
        })),
        R = N ? "KRISP" : k ? "STANDARD" : "NONE",
        O = (0, ps.v)(),
        w = o.useCallback(() => {
            (u.current?.stop(), (u.current = null), c(null));
        }, []);
    function M() {
        A.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function P(e) {
        if ((t && M(), w(), null == O)) return;
        let a = O.createBufferSource();
        ((a.buffer = e.audioBuffer),
            (h.current = O.createGain()),
            (h.current.gain.value = p),
            a.connect(h.current),
            h.current.connect(O.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            c(e));
    }
    (o.useEffect(() => {
        w();
    }, [w]),
        (0, pi.l0)(() => {
            pl.default.setMode(A.Ay.getMode(), { vadKrispActivationThreshold: void 0 });
        }));
    let L = [];
    return (
        I && L.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        D && L.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        L.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(x.Ip, {
            className: t0.nd,
            children: (0, r.jsxs)("div", {
                className: pd.l,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-lg/semibold", children: "Krisp Tester" }),
                    (0, r.jsx)(pr.U, {
                        label: "Input Device",
                        deviceType: hH.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(j.l, {
                        label: "Noise Cancellation",
                        value: R,
                        onSelectionChange: (e) => {
                            (pl.default.setNoiseCancellation("KRISP" === e),
                                pl.default.setNoiseSuppression("STANDARD" === e));
                        },
                        options: L,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u8.A, {
                                    label: "Krisp Suppression Level",
                                    defaultValue: i,
                                    onChangeEnd: pl.default.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                    formatValue: pc,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: f,
                                    options: b.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        pl.default.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(m.d, {
                                    label: "Enable Stats",
                                    checked: T,
                                    onChange: (e) => pl.default.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    y === hH.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.d, {
                                    label: "Auto Threshold",
                                    checked: C,
                                    onChange: (e) => pl.default.setMode(hH.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                C &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(m.d, {
                                                label: "Use Krisp VAD",
                                                checked: S,
                                                onChange: (e) =>
                                                    pl.default.setMode(hH.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            S &&
                                                (0, r.jsx)(u8.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    defaultValue: _,
                                                    onChangeEnd: (e) =>
                                                        pl.default.setMode(hH.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                    step: 0.01,
                                                    formatValue: (e) => pc(100 * e),
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    (0, r.jsx)(m.d, {
                        label: "Echo Cancellation",
                        checked: E,
                        onChange: (e) => pl.default.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(tJ.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(nG.$n, {
                                color: t ? nG.$n.Colors.RED : nG.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          (w(),
                                              a(!0),
                                              pl.default.setLoopback("krisp_test", !0),
                                              A.Ay.getMediaEngine().startRecordingRawSamples((t, n, s) => {
                                                  (a(!1), pl.default.setLoopback("krisp_test", !1));
                                                  let r = new AudioBuffer({
                                                      length: t.length,
                                                      sampleRate: s,
                                                      numberOfChannels: n,
                                                  });
                                                  for (let e = 0; e < n; e++) {
                                                      let a = new Float32Array(t.length / n);
                                                      for (let l = 0; l < t.length / n; l++)
                                                          a[l] = t[l * n + e] / 32768;
                                                      r.copyToChannel(a, e);
                                                  }
                                                  l((t) => [
                                                      ...t,
                                                      {
                                                          inputName: e,
                                                          audioBuffer: r,
                                                          createdAt: Date.now(),
                                                          suppression: R,
                                                          echoCancellation: E,
                                                          krispSuppressionLevel: i,
                                                      },
                                                  ]);
                                              }));
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(u8.A, {
                        label: "Volume",
                        defaultValue: p,
                        onChange: function (e) {
                            null != h.current && ((h.current.gain.value = e), v(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                        step: 0.01,
                        formatValue: (e) => pc(100 * e),
                    }),
                    (0, r.jsxs)(tJ.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(pm, { recording: e, playing: e === s, onPlay: P, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var pp = a(237528),
    pg = a(833473),
    px = a(738566),
    pv = a(829997),
    pb = a(598939);
let pj = {
        generic: { label: "Generic", material: { absorption: { low: 0.1, mid: 0.2, high: 0.3 }, scattering: 0.05 } },
        brick: { label: "Brick", material: { absorption: { low: 0.03, mid: 0.04, high: 0.07 }, scattering: 0.05 } },
        concrete: {
            label: "Concrete",
            material: { absorption: { low: 0.05, mid: 0.07, high: 0.08 }, scattering: 0.05 },
        },
        ceramic: { label: "Ceramic", material: { absorption: { low: 0.01, mid: 0.02, high: 0.02 }, scattering: 0.05 } },
        gravel: { label: "Gravel", material: { absorption: { low: 0.6, mid: 0.7, high: 0.8 }, scattering: 0.05 } },
        carpet: { label: "Carpet", material: { absorption: { low: 0.24, mid: 0.69, high: 0.73 }, scattering: 0.05 } },
        glass: { label: "Glass", material: { absorption: { low: 0.06, mid: 0.03, high: 0.02 }, scattering: 0.05 } },
        plaster: { label: "Plaster", material: { absorption: { low: 0.12, mid: 0.06, high: 0.04 }, scattering: 0.05 } },
        wood: { label: "Wood", material: { absorption: { low: 0.11, mid: 0.07, high: 0.06 }, scattering: 0.05 } },
        metal: { label: "Metal", material: { absorption: { low: 0.2, mid: 0.07, high: 0.06 }, scattering: 0.05 } },
        rock: { label: "Rock", material: { absorption: { low: 0.13, mid: 0.2, high: 0.24 }, scattering: 0.05 } },
    },
    pf = Object.entries(pj).map((e) => {
        let [t, { label: a }] = e;
        return { id: t, value: t, label: a };
    }),
    py = o.createContext(null);
function pE(e) {
    let t = o.useContext(py);
    if (null == t) throw Error("useSpatialAudioField must be used inside SpatialAudioEditorContext");
    return {
        value: e3().get(t.resolved, e),
        overridden: t.isOverridden(e),
        set: (a) => t.set(e, a),
        reset: () => t.reset(e),
    };
}
function pC(e, t) {
    let a = e3().cloneDeep(e),
        n = e3().toPath(t);
    e3().unset(a, n);
    for (let e = n.length - 1; e > 0; e--) {
        let t = n.slice(0, e);
        if (!e3().isEmpty(e3().get(a, t))) break;
        e3().unset(a, t);
    }
    return a;
}
function pS(e) {
    let { label: t, description: a, value: n, overridden: l, onReset: i, children: s } = e;
    return (0, r.jsxs)("div", {
        className: Q()(pb.nM, { [pb.Je]: l }),
        children: [
            (0, r.jsxs)("div", {
                className: pb.uV,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/medium", color: "text-strong", className: pb.xZ, children: t }),
                    null != n ? (0, r.jsx)(g.E, { variant: "mono-md/bold", color: "text-muted", children: n }) : null,
                    (0, r.jsx)(p_, { overridden: l, onReset: i, label: t }),
                ],
            }),
            null != a ? (0, r.jsx)(g.E, { variant: "body-xs/normal", color: "text-subtle", children: a }) : null,
            s,
        ],
    });
}
function p_(e) {
    let { overridden: t, onReset: a, label: n } = e;
    return (0, r.jsx)("div", {
        className: Q()(pb.cL, { [pb.YF]: !t }),
        "aria-hidden": !t,
        children: (0, r.jsx)(l2.Q, {
            variant: "secondary",
            textVariant: "body-xs/medium",
            text: "Reset",
            "aria-label": `Reset ${n}`,
            disabled: !t,
            onClick: a,
        }),
    });
}
function pN(e) {
    let { path: t, label: a, description: n } = e,
        l = pE(t);
    return (0, r.jsxs)("div", {
        className: Q()(pb.nM, pb.jC, { [pb.Je]: l.overridden }),
        children: [
            (0, r.jsx)("div", {
                className: pb.L$,
                children: (0, r.jsx)(m.d, { label: a, description: n, checked: l.value, onChange: l.set }),
            }),
            (0, r.jsx)(p_, { overridden: l.overridden, onReset: l.reset, label: a }),
        ],
    });
}
function pA(e) {
    let { path: t, label: a, description: n, min: l, max: i, step: s, decimals: d, unit: c = "" } = e,
        u = pE(t),
        [m, h] = o.useState(null),
        [p, g] = o.useState(u.value);
    function x(e) {
        return e3().clamp(Math.round(e / s) * s, l, i);
    }
    function v(e) {
        return `${e.toFixed(d)}${c}`;
    }
    p !== u.value && (g(u.value), h(null));
    let b = m ?? u.value;
    return (0, r.jsx)(pS, {
        label: a,
        description: n,
        value: v(b),
        overridden: u.overridden,
        onReset: u.reset,
        children: (0, r.jsx)("div", {
            className: pb.aw,
            children: (0, r.jsx)(u8.A, {
                value: b,
                minValue: l,
                maxValue: i,
                step: s,
                onChange: (e) => h(x(e)),
                onChangeEnd: (e) => {
                    (h(null), u.set(x(e)));
                },
                formatValue: (e) => v(x(e)),
                "aria-label": a,
            }),
        }),
    });
}
function pk(e) {
    let { label: t, value: a, onChange: n, min: l, max: i, step: s } = e,
        [d, c] = o.useState(null),
        [u, m] = o.useState(a);
    u !== a && (m(a), c(null));
    let h = d?.value != null;
    return (0, r.jsx)(nT.Q, {
        label: t,
        mode: "decimal",
        value: null != d ? d.value : a,
        min: l,
        max: i,
        step: s,
        error: h
            ? `Must be ${[null != l && `\u{2265} ${l}`, null != i && `\u{2264} ${i}`].filter(Boolean).join(" and ")}`
            : void 0,
        onBlur: () => c(null),
        onChange: (e) => {
            null == e || (null != l && e < l) || (null != i && e > i) ? c({ value: e }) : (c(null), n(e));
        },
    });
}
function pD(e) {
    let { keys: t, labels: a, value: n, onChange: l, min: i, max: s, step: o } = e;
    return (0, r.jsx)("div", {
        className: pb.uY,
        children: t.map((e) =>
            (0, r.jsx)(
                pk,
                { label: a[e], value: n[e], min: i, max: s, step: o, onChange: (t) => l({ ...n, [e]: t }) },
                e,
            ),
        ),
    });
}
let pI = ["low", "mid", "high"],
    pT = { low: "Low", mid: "Mid", high: "High" },
    pR = ["x", "y", "z"],
    pO = { x: "X (m)", y: "Y (m)", z: "Z (m)" };
function pw(e) {
    let { path: t, label: a, description: n } = e,
        l = pE(t);
    return (0, r.jsx)(pS, {
        label: a,
        description: n,
        overridden: l.overridden,
        onReset: l.reset,
        children: (0, r.jsx)(pD, { keys: pI, labels: pT, value: l.value, onChange: l.set, min: 0, step: 1e-4 }),
    });
}
function pM(e) {
    let { path: t, label: a, description: n } = e,
        l = pE(t);
    return (0, r.jsx)(pS, {
        label: a,
        description: n,
        overridden: l.overridden,
        onReset: l.reset,
        children: (0, r.jsx)(pD, { keys: pR, labels: pO, value: l.value, onChange: l.set, step: 0.5 }),
    });
}
function pP() {
    let e = pE("binaural.hrtfFile"),
        [{ directory: t, files: a }, n] = o.useState(() => A.Ay.getMediaEngine().getSpatialAudioHrtfFiles()),
        l = "" !== e.value && !a.includes(e.value),
        i = [
            { id: "", value: "", label: "Built-in" },
            ...a.map((e) => ({ id: e, value: e, label: e })),
            ...(l ? [{ id: e.value, value: e.value, label: `${e.value} (missing)` }] : []),
        ];
    return (0, r.jsxs)(pS, {
        label: "HRTF",
        description:
            "A SOFA file to use in place of Steam Audio's built-in HRTF. Rebuilds the HRTF, and falls back to the built-in one if the file doesn't load.",
        overridden: e.overridden,
        onReset: e.reset,
        children: [
            (0, r.jsx)(j.l, {
                label: "HRTF file",
                hideLabel: !0,
                placeholder: "Built-in",
                selectionMode: "single",
                options: i,
                value: e.value,
                onSelectionChange: (t) => e.set(t),
                fullWidth: !0,
            }),
            null != t
                ? (0, r.jsxs)(tJ.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 8,
                      wrap: !0,
                      children: [
                          (0, r.jsxs)(g.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: [
                                  "Only .sofa files in ",
                                  (0, r.jsx)("code", { children: t }),
                                  " can be loaded.",
                              ],
                          }),
                          (0, r.jsx)(l2.Q, {
                              variant: "secondary",
                              textVariant: "body-xs/medium",
                              text: "Refresh",
                              onClick: () => n(A.Ay.getMediaEngine().getSpatialAudioHrtfFiles()),
                          }),
                          (0, r.jsx)(l2.Q, {
                              variant: "secondary",
                              textVariant: "body-xs/medium",
                              text: "Show folder",
                              onClick: () => y.A.fileManager.showItemInFolder(t),
                          }),
                      ],
                  })
                : (0, r.jsx)(g.E, {
                      variant: "body-xs/normal",
                      color: "text-subtle",
                      children: "This media engine can't load HRTF files.",
                  }),
        ],
    });
}
let pL = ["low", "mid", "high", "scattering"],
    pU = { low: "Absorb low", mid: "Absorb mid", high: "Absorb high", scattering: "Scattering" };
function pG(e) {
    var t;
    let { path: a, label: n } = e,
        l = pE(a),
        { absorption: i, scattering: s } = l.value,
        o = ((t = l.value), Object.keys(pj).find((e) => e3().isEqual(pj[e].material, t)));
    return (0, r.jsxs)(pS, {
        label: n,
        value: null != o ? pj[o].label : "Custom",
        overridden: l.overridden,
        onReset: l.reset,
        children: [
            (0, r.jsx)(j.l, {
                label: `${n} preset`,
                hideLabel: !0,
                placeholder: "Custom",
                selectionMode: "single",
                options: pf,
                value: o,
                onSelectionChange: (e) => l.set(pj[e].material),
                fullWidth: !0,
            }),
            (0, r.jsx)(pD, {
                keys: pL,
                labels: pU,
                value: { ...i, scattering: s },
                onChange: (e) => {
                    let { scattering: t, ...a } = e;
                    return l.set({ absorption: a, scattering: t });
                },
                min: 0,
                max: 1,
                step: 0.01,
            }),
        ],
    });
}
function pF() {
    let { value: e } = pE("reflections.room.minCorner"),
        { value: t } = pE("reflections.room.maxCorner"),
        a = t.x - e.x,
        n = t.y - e.y,
        l = t.z - e.z,
        i = a > 0 && n > 0 && l > 0;
    return (0, r.jsx)(g.E, {
        variant: "body-sm/normal",
        color: i ? "text-muted" : "text-feedback-critical",
        children: i
            ? `${a.toFixed(1)} \xd7 ${n.toFixed(1)} \xd7 ${l.toFixed(1)} m \xb7 floor ${(a * l).toFixed(1)} m\xb2`
            : "Every axis of the max corner must be greater than the min corner.",
    });
}
function pB(e) {
    let t,
        { overrideCount: a, onResetAll: n } = e,
        { supported: l, active: i } = (0, d.cf)([A.Ay, pg.A], () => ({
            supported: A.Ay.supports(hH.O5.SPATIAL_AUDIO),
            active: pg.A.isSpatialAudioActive(),
        }));
    return (
        (t = l
            ? i
                ? (0, r.jsx)(pp.v, { text: "Spatial on", variant: "greenLight" })
                : (0, r.jsx)(pp.v, { text: "Spatial off", variant: "grayLight" })
            : (0, r.jsx)(pp.v, { text: "Unsupported", variant: "redLight" })),
        (0, r.jsxs)(tJ.B, {
            gap: 8,
            children: [
                (0, r.jsxs)(tJ.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    wrap: !0,
                    children: [
                        (0, r.jsxs)(tJ.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 8,
                            children: [
                                (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", children: "Spatial Audio" }),
                                t,
                                a > 0 ? (0, r.jsx)(pp.v, { text: `${a} overridden`, variant: "blurpleLight" }) : null,
                            ],
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: "Reset all",
                            disabled: 0 === a,
                            onClick: n,
                        }),
                    ],
                }),
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children:
                        "Live spatial audio overrides, layered over the defaults and the voice settings toggle. A spatial Frame replaces them when it starts and clears them when it stops. Fields and Reset compare against the selected profile. They apply immediately and last until the client reloads.",
                }),
                l
                    ? null
                    : (0, r.jsx)(g.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          children: "This media engine does not support spatial audio; changes here have no effect.",
                      }),
            ],
        })
    );
}
let p$ = "DevToolsSpatialAudioProfiles",
    pV = "Default",
    pW = e3().omit(pv.X, "isSpatial");
function pH(e, t) {
    if (!e3().isPlainObject(e)) return {};
    let a = {};
    for (let [n, l] of Object.entries(t)) {
        let t = e[n];
        if (e3().isPlainObject(l) && e3().isEmpty(l)) {
            if (!e3().isPlainObject(t)) continue;
            let e = e3().pickBy(t, (e) => "number" == typeof e && Number.isFinite(e));
            e3().isEmpty(e) || (a[n] = e);
        } else if (e3().isPlainObject(l)) {
            let e = pH(t, l);
            e3().isEmpty(e) || (a[n] = e);
        } else typeof t == typeof l && ("number" != typeof t || Number.isFinite(t)) && (a[n] = t);
    }
    return a;
}
function pz(e, t) {
    return e3().merge(e3().cloneDeep(pv.X), { isSpatial: t }, e);
}
function pK(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pv.X;
    return Object.entries(a).reduce((a, n) => {
        let [l, i] = n,
            s = e3().get(e, l),
            r = e3().get(t, l);
        return !e3().isPlainObject(i) || e3().isEmpty(i) || ["x", "low", "absorption"].some((e) => e in i)
            ? a + +!e3().isEqual(s, r)
            : a + pK(s ?? {}, r ?? {}, i);
    }, 0);
}
let pY = {};
function pq(e) {
    let {
            overrides: t,
            modified: a,
            profiles: { profiles: n, names: l, activeName: i, editableName: s, select: d, save: c, remove: u, add: m },
        } = e,
        [h, g] = o.useState(null);
    function x(e) {
        (c(e), g(null));
    }
    if (null != h) {
        let e = h.trim(),
            t = e === pV;
        return (0, r.jsxs)(tJ.B, {
            direction: "horizontal",
            align: "end",
            gap: 8,
            children: [
                (0, r.jsx)("div", {
                    className: pb.km,
                    children: (0, r.jsx)(f.k, {
                        label: "Profile name",
                        value: h,
                        onChange: g,
                        autoFocus: !0,
                        error: t ? `${pV} is built in and can't be overwritten` : void 0,
                        onKeyDown: (a) => {
                            ("Enter" === a.key && e.length > 0 && !t && x(e), "Escape" === a.key && g(null));
                        },
                    }),
                }),
                (0, r.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    text: e in n ? "Overwrite" : "Save",
                    disabled: 0 === e.length || t,
                    onClick: () => x(e),
                }),
                (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Cancel", onClick: () => g(null) }),
            ],
        });
    }
    return (0, r.jsxs)(tJ.B, {
        direction: "horizontal",
        align: "end",
        gap: 8,
        wrap: !0,
        children: [
            (0, r.jsx)("div", {
                className: pb.km,
                children: (0, r.jsx)(j.l, {
                    label: null != i && a ? "Profile (modified)" : "Profile",
                    placeholder: "Unsaved settings",
                    selectionMode: "single",
                    options: l.map((e) => ({ id: e, value: e, label: e })),
                    value: i,
                    onSelectionChange: d,
                    fullWidth: !0,
                }),
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Save",
                disabled: null == s || !a,
                onClick: () => null != s && x(s),
            }),
            (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Save as\u2026", onClick: () => g(s ?? "") }),
            (0, r.jsx)(p.$, {
                variant: "critical-secondary",
                size: "sm",
                text: "Delete",
                disabled: null == s,
                onClick: () => null != s && u(s),
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Import",
                onClick: async function () {
                    try {
                        let { name: e, settings: t } = (function (e) {
                            let t = Uint8Array.from(atob(e.trim()), (e) => e.charCodeAt(0)),
                                a = JSON.parse(new TextDecoder().decode(t));
                            if (!e3().isPlainObject(a)) throw Error("Not an exported profile");
                            let { name: n, settings: l } = a;
                            if ("string" != typeof n || !e3().isPlainObject(l)) throw Error("Not an exported profile");
                            return { name: n.trim(), settings: pH(l, pv.X) };
                        })(
                            await (ns.isPlatformEmbedded
                                ? Promise.resolve(uM.Ay.readClipboard())
                                : window.navigator.clipboard.readText()),
                        );
                        (0, l1.P0)({ text: `Switched to imported profile "${m(e, t)}"`, variant: "success" });
                    } catch {
                        (0, l1.P0)({
                            text: "Clipboard does not hold an exported spatial audio profile",
                            variant: "critical",
                        });
                    }
                },
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Export",
                onClick: function () {
                    var e;
                    let a;
                    (0, nY.C)(
                        ((e = i ?? "Untitled"),
                        (a = e3().merge(e3().cloneDeep(pW), pH(t, pv.X))),
                        btoa(
                            String.fromCharCode(...new TextEncoder().encode(JSON.stringify({ name: e, settings: a }))),
                        )),
                        () => (0, l1.P0)({ text: "Copied spatial audio profile to clipboard", variant: "success" }),
                        () => (0, l1.P0)({ text: "Could not copy to clipboard", variant: "critical" }),
                    );
                },
            }),
        ],
    });
}
function pJ() {
    let { overrides: e, spatialEnabled: t } = (0, d.cf)([pg.A], () => ({
            overrides: pg.A.getSpatialAudioOverrides(),
            spatialEnabled: pg.A.isSpatialAudioEnabled(),
        })),
        { enabled: a } = px.A.useConfig({ location: "DevToolsSpatialAudioPanel" }),
        n = t && a,
        l = (function (e, t) {
            let [a, n] = o.useState(() => e3().omit(tq.w.get(p$) ?? {}, pV)),
                l = [pV, ...Object.keys(a).sort((e, t) => e.localeCompare(t))];
            function i(e) {
                return e === pV ? pY : a[e];
            }
            let [s, r] = o.useState(() => {
                let a = pz(e, t);
                return l.find((e) => 0 === pK(a, pz(i(e), t)));
            });
            function d(e) {
                (n(e), tq.w.set(p$, e));
            }
            return {
                profiles: a,
                names: l,
                activeName: s,
                baseline: (null != s ? i(s) : void 0) ?? pY,
                editableName: s === pV ? void 0 : s,
                select(e) {
                    (r(e), pl.default.setSpatialAudioOverrides(e3().cloneDeep(i(e))));
                },
                save(t) {
                    (d({ ...a, [t]: e3().cloneDeep(e) }), r(t));
                },
                remove(e) {
                    (d(e3().omit(a, e)), r(void 0));
                },
                add(e, t) {
                    let n = (function (e, t) {
                        if (!t.includes(e)) return e;
                        let a = /^(.*?)\s+(\d+)$/.exec(e),
                            n = a?.[1] ?? e,
                            l = null != a ? Number(a[2]) + 1 : 1;
                        for (; t.includes(`${n} ${l}`);) l++;
                        return `${n} ${l}`;
                    })(e.length > 0 ? e : "Imported", l);
                    return (d({ ...a, [n]: t }), r(n), pl.default.setSpatialAudioOverrides(e3().cloneDeep(t)), n);
                },
            };
        })(e, n),
        { baseline: i } = l,
        s = o.useMemo(() => pz(e, n), [e, n]),
        c = o.useMemo(() => pz(i, n), [i, n]),
        m = pK(s, c),
        h = o.useMemo(
            () => ({
                resolved: s,
                isOverridden: (e) => !e3().isEqual(e3().get(s, e), e3().get(c, e)),
                set: (t, a) =>
                    pl.default.setSpatialAudioOverrides(
                        "isSpatial" !== t || e3().has(i, t) || a !== e3().get(c, t)
                            ? e3().set(e3().cloneDeep(e), t, a)
                            : pC(e, t),
                    ),
                reset: (t) =>
                    pl.default.setSpatialAudioOverrides(
                        e3().has(i, t) ? e3().set(e3().cloneDeep(e), t, e3().cloneDeep(e3().get(i, t))) : pC(e, t),
                    ),
            }),
            [e, i, s, c],
        );
    return (0, r.jsx)(x.Ip, {
        className: t0.nd,
        children: (0, r.jsx)(py.Provider, {
            value: h,
            children: (0, r.jsxs)("div", {
                className: pb.kL,
                children: [
                    (0, r.jsx)(pq, { overrides: e, modified: m > 0, profiles: l }),
                    (0, r.jsx)(pB, {
                        overrideCount: m,
                        onResetAll: () => pl.default.setSpatialAudioOverrides(e3().cloneDeep(i)),
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Output",
                        children: [
                            (0, r.jsx)(pN, {
                                path: "isSpatial",
                                label: "Spatial audio",
                                description:
                                    "Overrides the voice settings toggle without saving it, bypassing the experiment. Still needs a supporting media engine.",
                            }),
                            (0, r.jsx)(pN, {
                                path: "limiterEnabled",
                                label: "Limiter",
                                description: "Runs the WebRTC limiter on the mixed output to keep it from clipping.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Binaural rendering",
                        children: [
                            (0, r.jsx)(pP, {}),
                            (0, r.jsx)(pA, {
                                path: "binaural.spatialBlend",
                                label: "Spatial blend",
                                description: "0 plays sources unspatialized, 1 fully through the HRTF.",
                                min: 0,
                                max: 1,
                                step: 0.01,
                                decimals: 2,
                            }),
                            (0, r.jsx)(pA, {
                                path: "binaural.hrtfVolume",
                                label: "HRTF volume",
                                description: "Linear gain applied to the HRTF data. Rebuilds the HRTF.",
                                min: 0,
                                max: 2,
                                step: 0.05,
                                decimals: 2,
                                unit: "\xd7",
                            }),
                            (0, r.jsx)(pN, {
                                path: "binaural.bilinearInterpolation",
                                label: "Bilinear interpolation",
                                description:
                                    "Interpolate between HRTF measurements instead of snapping to the nearest. Smoother moving sources, more CPU.",
                            }),
                            (0, r.jsx)(pN, {
                                path: "binaural.hrtfNormalization",
                                label: "HRTF normalization",
                                description: "RMS-normalize the HRTF frequency response. Rebuilds the HRTF.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Distance attenuation",
                        children: [
                            (0, r.jsx)(pN, {
                                path: "distanceAttenuation.enabled",
                                label: "Enabled",
                                description: "Inverse-distance falloff.",
                            }),
                            (0, r.jsx)(pA, {
                                path: "distanceAttenuation.minDistance",
                                label: "Min distance",
                                description:
                                    "Sources closer than this are not attenuated. Shared with the reflection simulation.",
                                min: 0.1,
                                max: 10,
                                step: 0.1,
                                decimals: 1,
                                unit: " m",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Air absorption",
                        children: [
                            (0, r.jsx)(pN, {
                                path: "airAbsorption.enabled",
                                label: "Enabled",
                                description: "Frequency-dependent damping over distance.",
                            }),
                            (0, r.jsx)(pw, {
                                path: "airAbsorption.coefficients",
                                label: "Coefficients",
                                description: "Exponential decay per metre, per band.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Reflections",
                        children: [
                            (0, r.jsx)(pN, {
                                path: "reflections.enabled",
                                label: "Enabled",
                                description: "Simulate room reverb per source.",
                            }),
                            (0, r.jsx)(pA, {
                                path: "reflections.mixLevel",
                                label: "Mix level",
                                description:
                                    "Gain on the reflections before they are added to the direct sound. 1 is physically based.",
                                min: 0,
                                max: 2,
                                step: 0.01,
                                decimals: 2,
                                unit: "\xd7",
                            }),
                            (0, r.jsx)(pA, {
                                path: "reflections.durationSeconds",
                                label: "IR duration",
                                description: "Length of the simulated impulse response.",
                                min: 0.1,
                                max: 2,
                                step: 0.05,
                                decimals: 2,
                                unit: " s",
                            }),
                            (0, r.jsx)(pA, {
                                path: "reflections.numRays",
                                label: "Rays",
                                description: "Rays traced per simulation run.",
                                min: 64,
                                max: 4096,
                                step: 64,
                                decimals: 0,
                            }),
                            (0, r.jsx)(pA, {
                                path: "reflections.numBounces",
                                label: "Bounces",
                                description: "Reflections followed per ray.",
                                min: 1,
                                max: 64,
                                step: 1,
                                decimals: 0,
                            }),
                            (0, r.jsx)(pA, {
                                path: "reflections.irradianceMinDistance",
                                label: "Irradiance min distance",
                                description:
                                    "Closest a source counts as being to a surface. Raise it to tame reflections near walls.",
                                min: 0.1,
                                max: 5,
                                step: 0.1,
                                decimals: 1,
                                unit: " m",
                            }),
                            (0, r.jsx)(pN, {
                                path: "reflections.binauralDecode",
                                label: "Binaural decode",
                                description: "Decode the ambisonic reverb through the HRTF rather than panning it.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Room",
                        children: [
                            (0, r.jsx)(pF, {}),
                            (0, r.jsx)(pM, { path: "reflections.room.minCorner", label: "Min corner" }),
                            (0, r.jsx)(pM, { path: "reflections.room.maxCorner", label: "Max corner" }),
                            (0, r.jsx)(pG, { path: "reflections.room.floor", label: "Floor" }),
                            (0, r.jsx)(pG, { path: "reflections.room.ceiling", label: "Ceiling" }),
                            (0, r.jsx)(pG, { path: "reflections.room.walls", label: "Walls" }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var pQ = a(803306),
    pX = a(191115),
    pZ = a(189213),
    p0 = a(543767),
    p1 = a(811091),
    p2 = a(105909);
let p3 = [
    { id: "1week", label: "1 Week", value: 0 },
    { id: "1month", label: "1 Month (Bronze)", value: 1 },
    { id: "3months", label: "3 Months (Silver)", value: 3 },
    { id: "6months", label: "6 Months (Gold)", value: 6 },
    { id: "1year", label: "1 Year (Platinum)", value: 12 },
    { id: "2years", label: "2 Years (Diamond)", value: 24 },
    { id: "3years", label: "3 Years (Emerald)", value: 36 },
    { id: "5years", label: "5 Years (Ruby)", value: 60 },
    { id: "6years", label: "6 Years (Opal)", value: 72 },
];
function p6() {
    let [e, t] = o.useState(!1),
        a = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        n = (0, p2.Lh)(),
        l = (0, d.bG)([oc.A], () => oc.A.getPremiumTypeSubscription()),
        i = null != n ? (tL.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        s = o.useCallback(
            async (e) => {
                let n = new Date();
                (e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2));
                let i = {
                    subscription_status: ep.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: p1.default.fromTimestamp(n.getTime()),
                };
                (t(!0),
                    await l9.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: i, rejectWithError: (0, l9.fT)() }),
                    await (0, pQ.eO)(a.id),
                    await (0, dq.hP)(),
                    t(!1));
            },
            [l, a],
        );
    if (null != a && null != l)
        return (0, r.jsx)(j.l, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: e,
            value: i,
            options: p3,
            onSelectionChange: s,
        });
}
var p5 =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    p8 =
        (((i = {})[(i.REWIND = 1)] = "REWIND"),
        (i[(i.RENEW = 2)] = "RENEW"),
        (i[(i.CANCEL = 3)] = "CANCEL"),
        (i[(i.UNCANCEL = 4)] = "UNCANCEL"),
        (i[(i.TIME_TRAVEL = 5)] = "TIME_TRAVEL"),
        (i[(i.RESET = 6)] = "RESET"),
        (i[(i.PAY_INVOICE = 7)] = "PAY_INVOICE"),
        (i[(i.END = 8)] = "END"),
        (i[(i.RESUME = 9)] = "RESUME"),
        i);
async function p4(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: i } = a;
    return (
        await l9.Bo.post({
            url: `/debug/subscriptions/${e}/transition`,
            body: {
                target_datetime: n?.toISOString(),
                payment_type: l ?? 0,
                transition: t,
                send_reminder_email: i ?? !1,
            },
            rejectWithError: !0,
        })
    ).body;
}
var p9 = a(601107);
let p7 = {
        [ep.Dmq.UNPAID]: "Unpaid",
        [ep.Dmq.ACTIVE]: "Active",
        [ep.Dmq.PAST_DUE]: "Past Due",
        [ep.Dmq.CANCELED]: "Canceled",
        [ep.Dmq.ENDED]: "Ended",
        [ep.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [ep.Dmq.BILLING_RETRY]: "Billing Retry",
        [ep.Dmq.PAUSED]: "Paused",
        [ep.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    ge = {
        [p9.qf.UNKNOWN]: "Unknown",
        [p9.qf.ADMIN]: "Admin",
        [p9.qf.USER]: "User",
        [p9.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [p9.qf.DEFERRED_START]: "Deferred Start",
        [p9.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    gt = [
        { id: "unpaid", label: "Unpaid", value: ep.Dmq.UNPAID },
        { id: "active", label: "Active", value: ep.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: ep.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: ep.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: ep.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: ep.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: ep.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: ep.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: ep.Dmq.PAUSE_PENDING },
    ];
function ga(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [i, s] = o.useState(nU()()),
        [d, c] = o.useState(nU()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [p, x] = o.useState(void 0);
    return (0, r.jsx)(pZ.a, {
        transitionState: l,
        onClose: function () {
            return (a(), Promise.resolve());
        },
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            {
                text: "Time Travel",
                variant: "primary",
                onClick: async function () {
                    if (null == i) return void x("Please select a target date");
                    let [e, l] = d.split(":").map(Number),
                        s = i.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
                    (h(!0), x(void 0));
                    try {
                        (await p4(t.id, p8.TIME_TRAVEL, {
                            targetDate: s,
                            paymentType: p5.DEFAULT,
                            sendReminderEmail: !1,
                        }),
                            n(),
                            a());
                    } catch (e) {
                        x(e.body?.message || e.message || "Failed to time travel");
                    } finally {
                        h(!1);
                    }
                },
                disabled: m || null == i,
            },
        ],
        children: (0, r.jsxs)(tJ.B, {
            gap: 16,
            children: [
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(sT.J, { label: "Target Date", value: i, onSelect: s }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: function (e) {
                            c(e.target.value);
                        },
                        className: oT.Qn,
                    }),
                }),
                (0, r.jsxs)(tJ.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(tJ.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(g.E, {
                                    variant: "body-xs/normal",
                                    className: oT.JX,
                                    children: ["Start: ", nU()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(g.E, {
                                    variant: "body-xs/normal",
                                    className: oT.JX,
                                    children: ["End: ", nU()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != p && (0, r.jsx)(Z.w, { type: "critical", message: p, role: "alert" }),
            ],
        }),
    });
}
function gn(e) {
    let { subscription: t } = e,
        [a] = (0, p0.C8)({
            subscriptionId: null != t ? t.id : "",
            preventFetch: null == t || t.status !== ep.Dmq.PAST_DUE,
        }),
        { analyticsLocations: n } = (0, nx.Ay)(tI.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return t.status !== ep.Dmq.PAST_DUE
        ? null
        : (0, r.jsx)(p.$, {
              variant: "critical-primary",
              text: "Open Past Due Checkout",
              size: "sm",
              disabled: null == a,
              onClick: () => {
                  null != a &&
                      (0, d3.A)({ initialPlanId: t.planIdFromItems, openInvoiceId: a.id, analyticsLocations: n });
              },
          });
}
let gl = [
    { id: "us", label: "United States (USD)", value: "US" },
    { id: "gb", label: "United Kingdom (GBP)", value: "GB" },
    { id: "de", label: "Germany (EUR)", value: "DE" },
    { id: "mx", label: "Mexico (MXN)", value: "MX" },
    { id: "jp", label: "Japan (JPY)", value: "JP" },
];
function gi(e) {
    let { subscription: t } = e,
        [a, n] = o.useState(!1),
        [l, i] = o.useState(null),
        [s, d] = o.useState("DE");
    if (t.status !== ep.Dmq.PAST_DUE) return null;
    function c(e) {
        return e?.body?.message ?? e?.message ?? "Something went wrong";
    }
    return (0, r.jsxs)(tJ.B, {
        gap: 8,
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Magic Link Testing" }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Send Dunning Email Now",
                disabled: a,
                onClick: async function () {
                    n(!0);
                    try {
                        (await l9.Bo.post({
                            url: `/debug/subscriptions/${t.id}/send-past-due-email`,
                            rejectWithError: !0,
                        }),
                            i({
                                type: "success",
                                message: "Dunning email sent, check your inbox and click the link there.",
                                role: "status",
                            }));
                    } catch (e) {
                        i({ type: "critical", message: c(e), role: "alert" });
                    }
                    n(!1);
                },
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Copy Link Instead",
                disabled: a,
                onClick: async function () {
                    n(!0);
                    try {
                        let { link: e } = (
                            await l9.Bo.post({
                                url: `/debug/subscriptions/${t.id}/past-due-magic-link`,
                                rejectWithError: !0,
                            })
                        ).body;
                        (await navigator.clipboard.writeText(e),
                            i({ type: "success", message: "Link copied to clipboard.", role: "status" }));
                    } catch (e) {
                        i({ type: "critical", message: c(e), role: "alert" });
                    }
                    n(!1);
                },
            }),
            (0, r.jsx)(j.l, {
                label: "Store Country",
                hideLabel: !0,
                value: s,
                options: gl,
                onSelectionChange: d,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Set Store Country (Void + Reissue Invoice)",
                disabled: a,
                onClick: async function () {
                    n(!0);
                    try {
                        (await l9.Bo.post({ url: "/debug/store-country", body: { country: s }, rejectWithError: !0 }),
                            i({ type: "success", message: `Store country set to ${s}.`, role: "status" }));
                    } catch (e) {
                        i({ type: "critical", message: c(e), role: "alert" });
                    }
                    n(!1);
                },
            }),
            null != l && (0, r.jsx)(Z.w, { type: l.type, message: l.message, role: l.role }),
        ],
    });
}
function gs(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [i, s] = o.useState(!1),
        [d, c] = o.useState(!1),
        [m, h] = o.useState(!1),
        [x, v] = o.useState(!1),
        [b, f] = o.useState(null);
    function y(e) {
        let t = new Date(e);
        return p1.default.fromTimestamp(t.getTime());
    }
    async function E(e) {
        let { status: t = n.status, premiumStreakStart: a, endedAt: i } = e,
            s = {
                subscription_status: t,
                ...(null != a ? { premium_streak_started_at: y(a) } : null),
                ...(null != i ? { ended_at: y(i) } : null),
            };
        (await l9.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: s, rejectWithError: !1 }), l());
    }
    let C = tL.hd[n.planIdFromItems]?.premiumType === tL.PremiumTypes.TIER_0,
        S = n.metadata?.ended_at,
        _ = null != S ? new Date(S).toISOString().substring(0, 10) : "",
        N = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in p7) ? p7[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        A = n.hasActiveTrial,
        k = n.metadata?.active_discount_id != null;
    return (
        A && N.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        k && N.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== ep.Dmq.ACTIVE &&
            N.push({
                id: "dates",
                label: `Dates: ${(0, nq.i$)(n.createdAt, "LL")} - ${(0, nq.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === ep.Dmq.PAUSED &&
            N.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in ge ? ge[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: Q()(iU.Nr, C ? iU.Qf : iU.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == (a = n.planIdFromItems) ? "No plan id" : a in tL.hd ? tL.hd[a].name : `Unknown plan id ${a}`}`,
                className: oT.lI,
                children: [
                    (0, r.jsx)(oD.C, { items: N, label: "Subscription details" }),
                    A &&
                        (0, r.jsxs)("div", {
                            className: oT.VK,
                            children: [
                                (0, r.jsxs)(X.D, {
                                    onClick: function () {
                                        h(!m);
                                    },
                                    className: oT.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(g.E, {
                                                variant: "body-md/semibold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(iw.A, { direction: m ? iw.A.Directions.UP : iw.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: oT.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/semibold",
                                                        children: "trial_id",
                                                    }),
                                                    (0, r.jsx)(g.E, { variant: "body-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/semibold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, nq.i$)(n.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    k &&
                        (0, r.jsxs)("div", {
                            className: oT.VK,
                            children: [
                                (0, r.jsxs)(X.D, {
                                    onClick: function () {
                                        v(!x);
                                    },
                                    className: oT.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(g.E, {
                                                variant: "body-md/semibold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(iw.A, { direction: x ? iw.A.Directions.UP : iw.A.Directions.DOWN }),
                                    ],
                                }),
                                x &&
                                    (0, r.jsxs)("ul", {
                                        className: oT.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/semibold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/semibold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, nq.i$)(
                                                                      new Date(n.metadata?.active_discount_expires_at),
                                                                      "LL",
                                                                  )
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    null != n.metadata &&
                        (0, r.jsxs)("div", {
                            className: oT.VK,
                            children: [
                                (0, r.jsxs)(X.D, {
                                    onClick: function () {
                                        s(!i);
                                    },
                                    className: oT.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(g.E, {
                                                variant: "body-md/semibold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(iw.A, { direction: i ? iw.A.Directions.UP : iw.A.Directions.DOWN }),
                                    ],
                                }),
                                i &&
                                    (0, r.jsx)("ul", {
                                        className: oT.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(g.E, { variant: "body-md/semibold", children: t }),
                                                        (0, r.jsx)(g.E, { variant: "body-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: oT.VK,
                        children: [
                            (0, r.jsxs)(X.D, {
                                onClick: function () {
                                    c(!d);
                                },
                                className: oT.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(g.E, {
                                            variant: "body-md/semibold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(iw.A, { direction: d ? iw.A.Directions.UP : iw.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(tJ.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(j.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: gt,
                                            onSelectionChange: (e) => {
                                                E({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(tJ.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(p.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) =>
                                                                (async function () {
                                                                    try {
                                                                        await p4(n.id, p8.RENEW, {
                                                                            targetDate: nU()(new Date()),
                                                                            paymentType: p5.DEFAULT,
                                                                            sendReminderEmail: !1,
                                                                        });
                                                                    } catch (e) {
                                                                        f(
                                                                            e.body?.message ||
                                                                                e.message ||
                                                                                "Failed to renew subscription",
                                                                        );
                                                                    }
                                                                    l();
                                                                })(),
                                                        }),
                                                        (0, r.jsx)(p.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Simulate Failed Renewal (Past Due)",
                                                            onClick: (e) =>
                                                                (async function () {
                                                                    try {
                                                                        await p4(n.id, p8.RENEW, {
                                                                            targetDate: nU()(new Date()),
                                                                            paymentType: p5.FAILURE,
                                                                            sendReminderEmail: !1,
                                                                        });
                                                                    } catch (e) {
                                                                        f(
                                                                            e.body?.message ||
                                                                                e.message ||
                                                                                "Failed to simulate failed renewal",
                                                                        );
                                                                    }
                                                                    l();
                                                                })(),
                                                        }),
                                                        (0, r.jsx)(gn, { subscription: n }),
                                                        (0, r.jsx)(gi, { subscription: n }),
                                                        (0, r.jsx)(p.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, eJ.mM)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(ga, {
                                                                            subscription: n,
                                                                            onUpdated: l,
                                                                            ...e,
                                                                        }),
                                                                    ),
                                                                );
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                null !== b &&
                                                    (0, r.jsx)("div", {
                                                        className: oT.z3,
                                                        children: (0, r.jsx)(Z.w, {
                                                            type: "critical",
                                                            message: b,
                                                            role: "alert",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(tJ.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(sT.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: nU()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => E({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(p6, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(sT.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== _ ? nU()(_) : void 0,
                                            onSelect: (e) => E({ endedAt: e.toISOString() }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
let gr = [
    { id: "nitro-monthly", label: "Nitro Monthly", value: tL.gD.PREMIUM_MONTH_TIER_2 },
    { id: "nitro-yearly", label: "Nitro Yearly", value: tL.gD.PREMIUM_YEAR_TIER_2 },
    { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: tL.gD.PREMIUM_MONTH_TIER_1 },
    { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: tL.gD.PREMIUM_YEAR_TIER_1 },
    { id: "basic-monthly", label: "Basic Monthly", value: tL.gD.PREMIUM_MONTH_TIER_0 },
    { id: "basic-yearly", label: "Basic Yearly", value: tL.gD.PREMIUM_YEAR_TIER_0 },
    { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: tL.gd },
    { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: tL.Uk },
    { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: tL.gD.PREMIUM_GROUP_MONTH },
];
function go() {
    let e = (0, d.bG)([oc.A], () => oc.A.getPremiumTypeSubscription()),
        t = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, i] = o.useState([]),
        [s, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                (c(!0),
                    await (0, dq.hP)(),
                    await (0, pQ.eO)(t.id),
                    i(
                        await (async function () {
                            return (
                                await l9.Bo.get({
                                    url: ep.Rsh.BILLING_SUBSCRIPTIONS,
                                    query: { include_inactive: !0, limit: 5 },
                                    rejectWithError: (0, l9.fT)(),
                                })
                            ).body.map((e) => pX.A.createFromServer(e));
                        })(),
                    ));
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => l.filter((e) => e.status !== ep.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]);
    return (0, r.jsx)(x.Ip, {
        className: t0.nd,
        children: (0, r.jsxs)("div", {
            className: iU.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: iU.dL,
                    children: [
                        (0, r.jsx)(ee.D, {
                            variant: "heading-lg/semibold",
                            className: t0.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eK.K, {
                            "aria-label": "Refresh",
                            icon: iO.RefreshIcon,
                            size: "sm",
                            variant: "icon-only",
                            disabled: s,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: Q()([iU.uW, iU.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: gr,
                                    onSelectionChange: n,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: async function () {
                                        (await l9.Bo.post({
                                            url: "/debug/subscription",
                                            body: { plan_id: a },
                                            rejectWithError: (0, l9.fT)(),
                                        }),
                                            await u());
                                    },
                                }),
                            ],
                        }),
                }),
                null != e && (0, r.jsx)(gs, { subscription: e, onUpdated: u }),
                (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", className: t0.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: Q()([iU.uW, iU.Uo]),
                    children: (0, r.jsx)(p.$, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: async function () {
                            (await l9.Bo.del({ url: "/debug/subscription", rejectWithError: (0, l9.fT)() }), await u());
                        },
                    }),
                }),
                m.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ee.D, {
                                variant: "heading-lg/semibold",
                                className: t0.wx,
                                children: "Previous Subscriptions",
                            }),
                            m.map((e) => (0, r.jsx)(gs, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var gd = a(284009),
    gc = a.n(gd),
    gu = a(889137),
    gm = a(323889),
    gh = a(412703),
    gp = a(440703),
    gg = a(267548),
    gx = a(668824),
    gv = a(695366),
    gb = a(993077),
    gj = a(506988),
    gf = a(417404),
    gy = a(792620),
    gE = a(557637),
    gC = a(66246),
    gS = a(717695),
    g_ = a(10394),
    gN = a(127219),
    gA = a(107543),
    gk = a(793217),
    gD = a(317097),
    gI = a(452027),
    gT = a(265872),
    gR = a(714385),
    gO = a(581244);
let gw = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        i = o.useRef(null);
    return (0, r.jsx)(gI.D, {
        label: l,
        children: (0, r.jsx)(gT.Y, {
            targetElementRef: i,
            renderPopout: (e) => (0, r.jsx)(ux.VN, { ...e, value: a, onChange: (e) => n(t, (0, gD.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(X.D, {
                    ...e,
                    innerRef: i,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: gO.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(gR.d, { size: "xs", color: "currentColor", className: gO.WY }),
                }),
        }),
    });
};
var gM = a(346055);
let gP = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(gM.M, {
        children: (0, r.jsx)(gb.Z, {
            className: Q()(gO.Rx, { [gO.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: gO.AZ,
                onClickCapture: t
                    ? void 0
                    : function (e) {
                          e.stopPropagation();
                      },
                children: a,
            }),
        }),
    });
};
var gL = a(643374);
let gU = function (e) {
        let { assetKey: t, filters: a, initialValue: n, onFileChange: l, title: i } = e,
            [s, d] = o.useState(null),
            c = o.useRef(null);
        return (
            o.useEffect(
                () => () => {
                    null != c.current && URL.revokeObjectURL(c.current);
                },
                [],
            ),
            (0, r.jsx)(gI.D, {
                label: i,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(gL.A, {
                    filename: s?.name ?? n ?? "",
                    filters: [{ name: i, extensions: a }],
                    buttonText: "Browse",
                    placeholder: "Select an asset",
                    onFileSelect: function (e) {
                        if ((d(e ?? null), null == e)) return;
                        let a = URL.createObjectURL(e);
                        c.current = a;
                        let n = new URL(a);
                        (n.searchParams.append("mimetype", e.type),
                            n.searchParams.append("name", e.name),
                            l(t, n.toString()));
                    },
                }),
            })
        );
    },
    gG = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: n, title: l } = e,
            [i, s] = o.useState("");
        return (
            o.useEffect(() => {
                s(a ?? "");
            }, [a]),
            (0, r.jsx)(f.k, {
                label: l,
                value: i,
                onChange: function (e) {
                    (s(e), n(t, e));
                },
            })
        );
    };
var gF = a(61387);
let gB = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, gF.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
        l = [
            { id: "none", label: "NONE", value: null },
            ...n.map((e) => ({ id: e.id, label: e.config.messages.questName, value: e })),
        ];
    return (0, r.jsx)(j.l, {
        label: "Prefill with Quest",
        options: l,
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
var g$ = a(843282),
    gV = a(714269);
let gW = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    gH = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(tJ.B, {
            gap: 20,
            children: [
                (0, r.jsx)(g$.Pw, {
                    label: "Task Type(s)",
                    className: gV.Z,
                    placeholder: "Select Task Preset",
                    options: gW,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, i, s, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = gh.n.PLAY_ON_PLAYSTATION in t || gh.n.PLAY_ON_XBOX in t),
                            (l = gh.n.PLAY_ON_DESKTOP in t),
                            (i = gh.n.STREAM_ON_DESKTOP in t),
                            (s = gh.n.WATCH_VIDEO in t),
                            (r = gh.n.PLAY_ACTIVITY in t),
                            a && l ? 4 : a ? 3 : l ? 0 : i ? 1 : s ? 2 : r ? 5 : void 0)
                        );
                    },
                    select: (e) => {
                        t({
                            ...n,
                            tasks: (function (e, t) {
                                let a = {};
                                switch (e) {
                                    case 1:
                                        a[gh.n.STREAM_ON_DESKTOP] = { type: gh.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[gh.n.PLAY_ON_DESKTOP] = { type: gh.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        ((a[gh.n.PLAY_ON_PLAYSTATION] = {
                                            type: gh.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[gh.n.PLAY_ON_XBOX] = {
                                                type: gh.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 4:
                                        ((a[gh.n.PLAY_ON_DESKTOP] = { type: gh.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[gh.n.PLAY_ON_PLAYSTATION] = {
                                                type: gh.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[gh.n.PLAY_ON_XBOX] = {
                                                type: gh.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 2:
                                        a[gh.n.WATCH_VIDEO] = {
                                            type: gh.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[gh.n.PLAY_ACTIVITY] = { type: gh.n.PLAY_ACTIVITY, target: t };
                                }
                                return a;
                            })(e, a),
                        });
                    },
                    serialize: String,
                    "data-migration-pending": !0,
                }),
                (0, r.jsx)(f.k, {
                    label: "Task Duration",
                    value: String(a / o8.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= o8.A.Seconds.MINUTE;
                        let l = Object.fromEntries(
                            Object.entries(n.tasks).map((e) => {
                                let [t, n] = e;
                                return [t, { ...n, target: a }];
                            }),
                        );
                        t({ ...n, tasks: l });
                    },
                }),
            ],
        });
    };
var gz = a(818348);
let gK = function () {
    let e = (0, eb.Ay)();
    return (0, r.jsx)(gI.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(ej.zy, {
                    theme: gz.NJ.LIGHT,
                    isSelected: e === gz.NJ.LIGHT,
                    onSelect: () => (0, cz.u_)({ theme: gz.NJ.LIGHT }),
                }),
                (0, r.jsx)(ej.zy, {
                    theme: gz.NJ.DARK,
                    isSelected: e === gz.NJ.DARK,
                    onSelect: () => (0, cz.u_)({ theme: gz.NJ.DARK }),
                }),
            ],
        }),
    });
};
var gY =
    (((s = {})[(s.UNENROLLED = 0)] = "UNENROLLED"),
    (s[(s.ENROLLED = 1)] = "ENROLLED"),
    (s[(s.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (s[(s.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (s[(s.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (s[(s.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (s[(s.CLAIMED = 6)] = "CLAIMED"),
    s);
let gq = function (e) {
    let { onChange: t, value: a } = e;
    return (0, r.jsx)(j.l, {
        label: "User State",
        options: [
            { id: "unenrolled", label: "Unenrolled", value: 0 },
            { id: "enrolled", label: "Enrolled", value: 1 },
            { id: "25%", label: "25% Complete", value: 2 },
            { id: "50%", label: "50% Complete", value: 3 },
            { id: "75%", label: "75% Complete", value: 4 },
            { id: "100%", label: "100% Complete", value: 5 },
            { id: "claimed", label: "Claimed", value: 6 },
        ],
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
var gJ = a(321538);
let gQ = ["png", "gif", "webp"],
    gX = [...gQ, "jpg", "jpeg"],
    gZ = Array.from(new Set([...gX, "gif", "mp4", "webm"]));
function g0() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: a = null, enrolledAt: n = null, claimedAt: l = null } = e;
    return {
        userId: "123",
        questId: "1193992107035983872",
        enrolledAt: n,
        completedAt: a,
        claimedAt: l,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let g1 = "1193992107035983872",
    g2 = {
        id: g1,
        preview: !0,
        config: {
            id: g1,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            messages: { questName: "Sky Runners", gameTitle: "Sky Runners", gamePublisher: "Discord" },
            colors: { primary: "#B377F3", secondary: "#5865F2" },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: "",
                        asset: "reward.png",
                        assetVideo: null,
                        type: gp.l.REWARD_CODE,
                        messages: {
                            name: "Orange Buddy Jetpack",
                            nameWithArticle: "an Orange Buddy Jetpack",
                            redemptionInstructionsByPlatform: {
                                0: "This code can be used on any platform!",
                                1: "Redeem your code on your Xbox.",
                                2: "Redeem your code on your Playstation.",
                                3: "Redeem your code on your Switch.",
                                4: "Redeem your code on your PC.",
                            },
                        },
                    },
                ],
                rewardsExpireAt: "2030-01-01T00:00:00+00:00",
                platforms: [0, 4, 2, 3, 1],
            },
            assets: {
                hero: "hero.png",
                heroVideo: null,
                questBarHero: "quests_bar_hero.webm",
                questBarHeroVideo: null,
                gameTile: "game_tile.png",
                logotype: "game_logotype.png",
                questBarHeroBlurhash: null,
            },
            taskConfigV2: {
                joinOperator: gx.K.AND,
                tasks: {
                    [gh.n.PLAY_ON_DESKTOP]: { type: gh.n.PLAY_ON_DESKTOP, target: 300, applications: [{ id: "123" }] },
                },
            },
            features: [],
            sharePolicy: gg.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function g3() {
    var e;
    let [t, n] = o.useState(g2),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [i, s] = o.useState(gY.UNENROLLED),
        [d, c] = o.useState(!1),
        [u, h] = o.useState(!1),
        [v, b] = o.useState(null),
        j =
            ((e = t.config),
            (0, gu.YW)(e)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function f(e, a) {
        if (
            "hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e
        ) {
            var n, i;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (i = { [e]: a }),
                    (0, gu.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function y(e, a) {
        let n = t.config.taskConfigV2.tasks,
            i = n[gh.n.WATCH_VIDEO];
        if (null == i) return;
        let s = { ...i.assets };
        switch (e) {
            case "videoPlayerVideo":
                s.video = { url: a };
                break;
            case "videoPlayerVideoLowRes":
                s.videoLowRes = { url: a };
                break;
            case "videoPlayerThumbnail":
                s.video = { ...s.video, thumbnail: a };
                break;
            default:
                return;
        }
        l({
            ...t,
            config: {
                ...t.config,
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [gh.n.WATCH_VIDEO]: { ...i, assets: s } } },
            },
        });
    }
    function E(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, i;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (i = { [e]: a }),
                    (0, gu.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function C(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var i, s;
            l({
                ...t,
                config:
                    ((i = t.config),
                    (s = { [e]: a }),
                    (0, gu.YW)(i)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, t) =>
                                    t === n ? { ...e, messages: { ...e.messages, ...s } } : e,
                                ),
                            },
                        }))
                        .exhaustive()),
            });
        }
    }
    function S(e, a) {
        l({ ...t, config: { ...t.config, colors: { ...t.config.colors, [e]: a } } });
    }
    function _() {
        (0, gf.tU)(t.config) && (0, gJ.hJ)(t, gj.uF.GIFT_INVENTORY_FOR_YOU, gj.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * o8.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => gh.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    gc()(!1 !== t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[gh.n.WATCH_VIDEO];
    return (0, r.jsxs)(x.Ip, {
        className: gO.kL,
        children: [
            (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", className: gO.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: gO.OA,
                children: (0, r.jsx)(gB, {
                    onSelect: function (e) {
                        (b(e),
                            null == e ||
                                (s(
                                    (function (e) {
                                        if (null == e.userStatus) return gY.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return gY.CLAIMED;
                                        if (null != e.userStatus.completedAt) return gY.COMPLETED_100;
                                        let t = (0, gy.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? gY.COMPLETED_100
                                            : a / n >= 0.75
                                              ? gY.COMPLETED_75
                                              : a / n >= 0.5
                                                ? gY.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? gY.COMPLETED_25
                                                  : gY.ENROLLED;
                                    })(e),
                                ),
                                l(e)));
                    },
                    quest: v,
                }),
            }),
            (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", className: gO.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: gO.OA,
                children: (0, r.jsx)(gH, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", className: gO.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: gO.OA,
                children: [
                    (0, r.jsx)(gG, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: E,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(gG, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: E,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(gG, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: E,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, r.jsx)(gG, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    i = n[gh.n.WATCH_VIDEO];
                                if (null == i) return;
                                let s = { ...i.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [gh.n.WATCH_VIDEO]: { ...i, messages: s } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", className: gO.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: gO.OA,
                children: [
                    (0, r.jsx)(gU, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: f,
                        filters: gZ,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(gU, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: f,
                        filters: gZ,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(gU, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: f,
                        filters: gZ,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(gU, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: f,
                        filters: gZ,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(gU, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: f,
                        filters: [...gX, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(gU, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: f,
                        filters: [...gQ, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(gU, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: y,
                                    filters: gZ,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(gU, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: y,
                                    filters: gZ,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(gU, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: y,
                                    filters: gX,
                                    initialValue: k?.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            j.map((e, a) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(ee.D, {
                                variant: "heading-sm/semibold",
                                className: gO.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: gO.OA,
                                children: [
                                    (0, r.jsx)(gG, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(gG, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== gp.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(gU, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, n) =>
                                                (function (e, a, n) {
                                                    if ("asset" === e) {
                                                        var i;
                                                        l({
                                                            ...t,
                                                            config:
                                                                ((i = t.config),
                                                                (0, gu.YW)(i)
                                                                    .with({ configVersion: 2 }, (e) => ({
                                                                        ...e,
                                                                        rewardsConfig: {
                                                                            ...e.rewardsConfig,
                                                                            rewards: e.rewardsConfig.rewards.map(
                                                                                (e, t) =>
                                                                                    t === n
                                                                                        ? { ...e, asset: a, skuId: "" }
                                                                                        : e,
                                                                            ),
                                                                        },
                                                                    }))
                                                                    .exhaustive()),
                                                        });
                                                    }
                                                })(e, n, a),
                                            filters: gZ,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(tJ.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(ee.D, {
                                                variant: "heading-xs/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, r.jsx)(p.$, {
                                                variant: "primary",
                                                text: "Open Reward Modal",
                                                onClick: _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    },
                    a,
                ),
            ),
            (0, r.jsx)(ee.D, { variant: "heading-sm/semibold", className: gO.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: gO.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: gO.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(gw, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: S,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(gw, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: S,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: gO.OA, children: (0, r.jsx)(gK, {}) }),
                    (0, r.jsx)(gq, {
                        onChange: function (e) {
                            switch ((s(e), e)) {
                                case gY.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case gY.ENROLLED:
                                    l({ ...t, userStatus: g0({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case gY.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: g0({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case gY.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: g0({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case gY.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: g0({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case gY.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: g0({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case gY.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: g0({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                            }
                        },
                        value: i,
                    }),
                ],
            }),
            (0, r.jsx)(ee.D, { variant: "heading-lg/semibold", className: gO.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: gO.$$,
                children: [
                    (0, r.jsxs)(gP, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: gO.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(g.E, {
                                            color: "text-subtle",
                                            variant: "body-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: gO.ok,
                                        children: (0, r.jsx)(gE.y5, {
                                            isPreview: !0,
                                            source: "preview",
                                            adCreativeId: "0",
                                            adCreativeType: gm.p.QUEST,
                                            children: (0, r.jsx)(gS.A, {
                                                children: (0, r.jsx)(gC.QuestBarQuestContent, { quest: t }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(gP, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(gE.y5, {
                                isPreview: !0,
                                source: "preview",
                                adCreativeId: "0",
                                adCreativeType: gm.p.QUEST,
                                children: (0, r.jsx)(gk.Ay, {
                                    quest: t,
                                    className: gO.d,
                                    questContent: gj.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: gj.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(gP, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(g.E, {
                                    color: "text-subtle",
                                    variant: "body-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: gO.l4,
                                children: (0, r.jsx)(gE.y5, {
                                    isPreview: !0,
                                    source: "preview",
                                    adCreativeId: "0",
                                    adCreativeType: gm.p.QUEST,
                                    children: (0, r.jsx)("div", {
                                        className: gO.Jr,
                                        children: (0, r.jsx)(g_.A, {
                                            channelId: "123",
                                            previewQuest: t,
                                            isParticipatingOverride: d,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: gO.NY,
                        children: (0, r.jsx)(m.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                c(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(gP, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Quest Card Embed" }),
                            u
                                ? (0, r.jsx)(gN.l, { questId: t.id })
                                : (0, r.jsx)(
                                      gA.M,
                                      {
                                          quest: t,
                                          location: gj.uF.QUESTS_EMBED,
                                          sourceQuestContent: gj.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: gO.NY,
                        children: (0, r.jsx)(m.d, { label: "Invalid Quests Embed:", checked: u, onChange: h }),
                    }),
                    A &&
                        (0, r.jsxs)(gP, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(ee.D, { variant: "heading-xs/semibold", children: "Video Player" }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, eJ.mM)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e(651585),
                                                a.e(955628),
                                                a.e(572388),
                                                a.e(974119),
                                                a.e(392868),
                                                a.e(852701),
                                                a.e(263408),
                                                a.e(505453),
                                                a.e(182045),
                                                a.e(166631),
                                                a.e(708952),
                                            ]).then(a.bind(a, 491147));
                                            return (a) =>
                                                (0, r.jsx)(n, {
                                                    ...a,
                                                    openStartClockTime: e,
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: gj.uF.INTERNAL_PREVIEW_TOOL,
                                                });
                                        });
                                    },
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
class g6 extends o.Component {
    state = { error: null, renderKey: 0 };
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    handleResetState = () => {
        this.setState((e) => ({ error: null, renderKey: e.renderKey + 1 }));
    };
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, r.jsxs)("div", {
                  className: gO.TA,
                  children: [
                      (0, r.jsx)(gv.E, { className: gO.Yw }),
                      (0, r.jsx)(ee.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(p.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(gb.Z, {
                              className: gO.Fx,
                              children: (0, r.jsx)("code", { className: gO.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(g3, {}, t);
    }
}
var g5 = a(627784),
    g8 = a(839214),
    g4 = a(497029),
    g9 = a(450827),
    g7 = a(626584),
    xe = a(174768),
    xt = a(205761),
    xa = a(949744),
    xn = a(696451),
    xl = a(537975),
    xi = a(926140);
let xs = new g7.A("SearchDebugUtils");
function xr() {
    xs.info("--------------------------");
}
function xo() {
    let e = xe.A.getProps();
    (xs.info("START Quick Switcher State"),
        xs.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((xs.info(`Result Type: ${e.type}`), e.type)) {
                case xi.rD.GUILD:
                    xs.info(`guild id: ${e.record.id}`);
                    break;
                case xi.rD.TEXT_CHANNEL:
                case xi.rD.VOICE_CHANNEL:
                    (xs.info(`channel type: ${e.record.type}`),
                        xs.info(`channel id: ${e.record.id}`),
                        xs.info(`name: ${e.record.name}`));
                    break;
                case xi.rD.DM:
                    (xs.info(`channel type: ${e.record.type}`),
                        xs.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (xs.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = ec.default.getUser(e);
                                null != t &&
                                    (xs.info(`recipient username: ${t.username}`),
                                    xs.info(`recipient global name: ${ex.Ay.getGlobalName(t)}`),
                                    xs.info(`recipient nickname: ${aY.A.getNickname(t.id)}`));
                            })));
                    break;
                case xi.rD.GROUP_DM:
                    (xs.info(`channel type: ${e.record.type}`),
                        xs.info(`channel id: ${e.record.id}`),
                        xs.info(`name: ${(0, az.m1)(e.record, ec.default, aY.A)}`),
                        e.record.isGroupDM() &&
                            (xs.info(`default name: ${(0, az.ks)(e.record, ec.default, aY.A)}`),
                            xs.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = ec.default.getUser(e);
                                null != t &&
                                    (xs.info(`recipient username: ${t.username}`),
                                    xs.info(`recipient global name: ${ex.Ay.getGlobalName(t)}`),
                                    xs.info(`recipient nickname: ${aY.A.getNickname(t.id)}`));
                            })));
                    break;
                case xi.rD.USER:
                    (xs.info(`user id: ${e.record.id}`),
                        xs.info(`username: ${e.record.username}`),
                        xs.info(`global name: ${ex.Ay.getGlobalName(e.record)}`),
                        xs.info(`nickname: ${aY.A.getNickname(e.record.id)}`),
                        xs.info(`guild nicknames: ${xn.Ay.getNicknames(e.record.id)}`));
            }
            (xs.info(`frecency score: ${xt.A.getScoreWithoutFetchingLatest(e.record.id)}`), xr());
        }),
        xs.info("END Quick Switcher State\n"));
}
var xd = a(143919);
function xc(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.$, {
                variant: "primary",
                onClick: l,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : i,
            }),
            null != n &&
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-feedback-critical",
                    className: xd.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-feedback-positive",
                    className: xd.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let xu = (0, g8.D)(() => ({
    includeFrecency: !0,
    includeFriends: !0,
    includeGDMs: !0,
    includeDMs: !0,
    includeQuickSwitcherState: !0,
    includeUserSearchWorkerState: !0,
    isUploading: !1,
    isSuccess: !1,
    errorMessage: null,
}));
function xm() {
    let e = xu.useField("includeFrecency"),
        t = xu.useField("includeFriends"),
        a = xu.useField("includeDMs"),
        n = xu.useField("includeGDMs"),
        l = xu.useField("includeQuickSwitcherState"),
        i = xu.useField("includeUserSearchWorkerState"),
        s = xu.useField("isUploading"),
        d = xu.useField("isSuccess"),
        c = xu.useField("errorMessage"),
        h = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: i,
                isUploading: s,
            } = xu.getState();
            if (!s)
                try {
                    let s, r, o, d, c, u, m, h, p, g, x, v;
                    (xu.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((s = aY.A.getFriendIDs()),
                            xs.info("START Discord Friends"),
                            s.forEach((e) => {
                                let t = ec.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = ex.Ay.getGlobalName(t),
                                    l = aY.A.getNickname(t.id),
                                    i = xn.Ay.getNicknames(t.id);
                                (xs.info(`username: ${a}`),
                                    xs.info(`global name: ${n}`),
                                    xs.info(`nickname: ${l}`),
                                    xs.info(`guild nicknames: ${i}`),
                                    xr());
                            }),
                            xs.info("END Discord Friends\n")),
                        a &&
                            ((r = aK.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                (e.isGroupDM() && o.push(e), e.isDM() && d.push(e));
                            }),
                            xs.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, az.m1)(e, ec.default, aY.A),
                                    a = (0, az.ks)(e, ec.default, aY.A);
                                (xs.info(`id: ${e.id}`),
                                    xs.info(`name: ${t}`),
                                    xs.info(`default name: ${a}`),
                                    xs.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ec.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ex.Ay.getGlobalName(t),
                                            l = aY.A.getNickname(t.id),
                                            i = xn.Ay.getNicknames(t.id);
                                        (xs.info(`username: ${a}`),
                                            xs.info(`global name: ${n}`),
                                            xs.info(`nickname: ${l}`),
                                            xs.info(`guild nicknames: ${i}`),
                                            xr());
                                    }));
                            }),
                            xs.info("END Logging Group DM Channels\n"),
                            xs.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, az.m1)(e, ec.default, aY.A);
                                (xs.info(`id: ${e.id}`), xs.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = ec.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = ex.Ay.getGlobalName(n),
                                    s = aY.A.getNickname(n.id);
                                (xs.info(`username: ${l}`),
                                    xs.info(`global name: ${i}`),
                                    xs.info(`nickname: ${s}`),
                                    xr());
                            }),
                            xs.info("END Logging DM Channels\n")),
                        n &&
                            ((c = aK.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                (e.isGroupDM() && u.push(e), e.isDM() && m.push(e));
                            }),
                            xs.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, az.m1)(e, ec.default, aY.A),
                                    a = (0, az.ks)(e, ec.default, aY.A);
                                (xs.info(`id: ${e.id}`),
                                    xs.info(`name: ${t}`),
                                    xs.info(`default name: ${a}`),
                                    xs.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ec.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ex.Ay.getGlobalName(t),
                                            l = aY.A.getNickname(t.id),
                                            i = xn.Ay.getNicknames(t.id);
                                        (xs.info(`username: ${a}`),
                                            xs.info(`global name: ${n}`),
                                            xs.info(`nickname: ${l}`),
                                            xs.info(`guild nicknames: ${i}`),
                                            xr());
                                    }));
                            }),
                            xs.info("END Logging Group DM Channels\n"),
                            xs.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, az.m1)(e, ec.default, aY.A);
                                (xs.info(`id: ${e.id}`), xs.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = ec.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = ex.Ay.getGlobalName(n),
                                    s = aY.A.getNickname(n.id);
                                (xs.info(`username: ${l}`),
                                    xs.info(`global name: ${i}`),
                                    xs.info(`nickname: ${s}`),
                                    xr());
                            }),
                            xs.info("END Logging DM Channels\n")),
                        e &&
                            ((h = xt.A.getFrequentlyWithoutFetchingLatest()),
                            (p = []),
                            (g = []),
                            (x = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, xl.fh)(e)
                                    ? p.push(e)
                                    : e.isDM()
                                      ? x.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : g.push(e);
                            }),
                            xs.info("START Frecency"),
                            xs.info("Guilds"),
                            p.forEach((e) => {
                                let t = xt.A.getScoreWithoutFetchingLatest(e.id);
                                xs.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            xr(),
                            xs.info("DM Channels"),
                            x.forEach((e) => {
                                let t = xt.A.getScoreWithoutFetchingLatest(e.id);
                                xs.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xr(),
                            xs.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = xt.A.getScoreWithoutFetchingLatest(e.id);
                                (xs.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    xs.info(`default name: ${(0, az.ks)(e, ec.default, aY.A)}`),
                                    xs.info(`name: ${(0, az.m1)(e, ec.default, aY.A)}`));
                            }),
                            xr(),
                            xs.info("Guild Channels"),
                            g.forEach((e) => {
                                let t = xt.A.getScoreWithoutFetchingLatest(e.id);
                                xs.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xr(),
                            xs.info("END Frecency\n")),
                        l && xo(),
                        i &&
                            (async function () {
                                xs.info("START User Search Worker State");
                                let e = await g9.A.requestDebugState();
                                null == e
                                    ? xs.info("Unable to get debug state from User Search Worker")
                                    : (Object.entries(JSON.parse(e.users)).forEach((e) => {
                                          let [t, a] = e;
                                          (xs.info(`id: ${t}`),
                                              xs.info(`username: ${a.username}`),
                                              xs.info(`global name: ${a.globalName}`),
                                              xs.info(`nickname: ${a.friendNickname}`),
                                              Object.entries(a.nicknames).forEach((e) => {
                                                  let [t, a] = e;
                                                  (xs.info(`guild id: ${t}`), xs.info(`guild nickname: ${a}`));
                                              }),
                                              xr());
                                      }),
                                      xs.info("END User Search Worker State\n"));
                            })(),
                        await (0, g4.a)(ep.Umv.WEB_APP),
                        xu.setState({ isSuccess: !0, errorMessage: null }));
                } catch (t) {
                    let e = new g5.LG(t);
                    xu.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    xu.setState({ isUploading: !1 });
                }
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, r.jsx)(m.d, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => xu.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(m.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => xu.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(m.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => xu.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(m.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => xu.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(m.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => xu.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(m.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: i,
                onChange: () => xu.setState({ includeUserSearchWorkerState: !i }),
            }),
            (0, r.jsx)(xc, {
                isUploading: s,
                isSuccess: d,
                errorMessage: c,
                onClick: h,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let xh = (0, g8.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function xp() {
    let e = xh.useField("userIds"),
        t = xh.useField("isLoading"),
        a = xh.useField("isSuccess"),
        n = xh.useField("errorMessage"),
        l = xh.useField("lastRunAt"),
        i = o.useCallback(async () => {
            xh.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await (async function () {
                    let e = await g9.A.requestDebugState();
                    if (null == e) throw Error("Unable to get debug state from User Search Worker");
                    let t = JSON.parse(e.users),
                        a = ec.default.getUsers(),
                        n = new Set(Object.keys(t)),
                        l = p1.default.keys(a),
                        i = [];
                    return (
                        l.forEach((e) => {
                            n.has(e) || i.push(e);
                        }),
                        i
                    );
                })();
                xh.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                xh.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                xh.setState({ isLoading: !1 });
            }
        }, []),
        s = o.useMemo(
            () =>
                e.map((e) => {
                    let t = ec.default.getUser(e),
                        a = null != t ? ex.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: xd.J1,
                            children: (0, r.jsx)(g.E, { variant: "body-md/normal", children: `${a} (${e})` }),
                        },
                        e,
                    );
                }),
            [e],
        );
    return (0, r.jsx)(u.n, {
        label: "Diff User State",
        description: "Click to generate a diff between the client user state and the user worker state.",
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(p.$, { onClick: i, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: xd.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                className: xd.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(g.E, { variant: "body-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: xd.uk, children: s }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(g.E, { variant: "body-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let xg = (0, g8.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function xx() {
    let e = xg.useField("isRecording"),
        t = xg.useField("isUploading"),
        a = xg.useField("isSuccess"),
        n = xg.useField("errorMessage"),
        l = o.useRef([]),
        i = o.useRef(""),
        s = o.useCallback(() => {
            let { results: e, query: t } = xe.A.getProps();
            (l.current !== e || i.current !== t) && ((l.current = e), (i.current = t), xo());
        }, []);
    o.useEffect(() => {
        if (e) return (xe.A.addChangeListener(s), () => xe.A.removeChangeListener(s));
    }, [s, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = xg.getState();
        if (!e)
            try {
                (xg.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, g4.a)(ep.Umv.WEB_APP),
                    xg.setState({ isSuccess: !0, errorMessage: null }));
            } catch (t) {
                let e = new g5.LG(t);
                xg.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                xg.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(Z.w, {
                type: "info",
                message: "When you are done, please remember to upload the logs.",
                role: "none",
            }),
            (0, r.jsxs)(ng.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => xg.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(xc, {
                        isUploading: t,
                        isSuccess: a,
                        errorMessage: n,
                        onClick: d,
                        title: "Upload Session Logs",
                    }),
                ],
            }),
        ],
    });
}
var xv = a(145497);
let xb = (0, g8.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function xj(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: xd.J1,
                children: (0, r.jsx)(g.E, { variant: "body-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: xd.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: xd.J1,
                            children: (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = nC.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: xd.J1,
                                      children: [
                                          (0, r.jsx)(xv.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(g.E, { variant: "body-sm/normal", children: t.name }),
                                      ],
                                  },
                                  e,
                              );
                    }),
                ],
            }),
        ],
    });
}
function xf(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: i } = t,
        s = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sc.y, { size: "sm", color: eQ.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(gv.E, { size: "sm", color: eQ.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: xd.N6,
        children: [
            (0, r.jsxs)("div", {
                className: xd.J1,
                children: [
                    s({ ok: null != a }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: xd.uk,
                    children: (0, r.jsx)("div", {
                        className: xd.J1,
                        children: (0, r.jsx)(g.E, { variant: "body-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: xd.J1,
                children: [
                    s({ ok: null != n }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        children:
                            null != n
                                ? "User exists in User Search Worker"
                                : "User does not exist in User Search Worker",
                    }),
                ],
            }),
            null != n &&
                (0, r.jsxs)("div", {
                    className: xd.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: xd.J1,
                            children: (0, r.jsx)(g.E, {
                                variant: "body-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xd.J1,
                            children: (0, r.jsx)(g.E, {
                                variant: "body-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xd.J1,
                            children: (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: xd.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: xd.J1,
                                        children: (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = nC.A.getGuild(t),
                                        l = aK.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: xd.J1,
                                            children: [
                                                null != n && (0, r.jsx)(xv.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(g.E, { variant: "body-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-sm/normal",
                                                        children: (0, az.m1)(l, ec.default, aY.A),
                                                    }),
                                                (0, r.jsx)(g.E, { variant: "body-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(g.E, { variant: "body-sm/normal", children: ` - ${a}` }),
                                            ],
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: xd.J1,
                children: [
                    s({ ok: l.length > 0 }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: xd.uk,
                    children: l.map((e) => {
                        let t = nC.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: xd.J1,
                                children: [
                                    (0, r.jsx)(xv.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(g.E, {
                                        variant: "body-sm/normal",
                                        children: [t.name, "" !== a ? ` - ${a}` : ""],
                                    }),
                                ],
                            },
                            `${e.guildId}`,
                        );
                    }),
                }),
            (0, r.jsxs)("div", {
                className: xd.J1,
                children: [
                    (0, r.jsx)(ug.CircleInformationIcon, { size: "sm" }),
                    (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != i &&
                (0, r.jsxs)("div", {
                    className: xd.uk,
                    children: [
                        (0, r.jsx)(xj, { title: "Pending Guild Member Requests:", guildIds: i.pendingRequestGuildIds }),
                        (0, r.jsx)(xj, { title: "Sent Guild Member Requests:", guildIds: i.sentRequestGuildIds }),
                        (0, r.jsx)(xj, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: i.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function xy() {
    let e = o.useCallback((e) => {
            xb.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = xb.getState();
            if (!t && null != e) {
                xb.setState({ loading: !0, error: null });
                try {
                    let t = await (async function (e) {
                        let t = await g9.A.requestDebugState(),
                            a = null != t ? JSON.parse(t.users)[e] : null,
                            n = nC.A.getGuildIds(),
                            l = [];
                        n.forEach((t) => {
                            let a = xn.Ay.getMember(t, e);
                            null != a && l.push(a);
                        });
                        let i = xa.A.getDebugState(e);
                        return {
                            user: ec.default.getUser(e),
                            searchWorkerUser: a,
                            guildMembers: l,
                            guildMemberRequests: i,
                        };
                    })(e);
                    xb.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new g5.LG(t);
                    xb.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    xb.setState({ loading: !1 });
                }
            }
        }, []),
        a = xb.useField("loading");
    return (0, r.jsxs)("div", {
        className: xd.$n,
        children: [
            (0, r.jsx)(f.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(p.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function xE() {
    let e = xb.useField("state"),
        t = xb.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(xy, {}),
            null != t &&
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-feedback-critical",
                    className: xd.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(xf, { userState: e }),
        ],
    });
}
function xC() {
    return (0, r.jsxs)(x.Ip, {
        className: xd.nd,
        children: [
            (0, r.jsx)(xx, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xm, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xE, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xp, {}),
        ],
    });
}
var xS = a(761508),
    x_ = a(36692),
    xN = a(808411),
    xA = a(624716),
    xk = a(398590),
    xD = a(101715),
    xI = a(582695),
    xT = a(713387),
    xR = a(865868);
let xO = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    xw = {
        "virtual-currency": function () {
            return (0, r.jsxs)(xT.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(p.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = xI.lB.VIRTUAL_CURRENCY),
                                void (xD.x.setState({ selectedCollection: e, selectedStory: null }),
                                (0, xk.id)(ep.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: function () {
            return (0, r.jsxs)("div", { children: [(0, r.jsx)(x_.o, {}), (0, r.jsx)(xN.A, {}), (0, r.jsx)(xA.A, {})] });
        },
    };
function xM() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => xw[e], [e]);
    return (0, r.jsxs)("div", {
        className: Q()(t0.nd, xR.kL),
        children: [
            (0, r.jsx)(xS.V, {
                className: xR.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: xO.map((e) => (0, r.jsx)(xS.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(x.Ar, { children: (0, r.jsx)("div", { className: xR.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var xP = a(718446),
    xL = a(766075),
    xU = a(355097);
let xG = (0, g8.D)(() => ({ urlString: "", error: null })),
    xF = Object.entries(xU.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function xB() {
    let [e, t] = o.useState(),
        a = xG.useField("urlString"),
        n = xG.useField("error"),
        l = o.useCallback(() => {
            let e = xG.getField("urlString");
            if (null == e || "" === e) return void xG.setState({ error: "URL is required" });
            let t = (0, xP.parseSettingsUrl)({ path: e });
            ((0, xP.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? xG.setState({ error: "String did not match expected format" })
                : (0, xL.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(aS.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xF,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = xU.od[e].split("/");
                        xG.setState({ urlString: ep.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(f.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => xG.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(ng.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(p.$, {
                        variant: "secondary",
                        onClick: () => (0, nY.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var x$ = a(780964);
let xV = (0, g8.D)(() => ({ setting: x$.X.ACCOUNT_PANEL }));
function xW() {
    let e = xV.useField("setting"),
        t = o.useCallback(() => {
            (0, xL.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(x$.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(aS.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => xV.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(p.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var xH = a(963935),
    xz = a(728570),
    xK = a(333357);
function xY(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [i, s] = o.useState(a),
        d = o.useCallback(() => {
            s(!i);
        }, [i]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "text-feedback-warning";
    function u(e) {
        return (0, r.jsx)(g.E, { variant: e, color: c, children: t });
    }
    return null == l
        ? (0, r.jsx)("div", { className: xK.NF, children: u("body-md/normal") })
        : (0, r.jsxs)("div", {
              className: xK.NF,
              children: [
                  (0, r.jsxs)(X.D, {
                      className: xK.jr,
                      onClick: d,
                      children: [
                          u("body-md/semibold"),
                          (0, r.jsx)(iw.A, {
                              direction: i ? iw.A.Directions.DOWN : iw.A.Directions.RIGHT,
                              className: xK.D,
                          }),
                      ],
                  }),
                  i && (0, r.jsx)("div", { className: xK.m4, children: l }),
              ],
          });
}
function xq(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case xH.Z6.ROOT:
                    return "migrated-root";
                case xH.Z6.SECTION:
                case xH.Z6.PANEL:
                case xH.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        i = "migrated" === l ? "migrated" : void 0,
        s = null;
    return (
        (0, xH.nW)(t) &&
            t.layout.length > 0 &&
            (s = t.layout.map((e) => (0, r.jsx)(xq, { setting: e, depth: a + 1, inheritedHighlightMode: i }, e.key))),
        (0, r.jsx)(xY, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: s })
    );
}
function xJ() {
    let { node: e } = (0, eo.Ay)(xz.D, ""),
        t = (0, eo.KA)();
    return (0, r.jsxs)(u.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(m.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: eo.jL,
            }),
            (0, r.jsx)(xq, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var xQ = a(728564);
function xX() {
    return (0, r.jsxs)(x.Ip, {
        className: xQ.n,
        children: [
            (0, r.jsx)(xW, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xB, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xJ, {}),
        ],
    });
}
function xZ() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: np.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(lr, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: np.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(hI, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: np.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(hs, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: np.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(ij, {}),
            },
        ];
        return (
            ni.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: np.fu.SHOP, render: () => (0, r.jsx)(m0, {}) }),
                e.push({
                    id: "storefront",
                    name: "Storefront Overrides",
                    group: np.fu.STOREFRONT,
                    render: () => (0, r.jsx)(m9, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: np.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(ce, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: np.fu.SHOP,
                    render: () => (0, r.jsx)(tz, {}),
                }),
                e.push({
                    id: "shop_game_server_hosting",
                    name: "GSH",
                    group: np.fu.SHOP,
                    tags: ["game server", "gsh", "highlight", "checkout"],
                    render: () => (0, r.jsx)(aw, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: np.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "checkpoint", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(uB, {}),
                }),
                e.push({
                    id: "routing_key",
                    name: "Routing Key",
                    group: np.fu.DEVELOPMENT,
                    tags: ["routing", "traffic", "routing-key", "network"],
                    render: () => (0, r.jsx)(uX, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: np.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(iC, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: np.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(c_.Ay, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: np.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(iD, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: np.fu.GAMES, render: () => (0, r.jsx)(dL, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: np.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(sI, {}),
                }),
                ns.isPlatformEmbedded &&
                    (e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: np.fu.GAMES,
                        render: () => (0, r.jsx)(l4, {}),
                    }),
                    e.push({
                        id: "running_game_detection",
                        name: "Running Game Detection",
                        group: np.fu.GAMES,
                        tags: ["detection", "filter", "blocklist", "native"],
                        render: () => (0, r.jsx)(u6, {}),
                    }),
                    e.push({
                        id: "game_icon_extractor",
                        name: "Game Icon Extractor",
                        group: np.fu.GAMES,
                        tags: ["ico", "icon", "png", "rtc"],
                        render: () => (0, r.jsx)(iK, {}),
                    }),
                    e.push({
                        id: "game_mode",
                        name: "Game Mode",
                        group: np.fu.GAMES,
                        tags: ["fps", "frame rate", "throttle", "performance", "reduce motion"],
                        render: () => (0, r.jsx)(aC, {}),
                    })),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: np.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, r.jsx)(l0, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: np.fu.GAMES, render: () => (0, r.jsx)(m2, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: np.fu.GAMES,
                    render: () => (0, r.jsx)(nD, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: np.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(aW, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: np.fu.GAMES,
                    render: () => (0, r.jsx)(nl, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: np.fu.GAMES,
                    render: () => (0, r.jsx)(aT, {}),
                }),
                e.push({
                    id: ua.NM,
                    name: "Presence Resolution",
                    group: np.fu.GAMES,
                    tags: ["presence", "activity", "application", "linked games", "game profile"],
                    render: () => (0, r.jsx)(uh, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: np.fu.USERS,
                    render: () => (0, r.jsx)(xC, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: np.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(q, {}) })),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                e.push({
                    id: "partner_perks",
                    name: "Partner Perks",
                    group: np.fu.PREMIUM,
                    tags: ["xgp"],
                    render: () => (0, r.jsx)(dz, {}),
                }),
            e.push({
                id: "rive",
                name: "Rive",
                group: np.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(uH, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: np.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag", "shop", "quests", "artwork"],
                render: () => (0, r.jsx)(ru, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: np.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rH, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: np.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(rR, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: np.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(lS, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: np.fu.UI, render: () => (0, r.jsx)(lJ, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: np.fu.UI,
                render: () => (0, r.jsx)(c6, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: np.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(i0, { devSettingsCategory: C.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: np.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(ol, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: np.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(i0, { devSettingsCategory: C.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: np.fu.USERS, render: () => (0, r.jsx)(cF, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: np.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(og, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: np.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rJ, {}),
            }),
            e.push({
                id: "toasts",
                name: "Toasts",
                group: np.fu.UI,
                tags: ["notifications", "snackbar", "mana"],
                render: () => (0, r.jsx)(h_, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: np.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rF, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: np.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(nP, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: np.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(lC, {}),
            }),
            ni.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: np.fu.USERS,
                    render: () => (0, r.jsx)(am, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: np.fu.USERS,
                    render: () => (0, r.jsx)(a0, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: np.fu.DCF, render: () => (0, r.jsx)(lz, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: np.fu.DCF, render: () => (0, r.jsx)(lT, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: np.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(rA, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: np.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up", "perks", "sources", "bitmask"],
                render: () => (0, r.jsx)(cI, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: np.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(ok, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: np.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(cg, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: np.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(ow, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: np.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(go, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: np.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(i$, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: np.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(sU, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: np.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(ph, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: np.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(hQ, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: np.fu.AUDIO_VIDEO,
                tags: ["steam audio", "hrtf", "binaural", "reflections", "reverb", "room", "spatial audio"],
                render: () => (0, r.jsx)(pJ, {}),
            }),
            e.push({
                id: "conjure",
                name: "Conjure",
                group: np.fu.AUDIO_VIDEO,
                tags: ["conjure", "capture", "screenshot", "png", "game"],
                render: () => (0, r.jsx)(pe, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: np.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(hZ, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: np.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(rC, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: np.fu.BOOSTING, render: () => (0, r.jsx)(iX, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: np.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rw, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: np.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(xX, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: np.fu.QUESTS,
                render: () => (0, r.jsx)(a6, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: np.fu.QUESTS,
                render: () => (0, r.jsx)(hO, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: np.fu.BILLING,
                render: () => (0, r.jsx)(xM, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: np.fu.QUESTS,
                render: () => (0, r.jsx)(g6, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: np.fu.USERS,
                render: () => (0, r.jsx)(uf, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: np.fu.USERS,
                render: () => (0, r.jsx)(lb, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: np.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(ia, {}),
            }),
            e
        );
    }, []);
}
