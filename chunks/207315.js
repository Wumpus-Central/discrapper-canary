(a.d(t, { x: () => g0 }), a(321073));
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
    x = a(834730),
    g = a(95362),
    v = a(611677),
    b = a(404778),
    j = a(691885),
    f = a(95477),
    y = a(442433),
    E = a(77729),
    C = a(73153),
    S = a(865116);
function _(e, t) {
    let a = "boolean" == typeof t ? t : !S.Ay.get(e);
    C.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var N = a(986322),
    A = a(905552),
    k = a(718197),
    D = a(157257),
    I = a(507868),
    T = a(419490),
    R = a(489496),
    O = a(325392),
    w = a(574206),
    M = a(564973),
    P = a(192308);
function L(e) {
    var t;
    return (
        (t = { variant: e, source: "devtools" }),
        (0, P.mM)(
            async () => {
                let { default: e } = await Promise.all([a.e(885653), a.e(220411)]).then(a.bind(a, 633906));
                return (a) => (0, r.jsx)(e, { ...a, ...t });
            },
            { modalKey: "clips-ea-announcement" },
        )
    );
}
a(312809);
var U = a(227628),
    G = a(468550),
    F = a(196765);
let B = (0, F.v)(() => ({ enabled: !1, pending: null, lastResult: null }));
function $(e) {
    B.setState({ enabled: e });
}
function V(e) {
    B.setState({ pending: e });
}
function W(e) {
    B.setState({ lastResult: e });
}
var H = a(781710),
    z = a(696016),
    K = a(264572).hp;
function Y() {
    let e = B((e) => e.enabled),
        t = B((e) => e.pending),
        a = B((e) => e.lastResult),
        n = o.useCallback(async (e, t, a, n) => {
            let l = k.Ay.getMediaEngine();
            if (null == l.setClipsPerfMonitoring) return (W("setClipsPerfMonitoring unsupported in this build"), null);
            V(n);
            try {
                let n = await l.setClipsPerfMonitoring(e, t, a);
                return ($(n.enabled), n);
            } catch (e) {
                return (W(`${n} failed: ${e instanceof Error ? e.message : String(e)}`), null);
            } finally {
                V(null);
            }
        }, []),
        l = o.useCallback(
            async (t) => {
                $(t);
                let a = await n(t, !1, !1, t ? "enable" : "disable");
                null != a ? W(`recorder ${a.enabled ? "enabled" : "disabled"}`) : $(e);
            },
            [n, e],
        ),
        i = o.useCallback(async () => {
            let t = await n(e, !0, !1, "save");
            if (null == t) return;
            if ("" === t.html) return void W("save: server returned empty html");
            let a = `clips-perf-${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            try {
                let e = K.from(t.html, "utf8"),
                    n = await E.A.fileManager.saveWithDialog2(e, a);
                if (null != n && !0 === n.canceledByUser) return void W("save: canceled");
                W(`saved ${t.eventCount} events (${t.html.length} bytes)`);
            } catch (e) {
                W(`save failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, [n, e]),
        s = o.useCallback(async () => {
            let t = await n(e, !1, !0, "clear");
            null != t && W(`cleared ${t.eventCount} events`);
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
                (0, r.jsx)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: null != t ? `working: ${t}...` : a,
                }),
        ],
    });
}
let q = [
    { label: "Laughter Model", flag: z.pZ.LAUGHTER },
    { label: "Shouting Model", flag: z.pZ.SHOUTING },
    { label: "Events", flag: z.pZ.GAME_EVENTS },
];
function J() {
    let e = (0, d.bG)([I.A], () => I.A.isStaffBypassDisabled()),
        t = (0, d.bG)([I.A], () => I.A.isStaffBypassActive()),
        a = (0, d.bG)([I.A], () => I.A.hasLoadedCapabilities()),
        n = (0, d.bG)([I.A], () => I.A.getGameCapabilities().size),
        l = (0, d.bG)([N.Ay], () => N.Ay.getVisibleGame()),
        i = l?.id,
        s = (0, d.bG)([I.A], () => I.A.getCapabilities(i), [i]),
        o = (0, d.bG)([I.A], () => null != i && I.A.getGameCapabilities().has(i), [i]),
        c = (0, d.bG)([I.A], () => I.A.isGameAllowed(i), [i]);
    return (0, r.jsxs)(u.n, {
        label: "Autoclipping Game Capabilities",
        children: [
            (0, r.jsx)(m.d, {
                label: "Ignore staff bypass",
                description:
                    "Staff normally get autoclipping for every game. Turn this on to be treated as a regular user, so autoclipping follows the server capabilities map. Resets to off each time Discord launches.",
                checked: e,
                onChange: R.jE,
            }),
            (0, r.jsxs)(x.E, {
                variant: "body-md/normal",
                children: ["capabilities: ", a ? `loaded, ${n} game(s)` : "not loaded yet"],
            }),
            (0, r.jsxs)(x.E, { variant: "body-md/normal", children: ["staff bypass active: ", String(t)] }),
            null == l
                ? (0, r.jsx)(x.E, { variant: "body-md/normal", children: "no visible game running" })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(x.E, { variant: "body-md/normal", children: [l.name, " (", l.id, ")"] }),
                          (0, r.jsxs)(x.E, {
                              variant: "body-md/normal",
                              children: ["autoclipping: ", c ? "Yes" : "No"],
                          }),
                          (0, r.jsxs)(x.E, {
                              variant: "body-md/normal",
                              children: ["in capabilities map: ", o ? "Yes" : "No", " (bitmask ", s, ")"],
                          }),
                          q.map((e) => {
                              let { label: t, flag: a } = e;
                              return (0, r.jsxs)(
                                  x.E,
                                  { variant: "body-md/normal", children: [t, ": ", (s & a) != 0 ? "Yes" : "No"] },
                                  t,
                              );
                          }),
                          !o &&
                              c &&
                              (0, r.jsx)(x.E, {
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
                    null != i && M.b.refetchMany([i]);
                },
            }),
        ],
    });
}
function Q(e, t) {
    let a = new w.k(e);
    for (let e of t) a.recordSavedClip(e);
    return (a.end(), a);
}
function X() {
    let e = (0, d.bG)([S.Ay], () => S.Ay.get("clips_ignore_platform_requirement")),
        t = (0, U.MZ)((e) => e.isOpen),
        n = (0, G.sY)((e) => e.isOpen),
        [l, i] = o.useState(3),
        s = o.useCallback((e) => {
            let t = Object.values(T.Ay.getClips()),
                a = t.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = t.filter((e) => e.applicationId === n).slice(0, e);
            (T.Ay.devSetLastClipsSession(Q(n, l)), (0, G.M8)(n));
        }, []),
        C = o.useCallback(
            (e) => {
                e ? s(l) : (0, G.kF)();
            },
            [s, l],
        ),
        k = o.useCallback(() => {
            let e = Object.values(T.Ay.getClips()),
                t = (0, A.A)(N.Ay, D.A),
                a =
                    (t?.id != null ? e.find((e) => e.applicationId === t.id) : void 0) ??
                    e.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = e.filter((e) => e.applicationId === n).slice(0, 10);
            (T.Ay.devSetLastClipsSession(Q(n, l)), (0, U.w9)());
        }, []),
        I = o.useCallback(
            (e) => {
                e ? k() : (0, U.yj)();
            },
            [k],
        ),
        w = o.useCallback(
            (e) => {
                (i(e), n && s(e));
            },
            [s, n],
        ),
        [M, P] = o.useState(z.rb.KILL),
        [F, B] = o.useState(1),
        [$, V] = o.useState(""),
        W = (0, d.bG)([T.Ay], () => T.Ay.isAutoStashEnabled()),
        K = o.useCallback((e) => {
            e
                ? (0, c.A)({
                      title: "Stash all gaming sessions?",
                      subtitle:
                          "Every gaming session will be stashed to your Desktop (inside the `decider_stash` folder) when it ends. This setting is not persistent \u2014 it resets to off each time Discord launches.",
                      confirmText: "Enable",
                      variant: "primary",
                      onConfirm: () => {
                          R.mN(!0);
                      },
                  })
                : R.mN(!1);
        }, []),
        [q, X] = o.useState([]),
        [Z, ee] = o.useState(void 0),
        et = o.useCallback((e) => {
            (X(e), ee((t) => (null != t && e.includes(t) ? t : e[0])));
        }, []),
        ea = o.useCallback(async () => {
            let e = E.A?.clips?.debugListStashedClipDeciderSessions;
            null != e && et(await e());
        }, [et]);
    o.useEffect(() => {
        let e = !0,
            t = E.A?.clips?.debugListStashedClipDeciderSessions;
        if (null != t)
            return (
                t().then((t) => {
                    e && et(t);
                }),
                () => {
                    e = !1;
                }
            );
    }, [et]);
    let en = (0, d.bG)([T.Ay], () => T.Ay.getState().clipsSettings.enableAutoclipping),
        el = (0, d.bG)([T.Ay], () => T.Ay.getEnableAutoclipping());
    return (0, r.jsx)(g.Ip, {
        children: (0, r.jsxs)(v.l, {
            children: [
                (0, r.jsxs)(u.n, {
                    label: "EA announcement",
                    children: [
                        (0, r.jsx)(p.$, {
                            text: "Open EA announcement: expressive (Nitro)",
                            onClick: () => L("expressive_nitro"),
                        }),
                        (0, r.jsx)(p.$, {
                            text: "Open EA announcement: mode picker (Nitro)",
                            onClick: () => L("mode_picker"),
                        }),
                        (0, r.jsx)(p.$, {
                            text: "Open EA announcement: expressive (non-Nitro)",
                            onClick: () => L("expressive_non_nitro"),
                        }),
                    ],
                }),
                (0, r.jsx)(u.n, {
                    label: "Capture mode menu",
                    children: (0, r.jsx)(p.$, {
                        text: "Open capture mode menu",
                        onClick: (e) =>
                            (0, y.L3)(e, async () => {
                                let { default: e } = await a.e(827037).then(a.bind(a, 707116));
                                return (t) => (0, r.jsx)(e, { ...t });
                            }),
                    }),
                }),
                (0, r.jsx)(u.n, {
                    label: "Platform",
                    children: (0, r.jsx)(m.d, {
                        label: S.gO.clips_ignore_platform_requirement.label,
                        description:
                            "Show Clips settings and the library on unsupported platforms. Nitro is still required. Capture and export remain unsupported. Persists across restarts.",
                        checked: e,
                        onChange: (e) => _("clips_ignore_platform_requirement", e),
                    }),
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(h.M, {
                        children: [
                            (0, r.jsx)(p.$, { text: "Manual", onClick: () => R.Ts({ type: z.Gy.MANUAL }) }),
                            (0, r.jsx)(p.$, {
                                text: "Distributed",
                                onClick: () =>
                                    R.Ts({
                                        type: z.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(p.$, {
                                text: "Shouting",
                                onClick: () => R.Ts({ type: z.Gy.SHOUTING, userId: "123", confidence: 1 }),
                            }),
                            (0, r.jsx)(p.$, { text: "Laughter", onClick: () => O.A.debugCreateRankableLaughterClip() }),
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
                                    value: M,
                                    onSelectionChange: (e) => P(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: z.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: z.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: z.rb.DEATH },
                                        { id: "assist", label: "Assist", value: z.rb.ASSIST },
                                        { id: "item", label: "Item", value: z.rb.ITEM },
                                        { id: "victory", label: "Victory", value: z.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: z.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: z.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: z.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: z.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Importance",
                                    value: F,
                                    onSelectionChange: B,
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
                            value: $,
                            onChange: V,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(p.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                R.Ts({ type: z.Gy.GAME_EVENT, eventType: M, importance: F, description: $ });
                            },
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Auto-stash decider data",
                            description:
                                "Stashes every gaming session to your Desktop when it ends. Resets to off on each Discord launch.",
                            checked: W,
                            onChange: K,
                        }),
                        (0, r.jsx)(j.l, {
                            label: "Stash session (re-run ranking)",
                            value: Z,
                            onSelectionChange: (e) => ee(e),
                            options: q.map((e) => ({ id: e, label: e, value: e })),
                            placeholder: 0 === q.length ? "No stashed sessions" : "Most recent",
                            disabled: 0 === q.length,
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                        (0, r.jsxs)(h.M, {
                            children: [
                                (0, r.jsx)(p.$, {
                                    text: "re-run ranking",
                                    onClick: () => {
                                        O.i.debugRerunRanking(Z).catch((e) => {
                                            z.GU.error("re-run ranking failed", e);
                                        });
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    text: "run automontage",
                                    onClick: () => {
                                        O.i.debugRunAutoMontage(Z).catch((e) => {
                                            z.GU.error("run automontage failed", e);
                                        });
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    text: "refresh sessions",
                                    variant: "secondary",
                                    onClick: () => {
                                        ea();
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.n, { label: "Clip Metadata Tool", children: (0, r.jsx)(H.A, {}) }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(Y, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(J, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsxs)(u.n, {
                    label: "Reminder UI",
                    children: [
                        (0, r.jsx)(m.d, {
                            label: "Clips Quick Bar",
                            description:
                                "Force-show the inline quick bar above the account panel. Fabricates a session (up to 10 clips) from your recent clips so it can be tested without capturing a real game session.",
                            checked: t,
                            onChange: I,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Clips Reminder",
                            description:
                                "Force-show the post-session ClipsReminder panel. Fabricates a session from your most recent clips (and game) so it can be tested without capturing a real game session.",
                            checked: n,
                            onChange: C,
                        }),
                        (0, r.jsx)(j.l, {
                            label: "Clip count",
                            value: l,
                            onSelectionChange: w,
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
                                (0, r.jsxs)(x.E, {
                                    variant: "body-md/normal",
                                    children: ["autoclippingEnabled (internal): ", String(en)],
                                }),
                                (0, r.jsxs)(x.E, {
                                    variant: "body-md/normal",
                                    children: ["autoclippingEnabled (exposed): ", String(el)],
                                }),
                                (0, r.jsx)(p.$, {
                                    text: "unset autoclipping default",
                                    onClick: () => {
                                        R.uL(void 0, !1);
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
var Z = a(503698),
    ee = a.n(Z),
    et = a(939249),
    ea = a(683071),
    en = a(534514),
    el = a(538064),
    ei = a(265059),
    es = a(869146);
(a(323874), a(14289), a(35956));
var er = a(789645),
    eo = a(110574),
    ed = a(65593),
    ec = a(528689),
    eu = a(122088),
    em = a(569386),
    eh = a(287809),
    ep = a(901139),
    ex = a(641886),
    eg = a(780898),
    ev = a(652215),
    eb = a(993382),
    ej = a(427262);
function ef(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([eh.default], () => eh.default.getCurrentUser()),
        n = ej.Ay.useName(a) ?? "";
    return (0, r.jsx)(eb.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        playingSoundboard: !1,
        streaming: !1,
        status: ev.clD.ONLINE,
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
var ey = a(736653),
    eE = a(653523),
    eC = a(475601);
function eS(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, ey.Ay)();
    return (0, r.jsxs)("div", {
        className: eC.N,
        children: [
            (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: eC.Z,
                children: ex.Z6.map((e) => {
                    let l = n !== ev.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        i = t === e.name;
                    return (0, r.jsx)(
                        eE.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: i },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var e_ = a(181254),
    eN = a(95701),
    eA = a(331884);
function ek(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, eA.i)(),
        l = new eN.cq({ id: "0", type: ev.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(e_.th, { selected: t, channel: l, user: n, nameplate: a });
}
var eD = a(698638),
    eI = a(52940);
function eT() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, i] = (0, o.useState)(null),
        { node: s } = (0, eu.Ay)(em.k, ""),
        d = (0, ep.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, ep.DE)(),
        { setImgCache: m } = (0, ep.TW)(),
        h = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? i({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : i((t) =>
                          null == t ? { previewToolKey: e, palette: ex.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [d],
        ),
        g = (0, o.useCallback)((e) => {
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
                className: eI.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: eI.gO,
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
                        className: eI.uQ,
                        children: [
                            e && (0, r.jsx)(ec.A, { node: s }),
                            a &&
                                (0, r.jsx)(eS, {
                                    selected: l?.palette?.name,
                                    onSelect: (e) => {
                                        (l?.previewToolKey != null && c(l.previewToolKey, l.previewToolKey, e), g(e));
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: eI.iW,
                children: [
                    (0, r.jsx)(eR, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: eI.Uo,
                        children: [
                            (0, r.jsx)(x.E, {
                                variant: "body-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(ed.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eD.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    (m(t, t, (0, eg.nI)(n)), c(t, t, ex.Wj));
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: eI.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(eO, { src: t, onSetStatic: h, removeAsset: v }, t);
                                }),
                            }),
                            (0, r.jsx)(eM, {
                                label: "gradient override",
                                onChange: (e) => g({ name: ex.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(ew, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eR(e) {
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
        (0, r.jsx)(g.Ip, {
            className: eI.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: eI.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(eP, { nameplate: t }),
                    (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(eL, { nameplate: t }),
                    (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(eU, { nameplate: t }),
                    (0, r.jsx)("div", { className: eI.Di, onMouseDown: u }),
                ],
            }),
        })
    );
}
function eO(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: eI.xO,
        children: [
            (0, r.jsx)(et.D, {
                onClick: () => n(t),
                className: eI.yV,
                children: (0, r.jsx)(er.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: eI.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: eI.Lu,
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
function ew(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: eI.Uu,
        children: [
            (0, r.jsx)(x.E, { variant: "body-sm/normal", children: "coming soon" }),
            (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function eM(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: eI.Im,
        children: [
            (0, r.jsx)(x.E, { variant: "body-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: eI.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eP(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([eh.default], () => eh.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: eI.VH,
        children: (0, r.jsxs)("div", {
            className: eI.H1,
            children: [
                (0, r.jsx)(x.E, { className: eI.Pf, variant: "body-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(eo.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(x.E, { className: eI.Pf, variant: "body-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(eo.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(eo.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function eL(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eI.VH,
        children: (0, r.jsxs)("div", {
            className: eI.H1,
            children: [
                (0, r.jsx)(x.E, { className: eI.Pf, variant: "body-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(ek, { nameplate: t }),
                (0, r.jsx)(x.E, { className: eI.Pf, variant: "body-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(ek, { selected: !0, nameplate: t }), (0, r.jsx)(ek, { selected: !0 })],
                }),
            ],
        }),
    });
}
function eU(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eI.VH,
        children: (0, r.jsx)("div", { className: eI.X2, children: (0, r.jsx)(ef, { nameplate: t }) }),
    });
}
a(508300);
var eG = a(115560),
    eF = a(157559),
    eB = a(307955),
    e$ = a(993408),
    eV = a(969951),
    eW = a(559474),
    eH = a(816866),
    ez = a(87558),
    eK = a(575593),
    eY = a(631903),
    eq = a(224640),
    eJ = a(408278),
    eQ = a(972213),
    eX = a(43990),
    eZ = a(646514),
    e0 = a(231723),
    e1 = a(900686),
    e2 = a(641318),
    e3 = a(362781),
    e6 = a(435558),
    e5 = a.n(e6),
    e8 = a(855915),
    e4 = a(971217);
let e9 = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, e6.cloneDeep)(t), [t]),
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
        { layerData: s } = (0, e8.A)({ skuId: i, layers: l.effects });
    return (0, r.jsx)(e4.p, { profileEffect: l, skuId: i, layerData: s });
};
var e7 = a(586886),
    te = a(778765);
let tt =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    ta = { [ez.qH.THUMBNAIL]: null, [ez.qH.STATIC]: null, [ez.qH.REDUCED_MOTION]: null },
    tn = "debug",
    tl = "reduced-motion-preview-modal";
function ti(e) {
    let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
    return (0, r.jsx)(eq.d, {
        transitionState: t,
        size: "md",
        onClose: a,
        maxHeight: "viewport",
        children: (0, r.jsxs)("div", {
            className: e7.Xd,
            children: [
                (0, r.jsx)("div", {
                    className: e7.y6,
                    children: (0, r.jsx)(eJ.K, {
                        "aria-label": "Close",
                        onClick: a,
                        icon: eQ.XLargeIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: e7.rU,
                    children: [
                        (0, r.jsx)(eX.N, {
                            theme: l,
                            children: (e) =>
                                (0, r.jsx)("img", { src: tt, alt: "", className: ee()(e7.aM, e), "aria-hidden": !0 }),
                        }),
                        null != n &&
                            "" !== n &&
                            (0, r.jsx)("img", { src: n, className: e7.SD, alt: "Reduced motion preview" }),
                    ],
                }),
            ],
        }),
    });
}
function ts(e) {
    let { type: t, frame: a, theme: n, onClear: l } = e,
        i = t === ez.qH.REDUCED_MOTION,
        s = i ? tt : te.A,
        o = (0, r.jsx)(eX.N, {
            theme: n,
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("img", { src: s, alt: "", className: ee()(e7.aM, e), "aria-hidden": !0 }),
                        a?.src != null &&
                            "" !== a.src &&
                            (0, r.jsx)("img", { src: a.src, className: ee()(e7.SD, e), alt: "" }),
                    ],
                }),
        });
    return (0, r.jsxs)("div", {
        className: e7.pK,
        children: [
            (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: t }),
            i
                ? (0, r.jsx)(et.D, {
                      className: ee()(e7.zd, e7.eB),
                      onClick: function () {
                          (0, P.kB)(tl)
                              ? (0, P.Oo)(tl)
                              : (0, P.mM)(
                                    () =>
                                        Promise.resolve((e) =>
                                            (0, r.jsx)(ti, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                        ),
                                    { modalKey: tl, onCloseRequest: () => (0, P.Oo)(tl) },
                                );
                      },
                      children: o,
                  })
                : (0, r.jsx)("div", { className: e7.zd, children: o }),
            null != a && (0, r.jsx)(p.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
        ],
    });
}
let tr = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eH.wu)(),
            n = (0, d.bG)([eh.default], () => eh.default.getCurrentUser()),
            [l, i] = o.useState(!0),
            s = o.useRef({}),
            [c, u] = o.useState(!1),
            [m, h] = o.useState(!1),
            [g, v] = o.useState(8),
            [b, j] = o.useState([]),
            [f, y] = o.useState(ta),
            E = o.useRef([]),
            [C, S] = o.useState(t.name),
            _ = C.toLowerCase().replace(/\s+/g, "_"),
            N = o.useMemo(
                () => ({
                    type: eK.R.PROFILE_EFFECT,
                    skuId: tn,
                    title: tn,
                    description: tn,
                    accessibilityLabel: tn,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: b,
                    animationType: eY.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [b],
            ),
            A = c ? eZ.A.themes.DARK : eZ.A.themes.LIGHT;
        function k(e) {
            let t = e.currentTarget.files;
            return null == t ? null : t[0];
        }
        function D(e, t) {
            let a = k(t);
            null != a &&
                (0, ez.Mz)(a, (t) => {
                    y((n) => ({ ...n, [e]: (0, ez.GT)(t, a) }));
                });
        }
        (o.useEffect(() => {
            let e = t.effects;
            e.length > 0 &&
                j(
                    e.map((e) => ({
                        ...e,
                        name: e.name ?? (0, ez.XG)(e.src),
                        randomizedSources: e.randomizedSources?.map((e) => ({
                            ...e,
                            filename: e.filename ?? (0, ez.XG)(e.src),
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
                                let e = (0, ez.fB)(a.base64);
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
                  className: e7.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eB.A, {
                                  ref: (e) => {
                                      s.current.animated = e;
                                  },
                                  onChange: function (e) {
                                      let t = k(e);
                                      null != t &&
                                          (0, ez.Mz)(t, async (e) => {
                                              let a = await (0, ez.Ay)(e, t, b.length);
                                              j((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eB.A, {
                                  ref: (e) => {
                                      s.current.thumbnail = e;
                                  },
                                  onChange: (e) => D(ez.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eB.A, {
                                  ref: (e) => {
                                      s.current.static = e;
                                  },
                                  onChange: (e) => D(ez.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eB.A, {
                                  ref: (e) => {
                                      s.current.reducedMotion = e;
                                  },
                                  onChange: (e) => D(ez.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: e7.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ee()(e7.nM, e7.uW),
                                  children: [
                                      (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: C,
                                          className: e7.hF,
                                          onChange: (e) => {
                                              S(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e7.nM,
                                  children: [
                                      (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: c,
                                          className: e7.OO,
                                          onChange: () => {
                                              u(!c);
                                          },
                                      }),
                                      (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: m,
                                          className: e7.OO,
                                          onChange: () => {
                                              h(!m);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e7.nM,
                                  children: [
                                      (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: g,
                                          onChange: (e) => v(+e.target.value),
                                      }),
                                      (0, r.jsxs)(x.E, { variant: "body-sm/normal", children: [g, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ee()(e7.nz, e7.VH),
                                  style: { borderRadius: g },
                                  children: [
                                      m
                                          ? (0, r.jsx)("div", {
                                                className: e7.jq,
                                                children: (0, r.jsx)(e3.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: e0.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: e7.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eX.N, {
                                                theme: A,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: ee()(e7.aM, e),
                                                        children: (0, r.jsx)("img", { src: te.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: e7.KJ,
                                              children: (0, r.jsx)(e9, { profileEffect: N }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      m &&
                                      (0, r.jsxs)("div", {
                                          className: ee()(e7.f5, e7.VH),
                                          style: { borderRadius: g },
                                          children: [
                                              (0, r.jsx)(e2.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  hideProfileFrame: !0,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(e9, { profileEffect: N }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: e7.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: e7.nM,
                                          children: [
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => s.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(x.E, {
                                                  variant: "body-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: e7.nM,
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
                                          className: e7.q6,
                                          children: (0, r.jsx)("div", {
                                              className: e7.nM,
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
                                          className: ee()(e7.q6, e7.XA),
                                          children: [
                                              (0, r.jsx)(x.E, {
                                                  variant: "body-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(x.E, {
                                                  variant: "body-sm/semibold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: e7.nM,
                                                  children: [
                                                      (0, r.jsx)(e1.A, {
                                                          fileContents: () => (0, ez.rs)(b),
                                                          contentType: "text/plain",
                                                          fileName: `${_}_timing_config.txt`,
                                                          children: (0, r.jsx)(p.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(e1.A, {
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
                                          className: e7.uW,
                                          children: [
                                              (0, r.jsx)(en.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: "Still Frames",
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: e7.mv,
                                                  children: Object.entries(f).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          ts,
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
                                              className: ee()(e7.uW, e7.l7),
                                              children: [
                                                  (0, r.jsx)(x.E, {
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
                                  className: ee()(e7.Vg, e7.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: e7.cD,
                                          children: (0, r.jsx)(p.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: function () {
                                                  (j([]), y(ta));
                                              },
                                          }),
                                      }),
                                      b.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: e7.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: e7.D1,
                                                          children: [
                                                              (0, r.jsx)(en.D, {
                                                                  variant: "heading-sm/semibold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: e7.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(en.D, {
                                                                              variant: "heading-sm/semibold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(en.D, {
                                                                                                  variant:
                                                                                                      "heading-xs/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: e7.oq,
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
                                                          className: ee()(e7.Vg, e7.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e7.nz,
                                                                  children: [
                                                                      (0, r.jsx)(x.E, {
                                                                          variant: "body-md/semibold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: e7.hF,
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
                                                                  className: e7.nz,
                                                                  children: [
                                                                      (0, r.jsx)(x.E, {
                                                                          variant: "body-md/semibold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: e7.hF,
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
                                                          className: ee()(e7.Vg, e7.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e7.nz,
                                                                  children: [
                                                                      (0, r.jsx)(x.E, {
                                                                          variant: "body-md/semibold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: e7.OO,
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
                                                                  className: e7.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(x.E, {
                                                                                  variant: "body-md/semibold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: e7.hF,
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
                                                          children: (0, r.jsx)(eB.A, {
                                                              ref: (e) => {
                                                                  s.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = k(e)) &&
                                                                      (0, ez.Mz)(a, (e) => {
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
                                                          className: ee()(e7.nM, e7._N),
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
    to = "Make sure you're only uploading text files!";
function td(e) {
    let { profileEffect: t, onClick: a } = e,
        { deleteProfileEffect: n } = (0, eH.wu)();
    return (0, r.jsxs)(et.D, {
        className: e7.B0,
        onClick: a,
        children: [
            (0, r.jsx)("div", { className: e7.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
            (0, r.jsxs)("div", {
                className: e7.eL,
                children: [
                    (0, r.jsx)(x.E, { variant: "body-md/semibold", children: t.name }),
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
function tc() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eH.wu)(),
        [n, l] = o.useState(),
        i = o.useRef(null),
        { categories: s } = (0, eV.A)(),
        d = o.useMemo(() => (0, e$.Wj)(s), [s]),
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
                if (null == a || !e.type.startsWith("text/")) return (0, eW.Ni)(to);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eW.Ni)(to);
                let i = JSON.parse(atob(l));
                ((i.skuId = (0, eG.A)()), t(i), (0, eW.GF)("Profile Effect (maybe??) imported!"));
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eW.Ni)("Error uploading file. Try again!")
                    : (0, eW.KE)(e.currentTarget.files, h, eW.Ni);
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: e7.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: e7.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: ee()(e7.uW, e7.nM),
                                    children: [
                                        (0, r.jsx)(en.D, {
                                            variant: "heading-xl/semibold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(p.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await eF.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, eW.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: e7.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(td, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: ee()(e7.nM, e7._N, e7.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: e7.au,
                                    children: [
                                        (0, r.jsx)(x.E, {
                                            variant: "body-md/normal",
                                            color: "text-overlay-light",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eB.A, { ref: i, onChange: g, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: function () {
                                        t({ skuId: (0, eG.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: e7.uW,
                            children: [
                                (0, r.jsx)(en.D, { variant: "heading-xl/semibold", children: "All Effects" }),
                                (0, r.jsx)(f.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: e7.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            et.D,
                                            {
                                                className: e7.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [ez.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [ez.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [ez.qH.REDUCED_MOTION]:
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
                                                    className: e7.Hd,
                                                    children: (0, r.jsx)(x.E, {
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
            null != n && (0, r.jsx)(tr, { profileEffect: n }),
        ],
    });
}
var tu = a(935399),
    tm = a(462887),
    th = a(289873),
    tp = a(478016),
    tx = a(565645),
    tg = a(7584),
    tv = a(974504),
    tb = a(207803),
    tj = a(84540),
    tf = a(836602),
    ty = a(527212),
    tE = a(917445),
    tC = a(841702),
    tS = a(892118),
    t_ = a(744808),
    tN = a(965452),
    tA = a(626768),
    tk = a(464896);
function tD() {
    let e = (0, ey.Ay)();
    return (0, r.jsxs)("div", {
        className: tN.z3,
        children: [
            (0, r.jsx)("img", { src: (0, tm.M)(e) ? tA : tk, alt: "" }),
            (0, r.jsx)(x.E, {
                variant: "body-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tI() {
    let e = (0, d.bG)([eh.default], () => eh.default.getCurrentUser()),
        t = (0, ty.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, tE.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetching: n } = (0, tC.b5)(),
        l = o.useMemo(() => (0, e$.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: i }, s] = (0, d.yK)([tf.A], () => [tf.A.getPendingChanges(), tf.A.showNotice()]),
        c = void 0 === i ? t?.profileFrame : i,
        u = null != c ? a.get(c.skuId) : void 0,
        m = (0, tS.s)(u?.items[0]) ? u.items[0] : void 0;
    return (
        (0, tu.l0)(tb.RE),
        (0, r.jsxs)("div", {
            className: tN.kL,
            children: [
                (0, r.jsxs)(en.D, {
                    variant: "heading-xl/semibold",
                    children: [
                        (0, r.jsx)(tx.A, {
                            emojiName: tg.Ay.getByName("frame_with_picture")?.surrogates,
                            className: tN.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(th.y, {}),
                0 === l.length && !n && (0, r.jsx)(tD, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: tN.MK,
                        children: [
                            (0, r.jsx)(x.E, {
                                variant: "body-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: tN.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(p.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == c ? tp.U : void 0,
                                                disabled: null == c,
                                                onClick: () => (0, tj.p)({ profileFrame: null }),
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
                                                          icon: c?.skuId === e.skuId ? tp.U : void 0,
                                                          disabled: c?.skuId === e.skuId,
                                                          onClick: () => (0, tj.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            s && (0, r.jsx)(tv.A, {}),
                            (0, r.jsxs)("div", {
                                className: tN.VH,
                                children: [
                                    (0, r.jsx)(x.E, { variant: "body-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: tN.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: te.A, alt: "" }),
                                            null != m && (0, r.jsx)(t_.A, { frame: m, isPreview: !0 }),
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
var tT = a(164636),
    tR = a(793574),
    tO = a(354328),
    tw = a(4227),
    tM = a(682301),
    tP = a(987421),
    tL = a(61750),
    tU = a(499454),
    tG = a(682901);
let tF = "devtools-collectibles-gift";
var tB = a(80101);
let t$ = /^\d{17,20}$/,
    tV = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tw.A.getPurchase;
                return (
                    (tw.A.getPurchase = (e) => void 0),
                    tw.A.emitChange(),
                    a(1),
                    () => {
                        ((tw.A.getPurchase = e), tw.A.emitChange());
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tB.Do, children: (0, r.jsx)(tP.A, { ...e }, t) })
        );
    },
    tW = function () {
        let e = (0, tT.bG)([eh.default], () => eh.default.getCurrentUser());
        (0, tC.b5)();
        let t = (0, tO.A)("shop_include_unpublished"),
            [a, n] = o.useState(""),
            l = a.trim(),
            i = t$.test(l),
            {
                product: s,
                category: d,
                state: c,
            } = (0, tM.IK)(l, { shouldFetchProduct: i, seedCategoryStore: !0, includeUnpublished: t }),
            u = "loading" !== c;
        return null == e
            ? (0, r.jsx)(x.E, { variant: "body-md/normal", children: "No user found" })
            : (0, r.jsxs)("div", {
                  className: tB.kL,
                  children: [
                      (0, r.jsxs)("div", {
                          className: tB.uW,
                          children: [
                              (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                              (0, r.jsxs)("div", {
                                  className: tB.qp,
                                  children: [
                                      (0, r.jsx)(x.E, {
                                          variant: "body-md/semibold",
                                          className: tB.NB,
                                          children: "Primary Product SKU ID",
                                      }),
                                      (0, r.jsx)(f.k, { value: a, onChange: n, placeholder: "Enter product SKU ID" }),
                                      !u &&
                                          i &&
                                          (0, r.jsx)(x.E, {
                                              variant: "body-sm/normal",
                                              className: tB.KQ,
                                              children: "Loading products...",
                                          }),
                                      u &&
                                          i &&
                                          null == s &&
                                          (0, r.jsx)(x.E, {
                                              variant: "body-sm/normal",
                                              className: tB.kc,
                                              children: "Product not found",
                                          }),
                                      null != s &&
                                          (0, r.jsxs)(x.E, {
                                              variant: "body-sm/normal",
                                              className: tB.xT,
                                              children: ["Found: ", s.name],
                                          }),
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: tB.uW,
                          children: [
                              (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                              null != s && null != d
                                  ? (0, r.jsxs)("div", {
                                        className: tB.i1,
                                        children: [
                                            (0, r.jsx)(tV, { skuId: s.skuId }),
                                            (0, r.jsx)(p.$, {
                                                variant: "primary",
                                                onClick: function () {
                                                    null != s &&
                                                        null != e &&
                                                        (0, tL.A)({
                                                            product: s,
                                                            analyticsLocations: [tR.A.COLLECTIBLES_SHOP_CARD],
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
                                                                    code: tF,
                                                                    user: { id: a.id },
                                                                    sku_id: t,
                                                                    uses: 0,
                                                                    max_uses: 1,
                                                                    expires_at: null,
                                                                    redeemed: !1,
                                                                    application_id: ev.FYj,
                                                                    gift_style: tG.o2.STANDARD_BOX,
                                                                };
                                                            (await C.h.dispatch({
                                                                type: "GIFT_CODE_RESOLVE_SUCCESS",
                                                                giftCode: n,
                                                            }),
                                                                (0, tU.h)({ processedCode: tF }));
                                                        })({ skuId: s.skuId, sender: e });
                                                },
                                                text: "Show Gift Accept Modal",
                                            }),
                                        ],
                                    })
                                  : (0, r.jsx)("div", {
                                        className: tB.qf,
                                        children: (0, r.jsx)(x.E, {
                                            variant: "body-md/normal",
                                            className: tB.X2,
                                            children: "Enter a valid product SKU ID to see the preview",
                                        }),
                                    }),
                          ],
                      }),
                  ],
              });
    };
var tH = a(646695);
let tz = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 };
function tK(e) {
    let { setTab: t } = e,
        n = (0, d.bG)([es.A], () => es.A.getWindowOpen(ev.MLl.DEVTOOLS_POPOUT));
    return (0, r.jsxs)("div", {
        className: tH.Qs,
        children: [
            (0, r.jsx)(et.D, {
                onClick: () => {
                    t(1);
                },
                children: (0, r.jsx)("div", {
                    className: ee()(tH.vK, tH.Dg),
                    children: (0, r.jsx)(x.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Profile Effects",
                    }),
                }),
            }),
            (0, r.jsx)(et.D, {
                onClick: () => {
                    t(2);
                },
                children: (0, r.jsx)("div", {
                    className: ee()(tH.vK, tH.st),
                    children: (0, r.jsx)(x.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Nameplates",
                    }),
                }),
            }),
            (0, r.jsx)(et.D, {
                onClick: () => {
                    t(3);
                },
                children: (0, r.jsx)("div", {
                    className: ee()(tH.vK, tH.BW),
                    children: (0, r.jsx)(x.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Profile Frames",
                    }),
                }),
            }),
            (0, r.jsx)(et.D, {
                onClick: () => {
                    t(4);
                },
                children: (0, r.jsx)("div", {
                    className: ee()(tH.vK, tH.IP),
                    children: (0, r.jsx)(x.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Products",
                    }),
                }),
            }),
            !n &&
                (0, r.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(ea.w, {
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
let tY = function () {
    let [e, t] = o.useState(() => {
        let e = ei.A.lastOpenSubTabId;
        return null != e && e in tz ? tz[e] : 0;
    });
    return (
        o.useEffect(() => {
            null != ei.A.lastOpenSubTabId && (0, el.Jt)({ lastOpenSubTabId: null });
        }, []),
        (0, r.jsxs)(g.Ip, {
            className: tH.iE,
            children: [
                (0, r.jsxs)("div", {
                    className: tH.C$,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                        0 !== e && (0, r.jsx)(p.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                    ],
                }),
                (function () {
                    switch (e) {
                        case 1:
                            return (0, r.jsx)(tc, {});
                        case 2:
                            return (0, r.jsx)(eT, {});
                        case 3:
                            return (0, r.jsx)(tI, {});
                        case 4:
                            return (0, r.jsx)(tW, {});
                        default:
                            return (0, r.jsx)(tK, { setTab: t });
                    }
                })(),
            ],
        })
    );
};
var tq = a(681154),
    tJ = a(306264),
    tQ = a(506774),
    tX = a(331322),
    tZ = a(587895),
    t0 = a(429913),
    t1 = a(475825),
    t2 = a(730441);
function t3(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: i, selectedRowKey: s, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: t2.CZ,
        children: (0, r.jsx)(t1.OZ, {
            className: n,
            innerClassName: t2.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = t2.ZR;
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
                    u = ee()(t2.jD, { [t2.wD]: o === s, rowClassName: l });
                return (0, r.jsx)(
                    et.D,
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
var t6 = a(409626),
    t5 = a(692969),
    t8 = a(760751),
    t4 = a(403362),
    t9 = a(435738),
    t7 = a(99753),
    ae = a(702476),
    at = a(574520),
    aa = a(214693),
    an = a(583846),
    al = a(424994),
    ai = a(14570);
function as(e) {
    let { id: t } = e,
        a = (0, d.bG)([eh.default], () => eh.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(et.D, {
              className: ai._,
              onClick: function () {
                  (0, ae.openUserProfileModal)({ sourceAnalyticsLocations: [tR.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(x.E, { variant: "body-md/semibold", children: a.username }),
          });
}
function ar() {
    let e = (0, d.bG)([t7.A], () => t7.A.getFeed(al.X1.GLOBAL_FEED)),
        t = (0, d.bG)([t7.A], () => t7.A.getFilters()),
        a = (0, d.cf)(
            [at.A],
            () => {
                let t = {};
                for (let a of e?.entries ?? []) t[(0, at.$)(a.content)] = at.A.canRenderContent(a.content);
                return t;
            },
            [e],
        ),
        n = (0, d.bG)([t9.A], () => t9.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, aa.l)(t, l)) return [];
        let i = a[(0, at.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: ai.p,
                children: [
                    (0, r.jsx)(as, { type: l.author_type, id: l.author_id }),
                    !i && (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Expired or no matching presence" }),
                    (0, an.I5)(l) &&
                        (0, r.jsxs)(x.E, { variant: "body-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var ao = a(576470),
    ad = a(693879);
function ac() {
    let e = (0, d.bG)([t7.A], () => t7.A.getFeed(al.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, d.cf)(
            [t7.A],
            () => t7.A.getFeedState(al.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, d.bG)([t7.A], () => t7.A.getLastFeedFetchDate(al.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(x.E, { variant: "body-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(x.E, {
                      variant: "body-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(ao.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(x.E, {
                variant: "body-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(ad.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var au = a(225418);
let am = [
    {
        key: "type",
        cellClassName: ee()(au.Hn, au.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(x.E, { variant: "body-md/semibold", children: tq.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: ee()(au.Hn, au.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(x.E, { variant: "body-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: au.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(ah, { type: t });
        },
    },
];
function ah(e) {
    let { type: t } = e,
        a = (0, d.bG)([t7.A], () => t7.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(m.d, {
        checked: n,
        onChange: function () {
            n
                ? C.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : C.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function ap() {
    var e;
    let t,
        a = (0, d.bG)([t7.A], () => t7.A.getFeed(al.X1.GLOBAL_FEED)),
        n = (0, d.bG)([t7.A], () => t7.A.getDebugImpressionCappingDisabled()),
        l = (0, d.bG)([t9.A], () => t9.A.getDebugFastImpressionCappingEnabled()),
        i =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = e5().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        s = (0, d.bG)([t7.A], () => t7.A.getFeedState(al.X1.GLOBAL_FEED)?.loading === !0),
        [c, u] = o.useState(""),
        m = (0, d.bG)(
            [t8.A, tZ.A],
            () => (parseInt(c) > 0 ? c : (t8.A.searchGamesByName(c)[0] ?? tZ.A.getApplicationByName(c)?.id)),
            [c],
        ),
        h = (0, t5.A)({
            applicationId: m,
            location: "DevToolsContentInventory",
            source: t6.GameProfileSources.DevTools,
        }),
        v = Object.entries(tQ.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        b = (0, t0.A)(v).filter(t4.Vq);
    return (0, r.jsx)("div", {
        className: t2.nd,
        children: (0, r.jsxs)(g.Ip, {
            className: au.Qs,
            children: [
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(x.E, { variant: "body-md/semibold", children: "Inventory" }),
                        i.length > 0 && (0, r.jsx)(t3, { columns: am, data: i }),
                        (0, r.jsx)(ac, {}),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                C.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: al.X1.GLOBAL_FEED,
                                    feature: tJ.M.INBOX,
                                });
                            },
                            loading: s,
                        }),
                    ],
                }),
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(x.E, { variant: "body-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                C.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                C.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                C.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                C.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(ar, {}),
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(x.E, { variant: "body-md/semibold", children: "Game Profile" }),
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
                                    { children: (0, r.jsx)(ax, { application: e }) },
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
function ax(e) {
    let { application: t } = e,
        a = (0, t5.A)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: t6.GameProfileSources.DevTools,
        });
    return (0, r.jsx)(et.D, {
        onClick: a,
        children: (0, r.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: t.name }),
    });
}
var ag = a(267355),
    av = a(887287),
    ab = a(222506),
    aj = a(293432),
    af = a(188321),
    ay = a(25202);
function aE(e) {
    let { label: t, value: a } = e;
    return (0, r.jsxs)(tX.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            (0, r.jsx)(x.E, { variant: "body-md/normal", color: "text-muted", children: t }),
            (0, r.jsx)(x.E, { variant: "body-md/medium", children: a }),
        ],
    });
}
function aC(e) {
    return e ? "yes" : "no";
}
function aS(e) {
    return e > 0 ? `${e} fps` : "uncapped";
}
function a_() {
    let e = (0, d.cf)([af.A, av.A, ab.A, aj.A], () => ({
            storedEnabledChoice: af.A.getStoredEnabledChoice(),
            hasRunningGame: af.A.hasRunningGame,
            isThrottling: af.A.isThrottling,
            frameRate: (0, ay.A)(),
            overlayFrameRate: (0, ay.j)(),
            isOverlayOpen: (0, ag.D)(),
            isDiscordFocused: af.A.isDiscordFocused,
            isDiscordHovered: af.A.isDiscordHovered,
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
    return (0, r.jsxs)(tX.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(tX.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Status" }),
                    (0, r.jsx)(aE, { label: "Throttling", value: aC(e.isThrottling) }),
                    (0, r.jsx)(aE, { label: "Running game detected", value: aC(e.hasRunningGame) }),
                    (0, r.jsx)(aE, { label: "Discord focused", value: aC(e.isDiscordFocused) }),
                    (0, r.jsx)(aE, { label: "Discord hovered", value: aC(e.isDiscordHovered) }),
                    null != t && (0, r.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: "Set a debug running game from the Detected Games tab to simulate a game.",
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(tX.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Applied Levers" }),
                    (0, r.jsx)(aE, { label: "Frame rate cap", value: aS(e.frameRate) }),
                    (0, r.jsx)(aE, { label: "Overlay frame rate cap", value: aS(e.overlayFrameRate) }),
                    (0, r.jsx)(aE, { label: "Reduce motion", value: aC(e.isThrottling) }),
                    (0, r.jsx)(aE, { label: "Pause animated media", value: aC(e.isThrottling) }),
                    (0, r.jsx)(aE, { label: "Overlay open", value: aC(e.isOverlayOpen) }),
                    (0, r.jsx)(x.E, {
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
var aN = a(890497),
    aA = a(769015),
    ak = a(311043),
    aD = a(454908),
    aI = a(282435);
function aT(e) {
    return aI.jN.get(e) ?? 0;
}
function aR(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, aD.I)(t),
        l = (0, d.bG)([ak.A], () => ak.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(x.E, {
                variant: "body-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)(tX.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(aA.A, { game: a, size: aA.M.SMALL }),
                    (0, r.jsxs)(tX.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(x.E, { variant: "body-md/semibold", children: a.name }),
                            (0, r.jsx)(x.E, { variant: "footnote/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function aO() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([t8.A], () => t8.A.games),
        i = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => aT(t.value) - aT(e.value)),
            [l],
        ),
        s = o.useMemo(() => ({ baseSort: (e, t) => aT(t.item.value) - aT(e.item.value), keys: ["label"] }), []),
        c = o.useCallback((e) => {
            (t(e), null != e && n(""));
        }, []),
        u = o.useCallback((e) => {
            (n(e), e.trim().length > 0 && t(null));
        }, []),
        m = a.trim(),
        h = m.length > 0 ? m : (e ?? void 0),
        g = (0, t5.A)({ gameId: h, location: "DevToolsGameProfile", source: t6.GameProfileSources.DevTools });
    return (0, r.jsx)("div", {
        className: t2.nd,
        children: (0, r.jsxs)(tX.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(tX.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Game Profile" }),
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Search" }),
                        (0, r.jsx)(aN.Z, {
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
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Game ID" }),
                        (0, r.jsx)(f.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: u,
                        }),
                        m.length > 0 && (0, r.jsx)(aR, { gameId: m }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    variant: "primary",
                    text: "Open Game Profile",
                    fullWidth: !0,
                    disabled: null == g,
                    onClick: g ?? void 0,
                }),
            ],
        }),
    });
}
var aw = a(923477),
    aM = a(750672);
function aP() {
    let e = (0, aw.O)((e) => e.requestHighlightFirstCard);
    return (0, r.jsxs)("div", {
        className: ee()(t2.nd, aM.k),
        children: [
            (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Game Server Hosting" }),
            (0, r.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children:
                    'Replays the post-purchase scroll + highlight on the first card in the "Your game servers" list, exactly like clicking "View game server" after checkout. Open the Game Servers shop tab (/shop?tab=game-servers) with at least one owned server first.',
            }),
            (0, r.jsx)(p.$, { variant: "secondary", text: "Run post-purchase highlight (first card)", onClick: e }),
        ],
    });
}
var aL = a(554146),
    aU = a(594061),
    aG = a(617617),
    aF = a(355898),
    aB = a(644103),
    a$ = a(574560),
    aV = a(434265);
let aW = [
        aL.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        aL.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
        aL.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
    ].map((e) => ({ id: String(e), label: aL.M[e], value: e })),
    aH = { "global-cooldown": "global cooldown", "per-game-cooldown": "per-game cooldown", disabled: "disabled" };
function az() {
    let [e, t] = o.useState("dismissals"),
        [a, n] = o.useState(aL.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, d.bG)([aG.A], () => aG.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        i = (0, d.bG)([a$.A], () => a$.A.getAllGameUpsellDismissals(a)),
        s = o.useMemo(() => Object.keys(i ?? {}), [i]),
        c = (0, t0.A)(s),
        [u, m] = o.useState(""),
        [h, g] = o.useState([]);
    o.useEffect(
        () =>
            (0, aB.Y)((e) => {
                g((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let v = o.useMemo(() => {
            let e = new Set();
            for (let t of h) for (let a of t.applicationIds) e.add(a);
            return [...e];
        }, [h]),
        y = (0, t0.A)(v),
        E = o.useMemo(() => Object.fromEntries(v.map((e, t) => [e, y[t]])), [v, y]),
        C =
            l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
                ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
                : "Never";
    return (0, r.jsxs)("div", {
        className: aV.nd,
        children: [
            (0, r.jsxs)("div", {
                className: aV.$H,
                children: [
                    (0, r.jsx)(et.D, {
                        className: ee()(aV.V3, { [aV.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(et.D, {
                        className: ee()(aV.V3, { [aV.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", h.length > 0 ? `(${h.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: aV.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: aV.uW,
                              children: (0, r.jsx)(j.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: aW,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: aV.uW,
                              children: [
                                  (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Global DCF State" }),
                                  (0, r.jsxs)(x.E, { variant: "body-sm/normal", children: ["Last dismissed: ", C] }),
                                  (0, r.jsxs)(x.E, {
                                      variant: "body-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                                  (0, r.jsx)(p.$, {
                                      variant: "secondary",
                                      text: "Reset Global DCF State",
                                      onClick: () => (0, aU._N)(a),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: aV.uW,
                              children: [
                                  (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Mark as Dismissed" }),
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
                                          ((0, aF.M)([u.trim()], a), m(""));
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(b.c, {}),
                          (0, r.jsxs)("div", {
                              className: ee()(aV.uW, aV.LY),
                              children: [
                                  (0, r.jsxs)(en.D, {
                                      variant: "heading-sm/semibold",
                                      children: ["Per-Game Dismissals (", s.length, ")"],
                                  }),
                                  0 === s.length
                                      ? (0, r.jsx)(x.E, {
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
                                                            className: aV.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: aV.MY,
                                                                    children: [
                                                                        null != s &&
                                                                            (0, r.jsx)("img", {
                                                                                src: s,
                                                                                alt: "",
                                                                                className: aV.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: aV.qi,
                                                                            children: [
                                                                                (0, r.jsx)(x.E, {
                                                                                    variant: "body-sm/semibold",
                                                                                    children: n?.name ?? "Unknown App",
                                                                                }),
                                                                                (0, r.jsx)(x.E, {
                                                                                    variant: "body-xs/normal",
                                                                                    color: "text-muted",
                                                                                    children: e,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, r.jsx)(p.$, {
                                                                            variant: "secondary",
                                                                            text: "Clear",
                                                                            onClick: () => (0, aF.e)(e, a),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(x.E, {
                                                                    variant: "body-xs/normal",
                                                                    children: [
                                                                        "Last dismissed: ",
                                                                        new Date(l.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(x.E, {
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
                                                        for (let e of s) (0, aF.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: aV.Lj,
                      children: (0, r.jsxs)("div", {
                          className: aV.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: aV.aq,
                                  children: [
                                      (0, r.jsxs)(en.D, {
                                          variant: "heading-sm/semibold",
                                          children: ["Hook Calls (", h.length, ")"],
                                      }),
                                      (0, r.jsx)(p.$, { variant: "secondary", text: "Clear", onClick: () => g([]) }),
                                  ],
                              }),
                              0 === h.length
                                  ? (0, r.jsx)(x.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "No calls recorded yet. Hook calls to useShouldShowGameUpsellForMultipleGames will appear here.",
                                    })
                                  : h.map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: aV.Nr,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: aV.O9,
                                                        children: [
                                                            (0, r.jsx)(x.E, {
                                                                variant: "body-xs/semibold",
                                                                children: new Date(e.timestamp).toLocaleTimeString(),
                                                            }),
                                                            e.disabled &&
                                                                (0, r.jsx)("span", {
                                                                    className: aV.t7,
                                                                    children: "(disabled)",
                                                                }),
                                                            (0, r.jsx)(x.E, {
                                                                variant: "body-xs/normal",
                                                                color: "text-muted",
                                                                children: aL.M[e.dismissibleContent],
                                                            }),
                                                        ],
                                                    }),
                                                    0 === e.applicationIds.length
                                                        ? (0, r.jsx)(x.E, {
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
                                                                      className: aV.Ss,
                                                                      children: [
                                                                          null != n &&
                                                                              (0, r.jsx)("img", {
                                                                                  src: n,
                                                                                  alt: "",
                                                                                  className: aV.rb,
                                                                              }),
                                                                          (0, r.jsx)("span", {
                                                                              className: aV.Jd,
                                                                              children: a?.name ?? t,
                                                                          }),
                                                                          l
                                                                              ? (0, r.jsx)("span", {
                                                                                    className: aV.OK,
                                                                                    children: "eligible",
                                                                                })
                                                                              : null != i
                                                                                ? (0, r.jsx)("span", {
                                                                                      className: aV.t7,
                                                                                      children: aH[i],
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
var aK = a(696986),
    aY = a(47167),
    aq = a(734057),
    aJ = a(994500),
    aQ = a(398269),
    aX = a(394953),
    aZ = a(618216);
let a0 = [
        {
            key: "channelName",
            cellClassName: ee()(aZ.Hn, aZ.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(x.E, { variant: "body-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: ee()(aZ.Hn, aZ.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(x.E, { variant: "body-md/normal", children: t });
            },
        },
    ],
    a1 = [
        {
            key: "channelName",
            cellClassName: ee()(aZ.Hn, aZ.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(x.E, { variant: "body-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: ee()(aZ.Hn, aZ.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(x.E, { variant: "body-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: ee()(aZ.Hn, aZ.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(x.E, { variant: "body-md/normal", children: t });
            },
        },
    ];
function a2() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, aX.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: i,
            isLoadingComplete: s,
        } = (0, tT.cf)([aQ.A], () => ({
            isLoading: aQ.A.isLoading,
            hasLoadedEver: aQ.A.hasLoadedEver,
            hasPreloaded: aQ.A.hasPreloaded,
            hasMoreToLoad: aQ.A.hasMoreToLoad,
            isLoadingComplete: aQ.A.isLoadingComplete,
        })),
        o = (0, tT.bG)([aQ.A], () => aQ.A.currentRequestAnalyticsPayload),
        d = (0, tT.cf)([aQ.A], () => aQ.A.getChannelInfoMap()),
        c = (0, tT.cf)([aq.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = aq.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        u = (0, tT.cf)([aq.A], () =>
            t.reduce((e, t) => {
                let a = aq.A.getChannel(t);
                return ((e[t] = a ?? null), e);
            }, {}),
        ),
        h = (0, tT.bG)([aQ.A], () => aQ.A.getInboxMessages()),
        p = (0, tT.bG)([aQ.A], () => aQ.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: t2.nd,
        children: (0, r.jsxs)(g.Ip, {
            className: aZ.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(m.d, {
                                label: "Nav On Click",
                                checked: !!p,
                                onChange: (e) => {
                                    C.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(aK.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(t3, {
                            columns: a0,
                            data: Object.entries(u).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, aY.m1)(a, eh.default, aJ.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Store State" }),
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
                        (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(t3, {
                            columns: a1,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = c[a]) ? (0, aY.m1)(t, eh.default, aJ.A) : "",
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
var a3 = a(976860),
    a6 = a(7891),
    a5 = a(786800);
let a8 = function () {
    return (0, r.jsxs)("div", {
        className: a5.k,
        children: [
            (0, r.jsx)(x.E, {
                variant: "body-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(p.$, {
                onClick: () => {
                    ((0, a6.Ov)(), (0, a3.pX)(ev.BVt.QUEST_HOME));
                },
                text: "Clear History",
            }),
            (0, r.jsx)(x.E, {
                variant: "body-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var a4 = a(271866),
    a9 = a(868511),
    a7 = a(147964),
    ne = a(636116),
    nt = a(13981),
    na = a(760716),
    nn = a(115093),
    nl = a(970628);
let ni = window.GLOBAL_ENV.RELEASE_CHANNEL === nn.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function ns() {
    let e = (0, na.i)((e) => e.overrideApplicationId),
        t = (0, na.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        n = (0, na.i)((e) => e.overrideNitroEligibilityForSocialLayerStorefront),
        l = (0, na.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
        i = (0, na.i)((e) => e.isNitroEligibleForSocialLayerStorefront),
        s = (0, na.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront),
        [c, u] = o.useState(ni),
        [h, x] = o.useState(ev.FYj),
        g = o.useCallback(
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
        b = (0, na.i)((e) => e.showSelfActivity),
        j = (0, na.i)((e) => e.setShowSelfActivity),
        y = (0, na.i)((e) => e.recommendationApplicationIds),
        E = (0, na.i)((e) => e.setRecommendationApplicationIds),
        C = o.useCallback(
            (e) => {
                e ? E(h) : E(null);
            },
            [h, E],
        ),
        S = (0, d.bG)([a7.A], () => null != a7.A.testModeApplicationId),
        _ = o.useCallback((e) => {
            e ? (0, P.qf)((e) => (0, r.jsx)(a9.A, { ...e })) : a4.cL();
        }, []),
        N = (0, t5.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: c,
            source: t6.GameProfileSources.Embed,
            trackEntryPointImpression: !0,
        }),
        A = o.useCallback(
            (e) => {
                N?.(e);
            },
            [N],
        ),
        k = o.useCallback(() => {
            (0, a3.pX)(ev.BVt.COLLECTIBLES_SHOP_GAME_SHOP(c));
        }, [c]);
    return (0, r.jsx)("div", {
        className: ee()(t2.nd, nl.n),
        children: (0, r.jsxs)("div", {
            className: nl.k,
            children: [
                (0, r.jsx)(f.k, { label: "Application ID", value: c, onChange: v }),
                (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Activity Override" }),
                (0, r.jsx)(m.d, { label: "Override activity application ID", checked: a, onChange: g }),
                (0, r.jsx)(m.d, { label: "Show own voice activity (bypass self check)", checked: b, onChange: j }),
                (0, r.jsx)(m.d, { label: "Enable application test mode", checked: S, onChange: _ }),
                (0, r.jsx)(p.$, { text: "Open Game Profile Modal", onClick: A }),
                (0, r.jsx)(p.$, { text: "Navigate to App Game Shop", onClick: k }),
                (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Game Exit Promo" }),
                Object.values(ne.U3).map((e) =>
                    (0, r.jsx)(
                        p.$,
                        {
                            text: "Preview",
                            onClick: () => {
                                ((0, nt.ik)({ type: "replaced" }), (0, nt.sC)(e.id, { isPreview: !0 }));
                            },
                        },
                        e.id,
                    ),
                ),
                (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Wishlists" }),
                (0, r.jsx)(f.k, {
                    label: "Recommendation application IDs",
                    value: h,
                    onChange: x,
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
var nr = a(540999),
    no = a(723702);
(a(650750), a(772958));
var nd = a(58736);
(a(558179), a(21574));
var nc = a(231545),
    nu = a(761929),
    nm = a(180808);
function nh(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, nu.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: nu.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: nm.Di });
}
function np(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        i = o.useRef(null),
        [s, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: i,
        className: nm.kL,
        style: { minHeight: l, height: s },
        children: [
            (0, r.jsx)(nh, { resizableNode: i, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: ee()(nm.KZ, a), children: t }),
        ],
    });
}
var nx = a(231643),
    ng = a(362688);
(a(140346), ng.fu.NONE, ng.fu.NONE);
var nv = a(825484),
    nb = a(688810),
    nj = a(975460),
    nf = a(724302),
    ny = a(487431),
    nE = a(712440),
    nC = a(733110),
    nS = a(134861),
    n_ = a(71393),
    nN = a(967198),
    nA = a(942370),
    nk = a(792996),
    nD = a(86495),
    nI = a(681135);
function nT() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, nb.Ay)(tR.A.DEV_TOOLS),
        [i, s] = o.useState(""),
        c = (0, d.bG)([nN.A], () => nN.A.getGuildId()),
        u = (0, d.bG)([n_.A], () => n_.A.getGuild(c)),
        m = u?.gameApplicationIds ?? [],
        h = (0, t0.A)(m).filter((e) => null != e),
        g = (0, d.bG)([N.Ay, D.A], () => (0, A.A)(N.Ay, D.A)),
        v = (0, t0.h)(i),
        j = (0, nj.g)(v),
        y = (0, d.yK)(
            [tZ.A],
            () => v?.linkedGames?.map((e) => tZ.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        E = (0, nf.RD)(v, { allowedFlows: [nA._.RPC], debug: !0 }),
        C = (0, nf.RD)(v, { allowedFlows: [nA._.WEB], debug: !0 }),
        S = (0, d.bG)([nS.A], () => null != j && nS.A.isConnected(j.id)),
        _ = (0, nf.RD)(v, { debug: !0 }),
        { canDeauthorize: k, deauthorize: I } =
            ((e = _.connectionApp?.id),
            (t = (0, d.bG)([nC.A], () => nC.A.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && nE.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: ee()(t2.nd, nI.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nI.kL,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Application" }),
                    (0, r.jsx)(f.k, { label: "Application ID", value: i, onChange: s }),
                    null != g && null != g.id
                        ? (0, r.jsx)(p.$, {
                              onClick: () => s(g.id),
                              variant: "primary",
                              text: `Use detected game: ${g.name} (${g.id})`,
                          })
                        : null,
                    null != u
                        ? h.length > 0
                            ? (0, r.jsxs)("div", {
                                  className: nI.Mc,
                                  children: [
                                      (0, r.jsxs)(x.E, {
                                          variant: "body-sm/semibold",
                                          color: "text-subtle",
                                          children: [u.name, " (", u.id, ") \xb7 Official games"],
                                      }),
                                      (0, r.jsx)(nv.e, {
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
                            : (0, r.jsxs)(x.E, {
                                  variant: "body-md/normal",
                                  color: "text-subtle",
                                  children: [u.name, " (", u.id, ") \xb7 No official games"],
                              })
                        : (0, r.jsx)(x.E, {
                              variant: "body-md/normal",
                              color: "text-subtle",
                              children: "No guild selected",
                          }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)("div", {
                        className: nI.J3,
                        children: [
                            (0, r.jsxs)(x.E, {
                                variant: "body-md/normal",
                                children: ["Application Name: ", null != v ? v.name : "N/A"],
                            }),
                            (0, r.jsxs)(x.E, {
                                variant: "body-md/normal",
                                children: [
                                    "Linked Games:",
                                    " ",
                                    y.length > 0
                                        ? y.map((e) => ((0, nj.t)(v)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                        : "N/A",
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)("div", {
                className: nI.kL,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Authorization status" }),
                    (0, r.jsx)(ny.VT, {
                        flow: nA._.RPC,
                        showGlobalFlowToggle: !0,
                        overallStatus: E.debug.isSubscribedToAuthorizeRequest
                            ? ny.nW.OVERALL_GOOD
                            : S
                              ? ny.nW.WARN
                              : ny.nW.OVERALL_BAD,
                        name: nk.intl.string(nD.default.AGLx00),
                        steps: [
                            {
                                status: S ? ny.nW.GOOD : ny.nW.BAD,
                                text: nk.intl.string(nD.default.kxF9br),
                                description: S ? null : nk.intl.string(nD.default.PFxxJa),
                                learnMoreLink: S
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: E.debug.isSubscribedToAuthorizeRequest
                                    ? ny.nW.GOOD
                                    : S
                                      ? ny.nW.WARN
                                      : ny.nW.BAD,
                                text: nk.intl.string(nD.default.S94dzs),
                                description:
                                    E.debug.isSubscribedToAuthorizeRequest || !S
                                        ? null
                                        : nk.intl.string(nD.default.aTULMB),
                                learnMoreLink:
                                    E.debug.isSubscribedToAuthorizeRequest || !S
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: _.chosenFlow === nA._.RPC,
                    }),
                    (0, r.jsx)(ny.VT, {
                        flow: nA._.WEB,
                        showGlobalFlowToggle: !0,
                        overallStatus: C.debug.hasConnectionEntrypointUrl ? ny.nW.OVERALL_GOOD : ny.nW.OVERALL_BAD,
                        name: nk.intl.string(nD.default.K3ObrU),
                        steps: [
                            {
                                status: C.debug.hasConnectionEntrypointUrl ? ny.nW.GOOD : ny.nW.BAD,
                                text: nk.intl.string(nD.default["8a7IrV"]),
                                description: C.debug.hasConnectionEntrypointUrl
                                    ? nk.intl.formatToPlainString(nD.default["9iLeL2"], {
                                          url: C.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: _.chosenFlow === nA._.WEB,
                    }),
                    (0, r.jsx)(ny.Sy, {
                        status: _.hasAlreadyLinked ? ny.nW.OVERALL_GOOD : ny.nW.OVERALL_BAD,
                        text: nk.intl.string(nk.t["Vu/zmQ"]),
                    }),
                    0 === _.debug.validFlows.length &&
                        (0, r.jsx)(x.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "body-md/medium",
                            children: nk.intl.string(nD.default.eg0mNa),
                        }),
                    (0, r.jsx)(p.$, {
                        disabled: !_.canStartAuthorization,
                        fullWidth: !0,
                        onClick: () => _.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsxs)(nv.e, {
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
                        disabled: !k,
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
                            className: nI.kL,
                            children: [
                                (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Benefit configuration" }),
                                (0, r.jsx)("div", {
                                    className: nI.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: nI.Tc,
                                        children: [
                                            null != v.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: v.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: nI.L8,
                                                }),
                                            (0, r.jsx)(x.E, {
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
var nR = a(812020),
    nO = a(584454),
    nw = a(404885);
function nM() {
    let e = (0, d.bG)([nR.A], () => nR.A.getDevToolsOverride()),
        t = (0, d.bG)([eh.default], () => (null != e ? (eh.default.getUser(e.otherUserId) ?? null) : null), [e]),
        [a, n] = o.useState(t?.username ?? ""),
        [l, i] = o.useState(e?.communicationProbability ?? 1),
        [s, c] = o.useState(e?.vcProbability ?? 1),
        u = a.trim(),
        m = (0, d.bG)([eh.default], () => (u.length > 0 ? (eh.default.findByTag(u) ?? null) : null), [u]),
        h = u.length > 0 && null == m,
        g = null != m && null != l && null != s;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(tX.B, {
                gap: 8,
                padding: 8,
                children: [
                    (0, r.jsx)(x.E, { variant: "body-md/semibold", children: "User Affinity Override" }),
                    (0, r.jsx)(x.E, {
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
                    (0, r.jsxs)(tX.B, {
                        gap: 8,
                        direction: "horizontal",
                        align: "end",
                        children: [
                            (0, r.jsx)(nO.Q, {
                                label: "Comm. affinity",
                                mode: "decimal",
                                min: 0,
                                max: 1,
                                step: 0.1,
                                value: l,
                                onChange: i,
                            }),
                            (0, r.jsx)(nO.Q, {
                                label: "Voice affinity",
                                mode: "decimal",
                                min: 0,
                                max: 1,
                                step: 0.1,
                                value: s,
                                onChange: c,
                            }),
                            (0, r.jsxs)(nv.e, {
                                children: [
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: null == e ? "Apply" : "Update",
                                        onClick: function () {
                                            g &&
                                                null != m &&
                                                null != l &&
                                                null != s &&
                                                (0, nw.C)({
                                                    userId: m.id,
                                                    communicationProbability: l,
                                                    vcProbability: s,
                                                });
                                        },
                                        disabled: !g,
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: "Clear",
                                        onClick: function () {
                                            ((0, nw.C)(null), n(""), i(1), c(1));
                                        },
                                        disabled: null == e,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != e &&
                        (0, r.jsxs)(x.E, {
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
var nP = a(541660);
function nL(e) {
    let { title: t, sortKey: a, activeSortKey: n, sortDir: l, onClick: i } = e,
        s = n === a ? ("desc" === l ? " \u25BC" : " \u25B2") : "";
    return (0, r.jsx)(et.D, {
        className: nP.K8,
        onClick: () => i(a),
        children: (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: t + s }),
    });
}
function nU() {
    let [e, t] = o.useState("affinity"),
        [a, n] = o.useState("desc"),
        l = o.useCallback(
            (a) => {
                e === a ? n((e) => ("asc" === e ? "desc" : "asc")) : (t(a), n("username" === a ? "asc" : "desc"));
            },
            [e],
        ),
        i = (0, d.yK)([nR.A, eh.default], () =>
            nR.A.getUserAffinities().map((e) => {
                let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
                return { user: eh.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
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
                    cellClassName: nP.iL,
                    renderHeader: () =>
                        (0, r.jsx)(nL, {
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
                        (0, r.jsx)(nL, {
                            title: "COMMUNICATION AFFINITY",
                            sortKey: "affinity",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nP.nz,
                    render(e) {
                        let { affinity: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "vcProbability",
                    renderHeader: () =>
                        (0, r.jsx)(nL, {
                            title: "VOICE AFFINITY",
                            sortKey: "vcProbability",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nP.nz,
                    render(e) {
                        let { vcProbability: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "isFriend",
                    renderHeader: () => (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "IS FRIEND" }),
                    cellClassName: nP.nz,
                    render(e) {
                        let { isFriend: t } = e;
                        return t.toString();
                    },
                },
            ],
            [e, a, l],
        );
    return (0, r.jsxs)("div", {
        className: nP.nd,
        children: [(0, r.jsx)(nM, {}), i.length > 0 && (0, r.jsx)(t3, { columns: c, rowClassName: nP.nM, data: s })],
    });
}
var nG = a(536637),
    nF = a.n(nG),
    nB = a(862482),
    n$ = a(624479),
    nV = a(555704),
    nW = a(285796),
    nH = a(241326),
    nz = a(683438),
    nK = a(297413),
    nY = a(379078),
    nq = a(704554),
    nJ = a(957565),
    nQ = a(5377),
    nX = a(80703),
    nZ = a(46653);
let n0 = 0,
    n1 = [],
    n2 = 0,
    n3 = [],
    n6 = !1;
class n5 extends d.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nZ.default, nr.A);
    }
    get loggedEvents() {
        return n1;
    }
    get loggedEventsVersion() {
        return n2;
    }
    get loggedTriggers() {
        return n3;
    }
    get trackTriggers() {
        return n6;
    }
}
let n8 = new n5(C.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        nr.A.isDeveloper &&
            (n1.push({
                key: (n0++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, nX.d)(n) : nZ.default.getId(),
                timestamp: new Date(),
            }),
            n2++,
            n1.length > 500 && (n1 = n1.slice(-250)));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: i, previouslyTracked: s } = e;
        !nr.A.isDeveloper ||
            (n6 &&
                (n3 = [
                    ...n3,
                    {
                        key: (0, eG.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: i,
                        previouslyTracked: s,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                n3.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        n6 = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        ((n1 = []), n2++, (n3 = []));
    },
});
var n4 = a(658675);
function n9(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: ee()(t2.qo, t), children: a });
}
function n7(e) {
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
                (0, r.jsx)("dt", { className: t2.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: t2.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(et.D, {
                                  tag: "span",
                                  className: t2.nH,
                                  onClick: () => (0, nJ.C)(n, () => i(!0)),
                                  children: l
                                      ? (0, r.jsx)(tp.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(n$.CopyIcon, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
}
function le(e) {
    let { value: t } = e;
    return (0, r.jsx)(n4.P, { checked: t });
}
var lt = a(412966);
let la = [
    {
        key: "Event",
        cellClassName: lt.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "Location",
        cellClassName: lt.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function ln(e) {
    let { children: t } = e;
    return (0, r.jsx)(g.Ip, { orientation: "auto", className: lt._D, children: (0, r.jsx)("dl", { children: t }) });
}
function ll(e) {
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
            className: lt.fY,
            children: [
                (0, r.jsx)("dt", { className: lt.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(et.D, {
                    tag: "span",
                    className: lt.nH,
                    onClick: () => (0, nJ.C)(JSON.stringify(n), () => i(!0)),
                    children: l
                        ? (0, r.jsx)(tp.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(n$.CopyIcon, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let li = new Set(["client_performance_cpu", "client_performance_memory"]),
    ls = [
        {
            id: "details",
            name: "Details",
            group: ng.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: i,
                        filteredEvents: s,
                    } = e,
                    o = eh.default.getUser(l),
                    d = nF()(n);
                return (0, r.jsxs)("div", {
                    className: lt.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(nd.Ay, {
                            className: ee()(t2.jr, lt.nZ),
                            children: [
                                (0, r.jsx)(nd.Ay.Icon, { icon: nV.U, tooltip: t }),
                                (0, r.jsxs)(nd.Ay.Title, {
                                    wrapperClassName: lt.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(et.D, {
                                            tag: "span",
                                            className: lt.KE,
                                            onClick: () => (0, nJ.C)(t),
                                            children: (0, r.jsx)(n$.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(nd.Ay.Icon, {
                                    icon: n$.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nJ.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(nd.Ay.Icon, { icon: nW.a, tooltip: "Close", onClick: i }),
                            ],
                        }),
                        (0, r.jsxs)(n9, {
                            className: lt.ZK,
                            children: [
                                (0, r.jsx)(n7, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nQ.i$)(d, "LLLL"),
                                        children: ["(", nF().locale(), ") ", (0, nQ.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(n7, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(nK.A, { user: o }),
                                    }),
                                (0, r.jsx)(n7, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(ln, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = li.has(a)
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
                                                ll,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: lt.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    ll,
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
    lr = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(lr)
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
    lo = {
        searchType: nY.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function ld() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, d.bG)([n8], () => n8.loggedEventsVersion),
        [l, i] = o.useState(() => Object.keys(lr)),
        [s, c] = o.useState(n8.loggedEvents),
        u = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nq.RT)(t, n8.loggedEvents, u, lo, [n]);
    let m = s.filter((e) => {
            for (let t of l) if (lr[t].filter(e)) return !0;
            return !1;
        }),
        [h, p] = o.useState(void 0),
        x = m.find((e) => e.key === h),
        { TabBar: g, renderSelectedTab: v } = (0, nx.A)({ tabs: ls }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: ee()(t2.nd, lt.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lt.rh,
                children: [
                    (0, r.jsx)(nB.$n, {
                        className: lt.Q$,
                        look: nB.$n.Looks.BLANK,
                        size: nB.$n.Sizes.ICON,
                        onClick: el.eY,
                        children: (0, r.jsx)("span", {
                            title: nk.intl.string(nk.t.VkKicb),
                            children: (0, r.jsx)(nH.TrashIcon, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": nk.intl.string(nk.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: lt.Bi }),
                    (0, r.jsx)("div", {
                        className: lt.uW,
                        children: Object.entries(lr).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                et.D,
                                {
                                    className: ee()(lt.pb, l.includes(t) && lt.bx),
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
                className: lt.rh,
                children: (0, r.jsx)(nz.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(t3, { columns: la, data: m, selectedRowKey: h, onClickRow: (e) => p(e.key) }),
            null != x &&
                (0, r.jsxs)(np, {
                    className: lt.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(g, {}), v({ loggedEvent: x, onClose: () => p(void 0), filteredEvents: m })],
                }),
        ],
    });
}
var lc = a(382483),
    lu = a(385113),
    lm = a(317672);
function lh(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(tX.B, {
        gap: 8,
        padding: 8,
        className: lm.lt,
        children: [
            (0, r.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(x.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(x.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(x.E, { variant: "body-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(x.E, {
                    variant: "body-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(x.E, {
                    variant: "body-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(x.E, {
                variant: "body-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          tX.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: lm.YL,
                              children: [
                                  (0, r.jsx)(x.E, { variant: "body-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(x.E, {
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
function lp(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(tX.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? lm.FM : lm.gt,
        children: [
            (0, r.jsx)(et.D, {
                className: lm.Av,
                onClick: n,
                children: (0, r.jsxs)(tX.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(x.E, { variant: "body-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(x.E, {
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
                onClick: () => (0, lc.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function lx() {
    let e = (0, d.bG)([lu.A], () => lu.A.getFeaturedFetchState());
    return (0, r.jsxs)(tX.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(tX.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(x.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(x.E, { variant: "body-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, lc.Wq)({ force: !0 }),
            }),
        ],
    });
}
function lg() {
    let e = (0, d.bG)([lu.A], () => lu.A.getDeveloperFetchState());
    return (0, r.jsxs)(tX.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(tX.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(x.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(x.E, { variant: "body-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, lc.i$)({ force: !0 }),
            }),
        ],
    });
}
function lv() {
    let [e, t] = o.useState(""),
        a = (0, d.bG)([lu.A], () => (e.length > 0 ? lu.A.getFetchState(e) : null)),
        n = (0, d.bG)([lu.A], () => (e.length > 0 ? lu.A.getConfigs(e) : null));
    return (0, r.jsxs)(tX.B, {
        gap: 8,
        children: [
            (0, r.jsx)(x.E, { variant: "body-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(f.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, lc.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(x.E, { variant: "body-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(tX.B, { gap: 4, children: n.map((e) => (0, r.jsx)(lh, { config: e }, e.config_id)) }),
        ],
    });
}
function lb(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, d.bG)([lu.A], () => lu.A.getFeaturedFetchState());
    return (0, r.jsxs)(tX.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(x.E, {
                variant: "body-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === lu.e.FETCHING &&
                (0, r.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    lp,
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
function lj(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(tX.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(x.E, { variant: "body-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(lh, { config: t }),
                ],
            }),
        ],
    });
}
function lf() {
    let [e, t] = o.useState(null),
        a = Object.values((0, d.bG)([lu.A], () => lu.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)(tX.B, {
            gap: 16,
            padding: 8,
            className: lm.zr,
            children: [
                (0, r.jsx)(en.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(p.$, {
                    size: "sm",
                    variant: "critical-secondary",
                    text: "Reset store",
                    onClick: () => C.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEBUG_RESET" }),
                }),
                (0, r.jsx)(lx, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lg, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lv, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lb, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(lj, { config: n }),
            ],
        }),
    });
}
var ly = a(513520),
    lE = a(134460),
    lC = a(468747);
let lS = [
    {
        key: "Channel",
        cellClassName: lC._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "SCORE" }),
        cellClassName: lC.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function l_() {
    o.useEffect(() => {
        (0, ly.I)();
    }, []);
    let e = (0, d.yK)([lE.A, aq.A], () =>
        lE.A.getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: aq.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(t3, { className: t2.nd, columns: lS, rowClassName: lC.nM, data: e });
}
function lN() {
    return (0, r.jsxs)(x.E, {
        variant: "body-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var lA = a(105565),
    lk = a(517057),
    lD = a(333714);
function lI(e) {
    switch (e) {
        case lA.r.DC_DISMISSED:
            return "DISMISS:";
        case lA.r.DC_SHOWN:
            return "SHOW:";
        case lA.r.DC_SHOW_REQUEST:
            return "REQUEST TO SHOW:";
        default:
            return "UNKNOWN TYPE:";
    }
}
let lT = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${aL.M[a]}`;
            },
        },
    ],
    lR = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${aL.M[t]}`;
            },
        },
    ];
function lO() {
    let e = (0, d.bG)([lA.A], () => lA.A.getDCFEvents()),
        t = (0, lk.Ay)((e) => e.candidates),
        a = (0, lk.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? nF()(a).fromNow() : "n/a",
        l = (0, lk.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        i = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: lI(t) + a.toString(), event: lI(t), dismissibleContent: a };
        }),
        s = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: lD.KE,
        children: [
            (0, r.jsxs)("div", { className: lD.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: lD.pq, children: ["Last winner: ", null != l ? aL.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: lD.uI,
                children: (0, r.jsx)(t3, { className: lD.Th, columns: lR, data: s }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(t3, { columns: lT, data: i }),
        ],
    });
}
var lw = a(516521),
    lM = a(541689),
    lP = a(199773);
function lL() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(lU());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        (a.unshift(e), tQ.w.set("RecentDismissibleOverrides", a));
    }, []);
    return [lU(), e];
}
function lU() {
    return tQ.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var lG = a(662546),
    lF = a(643278),
    lB = a(256787),
    l$ = a(20439);
let lV = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = aL.M[a],
        { isDismissed: i, handleToggleDismissState: s } = (0, l$.A)(l),
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
            (0, r.jsxs)(tX.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eJ.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? lG.O : lF.ClipboardListIcon,
                        onClick: h,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(m.d, {
                        label: `${a.toLowerCase()} (${aL.M[a]})`,
                        description: (0, lB.Zm)(l)
                            ? (function (e) {
                                  let t = aG.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
function lW(e) {
    let { items: t, onChange: a } = e,
        [n, l] = lL(),
        i = (0, o.useCallback)(
            (e) => {
                (l(e), a?.(e));
            },
            [l, a],
        );
    return (0, r.jsx)(tX.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lV, { content: e, onChange: i }, e)),
    });
}
function lH(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lk.Ay)((e) => e.recentlyShown),
        [n, l] = lL(),
        i = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(aL.M[e]))
            .slice(0, 3);
    return 0 === i.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(lW, { items: i }) });
}
function lz(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lk.Ay)((e) => e.recentlyShown)
            .map((e) => aL.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(lW, { items: a }) });
}
var lK = a(607734);
function lY() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
            upsellBackoffOverridden: n,
        } = (0, d.cf)([lP.A], () => ({
            dailyCapReached: lP.A.hasUserHitDCCap(),
            dailyCapOverridden: lP.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lP.A.newUserMinAgeRequiredOverridden,
            upsellBackoffOverridden: lP.A.upsellBackoffOverridden,
        })),
        [l, i] = o.useState(""),
        [s, c] = o.useState(20),
        h = o.useMemo(
            () =>
                Object.keys(aL.M)
                    .filter((e) => e.toLowerCase().includes(l.toLowerCase()))
                    .reverse(),
            [l],
        ),
        g = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < h.length && c((e) => e + 100);
            },
            [s, h.length],
        );
    return (0, r.jsx)(lw.Ch, {
        onScroll: g,
        children: (0, r.jsxs)("div", {
            className: lK.KE,
            children: [
                (0, r.jsxs)(u.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(tX.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, lM.Ab)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, aU.nT)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, aU.D1)(),
                                }),
                                (0, r.jsx)(x.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: lM.SE,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: lM.U$,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override 60-Minute Backoff Between DC Displays",
                            checked: n,
                            onChange: lM.M1,
                        }),
                    ],
                }),
                (0, r.jsx)(lz, {}),
                (0, r.jsx)(lH, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(nz.I, { query: l, onChange: i, onClear: () => i("") }),
                        (0, r.jsx)(lW, { items: h.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lq = a(276086),
    lJ = a(154323),
    lQ = a(504565);
function lX() {
    let e = (0, d.bG)([lJ.A], () => lJ.A.allWithDescriptions(), [], d.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                m.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lq.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(b.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lQ.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lQ.x6,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Clear all", onClick: lq.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lQ.vu, children: t }),
        ],
    });
}
var lZ = a(106839);
function l0() {
    let e = (0, d.bG)([t8.A], () => t8.A.detectableGamesEtag),
        t = (0, d.bG)([t8.A], () => t8.A.lastFetched),
        a = (0, d.bG)([t8.A], () => t8.A.games.length);
    return (0, r.jsxs)(tX.B, {
        gap: 4,
        children: [
            (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Cache Status" }),
            (0, r.jsxs)(x.E, {
                variant: "body-sm/normal",
                children: [(0, r.jsx)("strong", { children: "Total games:" }), " ", a],
            }),
            (0, r.jsxs)(x.E, {
                variant: "body-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "ETag:" }),
                    " ",
                    "" === e ? "(empty)" : (0, r.jsx)("span", { className: lZ.ti, children: e }),
                ],
            }),
            (0, r.jsxs)(x.E, {
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
function l1(e) {
    let { game: t } = e,
        { data: a } = (0, aD.I)(t.id),
        n = null != a && a.name !== t.name;
    return (0, r.jsxs)(tX.B, {
        gap: 12,
        className: lZ.f_,
        children: [
            (0, r.jsxs)(tX.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                children: [
                    (0, r.jsx)(aA.A, { game: a, size: aA.M.LARGE }),
                    (0, r.jsxs)(tX.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: t.name }),
                            (0, r.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t.id }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(tX.B, {
                gap: 4,
                children: [
                    (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "GameStore" }),
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children:
                            null == a
                                ? "No record fetched. The icon above comes from here, not from the detectable payload, so it is blank."
                                : `name: ${a.name}`,
                    }),
                    n &&
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            children: "Differs from the detectable name above.",
                        }),
                ],
            }),
            (0, r.jsxs)(tX.B, {
                gap: 4,
                className: lZ.Uq,
                children: [
                    (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "DetectableGameStore" }),
                    (0, r.jsx)("pre", { className: lZ.aY, children: JSON.stringify(t, null, 2) }),
                ],
            }),
        ],
    });
}
function l2() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([t8.A], () => t8.A.games),
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
        h = (0, d.bG)([t8.A], () => (null != m ? (t8.A.getDetectableGame(m) ?? null) : null), [m]);
    return (0, r.jsx)("div", {
        className: ee()(t2.nd, lZ.kL),
        children: (0, r.jsxs)(tX.B, {
            gap: 16,
            padding: 12,
            className: lZ.rf,
            children: [
                (0, r.jsxs)(tX.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Detectable Cache" }),
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "Inspect the local detectable games cache. Use this to verify whether a SKU or executable change has propagated to your client.",
                        }),
                    ],
                }),
                (0, r.jsx)(l0, {}),
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Search" }),
                        (0, r.jsx)(aN.Z, {
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
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Game ID" }),
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
                                ? (0, r.jsx)(l1, { game: h })
                                : (0, r.jsxs)(x.E, {
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
var l3 = a(858899),
    l6 = a(123292),
    l5 = a(273626),
    l8 = a(56562);
let l4 = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
    { label: "World of Warcraft", value: "356875762940379136" },
];
function l9(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, aD.I)(t.id);
    return (0, r.jsxs)(tX.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(aA.A, { game: n }),
            (0, r.jsxs)(tX.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(x.E, { variant: "body-md/normal", children: n?.name }),
                    a && (0, r.jsx)(x.E, { variant: "footnote/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function l7() {
    let e = (0, d.bG)([N.Ay], () => N.Ay.getRunningGames()),
        t = (0, d.bG)([N.Ay], () => N.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                l4.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        );
    function i(e) {
        if (null == e || "" === e) return void (0, l5.x)(null);
        let t = t8.A.getDetectableGame(e),
            a = t?.executables[0],
            n = t?.thirdPartySkus[0]?.distributor;
        if (null == t || null == a) return (0, l3.P0)({ text: "Invalid Game ID", variant: "critical" });
        (0, l5.x)({
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
            fullscreenType: l8.aI.UNKNOWN,
            cmdLine: "",
            nativeProcessObserverId: -1,
        });
    }
    return (0, r.jsxs)(tX.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(tX.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(l9, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(tX.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(f.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(aN.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(tX.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(l6.Q, { variant: "secondary", text: "Clear", onClick: () => i(null) }),
                            (0, r.jsx)(p.$, { variant: "primary", text: "Detect Game", onClick: () => i(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ie = a(620632),
    it = a(240248),
    ia = a(974009);
function il() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        s = o.useCallback(async () => {
            try {
                (t(!0), n(null), i(null));
                let e = await ie.Bo.put({
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
    return (0, r.jsxs)(tX.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(p.$, { variant: "primary", onClick: s, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, it.uJ)(a) && (0, r.jsx)(x.E, { variant: "body-md/normal", color: "status-positive", children: a }),
            !(0, it.uJ)(l) &&
                (0, r.jsx)(x.E, { variant: "body-md/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function ii() {
    return (0, r.jsx)("div", {
        className: ia.n,
        children: (0, r.jsx)(tX.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(il, {}) }),
    });
}
a(172879);
var is = a(64015),
    ir = a.n(is),
    io = a(874804),
    id = a(866665),
    ic = a(782134),
    iu = a(113494),
    im = a(603349),
    ih = a(108715);
function ip(e) {
    return parseFloat(e.toFixed(3));
}
let ix = [
    {
        key: "Store",
        cellClassName: ih.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "Time",
        cellClassName: ih.i7,
        render(e) {
            let { trace: t } = e;
            return `${ip(t.time)} ms`;
        },
    },
];
function ig(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(g.Ip, { children: (0, r.jsx)(t3, { columns: ix, data: a }) });
}
let iv = [
    {
        id: "action",
        name: "Action",
        group: ng.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = nF()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(n9, {
                        className: ih.mP,
                        children: [
                            (0, r.jsx)(n7, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nQ.i$)(a, "LLLL"),
                                    children: (0, nQ.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(n7, { name: "Total Time", children: [ip(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(g.Ip, { className: ih.Dx, children: (0, r.jsx)(nc.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: ng.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(ig, { actionLog: t });
        },
    },
];
function ib(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...iv,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(im.A, { className: ih.ik }), "Error"],
                              }),
                              group: ng.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: ee()(ih.u4, t2.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: t2.R5,
                                                  children: (0, r.jsx)(nB.$n, {
                                                      className: t2.Q$,
                                                      size: nB.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(g.Ip, {
                                              className: ih.Dx,
                                              children: (0, r.jsx)(nc.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : iv,
            [t],
        ),
        { TabBar: l, renderSelectedTab: i } = (0, nx.A)({ tabs: n }, [n]);
    return (0, r.jsxs)(np, {
        className: ih.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(nd.Ay, {
                className: ee()(t2.jr, ih.nZ),
                children: [
                    (0, r.jsx)(nd.Ay.Icon, { icon: io.K, tooltip: t.name }),
                    (0, r.jsx)(nd.Ay.Title, {
                        wrapperClassName: ee()(t2.qd, t2.ZE),
                        className: t2.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(nd.Ay.Icon, {
                        icon: n$.CopyIcon,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return ((t[a] = ((n = e[a]), ev.AKn.test(n) ? "REDACTED" : n)), t);
                                }, {}),
                                null,
                                2,
                            );
                            (0, nJ.C)(a, () =>
                                (0, l3.P0)({ text: "Copied action log data to clipboard", variant: "success" }),
                            );
                        },
                    }),
                ],
            }),
            i({ actionLog: t }),
        ],
    });
}
let ij = [
        {
            key: "Action",
            cellClassName: ih.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(im.A, { className: ih.ik }), t.name],
                });
            },
        },
        {
            key: "Total Time",
            cellClassName: ih.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${ip(t.totalTime)} ms`;
            },
        },
        {
            key: "Timestamp",
            cellClassName: ih.i7,
            render(e) {
                let { actionLog: t } = e;
                return nF()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    iy = {
        searchType: nY.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function iE() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = ir()(() => {
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
        })(C.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [i, s] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, p] = o.useState(),
        x = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nq.RT)(t, u ? i : l, x, iy);
    let g = o.useCallback(
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
        className: ee()(t2.nd, ih.nd),
        children: [
            (0, r.jsxs)("div", {
                className: ih.KE,
                children: [
                    (0, r.jsx)(id.m, {
                        text: j,
                        children: (0, r.jsx)(eJ.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? ic.PlayIcon : iu.PauseIcon,
                            "aria-label": j,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(nz.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(t3, {
                columns: ij,
                data: b,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => p(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(ib, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var iC = a(936388),
    iS = a(269248);
function i_() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: ee()(t2.nd, iS.n),
        children: (0, r.jsx)(p.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: iC.A.clearUploadedKeyVersions,
        }),
    });
}
var iN = a(409181),
    iA = a(881520),
    ik = a(670455),
    iD = a(932661);
let iI = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function iT() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, i] = o.useState(1e3),
        [s, c] = o.useState(0),
        m = (0, d.bG)([iA.A], () => (null === e ? null : (iA.A.getFeedbackConfig(ik.MW[e]) ?? iN.u[ik.MW[e]]))),
        h = Object.entries(ik.MW),
        g = h.slice(h.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        v = o.useMemo(() => null != e && s >= 0 && s <= 100 && a >= 0, [e, s, a]);
    return (0, r.jsx)("div", {
        className: iD.kL,
        children: (0, r.jsxs)(tX.B, {
            gap: 32,
            children: [
                (0, r.jsx)(j.l, {
                    label: "Feedback Survey",
                    options: g,
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
                                    (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(x.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(x.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(x.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(x.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(tX.B, {
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
                                    options: iI,
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
                (0, r.jsxs)(nv.e, {
                    children: [
                        (0, r.jsx)(p.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != m &&
                                    C.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: m.feedbackType })
                                ),
                            disabled: !v,
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != m &&
                                    C.h.dispatch({
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
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(s >= 0 && s <= 100) &&
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(x.E, {
                    variant: "body-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var iR = a(447732),
    iO = a(931093),
    iw = a(334279),
    iM = a(663417),
    iP = a(147925),
    iL = a(557009);
function iU() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(!1),
        l = (0, o.useCallback)(async () => {
            try {
                n(!0);
                let e = await (async function () {
                    return (
                        await ie.Bo.get({
                            url: ev.Rsh.ENTITLEMENTS_FOR_APPLICATION(tG.tv),
                            oldFormErrors: !0,
                            query: { exclude_consumed: !0, exclude_ended: !0 },
                            rejectWithError: !0,
                        })
                    ).body.map((e) => iL.A.createFromServer(e));
                })();
                t(e);
            } finally {
                n(!1);
            }
        }, []),
        i = (0, o.useCallback)(
            async (e) => {
                (await (async function (e) {
                    await ie.Bo.post({
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
                    (null != e && (t = `${t}/${e}`), await ie.Bo.del({ url: t, rejectWithError: !0 }));
                })(e),
                    await l());
            },
            [l],
        ),
        triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
            (await (async function () {
                await ie.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
            })(),
                await l());
        }, [l]),
        refreshEntitlementList: l,
        entitlements: e,
        loading: a,
    };
}
var iG = a(267577),
    iF = a(370109);
let iB = {
    [iR.G.QUEST_REWARD]: "Quest Reward",
    [iR.G.DEVELOPER_GIFT]: "Developer Gift",
    [iR.G.INVOICE]: "Invoice",
    [iR.G.REVERSE_TRIAL]: "Reverse Trial",
    [iR.G.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    [iR.G.SUBSCRIPTION]: "Subscription",
    [iR.G.SUBSCRIPTION_MEMBER]: "Subscription Member",
};
function i$(e) {
    let t,
        { entitlement: a, active: n, onDelete: l } = e;
    function i(e) {
        return null != e ? (0, nQ.i$)(e, "LLL") : "---";
    }
    return (0, r.jsxs)("div", {
        className: ee()(iG.Nr, n ? iF.C1 : ""),
        children: [
            (0, r.jsxs)(x.E, { variant: "body-md/normal", children: ["ID: ", a.id, " "] }),
            !n &&
                (0, r.jsxs)(x.E, {
                    variant: "body-md/normal",
                    children: ["SKU: ", iV.find((e) => e.value === a.skuId)?.label],
                }),
            null != a.startsAt &&
                null != a.endsAt &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(x.E, { variant: "body-md/normal", children: ["Start: ", i(a.startsAt), " "] }),
                        (0, r.jsxs)(x.E, { variant: "body-md/normal", children: ["End: ", i(a.endsAt), " "] }),
                    ],
                }),
            (0, r.jsxs)(x.E, {
                variant: "body-md/normal",
                children: [
                    "Entitlement source type: ",
                    null != (t = a.sourceType) && t in iB ? iB[t] : `Unknown source type ${t}`,
                ],
            }),
            n &&
                null != l &&
                (0, r.jsx)(nB.$n, {
                    className: iG.RW,
                    size: nB.$n.Sizes.TINY,
                    color: nB.$n.Colors.RED,
                    look: nB.$n.Looks.OUTLINED,
                    onClick: l,
                    children: "Delete",
                }),
        ],
    });
}
let iV = [
    { id: "1h", label: "1 hour", value: iw.j.PREMIUM_TIER_2_1_HOUR },
    { id: "1d", label: "1 day", value: iw.j.PREMIUM_TIER_2_1_DAY },
    { id: "3d", label: "3 days", value: iw.j.PREMIUM_TIER_2_3_DAY },
];
function iW() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(iw.j.PREMIUM_TIER_2_1_HOUR),
        [l, i] = o.useState([]),
        [s, d] = o.useState([]),
        {
            refreshEntitlementList: c,
            grantFractionalPremium: u,
            deleteFractionalPremium: m,
            triggerNextEntitlementFulfillment: h,
            entitlements: v,
            loading: b,
        } = iU();
    return (
        o.useEffect(() => {
            c();
        }, [c]),
        o.useEffect(() => {
            (i(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === iO.z.FRACTIONAL_REDEMPTION)),
                d(v.filter((e) => Object.values(iw.j).includes(e.skuId) && null == e.startsAt)));
        }, [v]),
        (0, r.jsx)(g.Ip, {
            className: t2.nd,
            children: (0, r.jsxs)("div", {
                className: iF.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: iF.dL,
                        children: [
                            (0, r.jsx)(x.E, {
                                style: { marginBottom: "8px" },
                                variant: "body-lg/semibold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(et.D, {
                                onClick: () => t(!e),
                                className: iG.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(iP.A, { direction: e ? iP.A.Directions.UP : iP.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(x.E, {
                                    variant: "body-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(x.E, {
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
                        className: ee()([iG.uW, iF.Uo]),
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: iV,
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
                        className: iG.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: iF.dL,
                                children: [
                                    (0, r.jsx)(x.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "body-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: iG.GC,
                                        children: [
                                            (0, r.jsx)(nB.$n, {
                                                disabled: b,
                                                size: nB.$n.Sizes.TINY,
                                                color: nB.$n.Colors.PRIMARY,
                                                look: nB.$n.Looks.OUTLINED,
                                                onClick: () => h(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(nB.$n, {
                                                disabled: b,
                                                size: nB.$n.Sizes.TINY,
                                                color: nB.$n.Colors.RED,
                                                look: nB.$n.Looks.OUTLINED,
                                                onClick: () => m(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(nB.$n, {
                                                disabled: b,
                                                look: nB.$n.Looks.BLANK,
                                                size: nB.$n.Sizes.ICON,
                                                onClick: c,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(iM.RefreshIcon, {
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
                                        (0, r.jsx)(x.E, {
                                            style: { marginTop: "15px" },
                                            variant: "body-md/semibold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    i$,
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
                                        (0, r.jsx)(x.E, {
                                            style: { marginTop: "15px" },
                                            variant: "body-md/semibold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: s.map((e) => (0, r.jsx)(i$, { entitlement: e }, e.id)),
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
var iH = a(832604),
    iz = a(264572).hp;
let iK = /[^a-zA-Z0-9_.-]+/g;
function iY(e) {
    let { runningGame: t } = e,
        a = (0, iH.A)(t.pid, void 0),
        [n, l] = (0, o.useState)(!1),
        i = t.name ?? t.exeName ?? "",
        s = null != a && !n;
    return (0, r.jsxs)(tX.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 12,
        children: [
            (0, r.jsxs)(tX.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                fullWidth: !1,
                children: [
                    null != a
                        ? (0, r.jsx)("img", { src: a, alt: i, width: 48, height: 48 })
                        : (0, r.jsx)(x.E, { variant: "footnote/normal", color: "text-muted", children: "no icon" }),
                    (0, r.jsxs)(tX.B, {
                        direction: "vertical",
                        gap: 0,
                        fullWidth: !1,
                        children: [
                            (0, r.jsx)(x.E, { variant: "body-md/normal", children: i }),
                            (0, r.jsxs)(x.E, {
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
                            (0, r.jsx)(x.E, { variant: "footnote/normal", color: "text-muted", children: t.exePath }),
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
                                t = await E.A.fileManager.saveWithDialog2(
                                    iz.from(a.slice(a.indexOf(",") + 1), "base64"),
                                    ((e = i.trim().replace(iK, "_")), `${e.length > 0 ? e : "icon"}.png`),
                                    void 0,
                                );
                            null == t ||
                                t.canceledByUser ||
                                (0, l3.P0)({ text: `Saved icon to ${t.directory}`, variant: "success" });
                        } catch {
                            (0, l3.P0)({ text: "Failed to save icon", variant: "critical" });
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
function iq() {
    let e = (0, d.bG)([N.Ay], () => N.Ay.getRunningGames());
    return (0, r.jsxs)(tX.B, {
        gap: 16,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(tX.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Game Icon Extractor" }),
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        children: "Save a running game's locally-detected icon as a PNG.",
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(tX.B, {
                gap: 12,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Running Games" }),
                    0 === e.length
                        ? (0, r.jsx)(x.E, {
                              variant: "body-sm/normal",
                              children: "No games detected. Launch a game first.",
                          })
                        : e.map((e) => (0, r.jsx)(iY, { runningGame: e }, `${e.pid}-${e.exePath}`)),
                ],
            }),
        ],
    });
}
var iJ = a(390544),
    iQ = a(940456),
    iX = a(475669),
    iZ = a(486223);
function i0() {
    let e = (0, d.bG)([nN.A], () => nN.A.getGuildId()),
        t = (0, d.bG)([n_.A], () => n_.A.getGuild(e)?.name),
        a = (0, d.bG)([iX.A], () => iX.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    C.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        i = o.useMemo(
            () =>
                Object.values(iJ.M).map((e) =>
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
                C.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(g.Ip, {
              className: iZ.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: iZ.uW,
                      children: (0, r.jsx)(en.D, { variant: "heading-sm/medium", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: iZ.uW,
                      children: [
                          (0, r.jsx)(x.E, {
                              variant: "body-sm/medium",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: iZ.UD, children: i }),
                          (0, r.jsx)(x.E, { variant: "body-sm/medium", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: iZ.UD,
                              children: (0, r.jsx)(p.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: s,
                              }),
                          }),
                          (0, r.jsx)(x.E, { variant: "body-sm/medium", children: "Reset server" }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, iQ.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var i1 = a(257446);
function i2(e) {
    let { devSettingsCategory: t } = e,
        a = (0, d.bG)([S.Ay], () => S.Ay.allByCategory(t), [t], d.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => _(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: ee()(t2.nd, i1.n), children: n });
}
var i3 = a(950305),
    i6 = a(231483),
    i5 = a(597770),
    i8 = a(433492),
    i4 = a(695458),
    i9 = a(796140),
    i7 = a(268791),
    se = a(836480),
    st = a(855473),
    sa = a(626258),
    sn = a(420854),
    sl = a(373846),
    si = a(657044),
    ss = a(141060),
    sr = a(608599),
    so = a(685761),
    sd = a(157225),
    sc = a(362704),
    su = a(625903),
    sm = a(628284),
    sh = a(320448),
    sp = a(613412),
    sx = a(830215),
    sg = a(662502),
    sv = a(619019),
    sb = a(499785),
    sj = a(315069);
class sf extends sj.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        (super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids));
    }
    static fromServer(e) {
        return new sf(e);
    }
    setPassword(e) {
        return ((this.password = e), this);
    }
}
let sy = { pools: null, users: null };
function sE(e) {
    (null == sy.users && (sy.users = new Map()), sy.users.set(e.id, new sv.A(e)));
}
class sC extends d.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (sy.pools = new Map(Object.entries(e.pools))),
            null != e.users && (sy.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != sy.pools ? Object.fromEntries(sy.pools) : null,
            users: null != sy.users ? Object.fromEntries(sy.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(sy.users?.values() ?? []).filter((t) => sy.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return sy.pools?.get(e) ?? null;
    }
    getUser(e) {
        return sy.users?.get(e) ?? null;
    }
    getPools() {
        return null === sy.pools ? null : Array.from(sy.pools.values());
    }
}
let sS = new sC(C.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        (null == sy.pools && (sy.pools = new Map()), sy.pools.set(t.id, t), a.forEach(sE));
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = sy.pools?.get(t);
        if (null == a) return !1;
        (a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                sy.users?.delete(e);
            }),
            sy.pools?.delete(t));
    },
});
var s_ = a(835002),
    sN = a(844330),
    sA = a(157416);
let sk = [
        i3.UserIcon,
        i6.ShieldIcon,
        i5.GiftIcon,
        i8.K,
        i4.m,
        i9.c,
        i7.$,
        se.CompassIcon,
        st.Z,
        sa.A,
        sn.E,
        sl.C,
        si._,
        ss.i,
        sr.L,
        so.f,
        sd.N,
        sc.Y,
        su.SettingsIcon,
    ],
    sD = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ];
function sI() {
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
                            return await sb.A.get({
                                url: ev.Rsh.GENERATED_POOL_BY_ID(e),
                                trackedActionData: { event: sp.NetworkActionNames.USER_LOGIN },
                                rejectWithError: !1,
                            })
                                .then((e) => {
                                    let { ok: a, body: n } = e;
                                    if (!a) return void sg.A.showFailedToast(s_.OB.GENERIC_ERROR);
                                    let { generated_pool: l, users: i } = n;
                                    C.h.dispatch({
                                        type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                                        pool: sf.fromServer(l).setPassword(t),
                                        users: i.map((e) => new sv.A(e)),
                                    });
                                })
                                .catch(() => (sg.A.showFailedToast(s_.OB.GENERIC_ERROR), null));
                        })(e, a),
                            t(""),
                            n(""));
                    } finally {
                        i(!1);
                    }
                },
                children: (0, r.jsxs)(tX.B, {
                    direction: "vertical",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, r.jsxs)(tX.B, {
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
                        (0, r.jsxs)(tX.B, {
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
function sT(e) {
    let { pool: t } = e,
        { id: a, summary: n } = t,
        l = sS.getUsersForPool(a),
        i = (0, d.bG)([nZ.default], () => nZ.default.getId()),
        s = sk[Number(a) % sk.length],
        c = sD[Number(a) % sD.length],
        u = o.useCallback(() => {
            C.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
        }, [a]);
    return (0, r.jsx)(tX.B, {
        direction: "horizontal",
        align: "start",
        justify: "space-between",
        children: (0, r.jsx)(sN.A, {
            icon: (0, r.jsx)(x.E, {
                variant: "body-md/medium",
                color: c,
                className: sA.td,
                children: (0, r.jsx)(s, { size: "custom", width: 24, height: 24, color: "currentColor" }),
            }),
            title: n,
            className: sA.JC,
            subtitle: `${l.length} users`,
            children: (0, r.jsxs)(tX.B, {
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
                                        et.D,
                                        {
                                            onClick: (a) => {
                                                (a.stopPropagation(),
                                                    (function (e, t) {
                                                        let a = sS.getUser(t);
                                                        if (null == a) throw Error("User not found");
                                                        let n = sS.getPool(e)?.password;
                                                        if (null == n) throw Error("Pool password not found");
                                                        if (null == a.email) throw Error("User email not found");
                                                        sx.A.login({
                                                            login: a.email,
                                                            password: n,
                                                            isMultiAccount: !0,
                                                            source: "generated_test_user",
                                                        }).catch(
                                                            () => (sg.A.showFailedToast(s_.OB.GENERIC_ERROR), null),
                                                        );
                                                    })(t.id, e.id));
                                            },
                                            "aria-disabled": i === e.id,
                                            className: ee()(sA.vk, { [sA.Pe]: i === e.id }),
                                            children: (0, r.jsxs)(
                                                tX.B,
                                                {
                                                    direction: "horizontal",
                                                    align: "center",
                                                    justify: "space-between",
                                                    gap: 8,
                                                    padding: { right: 8 },
                                                    fullWidth: !1,
                                                    children: [
                                                        (0, r.jsxs)(tX.B, {
                                                            direction: "horizontal",
                                                            align: "center",
                                                            gap: 8,
                                                            fullWidth: !1,
                                                            className: ee()({ [sA.WP]: i === e.id }),
                                                            children: [
                                                                (0, r.jsx)(i3.UserIcon, {
                                                                    size: "custom",
                                                                    width: 20,
                                                                    height: 20,
                                                                    color: "currentColor",
                                                                }),
                                                                (0, r.jsxs)("div", {
                                                                    children: [
                                                                        (0, r.jsx)(x.E, {
                                                                            variant: "body-sm/normal",
                                                                            color: "text-default",
                                                                            children: e.username,
                                                                        }),
                                                                        (0, r.jsx)(x.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: sA.c1,
                                                                            children: e.email,
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        i === e.id
                                                            ? (0, r.jsx)(x.E, {
                                                                  variant: "body-sm/normal",
                                                                  color: "text-feedback-positive",
                                                                  children: (0, r.jsx)(sm.y, {
                                                                      size: "sm",
                                                                      color: "currentColor",
                                                                  }),
                                                              })
                                                            : (0, r.jsx)(sh._, { size: "sm", color: "currentColor" }),
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
                        className: sA.UD,
                        children: (0, r.jsx)(p.$, {
                            icon: nH.TrashIcon,
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
function sR() {
    let e = (0, d.yK)([sS], () => sS.getPools() ?? []);
    return (0, r.jsxs)(tX.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: sA.kL,
        children: [
            (0, r.jsx)(sI, {}),
            (0, r.jsx)(g.Ip, { className: sA.Ik, children: e?.map((e) => (0, r.jsx)(sT, { pool: e }, e.id)) }),
        ],
    });
}
var sO = a(582306),
    sw = a(884883),
    sM = a(846466);
function sP(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function sL(e, t) {
    return null != t ? `/users/@me/gift-intents/dismissals/${e}/${t}` : `/users/@me/gift-intents/dismissals/${e}`;
}
let sU = tG.np.FRIEND_ANNIVERSARY;
function sG(e) {
    return 403 === e?.status
        ? "Forbidden (403). This account is likely not in the backend-persistence experiment; clearing also requires a staff account."
        : e instanceof Error
          ? e.message
          : String(e);
}
function sF() {
    let e = (0, d.bG)([sw.A], () => sw.A.getDevToolTotalFriendAnniversaries()),
        t = (0, d.bG)([sw.A], () => sw.A.getDevToolCurrentDate()),
        a = (0, d.bG)([sw.A], () => sw.A.getMessageGiftIntentLastShownMap()),
        n = (0, d.bG)([sw.A], () => sw.A.getHighestAffinityFriendAnniversaries()),
        l = (0, d.bG)([sw.A], () => sw.A.getHighAffinityFriendAnniversaries()),
        i = (0, d.bG)([eh.default], () => eh.default.getCurrentUser()?.isStaff() ?? !1),
        s = (0, d.bG)(
            [aJ.A],
            () => aJ.A.getFriendIDs().filter((e) => !aJ.A.isIgnored(e) && null != aJ.A.getSince(e)).length,
        ),
        c = (0, d.bG)([aG.A], () => {
            let e = Number(aG.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
            return Number.isNaN(e) || 0 === e ? null : e;
        }),
        [u, m] = o.useState([]),
        [h, v] = o.useState(null),
        [b, f] = o.useState(!1),
        [y, E] = o.useState(!1),
        [S, _] = o.useState(!1),
        [N, A] = o.useState(void 0),
        k = o.useCallback(async () => {
            E(!0);
            try {
                let { body: e } = await ie.Bo.get({ url: "/users/@me/gift-intent-dismissals", rejectWithError: !0 });
                (m(e.dismissals ?? []), v(null), f(!1));
            } catch (t) {
                let e = t.status;
                (v(sG(t)), f(403 === e), 403 === e && m([]));
            } finally {
                E(!1);
            }
        }, []);
    async function D(e) {
        _(!0);
        try {
            (await e(), v(null), await k());
        } catch (e) {
            v(sG(e));
        } finally {
            _(!1);
        }
    }
    o.useEffect(() => {
        k();
    }, [k, c]);
    let I = u.filter((e) => e.intent_type === sU),
        T = new Map(I.map((e) => [e.target_id, Number(e.dismissed_at_ms)])),
        R = Array.from(new Set([...Object.keys(a), ...T.keys()])),
        O = Array.from(new Set([...n, ...l])),
        w = O.map((e) => ({ id: e, value: e, label: eh.default.getUser(e)?.username ?? `Unknown User (${e})` })),
        M = y || S;
    function P(e) {
        C.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
    }
    function L(e) {
        let t = nR.A.getUserAffinity(e);
        return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
    }
    return (0, r.jsx)(g.Ip, {
        className: t2.nd,
        children: (0, r.jsxs)("div", {
            className: sM.l$,
            children: [
                (0, r.jsx)(x.E, { className: sM.Iv, variant: "body-lg/semibold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: sM.Pm,
                    children: (0, r.jsxs)(tX.B, {
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
                                    C.h.dispatch({ type: "DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES" });
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
                        className: sM.Pm,
                        children: (0, r.jsxs)(tX.B, {
                            gap: 8,
                            children: [
                                0 === s
                                    ? (0, r.jsx)(x.E, {
                                          variant: "body-xs/normal",
                                          color: "text-feedback-warning",
                                          children:
                                              "No friends with an anniversary date, so no anniversaries can be generated.",
                                      })
                                    : (0, r.jsxs)(x.E, {
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
                                (0, r.jsx)(x.E, {
                                    variant: "body-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(x.E, {
                                    variant: "body-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                n.length > 0 &&
                                    (0, r.jsxs)(tX.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(x.E, {
                                                variant: "body-xs/semibold",
                                                children: "Highest Affinity Friend Anniversaries:",
                                            }),
                                            n.map((e) => {
                                                let t = eh.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    x.E,
                                                    { variant: "body-xs/normal", children: [a, " (", L(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                l.length > 0 &&
                                    (0, r.jsxs)(tX.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(x.E, {
                                                variant: "body-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            l.map((e) => {
                                                let t = eh.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    x.E,
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
                    className: sM.Pm,
                    children: (0, r.jsxs)(tX.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(sO.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? nF()(t) : void 0,
                                onSelect: function (e) {
                                    let t = nF()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    C.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: function () {
                                    C.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: sM.Pm,
                    children: [
                        (0, r.jsx)(x.E, {
                            variant: "body-md/normal",
                            children: "Reset gift message cooldown (per-user, 14d)",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: function () {
                                C.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sM.Pm,
                    children: [
                        (0, r.jsx)(x.E, {
                            variant: "body-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: function () {
                                C.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: sM.Pm,
                    children: (0, r.jsxs)(tX.B, {
                        gap: 12,
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(x.E, { variant: "body-md/semibold", children: "Backend dismissal sync" }),
                            (0, r.jsxs)(tX.B, {
                                gap: 4,
                                children: [
                                    b &&
                                        (0, r.jsx)(x.E, {
                                            variant: "body-xs/normal",
                                            color: "text-feedback-warning",
                                            children:
                                                "This account is not in the backend-persistence experiment, so nothing here will persist to the server.",
                                        }),
                                    !i &&
                                        (0, r.jsx)(x.E, {
                                            variant: "body-xs/normal",
                                            color: "text-feedback-warning",
                                            children: "Clearing server dismissals requires a staff account.",
                                        }),
                                    (0, r.jsxs)(x.E, {
                                        variant: "body-xs/normal",
                                        children: [
                                            "Server last recorded a dismissal:",
                                            " ",
                                            null != c ? sP(c) : "never",
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(tX.B, {
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
                                            D(() => ie.Bo.del({ url: sL(sU), rejectWithError: !0 }));
                                        },
                                        disabled: M || !i || b || 0 === I.length,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(tX.B, {
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
                                                    ie.Bo.post({
                                                        url: "/users/@me/gift-intents/dismiss",
                                                        body: { intent_type: sU, target_id: N },
                                                        rejectWithError: !0,
                                                    }),
                                                );
                                        },
                                        disabled: M || b || null == N,
                                    }),
                                ],
                            }),
                            0 === w.length &&
                                (0, r.jsx)(x.E, {
                                    variant: "body-xs/normal",
                                    children: "Generate friend anniversaries above to pick a target to dismiss.",
                                }),
                            null != h &&
                                (0, r.jsx)(x.E, {
                                    variant: "body-xs/normal",
                                    color: "text-feedback-critical",
                                    children: h,
                                }),
                            y && (0, r.jsx)(x.E, { variant: "body-xs/normal", children: "Loading..." }),
                            !y &&
                                0 === R.length &&
                                (0, r.jsx)(x.E, {
                                    variant: "body-xs/normal",
                                    children: "No dismissals recorded locally or on the server.",
                                }),
                            !y &&
                                R.length > 0 &&
                                (0, r.jsxs)(tX.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(x.E, {
                                            variant: "body-xs/semibold",
                                            children: "Local vs. server (per friend):",
                                        }),
                                        R.map((e) => {
                                            let t = eh.default.getUser(e),
                                                n = t?.username ?? `Unknown User (${e})`,
                                                l = a[e],
                                                s = T.get(e);
                                            return (0, r.jsxs)(
                                                tX.B,
                                                {
                                                    gap: 8,
                                                    direction: "horizontal",
                                                    justify: "space-between",
                                                    align: "center",
                                                    children: [
                                                        (0, r.jsxs)(x.E, {
                                                            variant: "body-xs/normal",
                                                            children: [
                                                                n,
                                                                ": local ",
                                                                null != l ? sP(l) : "none",
                                                                ", server",
                                                                " ",
                                                                null != s ? sP(s) : "none",
                                                            ],
                                                        }),
                                                        null != s &&
                                                            (0, r.jsx)(p.$, {
                                                                size: "sm",
                                                                variant: "secondary",
                                                                text: "Clear",
                                                                onClick: () => {
                                                                    D(() =>
                                                                        ie.Bo.del({
                                                                            url: sL(sU, e),
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
var sB = a(116711),
    s$ = a(28863),
    sV = a(517461),
    sW = a(214947),
    sH = a(403581),
    sz = a(34188),
    sK = a(577473);
let sY = [
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
var sq = a(277583);
let sJ = [0, 0.5, 1],
    sQ = ["Center", "Inner ring", "Outer ring"],
    sX = sJ.length,
    sZ = "ILLO_BLUE",
    s0 = "ILLO_BLUE_40",
    s1 = Array.from({ length: sX }, () => s0),
    s2 = Array.from({ length: sX }, () => sZ),
    s3 = ["1", "0.5", "0"],
    s6 = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    s5 = [
        { label: "Light", value: ev.NJ8.LIGHT, id: ev.NJ8.LIGHT },
        { label: "Ash", value: ev.NJ8.ASH, id: ev.NJ8.ASH },
        { label: "Dark", value: ev.NJ8.DARK, id: ev.NJ8.DARK },
        { label: "Onyx", value: ev.NJ8.ONYX, id: ev.NJ8.ONYX },
    ],
    s8 = { [ev.NJ8.ASH]: ev.NJ8.DARK, [ev.NJ8.ONYX]: ev.NJ8.DARK, [ev.NJ8.LIGHT]: ev.NJ8.DARK },
    s4 = { [ev.NJ8.LIGHT]: "light", [ev.NJ8.ASH]: "ash", [ev.NJ8.DARK]: "dark", [ev.NJ8.ONYX]: "onyx" },
    s9 = sY.map((e) => ({ label: e, value: e, id: e })),
    s7 = Object.fromEntries(
        sY.map((e) => [
            e,
            Object.keys(eZ.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eZ.A.unsafe_rawColors[e].resolve().rgba(),
                        i =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eZ.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eZ.A.unsafe_rawColors.OPACITY_WHITE_28,
                        s = (0, r.jsx)("span", {
                            className: sq.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${i.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: s };
                }),
        ]),
    );
var re = a(306327);
function rt(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function ra(e, t) {
    let [a, n, l, i] = eZ.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: i };
}
function rn(e, t) {
    let a = eZ.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function rl(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(tX.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(tX.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(x.E, { variant: "body-md/semibold", children: a }),
                    (0, r.jsx)(eJ.K, {
                        icon: n$.CopyIcon,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: sq.RP, children: t }),
        ],
    });
}
function ri(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                sQ.map((e, a) => {
                    let n;
                    return (
                        (n = s5
                            .map((e) => {
                                let n,
                                    l,
                                    { value: i } = e,
                                    s = s4[i],
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
    return (0, r.jsxs)(tX.B, {
        gap: 16,
        children: [
            (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Token YAML" }),
            sQ.map((e, t) => (0, r.jsx)(rl, { yaml: a[t], label: e }, e)),
        ],
    });
}
function rs(e, t, a) {
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
    return new re.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + i * r) / 255,
    ]);
}
function rr(e, t, a) {
    var n;
    let l = a.map((e) => {
            let [t, a, n] = eZ.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        i = 1 / 0;
    for (let a of l) (n = e.contrast(rs(t, l, a.position), "WCAG21")) < i && (i = n);
    for (let a = 0; a < l.length - 1; a++) {
        let { contrast: n } = (function (e, t, a, n, l) {
            let i = 1 / 0,
                s = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(rs(e, t, o), "WCAG21");
                d < i && ((i = d), (s = o));
            }
            return { contrast: i, position: s };
        })(t, l, e, l[a].position, l[a + 1].position);
        n < i && (i = n);
    }
    return Math.round(100 * i) / 100;
}
function ro(e) {
    let [t, a, n] = eZ.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, i, s] = eZ.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eZ.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new re.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: i * (1 - c) + o * c, b: s * (1 - c) + d * c },
    };
}
function rd() {
    return {
        colors: Array.from({ length: sX }, () => void 0),
        scales: Array.from({ length: sX }, () => void 0),
        opacities: Array.from({ length: sX }, () => void 0),
    };
}
function rc() {
    return {
        [ev.NJ8.LIGHT]: rd(),
        [ev.NJ8.ASH]: { colors: [...s1], scales: [...s2], opacities: [...s3] },
        [ev.NJ8.DARK]: rd(),
        [ev.NJ8.ONYX]: rd(),
    };
}
var ru = a(731466),
    rm = a(363839);
function rh() {
    let e = (0, sB.G9)(),
        [t, a] = o.useState(ev.NJ8.DARK),
        [n, l] = (0, sV.V)("DevToolsGradientContrastPanel_themeStops", rc()),
        i = n ?? rc(),
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
                        (0, r.jsxs)(tX.B, {
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
                                              (0, r.jsx)(x.E, { variant: "body-sm/normal", children: e.name }),
                                              (0, r.jsx)(l6.Q, {
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
                    s5.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let i = 0; i < sX; i++) {
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
                                        d = s8[d];
                                    }
                                    (a.push(s ?? s1[i]), n.push(r ?? s2[i]), l.push(o ?? s3[i]));
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
        N = o.useMemo(() => ro({ theme: t, saturation: 1 }), [t]),
        A = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < sX; t++) {
                let a = parseFloat(S.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: S.colors[t], opacity: a, position: sJ[t] });
            }
            return e;
        }, [S]),
        k = o.useMemo(() => {
            if (null == A) return null;
            let { text: e, background: t } = N;
            return sQ.map((a, n) =>
                s7[S.scales[n]].map((a) => {
                    let l = rr(e, t, rt(A, n, { ...A[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [A, N, S.scales]),
        D = o.useMemo(() => {
            try {
                return s5.map((e) => {
                    let { value: t, label: a } = e,
                        n = C[t],
                        l = [];
                    for (let e = 0; e < sX; e++) {
                        let i = parseFloat(n.opacities[e]);
                        if (isNaN(i) || i < 0 || i > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: i, position: sJ[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = ro(t),
                                i = rr(n, l, e),
                                s = i >= 4.5;
                            if (!s)
                                for (let t = 0; t < e.length; t++) {
                                    let i = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return sY.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == i) continue;
                                    let s = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of s7[i]) {
                                        if (o === e[t].color) continue;
                                        let i = rr(n, l, rt(e, t, { ...e[t], color: o }));
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
    return (0, r.jsx)(g.Ar, {
        className: sq.XG,
        children: (0, r.jsxs)(tX.B, {
            gap: 24,
            padding: 8,
            className: sq.zr,
            children: [
                (0, r.jsx)(en.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(x.E, {
                            variant: "body-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Onyx unless overridden.",
                        }),
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(s$.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(aN.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: s5,
                }),
                (0, r.jsxs)(tX.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: sq.G9,
                            children: sQ.map((e, t) => {
                                let a = "" !== s[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(tX.B, {
                                                gap: 0,
                                                className: sq.hi,
                                                children: [
                                                    (0, r.jsx)(x.E, { variant: "body-md/medium", children: e }),
                                                    (0, r.jsx)(l6.Q, {
                                                        variant: "secondary",
                                                        textVariant: "body-xs/normal",
                                                        text: `(${rn(S.colors[t], parseFloat(S.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                rn(S.colors[t], parseFloat(S.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(aN.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: S.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = s7[e][0]?.value;
                                                    _((n) => ({
                                                        ...n,
                                                        scales: rt(n.scales, t, e),
                                                        colors: null != a ? rt(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: s9,
                                            }),
                                            (0, r.jsx)(aN.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: S.colors[t],
                                                onSelectionChange: (e) =>
                                                    _((a) => ({ ...a, colors: rt(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: k?.[t] ?? s7[S.scales[t]],
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: S.opacities[t],
                                                onChange: (e) => _((a) => ({ ...a, opacities: rt(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: `Hex${a && null != c[t] ? ` (dE: ${c[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: s[t],
                                                onChange: (e) => {
                                                    d((a) => rt(a, t, e));
                                                    let a = (function (e) {
                                                        if (!s6.test(e)) return null;
                                                        try {
                                                            return new re.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = s0,
                                                                a = sZ,
                                                                n = 1 / 0;
                                                            for (let l of sY)
                                                                for (let i of s7[l]) {
                                                                    let s = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eZ.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new re.A("srgb", [
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
                                                        (u((a) => rt(a, t, e.deltaE)),
                                                            _((a) => ({
                                                                ...a,
                                                                scales: rt(a.scales, t, e.scale),
                                                                colors: rt(a.colors, t, e.color),
                                                            })));
                                                    } else u((e) => rt(e, t, null));
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
                (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Preview" }),
                (0, r.jsx)(sB.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eX.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(tX.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: sq.$8,
                                        style: { background: eZ.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: [
                                            { id: "friends", icon: sW.$, text: "Friends" },
                                            { id: "nitro", icon: sH.t, text: "Nitro Home", nitroHoverGradient: !0 },
                                            { id: "shop", icon: sz.U, text: "Shop", useCustomGradient: !0 },
                                            {
                                                id: "quests",
                                                icon: sK.r,
                                                text: nk.intl.string(nk.t.JALI2K),
                                                useCustomGradient: !0,
                                            },
                                        ].map((e, t) =>
                                            (0, r.jsxs)(
                                                e_.z9,
                                                {
                                                    route: "",
                                                    selected: m === e.id,
                                                    onClick: () => h(e.id),
                                                    onMouseEnter: () => b(e.id),
                                                    onMouseLeave: () => b(null),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    className: "quests" === e.id ? ee()(rm.iE, rm.XO, rm.VU) : void 0,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: ra(S.colors[0], parseFloat(S.opacities[0])),
                                                        hoverGradientMiddle: ra(
                                                            S.colors[1],
                                                            parseFloat(S.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: ra(S.colors[2], parseFloat(S.opacities[2])),
                                                    }),
                                                    ...{ "data-list-item-id": `devtools-preview-${t}` },
                                                    children: [
                                                        "quests" === e.id &&
                                                            j.buttonBackground?.src != null &&
                                                            (0, r.jsx)("img", {
                                                                src: j.buttonBackground.src,
                                                                className: rm.Nd,
                                                                alt: "",
                                                            }),
                                                        "shop" === e.id &&
                                                            null != E &&
                                                            (0, r.jsx)("div", {
                                                                className: ru.marketingButtonBackgroundNew,
                                                                children: (0, r.jsx)("img", {
                                                                    src: E,
                                                                    className: ru.marketingButtonBackgroundImage,
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
                    (0, r.jsxs)(tX.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Results" }),
                            D.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          tX.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(x.E, { variant: "body-md/semibold", children: a }),
                                                  (0, r.jsx)(ea.w, {
                                                      type: n.passes ? "success" : "critical",
                                                      message: `${n.passes ? "\u2713 Passes" : "\u2717 Fails"} WCAG AA \u{2014} Min contrast: ${n.minContrastRatio} : 1`,
                                                      role: "status",
                                                  }),
                                                  !n.passes &&
                                                      null != n.suggestion &&
                                                      (0, r.jsxs)(tX.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(x.E, {
                                                                  variant: "body-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(x.E, {
                                                                  variant: "body-sm/normal",
                                                                  children: [
                                                                      sQ[n.suggestion.stopIndex],
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
                                                      (0, r.jsx)(x.E, {
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
                (0, r.jsx)(ri, { allResolvedStops: C }),
            ],
        }),
    });
}
var rp = a(559201),
    rx = a(230135),
    rg = a(45780),
    rv = a(533993),
    rb = a(859241);
let rj = [
        aL.M.GUILD_POWERUP_PERKS_COACHMARK,
        aL.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        aL.M.GUILD_POWERUP_NOTIFICATION,
        aL.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
        aL.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE,
    ],
    rf = [
        aL.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        aL.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        aL.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        aL.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        aL.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    ry = [aL.V.ADOPT_CLAN_IDENTITY_NOTICE];
function rE(e) {
    switch (e) {
        case aL.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case aL.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case aL.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case aL.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case aL.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case aL.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var rC = a(374336);
async function rS(e, t, a) {
    (await ie.Bo.patch({
        url: ev.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : nF()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, rp.VU)(e),
        (0, rv.Xd)(e, !0));
}
function r_() {
    let e = (0, d.bG)([nN.A], () => nN.A.getGuildId()),
        t = (0, d.bG)([n_.A], () => n_.A.getGuild(e)?.name),
        a = (0, d.yK)([aG.A], () => [...rf, ...ry].filter((t) => null != e && (0, rg.zs)(t, e))),
        n = (0, d.yK)([rb.A], () => (null != e ? (rb.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(g.Ip, {
            className: rC.kL,
            children: [
                (0, r.jsx)("div", {
                    className: rC.uW,
                    children: (0, r.jsx)(en.D, { variant: "heading-sm/medium", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: rC.uW,
                    children: [
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/medium",
                            className: rC.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, rv.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rC.uW,
                    children: [
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/medium",
                            className: rC.wx,
                            children: "Reset Progress Bar State",
                        }),
                        (0, r.jsx)(p.$, { variant: "primary", text: "Reset", onClick: rx.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rC.uW,
                    children: [
                        (0, r.jsx)(x.E, { variant: "body-sm/medium", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        rS(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        rS(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rC.uW,
                    children: [
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/medium",
                            className: rC.wx,
                            children: "Reset User Level DCs",
                        }),
                        (0, r.jsx)(tX.B, {
                            gap: 16,
                            children: rj.map((e) => (0, r.jsx)(lV, { className: rC.z6, content: aL.M[e] }, aL.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: rC.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: rf.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: rE(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rg._$)(t, e, !1)
                                            : ((0, aU._N)(aL.M.GUILD_POWERUP_NOTIFICATION), (0, rg.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: rC.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: ry.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: rE(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rg._$)(t, e, !1)
                                            : ((0, aU._N)(aL.M.GUILD_POWERUP_NOTIFICATION), (0, rg.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: rC.uW,
                    children: [
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/medium",
                            className: rC.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                !(async function (e) {
                                    await ie.Bo.post({
                                        url: ev.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e),
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
                        (0, iQ.Wp)(!1);
                    },
                }),
            ],
        });
}
var rN = a(450510),
    rA = a(648048);
function rk(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, d.yK)([rN.HP], () => [rN.HP.hasHotspot(t, !0), rN.HP.getHotspotOverride(t)]);
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
        onSelectionChange: (e) => (null != e ? (0, rN.Kl)(t, e) : (0, rN.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function rD() {
    return (0, r.jsx)(g.Ip, {
        className: t2.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: rA.IN,
            children: (0, r.jsx)(tX.B, {
                gap: 20,
                children: Object.keys(rN._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(rk, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var rI = a(95498),
    rT = a(855522),
    rR = a(37646),
    rO = a(773669);
function rw() {
    let e = (0, d.bG)([rO.default], () => rO.default.locale),
        [t, a] = o.useState(),
        n = (0, rI.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => nk.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(nd.Ay, {
                children: [
                    (0, r.jsx)(nd.Ay.Icon, { icon: rR.U, tooltip: "Locale" }),
                    (0, r.jsx)(nd.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(n9, {
                children: [
                    (0, r.jsx)(n7, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(n7, { name: "App", children: e }),
                    (0, r.jsx)(n7, { name: "System", children: nk.systemLocale }),
                    (0, r.jsx)(n7, { name: "@discord/intl", children: nk.intl.currentLocale }),
                    (0, r.jsx)(n7, { name: "common i18n", children: rT.A.getLocale() }),
                    (0, r.jsx)(n7, { name: "Moment", children: nF().locale() }),
                ],
            }),
            (0, r.jsxs)(nd.Ay, {
                children: [
                    (0, r.jsx)(nd.Ay.Icon, { icon: rR.U, tooltip: "Messages" }),
                    (0, r.jsx)(nd.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(n9, {
                children: (0, r.jsx)(n7, { name: "Unique Rendered Main Messages", children: Object.keys(nk.t).length }),
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
            (0, r.jsxs)(n9, {
                children: [
                    (0, r.jsx)(n7, { name: "Hashed key", children: n }),
                    (0, r.jsx)(n7, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(nc.A, { data: l?.(e) }),
        ],
    });
}
var rM = a(172471);
function rP() {
    let { node: e } = (0, eu.Ay)(rM.F, "");
    return (0, r.jsx)(g.Ip, {
        className: t2.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(ec.A, { node: e }, e.key),
        }),
    });
}
var rL = a(361158),
    rU = a(80556),
    rG = a(129939),
    rF = a(15e3),
    rB = a(87404);
function r$() {
    return (0, r.jsx)(g.Ip, {
        className: t2.nd,
        children: (0, r.jsxs)("div", {
            className: iF.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: iF.uW,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: iF.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: function () {
                                    (0, rL.B8)(() => (0, r.jsx)(rF.A, {}), { layerKey: rB._s, Layer: rU.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: iF.uW,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: iF.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: function () {
                                    (0, rL.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rG.A, { onClose: t });
                                        },
                                        { layerKey: rB._s, Layer: rU.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: iF.uW,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: iF.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: function () {
                                    rL.xr.setState({ fullScreenLayers: [] });
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
var rV = a(687813),
    rW = a(604121);
let rH = {
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
function rz(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rV.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rV.strFromU8(n[t])) }), {}),
                            i = l["manifest.json"];
                        t(l[`animations/${i.animations[0].id}.json`]);
                    });
                }),
        );
}
function rK() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, i] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(tX.B, {
            gap: 24,
            children: [
                (0, r.jsx)(aN.Z, {
                    options: Object.keys(rH).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(tX.B, {
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
                        let t = rH[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rz).then(e5().cloneDeep)
                                            : await t().then((e) => e5().cloneDeep(e.default)),
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
                            rW.a,
                            {
                                importData: () => {
                                    let t = rH[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rz).then(e5().cloneDeep)
                                        : t().then((e) => e5().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rY = a(327891);
let rq = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e(344751).then(a.bind(a, 575538));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await Promise.all([a.e(202622), a.e(588251), a.e(590559)]).then(a.bind(a, 913525)),
                t = new rY.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: y.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e(309004), a.e(419690), a.e(845322), a.e(110758)]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(n_.A.getGuilds())[0];
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
                    a.e(733199),
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
                t = Object.values(n_.A.getGuilds())[0];
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
            return (t) => (0, r.jsx)(e, { ...t, onClose: y.Z_ });
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
                        (console.log("Leave role clicked"), (0, y.Z_)());
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e(886456), a.e(789346)]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = eh.default.getCurrentUser(),
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
                t = Object.values(n_.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              (console.log("Add form field:", e), (0, y.Z_)());
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
                t = n_.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(aq.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = aq.A.getAllThreadsForParent(t.id);
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
                t = Object.values(n_.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: y.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e(118203),
                    a.e(71719),
                    a.e(462500),
                    a.e(966016),
                    a.e(945651),
                ]).then(a.bind(a, 311567)),
                t = Object.values(n_.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: y.Z_ });
        },
    },
    rJ = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e(583518), a.e(255197), a.e(250974)]).then(a.bind(a, 324269)),
                { default: t } = await a.e(255197).then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rQ() {
    let e = o.useMemo(
            () =>
                Object.keys(rq)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rJ)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        s = o.useCallback(
            (e) => {
                null != a && (0, y.L3)(e, rq[a]);
            },
            [a],
        ),
        d = null != l ? rJ[l] : null;
    return (0, r.jsx)(g.Ip, {
        className: t2.nd,
        children: (0, r.jsxs)(tX.B, {
            className: iF.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(x.E, { variant: "body-sm/medium", children: "Context Menus" }),
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)(tX.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(aN.Z, {
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
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(x.E, { variant: "body-sm/medium", children: "Popout Menus" }),
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)(tX.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(aN.Z, {
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
                        fallback: (0, r.jsx)(x.E, {
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
var rX = a(253506),
    rZ = a(665260),
    r0 = a(97808),
    r1 = a(778712),
    r2 = a(308528),
    r3 = a(138399),
    r6 = a(571694),
    r5 = a(963852),
    r8 = a(704844),
    r4 = a(309010),
    r9 = a(645959),
    r7 = a(716371),
    oe = a(32946);
let ot = [
    { id: "USER_JOIN", value: ev.lAJ.USER_JOIN, label: "User Join" },
    { id: "CHANNEL_PINNED_MESSAGE", value: ev.lAJ.CHANNEL_PINNED_MESSAGE, label: "Channel Pinned Message" },
    { id: "GUILD_BOOST", value: ev.lAJ.GUILD_BOOST, label: "Guild Boost" },
    { id: "GUILD_BOOST_TIER_1", value: ev.lAJ.GUILD_BOOST_TIER_1, label: "Guild Boost Tier 1" },
    { id: "GUILD_BOOST_TIER_2", value: ev.lAJ.GUILD_BOOST_TIER_2, label: "Guild Boost Tier 2" },
    { id: "GUILD_BOOST_TIER_3", value: ev.lAJ.GUILD_BOOST_TIER_3, label: "Guild Boost Tier 3" },
    { id: "THREAD_CREATED", value: ev.lAJ.THREAD_CREATED, label: "Thread Created" },
    { id: "CHANNEL_FOLLOW_ADD", value: ev.lAJ.CHANNEL_FOLLOW_ADD, label: "Channel Follow Add" },
    { id: "STAGE_START", value: ev.lAJ.STAGE_START, label: "Stage Start" },
    { id: "STAGE_END", value: ev.lAJ.STAGE_END, label: "Stage End" },
    { id: "STAGE_SPEAKER", value: ev.lAJ.STAGE_SPEAKER, label: "Stage Speaker" },
    { id: "STAGE_RAISE_HAND", value: ev.lAJ.STAGE_RAISE_HAND, label: "Stage Raise Hand" },
    { id: "STAGE_TOPIC", value: ev.lAJ.STAGE_TOPIC, label: "Stage Topic" },
    { id: "VOICE_SESSION", value: ev.lAJ.VOICE_SESSION, label: "Voice Session" },
    { id: "FRIEND_REQUEST_ACCEPTED", value: ev.lAJ.FRIEND_REQUEST_ACCEPTED, label: "Friend Request Accepted" },
    { id: "GUILD_DISCOVERY_DISQUALIFIED", value: ev.lAJ.GUILD_DISCOVERY_DISQUALIFIED, label: "Discovery Disqualified" },
    { id: "GUILD_DISCOVERY_REQUALIFIED", value: ev.lAJ.GUILD_DISCOVERY_REQUALIFIED, label: "Discovery Requalified" },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",
        value: ev.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
        label: "Discovery Grace Initial Warning",
    },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",
        value: ev.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
        label: "Discovery Grace Final Warning",
    },
    { id: "RECIPIENT_ADD", value: ev.lAJ.RECIPIENT_ADD, label: "Recipient Add" },
    { id: "RECIPIENT_REMOVE", value: ev.lAJ.RECIPIENT_REMOVE, label: "Recipient Remove" },
    { id: "CALL", value: ev.lAJ.CALL, label: "Call" },
];
function oa() {
    let [e, t] = o.useState(ev.lAJ.USER_JOIN),
        a = (0, d.bG)([r4.Ay], () => r4.Ay.getChannelId(), []),
        n = o.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, r5.Ay)({ channelId: a, content: "", type: e, state: ev.cmJ.SENT });
            r3.A.receiveMessage(a, t, !1);
        }, [a, e]),
        l = o.useCallback(() => {
            if (null != a)
                for (let { value: e } of ot) {
                    let t = (0, r5.Ay)({ channelId: a, content: "", type: e, state: ev.cmJ.SENT });
                    r3.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, r.jsxs)("div", {
        className: oe.gs,
        children: [
            (0, r.jsx)(aN.Z, {
                label: "Inject System Message",
                selectionMode: "single",
                options: ot,
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
function on() {
    let e = (0, d.yK)([r9.A], () => r9.A.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, d.cf)([aq.A, eh.default, aJ.A], () => ({
            selectedChannel: aq.A.getChannel(t),
            options: e.map((e) => {
                let t = aq.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, aY.m1)(t, eh.default, aJ.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(r0.eu, { src: (0, r6.Y)(t), "aria-hidden": !0, size: r1._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        i = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rZ.PQ)(n.recipientFlags ?? 0, rX.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            r8.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        s = !!n?.isPrivate() && (0, rZ.Lt)(n.recipientFlags ?? 0, rX.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: oe.gs,
        children: [
            (0, r.jsx)(aN.Z, {
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
function ol() {
    let e = o.useCallback(() => {
        r2.A.openPrivateChannel({ recipientIds: [r7.K] });
    }, []);
    return (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function oi() {
    let e = (0, d.bG)([S.Ay], () => S.Ay.allByCategory(S.xW.MESSAGING), [], d.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => _(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: ee()(t2.nd, oe.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: oe.yF }),
            (0, r.jsx)(oa, {}),
            (0, r.jsx)("div", { className: oe.yF }),
            (0, r.jsx)(on, {}),
            (0, r.jsx)("div", { className: oe.yF }),
            (0, r.jsx)(ol, {}),
        ],
    });
}
var os = a(205693),
    or = a(772707),
    oo = a(150934),
    od = a(171576),
    oc = a(598653),
    ou = a(166403),
    om = a(188567),
    oh = a(204925),
    op = a(55010);
let ox = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e(429232).then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nk.intl.string(nk.t.ZLRYGU),
                confirmButtonText: nk.intl.string(nk.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e(919840).then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nk.intl.string(nk.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: nk.intl.string(nk.t["13ofGu"]),
                impression: { impressionName: sp.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e(469663), a.e(518467)]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: od.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    AgeAssuranceGatePrompt: async () => {
        let { default: e } = await a.e(922337).then(a.bind(a, 361016));
        return (t) => (0, r.jsx)(e, { ...t, source: oh.w_.NSFW_SERVER });
    },
    DateOfBirthGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e(533651), a.e(682758), a.e(280022), a.e(991007)]).then(
            a.bind(a, 189282),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: oh.w_.NSFW_SERVER });
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
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: os.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(or.k, {
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
                ((t.default.getDevicesForPlatform = (e) => (e === ev.fg2.PLAYSTATION ? i : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== ev.fg2.PLAYSTATION && s.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === ev.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                    (0, r.jsx)(e, { ...a, channel: l, platform: ev.fg2.PLAYSTATION })
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
                [x, g] = d.useState(!1),
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
                    (g(!0),
                        console.log("GuildDisableCommunicationModal: Timing out user", {
                            user: c,
                            duration: o(u),
                            reason: null != h ? h : "No reason provided",
                            resolveFlag: v,
                        }),
                        await new Promise((e) => setTimeout(e, 1e3)),
                        g(!1),
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
                            (0, r.jsx)(e, { variant: "primary", text: "Timeout User", onClick: f, disabled: x }),
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
                x = i.useCallback(async () => {
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
                                onClick: x,
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
                                (0, r.jsx)(oo.S, {
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
                                (0, r.jsx)(oo.S, {
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
                channel_type: ev.rbe.GUILD_VOICE,
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
            t = { ownerId: "987654321", guildId: "123456789", channelId: "123456789", streamType: op.U4.GUILD },
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
        let e = eh.default.getUser("12345"),
            t = eh.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e(916131), a.e(155738), a.e(331385)]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = eh.default.getUser("12345"),
            t = eh.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e(916131), a.e(155738), a.e(384811)]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = eh.default.getUser("12345"),
            t = eh.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e(916131), a.e(155738), a.e(817219)]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = eh.default.getUser("12345"),
            t = eh.default.getUser("67890");
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
            t = ou.A.getPremiumGroupSubscription();
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
            t = Object.keys(n_.A.getGuilds())[0];
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
            t = Object.values(n_.A.getGuilds())[0];
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
                Object.keys(ox)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(g.Ip, {
        className: t2.nd,
        children: (0, r.jsxs)("div", {
            className: iF.l$,
            children: [
                (0, r.jsx)("section", {
                    className: iF.uW,
                    children: (0, r.jsxs)(tX.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(aN.Z, {
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
                                onClick: () => null != t && (0, P.mM)(ox[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: iF.uW,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: iF.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: function () {
                                    ((0, oc.o)(!0), om._.dispatch(ev.jej.PREMIUM_SUBSCRIPTION_CREATED));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ov = a(933832),
    ob = a(472229),
    oj = a(739053),
    of = a(669316),
    oy = a(959165),
    oE = a(19191),
    oC = a(722178);
async function oS(e, t) {
    try {
        await ie.Bo.post({ url: ev.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oj._D)();
    }
}
async function o_(e, t) {
    try {
        await ie.Bo.del({ url: ev.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oj._D)();
    }
}
function oN(e) {
    let { acked: t, expired: a, inStore: n, onClick: l, secondaryBadge: i } = e,
        s = "Created";
    return (
        a ? (s = "Expired") : t ? (s = "Acked") : n && (s = "Active"),
        (0, r.jsxs)("div", {
            className: iF.fC,
            children: [
                (0, r.jsx)(et.D, {
                    onClick: l,
                    className: ee()(iF.qS, iF.vk, { [iF.vu]: n, [iF.R1]: t, [iF._7]: a }),
                    children: (0, r.jsxs)(x.E, {
                        variant: "body-sm/medium",
                        color: t ? void 0 : "text-overlay-light",
                        children: [s, n ? " *" : ""],
                    }),
                }),
                null != i &&
                    i.active &&
                    (0, r.jsx)("div", {
                        className: ee()(iF.qS, iF.k3),
                        children: (0, r.jsx)(x.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: i.label,
                        }),
                    }),
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
    let { id: g, expiresAt: v, trialId: b, subscriptionTrial: j, referrer: f } = t,
        y =
            a.find((e) => {
                let { value: t } = e;
                return t === b;
            })?.label ?? "Unknown";
    null != f && (y = `${y} from @${f.username}`);
    let E = null != v,
        C = t.hasExpired,
        S = t.isRedeemed,
        _ = j?.skuId === tG.pe.TIER_0;
    async function N(e) {
        m(!0);
        try {
            await ie.Bo.patch({
                url: ev.Rsh.UPDATE_USER_OFFER(g, "trial"),
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
            className: ee()(iF.Nr, _ ? iF.Qf : iF.C1),
            children: [
                (0, r.jsx)("div", {
                    className: ee()(iF.nM, iF.S7),
                    children: (0, r.jsx)(en.D, {
                        variant: "heading-lg/semibold",
                        color: "text-overlay-light",
                        children: y,
                    }),
                }),
                (0, r.jsxs)(et.D, {
                    className: ee()(iF.nM, iF.QB),
                    onClick: () => {
                        (0, nJ.C)(g, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Offer: ", g],
                        }),
                        i
                            ? (0, r.jsx)(ov.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: iF.Kk })
                            : (0, r.jsx)(n$.CopyIcon, { size: "xs", color: "currentColor", className: iF.Kk }),
                    ],
                }),
                (0, r.jsxs)(et.D, {
                    className: ee()(iF.nM, iF.QB),
                    onClick: () => {
                        (0, nJ.C)(b, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Trial: ", b],
                        }),
                        d
                            ? (0, r.jsx)(ov.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: iF.Kk })
                            : (0, r.jsx)(n$.CopyIcon, { size: "xs", color: "currentColor", className: iF.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: iF.nM,
                    children: (0, r.jsxs)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-overlay-light",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, oC.re)({
                                intervalType: j?.interval ?? tG.WT.MONTH,
                                intervalCount: j?.intervalCount ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: iF.nM,
                    children: [
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, ob.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nQ.Xm)(v?.toISOString()),
                            onChange: (e) => {
                                N({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iF.nM,
                    children: [
                        (0, r.jsx)(x.E, {
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
                (0, r.jsx)(oN, {
                    acked: E,
                    expired: C,
                    inStore: l,
                    onClick: async function () {
                        (m(!0), E ? await N({ expiresAt: null }) : await (0, oj.u1)(t), n(), m(!1));
                    },
                    secondaryBadge: { active: S, label: "Redeemed" },
                }),
                (0, r.jsx)(et.D, {
                    onClick: async () => {
                        (m(!0), await o_(g, "trial"), n(), m(!1));
                    },
                    children: (0, r.jsx)(nH.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: ee()(iF.Kk, iF.IT),
                    }),
                }),
                (0, r.jsx)("div", { className: ee()(iF.g4, { [iF.VP]: u || h }), children: (0, r.jsx)(th.y, {}) }),
            ],
        })
    );
}
function ok(e) {
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
    let { id: g, expiresAt: v, discountId: b, discount: j } = t,
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
            await ie.Bo.patch({
                url: ev.Rsh.UPDATE_USER_OFFER(g, "discount"),
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
            className: ee()(iF.Nr, iF.id),
            children: [
                (0, r.jsx)("div", {
                    className: ee()(iF.nM, iF.S7),
                    children: (0, r.jsx)(en.D, { variant: "heading-lg/semibold", color: "text-default", children: f }),
                }),
                (0, r.jsxs)(et.D, {
                    className: ee()(iF.nM, iF.QB),
                    onClick: () => {
                        (0, nJ.C)(g, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: ["Offer: ", g],
                        }),
                        i
                            ? (0, r.jsx)(ov.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ee()(iF.Kk, iF.mK),
                              })
                            : (0, r.jsx)(n$.CopyIcon, { size: "xs", color: "currentColor", className: iF.Kk }),
                    ],
                }),
                (0, r.jsxs)(et.D, {
                    className: ee()(iF.nM, iF.QB),
                    onClick: () => {
                        (0, nJ.C)(b, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: ["Discount: ", b],
                        }),
                        d
                            ? (0, r.jsx)(ov.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ee()(iF.Kk, iF.mK),
                              })
                            : (0, r.jsx)(n$.CopyIcon, { size: "xs", color: "currentColor", className: iF.Kk }),
                    ],
                }),
                j?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(x.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: [j.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: iF.nM,
                    children: [
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, ob.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nQ.Xm)(v?.toISOString()),
                            onChange: (e) =>
                                S({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsx)(oN, {
                    acked: y,
                    expired: E,
                    inStore: l,
                    onClick: async function () {
                        (m(!0), y ? await S({ expiresAt: null }) : await (0, oj.u1)(void 0, t), n(), m(!1));
                    },
                    secondaryBadge: { active: C, label: "Applied" },
                }),
                (0, r.jsx)(et.D, {
                    className: iF.aR,
                    onClick: async () => {
                        (m(!0), await o_(g, "discount"), n(), m(!1));
                    },
                    children: (0, r.jsx)(nH.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: ee()(iF.Kk, iF.fy),
                    }),
                }),
                (0, r.jsx)("div", { className: ee()(iF.g4, { [iF.VP]: u || h }), children: (0, r.jsx)(th.y, {}) }),
            ],
        })
    );
}
function oD() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, i] = o.useState(),
        [s, c] = o.useState(),
        [u, m] = o.useState(!0),
        { discountOffers: h, trialOffers: v } = (0, d.cf)([oE.A], () => ({
            discountOffers: Object.values(oE.A.getState().userDiscountOffers).sort((e, t) => e.id.localeCompare(t.id)),
            trialOffers: Object.values(oE.A.getState().userTrialOffers).sort((e, t) => e.id.localeCompare(t.id)),
        })),
        [b, f] = o.useState([]),
        [y, E] = o.useState([]),
        [C, S] = o.useState(10080),
        [_, N] = o.useState([]),
        A = o.useMemo(() => new Set([...v, ...h].map((e) => e.id)), [v, h]),
        k = o.useMemo(() => [...v, ...b.filter((e) => !A.has(e.id))], [v, b, A]),
        D = o.useMemo(() => [...h, ...y.filter((e) => !A.has(e.id))], [h, y, A]),
        { entitlements: I, deleteFractionalPremium: T, refreshEntitlementList: R } = iU();
    return (
        o.useEffect(() => {
            R();
        }, [R]),
        o.useEffect(() => {
            N(I.filter((e) => e.sourceType === iR.G.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [I]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || u) &&
                (async function () {
                    try {
                        let { body: e } = await ie.Bo.get({ url: ev.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
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
                oE.A.forceReset(),
                (0, oj._D)(),
                (async function () {
                    try {
                        let { body: e } = await ie.Bo.get({ url: ev.Rsh.USER_OFFERS, rejectWithError: !0 });
                        return {
                            trial: e.trial.map(oy.A.createFromServer),
                            discount: e.discount.map(of.A.createFromServer),
                        };
                    } catch (e) {
                        return { trial: [], discount: [] };
                    }
                })().then((e) => {
                    (f(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        E(e.discount.sort((e, t) => e.id.localeCompare(t.id))));
                }));
        }, [u]),
        (0, r.jsx)(g.Ip, {
            className: t2.nd,
            children: (0, r.jsxs)("div", {
                className: iF.l$,
                children: [
                    (0, r.jsxs)("section", {
                        className: iF.uW,
                        children: [
                            (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Utils" }),
                            (0, r.jsxs)("div", {
                                className: iF.Uo,
                                children: [
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear all User Offers",
                                        onClick: async function () {
                                            (await (async function () {
                                                try {
                                                    await ie.Bo.del({ url: ev.Rsh.USER_OFFERS, rejectWithError: !0 });
                                                } catch {
                                                } finally {
                                                    (await oE.A.forceReset(), await (0, oj._D)());
                                                }
                                            })(),
                                                m(!0));
                                        },
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Mobile Trials DismissibleContent",
                                        onClick: () => (0, aU.xB)(aL.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Offer Nagbar DismissibleContent",
                                        onClick: () => (0, aU._N)(aL.M.NAGBAR_NOTICE_OFFER_EXPIRING),
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
                        className: iF.uW,
                        children: (0, r.jsxs)("div", {
                            className: iF.bd,
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
                                        null != l && (await oS(l, "trial"), m(!0));
                                    },
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("section", {
                        className: iF.uW,
                        children: (0, r.jsxs)("div", {
                            className: iF.bd,
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
                                        null != s && (await oS(s, "discount"), m(!0));
                                    },
                                }),
                            ],
                        }),
                    }),
                    k.length > 0 &&
                        (0, r.jsxs)("section", {
                            className: iF.uW,
                            children: [
                                (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Existing Trial Offers" }),
                                (0, r.jsx)(x.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                k.map((t) =>
                                    (0, r.jsx)(
                                        oA,
                                        { offer: t, offerOptions: e, forceRefetch: () => m(!0), inStore: A.has(t.id) },
                                        t.id,
                                    ),
                                ),
                            ],
                        }),
                    D.length > 0 &&
                        (0, r.jsxs)("section", {
                            className: iF.uW,
                            children: [
                                (0, r.jsx)(en.D, {
                                    variant: "heading-sm/semibold",
                                    children: "Existing Discount Offers",
                                }),
                                (0, r.jsx)(x.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                D.map((e) =>
                                    (0, r.jsx)(
                                        ok,
                                        { offer: e, offerOptions: a, forceRefetch: () => m(!0), inStore: A.has(e.id) },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    (0, r.jsx)("section", {
                        className: iF.uW,
                        children: (0, r.jsxs)("div", {
                            className: iF.bd,
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
                                            await ie.Bo.post({
                                                url: ev.Rsh.CREATE_REVERSE_TRIAL,
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
                                (0, r.jsx)(x.E, {
                                    style: { marginTop: "15px" },
                                    variant: "body-md/semibold",
                                    children: "Active reverse trial",
                                }),
                                (0, r.jsx)("div", {
                                    children: _.map((e) =>
                                        (0, r.jsx)(i$, { entitlement: e, active: !0, onDelete: () => T(e.id) }, e.id),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        })
    );
}
var oI = a(431527),
    oT = a(26279),
    oR = a(628577);
let oO = {
        [oT.Re.UNSPECIFIED]: "Unspecified",
        [oT.Re.DRAFT]: "Draft",
        [oT.Re.SIGNED]: "Signed",
        [oT.Re.DISCARDED]: "Discarded",
        [oT.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
        [oT.Re.SIGNING_FAILED]: "Signing Failed",
    },
    ow = { [oT.BM.UNSPECIFIED]: "Unspecified", [oT.BM.ONE_TIME]: "One Time", [oT.BM.SUBSCRIPTION]: "Subscription" };
function oM() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(!0),
        [l, i] = o.useState(null),
        s = o.useCallback(async () => {
            (n(!0), i(null));
            try {
                let e = await ie.Bo.get({ url: `${ev.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
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
            let e = r4.Ay.getChannelId();
            return null != e ? e : "";
        }),
        b = o.useCallback(async () => {
            (c(!0), m(null));
            try {
                let e = h.trim(),
                    t = await ie.Bo.post({
                        url: ev.Rsh.DEBUG_TEMPORAL_INFRA_PROOF_OF_CONCEPT,
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
    return (0, r.jsx)(g.Ip, {
        className: t2.nd,
        children: (0, r.jsxs)("div", {
            className: iF.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: iF.dL,
                    style: { marginBottom: "16px" },
                    children: [
                        (0, r.jsxs)(x.E, { variant: "body-lg/semibold", children: ["Orders (last ", 5, ")"] }),
                        (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Refresh", onClick: s, loading: a }),
                    ],
                }),
                null != l && (0, r.jsx)(ea.w, { type: "critical", message: l, role: "alert" }),
                !a &&
                    null != e &&
                    0 === e.length &&
                    (0, r.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: "No orders found." }),
                null != e && e.map((e) => (0, r.jsx)(oP, { order: e }, e.id)),
                (0, r.jsxs)(tX.B, {
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
                        null != u && (0, r.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: u }),
                    ],
                }),
            ],
        }),
    });
}
function oP(e) {
    let { order: t } = e,
        [a, n] = o.useState(!1),
        [l, i] = o.useState(!1),
        s = oO[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${s}`, isDisabled: !1 },
            { id: "revision", label: `Revision: ${t.revision}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            (navigator.clipboard.writeText(t.id), i(!0), setTimeout(() => i(!1), 2e3));
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: iF.Nr,
        children: [
            (0, r.jsxs)(tX.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(x.E, { variant: "body-md/semibold", children: t.id }),
                    (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(oI.C, { items: d, label: "Order information", layout: "inline" }),
            (0, r.jsxs)(tX.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  tX.B,
                                  {
                                      direction: "horizontal",
                                      gap: 12,
                                      children: [
                                          (0, r.jsxs)(x.E, {
                                              variant: "body-xs/normal",
                                              children: ["SKU: ", e.sku_id],
                                          }),
                                          (0, r.jsxs)(x.E, {
                                              variant: "body-xs/normal",
                                              children: ["Qty: ", e.quantity],
                                          }),
                                          (0, r.jsxs)(x.E, {
                                              variant: "body-xs/normal",
                                              children: [
                                                  "Type: ",
                                                  ow[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
                                              ],
                                          }),
                                          null != e.subscription_plan_id &&
                                              (0, r.jsxs)(x.E, {
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
                    className: oR.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(et.D, {
                            onClick: () => n((e) => !e),
                            className: oR.Eh,
                            children: [
                                (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(iP.A, { direction: a ? iP.A.Directions.UP : iP.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: oR.j3,
                                children: [
                                    (0, r.jsxs)("li", {
                                        children: [
                                            (0, r.jsx)(x.E, {
                                                variant: "body-xs/semibold",
                                                children: "payment_gateway",
                                            }),
                                            (0, r.jsx)(x.E, {
                                                variant: "body-xs/normal",
                                                children: String(t.billing_facet.payment_gateway),
                                            }),
                                        ],
                                    }),
                                    null != t.billing_facet.payment_source_id &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(x.E, {
                                                    variant: "body-xs/semibold",
                                                    children: "payment_source_id",
                                                }),
                                                (0, r.jsx)(x.E, {
                                                    variant: "body-xs/normal",
                                                    children: t.billing_facet.payment_source_id,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.currency &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(x.E, {
                                                    variant: "body-xs/semibold",
                                                    children: "selected currency",
                                                }),
                                                (0, r.jsx)(x.E, {
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
                                                        (0, r.jsx)(x.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "currency",
                                                        }),
                                                        (0, r.jsx)(x.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.currency,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(x.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "subtotal",
                                                        }),
                                                        (0, r.jsx)(x.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.subtotal,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(x.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "tax",
                                                        }),
                                                        (0, r.jsx)(x.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.tax,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(x.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "total",
                                                        }),
                                                        (0, r.jsx)(x.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.total,
                                                        }),
                                                    ],
                                                }),
                                                t.billing_facet.invoice_preview.line_items.length > 0 &&
                                                    (0, r.jsxs)("li", {
                                                        children: [
                                                            (0, r.jsx)(x.E, {
                                                                variant: "body-xs/semibold",
                                                                children: "invoice line items",
                                                            }),
                                                            (0, r.jsx)(tX.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                tX.B,
                                                                                {
                                                                                    direction: "horizontal",
                                                                                    gap: 12,
                                                                                    children: [
                                                                                        (0, r.jsxs)(x.E, {
                                                                                            variant: "body-xs/normal",
                                                                                            children: [
                                                                                                "ref: ",
                                                                                                e.ref_order_line_item_id,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(x.E, {
                                                                                            variant: "body-xs/normal",
                                                                                            children: [
                                                                                                "unit: ",
                                                                                                e.unit_price,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(x.E, {
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
var oL = a(935462),
    oU = a(103557),
    oG = a(93688),
    oF = a(717400),
    oB = a(676955),
    o$ = a(31300),
    oV = a(500060),
    oW = a(391973),
    oH = a(684013),
    oz = a(765671),
    oK = a(235986),
    oY = a(742589),
    oq = a(41984),
    oJ = a(181435),
    oQ = a(435736),
    oX = a(661886),
    oZ = a(861862),
    o0 = a(515183),
    o1 = a(127242),
    o2 = a(869014),
    o3 = a(528772),
    o6 = a(83880),
    o5 = a(532624),
    o8 = a(228342),
    o4 = a(927813),
    o9 = a(996439),
    o7 = a(350535),
    de = a(9302),
    dt = a(644434),
    da = a(998798);
let dn = {
        [ev.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: ev.uss.CLICK_ZONE_DEBUG,
            id: (0, eG.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...o6.A.getWidgetDefaultSettings(ev.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [ev.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: ev.uss.PERFORMANCE_DEBUG,
            id: (0, eG.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...o6.A.getWidgetDefaultSettings(ev.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    dl = {};
function di(e) {
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
        (0, r.jsxs)(nB.$n, {
            look: nB.$n.Looks.LINK,
            color: nB.$n.Colors.LINK,
            size: nB.$n.Sizes.MIN,
            onClick: function () {
                (0, nJ.C)(t, () => n(!0));
            },
            className: da.DT,
            children: ["Game Id: ", t, " ", a ? nk.intl.string(nk.t.t5VZ88) : null],
        })
    );
}
let ds = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.bG)([N.Ay], () => N.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, d.bG)([D.A], () => D.A.getGameForPID(t.pid)),
            { data: l } = (0, aD.I)(n?.id),
            i = (0, d.bG)([N.Ay], () => (null == a ? null : N.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: da.st,
            children: [
                (0, r.jsx)(x.E, { variant: "body-md/semibold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(x.E, { variant: "body-sm/semibold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.gameId &&
                    (0, r.jsx)(x.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: (0, r.jsx)(di, { id: t.gameId }),
                    }),
                (0, r.jsxs)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, o0.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(x.E, { variant: "body-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: da.st,
                    children: [
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, o0.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != i &&
                    (0, r.jsxs)("div", {
                        className: da.st,
                        children: [
                            (0, r.jsxs)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", i.source],
                            }),
                            (0, r.jsxs)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", i.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", i.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, o0.gK)(i.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["hook: ", l?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", l?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", l?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", l?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    dr = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cf)([o8.default], () => o8.default.getOverlayPIDStatuses()),
            n = (0, d.cf)([oZ.default], () => oZ.default.getTrackedGames()),
            l = (0, d.bG)([o8.default], () => o8.default.isInputLocked(t), [t]),
            i = (0, d.bG)([o8.default], () => o8.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.bG)([o8.default], () => o8.default.DEV_isInputLocked(t), [t]),
            o = (0, d.bG)([o8.default], () => o8.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: da.st,
            children: [
                (0, r.jsx)(x.E, { variant: "body-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(x.E, {
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
                (0, r.jsxs)(x.E, {
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
                (0, r.jsxs)(x.E, {
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
                (0, r.jsxs)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(x.E, { variant: "body-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", i],
                }),
                (0, r.jsxs)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", s],
                }),
                (0, r.jsxs)(x.E, { variant: "body-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function dd(e) {
    var t;
    let a =
        ((t = Object.values((0, d.yK)([o6.A], () => o6.A.getWidgetsForLayout(dt.GJ)))), t.find((t) => t.type === e));
    return [
        a,
        function () {
            if (null != a) (0, oW.uv)(a.id);
            else {
                let t = dn[e];
                if (null == t) return;
                let a = t(dt.GJ);
                (0, oW.jn)(a);
            }
        },
    ];
}
function dc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nQ.i$)(nF()(e), "h:mm:ss.SSS");
}
let du = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, d.bG)(
            [oZ.default],
            () => {
                if (null == t) return "Unknown";
                let e = oZ.default.getTrackedGameByPid(t)?.gameName;
                return null != e ? ((dl[t] = e), e) : (dl[t] ?? "Unknown");
            },
            [t],
        );
    return (0, r.jsx)(x.E, { ...a, variant: "body-md/semibold", color: "text-strong", children: n });
});
function dm() {
    let e = (0, d.bG)([o1.A], () => o1.A.hasRenderDebugMode(oq.x7.TrackFocusPIDs)),
        t = (0, d.yK)([oZ.default], () => oZ.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: da.st,
        children: [
            (0, r.jsxs)("div", {
                className: da.Iv,
                children: [
                    (0, r.jsx)(m.d, {
                        checked: e,
                        onChange: () =>
                            void oH.A.setRenderDebugMode(
                                !o1.A.hasRenderDebugMode(oq.x7.TrackFocusPIDs),
                                oq.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(et.D, {
                        className: da.LL,
                        onClick: () => oH.A.clearTrackedPids(),
                        children: (0, r.jsx)(nH.TrashIcon, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(g.Ip, {
                className: ee()(da.st, da.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(id.m, {
                                    position: "left",
                                    text: n === oq.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(x.E, {
                                            variant: "body-sm/medium",
                                            color: n === oq.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(du, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                dc(t),
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
let dh = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.bG)(
                [oZ.default, N.Ay],
                () => {
                    if (null == t) return null;
                    let e = oZ.default.getTrackedGameByPid(t)?.fullscreenType;
                    if (null != e) return e;
                    let a = N.Ay.getGameOrTransformedSubgameForPID(t);
                    return a?.fullscreenType ?? l8.aI.UNKNOWN;
                },
                [t],
            );
        return (0, r.jsxs)(x.E, {
            variant: "body-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, o0.wR)(a) : "Unknown"],
        });
    }),
    dp = o.memo(function () {
        let e = (0, d.cf)([oZ.default], () => oZ.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = N.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, o0.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +o4.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(id.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(g.Ip, {
                        className: ee()(da.st, da.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(x.E, {
                                    variant: "body-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(du, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(dh, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        x.E,
                                                        {
                                                            variant: "body-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, o0.wR)(a)} @ ${dc(n)}`,
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
    dx = o.memo(function () {
        let e = (0, d.cf)([oZ.default], () => oZ.default.getTrackedGames()),
            t = (0, de.getPID)(),
            a = (0, d.bG)([oZ.default], () => oZ.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, d.yK)([o3.A], () => [o3.A.enabled, o3.A.keepOpen]),
            i = (0, d.bG)([o8.default], () => o8.default.getFocusedPID()),
            s = (0, d.bG)([o8.default], () => o8.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: da.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(dr, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", i?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", s ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(x.E, {
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
            mode: oq.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: oq.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: oq.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: oq.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oq.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oq.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: oq.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    dv = o.memo(function () {
        let [e, t] = dd(ev.uss.CLICK_ZONE_DEBUG),
            [a, n] = dd(ev.uss.PERFORMANCE_DEBUG),
            l = (0, d.bG)([o1.A], () => o1.A.getRenderDebugModes()),
            [i, s] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    s({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: da.st,
                children: dg.map((i) => {
                    let s =
                        i.mode === oq.x7.OverlayRafManagerForceEnabled
                            ? `${i.label} (${o2.A.getLastRAFCallbackReason()})`
                            : i.label;
                    function d() {
                        return i.mode === oq.x7.ClickZones
                            ? null != e
                            : i.mode === oq.x7.WidgetAreas
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
                                    (i.mode === oq.x7.ClickZones && t(),
                                        i.mode === oq.x7.WidgetAreas && n(),
                                        (e = i.mode),
                                        oH.A.setRenderDebugMode(!a, e));
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
    db = o.memo(function () {
        let e = (0, d.cf)([oZ.default], () => oZ.default.getTrackedGames()),
            t = (0, d.bG)([N.Ay], () => N.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(id.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: da.st,
                                children: [
                                    (0, r.jsx)(x.E, {
                                        variant: "body-md/semibold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    x.E,
                                                    {
                                                        variant: "body-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(dh, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(id.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: da.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(x.E, {
                                        variant: "body-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(ds, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    dj = o.memo(function () {
        let e = (0, d.bG)([oZ.default], () => oZ.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: oq.V6.UNSET, value: oq.V6.UNSET, id: oq.V6.UNSET },
                { label: oq.V6.IN_PROCESS_V2, value: oq.V6.IN_PROCESS_V2, id: oq.V6.IN_PROCESS_V2 },
                { label: oq.V6.OUT_OF_PROCESS_V3, value: oq.V6.OUT_OF_PROCESS_V3, id: oq.V6.OUT_OF_PROCESS_V3 },
                {
                    label: oq.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: oq.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: oq.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(j.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: function (e) {
                (a(e), oH.A.forceRenderMode(e));
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function df(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function i() {
        a(null);
    }
    return (0, r.jsxs)(oL.EO, {
        size: oL.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(oL.rQ, {
                align: oK.A.Align.CENTER,
                justify: oK.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(x.E, {
                        variant: "body-md/semibold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(oL.s_, { onClick: i }),
                ],
            }),
            (0, r.jsx)(oL.$m, {
                children: (0, r.jsx)("div", {
                    className: da.st,
                    children: (0, r.jsx)(oU.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(oL.jl, {
                children: (0, r.jsxs)(nv.e, {
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
let dy = {
    native: { label: "Native", filter: (e) => e.type === oJ.ON.NativeLegacy || e.type === oJ.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === oJ.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === oJ.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === oJ.ON.OOPModule || e.type === oJ.ON.LegacyModule },
};
function dE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oJ.QJ.Info;
    if (t === oJ.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case oJ.ON.NativeLegacy:
            return "var(--yellow-500)";
        case oJ.ON.NativeOOP:
            return "var(--green-500)";
        case oJ.ON.Flux:
            return "var(--brand-400)";
        case oJ.ON.Renderer:
            return "var(--brand-500)";
        case oJ.ON.LegacyModule:
            return "var(--yellow-300)";
        case oJ.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let dC = [
    {
        key: "type",
        cellClassName: da.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = dS(t);
            return (0, r.jsx)("div", {
                className: da.g$,
                style: { color: dE(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "Name",
        cellClassName: da.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(x.E, {
                        variant: "body-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case oJ.QJ.Info:
                                    return "text-strong";
                                case oJ.QJ.Warning:
                                    return "text-feedback-warning";
                                case oJ.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "Timestamp",
        cellClassName: da.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nQ.i$)(nF()(t), "h:mm:ss.SSS");
        },
    },
];
function dS(e) {
    switch (e) {
        case oJ.ON.NativeLegacy:
            return oG.W;
        case oJ.ON.NativeOOP:
            return oF.q;
        case oJ.ON.Renderer:
        case oJ.ON.Flux:
            return oB.v;
        case oJ.ON.LegacyModule:
            return o$.k;
        case oJ.ON.OOPModule:
            return oV.o;
        default:
            return o$.k;
    }
}
function d_(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let dN = ["__webpack_require__", "fn"],
    dA = ["web.js", "web.js.map"],
    dk = [
        {
            id: "details",
            name: "Details",
            group: ng.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: i, nativeId: s, stack: o, data: d, timestamp: c, pid: u } = t,
                    m = nF()(c),
                    h = dS(l);
                return (0, r.jsxs)(g.Ar, {
                    className: da.bW,
                    children: [
                        (0, r.jsxs)(oY.A, {
                            className: ee()(t2.jr, da.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: dE(l, i) },
                                    className: da.nr,
                                    children: (0, r.jsx)(h, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(oY.A.Title, {
                                    wrapperClassName: da.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(et.D, {
                                            tag: "span",
                                            className: da.KE,
                                            onClick: () => (0, nJ.C)(n),
                                            children: (0, r.jsx)(n$.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(oY.A.Icon, {
                                    icon: n$.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nJ.C)(d_(t));
                                    },
                                }),
                                (0, r.jsx)(oY.A.Icon, { icon: nW.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(n9, {
                            className: da.ZK,
                            children: [
                                (0, r.jsx)(n7, {
                                    name: "Timestamp",
                                    copyValue: m.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: m.toISOString(),
                                        title: (0, nQ.i$)(m, "LLLL"),
                                        children: (0, nQ.i$)(m, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(n7, {
                                    name: "Log Type",
                                    copyValue: i,
                                    children: (0, r.jsx)("code", { children: i }),
                                }),
                                (0, r.jsx)(n7, {
                                    name: "PID",
                                    copyValue: u?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: u?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(n7, {
                                    name: "Native ID",
                                    copyValue: s?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: s?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(n7, {
                                    name: "Data",
                                    copyValue: d_(d),
                                    children: (0, r.jsx)("code", { children: d_(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(n7, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, i] = a,
                                                        s = n.split(/[\\/]/).pop();
                                                    return dN.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: da.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !dA.includes(s ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: da.lz,
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
    dD = {
        searchType: nY.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                i = [t, a, JSON.stringify(l)];
            return (null != n && i.push(n), i);
        },
        throttleMs: 100,
    };
function dI() {
    let { ref: e, height: t } = (0, oz.Ay)(),
        a = (0, d.bG)([o1.A], () => o1.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [i, s] = o.useState(!1),
        [c, u] = o.useState(null),
        [m, h] = o.useState(Object.keys(dy)),
        [p, g] = (0, d.bG)([o1.A], () => o1.A.getOverlayLoggingBreadcrumbs(), [], o9.D),
        [v, b] = o.useState(null),
        j = v ?? p,
        f = null != v ? -1 : g;
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
                              let { filter: a } = dy[t];
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
        { renderSelectedTab: I } = (0, nx.A)({ tabs: dk }, []);
    (0, nq.RT)(y, C, D, dD, [j]);
    let T = o.useCallback((e) => {
            (l(e), oH.A.setModuleLogging(e));
        }, []),
        [R, O] = o.useState(!1),
        w = o.useRef(null),
        M = o.useCallback(() => {
            ((0, nJ.C)(JSON.stringify(C)), O(!0));
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
    let L = o.useCallback((e) => {
            b(null != e ? JSON.parse(e) : null);
        }, []),
        U = o.useCallback(
            (e) => {
                if (e) return b(null);
                (0, P.qf)(
                    (e) =>
                        (0, r.jsx)(df, {
                            modalProps: e,
                            onClose: (t) => {
                                (L(t), e.onClose());
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    e0.SY,
                );
            },
            [L],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: da.rh,
        children: [
            (0, r.jsxs)("div", {
                className: da.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: ee()(da._V, da.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: da.iR,
                                children: (0, r.jsx)(oo.S, { label: "Poll Native", checked: n, onChange: (e) => T(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: da.iR,
                                children: (0, r.jsx)(oo.S, {
                                    label: "Only Active Games",
                                    checked: i,
                                    onChange: (e) => s(e),
                                }),
                            }),
                            (0, r.jsxs)(et.D, {
                                className: da.ny,
                                onClick: M,
                                children: [
                                    (0, r.jsx)(x.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        children: R ? "Copied" : "Copy All",
                                    }),
                                    R
                                        ? (0, r.jsx)(ov.CheckmarkLargeIcon, {
                                              size: "sm",
                                              color: eZ.A.unsafe_rawColors.GREEN_330.css,
                                          })
                                        : (0, r.jsx)(n$.CopyIcon, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(et.D, {
                                className: da.ny,
                                onClick: () => U(null != v),
                                children: (0, r.jsx)(x.E, {
                                    variant: "body-sm/normal",
                                    color: "currentColor",
                                    children: null != v ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: ee()(da._V, da.XQ),
                        children: Object.entries(dy).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                et.D,
                                {
                                    className: ee()(da.pb, m.includes(t) && da.bx),
                                    onClick: () => {
                                        h((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(x.E, {
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
                        className: da._V,
                        children: (0, r.jsx)(nz.I, {
                            query: y,
                            onChange: E,
                            onClear: () => E(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: ee()(da.st, da.CZ),
                children: (0, r.jsx)(t3, {
                    columns: dC,
                    data: S,
                    selectedRowKey: N ?? void 0,
                    onClickRow: (e) => A(e.key),
                }),
            }),
            null != k &&
                (0, r.jsx)(np, {
                    className: ee()(da.st, da.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: I({ breadcrumb: k, onClose: () => A(null) }),
                }),
        ],
    });
}
let dT = o.memo(function () {
        let e = (0, d.bG)([oX.A], () => oX.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: da.st,
            children: [
                (0, r.jsx)("div", {
                    className: da.Iv,
                    children: (0, r.jsx)(x.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    dR = o.memo(function () {
        let e = (0, d.bG)([o1.A], () => o1.A.isStateDebuggingEnabled()),
            t = (0, d.bG)([o1.A], () => o1.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    oH.A.setStateDebugging(!0),
                    () => {
                        oH.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: da.st,
                children: [
                    (0, r.jsx)("div", {
                        className: da.Iv,
                        children: (0, r.jsx)(m.d, {
                            checked: e,
                            onChange: () => oH.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function dO() {
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)("div", {
            className: ee()(t2.nd, da.rf),
            children: [
                (0, r.jsx)(dv, {}),
                (0, r.jsx)(dj, {}),
                (0, r.jsx)(db, {}),
                (0, r.jsx)(dx, {}),
                (0, r.jsx)(dm, {}),
                (0, r.jsx)(dp, {}),
                (0, r.jsx)(dT, {}),
                (0, r.jsx)(dR, {}),
            ],
        }),
    });
}
function dw(e) {
    switch (e) {
        case "Disabled":
            return;
        case "False":
            return !1;
        case "True":
            return !0;
    }
}
function dM(e) {
    return null == e ? "Disabled" : e ? "True" : "False";
}
let dP = o.memo(function () {
    let e = (0, oQ.wW)(),
        t = (0, d.bG)([o5.Ay], () => o5.Ay.getOverlayKeybind());
    return (0, r.jsxs)("div", {
        className: da.st,
        children: [
            (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
            (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Experiment State" }),
            (0, r.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: (0, r.jsx)("pre", {
                    children: JSON.stringify({ ...e, overlayKeybind: (0, o7.dI)(t.shortcut) }, void 0, 2),
                }),
            }),
            (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Overrides" }),
            (0, r.jsx)(j.l, {
                label: "Overlay User Status",
                description: "Override whether the current user was a new or existing user",
                value: dM(e.overrideIsNewOverlayUser),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Existing user", value: "False", id: "False" },
                    { label: "New user", value: "True", id: "True" },
                ],
                onSelectionChange: function (e) {
                    (0, oQ.sw)(dw(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(j.l, {
                label: "Override Previous Keybind Status",
                description: "Override whether the user's pre-experiment keybind was the default keybind",
                value: dM(e.overrideIsUsingDefaultOverlayKeybind),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Using default keybind", value: "True", id: "True" },
                    { label: "Not using default keybind", value: "False", id: "False" },
                ],
                onSelectionChange: function (e) {
                    (0, oQ.C3)(dw(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Actions" }),
            (0, r.jsx)(p.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oQ.xc)() }),
            (0, r.jsx)(p.$, { size: "sm", text: "Reset isUsingDefaultOverlayKeybind", onClick: () => (0, oQ.tM)() }),
        ],
    });
});
function dL() {
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsx)("div", { className: ee()(t2.nd, da.rf), children: (0, r.jsx)(dP, {}) }),
    });
}
function dU() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                C.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    C.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: ee()(t2.nd, da.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: da._V,
                    children: [
                        (0, r.jsx)(et.D, {
                            className: ee()(da.k0, "state" === e && da.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(x.E, {
                                variant: "body-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(et.D, {
                            className: ee()(da.k0, "logging" === e && da.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(x.E, {
                                variant: "body-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(et.D, {
                            className: ee()(da.k0, "experiments" === e && da.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(x.E, {
                                variant: "body-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(dO, {}),
                "logging" === e && (0, r.jsx)(dI, {}),
                "experiments" === e && (0, r.jsx)(dL, {}),
            ],
        })
    );
}
var dG = a(25409);
let dF = { xbox_game_pass: "Xbox Game Pass" };
function dB(e) {
    return `/debug/partner-subs/${e}`;
}
async function d$(e, t) {
    await ie.Bo.post({ url: dB(e), body: t, rejectWithError: !0 });
}
function dV(e) {
    let { active: t } = e;
    return (0, r.jsx)("span", { className: `${dG.Od} ${t ? dG.xk : dG.kS}`, children: t ? "Active" : "Inactive" });
}
function dW(e) {
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
    return (0, r.jsxs)(tX.B, {
        gap: 8,
        className: dG.nM,
        children: [
            (0, r.jsxs)(tX.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                children: [
                    (0, r.jsx)("div", { className: dG.un, children: a.external_account_id }),
                    (0, r.jsx)(dV, { active: a.is_active }),
                    (0, r.jsxs)(tX.B, {
                        direction: "horizontal",
                        gap: 8,
                        fullWidth: !1,
                        className: dG.cm,
                        children: [
                            (0, r.jsx)(m.d, {
                                label: "",
                                checked: a.is_active,
                                onChange: (e) => c(() => d$(t, { ...s, is_active: e })),
                                disabled: l,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Unlink",
                                onClick: () =>
                                    c(() =>
                                        (async function (e, t) {
                                            await ie.Bo.del({ url: dB(e), body: t, rejectWithError: !0 });
                                        })(t, s),
                                    ),
                                disabled: l,
                            }),
                        ],
                    }),
                ],
            }),
            d && (0, r.jsx)("div", { className: dG.en, children: JSON.stringify(a.metadata) }),
        ],
    });
}
function dH(e) {
    var t;
    let { listing: a, onChanged: n } = e,
        [l, i] = o.useState(""),
        [s, d] = o.useState(!0),
        [c, u] = o.useState(!1);
    return (0, r.jsxs)(tX.B, {
        gap: 12,
        className: dG.ns,
        children: [
            (0, r.jsxs)("div", {
                className: dG.CM,
                children: [
                    "Leave the id blank for a per-Discord-user default. Set the same id on multiple Discord accounts to test cross-account dedup of the ",
                    dF[(t = a.partner)] ?? t,
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
            (0, r.jsx)(tX.B, {
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
                            ("" !== t && (e.external_account_id = t), await d$(a.partner, e), i(""));
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
function dz(e) {
    var t;
    let { listing: a, onChanged: n } = e;
    return (0, r.jsxs)(tX.B, {
        gap: 8,
        className: dG.Oy,
        children: [
            (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: dF[(t = a.partner)] ?? t }),
            (0, r.jsxs)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: [
                    "Backed by the ",
                    (0, r.jsx)("code", { children: a.connection_type }),
                    " connected account.",
                ],
            }),
            (0, r.jsx)("div", { className: dG.U, children: "Linked accounts" }),
            0 === a.connected_accounts.length
                ? (0, r.jsx)("div", { className: dG.Ie, children: "None linked yet." })
                : a.connected_accounts.map((e) =>
                      (0, r.jsx)(dW, { partner: a.partner, connectedAccount: e, onChanged: n }, e.connection_id),
                  ),
            (0, r.jsx)("div", { className: dG.U, children: "Link a new account" }),
            (0, r.jsx)(dH, { listing: a, onChanged: n }),
        ],
    });
}
function dK() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(null),
        l = o.useCallback(async () => {
            try {
                let e = await (async function () {
                    let { body: e } = await ie.Bo.get({ url: "/debug/partner-subs", rejectWithError: !0 });
                    return e;
                })();
                (t(e), n(null));
            } catch (e) {
                n(e instanceof Error ? e.message : String(e));
            }
        }, []);
    return (
        (0, tu.Ay)(() => {
            l();
        }),
        (0, r.jsxs)(g.Ip, {
            className: ee()(t2.nd, dG.kL),
            children: [
                (0, r.jsx)(en.D, { variant: "heading-lg/semibold", className: t2.wx, children: "Partner Perks" }),
                (0, r.jsxs)(tX.B, {
                    gap: 16,
                    children: [
                        null != a && (0, r.jsx)(x.E, { variant: "body-sm/normal", className: dG.kc, children: a }),
                        e.map((e) => (0, r.jsx)(dz, { listing: e, onChanged: l }, e.partner)),
                    ],
                }),
            ],
        })
    );
}
var dY = a(488428),
    dq = a(73825),
    dJ = a(781300),
    dQ = a(589078),
    dX = a(944304),
    dZ = a(300233),
    d0 = a(599941),
    d1 = a(31637),
    d2 = a(4630),
    d3 = a(44120),
    d6 = a(778705),
    d5 = a(216678),
    d8 = a(194509),
    d4 = a(672619),
    d9 = a(533609),
    d7 = a(397093);
function ce(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, d0.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(d1.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let ct = function () {
    let [e, t] = o.useState(tG.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, d.yK)([n_.A], () => n_.A.getGuildsArray()),
        [i] = (0, d.yK)([ou.A], () => [ou.A.getPremiumSubscription()]),
        s = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(s.length > 0 ? s[0].value : null),
        [h, v] = o.useState(""),
        [y, E] = o.useState({ plan_id: tG.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        C = "true" !== y.gift && null != i,
        [S, _] = o.useState(s.length > 0 ? s[0].value : null),
        { analyticsLocations: N } = (0, nb.Ay)(tR.A.PAYMENT_FLOW_TEST_PAGE),
        [A, k] = o.useState(""),
        [D, I] = o.useState(""),
        { balance: T, isFetching: R, error: O } = (0, d4.W0)(),
        { isSubmitting: w, responseMessage: M, redeemVirtualCurrency: P } = (0, d4.Qr)({ useOrdersAPI: !0 }),
        [L, U] = o.useState(""),
        [G, F] = o.useState(""),
        [B, $] = o.useState(""),
        [V, W] = o.useState("");
    return (0, r.jsx)(nb.f5, {
        value: N,
        children: (0, r.jsx)(g.Ip, {
            className: d7.XG,
            children: (0, r.jsxs)(tX.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(tX.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: tG.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tG.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tG.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(d8.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: nB.XD.PRIMARY,
                                look: nB.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(tX.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: tG.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tG.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tG.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, d6.A)({ subscriptionTier: a, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(tX.B, {
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
                                ? (0, r.jsx)(dX.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(tX.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(s$.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(tX.B, {
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
                                    (0, r.jsx)(id.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: h.length < 1,
                                        children: (0, r.jsx)(p.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: h.length < 1,
                                            onClick: () => {
                                                window.open(ev.BVt.BILLING_PROMOTION_REDEMPTION(h));
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
                                    { id: "tier_2", value: tG.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tG.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tG.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
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
                    (0, r.jsx)(id.m, {
                        text: "Already subscribed",
                        shouldShow: C,
                        children: (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: C,
                            onClick: () => {
                                window.open(ev.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dY.As({ ...y }));
                            },
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(tX.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(x.E, {
                                        variant: "body-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    R
                                        ? (0, r.jsx)("div", {
                                              className: d7.wG,
                                              children: (0, r.jsx)(th.y, { type: th.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: d7.dB,
                                              children: [
                                                  null !== O &&
                                                      (0, r.jsxs)(x.E, {
                                                          variant: "body-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              O.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(d9.Gy, {
                                                      balance: T ?? 0,
                                                      balanceWidgetMode: d9.k7.SELECTED,
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
                                onClick: () => P(L, (0, eG.A)()),
                            }),
                            null != M && (0, r.jsx)(x.E, { variant: "body-sm/normal", children: M }),
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
                            (0, r.jsx)(dZ.H, {
                                guildId: S?.id,
                                children: (0, r.jsx)(ce, { selectedGuildForGuildSub: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(tX.B, {
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
                                    (0, d2.openIAPPurchaseModal)({
                                        applicationId: A,
                                        skuId: D,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: ev.liQ.IN_APP },
                                        context: ev.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(tX.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(u.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(tX.B, {
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
                                            (0, d5.q)({
                                                applicationId: G,
                                                skuId: B,
                                                analyticsLocations: N,
                                                checkoutFlow: dQ.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(tX.B, {
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
                                onClick: () => (0, d3.A)({ skuId: V, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(tX.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, dq.YG)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, dJ.uZ)(),
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
                            onClick: () => (0, lM.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var ca = a(219887),
    cn = a(459357),
    cl = a(650314),
    ci = a(500380),
    cs = a(102609),
    cr = a(50258),
    co = a(295405),
    cd = a(548185);
let cc = [
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
    cu = {
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
    cm = [
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
    ch = {
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
    cp = [
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
    cx = {
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
        f = Object.values((0, tT.bG)([co.A], () => co.A.paymentSources)),
        y = cu[e];
    return (
        o.useEffect(() => {
            (0, dJ.$o)();
        }, []),
        (0, r.jsx)(g.Ip, {
            className: t2.nd,
            children: (0, r.jsxs)("div", {
                className: iF.l$,
                children: [
                    (0, r.jsxs)(x.E, {
                        style: { marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: iF.Uo,
                        children: [
                            (0, r.jsx)(aN.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: cc
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: cd.bI,
                                                src: (0, ci.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: function (e) {
                                    (t(e), h(cu[e][0].value), b(1 === cu[e].length));
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: cm.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (n(e), i(ch[e] ?? null));
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: s,
                                    options: cp.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (d(e), u(cx[e] ?? null));
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
                                        await ie.Bo.post({
                                            url: "/debug/payment-source",
                                            body: { token: t, address: "US" === e ? l : "CA" === e ? c : null },
                                            rejectWithError: !1,
                                        }),
                                        await (0, dJ.$o)());
                                },
                            }),
                            f.length > 0 &&
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Delete All Payment Sources",
                                    onClick: async function () {
                                        (await ie.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }),
                                            await (0, dJ.$o)());
                                    },
                                }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: async function () {
                                    (await ie.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }),
                                        window.location.reload());
                                },
                            }),
                        ],
                    }),
                    (0, r.jsx)(x.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(cS, {}),
                    (0, r.jsx)(x.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(cy, {}),
                    (0, r.jsx)(x.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: "Existing Payment Sources",
                    }),
                    f.map((e) => (0, r.jsx)(c_, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let cv = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    cb = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    cj = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Express checkout disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Express checkout enabled: Review Footer" },
        { id: "2", value: "2", label: "Treatment (2) \u2014 Express checkout enabled: Payment Select" },
    ];
function cf(e) {
    let { experimentName: t, options: a = cv } = e,
        n = (0, tT.bG)([cr.A, nZ.default], () => {
            let e = nZ.default.getId(),
                a = cr.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, cs.t$)(cs.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(j.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function cy() {
    return (0, r.jsxs)(tX.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(cf, { experimentName: cn.A.definition.name, options: cb }),
            (0, r.jsx)(cf, { experimentName: cl.I.definition.name, options: cj }),
        ],
    });
}
let cE = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    cC = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function cS() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, i] = o.useState(null),
        [s, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(null),
        x = parseInt(a, 10),
        g = !isNaN(x) && x >= 500 && x <= 5e3;
    return (0, r.jsxs)(tX.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(tX.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(j.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: cE,
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
                            if (g) {
                                (d(!0), h(null), i(null), u(!1));
                                try {
                                    let t = await ie.Bo.post({
                                        url: "/billing/gift-card/create-on-demand-pin",
                                        body: { country: e, currency: cC[e], amount: x },
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
                        disabled: !g,
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(tX.B, {
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
            null != m && (0, r.jsx)(ea.w, { type: "critical", message: m, role: "alert" }),
        ],
    });
}
function c_(e) {
    let { paymentSource: t } = e;
    return (0, r.jsxs)("div", {
        className: iF.bd,
        children: [
            (0, r.jsx)(ca.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: cd.bI, src: (0, ci.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(x.E, { variant: "body-sm/medium", children: "(Default)" })
                : (0, r.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: "Set as Default",
                      onClick: async function () {
                          (await ie.Bo.patch({
                              url: ev.Rsh.BILLING_PAYMENT_SOURCE(t.id),
                              body: { default: !0 },
                              rejectWithError: !1,
                          }),
                              await (0, dJ.$o)());
                      },
                  }),
        ],
    });
}
var cN = a(706712),
    cA = a(76573),
    ck = a(543862),
    cD = a(948325),
    cI = a(55373);
function cT() {
    return (0, r.jsxs)(g.Ip, { className: cI.kL, children: [(0, r.jsx)(cR, {}), (0, r.jsx)(cw, {})] });
}
function cR() {
    let e = (0, d.bG)([eh.default], () => eh.default.getCurrentUser()?.perks ?? null),
        t = o.useMemo(
            () =>
                null == e
                    ? []
                    : Object.values(cA.bb)
                          .filter((e) => "number" == typeof e && e !== cA.bb.UNSPECIFIED)
                          .filter((t) => (0, cD.Nh)(e, t))
                          .map((t) => ({
                              id: t,
                              name: cA.bb[t],
                              sources: (0, cD.kQ)(e, t)?.map((e) => cA.g$[e]) ?? [],
                          })),
            [e],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(en.D, { className: cI.wx, variant: "heading-lg/semibold", children: "Active Perks" }),
            (0, r.jsx)(cO, { perks: e, activePerks: t }),
            (0, r.jsx)(en.D, { className: cI.m_, variant: "heading-sm/semibold", children: "Debug" }),
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
function cO(e) {
    let { perks: t, activePerks: a } = e;
    return null == t
        ? (0, r.jsx)("p", { className: cI.Qb, children: "No perks data available on the current user." })
        : 0 === a.length
          ? (0, r.jsx)("p", { className: cI.Qb, children: "No active perks." })
          : (0, r.jsxs)("table", {
                className: cI.Q,
                children: [
                    (0, r.jsx)("thead", {
                        children: (0, r.jsxs)("tr", {
                            children: [
                                (0, r.jsx)("th", { className: cI.Ts, children: "Perk" }),
                                (0, r.jsx)("th", { className: cI.Ts, children: "Sources" }),
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
                                            className: cI.iH,
                                            children: [(0, r.jsx)("code", { children: e.name }), " (", e.id, ")"],
                                        }),
                                        (0, r.jsx)("td", {
                                            className: cI.iH,
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
function cw() {
    let e = o.useCallback(() => {
            (0, aU._N)(aL.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, ck.FZ)(aL.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(en.D, { className: cI.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: cI.PW,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var cM = a(136722),
    cP = a(576705),
    cL = a(558393),
    cU = a(290261),
    cG = a(643566);
function cF(e) {
    let { title: t, can: a } = e,
        n = a ? ov.CheckmarkLargeIcon : er.P,
        l = (0, r.jsx)("div", {
            className: ee()(cG.v_, a ? cG.uU : cG.Ss),
            children: (0, r.jsx)(n, { className: cG.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: cG.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: cG.rv,
                children: (0, r.jsx)(x.E, { variant: "body-md/normal", children: t }),
            }),
        ],
    });
}
function cB() {
    let e = (0, d.bG)([r4.Ay], () => r4.Ay.getChannelId()),
        t = (0, d.bG)([nN.A], () => nN.A.getGuildId()),
        a = (0, d.bG)([aq.A], () => aq.A.getChannel(e)),
        n = (0, d.bG)([n_.A], () => n_.A.getGuild(t)),
        l = (0, d.bG)([cP.A], () => cP.A.computePermissions(a)),
        i = (0, d.bG)([cP.A], () => cP.A.computePermissions(n)),
        s = (0, aY.Ay)(a, !0),
        o = null != a ? (0, cU.mW)(a, !1) : null,
        c = null != n ? cL.A.getGuildPermissionSpecMap(n) : null,
        u = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cM.zy(l, a);
            return (0, r.jsx)(cF, { title: t, can: n }, t);
        }),
        m = Object.values(c ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cM.zy(i, a);
            return (0, r.jsx)(cF, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: ee()(t2.nd, cG.nd),
        children: (0, r.jsxs)("div", {
            className: cG.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: cG.uW,
                    children: [
                        (0, r.jsx)(en.D, {
                            variant: "heading-sm/semibold",
                            children: null != s ? `Permissions in ${s}` : "No channel selected",
                        }),
                        u,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: cG.uW,
                    children: [
                        (0, r.jsx)(en.D, {
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
var c$ = a(873298),
    cV = a(775602),
    cW = a(413599),
    cH = a(253932),
    cz = a(631670),
    cK = a(817281),
    cY = a(955572),
    cq = a(189916),
    cJ = a(435911),
    cQ = a(385803),
    cX = a(381941);
let cZ = [ev.NJ8.ASH, ev.NJ8.LIGHT, ev.NJ8.DARK, ev.NJ8.ONYX],
    c0 = [c$.NS.COMPACT, c$.NS.COZY, c$.NS.DEFAULT];
function c1(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function c2() {
    let e,
        t =
            ((e = eh.default.getCurrentUser()),
            oC.Ay.canUseClientThemes(e)
                ? Object.keys(cQ.ag)
                      .map((e) => Number(e))
                      .filter((e) => !(0, cq.oB)(e))
                : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = c1(a);
            if (null != n) {
                let t = cQ.ag[n];
                e = t?.theme ?? ev.NJ8.DARK;
            } else e = c1([ev.NJ8.ASH, ev.NJ8.DARK, ev.NJ8.ONYX]);
            await cK.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                aU.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = c1(cZ);
            await cK.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                aU.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function c3() {
    let e = tw.A.purchases,
        t = (0, e$.x9)(e),
        a = (0, e$.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            (n && (e.avatarDecoration = c1([...t, null])), l && (e.nameplate = c1([...a, null])), (0, tj.p)(e));
            let i = tf.A.getPendingChanges(),
                s = (0, cJ.Sk)(i);
            await (0, cz._L)(s).finally(cz.pZ);
        } catch (e) {}
}
function c6() {
    try {
        let e = c1(ev.hH7.FONT_SIZES);
        (0, cY.XS)(e);
        let t = c1(cX.qh);
        (0, cY.AC)(t);
        let a = c1(c0);
        cH.Xi.updateSetting(a);
    } catch (e) {}
}
function c5() {
    let { purchases: e } = (0, tC.b5)(),
        t = (0, d.bG)([eh.default], () => eh.default.getCurrentUser()),
        a = cH.eh.useSetting(),
        n = (0, d.bG)([cW.A], () => cW.A.theme),
        l = a.backgroundGradientPresetId,
        i = (0, e$.x9)(e),
        s = (0, e$.$W)(e),
        c = t?.avatarDecoration?.skuId,
        u = t?.collectibles?.nameplate?.skuId,
        m = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        h = null != u ? (s.find((e) => e.skuId === u) ?? null) : null,
        g = null != m ? e.get(m.skuId)?.name : null,
        v = null != h ? e.get(h.skuId)?.name : null,
        b = (0, d.bG)([cV.Ay], () => cV.Ay.fontSize),
        j = (0, d.bG)([cV.Ay], () => cV.Ay.messageGroupSpacing),
        f = cH.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = eh.default.getCurrentUser(),
                t = cH.eh.getSetting(),
                a = tw.A.purchases,
                n = (0, e$.x9)(a),
                l = (0, e$.$W)(a),
                i = cW.A.theme,
                s = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = cV.Ay.fontSize,
                m = cV.Ay.messageGroupSpacing,
                h = cH.Xi.getSetting();
            return () => {
                try {
                    (cK.u_(
                        { theme: i, backgroundGradientPresetId: s ?? void 0, customUserThemeSettings: void 0 },
                        aU.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, tj.p)({ avatarDecoration: d, nameplate: c }));
                    let e = tf.A.getPendingChanges(),
                        t = (0, cJ.Sk)(e);
                    ((0, cz._L)(t).finally(cz.pZ), (0, cY.XS)(u), (0, cY.AC)(m), cH.Xi.updateSetting(h));
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lQ.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(en.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(x.E, {
                            variant: "body-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: c2 }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: c3,
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: c6,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(x.E, { variant: "body-md/normal", children: ["Theme: ", n] }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-md/normal",
                            children: ["Client Theme ID:", " ", null != l ? cQ.ag[l]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(x.E, { variant: "body-md/normal", children: ["Avatar Decoration: ", g ?? "None"] }),
                        (0, r.jsxs)(x.E, { variant: "body-md/normal", children: ["Nameplate: ", v ?? "None"] }),
                        (0, r.jsxs)(x.E, { variant: "body-md/normal", children: ["Font Size: ", b, "px"] }),
                        (0, r.jsxs)(x.E, { variant: "body-md/normal", children: ["Message Spacing: ", j] }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-md/normal",
                            children: [
                                "UI Density: ",
                                f,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case c$.NS.COMPACT:
                                            return "Compact";
                                        case c$.NS.COZY:
                                            return "Cozy";
                                        case c$.NS.DEFAULT:
                                            return "Default";
                                        case c$.NS.RESPONSIVE:
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
var c8 = a(350835),
    c4 = a(155718),
    c9 = a(365185),
    c7 = a(611656),
    ue = a(980822),
    ut = a(534465),
    ua = a(290863),
    un = a(620678),
    ul = a(705751),
    ui = a(747681);
let us = { positive: "text-feedback-positive", critical: "text-feedback-critical", muted: "text-muted" };
function ur(e) {
    return null == e ? "Not set" : (ul.S7[e] ?? `unknown (${e})`);
}
function uo(e) {
    return (0, d.cf)(
        [tZ.A],
        () => ({
            isHydrated: null != e && tZ.A.isHydrated(e),
            isFetching: null != e && tZ.A.isFetchingApplication(e),
            didFail: null != e && tZ.A.didFetchingApplicationFail(e),
        }),
        [e],
    );
}
function ud(e) {
    let { id: t } = e;
    return (0, r.jsx)(x.E, { tag: "span", variant: "mono-md/normal", selectable: !0, children: t });
}
function uc(e) {
    let { label: t, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: t }),
            (0, r.jsx)(x.E, { variant: "body-sm/normal", className: ui.Uq, children: a }),
        ],
    });
}
function uu(e) {
    var t;
    let { link: a } = e,
        n = a.application;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(ud, { id: a.id }),
            " \xb7 ",
            ((t = a.type), c4.Mh[t] ?? `unknown (${t})`),
            " \xb7",
            " ",
            null != n ? `${n.name} (${ur(n.type)})` : "application missing, link is skipped",
        ],
    });
}
function um(e) {
    var t;
    let { user: a, activity: n } = e,
        [l, i] = o.useState(!1),
        s = (0, t0.h)(n.application_id),
        d = uo(n.application_id),
        c = (0, c9.A)({ activity: n, user: a }),
        u = (0, ut.UE)({ user: a, activity: n, entry: c }),
        m = (0, t0.h)(u.applicationId),
        h = uo(u.applicationId),
        { gameId: g, gameRecord: v, isLoading: b } = (0, ue.A)({ applicationId: u.applicationId }),
        j = (0, t5.A)({
            location: "DevToolsPresenceResolution",
            source: t6.GameProfileSources.DevTools,
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
                          : (0, c7.TC)(r)
                            ? { tone: "critical", text: `${r.name} is GAME_DISABLED.` }
                            : { tone: "critical", text: "The game profile cannot open." };
        })({
            activity: n,
            applicationId: u.applicationId,
            application: m,
            didFail: h.didFail,
            isLoading: b,
            gameId: g,
            gameRecord: v,
            canOpen: null != j,
        }),
        y = s?.linkedGames ?? [];
    return (0, r.jsxs)(tX.B, {
        gap: 12,
        fullWidth: !1,
        className: ui.Eb,
        children: [
            (0, r.jsxs)(tX.B, {
                gap: 4,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: n.name }),
                    (0, r.jsxs)(x.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: [
                            null == (t = n.type) ? "Not set" : (c8.$[t] ?? `unknown (${t})`),
                            null != n.platform ? ` \xb7 ${n.platform}` : "",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(x.E, { variant: "body-sm/semibold", color: us[f.tone], children: f.text }),
            (0, r.jsxs)("div", {
                className: ui.zH,
                children: [
                    (0, r.jsx)(uc, {
                        label: "Application",
                        children: null != n.application_id ? (0, r.jsx)(ud, { id: n.application_id }) : "None",
                    }),
                    null != n.application_id &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(uc, { label: "Name", children: s?.name ?? "\u2014" }),
                                (0, r.jsx)(uc, { label: "Type", children: ur(s?.type) }),
                                (0, r.jsx)(uc, {
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
                                (0, r.jsx)(uc, {
                                    label: "Linked games",
                                    children: y.length > 0 ? y.map((e) => (0, r.jsx)(uu, { link: e }, e.id)) : "None",
                                }),
                            ],
                        }),
                    (0, r.jsx)(uc, {
                        label: "Profile uses",
                        children:
                            null == u.applicationId
                                ? "Nothing"
                                : null == c
                                  ? "The activity's application"
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            "Content inventory entry ",
                                            (0, r.jsx)(ud, { id: c.id }),
                                            ", application ",
                                            (0, r.jsx)(ud, { id: u.applicationId }),
                                        ],
                                    }),
                    }),
                    (0, r.jsx)(uc, {
                        label: "Resolves to",
                        children:
                            null != g
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [v?.name ?? "Unfetched game", " ", (0, r.jsx)(ud, { id: g })],
                                  })
                                : "Nothing",
                    }),
                ],
            }),
            (0, r.jsxs)(tX.B, {
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
                    (0, r.jsx)(l6.Q, {
                        variant: "secondary",
                        textVariant: "body-sm/medium",
                        text: l ? "Hide raw activity" : "Show raw activity",
                        onClick: () => i(!l),
                    }),
                ],
            }),
            l &&
                (0, r.jsx)("div", {
                    className: ui.aY,
                    children: (0, r.jsx)(x.E, {
                        variant: "mono-md/normal",
                        selectable: !0,
                        children: JSON.stringify(n, null, 2),
                    }),
                }),
        ],
    });
}
function uh(e) {
    let { userId: t } = e,
        a = (0, d.bG)([eh.default], () => eh.default.getUser(t), [t]),
        n = (0, d.yK)([ua.A], () => ua.A.getActivities(t), [t]);
    return null == a
        ? (0, r.jsxs)(x.E, {
              variant: "body-sm/normal",
              color: "text-feedback-critical",
              children: ["User ", t, " is not loaded. Open their profile or a server you share with them first."],
          })
        : 0 === n.length
          ? (0, r.jsxs)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: [
                    "No activities in PresenceStore for ",
                    a.username,
                    ". Presence only loads for friends and members of servers you have opened.",
                ],
            })
          : (0, r.jsxs)(tX.B, {
                gap: 12,
                children: [
                    (0, r.jsxs)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [a.username, " \xb7 ", 1 === n.length ? "1 activity" : `${n.length} activities`],
                    }),
                    n.map((e, t) => (0, r.jsx)(um, { user: a, activity: e }, `${t}:${e.type}:${e.name}`)),
                ],
            });
}
function up() {
    let e = (0, un.Qy)((e) => e.input),
        t = (0, un.Qy)((e) => e.setInput),
        a = e.trim();
    return (0, r.jsx)("div", {
        className: ee()(t2.nd, ui.kL),
        children: (0, r.jsxs)(tX.B, {
            gap: 24,
            padding: 12,
            fullWidth: !1,
            className: ui.rf,
            children: [
                (0, r.jsxs)(tX.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Presence Resolution" }),
                        (0, r.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "See which application each activity comes from, its linked games, and whether the profile card can open a game profile. Open this from Inspect Presence in an activity's menu, or paste a user ID.",
                        }),
                    ],
                }),
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "User ID" }),
                        (0, r.jsx)(f.k, {
                            label: "User ID",
                            hideLabel: !0,
                            placeholder: "Paste a user ID",
                            value: e,
                            onChange: t,
                        }),
                    ],
                }),
                a.length > 0 && (0, r.jsx)(uh, { userId: a }),
            ],
        }),
    });
}
var ux = a(656513),
    ug = a(885574),
    uv = a(508274),
    ub = a(837529);
let uj = [5793266, 2303016],
    uf = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function uy() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, ub.Zt)(),
        l = (0, ey.Ay)(),
        i = (0, d.bG)([aG.A], () => aG.A.settings.appearance?.clientThemeSettings),
        s =
            i?.customUserThemeSettings != null &&
            null != i.customUserThemeSettings.colors &&
            i.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, cK.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)(tX.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ux.N, {
                            collapsibleContent: (0, r.jsxs)(tX.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(x.E, {
                                        variant: "body-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(x.E, {
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
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: uj }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(nv.e, {
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
                                  options: uf,
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
                                                onClick: () => t({ ...e, themeColors: uj }),
                                            }),
                                            (0, r.jsxs)(tX.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(x.E, {
                                                        variant: "body-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(uv.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(tX.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(x.E, {
                                                        variant: "body-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(uv.VN, {
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
                                  : (0, r.jsxs)(tX.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(j.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(ev.NJ8).map((e) => ({
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
                                                        (0, r.jsx)(x.E, {
                                                            variant: "body-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(x.E, {
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
                                                                    (0, cK.u_)({ theme: "system" }));
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(x.E, {
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
var uE = a(141931),
    uC = a(306173),
    uS = a(142617),
    u_ = a(719718),
    uN = a(925433),
    uA = a(225123),
    uk = a(237984),
    uD = a(43203),
    uI = a(349435),
    uT = a(674272),
    uR = a(466034),
    uO = a(10094),
    uw = a(683760);
function uM() {
    let e = (0, d.bG)([eh.default], () => eh.default.getCurrentUser()),
        t = (0, d.bG)([uw.A], () => {
            let e = uw.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, d.bG)([uw.A], () => uw.A.getPremiumTypeOverride());
    return (0, r.jsxs)(tX.B, {
        gap: 16,
        children: [
            (0, r.jsx)(j.l, {
                label: "Override Client-Side Premium Type",
                options: tG.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, uO.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(l6.Q, {
                onClick: () => {
                    (0, uO.O)(void 0, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(sO.J, {
                label: "Override Client-Side Account Created At Date",
                value: nF()(t),
                onSelect: (e) => {
                    var t;
                    return ((t = e.toISOString()), void (0, uO.Y)(new Date(t)));
                },
            }),
            (0, r.jsx)(l6.Q, { onClick: () => (0, uO.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
}
var uP = a(253400),
    uL = a(327337),
    uU = a(431804),
    uG = a(377722),
    uF = a(221851);
function uB() {
    throw Error("Send help");
}
function u$() {
    let e = cH.j0.useSetting(),
        t = (0, uS.FX)("DevToolsQuickActions"),
        n = (0, d.bG)([u_.A], () => u_.A.isFetching),
        [l, i] = o.useState(!1);
    return l
        ? {}
        : (0, r.jsxs)(g.Ip, {
              children: [
                  (0, r.jsx)("div", { className: ee()(uG.N, uF.SX), children: (0, r.jsx)(uM, {}) }),
                  (0, r.jsx)("div", {
                      className: ee()(uG.N, uF.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, uT.A)({ source: uU.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: ee()(uG.N, uF.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = r4.Ay.getChannelId() ?? "21154681615024128"),
                                  void (0, P.mM)(
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
                                                  warningType: uI._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: uL.V },
                                  )
                              );
                          },
                      }),
                  }),
                  t &&
                      (0, r.jsx)("div", {
                          className: ee()(uG.N, uF.QB),
                          children: (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Launch Checkpoint",
                              loading: n,
                              onClick: () => (0, uN.D)("devtools"),
                          }),
                      }),
                  (0, r.jsx)("div", {
                      className: ee()(uG.N, uF.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, P.mM)(
                                  async () => {
                                      let { default: e } = await a.e(842213).then(a.bind(a, 881092));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: ee()(uG.N, uF.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, uD.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: ee()(uG.N, uF.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: uC.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: ee()(uG.N, uF.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = uA.A.getSocket();
                              C.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: ee()(uG.N, uF.QB),
                      children: (0, r.jsx)(m.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cH.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: ee()(uG.N, uF.QB),
                      children: [
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, uk.o)(),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  (uA.A.getSocket().close(), uA.A.getSocket().connect());
                              },
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  C.h.dispatch({
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
                              onClick: () => (0, uR.sy)(!0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: function () {
                                  ie.Bo.post({ url: ev.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: ee()(uG.N, uF.QB),
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
                              onSelectionChange: (e) => null != e && uP.Ay.crash(e),
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
                                      value: uE.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: uE.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: uE.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void uP.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => i(!0),
                          }),
                          (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: uB }),
                      ],
                  }),
              ],
          });
}
var uV = a(457112),
    uW = a(653887),
    uH = a(799226);
function uz() {
    let e = Object.keys(uV).map((e) => (0, r.jsx)(uq, { riveName: e }, e));
    return (0, r.jsx)(g.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(tX.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(x.E, {
                    variant: "body-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(uK, {}),
                (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(x.E, {
                    variant: "body-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function uK() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        [s, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, p] = o.useState(400),
        x = o.useCallback(() => {
            setTimeout(() => {
                (i(c.current?.getProperties() ?? {}), d(c.current?.getArtboards() ?? []), n({}));
            }, 1e3);
        }, []),
        g = o.useCallback(
            (e, t) => {
                null != a && n((a) => ({ ...a, [e]: { type: l?.[e]?.type, value: t } }));
            },
            [l, a],
        ),
        v = o.useCallback((e) => {
            (i(null), n(null), t(e));
        }, []);
    return (0, r.jsxs)(tX.B, {
        gap: 16,
        children: [
            (0, r.jsx)(uq, { riveName: "Rive inspector", onRiveLoad: v }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(uW._, { src: e, ref: c, onLoad: x, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(th.y, {}) : null,
            null != a &&
                (0, r.jsxs)(tX.B, {
                    children: [
                        (0, r.jsxs)(tX.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Dimensions" }),
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
                        (0, r.jsxs)(tX.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        uY,
                                        {
                                            property: e,
                                            type: l?.[e]?.type,
                                            value: a?.[e]?.value ?? l?.[e]?.value,
                                            onChange: (t) => g(e, t),
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
function uY(e) {
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
            return (0, r.jsx)(aN.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select a color...",
                options: Object.entries(eZ.A.colors).map((e) => {
                    let [t, a] = e;
                    return { label: t, value: a, id: t };
                }),
            });
        case "artboard":
            return (0, r.jsx)(aN.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select an artboard...",
                options: i.map((e) => ({ label: e, value: e, id: e })),
            });
        case "enum":
            return (0, r.jsx)(aN.Z, {
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
function uq(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = uV[t]?.riveSrc,
        l = null == n,
        i = o.useRef(null),
        s = (0, uH.Gy)(n);
    return (0, r.jsxs)(
        tX.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(tX.B, {
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
                                    (null != n && (0, uH.DS)(n, t), a?.(t));
                                }),
                                    l.readAsArrayBuffer(t));
                            },
                            ref: i,
                        }),
                        (0, r.jsx)(eJ.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: function () {
                                (null != i.current && (i.current.value = ""),
                                    null != n && (0, uH.DS)(n, null),
                                    a?.(null));
                            },
                            icon: nH.TrashIcon,
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
var uJ = a(926919),
    uQ = a(513521),
    uX = a(111162);
function uZ() {
    let e = (0, d.bG)([uX.default], () => uX.default.routingKeyTags);
    return (0, r.jsx)(lw.Ch, {
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-16)" },
            children: (0, r.jsxs)(u.n, {
                label: "Routing Key",
                children: [
                    (0, r.jsx)(x.E, {
                        variant: "body-md/normal",
                        color: "text-muted",
                        children:
                            "A routing key is an opaque set of strings added to outbound network requests, which may be used for debugging and testing of the network path.",
                    }),
                    (0, r.jsxs)(tX.B, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(en.D, { variant: "heading-sm/medium", children: "Overrides" }),
                            (0, r.jsx)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: "Manually configure the routing key values",
                            }),
                            (0, r.jsx)(uQ.A, {
                                tagsLabel: "Routing Key Values",
                                placeholder: "Enter new value...",
                                tags: e.map((e) => ({ id: e, label: e })),
                                onAddTag: function (t) {
                                    e.includes(t) || (0, uJ.f)([...e, t]);
                                },
                                onRemoveTag: function (t) {
                                    (0, uJ.f)(e.filter((e) => !t.has(e)));
                                },
                            }),
                            e.length > 0
                                ? (0, r.jsx)(p.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: "Clear all",
                                      onClick: () => (0, uJ.f)([]),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        }),
    });
}
var u0 = a(344292);
function u1(e) {
    let { game: t, meta: a } = e;
    return (0, r.jsxs)("div", {
        className: u0.nM,
        children: [
            (0, r.jsxs)("div", {
                className: u0.uV,
                children: [
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/semibold",
                        className: u0._k,
                        children: null == t.name || "" === t.name ? "(no name)" : t.name,
                    }),
                    null != a && (0, r.jsx)(x.E, { variant: "body-xs/normal", className: u0.Bq, children: a }),
                ],
            }),
            (0, r.jsx)(x.E, {
                variant: "body-xs/normal",
                className: u0.C0,
                children: null == t.exePath || "" === t.exePath ? "(no path)" : t.exePath,
            }),
            (0, r.jsxs)(x.E, {
                variant: "body-xs/normal",
                className: u0.en,
                children: ["pid ", t.pid, " \xb7 ", t.id ?? "(no id)"],
            }),
        ],
    });
}
function u2(e) {
    let { title: t, count: a, entries: n, renderMeta: l } = e;
    return (0, r.jsxs)(tX.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(en.D, { variant: "heading-xs/semibold", children: [t, " (", a, ")"] }),
            0 === n.length
                ? (0, r.jsx)(x.E, { variant: "body-sm/normal", className: u0.Ie, children: "none" })
                : (0, r.jsx)(tX.B, {
                      gap: 0,
                      children: n.map((e) =>
                          (0, r.jsx)(
                              u1,
                              { game: e.game, meta: l?.(e.outcome) },
                              `${e.game.pid}-${e.game.id ?? e.game.exeName}`,
                          ),
                      ),
                  }),
        ],
    });
}
function u3(e) {
    return "blocked" !== e.kind
        ? null
        : null != e.matchedExe
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    "blocked by exe substring ",
                    (0, r.jsx)("span", { className: u0.ti, children: e.matchedExe }),
                ],
            })
          : null != e.matchedPattern
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      "blocked by pattern ",
                      (0, r.jsx)("span", { className: u0.ti, children: e.matchedPattern }),
                  ],
              })
            : "blocked (no reason captured)";
}
function u6(e) {
    return "observed_app" !== e.kind
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  "matched observed app",
                  " ",
                  (0, r.jsxs)("span", {
                      className: u0.ti,
                      children: [e.appName, e.streamerTool ? " (streamer tool)" : ""],
                  }),
              ],
          });
}
function u5() {
    var e;
    let t = (0, d.bG)([N.Ay], () => N.Ay.getDetectionDebug()),
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
        className: ee()(t2.nd, u0.kL),
        children: (0, r.jsxs)(tX.B, {
            gap: 16,
            padding: 12,
            className: u0.rf,
            children: [
                (0, r.jsxs)(tX.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Running Game Detection" }),
                        (0, r.jsxs)(x.E, {
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
                (0, r.jsxs)(tX.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Status" }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "Last update:" }),
                                " ",
                                null == (e = t?.timestamp) ? "never" : new Date(e).toLocaleTimeString(),
                            ],
                        }),
                        (0, r.jsxs)(x.E, {
                            variant: "body-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "From native:" }),
                                " ",
                                t?.totalFromNative ?? 0,
                            ],
                        }),
                        (0, r.jsxs)(x.E, {
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
                (0, r.jsx)(u2, { title: "Running games", count: a.passed.length, entries: a.passed }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u2, { title: "Filtered: non-game", count: a.nonGames.length, entries: a.nonGames }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u2, {
                    title: "Filtered: matched a hardcoded observed app",
                    count: a.observedApps.length,
                    entries: a.observedApps,
                    renderMeta: u6,
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u2, {
                    title: "Filtered: blocklist",
                    count: a.blocked.length,
                    entries: a.blocked,
                    renderMeta: u3,
                }),
            ],
        }),
    });
}
var u8 = a(290136),
    u4 = a(893007),
    u9 = a(629584),
    u7 = a(600239),
    me = a(940622),
    mt = a(961895),
    ma = a(343991),
    mn = a(607027);
function ml() {
    (0, P.mM)(
        async () => {
            let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
            return (t) =>
                (0, r.jsx)(e, {
                    title: "No image or video files found!",
                    help: "Please drop one or more image or video files.",
                    ...t,
                });
        },
        { modalKey: ma.D },
    );
}
function mi(e) {
    (e.stopPropagation(), e.preventDefault());
}
let ms = (e) => {
    let { className: t, onDrop: a, children: n } = e,
        [l, i] = o.useState(!1),
        s = o.useRef(null),
        d = o.useCallback((e) => {
            (mi(e), i(!0), (0, P.Oo)(ma.D));
        }, []),
        c = o.useCallback((e) => {
            mi(e);
            let t = s.current,
                a = e.relatedTarget;
            (null != a && (null == t || t.contains(a))) || i(!1);
        }, []),
        u = o.useCallback(
            async (e) => {
                (mi(e), i(!1));
                let t = e.dataTransfer;
                if (null == t) return void ml();
                let n = await Promise.all(Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry())).then(
                    (e) => e.filter((e) => null != e),
                );
                n.length > 0 ? a(n) : ml();
            },
            [a],
        );
    return (0, r.jsxs)("div", {
        ref: s,
        className: ee()(t, mn.iE),
        onDragEnter: d,
        onDragOver: mi,
        onDragLeave: c,
        onDrop: u,
        children: [
            n,
            l &&
                (0, r.jsx)("div", {
                    className: mn.d2,
                    children: (0, r.jsxs)("div", {
                        className: mn.vW,
                        children: [
                            (0, r.jsx)(mt.A, { icons: eD.ir }),
                            (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Upload Shop Assets" }),
                            (0, r.jsxs)("div", {
                                className: mn.GA,
                                children: [
                                    (0, r.jsx)(x.E, {
                                        variant: "body-sm/normal",
                                        children: "Drop file(s) into this panel to preview Shop assets!",
                                    }),
                                    (0, r.jsxs)(x.E, {
                                        variant: "body-sm/normal",
                                        children: [
                                            "Click",
                                            (0, r.jsx)(u8.CircleQuestionIcon, {
                                                className: mn.q4,
                                                size: "xs",
                                                color: eZ.A.colors.TEXT_DEFAULT,
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
var mr = a(374380),
    mo = a(597404),
    md = a(455256);
let mc = new Set([
        eW.RN.HERO_BANNER_STATIC,
        eW.RN.HERO_LOGO,
        eW.RN.PDP_BACKGROUND,
        eW.RN.LOGO,
        eW.RN.MOBILE_BANNER,
        eW.RN.MOBILE_BACKGROUND,
    ]),
    mu = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    mm = { max: 5e6, warn: 2e6 },
    mh = { max: 3e6, warn: 1e6 },
    mp = { max: 2e6, warn: 1e6 },
    mx = { max: 1e6, warn: 5e5 },
    mg = { max: 25e4, warn: 5e4 },
    mv = {
        [md.J.PROFILE_EFFECT]: mm,
        [md.J.AVATAR_DECORATION]: mh,
        [md.J.PROFILE_FRAME]: mp,
        [eW.RN.HERO_BANNER_ANIMATED]: mm,
        [eW.RN.HERO_BANNER_RIVE]: mm,
        [eW.RN.CATALOG_BANNER_RIVE]: mm,
        [eW.RN.SHOP_BUTTON_BG_HOVER]: mh,
        [eW.RN.SHOP_BUTTON_BG_HOVER_DARK]: mh,
        [eW.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: mh,
        [eW.RN.SHOP_BUTTON_BG_RESTING]: mh,
        [eW.RN.SHOP_BUTTON_BG_RESTING_DARK]: mh,
        [eW.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: mh,
        [eW.RN.HERO_BANNER_STATIC]: mp,
        [eW.RN.UPSELL_BANNER]: mx,
        [eW.RN.UPSELL_BANNER_POPOUT]: mg,
        [eW.RN.MOBILE_BANNER]: mx,
        [eW.RN.MOBILE_BACKGROUND]: mg,
        [eW.RN.MOBILE_HERO]: mx,
        [eW.RN.PDP_BACKGROUND]: mg,
        [eW.RN.LOGO]: mg,
        [eW.RN.TAB_TOOLTIP]: mg,
    },
    mb = [eW.Kx.COLLECTION],
    mj = [eW.Kx.AVATAR_DECORATIONS, eW.Kx.FRAMES, eW.Kx.NAMEPLATES, eW.Kx.PROFILE_EFFECTS],
    mf = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/;
function my(e) {
    let { names: t, addError: a } = e,
        n = t.filter((e) => !mf.test(e));
    n.length > 0 && a("File names must be in lowercase snake case", n);
}
function mE(e, t, a, n, l) {
    let i = t.size,
        s = i > 1e6 ? `${(i / 1e6).toFixed(2)}MB` : `${(i / 1e3).toFixed(2)}KB`,
        r = `${l ?? t.name} - ${s}`;
    if (i > e.max) {
        let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
        a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
    } else i > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
}
function mC(e, t, a, n) {
    let l = mv[e];
    if (null != l) for (let e of t) e.name.endsWith(".txt") || mE(l, e, a, n);
}
function mS(e) {
    let t = eW.aL[e];
    return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
}
let m_ = ["png", "jpg"];
async function mN(e, t) {
    if (e.length < 2) return null;
    let a = (
        await Promise.all(
            e.map(async (e) => {
                try {
                    return t(
                        await (async function (e) {
                            let t = URL.createObjectURL(e);
                            try {
                                return await (0, eW.Lv)(t);
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
function mA(e) {
    return e.map((e) => `${e}px`).join(", ");
}
var mk = a(275537);
let mD = o.createContext({ setDropHandler: () => {} }),
    mI = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    mT = { id: "none", label: "[none selected]", value: null };
function mR() {
    (0, P.kB)(u7.k)
        ? (0, P.Oo)(u7.k)
        : (0, P.mM)(
              async () => {
                  let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: u7.k, onCloseRequest: () => (0, P.Oo)(u7.k) },
          );
}
function mO() {
    (0, P.kB)(u7.g)
        ? (0, P.Oo)(u7.g)
        : (0, P.mM)(
              async () => {
                  let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: u7.g, onCloseRequest: () => (0, P.Oo)(u7.g) },
          );
}
function mw() {
    let e = (0, eH.pF)(),
        { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, me.JE)(),
        n = o.useMemo(() => [mT, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: mk.kO,
              children: [
                  (0, r.jsx)(aK.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mk.wR,
                      children: [
                          (0, r.jsx)(en.D, {
                              variant: "heading-xs/semibold",
                              children: `Profile Effect (${e.length} to preview)`,
                          }),
                          (0, r.jsx)(eJ.K, {
                              variant: "icon-only",
                              size: "sm",
                              onClick: mO,
                              icon: u8.CircleQuestionIcon,
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
function mM() {
    let e = (0, me.bA)(),
        { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, me.JE)(),
        n = o.useMemo(() => [mT, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: mk.kO,
              children: [
                  (0, r.jsx)(aK.h, { size: 16 }),
                  (0, r.jsx)(en.D, {
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
function mP() {
    let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, me.JE)(),
        { avatarDecorationAssets: a } = (0, me.NE)(),
        n = o.useMemo(() => [mT, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
    return 0 === a.length
        ? null
        : (0, r.jsxs)("div", {
              className: mk.kO,
              children: [
                  (0, r.jsx)(aK.h, { size: 16 }),
                  (0, r.jsx)(en.D, {
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
let mL = new Set([eW.RN.HERO_BANNER_STATIC, eW.RN.HERO_BANNER_ANIMATED, eW.RN.HERO_BANNER_RIVE]);
function mU(e) {
    let { clearAssets: t, clearIgnoredFiles: a } = e,
        { collectionAssets: n } = (0, me.NE)(),
        {
            deleteCollectionAsset: l,
            clearAssets: i,
            heroLogoMaxHeight: s,
            setHeroLogoMaxHeight: d,
            heroResponsive: c,
            setHeroResponsive: u,
        } = (0, me.JE)(),
        h = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
        g = h.some((e) => e.value === eW.RN.HERO_LOGO),
        v = h.some((e) => mL.has(e.value)),
        b = o.useCallback((e) => l(e), [l]),
        j = o.useCallback(() => {
            (i(), t(), a());
        }, [i, t, a]);
    return 0 === h.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(aK.h, { size: 16 }),
                  (g || v) &&
                      (0, r.jsxs)("div", {
                          className: mk.v7,
                          children: [
                              g &&
                                  (0, r.jsxs)("div", {
                                      className: mk.cj,
                                      children: [
                                          (0, r.jsx)(x.E, {
                                              variant: "body-md/normal",
                                              className: mk.Me,
                                              children: "Logo size",
                                          }),
                                          (0, r.jsx)("div", {
                                              className: mk.TQ,
                                              children: (0, r.jsx)(u4.A, {
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  defaultValue: s ?? 90,
                                                  onChangeEnd: (e) => d(Math.round(e)),
                                                  formatValue: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                          }),
                                          (0, r.jsx)(x.E, { variant: "body-sm/normal", children: `${s ?? 90}px` }),
                                      ],
                                  }),
                              v &&
                                  (0, r.jsxs)("div", {
                                      className: mk.sy,
                                      children: [
                                          (0, r.jsx)(m.d, { checked: c, onChange: u }),
                                          (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Responsive Hero" }),
                                      ],
                                  }),
                          ],
                      }),
                  (0, r.jsx)(aK.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mk.wR,
                      children: [
                          (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Uploaded Assets" }),
                          (0, r.jsx)(p.$, { variant: "critical-primary", size: "sm", onClick: j, text: "Clear All" }),
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      children: h.map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: mk._0,
                                  children: [
                                      (0, r.jsx)(eJ.K, {
                                          variant: "icon-only",
                                          size: "sm",
                                          onClick: () => b(e.value),
                                          icon: er.P,
                                          "aria-label": "Remove asset",
                                      }),
                                      (0, r.jsx)(x.E, { variant: "body-md/normal", children: e.label }),
                                  ],
                              },
                              e.value,
                          ),
                      ),
                  }),
              ],
          });
}
function mG(e) {
    let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(aK.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mk.wR,
                      children: [
                          (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Ignored Files" }),
                          (0, r.jsx)(p.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              "li",
                              {
                                  className: mk.yk,
                                  children: (0, r.jsx)(x.E, { variant: "body-md/normal", children: e }),
                              },
                              `${e}-${t}`,
                          ),
                      ),
                  }),
              ],
          });
}
function mF() {
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
                                let l = mb.filter((e) => !n.has(e));
                                return (mj.some((e) => n.has(e)) || l.push(`at least one of: ${mj.join(", ")}`), l);
                            })(t);
                            a.length > 0 && s("Missing required directories", a);
                            let n = await (0, eW.eg)([t]);
                            ((function (e) {
                                let { files: t, addError: a, addWarning: n } = e;
                                for (let e of t.collectionFiles) {
                                    let t = (0, eW.pd)(e),
                                        l = null != t ? mv[t] : null;
                                    null != l && mE(l, e, a, n);
                                }
                                my({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                let l = new Set(t.collectionFiles.map((e) => (0, eW.pd)(e)).filter((e) => null != e)),
                                    i = Array.from(mc)
                                        .filter((e) => !l.has(e))
                                        .map(mS);
                                i.length > 0 && a("Missing required files", i);
                                let s = Object.values(eW.RN)
                                    .filter((e) => !mc.has(e))
                                    .filter((e) => !l.has(e))
                                    .map(mS);
                                s.length > 0 && n("Missing optional assets", s);
                            })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (my({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                        Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                            let [t, l] = e,
                                                i = l.map((e) => e.name);
                                            (my({
                                                names: i.map((e) => {
                                                    let t = e.indexOf("-");
                                                    return e.substring(0, t > 0 ? t : e.length);
                                                }),
                                                addError: a,
                                            }),
                                                mC(md.J.PROFILE_EFFECT, l, a, n));
                                            let s = mu
                                                .filter((e) => !i.some((t) => t.startsWith(e) && t.endsWith(".png")))
                                                .map((e) => `${t}/${e}`);
                                            (s.length > 0 && a("Missing required PFX files with prefix", s),
                                                i.some((e) => e.endsWith(".txt")) ||
                                                    a(
                                                        "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                        [t],
                                                    ));
                                            let r = i
                                                .filter((e) => !mu.some((t) => e.startsWith(t)) && !e.endsWith(".txt"))
                                                .map((e) => `${t}/${e}`);
                                            r.length > 0 && n("Contains unrecognized files", r);
                                        }));
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (my({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                        mC(md.J.AVATAR_DECORATION, t.avatarDecorationFiles, a, n));
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e,
                                        l = Object.keys(t.profileFrameDirsMap)
                                            .filter((e) => !mf.test(e))
                                            .map((e) => `${eW.Kx.FRAMES}/${e}`);
                                    l.length > 0 && a("File names must be in lowercase snake case", l);
                                    let i = mv[md.J.PROFILE_FRAME];
                                    Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                        let [t, l] = e,
                                            s = `${eW.Kx.FRAMES}/${t}`,
                                            r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                        ((null != l.previewFile && null != r && m_.includes(r)) ||
                                            a(
                                                "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                [`${s}/preview.{${m_.join("|")}}`],
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
                                            mf.test(l.previewFile.name) ||
                                            o.push(`${s}/${l.previewFile.name}`),
                                        l.layerFiles))
                                            mf.test(e.name) || o.push(`${s}/${t}/${e.name}`);
                                        o.length > 0 && a("File names must be in lowercase snake case", o);
                                        let d = [];
                                        for (let { file: e, folder: t } of l.layerFiles) {
                                            let { parsed: a, errorType: n } = (0, mo.Mf)(e.name);
                                            if (null == a) {
                                                let a = null != n ? mo.h4[n] : "invalid";
                                                d.push(`${s}/${t}/${e.name}: ${a}`);
                                            }
                                        }
                                        if ((d.length > 0 && a("Invalid profile frame layer filenames", d), null != i))
                                            for (let { file: e, folder: t } of (null != l.previewFile &&
                                                mE(i, l.previewFile, a, n, `${s}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                mE(i, e, a, n, `${s}/${t}/${e.name}`);
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
                                                let { parsed: a } = (0, mo.Mf)(t.name);
                                                if (a?.type !== mr.O.STAPLE) continue;
                                                let n = e.get(a.anchor) ?? [];
                                                (n.push(t), e.set(a.anchor, n));
                                            }
                                            for (let [n, l] of e) {
                                                let e = await mN(l, (e) => e.height);
                                                null != e &&
                                                    t(
                                                        "Staples with the same anchor (top/bottom) must all have the same height",
                                                        [`${a} (${String(n).toUpperCase()}) - ${mA(e)}`],
                                                    );
                                            }
                                        }
                                    })(n, s),
                                    (async function (e, t) {
                                        for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
                                            let e = n.layerFiles
                                                    .filter((e) => {
                                                        let { file: t } = e,
                                                            { parsed: a } = (0, mo.Mf)(t.name);
                                                        return (
                                                            a?.type === mr.O.STAPLE ||
                                                            a?.type === mr.O.BORDER ||
                                                            a?.type === mr.O.RAIL
                                                        );
                                                    })
                                                    .map((e) => {
                                                        let { file: t } = e;
                                                        return t;
                                                    }),
                                                l = await mN(e, (e) => e.width);
                                            null != l &&
                                                t("All layers (staples, borders, rails) must have the same width", [
                                                    `${a} - ${mA(l)}`,
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
        { setDropHandler: u } = o.useContext(mD),
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
                          className: mk._f,
                          children: [
                              (0, r.jsx)(x.E, {
                                  variant: "body-md/normal",
                                  color: d ? "text-feedback-critical" : "text-default",
                                  children: `${i.length} errors`,
                              }),
                              (0, r.jsx)(x.E, {
                                  variant: "body-md/normal",
                                  color: c ? "text-feedback-warning" : "text-default",
                                  children: `${s.length} warnings`,
                              }),
                              (0, r.jsx)(p.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                          ],
                      })
                    : (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Drop asset folder to validate." }),
                (0, r.jsx)(aK.h, { size: 16 }),
                d &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Errors" }),
                            (0, r.jsx)(aK.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mk.ck,
                                children: i.map((e, t) => {
                                    let [a, n] = e;
                                    return (0, r.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, r.jsx)(x.E, {
                                                    variant: "body-md/semibold",
                                                    color: "text-feedback-critical",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, r.jsx)("ul", {
                                                        className: mk.ck,
                                                        children: n.map((e, t) =>
                                                            (0, r.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, r.jsx)(x.E, {
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
                            (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Warnings" }),
                            (0, r.jsx)(aK.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mk.ck,
                                children: Object.entries(n).map((e, t) => {
                                    let [a, n] = e;
                                    return (0, r.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, r.jsx)(x.E, {
                                                    variant: "body-md/semibold",
                                                    color: "text-feedback-warning",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, r.jsx)("ul", {
                                                        className: mk.ck,
                                                        children: n.map((e, t) =>
                                                            (0, r.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, r.jsx)(x.E, {
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
function mB() {
    let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, me.JE)(),
        { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: i, processAndUpsertAssets: s } = (0, eW.ds)(),
        { setDropHandler: d } = o.useContext(mD),
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
                    className: mk.sy,
                    children: [
                        (0, r.jsx)(m.d, { checked: e, onChange: (e) => t(e) }),
                        (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Enable Preview" }),
                        (0, r.jsx)(eJ.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: mR,
                            icon: u8.CircleQuestionIcon,
                            "aria-label": "Open preview instructions",
                        }),
                    ],
                }),
                (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Drop files in this panel to begin preview." }),
                (0, r.jsx)(mw, {}),
                (0, r.jsx)(mM, {}),
                (0, r.jsx)(mP, {}),
                (0, r.jsx)(mU, { clearAssets: l, clearIgnoredFiles: i }),
                (0, r.jsx)(mG, { ignoredFiles: n, handleClearIgnoredFiles: i }),
            ],
        })
    );
}
function m$() {
    let [e, t] = o.useState("preview");
    return (0, r.jsxs)("div", {
        className: mk.kL,
        children: [
            (0, r.jsx)(u9.I, {
                options: mI,
                value: e,
                onChange: (e) => {
                    let { value: a } = e;
                    return t(a);
                },
                className: mk.Vj,
                optionClassName: mk.UK,
            }),
            (0, r.jsx)(aK.h, { size: 8 }),
            "preview" === e && (0, r.jsx)(mB, {}),
            "validate" === e && (0, r.jsx)(mF, {}),
            (0, r.jsx)(aK.h, { size: 16 }),
        ],
    });
}
let mV = (e) => {
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
    return (0, r.jsx)(mD.Provider, { value: l, children: (0, r.jsx)(ms, { onDrop: i, children: t }) });
};
var mW = a(663803),
    mH = a(110676),
    mz = a(590180),
    mK = a(335032);
function mY() {
    let e = (0, d.bG)([mz.A], () => mz.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: mK.k,
        children: [
            (0, r.jsx)(x.E, { variant: "body-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(mW.l, {
                value: e,
                onChange: (e) => {
                    (0, mH.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
}
var mq =
        (((n = {}).DEFAULT = "default"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    mJ = a(295811);
function mQ() {
    let e = (0, d.bG)([mJ.A], () => mJ.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(mq).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(j.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, mH.Or)(e);
        },
        selectionMode: "single",
    });
}
function mX(e) {
    let { className: t } = e,
        a = Object.keys(aL.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == a
        ? null
        : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(lW, { items: [a] }) });
}
var mZ = a(291052);
function m0(e) {
    let { title: t, expanded: a, onToggle: n, children: l } = e,
        i = o.useId();
    return (0, r.jsx)(ux.N, {
        isExpanded: a,
        className: mZ.uW,
        collapsibleContent: (0, r.jsx)("div", { id: i, className: mZ.f5, children: l }),
        children: () =>
            (0, r.jsxs)("button", {
                type: "button",
                onClick: n,
                "aria-expanded": a,
                "aria-controls": i,
                className: mZ.bV,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: t }),
                    (0, r.jsx)(sh._, { size: "sm", color: "currentColor", className: ee()(mZ.ai, { [mZ.hg]: a }) }),
                ],
            }),
    });
}
function m1() {
    let e = (0, d.bG)([lJ.A], () => lJ.A.get("shop_disable_cache")),
        t = (0, d.bG)([lJ.A], () => lJ.A.get("shop_include_unpublished")),
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
    return (0, r.jsx)(mV, {
        onDrop: i,
        children: (0, r.jsxs)("div", {
            className: mZ.Lm,
            children: [
                (0, r.jsxs)("div", {
                    className: mZ.dQ,
                    children: [
                        (0, r.jsx)(m.d, {
                            label: "Disable collectibles cache",
                            checked: e,
                            onChange: (e) => (0, lq.L)("shop_disable_cache", e),
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Show unpublished collectibles",
                            checked: t,
                            onChange: (e) => (0, lq.L)("shop_include_unpublished", e),
                        }),
                    ],
                }),
                (0, r.jsxs)(m0, {
                    title: "Layouts",
                    expanded: a.has("layouts"),
                    onToggle: () => l("layouts"),
                    children: [(0, r.jsx)(mX, {}), (0, r.jsx)(mQ, {}), (0, r.jsx)(mY, {})],
                }),
                (0, r.jsx)(m0, {
                    title: "Assets",
                    expanded: a.has("assets"),
                    onToggle: () => l("assets"),
                    children: (0, r.jsx)(m$, {}),
                }),
            ],
        }),
    });
}
let m2 = [
    { id: "unset", label: "Unset", value: c$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
    { id: "all", label: "All", value: c$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
    { id: "usersWithGame", label: "Users With Game", value: c$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
    { id: "none", label: "None", value: c$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
];
function m3() {
    let e = o.useRef(null),
        t = cH.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: ee()(t2.nd, nl.n),
        children: (0, r.jsxs)("div", {
            className: nl.k,
            children: [
                (0, r.jsx)(en.D, { variant: "heading-lg/medium", children: "Settings" }),
                (0, r.jsx)(j.l, {
                    label: "Receive DMs In Game",
                    options: m2,
                    value: t,
                    onSelectionChange: cH.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var m6 = a(828596),
    m5 = a(937427),
    m8 = a(213682);
function m4() {
    let e = (0, d.bG)([m5.A], () => m5.A.getPromotionIdOverride()),
        [t, a] = o.useState(e ?? ""),
        n = o.useCallback(() => {
            (a(""), (0, m6.J_)(void 0));
        }, []),
        l = o.useCallback(() => {
            let e = t.trim();
            (0, m6.J_)("" !== e ? e : void 0);
        }, [t]),
        i = o.useCallback((e) => {
            a(e);
        }, []);
    return (0, r.jsxs)("div", {
        className: m8.k,
        children: [
            (0, r.jsx)(f.k, {
                fullWidth: !0,
                label: `Promotion ID Override (staff)${null != e ? ` \u{2014} active: ${e}` : ""}`,
                value: t,
                onChange: i,
                placeholder: "Paste a storefront promotion id",
            }),
            (0, r.jsxs)("div", {
                className: m8.o,
                children: [
                    (0, r.jsx)(p.$, { variant: "critical-primary", text: "Clear", onClick: n }),
                    (0, r.jsx)(p.$, { variant: "primary", text: "Set", onClick: l }),
                ],
            }),
        ],
    });
}
var m9 = a(209612);
function m7() {
    return (0, r.jsx)("div", { className: m9.n, children: (0, r.jsx)(m4, {}) });
}
var he = a(278416),
    ht = a(53938);
function ha(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function hn(e) {
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
        (0, r.jsx)(g.Ip, { className: ht.Dx, children: (0, r.jsx)(nc.A, { data: n }) })
    );
}
function hl(e) {
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
                for (let e of n.preDispatches ?? []) C.h.dispatch(e);
                (C.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), s());
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
                for (let t of e.preDispatches ?? []) C.h.dispatch(t);
                (C.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), s());
            } catch (e) {
                i(e instanceof Error ? e.message : String(e));
            }
        }, [t, s]);
    return (0, r.jsxs)("div", {
        className: ee()(ht.Dx, ht.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: ht.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: ht.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: ht.KA,
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
let hi = [
    {
        key: "Name",
        cellClassName: ht.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function hs(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: ng.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: ht.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(hn, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: ng.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(hn, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: ng.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: ht.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(hl, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: i } = (0, nx.A)({ tabs: n }, []);
    return (0, r.jsxs)(np, {
        className: ht.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(nd.Ay, {
                className: ee()(t2.jr, ht.nZ),
                children: [
                    (0, r.jsx)(nd.Ay.Icon, { icon: he.TagIcon, tooltip: t.getName() }),
                    (0, r.jsx)(nd.Ay.Title, { children: t.getName() }),
                ],
            }),
            i({ store: t }),
        ],
    });
}
function hr() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = d.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(ha), [n])
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
        className: ee()(t2.nd, ht.nd),
        children: [
            (0, r.jsx)("div", {
                className: ht.KE,
                children: (0, r.jsx)(nz.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(t3, { columns: hi, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != c &&
                (0, r.jsx)(hs, { store: c, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, i),
        ],
    });
}
var ho = a(435462),
    hd = a(176781),
    hc = a(173936),
    hu = a(292801),
    hm = a(849516),
    hh = a(606096),
    hp = a(406810),
    hx = a(152367),
    hg = a(27232),
    hv = a(8062),
    hb = a(739187),
    hj = a(378604);
let hf = {
        message: {},
        success: { variant: "success" },
        failure: { variant: "critical" },
        clip: { icon: hd.x },
        link: { icon: hc.LinkIcon },
        forward: { icon: hu.t, iconColor: eZ.A.colors.ICON_FEEDBACK_POSITIVE },
        invite: { icon: hm.u, iconColor: eZ.A.colors.ICON_BRAND },
        bookmark: { icon: hh.BookmarkIcon },
        clock: { icon: hp.ClockIcon },
        ai: { icon: hx.D },
        favorite: { icon: hg.StarIcon },
    },
    hy = Object.keys(hf),
    hE = hy.map((e) => ({ label: e, value: e, id: e })),
    hC = [
        { label: "top", value: "top", id: "top" },
        { label: "bottom", value: "bottom", id: "bottom" },
    ],
    hS = Object.values(ev.BRT).map((e) => ({ label: e, value: e, id: e }));
function h_(e) {
    let { name: t, currentText: a, queueLength: n } = e,
        l = null != a;
    return (0, r.jsxs)("div", {
        className: ee()(hj.M_, { [hj.wl]: l }),
        children: [
            (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: t }),
            (0, r.jsx)(x.E, {
                variant: "body-sm/normal",
                color: l ? "text-feedback-positive" : "text-muted",
                children: l ? `showing: \u{201C}${a}\u{201D}` : "idle",
            }),
            (0, r.jsxs)(x.E, { variant: "body-sm/normal", color: "text-muted", children: ["queued: ", n] }),
        ],
    });
}
function hN() {
    let [e, t] = o.useState("The quick brown fox jumps over the lazy dog"),
        [a, n] = o.useState("success"),
        [l, i] = o.useState("top"),
        [s, d] = o.useState(ev.BRT.APP),
        [c, u] = o.useState(String(3e3)),
        m = hv.a[s],
        h = (0, ho.WE)((e) => e.currentToastMap.get(m)?.toast),
        x = (0, ho.WE)((e) => e.queuedToastsMap.get(m)?.length ?? 0);
    function v(e, t) {
        return { ...hf[t], text: e, surface: m, position: l, duration: Number(c) > 0 ? Number(c) : 3e3 };
    }
    return (0, r.jsxs)(g.Ip, {
        className: hj.l$,
        children: [
            (0, r.jsxs)("section", {
                className: hj.uW,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Toast store" }),
                    (0, r.jsx)("div", {
                        className: hj.zQ,
                        children: (0, r.jsx)(h_, { name: "Mana store", currentText: h?.text, queueLength: x }),
                    }),
                ],
            }),
            (0, r.jsxs)("section", {
                className: hj.uW,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Config" }),
                    (0, r.jsxs)("div", {
                        className: hj.ne,
                        children: [
                            (0, r.jsx)(f.k, { label: "Text", value: e, onChange: t }),
                            (0, r.jsx)(aN.Z, {
                                label: "Type",
                                options: hE,
                                value: a,
                                onSelectionChange: n,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(aN.Z, {
                                label: "Position",
                                options: hC,
                                value: l,
                                onSelectionChange: i,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(aN.Z, {
                                label: "App context",
                                options: hS,
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
                className: hj.uW,
                children: [
                    (0, r.jsx)(en.D, { variant: "heading-sm/semibold", children: "Show" }),
                    (0, r.jsxs)("div", {
                        className: hj.Uo,
                        children: [
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Show toast",
                                onClick: () => (0, l3.P0)(v(e, a)),
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                text: "Queue 3",
                                onClick: () => {
                                    ((0, l3.P0)(v(`${e} (1 of 3)`, a)),
                                        (0, l3.P0)(v(`${e} (2 of 3)`, a)),
                                        (0, l3.P0)(v(`${e} (3 of 3)`, a)));
                                },
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                text: "Every type",
                                onClick: () => {
                                    for (let t of hy) (0, l3.P0)(v(`${t}: ${e}`, t));
                                },
                            }),
                            (0, r.jsx)(p.$, { variant: "secondary", text: "Pop current", onClick: () => (0, hb.V)(s) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var hA = a(91871),
    hk = a.n(hA);
let hD = [
        {
            key: "ID",
            cellClassName: lt.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "Bucket",
            cellClassName: lt.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "Timestamp",
            cellClassName: lt.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    hI = [
        {
            id: "details",
            name: "Details",
            group: ng.fu.NONE,
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
                    d = nF()(i);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(nd.Ay, {
                            className: ee()(t2.jr, lt.nZ),
                            children: [
                                (0, r.jsx)(nd.Ay.Icon, { icon: nV.U, tooltip: t }),
                                (0, r.jsx)(nd.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(n9, {
                            className: lt.ZK,
                            children: [
                                (0, r.jsx)(n7, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: i.toISOString(),
                                        title: (0, nQ.i$)(d, "LLLL"),
                                        children: (0, nQ.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(n7, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(n7, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(n7, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(n7, { name: "Override", children: (0, r.jsx)(le, { value: a.override }) }),
                                (0, r.jsx)(n7, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(n7, { name: "Excluded", children: (0, r.jsx)(le, { value: l }) }),
                                (0, r.jsx)(n7, { name: "Previously tracked", children: (0, r.jsx)(le, { value: o }) }),
                                (0, r.jsx)(n7, { name: "Location", children: (0, r.jsx)("code", { children: s }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function hT() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, d.yK)([n8], () => n8.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || hk()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [i, s] = o.useState(void 0),
        c = l.find((e) => e.key === i),
        { TabBar: u, renderSelectedTab: m } = (0, nx.A)({ tabs: hI }, []),
        h = (0, d.bG)([n8], () => n8.trackTriggers),
        p = o.useCallback((e) => {
            C.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = h ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: ee()(t2.nd, lt.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lt.rh,
                children: [
                    (0, r.jsx)(id.m, {
                        text: x,
                        children: (0, r.jsx)(eJ.K, {
                            size: "sm",
                            variant: h ? "active" : "primary",
                            icon: h ? iu.PauseIcon : ic.PlayIcon,
                            "aria-label": x,
                            onClick: () => p(!h),
                        }),
                    }),
                    (0, r.jsx)(nz.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eJ.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": nk.intl.string(nk.t.VkKicb),
                        icon: nH.TrashIcon,
                        onClick: el.eY,
                    }),
                ],
            }),
            (0, r.jsx)(t3, { columns: hD, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != c &&
                (0, r.jsxs)(np, {
                    className: lt.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(u, {}), m({ loggedTrigger: c })],
                }),
        ],
    });
}
var hR = a(324861),
    hO = a(903162);
let hw = function () {
        let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, hR.A)();
        return (0, r.jsx)("div", {
            className: hO.k,
            children: (0, r.jsxs)(u.n, {
                label: "Virtual Currency Configuration",
                description: "Click the button below to reset your onboarding state for Virtual Currency.",
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(p.$, {
                            text: "Reset Onboarding State",
                            onClick: () => {
                                (e(), t(), (0, a3.pX)(ev.BVt.APP));
                            },
                        }),
                    }),
                    (0, r.jsx)(ea.w, {
                        type: "info",
                        message:
                            "Your may have to refresh your client after being redirected to the main application in order to see these",
                        role: "none",
                    }),
                ],
            }),
        });
    },
    hM = [
        ["codecH264", "H264"],
        ["codecH265", "H265"],
        ["codecAv1", "AV1"],
    ],
    hP = [
        ["encNvidiaDx11", "nvidia-dx11"],
        ["encNvidiaCuda", "nvidia-cuda"],
        ["encAmdDx11", "amd-dx11"],
        ["encIntelDx11", "intel-dx11"],
        ["encIntelCpu", "intel-cpu"],
        ["encWmfCpu", "wmf-cpu"],
        ["encWmfGpu", "wmf-gpu"],
        ["encWmfDx11", "wmf-dx11"],
    ],
    hL = [
        ["capGraphicsCapture", "deny-graphics-capture", "whenFalse"],
        ["capDxgi", "deny-dxgi", "whenFalse"],
        ["capGdi", "deny-gdi", "whenFalse"],
        ["capVideoHook", "deny-video-hook", "whenFalse"],
        ["gdiForceBitblt", "gdi-force-bitblt", "whenTrue"],
        ["bypassHybridGpuFpsRestriction", "bypass-hybrid-gpu-fps", "whenTrue"],
        ["allowHdr", "deny-hdr", "whenFalse"],
    ],
    hU = {
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
    hG = { ...hU };
function hF(e, t) {
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
let hB = !1;
function h$() {
    if (hB) return !0;
    if (!k.Ay.isEnabled()) return !1;
    try {
        let e = k.Ay.getMediaEngine();
        return (
            e.on(os.bg.Connection, () => {
                nr.A.isDeveloper && hV();
            }),
            e.once(os.bg.Destroy, () => {
                hB = !1;
            }),
            (hB = !0),
            !0
        );
    } catch {
        return !1;
    }
}
function hV() {
    if (nr.A.isDeveloper && h$())
        try {
            var e;
            let t =
                    ((e = hG),
                    {
                        overrideDeniedVideoCodecs: hF(e, hM),
                        overrideDeniedVideoEncoders: hF(e, hP),
                        captureOverrides: hL
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
                a = k.Ay.getMediaEngine();
            (a.eachConnection((e) => {
                e.setAudioVideoOverridesTransport(t);
            }),
                a.setClipsCaptureOverrides(t.captureOverrides));
        } catch {}
}
class hW extends d.Ay.DeviceSettingsStore {
    static displayName = "AudioVideoOverridesStore";
    static persistKey = "AudioVideoOverridesStore";
    initialize(e) {
        (this.waitFor(nr.A),
            (hG = null != e ? { ...hU, ...e } : { ...hU }),
            hV(),
            hB ||
                k.Ay.addChangeListener(function e() {
                    h$() && (hV(), k.Ay.removeChangeListener(e));
                }));
    }
    getUserAgnosticState() {
        return hG;
    }
    getSnapshot() {
        return hG;
    }
}
let hH = new hW(C.h, {
    AUDIO_VIDEO_OVERRIDES_UPDATE: function (e) {
        if (!nr.A.isDeveloper) return !1;
        ((hG = { ...hG, ...e.partial }), hV());
    },
});
var hz = a(731854);
let hK = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    hY = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    hq = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    hJ = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function hQ(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(tX.B, {
        gap: 8,
        children: [
            (0, r.jsx)(x.E, { variant: "body-lg/semibold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(
                    oo.S,
                    {
                        label: a,
                        checked: !!n[t],
                        onChange: () => {
                            var e;
                            return (
                                (e = { [t]: !n[t] }),
                                void C.h.dispatch({ type: "AUDIO_VIDEO_OVERRIDES_UPDATE", partial: e })
                            );
                        },
                    },
                    t,
                );
            }),
        ],
    });
}
function hX() {
    let e = (0, d.bG)([hH], () => hH.getSnapshot()),
        t = (0, d.bG)([k.Ay], () => k.Ay.supports(hz.O5.VIDEO));
    return (0, r.jsxs)(g.Ip, {
        className: t2.nd,
        children: [
            (0, r.jsx)(b.c, { gap: 16 }),
            (0, r.jsx)(hQ, { title: "Video Codecs (Sender)", toggles: hK, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hQ, { title: "Video Encoders", toggles: hY, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hQ, { title: "Capture Sources", toggles: hq, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hQ, { title: "Capture Options", toggles: hJ, state: e }),
                      ],
                  })
                : null,
        ],
    });
}
var hZ = a(109445);
function h0() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, i] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        s = "processing" === l.status;
    return (0, r.jsx)(g.Ip, {
        className: t2.nd,
        children: (0, r.jsxs)("div", {
            className: hZ.l7,
            children: [
                (0, r.jsx)(x.E, { variant: "body-lg/semibold", children: "Batch Audio Processor" }),
                (0, r.jsx)(x.E, {
                    variant: "body-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(tX.B, {
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
                                let e = await E.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(tX.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(f.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await E.A.fileManager.showOpenDialog({
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
                              (k.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  i((e) => ({ ...e, status: "cancelled" })));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (i({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  k.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)(tX.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(x.E, {
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
                                            className: hZ.TZ,
                                            children: (0, r.jsxs)(x.E, {
                                                variant: "body-xs/normal",
                                                className: e.success ? hZ.$D : hZ.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(x.E, {
                                    variant: "body-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var h1 = a(395771),
    h2 = a(207228),
    h3 = a(533841);
let h6 = { appId: "0", appName: "DevTools" },
    h5 = { width: 0, height: 0, intervalMs: 1e3 },
    h8 = (0, F.v)(() => ({ latestUrl: null, received: 0, log: [] }));
function h4(e) {
    let t = h8.getState().latestUrl;
    (h8.setState((t) => {
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
function h9(e) {
    let { width: t, height: a, intervalMs: n } = e;
    return (0, h2.it)(h6, { ...(t > 0 || a > 0 ? { width: t, height: a } : {}), intervalMs: n }, h4);
}
let h7 = {
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
function pe(e) {
    let t = parseInt(e, 10);
    return Number.isFinite(t) && t > 0 ? t : 0;
}
function pt() {
    let [e, t] = (0, sV.V)("DevToolsConjurePanel_settings", h5),
        a = e ?? h5,
        { latestUrl: n, log: l } = h8(),
        i = (0, d.bG)([h1.A], () => h1.A.isCapturing()),
        s = (0, h2.y8)(),
        c = (function () {
            let [e, t] = o.useState(null);
            return (
                o.useEffect(() => {
                    let e = !1;
                    async function a() {
                        let a = await (0, h2.Az)();
                        e || t(a);
                    }
                    a();
                    let n = setInterval(a, 1e3);
                    return () => {
                        ((e = !0), clearInterval(n));
                    };
                }, []),
                e ?? h7
            );
        })(),
        u = c.encodeFailed && !i;
    function h(e) {
        let n = { ...a, ...e };
        (t(n), i && h9(n));
    }
    return (0, r.jsx)(g.Ip, {
        className: t2.nd,
        children: (0, r.jsxs)(tX.B, {
            gap: 12,
            className: h3.l7,
            children: [
                (0, r.jsx)(x.E, { variant: "body-lg/semibold", children: "Snapshot" }),
                !s &&
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "This native build does not support snapshots.",
                    }),
                u &&
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Snapshots turned off because PNG encoding failed. Turn capture on to try again.",
                    }),
                (0, r.jsxs)(tX.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "Stats" }),
                        (0, r.jsxs)(x.E, {
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
                        (0, r.jsxs)(x.E, {
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
                (0, r.jsx)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children:
                        "PNG snapshots of the detected game. Frames from anything else being captured are dropped. 0x0 is the source resolution.",
                }),
                (0, r.jsxs)(tX.B, {
                    direction: "horizontal",
                    gap: 8,
                    children: [
                        (0, r.jsx)(f.k, {
                            label: "Width",
                            type: "number",
                            min: 0,
                            value: a.width.toString(),
                            onChange: (e) => h({ width: pe(e) }),
                        }),
                        (0, r.jsx)(f.k, {
                            label: "Height",
                            type: "number",
                            min: 0,
                            value: a.height.toString(),
                            onChange: (e) => h({ height: pe(e) }),
                        }),
                        (0, r.jsx)(f.k, {
                            label: "Interval (ms)",
                            type: "number",
                            min: 0,
                            value: a.intervalMs.toString(),
                            onChange: (e) => h({ intervalMs: pe(e) }),
                        }),
                    ],
                }),
                (0, r.jsx)(m.d, {
                    label: "Capture",
                    checked: i,
                    disabled: !s,
                    onChange: function (e) {
                        e ? h9(a) : (0, h2.ik)();
                    },
                }),
                null != n
                    ? (0, r.jsx)("img", { className: h3.P9, src: n, alt: "Latest snapshot" })
                    : (0, r.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: "No snapshot yet." }),
                l.length > 0 &&
                    (0, r.jsxs)(tX.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "Log" }),
                            (0, r.jsx)("div", {
                                className: h3.Rm,
                                children: l.map((e) =>
                                    (0, r.jsx)(
                                        x.E,
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
var pa = a(207898),
    pn = a.n(pa),
    pl = a(32880),
    pi = a(827343),
    ps = a(964486),
    pr = a(602674),
    po = a(625841),
    pd = a(74848),
    pc = a(913367);
function pu(e) {
    return `${e.toFixed(0)}%`;
}
function pm(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(x.E, { variant: "body-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(x.E, {
                variant: "body-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(x.E, { variant: "body-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(x.E, { variant: "body-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(x.E, {
                variant: "body-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(x.E, {
                variant: "body-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function ph(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(ux.N, {
        collapsibleContent: (0, r.jsx)(pm, { recording: t }),
        children: (e) => {
            let { onClick: i } = e;
            return (0, r.jsxs)(et.D, {
                onClick: i,
                children: [
                    (0, r.jsxs)(x.E, {
                        variant: "body-sm/semibold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(et.D, {
                        tag: "span",
                        onClick: (e) => {
                            (e.stopPropagation(), a ? l() : n(t));
                        },
                        children: a
                            ? (0, r.jsx)(iu.PauseIcon, { size: "xxs" })
                            : (0, r.jsx)(ic.PlayIcon, { size: "xxs" }),
                    }),
                    (0, r.jsx)(et.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            (e.stopPropagation(),
                                (a = new Blob([pn()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n));
                        },
                        children: (0, r.jsx)(pl.DownloadIcon, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function pp() {
    let { name: e } = (0, pd.x5)(hz.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        i = (0, d.bG)([k.Ay], () => k.Ay.getKrispSuppressionLevel()),
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
            noiseSuppression: A,
            noiseSuppressionSupported: D,
            noiseCancellationSupported: I,
            noiseCancellationEnableStats: T,
        } = (0, d.cf)([k.Ay], () => ({
            krispModels: k.Ay.getKrispModels(),
            krispModelOverride: k.Ay.getKrispModelOverride(),
            echoCancellation: k.Ay.getEchoCancellation(),
            autoThreshold: k.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: k.Ay.getModeOptions().vadUseKrisp,
            inputMode: k.Ay.getMode(),
            vadKrispActivationThreshold: k.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: k.Ay.getNoiseCancellation(),
            noiseSuppression: k.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: k.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: k.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: k.Ay.getKrispEnableStats(),
        })),
        R = N ? "KRISP" : A ? "STANDARD" : "NONE",
        O = (0, pr.v)(),
        w = o.useCallback(() => {
            (u.current?.stop(), (u.current = null), c(null));
        }, []);
    function M() {
        k.Ay.getMediaEngine().stopRecordingRawSamples();
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
        (0, ps.l0)(() => {
            pi.default.setMode(k.Ay.getMode(), { vadKrispActivationThreshold: void 0 });
        }));
    let L = [];
    return (
        I && L.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        D && L.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        L.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(g.Ip, {
            className: t2.nd,
            children: (0, r.jsxs)("div", {
                className: pc.l,
                children: [
                    (0, r.jsx)(x.E, { variant: "body-lg/semibold", children: "Krisp Tester" }),
                    (0, r.jsx)(po.U, {
                        label: "Input Device",
                        deviceType: hz.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(j.l, {
                        label: "Noise Cancellation",
                        value: R,
                        onSelectionChange: (e) => {
                            (pi.default.setNoiseCancellation("KRISP" === e),
                                pi.default.setNoiseSuppression("STANDARD" === e));
                        },
                        options: L,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u4.A, {
                                    label: "Krisp Suppression Level",
                                    defaultValue: i,
                                    onChangeEnd: pi.default.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                    formatValue: pu,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: f,
                                    options: b.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        pi.default.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(m.d, {
                                    label: "Enable Stats",
                                    checked: T,
                                    onChange: (e) => pi.default.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    y === hz.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.d, {
                                    label: "Auto Threshold",
                                    checked: C,
                                    onChange: (e) => pi.default.setMode(hz.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                C &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(m.d, {
                                                label: "Use Krisp VAD",
                                                checked: S,
                                                onChange: (e) =>
                                                    pi.default.setMode(hz.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            S &&
                                                (0, r.jsx)(u4.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    defaultValue: _,
                                                    onChangeEnd: (e) =>
                                                        pi.default.setMode(hz.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                    step: 0.01,
                                                    formatValue: (e) => pu(100 * e),
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    (0, r.jsx)(m.d, {
                        label: "Echo Cancellation",
                        checked: E,
                        onChange: (e) => pi.default.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(tX.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(nB.$n, {
                                color: t ? nB.$n.Colors.RED : nB.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          (w(),
                                              a(!0),
                                              pi.default.setLoopback("krisp_test", !0),
                                              k.Ay.getMediaEngine().startRecordingRawSamples((t, n, s) => {
                                                  (a(!1), pi.default.setLoopback("krisp_test", !1));
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
                    (0, r.jsx)(u4.A, {
                        label: "Volume",
                        defaultValue: p,
                        onChange: function (e) {
                            null != h.current && ((h.current.gain.value = e), v(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                        step: 0.01,
                        formatValue: (e) => pu(100 * e),
                    }),
                    (0, r.jsxs)(tX.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(ph, { recording: e, playing: e === s, onPlay: P, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var px = a(237528),
    pg = a(833473),
    pv = a(738566),
    pb = a(829997),
    pj = a(598939);
let pf = {
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
    py = Object.entries(pf).map((e) => {
        let [t, { label: a }] = e;
        return { id: t, value: t, label: a };
    }),
    pE = o.createContext(null);
function pC(e) {
    let t = o.useContext(pE);
    if (null == t) throw Error("useSpatialAudioField must be used inside SpatialAudioEditorContext");
    return {
        value: e5().get(t.resolved, e),
        overridden: t.isOverridden(e),
        set: (a) => t.set(e, a),
        reset: () => t.reset(e),
    };
}
function pS(e, t) {
    let a = e5().cloneDeep(e),
        n = e5().toPath(t);
    e5().unset(a, n);
    for (let e = n.length - 1; e > 0; e--) {
        let t = n.slice(0, e);
        if (!e5().isEmpty(e5().get(a, t))) break;
        e5().unset(a, t);
    }
    return a;
}
function p_(e) {
    let { label: t, description: a, value: n, overridden: l, onReset: i, children: s } = e;
    return (0, r.jsxs)("div", {
        className: ee()(pj.nM, { [pj.Je]: l }),
        children: [
            (0, r.jsxs)("div", {
                className: pj.uV,
                children: [
                    (0, r.jsx)(x.E, { variant: "body-md/medium", color: "text-strong", className: pj.xZ, children: t }),
                    null != n ? (0, r.jsx)(x.E, { variant: "mono-md/bold", color: "text-muted", children: n }) : null,
                    (0, r.jsx)(pN, { overridden: l, onReset: i, label: t }),
                ],
            }),
            null != a ? (0, r.jsx)(x.E, { variant: "body-xs/normal", color: "text-subtle", children: a }) : null,
            s,
        ],
    });
}
function pN(e) {
    let { overridden: t, onReset: a, label: n } = e;
    return (0, r.jsx)("div", {
        className: ee()(pj.cL, { [pj.YF]: !t }),
        "aria-hidden": !t,
        children: (0, r.jsx)(l6.Q, {
            variant: "secondary",
            textVariant: "body-xs/medium",
            text: "Reset",
            "aria-label": `Reset ${n}`,
            disabled: !t,
            onClick: a,
        }),
    });
}
function pA(e) {
    let { path: t, label: a, description: n } = e,
        l = pC(t);
    return (0, r.jsxs)("div", {
        className: ee()(pj.nM, pj.jC, { [pj.Je]: l.overridden }),
        children: [
            (0, r.jsx)("div", {
                className: pj.L$,
                children: (0, r.jsx)(m.d, { label: a, description: n, checked: l.value, onChange: l.set }),
            }),
            (0, r.jsx)(pN, { overridden: l.overridden, onReset: l.reset, label: a }),
        ],
    });
}
function pk(e) {
    let { path: t, label: a, description: n, min: l, max: i, step: s, decimals: d, unit: c = "" } = e,
        u = pC(t),
        [m, h] = o.useState(null),
        [p, x] = o.useState(u.value);
    function g(e) {
        return e5().clamp(Math.round(e / s) * s, l, i);
    }
    function v(e) {
        return `${e.toFixed(d)}${c}`;
    }
    p !== u.value && (x(u.value), h(null));
    let b = m ?? u.value;
    return (0, r.jsx)(p_, {
        label: a,
        description: n,
        value: v(b),
        overridden: u.overridden,
        onReset: u.reset,
        children: (0, r.jsx)("div", {
            className: pj.aw,
            children: (0, r.jsx)(u4.A, {
                value: b,
                minValue: l,
                maxValue: i,
                step: s,
                onChange: (e) => h(g(e)),
                onChangeEnd: (e) => {
                    (h(null), u.set(g(e)));
                },
                formatValue: (e) => v(g(e)),
                "aria-label": a,
            }),
        }),
    });
}
function pD(e) {
    let { label: t, value: a, onChange: n, min: l, max: i, step: s } = e,
        [d, c] = o.useState(null),
        [u, m] = o.useState(a);
    u !== a && (m(a), c(null));
    let h = d?.value != null;
    return (0, r.jsx)(nO.Q, {
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
function pI(e) {
    let { keys: t, labels: a, value: n, onChange: l, min: i, max: s, step: o } = e;
    return (0, r.jsx)("div", {
        className: pj.uY,
        children: t.map((e) =>
            (0, r.jsx)(
                pD,
                { label: a[e], value: n[e], min: i, max: s, step: o, onChange: (t) => l({ ...n, [e]: t }) },
                e,
            ),
        ),
    });
}
let pT = ["low", "mid", "high"],
    pR = { low: "Low", mid: "Mid", high: "High" },
    pO = ["x", "y", "z"],
    pw = { x: "X (m)", y: "Y (m)", z: "Z (m)" };
function pM(e) {
    let { path: t, label: a, description: n } = e,
        l = pC(t);
    return (0, r.jsx)(p_, {
        label: a,
        description: n,
        overridden: l.overridden,
        onReset: l.reset,
        children: (0, r.jsx)(pI, { keys: pT, labels: pR, value: l.value, onChange: l.set, min: 0, step: 1e-4 }),
    });
}
function pP(e) {
    let { path: t, label: a, description: n } = e,
        l = pC(t);
    return (0, r.jsx)(p_, {
        label: a,
        description: n,
        overridden: l.overridden,
        onReset: l.reset,
        children: (0, r.jsx)(pI, { keys: pO, labels: pw, value: l.value, onChange: l.set, step: 0.5 }),
    });
}
function pL() {
    let e = pC("binaural.hrtfFile"),
        [{ directory: t, files: a }, n] = o.useState(() => k.Ay.getMediaEngine().getSpatialAudioHrtfFiles()),
        l = "" !== e.value && !a.includes(e.value),
        i = [
            { id: "", value: "", label: "Built-in" },
            ...a.map((e) => ({ id: e, value: e, label: e })),
            ...(l ? [{ id: e.value, value: e.value, label: `${e.value} (missing)` }] : []),
        ];
    return (0, r.jsxs)(p_, {
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
                ? (0, r.jsxs)(tX.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 8,
                      wrap: !0,
                      children: [
                          (0, r.jsxs)(x.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: [
                                  "Only .sofa files in ",
                                  (0, r.jsx)("code", { children: t }),
                                  " can be loaded.",
                              ],
                          }),
                          (0, r.jsx)(l6.Q, {
                              variant: "secondary",
                              textVariant: "body-xs/medium",
                              text: "Refresh",
                              onClick: () => n(k.Ay.getMediaEngine().getSpatialAudioHrtfFiles()),
                          }),
                          (0, r.jsx)(l6.Q, {
                              variant: "secondary",
                              textVariant: "body-xs/medium",
                              text: "Show folder",
                              onClick: () => E.A.fileManager.showItemInFolder(t),
                          }),
                      ],
                  })
                : (0, r.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-subtle",
                      children: "This media engine can't load HRTF files.",
                  }),
        ],
    });
}
let pU = ["low", "mid", "high", "scattering"],
    pG = { low: "Absorb low", mid: "Absorb mid", high: "Absorb high", scattering: "Scattering" };
function pF(e) {
    var t;
    let { path: a, label: n } = e,
        l = pC(a),
        { absorption: i, scattering: s } = l.value,
        o = ((t = l.value), Object.keys(pf).find((e) => e5().isEqual(pf[e].material, t)));
    return (0, r.jsxs)(p_, {
        label: n,
        value: null != o ? pf[o].label : "Custom",
        overridden: l.overridden,
        onReset: l.reset,
        children: [
            (0, r.jsx)(j.l, {
                label: `${n} preset`,
                hideLabel: !0,
                placeholder: "Custom",
                selectionMode: "single",
                options: py,
                value: o,
                onSelectionChange: (e) => l.set(pf[e].material),
                fullWidth: !0,
            }),
            (0, r.jsx)(pI, {
                keys: pU,
                labels: pG,
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
function pB() {
    let { value: e } = pC("reflections.room.minCorner"),
        { value: t } = pC("reflections.room.maxCorner"),
        a = t.x - e.x,
        n = t.y - e.y,
        l = t.z - e.z,
        i = a > 0 && n > 0 && l > 0;
    return (0, r.jsx)(x.E, {
        variant: "body-sm/normal",
        color: i ? "text-muted" : "text-feedback-critical",
        children: i
            ? `${a.toFixed(1)} \xd7 ${n.toFixed(1)} \xd7 ${l.toFixed(1)} m \xb7 floor ${(a * l).toFixed(1)} m\xb2`
            : "Every axis of the max corner must be greater than the min corner.",
    });
}
function p$(e) {
    let t,
        { overrideCount: a, onResetAll: n } = e,
        { supported: l, active: i } = (0, d.cf)([k.Ay, pg.A], () => ({
            supported: k.Ay.supports(hz.O5.SPATIAL_AUDIO),
            active: pg.A.isSpatialAudioActive(),
        }));
    return (
        (t = l
            ? i
                ? (0, r.jsx)(px.v, { text: "Spatial on", variant: "greenLight" })
                : (0, r.jsx)(px.v, { text: "Spatial off", variant: "grayLight" })
            : (0, r.jsx)(px.v, { text: "Unsupported", variant: "redLight" })),
        (0, r.jsxs)(tX.B, {
            gap: 8,
            children: [
                (0, r.jsxs)(tX.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    wrap: !0,
                    children: [
                        (0, r.jsxs)(tX.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 8,
                            children: [
                                (0, r.jsx)(en.D, { variant: "heading-lg/semibold", children: "Spatial Audio" }),
                                t,
                                a > 0 ? (0, r.jsx)(px.v, { text: `${a} overridden`, variant: "blurpleLight" }) : null,
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
                (0, r.jsx)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children:
                        "Live spatial audio overrides, layered over the defaults and the voice settings toggle. A spatial Frame replaces them when it starts and clears them when it stops. Fields and Reset compare against the selected profile. They apply immediately and last until the client reloads.",
                }),
                l
                    ? null
                    : (0, r.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          children: "This media engine does not support spatial audio; changes here have no effect.",
                      }),
            ],
        })
    );
}
let pV = "DevToolsSpatialAudioProfiles",
    pW = "Default",
    pH = e5().omit(pb.X, "isSpatial");
function pz(e, t) {
    if (!e5().isPlainObject(e)) return {};
    let a = {};
    for (let [n, l] of Object.entries(t)) {
        let t = e[n];
        if (e5().isPlainObject(l) && e5().isEmpty(l)) {
            if (!e5().isPlainObject(t)) continue;
            let e = e5().pickBy(t, (e) => "number" == typeof e && Number.isFinite(e));
            e5().isEmpty(e) || (a[n] = e);
        } else if (e5().isPlainObject(l)) {
            let e = pz(t, l);
            e5().isEmpty(e) || (a[n] = e);
        } else typeof t == typeof l && ("number" != typeof t || Number.isFinite(t)) && (a[n] = t);
    }
    return a;
}
function pK(e, t) {
    return e5().merge(e5().cloneDeep(pb.X), { isSpatial: t }, e);
}
function pY(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pb.X;
    return Object.entries(a).reduce((a, n) => {
        let [l, i] = n,
            s = e5().get(e, l),
            r = e5().get(t, l);
        return !e5().isPlainObject(i) || e5().isEmpty(i) || ["x", "low", "absorption"].some((e) => e in i)
            ? a + +!e5().isEqual(s, r)
            : a + pY(s ?? {}, r ?? {}, i);
    }, 0);
}
let pq = {};
function pJ(e) {
    let {
            overrides: t,
            modified: a,
            profiles: { profiles: n, names: l, activeName: i, editableName: s, select: d, save: c, remove: u, add: m },
        } = e,
        [h, x] = o.useState(null);
    function g(e) {
        (c(e), x(null));
    }
    if (null != h) {
        let e = h.trim(),
            t = e === pW;
        return (0, r.jsxs)(tX.B, {
            direction: "horizontal",
            align: "end",
            gap: 8,
            children: [
                (0, r.jsx)("div", {
                    className: pj.km,
                    children: (0, r.jsx)(f.k, {
                        label: "Profile name",
                        value: h,
                        onChange: x,
                        autoFocus: !0,
                        error: t ? `${pW} is built in and can't be overwritten` : void 0,
                        onKeyDown: (a) => {
                            ("Enter" === a.key && e.length > 0 && !t && g(e), "Escape" === a.key && x(null));
                        },
                    }),
                }),
                (0, r.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    text: e in n ? "Overwrite" : "Save",
                    disabled: 0 === e.length || t,
                    onClick: () => g(e),
                }),
                (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Cancel", onClick: () => x(null) }),
            ],
        });
    }
    return (0, r.jsxs)(tX.B, {
        direction: "horizontal",
        align: "end",
        gap: 8,
        wrap: !0,
        children: [
            (0, r.jsx)("div", {
                className: pj.km,
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
                onClick: () => null != s && g(s),
            }),
            (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Save as\u2026", onClick: () => x(s ?? "") }),
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
                            if (!e5().isPlainObject(a)) throw Error("Not an exported profile");
                            let { name: n, settings: l } = a;
                            if ("string" != typeof n || !e5().isPlainObject(l)) throw Error("Not an exported profile");
                            return { name: n.trim(), settings: pz(l, pb.X) };
                        })(
                            await (no.isPlatformEmbedded
                                ? Promise.resolve(uP.Ay.readClipboard())
                                : window.navigator.clipboard.readText()),
                        );
                        (0, l3.P0)({ text: `Switched to imported profile "${m(e, t)}"`, variant: "success" });
                    } catch {
                        (0, l3.P0)({
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
                    (0, nJ.C)(
                        ((e = i ?? "Untitled"),
                        (a = e5().merge(e5().cloneDeep(pH), pz(t, pb.X))),
                        btoa(
                            String.fromCharCode(...new TextEncoder().encode(JSON.stringify({ name: e, settings: a }))),
                        )),
                        () => (0, l3.P0)({ text: "Copied spatial audio profile to clipboard", variant: "success" }),
                        () => (0, l3.P0)({ text: "Could not copy to clipboard", variant: "critical" }),
                    );
                },
            }),
        ],
    });
}
function pQ() {
    let { overrides: e, spatialEnabled: t } = (0, d.cf)([pg.A], () => ({
            overrides: pg.A.getSpatialAudioOverrides(),
            spatialEnabled: pg.A.isSpatialAudioEnabled(),
        })),
        { enabled: a } = pv.A.useConfig({ location: "DevToolsSpatialAudioPanel" }),
        n = t && a,
        l = (function (e, t) {
            let [a, n] = o.useState(() => e5().omit(tQ.w.get(pV) ?? {}, pW)),
                l = [pW, ...Object.keys(a).sort((e, t) => e.localeCompare(t))];
            function i(e) {
                return e === pW ? pq : a[e];
            }
            let [s, r] = o.useState(() => {
                let a = pK(e, t);
                return l.find((e) => 0 === pY(a, pK(i(e), t)));
            });
            function d(e) {
                (n(e), tQ.w.set(pV, e));
            }
            return {
                profiles: a,
                names: l,
                activeName: s,
                baseline: (null != s ? i(s) : void 0) ?? pq,
                editableName: s === pW ? void 0 : s,
                select(e) {
                    (r(e), pi.default.setSpatialAudioOverrides(e5().cloneDeep(i(e))));
                },
                save(t) {
                    (d({ ...a, [t]: e5().cloneDeep(e) }), r(t));
                },
                remove(e) {
                    (d(e5().omit(a, e)), r(void 0));
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
                    return (d({ ...a, [n]: t }), r(n), pi.default.setSpatialAudioOverrides(e5().cloneDeep(t)), n);
                },
            };
        })(e, n),
        { baseline: i } = l,
        s = o.useMemo(() => pK(e, n), [e, n]),
        c = o.useMemo(() => pK(i, n), [i, n]),
        m = pY(s, c),
        h = o.useMemo(
            () => ({
                resolved: s,
                isOverridden: (e) => !e5().isEqual(e5().get(s, e), e5().get(c, e)),
                set: (t, a) =>
                    pi.default.setSpatialAudioOverrides(
                        "isSpatial" !== t || e5().has(i, t) || a !== e5().get(c, t)
                            ? e5().set(e5().cloneDeep(e), t, a)
                            : pS(e, t),
                    ),
                reset: (t) =>
                    pi.default.setSpatialAudioOverrides(
                        e5().has(i, t) ? e5().set(e5().cloneDeep(e), t, e5().cloneDeep(e5().get(i, t))) : pS(e, t),
                    ),
            }),
            [e, i, s, c],
        );
    return (0, r.jsx)(g.Ip, {
        className: t2.nd,
        children: (0, r.jsx)(pE.Provider, {
            value: h,
            children: (0, r.jsxs)("div", {
                className: pj.kL,
                children: [
                    (0, r.jsx)(pJ, { overrides: e, modified: m > 0, profiles: l }),
                    (0, r.jsx)(p$, {
                        overrideCount: m,
                        onResetAll: () => pi.default.setSpatialAudioOverrides(e5().cloneDeep(i)),
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Output",
                        children: [
                            (0, r.jsx)(pA, {
                                path: "isSpatial",
                                label: "Spatial audio",
                                description:
                                    "Overrides the voice settings toggle without saving it, bypassing the experiment. Still needs a supporting media engine.",
                            }),
                            (0, r.jsx)(pA, {
                                path: "limiterEnabled",
                                label: "Limiter",
                                description: "Runs the WebRTC limiter on the mixed output to keep it from clipping.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Binaural rendering",
                        children: [
                            (0, r.jsx)(pL, {}),
                            (0, r.jsx)(pk, {
                                path: "binaural.spatialBlend",
                                label: "Spatial blend",
                                description: "0 plays sources unspatialized, 1 fully through the HRTF.",
                                min: 0,
                                max: 1,
                                step: 0.01,
                                decimals: 2,
                            }),
                            (0, r.jsx)(pk, {
                                path: "binaural.hrtfVolume",
                                label: "HRTF volume",
                                description: "Linear gain applied to the HRTF data. Rebuilds the HRTF.",
                                min: 0,
                                max: 2,
                                step: 0.05,
                                decimals: 2,
                                unit: "\xd7",
                            }),
                            (0, r.jsx)(pA, {
                                path: "binaural.bilinearInterpolation",
                                label: "Bilinear interpolation",
                                description:
                                    "Interpolate between HRTF measurements instead of snapping to the nearest. Smoother moving sources, more CPU.",
                            }),
                            (0, r.jsx)(pA, {
                                path: "binaural.hrtfNormalization",
                                label: "HRTF normalization",
                                description: "RMS-normalize the HRTF frequency response. Rebuilds the HRTF.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Distance attenuation",
                        children: [
                            (0, r.jsx)(pA, {
                                path: "distanceAttenuation.enabled",
                                label: "Enabled",
                                description: "Inverse-distance falloff.",
                            }),
                            (0, r.jsx)(pk, {
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
                            (0, r.jsx)(pA, {
                                path: "airAbsorption.enabled",
                                label: "Enabled",
                                description: "Frequency-dependent damping over distance.",
                            }),
                            (0, r.jsx)(pM, {
                                path: "airAbsorption.coefficients",
                                label: "Coefficients",
                                description: "Exponential decay per metre, per band.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Reflections",
                        children: [
                            (0, r.jsx)(pA, {
                                path: "reflections.enabled",
                                label: "Enabled",
                                description: "Simulate room reverb per source.",
                            }),
                            (0, r.jsx)(pk, {
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
                            (0, r.jsx)(pk, {
                                path: "reflections.durationSeconds",
                                label: "IR duration",
                                description: "Length of the simulated impulse response.",
                                min: 0.1,
                                max: 2,
                                step: 0.05,
                                decimals: 2,
                                unit: " s",
                            }),
                            (0, r.jsx)(pk, {
                                path: "reflections.numRays",
                                label: "Rays",
                                description: "Rays traced per simulation run.",
                                min: 64,
                                max: 4096,
                                step: 64,
                                decimals: 0,
                            }),
                            (0, r.jsx)(pk, {
                                path: "reflections.numBounces",
                                label: "Bounces",
                                description: "Reflections followed per ray.",
                                min: 1,
                                max: 64,
                                step: 1,
                                decimals: 0,
                            }),
                            (0, r.jsx)(pk, {
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
                            (0, r.jsx)(pA, {
                                path: "reflections.binauralDecode",
                                label: "Binaural decode",
                                description: "Decode the ambisonic reverb through the HRTF rather than panning it.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Room",
                        children: [
                            (0, r.jsx)(pB, {}),
                            (0, r.jsx)(pP, { path: "reflections.room.minCorner", label: "Min corner" }),
                            (0, r.jsx)(pP, { path: "reflections.room.maxCorner", label: "Max corner" }),
                            (0, r.jsx)(pF, { path: "reflections.room.floor", label: "Floor" }),
                            (0, r.jsx)(pF, { path: "reflections.room.ceiling", label: "Ceiling" }),
                            (0, r.jsx)(pF, { path: "reflections.room.walls", label: "Walls" }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var pX = a(803306),
    pZ = a(191115),
    p0 = a(189213),
    p1 = a(543767),
    p2 = a(811091),
    p3 = a(105909);
let p6 = [
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
function p5() {
    let [e, t] = o.useState(!1),
        a = (0, d.bG)([eh.default], () => eh.default.getCurrentUser()),
        n = (0, p3.Lh)(),
        l = (0, d.bG)([ou.A], () => ou.A.getPremiumTypeSubscription()),
        i = null != n ? (tG.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        s = o.useCallback(
            async (e) => {
                let n = new Date();
                (e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2));
                let i = {
                    subscription_status: ev.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: p2.default.fromTimestamp(n.getTime()),
                };
                (t(!0),
                    await ie.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: i, rejectWithError: (0, ie.fT)() }),
                    await (0, pX.eO)(a.id),
                    await (0, dJ.hP)(),
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
            options: p6,
            onSelectionChange: s,
        });
}
var p8 =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    p4 =
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
async function p9(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: i } = a;
    return (
        await ie.Bo.post({
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
var p7 = a(601107);
let xe = {
        [ev.Dmq.UNPAID]: "Unpaid",
        [ev.Dmq.ACTIVE]: "Active",
        [ev.Dmq.PAST_DUE]: "Past Due",
        [ev.Dmq.CANCELED]: "Canceled",
        [ev.Dmq.ENDED]: "Ended",
        [ev.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [ev.Dmq.BILLING_RETRY]: "Billing Retry",
        [ev.Dmq.PAUSED]: "Paused",
        [ev.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    xt = {
        [p7.qf.UNKNOWN]: "Unknown",
        [p7.qf.ADMIN]: "Admin",
        [p7.qf.USER]: "User",
        [p7.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [p7.qf.DEFERRED_START]: "Deferred Start",
        [p7.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    xa = [
        { id: "unpaid", label: "Unpaid", value: ev.Dmq.UNPAID },
        { id: "active", label: "Active", value: ev.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: ev.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: ev.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: ev.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: ev.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: ev.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: ev.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: ev.Dmq.PAUSE_PENDING },
    ];
function xn(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [i, s] = o.useState(nF()()),
        [d, c] = o.useState(nF()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [p, g] = o.useState(void 0);
    return (0, r.jsx)(p0.a, {
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
                    if (null == i) return void g("Please select a target date");
                    let [e, l] = d.split(":").map(Number),
                        s = i.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
                    (h(!0), g(void 0));
                    try {
                        (await p9(t.id, p4.TIME_TRAVEL, {
                            targetDate: s,
                            paymentType: p8.DEFAULT,
                            sendReminderEmail: !1,
                        }),
                            n(),
                            a());
                    } catch (e) {
                        g(e.body?.message || e.message || "Failed to time travel");
                    } finally {
                        h(!1);
                    }
                },
                disabled: m || null == i,
            },
        ],
        children: (0, r.jsxs)(tX.B, {
            gap: 16,
            children: [
                (0, r.jsx)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(sO.J, { label: "Target Date", value: i, onSelect: s }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: function (e) {
                            c(e.target.value);
                        },
                        className: oR.Qn,
                    }),
                }),
                (0, r.jsxs)(tX.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(x.E, {
                            variant: "body-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(tX.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(x.E, {
                                    variant: "body-xs/normal",
                                    className: oR.JX,
                                    children: ["Start: ", nF()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(x.E, {
                                    variant: "body-xs/normal",
                                    className: oR.JX,
                                    children: ["End: ", nF()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != p && (0, r.jsx)(ea.w, { type: "critical", message: p, role: "alert" }),
            ],
        }),
    });
}
function xl(e) {
    let { subscription: t } = e,
        [a] = (0, p1.C8)({
            subscriptionId: null != t ? t.id : "",
            preventFetch: null == t || t.status !== ev.Dmq.PAST_DUE,
        }),
        { analyticsLocations: n } = (0, nb.Ay)(tR.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return t.status !== ev.Dmq.PAST_DUE
        ? null
        : (0, r.jsx)(p.$, {
              variant: "critical-primary",
              text: "Open Past Due Checkout",
              size: "sm",
              disabled: null == a,
              onClick: () => {
                  null != a &&
                      (0, d6.A)({ initialPlanId: t.planIdFromItems, openInvoiceId: a.id, analyticsLocations: n });
              },
          });
}
let xi = [
    { id: "us", label: "United States (USD)", value: "US" },
    { id: "gb", label: "United Kingdom (GBP)", value: "GB" },
    { id: "de", label: "Germany (EUR)", value: "DE" },
    { id: "mx", label: "Mexico (MXN)", value: "MX" },
    { id: "jp", label: "Japan (JPY)", value: "JP" },
];
function xs(e) {
    let { subscription: t } = e,
        [a, n] = o.useState(!1),
        [l, i] = o.useState(null),
        [s, d] = o.useState("DE");
    if (t.status !== ev.Dmq.PAST_DUE) return null;
    function c(e) {
        return e?.body?.message ?? e?.message ?? "Something went wrong";
    }
    return (0, r.jsxs)(tX.B, {
        gap: 8,
        children: [
            (0, r.jsx)(x.E, { variant: "body-sm/semibold", children: "Magic Link Testing" }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Send Dunning Email Now",
                disabled: a,
                onClick: async function () {
                    n(!0);
                    try {
                        (await ie.Bo.post({
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
                            await ie.Bo.post({
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
                options: xi,
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
                        (await ie.Bo.post({ url: "/debug/store-country", body: { country: s }, rejectWithError: !0 }),
                            i({ type: "success", message: `Store country set to ${s}.`, role: "status" }));
                    } catch (e) {
                        i({ type: "critical", message: c(e), role: "alert" });
                    }
                    n(!1);
                },
            }),
            null != l && (0, r.jsx)(ea.w, { type: l.type, message: l.message, role: l.role }),
        ],
    });
}
function xr(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [i, s] = o.useState(!1),
        [d, c] = o.useState(!1),
        [m, h] = o.useState(!1),
        [g, v] = o.useState(!1),
        [b, f] = o.useState(null);
    function y(e) {
        let t = new Date(e);
        return p2.default.fromTimestamp(t.getTime());
    }
    async function E(e) {
        let { status: t = n.status, premiumStreakStart: a, endedAt: i } = e,
            s = {
                subscription_status: t,
                ...(null != a ? { premium_streak_started_at: y(a) } : null),
                ...(null != i ? { ended_at: y(i) } : null),
            };
        (await ie.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: s, rejectWithError: !1 }), l());
    }
    let C = tG.hd[n.planIdFromItems]?.premiumType === tG.PremiumTypes.TIER_0,
        S = n.metadata?.ended_at,
        _ = null != S ? new Date(S).toISOString().substring(0, 10) : "",
        N = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in xe) ? xe[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        A = n.hasActiveTrial,
        k = n.metadata?.active_discount_id != null;
    return (
        A && N.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        k && N.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== ev.Dmq.ACTIVE &&
            N.push({
                id: "dates",
                label: `Dates: ${(0, nQ.i$)(n.createdAt, "LL")} - ${(0, nQ.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === ev.Dmq.PAUSED &&
            N.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in xt ? xt[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: ee()(iF.Nr, C ? iF.Qf : iF.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == (a = n.planIdFromItems) ? "No plan id" : a in tG.hd ? tG.hd[a].name : `Unknown plan id ${a}`}`,
                className: oR.lI,
                children: [
                    (0, r.jsx)(oI.C, { items: N, label: "Subscription details" }),
                    A &&
                        (0, r.jsxs)("div", {
                            className: oR.VK,
                            children: [
                                (0, r.jsxs)(et.D, {
                                    onClick: function () {
                                        h(!m);
                                    },
                                    className: oR.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(x.E, {
                                                variant: "body-md/semibold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(iP.A, { direction: m ? iP.A.Directions.UP : iP.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: oR.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(x.E, {
                                                        variant: "body-md/semibold",
                                                        children: "trial_id",
                                                    }),
                                                    (0, r.jsx)(x.E, { variant: "body-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(x.E, {
                                                        variant: "body-md/semibold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(x.E, {
                                                        variant: "body-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, nQ.i$)(n.trialEndsAt, "LL")
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
                            className: oR.VK,
                            children: [
                                (0, r.jsxs)(et.D, {
                                    onClick: function () {
                                        v(!g);
                                    },
                                    className: oR.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(x.E, {
                                                variant: "body-md/semibold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(iP.A, { direction: g ? iP.A.Directions.UP : iP.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: oR.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(x.E, {
                                                        variant: "body-md/semibold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(x.E, {
                                                        variant: "body-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(x.E, {
                                                        variant: "body-md/semibold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(x.E, {
                                                        variant: "body-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, nQ.i$)(
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
                            className: oR.VK,
                            children: [
                                (0, r.jsxs)(et.D, {
                                    onClick: function () {
                                        s(!i);
                                    },
                                    className: oR.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(x.E, {
                                                variant: "body-md/semibold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(iP.A, { direction: i ? iP.A.Directions.UP : iP.A.Directions.DOWN }),
                                    ],
                                }),
                                i &&
                                    (0, r.jsx)("ul", {
                                        className: oR.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(x.E, { variant: "body-md/semibold", children: t }),
                                                        (0, r.jsx)(x.E, { variant: "body-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: oR.VK,
                        children: [
                            (0, r.jsxs)(et.D, {
                                onClick: function () {
                                    c(!d);
                                },
                                className: oR.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(x.E, {
                                            variant: "body-md/semibold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(iP.A, { direction: d ? iP.A.Directions.UP : iP.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(tX.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(j.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: xa,
                                            onSelectionChange: (e) => {
                                                E({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(tX.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(p.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) =>
                                                                (async function () {
                                                                    try {
                                                                        await p9(n.id, p4.RENEW, {
                                                                            targetDate: nF()(new Date()),
                                                                            paymentType: p8.DEFAULT,
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
                                                                        await p9(n.id, p4.RENEW, {
                                                                            targetDate: nF()(new Date()),
                                                                            paymentType: p8.FAILURE,
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
                                                        (0, r.jsx)(xl, { subscription: n }),
                                                        (0, r.jsx)(xs, { subscription: n }),
                                                        (0, r.jsx)(p.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, P.mM)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(xn, {
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
                                                        className: oR.z3,
                                                        children: (0, r.jsx)(ea.w, {
                                                            type: "critical",
                                                            message: b,
                                                            role: "alert",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(tX.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(sO.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: nF()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => E({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(p5, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(sO.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== _ ? nF()(_) : void 0,
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
let xo = [
    { id: "nitro-monthly", label: "Nitro Monthly", value: tG.gD.PREMIUM_MONTH_TIER_2 },
    { id: "nitro-yearly", label: "Nitro Yearly", value: tG.gD.PREMIUM_YEAR_TIER_2 },
    { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: tG.gD.PREMIUM_MONTH_TIER_1 },
    { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: tG.gD.PREMIUM_YEAR_TIER_1 },
    { id: "basic-monthly", label: "Basic Monthly", value: tG.gD.PREMIUM_MONTH_TIER_0 },
    { id: "basic-yearly", label: "Basic Yearly", value: tG.gD.PREMIUM_YEAR_TIER_0 },
    { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: tG.gd },
    { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: tG.Uk },
    { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: tG.gD.PREMIUM_GROUP_MONTH },
];
function xd() {
    let e = (0, d.bG)([ou.A], () => ou.A.getPremiumTypeSubscription()),
        t = (0, d.bG)([eh.default], () => eh.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, i] = o.useState([]),
        [s, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                (c(!0),
                    await (0, dJ.hP)(),
                    await (0, pX.eO)(t.id),
                    i(
                        await (async function () {
                            return (
                                await ie.Bo.get({
                                    url: ev.Rsh.BILLING_SUBSCRIPTIONS,
                                    query: { include_inactive: !0, limit: 5 },
                                    rejectWithError: (0, ie.fT)(),
                                })
                            ).body.map((e) => pZ.A.createFromServer(e));
                        })(),
                    ));
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => l.filter((e) => e.status !== ev.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]);
    return (0, r.jsx)(g.Ip, {
        className: t2.nd,
        children: (0, r.jsxs)("div", {
            className: iF.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: iF.dL,
                    children: [
                        (0, r.jsx)(en.D, {
                            variant: "heading-lg/semibold",
                            className: t2.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eJ.K, {
                            "aria-label": "Refresh",
                            icon: iM.RefreshIcon,
                            size: "sm",
                            variant: "icon-only",
                            disabled: s,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: ee()([iF.uW, iF.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: xo,
                                    onSelectionChange: n,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: async function () {
                                        (await ie.Bo.post({
                                            url: "/debug/subscription",
                                            body: { plan_id: a },
                                            rejectWithError: (0, ie.fT)(),
                                        }),
                                            await u());
                                    },
                                }),
                            ],
                        }),
                }),
                null != e && (0, r.jsx)(xr, { subscription: e, onUpdated: u }),
                (0, r.jsx)(en.D, { variant: "heading-lg/semibold", className: t2.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: ee()([iF.uW, iF.Uo]),
                    children: (0, r.jsx)(p.$, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: async function () {
                            (await ie.Bo.del({ url: "/debug/subscription", rejectWithError: (0, ie.fT)() }), await u());
                        },
                    }),
                }),
                m.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(en.D, {
                                variant: "heading-lg/semibold",
                                className: t2.wx,
                                children: "Previous Subscriptions",
                            }),
                            m.map((e) => (0, r.jsx)(xr, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var xc = a(284009),
    xu = a.n(xc),
    xm = a(889137),
    xh = a(323889),
    xp = a(412703),
    xx = a(440703),
    xg = a(267548),
    xv = a(668824),
    xb = a(695366),
    xj = a(993077),
    xf = a(506988),
    xy = a(417404),
    xE = a(792620),
    xC = a(557637),
    xS = a(66246),
    x_ = a(717695),
    xN = a(10394),
    xA = a(127219),
    xk = a(107543),
    xD = a(793217),
    xI = a(317097),
    xT = a(452027),
    xR = a(265872),
    xO = a(714385),
    xw = a(581244);
let xM = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        i = o.useRef(null);
    return (0, r.jsx)(xT.D, {
        label: l,
        children: (0, r.jsx)(xR.Y, {
            targetElementRef: i,
            renderPopout: (e) => (0, r.jsx)(uv.VN, { ...e, value: a, onChange: (e) => n(t, (0, xI.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(et.D, {
                    ...e,
                    innerRef: i,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: xw.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(xO.d, { size: "xs", color: "currentColor", className: xw.WY }),
                }),
        }),
    });
};
var xP = a(346055);
let xL = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(xP.M, {
        children: (0, r.jsx)(xj.Z, {
            className: ee()(xw.Rx, { [xw.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: xw.AZ,
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
var xU = a(643374);
let xG = function (e) {
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
            (0, r.jsx)(xT.D, {
                label: i,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(xU.A, {
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
    xF = function (e) {
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
var xB = a(61387);
let x$ = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, xB.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
var xV = a(843282),
    xW = a(714269);
let xH = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    xz = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(tX.B, {
            gap: 20,
            children: [
                (0, r.jsx)(xV.Pw, {
                    label: "Task Type(s)",
                    className: xW.Z,
                    placeholder: "Select Task Preset",
                    options: xH,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, i, s, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = xp.n.PLAY_ON_PLAYSTATION in t || xp.n.PLAY_ON_XBOX in t),
                            (l = xp.n.PLAY_ON_DESKTOP in t),
                            (i = xp.n.STREAM_ON_DESKTOP in t),
                            (s = xp.n.WATCH_VIDEO in t),
                            (r = xp.n.PLAY_ACTIVITY in t),
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
                                        a[xp.n.STREAM_ON_DESKTOP] = { type: xp.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[xp.n.PLAY_ON_DESKTOP] = { type: xp.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        ((a[xp.n.PLAY_ON_PLAYSTATION] = {
                                            type: xp.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[xp.n.PLAY_ON_XBOX] = {
                                                type: xp.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 4:
                                        ((a[xp.n.PLAY_ON_DESKTOP] = { type: xp.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[xp.n.PLAY_ON_PLAYSTATION] = {
                                                type: xp.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[xp.n.PLAY_ON_XBOX] = {
                                                type: xp.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 2:
                                        a[xp.n.WATCH_VIDEO] = {
                                            type: xp.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[xp.n.PLAY_ACTIVITY] = { type: xp.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / o4.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= o4.A.Seconds.MINUTE;
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
var xK = a(818348);
let xY = function () {
    let e = (0, ey.Ay)();
    return (0, r.jsx)(xT.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(eE.zy, {
                    theme: xK.NJ.LIGHT,
                    isSelected: e === xK.NJ.LIGHT,
                    onSelect: () => (0, cK.u_)({ theme: xK.NJ.LIGHT }),
                }),
                (0, r.jsx)(eE.zy, {
                    theme: xK.NJ.DARK,
                    isSelected: e === xK.NJ.DARK,
                    onSelect: () => (0, cK.u_)({ theme: xK.NJ.DARK }),
                }),
            ],
        }),
    });
};
var xq =
    (((s = {})[(s.UNENROLLED = 0)] = "UNENROLLED"),
    (s[(s.ENROLLED = 1)] = "ENROLLED"),
    (s[(s.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (s[(s.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (s[(s.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (s[(s.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (s[(s.CLAIMED = 6)] = "CLAIMED"),
    s);
let xJ = function (e) {
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
var xQ = a(321538);
let xX = ["png", "gif", "webp"],
    xZ = [...xX, "jpg", "jpeg"],
    x0 = Array.from(new Set([...xZ, "gif", "mp4", "webm"]));
function x1() {
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
let x2 = "1193992107035983872",
    x3 = {
        id: x2,
        preview: !0,
        config: {
            id: x2,
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
                        type: xx.l.REWARD_CODE,
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
                joinOperator: xv.K.AND,
                tasks: {
                    [xp.n.PLAY_ON_DESKTOP]: { type: xp.n.PLAY_ON_DESKTOP, target: 300, applications: [{ id: "123" }] },
                },
            },
            features: [],
            sharePolicy: xg.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function x6() {
    var e;
    let [t, n] = o.useState(x3),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [i, s] = o.useState(xq.UNENROLLED),
        [d, c] = o.useState(!1),
        [u, h] = o.useState(!1),
        [v, b] = o.useState(null),
        j =
            ((e = t.config),
            (0, xm.YW)(e)
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
                    (0, xm.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function y(e, a) {
        let n = t.config.taskConfigV2.tasks,
            i = n[xp.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [xp.n.WATCH_VIDEO]: { ...i, assets: s } } },
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
                    (0, xm.YW)(n)
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
                    (0, xm.YW)(i)
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
        (0, xy.tU)(t.config) && (0, xQ.hJ)(t, xf.uF.GIFT_INVENTORY_FOR_YOU, xf.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * o4.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => xp.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    xu()(!1 !== t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[xp.n.WATCH_VIDEO];
    return (0, r.jsxs)(g.Ip, {
        className: xw.kL,
        children: [
            (0, r.jsx)(en.D, { variant: "heading-lg/semibold", className: xw.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: xw.OA,
                children: (0, r.jsx)(x$, {
                    onSelect: function (e) {
                        (b(e),
                            null == e ||
                                (s(
                                    (function (e) {
                                        if (null == e.userStatus) return xq.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return xq.CLAIMED;
                                        if (null != e.userStatus.completedAt) return xq.COMPLETED_100;
                                        let t = (0, xE.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? xq.COMPLETED_100
                                            : a / n >= 0.75
                                              ? xq.COMPLETED_75
                                              : a / n >= 0.5
                                                ? xq.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? xq.COMPLETED_25
                                                  : xq.ENROLLED;
                                    })(e),
                                ),
                                l(e)));
                    },
                    quest: v,
                }),
            }),
            (0, r.jsx)(en.D, { variant: "heading-sm/semibold", className: xw.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: xw.OA,
                children: (0, r.jsx)(xz, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(en.D, { variant: "heading-sm/semibold", className: xw.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: xw.OA,
                children: [
                    (0, r.jsx)(xF, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: E,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(xF, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: E,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(xF, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: E,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, r.jsx)(xF, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    i = n[xp.n.WATCH_VIDEO];
                                if (null == i) return;
                                let s = { ...i.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [xp.n.WATCH_VIDEO]: { ...i, messages: s } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(en.D, { variant: "heading-sm/semibold", className: xw.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: xw.OA,
                children: [
                    (0, r.jsx)(xG, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: f,
                        filters: x0,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(xG, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: f,
                        filters: x0,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(xG, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: f,
                        filters: x0,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(xG, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: f,
                        filters: x0,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(xG, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: f,
                        filters: [...xZ, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(xG, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: f,
                        filters: [...xX, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(xG, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: y,
                                    filters: x0,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(xG, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: y,
                                    filters: x0,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(xG, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: y,
                                    filters: xZ,
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
                            (0, r.jsxs)(en.D, {
                                variant: "heading-sm/semibold",
                                className: xw.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: xw.OA,
                                children: [
                                    (0, r.jsx)(xF, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(xF, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== xx.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(xG, {
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
                                                                (0, xm.YW)(i)
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
                                            filters: x0,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(tX.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(en.D, {
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
            (0, r.jsx)(en.D, { variant: "heading-sm/semibold", className: xw.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: xw.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: xw.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(xM, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: S,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(xM, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: S,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: xw.OA, children: (0, r.jsx)(xY, {}) }),
                    (0, r.jsx)(xJ, {
                        onChange: function (e) {
                            switch ((s(e), e)) {
                                case xq.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case xq.ENROLLED:
                                    l({ ...t, userStatus: x1({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case xq.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: x1({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case xq.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: x1({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case xq.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: x1({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case xq.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: x1({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case xq.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: x1({
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
            (0, r.jsx)(en.D, { variant: "heading-lg/semibold", className: xw.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: xw.$$,
                children: [
                    (0, r.jsxs)(xL, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: xw.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(x.E, {
                                            color: "text-subtle",
                                            variant: "body-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: xw.ok,
                                        children: (0, r.jsx)(xC.y5, {
                                            isPreview: !0,
                                            source: "preview",
                                            adCreativeId: "0",
                                            adCreativeType: xh.p.QUEST,
                                            children: (0, r.jsx)(x_.A, {
                                                children: (0, r.jsx)(xS.QuestBarQuestContent, { quest: t }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(xL, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(xC.y5, {
                                isPreview: !0,
                                source: "preview",
                                adCreativeId: "0",
                                adCreativeType: xh.p.QUEST,
                                children: (0, r.jsx)(xD.Ay, {
                                    quest: t,
                                    className: xw.d,
                                    questContent: xf.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: xf.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(xL, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(x.E, {
                                    color: "text-subtle",
                                    variant: "body-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: xw.l4,
                                children: (0, r.jsx)(xC.y5, {
                                    isPreview: !0,
                                    source: "preview",
                                    adCreativeId: "0",
                                    adCreativeType: xh.p.QUEST,
                                    children: (0, r.jsx)("div", {
                                        className: xw.Jr,
                                        children: (0, r.jsx)(xN.A, {
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
                        className: xw.NY,
                        children: (0, r.jsx)(m.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                c(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(xL, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Quest Card Embed" }),
                            u
                                ? (0, r.jsx)(xA.l, { questId: t.id })
                                : (0, r.jsx)(
                                      xk.M,
                                      {
                                          quest: t,
                                          location: xf.uF.QUESTS_EMBED,
                                          sourceQuestContent: xf.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: xw.NY,
                        children: (0, r.jsx)(m.d, { label: "Invalid Quests Embed:", checked: u, onChange: h }),
                    }),
                    A &&
                        (0, r.jsxs)(xL, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(en.D, { variant: "heading-xs/semibold", children: "Video Player" }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, P.mM)(async () => {
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
                                                    sourceQuestContent: xf.uF.INTERNAL_PREVIEW_TOOL,
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
class x5 extends o.Component {
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
                  className: xw.TA,
                  children: [
                      (0, r.jsx)(xb.E, { className: xw.Yw }),
                      (0, r.jsx)(en.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(p.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(xj.Z, {
                              className: xw.Fx,
                              children: (0, r.jsx)("code", { className: xw.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(x6, {}, t);
    }
}
var x8 = a(627784),
    x4 = a(839214),
    x9 = a(497029),
    x7 = a(450827),
    ge = a(626584),
    gt = a(174768),
    ga = a(205761),
    gn = a(949744),
    gl = a(696451),
    gi = a(537975),
    gs = a(926140);
let gr = new ge.A("SearchDebugUtils");
function go() {
    gr.info("--------------------------");
}
function gd() {
    let e = gt.A.getProps();
    (gr.info("START Quick Switcher State"),
        gr.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((gr.info(`Result Type: ${e.type}`), e.type)) {
                case gs.rD.GUILD:
                    gr.info(`guild id: ${e.record.id}`);
                    break;
                case gs.rD.TEXT_CHANNEL:
                case gs.rD.VOICE_CHANNEL:
                    (gr.info(`channel type: ${e.record.type}`),
                        gr.info(`channel id: ${e.record.id}`),
                        gr.info(`name: ${e.record.name}`));
                    break;
                case gs.rD.DM:
                    (gr.info(`channel type: ${e.record.type}`),
                        gr.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (gr.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = eh.default.getUser(e);
                                null != t &&
                                    (gr.info(`recipient username: ${t.username}`),
                                    gr.info(`recipient global name: ${ej.Ay.getGlobalName(t)}`),
                                    gr.info(`recipient nickname: ${aJ.A.getNickname(t.id)}`));
                            })));
                    break;
                case gs.rD.GROUP_DM:
                    (gr.info(`channel type: ${e.record.type}`),
                        gr.info(`channel id: ${e.record.id}`),
                        gr.info(`name: ${(0, aY.m1)(e.record, eh.default, aJ.A)}`),
                        e.record.isGroupDM() &&
                            (gr.info(`default name: ${(0, aY.ks)(e.record, eh.default, aJ.A)}`),
                            gr.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = eh.default.getUser(e);
                                null != t &&
                                    (gr.info(`recipient username: ${t.username}`),
                                    gr.info(`recipient global name: ${ej.Ay.getGlobalName(t)}`),
                                    gr.info(`recipient nickname: ${aJ.A.getNickname(t.id)}`));
                            })));
                    break;
                case gs.rD.USER:
                    (gr.info(`user id: ${e.record.id}`),
                        gr.info(`username: ${e.record.username}`),
                        gr.info(`global name: ${ej.Ay.getGlobalName(e.record)}`),
                        gr.info(`nickname: ${aJ.A.getNickname(e.record.id)}`),
                        gr.info(`guild nicknames: ${gl.Ay.getNicknames(e.record.id)}`));
            }
            (gr.info(`frecency score: ${ga.A.getScoreWithoutFetchingLatest(e.record.id)}`), go());
        }),
        gr.info("END Quick Switcher State\n"));
}
var gc = a(143919);
function gu(e) {
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
                (0, r.jsx)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-feedback-critical",
                    className: gc.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-feedback-positive",
                    className: gc.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let gm = (0, x4.D)(() => ({
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
function gh() {
    let e = gm.useField("includeFrecency"),
        t = gm.useField("includeFriends"),
        a = gm.useField("includeDMs"),
        n = gm.useField("includeGDMs"),
        l = gm.useField("includeQuickSwitcherState"),
        i = gm.useField("includeUserSearchWorkerState"),
        s = gm.useField("isUploading"),
        d = gm.useField("isSuccess"),
        c = gm.useField("errorMessage"),
        h = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: i,
                isUploading: s,
            } = gm.getState();
            if (!s)
                try {
                    let s, r, o, d, c, u, m, h, p, x, g, v;
                    (gm.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((s = aJ.A.getFriendIDs()),
                            gr.info("START Discord Friends"),
                            s.forEach((e) => {
                                let t = eh.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = ej.Ay.getGlobalName(t),
                                    l = aJ.A.getNickname(t.id),
                                    i = gl.Ay.getNicknames(t.id);
                                (gr.info(`username: ${a}`),
                                    gr.info(`global name: ${n}`),
                                    gr.info(`nickname: ${l}`),
                                    gr.info(`guild nicknames: ${i}`),
                                    go());
                            }),
                            gr.info("END Discord Friends\n")),
                        a &&
                            ((r = aq.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                (e.isGroupDM() && o.push(e), e.isDM() && d.push(e));
                            }),
                            gr.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, aY.m1)(e, eh.default, aJ.A),
                                    a = (0, aY.ks)(e, eh.default, aJ.A);
                                (gr.info(`id: ${e.id}`),
                                    gr.info(`name: ${t}`),
                                    gr.info(`default name: ${a}`),
                                    gr.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = eh.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ej.Ay.getGlobalName(t),
                                            l = aJ.A.getNickname(t.id),
                                            i = gl.Ay.getNicknames(t.id);
                                        (gr.info(`username: ${a}`),
                                            gr.info(`global name: ${n}`),
                                            gr.info(`nickname: ${l}`),
                                            gr.info(`guild nicknames: ${i}`),
                                            go());
                                    }));
                            }),
                            gr.info("END Logging Group DM Channels\n"),
                            gr.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, aY.m1)(e, eh.default, aJ.A);
                                (gr.info(`id: ${e.id}`), gr.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = eh.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = ej.Ay.getGlobalName(n),
                                    s = aJ.A.getNickname(n.id);
                                (gr.info(`username: ${l}`),
                                    gr.info(`global name: ${i}`),
                                    gr.info(`nickname: ${s}`),
                                    go());
                            }),
                            gr.info("END Logging DM Channels\n")),
                        n &&
                            ((c = aq.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                (e.isGroupDM() && u.push(e), e.isDM() && m.push(e));
                            }),
                            gr.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, aY.m1)(e, eh.default, aJ.A),
                                    a = (0, aY.ks)(e, eh.default, aJ.A);
                                (gr.info(`id: ${e.id}`),
                                    gr.info(`name: ${t}`),
                                    gr.info(`default name: ${a}`),
                                    gr.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = eh.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ej.Ay.getGlobalName(t),
                                            l = aJ.A.getNickname(t.id),
                                            i = gl.Ay.getNicknames(t.id);
                                        (gr.info(`username: ${a}`),
                                            gr.info(`global name: ${n}`),
                                            gr.info(`nickname: ${l}`),
                                            gr.info(`guild nicknames: ${i}`),
                                            go());
                                    }));
                            }),
                            gr.info("END Logging Group DM Channels\n"),
                            gr.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, aY.m1)(e, eh.default, aJ.A);
                                (gr.info(`id: ${e.id}`), gr.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = eh.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = ej.Ay.getGlobalName(n),
                                    s = aJ.A.getNickname(n.id);
                                (gr.info(`username: ${l}`),
                                    gr.info(`global name: ${i}`),
                                    gr.info(`nickname: ${s}`),
                                    go());
                            }),
                            gr.info("END Logging DM Channels\n")),
                        e &&
                            ((h = ga.A.getFrequentlyWithoutFetchingLatest()),
                            (p = []),
                            (x = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, gi.fh)(e)
                                    ? p.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : x.push(e);
                            }),
                            gr.info("START Frecency"),
                            gr.info("Guilds"),
                            p.forEach((e) => {
                                let t = ga.A.getScoreWithoutFetchingLatest(e.id);
                                gr.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            go(),
                            gr.info("DM Channels"),
                            g.forEach((e) => {
                                let t = ga.A.getScoreWithoutFetchingLatest(e.id);
                                gr.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            go(),
                            gr.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = ga.A.getScoreWithoutFetchingLatest(e.id);
                                (gr.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    gr.info(`default name: ${(0, aY.ks)(e, eh.default, aJ.A)}`),
                                    gr.info(`name: ${(0, aY.m1)(e, eh.default, aJ.A)}`));
                            }),
                            go(),
                            gr.info("Guild Channels"),
                            x.forEach((e) => {
                                let t = ga.A.getScoreWithoutFetchingLatest(e.id);
                                gr.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            go(),
                            gr.info("END Frecency\n")),
                        l && gd(),
                        i &&
                            (async function () {
                                gr.info("START User Search Worker State");
                                let e = await x7.A.requestDebugState();
                                null == e
                                    ? gr.info("Unable to get debug state from User Search Worker")
                                    : (Object.entries(JSON.parse(e.users)).forEach((e) => {
                                          let [t, a] = e;
                                          (gr.info(`id: ${t}`),
                                              gr.info(`username: ${a.username}`),
                                              gr.info(`global name: ${a.globalName}`),
                                              gr.info(`nickname: ${a.friendNickname}`),
                                              Object.entries(a.nicknames).forEach((e) => {
                                                  let [t, a] = e;
                                                  (gr.info(`guild id: ${t}`), gr.info(`guild nickname: ${a}`));
                                              }),
                                              go());
                                      }),
                                      gr.info("END User Search Worker State\n"));
                            })(),
                        await (0, x9.a)(ev.Umv.WEB_APP),
                        gm.setState({ isSuccess: !0, errorMessage: null }));
                } catch (t) {
                    let e = new x8.LG(t);
                    gm.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    gm.setState({ isUploading: !1 });
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
                onChange: () => gm.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(m.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => gm.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(m.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => gm.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(m.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => gm.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(m.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => gm.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(m.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: i,
                onChange: () => gm.setState({ includeUserSearchWorkerState: !i }),
            }),
            (0, r.jsx)(gu, {
                isUploading: s,
                isSuccess: d,
                errorMessage: c,
                onClick: h,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let gp = (0, x4.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function gx() {
    let e = gp.useField("userIds"),
        t = gp.useField("isLoading"),
        a = gp.useField("isSuccess"),
        n = gp.useField("errorMessage"),
        l = gp.useField("lastRunAt"),
        i = o.useCallback(async () => {
            gp.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await (async function () {
                    let e = await x7.A.requestDebugState();
                    if (null == e) throw Error("Unable to get debug state from User Search Worker");
                    let t = JSON.parse(e.users),
                        a = eh.default.getUsers(),
                        n = new Set(Object.keys(t)),
                        l = p2.default.keys(a),
                        i = [];
                    return (
                        l.forEach((e) => {
                            n.has(e) || i.push(e);
                        }),
                        i
                    );
                })();
                gp.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                gp.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                gp.setState({ isLoading: !1 });
            }
        }, []),
        s = o.useMemo(
            () =>
                e.map((e) => {
                    let t = eh.default.getUser(e),
                        a = null != t ? ej.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: gc.J1,
                            children: (0, r.jsx)(x.E, { variant: "body-md/normal", children: `${a} (${e})` }),
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
                    className: gc.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                className: gc.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(x.E, { variant: "body-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(x.E, {
                                        variant: "body-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: gc.uk, children: s }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(x.E, { variant: "body-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let gg = (0, x4.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function gv() {
    let e = gg.useField("isRecording"),
        t = gg.useField("isUploading"),
        a = gg.useField("isSuccess"),
        n = gg.useField("errorMessage"),
        l = o.useRef([]),
        i = o.useRef(""),
        s = o.useCallback(() => {
            let { results: e, query: t } = gt.A.getProps();
            (l.current !== e || i.current !== t) && ((l.current = e), (i.current = t), gd());
        }, []);
    o.useEffect(() => {
        if (e) return (gt.A.addChangeListener(s), () => gt.A.removeChangeListener(s));
    }, [s, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = gg.getState();
        if (!e)
            try {
                (gg.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, x9.a)(ev.Umv.WEB_APP),
                    gg.setState({ isSuccess: !0, errorMessage: null }));
            } catch (t) {
                let e = new x8.LG(t);
                gg.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                gg.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(ea.w, {
                type: "info",
                message: "When you are done, please remember to upload the logs.",
                role: "none",
            }),
            (0, r.jsxs)(nv.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => gg.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(gu, {
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
var gb = a(145497);
let gj = (0, x4.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function gf(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: gc.J1,
                children: (0, r.jsx)(x.E, { variant: "body-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: gc.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: gc.J1,
                            children: (0, r.jsx)(x.E, { variant: "body-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = n_.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: gc.J1,
                                      children: [
                                          (0, r.jsx)(gb.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(x.E, { variant: "body-sm/normal", children: t.name }),
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
function gy(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: i } = t,
        s = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sm.y, { size: "sm", color: eZ.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(xb.E, { size: "sm", color: eZ.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: gc.N6,
        children: [
            (0, r.jsxs)("div", {
                className: gc.J1,
                children: [
                    s({ ok: null != a }),
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: gc.uk,
                    children: (0, r.jsx)("div", {
                        className: gc.J1,
                        children: (0, r.jsx)(x.E, { variant: "body-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: gc.J1,
                children: [
                    s({ ok: null != n }),
                    (0, r.jsx)(x.E, {
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
                    className: gc.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: gc.J1,
                            children: (0, r.jsx)(x.E, {
                                variant: "body-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: gc.J1,
                            children: (0, r.jsx)(x.E, {
                                variant: "body-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: gc.J1,
                            children: (0, r.jsx)(x.E, { variant: "body-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: gc.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: gc.J1,
                                        children: (0, r.jsx)(x.E, { variant: "body-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = n_.A.getGuild(t),
                                        l = aq.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: gc.J1,
                                            children: [
                                                null != n && (0, r.jsx)(gb.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(x.E, { variant: "body-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(x.E, {
                                                        variant: "body-sm/normal",
                                                        children: (0, aY.m1)(l, eh.default, aJ.A),
                                                    }),
                                                (0, r.jsx)(x.E, { variant: "body-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(x.E, { variant: "body-sm/normal", children: ` - ${a}` }),
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
                className: gc.J1,
                children: [
                    s({ ok: l.length > 0 }),
                    (0, r.jsx)(x.E, {
                        variant: "body-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: gc.uk,
                    children: l.map((e) => {
                        let t = n_.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: gc.J1,
                                children: [
                                    (0, r.jsx)(gb.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(x.E, {
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
                className: gc.J1,
                children: [
                    (0, r.jsx)(ug.CircleInformationIcon, { size: "sm" }),
                    (0, r.jsx)(x.E, { variant: "body-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != i &&
                (0, r.jsxs)("div", {
                    className: gc.uk,
                    children: [
                        (0, r.jsx)(gf, { title: "Pending Guild Member Requests:", guildIds: i.pendingRequestGuildIds }),
                        (0, r.jsx)(gf, { title: "Sent Guild Member Requests:", guildIds: i.sentRequestGuildIds }),
                        (0, r.jsx)(gf, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: i.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function gE() {
    let e = o.useCallback((e) => {
            gj.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = gj.getState();
            if (!t && null != e) {
                gj.setState({ loading: !0, error: null });
                try {
                    let t = await (async function (e) {
                        let t = await x7.A.requestDebugState(),
                            a = null != t ? JSON.parse(t.users)[e] : null,
                            n = n_.A.getGuildIds(),
                            l = [];
                        n.forEach((t) => {
                            let a = gl.Ay.getMember(t, e);
                            null != a && l.push(a);
                        });
                        let i = gn.A.getDebugState(e);
                        return {
                            user: eh.default.getUser(e),
                            searchWorkerUser: a,
                            guildMembers: l,
                            guildMemberRequests: i,
                        };
                    })(e);
                    gj.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new x8.LG(t);
                    gj.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    gj.setState({ loading: !1 });
                }
            }
        }, []),
        a = gj.useField("loading");
    return (0, r.jsxs)("div", {
        className: gc.$n,
        children: [
            (0, r.jsx)(f.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(p.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function gC() {
    let e = gj.useField("state"),
        t = gj.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(gE, {}),
            null != t &&
                (0, r.jsx)(x.E, {
                    variant: "body-sm/normal",
                    color: "text-feedback-critical",
                    className: gc.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(gy, { userState: e }),
        ],
    });
}
function gS() {
    return (0, r.jsxs)(g.Ip, {
        className: gc.nd,
        children: [
            (0, r.jsx)(gv, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(gh, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(gC, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(gx, {}),
        ],
    });
}
var g_ = a(761508),
    gN = a(36692),
    gA = a(808411),
    gk = a(624716),
    gD = a(398590),
    gI = a(101715),
    gT = a(582695),
    gR = a(713387),
    gO = a(865868);
let gw = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    gM = {
        "virtual-currency": function () {
            return (0, r.jsxs)(gR.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(x.E, {
                        variant: "body-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(p.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = gT.lB.VIRTUAL_CURRENCY),
                                void (gI.x.setState({ selectedCollection: e, selectedStory: null }),
                                (0, gD.id)(ev.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: function () {
            return (0, r.jsxs)("div", { children: [(0, r.jsx)(gN.o, {}), (0, r.jsx)(gA.A, {}), (0, r.jsx)(gk.A, {})] });
        },
    };
function gP() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => gM[e], [e]);
    return (0, r.jsxs)("div", {
        className: ee()(t2.nd, gO.kL),
        children: [
            (0, r.jsx)(g_.V, {
                className: gO.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: gw.map((e) => (0, r.jsx)(g_.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(g.Ar, { children: (0, r.jsx)("div", { className: gO.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var gL = a(718446),
    gU = a(766075),
    gG = a(355097);
let gF = (0, x4.D)(() => ({ urlString: "", error: null })),
    gB = Object.entries(gG.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function g$() {
    let [e, t] = o.useState(),
        a = gF.useField("urlString"),
        n = gF.useField("error"),
        l = o.useCallback(() => {
            let e = gF.getField("urlString");
            if (null == e || "" === e) return void gF.setState({ error: "URL is required" });
            let t = (0, gL.parseSettingsUrl)({ path: e });
            ((0, gL.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? gF.setState({ error: "String did not match expected format" })
                : (0, gU.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(aN.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: gB,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = gG.od[e].split("/");
                        gF.setState({ urlString: ev.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(f.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => gF.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(nv.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(p.$, {
                        variant: "secondary",
                        onClick: () => (0, nJ.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(x.E, { variant: "body-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var gV = a(780964);
let gW = (0, x4.D)(() => ({ setting: gV.X.ACCOUNT_PANEL }));
function gH() {
    let e = gW.useField("setting"),
        t = o.useCallback(() => {
            (0, gU.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(gV.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(aN.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => gW.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(p.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var gz = a(963935),
    gK = a(635842),
    gY = a(333357);
function gq(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [i, s] = o.useState(a),
        d = o.useCallback(() => {
            s(!i);
        }, [i]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "text-feedback-warning";
    function u(e) {
        return (0, r.jsx)(x.E, { variant: e, color: c, children: t });
    }
    return null == l
        ? (0, r.jsx)("div", { className: gY.NF, children: u("body-md/normal") })
        : (0, r.jsxs)("div", {
              className: gY.NF,
              children: [
                  (0, r.jsxs)(et.D, {
                      className: gY.jr,
                      onClick: d,
                      children: [
                          u("body-md/semibold"),
                          (0, r.jsx)(iP.A, {
                              direction: i ? iP.A.Directions.DOWN : iP.A.Directions.RIGHT,
                              className: gY.D,
                          }),
                      ],
                  }),
                  i && (0, r.jsx)("div", { className: gY.m4, children: l }),
              ],
          });
}
function gJ(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case gz.Z6.ROOT:
                    return "migrated-root";
                case gz.Z6.SECTION:
                case gz.Z6.PANEL:
                case gz.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        i = "migrated" === l ? "migrated" : void 0,
        s = null;
    return (
        (0, gz.nW)(t) &&
            t.layout.length > 0 &&
            (s = t.layout.map((e) => (0, r.jsx)(gJ, { setting: e, depth: a + 1, inheritedHighlightMode: i }, e.key))),
        (0, r.jsx)(gq, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: s })
    );
}
function gQ() {
    let { node: e } = (0, eu.Ay)(gK.D, ""),
        t = (0, eu.KA)();
    return (0, r.jsxs)(u.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(m.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: eu.jL,
            }),
            (0, r.jsx)(gJ, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var gX = a(728564);
function gZ() {
    return (0, r.jsxs)(g.Ip, {
        className: gX.n,
        children: [
            (0, r.jsx)(gH, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(g$, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(gQ, {}),
        ],
    });
}
function g0() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: ng.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(ld, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: ng.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(hT, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: ng.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(hr, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: ng.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(iE, {}),
            },
        ];
        return (
            nr.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: ng.fu.SHOP, render: () => (0, r.jsx)(m1, {}) }),
                e.push({
                    id: "storefront",
                    name: "Storefront Overrides",
                    group: ng.fu.STOREFRONT,
                    render: () => (0, r.jsx)(m7, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: ng.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(ct, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: ng.fu.SHOP,
                    render: () => (0, r.jsx)(tY, {}),
                }),
                e.push({
                    id: "shop_game_server_hosting",
                    name: "GSH",
                    group: ng.fu.SHOP,
                    tags: ["game server", "gsh", "highlight", "checkout"],
                    render: () => (0, r.jsx)(aP, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: ng.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "checkpoint", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(u$, {}),
                }),
                e.push({
                    id: "routing_key",
                    name: "Routing Key",
                    group: ng.fu.DEVELOPMENT,
                    tags: ["routing", "traffic", "routing-key", "network"],
                    render: () => (0, r.jsx)(uZ, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: ng.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(i_, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: ng.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(cN.Ay, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: ng.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(iT, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: ng.fu.GAMES, render: () => (0, r.jsx)(dU, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: ng.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(sR, {}),
                }),
                no.isPlatformEmbedded &&
                    (e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: ng.fu.GAMES,
                        render: () => (0, r.jsx)(l7, {}),
                    }),
                    e.push({
                        id: "running_game_detection",
                        name: "Running Game Detection",
                        group: ng.fu.GAMES,
                        tags: ["detection", "filter", "blocklist", "native"],
                        render: () => (0, r.jsx)(u5, {}),
                    }),
                    e.push({
                        id: "game_icon_extractor",
                        name: "Game Icon Extractor",
                        group: ng.fu.GAMES,
                        tags: ["ico", "icon", "png", "rtc"],
                        render: () => (0, r.jsx)(iq, {}),
                    }),
                    e.push({
                        id: "game_mode",
                        name: "Game Mode",
                        group: ng.fu.GAMES,
                        tags: ["fps", "frame rate", "throttle", "performance", "reduce motion"],
                        render: () => (0, r.jsx)(a_, {}),
                    })),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: ng.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, r.jsx)(l2, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: ng.fu.GAMES, render: () => (0, r.jsx)(m3, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: ng.fu.GAMES,
                    render: () => (0, r.jsx)(nT, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: ng.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(az, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: ng.fu.GAMES,
                    render: () => (0, r.jsx)(ns, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: ng.fu.GAMES,
                    render: () => (0, r.jsx)(aO, {}),
                }),
                e.push({
                    id: un.NM,
                    name: "Presence Resolution",
                    group: ng.fu.GAMES,
                    tags: ["presence", "activity", "application", "linked games", "game profile"],
                    render: () => (0, r.jsx)(up, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: ng.fu.USERS,
                    render: () => (0, r.jsx)(gS, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: ng.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(X, {}) })),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                e.push({
                    id: "partner_perks",
                    name: "Partner Perks",
                    group: ng.fu.PREMIUM,
                    tags: ["xgp"],
                    render: () => (0, r.jsx)(dK, {}),
                }),
            e.push({
                id: "rive",
                name: "Rive",
                group: ng.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(uz, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: ng.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag", "shop", "quests", "artwork"],
                render: () => (0, r.jsx)(rh, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: ng.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rK, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: ng.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(rw, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: ng.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(lN, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: ng.fu.UI, render: () => (0, r.jsx)(lX, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: ng.fu.UI,
                render: () => (0, r.jsx)(c5, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: ng.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(i2, { devSettingsCategory: S.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: ng.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(oi, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: ng.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(i2, { devSettingsCategory: S.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: ng.fu.USERS, render: () => (0, r.jsx)(cB, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: ng.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(og, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: ng.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rQ, {}),
            }),
            e.push({
                id: "toasts",
                name: "Toasts",
                group: ng.fu.UI,
                tags: ["notifications", "snackbar", "mana"],
                render: () => (0, r.jsx)(hN, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: ng.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(r$, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: ng.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(nU, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: ng.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(l_, {}),
            }),
            nr.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: ng.fu.USERS,
                    render: () => (0, r.jsx)(ap, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: ng.fu.USERS,
                    render: () => (0, r.jsx)(a2, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: ng.fu.DCF, render: () => (0, r.jsx)(lY, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: ng.fu.DCF, render: () => (0, r.jsx)(lO, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: ng.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(rD, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: ng.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up", "perks", "sources", "bitmask"],
                render: () => (0, r.jsx)(cT, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: ng.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(oD, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: ng.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(cg, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: ng.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(oM, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: ng.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(xd, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: ng.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(iW, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: ng.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(sF, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: ng.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(pp, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: ng.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(hX, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: ng.fu.AUDIO_VIDEO,
                tags: ["steam audio", "hrtf", "binaural", "reflections", "reverb", "room", "spatial audio"],
                render: () => (0, r.jsx)(pQ, {}),
            }),
            e.push({
                id: "conjure",
                name: "Conjure",
                group: ng.fu.AUDIO_VIDEO,
                tags: ["conjure", "capture", "screenshot", "png", "game"],
                render: () => (0, r.jsx)(pt, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: ng.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(h0, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: ng.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(r_, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: ng.fu.BOOSTING, render: () => (0, r.jsx)(i0, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: ng.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rP, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: ng.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(gZ, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: ng.fu.QUESTS,
                render: () => (0, r.jsx)(a8, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: ng.fu.QUESTS,
                render: () => (0, r.jsx)(hw, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: ng.fu.BILLING,
                render: () => (0, r.jsx)(gP, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: ng.fu.QUESTS,
                render: () => (0, r.jsx)(x5, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: ng.fu.USERS,
                render: () => (0, r.jsx)(uy, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: ng.fu.USERS,
                render: () => (0, r.jsx)(lf, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: ng.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(ii, {}),
            }),
            e
        );
    }, []);
}
