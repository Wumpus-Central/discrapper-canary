(a.d(t, { x: () => pD }), a(321073));
var n,
    l,
    i,
    s,
    r = a(477900),
    o = a(582128),
    d = a(17928),
    c = a(314116),
    u = a(270003),
    m = a(243721),
    h = a(532446),
    x = a(821609),
    p = a(834730),
    g = a(364522),
    v = a(611677),
    j = a(691885),
    f = a(95477),
    b = a(404778),
    y = a(77729),
    E = a(952818),
    _ = a(905552),
    C = a(544576),
    S = a(157257),
    N = a(507868),
    A = a(915725),
    k = a(341923),
    I = a(655180),
    D = a(282098),
    T = a(564973),
    O = a(227628),
    R = a(468550);
let w = (0, a(196765).v)(() => ({ enabled: !1, pending: null, lastResult: null }));
function M(e) {
    w.setState({ enabled: e });
}
function L(e) {
    w.setState({ pending: e });
}
function P(e) {
    w.setState({ lastResult: e });
}
var U = a(781710),
    G = a(696016),
    B = a(264572).Buffer;
function F() {
    let e = w((e) => e.enabled),
        t = w((e) => e.pending),
        a = w((e) => e.lastResult),
        n = o.useCallback(async (e, t, a, n) => {
            let l = C.Ay.getMediaEngine();
            if (null == l.setClipsPerfMonitoring) return (P("setClipsPerfMonitoring unsupported in this build"), null);
            L(n);
            try {
                let n = await l.setClipsPerfMonitoring(e, t, a);
                return (M(n.enabled), n);
            } catch (e) {
                return (P(`${n} failed: ${e instanceof Error ? e.message : String(e)}`), null);
            } finally {
                L(null);
            }
        }, []),
        l = o.useCallback(
            async (t) => {
                M(t);
                let a = await n(t, !1, !1, t ? "enable" : "disable");
                null != a ? P(`recorder ${a.enabled ? "enabled" : "disabled"}`) : M(e);
            },
            [n, e],
        ),
        i = o.useCallback(async () => {
            let t = await n(e, !0, !1, "save");
            if (null == t) return;
            if ("" === t.html) return void P("save: server returned empty html");
            let a = `clips-perf-${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            try {
                let e = B.from(t.html, "utf8"),
                    n = await y.A.fileManager.saveWithDialog2(e, a);
                if (null != n && !0 === n.canceledByUser) return void P("save: canceled");
                P(`saved ${t.eventCount} events (${t.html.length} bytes)`);
            } catch (e) {
                P(`save failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, [n, e]),
        s = o.useCallback(async () => {
            let t = await n(e, !1, !0, "clear");
            null != t && P(`cleared ${t.eventCount} events`);
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
                    (0, r.jsx)(x.$, { text: "Save as file...", disabled: null != t, onClick: i }),
                    (0, r.jsx)(x.$, { text: "Clear recording", variant: "secondary", disabled: null != t, onClick: s }),
                ],
            }),
            (null != t || null != a) &&
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: null != t ? `working: ${t}...` : a,
                }),
        ],
    });
}
let $ = [
    { label: "Laughter Model", flag: G.pZ.LAUGHTER },
    { label: "Shouting Model", flag: G.pZ.SHOUTING },
    { label: "Events", flag: G.pZ.GAME_EVENTS },
];
function V() {
    let e = (0, d.bG)([N.A], () => N.A.isStaffBypassDisabled()),
        t = (0, d.bG)([N.A], () => N.A.isStaffBypassActive()),
        a = (0, d.bG)([N.A], () => N.A.hasLoadedCapabilities()),
        n = (0, d.bG)([N.A], () => N.A.getGameCapabilities().size),
        l = (0, d.bG)([E.Ay], () => E.Ay.getVisibleGame()),
        i = l?.id,
        s = (0, d.bG)([N.A], () => N.A.getCapabilities(i), [i]),
        o = (0, d.bG)([N.A], () => null != i && N.A.getGameCapabilities().has(i), [i]),
        c = (0, k.GZ)(i);
    return (0, r.jsxs)(u.n, {
        label: "Autoclipping Game Capabilities",
        children: [
            (0, r.jsx)(m.d, {
                label: "Ignore staff bypass",
                description:
                    "Staff normally get autoclipping for every game. Turn this on to be treated as a regular user, so autoclipping follows the server capabilities map. Resets to off each time Discord launches.",
                checked: e,
                onChange: I.jE,
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-md/normal",
                children: ["capabilities: ", a ? `loaded, ${n} game(s)` : "not loaded yet"],
            }),
            (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["staff bypass active: ", String(t)] }),
            null == l
                ? (0, r.jsx)(p.E, { variant: "text-md/normal", children: "no visible game running" })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(p.E, { variant: "text-md/normal", children: [l.name, " (", l.id, ")"] }),
                          (0, r.jsxs)(p.E, {
                              variant: "text-md/normal",
                              children: ["autoclipping: ", c ? "Yes" : "No"],
                          }),
                          (0, r.jsxs)(p.E, {
                              variant: "text-md/normal",
                              children: ["in capabilities map: ", o ? "Yes" : "No", " (bitmask ", s, ")"],
                          }),
                          $.map((e) => {
                              let { label: t, flag: a } = e;
                              return (0, r.jsxs)(
                                  p.E,
                                  { variant: "text-md/normal", children: [t, ": ", (s & a) != 0 ? "Yes" : "No"] },
                                  t,
                              );
                          }),
                          !o &&
                              c &&
                              (0, r.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children:
                                      'This game isn\'t in the map \u2014 autoclipping is on via the staff bypass, so every capability above reads No. Turn on "Ignore staff bypass" to see what a regular user gets.',
                              }),
                      ],
                  }),
            (0, r.jsx)(x.$, {
                text: "refetch capabilities",
                variant: "secondary",
                disabled: null == i,
                onClick: () => {
                    null != i && T.b.refetchMany([i]);
                },
            }),
        ],
    });
}
function W() {
    let e = (0, O.MZ)((e) => e.isOpen),
        t = (0, R.sY)((e) => e.isOpen),
        [a, n] = o.useState(3),
        l = o.useCallback((e) => {
            let t = Object.values(A.Ay.getClips()),
                a = t.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = t.filter((e) => e.applicationId === n).slice(0, e);
            (A.Ay.devSetLastClipsSession({
                applicationName: a.applicationName,
                newClipIds: l.map((e) => e.id),
                ended: !0,
            }),
                (0, R.M8)(n));
        }, []),
        i = o.useCallback(
            (e) => {
                e ? l(a) : (0, R.kF)();
            },
            [l, a],
        ),
        s = o.useCallback(() => {
            let e = Object.values(A.Ay.getClips()),
                t = (0, _.A)(E.Ay, S.A),
                a =
                    (t?.id != null ? e.find((e) => e.applicationId === t.id) : void 0) ??
                    e.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = e.filter((e) => e.applicationId === n).slice(0, 10);
            (A.Ay.devSetLastClipsSession({
                applicationName: a.applicationName,
                newClipIds: l.map((e) => e.id),
                ended: !0,
            }),
                (0, O.w9)());
        }, []),
        C = o.useCallback(
            (e) => {
                e ? s() : (0, O.yj)();
            },
            [s],
        ),
        N = o.useCallback(
            (e) => {
                (n(e), t && l(e));
            },
            [l, t],
        ),
        [k, T] = o.useState(G.rb.KILL),
        [w, M] = o.useState(1),
        [L, P] = o.useState(""),
        [B, $] = o.useState(""),
        W = (0, d.bG)([A.Ay], () => A.Ay.isAutoStashEnabled()),
        z = o.useCallback((e) => {
            e
                ? (0, c.A)({
                      title: "Stash all gaming sessions?",
                      subtitle:
                          "Every gaming session will be stashed to your Desktop (inside the `decider_stash` folder) when it ends. This setting is not persistent \u2014 it resets to off each time Discord launches.",
                      confirmText: "Enable",
                      variant: "primary",
                      onConfirm: () => {
                          I.mN(!0);
                      },
                  })
                : I.mN(!1);
        }, []),
        [H, K] = o.useState([]),
        [Y, q] = o.useState(void 0),
        J = o.useCallback((e) => {
            (K(e), q((t) => (null != t && e.includes(t) ? t : e[0])));
        }, []),
        Q = o.useCallback(async () => {
            let e = y.A.clips.debugListStashedClipDeciderSessions;
            null != e && J(await e());
        }, [J]);
    o.useEffect(() => {
        let e = !0,
            t = y.A.clips.debugListStashedClipDeciderSessions;
        if (null != t)
            return (
                t().then((t) => {
                    e && J(t);
                }),
                () => {
                    e = !1;
                }
            );
    }, [J]);
    let X = (0, d.bG)([A.Ay], () => A.Ay.getState().clipsSettings.enableAutoclipping),
        Z = (0, d.bG)([A.Ay], () => A.Ay.getEnableAutoclipping());
    return (0, r.jsx)(g.Ip, {
        children: (0, r.jsxs)(v.l, {
            children: [
                (0, r.jsx)(u.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(h.M, {
                        children: [
                            (0, r.jsx)(x.$, { text: "Manual", onClick: () => I.Ts({ type: G.Gy.MANUAL }) }),
                            (0, r.jsx)(x.$, {
                                text: "Distributed",
                                onClick: () =>
                                    I.Ts({
                                        type: G.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(x.$, {
                                text: "Shouting",
                                onClick: () => I.Ts({ type: G.Gy.SHOUTING, userId: "123", confidence: 1 }),
                            }),
                            (0, r.jsx)(x.$, { text: "Laughter", onClick: () => D.A.debugCreateRankableLaughterClip() }),
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
                                    value: k,
                                    onSelectionChange: (e) => T(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: G.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: G.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: G.rb.DEATH },
                                        { id: "assist", label: "Assist", value: G.rb.ASSIST },
                                        { id: "item", label: "Item", value: G.rb.ITEM },
                                        { id: "victory", label: "Victory", value: G.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: G.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: G.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: G.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: G.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Importance",
                                    value: w,
                                    onSelectionChange: M,
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
                            label: "Title (optional)",
                            value: L,
                            onChange: P,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, r.jsx)(f.k, {
                            label: "Description (optional)",
                            value: B,
                            onChange: $,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(x.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                I.Ts({ type: G.Gy.GAME_EVENT, eventType: k, importance: w, title: L, description: B });
                            },
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Auto-stash decider data",
                            description:
                                "Stashes every gaming session to your Desktop when it ends. Resets to off on each Discord launch.",
                            checked: W,
                            onChange: z,
                        }),
                        (0, r.jsx)(j.l, {
                            label: "Stash session (re-run ranking)",
                            value: Y,
                            onSelectionChange: (e) => q(e),
                            options: H.map((e) => ({ id: e, label: e, value: e })),
                            placeholder: 0 === H.length ? "No stashed sessions" : "Most recent",
                            disabled: 0 === H.length,
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                        (0, r.jsxs)(h.M, {
                            children: [
                                (0, r.jsx)(x.$, {
                                    text: "re-run ranking",
                                    onClick: () => {
                                        D.i.debugRerunRanking(Y).catch((e) => {
                                            G.nx.error("re-run ranking failed", e);
                                        });
                                    },
                                }),
                                (0, r.jsx)(x.$, {
                                    text: "run automontage",
                                    onClick: () => {
                                        D.i.debugRunAutoMontage(Y).catch((e) => {
                                            G.nx.error("run automontage failed", e);
                                        });
                                    },
                                }),
                                (0, r.jsx)(x.$, {
                                    text: "refresh sessions",
                                    variant: "secondary",
                                    onClick: () => {
                                        Q();
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.n, { label: "Clip Metadata Tool", children: (0, r.jsx)(U.A, {}) }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(F, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(V, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsxs)(u.n, {
                    label: "Reminder UI",
                    children: [
                        (0, r.jsx)(m.d, {
                            label: "Clips Quick Bar",
                            description:
                                "Force-show the inline quick bar above the account panel. Fabricates a session (up to 10 clips) from your recent clips so it can be tested without capturing a real game session.",
                            checked: e,
                            onChange: C,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Clips Reminder",
                            description:
                                "Force-show the post-session ClipsReminder panel. Fabricates a session from your most recent clips (and game) so it can be tested without capturing a real game session.",
                            checked: t,
                            onChange: i,
                        }),
                        (0, r.jsx)(j.l, {
                            label: "Clip count",
                            value: a,
                            onSelectionChange: N,
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
                                (0, r.jsxs)(p.E, {
                                    variant: "text-md/normal",
                                    children: ["autoclippingEnabled (internal): ", String(X)],
                                }),
                                (0, r.jsxs)(p.E, {
                                    variant: "text-md/normal",
                                    children: ["autoclippingEnabled (exposed): ", String(Z)],
                                }),
                                (0, r.jsx)(x.$, {
                                    text: "unset autoclipping default",
                                    onClick: () => {
                                        I.uL(void 0, !1);
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
var z = a(503698),
    H = a.n(z),
    K = a(939249),
    Y = a(683071),
    q = a(331322),
    J = a(811893),
    Q = a(297264),
    X = a(538064),
    Z = a(265059),
    ee = a(902592),
    et = a(869146);
(a(323874), a(14289), a(35956));
var ea = a(789645),
    en = a(589158),
    el = a(65593),
    ei = a(377980),
    es = a(581298),
    er = a(393284),
    eo = a(287809),
    ed = a(901139),
    ec = a(641886),
    eu = a(780898),
    em = a(652215),
    eh = a(121686),
    ex = a(427262);
function ep(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([eo.default], () => eo.default.getCurrentUser()),
        n = ex.Ay.useName(a) ?? "";
    return (0, r.jsx)(eh.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: em.clD.ONLINE,
        currentUser: a,
        activities: [],
        applicationStream: void 0,
        userTag: "",
        speakingWhileMuted: !1,
        speakingWhilePTTInactive: !1,
        occluded: !1,
        dismissibleContents: { avatar: [], settings: [] },
        awaitingRemote: !1,
        nameplate: t,
        voiceChannel: null,
        isQuestBarEmpty: !0,
        isListenAlongVisible: !1,
    });
}
var eg = a(736653),
    ev = a(653523),
    ej = a(475601);
function ef(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, eg.Ay)();
    return (0, r.jsxs)("div", {
        className: ej.N,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: ej.Z,
                children: ec.Z6.map((e) => {
                    let l = n !== em.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        i = t === e.name;
                    return (0, r.jsx)(
                        ev.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: i },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var eb = a(715069),
    ey = a(95701),
    eE = a(331884);
function e_(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, eE.i)(),
        l = new ey.cq({ id: "0", type: em.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(eb.th, { selected: t, channel: l, user: n, nameplate: a });
}
var eC = a(698638),
    eS = a(52940);
function eN() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, i] = (0, o.useState)(null),
        { node: s } = (0, es.Ay)(er.k, ""),
        d = (0, ed.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, ed.DE)(),
        { setImgCache: m } = (0, ed.TW)(),
        h = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? i({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : i((t) =>
                          null == t ? { previewToolKey: e, palette: ec.Wj, skuId: "0" } : { ...t, previewToolKey: e },
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
                className: eS.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: eS.gO,
                        children: [
                            (0, r.jsx)(x.$, {
                                size: "sm",
                                onClick: () => {
                                    (n(!1), t((e) => !e));
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, r.jsx)(x.$, {
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
                        className: eS.uQ,
                        children: [
                            e && (0, r.jsx)(ei.A, { node: s }),
                            a &&
                                (0, r.jsx)(ef, {
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
                className: eS.iW,
                children: [
                    (0, r.jsx)(eA, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: eS.Uo,
                        children: [
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(el.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eC.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    (m(t, t, (0, eu.nI)(n)), c(t, t, ec.Wj));
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: eS.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(ek, { src: t, onSetStatic: h, removeAsset: v }, t);
                                }),
                            }),
                            (0, r.jsx)(eD, {
                                label: "gradient override",
                                onChange: (e) => g({ name: ec.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(eI, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eA(e) {
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
            className: eS.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: eS.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(eT, { nameplate: t }),
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(eO, { nameplate: t }),
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(eR, { nameplate: t }),
                    (0, r.jsx)("div", { className: eS.Di, onMouseDown: u }),
                ],
            }),
        })
    );
}
function ek(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: eS.xO,
        children: [
            (0, r.jsx)(K.D, {
                onClick: () => n(t),
                className: eS.yV,
                children: (0, r.jsx)(ea.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: eS.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: eS.Lu,
                children: (0, r.jsx)(x.$, {
                    onClick: () => a(t),
                    size: "sm",
                    variant: "secondary",
                    text: "set nameplate",
                }),
            }),
        ],
    });
}
function eI(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: eS.Uu,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function eD(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: eS.Im,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: eS.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eT(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([eo.default], () => eo.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: eS.VH,
        children: (0, r.jsxs)("div", {
            className: eS.H1,
            children: [
                (0, r.jsx)(p.E, { className: eS.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(en.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(p.E, { className: eS.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(en.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(en.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function eO(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eS.VH,
        children: (0, r.jsxs)("div", {
            className: eS.H1,
            children: [
                (0, r.jsx)(p.E, { className: eS.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(e_, { nameplate: t }),
                (0, r.jsx)(p.E, { className: eS.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(e_, { selected: !0, nameplate: t }), (0, r.jsx)(e_, { selected: !0 })],
                }),
            ],
        }),
    });
}
function eR(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eS.VH,
        children: (0, r.jsx)("div", { className: eS.X2, children: (0, r.jsx)(ep, { nameplate: t }) }),
    });
}
a(508300);
var ew = a(132500),
    eM = a(157559),
    eL = a(780777),
    eP = a(993408),
    eU = a(315949),
    eG = a(25176),
    eB = a(816866),
    eF = a(87558),
    e$ = a(575593),
    eV = a(631903),
    eW = a(224640),
    ez = a(408278),
    eH = a(972213),
    eK = a(43990),
    eY = a(192308),
    eq = a(661531),
    eJ = a(231723),
    eQ = a(900686),
    eX = a(986687),
    eZ = a(252102),
    e0 = a(435558),
    e1 = a.n(e0),
    e2 = a(855915),
    e3 = a(480335);
let e6 = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, e0.cloneDeep)(t), [t]),
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
        { layerData: s } = (0, e2.A)({ skuId: i, layers: l.effects });
    return (0, r.jsx)(e3.p, { profileEffect: l, skuId: i, layerData: s });
};
var e5 = a(586886),
    e8 = a(778765);
let e4 =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    e9 = { [eF.qH.THUMBNAIL]: null, [eF.qH.STATIC]: null, [eF.qH.REDUCED_MOTION]: null },
    e7 = "debug",
    te = "reduced-motion-preview-modal";
function tt(e) {
    let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
    return (0, r.jsx)(eW.d, {
        transitionState: t,
        size: "md",
        onClose: a,
        maxHeight: "viewport",
        children: (0, r.jsxs)("div", {
            className: e5.Xd,
            children: [
                (0, r.jsx)("div", {
                    className: e5.y6,
                    children: (0, r.jsx)(ez.K, {
                        "aria-label": "Close",
                        onClick: a,
                        icon: eH.XLargeIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: e5.rU,
                    children: [
                        (0, r.jsx)(eK.N, {
                            theme: l,
                            children: (e) =>
                                (0, r.jsx)("img", { src: e4, alt: "", className: H()(e5.aM, e), "aria-hidden": !0 }),
                        }),
                        null != n &&
                            "" !== n &&
                            (0, r.jsx)("img", { src: n, className: e5.SD, alt: "Reduced motion preview" }),
                    ],
                }),
            ],
        }),
    });
}
function ta(e) {
    let { type: t, frame: a, theme: n, onClear: l } = e,
        i = t === eF.qH.REDUCED_MOTION,
        s = i ? e4 : e8.A,
        o = (0, r.jsx)(eK.N, {
            theme: n,
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("img", { src: s, alt: "", className: H()(e5.aM, e), "aria-hidden": !0 }),
                        a?.src != null &&
                            "" !== a.src &&
                            (0, r.jsx)("img", { src: a.src, className: H()(e5.SD, e), alt: "" }),
                    ],
                }),
        });
    return (0, r.jsxs)("div", {
        className: e5.pK,
        children: [
            (0, r.jsx)(Q.D, { variant: "heading-sm/bold", children: t }),
            i
                ? (0, r.jsx)(K.D, {
                      className: H()(e5.zd, e5.eB),
                      onClick: function () {
                          (0, eY.hasModalOpen)(te)
                              ? (0, eY.closeModal)(te)
                              : (0, eY.openModalLazy)(
                                    () =>
                                        Promise.resolve((e) =>
                                            (0, r.jsx)(tt, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                        ),
                                    { modalKey: te, onCloseRequest: () => (0, eY.closeModal)(te) },
                                );
                      },
                      children: o,
                  })
                : (0, r.jsx)("div", { className: e5.zd, children: o }),
            null != a && (0, r.jsx)(x.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
        ],
    });
}
let tn = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eB.wu)(),
            n = (0, d.bG)([eo.default], () => eo.default.getCurrentUser()),
            [l, i] = o.useState(!0),
            s = o.useRef({}),
            [c, u] = o.useState(!1),
            [m, h] = o.useState(!1),
            [g, v] = o.useState(8),
            [j, f] = o.useState([]),
            [b, y] = o.useState(e9),
            E = o.useRef([]),
            [_, C] = o.useState(t.name),
            S = _.toLowerCase().replace(/\s+/g, "_"),
            N = o.useMemo(
                () => ({
                    type: e$.R.PROFILE_EFFECT,
                    skuId: e7,
                    title: e7,
                    description: e7,
                    accessibilityLabel: e7,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: j,
                    animationType: eV.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [j],
            ),
            A = c ? eq.A.themes.DARK : eq.A.themes.LIGHT;
        function k(e) {
            let t = e.currentTarget.files;
            return null == t ? null : t[0];
        }
        function I(e, t) {
            let a = k(t);
            null != a &&
                (0, eF.Mz)(a, (t) => {
                    y((n) => ({ ...n, [e]: (0, eF.GT)(t, a) }));
                });
        }
        (o.useEffect(() => {
            let e = t.effects;
            e.length > 0 &&
                f(
                    e.map((e) => ({
                        ...e,
                        name: e.name ?? (0, eF.XG)(e.src),
                        randomizedSources: e.randomizedSources?.map((e) => ({
                            ...e,
                            filename: e.filename ?? (0, eF.XG)(e.src),
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
                                let e = (0, eF.fB)(a.base64);
                                ((a.src = e), E.current.push(e), y((e) => ({ ...e, [t]: a })));
                            }
                        }
                    });
            }, [t.stillFrames]));
        let D = { profileEffect: t, upsertProfileEffect: a },
            T = o.useRef(D);
        return (o.useEffect(() => {
            T.current = D;
        }),
        o.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = T.current;
            e.readonly || t({ skuId: e.skuId, name: _, effects: j, stillFrames: b });
        }, [j, b, _]),
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
                  className: e5.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eL.A, {
                                  ref: (e) => {
                                      s.current.animated = e;
                                  },
                                  onChange: function (e) {
                                      let t = k(e);
                                      null != t &&
                                          (0, eF.Mz)(t, async (e) => {
                                              let a = await (0, eF.Ay)(e, t, j.length);
                                              f((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eL.A, {
                                  ref: (e) => {
                                      s.current.thumbnail = e;
                                  },
                                  onChange: (e) => I(eF.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eL.A, {
                                  ref: (e) => {
                                      s.current.static = e;
                                  },
                                  onChange: (e) => I(eF.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eL.A, {
                                  ref: (e) => {
                                      s.current.reducedMotion = e;
                                  },
                                  onChange: (e) => I(eF.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: e5.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: H()(e5.nM, e5.uW),
                                  children: [
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: _,
                                          className: e5.hF,
                                          onChange: (e) => {
                                              C(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e5.nM,
                                  children: [
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: c,
                                          className: e5.OO,
                                          onChange: () => {
                                              u(!c);
                                          },
                                      }),
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: m,
                                          className: e5.OO,
                                          onChange: () => {
                                              h(!m);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e5.nM,
                                  children: [
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: g,
                                          onChange: (e) => v(+e.target.value),
                                      }),
                                      (0, r.jsxs)(p.E, { variant: "text-sm/normal", children: [g, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: H()(e5.nz, e5.VH),
                                  style: { borderRadius: g },
                                  children: [
                                      m
                                          ? (0, r.jsx)("div", {
                                                className: e5.jq,
                                                children: (0, r.jsx)(eZ.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: eJ.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: e5.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eK.N, {
                                                theme: A,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: H()(e5.aM, e),
                                                        children: (0, r.jsx)("img", { src: e8.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: e5.KJ,
                                              children: (0, r.jsx)(e6, { profileEffect: N }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      m &&
                                      (0, r.jsxs)("div", {
                                          className: H()(e5.f5, e5.VH),
                                          style: { borderRadius: g },
                                          children: [
                                              (0, r.jsx)(eX.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  hideProfileFrame: !0,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(e6, { profileEffect: N }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: e5.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: e5.nM,
                                          children: [
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => s.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(p.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: e5.nM,
                                          children: [
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => s.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => s.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => s.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)("div", {
                                          className: e5.q6,
                                          children: (0, r.jsx)("div", {
                                              className: e5.nM,
                                              children: (0, r.jsx)(x.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      (i(!1), setTimeout(() => i(!0), 100));
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: H()(e5.q6, e5.XA),
                                          children: [
                                              (0, r.jsx)(p.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(p.E, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: e5.nM,
                                                  children: [
                                                      (0, r.jsx)(eQ.A, {
                                                          fileContents: () => (0, eF.rs)(j),
                                                          contentType: "text/plain",
                                                          fileName: `${S}_timing_config.txt`,
                                                          children: (0, r.jsx)(x.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eQ.A, {
                                                          fileContents: function () {
                                                              return JSON.stringify({
                                                                  ...t,
                                                                  name: _,
                                                                  readonly: !1,
                                                                  effects: j,
                                                                  stillFrames: b,
                                                              });
                                                          },
                                                          contentType: "text/plain",
                                                          fileName: `${S}_config.txt`,
                                                          children: (0, r.jsx)(x.$, {
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
                                          className: e5.uW,
                                          children: [
                                              (0, r.jsx)(Q.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: e5.mv,
                                                  children: Object.entries(b).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          ta,
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
                                      j.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, r.jsxs)("div", {
                                              className: H()(e5.uW, e5.l7),
                                              children: [
                                                  (0, r.jsx)(p.E, {
                                                      variant: "text-md/bold",
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
                                  className: H()(e5.Vg, e5.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: e5.cD,
                                          children: (0, r.jsx)(x.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: function () {
                                                  (f([]), y(e9));
                                              },
                                          }),
                                      }),
                                      j.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: e5.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: e5.D1,
                                                          children: [
                                                              (0, r.jsx)(Q.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: e5.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(Q.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(Q.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: e5.oq,
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
                                                          className: H()(e5.Vg, e5.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e5.nz,
                                                                  children: [
                                                                      (0, r.jsx)(p.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: e5.hF,
                                                                          onChange: (e) => {
                                                                              f((a) => {
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
                                                                  className: e5.nz,
                                                                  children: [
                                                                      (0, r.jsx)(p.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: e5.hF,
                                                                          onChange: (e) => {
                                                                              f((a) => {
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
                                                          className: H()(e5.Vg, e5.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e5.nz,
                                                                  children: [
                                                                      (0, r.jsx)(p.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: e5.OO,
                                                                          onChange: (e) => {
                                                                              f((a) => {
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
                                                                  className: e5.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(p.E, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: e5.hF,
                                                                                  onChange: (e) => {
                                                                                      f((a) => {
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
                                                          children: (0, r.jsx)(eL.A, {
                                                              ref: (e) => {
                                                                  s.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = k(e)) &&
                                                                      (0, eF.Mz)(a, (e) => {
                                                                          f((n) => {
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
                                                          className: H()(e5.nM, e5._N),
                                                          children: [
                                                              (0, r.jsx)(x.$, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      s.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, r.jsx)(x.$, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      f((t) => t.filter((t) => t !== e));
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
    tl = "Make sure you're only uploading text files!";
function ti(e) {
    let { profileEffect: t, onClick: a } = e,
        { deleteProfileEffect: n } = (0, eB.wu)();
    return (0, r.jsxs)(K.D, {
        className: e5.B0,
        onClick: a,
        children: [
            (0, r.jsx)("div", { className: e5.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
            (0, r.jsxs)("div", {
                className: e5.eL,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/bold", children: t.name }),
                    (0, r.jsx)(x.$, {
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
function ts() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eB.wu)(),
        [n, l] = o.useState(),
        i = o.useRef(null),
        { categories: s } = (0, eU.A)(),
        d = o.useMemo(() => (0, eP.Wj)(s), [s]),
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
                if (null == a || !e.type.startsWith("text/")) return (0, eG.Ni)(tl);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eG.Ni)(tl);
                let i = JSON.parse(atob(l));
                ((i.skuId = (0, ew.A)()), t(i), (0, eG.GF)("Profile Effect (maybe??) imported!"));
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eG.Ni)("Error uploading file. Try again!")
                    : (0, eG.KE)(e.currentTarget.files, h, eG.Ni);
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: e5.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: e5.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: H()(e5.uW, e5.nM),
                                    children: [
                                        (0, r.jsx)(Q.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(x.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await eM.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, eG.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: e5.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(ti, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: H()(e5.nM, e5._N, e5.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: e5.au,
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            variant: "text-md/normal",
                                            color: "text-overlay-light",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eL.A, { ref: i, onChange: g, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: function () {
                                        t({ skuId: (0, ew.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: e5.uW,
                            children: [
                                (0, r.jsx)(Q.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(f.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: e5.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            K.D,
                                            {
                                                className: e5.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [eF.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eF.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eF.qH.REDUCED_MOTION]:
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
                                                    className: e5.Hd,
                                                    children: (0, r.jsx)(p.E, {
                                                        variant: "text-md/normal",
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
            null != n && (0, r.jsx)(tn, { profileEffect: n }),
        ],
    });
}
var tr = a(935399),
    to = a(462887),
    td = a(289873),
    tc = a(478016),
    tu = a(565645),
    tm = a(7584),
    th = a(619499),
    tx = a(207803),
    tp = a(84540),
    tg = a(836602),
    tv = a(999291),
    tj = a(903209),
    tf = a(841702),
    tb = a(892118),
    ty = a(744808),
    tE = a(965452),
    t_ = a(626768),
    tC = a(464896);
function tS() {
    let e = (0, eg.Ay)();
    return (0, r.jsxs)("div", {
        className: tE.z3,
        children: [
            (0, r.jsx)("img", { src: (0, to.M)(e) ? t_ : tC, alt: "" }),
            (0, r.jsx)(p.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tN() {
    let e = (0, d.bG)([eo.default], () => eo.default.getCurrentUser()),
        t = (0, tv.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, tj.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, tf.Bf)(),
        l = o.useMemo(() => (0, eP.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: i }, s] = (0, d.yK)([tg.A], () => [tg.A.getPendingChanges(), tg.A.showNotice()]),
        c = void 0 === i ? t?.profileFrame : i,
        u = null != c ? a.get(c.skuId) : void 0,
        m = (0, tb.s)(u?.items[0]) ? u.items[0] : void 0;
    return (
        (0, tr.l0)(tx.RE),
        (0, r.jsxs)("div", {
            className: tE.kL,
            children: [
                (0, r.jsxs)(Q.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(tu.A, {
                            emojiName: tm.Ay.getByName("frame_with_picture")?.surrogates,
                            className: tE.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(td.y, {}),
                0 === l.length && !n && (0, r.jsx)(tS, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: tE.MK,
                        children: [
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: tE.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(x.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == c ? tc.U : void 0,
                                                disabled: null == c,
                                                onClick: () => (0, tp.p)({ profileFrame: null }),
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
                                                      children: (0, r.jsx)(x.$, {
                                                          text: t.name,
                                                          variant: "secondary",
                                                          fullWidth: !0,
                                                          icon: c?.skuId === e.skuId ? tc.U : void 0,
                                                          disabled: c?.skuId === e.skuId,
                                                          onClick: () => (0, tp.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            s && (0, r.jsx)(th.A, {}),
                            (0, r.jsxs)("div", {
                                className: tE.VH,
                                children: [
                                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: tE.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: e8.A, alt: "" }),
                                            null != m && (0, r.jsx)(ty.A, { frame: m, isPreview: !0 }),
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
var tA = a(702841),
    tk = a(793574),
    tI = a(590180),
    tD = a(4227),
    tT = a(258245),
    tO = a(61750),
    tR = a(228366),
    tw = a(499454),
    tM = a(202541);
let tL = "devtools-collectibles-gift";
async function tP(e) {
    let { skuId: t, sender: a } = e,
        n = {
            code: tL,
            user: { id: a.id },
            sku_id: t,
            uses: 0,
            max_uses: 1,
            expires_at: null,
            redeemed: !1,
            application_id: em.FYj,
            gift_style: tM.o2.STANDARD_BOX,
        };
    (await tR.h.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: n }), (0, tw.h)({ processedCode: tL }));
}
var tU = a(80101);
let tG = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tD.A.getPurchase;
                return (
                    (tD.A.getPurchase = (e) => void 0),
                    tD.A.emitChange(),
                    a(1),
                    () => {
                        ((tD.A.getPurchase = e), tD.A.emitChange());
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tU.Do, children: (0, r.jsx)(tT.A, { ...e }, t) })
        );
    },
    tB = () => {
        let e = (0, tA.bG)([eo.default], () => eo.default.getCurrentUser()),
            t = (0, tA.bG)([tI.A], () => tI.A.categories),
            a = (0, tA.bG)([tD.A], () => tD.A.purchases),
            n = (0, tA.bG)([tI.A], () => tI.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: i, categories: s } = (0, tf.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
            d = l ? t : s,
            c = l || (!i && d.size > 0),
            [u, m] = o.useState(""),
            [h, g] = o.useState(null),
            [v, j] = o.useState(null);
        return (o.useEffect(() => {
            if ("" === u.trim() || !c) {
                (g(null), j(null));
                return;
            }
            let e = tI.A.getProduct(u),
                t = tI.A.getCategoryForProduct(u);
            null != e && null != t ? (g(e), j(t)) : (g(null), j(null));
        }, [u, c]),
        i)
            ? (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, r.jsx)(p.E, { variant: "text-md/normal", children: "No user found" })
              : (0, r.jsxs)("div", {
                    className: tU.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tU.uW,
                            children: [
                                (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, r.jsxs)("div", {
                                    className: tU.qp,
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            variant: "text-md/semibold",
                                            className: tU.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(f.k, { value: u, onChange: m, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, r.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                className: tU.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == h &&
                                            (0, r.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                className: tU.kc,
                                                children: "Product not found",
                                            }),
                                        null != h &&
                                            (0, r.jsxs)(p.E, {
                                                variant: "text-sm/normal",
                                                className: tU.xT,
                                                children: ["Found: ", h.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tU.uW,
                            children: [
                                (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != h && null != v
                                    ? (0, r.jsxs)("div", {
                                          className: tU.i1,
                                          children: [
                                              (0, r.jsx)(tG, { skuId: h.skuId }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "primary",
                                                  onClick: function () {
                                                      null != h &&
                                                          null != e &&
                                                          (0, tO.A)({
                                                              product: h,
                                                              analyticsLocations: [tk.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "primary",
                                                  onClick: function () {
                                                      null != h && null != e && tP({ skuId: h.skuId, sender: e });
                                                  },
                                                  text: "Show Gift Accept Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: tU.qf,
                                          children: (0, r.jsx)(p.E, {
                                              variant: "text-md/normal",
                                              className: tU.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
var tF = a(646695);
let t$ = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 };
function tV(e) {
    let { setTab: t } = e,
        a = (0, d.bG)([et.A], () => et.A.getWindowOpen(em.MLl.DEVTOOLS_POPOUT));
    return (0, r.jsxs)("div", {
        className: tF.Qs,
        children: [
            (0, r.jsx)(K.D, {
                onClick: () => {
                    t(1);
                },
                children: (0, r.jsx)("div", {
                    className: H()(tF.vK, tF.Dg),
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Profile Effects",
                    }),
                }),
            }),
            (0, r.jsx)(K.D, {
                onClick: () => {
                    t(2);
                },
                children: (0, r.jsx)("div", {
                    className: H()(tF.vK, tF.st),
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Nameplates",
                    }),
                }),
            }),
            (0, r.jsx)(K.D, {
                onClick: () => {
                    t(3);
                },
                children: (0, r.jsx)("div", {
                    className: H()(tF.vK, tF.BW),
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Profile Frames",
                    }),
                }),
            }),
            (0, r.jsx)(K.D, {
                onClick: () => {
                    t(4);
                },
                children: (0, r.jsx)("div", {
                    className: H()(tF.vK, tF.IP),
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Products",
                    }),
                }),
            }),
            !a &&
                (0, r.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(Y.w, {
                        type: "warning",
                        children: (0, r.jsxs)(q.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    children: "You can pop out the DevTools to see the full layout.",
                                }),
                                (0, r.jsx)(x.$, {
                                    size: "sm",
                                    icon: J.t,
                                    variant: "secondary",
                                    onClick: ee.openDevToolsPopout,
                                    text: "Popout DevTools",
                                }),
                            ],
                        }),
                    }),
                }),
        ],
    });
}
let tW = function () {
    let [e, t] = o.useState(() => {
        let e = Z.A.lastOpenSubTabId;
        return null != e && e in t$ ? t$[e] : 0;
    });
    return (
        o.useEffect(() => {
            null != Z.A.lastOpenSubTabId && (0, X.Jt)({ lastOpenSubTabId: null });
        }, []),
        (0, r.jsxs)(g.Ip, {
            className: tF.iE,
            children: [
                (0, r.jsxs)("div", {
                    className: tF.C$,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                        0 !== e && (0, r.jsx)(x.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                    ],
                }),
                (function () {
                    switch (e) {
                        case 1:
                            return (0, r.jsx)(ts, {});
                        case 2:
                            return (0, r.jsx)(eN, {});
                        case 3:
                            return (0, r.jsx)(tN, {});
                        case 4:
                            return (0, r.jsx)(tB, {});
                        default:
                            return (0, r.jsx)(tV, { setTab: t });
                    }
                })(),
            ],
        })
    );
};
var tz = a(681154),
    tH = a(306264),
    tK = a(506774),
    tY = a(587895),
    tq = a(429913),
    tJ = a(475825),
    tQ = a(730441);
function tX(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: i, selectedRowKey: s, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: tQ.CZ,
        children: (0, r.jsx)(tJ.OZ, {
            className: n,
            innerClassName: tQ.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tQ.ZR;
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
                    u = H()(tQ.jD, { [tQ.wD]: o === s, rowClassName: l });
                return (0, r.jsx)(
                    K.D,
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
var tZ = a(409626),
    t0 = a(692969),
    t1 = a(760751),
    t2 = a(403362),
    t3 = a(435738),
    t6 = a(99753),
    t5 = a(402860),
    t8 = a(574520),
    t4 = a(808323),
    t9 = a(583846),
    t7 = a(424994),
    ae = a(14570);
function at(e) {
    let { id: t } = e,
        a = (0, d.bG)([eo.default], () => eo.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(K.D, {
              className: ae._,
              onClick: function () {
                  (0, t5.openUserProfileModal)({ sourceAnalyticsLocations: [tk.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function aa() {
    let e = (0, d.bG)([t6.A], () => t6.A.getFeed(t7.X1.GLOBAL_FEED)),
        t = (0, d.bG)([t6.A], () => t6.A.getFilters()),
        a = (0, d.cf)(
            [t8.A],
            () => {
                let t = {};
                for (let a of e?.entries ?? []) t[(0, t8.$)(a.content)] = t8.A.canRenderContent(a.content);
                return t;
            },
            [e],
        ),
        n = (0, d.bG)([t3.A], () => t3.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, t4.l)(t, l)) return [];
        let i = a[(0, t8.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: ae.p,
                children: [
                    (0, r.jsx)(at, { type: l.author_type, id: l.author_id }),
                    !i && (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, t9.I5)(l) &&
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(Q.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var an = a(576470),
    al = a(693879);
function ai() {
    let e = (0, d.bG)([t6.A], () => t6.A.getFeed(t7.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, d.cf)(
            [t6.A],
            () => t6.A.getFeedState(t7.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, d.bG)([t6.A], () => t6.A.getLastFeedFetchDate(t7.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(p.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(p.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(an.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(p.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(al.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var as = a(225418);
let ar = [
    {
        key: "type",
        cellClassName: H()(as.Hn, as.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(p.E, { variant: "text-md/semibold", children: tz.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: H()(as.Hn, as.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: as.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(ao, { type: t });
        },
    },
];
function ao(e) {
    let { type: t } = e,
        a = (0, d.bG)([t6.A], () => t6.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(m.d, {
        checked: n,
        onChange: function () {
            n
                ? tR.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tR.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function ad() {
    var e;
    let t,
        a = (0, d.bG)([t6.A], () => t6.A.getFeed(t7.X1.GLOBAL_FEED)),
        n = (0, d.bG)([t6.A], () => t6.A.getDebugImpressionCappingDisabled()),
        l = (0, d.bG)([t3.A], () => t3.A.getDebugFastImpressionCappingEnabled()),
        i =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = e1().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        s = (0, d.bG)([t6.A], () => t6.A.getFeedState(t7.X1.GLOBAL_FEED)?.loading === !0),
        [c, u] = o.useState(""),
        m = (0, d.bG)(
            [t1.A, tY.A],
            () => (parseInt(c) > 0 ? c : (t1.A.searchGamesByName(c)[0] ?? tY.A.getApplicationByName(c)?.id)),
            [c],
        ),
        h = (0, t0.A)({
            applicationId: m,
            location: "DevToolsContentInventory",
            source: tZ.GameProfileSources.DevTools,
        }),
        v = Object.entries(tK.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        j = (0, tq.A)(v).filter(t2.Vq);
    return (0, r.jsx)("div", {
        className: tQ.nd,
        children: (0, r.jsxs)(g.Ip, {
            className: as.Qs,
            children: [
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Inventory" }),
                        i.length > 0 && (0, r.jsx)(tX, { columns: ar, data: i }),
                        (0, r.jsx)(ai, {}),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                tR.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: t7.X1.GLOBAL_FEED,
                                    feature: tH.M.INBOX,
                                });
                            },
                            loading: s,
                        }),
                    ],
                }),
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tR.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tR.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tR.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tR.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(aa, {}),
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Game Profile" }),
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
                            children: j.map((e) =>
                                (0, r.jsx)(
                                    "li",
                                    { children: (0, r.jsx)(ac, { application: e }) },
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
function ac(e) {
    let { application: t } = e,
        a = (0, t0.A)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: tZ.GameProfileSources.DevTools,
        });
    return (0, r.jsx)(K.D, {
        onClick: a,
        children: (0, r.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
}
var au = a(890497),
    am = a(769015),
    ah = a(311043),
    ax = a(569926),
    ap = a(282435);
function ag(e) {
    return ap.jN.get(e) ?? 0;
}
function av(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, ax.I)(t),
        l = (0, d.bG)([ah.A], () => ah.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)(q.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(am.A, { game: a, size: am.M.SMALL }),
                    (0, r.jsxs)(q.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a.name }),
                            (0, r.jsx)(p.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function aj() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([t1.A], () => t1.A.games),
        i = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => ag(t.value) - ag(e.value)),
            [l],
        ),
        s = o.useMemo(() => ({ baseSort: (e, t) => ag(t.item.value) - ag(e.item.value), keys: ["label"] }), []),
        c = o.useCallback((e) => {
            (t(e), null != e && n(""));
        }, []),
        u = o.useCallback((e) => {
            (n(e), e.trim().length > 0 && t(null));
        }, []),
        m = a.trim(),
        h = m.length > 0 ? m : (e ?? void 0),
        g = (0, t0.A)({ gameId: h, location: "DevToolsGameProfile", source: tZ.GameProfileSources.DevTools });
    return (0, r.jsx)("div", {
        className: tQ.nd,
        children: (0, r.jsxs)(q.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(q.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-md/bold", children: "Game Profile" }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(au.Z, {
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
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(f.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: u,
                        }),
                        m.length > 0 && (0, r.jsx)(av, { gameId: m }),
                    ],
                }),
                (0, r.jsx)(x.$, {
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
var af = a(923477),
    ab = a(750672);
function ay() {
    let e = (0, af.O)((e) => e.requestHighlightFirstCard);
    return (0, r.jsxs)("div", {
        className: H()(tQ.nd, ab.k),
        children: [
            (0, r.jsx)(Q.D, { variant: "heading-lg/normal", children: "Game Server Hosting" }),
            (0, r.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children:
                    'Replays the post-purchase scroll + highlight on the first card in the "Your game servers" list, exactly like clicking "View game server" after checkout. Open the Game Servers shop tab (/shop?tab=game-servers) with at least one owned server first.',
            }),
            (0, r.jsx)(x.$, { variant: "secondary", text: "Run post-purchase highlight (first card)", onClick: e }),
        ],
    });
}
var aE = a(554146),
    a_ = a(594061),
    aC = a(617617),
    aS = a(355898),
    aN = a(644103),
    aA = a(574560),
    ak = a(434265);
let aI = [
        aE.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        aE.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
        aE.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
    ].map((e) => ({ id: String(e), label: aE.M[e], value: e })),
    aD = { "global-cooldown": "global cooldown", "per-game-cooldown": "per-game cooldown", disabled: "disabled" };
function aT() {
    let [e, t] = o.useState("dismissals"),
        [a, n] = o.useState(aE.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, d.bG)([aC.A], () => aC.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        i = (0, d.bG)([aA.A], () => aA.A.getAllGameUpsellDismissals(a)),
        s = o.useMemo(() => Object.keys(i ?? {}), [i]),
        c = (0, tq.A)(s),
        [u, m] = o.useState(""),
        [h, g] = o.useState([]);
    o.useEffect(
        () =>
            (0, aN.Y)((e) => {
                g((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let v = o.useMemo(() => {
            let e = new Set();
            for (let t of h) for (let a of t.applicationIds) e.add(a);
            return [...e];
        }, [h]),
        y = (0, tq.A)(v),
        E = o.useMemo(() => Object.fromEntries(v.map((e, t) => [e, y[t]])), [v, y]),
        _ =
            l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
                ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
                : "Never";
    return (0, r.jsxs)("div", {
        className: ak.nd,
        children: [
            (0, r.jsxs)("div", {
                className: ak.$H,
                children: [
                    (0, r.jsx)(K.D, {
                        className: H()(ak.V3, { [ak.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(K.D, {
                        className: H()(ak.V3, { [ak.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", h.length > 0 ? `(${h.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: ak.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: ak.uW,
                              children: (0, r.jsx)(j.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: aI,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: ak.uW,
                              children: [
                                  (0, r.jsx)(Q.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, r.jsxs)(p.E, { variant: "text-sm/normal", children: ["Last dismissed: ", _] }),
                                  (0, r.jsxs)(p.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                                  (0, r.jsx)(x.$, {
                                      variant: "secondary",
                                      text: "Reset Global DCF State",
                                      onClick: () => (0, a_._N)(a),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: ak.uW,
                              children: [
                                  (0, r.jsx)(Q.D, { variant: "heading-md/bold", children: "Mark as Dismissed" }),
                                  (0, r.jsx)(f.k, {
                                      label: "Game ID",
                                      value: u,
                                      onChange: (e) => m(e),
                                      placeholder: "Enter Game ID",
                                  }),
                                  (0, r.jsx)(x.$, {
                                      variant: "secondary",
                                      text: "Mark as Dismissed",
                                      disabled: "" === u.trim(),
                                      onClick: () => {
                                          ((0, aS.M)([u.trim()], a), m(""));
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(b.c, {}),
                          (0, r.jsxs)("div", {
                              className: H()(ak.uW, ak.LY),
                              children: [
                                  (0, r.jsxs)(Q.D, {
                                      variant: "heading-md/bold",
                                      children: ["Per-Game Dismissals (", s.length, ")"],
                                  }),
                                  0 === s.length
                                      ? (0, r.jsx)(p.E, {
                                            variant: "text-sm/normal",
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
                                                            className: ak.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: ak.MY,
                                                                    children: [
                                                                        null != s &&
                                                                            (0, r.jsx)("img", {
                                                                                src: s,
                                                                                alt: "",
                                                                                className: ak.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: ak.qi,
                                                                            children: [
                                                                                (0, r.jsx)(p.E, {
                                                                                    variant: "text-sm/semibold",
                                                                                    children: n?.name ?? "Unknown App",
                                                                                }),
                                                                                (0, r.jsx)(p.E, {
                                                                                    variant: "text-xs/normal",
                                                                                    color: "text-muted",
                                                                                    children: e,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, r.jsx)(x.$, {
                                                                            variant: "secondary",
                                                                            text: "Clear",
                                                                            onClick: () => (0, aS.e)(e, a),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(p.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: [
                                                                        "Last dismissed: ",
                                                                        new Date(l.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(p.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: ["Times dismissed: ", l.timesDismissed],
                                                                }),
                                                            ],
                                                        },
                                                        e,
                                                    );
                                                }),
                                                (0, r.jsx)(x.$, {
                                                    variant: "critical-primary",
                                                    text: "Clear All",
                                                    onClick: () => {
                                                        for (let e of s) (0, aS.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: ak.Lj,
                      children: (0, r.jsxs)("div", {
                          className: ak.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ak.aq,
                                  children: [
                                      (0, r.jsxs)(Q.D, {
                                          variant: "heading-md/bold",
                                          children: ["Hook Calls (", h.length, ")"],
                                      }),
                                      (0, r.jsx)(x.$, { variant: "secondary", text: "Clear", onClick: () => g([]) }),
                                  ],
                              }),
                              0 === h.length
                                  ? (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "No calls recorded yet. Hook calls to useShouldShowGameUpsellForMultipleGames will appear here.",
                                    })
                                  : h.map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: ak.Nr,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: ak.O9,
                                                        children: [
                                                            (0, r.jsx)(p.E, {
                                                                variant: "text-xs/semibold",
                                                                children: new Date(e.timestamp).toLocaleTimeString(),
                                                            }),
                                                            e.disabled &&
                                                                (0, r.jsx)("span", {
                                                                    className: ak.t7,
                                                                    children: "(disabled)",
                                                                }),
                                                            (0, r.jsx)(p.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: aE.M[e.dismissibleContent],
                                                            }),
                                                        ],
                                                    }),
                                                    0 === e.applicationIds.length
                                                        ? (0, r.jsx)(p.E, {
                                                              variant: "text-xs/normal",
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
                                                                      className: ak.Ss,
                                                                      children: [
                                                                          null != n &&
                                                                              (0, r.jsx)("img", {
                                                                                  src: n,
                                                                                  alt: "",
                                                                                  className: ak.rb,
                                                                              }),
                                                                          (0, r.jsx)("span", {
                                                                              className: ak.Jd,
                                                                              children: a?.name ?? t,
                                                                          }),
                                                                          l
                                                                              ? (0, r.jsx)("span", {
                                                                                    className: ak.OK,
                                                                                    children: "eligible",
                                                                                })
                                                                              : null != i
                                                                                ? (0, r.jsx)("span", {
                                                                                      className: ak.t7,
                                                                                      children: aD[i],
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
var aO = a(696986),
    aR = a(47167),
    aw = a(734057),
    aM = a(994500),
    aL = a(310031),
    aP = a(394953),
    aU = a(618216);
let aG = [
        {
            key: "channelName",
            cellClassName: H()(aU.Hn, aU.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: H()(aU.Hn, aU.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    aB = [
        {
            key: "channelName",
            cellClassName: H()(aU.Hn, aU.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: H()(aU.Hn, aU.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: H()(aU.Hn, aU.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function aF() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, aP.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: i,
            isLoadingComplete: s,
        } = (0, tA.cf)([aL.A], () => ({
            isLoading: aL.A.isLoading,
            hasLoadedEver: aL.A.hasLoadedEver,
            hasPreloaded: aL.A.hasPreloaded,
            hasMoreToLoad: aL.A.hasMoreToLoad,
            isLoadingComplete: aL.A.isLoadingComplete,
        })),
        o = (0, tA.bG)([aL.A], () => aL.A.currentRequestAnalyticsPayload),
        d = (0, tA.cf)([aL.A], () => aL.A.getChannelInfoMap()),
        c = (0, tA.cf)([aw.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = aw.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        u = (0, tA.cf)([aw.A], () =>
            t.reduce((e, t) => {
                let a = aw.A.getChannel(t);
                return ((e[t] = a ?? null), e);
            }, {}),
        ),
        h = (0, tA.bG)([aL.A], () => aL.A.getInboxMessages()),
        x = (0, tA.bG)([aL.A], () => aL.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tQ.nd,
        children: (0, r.jsxs)(g.Ip, {
            className: aU.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(m.d, {
                                label: "Nav On Click",
                                checked: !!x,
                                onChange: (e) => {
                                    tR.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(aO.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(tX, {
                            columns: aG,
                            data: Object.entries(u).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, aR.m1)(a, eo.default, aM.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", children: "Store State" }),
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
                        (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(tX, {
                            columns: aB,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = c[a]) ? (0, aR.m1)(t, eo.default, aM.A) : "",
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
var a$ = a(976860),
    aV = a(396813),
    aW = a(786800);
let az = function () {
    return (0, r.jsxs)("div", {
        className: aW.k,
        children: [
            (0, r.jsx)(p.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(x.$, {
                onClick: () => {
                    ((0, aV.Ov)(), (0, a$.pX)(em.BVt.QUEST_HOME));
                },
                text: "Clear History",
            }),
            (0, r.jsx)(p.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var aH = a(271866),
    aK = a(868511),
    aY = a(147964),
    aq = a(760716),
    aJ = a(115093),
    aQ = a(970628);
let aX = window.GLOBAL_ENV.RELEASE_CHANNEL === aJ.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function aZ() {
    let e = (0, aq.i)((e) => e.overrideApplicationId),
        t = (0, aq.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        n = (0, aq.i)((e) => e.overrideNitroEligibilityForSocialLayerStorefront),
        l = (0, aq.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
        i = (0, aq.i)((e) => e.isNitroEligibleForSocialLayerStorefront),
        s = (0, aq.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront),
        [c, u] = o.useState(aX),
        [h, p] = o.useState(em.FYj),
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
        j = (0, aq.i)((e) => e.showSelfActivity),
        b = (0, aq.i)((e) => e.setShowSelfActivity),
        y = (0, aq.i)((e) => e.recommendationApplicationIds),
        E = (0, aq.i)((e) => e.setRecommendationApplicationIds),
        _ = o.useCallback(
            (e) => {
                e ? E(h) : E(null);
            },
            [h, E],
        ),
        C = (0, d.bG)([aY.A], () => null != aY.A.testModeApplicationId),
        S = o.useCallback((e) => {
            e ? (0, eY.openModal)((e) => (0, r.jsx)(aK.A, { ...e })) : aH.cL();
        }, []),
        N = (0, t0.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: c,
            source: tZ.GameProfileSources.Embed,
            trackEntryPointImpression: !0,
        }),
        A = o.useCallback(
            (e) => {
                N?.(e);
            },
            [N],
        ),
        k = o.useCallback(() => {
            (0, a$.pX)(em.BVt.COLLECTIBLES_SHOP_GAME_SHOP(c));
        }, [c]);
    return (0, r.jsx)("div", {
        className: H()(tQ.nd, aQ.n),
        children: (0, r.jsxs)("div", {
            className: aQ.k,
            children: [
                (0, r.jsx)(f.k, { label: "Application ID", value: c, onChange: v }),
                (0, r.jsx)(Q.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(m.d, { label: "Override activity application ID", checked: a, onChange: g }),
                (0, r.jsx)(m.d, { label: "Show own voice activity (bypass self check)", checked: j, onChange: b }),
                (0, r.jsx)(m.d, { label: "Enable application test mode", checked: C, onChange: S }),
                (0, r.jsx)(x.$, { text: "Open Game Profile Modal", onClick: A }),
                (0, r.jsx)(x.$, { text: "Navigate to App Game Shop", onClick: k }),
                (0, r.jsx)(Q.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, r.jsx)(f.k, {
                    label: "Recommendation application IDs",
                    value: h,
                    onChange: p,
                    disabled: null == y,
                }),
                (0, r.jsx)(m.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != y,
                    onChange: _,
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
var a0 = a(540999),
    a1 = a(723702),
    a2 = a(865116);
(a(670812), a(772958));
var a3 = a(58736);
(a(558179), a(21574));
var a6 = a(231545),
    a5 = a(761929),
    a8 = a(180808);
function a4(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, a5.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: a5.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: a8.Di });
}
function a9(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        i = o.useRef(null),
        [s, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: i,
        className: a8.kL,
        style: { minHeight: l, height: s },
        children: [
            (0, r.jsx)(a4, { resizableNode: i, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: H()(a8.KZ, a), children: t }),
        ],
    });
}
var a7 = a(231643);
(a(140346), a7.fu.NONE, a7.fu.NONE);
var ne = a(825484),
    nt = a(688810),
    na = a(975460),
    nn = a(206828),
    nl = a(487431),
    ni = a(712440),
    ns = a(733110),
    nr = a(134861),
    no = a(71393),
    nd = a(967198),
    nc = a(942370),
    nu = a(375708),
    nm = a(538524),
    nh = a(681135);
function nx() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, nt.Ay)(tk.A.DEV_TOOLS),
        [i, s] = o.useState(""),
        c = (0, d.bG)([nd.A], () => nd.A.getGuildId()),
        u = (0, d.bG)([no.A], () => no.A.getGuild(c)),
        m = u?.gameApplicationIds ?? [],
        h = (0, tq.A)(m).filter((e) => null != e),
        g = (0, d.bG)([E.Ay, S.A], () => (0, _.A)(E.Ay, S.A)),
        v = (0, tq.h)(i),
        j = (0, na.g)(v),
        y = (0, d.yK)(
            [tY.A],
            () => v?.linkedGames?.map((e) => tY.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        C = (0, nn.RD)(v, { allowedFlows: [nc._.RPC], debug: !0 }),
        N = (0, nn.RD)(v, { allowedFlows: [nc._.WEB], debug: !0 }),
        A = (0, d.bG)([nr.A], () => null != j && nr.A.isConnected(j.id)),
        k = (0, nn.RD)(v, { debug: !0 }),
        { canDeauthorize: I, deauthorize: D } =
            ((e = k.connectionApp?.id),
            (t = (0, d.bG)([ns.default], () => ns.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && ni.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: H()(tQ.nd, nh.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nh.kL,
                children: [
                    (0, r.jsx)(Q.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(f.k, { label: "Application ID", value: i, onChange: s }),
                    null != g && null != g.id
                        ? (0, r.jsx)(x.$, {
                              onClick: () => s(g.id),
                              variant: "primary",
                              text: `Use detected game: ${g.name} (${g.id})`,
                          })
                        : null,
                    null != u
                        ? h.length > 0
                            ? (0, r.jsxs)("div", {
                                  className: nh.Mc,
                                  children: [
                                      (0, r.jsxs)(p.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: [u.name, " (", u.id, ") \xb7 Official games"],
                                      }),
                                      (0, r.jsx)(ne.e, {
                                          size: "sm",
                                          wrap: !0,
                                          children: h.map((e) =>
                                              (0, r.jsx)(
                                                  x.$,
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
                            : (0, r.jsxs)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  children: [u.name, " (", u.id, ") \xb7 No official games"],
                              })
                        : (0, r.jsx)(p.E, {
                              variant: "text-md/normal",
                              color: "text-subtle",
                              children: "No guild selected",
                          }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)("div", {
                        className: nh.J3,
                        children: [
                            (0, r.jsxs)(p.E, {
                                variant: "text-md/normal",
                                children: ["Application Name: ", null != v ? v.name : "N/A"],
                            }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-md/normal",
                                children: [
                                    "Linked Games:",
                                    " ",
                                    y.length > 0
                                        ? y.map((e) => ((0, na.t)(v)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                        : "N/A",
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)("div", {
                className: nh.kL,
                children: [
                    (0, r.jsx)(Q.D, { variant: "heading-lg/normal", children: "Authorization status" }),
                    (0, r.jsx)(nl.VT, {
                        flow: nc._.RPC,
                        showGlobalFlowToggle: !0,
                        overallStatus: C.debug.isSubscribedToAuthorizeRequest
                            ? nl.nW.OVERALL_GOOD
                            : A
                              ? nl.nW.WARN
                              : nl.nW.OVERALL_BAD,
                        name: nu.intl.string(nm.default.AGLx00),
                        steps: [
                            {
                                status: A ? nl.nW.GOOD : nl.nW.BAD,
                                text: nu.intl.string(nm.default.kxF9br),
                                description: A ? null : nu.intl.string(nm.default.PFxxJa),
                                learnMoreLink: A
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: C.debug.isSubscribedToAuthorizeRequest
                                    ? nl.nW.GOOD
                                    : A
                                      ? nl.nW.WARN
                                      : nl.nW.BAD,
                                text: nu.intl.string(nm.default.S94dzs),
                                description:
                                    C.debug.isSubscribedToAuthorizeRequest || !A
                                        ? null
                                        : nu.intl.string(nm.default.aTULMB),
                                learnMoreLink:
                                    C.debug.isSubscribedToAuthorizeRequest || !A
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: k.chosenFlow === nc._.RPC,
                    }),
                    (0, r.jsx)(nl.VT, {
                        flow: nc._.WEB,
                        showGlobalFlowToggle: !0,
                        overallStatus: N.debug.hasConnectionEntrypointUrl ? nl.nW.OVERALL_GOOD : nl.nW.OVERALL_BAD,
                        name: nu.intl.string(nm.default.K3ObrU),
                        steps: [
                            {
                                status: N.debug.hasConnectionEntrypointUrl ? nl.nW.GOOD : nl.nW.BAD,
                                text: nu.intl.string(nm.default["8a7IrV"]),
                                description: N.debug.hasConnectionEntrypointUrl
                                    ? nu.intl.formatToPlainString(nm.default["9iLeL2"], {
                                          url: N.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: k.chosenFlow === nc._.WEB,
                    }),
                    (0, r.jsx)(nl.Sy, {
                        status: k.hasAlreadyLinked ? nl.nW.OVERALL_GOOD : nl.nW.OVERALL_BAD,
                        text: nu.intl.string(nu.t["Vu/zmQ"]),
                    }),
                    0 === k.debug.validFlows.length &&
                        (0, r.jsx)(p.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: nu.intl.string(nm.default.eg0mNa),
                        }),
                    (0, r.jsx)(x.$, {
                        disabled: !k.canStartAuthorization,
                        fullWidth: !0,
                        onClick: () => k.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsxs)(ne.e, {
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(x.$, {
                                disabled: !C.canStartAuthorization,
                                onClick: () => C.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start In-App Authorization",
                            }),
                            (0, r.jsx)(x.$, {
                                disabled: !N.canStartAuthorization,
                                onClick: () => N.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start Web Authorization",
                            }),
                        ],
                    }),
                    (0, r.jsx)(x.$, {
                        disabled: !I,
                        fullWidth: !0,
                        onClick: D,
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
                            className: nh.kL,
                            children: [
                                (0, r.jsx)(Q.D, { variant: "heading-lg/normal", children: "Benefit configuration" }),
                                (0, r.jsx)("div", {
                                    className: nh.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: nh.Tc,
                                        children: [
                                            null != v.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: v.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: nh.L8,
                                                }),
                                            (0, r.jsx)(p.E, {
                                                variant: "text-md/semibold",
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
var np = a(427358),
    ng = a(541660);
function nv(e) {
    let { title: t, sortKey: a, activeSortKey: n, sortDir: l, onClick: i } = e,
        s = n === a ? ("desc" === l ? " \u25BC" : " \u25B2") : "";
    return (0, r.jsx)(K.D, {
        className: ng.K8,
        onClick: () => i(a),
        children: (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: t + s }),
    });
}
function nj() {
    let [e, t] = o.useState("affinity"),
        [a, n] = o.useState("desc"),
        l = o.useCallback(
            (a) => {
                e === a ? n((e) => ("asc" === e ? "desc" : "asc")) : (t(a), n("username" === a ? "asc" : "desc"));
            },
            [e],
        ),
        i = (0, d.yK)([np.A, eo.default], () =>
            np.A.getUserAffinities().map((e) => {
                let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
                return { user: eo.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
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
                    cellClassName: ng.iL,
                    renderHeader: () =>
                        (0, r.jsx)(nv, {
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
                        (0, r.jsx)(nv, {
                            title: "COMMUNICATION AFFINITY",
                            sortKey: "affinity",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: ng.nz,
                    render(e) {
                        let { affinity: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "vcProbability",
                    renderHeader: () =>
                        (0, r.jsx)(nv, {
                            title: "VOICE AFFINITY",
                            sortKey: "vcProbability",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: ng.nz,
                    render(e) {
                        let { vcProbability: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "isFriend",
                    renderHeader: () => (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
                    cellClassName: ng.nz,
                    render(e) {
                        let { isFriend: t } = e;
                        return t.toString();
                    },
                },
            ],
            [e, a, l],
        );
    return 0 === i.length ? null : (0, r.jsx)(tX, { className: tQ.nd, columns: c, rowClassName: ng.nM, data: s });
}
var nf = a(379257),
    nb = a(847599),
    ny = a(486866);
function nE() {
    return (0, r.jsx)("div", {
        className: H()(tQ.nd, ny.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(b.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: ny.h,
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, eY.openModalLazy)(
                                    async () => {
                                        let { default: e } = await a.e("629079").then(a.bind(a, 357578));
                                        return (t) => (0, r.jsx)(e, { ...t });
                                    },
                                    { onCloseCallback: void 0 },
                                ),
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Modal",
                            onClick: () =>
                                nf.A.showAgeVerificationGetStartedModal({ entryPoint: nb.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var n_ = a(536637),
    nC = a.n(n_),
    nS = a(862482),
    nN = a(624479),
    nA = a(555704),
    nk = a(285796),
    nI = a(241326),
    nD = a(683438),
    nT = a(297413),
    nO = a(379078),
    nR = a(704554),
    nw = a(957565),
    nM = a(58703),
    nL = a(80703),
    nP = a(280450);
let nU = 0,
    nG = [],
    nB = 0,
    nF = [],
    n$ = !1;
class nV extends d.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nP.default, a0.A);
    }
    get loggedEvents() {
        return nG;
    }
    get loggedEventsVersion() {
        return nB;
    }
    get loggedTriggers() {
        return nF;
    }
    get trackTriggers() {
        return n$;
    }
}
let nW = new nV(tR.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        a0.A.isDeveloper &&
            (nG.push({
                key: (nU++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, nL.d)(n) : nP.default.getId(),
                timestamp: new Date(),
            }),
            nB++,
            nG.length > 500 && (nG = nG.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: i, previouslyTracked: s } = e;
        !a0.A.isDeveloper ||
            (n$ &&
                (nF = [
                    ...nF,
                    {
                        key: (0, ew.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: i,
                        previouslyTracked: s,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                nF.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        n$ = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        ((nG = []), nB++, (nF = []));
    },
});
var nz = a(658675);
function nH(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: H()(tQ.qo, t), children: a });
}
function nK(e) {
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
                (0, r.jsx)("dt", { className: tQ.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tQ.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(K.D, {
                                  tag: "span",
                                  className: tQ.nH,
                                  onClick: () => (0, nw.C)(n, () => i(!0)),
                                  children: l
                                      ? (0, r.jsx)(tc.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(nN.CopyIcon, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
}
function nY(e) {
    let { value: t } = e;
    return (0, r.jsx)(nz.P, { checked: t });
}
var nq = a(412966);
let nJ = [
    {
        key: "Event",
        cellClassName: nq.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "Location",
        cellClassName: nq.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function nQ(e) {
    let { children: t } = e;
    return (0, r.jsx)(g.Ip, { orientation: "auto", className: nq._D, children: (0, r.jsx)("dl", { children: t }) });
}
function nX(e) {
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
            className: nq.fY,
            children: [
                (0, r.jsx)("dt", { className: nq.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(K.D, {
                    tag: "span",
                    className: nq.nH,
                    onClick: () => (0, nw.C)(JSON.stringify(n), () => i(!0)),
                    children: l
                        ? (0, r.jsx)(tc.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(nN.CopyIcon, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let nZ = new Set(["client_performance_cpu", "client_performance_memory"]),
    n0 = [
        {
            id: "details",
            name: "Details",
            group: a7.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: i,
                        filteredEvents: s,
                    } = e,
                    o = eo.default.getUser(l),
                    d = nC()(n);
                return (0, r.jsxs)("div", {
                    className: nq.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(a3.Ay, {
                            className: H()(tQ.jr, nq.nZ),
                            children: [
                                (0, r.jsx)(a3.Ay.Icon, { icon: nA.U, tooltip: t }),
                                (0, r.jsxs)(a3.Ay.Title, {
                                    wrapperClassName: nq.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(K.D, {
                                            tag: "span",
                                            className: nq.KE,
                                            onClick: () => (0, nw.C)(t),
                                            children: (0, r.jsx)(nN.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(a3.Ay.Icon, {
                                    icon: nN.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nw.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(a3.Ay.Icon, { icon: nk.a, tooltip: "Close", onClick: i }),
                            ],
                        }),
                        (0, r.jsxs)(nH, {
                            className: nq.ZK,
                            children: [
                                (0, r.jsx)(nK, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nM.i$)(d, "LLLL"),
                                        children: ["(", nC().locale(), ") ", (0, nM.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nK, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(nT.A, { user: o }),
                                    }),
                                (0, r.jsx)(nK, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(nQ, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = nZ.has(a)
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
                                                nX,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nq.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    nX,
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
    n1 = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(n1)
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
    n2 = {
        searchType: nO.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function n3() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, d.bG)([nW], () => nW.loggedEventsVersion),
        [l, i] = o.useState(() => Object.keys(n1)),
        [s, c] = o.useState(nW.loggedEvents),
        u = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nR.RT)(t, nW.loggedEvents, u, n2, [n]);
    let m = s.filter((e) => {
            for (let t of l) if (n1[t].filter(e)) return !0;
            return !1;
        }),
        [h, x] = o.useState(void 0),
        p = m.find((e) => e.key === h),
        { TabBar: g, renderSelectedTab: v } = (0, a7.Ay)({ tabs: n0 }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: H()(tQ.nd, nq.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nq.rh,
                children: [
                    (0, r.jsx)(nS.$n, {
                        className: nq.Q$,
                        look: nS.$n.Looks.BLANK,
                        size: nS.$n.Sizes.ICON,
                        onClick: X.eY,
                        children: (0, r.jsx)("span", {
                            title: nu.intl.string(nu.t.VkKicb),
                            children: (0, r.jsx)(nI.TrashIcon, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": nu.intl.string(nu.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nq.Bi }),
                    (0, r.jsx)("div", {
                        className: nq.uW,
                        children: Object.entries(n1).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                K.D,
                                {
                                    className: H()(nq.pb, l.includes(t) && nq.bx),
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
                className: nq.rh,
                children: (0, r.jsx)(nD.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tX, { columns: nJ, data: m, selectedRowKey: h, onClickRow: (e) => x(e.key) }),
            null != p &&
                (0, r.jsxs)(a9, {
                    className: nq.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(g, {}), v({ loggedEvent: p, onClose: () => x(void 0), filteredEvents: m })],
                }),
        ],
    });
}
var n6 = a(382483),
    n5 = a(385113),
    n8 = a(317672);
function n4(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(q.B, {
        gap: 8,
        padding: 8,
        className: n8.lt,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(p.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(p.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(p.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(p.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(p.E, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          q.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: n8.YL,
                              children: [
                                  (0, r.jsx)(p.E, { variant: "text-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(p.E, {
                                      variant: "text-xs/normal",
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
function n9(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? n8.FM : n8.gt,
        children: [
            (0, r.jsx)(K.D, {
                className: n8.Av,
                onClick: n,
                children: (0, r.jsxs)(q.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(p.E, { variant: "text-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.config_id, " \xb7 ", t.application_id],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(x.$, {
                variant: "secondary",
                size: "sm",
                text: "Refetch",
                onClick: () => (0, n6.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function n7() {
    let e = (0, d.bG)([n5.A], () => n5.A.getFeaturedFetchState());
    return (0, r.jsxs)(q.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(q.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(p.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, n6.Wq)({ force: !0 }),
            }),
        ],
    });
}
function le() {
    let e = (0, d.bG)([n5.A], () => n5.A.getDeveloperFetchState());
    return (0, r.jsxs)(q.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(q.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(p.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, n6.i$)({ force: !0 }),
            }),
        ],
    });
}
function lt() {
    let [e, t] = o.useState(""),
        a = (0, d.bG)([n5.A], () => (e.length > 0 ? n5.A.getFetchState(e) : null)),
        n = (0, d.bG)([n5.A], () => (e.length > 0 ? n5.A.getConfigs(e) : null));
    return (0, r.jsxs)(q.B, {
        gap: 8,
        children: [
            (0, r.jsx)(p.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(f.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, n6.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(p.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(q.B, { gap: 4, children: n.map((e) => (0, r.jsx)(n4, { config: e }, e.config_id)) }),
        ],
    });
}
function la(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, d.bG)([n5.A], () => n5.A.getFeaturedFetchState());
    return (0, r.jsxs)(q.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(p.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === n5.e.FETCHING &&
                (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    n9,
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
function ln(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(q.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(n4, { config: t }),
                ],
            }),
        ],
    });
}
function ll() {
    let [e, t] = o.useState(null),
        a = Object.values((0, d.bG)([n5.A], () => n5.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)(q.B, {
            gap: 16,
            padding: 8,
            className: n8.zr,
            children: [
                (0, r.jsx)(Q.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(x.$, {
                    size: "sm",
                    variant: "critical-secondary",
                    text: "Reset store",
                    onClick: () => tR.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEBUG_RESET" }),
                }),
                (0, r.jsx)(n7, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(le, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lt, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(la, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(ln, { config: n }),
            ],
        }),
    });
}
var li = a(513520),
    ls = a(130100),
    lr = a(468747);
let lo = [
    {
        key: "Channel",
        cellClassName: lr._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: lr.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function ld() {
    o.useEffect(() => {
        (0, li.I)();
    }, []);
    let e = (0, d.yK)([ls.A, aw.A], () =>
        ls.A.getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: aw.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tX, { className: tQ.nd, columns: lo, rowClassName: lr.nM, data: e });
}
function lc() {
    return (0, r.jsxs)(p.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var lu = a(105565),
    lm = a(47899),
    lh = a(333714);
function lx(e) {
    switch (e) {
        case lu.r.DC_DISMISSED:
            return "DISMISS:";
        case lu.r.DC_SHOWN:
            return "SHOW:";
        case lu.r.DC_SHOW_REQUEST:
            return "REQUEST TO SHOW:";
        default:
            return "UNKNOWN TYPE:";
    }
}
let lp = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${aE.M[a]}`;
            },
        },
    ],
    lg = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${aE.M[t]}`;
            },
        },
    ];
function lv() {
    let e = (0, d.bG)([lu.A], () => lu.A.getDCFEvents()),
        t = (0, lm.Ay)((e) => e.candidates),
        a = (0, lm.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? nC()(a).fromNow() : "n/a",
        l = (0, lm.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        i = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: lx(t) + a.toString(), event: lx(t), dismissibleContent: a };
        }),
        s = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: lh.KE,
        children: [
            (0, r.jsxs)("div", { className: lh.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: lh.pq, children: ["Last winner: ", null != l ? aE.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: lh.uI,
                children: (0, r.jsx)(tX, { className: lh.Th, columns: lg, data: s }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tX, { columns: lp, data: i }),
        ],
    });
}
var lj = a(689175),
    lf = a(541689),
    lb = a(199773);
function ly() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(lE());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        (a.unshift(e), tK.w.set("RecentDismissibleOverrides", a));
    }, []);
    return [lE(), e];
}
function lE() {
    return tK.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var l_ = a(662546),
    lC = a(643278),
    lS = a(256787),
    lN = a(20439);
let lA = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = aE.M[a],
        { isDismissed: i, handleToggleDismissState: s } = (0, lN.A)(l),
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
            (0, r.jsxs)(q.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(ez.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? l_.O : lC.ClipboardListIcon,
                        onClick: h,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(m.d, {
                        label: `${a.toLowerCase()} (${aE.M[a]})`,
                        description: (0, lS.Zm)(l)
                            ? (function (e) {
                                  let t = aC.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
function lk(e) {
    let { items: t, onChange: a } = e,
        [n, l] = ly(),
        i = (0, o.useCallback)(
            (e) => {
                (l(e), a?.(e));
            },
            [l, a],
        );
    return (0, r.jsx)(q.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lA, { content: e, onChange: i }, e)),
    });
}
function lI(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lm.Ay)((e) => e.recentlyShown),
        [n, l] = ly(),
        i = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(aE.M[e]))
            .slice(0, 3);
    return 0 === i.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(lk, { items: i }) });
}
function lD(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lm.Ay)((e) => e.recentlyShown)
            .map((e) => aE.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(lk, { items: a }) });
}
var lT = a(607734);
function lO() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, d.cf)([lb.A], () => ({
            dailyCapReached: lb.A.hasUserHitDCCap(),
            dailyCapOverridden: lb.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lb.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [i, s] = o.useState(20),
        c = o.useMemo(
            () =>
                Object.keys(aE.M)
                    .filter((e) => e.toLowerCase().includes(n.toLowerCase()))
                    .reverse(),
            [n],
        ),
        h = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && i < c.length && s((e) => e + 100);
            },
            [i, c.length],
        );
    return (0, r.jsx)(lj.Ch, {
        onScroll: h,
        children: (0, r.jsxs)("div", {
            className: lT.KE,
            children: [
                (0, r.jsxs)(u.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(q.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, lf.Ab)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, a_.nT)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, a_.D1)(),
                                }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: lf.SE,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: lf.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(lD, {}),
                (0, r.jsx)(lI, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(nD.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(lk, { items: c.slice(0, i) }),
                    ],
                }),
            ],
        }),
    });
}
var lR = a(276086),
    lw = a(154323),
    lM = a(504565);
function lL() {
    let e = (0, d.bG)([lw.A], () => lw.A.allWithDescriptions(), [], d.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                m.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lR.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(b.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lM.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lM.x6,
                children: (0, r.jsx)(x.$, { variant: "primary", text: "Clear all", onClick: lR.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lM.vu, children: t }),
        ],
    });
}
var lP = a(106839);
function lU() {
    let e = (0, d.bG)([t1.A], () => t1.A.detectableGamesEtag),
        t = (0, d.bG)([t1.A], () => t1.A.lastFetched),
        a = (0, d.bG)([t1.A], () => t1.A.games.length);
    return (0, r.jsxs)(q.B, {
        gap: 4,
        children: [
            (0, r.jsx)(Q.D, { variant: "heading-sm/bold", children: "Cache Status" }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: [(0, r.jsx)("strong", { children: "Total games:" }), " ", a],
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "ETag:" }),
                    " ",
                    "" === e ? "(empty)" : (0, r.jsx)("span", { className: lP.ti, children: e }),
                ],
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "Last fetched:" }),
                    " ",
                    null == t ? "never" : new Date(t).toLocaleString(),
                ],
            }),
        ],
    });
}
function lG(e) {
    let { game: t } = e,
        { data: a } = (0, ax.I)(t.id),
        n = null != a && a.name !== t.name;
    return (0, r.jsxs)(q.B, {
        gap: 12,
        className: lP.f_,
        children: [
            (0, r.jsxs)(q.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                children: [
                    (0, r.jsx)(am.A, { game: a, size: am.M.LARGE }),
                    (0, r.jsxs)(q.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(Q.D, { variant: "heading-lg/bold", children: t.name }),
                            (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t.id }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(q.B, {
                gap: 4,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "GameStore" }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children:
                            null == a
                                ? "No record fetched. The icon above comes from here, not from the detectable payload, so it is blank."
                                : `name: ${a.name}`,
                    }),
                    n &&
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            children: "Differs from the detectable name above.",
                        }),
                ],
            }),
            (0, r.jsxs)(q.B, {
                gap: 4,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "DetectableGameStore" }),
                    (0, r.jsx)("pre", { className: lP.aY, children: JSON.stringify(t, null, 2) }),
                ],
            }),
        ],
    });
}
function lB() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([t1.A], () => t1.A.games),
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
        h = (0, d.bG)([t1.A], () => (null != m ? (t1.A.getDetectableGame(m) ?? null) : null), [m]);
    return (0, r.jsx)("div", {
        className: H()(tQ.nd, lP.kL),
        children: (0, r.jsxs)(q.B, {
            gap: 16,
            padding: 12,
            className: lP.rf,
            children: [
                (0, r.jsxs)(q.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-md/bold", children: "Detectable Cache" }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Inspect the local detectable games cache. Use this to verify whether a SKU or executable change has propagated to your client.",
                        }),
                    ],
                }),
                (0, r.jsx)(lU, {}),
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(au.Z, {
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
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-sm/bold", children: "Game ID" }),
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
                                ? (0, r.jsx)(lG, { game: h })
                                : (0, r.jsxs)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-critical",
                                      children: ["No entry in cache for ID ", m, "."],
                                  }),
                        ],
                    }),
            ],
        }),
    });
}
var lF = a(691540),
    l$ = a(97483),
    lV = a(123292),
    lW = a(780907),
    lz = a(56562);
let lH = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
    { label: "World of Warcraft", value: "356875762940379136" },
];
function lK(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, ax.I)(t.id);
    return (0, r.jsxs)(q.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(am.A, { game: n }),
            (0, r.jsxs)(q.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/normal", children: n?.name }),
                    a && (0, r.jsx)(p.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function lY() {
    let e = (0, d.bG)([E.Ay], () => E.Ay.getRunningGames()),
        t = (0, d.bG)([E.Ay], () => E.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                lH.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        );
    function i(e) {
        if (null == e || "" === e) return void (0, lW.xt)(null);
        let t = t1.A.getDetectableGame(e),
            a = t?.executables[0],
            n = t?.thirdPartySkus[0]?.distributor;
        if (null == t || null == a)
            return (0, lF.P0)({ id: "devtools-set-debug-game-error", type: l$.Ck.FAILURE, message: "Invalid Game ID" });
        (0, lW.xt)({
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
            fullscreenType: lz.aI.UNKNOWN,
            cmdLine: "",
            nativeProcessObserverId: -1,
        });
    }
    return (0, r.jsxs)(q.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(q.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(Q.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(lK, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(q.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(Q.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(f.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(au.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(lV.Q, { variant: "secondary", text: "Clear", onClick: () => i(null) }),
                            (0, r.jsx)(x.$, { variant: "primary", text: "Detect Game", onClick: () => i(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lq = a(636537),
    lJ = a(240248),
    lQ = a(974009);
function lX() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        s = o.useCallback(async () => {
            try {
                (t(!0), n(null), i(null));
                let e = await lq.Bo.put({
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
    return (0, r.jsxs)(q.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(x.$, { variant: "primary", onClick: s, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lJ.uJ)(a) && (0, r.jsx)(p.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lJ.uJ)(l) &&
                (0, r.jsx)(p.E, { variant: "text-md/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function lZ() {
    return (0, r.jsx)("div", {
        className: lQ.n,
        children: (0, r.jsx)(q.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lX, {}) }),
    });
}
a(172879);
var l0 = a(64015),
    l1 = a.n(l0),
    l2 = a(874804),
    l3 = a(866665),
    l6 = a(782134),
    l5 = a(113494),
    l8 = a(603349),
    l4 = a(108715);
function l9(e) {
    return parseFloat(e.toFixed(3));
}
let l7 = [
    {
        key: "Store",
        cellClassName: l4.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "Time",
        cellClassName: l4.i7,
        render(e) {
            let { trace: t } = e;
            return `${l9(t.time)} ms`;
        },
    },
];
function ie(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(g.Ip, { children: (0, r.jsx)(tX, { columns: l7, data: a }) });
}
let it = [
    {
        id: "action",
        name: "Action",
        group: a7.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = nC()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(nH, {
                        className: l4.mP,
                        children: [
                            (0, r.jsx)(nK, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nM.i$)(a, "LLLL"),
                                    children: (0, nM.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nK, { name: "Total Time", children: [l9(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(g.Ip, { className: l4.Dx, children: (0, r.jsx)(a6.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: a7.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(ie, { actionLog: t });
        },
    },
];
function ia(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...it,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(l8.A, { className: l4.ik }), "Error"],
                              }),
                              group: a7.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: H()(l4.u4, tQ.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tQ.R5,
                                                  children: (0, r.jsx)(nS.$n, {
                                                      className: tQ.Q$,
                                                      size: nS.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(g.Ip, {
                                              className: l4.Dx,
                                              children: (0, r.jsx)(a6.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : it,
            [t],
        ),
        { TabBar: l, renderSelectedTab: i } = (0, a7.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(a9, {
        className: l4.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(a3.Ay, {
                className: H()(tQ.jr, l4.nZ),
                children: [
                    (0, r.jsx)(a3.Ay.Icon, { icon: l2.K, tooltip: t.name }),
                    (0, r.jsx)(a3.Ay.Title, {
                        wrapperClassName: H()(tQ.qd, tQ.ZE),
                        className: tQ.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(a3.Ay.Icon, {
                        icon: nN.CopyIcon,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return ((t[a] = ((n = e[a]), em.AKn.test(n) ? "REDACTED" : n)), t);
                                }, {}),
                                null,
                                2,
                            );
                            (0, nw.C)(a, () =>
                                (0, lF.P0)({
                                    id: "copy-action-log-name",
                                    type: l$.Ck.SUCCESS,
                                    message: "Copied action log data to clipboard",
                                }),
                            );
                        },
                    }),
                ],
            }),
            i({ actionLog: t }),
        ],
    });
}
let il = [
        {
            key: "Action",
            cellClassName: l4.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(l8.A, { className: l4.ik }), t.name],
                });
            },
        },
        {
            key: "Total Time",
            cellClassName: l4.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${l9(t.totalTime)} ms`;
            },
        },
        {
            key: "Timestamp",
            cellClassName: l4.i7,
            render(e) {
                let { actionLog: t } = e;
                return nC()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    ii = {
        searchType: nO.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function is() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = l1()(() => {
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
        })(tR.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [i, s] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nR.RT)(t, u ? i : l, p, ii);
    let g = o.useCallback(
            (e) => {
                (s(l), m(e));
            },
            [l],
        ),
        v = t.trim().length > 0,
        j = o.useMemo(() => (v ? d : u ? i : l), [l, d, v, u, i]),
        f = u ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, r.jsxs)("div", {
        ref: e,
        className: H()(tQ.nd, l4.nd),
        children: [
            (0, r.jsxs)("div", {
                className: l4.KE,
                children: [
                    (0, r.jsx)(l3.m, {
                        text: f,
                        children: (0, r.jsx)(ez.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? l6.PlayIcon : l5.PauseIcon,
                            "aria-label": f,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(nD.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tX, {
                columns: il,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(ia, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var ir = a(936388),
    io = a(269248);
function id() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: H()(tQ.nd, io.n),
        children: (0, r.jsx)(x.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: ir.A.clearUploadedKeyVersions,
        }),
    });
}
var ic = a(37962),
    iu = a(881520),
    im = a(670455),
    ih = a(932661);
let ix = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function ip() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, i] = o.useState(1e3),
        [s, c] = o.useState(0),
        m = (0, d.bG)([iu.A], () => (null === e ? null : (iu.A.getFeedbackConfig(im.MW[e]) ?? ic.u[im.MW[e]]))),
        h = Object.entries(im.MW),
        g = h.slice(h.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        v = o.useMemo(() => null != e && s >= 0 && s <= 100 && a >= 0, [e, s, a]);
    return (0, r.jsx)("div", {
        className: ih.kL,
        children: (0, r.jsxs)(q.B, {
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
                                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: `${m.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: `${m.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: `${m.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: `${m.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(q.B, {
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
                                    options: ix,
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
                (0, r.jsxs)(ne.e, {
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != m &&
                                    tR.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: m.feedbackType })
                                ),
                            disabled: !v,
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != m &&
                                    tR.h.dispatch({
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
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(s >= 0 && s <= 100) &&
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var ig = a(334279),
    iv = a(663417),
    ij = a(147925),
    ib = a(557009);
async function iy() {
    return (
        await lq.Bo.get({
            url: em.Rsh.ENTITLEMENTS_FOR_APPLICATION(tM.tv),
            oldFormErrors: !0,
            query: { exclude_consumed: !0, exclude_ended: !0 },
            rejectWithError: !0,
        })
    ).body.map((e) => ib.A.createFromServer(e));
}
async function iE(e) {
    await lq.Bo.post({
        url: "/debug/entitlements/fractional-premium",
        body: { count: 1, sku_id: e },
        rejectWithError: !1,
    });
}
async function i_(e) {
    let t = "/debug/entitlements/fractional-premium";
    (null != e && (t = `${t}/${e}`), await lq.Bo.del({ url: t, rejectWithError: !0 }));
}
async function iC() {
    await lq.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
}
function iS() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(!1),
        l = (0, o.useCallback)(async () => {
            try {
                n(!0);
                let e = await iy();
                t(e);
            } finally {
                n(!1);
            }
        }, []),
        i = (0, o.useCallback)(
            async (e) => {
                (await iE(e), await l());
            },
            [l],
        );
    return {
        grantFractionalPremium: i,
        deleteFractionalPremium: (0, o.useCallback)(
            async (e) => {
                (await i_(e), await l());
            },
            [l],
        ),
        triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
            (await iC(), await l());
        }, [l]),
        refreshEntitlementList: l,
        entitlements: e,
        loading: a,
    };
}
var iN = a(267577),
    iA = a(370109);
let ik = {
    [em.GD.QUEST_REWARD]: "Quest Reward",
    [em.GD.DEVELOPER_GIFT]: "Developer Gift",
    [em.GD.INVOICE]: "Invoice",
    [em.GD.REVERSE_TRIAL]: "Reverse Trial",
    [em.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    [em.GD.SUBSCRIPTION]: "Subscription",
    [em.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
};
function iI(e) {
    let t,
        { entitlement: a, active: n, onDelete: l } = e;
    function i(e) {
        return null != e ? (0, nM.i$)(e, "LLL") : "---";
    }
    return (0, r.jsxs)("div", {
        className: H()(iN.Nr, n ? iA.C1 : ""),
        children: [
            (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
            !n &&
                (0, r.jsxs)(p.E, {
                    variant: "text-md/normal",
                    children: ["SKU: ", iD.find((e) => e.value === a.skuId)?.label],
                }),
            null != a.startsAt &&
                null != a.endsAt &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Start: ", i(a.startsAt), " "] }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["End: ", i(a.endsAt), " "] }),
                    ],
                }),
            (0, r.jsxs)(p.E, {
                variant: "text-md/normal",
                children: [
                    "Entitlement source type: ",
                    null != (t = a.sourceType) && t in ik ? ik[t] : `Unknown source type ${t}`,
                ],
            }),
            n &&
                null != l &&
                (0, r.jsx)(nS.$n, {
                    className: iN.RW,
                    size: nS.$n.Sizes.TINY,
                    color: nS.$n.Colors.RED,
                    look: nS.$n.Looks.OUTLINED,
                    onClick: l,
                    children: "Delete",
                }),
        ],
    });
}
let iD = [
    { id: "1h", label: "1 hour", value: ig.j.PREMIUM_TIER_2_1_HOUR },
    { id: "1d", label: "1 day", value: ig.j.PREMIUM_TIER_2_1_DAY },
    { id: "3d", label: "3 days", value: ig.j.PREMIUM_TIER_2_3_DAY },
];
function iT() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(ig.j.PREMIUM_TIER_2_1_HOUR),
        [l, i] = o.useState([]),
        [s, d] = o.useState([]),
        {
            refreshEntitlementList: c,
            grantFractionalPremium: u,
            deleteFractionalPremium: m,
            triggerNextEntitlementFulfillment: h,
            entitlements: v,
            loading: f,
        } = iS();
    return (
        o.useEffect(() => {
            c();
        }, [c]),
        o.useEffect(() => {
            (i(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === em.zF_.FRACTIONAL_REDEMPTION)),
                d(v.filter((e) => Object.values(ig.j).includes(e.skuId) && null == e.startsAt)));
        }, [v]),
        (0, r.jsx)(g.Ip, {
            className: tQ.nd,
            children: (0, r.jsxs)("div", {
                className: iA.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: iA.dL,
                        children: [
                            (0, r.jsx)(p.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(K.D, {
                                onClick: () => t(!e),
                                className: iN.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(ij.A, { direction: e ? ij.A.Directions.UP : ij.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(p.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(p.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed.",
                                }),
                            ],
                        }),
                    (0, r.jsxs)("section", {
                        style: { marginBottom: "8px" },
                        className: H()([iN.uW, iA.Uo]),
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: iD,
                                onSelectionChange: n,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => u(a),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("section", {
                        className: iN.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: iA.dL,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: iN.GC,
                                        children: [
                                            (0, r.jsx)(nS.$n, {
                                                disabled: f,
                                                size: nS.$n.Sizes.TINY,
                                                color: nS.$n.Colors.PRIMARY,
                                                look: nS.$n.Looks.OUTLINED,
                                                onClick: () => h(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(nS.$n, {
                                                disabled: f,
                                                size: nS.$n.Sizes.TINY,
                                                color: nS.$n.Colors.RED,
                                                look: nS.$n.Looks.OUTLINED,
                                                onClick: () => m(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(nS.$n, {
                                                disabled: f,
                                                look: nS.$n.Looks.BLANK,
                                                size: nS.$n.Sizes.ICON,
                                                onClick: c,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(iv.RefreshIcon, {
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
                                        (0, r.jsx)(p.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    iI,
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
                                        (0, r.jsx)(p.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: s.map((e) => (0, r.jsx)(iI, { entitlement: e }, e.id)),
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
var iO = a(832604),
    iR = a(264572).Buffer;
let iw = /[^a-zA-Z0-9_.-]+/g;
function iM(e) {
    let { runningGame: t } = e,
        a = (0, iO.A)(t.pid, void 0),
        [n, l] = (0, o.useState)(!1),
        i = t.name ?? t.exeName ?? "",
        s = null != a && !n;
    async function d() {
        if (null != a) {
            l(!0);
            try {
                let e,
                    t = await y.A.fileManager.saveWithDialog2(
                        iR.from(a.slice(a.indexOf(",") + 1), "base64"),
                        ((e = i.trim().replace(iw, "_")), `${e.length > 0 ? e : "icon"}.png`),
                        void 0,
                    );
                null == t ||
                    t.canceledByUser ||
                    (0, lF.P0)({
                        id: "devtools-save-icon-success",
                        type: l$.Ck.SUCCESS,
                        message: `Saved icon to ${t.directory}`,
                    });
            } catch {
                (0, lF.P0)({ id: "devtools-save-icon-failure", type: l$.Ck.FAILURE, message: "Failed to save icon" });
            } finally {
                l(!1);
            }
        }
    }
    return (0, r.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 12,
        children: [
            (0, r.jsxs)(q.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                fullWidth: !1,
                children: [
                    null != a
                        ? (0, r.jsx)("img", { src: a, alt: i, width: 48, height: 48 })
                        : (0, r.jsx)(p.E, { variant: "text-xxs/normal", color: "text-muted", children: "no icon" }),
                    (0, r.jsxs)(q.B, {
                        direction: "vertical",
                        gap: 0,
                        fullWidth: !1,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-md/normal", children: i }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                children: [
                                    t.id ?? "(no id)",
                                    " \xb7 ",
                                    t.distributor ?? "unknown",
                                    ":",
                                    t.sku ?? "\u2014",
                                ],
                            }),
                            (0, r.jsx)(p.E, { variant: "text-xxs/normal", color: "text-muted", children: t.exePath }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(x.$, { variant: "primary", text: "Save Icon", onClick: d, disabled: !s }),
        ],
    });
}
function iL() {
    let e = (0, d.bG)([E.Ay], () => E.Ay.getRunningGames());
    return (0, r.jsxs)(q.B, {
        gap: 16,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(q.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(Q.D, { variant: "heading-md/bold", children: "Game Icon Extractor" }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        children: "Save a running game's locally-detected icon as a PNG.",
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(q.B, {
                gap: 12,
                children: [
                    (0, r.jsx)(Q.D, { variant: "heading-sm/bold", children: "Running Games" }),
                    0 === e.length
                        ? (0, r.jsx)(p.E, {
                              variant: "text-sm/normal",
                              children: "No games detected. Launch a game first.",
                          })
                        : e.map((e) => (0, r.jsx)(iM, { runningGame: e }, `${e.pid}-${e.exePath}`)),
                ],
            }),
        ],
    });
}
var iP = a(390544),
    iU = a(498480),
    iG = a(475669),
    iB = a(486223);
function iF() {
    let e = (0, d.bG)([nd.A], () => nd.A.getGuildId()),
        t = (0, d.bG)([no.A], () => no.A.getGuild(e)?.name),
        a = (0, d.bG)([iG.A], () => iG.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    tR.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        i = o.useMemo(
            () =>
                Object.values(iP.M).map((e) =>
                    (0, r.jsx)(
                        x.$,
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
                tR.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(g.Ip, {
              className: iB.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: iB.uW,
                      children: (0, r.jsx)(Q.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: iB.uW,
                      children: [
                          (0, r.jsx)(p.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: iB.UD, children: i }),
                          (0, r.jsx)(p.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: iB.UD,
                              children: (0, r.jsx)(x.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: s,
                              }),
                          }),
                          (0, r.jsx)(p.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, iU.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function i$(e, t) {
    let a = "boolean" == typeof t ? t : !a2.Ay.get(e);
    tR.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var iV = a(257446);
function iW(e) {
    let { devSettingsCategory: t } = e,
        a = (0, d.bG)([a2.Ay], () => a2.Ay.allByCategory(t), [t], d.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => i$(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: H()(tQ.nd, iV.n), children: n });
}
var iz = a(950305),
    iH = a(231483),
    iK = a(597770),
    iY = a(433492),
    iq = a(695458),
    iJ = a(796140),
    iQ = a(268791),
    iX = a(836480),
    iZ = a(855473),
    i0 = a(626258),
    i1 = a(420854),
    i2 = a(373846),
    i3 = a(657044),
    i6 = a(141060),
    i5 = a(608599),
    i8 = a(685761),
    i4 = a(157225),
    i9 = a(362704),
    i7 = a(625903),
    se = a(628284),
    st = a(320448),
    sa = a(562708),
    sn = a(830215),
    sl = a(381689),
    si = a(889227),
    ss = a(499785),
    sr = a(315069);
class so extends sr.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        (super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids));
    }
    static fromServer(e) {
        return new so(e);
    }
    setPassword(e) {
        return ((this.password = e), this);
    }
}
let sd = { pools: null, users: null };
function sc(e) {
    (null == sd.users && (sd.users = new Map()), sd.users.set(e.id, new si.A(e)));
}
class su extends d.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (sd.pools = new Map(Object.entries(e.pools))),
            null != e.users && (sd.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != sd.pools ? Object.fromEntries(sd.pools) : null,
            users: null != sd.users ? Object.fromEntries(sd.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(sd.users?.values() ?? []).filter((t) => sd.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return sd.pools?.get(e) ?? null;
    }
    getUser(e) {
        return sd.users?.get(e) ?? null;
    }
    getPools() {
        return null === sd.pools ? null : Array.from(sd.pools.values());
    }
}
let sm = new su(tR.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        (null == sd.pools && (sd.pools = new Map()), sd.pools.set(t.id, t), a.forEach(sc));
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = sd.pools?.get(t);
        if (null == a) return !1;
        (a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                sd.users?.delete(e);
            }),
            sd.pools?.delete(t));
    },
});
var sh = a(835002);
async function sx(e, t) {
    return await ss.A.get({
        url: em.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: sa.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void sl.A.showFailedToast(sh.OB.GENERIC_ERROR);
            let { generated_pool: l, users: i } = n;
            tR.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: so.fromServer(l).setPassword(t),
                users: i.map((e) => new si.A(e)),
            });
        })
        .catch(() => (sl.A.showFailedToast(sh.OB.GENERIC_ERROR), null));
}
var sp = a(844330),
    sg = a(157416);
let sv = [
        iz.UserIcon,
        iH.ShieldIcon,
        iK.GiftIcon,
        iY.K,
        iq.m,
        iJ.c,
        iQ.$,
        iX.CompassIcon,
        iZ.Z,
        i0.A,
        i1.E,
        i2.C,
        i3._,
        i6.i,
        i5.L,
        i8.f,
        i4.N,
        i9.Y,
        i7.SettingsIcon,
    ],
    sj = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ];
function sf() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, i] = o.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("form", {
                onSubmit: async (l) => {
                    (l.preventDefault(), i(!0));
                    try {
                        (await sx(e, a), t(""), n(""));
                    } finally {
                        i(!1);
                    }
                },
                children: (0, r.jsxs)(q.B, {
                    direction: "vertical",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, r.jsxs)(q.B, {
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
                                    fullWidth: !0,
                                    value: a,
                                    onChange: n,
                                    placeholder: "Password",
                                    disabled: l,
                                }),
                            ],
                        }),
                        (0, r.jsxs)(q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(x.$, {
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
                                (0, r.jsx)(x.$, {
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
function sb(e) {
    let { pool: t } = e,
        { id: a, summary: n } = t,
        l = sm.getUsersForPool(a),
        i = (0, d.bG)([nP.default], () => nP.default.getId()),
        s = sv[Number(a) % sv.length],
        c = sj[Number(a) % sj.length],
        u = o.useCallback(() => {
            tR.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
        }, [a]);
    return (0, r.jsx)(q.B, {
        direction: "horizontal",
        align: "start",
        justify: "space-between",
        children: (0, r.jsx)(sp.A, {
            icon: (0, r.jsx)(p.E, {
                variant: "text-md/medium",
                color: c,
                className: sg.td,
                children: (0, r.jsx)(s, { size: "custom", width: 24, height: 24, color: "currentColor" }),
            }),
            title: n,
            className: sg.JC,
            subtitle: `${l.length} users`,
            children: (0, r.jsxs)(q.B, {
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
                                        K.D,
                                        {
                                            onClick: (a) => {
                                                (a.stopPropagation(),
                                                    (function (e, t) {
                                                        let a = sm.getUser(t);
                                                        if (null == a) throw Error("User not found");
                                                        let n = sm.getPool(e)?.password;
                                                        if (null == n) throw Error("Pool password not found");
                                                        if (null == a.email) throw Error("User email not found");
                                                        sn.A.login({
                                                            login: a.email,
                                                            password: n,
                                                            isMultiAccount: !0,
                                                            source: "generated_test_user",
                                                        }).catch(
                                                            () => (sl.A.showFailedToast(sh.OB.GENERIC_ERROR), null),
                                                        );
                                                    })(t.id, e.id));
                                            },
                                            "aria-disabled": i === e.id,
                                            className: H()(sg.vk, { [sg.Pe]: i === e.id }),
                                            children: (0, r.jsxs)(
                                                q.B,
                                                {
                                                    direction: "horizontal",
                                                    align: "center",
                                                    justify: "space-between",
                                                    gap: 8,
                                                    padding: { right: 8 },
                                                    fullWidth: !1,
                                                    children: [
                                                        (0, r.jsxs)(q.B, {
                                                            direction: "horizontal",
                                                            align: "center",
                                                            gap: 8,
                                                            fullWidth: !1,
                                                            className: H()({ [sg.WP]: i === e.id }),
                                                            children: [
                                                                (0, r.jsx)(iz.UserIcon, {
                                                                    size: "custom",
                                                                    width: 20,
                                                                    height: 20,
                                                                    color: "currentColor",
                                                                }),
                                                                (0, r.jsxs)("div", {
                                                                    children: [
                                                                        (0, r.jsx)(p.E, {
                                                                            variant: "text-sm/normal",
                                                                            color: "text-default",
                                                                            children: e.username,
                                                                        }),
                                                                        (0, r.jsx)(p.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: sg.c1,
                                                                            children: e.email,
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        i === e.id
                                                            ? (0, r.jsx)(p.E, {
                                                                  variant: "text-sm/normal",
                                                                  color: "text-feedback-positive",
                                                                  children: (0, r.jsx)(se.y, {
                                                                      size: "sm",
                                                                      color: "currentColor",
                                                                  }),
                                                              })
                                                            : (0, r.jsx)(st._, { size: "sm", color: "currentColor" }),
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
                        className: sg.UD,
                        children: (0, r.jsx)(x.$, {
                            icon: nI.TrashIcon,
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
function sy() {
    let e = (0, d.yK)([sm], () => sm.getPools() ?? []);
    return (0, r.jsxs)(q.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: sg.kL,
        children: [
            (0, r.jsx)(sf, {}),
            (0, r.jsx)(g.Ip, { className: sg.Ik, children: e?.map((e) => (0, r.jsx)(sb, { pool: e }, e.id)) }),
        ],
    });
}
var sE = a(582306),
    s_ = a(507104),
    sC = a(846466);
function sS(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function sN(e, t) {
    return null != t ? `/users/@me/gift-intents/dismissals/${e}/${t}` : `/users/@me/gift-intents/dismissals/${e}`;
}
let sA = tM.np.FRIEND_ANNIVERSARY;
function sk(e) {
    return 403 === e?.status
        ? "Forbidden (403). This account is likely not in the backend-persistence experiment; clearing also requires a staff account."
        : e instanceof Error
          ? e.message
          : String(e);
}
function sI() {
    let e = (0, d.bG)([s_.Ay], () => s_.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, d.bG)([s_.Ay], () => s_.Ay.getDevToolCurrentDate()),
        a = (0, d.bG)([s_.Ay], () => s_.Ay.getMessageGiftIntentLastShownMap()),
        n = (0, d.bG)([s_.Ay], () => s_.Ay.getHighestAffinityFriendAnniversaries()),
        l = (0, d.bG)([s_.Ay], () => s_.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, d.bG)([eo.default], () => eo.default.getCurrentUser()?.isStaff() ?? !1),
        s = (0, d.bG)(
            [aM.A],
            () => aM.A.getFriendIDs().filter((e) => !aM.A.isIgnored(e) && null != aM.A.getSince(e)).length,
        ),
        c = (0, d.bG)([aC.A], () => {
            let e = Number(aC.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
            return Number.isNaN(e) || 0 === e ? null : e;
        }),
        [u, m] = o.useState([]),
        [h, v] = o.useState(null),
        [f, b] = o.useState(!1),
        [y, E] = o.useState(!1),
        [_, C] = o.useState(!1),
        [S, N] = o.useState(void 0),
        A = o.useCallback(async () => {
            E(!0);
            try {
                let { body: e } = await lq.Bo.get({ url: "/users/@me/gift-intent-dismissals", rejectWithError: !0 });
                (m(e.dismissals ?? []), v(null), b(!1));
            } catch (t) {
                let e = t.status;
                (v(sk(t)), b(403 === e), 403 === e && m([]));
            } finally {
                E(!1);
            }
        }, []);
    async function k(e) {
        C(!0);
        try {
            (await e(), v(null), await A());
        } catch (e) {
            v(sk(e));
        } finally {
            C(!1);
        }
    }
    o.useEffect(() => {
        A();
    }, [A, c]);
    let I = u.filter((e) => e.intent_type === sA),
        D = new Map(I.map((e) => [e.target_id, Number(e.dismissed_at_ms)])),
        T = Array.from(new Set([...Object.keys(a), ...D.keys()])),
        O = Array.from(new Set([...n, ...l])),
        R = O.map((e) => ({ id: e, value: e, label: eo.default.getUser(e)?.username ?? `Unknown User (${e})` })),
        w = y || _;
    function M(e) {
        tR.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
    }
    function L(e) {
        let t = np.A.getUserAffinity(e);
        return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
    }
    return (0, r.jsx)(g.Ip, {
        className: tQ.nd,
        children: (0, r.jsxs)("div", {
            className: sC.l$,
            children: [
                (0, r.jsx)(p.E, { className: sC.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: sC.Pm,
                    children: (0, r.jsxs)(q.B, {
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
                                    M(e);
                                },
                            }),
                            (0, r.jsx)(x.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Re-randomize",
                                disabled: null == e,
                                onClick: function () {
                                    tR.h.dispatch({ type: "DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES" });
                                },
                            }),
                            (0, r.jsx)(x.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    M(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: sC.Pm,
                        children: (0, r.jsxs)(q.B, {
                            gap: 8,
                            children: [
                                0 === s
                                    ? (0, r.jsx)(p.E, {
                                          variant: "text-xs/normal",
                                          color: "text-feedback-warning",
                                          children:
                                              "No friends with an anniversary date, so no anniversaries can be generated.",
                                      })
                                    : (0, r.jsxs)(p.E, {
                                          variant: "text-xs/normal",
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
                                (0, r.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                n.length > 0 &&
                                    (0, r.jsxs)(q.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                children: "Highest Affinity Friend Anniversaries:",
                                            }),
                                            n.map((e) => {
                                                let t = eo.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    p.E,
                                                    { variant: "text-xs/normal", children: [a, " (", L(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                l.length > 0 &&
                                    (0, r.jsxs)(q.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            l.map((e) => {
                                                let t = eo.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    p.E,
                                                    { variant: "text-xs/normal", children: [a, " (", L(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: sC.Pm,
                    children: (0, r.jsxs)(q.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(sE.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? nC()(t) : void 0,
                                onSelect: function (e) {
                                    let t = nC()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    tR.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: function () {
                                    tR.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: sC.Pm,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "text-md/normal",
                            children: "Reset gift message cooldown (per-user, 14d)",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: function () {
                                tR.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sC.Pm,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: function () {
                                tR.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: sC.Pm,
                    children: (0, r.jsxs)(q.B, {
                        gap: 12,
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Backend dismissal sync" }),
                            (0, r.jsxs)(q.B, {
                                gap: 4,
                                children: [
                                    f &&
                                        (0, r.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "text-feedback-warning",
                                            children:
                                                "This account is not in the backend-persistence experiment, so nothing here will persist to the server.",
                                        }),
                                    !i &&
                                        (0, r.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "text-feedback-warning",
                                            children: "Clearing server dismissals requires a staff account.",
                                        }),
                                    (0, r.jsxs)(p.E, {
                                        variant: "text-xs/normal",
                                        children: [
                                            "Server last recorded a dismissal:",
                                            " ",
                                            null != c ? sS(c) : "never",
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(q.B, {
                                gap: 8,
                                direction: "horizontal",
                                align: "end",
                                children: [
                                    (0, r.jsx)(x.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        text: "Refresh",
                                        onClick: () => {
                                            A();
                                        },
                                        disabled: w,
                                    }),
                                    (0, r.jsx)(x.$, {
                                        size: "sm",
                                        variant: "primary",
                                        text: "Clear all",
                                        onClick: function () {
                                            k(() => lq.Bo.del({ url: sN(sA), rejectWithError: !0 }));
                                        },
                                        disabled: w || !i || f || 0 === I.length,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(q.B, {
                                gap: 8,
                                direction: "horizontal",
                                align: "end",
                                children: [
                                    (0, r.jsx)(j.l, {
                                        label: "Dismiss a generated anniversary on the server",
                                        selectionMode: "single",
                                        options: R,
                                        value: S,
                                        onSelectionChange: (e) => {
                                            N(e);
                                        },
                                    }),
                                    (0, r.jsx)(x.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        text: "Dismiss on server",
                                        onClick: function () {
                                            null != S &&
                                                k(() =>
                                                    lq.Bo.post({
                                                        url: "/users/@me/gift-intents/dismiss",
                                                        body: { intent_type: sA, target_id: S },
                                                        rejectWithError: !0,
                                                    }),
                                                );
                                        },
                                        disabled: w || f || null == S,
                                    }),
                                ],
                            }),
                            0 === R.length &&
                                (0, r.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children: "Generate friend anniversaries above to pick a target to dismiss.",
                                }),
                            null != h &&
                                (0, r.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-critical",
                                    children: h,
                                }),
                            y && (0, r.jsx)(p.E, { variant: "text-xs/normal", children: "Loading..." }),
                            !y &&
                                0 === T.length &&
                                (0, r.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children: "No dismissals recorded locally or on the server.",
                                }),
                            !y &&
                                T.length > 0 &&
                                (0, r.jsxs)(q.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            variant: "text-xs/semibold",
                                            children: "Local vs. server (per friend):",
                                        }),
                                        T.map((e) => {
                                            let t = eo.default.getUser(e),
                                                n = t?.username ?? `Unknown User (${e})`,
                                                l = a[e],
                                                s = D.get(e);
                                            return (0, r.jsxs)(
                                                q.B,
                                                {
                                                    gap: 8,
                                                    direction: "horizontal",
                                                    justify: "space-between",
                                                    align: "center",
                                                    children: [
                                                        (0, r.jsxs)(p.E, {
                                                            variant: "text-xs/normal",
                                                            children: [
                                                                n,
                                                                ": local ",
                                                                null != l ? sS(l) : "none",
                                                                ", server",
                                                                " ",
                                                                null != s ? sS(s) : "none",
                                                            ],
                                                        }),
                                                        null != s &&
                                                            (0, r.jsx)(x.$, {
                                                                size: "sm",
                                                                variant: "secondary",
                                                                text: "Clear",
                                                                onClick: () => {
                                                                    k(() =>
                                                                        lq.Bo.del({
                                                                            url: sN(sA, e),
                                                                            rejectWithError: !0,
                                                                        }),
                                                                    );
                                                                },
                                                                disabled: w || !i || f,
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
var sD = a(460890),
    sT = a(28863),
    sO = a(517461),
    sR = a(214947),
    sw = a(403581),
    sM = a(34188);
let sL = [
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
var sP = a(277583);
let sU = [0, 0.5, 1],
    sG = ["Center", "Inner ring", "Outer ring"],
    sB = sU.length,
    sF = "ILLO_BLUE",
    s$ = "ILLO_BLUE_40",
    sV = Array.from({ length: sB }, () => s$),
    sW = Array.from({ length: sB }, () => sF),
    sz = ["1", "0.5", "0"],
    sH = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    sK = [
        { label: "Light", value: em.NJ8.LIGHT, id: em.NJ8.LIGHT },
        { label: "Ash", value: em.NJ8.ASH, id: em.NJ8.ASH },
        { label: "Dark", value: em.NJ8.DARK, id: em.NJ8.DARK },
        { label: "Onyx", value: em.NJ8.ONYX, id: em.NJ8.ONYX },
    ],
    sY = { [em.NJ8.ASH]: em.NJ8.DARK, [em.NJ8.ONYX]: em.NJ8.DARK, [em.NJ8.LIGHT]: em.NJ8.DARK },
    sq = { [em.NJ8.LIGHT]: "light", [em.NJ8.ASH]: "ash", [em.NJ8.DARK]: "dark", [em.NJ8.ONYX]: "onyx" },
    sJ = [
        { id: "friends", icon: sR.$, text: "Friends" },
        { id: "nitro", icon: sw.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: sM.U, text: "Shop", useCustomGradient: !0 },
    ],
    sQ = sL.map((e) => ({ label: e, value: e, id: e })),
    sX = Object.fromEntries(
        sL.map((e) => [
            e,
            Object.keys(eq.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eq.A.unsafe_rawColors[e].resolve().rgba(),
                        i =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eq.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eq.A.unsafe_rawColors.OPACITY_WHITE_28,
                        s = (0, r.jsx)("span", {
                            className: sP.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${i.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: s };
                }),
        ]),
    );
var sZ = a(306327);
function s0(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function s1(e, t) {
    let [a, n, l, i] = eq.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: i };
}
function s2(e, t) {
    let a = eq.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function s3(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(q.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(q.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(ez.K, {
                        icon: nN.CopyIcon,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: sP.RP, children: t }),
        ],
    });
}
function s6(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                sG.map((e, a) => {
                    let n;
                    return (
                        (n = sK
                            .map((e) => {
                                let n,
                                    l,
                                    { value: i } = e,
                                    s = sq[i],
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
    return (0, r.jsxs)(q.B, {
        gap: 16,
        children: [
            (0, r.jsx)(Q.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            sG.map((e, t) => (0, r.jsx)(s3, { yaml: a[t], label: e }, e)),
        ],
    });
}
function s5(e, t, a) {
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
    return new sZ.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + i * r) / 255,
    ]);
}
function s8(e, t, a) {
    var n;
    let l = a.map((e) => {
            let [t, a, n] = eq.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        i = 1 / 0;
    for (let a of l) (n = e.contrast(s5(t, l, a.position), "WCAG21")) < i && (i = n);
    for (let a = 0; a < l.length - 1; a++) {
        let { contrast: n } = (function (e, t, a, n, l) {
            let i = 1 / 0,
                s = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(s5(e, t, o), "WCAG21");
                d < i && ((i = d), (s = o));
            }
            return { contrast: i, position: s };
        })(t, l, e, l[a].position, l[a + 1].position);
        n < i && (i = n);
    }
    return Math.round(100 * i) / 100;
}
function s4(e) {
    let [t, a, n] = eq.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, i, s] = eq.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eq.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new sZ.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: i * (1 - c) + o * c, b: s * (1 - c) + d * c },
    };
}
function s9() {
    return {
        colors: Array.from({ length: sB }, () => void 0),
        scales: Array.from({ length: sB }, () => void 0),
        opacities: Array.from({ length: sB }, () => void 0),
    };
}
function s7() {
    return {
        [em.NJ8.LIGHT]: s9(),
        [em.NJ8.ASH]: { colors: [...sV], scales: [...sW], opacities: [...sz] },
        [em.NJ8.DARK]: s9(),
        [em.NJ8.ONYX]: s9(),
    };
}
function re() {
    let e = (0, sD.G9)(),
        [t, a] = o.useState(em.NJ8.DARK),
        [n, l] = (0, sO.V)("DevToolsGradientContrastPanel_themeStops", s7()),
        i = n ?? s7(),
        [s, d] = o.useState(["", "", ""]),
        [c, u] = o.useState([null, null, null]),
        [m, h] = o.useState(null),
        { images: v, renderPickers: j } = (function () {
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
                        (0, r.jsxs)(q.B, {
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
                                              (0, r.jsx)(p.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, r.jsx)(lV.Q, {
                                                  text: "Remove",
                                                  variant: "critical",
                                                  textVariant: "text-sm/medium",
                                                  onClick: () => t(null),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(x.$, {
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
        b = o.useMemo(
            () =>
                Object.fromEntries(
                    sK.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let i = 0; i < sB; i++) {
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
                                        d = sY[d];
                                    }
                                    (a.push(s ?? sV[i]), n.push(r ?? sW[i]), l.push(o ?? sz[i]));
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(i, t),
                        ];
                    }),
                ),
            [i],
        ),
        y = b[t],
        E = o.useCallback(
            (e) => {
                l({ ...i, [t]: e(i[t]) });
            },
            [t, l, i],
        ),
        _ = o.useMemo(() => s4({ theme: t, saturation: 1 }), [t]),
        C = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < sB; t++) {
                let a = parseFloat(y.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: y.colors[t], opacity: a, position: sU[t] });
            }
            return e;
        }, [y]),
        S = o.useMemo(() => {
            if (null == C) return null;
            let { text: e, background: t } = _;
            return sG.map((a, n) =>
                sX[y.scales[n]].map((a) => {
                    let l = s8(e, t, s0(C, n, { ...C[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [C, _, y.scales]),
        N = o.useMemo(() => {
            try {
                return sK.map((e) => {
                    let { value: t, label: a } = e,
                        n = b[t],
                        l = [];
                    for (let e = 0; e < sB; e++) {
                        let i = parseFloat(n.opacities[e]);
                        if (isNaN(i) || i < 0 || i > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: i, position: sU[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = s4(t),
                                i = s8(n, l, e),
                                s = i >= 4.5;
                            if (!s)
                                for (let t = 0; t < e.length; t++) {
                                    let i = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return sL.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == i) continue;
                                    let s = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of sX[i]) {
                                        if (o === e[t].color) continue;
                                        let i = s8(n, l, s0(e, t, { ...e[t], color: o }));
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
        }, [b]);
    return (0, r.jsx)(g.Ar, {
        className: sP.XG,
        children: (0, r.jsxs)(q.B, {
            gap: 24,
            padding: 8,
            className: sP.zr,
            children: [
                (0, r.jsx)(Q.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Onyx unless overridden.",
                        }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(sT.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(au.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: sK,
                }),
                (0, r.jsxs)(q.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: sP.G9,
                            children: sG.map((e, t) => {
                                let a = "" !== s[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(q.B, {
                                                gap: 0,
                                                className: sP.hi,
                                                children: [
                                                    (0, r.jsx)(p.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lV.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${s2(y.colors[t], parseFloat(y.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                s2(y.colors[t], parseFloat(y.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(au.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: y.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = sX[e][0]?.value;
                                                    E((n) => ({
                                                        ...n,
                                                        scales: s0(n.scales, t, e),
                                                        colors: null != a ? s0(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: sQ,
                                            }),
                                            (0, r.jsx)(au.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: y.colors[t],
                                                onSelectionChange: (e) =>
                                                    E((a) => ({ ...a, colors: s0(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: S?.[t] ?? sX[y.scales[t]],
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: y.opacities[t],
                                                onChange: (e) => E((a) => ({ ...a, opacities: s0(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: `Hex${a && null != c[t] ? ` (dE: ${c[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: s[t],
                                                onChange: (e) => {
                                                    d((a) => s0(a, t, e));
                                                    let a = (function (e) {
                                                        if (!sH.test(e)) return null;
                                                        try {
                                                            return new sZ.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = s$,
                                                                a = sF,
                                                                n = 1 / 0;
                                                            for (let l of sL)
                                                                for (let i of sX[l]) {
                                                                    let s = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eq.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new sZ.A("srgb", [
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
                                                        (u((a) => s0(a, t, e.deltaE)),
                                                            E((a) => ({
                                                                ...a,
                                                                scales: s0(a.scales, t, e.scale),
                                                                colors: s0(a.colors, t, e.color),
                                                            })));
                                                    } else u((e) => s0(e, t, null));
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
                j(),
                (0, r.jsx)(Q.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(sD.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eK.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(q.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: sP.$8,
                                        style: { background: eq.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: sJ.map((e, t) =>
                                            (0, r.jsx)(
                                                eb.z9,
                                                {
                                                    route: "",
                                                    selected: m === e.id,
                                                    onClick: () => h(e.id),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: s1(y.colors[0], parseFloat(y.opacities[0])),
                                                        hoverGradientMiddle: s1(
                                                            y.colors[1],
                                                            parseFloat(y.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: s1(y.colors[2], parseFloat(y.opacities[2])),
                                                    }),
                                                    ...{ "data-list-item-id": `devtools-preview-${t}` },
                                                    children:
                                                        "useCustomGradient" in e &&
                                                        v.buttonBackground?.src != null &&
                                                        (0, r.jsx)("div", {
                                                            style: {
                                                                position: "absolute",
                                                                height: "100%",
                                                                bottom: 0,
                                                                insetInlineEnd: 0,
                                                                pointerEvents: "none",
                                                                borderRadius: "inherit",
                                                            },
                                                            children: (0, r.jsx)("img", {
                                                                src: v.buttonBackground.src,
                                                                alt: "",
                                                                "aria-hidden": !0,
                                                                style: {
                                                                    height: "100%",
                                                                    maxWidth: "100%",
                                                                    objectFit: "cover",
                                                                    objectPosition: "bottom right",
                                                                    borderRadius: "inherit",
                                                                },
                                                            }),
                                                        }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                    }),
                                }),
                            }),
                    }),
                }),
                null != N &&
                    (0, r.jsxs)(q.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(Q.D, { variant: "heading-sm/semibold", children: "Results" }),
                            N.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          q.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(Y.w, {
                                                      type: n.passes ? "success" : "critical",
                                                      children: [
                                                          n.passes ? "\u2713 Passes" : "\u2717 Fails",
                                                          " WCAG AA \u2014 Min contrast: ",
                                                          n.minContrastRatio,
                                                          " : 1",
                                                      ],
                                                  }),
                                                  !n.passes &&
                                                      null != n.suggestion &&
                                                      (0, r.jsxs)(q.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(p.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(p.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      sG[n.suggestion.stopIndex],
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
                                                      (0, r.jsx)(p.E, {
                                                          variant: "text-sm/normal",
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
                (0, r.jsx)(s6, { allResolvedStops: b }),
            ],
        }),
    });
}
var rt = a(820739),
    ra = a(230135),
    rn = a(45780),
    rl = a(868652),
    ri = a(859241);
let rs = [
        aE.M.GUILD_POWERUP_PERKS_COACHMARK,
        aE.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        aE.M.GUILD_POWERUP_NOTIFICATION,
        aE.M.GUILD_TAG_AVAILABLE_COACHMARK,
        aE.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
        aE.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE,
    ],
    rr = [
        aE.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        aE.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        aE.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        aE.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        aE.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    ro = [aE.V.ADOPT_CLAN_IDENTITY_NOTICE],
    rd = [
        aE.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        aE.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        aE.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function rc(e) {
    switch (e) {
        case aE.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case aE.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case aE.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case aE.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case aE.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case aE.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var ru = a(374336);
async function rm(e, t, a) {
    (await lq.Bo.patch({
        url: em.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : nC()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, rt.VU)(e),
        (0, rl.Xd)(e, !0));
}
async function rh(e) {
    await lq.Bo.post({ url: em.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function rx() {
    let e = (0, d.bG)([nd.A], () => nd.A.getGuildId()),
        t = (0, d.bG)([no.A], () => no.A.getGuild(e)?.name),
        a = (0, d.yK)([aC.A], () => [...rr, ...ro].filter((t) => null != e && (0, rn.zs)(t, e))),
        n = (0, d.yK)([ri.A], () => (null != e ? (ri.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(g.Ip, {
            className: ru.kL,
            children: [
                (0, r.jsx)("div", {
                    className: ru.uW,
                    children: (0, r.jsx)(Q.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: ru.uW,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "eyebrow",
                            className: ru.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, rl.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ru.uW,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", className: ru.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(x.$, { variant: "primary", text: "Reset", onClick: ra.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ru.uW,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        rm(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        rm(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ru.uW,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", className: ru.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(q.B, {
                            gap: 16,
                            children: rs.map((e) => (0, r.jsx)(lA, { className: ru.z6, content: aE.M[e] }, aE.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: ru.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: rr.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: rc(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rn._$)(t, e, !1)
                                            : ((0, a_._N)(aE.M.GUILD_POWERUP_NOTIFICATION), (0, rn.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ru.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: ro.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: rc(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rn._$)(t, e, !1)
                                            : ((0, a_._N)(aE.M.GUILD_POWERUP_NOTIFICATION), (0, rn.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: ru.uW,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "eyebrow",
                            className: ru.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        rd.map((e) => (0, r.jsx)(lA, { className: ru.z6, content: aE.M[e] }, aE.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ru.uW,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "eyebrow",
                            className: ru.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                rh(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(x.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, iU.Wp)(!1);
                    },
                }),
            ],
        });
}
var rp = a(450510),
    rg = a(648048);
function rv(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, d.yK)([rp.HP], () => [rp.HP.hasHotspot(t, !0), rp.HP.getHotspotOverride(t)]);
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
        onSelectionChange: (e) => (null != e ? (0, rp.Kl)(t, e) : (0, rp.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function rj() {
    return (0, r.jsx)(g.Ip, {
        className: tQ.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: rg.IN,
            children: (0, r.jsx)(q.B, {
                gap: 20,
                children: Object.keys(rp._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(rv, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var rf = a(632296),
    rb = a(855522),
    ry = a(37646),
    rE = a(773669);
function r_() {
    let e = (0, d.bG)([rE.default], () => rE.default.locale),
        [t, a] = o.useState(),
        n = (0, rf.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => nu.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(a3.Ay, {
                children: [
                    (0, r.jsx)(a3.Ay.Icon, { icon: ry.U, tooltip: "Locale" }),
                    (0, r.jsx)(a3.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(nH, {
                children: [
                    (0, r.jsx)(nK, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nK, { name: "App", children: e }),
                    (0, r.jsx)(nK, { name: "System", children: nu.systemLocale }),
                    (0, r.jsx)(nK, { name: "@discord/intl", children: nu.intl.currentLocale }),
                    (0, r.jsx)(nK, { name: "common i18n", children: rb.A.getLocale() }),
                    (0, r.jsx)(nK, { name: "Moment", children: nC().locale() }),
                ],
            }),
            (0, r.jsxs)(a3.Ay, {
                children: [
                    (0, r.jsx)(a3.Ay.Icon, { icon: ry.U, tooltip: "Messages" }),
                    (0, r.jsx)(a3.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(nH, {
                children: (0, r.jsx)(nK, { name: "Unique Rendered Main Messages", children: Object.keys(nu.t).length }),
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
            (0, r.jsxs)(nH, {
                children: [
                    (0, r.jsx)(nK, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nK, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(a6.A, { data: l?.(e) }),
        ],
    });
}
var rC = a(434404);
function rS() {
    let { node: e } = (0, es.Ay)(rC.F, "");
    return (0, r.jsx)(g.Ip, {
        className: tQ.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(ei.A, { node: e }, e.key),
        }),
    });
}
var rN = a(361158),
    rA = a(80556),
    rk = a(219503),
    rI = a(665095),
    rD = a(87404);
function rT() {
    return (0, r.jsx)(g.Ip, {
        className: tQ.nd,
        children: (0, r.jsxs)("div", {
            className: iA.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: iA.uW,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: iA.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: function () {
                                    (0, rN.B8)(() => (0, r.jsx)(rI.A, {}), { layerKey: rD._s, Layer: rA.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: iA.uW,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: iA.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: function () {
                                    (0, rN.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rk.A, { onClose: t });
                                        },
                                        { layerKey: rD._s, Layer: rA.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: iA.uW,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: iA.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: function () {
                                    rN.xr.setState({ fullScreenLayers: [] });
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
var rO = a(687813),
    rR = a(604121);
let rw = {
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Messages_Opt.lottie":
        () => a.e("136508").then(a.t.bind(a, 655671, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Notifications_Opt.lottie":
        () => a.e("405252").then(a.t.bind(a, 323823, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_CombinedEE.lottie":
        () => a.e("565154").then(a.t.bind(a, 670649, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_Opt.lottie":
        () => a.e("277248").then(a.t.bind(a, 342787, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_You_Opt.lottie": () =>
        a.e("393401").then(a.t.bind(a, 959328, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Requests_Messages.lottie": () =>
        a.e("748614").then(a.t.bind(a, 713893, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Activities.lottie": () =>
        a.e("32431").then(a.t.bind(a, 857778, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/AppsIcon.lottie": () =>
        a.e("337415").then(a.t.bind(a, 996858, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Camera.lottie": () =>
        a.e("475913").then(a.t.bind(a, 999344, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Deafen.lottie": () =>
        a.e("61309").then(a.t.bind(a, 433356, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/EndCall.lottie": () =>
        a.e("727847").then(a.t.bind(a, 72922, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/GIF.lottie": () =>
        a.e("932886").then(a.t.bind(a, 456309, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Gift.lottie": () =>
        a.e("243734").then(a.t.bind(a, 733813, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Microphone.lottie": () =>
        a.e("926620").then(a.t.bind(a, 890007, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpend.lottie": () =>
        a.e("492568").then(a.t.bind(a, 149707, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpendLightTheme.lottie": () =>
        a.e("282715").then(a.t.bind(a, 147734, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Screenshare.lottie": () =>
        a.e("829721").then(a.t.bind(a, 218048, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Settings.lottie": () =>
        a.e("494483").then(a.t.bind(a, 155806, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Soundboard.lottie": () =>
        a.e("350115").then(a.t.bind(a, 313281, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Sticker.lottie": () =>
        a.e("897473").then(a.t.bind(a, 956248, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Waveform.lottie": () =>
        a.e("665373").then(a.t.bind(a, 914028, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge01.lottie":
        () => a.e("875199").then(a.t.bind(a, 904066, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge02.lottie":
        () => a.e("633900").then(a.t.bind(a, 185319, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge03.lottie":
        () => a.e("665405").then(a.t.bind(a, 743372, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge06.lottie":
        () => a.e("227648").then(a.t.bind(a, 195011, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge09.lottie":
        () => a.e("729095").then(a.t.bind(a, 619578, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge12.lottie":
        () => a.e("994131").then(a.t.bind(a, 676574, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge15.lottie":
        () => a.e("765404").then(a.t.bind(a, 384407, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge18.lottie":
        () => a.e("911817").then(a.t.bind(a, 110320, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge24.lottie":
        () => a.e("284996").then(a.t.bind(a, 248476, 17)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-action.lottiejson": () =>
        a.e("719534").then(a.t.bind(a, 87037, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-idle.lottiejson": () =>
        a.e("812250").then(a.t.bind(a, 553998, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-loop.lottiejson": () =>
        a.e("58526").then(a.t.bind(a, 138157, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-action.lottiejson": () =>
        a.e("964376").then(a.t.bind(a, 37259, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-idle.lottiejson": () =>
        a.e("730800").then(a.t.bind(a, 683891, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-loop.lottiejson": () =>
        a.e("852436").then(a.t.bind(a, 45887, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-action.lottiejson": () =>
        a.e("403086").then(a.t.bind(a, 118301, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-idle.lottiejson": () =>
        a.e("437690").then(a.t.bind(a, 733057, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-loop.lottiejson": () =>
        a.e("582078").then(a.t.bind(a, 553101, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-action.lottiejson": () =>
        a.e("751992").then(a.t.bind(a, 558251, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-idle.lottiejson": () =>
        a.e("264400").then(a.t.bind(a, 94995, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-loop.lottiejson": () =>
        a.e("239476").then(a.t.bind(a, 367327, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-action.lottiejson":
        () => a.e("827568").then(a.t.bind(a, 579571, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-loop.lottiejson":
        () => a.e("525676").then(a.t.bind(a, 322151, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-action.lottiejson":
        () => a.e("710803").then(a.t.bind(a, 27870, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-idle.lottiejson":
        () => a.e("410191").then(a.t.bind(a, 837074, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-loop.lottiejson":
        () => a.e("761223").then(a.t.bind(a, 547450, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-action.lottiejson": () =>
        a.e("969842").then(a.t.bind(a, 809865, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-idle.lottiejson": () =>
        a.e("699166").then(a.t.bind(a, 334829, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-action.lottiejson": () =>
        a.e("698287").then(a.t.bind(a, 380082, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-idle.lottiejson": () =>
        a.e("212427").then(a.t.bind(a, 676614, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-loop.lottiejson": () =>
        a.e("831939").then(a.t.bind(a, 900110, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-action.lottiejson": () =>
        a.e("371305").then(a.t.bind(a, 629456, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-idle.lottiejson": () =>
        a.e("170625").then(a.t.bind(a, 254424, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-loop.lottiejson": () =>
        a.e("233449").then(a.t.bind(a, 690576, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-action.lottiejson": () =>
        a.e("346791").then(a.t.bind(a, 690842, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-idle.lottiejson": () =>
        a.e("828115").then(a.t.bind(a, 755678, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-loop.lottiejson": () =>
        a.e("408891").then(a.t.bind(a, 778422, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-action.lottiejson": () =>
        a.e("958009").then(a.t.bind(a, 433504, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-idle.lottiejson": () =>
        a.e("702897").then(a.t.bind(a, 976584, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-loop.lottiejson": () =>
        a.e("252793").then(a.t.bind(a, 858464, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Anime_v01_Lottie.lottiejson": () =>
        a.e("674149").then(a.t.bind(a, 965892, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Arcade_v01.lottiejson": () =>
        a.e("517087").then(a.t.bind(a, 44194, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlackHoles_v01.lottiejson": () =>
        a.e("4289").then(a.t.bind(a, 141208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlastOff_v04.lottiejson": () =>
        a.e("277339").then(a.t.bind(a, 420054, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Crystal_v04.lottiejson": () =>
        a.e("366414").then(a.t.bind(a, 33565, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fireworks_v03.lottiejson": () =>
        a.e("331165").then(a.t.bind(a, 414956, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fusion_v03.lottiejson": () =>
        a.e("158541").then(a.t.bind(a, 221340, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Pop_v04.lottiejson": () =>
        a.e("910169").then(a.t.bind(a, 710208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_PowerUp_v05.lottiejson": () =>
        a.e("276601").then(a.t.bind(a, 333984, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Puzzle_v01_Lottie.lottiejson": () =>
        a.e("484163").then(a.t.bind(a, 211342, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Spotlight_v01_Lottie.lottiejson": () =>
        a.e("252029").then(a.t.bind(a, 714316, 19)),
    "discord_app/images/burst_reactions/BurstReaction_StarBlast_v03.lottiejson": () =>
        a.e("623997").then(a.t.bind(a, 851404, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Tube_v01_Lottie.lottiejson": () =>
        a.e("667133").then(a.t.bind(a, 821644, 19)),
    "discord_app/images/burst_reactions/BurstReaction_UFO_v01_Lottie.lottiejson": () =>
        a.e("684765").then(a.t.bind(a, 51244, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Whirlwind_v01_Lottie.lottiejson": () =>
        a.e("235583").then(a.t.bind(a, 668994, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Spotlight_v1.lottiejson": () =>
        a.e("47862").then(a.t.bind(a, 911573, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Anime_v1.lottiejson": () =>
        a.e("946711").then(a.t.bind(a, 23434, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Arcade_v1.lottiejson": () =>
        a.e("751153").then(a.t.bind(a, 743496, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlackHoles_v1.lottiejson": () =>
        a.e("32803").then(a.t.bind(a, 252462, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlastOff_v1.lottiejson": () =>
        a.e("819842").then(a.t.bind(a, 341529, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Crystal_v1.lottiejson": () =>
        a.e("585529").then(a.t.bind(a, 762464, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fireworks_v1.lottiejson": () =>
        a.e("697197").then(a.t.bind(a, 47036, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fusion_v1.lottiejson": () =>
        a.e("192933").then(a.t.bind(a, 279172, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Pop_v1.lottiejson": () =>
        a.e("905560").then(a.t.bind(a, 824888, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_PowerUp_v1.lottiejson": () =>
        a.e("863011").then(a.t.bind(a, 432302, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Puzzle_v1.lottiejson": () =>
        a.e("369845").then(a.t.bind(a, 854420, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Spotlight_v1.lottiejson": () =>
        a.e("888607").then(a.t.bind(a, 997730, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_StarBlast_v2.lottiejson": () =>
        a.e("696874").then(a.t.bind(a, 281073, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Tube_v1.lottiejson": () =>
        a.e("894147").then(a.t.bind(a, 192718, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_UFO_v2.lottiejson": () =>
        a.e("84992").then(a.t.bind(a, 513667, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Whirlwind_v1.lottiejson": () =>
        a.e("349693").then(a.t.bind(a, 754124, 19)),
    "discord_app/modules/guild_member_verification/images/islandMiddleAnimation.lottiejson": () =>
        a.e("244678").then(a.t.bind(a, 144759, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_dt.json": () =>
        a.e("515048").then(a.t.bind(a, 366043, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_lt.json": () =>
        a.e("612512").then(a.t.bind(a, 789091, 19)),
    "discord_common/js/shared/animations/app/activities/AppsIconWordlePromo.lottiejson": () =>
        a.e("173550").then(a.t.bind(a, 527613, 19)),
    "discord_common/js/shared/animations/app/nearby/nearby.lottiejson": () =>
        a.e("293780").then(a.t.bind(a, 957439, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/dark.lottiejson": () =>
        a.e("245470").then(a.t.bind(a, 622637, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/light.lottiejson": () =>
        a.e("23478").then(a.t.bind(a, 262037, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscription_system_message_easter_egg/index.lottiejson":
        () => a.e("698150").then(a.t.bind(a, 633343, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/hd_streaming.lottiejson": () =>
        a.e("520795").then(a.t.bind(a, 551574, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-2/index.lottiejson": () =>
        a.e("869421").then(a.t.bind(a, 548375, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Bubbles_v03.lottiejson": () =>
        a.e("91770").then(a.t.bind(a, 95553, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Portal_v03.lottiejson": () =>
        a.e("196515").then(a.t.bind(a, 178862, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Slime_v02.lottiejson": () =>
        a.e("109302").then(a.t.bind(a, 16341, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Slime_v1.lottiejson": () =>
        a.e("247554").then(a.t.bind(a, 748761, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Bubbles_v2.lottiejson": () =>
        a.e("807739").then(a.t.bind(a, 106870, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Portal_v1.lottiejson": () =>
        a.e("979067").then(a.t.bind(a, 458486, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Slime_v2.lottiejson": () =>
        a.e("924584").then(a.t.bind(a, 388059, 19)),
    "discord_app/modules/app_launcher/native/images/onboarding_glow.lottiejson": () =>
        a.e("507985").then(a.t.bind(a, 9640, 19)),
    "discord_app/modules/global_discovery_apps/discovering-dabatouille-animation.lottiejson": () =>
        a.e("995947").then(a.t.bind(a, 604902, 19)),
    "discord_app/modules/guild_boosting/animations/animated_guild_icon.lottiejson": () =>
        a.e("24645").then(a.t.bind(a, 624420, 19)),
    "discord_app/modules/guild_member_verification/images/wavingHandLottieAnimation.lottiejson": () =>
        a.e("515423").then(a.t.bind(a, 155147, 19)),
    "discord_app/modules/guild_onboarding/native/animations/landing.lottiejson": () =>
        a.e("124093").then(a.t.bind(a, 280780, 19)),
    "discord_app/modules/guild_onboarding/web/animations/balloon-dog.lottiejson": () =>
        a.e("225961").then(a.t.bind(a, 739408, 19)),
    "discord_app/modules/guild_onboarding/web/animations/bubble-island-02.lottiejson": () =>
        a.e("187356").then(a.t.bind(a, 194199, 19)),
    "discord_app/modules/guild_onboarding/web/animations/grilling-island-02.lottiejson": () =>
        a.e("556026").then(a.t.bind(a, 113473, 19)),
    "discord_app/modules/guild_onboarding/web/animations/main-island-02.lottiejson": () =>
        a.e("416301").then(a.t.bind(a, 694268, 19)),
    "discord_app/modules/guild_onboarding/web/animations/waffle-island-02.lottiejson": () =>
        a.e("722191").then(a.t.bind(a, 896018, 19)),
    "discord_app/modules/poggermode/images/enable_animation.lottiejson": () =>
        a.e("504660").then(a.t.bind(a, 662336, 19)),
    "discord_app/modules/premium/powerups/web/images/server_boost_highlight.json": () =>
        a.e("867807").then(a.t.bind(a, 217762, 19)),
    "discord_app/modules/quests/images/confetti.lottiejson": () => a.e("40119").then(a.t.bind(a, 718698, 19)),
    "discord_app/modules/quests/web/images/quest_bar_background.json": () =>
        a.e("837316").then(a.t.bind(a, 599279, 19)),
    "discord_app/modules/quests/web/images/quest_bar_sparkle.json": () => a.e("897536").then(a.t.bind(a, 478979, 19)),
    "discord_app/modules/self_mod/inappropriate_conversation/images/vibing_wumpus.lottiejson": () =>
        a.e("114823").then(a.t.bind(a, 718074, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/dark.lottiejson": () =>
        a.e("480467").then(a.t.bind(a, 661022, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/light.lottiejson": () =>
        a.e("892705").then(a.t.bind(a, 111992, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/coachmark/seasonal-gifting-coachmark.lottiejson":
        () => a.e("561250").then(a.t.bind(a, 762361, 19)),
    "discord_common/js/shared/animations/app/playstation/playstation_connecting.lottiejson": () =>
        a.e("435066").then(a.t.bind(a, 844512, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/emoji.lottiejson": () =>
        a.e("717124").then(a.t.bind(a, 616175, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_dark.lottiejson": () =>
        a.e("394675").then(a.t.bind(a, 735678, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_light.lottiejson": () =>
        a.e("278465").then(a.t.bind(a, 247704, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/profile_customization.lottiejson": () =>
        a.e("762807").then(a.t.bind(a, 202282, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/unlock.lottiejson": () =>
        a.e("131838").then(a.t.bind(a, 650125, 19)),
    "discord_common/js/shared/animations/app/premium_marketing/index.lottiejson": () =>
        a.e("406954").then(a.t.bind(a, 964529, 19)),
    "discord_common/js/shared/animations/app/premium_payment_guild/index.lottiejson": () =>
        a.e("945870").then(a.t.bind(a, 738503, 19)),
    "discord_common/js/shared/animations/app/premium-activated-tier-1/premium-activated-tier-1.lottiejson": () =>
        a.e("505642").then(a.t.bind(a, 242993, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-0/index.lottiejson": () =>
        a.e("678503").then(a.t.bind(a, 635489, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-1/index.lottiejson": () =>
        a.e("119898").then(a.t.bind(a, 262546, 19)),
    "discord_common/js/shared/animations/app/xbox/voice_connect.lottiejson": () =>
        a.e("40348").then(a.t.bind(a, 971799, 19)),
    "discord_common/js/shared/animations/app/xbox/xbox_connecting.lottiejson": () =>
        a.e("876121").then(a.t.bind(a, 709376, 19)),
};
function rM(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rO.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rO.he(n[t])) }), {}),
                            i = l["manifest.json"];
                        t(l[`animations/${i.animations[0].id}.json`]);
                    });
                }),
        );
}
function rL() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, i] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(q.B, {
            gap: 24,
            children: [
                (0, r.jsx)(au.Z, {
                    options: Object.keys(rw).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(f.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, r.jsx)(f.k, { value: l.toString(), onChange: (e) => i(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(x.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = rw[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rM).then(e1().cloneDeep)
                                            : await t().then((e) => e1().cloneDeep(e.default)),
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
                            rR.a,
                            {
                                importData: () => {
                                    let t = rw[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rM).then(e1().cloneDeep)
                                        : t().then((e) => e1().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rP = a(442433),
    rU = a(395671);
let rG = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("344751").then(a.bind(a, 575538));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("832986").then(a.bind(a, 728033)),
                t = new rU.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rP.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("309004"), a.e("419690"), a.e("845322"), a.e("110758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(no.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("876364"),
                    a.e("996907"),
                    a.e("8159"),
                    a.e("361922"),
                    a.e("186856"),
                    a.e("766811"),
                    a.e("301850"),
                    a.e("936875"),
                    a.e("862179"),
                    a.e("722784"),
                    a.e("906470"),
                    a.e("774550"),
                    a.e("923981"),
                    a.e("331696"),
                    a.e("806391"),
                    a.e("803511"),
                    a.e("424216"),
                    a.e("840100"),
                    a.e("22865"),
                    a.e("173896"),
                    a.e("57358"),
                    a.e("722765"),
                    a.e("33909"),
                    a.e("754596"),
                    a.e("357625"),
                    a.e("308093"),
                    a.e("401106"),
                    a.e("498589"),
                    a.e("21486"),
                    a.e("304419"),
                    a.e("45268"),
                    a.e("617281"),
                    a.e("164716"),
                    a.e("170282"),
                    a.e("259465"),
                    a.e("655327"),
                    a.e("335532"),
                    a.e("56955"),
                    a.e("463455"),
                    a.e("403655"),
                    a.e("317615"),
                    a.e("577154"),
                    a.e("877730"),
                    a.e("611899"),
                    a.e("527552"),
                    a.e("769266"),
                    a.e("487873"),
                    a.e("765626"),
                    a.e("683302"),
                    a.e("660608"),
                    a.e("744554"),
                    a.e("541137"),
                    a.e("331212"),
                    a.e("638259"),
                    a.e("339072"),
                    a.e("683621"),
                    a.e("711162"),
                    a.e("275179"),
                    a.e("289789"),
                    a.e("116125"),
                    a.e("977412"),
                    a.e("19385"),
                    a.e("692811"),
                    a.e("249681"),
                    a.e("869047"),
                    a.e("996382"),
                    a.e("771657"),
                    a.e("122218"),
                    a.e("309004"),
                    a.e("449145"),
                    a.e("430997"),
                    a.e("728136"),
                    a.e("216084"),
                    a.e("343116"),
                    a.e("36624"),
                    a.e("273669"),
                    a.e("22547"),
                    a.e("466147"),
                    a.e("50342"),
                    a.e("428235"),
                    a.e("161058"),
                    a.e("333097"),
                    a.e("409391"),
                    a.e("115368"),
                    a.e("810262"),
                    a.e("346313"),
                    a.e("463726"),
                    a.e("343233"),
                    a.e("756684"),
                    a.e("256373"),
                    a.e("583827"),
                    a.e("806354"),
                    a.e("556026"),
                    a.e("416301"),
                    a.e("722191"),
                    a.e("225961"),
                    a.e("359702"),
                    a.e("708364"),
                    a.e("399108"),
                    a.e("452823"),
                    a.e("556967"),
                    a.e("647011"),
                    a.e("331203"),
                    a.e("466913"),
                    a.e("583518"),
                    a.e("71719"),
                    a.e("419690"),
                    a.e("893767"),
                    a.e("213848"),
                    a.e("39214"),
                    a.e("588307"),
                    a.e("514878"),
                    a.e("676376"),
                    a.e("426508"),
                    a.e("361347"),
                    a.e("842935"),
                    a.e("73091"),
                    a.e("269178"),
                    a.e("886692"),
                    a.e("752695"),
                    a.e("916373"),
                    a.e("324484"),
                    a.e("925172"),
                    a.e("232347"),
                    a.e("8458"),
                    a.e("11810"),
                    a.e("591977"),
                    a.e("890152"),
                    a.e("174337"),
                    a.e("646570"),
                    a.e("287973"),
                    a.e("357197"),
                    a.e("314863"),
                    a.e("623386"),
                    a.e("384951"),
                    a.e("560165"),
                    a.e("712390"),
                    a.e("71167"),
                    a.e("113446"),
                    a.e("161309"),
                    a.e("694529"),
                    a.e("995210"),
                    a.e("477319"),
                    a.e("721300"),
                    a.e("966016"),
                    a.e("218489"),
                    a.e("317699"),
                    a.e("257032"),
                    a.e("772238"),
                    a.e("845322"),
                    a.e("94832"),
                    a.e("637038"),
                    a.e("426386"),
                    a.e("865338"),
                    a.e("652191"),
                    a.e("314656"),
                    a.e("639855"),
                    a.e("214530"),
                    a.e("149409"),
                    a.e("645291"),
                    a.e("632607"),
                ]).then(a.bind(a, 860417)),
                t = Object.values(no.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildFolderContextMenu: async () => {
            let { default: e } = await a.e("232857").then(a.bind(a, 842112));
            return (t) => (0, r.jsx)(e, { ...t, folderId: 1, folderColor: void 0, folderName: void 0, unread: !1 });
        },
        DeveloperContextMenu: async () => {
            let { default: e } = await a.e("715687").then(a.bind(a, 646938));
            return (t) => (0, r.jsx)(e, { ...t, id: "123456789", label: "Copy Test ID" });
        },
        UserSettingsMenu: async () => {
            let { default: e } = await Promise.all([a.e("594045"), a.e("926132"), a.e("44491")]).then(
                a.bind(a, 907206),
            );
            return (t) => (0, r.jsx)(e, { ...t, onClose: rP.Z_ });
        },
        ExpressionPickerContextMenu: async () => {
            let { default: e } = await a.e("446132").then(a.bind(a, 233503));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ForumTagContextMenu: async () => {
            let { default: e } = await a.e("432612").then(a.bind(a, 960015)),
                t = { id: "123456789", name: "Test Forum Tag" };
            return () => (0, r.jsx)(e, { tag: t });
        },
        GuildRoleConnectionsModalContextMenu: async () => {
            let { default: e } = await a.e("868001").then(a.bind(a, 699896));
            return (t) =>
                (0, r.jsx)(e, {
                    ...t,
                    roleId: "123456789",
                    onLeaveRole: () => {
                        (console.log("Leave role clicked"), (0, rP.Z_)());
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e("886456"), a.e("789346")]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = eo.default.getCurrentUser(),
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
                    a.e("289789"),
                    a.e("722765"),
                    a.e("11810"),
                    a.e("314656"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(no.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              (console.log("Add form field:", e), (0, rP.Z_)());
                          },
                          guild: t,
                          allowTerms: !0,
                      });
        },
        ChannelListThreadContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("926132"),
                    a.e("955557"),
                    a.e("947502"),
                    a.e("343266"),
                    a.e("965789"),
                    a.e("412255"),
                    a.e("63340"),
                    a.e("65200"),
                    a.e("285802"),
                    a.e("703869"),
                    a.e("51212"),
                    a.e("584615"),
                ]).then(a.bind(a, 612826)),
                t = no.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(aw.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = aw.A.getAllThreadsForParent(t.id);
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
            let { default: e } = await a.e("73091").then(a.bind(a, 779662)),
                t = Object.values(no.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rP.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("541137"), a.e("71719"), a.e("514878"), a.e("966016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(no.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rP.Z_ });
        },
    },
    rB = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("583518"), a.e("255197"), a.e("250974")]).then(
                    a.bind(a, 324269),
                ),
                { default: t } = await a.e("255197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rF() {
    let e = o.useMemo(
            () =>
                Object.keys(rG)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rB)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        s = o.useCallback(
            (e) => {
                null != a && (0, rP.L3)(e, rG[a]);
            },
            [a],
        ),
        d = null != l ? rB[l] : null;
    return (0, r.jsx)(g.Ip, {
        className: tQ.nd,
        children: (0, r.jsxs)(q.B, {
            className: iA.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", children: "Context Menus" }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)(q.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(au.Z, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: a,
                            onSelectionChange: n,
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(x.$, { variant: "primary", text: "Open", disabled: null == a, onClick: s }),
                    ],
                }),
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)(q.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(au.Z, {
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
                        fallback: (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Loading...",
                        }),
                        children: (0, r.jsx)(d, {}),
                    }),
            ],
        }),
    });
}
var r$ = a(253506),
    rV = a(665260),
    rW = a(97808),
    rz = a(778712),
    rH = a(308528),
    rK = a(148494),
    rY = a(571694),
    rq = a(963852),
    rJ = a(704844),
    rQ = a(309010),
    rX = a(645959),
    rZ = a(716371),
    r0 = a(32946);
let r1 = [
    { id: "USER_JOIN", value: em.lAJ.USER_JOIN, label: "User Join" },
    { id: "CHANNEL_PINNED_MESSAGE", value: em.lAJ.CHANNEL_PINNED_MESSAGE, label: "Channel Pinned Message" },
    { id: "GUILD_BOOST", value: em.lAJ.GUILD_BOOST, label: "Guild Boost" },
    { id: "GUILD_BOOST_TIER_1", value: em.lAJ.GUILD_BOOST_TIER_1, label: "Guild Boost Tier 1" },
    { id: "GUILD_BOOST_TIER_2", value: em.lAJ.GUILD_BOOST_TIER_2, label: "Guild Boost Tier 2" },
    { id: "GUILD_BOOST_TIER_3", value: em.lAJ.GUILD_BOOST_TIER_3, label: "Guild Boost Tier 3" },
    { id: "THREAD_CREATED", value: em.lAJ.THREAD_CREATED, label: "Thread Created" },
    { id: "CHANNEL_FOLLOW_ADD", value: em.lAJ.CHANNEL_FOLLOW_ADD, label: "Channel Follow Add" },
    { id: "STAGE_START", value: em.lAJ.STAGE_START, label: "Stage Start" },
    { id: "STAGE_END", value: em.lAJ.STAGE_END, label: "Stage End" },
    { id: "STAGE_SPEAKER", value: em.lAJ.STAGE_SPEAKER, label: "Stage Speaker" },
    { id: "STAGE_RAISE_HAND", value: em.lAJ.STAGE_RAISE_HAND, label: "Stage Raise Hand" },
    { id: "STAGE_TOPIC", value: em.lAJ.STAGE_TOPIC, label: "Stage Topic" },
    { id: "VOICE_SESSION", value: em.lAJ.VOICE_SESSION, label: "Voice Session" },
    { id: "FRIEND_REQUEST_ACCEPTED", value: em.lAJ.FRIEND_REQUEST_ACCEPTED, label: "Friend Request Accepted" },
    { id: "GUILD_DISCOVERY_DISQUALIFIED", value: em.lAJ.GUILD_DISCOVERY_DISQUALIFIED, label: "Discovery Disqualified" },
    { id: "GUILD_DISCOVERY_REQUALIFIED", value: em.lAJ.GUILD_DISCOVERY_REQUALIFIED, label: "Discovery Requalified" },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",
        value: em.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
        label: "Discovery Grace Initial Warning",
    },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",
        value: em.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
        label: "Discovery Grace Final Warning",
    },
    { id: "RECIPIENT_ADD", value: em.lAJ.RECIPIENT_ADD, label: "Recipient Add" },
    { id: "RECIPIENT_REMOVE", value: em.lAJ.RECIPIENT_REMOVE, label: "Recipient Remove" },
    { id: "CALL", value: em.lAJ.CALL, label: "Call" },
];
function r2() {
    let [e, t] = o.useState(em.lAJ.USER_JOIN),
        a = (0, d.bG)([rQ.Ay], () => rQ.Ay.getChannelId(), []),
        n = o.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, rq.Ay)({ channelId: a, content: "", type: e, state: em.cmJ.SENT });
            rK.A.receiveMessage(a, t, !1);
        }, [a, e]),
        l = o.useCallback(() => {
            if (null != a)
                for (let { value: e } of r1) {
                    let t = (0, rq.Ay)({ channelId: a, content: "", type: e, state: em.cmJ.SENT });
                    rK.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, r.jsxs)("div", {
        className: r0.gs,
        children: [
            (0, r.jsx)(au.Z, {
                label: "Inject System Message",
                selectionMode: "single",
                options: r1,
                placeholder: "Select type",
                value: e,
                onSelectionChange: t,
            }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Inject",
                onClick: n,
                disabled: null == a || null == e,
            }),
            (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Inject All", onClick: l, disabled: null == a }),
        ],
    });
}
function r3() {
    let e = (0, d.yK)([rX.A], () => rX.A.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, d.cf)([aw.A, eo.default, aM.A], () => ({
            selectedChannel: aw.A.getChannel(t),
            options: e.map((e) => {
                let t = aw.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, aR.m1)(t, eo.default, aM.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rW.eu, { src: (0, rY.Y)(t), "aria-hidden": !0, size: rz._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        i = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rV.PQ)(n.recipientFlags ?? 0, r$.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rJ.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        s = !!n?.isPrivate() && (0, rV.Lt)(n.recipientFlags ?? 0, r$.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: r0.gs,
        children: [
            (0, r.jsx)(au.Z, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: l,
                placeholder: "Select DM",
                value: t,
                onSelectionChange: a,
            }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: s ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: i,
                disabled: null == t,
            }),
        ],
    });
}
function r6() {
    let e = o.useCallback(() => {
        rH.A.openPrivateChannel({ recipientIds: [rZ.K] });
    }, []);
    return (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function r5() {
    let e = (0, d.bG)([a2.Ay], () => a2.Ay.allByCategory(a2.xW.MESSAGING), [], d.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => i$(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: H()(tQ.nd, r0.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: r0.yF }),
            (0, r.jsx)(r2, {}),
            (0, r.jsx)("div", { className: r0.yF }),
            (0, r.jsx)(r3, {}),
            (0, r.jsx)("div", { className: r0.yF }),
            (0, r.jsx)(r6, {}),
        ],
    });
}
var r8 = a(459838),
    r4 = a(772707),
    r9 = a(150934),
    r7 = a(598653),
    oe = a(166403),
    ot = a(625494),
    oa = a(204925),
    on = a(325278);
let ol = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("429232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nu.intl.string(nu.t.ZLRYGU),
                confirmButtonText: nu.intl.string(nu.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("919840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nu.intl.string(nu.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: nu.intl.string(nu.t["13ofGu"]),
                impression: { impressionName: sa.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("469663"), a.e("334260"), a.e("518467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: nb.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("533651"), a.e("682758"), a.e("280022"), a.e("810136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: oa.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e("280959").then(a.bind(a, 784578));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([
            a.e("533651"),
            a.e("682758"),
            a.e("319623"),
            a.e("280022"),
            a.e("401143"),
        ]).then(a.bind(a, 284778));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NUFModal: async () => {
        let { default: e } = await Promise.all([
            a.e("140606"),
            a.e("122326"),
            a.e("533651"),
            a.e("944492"),
            a.e("419580"),
            a.e("197804"),
            a.e("756856"),
            a.e("682758"),
            a.e("999574"),
            a.e("280022"),
            a.e("250475"),
            a.e("993265"),
            a.e("258118"),
        ]).then(a.bind(a, 111185));
        return (t) => (0, r.jsx)(e, { ...t, onSlideChange: () => {} });
    },
    ClaimAccountModal: async () => {
        let { default: e } = await Promise.all([a.e("213042"), a.e("319623"), a.e("121007")]).then(a.bind(a, 888363));
        return (t) => (0, r.jsx)(e, { claimRequired: !0, ...t });
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await Promise.all([a.e("51194"), a.e("909018")]).then(a.bind(a, 466702));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123" });
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await Promise.all([a.e("513221"), a.e("273669"), a.e("307133")]).then(a.bind(a, 580812));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123", messageId: null });
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await a.e("452343").then(a.bind(a, 725034));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123" });
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.all([a.e("590275"), a.e("766806"), a.e("989545"), a.e("311493")]).then(
            a.bind(a, 914724),
        );
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("796531").then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: r8.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(r4.k, {
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
        let { default: e } = await Promise.all([a.e("914052"), a.e("82318")]).then(a.bind(a, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(a.bind(a, 810412));
        return (a) => (0, r.jsx)(e, { ...a, clientSettingType: t.LEGACY_GAME, gameId: "123456789" });
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await Promise.all([a.e("489361"), a.e("80347")]).then(
                a.bind(a, 318998),
            ),
            { CancellationContext: t } = await Promise.resolve().then(a.bind(a, 916974)),
            { PremiumTypes: n } = await Promise.resolve().then(a.bind(a, 202541)),
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
            },
            i = o.forwardRef((a, i) => {
                let [s, d] = o.useState(null);
                return (0, r.jsx)(t.Provider, {
                    value: {
                        setStep: () => {},
                        premiumType: n.TIER_2,
                        onClose: a.onClose,
                        transitionState: a.transitionState,
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
                        pauseDuration: s,
                        setPauseDuration: d,
                    },
                    children: (0, r.jsx)(e, {}),
                });
            });
        return ((i.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, r.jsx)(i, { ...e }));
    },
    NewMemberActionModal: async () => {
        let { default: e } = await Promise.all([
                a.e("266281"),
                a.e("287973"),
                a.e("652191"),
                a.e("813949"),
                a.e("354569"),
            ]).then(a.bind(a, 251632)),
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
        let { default: e } = await Promise.all([a.e("187880"), a.e("538035")]).then(a.bind(a, 14860)),
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
                ((t.default.getDevicesForPlatform = (e) => (e === em.fg2.PLAYSTATION ? i : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== em.fg2.PLAYSTATION && s.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === em.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                    (0, r.jsx)(e, { ...a, channel: l, platform: em.fg2.PLAYSTATION })
                );
            };
        return ((s.displayName = "PlayStationModalWrapper"), s);
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([a.e("568035"), a.e("627495")]).then(a.bind(a, 651930));
        return (t) => (0, r.jsx)(e, { ...t, detected: { applicationId: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([a.e("742978"), a.e("292030"), a.e("51471")]).then(a.bind(a, 550560));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123456789" });
    },
    CreateTagModal: async () => {
        let { default: e } = await Promise.all([a.e("143172"), a.e("347326")]).then(a.bind(a, 950989));
        return (t) => (0, r.jsx)(e, { ...t, channelId: "123456789", guildId: "987654321" });
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await Promise.all([a.e("143172"), a.e("347326")]).then(a.bind(a, 950989)),
            t = { id: "tag-123", name: "Bug Report", emojiId: "123456789", emojiName: "\uD83D\uDC1B", moderated: !0 };
        return (a) => (0, r.jsx)(e, { ...a, channelId: "123456789", guildId: "987654321", tag: t });
    },
    ConfirmModal: async () => {
        let { ConfirmModal: e } = await a.e("304823").then(a.bind(a, 158954));
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
        let { default: e } = await Promise.all([a.e("844331"), a.e("410919")]).then(a.bind(a, 556506));
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
        let { default: e } = await Promise.all([a.e("844331"), a.e("410919")]).then(a.bind(a, 556506));
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
        let { default: e } = await Promise.all([a.e("844331"), a.e("410919")]).then(a.bind(a, 556506));
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
            } = await Promise.all([a.e("304823"), a.e("977260")]).then(a.bind(a, 397927)),
            { DisableCommunicationDuration: s, getFriendlyDurationString: o } = await Promise.resolve().then(
                a.bind(a, 200700),
            ),
            d = await Promise.resolve().then(a.t.bind(a, 582128, 19)),
            c = "TestUser";
        function u(a) {
            let [u, m] = d.useState(s.DURATION_60_SEC),
                [h, x] = d.useState(""),
                [p, g] = d.useState(!1),
                [v, j] = d.useState(!1),
                f = [
                    { value: s.DURATION_60_SEC, label: o(s.DURATION_60_SEC) },
                    { value: s.DURATION_5_MIN, label: o(s.DURATION_5_MIN) },
                    { value: s.DURATION_10_MIN, label: o(s.DURATION_10_MIN) },
                    { value: s.DURATION_1_HOUR, label: o(s.DURATION_1_HOUR) },
                    { value: s.DURATION_1_DAY, label: o(s.DURATION_1_DAY) },
                    { value: s.DURATION_1_WEEK, label: o(s.DURATION_1_WEEK) },
                ],
                b = d.useCallback(async () => {
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
                        variant: "text-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: "This will temporarily disable the user's ability to communicate in this server.",
                    }),
                    (0, r.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, r.jsx)(n, { variant: "heading-sm/semibold", className: "mb-2", children: "Duration" }),
                            (0, r.jsx)(i, {
                                children: f.map((t) =>
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
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Reason (Optional)",
                            }),
                            (0, r.jsx)("textarea", {
                                value: h,
                                onChange: (e) => x(e.target.value),
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
                        children: (0, r.jsx)(l, { checked: v, onChange: j, label: "Resolve associated mod report" }),
                    }),
                    (0, r.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, r.jsx)(e, { variant: "secondary", text: "Cancel", onClick: a.onClose }),
                            (0, r.jsx)(e, { variant: "primary", text: "Timeout User", onClick: b, disabled: p }),
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
            } = await Promise.all([a.e("304823"), a.e("977260")]).then(a.bind(a, 397927)),
            i = await Promise.resolve().then(a.t.bind(a, 582128, 19)),
            s = "Level 3 Server Boost",
            o = 200,
            d = 60,
            c = 8;
        function u(a) {
            let [u, m] = i.useState(!1),
                [h, x] = i.useState(!1),
                p = i.useCallback(async () => {
                    (x(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: s,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2e3)),
                        x(!1),
                        a.onClose());
                }, [a]);
            return (0, r.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, r.jsxs)(n, { variant: "heading-lg/semibold", className: "mb-2", children: ["Deactivate ", s] }),
                    (0, r.jsxs)(t, {
                        variant: "text-sm/normal",
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
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Current Features",
                            }),
                            (0, r.jsxs)("div", {
                                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
                                children: [
                                    (0, r.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", o, " emoji slots"],
                                    }),
                                    (0, r.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", d, " sticker slots"],
                                    }),
                                    (0, r.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", c, " sound slots"],
                                    }),
                                    (0, r.jsx)(t, {
                                        variant: "text-sm/normal",
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
                                variant: "eyebrow",
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
                                variant: "text-sm/medium",
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
                                onClick: p,
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
        let { default: e } = await a.e("292063").then(a.bind(a, 970018));
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
        let { default: e } = await Promise.all([a.e("443159"), a.e("82721"), a.e("452823"), a.e("674832")]).then(
            a.bind(a, 709779),
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
        let e = (await Promise.all([a.e("315273"), a.e("254857")]).then(a.bind(a, 147696))).default;
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123456789012345678", startingChannelId: "987654321098765432" });
    },
    CameraPreviewModal: async () => {
        let { default: e } = await Promise.all([a.e("650100"), a.e("410534")]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e("650100"), a.e("410534")]).then(a.bind(a, 308229));
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
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 212737));
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
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 212737));
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
            a.e("721642"),
            a.e("130891"),
            a.e("267732"),
            a.e("850979"),
            a.e("236946"),
            a.e("692639"),
            a.e("890480"),
            a.e("440963"),
            a.e("766031"),
            a.e("394317"),
            a.e("79362"),
            a.e("276340"),
        ]).then(a.bind(a, 826271));
        return (t) => (0, r.jsx)(e, { ...t, parentId: null, source: "devtools" });
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([
            a.e("721642"),
            a.e("130891"),
            a.e("267732"),
            a.e("58243"),
            a.e("236946"),
            a.e("692639"),
            a.e("890480"),
            a.e("440963"),
            a.e("766031"),
            a.e("394317"),
            a.e("521743"),
        ]).then(a.bind(a, 190930));
        return (t) =>
            (0, r.jsx)(e, { ...t, applicationId: "123456789", mediaUrl: "https://picsum.photos/400/300.jpg" });
    },
    CallUserConfirmationModal: async () => {
        let { default: e } = await a.e("19106").then(a.bind(a, 502054));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onSubmit: () => {
                    (console.log("CallUserConfirmationModal: Call confirmed"), t.onClose());
                },
            });
    },
    OptInReorderAttemptModal: async () => {
        let { default: e } = await Promise.all([a.e("57729"), a.e("697585"), a.e("24848")]).then(a.bind(a, 354643));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()),
            });
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await Promise.all([a.e("273669"), a.e("364499")]).then(a.bind(a, 296222));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose()),
            });
    },
    ConsentCheckBoxModal: async () => {
        let { ConfirmModal: e } = await a.e("304823").then(a.bind(a, 158954)),
            { Text: t, Heading: n } = await Promise.all([a.e("304823"), a.e("977260")]).then(a.bind(a, 397927)),
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
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Terms of Service Consent",
                                }),
                                (0, r.jsx)(r9.S, {
                                    label: "I agree to Discord's Terms of Service and Privacy Policy",
                                    checked: i,
                                    onChange: (e) => s(e),
                                    labelType: "secondary",
                                }),
                                (0, r.jsxs)(t, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Consent status: ", i ? "Agreed" : "Not agreed"],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(n, {
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Promotional Email Consent",
                                }),
                                (0, r.jsx)(r9.S, {
                                    label: "I would like to receive promotional emails from Discord about new features, events, and other updates.",
                                    checked: o,
                                    onChange: (e) => d(e),
                                    labelType: "secondary",
                                }),
                                (0, r.jsxs)(t, {
                                    variant: "text-sm/normal",
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
        let { default: e } = await Promise.all([a.e("660608"), a.e("346313")]).then(a.bind(a, 336496));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
            });
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await Promise.all([
                a.e("955424"),
                a.e("623386"),
                a.e("78618"),
                a.e("149409"),
                a.e("970232"),
            ]).then(a.bind(a, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 149790)),
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
        let { default: e } = await Promise.all([
                a.e("955424"),
                a.e("623386"),
                a.e("78618"),
                a.e("149409"),
                a.e("970232"),
            ]).then(a.bind(a, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 149790)),
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
        let { EmojiAddModal: e } = await Promise.all([a.e("225560"), a.e("990410")]).then(a.bind(a, 126033));
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
        let { default: e } = await a.e("425894").then(a.bind(a, 166789));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    VoiceCallFeedback: async () => {
        let { default: e } = await Promise.all([
                a.e("312513"),
                a.e("803461"),
                a.e("155925"),
                a.e("137381"),
                a.e("847004"),
                a.e("313937"),
                a.e("431389"),
            ]).then(a.bind(a, 492)),
            t = {
                channel_id: "123456789",
                channel_type: em.rbe.GUILD_VOICE,
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
                a.e("312513"),
                a.e("803461"),
                a.e("155925"),
                a.e("137381"),
                a.e("847004"),
                a.e("313937"),
                a.e("617171"),
                a.e("862767"),
            ]).then(a.bind(a, 218738)),
            t = { ownerId: "987654321", guildId: "123456789", channelId: "123456789", streamType: on.U4.GUILD },
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
        let e = eo.default.getUser("12345"),
            t = eo.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("916131"), a.e("155738"), a.e("331385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = eo.default.getUser("12345"),
            t = eo.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("916131"), a.e("155738"), a.e("384811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = eo.default.getUser("12345"),
            t = eo.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("916131"), a.e("155738"), a.e("817219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = eo.default.getUser("12345"),
            t = eo.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("321855"), a.e("943139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([a.e("683023"), a.e("272875")]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("634508"), a.e("485579")]).then(a.bind(a, 785606)),
            t = oe.A.getPremiumGroupSubscription();
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, subscription: t });
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await Promise.all([a.e("56498"), a.e("399910")]).then(a.bind(a, 826181));
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
        let { default: e } = await a.e("474575").then(a.bind(a, 218642));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    CaptchaTestModal: async () => {
        let { default: e } = await a.e("417724").then(a.bind(a, 563255));
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
        let { default: e } = await Promise.all([a.e("364956"), a.e("420577"), a.e("335681"), a.e("520723")]).then(
            a.bind(a, 667934),
        );
        return (t) => (0, r.jsx)(e, { ...t, url: "https://example-phishing-site.com/malicious-page" });
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await Promise.all([a.e("494150"), a.e("962684")]).then(a.bind(a, 228855)),
            t = Object.keys(no.A.getGuilds())[0];
        return (a) => (0, r.jsx)(e, { ...a, guildId: t });
    },
    UrgentMessageModal: async () => {
        let { default: e } = await Promise.all([a.e("689913"), a.e("136724")]).then(a.bind(a, 531519));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    UserAgreementsModal: async () => {
        let { default: e } = await Promise.all([a.e("50726"), a.e("482911"), a.e("922220")]).then(a.bind(a, 639719));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await Promise.all([a.e("796057"), a.e("452823"), a.e("971905")]).then(a.bind(a, 868952)),
            t = Object.values(no.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([
            a.e("605395"),
            a.e("979862"),
            a.e("791370"),
            a.e("548018"),
            a.e("773152"),
            a.e("625281"),
        ]).then(a.bind(a, 516259));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("444038"),
            a.e("807432"),
            a.e("601495"),
            a.e("807265"),
            a.e("581079"),
            a.e("901352"),
            a.e("579023"),
            a.e("248672"),
        ]).then(a.bind(a, 777307));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupSubscribeModal: async () => {
        let { default: e } = await Promise.all([a.e("499709"), a.e("569595")]).then(a.bind(a, 526710));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserOnboarding: async () => {
        let { default: e } = await Promise.all([
            a.e("140606"),
            a.e("122326"),
            a.e("533651"),
            a.e("260634"),
            a.e("194399"),
            a.e("419580"),
            a.e("82721"),
            a.e("197804"),
            a.e("756856"),
            a.e("319623"),
            a.e("999574"),
            a.e("457794"),
            a.e("578963"),
        ]).then(a.bind(a, 427294));
        return (t) => (0, r.jsx)(e, { ...t });
    },
};
function oi() {
    let e = o.useMemo(
            () =>
                Object.keys(ol)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(g.Ip, {
        className: tQ.nd,
        children: (0, r.jsxs)("div", {
            className: iA.l$,
            children: [
                (0, r.jsx)("section", {
                    className: iA.uW,
                    children: (0, r.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(au.Z, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                onSelectionChange: a,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, eY.openModalLazy)(ol[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: iA.uW,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: iA.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: function () {
                                    ((0, r7.o)(!0), ot._.dispatch(em.jej.PREMIUM_SUBSCRIPTION_CREATED));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var os = a(933832),
    or = a(472229),
    oo = a(10392),
    od = a(669316),
    oc = a(959165),
    ou = a(354670),
    om = a(158045);
async function oh() {
    try {
        let { body: e } = await lq.Bo.get({ url: em.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
        return e;
    } catch (e) {
        return [];
    }
}
async function ox() {
    try {
        let { body: e } = await lq.Bo.get({ url: em.Rsh.USER_OFFERS, rejectWithError: !0 });
        return { trial: e.trial.map(oc.A.createFromServer), discount: e.discount.map(od.A.createFromServer) };
    } catch (e) {
        return { trial: [], discount: [] };
    }
}
async function op(e, t) {
    try {
        await lq.Bo.post({ url: em.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oo._D)();
    }
}
async function og(e, t) {
    try {
        await lq.Bo.del({ url: em.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oo._D)();
    }
}
async function ov() {
    try {
        await lq.Bo.del({ url: em.Rsh.USER_OFFERS, rejectWithError: !0 });
    } catch {
    } finally {
        (await ou.A.forceReset(), await (0, oo._D)());
    }
}
async function oj(e) {
    await lq.Bo.post({ url: em.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
}
function of(e) {
    let { acked: t, expired: a, inStore: n, onClick: l, secondaryBadge: i } = e,
        s = "Created";
    return (
        a ? (s = "Expired") : t ? (s = "Acked") : n && (s = "Active"),
        (0, r.jsxs)("div", {
            className: iA.fC,
            children: [
                (0, r.jsx)(K.D, {
                    onClick: l,
                    className: H()(iA.qS, iA.vk, { [iA.vu]: n, [iA.R1]: t, [iA._7]: a }),
                    children: (0, r.jsxs)(p.E, {
                        variant: "eyebrow",
                        color: t ? void 0 : "text-overlay-light",
                        children: [s, n ? " *" : ""],
                    }),
                }),
                null != i &&
                    i.active &&
                    (0, r.jsx)("div", {
                        className: H()(iA.qS, iA.k3),
                        children: (0, r.jsx)(p.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: i.label,
                        }),
                    }),
            ],
        })
    );
}
function ob(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [i, s] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(!1);
    o.useEffect(() => {
        u && x(!0);
        let e = setTimeout(() => {
            x(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: g, expiresAt: v, trialId: j, subscriptionTrial: f, referrer: b } = t,
        y =
            a.find((e) => {
                let { value: t } = e;
                return t === j;
            })?.label ?? "Unknown";
    null != b && (y = `${y} from @${b.username}`);
    let E = null != v,
        _ = t.hasExpired,
        C = t.isRedeemed,
        S = f?.skuId === tM.pe.TIER_0;
    async function N() {
        (m(!0), E ? await A({ expiresAt: null }) : await (0, oo.u1)(t), n(), m(!1));
    }
    async function A(e) {
        m(!0);
        try {
            await lq.Bo.patch({
                url: em.Rsh.UPDATE_USER_OFFER(g, "trial"),
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
            className: H()(iA.Nr, S ? iA.Qf : iA.C1),
            children: [
                (0, r.jsx)("div", {
                    className: H()(iA.nM, iA.S7),
                    children: (0, r.jsx)(Q.D, {
                        variant: "heading-lg/semibold",
                        color: "text-overlay-light",
                        children: y,
                    }),
                }),
                (0, r.jsxs)(K.D, {
                    className: H()(iA.nM, iA.QB),
                    onClick: () => {
                        (0, nw.C)(g, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-overlay-light", children: ["Offer: ", g] }),
                        i
                            ? (0, r.jsx)(os.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: iA.Kk })
                            : (0, r.jsx)(nN.CopyIcon, { size: "xs", color: "currentColor", className: iA.Kk }),
                    ],
                }),
                (0, r.jsxs)(K.D, {
                    className: H()(iA.nM, iA.QB),
                    onClick: () => {
                        (0, nw.C)(j, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-overlay-light", children: ["Trial: ", j] }),
                        d
                            ? (0, r.jsx)(os.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: iA.Kk })
                            : (0, r.jsx)(nN.CopyIcon, { size: "xs", color: "currentColor", className: iA.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: iA.nM,
                    children: (0, r.jsxs)(p.E, {
                        variant: "eyebrow",
                        color: "text-overlay-light",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, om.re)({
                                intervalType: f?.interval ?? tM.WT.MONTH,
                                intervalCount: f?.intervalCount ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: iA.nM,
                    children: [
                        (0, r.jsxs)(p.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, or.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nM.Xm)(v?.toISOString()),
                            onChange: (e) => {
                                A({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iA.nM,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", color: "text-overlay-light", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: b?.id ?? "",
                            onChange: (e) => A({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsx)(of, {
                    acked: E,
                    expired: _,
                    inStore: l,
                    onClick: N,
                    secondaryBadge: { active: C, label: "Redeemed" },
                }),
                (0, r.jsx)(K.D, {
                    onClick: async () => {
                        (m(!0), await og(g, "trial"), n(), m(!1));
                    },
                    children: (0, r.jsx)(nI.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: H()(iA.Kk, iA.IT),
                    }),
                }),
                (0, r.jsx)("div", { className: H()(iA.g4, { [iA.VP]: u || h }), children: (0, r.jsx)(td.y, {}) }),
            ],
        })
    );
}
function oy(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [i, s] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(!1);
    o.useEffect(() => {
        u && x(!0);
        let e = setTimeout(() => {
            x(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: g, expiresAt: v, discountId: j, discount: f } = t,
        b =
            a.find((e) => {
                let { value: t } = e;
                return t === j;
            })?.label ?? "Unknown",
        y = null != v,
        E = t.hasExpired(),
        _ = t.isApplied();
    async function C() {
        (m(!0), y ? await S({ expiresAt: null }) : await (0, oo.u1)(void 0, t), n(), m(!1));
    }
    async function S(e) {
        let { expiresAt: t } = e;
        m(!0);
        try {
            await lq.Bo.patch({
                url: em.Rsh.UPDATE_USER_OFFER(g, "discount"),
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
            className: H()(iA.Nr, iA.id),
            children: [
                (0, r.jsx)("div", {
                    className: H()(iA.nM, iA.S7),
                    children: (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", color: "text-default", children: b }),
                }),
                (0, r.jsxs)(K.D, {
                    className: H()(iA.nM, iA.QB),
                    onClick: () => {
                        (0, nw.C)(g, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", g] }),
                        i
                            ? (0, r.jsx)(os.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: H()(iA.Kk, iA.mK),
                              })
                            : (0, r.jsx)(nN.CopyIcon, { size: "xs", color: "currentColor", className: iA.Kk }),
                    ],
                }),
                (0, r.jsxs)(K.D, {
                    className: H()(iA.nM, iA.QB),
                    onClick: () => {
                        (0, nw.C)(j, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", j] }),
                        d
                            ? (0, r.jsx)(os.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: H()(iA.Kk, iA.mK),
                              })
                            : (0, r.jsx)(nN.CopyIcon, { size: "xs", color: "currentColor", className: iA.Kk }),
                    ],
                }),
                f?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(p.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [f.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: iA.nM,
                    children: [
                        (0, r.jsxs)(p.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, or.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nM.Xm)(v?.toISOString()),
                            onChange: (e) =>
                                S({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsx)(of, {
                    acked: y,
                    expired: E,
                    inStore: l,
                    onClick: C,
                    secondaryBadge: { active: _, label: "Applied" },
                }),
                (0, r.jsx)(K.D, {
                    className: iA.aR,
                    onClick: async () => {
                        (m(!0), await og(g, "discount"), n(), m(!1));
                    },
                    children: (0, r.jsx)(nI.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: H()(iA.Kk, iA.fy),
                    }),
                }),
                (0, r.jsx)("div", { className: H()(iA.g4, { [iA.VP]: u || h }), children: (0, r.jsx)(td.y, {}) }),
            ],
        })
    );
}
function oE() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, i] = o.useState(),
        [s, c] = o.useState(),
        [u, m] = o.useState(!0),
        { discountOffers: h, trialOffers: v } = (0, d.cf)([ou.A], () => ({
            discountOffers: Object.values(ou.A.getState().userDiscountOffers).sort((e, t) => e.id.localeCompare(t.id)),
            trialOffers: Object.values(ou.A.getState().userTrialOffers).sort((e, t) => e.id.localeCompare(t.id)),
        })),
        [f, b] = o.useState([]),
        [y, E] = o.useState([]),
        [_, C] = o.useState(10080),
        [S, N] = o.useState([]),
        A = o.useMemo(() => new Set([...v, ...h].map((e) => e.id)), [v, h]),
        k = o.useMemo(() => [...v, ...f.filter((e) => !A.has(e.id))], [v, f, A]),
        I = o.useMemo(() => [...h, ...y.filter((e) => !A.has(e.id))], [h, y, A]),
        { entitlements: D, deleteFractionalPremium: T, refreshEntitlementList: O } = iS();
    async function R() {
        null != l && (await op(l, "trial"), m(!0));
    }
    async function w() {
        null != s && (await op(s, "discount"), m(!0));
    }
    async function M() {
        (await ov(), m(!0));
    }
    async function L() {
        let e = new Date(Date.now() + 60 * _ * 1e3).toISOString();
        (await oj(e), O());
    }
    return (
        o.useEffect(() => {
            O();
        }, [O]),
        o.useEffect(() => {
            N(D.filter((e) => e.sourceType === em.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [D]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || u) &&
                oh().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    (t(a), n(r), null == l && i(a[0].value), null == s && c(r[0].value));
                });
        }, [e, a, l, s, u]),
        o.useEffect(() => {
            u &&
                (m(!1),
                ou.A.forceReset(),
                (0, oo._D)(),
                ox().then((e) => {
                    (b(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        E(e.discount.sort((e, t) => e.id.localeCompare(t.id))));
                }));
        }, [u]),
        (0, r.jsx)(g.Ip, {
            className: tQ.nd,
            children: (0, r.jsxs)("div", {
                className: iA.l$,
                children: [
                    (0, r.jsxs)("section", {
                        className: iA.uW,
                        children: [
                            (0, r.jsx)(Q.D, { variant: "heading-md/semibold", children: "Utils" }),
                            (0, r.jsxs)("div", {
                                className: iA.Uo,
                                children: [
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear all User Offers",
                                        onClick: M,
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Mobile Trials DismissibleContent",
                                        onClick: () => (0, a_.xB)(aE.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Offer Nagbar DismissibleContent",
                                        onClick: () => (0, a_._N)(aE.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                    }),
                                    (0, r.jsx)(x.$, {
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
                        className: iA.uW,
                        children: (0, r.jsxs)("div", {
                            className: iA.bd,
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
                                (0, r.jsx)(x.$, { variant: "primary", text: "Create", onClick: R }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("section", {
                        className: iA.uW,
                        children: (0, r.jsxs)("div", {
                            className: iA.bd,
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
                                (0, r.jsx)(x.$, { variant: "primary", text: "Create", onClick: w }),
                            ],
                        }),
                    }),
                    k.length > 0 &&
                        (0, r.jsxs)("section", {
                            className: iA.uW,
                            children: [
                                (0, r.jsx)(Q.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                k.map((t) =>
                                    (0, r.jsx)(
                                        ob,
                                        { offer: t, offerOptions: e, forceRefetch: () => m(!0), inStore: A.has(t.id) },
                                        t.id,
                                    ),
                                ),
                            ],
                        }),
                    I.length > 0 &&
                        (0, r.jsxs)("section", {
                            className: iA.uW,
                            children: [
                                (0, r.jsx)(Q.D, {
                                    variant: "heading-md/semibold",
                                    children: "Existing Discount Offers",
                                }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                I.map((e) =>
                                    (0, r.jsx)(
                                        oy,
                                        { offer: e, offerOptions: a, forceRefetch: () => m(!0), inStore: A.has(e.id) },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    (0, r.jsx)("section", {
                        className: iA.uW,
                        children: (0, r.jsxs)("div", {
                            className: iA.bd,
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Create a Reverse Trial Entitlement",
                                    options: [
                                        { id: "5min", label: "5 minutes", value: 5 },
                                        { id: "1hour", label: "1 hour", value: 60 },
                                        { id: "1day", label: "1 day", value: 1440 },
                                        { id: "1week", label: "1 week", value: 10080 },
                                    ],
                                    value: _,
                                    placeholder: "Reverse Trial Length",
                                    onSelectionChange: C,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(x.$, { variant: "primary", text: "Create", onClick: L }),
                            ],
                        }),
                    }),
                    S.length > 0 &&
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(p.E, {
                                    style: { marginTop: "15px" },
                                    variant: "text-md/bold",
                                    children: "Active reverse trial",
                                }),
                                (0, r.jsx)("div", {
                                    children: S.map((e) =>
                                        (0, r.jsx)(iI, { entitlement: e, active: !0, onDelete: () => T(e.id) }, e.id),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        })
    );
}
var o_ = a(866711),
    oC = a(26279),
    oS = a(628577);
let oN = {
        [oC.Re.UNSPECIFIED]: "Unspecified",
        [oC.Re.DRAFT]: "Draft",
        [oC.Re.SIGNED]: "Signed",
        [oC.Re.DISCARDED]: "Discarded",
        [oC.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
        [oC.Re.SIGNING_FAILED]: "Signing Failed",
    },
    oA = { [oC.BM.UNSPECIFIED]: "Unspecified", [oC.BM.ONE_TIME]: "One Time", [oC.BM.SUBSCRIPTION]: "Subscription" };
function ok() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(!0),
        [l, i] = o.useState(null),
        s = o.useCallback(async () => {
            (n(!0), i(null));
            try {
                let e = await lq.Bo.get({ url: `${em.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
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
            let e = rQ.Ay.getChannelId();
            return null != e ? e : "";
        }),
        j = o.useCallback(async () => {
            (c(!0), m(null));
            try {
                let e = h.trim(),
                    t = await lq.Bo.post({
                        url: em.Rsh.DEBUG_TEMPORAL_INFRA_PROOF_OF_CONCEPT,
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
        className: tQ.nd,
        children: (0, r.jsxs)("div", {
            className: iA.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: iA.dL,
                    style: { marginBottom: "16px" },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "text-lg/bold", children: ["Orders (last ", 5, ")"] }),
                        (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Refresh", onClick: s, loading: a }),
                    ],
                }),
                null != l && (0, r.jsx)(Y.w, { type: "critical", children: l }),
                !a &&
                    null != e &&
                    0 === e.length &&
                    (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: "No orders found." }),
                null != e && e.map((e) => (0, r.jsx)(oI, { order: e }, e.id)),
                (0, r.jsxs)(q.B, {
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
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Run Temporal Infra Proof of Concept",
                            onClick: j,
                            loading: d,
                        }),
                        null != u && (0, r.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: u }),
                    ],
                }),
            ],
        }),
    });
}
function oI(e) {
    let { order: t } = e,
        [a, n] = o.useState(!1),
        [l, i] = o.useState(!1),
        s = oN[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${s}`, isDisabled: !1 },
            { id: "revision", label: `Revision: ${t.revision}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            (navigator.clipboard.writeText(t.id), i(!0), setTimeout(() => i(!1), 2e3));
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: iA.Nr,
        children: [
            (0, r.jsxs)(q.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(o_.C, { items: d, label: "Order information", layout: "inline" }),
            (0, r.jsxs)(q.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  q.B,
                                  {
                                      direction: "horizontal",
                                      gap: 12,
                                      children: [
                                          (0, r.jsxs)(p.E, {
                                              variant: "text-xs/normal",
                                              children: ["SKU: ", e.sku_id],
                                          }),
                                          (0, r.jsxs)(p.E, {
                                              variant: "text-xs/normal",
                                              children: ["Qty: ", e.quantity],
                                          }),
                                          (0, r.jsxs)(p.E, {
                                              variant: "text-xs/normal",
                                              children: [
                                                  "Type: ",
                                                  oA[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
                                              ],
                                          }),
                                          null != e.subscription_plan_id &&
                                              (0, r.jsxs)(p.E, {
                                                  variant: "text-xs/normal",
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
                    className: oS.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(K.D, {
                            onClick: () => n((e) => !e),
                            className: oS.Eh,
                            children: [
                                (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(ij.A, { direction: a ? ij.A.Directions.UP : ij.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: oS.j3,
                                children: [
                                    (0, r.jsxs)("li", {
                                        children: [
                                            (0, r.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                children: "payment_gateway",
                                            }),
                                            (0, r.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                children: String(t.billing_facet.payment_gateway),
                                            }),
                                        ],
                                    }),
                                    null != t.billing_facet.payment_source_id &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-xs/semibold",
                                                    children: "payment_source_id",
                                                }),
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-xs/normal",
                                                    children: t.billing_facet.payment_source_id,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.currency &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-xs/semibold",
                                                    children: "selected currency",
                                                }),
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-xs/normal",
                                                    children: t.billing_facet.currency,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.invoice_preview &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "currency",
                                                        }),
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.currency,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "subtotal",
                                                        }),
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.subtotal,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "tax",
                                                        }),
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.tax,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "total",
                                                        }),
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.total,
                                                        }),
                                                    ],
                                                }),
                                                t.billing_facet.invoice_preview.line_items.length > 0 &&
                                                    (0, r.jsxs)("li", {
                                                        children: [
                                                            (0, r.jsx)(p.E, {
                                                                variant: "text-xs/semibold",
                                                                children: "invoice line items",
                                                            }),
                                                            (0, r.jsx)(q.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                q.B,
                                                                                {
                                                                                    direction: "horizontal",
                                                                                    gap: 12,
                                                                                    children: [
                                                                                        (0, r.jsxs)(p.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "ref: ",
                                                                                                e.ref_order_line_item_id,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(p.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "unit: ",
                                                                                                e.unit_price,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(p.E, {
                                                                                            variant: "text-xs/normal",
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
var oD = a(935462),
    oT = a(103557),
    oO = a(93688),
    oR = a(717400),
    ow = a(676955),
    oM = a(31300),
    oL = a(500060),
    oP = a(391973),
    oU = a(684013),
    oG = a(765671),
    oB = a(235986),
    oF = a(742589),
    o$ = a(41984),
    oV = a(181435),
    oW = a(435736),
    oz = a(296027),
    oH = a(515183),
    oK = a(489277),
    oY = a(127242),
    oq = a(869014),
    oJ = a(528772),
    oQ = a(38502),
    oX = a(532624),
    oZ = a(773371),
    o0 = a(927813),
    o1 = a(996439),
    o2 = a(350535),
    o3 = a(9302),
    o6 = a(644434),
    o5 = a(998798);
let o8 = {
        [em.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: em.uss.CLICK_ZONE_DEBUG,
            id: (0, ew.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...oQ.A.getWidgetDefaultSettings(em.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [em.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: em.uss.PERFORMANCE_DEBUG,
            id: (0, ew.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...oQ.A.getWidgetDefaultSettings(em.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    o4 = {};
function o9(e) {
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
        (0, r.jsxs)(nS.$n, {
            look: nS.$n.Looks.LINK,
            color: nS.$n.Colors.LINK,
            size: nS.$n.Sizes.MIN,
            onClick: function () {
                (0, nw.C)(t, () => n(!0));
            },
            className: o5.DT,
            children: ["Game Id: ", t, " ", a ? nu.intl.string(nu.t.t5VZ88) : null],
        })
    );
}
let o7 = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.bG)([E.Ay], () => E.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, d.bG)([S.A], () => S.A.getGameForPID(t.pid)),
            { data: l } = (0, ax.I)(n?.id),
            i = (0, d.bG)([E.Ay], () => (null == a ? null : E.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: o5.st,
            children: [
                (0, r.jsx)(p.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(p.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.gameId &&
                    (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, r.jsx)(o9, { id: t.gameId }),
                    }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, oH.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(p.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: o5.st,
                    children: [
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, oH.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != i &&
                    (0, r.jsxs)("div", {
                        className: o5.st,
                        children: [
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", i.source],
                            }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", i.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", i.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, oH.gK)(i.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", l?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", l?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", l?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", l?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    de = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cf)([oZ.default], () => oZ.default.getOverlayPIDStatuses()),
            n = (0, d.cf)([oz.default], () => oz.default.getTrackedGames()),
            l = (0, d.bG)([oZ.default], () => oZ.default.isInputLocked(t), [t]),
            i = (0, d.bG)([oZ.default], () => oZ.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.bG)([oZ.default], () => oZ.default.DEV_isInputLocked(t), [t]),
            o = (0, d.bG)([oZ.default], () => oZ.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: o5.st,
            children: [
                (0, r.jsx)(p.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
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
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
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
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
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
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(p.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", i],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", s],
                }),
                (0, r.jsxs)(p.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function dt(e) {
    var t;
    let a = ((t = Object.values((0, d.yK)([oQ.A], () => oQ.A.getWidgetsForLayout(o6.G)))), t.find((t) => t.type === e));
    return [
        a,
        function () {
            if (null != a) (0, oP.uv)(a.id);
            else {
                let t = o8[e];
                if (null == t) return;
                let a = t(o6.G);
                (0, oP.jn)(a);
            }
        },
    ];
}
function da(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nM.i$)(nC()(e), "h:mm:ss.SSS");
}
let dn = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, d.bG)(
            [oz.default],
            () => {
                if (null == t) return "Unknown";
                let e = oz.default.getTrackedGameByPid(t)?.gameName;
                return null != e ? ((o4[t] = e), e) : (o4[t] ?? "Unknown");
            },
            [t],
        );
    return (0, r.jsx)(p.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function dl() {
    let e = (0, d.bG)([oY.A], () => oY.A.hasRenderDebugMode(o$.x7.TrackFocusPIDs)),
        t = (0, d.yK)([oz.default], () => oz.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: o5.st,
        children: [
            (0, r.jsxs)("div", {
                className: o5.Iv,
                children: [
                    (0, r.jsx)(m.d, {
                        checked: e,
                        onChange: () =>
                            void oU.A.setRenderDebugMode(
                                !oY.A.hasRenderDebugMode(o$.x7.TrackFocusPIDs),
                                o$.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(K.D, {
                        className: o5.LL,
                        onClick: () => oU.A.clearTrackedPids(),
                        children: (0, r.jsx)(nI.TrashIcon, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(g.Ip, {
                className: H()(o5.st, o5.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(l3.m, {
                                    position: "left",
                                    text: n === o$.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(p.E, {
                                            variant: "text-sm/medium",
                                            color: n === o$.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(dn, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                da(t),
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
let di = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.bG)(
                [oz.default, E.Ay],
                () => {
                    if (null == t) return null;
                    let e = oz.default.getTrackedGameByPid(t)?.fullscreenType;
                    if (null != e) return e;
                    let a = E.Ay.getGameOrTransformedSubgameForPID(t);
                    return a?.fullscreenType ?? lz.aI.UNKNOWN;
                },
                [t],
            );
        return (0, r.jsxs)(p.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, oH.wR)(a) : "Unknown"],
        });
    }),
    ds = o.memo(function () {
        let e = (0, d.cf)([oz.default], () => oz.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = E.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, oH.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +o0.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(l3.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(g.Ip, {
                        className: H()(o5.st, o5.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(dn, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(di, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        p.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, oH.wR)(a)} @ ${da(n)}`,
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
    dr = o.memo(function () {
        let e = (0, d.cf)([oz.default], () => oz.default.getTrackedGames()),
            t = (0, o3.getPID)(),
            a = (0, d.bG)([oz.default], () => oz.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, d.yK)([oJ.A], () => [oJ.A.enabled, oJ.A.keepOpen]),
            i = (0, d.bG)([oZ.default], () => oZ.default.getFocusedPID()),
            s = (0, d.bG)([oZ.default], () => oZ.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: o5.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(de, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", i?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", s ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    dd = [
        {
            mode: o$.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: o$.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: o$.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: o$.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: o$.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: o$.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: o$.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    dc = o.memo(function () {
        let [e, t] = dt(em.uss.CLICK_ZONE_DEBUG),
            [a, n] = dt(em.uss.PERFORMANCE_DEBUG),
            l = (0, d.bG)([oY.A], () => oY.A.getRenderDebugModes()),
            [i, s] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    s({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: o5.st,
                children: dd.map((i) => {
                    let s =
                        i.mode === o$.x7.OverlayRafManagerForceEnabled
                            ? `${i.label} (${oq.A.getLastRAFCallbackReason()})`
                            : i.label;
                    function d() {
                        return i.mode === o$.x7.ClickZones
                            ? null != e
                            : i.mode === o$.x7.WidgetAreas
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
                                    (i.mode === o$.x7.ClickZones && t(),
                                        i.mode === o$.x7.WidgetAreas && n(),
                                        (e = i.mode),
                                        oU.A.setRenderDebugMode(!a, e));
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
    du = o.memo(function () {
        let e = (0, d.cf)([oz.default], () => oz.default.getTrackedGames()),
            t = (0, d.bG)([E.Ay], () => E.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(l3.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: o5.st,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    p.E,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(di, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(l3.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: o5.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(o7, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    dm = o.memo(function () {
        let e = (0, d.bG)([oz.default], () => oz.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: o$.V6.UNSET, value: o$.V6.UNSET, id: o$.V6.UNSET },
                { label: o$.V6.IN_PROCESS_V2, value: o$.V6.IN_PROCESS_V2, id: o$.V6.IN_PROCESS_V2 },
                { label: o$.V6.OUT_OF_PROCESS_V3, value: o$.V6.OUT_OF_PROCESS_V3, id: o$.V6.OUT_OF_PROCESS_V3 },
                {
                    label: o$.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: o$.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: o$.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(j.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: function (e) {
                (a(e), oU.A.forceRenderMode(e));
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function dh(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function i() {
        a(null);
    }
    return (0, r.jsxs)(oD.EO, {
        size: oD.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(oD.rQ, {
                align: oB.A.Align.CENTER,
                justify: oB.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(oD.s_, { onClick: i }),
                ],
            }),
            (0, r.jsx)(oD.$m, {
                children: (0, r.jsx)("div", {
                    className: o5.st,
                    children: (0, r.jsx)(oT.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(oD.jl, {
                children: (0, r.jsxs)(ne.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(n);
                            },
                        }),
                        (0, r.jsx)(x.$, { variant: "secondary", text: "Clear", onClick: i }),
                    ],
                }),
            }),
        ],
    });
}
let dx = {
    native: { label: "Native", filter: (e) => e.type === oV.ON.NativeLegacy || e.type === oV.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === oV.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === oV.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === oV.ON.OOPModule || e.type === oV.ON.LegacyModule },
};
function dp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oV.QJ.Info;
    if (t === oV.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case oV.ON.NativeLegacy:
            return "var(--yellow-500)";
        case oV.ON.NativeOOP:
            return "var(--green-500)";
        case oV.ON.Flux:
            return "var(--brand-400)";
        case oV.ON.Renderer:
            return "var(--brand-500)";
        case oV.ON.LegacyModule:
            return "var(--yellow-300)";
        case oV.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let dg = [
    {
        key: "type",
        cellClassName: o5.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = dv(t);
            return (0, r.jsx)("div", {
                className: o5.g$,
                style: { color: dp(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "Name",
        cellClassName: o5.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case oV.QJ.Info:
                                    return "text-strong";
                                case oV.QJ.Warning:
                                    return "text-feedback-warning";
                                case oV.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(p.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "Timestamp",
        cellClassName: o5.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nM.i$)(nC()(t), "h:mm:ss.SSS");
        },
    },
];
function dv(e) {
    switch (e) {
        case oV.ON.NativeLegacy:
            return oO.W;
        case oV.ON.NativeOOP:
            return oR.q;
        case oV.ON.Renderer:
        case oV.ON.Flux:
            return ow.v;
        case oV.ON.LegacyModule:
            return oM.k;
        case oV.ON.OOPModule:
            return oL.o;
        default:
            return oM.k;
    }
}
function dj(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let df = ["__webpack_require__", "fn"],
    db = ["web.js", "web.js.map"],
    dy = [
        {
            id: "details",
            name: "Details",
            group: a7.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: i, nativeId: s, stack: o, data: d, timestamp: c, pid: u } = t,
                    m = nC()(c),
                    h = dv(l);
                return (0, r.jsxs)(g.Ar, {
                    className: o5.bW,
                    children: [
                        (0, r.jsxs)(oF.A, {
                            className: H()(tQ.jr, o5.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: dp(l, i) },
                                    className: o5.nr,
                                    children: (0, r.jsx)(h, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(oF.A.Title, {
                                    wrapperClassName: o5.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(K.D, {
                                            tag: "span",
                                            className: o5.KE,
                                            onClick: () => (0, nw.C)(n),
                                            children: (0, r.jsx)(nN.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(oF.A.Icon, {
                                    icon: nN.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nw.C)(dj(t));
                                    },
                                }),
                                (0, r.jsx)(oF.A.Icon, { icon: nk.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(nH, {
                            className: o5.ZK,
                            children: [
                                (0, r.jsx)(nK, {
                                    name: "Timestamp",
                                    copyValue: m.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: m.toISOString(),
                                        title: (0, nM.i$)(m, "LLLL"),
                                        children: (0, nM.i$)(m, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nK, {
                                    name: "Log Type",
                                    copyValue: i,
                                    children: (0, r.jsx)("code", { children: i }),
                                }),
                                (0, r.jsx)(nK, {
                                    name: "PID",
                                    copyValue: u?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: u?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nK, {
                                    name: "Native ID",
                                    copyValue: s?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: s?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nK, {
                                    name: "Data",
                                    copyValue: dj(d),
                                    children: (0, r.jsx)("code", { children: dj(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nK, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, i] = a,
                                                        s = n.split(/[\\/]/).pop();
                                                    return df.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: o5.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !db.includes(s ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: o5.lz,
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
    dE = {
        searchType: nO.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                i = [t, a, JSON.stringify(l)];
            return (null != n && i.push(n), i);
        },
        throttleMs: 100,
    };
function d_() {
    let { ref: e, height: t } = (0, oG.Ay)(),
        a = (0, d.bG)([oY.A], () => oY.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [i, s] = o.useState(!1),
        [c, u] = o.useState(null),
        [m, h] = o.useState(Object.keys(dx)),
        [x, g] = (0, d.bG)([oY.A], () => oY.A.getOverlayLoggingBreadcrumbs(), [], o1.D),
        [v, j] = o.useState(null),
        f = v ?? x,
        b = null != v ? -1 : g;
    o.useEffect(() => {
        0 !== b &&
            (i
                ? u(f.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : u(null));
    }, [i, f, b]);
    let [y, E] = o.useState(""),
        _ = o.useMemo(
            () =>
                0 === b
                    ? []
                    : f.filter((e) => {
                          if (i && null != c && e.timestamp < c) return !1;
                          for (let t of m) {
                              let { filter: a } = dx[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [f, m, c, i, b],
        ),
        [C, S] = o.useState(_),
        [N, A] = o.useState(null),
        k = o.useMemo(() => f.find((e) => e.key === N), [f, N]),
        I = o.useCallback((e) => {
            S(e);
        }, []),
        { renderSelectedTab: D } = (0, a7.Ay)({ tabs: dy }, []);
    (0, nR.RT)(y, _, I, dE, [f]);
    let T = o.useCallback((e) => {
            (l(e), oU.A.setModuleLogging(e));
        }, []),
        [O, R] = o.useState(!1),
        w = o.useRef(null),
        M = o.useCallback(() => {
            ((0, nw.C)(JSON.stringify(_)), R(!0));
        }, [_]);
    o.useEffect(() => {
        if (O)
            return (
                (w.current = setTimeout(() => {
                    R(!1);
                }, 4e3)),
                () => {
                    null != w.current && clearTimeout(w.current);
                }
            );
    }, [O]);
    let L = o.useCallback((e) => {
            j(null != e ? JSON.parse(e) : null);
        }, []),
        P = o.useCallback(
            (e) => {
                if (e) return j(null);
                (0, eY.openModal)(
                    (e) =>
                        (0, r.jsx)(dh, {
                            modalProps: e,
                            onClose: (t) => {
                                (L(t), e.onClose());
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    eJ.SY,
                );
            },
            [L],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: o5.rh,
        children: [
            (0, r.jsxs)("div", {
                className: o5.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: H()(o5._V, o5.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: o5.iR,
                                children: (0, r.jsx)(r9.S, { label: "Poll Native", checked: n, onChange: (e) => T(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: o5.iR,
                                children: (0, r.jsx)(r9.S, {
                                    label: "Only Active Games",
                                    checked: i,
                                    onChange: (e) => s(e),
                                }),
                            }),
                            (0, r.jsxs)(K.D, {
                                className: o5.ny,
                                onClick: M,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: O ? "Copied" : "Copy All",
                                    }),
                                    O
                                        ? (0, r.jsx)(os.CheckmarkLargeIcon, {
                                              size: "sm",
                                              color: eq.A.unsafe_rawColors.GREEN_330.css,
                                          })
                                        : (0, r.jsx)(nN.CopyIcon, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(K.D, {
                                className: o5.ny,
                                onClick: () => P(null != v),
                                children: (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != v ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: H()(o5._V, o5.XQ),
                        children: Object.entries(dx).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                K.D,
                                {
                                    className: H()(o5.pb, m.includes(t) && o5.bx),
                                    onClick: () => {
                                        h((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "currentColor",
                                        children: a.label,
                                    }),
                                },
                                t,
                            );
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: o5._V,
                        children: (0, r.jsx)(nD.I, {
                            query: y,
                            onChange: E,
                            onClear: () => E(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: H()(o5.st, o5.CZ),
                children: (0, r.jsx)(tX, {
                    columns: dg,
                    data: C,
                    selectedRowKey: N ?? void 0,
                    onClickRow: (e) => A(e.key),
                }),
            }),
            null != k &&
                (0, r.jsx)(a9, {
                    className: H()(o5.st, o5.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: D({ breadcrumb: k, onClose: () => A(null) }),
                }),
        ],
    });
}
let dC = o.memo(function () {
        let e = (0, d.bG)([oK.A], () => oK.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: o5.st,
            children: [
                (0, r.jsx)("div", {
                    className: o5.Iv,
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    dS = o.memo(function () {
        let e = (0, d.bG)([oY.A], () => oY.A.isStateDebuggingEnabled()),
            t = (0, d.bG)([oY.A], () => oY.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    oU.A.setStateDebugging(!0),
                    () => {
                        oU.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: o5.st,
                children: [
                    (0, r.jsx)("div", {
                        className: o5.Iv,
                        children: (0, r.jsx)(m.d, {
                            checked: e,
                            onChange: () => oU.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function dN() {
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)("div", {
            className: H()(tQ.nd, o5.rf),
            children: [
                (0, r.jsx)(dc, {}),
                (0, r.jsx)(dm, {}),
                (0, r.jsx)(du, {}),
                (0, r.jsx)(dr, {}),
                (0, r.jsx)(dl, {}),
                (0, r.jsx)(ds, {}),
                (0, r.jsx)(dC, {}),
                (0, r.jsx)(dS, {}),
            ],
        }),
    });
}
function dA(e) {
    switch (e) {
        case "Disabled":
            return;
        case "False":
            return !1;
        case "True":
            return !0;
    }
}
function dk(e) {
    return null == e ? "Disabled" : e ? "True" : "False";
}
let dI = o.memo(function () {
    let e = (0, oW.wW)(),
        t = (0, d.bG)([oX.Ay], () => oX.Ay.getOverlayKeybind());
    return (0, r.jsxs)("div", {
        className: o5.st,
        children: [
            (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
            (0, r.jsx)(Q.D, { variant: "heading-md/semibold", children: "Experiment State" }),
            (0, r.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: (0, r.jsx)("pre", {
                    children: JSON.stringify({ ...e, overlayKeybind: (0, o2.dI)(t.shortcut) }, void 0, 2),
                }),
            }),
            (0, r.jsx)(Q.D, { variant: "heading-md/semibold", children: "Overrides" }),
            (0, r.jsx)(j.l, {
                label: "Overlay User Status",
                description: "Override whether the current user was a new or existing user",
                value: dk(e.overrideIsNewOverlayUser),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Existing user", value: "False", id: "False" },
                    { label: "New user", value: "True", id: "True" },
                ],
                onSelectionChange: function (e) {
                    (0, oW.sw)(dA(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(j.l, {
                label: "Override Previous Keybind Status",
                description: "Override whether the user's pre-experiment keybind was the default keybind",
                value: dk(e.overrideIsUsingDefaultOverlayKeybind),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Using default keybind", value: "True", id: "True" },
                    { label: "Not using default keybind", value: "False", id: "False" },
                ],
                onSelectionChange: function (e) {
                    (0, oW.C3)(dA(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(Q.D, { variant: "heading-md/semibold", children: "Actions" }),
            (0, r.jsx)(x.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oW.xc)() }),
            (0, r.jsx)(x.$, { size: "sm", text: "Reset isUsingDefaultOverlayKeybind", onClick: () => (0, oW.tM)() }),
        ],
    });
});
function dD() {
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsx)("div", { className: H()(tQ.nd, o5.rf), children: (0, r.jsx)(dI, {}) }),
    });
}
function dT() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                tR.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    tR.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: H()(tQ.nd, o5.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: o5._V,
                    children: [
                        (0, r.jsx)(K.D, {
                            className: H()(o5.k0, "state" === e && o5.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(p.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(K.D, {
                            className: H()(o5.k0, "logging" === e && o5.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(p.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(K.D, {
                            className: H()(o5.k0, "experiments" === e && o5.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(p.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(dN, {}),
                "logging" === e && (0, r.jsx)(d_, {}),
                "experiments" === e && (0, r.jsx)(dD, {}),
            ],
        })
    );
}
var dO = a(25409);
let dR = { xbox_game_pass: "Xbox Game Pass" };
function dw(e) {
    return `/debug/partner-subs/${e}`;
}
async function dM() {
    let { body: e } = await lq.Bo.get({ url: "/debug/partner-subs", rejectWithError: !0 });
    return e;
}
async function dL(e, t) {
    await lq.Bo.post({ url: dw(e), body: t, rejectWithError: !0 });
}
async function dP(e, t) {
    await lq.Bo.del({ url: dw(e), body: t, rejectWithError: !0 });
}
function dU(e) {
    let { active: t } = e;
    return (0, r.jsx)("span", { className: `${dO.Od} ${t ? dO.xk : dO.kS}`, children: t ? "Active" : "Inactive" });
}
function dG(e) {
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
    return (0, r.jsxs)(q.B, {
        gap: 8,
        className: dO.nM,
        children: [
            (0, r.jsxs)(q.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                children: [
                    (0, r.jsx)("div", { className: dO.un, children: a.external_account_id }),
                    (0, r.jsx)(dU, { active: a.is_active }),
                    (0, r.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: 8,
                        fullWidth: !1,
                        className: dO.cm,
                        children: [
                            (0, r.jsx)(m.d, {
                                label: "",
                                checked: a.is_active,
                                onChange: (e) => c(() => dL(t, { ...s, is_active: e })),
                                disabled: l,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Unlink",
                                onClick: () => c(() => dP(t, s)),
                                disabled: l,
                            }),
                        ],
                    }),
                ],
            }),
            d && (0, r.jsx)("div", { className: dO.en, children: JSON.stringify(a.metadata) }),
        ],
    });
}
function dB(e) {
    var t;
    let { listing: a, onChanged: n } = e,
        [l, i] = o.useState(""),
        [s, d] = o.useState(!0),
        [c, u] = o.useState(!1);
    async function h() {
        u(!0);
        try {
            let e = { is_active: s },
                t = l.trim();
            ("" !== t && (e.external_account_id = t), await dL(a.partner, e), i(""));
        } finally {
            (await n(), u(!1));
        }
    }
    return (0, r.jsxs)(q.B, {
        gap: 12,
        className: dO.ns,
        children: [
            (0, r.jsxs)("div", {
                className: dO.CM,
                children: [
                    "Leave the id blank for a per-Discord-user default. Set the same id on multiple Discord accounts to test cross-account dedup of the ",
                    dR[(t = a.partner)] ?? t,
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
            (0, r.jsx)(q.B, {
                direction: "horizontal",
                justify: "start",
                children: (0, r.jsx)(x.$, {
                    variant: "primary",
                    size: "sm",
                    text: "Link account",
                    onClick: h,
                    disabled: c,
                }),
            }),
        ],
    });
}
function dF(e) {
    var t;
    let { listing: a, onChanged: n } = e;
    return (0, r.jsxs)(q.B, {
        gap: 8,
        className: dO.Oy,
        children: [
            (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", children: dR[(t = a.partner)] ?? t }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: [
                    "Backed by the ",
                    (0, r.jsx)("code", { children: a.connection_type }),
                    " connected account.",
                ],
            }),
            (0, r.jsx)("div", { className: dO.U, children: "Linked accounts" }),
            0 === a.connected_accounts.length
                ? (0, r.jsx)("div", { className: dO.Ie, children: "None linked yet." })
                : a.connected_accounts.map((e) =>
                      (0, r.jsx)(dG, { partner: a.partner, connectedAccount: e, onChanged: n }, e.connection_id),
                  ),
            (0, r.jsx)("div", { className: dO.U, children: "Link a new account" }),
            (0, r.jsx)(dB, { listing: a, onChanged: n }),
        ],
    });
}
function d$() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(null),
        l = o.useCallback(async () => {
            try {
                let e = await dM();
                (t(e), n(null));
            } catch (e) {
                n(e instanceof Error ? e.message : String(e));
            }
        }, []);
    return (
        (0, tr.Ay)(() => {
            l();
        }),
        (0, r.jsxs)(g.Ip, {
            className: H()(tQ.nd, dO.kL),
            children: [
                (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", className: tQ.wx, children: "Partner Perks" }),
                (0, r.jsxs)(q.B, {
                    gap: 16,
                    children: [
                        null != a && (0, r.jsx)(p.E, { variant: "text-sm/normal", className: dO.kc, children: a }),
                        e.map((e) => (0, r.jsx)(dF, { listing: e, onChanged: l }, e.partner)),
                    ],
                }),
            ],
        })
    );
}
var dV = a(488428),
    dW = a(73825),
    dz = a(277984),
    dH = a(529427),
    dK = a(944304),
    dY = a(300233),
    dq = a(599941),
    dJ = a(162093),
    dQ = a(4630),
    dX = a(44120),
    dZ = a(75678),
    d0 = a(216678),
    d1 = a(194509),
    d2 = a(761705),
    d3 = a(37402),
    d6 = a(397093);
function d5(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, dq.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(dJ.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let d8 = function () {
    let [e, t] = o.useState(tM.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, d.yK)([no.A], () => no.A.getGuildsArray()),
        [i] = (0, d.yK)([oe.A], () => [oe.A.getPremiumSubscription()]),
        s = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(s.length > 0 ? s[0].value : null),
        [h, v] = o.useState(""),
        [y, E] = o.useState({ plan_id: tM.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        _ = "true" !== y.gift && null != i,
        [C, S] = o.useState(s.length > 0 ? s[0].value : null),
        { analyticsLocations: N } = (0, nt.Ay)(tk.A.PAYMENT_FLOW_TEST_PAGE),
        [A, k] = o.useState(""),
        [I, D] = o.useState(em.dJq),
        { balance: T, isFetching: O, error: R } = (0, d2.W)(),
        { isSubmitting: w, responseMessage: M, redeemVirtualCurrency: L } = (0, d2.Q)(),
        [P, U] = o.useState(em.dJq),
        [G, B] = o.useState(""),
        [F, $] = o.useState(em.dJq),
        [V, W] = o.useState(em.dJq);
    return (0, r.jsx)(nt.f5, {
        value: N,
        children: (0, r.jsx)(g.Ip, {
            className: d6.XG,
            children: (0, r.jsxs)(q.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: tM.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tM.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tM.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(d1.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: nS.XD.PRIMARY,
                                look: nS.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: tM.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tM.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tM.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, dZ.A)({ subscriptionTier: a, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(q.B, {
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
                                ? (0, r.jsx)(dK.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(q.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(sT.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(q.B, {
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
                                    (0, r.jsx)(l3.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: h.length < 1,
                                        children: (0, r.jsx)(x.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: h.length < 1,
                                            onClick: () => {
                                                window.open(em.BVt.BILLING_PROMOTION_REDEMPTION(h));
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
                                    { id: "tier_2", value: tM.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tM.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tM.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
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
                    (0, r.jsx)(l3.m, {
                        text: "Already subscribed",
                        shouldShow: _,
                        children: (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: _,
                            onClick: () => {
                                window.open(em.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dV.stringify({ ...y }));
                            },
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(q.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    O
                                        ? (0, r.jsx)("div", {
                                              className: d6.wG,
                                              children: (0, r.jsx)(td.y, { type: td.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: d6.dB,
                                              children: [
                                                  null !== R &&
                                                      (0, r.jsxs)(p.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              R.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(d3.Gy, {
                                                      balance: T ?? 0,
                                                      balanceWidgetMode: d3.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsx)(f.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: P,
                                onChange: (e) => U(e),
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: w,
                                onClick: () => L(P, (0, ew.A)()),
                            }),
                            null != M && (0, r.jsx)(p.E, { variant: "text-sm/normal", children: M }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Premium Server Subscription For",
                                value: C,
                                options: s,
                                onSelectionChange: (e) => S(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dY.H, {
                                guildId: C?.id,
                                children: (0, r.jsx)(d5, { selectedGuildForGuildSub: C }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(q.B, {
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
                                        value: I,
                                        onChange: (e) => D(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, dQ.openIAPPurchaseModal)({
                                        applicationId: A,
                                        skuId: I,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: em.liQ.IN_APP },
                                        context: em.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(q.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(u.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(q.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(f.k, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: G,
                                        onChange: B,
                                    }),
                                    (0, r.jsx)(f.k, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: F,
                                        onChange: (e) => $(e),
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, d0.q)({
                                                applicationId: G,
                                                skuId: F,
                                                analyticsLocations: N,
                                                checkoutFlow: dH.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(q.B, {
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
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, dX.A)({ skuId: V, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(q.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, dW.YG)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, dz.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Dismissible Content Framework",
                        children: (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, lf.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var d4 = a(219887),
    d9 = a(459357),
    d7 = a(500380),
    ce = a(102609),
    ct = a(710195),
    ca = a(211287),
    cn = a(295405),
    cl = a(548185);
let ci = [
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
    cs = {
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
    cr = [
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
    co = {
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
    cd = [
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
    cc = {
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
function cu() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        [s, d] = o.useState(null),
        [c, u] = o.useState(null),
        [m, h] = o.useState("pm_card_us"),
        [v, f] = o.useState(!1),
        b = Object.values((0, tA.bG)([cn.A], () => cn.A.paymentSources)),
        y = cs[e];
    async function E() {
        let t = m;
        ("" === t && (t = "pm_card_us"),
            await lq.Bo.post({
                url: "/debug/payment-source",
                body: { token: t, address: "US" === e ? l : "CA" === e ? c : null },
                rejectWithError: !1,
            }),
            await (0, dz.$o)());
    }
    async function _() {
        (await lq.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, dz.$o)());
    }
    async function C() {
        (await lq.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload());
    }
    return (
        o.useEffect(() => {
            (0, dz.$o)();
        }, []),
        (0, r.jsx)(g.Ip, {
            className: tQ.nd,
            children: (0, r.jsxs)("div", {
                className: iA.l$,
                children: [
                    (0, r.jsxs)(p.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: iA.Uo,
                        children: [
                            (0, r.jsx)(au.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: ci
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: cl.bI,
                                                src: (0, d7.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: function (e) {
                                    (t(e), h(cs[e][0].value), f(1 === cs[e].length));
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: cr.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (n(e), i(co[e] ?? null));
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: s,
                                    options: cd.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (d(e), u(cc[e] ?? null));
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
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Create Stripe Credit Card",
                                onClick: E,
                            }),
                            b.length > 0 &&
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Delete All Payment Sources",
                                    onClick: _,
                                }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: C,
                            }),
                        ],
                    }),
                    (0, r.jsx)(p.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(cf, {}),
                    (0, r.jsx)(p.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(cg, {}),
                    (0, r.jsx)(p.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    b.map((e) => (0, r.jsx)(cb, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let cm = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    ch = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    cx = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function cp(e) {
    let { experimentName: t, options: a = cm } = e,
        n = (0, tA.bG)([ct.A, nP.default], () => {
            let e = nP.default.getId(),
                a = ct.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, ce.t$)(ce.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(j.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function cg() {
    return (0, r.jsxs)(q.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(cp, { experimentName: d9.A.definition.name, options: ch }),
            (0, r.jsx)(cp, { experimentName: ca.A.definition.name, options: cx }),
        ],
    });
}
let cv = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    cj = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function cf() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, i] = o.useState(null),
        [s, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(null),
        p = parseInt(a, 10),
        g = !isNaN(p) && p >= 500 && p <= 5e3;
    async function v() {
        if (g) {
            (d(!0), h(null), i(null), u(!1));
            try {
                let t = await lq.Bo.post({
                    url: "/billing/gift-card/create-on-demand-pin",
                    body: { country: e, currency: cj[e], amount: p },
                    rejectWithError: !0,
                });
                i(t.body.pin);
            } catch (e) {
                h(e instanceof Error ? e.message : "Failed to generate PIN");
            } finally {
                d(!1);
            }
        }
    }
    return (0, r.jsxs)(q.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(q.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(j.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: cv,
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
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        size: "sm",
                        text: "Generate Gift Card PIN",
                        onClick: v,
                        loading: s,
                        disabled: !g,
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(q.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(f.k, { label: "Generated PIN", value: l, onChange: () => {}, readOnly: !0 }),
                        (0, r.jsx)(x.$, {
                            variant: "secondary",
                            size: "sm",
                            text: c ? "Copied!" : "Copy",
                            onClick: () => {
                                (navigator.clipboard.writeText(l), u(!0), setTimeout(() => u(!1), 2e3));
                            },
                        }),
                    ],
                }),
            null != m && (0, r.jsx)(Y.w, { type: "critical", children: m }),
        ],
    });
}
function cb(e) {
    let { paymentSource: t } = e;
    async function a() {
        (await lq.Bo.patch({ url: em.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
            await (0, dz.$o)());
    }
    return (0, r.jsxs)("div", {
        className: iA.bd,
        children: [
            (0, r.jsx)(d4.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: cl.bI, src: (0, d7.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(p.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var cy = a(706712),
    cE = a(441574),
    c_ = a(367727),
    cC = a(349871),
    cS = a(55373);
function cN() {
    return (0, r.jsxs)(g.Ip, { className: cS.kL, children: [(0, r.jsx)(cA, {}), (0, r.jsx)(cI, {})] });
}
function cA() {
    let e = (0, d.bG)([eo.default], () => eo.default.getCurrentUser()?.perks ?? null),
        t = o.useMemo(
            () =>
                null == e
                    ? []
                    : Object.values(cE.bb)
                          .filter((e) => "number" == typeof e && e !== cE.bb.UNSPECIFIED)
                          .filter((t) => (0, cC.Nh)(e, t))
                          .map((t) => ({
                              id: t,
                              name: cE.bb[t],
                              sources: (0, cC.kQ)(e, t)?.map((e) => cE.g$[e]) ?? [],
                          })),
            [e],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Q.D, { className: cS.wx, variant: "heading-lg/semibold", children: "Active Perks" }),
            (0, r.jsx)(ck, { perks: e, activePerks: t }),
            (0, r.jsx)(Q.D, { className: cS.m_, variant: "heading-md/semibold", children: "Debug" }),
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
function ck(e) {
    let { perks: t, activePerks: a } = e;
    return null == t
        ? (0, r.jsx)("p", { className: cS.Qb, children: "No perks data available on the current user." })
        : 0 === a.length
          ? (0, r.jsx)("p", { className: cS.Qb, children: "No active perks." })
          : (0, r.jsxs)("table", {
                className: cS.Q,
                children: [
                    (0, r.jsx)("thead", {
                        children: (0, r.jsxs)("tr", {
                            children: [
                                (0, r.jsx)("th", { className: cS.Ts, children: "Perk" }),
                                (0, r.jsx)("th", { className: cS.Ts, children: "Sources" }),
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
                                            className: cS.iH,
                                            children: [(0, r.jsx)("code", { children: e.name }), " (", e.id, ")"],
                                        }),
                                        (0, r.jsx)("td", {
                                            className: cS.iH,
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
function cI() {
    let e = o.useCallback(() => {
            (0, a_._N)(aE.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, c_.FZ)(aE.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Q.D, { className: cS.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: cS.PW,
                children: (0, r.jsx)(x.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var cD = a(136722),
    cT = a(576705),
    cO = a(558393),
    cR = a(719366),
    cw = a(643566);
function cM(e) {
    let { title: t, can: a } = e,
        n = a ? os.CheckmarkLargeIcon : ea.P,
        l = (0, r.jsx)("div", {
            className: H()(cw.v_, a ? cw.uU : cw.Ss),
            children: (0, r.jsx)(n, { className: cw.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: cw.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: cw.rv,
                children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function cL() {
    let e = (0, d.bG)([rQ.Ay], () => rQ.Ay.getChannelId()),
        t = (0, d.bG)([nd.A], () => nd.A.getGuildId()),
        a = (0, d.bG)([aw.A], () => aw.A.getChannel(e)),
        n = (0, d.bG)([no.A], () => no.A.getGuild(t)),
        l = (0, d.bG)([cT.A], () => cT.A.computePermissions(a)),
        i = (0, d.bG)([cT.A], () => cT.A.computePermissions(n)),
        s = (0, aR.Ay)(a, !0),
        o = null != a ? (0, cR.mW)(a, !1) : null,
        c = null != n ? cO.A.getGuildPermissionSpecMap(n) : null,
        u = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cD.zy(l, a);
            return (0, r.jsx)(cM, { title: t, can: n }, t);
        }),
        m = Object.values(c ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cD.zy(i, a);
            return (0, r.jsx)(cM, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: H()(tQ.nd, cw.nd),
        children: (0, r.jsxs)("div", {
            className: cw.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: cw.uW,
                    children: [
                        (0, r.jsx)(Q.D, {
                            variant: "heading-md/semibold",
                            children: null != s ? `Permissions in ${s}` : "No channel selected",
                        }),
                        u,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: cw.uW,
                    children: [
                        (0, r.jsx)(Q.D, {
                            variant: "heading-md/semibold",
                            children: null != n ? `Permissions in ${n.name}` : "No guild selected",
                        }),
                        m,
                    ],
                }),
            ],
        }),
    });
}
var cP = a(873298),
    cU = a(775602),
    cG = a(363195),
    cB = a(885386),
    cF = a(631670),
    c$ = a(817281),
    cV = a(955572),
    cW = a(56348),
    cz = a(385803),
    cH = a(381941);
let cK = [em.NJ8.ASH, em.NJ8.LIGHT, em.NJ8.DARK, em.NJ8.ONYX],
    cY = [cP.NS.COMPACT, cP.NS.COZY, cP.NS.DEFAULT];
function cq(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function cJ() {
    let e,
        t =
            ((e = eo.default.getCurrentUser()),
            om.Ay.canUseClientThemes(e) ? Object.keys(cz.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = cq(a);
            if (null != n) {
                let t = cz.ag[n];
                e = t?.theme ?? em.NJ8.DARK;
            } else e = cq([em.NJ8.ASH, em.NJ8.DARK, em.NJ8.ONYX]);
            await c$.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                a_.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = cq(cK);
            await c$.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                a_.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function cQ() {
    let e = tD.A.purchases,
        t = (0, eP.x9)(e),
        a = (0, eP.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            (n && (e.avatarDecoration = cq([...t, null])), l && (e.nameplate = cq([...a, null])), (0, tp.p)(e));
            let i = tg.A.getPendingChanges(),
                s = (0, cW.Sk)(i);
            await (0, cF._L)(s).finally(cF.pZ);
        } catch (e) {}
}
function cX() {
    try {
        let e = cq(em.hH7.FONT_SIZES);
        (0, cV.XS)(e);
        let t = cq(cH.qh);
        (0, cV.AC)(t);
        let a = cq(cY);
        cB.Xi.updateSetting(a);
    } catch (e) {}
}
function cZ() {
    (0, tf.Bf)();
    let e = (0, d.bG)([eo.default], () => eo.default.getCurrentUser()),
        t = cB.eh.useSetting(),
        a = (0, d.bG)([cG.A], () => cG.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, d.bG)([tD.A], () => tD.A.purchases),
        i = (0, eP.x9)(l),
        s = (0, eP.$W)(l),
        c = e?.avatarDecoration?.skuId,
        u = e?.collectibles?.nameplate?.skuId,
        m = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        h = null != u ? (s.find((e) => e.skuId === u) ?? null) : null,
        g = (0, d.bG)([tI.A], () => tI.A.getProduct(m?.skuId)),
        v = (0, d.bG)([tI.A], () => tI.A.getProduct(h?.skuId)),
        j = (0, d.bG)([cU.Ay], () => cU.Ay.fontSize),
        f = (0, d.bG)([cU.Ay], () => cU.Ay.messageGroupSpacing),
        b = cB.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = eo.default.getCurrentUser(),
                t = cB.eh.getSetting(),
                a = tD.A.purchases,
                n = (0, eP.x9)(a),
                l = (0, eP.$W)(a),
                i = cG.A.theme,
                s = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = cU.Ay.fontSize,
                m = cU.Ay.messageGroupSpacing,
                h = cB.Xi.getSetting();
            return () => {
                try {
                    (c$.u_(
                        { theme: i, backgroundGradientPresetId: s ?? void 0, customUserThemeSettings: void 0 },
                        a_.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, tp.p)({ avatarDecoration: d, nameplate: c }));
                    let e = tg.A.getPendingChanges(),
                        t = (0, cW.Sk)(e);
                    ((0, cF._L)(t).finally(cF.pZ), (0, cV.XS)(u), (0, cV.AC)(m), cB.Xi.updateSetting(h));
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lM.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Q.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(p.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: cJ }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: cQ,
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: cX,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? cz.ag[n]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", g?.name ?? "None"],
                        }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Nameplate: ", v?.name ?? "None"] }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Font Size: ", j, "px"] }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Message Spacing: ", f] }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                b,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case cP.NS.COMPACT:
                                            return "Compact";
                                        case cP.NS.COZY:
                                            return "Cozy";
                                        case cP.NS.DEFAULT:
                                            return "Default";
                                        case cP.NS.RESPONSIVE:
                                            return "Responsive";
                                        default:
                                            return "Unknown";
                                    }
                                })(b),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var c0 = a(885574),
    c1 = a(656513),
    c2 = a(508274),
    c3 = a(837529);
let c6 = [5793266, 2303016],
    c5 = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function c8() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, c3.Zt)(),
        l = (0, eg.Ay)(),
        i = (0, d.bG)([aC.A], () => aC.A.settings.appearance?.clientThemeSettings),
        s =
            i?.customUserThemeSettings != null &&
            null != i.customUserThemeSettings.colors &&
            i.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, c$.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)(q.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c1.N, {
                            collapsibleContent: (0, r.jsxs)(q.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "The intended use case for this tool is to allow you to preview both Nitro and non-Nitro profile component styles across a variety of user profiles regardless of their Nitro status or chosen theme colors.",
                                    }),
                                ],
                            }),
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, r.jsx)(x.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "What is this?",
                                    icon: c0.CircleInformationIcon,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, r.jsx)(b.c, {}),
                    ],
                }),
                null == e
                    ? (0, r.jsx)(x.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: c6 }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(ne.e, {
                                  children: (0, r.jsx)(x.$, {
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
                                  options: c5,
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
                                            (0, r.jsx)(x.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: c6 }),
                                            }),
                                            (0, r.jsxs)(q.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(c2.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(q.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(c2.VN, {
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
                                  : (0, r.jsxs)(q.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(j.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(em.NJ8).map((e) => ({
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
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be saved and can be restored manually, or automatically when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(x.$, {
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
                                                                    (0, c$.u_)({ theme: "system" }));
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be automatically restored when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(x.$, {
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
var c4 = a(141931),
    c9 = a(306173),
    c7 = a(597643),
    ue = a(237984),
    ut = a(43203),
    ua = a(349435),
    un = a(674272),
    ul = a(466034),
    ui = a(10094),
    us = a(683760);
function ur() {
    let e = (0, d.bG)([eo.default], () => eo.default.getCurrentUser()),
        t = (0, d.bG)([us.A], () => {
            let e = us.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, d.bG)([us.A], () => us.A.getPremiumTypeOverride());
    return (0, r.jsxs)(q.B, {
        gap: 16,
        children: [
            (0, r.jsx)(j.l, {
                label: "Override Client-Side Premium Type",
                options: tM.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, ui.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(lV.Q, {
                onClick: () => {
                    (0, ui.O)(tM.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(sE.J, {
                label: "Override Client-Side Account Created At Date",
                value: nC()(t),
                onSelect: (e) => {
                    var t;
                    return ((t = e.toISOString()), void (0, ui.Y)(new Date(t)));
                },
            }),
            (0, r.jsx)(lV.Q, { onClick: () => (0, ui.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
}
var uo = a(19575),
    ud = a(327337),
    uc = a(431804),
    uu = a(377722),
    um = a(221851);
function uh() {
    throw Error("Send help");
}
function ux() {
    let e = cB.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(g.Ip, {
              children: [
                  (0, r.jsx)("div", { className: H()(uu.N, um.SX), children: (0, r.jsx)(ur, {}) }),
                  (0, r.jsx)("div", {
                      className: H()(uu.N, um.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, un.A)({ source: uc.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: H()(uu.N, um.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = rQ.Ay.getChannelId() ?? "21154681615024128"),
                                  void (0, eY.openModalLazy)(
                                      async () => {
                                          let { default: t } = await Promise.all([
                                              a.e("456510"),
                                              a.e("770940"),
                                              a.e("302033"),
                                              a.e("882830"),
                                              a.e("819959"),
                                          ]).then(a.bind(a, 131882));
                                          return (a) =>
                                              (0, r.jsx)(t, {
                                                  otherUserId: "9876543210",
                                                  channelId: e,
                                                  warningId: "test-warning-id",
                                                  warningType: ua._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: ud.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: H()(uu.N, um.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, eY.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("417724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: H()(uu.N, um.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, ut.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: H()(uu.N, um.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: c9.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: H()(uu.N, um.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = c7.A.getSocket();
                              tR.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: H()(uu.N, um.QB),
                      children: (0, r.jsx)(m.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cB.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: H()(uu.N, um.QB),
                      children: [
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, ue.o)(),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  (c7.A.getSocket().close(), c7.A.getSocket().connect());
                              },
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  tR.h.dispatch({
                                      type: "CLEAR_CACHES",
                                      reason: "Requested by user",
                                      preventWritingCachesAgainThisSession: !0,
                                      resetSocket: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, ul.sy)(!0),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: function () {
                                  lq.Bo.post({ url: em.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: H()(uu.N, um.QB),
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
                              ],
                              onSelectionChange: (e) => null != e && uo.Ay.crash(e),
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
                                      value: c4.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: c4.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: c4.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void uo.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: uh }),
                      ],
                  }),
              ],
          });
}
var up = a(593924),
    ug = a(653887),
    uv = a(799226);
function uj() {
    let e = Object.keys(up).map((e) => (0, r.jsx)(uy, { riveName: e }, e));
    return (0, r.jsx)(g.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(q.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(Q.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(p.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(uf, {}),
                (0, r.jsx)(Q.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(p.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function uf() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        [s, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, x] = o.useState(400),
        p = o.useCallback(() => {
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
    return (0, r.jsxs)(q.B, {
        gap: 16,
        children: [
            (0, r.jsx)(uy, { riveName: "Rive inspector", onRiveLoad: v }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(ug._, { src: e, ref: c, onLoad: p, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(td.y, {}) : null,
            null != a &&
                (0, r.jsxs)(q.B, {
                    children: [
                        (0, r.jsxs)(q.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(Q.D, { variant: "heading-lg/medium", children: "Dimensions" }),
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
                                    onChange: (e) => x(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(q.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(Q.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        ub,
                                        {
                                            property: e,
                                            type: l?.[e]?.type,
                                            value: a?.[e]?.value ?? l?.[e]?.value,
                                            onChange: (t) => g(e, t),
                                            artboards: s,
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
function ub(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: i } = e;
    switch (a) {
        case "string":
            return (0, r.jsx)(f.k, { label: t, value: n, onChange: (e) => l(e) });
        case "number":
            return (0, r.jsx)(f.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) });
        case "boolean":
            return (0, r.jsx)(m.d, { label: t, checked: n, onChange: (e) => l(e) });
        case "trigger":
            return (0, r.jsx)(x.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) });
        case "image":
            return (0, r.jsx)(f.k, { label: t, value: n, onChange: (e) => l(e) });
        case "color":
            return (0, r.jsx)(au.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select a color...",
                options: Object.entries(eq.A.colors).map((e) => {
                    let [t, a] = e;
                    return { label: t, value: a, id: t };
                }),
            });
        case "artboard":
            return (0, r.jsx)(au.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select an artboard...",
                options: i.map((e) => ({ label: e, value: e, id: e })),
            });
        default:
            return null;
    }
}
function uy(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = up[t]?.riveSrc,
        l = null == n,
        i = o.useRef(null),
        s = (0, uv.Gy)(n);
    return (0, r.jsxs)(
        q.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(q.B, {
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
                                    (null != n && (0, uv.DS)(n, t), a?.(t));
                                }),
                                    l.readAsArrayBuffer(t));
                            },
                            ref: i,
                        }),
                        (0, r.jsx)(ez.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: function () {
                                (null != i.current && (i.current.value = ""),
                                    null != n && (0, uv.DS)(n, null),
                                    a?.(null));
                            },
                            icon: nI.TrashIcon,
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
var uE = a(926919),
    u_ = a(513521),
    uC = a(111162);
function uS() {
    let e = (0, d.bG)([uC.default], () => uC.default.routingKeyTags);
    return (0, r.jsx)(lj.Ch, {
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-16)" },
            children: (0, r.jsxs)(u.n, {
                label: "Routing Key",
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children:
                            "A routing key is an opaque set of strings added to outbound network requests, which may be used for debugging and testing of the network path.",
                    }),
                    (0, r.jsxs)(q.B, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(Q.D, { variant: "heading-md/medium", children: "Overrides" }),
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "Manually configure the routing key values",
                            }),
                            (0, r.jsx)(u_.A, {
                                tagsLabel: "Routing Key Values",
                                placeholder: "Enter new value...",
                                tags: e.map((e) => ({ id: e, label: e })),
                                onAddTag: function (t) {
                                    e.includes(t) || (0, uE.f)([...e, t]);
                                },
                                onRemoveTag: function (t) {
                                    (0, uE.f)(e.filter((e) => !t.has(e)));
                                },
                            }),
                            e.length > 0
                                ? (0, r.jsx)(x.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: "Clear all",
                                      onClick: () => (0, uE.f)([]),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        }),
    });
}
var uN = a(344292);
function uA(e) {
    let { game: t, meta: a } = e;
    return (0, r.jsxs)("div", {
        className: uN.nM,
        children: [
            (0, r.jsxs)("div", {
                className: uN.uV,
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/semibold",
                        className: uN._k,
                        children: null == t.name || "" === t.name ? "(no name)" : t.name,
                    }),
                    null != a && (0, r.jsx)(p.E, { variant: "text-xs/normal", className: uN.Bq, children: a }),
                ],
            }),
            (0, r.jsx)(p.E, {
                variant: "text-xs/normal",
                className: uN.C0,
                children: null == t.exePath || "" === t.exePath ? "(no path)" : t.exePath,
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-xs/normal",
                className: uN.en,
                children: ["pid ", t.pid, " \xb7 ", t.id ?? "(no id)"],
            }),
        ],
    });
}
function uk(e) {
    let { title: t, count: a, entries: n, renderMeta: l } = e;
    return (0, r.jsxs)(q.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(Q.D, { variant: "heading-sm/bold", children: [t, " (", a, ")"] }),
            0 === n.length
                ? (0, r.jsx)(p.E, { variant: "text-sm/normal", className: uN.Ie, children: "none" })
                : (0, r.jsx)(q.B, {
                      gap: 0,
                      children: n.map((e) =>
                          (0, r.jsx)(
                              uA,
                              { game: e.game, meta: l?.(e.outcome) },
                              `${e.game.pid}-${e.game.id ?? e.game.exeName}`,
                          ),
                      ),
                  }),
        ],
    });
}
function uI(e) {
    return "blocked" !== e.kind
        ? null
        : null != e.matchedExe
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    "blocked by exe substring ",
                    (0, r.jsx)("span", { className: uN.ti, children: e.matchedExe }),
                ],
            })
          : null != e.matchedPattern
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      "blocked by pattern ",
                      (0, r.jsx)("span", { className: uN.ti, children: e.matchedPattern }),
                  ],
              })
            : "blocked (no reason captured)";
}
function uD(e) {
    return "observed_app" !== e.kind
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  "matched observed app",
                  " ",
                  (0, r.jsxs)("span", {
                      className: uN.ti,
                      children: [e.appName, e.streamerTool ? " (streamer tool)" : ""],
                  }),
              ],
          });
}
function uT() {
    var e;
    let t = (0, d.bG)([E.Ay], () => E.Ay.getDetectionDebug()),
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
        className: H()(tQ.nd, uN.kL),
        children: (0, r.jsxs)(q.B, {
            gap: 16,
            padding: 12,
            className: uN.rf,
            children: [
                (0, r.jsxs)(q.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-md/bold", children: "Running Game Detection" }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                "Inspect what native is reporting, which entries get filtered by the JS pipeline, and what ultimately lands in ",
                                (0, r.jsx)("code", { children: "RunningGameStore" }),
                                ". Updates whenever native reports a change.",
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(q.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(Q.D, { variant: "heading-sm/bold", children: "Status" }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "Last update:" }),
                                " ",
                                null == (e = t?.timestamp) ? "never" : new Date(e).toLocaleTimeString(),
                            ],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "From native:" }),
                                " ",
                                t?.totalFromNative ?? 0,
                            ],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "Passed to RunningGameStore:" }),
                                " ",
                                a.passed.length,
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(uk, { title: "Running games", count: a.passed.length, entries: a.passed }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(uk, { title: "Filtered: non-game", count: a.nonGames.length, entries: a.nonGames }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(uk, {
                    title: "Filtered: matched a hardcoded observed app",
                    count: a.observedApps.length,
                    entries: a.observedApps,
                    renderMeta: uD,
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(uk, {
                    title: "Filtered: blocklist",
                    count: a.blocked.length,
                    entries: a.blocked,
                    renderMeta: uI,
                }),
            ],
        }),
    });
}
var uO = a(290136),
    uR = a(299163),
    uw = a(629584),
    uM = a(600239),
    uL = a(940622),
    uP = a(961895),
    uU = a(343991),
    uG = a(607027);
function uB() {
    (0, eY.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
            return (t) =>
                (0, r.jsx)(e, {
                    title: "No image or video files found!",
                    help: "Please drop one or more image or video files.",
                    ...t,
                });
        },
        { modalKey: uU.D },
    );
}
function uF(e) {
    (e.stopPropagation(), e.preventDefault());
}
let u$ = (e) => {
    let { className: t, onDrop: a, children: n } = e,
        [l, i] = o.useState(!1),
        s = o.useRef(null),
        d = o.useCallback((e) => {
            (uF(e), i(!0), (0, eY.closeModal)(uU.D));
        }, []),
        c = o.useCallback((e) => {
            uF(e);
            let t = s.current,
                a = e.relatedTarget;
            (null != a && (null == t || t.contains(a))) || i(!1);
        }, []),
        u = o.useCallback(
            async (e) => {
                (uF(e), i(!1));
                let t = e.dataTransfer;
                if (null == t) return void uB();
                let n = await Promise.all(Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry())).then(
                    (e) => e.filter((e) => null != e),
                );
                n.length > 0 ? a(n) : uB();
            },
            [a],
        );
    return (0, r.jsxs)("div", {
        ref: s,
        className: H()(t, uG.iE),
        onDragEnter: d,
        onDragOver: uF,
        onDragLeave: c,
        onDrop: u,
        children: [
            n,
            l &&
                (0, r.jsx)("div", {
                    className: uG.d2,
                    children: (0, r.jsxs)("div", {
                        className: uG.vW,
                        children: [
                            (0, r.jsx)(uP.A, { icons: eC.ir }),
                            (0, r.jsx)(Q.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                            (0, r.jsxs)("div", {
                                className: uG.GA,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: "Drop file(s) into this panel to preview Shop assets!",
                                    }),
                                    (0, r.jsxs)(p.E, {
                                        variant: "text-sm/normal",
                                        children: [
                                            "Click",
                                            (0, r.jsx)(uO.CircleQuestionIcon, {
                                                className: uG.q4,
                                                size: "xs",
                                                color: eq.A.colors.TEXT_DEFAULT,
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
var uV = a(374380),
    uW = a(597404);
let uz = new Set([
        eG.RN.HERO_BANNER_STATIC,
        eG.RN.HERO_LOGO,
        eG.RN.PDP_BACKGROUND,
        eG.RN.LOGO,
        eG.RN.MOBILE_BANNER,
        eG.RN.MOBILE_BACKGROUND,
    ]),
    uH = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    uK = { max: 5e6, warn: 2e6 },
    uY = { max: 3e6, warn: 1e6 },
    uq = { max: 2e6, warn: 1e6 },
    uJ = { max: 1e6, warn: 5e5 },
    uQ = { max: 25e4, warn: 5e4 },
    uX = {
        [eG.Jn.PROFILE_EFFECT]: uK,
        [eG.Jn.AVATAR_DECORATION]: uY,
        [eG.Jn.PROFILE_FRAME]: uq,
        [eG.RN.HERO_BANNER_ANIMATED]: uK,
        [eG.RN.HERO_BANNER_RIVE]: uK,
        [eG.RN.CATALOG_BANNER_RIVE]: uK,
        [eG.RN.SHOP_BUTTON_BG_HOVER]: uY,
        [eG.RN.SHOP_BUTTON_BG_HOVER_DARK]: uY,
        [eG.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: uY,
        [eG.RN.SHOP_BUTTON_BG_RESTING]: uY,
        [eG.RN.SHOP_BUTTON_BG_RESTING_DARK]: uY,
        [eG.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: uY,
        [eG.RN.HERO_BANNER_STATIC]: uq,
        [eG.RN.UPSELL_BANNER]: uJ,
        [eG.RN.UPSELL_BANNER_POPOUT]: uQ,
        [eG.RN.MOBILE_BANNER]: uJ,
        [eG.RN.MOBILE_BACKGROUND]: uQ,
        [eG.RN.MOBILE_HERO]: uJ,
        [eG.RN.PDP_BACKGROUND]: uQ,
        [eG.RN.LOGO]: uQ,
        [eG.RN.TAB_TOOLTIP]: uQ,
    },
    uZ = [eG.Kx.COLLECTION],
    u0 = [eG.Kx.AVATAR_DECORATIONS, eG.Kx.FRAMES, eG.Kx.NAMEPLATES, eG.Kx.PROFILE_EFFECTS];
async function u1(e) {
    let t = e.createReader(),
        a = await new Promise((e) => t.readEntries(e)),
        n = new Set();
    for (let e of a) e.isDirectory && n.add(e.name);
    let l = uZ.filter((e) => !n.has(e));
    return (u0.some((e) => n.has(e)) || l.push(`at least one of: ${u0.join(", ")}`), l);
}
let u2 = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/;
function u3(e) {
    let { names: t, addError: a } = e,
        n = t.filter((e) => !u2.test(e));
    n.length > 0 && a("File names must be in lowercase snake case", n);
}
function u6(e, t, a, n, l) {
    let i = t.size,
        s = i > 1e6 ? `${(i / 1e6).toFixed(2)}MB` : `${(i / 1e3).toFixed(2)}KB`,
        r = `${l ?? t.name} - ${s}`;
    if (i > e.max) {
        let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
        a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
    } else i > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
}
function u5(e, t, a, n) {
    let l = uX[e];
    if (null != l) for (let e of t) e.name.endsWith(".txt") || u6(l, e, a, n);
}
function u8(e) {
    let t = eG.aL[e];
    return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
}
let u4 = ["png", "jpg"];
async function u9(e) {
    let t = URL.createObjectURL(e);
    try {
        return await (0, eG.Lv)(t);
    } finally {
        URL.revokeObjectURL(t);
    }
}
async function u7(e, t) {
    if (e.length < 2) return null;
    let a = (
        await Promise.all(
            e.map(async (e) => {
                try {
                    return t(await u9(e));
                } catch {
                    return null;
                }
            }),
        )
    ).filter((e) => null != e);
    return a.length < 2 || new Set(a).size <= 1 ? null : a;
}
function me(e) {
    return e.map((e) => `${e}px`).join(", ");
}
async function mt(e, t) {
    for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
        let e = new Map();
        for (let { file: t } of n.layerFiles) {
            let { parsed: a } = (0, uW.Mf)(t.name);
            if (a?.type !== uV.O.STAPLE) continue;
            let n = e.get(a.anchor) ?? [];
            (n.push(t), e.set(a.anchor, n));
        }
        for (let [n, l] of e) {
            let e = await u7(l, (e) => e.height);
            null != e &&
                t("Staples with the same anchor (top/bottom) must all have the same height", [
                    `${a} (${String(n).toUpperCase()}) - ${me(e)}`,
                ]);
        }
    }
}
async function ma(e, t) {
    for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
        let e = n.layerFiles
                .filter((e) => {
                    let { file: t } = e,
                        { parsed: a } = (0, uW.Mf)(t.name);
                    return a?.type === uV.O.STAPLE || a?.type === uV.O.BORDER || a?.type === uV.O.RAIL;
                })
                .map((e) => {
                    let { file: t } = e;
                    return t;
                }),
            l = await u7(e, (e) => e.width);
        null != l && t("All layers (staples, borders, rails) must have the same width", [`${a} - ${me(l)}`]);
    }
}
var mn = a(275537);
let ml = o.createContext({ setDropHandler: () => {} }),
    mi = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    ms = { id: "none", label: "[none selected]", value: null };
function mr() {
    (0, eY.hasModalOpen)(uM.k)
        ? (0, eY.closeModal)(uM.k)
        : (0, eY.openModalLazy)(
              async () => {
                  let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: uM.k, onCloseRequest: () => (0, eY.closeModal)(uM.k) },
          );
}
function mo() {
    (0, eY.hasModalOpen)(uM.g)
        ? (0, eY.closeModal)(uM.g)
        : (0, eY.openModalLazy)(
              async () => {
                  let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: uM.g, onCloseRequest: () => (0, eY.closeModal)(uM.g) },
          );
}
function md() {
    let e = (0, eB.pF)(),
        { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, uL.JE)(),
        n = o.useMemo(() => [ms, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: mn.kO,
              children: [
                  (0, r.jsx)(aO.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mn.wR,
                      children: [
                          (0, r.jsx)(Q.D, {
                              variant: "heading-sm/semibold",
                              children: `Profile Effect (${e.length} to preview)`,
                          }),
                          (0, r.jsx)(ez.K, {
                              variant: "icon-only",
                              size: "sm",
                              onClick: mo,
                              icon: uO.CircleQuestionIcon,
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
function mc() {
    let e = (0, uL.bA)(),
        { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, uL.JE)(),
        n = o.useMemo(() => [ms, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: mn.kO,
              children: [
                  (0, r.jsx)(aO.h, { size: 16 }),
                  (0, r.jsx)(Q.D, {
                      variant: "heading-sm/semibold",
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
function mu() {
    let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, uL.JE)(),
        { avatarDecorationAssets: a } = (0, uL.NE)(),
        n = o.useMemo(() => [ms, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
    return 0 === a.length
        ? null
        : (0, r.jsxs)("div", {
              className: mn.kO,
              children: [
                  (0, r.jsx)(aO.h, { size: 16 }),
                  (0, r.jsx)(Q.D, {
                      variant: "heading-sm/semibold",
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
let mm = new Set([eG.RN.HERO_BANNER_STATIC, eG.RN.HERO_BANNER_ANIMATED, eG.RN.HERO_BANNER_RIVE]);
function mh(e) {
    let { clearAssets: t, clearIgnoredFiles: a } = e,
        { collectionAssets: n } = (0, uL.NE)(),
        {
            deleteCollectionAsset: l,
            clearAssets: i,
            heroLogoMaxHeight: s,
            setHeroLogoMaxHeight: d,
            heroResponsive: c,
            setHeroResponsive: u,
        } = (0, uL.JE)(),
        h = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
        g = h.some((e) => e.value === eG.RN.HERO_LOGO),
        v = h.some((e) => mm.has(e.value)),
        j = o.useCallback((e) => l(e), [l]),
        f = o.useCallback(() => {
            (i(), t(), a());
        }, [i, t, a]);
    return 0 === h.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(aO.h, { size: 16 }),
                  (g || v) &&
                      (0, r.jsxs)("div", {
                          className: mn.v7,
                          children: [
                              g &&
                                  (0, r.jsxs)("div", {
                                      className: mn.cj,
                                      children: [
                                          (0, r.jsx)(p.E, {
                                              variant: "text-md/normal",
                                              className: mn.Me,
                                              children: "Logo size",
                                          }),
                                          (0, r.jsx)(uR.A, {
                                              className: mn.TQ,
                                              minValue: 90,
                                              maxValue: 200,
                                              initialValue: s ?? 90,
                                              handleSize: 10,
                                              onValueChange: (e) => d(Math.round(e)),
                                              onValueRender: (e) => `${Math.round(e)}px`,
                                              "aria-label": "Hero logo max height",
                                          }),
                                          (0, r.jsx)(p.E, { variant: "text-sm/normal", children: `${s ?? 90}px` }),
                                      ],
                                  }),
                              v &&
                                  (0, r.jsxs)("div", {
                                      className: mn.sy,
                                      children: [
                                          (0, r.jsx)(m.d, { checked: c, onChange: u }),
                                          (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Responsive Hero" }),
                                      ],
                                  }),
                          ],
                      }),
                  (0, r.jsx)(aO.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mn.wR,
                      children: [
                          (0, r.jsx)(Q.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                          (0, r.jsx)(x.$, { variant: "critical-primary", size: "sm", onClick: f, text: "Clear All" }),
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      children: h.map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: mn._0,
                                  children: [
                                      (0, r.jsx)(ez.K, {
                                          variant: "icon-only",
                                          size: "sm",
                                          onClick: () => j(e.value),
                                          icon: ea.P,
                                          "aria-label": "Remove asset",
                                      }),
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: e.label }),
                                  ],
                              },
                              e.value,
                          ),
                      ),
                  }),
              ],
          });
}
function mx(e) {
    let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(aO.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mn.wR,
                      children: [
                          (0, r.jsx)(Q.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                          (0, r.jsx)(x.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              "li",
                              {
                                  className: mn.yk,
                                  children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: e }),
                              },
                              `${e}-${t}`,
                          ),
                      ),
                  }),
              ],
          });
}
function mp() {
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
                            let a = await u1(t);
                            a.length > 0 && s("Missing required directories", a);
                            let n = await (0, eG.eg)([t]);
                            ((function (e) {
                                let { files: t, addError: a, addWarning: n } = e;
                                for (let e of t.collectionFiles) {
                                    let t = (0, eG.pd)(e),
                                        l = null != t ? uX[t] : null;
                                    null != l && u6(l, e, a, n);
                                }
                                u3({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                let l = new Set(t.collectionFiles.map((e) => (0, eG.pd)(e)).filter((e) => null != e)),
                                    i = Array.from(uz)
                                        .filter((e) => !l.has(e))
                                        .map(u8);
                                i.length > 0 && a("Missing required files", i);
                                let s = Object.values(eG.RN)
                                    .filter((e) => !uz.has(e))
                                    .filter((e) => !l.has(e))
                                    .map(u8);
                                s.length > 0 && n("Missing optional assets", s);
                            })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (u3({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                        Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                            let [t, l] = e,
                                                i = l.map((e) => e.name);
                                            (u3({
                                                names: i.map((e) => {
                                                    let t = e.indexOf("-");
                                                    return e.substring(0, t > 0 ? t : e.length);
                                                }),
                                                addError: a,
                                            }),
                                                u5(eG.Jn.PROFILE_EFFECT, l, a, n));
                                            let s = uH
                                                .filter((e) => !i.some((t) => t.startsWith(e) && t.endsWith(".png")))
                                                .map((e) => `${t}/${e}`);
                                            (s.length > 0 && a("Missing required PFX files with prefix", s),
                                                i.some((e) => e.endsWith(".txt")) ||
                                                    a(
                                                        "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                        [t],
                                                    ));
                                            let r = i
                                                .filter((e) => !uH.some((t) => e.startsWith(t)) && !e.endsWith(".txt"))
                                                .map((e) => `${t}/${e}`);
                                            r.length > 0 && n("Contains unrecognized files", r);
                                        }));
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (u3({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                        u5(eG.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n));
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e,
                                        l = Object.keys(t.profileFrameDirsMap)
                                            .filter((e) => !u2.test(e))
                                            .map((e) => `${eG.Kx.FRAMES}/${e}`);
                                    l.length > 0 && a("File names must be in lowercase snake case", l);
                                    let i = uX[eG.Jn.PROFILE_FRAME];
                                    Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                        let [t, l] = e,
                                            s = `${eG.Kx.FRAMES}/${t}`,
                                            r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                        ((null != l.previewFile && null != r && u4.includes(r)) ||
                                            a(
                                                "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                [`${s}/preview.{${u4.join("|")}}`],
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
                                            u2.test(l.previewFile.name) ||
                                            o.push(`${s}/${l.previewFile.name}`),
                                        l.layerFiles))
                                            u2.test(e.name) || o.push(`${s}/${t}/${e.name}`);
                                        o.length > 0 && a("File names must be in lowercase snake case", o);
                                        let d = [];
                                        for (let { file: e, folder: t } of l.layerFiles) {
                                            let { parsed: a, errorType: n } = (0, uW.Mf)(e.name);
                                            if (null == a) {
                                                let a = null != n ? uW.h4[n] : "invalid";
                                                d.push(`${s}/${t}/${e.name}: ${a}`);
                                            }
                                        }
                                        if ((d.length > 0 && a("Invalid profile frame layer filenames", d), null != i))
                                            for (let { file: e, folder: t } of (null != l.previewFile &&
                                                u6(i, l.previewFile, a, n, `${s}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                u6(i, e, a, n, `${s}/${t}/${e.name}`);
                                    });
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addWarning: a } = e;
                                    t.ignoredFilenames.length > 0 &&
                                        a("Contains unrecognized files", t.ignoredFilenames);
                                })({ files: n, addError: s, addWarning: r }),
                                await Promise.all([mt(n, s), ma(n, s)]));
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
        { setDropHandler: u } = o.useContext(ml),
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
                          className: mn._f,
                          children: [
                              (0, r.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: d ? "text-feedback-critical" : "text-default",
                                  children: `${i.length} errors`,
                              }),
                              (0, r.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: c ? "text-feedback-warning" : "text-default",
                                  children: `${s.length} warnings`,
                              }),
                              (0, r.jsx)(x.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                          ],
                      })
                    : (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                (0, r.jsx)(aO.h, { size: 16 }),
                d &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(Q.D, { variant: "heading-lg/bold", children: "Errors" }),
                            (0, r.jsx)(aO.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mn.ck,
                                children: i.map((e, t) => {
                                    let [a, n] = e;
                                    return (0, r.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-md/bold",
                                                    color: "text-feedback-critical",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, r.jsx)("ul", {
                                                        className: mn.ck,
                                                        children: n.map((e, t) =>
                                                            (0, r.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, r.jsx)(p.E, {
                                                                        variant: "text-sm/normal",
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
                            (0, r.jsx)(Q.D, { variant: "heading-lg/bold", children: "Warnings" }),
                            (0, r.jsx)(aO.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mn.ck,
                                children: Object.entries(n).map((e, t) => {
                                    let [a, n] = e;
                                    return (0, r.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-md/bold",
                                                    color: "text-feedback-warning",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, r.jsx)("ul", {
                                                        className: mn.ck,
                                                        children: n.map((e, t) =>
                                                            (0, r.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, r.jsx)(p.E, {
                                                                        variant: "text-sm/normal",
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
function mg() {
    let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, uL.JE)(),
        { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: i, processAndUpsertAssets: s } = (0, eG.ds)(),
        { setDropHandler: d } = o.useContext(ml),
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
                    className: mn.sy,
                    children: [
                        (0, r.jsx)(m.d, { checked: e, onChange: (e) => t(e) }),
                        (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Enable Preview" }),
                        (0, r.jsx)(ez.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: mr,
                            icon: uO.CircleQuestionIcon,
                            "aria-label": "Open preview instructions",
                        }),
                    ],
                }),
                (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Drop files in this panel to begin preview." }),
                (0, r.jsx)(md, {}),
                (0, r.jsx)(mc, {}),
                (0, r.jsx)(mu, {}),
                (0, r.jsx)(mh, { clearAssets: l, clearIgnoredFiles: i }),
                (0, r.jsx)(mx, { ignoredFiles: n, handleClearIgnoredFiles: i }),
            ],
        })
    );
}
function mv() {
    let [e, t] = o.useState("preview");
    return (0, r.jsxs)("div", {
        className: mn.kL,
        children: [
            (0, r.jsx)(uw.I, {
                options: mi,
                value: e,
                onChange: (e) => {
                    let { value: a } = e;
                    return t(a);
                },
                className: mn.Vj,
                optionClassName: mn.UK,
            }),
            (0, r.jsx)(aO.h, { size: 8 }),
            "preview" === e && (0, r.jsx)(mg, {}),
            "validate" === e && (0, r.jsx)(mp, {}),
            (0, r.jsx)(aO.h, { size: 16 }),
        ],
    });
}
let mj = (e) => {
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
    return (0, r.jsx)(ml.Provider, { value: l, children: (0, r.jsx)(u$, { onDrop: i, children: t }) });
};
var mf = a(663803),
    mb = a(839534),
    my = a(335032);
function mE() {
    let e = (0, d.bG)([tI.A], () => tI.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: my.k,
        children: [
            (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(mf.l, {
                value: e,
                onChange: (e) => {
                    (0, mb.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
}
var m_ =
        (((n = {}).DEFAULT = "default"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    mC = a(295811);
function mS() {
    let e = (0, d.bG)([mC.A], () => mC.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(m_).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(j.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, mb.Or)(e);
        },
        selectionMode: "single",
    });
}
var mN = a(474200);
function mA() {
    let [e, t] = o.useState(void 0);
    return (0, r.jsxs)("div", {
        className: H()(mN.kL, mN.fi),
        children: [
            (0, r.jsx)(f.k, {
                fullWidth: !0,
                label: "Shop Layout URL Override",
                value: e,
                onChange: (e) => ("" === e ? t(void 0) : t(e)),
                placeholder: "https://cdn.discordapp.com/assets/content/...",
            }),
            (0, r.jsxs)("div", {
                className: mN.o1,
                children: [
                    (0, r.jsx)(x.$, {
                        variant: "critical-primary",
                        text: "Clear",
                        onClick: () => {
                            (t(void 0), (0, mb.Aq)(void 0));
                        },
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        text: "Set",
                        onClick: () => (0, mb.Aq)("" !== e ? e : void 0),
                    }),
                ],
            }),
        ],
    });
}
function mk(e) {
    let { className: t } = e,
        a = Object.keys(aE.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == a
        ? null
        : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(lk, { items: [a] }) });
}
var mI = a(578797),
    mD = a(291052);
function mT(e) {
    let { title: t, expanded: a, onToggle: n, children: l } = e,
        i = o.useId();
    return (0, r.jsx)(c1.N, {
        isExpanded: a,
        className: mD.uW,
        collapsibleContent: (0, r.jsx)("div", { id: i, className: mD.f5, children: l }),
        children: () =>
            (0, r.jsxs)("button", {
                type: "button",
                onClick: n,
                "aria-expanded": a,
                "aria-controls": i,
                className: mD.bV,
                children: [
                    (0, r.jsx)(Q.D, { variant: "heading-md/bold", children: t }),
                    (0, r.jsx)(st._, { size: "sm", color: "currentColor", className: H()(mD.ai, { [mD.hg]: a }) }),
                ],
            }),
    });
}
function mO() {
    let e = (0, d.bG)([lw.A], () => lw.A.get("shop_disable_cache")),
        t = (0, d.bG)([lw.A], () => lw.A.get("shop_include_unpublished")),
        a = (0, mI.U)("DevToolsShopPanel"),
        [n, l] = o.useState(new Set()),
        i = o.useCallback((e) => {
            l((t) => {
                let a = new Set(t);
                return (a.has(e) ? a.delete(e) : a.add(e), a);
            });
        }, []),
        s = o.useCallback(() => {
            l((e) => {
                if (e.has("assets")) return e;
                let t = new Set(e);
                return (t.add("assets"), t);
            });
        }, []);
    return (0, r.jsx)(mj, {
        onDrop: s,
        children: (0, r.jsxs)("div", {
            className: mD.Lm,
            children: [
                (0, r.jsxs)("div", {
                    className: mD.dQ,
                    children: [
                        (0, r.jsx)(m.d, {
                            label: "Disable collectibles cache",
                            checked: e,
                            onChange: (e) => (0, lR.L)("shop_disable_cache", e),
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Show unpublished collectibles",
                            checked: t,
                            onChange: (e) => (0, lR.L)("shop_include_unpublished", e),
                        }),
                    ],
                }),
                (0, r.jsxs)(mT, {
                    title: "Layouts",
                    expanded: n.has("layouts"),
                    onToggle: () => i("layouts"),
                    children: [(0, r.jsx)(mk, {}), (0, r.jsx)(mS, {}), a && (0, r.jsx)(mA, {}), (0, r.jsx)(mE, {})],
                }),
                (0, r.jsx)(mT, {
                    title: "Assets",
                    expanded: n.has("assets"),
                    onToggle: () => i("assets"),
                    children: (0, r.jsx)(mv, {}),
                }),
            ],
        }),
    });
}
let mR = [
    { id: "unset", label: "Unset", value: cP.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
    { id: "all", label: "All", value: cP.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
    { id: "usersWithGame", label: "Users With Game", value: cP.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
    { id: "none", label: "None", value: cP.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
];
function mw() {
    let e = o.useRef(null),
        t = cB.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: H()(tQ.nd, aQ.n),
        children: (0, r.jsxs)("div", {
            className: aQ.k,
            children: [
                (0, r.jsx)(Q.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(j.l, {
                    label: "Receive DMs In Game",
                    options: mR,
                    value: t,
                    onSelectionChange: cB.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var mM = a(828596),
    mL = a(937427),
    mP = a(213682);
function mU() {
    let e = (0, d.bG)([mL.A], () => mL.A.getPromotionIdOverride()),
        [t, a] = o.useState(e ?? ""),
        n = o.useCallback(() => {
            (a(""), (0, mM.J_)(void 0));
        }, []),
        l = o.useCallback(() => {
            let e = t.trim();
            (0, mM.J_)("" !== e ? e : void 0);
        }, [t]),
        i = o.useCallback((e) => {
            a(e);
        }, []);
    return (0, r.jsxs)("div", {
        className: mP.k,
        children: [
            (0, r.jsx)(f.k, {
                fullWidth: !0,
                label: `Promotion ID Override (staff)${null != e ? ` \u{2014} active: ${e}` : ""}`,
                value: t,
                onChange: i,
                placeholder: "Paste a storefront promotion id",
            }),
            (0, r.jsxs)("div", {
                className: mP.o,
                children: [
                    (0, r.jsx)(x.$, { variant: "critical-primary", text: "Clear", onClick: n }),
                    (0, r.jsx)(x.$, { variant: "primary", text: "Set", onClick: l }),
                ],
            }),
        ],
    });
}
var mG = a(209612);
function mB() {
    return (0, r.jsx)("div", { className: mG.n, children: (0, r.jsx)(mU, {}) });
}
var mF = a(278416),
    m$ = a(53938);
function mV(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function mW(e) {
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
        (0, r.jsx)(g.Ip, { className: m$.Dx, children: (0, r.jsx)(a6.A, { data: n }) })
    );
}
function mz(e) {
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
                for (let e of n.preDispatches ?? []) tR.h.dispatch(e);
                (tR.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), s());
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
                for (let t of e.preDispatches ?? []) tR.h.dispatch(t);
                (tR.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), s());
            } catch (e) {
                i(e instanceof Error ? e.message : String(e));
            }
        }, [t, s]);
    return (0, r.jsxs)("div", {
        className: H()(m$.Dx, m$.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: m$.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: m$.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: m$.KA,
                children: [
                    (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "Apply", onClick: d }),
                    (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: s }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Purge store", onClick: c }),
                ],
            }),
        ],
    });
}
let mH = [
    {
        key: "Name",
        cellClassName: m$.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function mK(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: a7.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: m$.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(mW, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: a7.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(mW, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: a7.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: m$.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(mz, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: i } = (0, a7.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(a9, {
        className: m$.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(a3.Ay, {
                className: H()(tQ.jr, m$.nZ),
                children: [
                    (0, r.jsx)(a3.Ay.Icon, { icon: mF.TagIcon, tooltip: t.getName() }),
                    (0, r.jsx)(a3.Ay.Title, { children: t.getName() }),
                ],
            }),
            i({ store: t }),
        ],
    });
}
function mY() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = d.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(mV), [n])
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
        className: H()(tQ.nd, m$.nd),
        children: [
            (0, r.jsx)("div", {
                className: m$.KE,
                children: (0, r.jsx)(nD.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tX, { columns: mH, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != c &&
                (0, r.jsx)(mK, { store: c, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, i),
        ],
    });
}
var mq = a(91871),
    mJ = a.n(mq);
let mQ = [
        {
            key: "ID",
            cellClassName: nq.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "Bucket",
            cellClassName: nq.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "Timestamp",
            cellClassName: nq.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    mX = [
        {
            id: "details",
            name: "Details",
            group: a7.fu.NONE,
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
                    d = nC()(i);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(a3.Ay, {
                            className: H()(tQ.jr, nq.nZ),
                            children: [
                                (0, r.jsx)(a3.Ay.Icon, { icon: nA.U, tooltip: t }),
                                (0, r.jsx)(a3.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(nH, {
                            className: nq.ZK,
                            children: [
                                (0, r.jsx)(nK, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: i.toISOString(),
                                        title: (0, nM.i$)(d, "LLLL"),
                                        children: (0, nM.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nK, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nK, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nK, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nK, { name: "Override", children: (0, r.jsx)(nY, { value: a.override }) }),
                                (0, r.jsx)(nK, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nK, { name: "Excluded", children: (0, r.jsx)(nY, { value: l }) }),
                                (0, r.jsx)(nK, { name: "Previously tracked", children: (0, r.jsx)(nY, { value: o }) }),
                                (0, r.jsx)(nK, { name: "Location", children: (0, r.jsx)("code", { children: s }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function mZ() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, d.yK)([nW], () => nW.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || mJ()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [i, s] = o.useState(void 0),
        c = l.find((e) => e.key === i),
        { TabBar: u, renderSelectedTab: m } = (0, a7.Ay)({ tabs: mX }, []),
        h = (0, d.bG)([nW], () => nW.trackTriggers),
        x = o.useCallback((e) => {
            tR.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        p = h ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: H()(tQ.nd, nq.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nq.rh,
                children: [
                    (0, r.jsx)(l3.m, {
                        text: p,
                        children: (0, r.jsx)(ez.K, {
                            size: "sm",
                            variant: h ? "active" : "primary",
                            icon: h ? l5.PauseIcon : l6.PlayIcon,
                            "aria-label": p,
                            onClick: () => x(!h),
                        }),
                    }),
                    (0, r.jsx)(nD.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(ez.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": nu.intl.string(nu.t.VkKicb),
                        icon: nI.TrashIcon,
                        onClick: X.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tX, { columns: mQ, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != c &&
                (0, r.jsxs)(a9, {
                    className: nq.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(u, {}), m({ loggedTrigger: c })],
                }),
        ],
    });
}
var m0 = a(512950),
    m1 = a(324861),
    m2 = a(903162);
let m3 = function () {
        let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, m1.A)();
        return (0, r.jsx)("div", {
            className: m2.k,
            children: (0, r.jsxs)(u.n, {
                label: "Virtual Currency Configuration",
                description: "Click the button below to reset your onboarding state for Virtual Currency.",
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(x.$, {
                            text: "Reset Onboarding State",
                            onClick: () => {
                                (e(), t(), (0, a$.pX)(em.BVt.APP));
                            },
                        }),
                    }),
                    (0, r.jsx)(m0.p, {
                        messageType: m0.Y.INFO,
                        children:
                            "Your may have to refresh your client after being redirected to the main application in order to see these",
                    }),
                ],
            }),
        });
    },
    m6 = [
        ["codecH264", "H264"],
        ["codecH265", "H265"],
        ["codecAv1", "AV1"],
    ],
    m5 = [
        ["encNvidiaDx11", "nvidia-dx11"],
        ["encNvidiaCuda", "nvidia-cuda"],
        ["encAmdDx11", "amd-dx11"],
        ["encIntelDx11", "intel-dx11"],
        ["encIntelCpu", "intel-cpu"],
        ["encWmfCpu", "wmf-cpu"],
        ["encWmfGpu", "wmf-gpu"],
        ["encWmfDx11", "wmf-dx11"],
    ],
    m8 = [
        ["capGraphicsCapture", "deny-graphics-capture", "whenFalse"],
        ["capDxgi", "deny-dxgi", "whenFalse"],
        ["capGdi", "deny-gdi", "whenFalse"],
        ["capVideoHook", "deny-video-hook", "whenFalse"],
        ["gdiForceBitblt", "gdi-force-bitblt", "whenTrue"],
        ["bypassHybridGpuFpsRestriction", "bypass-hybrid-gpu-fps", "whenTrue"],
        ["allowHdr", "deny-hdr", "whenFalse"],
    ],
    m4 = {
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
    m9 = { ...m4 };
function m7(e, t) {
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
let he = !1;
function ht() {
    if (he) return !0;
    if (!C.Ay.isEnabled()) return !1;
    try {
        let e = C.Ay.getMediaEngine();
        return (
            e.on(r8.bg.Connection, () => {
                a0.A.isDeveloper && ha();
            }),
            e.once(r8.bg.Destroy, () => {
                he = !1;
            }),
            (he = !0),
            !0
        );
    } catch {
        return !1;
    }
}
function ha() {
    if (a0.A.isDeveloper && ht())
        try {
            var e;
            let t =
                ((e = m9),
                {
                    overrideDeniedVideoCodecs: m7(e, m6),
                    overrideDeniedVideoEncoders: m7(e, m5),
                    captureOverrides: m8
                        .filter((t) => {
                            let [a, , n] = t;
                            return "whenFalse" === n ? !e[a] : !!e[a];
                        })
                        .map((e) => {
                            let [, t] = e;
                            return t;
                        })
                        .join(","),
                });
            C.Ay.getMediaEngine().eachConnection((e) => {
                e.setAudioVideoOverridesTransport(t);
            });
        } catch {}
}
class hn extends d.Ay.DeviceSettingsStore {
    static displayName = "AudioVideoOverridesStore";
    static persistKey = "AudioVideoOverridesStore";
    initialize(e) {
        (this.waitFor(a0.A),
            (m9 = null != e ? { ...m4, ...e } : { ...m4 }),
            ha(),
            he ||
                C.Ay.addChangeListener(function e() {
                    ht() && (ha(), C.Ay.removeChangeListener(e));
                }));
    }
    getUserAgnosticState() {
        return m9;
    }
    getSnapshot() {
        return m9;
    }
}
let hl = new hn(tR.h, {
    AUDIO_VIDEO_OVERRIDES_UPDATE: function (e) {
        if (!a0.A.isDeveloper) return !1;
        ((m9 = { ...m9, ...e.partial }), ha());
    },
});
var hi = a(731854);
let hs = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    hr = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    ho = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    hd = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function hc(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(q.B, {
        gap: 8,
        children: [
            (0, r.jsx)(p.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(
                    r9.S,
                    {
                        label: a,
                        checked: !!n[t],
                        onChange: () => {
                            var e;
                            return (
                                (e = { [t]: !n[t] }),
                                void tR.h.dispatch({ type: "AUDIO_VIDEO_OVERRIDES_UPDATE", partial: e })
                            );
                        },
                    },
                    t,
                );
            }),
        ],
    });
}
function hu() {
    let e = (0, d.bG)([hl], () => hl.getSnapshot()),
        t = (0, d.bG)([C.Ay], () => C.Ay.supports(hi.O5.VIDEO));
    return (0, r.jsxs)(g.Ip, {
        className: tQ.nd,
        children: [
            (0, r.jsx)(b.c, { gap: 16 }),
            (0, r.jsx)(hc, { title: "Video Codecs (Sender)", toggles: hs, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hc, { title: "Video Encoders", toggles: hr, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hc, { title: "Capture Sources", toggles: ho, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hc, { title: "Capture Options", toggles: hd, state: e }),
                      ],
                  })
                : null,
        ],
    });
}
var hm = a(109445);
function hh() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, i] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        s = "processing" === l.status;
    return (0, r.jsx)(g.Ip, {
        className: tQ.nd,
        children: (0, r.jsxs)("div", {
            className: hm.l7,
            children: [
                (0, r.jsx)(p.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(q.B, {
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
                        (0, r.jsx)(x.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await y.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(f.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(x.$, {
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
                (0, r.jsx)(x.$, {
                    variant: s ? "critical-primary" : "primary",
                    text: s ? "Cancel" : "Start Processing",
                    onClick: s
                        ? function () {
                              (C.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  i((e) => ({ ...e, status: "cancelled" })));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (i({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  C.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)(q.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/semibold",
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
                                            className: hm.TZ,
                                            children: (0, r.jsxs)(p.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? hm.$D : hm.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(p.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var hx = a(207898),
    hp = a.n(hx),
    hg = a(32880),
    hv = a(827343),
    hj = a(964486),
    hf = a(602674),
    hb = a(625841),
    hy = a(74848),
    hE = a(913367);
function h_(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(p.E, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(p.E, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(p.E, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function hC(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(c1.N, {
        collapsibleContent: (0, r.jsx)(h_, { recording: t }),
        children: (e) => {
            let { onClick: i } = e;
            return (0, r.jsxs)(K.D, {
                onClick: i,
                children: [
                    (0, r.jsxs)(p.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(K.D, {
                        tag: "span",
                        onClick: (e) => {
                            (e.stopPropagation(), a ? l() : n(t));
                        },
                        children: a
                            ? (0, r.jsx)(l5.PauseIcon, { size: "xxs" })
                            : (0, r.jsx)(l6.PlayIcon, { size: "xxs" }),
                    }),
                    (0, r.jsx)(K.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            (e.stopPropagation(),
                                (a = new Blob([hp()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n));
                        },
                        children: (0, r.jsx)(hg.DownloadIcon, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function hS() {
    let { name: e } = (0, hy.x5)(hi.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        i = (0, d.bG)([C.Ay], () => C.Ay.getKrispSuppressionLevel()),
        [s, c] = o.useState(null),
        u = o.useRef(null),
        h = o.useRef(null),
        [x, v] = o.useState(0.5),
        {
            krispModels: f,
            krispModelOverride: b,
            inputMode: y,
            echoCancellation: E,
            autoThreshold: _,
            vadUseKrisp: S,
            vadKrispActivationThreshold: N,
            noiseCancellation: A,
            noiseSuppression: k,
            noiseSuppressionSupported: I,
            noiseCancellationSupported: D,
            noiseCancellationEnableStats: T,
        } = (0, d.cf)([C.Ay], () => ({
            krispModels: C.Ay.getKrispModels(),
            krispModelOverride: C.Ay.getKrispModelOverride(),
            echoCancellation: C.Ay.getEchoCancellation(),
            autoThreshold: C.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: C.Ay.getModeOptions().vadUseKrisp,
            inputMode: C.Ay.getMode(),
            vadKrispActivationThreshold: C.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: C.Ay.getNoiseCancellation(),
            noiseSuppression: C.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: C.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: C.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: C.Ay.getKrispEnableStats(),
        })),
        O = A ? "KRISP" : k ? "STANDARD" : "NONE",
        R = (0, hf.v)(),
        w = o.useCallback(() => {
            (u.current?.stop(), (u.current = null), c(null));
        }, []);
    function M() {
        C.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function L(e) {
        if ((t && M(), w(), null == R)) return;
        let a = R.createBufferSource();
        ((a.buffer = e.audioBuffer),
            (h.current = R.createGain()),
            (h.current.gain.value = x),
            a.connect(h.current),
            h.current.connect(R.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            c(e));
    }
    (o.useEffect(() => {
        w();
    }, [w]),
        (0, hj.l0)(() => {
            hv.A.setMode(C.Ay.getMode(), { vadKrispActivationThreshold: void 0 });
        }));
    let P = [];
    return (
        D && P.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        I && P.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        P.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(g.Ip, {
            className: tQ.nd,
            children: (0, r.jsxs)("div", {
                className: hE.l,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(hb.U, {
                        label: "Input Device",
                        deviceType: hi.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(j.l, {
                        label: "Noise Cancellation",
                        value: O,
                        onSelectionChange: (e) => {
                            (hv.A.setNoiseCancellation("KRISP" === e), hv.A.setNoiseSuppression("STANDARD" === e));
                        },
                        options: P,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(uR.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: i,
                                    onValueChange: hv.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: b,
                                    options: f.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        hv.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(m.d, {
                                    label: "Enable Stats",
                                    checked: T,
                                    onChange: (e) => hv.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    y === hi.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.d, {
                                    label: "Auto Threshold",
                                    checked: _,
                                    onChange: (e) => hv.A.setMode(hi.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                _ &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(m.d, {
                                                label: "Use Krisp VAD",
                                                checked: S,
                                                onChange: (e) => hv.A.setMode(hi.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            S &&
                                                (0, r.jsx)(uR.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: N,
                                                    onValueChange: (e) =>
                                                        hv.A.setMode(hi.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    (0, r.jsx)(m.d, {
                        label: "Echo Cancellation",
                        checked: E,
                        onChange: (e) => hv.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(q.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(nS.$n, {
                                color: t ? nS.$n.Colors.RED : nS.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          (w(),
                                              a(!0),
                                              hv.A.setLoopback("krisp_test", !0),
                                              C.Ay.getMediaEngine().startRecordingRawSamples((t, n, s) => {
                                                  (a(!1), hv.A.setLoopback("krisp_test", !1));
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
                                                          suppression: O,
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
                    (0, r.jsx)(uR.A, {
                        label: "Volume",
                        initialValue: x,
                        asValueChanges: function (e) {
                            null != h.current && ((h.current.gain.value = e), v(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)(q.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(hC, { recording: e, playing: e === s, onPlay: L, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var hN = a(803306),
    hA = a(243217),
    hk = a(189213),
    hI = a(543767),
    hD = a(935208),
    hT = a(19886);
let hO = [
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
function hR() {
    let [e, t] = o.useState(!1),
        a = (0, d.bG)([eo.default], () => eo.default.getCurrentUser()),
        n = (0, hT.Lh)(),
        l = (0, d.bG)([oe.A], () => oe.A.getPremiumTypeSubscription()),
        i = null != n ? (tM.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        s = o.useCallback(
            async (e) => {
                let n = new Date();
                (e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2));
                let i = {
                    subscription_status: em.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: hD.default.fromTimestamp(n.getTime()),
                };
                (t(!0),
                    await lq.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: i, rejectWithError: (0, lq.fT)() }),
                    await (0, hN.fetchProfile)(a.id),
                    await (0, dz.hP)(),
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
            options: hO,
            onSelectionChange: s,
        });
}
var hw =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    hM =
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
async function hL(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: i } = a;
    return (
        await lq.Bo.post({
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
var hP = a(601107);
let hU = {
        [em.Dmq.UNPAID]: "Unpaid",
        [em.Dmq.ACTIVE]: "Active",
        [em.Dmq.PAST_DUE]: "Past Due",
        [em.Dmq.CANCELED]: "Canceled",
        [em.Dmq.ENDED]: "Ended",
        [em.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [em.Dmq.BILLING_RETRY]: "Billing Retry",
        [em.Dmq.PAUSED]: "Paused",
        [em.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    hG = {
        [hP.qf.UNKNOWN]: "Unknown",
        [hP.qf.ADMIN]: "Admin",
        [hP.qf.USER]: "User",
        [hP.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [hP.qf.DEFERRED_START]: "Deferred Start",
        [hP.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    hB = [
        { id: "unpaid", label: "Unpaid", value: em.Dmq.UNPAID },
        { id: "active", label: "Active", value: em.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: em.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: em.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: em.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: em.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: em.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: em.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: em.Dmq.PAUSE_PENDING },
    ];
function hF(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [i, s] = o.useState(nC()()),
        [d, c] = o.useState(nC()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [x, g] = o.useState(void 0);
    async function v() {
        if (null == i) return void g("Please select a target date");
        let [e, l] = d.split(":").map(Number),
            s = i.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
        (h(!0), g(void 0));
        try {
            (await hL(t.id, hM.TIME_TRAVEL, { targetDate: s, paymentType: hw.DEFAULT, sendReminderEmail: !1 }),
                n(),
                a());
        } catch (e) {
            g(e.body?.message || e.message || "Failed to time travel");
        } finally {
            h(!1);
        }
    }
    return (0, r.jsx)(hk.Modal, {
        transitionState: l,
        onClose: function () {
            return (a(), Promise.resolve());
        },
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: v, disabled: m || null == i },
        ],
        children: (0, r.jsxs)(q.B, {
            gap: 16,
            children: [
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(sE.J, { label: "Target Date", value: i, onSelect: s }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: function (e) {
                            c(e.target.value);
                        },
                        className: oS.Qn,
                    }),
                }),
                (0, r.jsxs)(q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(q.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(p.E, {
                                    variant: "text-xs/normal",
                                    className: oS.JX,
                                    children: ["Start: ", nC()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(p.E, {
                                    variant: "text-xs/normal",
                                    className: oS.JX,
                                    children: ["End: ", nC()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != x && (0, r.jsx)(Y.w, { type: "critical", children: x }),
            ],
        }),
    });
}
function h$(e) {
    let { subscription: t } = e,
        [a] = (0, hI.C8)({
            subscriptionId: null != t ? t.id : "",
            preventFetch: null == t || t.status !== em.Dmq.PAST_DUE,
        }),
        { analyticsLocations: n } = (0, nt.Ay)(tk.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return t.status !== em.Dmq.PAST_DUE
        ? null
        : (0, r.jsx)(x.$, {
              variant: "critical-primary",
              text: "Open Past Due Checkout",
              size: "sm",
              disabled: null == a,
              onClick: () => {
                  null != a &&
                      (0, dZ.A)({ initialPlanId: t.planIdFromItems, openInvoiceId: a.id, analyticsLocations: n });
              },
          });
}
function hV(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [i, s] = o.useState(!1),
        [d, c] = o.useState(!1),
        [m, h] = o.useState(!1),
        [g, v] = o.useState(!1),
        [f, b] = o.useState(null);
    function y(e) {
        let t = new Date(e);
        return hD.default.fromTimestamp(t.getTime());
    }
    async function E(e) {
        let { status: t = n.status, premiumStreakStart: a, endedAt: i } = e,
            s = {
                subscription_status: t,
                ...(null != a ? { premium_streak_started_at: y(a) } : null),
                ...(null != i ? { ended_at: y(i) } : null),
            };
        (await lq.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: s, rejectWithError: !1 }), l());
    }
    async function _() {
        try {
            await hL(n.id, hM.RENEW, { targetDate: nC()(new Date()), paymentType: hw.DEFAULT, sendReminderEmail: !1 });
        } catch (e) {
            b(e.body?.message || e.message || "Failed to renew subscription");
        }
        l();
    }
    async function C() {
        try {
            await hL(n.id, hM.RENEW, { targetDate: nC()(new Date()), paymentType: hw.FAILURE, sendReminderEmail: !1 });
        } catch (e) {
            b(e.body?.message || e.message || "Failed to simulate failed renewal");
        }
        l();
    }
    let S = tM.hd[n.planIdFromItems]?.premiumType === tM.PremiumTypes.TIER_0,
        N = n.metadata?.ended_at,
        A = null != N ? new Date(N).toISOString().substring(0, 10) : "",
        k = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in hU) ? hU[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        I = n.hasActiveTrial,
        D = n.metadata?.active_discount_id != null;
    return (
        I && k.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        D && k.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== em.Dmq.ACTIVE &&
            k.push({
                id: "dates",
                label: `Dates: ${(0, nM.i$)(n.createdAt, "LL")} - ${(0, nM.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === em.Dmq.PAUSED &&
            k.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in hG ? hG[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: H()(iA.Nr, S ? iA.Qf : iA.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == (a = n.planIdFromItems) ? "No plan id" : a in tM.hd ? tM.hd[a].name : `Unknown plan id ${a}`}`,
                className: oS.lI,
                children: [
                    (0, r.jsx)(o_.C, { items: k, label: "Subscription details" }),
                    I &&
                        (0, r.jsxs)("div", {
                            className: oS.VK,
                            children: [
                                (0, r.jsxs)(K.D, {
                                    onClick: function () {
                                        h(!m);
                                    },
                                    className: oS.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(p.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(ij.A, { direction: m ? ij.A.Directions.UP : ij.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: oS.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(p.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, nM.i$)(n.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    D &&
                        (0, r.jsxs)("div", {
                            className: oS.VK,
                            children: [
                                (0, r.jsxs)(K.D, {
                                    onClick: function () {
                                        v(!g);
                                    },
                                    className: oS.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(p.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(ij.A, { direction: g ? ij.A.Directions.UP : ij.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: oS.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, nM.i$)(
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
                            className: oS.VK,
                            children: [
                                (0, r.jsxs)(K.D, {
                                    onClick: function () {
                                        s(!i);
                                    },
                                    className: oS.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(p.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(ij.A, { direction: i ? ij.A.Directions.UP : ij.A.Directions.DOWN }),
                                    ],
                                }),
                                i &&
                                    (0, r.jsx)("ul", {
                                        className: oS.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(p.E, { variant: "text-md/bold", children: t }),
                                                        (0, r.jsx)(p.E, { variant: "text-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: oS.VK,
                        children: [
                            (0, r.jsxs)(K.D, {
                                onClick: function () {
                                    c(!d);
                                },
                                className: oS.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(p.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(ij.A, { direction: d ? ij.A.Directions.UP : ij.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(q.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(j.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: hB,
                                            onSelectionChange: (e) => {
                                                E({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(q.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(x.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => _(),
                                                        }),
                                                        (0, r.jsx)(x.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Simulate Failed Renewal (Past Due)",
                                                            onClick: (e) => C(),
                                                        }),
                                                        (0, r.jsx)(h$, { subscription: n }),
                                                        (0, r.jsx)(x.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, eY.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(hF, {
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
                                                null !== f &&
                                                    (0, r.jsx)("div", {
                                                        className: oS.z3,
                                                        children: (0, r.jsx)(Y.w, { type: "critical", children: f }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(q.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(sE.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: nC()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => E({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(hR, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(sE.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== A ? nC()(A) : void 0,
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
async function hW() {
    return (
        await lq.Bo.get({
            url: em.Rsh.BILLING_SUBSCRIPTIONS,
            query: { include_inactive: !0, limit: 5 },
            rejectWithError: (0, lq.fT)(),
        })
    ).body.map((e) => hA.A.createFromServer(e));
}
let hz = [
    { id: "nitro-monthly", label: "Nitro Monthly", value: tM.gD.PREMIUM_MONTH_TIER_2 },
    { id: "nitro-yearly", label: "Nitro Yearly", value: tM.gD.PREMIUM_YEAR_TIER_2 },
    { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: tM.gD.PREMIUM_MONTH_TIER_1 },
    { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: tM.gD.PREMIUM_YEAR_TIER_1 },
    { id: "basic-monthly", label: "Basic Monthly", value: tM.gD.PREMIUM_MONTH_TIER_0 },
    { id: "basic-yearly", label: "Basic Yearly", value: tM.gD.PREMIUM_YEAR_TIER_0 },
    { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: tM.gd },
    { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: tM.Uk },
    { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: tM.gD.PREMIUM_GROUP_MONTH },
];
function hH() {
    let e = (0, d.bG)([oe.A], () => oe.A.getPremiumTypeSubscription()),
        t = (0, d.bG)([eo.default], () => eo.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, i] = o.useState([]),
        [s, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                (c(!0), await (0, dz.hP)(), await (0, hN.fetchProfile)(t.id), i(await hW()));
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => l.filter((e) => e.status !== em.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]);
    async function h() {
        (await lq.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: (0, lq.fT)() }),
            await u());
    }
    async function p() {
        (await lq.Bo.del({ url: "/debug/subscription", rejectWithError: (0, lq.fT)() }), await u());
    }
    return (0, r.jsx)(g.Ip, {
        className: tQ.nd,
        children: (0, r.jsxs)("div", {
            className: iA.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: iA.dL,
                    children: [
                        (0, r.jsx)(Q.D, {
                            variant: "heading-lg/semibold",
                            className: tQ.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(ez.K, {
                            "aria-label": "Refresh",
                            icon: iv.RefreshIcon,
                            size: "sm",
                            variant: "icon-only",
                            disabled: s,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: H()([iA.uW, iA.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: hz,
                                    onSelectionChange: n,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: h,
                                }),
                            ],
                        }),
                }),
                null != e && (0, r.jsx)(hV, { subscription: e, onUpdated: u }),
                (0, r.jsx)(Q.D, { variant: "heading-lg/semibold", className: tQ.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: H()([iA.uW, iA.Uo]),
                    children: (0, r.jsx)(x.$, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: p,
                    }),
                }),
                m.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(Q.D, {
                                variant: "heading-lg/semibold",
                                className: tQ.wx,
                                children: "Previous Subscriptions",
                            }),
                            m.map((e) => (0, r.jsx)(hV, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var hK = a(284009),
    hY = a.n(hK),
    hq = a(889137),
    hJ = a(323889),
    hQ = a(412703),
    hX = a(440703),
    hZ = a(267548),
    h0 = a(668824),
    h1 = a(695366),
    h2 = a(993077),
    h3 = a(738822),
    h6 = a(801365),
    h5 = a(792620),
    h8 = a(557637),
    h4 = a(242939),
    h9 = a(717695),
    h7 = a(322338),
    xe = a(127219),
    xt = a(262514),
    xa = a(976014),
    xn = a(317097),
    xl = a(452027),
    xi = a(922016),
    xs = a(714385),
    xr = a(581244);
let xo = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        i = o.useRef(null);
    return (0, r.jsx)(xl.D, {
        label: l,
        children: (0, r.jsx)(xi.Y, {
            targetElementRef: i,
            renderPopout: (e) => (0, r.jsx)(c2.VN, { ...e, value: a, onChange: (e) => n(t, (0, xn.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(K.D, {
                    ...e,
                    innerRef: i,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: xr.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(xs.d, { size: "xs", color: "currentColor", className: xr.WY }),
                }),
        }),
    });
};
var xd = a(346055);
let xc = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(xd.M, {
        children: (0, r.jsx)(h2.Z, {
            className: H()(xr.Rx, { [xr.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: xr.AZ,
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
var xu = a(643374);
let xm = function (e) {
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
            (0, r.jsx)(xl.D, {
                label: i,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(xu.A, {
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
    xh = function (e) {
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
var xx = a(866157);
let xp = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, xx.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
var xg = a(843282),
    xv = a(714269);
let xj = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    xf = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(q.B, {
            gap: 20,
            children: [
                (0, r.jsx)(xg.Pw, {
                    label: "Task Type(s)",
                    className: xv.Z,
                    placeholder: "Select Task Preset",
                    options: xj,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, i, s, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = hQ.n.PLAY_ON_PLAYSTATION in t || hQ.n.PLAY_ON_XBOX in t),
                            (l = hQ.n.PLAY_ON_DESKTOP in t),
                            (i = hQ.n.STREAM_ON_DESKTOP in t),
                            (s = hQ.n.WATCH_VIDEO in t),
                            (r = hQ.n.PLAY_ACTIVITY in t),
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
                                        a[hQ.n.STREAM_ON_DESKTOP] = { type: hQ.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[hQ.n.PLAY_ON_DESKTOP] = { type: hQ.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        ((a[hQ.n.PLAY_ON_PLAYSTATION] = {
                                            type: hQ.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[hQ.n.PLAY_ON_XBOX] = {
                                                type: hQ.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 4:
                                        ((a[hQ.n.PLAY_ON_DESKTOP] = { type: hQ.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[hQ.n.PLAY_ON_PLAYSTATION] = {
                                                type: hQ.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[hQ.n.PLAY_ON_XBOX] = {
                                                type: hQ.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 2:
                                        a[hQ.n.WATCH_VIDEO] = {
                                            type: hQ.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[hQ.n.PLAY_ACTIVITY] = { type: hQ.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / o0.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= o0.A.Seconds.MINUTE;
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
var xb = a(818348);
let xy = function () {
    let e = (0, eg.Ay)();
    return (0, r.jsx)(xl.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(ev.zy, {
                    theme: xb.NJ.LIGHT,
                    isSelected: e === xb.NJ.LIGHT,
                    onSelect: () => (0, c$.u_)({ theme: xb.NJ.LIGHT }),
                }),
                (0, r.jsx)(ev.zy, {
                    theme: xb.NJ.DARK,
                    isSelected: e === xb.NJ.DARK,
                    onSelect: () => (0, c$.u_)({ theme: xb.NJ.DARK }),
                }),
            ],
        }),
    });
};
var xE =
    (((s = {})[(s.UNENROLLED = 0)] = "UNENROLLED"),
    (s[(s.ENROLLED = 1)] = "ENROLLED"),
    (s[(s.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (s[(s.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (s[(s.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (s[(s.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (s[(s.CLAIMED = 6)] = "CLAIMED"),
    s);
let x_ = function (e) {
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
var xC = a(617986);
let xS = ["png", "gif", "webp"],
    xN = [...xS, "jpg", "jpeg"],
    xA = Array.from(new Set([...xN, "gif", "mp4", "webm"]));
function xk() {
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
let xI = "1193992107035983872",
    xD = {
        id: xI,
        preview: !0,
        config: {
            id: xI,
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
                        type: hX.l.REWARD_CODE,
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
                joinOperator: h0.K.AND,
                tasks: {
                    [hQ.n.PLAY_ON_DESKTOP]: { type: hQ.n.PLAY_ON_DESKTOP, target: 300, applications: [{ id: "123" }] },
                },
            },
            features: [],
            sharePolicy: hZ.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function xT() {
    var e;
    let [t, n] = o.useState(xD),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [i, s] = o.useState(xE.UNENROLLED),
        [d, c] = o.useState(!1),
        [u, h] = o.useState(!1),
        [v, j] = o.useState(null),
        f =
            ((e = t.config),
            (0, hq.YW)(e)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function b(e, a) {
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
                    (0, hq.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function y(e, a) {
        let n = t.config.taskConfigV2.tasks,
            i = n[hQ.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [hQ.n.WATCH_VIDEO]: { ...i, assets: s } } },
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
                    (0, hq.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function _(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var i, s;
            l({
                ...t,
                config:
                    ((i = t.config),
                    (s = { [e]: a }),
                    (0, hq.YW)(i)
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
    function C(e, a) {
        l({ ...t, config: { ...t.config, colors: { ...t.config.colors, [e]: a } } });
    }
    function S() {
        (0, h6.tU)(t.config) && (0, xC.hJ)(t, h3.uF.GIFT_INVENTORY_FOR_YOU, h3.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * o0.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => hQ.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    hY()(!1 !== t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[hQ.n.WATCH_VIDEO];
    return (0, r.jsxs)(g.Ip, {
        className: xr.kL,
        children: [
            (0, r.jsx)(Q.D, { variant: "heading-lg/bold", className: xr.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: xr.OA,
                children: (0, r.jsx)(xp, {
                    onSelect: function (e) {
                        (j(e),
                            null == e ||
                                (s(
                                    (function (e) {
                                        if (null == e.userStatus) return xE.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return xE.CLAIMED;
                                        if (null != e.userStatus.completedAt) return xE.COMPLETED_100;
                                        let t = (0, h5.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? xE.COMPLETED_100
                                            : a / n >= 0.75
                                              ? xE.COMPLETED_75
                                              : a / n >= 0.5
                                                ? xE.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? xE.COMPLETED_25
                                                  : xE.ENROLLED;
                                    })(e),
                                ),
                                l(e)));
                    },
                    quest: v,
                }),
            }),
            (0, r.jsx)(Q.D, { variant: "heading-md/semibold", className: xr.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: xr.OA,
                children: (0, r.jsx)(xf, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(Q.D, { variant: "heading-md/semibold", className: xr.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: xr.OA,
                children: [
                    (0, r.jsx)(xh, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: E,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(xh, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: E,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(xh, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: E,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, r.jsx)(xh, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    i = n[hQ.n.WATCH_VIDEO];
                                if (null == i) return;
                                let s = { ...i.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [hQ.n.WATCH_VIDEO]: { ...i, messages: s } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(Q.D, { variant: "heading-md/semibold", className: xr.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: xr.OA,
                children: [
                    (0, r.jsx)(xm, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: b,
                        filters: xA,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(xm, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: b,
                        filters: xA,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(xm, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: b,
                        filters: xA,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(xm, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: b,
                        filters: xA,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(xm, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: b,
                        filters: [...xN, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(xm, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: b,
                        filters: [...xS, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(xm, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: y,
                                    filters: xA,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(xm, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: y,
                                    filters: xA,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(xm, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: y,
                                    filters: xN,
                                    initialValue: k?.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            f.map((e, a) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(Q.D, {
                                variant: "heading-md/semibold",
                                className: xr.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: xr.OA,
                                children: [
                                    (0, r.jsx)(xh, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => _(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(xh, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => _(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== hX.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(xm, {
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
                                                                (0, hq.YW)(i)
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
                                            filters: xA,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(q.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(Q.D, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, r.jsx)(x.$, {
                                                variant: "primary",
                                                text: "Open Reward Modal",
                                                onClick: S,
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
            (0, r.jsx)(Q.D, { variant: "heading-md/semibold", className: xr.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: xr.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: xr.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(xo, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: C,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(xo, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: C,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: xr.OA, children: (0, r.jsx)(xy, {}) }),
                    (0, r.jsx)(x_, {
                        onChange: function (e) {
                            switch ((s(e), e)) {
                                case xE.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case xE.ENROLLED:
                                    l({ ...t, userStatus: xk({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case xE.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: xk({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case xE.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: xk({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case xE.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: xk({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case xE.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: xk({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case xE.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: xk({
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
            (0, r.jsx)(Q.D, { variant: "heading-lg/bold", className: xr.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: xr.$$,
                children: [
                    (0, r.jsxs)(xc, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(Q.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: xr.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(p.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: xr.ok,
                                        children: (0, r.jsx)(h8.y5, {
                                            isPreview: !0,
                                            source: "preview",
                                            adCreativeId: "0",
                                            adCreativeType: hJ.p.QUEST,
                                            children: (0, r.jsx)(h9.A, {
                                                children: (0, r.jsx)(h4.QuestBar, { quest: t }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(xc, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(Q.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(h8.y5, {
                                isPreview: !0,
                                source: "preview",
                                adCreativeId: "0",
                                adCreativeType: hJ.p.QUEST,
                                children: (0, r.jsx)(xa.Ay, {
                                    quest: t,
                                    className: xr.d,
                                    questContent: h3.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: h3.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(xc, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(Q.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(p.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: xr.l4,
                                children: (0, r.jsx)(h8.y5, {
                                    isPreview: !0,
                                    source: "preview",
                                    adCreativeId: "0",
                                    adCreativeType: hJ.p.QUEST,
                                    children: (0, r.jsx)("div", {
                                        className: xr.Jr,
                                        children: (0, r.jsx)(h7.A, {
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
                        className: xr.NY,
                        children: (0, r.jsx)(m.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                c(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(xc, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(Q.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            u
                                ? (0, r.jsx)(xe.l, { questId: t.id })
                                : (0, r.jsx)(
                                      xt.M,
                                      {
                                          quest: t,
                                          location: h3.uF.QUESTS_EMBED,
                                          sourceQuestContent: h3.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: xr.NY,
                        children: (0, r.jsx)(m.d, { label: "Invalid Quests Embed:", checked: u, onChange: h }),
                    }),
                    A &&
                        (0, r.jsxs)(xc, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(Q.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, eY.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("348231"),
                                                a.e("808368"),
                                                a.e("171120"),
                                                a.e("392868"),
                                                a.e("263408"),
                                                a.e("77375"),
                                                a.e("479907"),
                                                a.e("119580"),
                                            ]).then(a.bind(a, 834135));
                                            return (a) =>
                                                (0, r.jsx)(n, {
                                                    ...a,
                                                    openStartClockTime: e,
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: h3.uF.INTERNAL_PREVIEW_TOOL,
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
class xO extends o.Component {
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
                  className: xr.TA,
                  children: [
                      (0, r.jsx)(h1.E, { className: xr.Yw }),
                      (0, r.jsx)(Q.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(x.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(h2.Z, {
                              className: xr.Fx,
                              children: (0, r.jsx)("code", { className: xr.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(xT, {}, t);
    }
}
var xR = a(913122),
    xw = a(839214),
    xM = a(144009),
    xL = a(450827),
    xP = a(626584),
    xU = a(174768),
    xG = a(205761),
    xB = a(860071),
    xF = a(696451),
    x$ = a(149790),
    xV = a(926140);
let xW = new xP.A("SearchDebugUtils");
function xz() {
    xW.info("--------------------------");
}
function xH() {
    let e = xU.A.getProps();
    (xW.info("START Quick Switcher State"),
        xW.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((xW.info(`Result Type: ${e.type}`), e.type)) {
                case xV.rD.GUILD:
                    xW.info(`guild id: ${e.record.id}`);
                    break;
                case xV.rD.TEXT_CHANNEL:
                case xV.rD.VOICE_CHANNEL:
                    (xW.info(`channel type: ${e.record.type}`),
                        xW.info(`channel id: ${e.record.id}`),
                        xW.info(`name: ${e.record.name}`));
                    break;
                case xV.rD.DM:
                    (xW.info(`channel type: ${e.record.type}`),
                        xW.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (xW.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = eo.default.getUser(e);
                                null != t &&
                                    (xW.info(`recipient username: ${t.username}`),
                                    xW.info(`recipient global name: ${ex.Ay.getGlobalName(t)}`),
                                    xW.info(`recipient nickname: ${aM.A.getNickname(t.id)}`));
                            })));
                    break;
                case xV.rD.GROUP_DM:
                    (xW.info(`channel type: ${e.record.type}`),
                        xW.info(`channel id: ${e.record.id}`),
                        xW.info(`name: ${(0, aR.m1)(e.record, eo.default, aM.A)}`),
                        e.record.isGroupDM() &&
                            (xW.info(`default name: ${(0, aR.ks)(e.record, eo.default, aM.A)}`),
                            xW.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = eo.default.getUser(e);
                                null != t &&
                                    (xW.info(`recipient username: ${t.username}`),
                                    xW.info(`recipient global name: ${ex.Ay.getGlobalName(t)}`),
                                    xW.info(`recipient nickname: ${aM.A.getNickname(t.id)}`));
                            })));
                    break;
                case xV.rD.USER:
                    (xW.info(`user id: ${e.record.id}`),
                        xW.info(`username: ${e.record.username}`),
                        xW.info(`global name: ${ex.Ay.getGlobalName(e.record)}`),
                        xW.info(`nickname: ${aM.A.getNickname(e.record.id)}`),
                        xW.info(`guild nicknames: ${xF.Ay.getNicknames(e.record.id)}`));
            }
            (xW.info(`frecency score: ${xG.A.getScoreWithoutFetchingLatest(e.record.id)}`), xz());
        }),
        xW.info("END Quick Switcher State\n"));
}
async function xK() {
    xW.info("START User Search Worker State");
    let e = await xL.A.requestDebugState();
    null == e
        ? xW.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              (xW.info(`id: ${t}`),
                  xW.info(`username: ${a.username}`),
                  xW.info(`global name: ${a.globalName}`),
                  xW.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      (xW.info(`guild id: ${t}`), xW.info(`guild nickname: ${a}`));
                  }),
                  xz());
          }),
          xW.info("END User Search Worker State\n"));
}
async function xY() {
    let e = await xL.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = eo.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = hD.default.keys(a),
        i = [];
    return (
        l.forEach((e) => {
            n.has(e) || i.push(e);
        }),
        i
    );
}
async function xq(e) {
    let t = await xL.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = no.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = xF.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let i = xB.A.getDebugState(e);
    return { user: eo.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: i };
}
var xJ = a(143919);
function xQ(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(x.$, {
                variant: "primary",
                onClick: l,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : i,
            }),
            null != n &&
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: xJ.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: xJ.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let xX = (0, xw.D)(() => ({
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
function xZ() {
    let e = xX.useField("includeFrecency"),
        t = xX.useField("includeFriends"),
        a = xX.useField("includeDMs"),
        n = xX.useField("includeGDMs"),
        l = xX.useField("includeQuickSwitcherState"),
        i = xX.useField("includeUserSearchWorkerState"),
        s = xX.useField("isUploading"),
        d = xX.useField("isSuccess"),
        c = xX.useField("errorMessage"),
        h = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: i,
                isUploading: s,
            } = xX.getState();
            if (!s)
                try {
                    let s, r, o, d, c, u, m, h, x, p, g, v;
                    (xX.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((s = aM.A.getFriendIDs()),
                            xW.info("START Discord Friends"),
                            s.forEach((e) => {
                                let t = eo.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = ex.Ay.getGlobalName(t),
                                    l = aM.A.getNickname(t.id),
                                    i = xF.Ay.getNicknames(t.id);
                                (xW.info(`username: ${a}`),
                                    xW.info(`global name: ${n}`),
                                    xW.info(`nickname: ${l}`),
                                    xW.info(`guild nicknames: ${i}`),
                                    xz());
                            }),
                            xW.info("END Discord Friends\n")),
                        a &&
                            ((r = aw.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                (e.isGroupDM() && o.push(e), e.isDM() && d.push(e));
                            }),
                            xW.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, aR.m1)(e, eo.default, aM.A),
                                    a = (0, aR.ks)(e, eo.default, aM.A);
                                (xW.info(`id: ${e.id}`),
                                    xW.info(`name: ${t}`),
                                    xW.info(`default name: ${a}`),
                                    xW.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = eo.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ex.Ay.getGlobalName(t),
                                            l = aM.A.getNickname(t.id),
                                            i = xF.Ay.getNicknames(t.id);
                                        (xW.info(`username: ${a}`),
                                            xW.info(`global name: ${n}`),
                                            xW.info(`nickname: ${l}`),
                                            xW.info(`guild nicknames: ${i}`),
                                            xz());
                                    }));
                            }),
                            xW.info("END Logging Group DM Channels\n"),
                            xW.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, aR.m1)(e, eo.default, aM.A);
                                (xW.info(`id: ${e.id}`), xW.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = eo.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = ex.Ay.getGlobalName(n),
                                    s = aM.A.getNickname(n.id);
                                (xW.info(`username: ${l}`),
                                    xW.info(`global name: ${i}`),
                                    xW.info(`nickname: ${s}`),
                                    xz());
                            }),
                            xW.info("END Logging DM Channels\n")),
                        n &&
                            ((c = aw.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                (e.isGroupDM() && u.push(e), e.isDM() && m.push(e));
                            }),
                            xW.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, aR.m1)(e, eo.default, aM.A),
                                    a = (0, aR.ks)(e, eo.default, aM.A);
                                (xW.info(`id: ${e.id}`),
                                    xW.info(`name: ${t}`),
                                    xW.info(`default name: ${a}`),
                                    xW.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = eo.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ex.Ay.getGlobalName(t),
                                            l = aM.A.getNickname(t.id),
                                            i = xF.Ay.getNicknames(t.id);
                                        (xW.info(`username: ${a}`),
                                            xW.info(`global name: ${n}`),
                                            xW.info(`nickname: ${l}`),
                                            xW.info(`guild nicknames: ${i}`),
                                            xz());
                                    }));
                            }),
                            xW.info("END Logging Group DM Channels\n"),
                            xW.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, aR.m1)(e, eo.default, aM.A);
                                (xW.info(`id: ${e.id}`), xW.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = eo.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = ex.Ay.getGlobalName(n),
                                    s = aM.A.getNickname(n.id);
                                (xW.info(`username: ${l}`),
                                    xW.info(`global name: ${i}`),
                                    xW.info(`nickname: ${s}`),
                                    xz());
                            }),
                            xW.info("END Logging DM Channels\n")),
                        e &&
                            ((h = xG.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, x$.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            xW.info("START Frecency"),
                            xW.info("Guilds"),
                            x.forEach((e) => {
                                let t = xG.A.getScoreWithoutFetchingLatest(e.id);
                                xW.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            xz(),
                            xW.info("DM Channels"),
                            g.forEach((e) => {
                                let t = xG.A.getScoreWithoutFetchingLatest(e.id);
                                xW.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xz(),
                            xW.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = xG.A.getScoreWithoutFetchingLatest(e.id);
                                (xW.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    xW.info(`default name: ${(0, aR.ks)(e, eo.default, aM.A)}`),
                                    xW.info(`name: ${(0, aR.m1)(e, eo.default, aM.A)}`));
                            }),
                            xz(),
                            xW.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = xG.A.getScoreWithoutFetchingLatest(e.id);
                                xW.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xz(),
                            xW.info("END Frecency\n")),
                        l && xH(),
                        i && xK(),
                        await (0, xM.a)(em.Umv.WEB_APP),
                        xX.setState({ isSuccess: !0, errorMessage: null }));
                } catch (t) {
                    let e = new xR.LG(t);
                    xX.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    xX.setState({ isUploading: !1 });
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
                onChange: () => xX.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(m.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => xX.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(m.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => xX.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(m.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => xX.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(m.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => xX.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(m.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: i,
                onChange: () => xX.setState({ includeUserSearchWorkerState: !i }),
            }),
            (0, r.jsx)(xQ, {
                isUploading: s,
                isSuccess: d,
                errorMessage: c,
                onClick: h,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let x0 = (0, xw.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function x1() {
    let e = x0.useField("userIds"),
        t = x0.useField("isLoading"),
        a = x0.useField("isSuccess"),
        n = x0.useField("errorMessage"),
        l = x0.useField("lastRunAt"),
        i = o.useCallback(async () => {
            x0.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await xY();
                x0.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                x0.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                x0.setState({ isLoading: !1 });
            }
        }, []),
        s = o.useMemo(
            () =>
                e.map((e) => {
                    let t = eo.default.getUser(e),
                        a = null != t ? ex.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: xJ.J1,
                            children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: `${a} (${e})` }),
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
                (0, r.jsx)(x.$, { onClick: i, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: xJ.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: xJ.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(p.E, { variant: "text-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: xJ.uk, children: s }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(p.E, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let x2 = (0, xw.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function x3() {
    let e = x2.useField("isRecording"),
        t = x2.useField("isUploading"),
        a = x2.useField("isSuccess"),
        n = x2.useField("errorMessage"),
        l = o.useRef([]),
        i = o.useRef(""),
        s = o.useCallback(() => {
            let { results: e, query: t } = xU.A.getProps();
            (l.current !== e || i.current !== t) && ((l.current = e), (i.current = t), xH());
        }, []);
    o.useEffect(() => {
        if (e) return (xU.A.addChangeListener(s), () => xU.A.removeChangeListener(s));
    }, [s, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = x2.getState();
        if (!e)
            try {
                (x2.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, xM.a)(em.Umv.WEB_APP),
                    x2.setState({ isSuccess: !0, errorMessage: null }));
            } catch (t) {
                let e = new xR.LG(t);
                x2.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                x2.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(m0.p, {
                messageType: m0.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(ne.e, {
                children: [
                    (0, r.jsx)(x.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => x2.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(xQ, {
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
var x6 = a(145497);
let x5 = (0, xw.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function x8(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: xJ.J1,
                children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: xJ.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: xJ.J1,
                            children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = no.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: xJ.J1,
                                      children: [
                                          (0, r.jsx)(x6.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(p.E, { variant: "text-sm/normal", children: t.name }),
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
function x4(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: i } = t,
        s = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(se.y, { size: "sm", color: eq.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(h1.E, { size: "sm", color: eq.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: xJ.N6,
        children: [
            (0, r.jsxs)("div", {
                className: xJ.J1,
                children: [
                    s({ ok: null != a }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: xJ.uk,
                    children: (0, r.jsx)("div", {
                        className: xJ.J1,
                        children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: xJ.J1,
                children: [
                    s({ ok: null != n }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        children:
                            null != n
                                ? "User exists in User Search Worker"
                                : "User does not exist in User Search Worker",
                    }),
                ],
            }),
            null != n &&
                (0, r.jsxs)("div", {
                    className: xJ.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: xJ.J1,
                            children: (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xJ.J1,
                            children: (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xJ.J1,
                            children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: xJ.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: xJ.J1,
                                        children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = no.A.getGuild(t),
                                        l = aw.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: xJ.J1,
                                            children: [
                                                null != n && (0, r.jsx)(x6.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, aR.m1)(l, eo.default, aM.A),
                                                    }),
                                                (0, r.jsx)(p.E, { variant: "text-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: ` - ${a}` }),
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
                className: xJ.J1,
                children: [
                    s({ ok: l.length > 0 }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: xJ.uk,
                    children: l.map((e) => {
                        let t = no.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: xJ.J1,
                                children: [
                                    (0, r.jsx)(x6.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(p.E, {
                                        variant: "text-sm/normal",
                                        children: [t.name, "" !== a ? ` - ${a}` : ""],
                                    }),
                                ],
                            },
                            `${e.guildId}`,
                        );
                    }),
                }),
            (0, r.jsxs)("div", {
                className: xJ.J1,
                children: [
                    (0, r.jsx)(c0.CircleInformationIcon, { size: "sm" }),
                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != i &&
                (0, r.jsxs)("div", {
                    className: xJ.uk,
                    children: [
                        (0, r.jsx)(x8, { title: "Pending Guild Member Requests:", guildIds: i.pendingRequestGuildIds }),
                        (0, r.jsx)(x8, { title: "Sent Guild Member Requests:", guildIds: i.sentRequestGuildIds }),
                        (0, r.jsx)(x8, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: i.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function x9() {
    let e = o.useCallback((e) => {
            x5.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = x5.getState();
            if (!t && null != e) {
                x5.setState({ loading: !0, error: null });
                try {
                    let t = await xq(e);
                    x5.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new xR.LG(t);
                    x5.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    x5.setState({ loading: !1 });
                }
            }
        }, []),
        a = x5.useField("loading");
    return (0, r.jsxs)("div", {
        className: xJ.$n,
        children: [
            (0, r.jsx)(f.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(x.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function x7() {
    let e = x5.useField("state"),
        t = x5.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(x9, {}),
            null != t &&
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: xJ.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(x4, { userState: e }),
        ],
    });
}
function pe() {
    return (0, r.jsxs)(g.Ip, {
        className: xJ.nd,
        children: [
            (0, r.jsx)(x3, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xZ, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(x7, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(x1, {}),
        ],
    });
}
var pt = a(761508),
    pa = a(599147),
    pn = a(808411),
    pl = a(624716),
    pi = a(398590),
    ps = a(764451),
    pr = a(758659),
    po = a(349738),
    pd = a(865868);
let pc = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    pu = {
        "virtual-currency": function () {
            return (0, r.jsxs)(po.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(x.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = pr.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (ps.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, pi.id)(em.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: function () {
            return (0, r.jsxs)("div", { children: [(0, r.jsx)(pa.o, {}), (0, r.jsx)(pn.A, {}), (0, r.jsx)(pl.A, {})] });
        },
    };
function pm() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => pu[e], [e]);
    return (0, r.jsxs)("div", {
        className: H()(tQ.nd, pd.kL),
        children: [
            (0, r.jsx)(pt.V, {
                className: pd.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: pc.map((e) => (0, r.jsx)(pt.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(g.Ar, { children: (0, r.jsx)("div", { className: pd.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var ph = a(718446),
    px = a(766075),
    pp = a(355097);
let pg = (0, xw.D)(() => ({ urlString: "", error: null })),
    pv = Object.entries(pp.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function pj() {
    let [e, t] = o.useState(),
        a = pg.useField("urlString"),
        n = pg.useField("error"),
        l = o.useCallback(() => {
            let e = pg.getField("urlString");
            if (null == e || "" === e) return void pg.setState({ error: "URL is required" });
            let t = (0, ph.parseSettingsUrl)({ path: e });
            ((0, ph.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? pg.setState({ error: "String did not match expected format" })
                : (0, px.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(au.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: pv,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = pp.od[e].split("/");
                        pg.setState({ urlString: em.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(f.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => pg.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(ne.e, {
                children: [
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "secondary",
                        onClick: () => (0, nw.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var pf = a(780964);
let pb = (0, xw.D)(() => ({ setting: pf.X.ACCOUNT_PANEL }));
function py() {
    let e = pb.useField("setting"),
        t = o.useCallback(() => {
            (0, px.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(pf.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(au.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => pb.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(x.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var pE = a(963935),
    p_ = a(2223),
    pC = a(555738);
function pS(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [i, s] = o.useState(a),
        d = o.useCallback(() => {
            s(!i);
        }, [i]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "text-feedback-warning";
    function u(e) {
        return (0, r.jsx)(p.E, { variant: e, color: c, children: t });
    }
    return null == l
        ? (0, r.jsx)("div", { className: pC.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: pC.NF,
              children: [
                  (0, r.jsxs)(K.D, {
                      className: pC.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(ij.A, {
                              direction: i ? ij.A.Directions.DOWN : ij.A.Directions.RIGHT,
                              className: pC.D,
                          }),
                      ],
                  }),
                  i && (0, r.jsx)("div", { className: pC.m4, children: l }),
              ],
          });
}
function pN(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case pE.Z6.ROOT:
                    return "migrated-root";
                case pE.Z6.SECTION:
                case pE.Z6.PANEL:
                case pE.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        i = "migrated" === l ? "migrated" : void 0,
        s = null;
    return (
        (0, pE.nW)(t) &&
            t.layout.length > 0 &&
            (s = t.layout.map((e) => (0, r.jsx)(pN, { setting: e, depth: a + 1, inheritedHighlightMode: i }, e.key))),
        (0, r.jsx)(pS, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: s })
    );
}
function pA() {
    let { node: e } = (0, es.Ay)(p_.D, ""),
        t = (0, es.KA)();
    return (0, r.jsxs)(u.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(m.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: es.jL,
            }),
            (0, r.jsx)(pN, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var pk = a(728564);
function pI() {
    return (0, r.jsxs)(g.Ip, {
        className: pk.n,
        children: [
            (0, r.jsx)(py, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(pj, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(pA, {}),
        ],
    });
}
function pD() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: a7.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(n3, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: a7.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(mZ, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: a7.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(mY, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: a7.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(is, {}),
            },
        ];
        return (
            a0.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: a7.fu.SHOP, render: () => (0, r.jsx)(mO, {}) }),
                e.push({
                    id: "storefront",
                    name: "Storefront Overrides",
                    group: a7.fu.STOREFRONT,
                    render: () => (0, r.jsx)(mB, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: a7.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(d8, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: a7.fu.SHOP,
                    render: () => (0, r.jsx)(tW, {}),
                }),
                e.push({
                    id: "shop_game_server_hosting",
                    name: "GSH",
                    group: a7.fu.SHOP,
                    tags: ["game server", "gsh", "highlight", "checkout"],
                    render: () => (0, r.jsx)(ay, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: a7.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(ux, {}),
                }),
                e.push({
                    id: "routing_key",
                    name: "Routing Key",
                    group: a7.fu.DEVELOPMENT,
                    tags: ["routing", "traffic", "routing-key", "network"],
                    render: () => (0, r.jsx)(uS, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: a7.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(id, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: a7.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(cy.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: a7.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(nE, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: a7.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(ip, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: a7.fu.GAMES, render: () => (0, r.jsx)(dT, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: a7.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(sy, {}),
                }),
                a1.isPlatformEmbedded &&
                    (e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: a7.fu.GAMES,
                        render: () => (0, r.jsx)(lY, {}),
                    }),
                    e.push({
                        id: "running_game_detection",
                        name: "Running Game Detection",
                        group: a7.fu.GAMES,
                        tags: ["detection", "filter", "blocklist", "native"],
                        render: () => (0, r.jsx)(uT, {}),
                    }),
                    e.push({
                        id: "game_icon_extractor",
                        name: "Game Icon Extractor",
                        group: a7.fu.GAMES,
                        tags: ["ico", "icon", "png", "rtc"],
                        render: () => (0, r.jsx)(iL, {}),
                    })),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: a7.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, r.jsx)(lB, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: a7.fu.GAMES, render: () => (0, r.jsx)(mw, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: a7.fu.GAMES,
                    render: () => (0, r.jsx)(nx, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: a7.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(aT, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: a7.fu.GAMES,
                    render: () => (0, r.jsx)(aZ, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: a7.fu.GAMES,
                    render: () => (0, r.jsx)(aj, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: a7.fu.USERS,
                    render: () => (0, r.jsx)(pe, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: a7.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(W, {}) })),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                e.push({
                    id: "partner_perks",
                    name: "Partner Perks",
                    group: a7.fu.PREMIUM,
                    tags: ["xgp"],
                    render: () => (0, r.jsx)(d$, {}),
                }),
            e.push({
                id: "rive",
                name: "Rive",
                group: a7.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(uj, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: a7.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(re, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: a7.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rL, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: a7.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(r_, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: a7.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(lc, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: a7.fu.UI, render: () => (0, r.jsx)(lL, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: a7.fu.UI,
                render: () => (0, r.jsx)(cZ, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: a7.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(iW, { devSettingsCategory: a2.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: a7.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(r5, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: a7.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(iW, { devSettingsCategory: a2.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: a7.fu.USERS, render: () => (0, r.jsx)(cL, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: a7.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(oi, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: a7.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rF, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: a7.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rT, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: a7.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(nj, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: a7.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(ld, {}),
            }),
            a0.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: a7.fu.USERS,
                    render: () => (0, r.jsx)(ad, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: a7.fu.USERS,
                    render: () => (0, r.jsx)(aF, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: a7.fu.DCF, render: () => (0, r.jsx)(lO, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: a7.fu.DCF, render: () => (0, r.jsx)(lv, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: a7.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(rj, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: a7.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up", "perks", "sources", "bitmask"],
                render: () => (0, r.jsx)(cN, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: a7.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(oE, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: a7.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(cu, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: a7.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(ok, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: a7.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(hH, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: a7.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(iT, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: a7.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(sI, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: a7.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(hS, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: a7.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(hu, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: a7.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(hh, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: a7.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(rx, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: a7.fu.BOOSTING, render: () => (0, r.jsx)(iF, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: a7.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rS, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: a7.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(pI, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: a7.fu.QUESTS,
                render: () => (0, r.jsx)(az, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: a7.fu.QUESTS,
                render: () => (0, r.jsx)(m3, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: a7.fu.BILLING,
                render: () => (0, r.jsx)(pm, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: a7.fu.QUESTS,
                render: () => (0, r.jsx)(xO, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: a7.fu.USERS,
                render: () => (0, r.jsx)(c8, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: a7.fu.USERS,
                render: () => (0, r.jsx)(ll, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: a7.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lZ, {}),
            }),
            e
        );
    }, []);
}
