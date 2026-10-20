(a.d(t, { x: () => jt }), a(321073));
var n,
    l,
    i,
    s,
    r,
    o = a(477900),
    d = a(582128),
    c = a(17928),
    u = a(314116),
    m = a(270003),
    h = a(193249),
    x = a(532446),
    p = a(821609),
    g = a(834730),
    v = a(364522),
    j = a(611677),
    f = a(691885),
    b = a(95477),
    y = a(404778),
    E = a(77729),
    C = a(952818),
    S = a(905552),
    _ = a(360906),
    N = a(157257),
    A = a(507868),
    k = a(274372),
    I = a(341923),
    D = a(614584),
    T = a(423341),
    R = a(574206),
    O = a(564973),
    w = a(227628),
    M = a(468550);
let P = (0, a(196765).v)(() => ({ enabled: !1, pending: null, lastResult: null }));
function L(e) {
    P.setState({ enabled: e });
}
function U(e) {
    P.setState({ pending: e });
}
function G(e) {
    P.setState({ lastResult: e });
}
var F = a(781710),
    B = a(696016),
    $ = a(264572).Buffer;
function V() {
    let e = P((e) => e.enabled),
        t = P((e) => e.pending),
        a = P((e) => e.lastResult),
        n = d.useCallback(async (e, t, a, n) => {
            let l = _.Ay.getMediaEngine();
            if (null == l.setClipsPerfMonitoring) return (G("setClipsPerfMonitoring unsupported in this build"), null);
            U(n);
            try {
                let n = await l.setClipsPerfMonitoring(e, t, a);
                return (L(n.enabled), n);
            } catch (e) {
                return (G(`${n} failed: ${e instanceof Error ? e.message : String(e)}`), null);
            } finally {
                U(null);
            }
        }, []),
        l = d.useCallback(
            async (t) => {
                L(t);
                let a = await n(t, !1, !1, t ? "enable" : "disable");
                null != a ? G(`recorder ${a.enabled ? "enabled" : "disabled"}`) : L(e);
            },
            [n, e],
        ),
        i = d.useCallback(async () => {
            let t = await n(e, !0, !1, "save");
            if (null == t) return;
            if ("" === t.html) return void G("save: server returned empty html");
            let a = `clips-perf-${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            try {
                let e = $.from(t.html, "utf8"),
                    n = await E.A.fileManager.saveWithDialog2(e, a);
                if (null != n && !0 === n.canceledByUser) return void G("save: canceled");
                G(`saved ${t.eventCount} events (${t.html.length} bytes)`);
            } catch (e) {
                G(`save failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, [n, e]),
        s = d.useCallback(async () => {
            let t = await n(e, !1, !0, "clear");
            null != t && G(`cleared ${t.eventCount} events`);
        }, [n, e]);
    return (0, o.jsxs)(m.n, {
        label: "Clips v3 Performance",
        children: [
            (0, o.jsx)(h.d, {
                label: "Record Clips v3 performance",
                description: "Toggles the in-process perf recorder inside discord_clips.exe.",
                checked: e,
                disabled: null != t,
                onChange: l,
            }),
            (0, o.jsxs)(x.M, {
                children: [
                    (0, o.jsx)(p.$, { text: "Save as file...", disabled: null != t, onClick: i }),
                    (0, o.jsx)(p.$, { text: "Clear recording", variant: "secondary", disabled: null != t, onClick: s }),
                ],
            }),
            (null != t || null != a) &&
                (0, o.jsx)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: null != t ? `working: ${t}...` : a,
                }),
        ],
    });
}
let W = [
    { label: "Laughter Model", flag: B.pZ.LAUGHTER },
    { label: "Shouting Model", flag: B.pZ.SHOUTING },
    { label: "Events", flag: B.pZ.GAME_EVENTS },
];
function H() {
    let e = (0, c.bG)([A.A], () => A.A.isStaffBypassDisabled()),
        t = (0, c.bG)([A.A], () => A.A.isStaffBypassActive()),
        a = (0, c.bG)([A.A], () => A.A.hasLoadedCapabilities()),
        n = (0, c.bG)([A.A], () => A.A.getGameCapabilities().size),
        l = (0, c.bG)([C.Ay], () => C.Ay.getVisibleGame()),
        i = l?.id,
        s = (0, c.bG)([A.A], () => A.A.getCapabilities(i), [i]),
        r = (0, c.bG)([A.A], () => null != i && A.A.getGameCapabilities().has(i), [i]),
        d = (0, I.GZ)(i);
    return (0, o.jsxs)(m.n, {
        label: "Autoclipping Game Capabilities",
        children: [
            (0, o.jsx)(h.d, {
                label: "Ignore staff bypass",
                description:
                    "Staff normally get autoclipping for every game. Turn this on to be treated as a regular user, so autoclipping follows the server capabilities map. Resets to off each time Discord launches.",
                checked: e,
                onChange: D.jE,
            }),
            (0, o.jsxs)(g.E, {
                variant: "text-md/normal",
                children: ["capabilities: ", a ? `loaded, ${n} game(s)` : "not loaded yet"],
            }),
            (0, o.jsxs)(g.E, { variant: "text-md/normal", children: ["staff bypass active: ", String(t)] }),
            null == l
                ? (0, o.jsx)(g.E, { variant: "text-md/normal", children: "no visible game running" })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsxs)(g.E, { variant: "text-md/normal", children: [l.name, " (", l.id, ")"] }),
                          (0, o.jsxs)(g.E, {
                              variant: "text-md/normal",
                              children: ["autoclipping: ", d ? "Yes" : "No"],
                          }),
                          (0, o.jsxs)(g.E, {
                              variant: "text-md/normal",
                              children: ["in capabilities map: ", r ? "Yes" : "No", " (bitmask ", s, ")"],
                          }),
                          W.map((e) => {
                              let { label: t, flag: a } = e;
                              return (0, o.jsxs)(
                                  g.E,
                                  { variant: "text-md/normal", children: [t, ": ", (s & a) != 0 ? "Yes" : "No"] },
                                  t,
                              );
                          }),
                          !r &&
                              d &&
                              (0, o.jsx)(g.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children:
                                      'This game isn\'t in the map \u2014 autoclipping is on via the staff bypass, so every capability above reads No. Turn on "Ignore staff bypass" to see what a regular user gets.',
                              }),
                      ],
                  }),
            (0, o.jsx)(p.$, {
                text: "refetch capabilities",
                variant: "secondary",
                disabled: null == i,
                onClick: () => {
                    null != i && O.b.refetchMany([i]);
                },
            }),
        ],
    });
}
function z(e, t) {
    let a = new R.k(e);
    for (let e of t) a.recordSavedClip(e);
    return (a.end(), a);
}
function K() {
    let e = (0, w.MZ)((e) => e.isOpen),
        t = (0, M.sY)((e) => e.isOpen),
        [a, n] = d.useState(3),
        l = d.useCallback((e) => {
            let t = Object.values(k.Ay.getClips()),
                a = t.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = t.filter((e) => e.applicationId === n).slice(0, e);
            (k.Ay.devSetLastClipsSession(z(n, l)), (0, M.M8)(n));
        }, []),
        i = d.useCallback(
            (e) => {
                e ? l(a) : (0, M.kF)();
            },
            [l, a],
        ),
        s = d.useCallback(() => {
            let e = Object.values(k.Ay.getClips()),
                t = (0, S.A)(C.Ay, N.A),
                a =
                    (t?.id != null ? e.find((e) => e.applicationId === t.id) : void 0) ??
                    e.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = e.filter((e) => e.applicationId === n).slice(0, 10);
            (k.Ay.devSetLastClipsSession(z(n, l)), (0, w.w9)());
        }, []),
        r = d.useCallback(
            (e) => {
                e ? s() : (0, w.yj)();
            },
            [s],
        ),
        g = d.useCallback(
            (e) => {
                (n(e), t && l(e));
            },
            [l, t],
        ),
        [_, A] = d.useState(B.rb.KILL),
        [I, R] = d.useState(1),
        [O, P] = d.useState(""),
        L = (0, c.bG)([k.Ay], () => k.Ay.isAutoStashEnabled()),
        U = d.useCallback((e) => {
            e
                ? (0, u.A)({
                      title: "Stash all gaming sessions?",
                      subtitle:
                          "Every gaming session will be stashed to your Desktop (inside the `decider_stash` folder) when it ends. This setting is not persistent \u2014 it resets to off each time Discord launches.",
                      confirmText: "Enable",
                      variant: "primary",
                      onConfirm: () => {
                          D.mN(!0);
                      },
                  })
                : D.mN(!1);
        }, []),
        [G, $] = d.useState([]),
        [W, K] = d.useState(void 0),
        Y = d.useCallback((e) => {
            ($(e), K((t) => (null != t && e.includes(t) ? t : e[0])));
        }, []),
        q = d.useCallback(async () => {
            let e = E.A.clips.debugListStashedClipDeciderSessions;
            null != e && Y(await e());
        }, [Y]);
    return (
        d.useEffect(() => {
            let e = !0,
                t = E.A.clips.debugListStashedClipDeciderSessions;
            if (null != t)
                return (
                    t().then((t) => {
                        e && Y(t);
                    }),
                    () => {
                        e = !1;
                    }
                );
        }, [Y]),
        (0, o.jsx)(v.Ip, {
            children: (0, o.jsxs)(j.l, {
                children: [
                    (0, o.jsx)(m.n, {
                        label: "Send Test Signals",
                        children: (0, o.jsxs)(x.M, {
                            children: [
                                (0, o.jsx)(p.$, { text: "Manual", onClick: () => D.Ts({ type: B.Gy.MANUAL }) }),
                                (0, o.jsx)(p.$, {
                                    text: "Distributed",
                                    onClick: () =>
                                        D.Ts({
                                            type: B.Gy.DISTRIBUTED,
                                            remoteTriggerUserId: "123",
                                            remoteTriggerClipId: "456",
                                        }),
                                }),
                                (0, o.jsx)(p.$, {
                                    text: "Shouting",
                                    onClick: () => D.Ts({ type: B.Gy.SHOUTING, userId: "123", confidence: 1 }),
                                }),
                                (0, o.jsx)(p.$, {
                                    text: "Laughter",
                                    onClick: () => T.A.debugCreateRankableLaughterClip(),
                                }),
                            ],
                        }),
                    }),
                    (0, o.jsxs)(m.n, {
                        label: "Game Event Creator",
                        children: [
                            (0, o.jsxs)(x.M, {
                                children: [
                                    (0, o.jsx)(f.l, {
                                        label: "Event Type",
                                        value: _,
                                        onSelectionChange: (e) => A(e),
                                        options: [
                                            { id: "kill", label: "Kill", value: B.rb.KILL },
                                            { id: "multikill", label: "Multikill", value: B.rb.MULTIKILL },
                                            { id: "death", label: "Death", value: B.rb.DEATH },
                                            { id: "assist", label: "Assist", value: B.rb.ASSIST },
                                            { id: "item", label: "Item", value: B.rb.ITEM },
                                            { id: "victory", label: "Victory", value: B.rb.VICTORY },
                                            { id: "defeat", label: "Defeat", value: B.rb.DEFEAT },
                                            { id: "level_up", label: "Level Up", value: B.rb.LEVEL_UP },
                                            { id: "treasure", label: "Treasure", value: B.rb.TREASURE },
                                            {
                                                id: "objective_kill",
                                                label: "Objective Kill",
                                                value: B.rb.OBJECTIVE_KILL,
                                            },
                                        ],
                                        selectionMode: "single",
                                        fullWidth: !0,
                                    }),
                                    (0, o.jsx)(f.l, {
                                        label: "Importance",
                                        value: I,
                                        onSelectionChange: R,
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
                            (0, o.jsx)(b.k, {
                                label: "Description (optional)",
                                value: O,
                                onChange: P,
                                placeholder: "e.g., Killed enemy ADC in bot lane",
                            }),
                            (0, o.jsx)(p.$, {
                                text: "Create Game Event",
                                onClick: () => {
                                    D.Ts({ type: B.Gy.GAME_EVENT, eventType: _, importance: I, description: O });
                                },
                            }),
                            (0, o.jsx)(h.d, {
                                label: "Auto-stash decider data",
                                description:
                                    "Stashes every gaming session to your Desktop when it ends. Resets to off on each Discord launch.",
                                checked: L,
                                onChange: U,
                            }),
                            (0, o.jsx)(f.l, {
                                label: "Stash session (re-run ranking)",
                                value: W,
                                onSelectionChange: (e) => K(e),
                                options: G.map((e) => ({ id: e, label: e, value: e })),
                                placeholder: 0 === G.length ? "No stashed sessions" : "Most recent",
                                disabled: 0 === G.length,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, o.jsxs)(x.M, {
                                children: [
                                    (0, o.jsx)(p.$, {
                                        text: "re-run ranking",
                                        onClick: () => {
                                            T.i.debugRerunRanking(W).catch((e) => {
                                                B.nx.error("re-run ranking failed", e);
                                            });
                                        },
                                    }),
                                    (0, o.jsx)(p.$, {
                                        text: "run automontage",
                                        onClick: () => {
                                            T.i.debugRunAutoMontage(W).catch((e) => {
                                                B.nx.error("run automontage failed", e);
                                            });
                                        },
                                    }),
                                    (0, o.jsx)(p.$, {
                                        text: "refresh sessions",
                                        variant: "secondary",
                                        onClick: () => {
                                            q();
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, o.jsx)(m.n, { label: "Clip Metadata Tool", children: (0, o.jsx)(F.A, {}) }),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsx)(V, {}),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsx)(H, {}),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsxs)(m.n, {
                        label: "Reminder UI",
                        children: [
                            (0, o.jsx)(h.d, {
                                label: "Clips Quick Bar",
                                description:
                                    "Force-show the inline quick bar above the account panel. Fabricates a session (up to 10 clips) from your recent clips so it can be tested without capturing a real game session.",
                                checked: e,
                                onChange: r,
                            }),
                            (0, o.jsx)(h.d, {
                                label: "Clips Reminder",
                                description:
                                    "Force-show the post-session ClipsReminder panel. Fabricates a session from your most recent clips (and game) so it can be tested without capturing a real game session.",
                                checked: t,
                                onChange: i,
                            }),
                            (0, o.jsx)(f.l, {
                                label: "Clip count",
                                value: a,
                                onSelectionChange: g,
                                options: [
                                    { id: "1", label: "1 clip", value: 1 },
                                    { id: "2", label: "2 clips", value: 2 },
                                    { id: "3", label: "3 clips", value: 3 },
                                ],
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var Y = a(503698),
    q = a.n(Y),
    J = a(939249),
    Q = a(683071),
    X = a(297264),
    Z = a(538064),
    ee = a(265059),
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
    eh = a(964570),
    ex = a(427262);
function ep(e) {
    let { nameplate: t } = e,
        a = (0, c.bG)([eo.default], () => eo.default.getCurrentUser()),
        n = ex.Ay.useName(a) ?? "";
    return (0, o.jsx)(eh.g, {
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
var eg = a(736653),
    ev = a(653523),
    ej = a(475601);
function ef(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, eg.Ay)();
    return (0, o.jsxs)("div", {
        className: ej.N,
        children: [
            (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, o.jsx)("div", {
                className: ej.Z,
                children: ec.Z6.map((e) => {
                    let l = n !== em.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        i = t === e.name;
                    return (0, o.jsx)(
                        ev.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: i },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var eb = a(834058),
    ey = a(95701),
    eE = a(331884);
function eC(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, eE.i)(),
        l = new ey.cq({ id: "0", type: em.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, o.jsx)(eb.th, { selected: t, channel: l, user: n, nameplate: a });
}
var eS = a(698638),
    e_ = a(52940);
function eN() {
    let [e, t] = (0, d.useState)(!1),
        [a, n] = (0, d.useState)(!1),
        [l, i] = (0, d.useState)(null),
        { node: s } = (0, es.Ay)(er.k, ""),
        r = (0, ed.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, ed.DE)(),
        { setImgCache: m } = (0, ed.TW)(),
        h = (0, d.useCallback)(
            (e) => {
                let t = r[e];
                null != t
                    ? i({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : i((t) =>
                          null == t ? { previewToolKey: e, palette: ec.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [r],
        ),
        x = (0, d.useCallback)((e) => {
            i((t) => (null == t ? null : { ...t, palette: e }));
        }, []),
        v = (0, d.useCallback)(
            (e) => {
                u(e);
            },
            [u],
        );
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)("div", {
                className: e_.ne,
                children: [
                    (0, o.jsxs)("div", {
                        className: e_.gO,
                        children: [
                            (0, o.jsx)(p.$, {
                                size: "sm",
                                onClick: () => {
                                    (n(!1), t((e) => !e));
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, o.jsx)(p.$, {
                                size: "sm",
                                onClick: () => {
                                    (t(!1), n((e) => !e));
                                },
                                variant: "secondary",
                                text: "Toggle Gradients",
                            }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: e_.uQ,
                        children: [
                            e && (0, o.jsx)(ei.A, { node: s }),
                            a &&
                                (0, o.jsx)(ef, {
                                    selected: l?.palette?.name,
                                    onSelect: (e) => {
                                        (l?.previewToolKey != null && c(l.previewToolKey, l.previewToolKey, e), x(e));
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, o.jsxs)("div", {
                className: e_.iW,
                children: [
                    (0, o.jsx)(eA, { nameplate: l }, l?.palette?.name),
                    (0, o.jsxs)("div", {
                        className: e_.Uo,
                        children: [
                            (0, o.jsx)(g.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, o.jsx)(el.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eS.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    (m(t, t, (0, eu.nI)(n)), c(t, t, ec.Wj));
                                },
                            }),
                            (0, o.jsx)("div", {
                                className: e_.is,
                                children: Object.values(r).map((e) => {
                                    let { url: t } = e;
                                    return (0, o.jsx)(ek, { src: t, onSetStatic: h, removeAsset: v }, t);
                                }),
                            }),
                            (0, o.jsx)(eD, {
                                label: "gradient override",
                                onChange: (e) => x({ name: ec.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, o.jsx)(eI, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eA(e) {
    let { nameplate: t } = e,
        [a, n] = (0, d.useState)(320),
        l = (0, d.useRef)(null),
        i = (0, d.useRef)(null),
        s = (0, d.useRef)(null),
        r = (0, d.useRef)(document),
        c = (0, d.useCallback)((e) => {
            if (null != l.current) {
                let t = l.current.getBoundingClientRect();
                n(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        u = (0, d.useCallback)(
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
                ((r.current = t),
                    (i.current = a),
                    (s.current = n),
                    t.addEventListener("mousemove", a),
                    t.addEventListener("mouseup", n));
            },
            [c],
        );
    return (
        (0, d.useEffect)(
            () => () => {
                (null != i.current && (r.current.removeEventListener("mousemove", i.current), (i.current = null)),
                    null != s.current && (r.current.removeEventListener("mouseup", s.current), (s.current = null)));
            },
            [],
        ),
        (0, o.jsx)(v.Ip, {
            className: e_.Fp,
            orientation: "horizontal",
            children: (0, o.jsxs)("div", {
                ref: l,
                className: e_.ey,
                style: { width: `${a}px` },
                children: [
                    (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, o.jsx)(eT, { nameplate: t }),
                    (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, o.jsx)(eR, { nameplate: t }),
                    (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, o.jsx)(eO, { nameplate: t }),
                    (0, o.jsx)("div", { className: e_.Di, onMouseDown: u }),
                ],
            }),
        })
    );
}
function ek(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, o.jsxs)("div", {
        className: e_.xO,
        children: [
            (0, o.jsx)(J.D, {
                onClick: () => n(t),
                className: e_.yV,
                children: (0, o.jsx)(ea.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, o.jsx)("img", { className: e_.Ez, src: t, alt: "" }),
            (0, o.jsx)("div", {
                className: e_.Lu,
                children: (0, o.jsx)(p.$, {
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
    return (0, o.jsxs)("div", {
        className: e_.Uu,
        children: [
            (0, o.jsx)(g.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, o.jsx)(p.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function eD(e) {
    let { label: t, onChange: a } = e;
    return (0, o.jsxs)("div", {
        className: e_.Im,
        children: [
            (0, o.jsx)(g.E, { variant: "text-sm/normal", children: t }),
            (0, o.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: e_.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eT(e) {
    let { nameplate: t } = e,
        a = (0, c.bG)([eo.default], () => eo.default.getCurrentUser());
    return (0, o.jsx)("div", {
        className: e_.VH,
        children: (0, o.jsxs)("div", {
            className: e_.H1,
            children: [
                (0, o.jsx)(g.E, { className: e_.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, o.jsx)(en.A, { nameplate: t, user: a, currentUser: a }),
                (0, o.jsx)(g.E, { className: e_.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsx)(en.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, o.jsx)(en.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function eR(e) {
    let { nameplate: t } = e;
    return (0, o.jsx)("div", {
        className: e_.VH,
        children: (0, o.jsxs)("div", {
            className: e_.H1,
            children: [
                (0, o.jsx)(g.E, { className: e_.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, o.jsx)(eC, { nameplate: t }),
                (0, o.jsx)(g.E, { className: e_.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, o.jsxs)("div", {
                    children: [(0, o.jsx)(eC, { selected: !0, nameplate: t }), (0, o.jsx)(eC, { selected: !0 })],
                }),
            ],
        }),
    });
}
function eO(e) {
    let { nameplate: t } = e;
    return (0, o.jsx)("div", {
        className: e_.VH,
        children: (0, o.jsx)("div", { className: e_.X2, children: (0, o.jsx)(ep, { nameplate: t }) }),
    });
}
a(508300);
var ew = a(132500),
    eM = a(157559),
    eP = a(780777),
    eL = a(993408),
    eU = a(579151),
    eG = a(559474),
    eF = a(816866),
    eB = a(87558),
    e$ = a(575593),
    eV = a(631903),
    eW = a(224640),
    eH = a(408278),
    ez = a(972213),
    eK = a(43990),
    eY = a(192308),
    eq = a(661531),
    eJ = a(231723),
    eQ = a(900686),
    eX = a(986687),
    eZ = a(796366),
    e0 = a(435558),
    e1 = a.n(e0),
    e2 = a(855915),
    e3 = a(480335);
let e6 = (e) => {
    let { profileEffect: t } = e,
        a = d.useMemo(() => (0, e0.cloneDeep)(t), [t]),
        n = d.useMemo(
            () => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0),
            [t.effects],
        ),
        l = d.useMemo(() => {
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
    return (0, o.jsx)(e3.p, { profileEffect: l, skuId: i, layerData: s });
};
var e5 = a(586886),
    e8 = a(778765);
let e4 =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    e7 = { [eB.qH.THUMBNAIL]: null, [eB.qH.STATIC]: null, [eB.qH.REDUCED_MOTION]: null },
    e9 = "debug",
    te = "reduced-motion-preview-modal";
function tt(e) {
    let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
    return (0, o.jsx)(eW.d, {
        transitionState: t,
        size: "md",
        onClose: a,
        maxHeight: "viewport",
        children: (0, o.jsxs)("div", {
            className: e5.Xd,
            children: [
                (0, o.jsx)("div", {
                    className: e5.y6,
                    children: (0, o.jsx)(eH.K, {
                        "aria-label": "Close",
                        onClick: a,
                        icon: ez.XLargeIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                    }),
                }),
                (0, o.jsxs)("div", {
                    className: e5.rU,
                    children: [
                        (0, o.jsx)(eK.N, {
                            theme: l,
                            children: (e) =>
                                (0, o.jsx)("img", { src: e4, alt: "", className: q()(e5.aM, e), "aria-hidden": !0 }),
                        }),
                        null != n &&
                            "" !== n &&
                            (0, o.jsx)("img", { src: n, className: e5.SD, alt: "Reduced motion preview" }),
                    ],
                }),
            ],
        }),
    });
}
function ta(e) {
    let { type: t, frame: a, theme: n, onClear: l } = e,
        i = t === eB.qH.REDUCED_MOTION,
        s = i ? e4 : e8.A,
        r = (0, o.jsx)(eK.N, {
            theme: n,
            children: (e) =>
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)("img", { src: s, alt: "", className: q()(e5.aM, e), "aria-hidden": !0 }),
                        a?.src != null &&
                            "" !== a.src &&
                            (0, o.jsx)("img", { src: a.src, className: q()(e5.SD, e), alt: "" }),
                    ],
                }),
        });
    return (0, o.jsxs)("div", {
        className: e5.pK,
        children: [
            (0, o.jsx)(X.D, { variant: "heading-sm/bold", children: t }),
            i
                ? (0, o.jsx)(J.D, {
                      className: q()(e5.zd, e5.eB),
                      onClick: function () {
                          (0, eY.hasModalOpen)(te)
                              ? (0, eY.closeModal)(te)
                              : (0, eY.openModalLazy)(
                                    () =>
                                        Promise.resolve((e) =>
                                            (0, o.jsx)(tt, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                        ),
                                    { modalKey: te, onCloseRequest: () => (0, eY.closeModal)(te) },
                                );
                      },
                      children: r,
                  })
                : (0, o.jsx)("div", { className: e5.zd, children: r }),
            null != a && (0, o.jsx)(p.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
        ],
    });
}
let tn = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eF.wu)(),
            n = (0, c.bG)([eo.default], () => eo.default.getCurrentUser()),
            [l, i] = d.useState(!0),
            s = d.useRef({}),
            [r, u] = d.useState(!1),
            [m, h] = d.useState(!1),
            [x, v] = d.useState(8),
            [j, f] = d.useState([]),
            [b, y] = d.useState(e7),
            E = d.useRef([]),
            [C, S] = d.useState(t.name),
            _ = C.toLowerCase().replace(/\s+/g, "_"),
            N = d.useMemo(
                () => ({
                    type: e$.R.PROFILE_EFFECT,
                    skuId: e9,
                    title: e9,
                    description: e9,
                    accessibilityLabel: e9,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: j,
                    animationType: eV.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [j],
            ),
            A = r ? eq.A.themes.DARK : eq.A.themes.LIGHT;
        function k(e) {
            let t = e.currentTarget.files;
            return null == t ? null : t[0];
        }
        function I(e, t) {
            let a = k(t);
            null != a &&
                (0, eB.Mz)(a, (t) => {
                    y((n) => ({ ...n, [e]: (0, eB.GT)(t, a) }));
                });
        }
        (d.useEffect(() => {
            let e = t.effects;
            e.length > 0 &&
                f(
                    e.map((e) => ({
                        ...e,
                        name: e.name ?? (0, eB.XG)(e.src),
                        randomizedSources: e.randomizedSources?.map((e) => ({
                            ...e,
                            filename: e.filename ?? (0, eB.XG)(e.src),
                        })),
                    })),
                );
        }, [t.effects]),
            d.useEffect(() => {
                let e = t.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, a] = e;
                        if (null != a) {
                            if ("" !== a.src && null != a.src && ("" === a.base64 || null == a.base64))
                                y((e) => ({ ...e, [t]: a }));
                            else if ("" !== a.base64 && null != a.base64) {
                                let e = (0, eB.fB)(a.base64);
                                ((a.src = e), E.current.push(e), y((e) => ({ ...e, [t]: a })));
                            }
                        }
                    });
            }, [t.stillFrames]));
        let D = { profileEffect: t, upsertProfileEffect: a },
            T = d.useRef(D);
        return (d.useEffect(() => {
            T.current = D;
        }),
        d.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = T.current;
            e.readonly || t({ skuId: e.skuId, name: C, effects: j, stillFrames: b });
        }, [j, b, C]),
        d.useEffect(
            () => () => {
                (E.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (E.current = []));
            },
            [],
        ),
        null == n)
            ? (0, o.jsx)("div", {})
            : (0, o.jsxs)("div", {
                  className: e5.zr,
                  children: [
                      (0, o.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, o.jsx)(eP.A, {
                                  ref: (e) => {
                                      s.current.animated = e;
                                  },
                                  onChange: function (e) {
                                      let t = k(e);
                                      null != t &&
                                          (0, eB.Mz)(t, async (e) => {
                                              let a = await (0, eB.Ay)(e, t, j.length);
                                              f((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, o.jsx)(eP.A, {
                                  ref: (e) => {
                                      s.current.thumbnail = e;
                                  },
                                  onChange: (e) => I(eB.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, o.jsx)(eP.A, {
                                  ref: (e) => {
                                      s.current.static = e;
                                  },
                                  onChange: (e) => I(eB.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, o.jsx)(eP.A, {
                                  ref: (e) => {
                                      s.current.reducedMotion = e;
                                  },
                                  onChange: (e) => I(eB.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, o.jsxs)("div", {
                          className: e5.Vg,
                          children: [
                              (0, o.jsxs)("div", {
                                  className: q()(e5.nM, e5.uW),
                                  children: [
                                      (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, o.jsx)("input", {
                                          type: "text",
                                          value: C,
                                          className: e5.hF,
                                          onChange: (e) => {
                                              S(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, o.jsxs)("div", {
                                  className: e5.nM,
                                  children: [
                                      (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, o.jsx)("input", {
                                          type: "checkbox",
                                          checked: r,
                                          className: e5.OO,
                                          onChange: () => {
                                              u(!r);
                                          },
                                      }),
                                      (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, o.jsx)("input", {
                                          type: "checkbox",
                                          checked: m,
                                          className: e5.OO,
                                          onChange: () => {
                                              h(!m);
                                          },
                                      }),
                                  ],
                              }),
                              (0, o.jsxs)("div", {
                                  className: e5.nM,
                                  children: [
                                      (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, o.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: x,
                                          onChange: (e) => v(+e.target.value),
                                      }),
                                      (0, o.jsxs)(g.E, { variant: "text-sm/normal", children: [x, "px"] }),
                                  ],
                              }),
                              (0, o.jsxs)("div", {
                                  className: q()(e5.nz, e5.VH),
                                  style: { borderRadius: x },
                                  children: [
                                      m
                                          ? (0, o.jsx)("div", {
                                                className: e5.jq,
                                                children: (0, o.jsx)(eZ.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: eJ.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: e5.JB,
                                                }),
                                            })
                                          : (0, o.jsx)(eK.N, {
                                                theme: A,
                                                children: (e) =>
                                                    (0, o.jsx)("div", {
                                                        className: q()(e5.aM, e),
                                                        children: (0, o.jsx)("img", { src: e8.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, o.jsx)("div", {
                                              className: e5.KJ,
                                              children: (0, o.jsx)(e6, { profileEffect: N }),
                                          }),
                                  ],
                              }),
                              (0, o.jsx)("div", {
                                  children:
                                      m &&
                                      (0, o.jsxs)("div", {
                                          className: q()(e5.f5, e5.VH),
                                          style: { borderRadius: x },
                                          children: [
                                              (0, o.jsx)(eX.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  hideProfileFrame: !0,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, o.jsx)(e6, { profileEffect: N }),
                                          ],
                                      }),
                              }),
                              (0, o.jsxs)("div", {
                                  className: e5.nz,
                                  children: [
                                      (0, o.jsxs)("div", {
                                          className: e5.nM,
                                          children: [
                                              (0, o.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => s.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, o.jsx)(g.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, o.jsxs)("div", {
                                          className: e5.nM,
                                          children: [
                                              (0, o.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => s.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, o.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => s.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, o.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => s.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, o.jsx)("div", {
                                          className: e5.q6,
                                          children: (0, o.jsx)("div", {
                                              className: e5.nM,
                                              children: (0, o.jsx)(p.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      (i(!1), setTimeout(() => i(!0), 100));
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, o.jsxs)("div", {
                                          className: q()(e5.q6, e5.XA),
                                          children: [
                                              (0, o.jsx)(g.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, o.jsx)(g.E, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, o.jsxs)("div", {
                                                  className: e5.nM,
                                                  children: [
                                                      (0, o.jsx)(eQ.A, {
                                                          fileContents: () => (0, eB.rs)(j),
                                                          contentType: "text/plain",
                                                          fileName: `${_}_timing_config.txt`,
                                                          children: (0, o.jsx)(p.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, o.jsx)(eQ.A, {
                                                          fileContents: function () {
                                                              return JSON.stringify({
                                                                  ...t,
                                                                  name: C,
                                                                  readonly: !1,
                                                                  effects: j,
                                                                  stillFrames: b,
                                                              });
                                                          },
                                                          contentType: "text/plain",
                                                          fileName: `${_}_config.txt`,
                                                          children: (0, o.jsx)(p.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Full Config",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, o.jsxs)("div", {
                                          className: e5.uW,
                                          children: [
                                              (0, o.jsx)(X.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, o.jsx)("div", {
                                                  className: e5.mv,
                                                  children: Object.entries(b).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, o.jsx)(
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
                                          (0, o.jsxs)("div", {
                                              className: q()(e5.uW, e5.l7),
                                              children: [
                                                  (0, o.jsx)(g.E, {
                                                      variant: "text-md/bold",
                                                      children: "Rules of Randomized Effects",
                                                  }),
                                                  (0, o.jsxs)("ol", {
                                                      children: [
                                                          (0, o.jsx)("li", {
                                                              children:
                                                                  "When an effect has randomization, all layers with random options must have the same number of options.",
                                                          }),
                                                          (0, o.jsx)("li", {
                                                              children:
                                                                  "The duration for the random options of a layer must be the same",
                                                          }),
                                                          (0, o.jsx)("li", {
                                                              children:
                                                                  "If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)",
                                                          }),
                                                          (0, o.jsx)("li", {
                                                              children:
                                                                  'Click "Replay Animation" to "reroll" the randomization',
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              (0, o.jsxs)("div", {
                                  className: q()(e5.Vg, e5.ZF),
                                  children: [
                                      (0, o.jsx)("div", {
                                          className: e5.cD,
                                          children: (0, o.jsx)(p.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: function () {
                                                  (f([]), y(e7));
                                              },
                                          }),
                                      }),
                                      j.map((e, t) =>
                                          (0, o.jsxs)(
                                              "div",
                                              {
                                                  className: e5.ec,
                                                  children: [
                                                      (0, o.jsxs)("div", {
                                                          className: e5.D1,
                                                          children: [
                                                              (0, o.jsx)(X.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, o.jsx)("img", {
                                                                  src: e.src,
                                                                  className: e5.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, o.jsxs)(o.Fragment, {
                                                                      children: [
                                                                          (0, o.jsx)(X.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, o.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, o.jsx)(X.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, o.jsx)("img", {
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
                                                      (0, o.jsxs)("div", {
                                                          className: q()(e5.Vg, e5.uW),
                                                          children: [
                                                              (0, o.jsxs)("div", {
                                                                  className: e5.nz,
                                                                  children: [
                                                                      (0, o.jsx)(g.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, o.jsx)("input", {
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
                                                              (0, o.jsxs)("div", {
                                                                  className: e5.nz,
                                                                  children: [
                                                                      (0, o.jsx)(g.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, o.jsx)("input", {
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
                                                      (0, o.jsxs)("div", {
                                                          className: q()(e5.Vg, e5.uW),
                                                          children: [
                                                              (0, o.jsxs)("div", {
                                                                  className: e5.nz,
                                                                  children: [
                                                                      (0, o.jsx)(g.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, o.jsx)("input", {
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
                                                              (0, o.jsx)("div", {
                                                                  className: e5.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, o.jsxs)(o.Fragment, {
                                                                          children: [
                                                                              (0, o.jsx)(g.E, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, o.jsx)("input", {
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
                                                      (0, o.jsx)("div", {
                                                          style: { display: "none" },
                                                          children: (0, o.jsx)(eP.A, {
                                                              ref: (e) => {
                                                                  s.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = k(e)) &&
                                                                      (0, eB.Mz)(a, (e) => {
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
                                                      (0, o.jsxs)("div", {
                                                          className: q()(e5.nM, e5._N),
                                                          children: [
                                                              (0, o.jsx)(p.$, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      s.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, o.jsx)(p.$, {
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
        { deleteProfileEffect: n } = (0, eF.wu)();
    return (0, o.jsxs)(J.D, {
        className: e5.B0,
        onClick: a,
        children: [
            (0, o.jsx)("div", { className: e5.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
            (0, o.jsxs)("div", {
                className: e5.eL,
                children: [
                    (0, o.jsx)(g.E, { variant: "text-md/bold", children: t.name }),
                    (0, o.jsx)(p.$, {
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
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eF.wu)(),
        [n, l] = d.useState(),
        i = d.useRef(null),
        { categories: s } = (0, eU.A)(),
        r = d.useMemo(() => (0, eL.Wj)(s), [s]),
        [c, u] = d.useState(""),
        m = d.useMemo(
            () =>
                "" === c
                    ? r
                    : r.filter((e) => {
                          let t = c.toLowerCase(),
                              a = e.title?.toLowerCase() ?? "",
                              n = e.description?.toLowerCase() ?? "";
                          return a.includes(t) || n.includes(t);
                      }),
            [c, r],
        ),
        h = d.useCallback(
            (e, a) => {
                if (null == a || !e.type.startsWith("text/")) return (0, eG.Ni)(tl);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eG.Ni)(tl);
                let i = JSON.parse(atob(l));
                ((i.skuId = (0, ew.A)()), t(i), (0, eG.GF)("Profile Effect (maybe??) imported!"));
            },
            [t],
        ),
        x = d.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eG.Ni)("Error uploading file. Try again!")
                    : (0, eG.KE)(e.currentTarget.files, h, eG.Ni);
            },
            [h],
        );
    return (0, o.jsxs)("div", {
        className: e5.zr,
        children: [
            null == n &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsxs)("div", {
                            className: e5.nz,
                            children: [
                                (0, o.jsxs)("div", {
                                    className: q()(e5.uW, e5.nM),
                                    children: [
                                        (0, o.jsx)(X.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, o.jsx)(p.$, {
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
                                (0, o.jsx)("div", {
                                    className: e5.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, o.jsx)(ti, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, o.jsxs)("div", {
                            className: q()(e5.nM, e5._N, e5.uW),
                            children: [
                                (0, o.jsxs)("div", {
                                    className: e5.au,
                                    children: [
                                        (0, o.jsx)(g.E, {
                                            variant: "text-md/normal",
                                            color: "text-overlay-light",
                                            children: "Import Shared Config",
                                        }),
                                        (0, o.jsx)(eP.A, { ref: i, onChange: x, multiple: !1 }),
                                    ],
                                }),
                                (0, o.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: function () {
                                        t({ skuId: (0, ew.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, o.jsx)("hr", {}),
                        (0, o.jsxs)("div", {
                            className: e5.uW,
                            children: [
                                (0, o.jsx)(X.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, o.jsx)(b.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, o.jsx)("div", {
                                    className: e5.xm,
                                    children: m.map((e) =>
                                        (0, o.jsx)(
                                            J.D,
                                            {
                                                className: e5.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [eB.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eB.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eB.qH.REDUCED_MOTION]:
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
                                                children: (0, o.jsx)("div", {
                                                    className: e5.Hd,
                                                    children: (0, o.jsx)(g.E, {
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
            null != n && (0, o.jsx)(tn, { profileEffect: n }),
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
    tC = a(626768),
    tS = a(464896);
function t_() {
    let e = (0, eg.Ay)();
    return (0, o.jsxs)("div", {
        className: tE.z3,
        children: [
            (0, o.jsx)("img", { src: (0, to.M)(e) ? tC : tS, alt: "" }),
            (0, o.jsx)(g.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tN() {
    let e = (0, c.bG)([eo.default], () => eo.default.getCurrentUser()),
        t = (0, tv.Ay)(e?.id);
    d.useEffect(() => {
        e?.id != null && (0, tj.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, tf.Bf)(),
        l = d.useMemo(() => (0, eL.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: i }, s] = (0, c.yK)([tg.A], () => [tg.A.getPendingChanges(), tg.A.showNotice()]),
        r = void 0 === i ? t?.profileFrame : i,
        u = null != r ? a.get(r.skuId) : void 0,
        m = (0, tb.s)(u?.items[0]) ? u.items[0] : void 0;
    return (
        (0, tr.l0)(tx.RE),
        (0, o.jsxs)("div", {
            className: tE.kL,
            children: [
                (0, o.jsxs)(X.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, o.jsx)(tu.A, {
                            emojiName: tm.Ay.getByName("frame_with_picture")?.surrogates,
                            className: tE.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, o.jsx)(td.y, {}),
                0 === l.length && !n && (0, o.jsx)(t_, {}),
                l.length > 0 &&
                    (0, o.jsxs)("div", {
                        className: tE.MK,
                        children: [
                            (0, o.jsx)(g.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, o.jsxs)("ul", {
                                className: tE.p_,
                                children: [
                                    (0, o.jsx)(
                                        "li",
                                        {
                                            children: (0, o.jsx)(p.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == r ? tc.U : void 0,
                                                disabled: null == r,
                                                onClick: () => (0, tp.p)({ profileFrame: null }),
                                            }),
                                        },
                                        "none",
                                    ),
                                    l.map((e) => {
                                        let t = a.get(e.skuId);
                                        return null == t
                                            ? null
                                            : (0, o.jsx)(
                                                  "li",
                                                  {
                                                      children: (0, o.jsx)(p.$, {
                                                          text: t.name,
                                                          variant: "secondary",
                                                          fullWidth: !0,
                                                          icon: r?.skuId === e.skuId ? tc.U : void 0,
                                                          disabled: r?.skuId === e.skuId,
                                                          onClick: () => (0, tp.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            s && (0, o.jsx)(th.A, {}),
                            (0, o.jsxs)("div", {
                                className: tE.VH,
                                children: [
                                    (0, o.jsx)(g.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, o.jsxs)("div", {
                                        className: tE.ME,
                                        children: [
                                            (0, o.jsx)("img", { src: e8.A, alt: "" }),
                                            null != m && (0, o.jsx)(ty.A, { frame: m, isPreview: !0 }),
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
    tR = a(61750),
    tO = a(73153),
    tw = a(499454),
    tM = a(202541);
let tP = "devtools-collectibles-gift";
async function tL(e) {
    let { skuId: t, sender: a } = e,
        n = {
            code: tP,
            user: { id: a.id },
            sku_id: t,
            uses: 0,
            max_uses: 1,
            expires_at: null,
            redeemed: !1,
            application_id: em.FYj,
            gift_style: tM.o2.STANDARD_BOX,
        };
    (await tO.h.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: n }), (0, tw.h)({ processedCode: tP }));
}
var tU = a(80101);
let tG = (e) => {
        let [t, a] = d.useState(0);
        return (
            d.useLayoutEffect(() => {
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
            (0, o.jsx)("div", { className: tU.Do, children: (0, o.jsx)(tT.A, { ...e }, t) })
        );
    },
    tF = () => {
        let e = (0, tA.bG)([eo.default], () => eo.default.getCurrentUser()),
            t = (0, tA.bG)([tI.A], () => tI.A.categories),
            a = (0, tA.bG)([tD.A], () => tD.A.purchases),
            n = (0, tA.bG)([tI.A], () => tI.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: i, categories: s } = (0, tf.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
            r = l ? t : s,
            c = l || (!i && r.size > 0),
            [u, m] = d.useState(""),
            [h, x] = d.useState(null),
            [v, j] = d.useState(null);
        return (d.useEffect(() => {
            if ("" === u.trim() || !c) {
                (x(null), j(null));
                return;
            }
            let e = tI.A.getProduct(u),
                t = tI.A.getCategoryForProduct(u);
            null != e && null != t ? (x(e), j(t)) : (x(null), j(null));
        }, [u, c]),
        i)
            ? (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, o.jsx)(g.E, { variant: "text-md/normal", children: "No user found" })
              : (0, o.jsxs)("div", {
                    className: tU.kL,
                    children: [
                        (0, o.jsxs)("div", {
                            className: tU.uW,
                            children: [
                                (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, o.jsxs)("div", {
                                    className: tU.qp,
                                    children: [
                                        (0, o.jsx)(g.E, {
                                            variant: "text-md/semibold",
                                            className: tU.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, o.jsx)(b.k, { value: u, onChange: m, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, o.jsx)(g.E, {
                                                variant: "text-sm/normal",
                                                className: tU.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == h &&
                                            (0, o.jsx)(g.E, {
                                                variant: "text-sm/normal",
                                                className: tU.kc,
                                                children: "Product not found",
                                            }),
                                        null != h &&
                                            (0, o.jsxs)(g.E, {
                                                variant: "text-sm/normal",
                                                className: tU.xT,
                                                children: ["Found: ", h.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, o.jsxs)("div", {
                            className: tU.uW,
                            children: [
                                (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != h && null != v
                                    ? (0, o.jsxs)("div", {
                                          className: tU.i1,
                                          children: [
                                              (0, o.jsx)(tG, { skuId: h.skuId }),
                                              (0, o.jsx)(p.$, {
                                                  variant: "primary",
                                                  onClick: function () {
                                                      null != h &&
                                                          null != e &&
                                                          (0, tR.A)({
                                                              product: h,
                                                              analyticsLocations: [tk.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                              (0, o.jsx)(p.$, {
                                                  variant: "primary",
                                                  onClick: function () {
                                                      null != h && null != e && tL({ skuId: h.skuId, sender: e });
                                                  },
                                                  text: "Show Gift Accept Modal",
                                              }),
                                          ],
                                      })
                                    : (0, o.jsx)("div", {
                                          className: tU.qf,
                                          children: (0, o.jsx)(g.E, {
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
var tB = a(646695);
let t$ = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 };
function tV(e) {
    let { setTab: t } = e,
        n = (0, c.bG)([et.A], () => et.A.getWindowOpen(em.MLl.DEVTOOLS_POPOUT));
    return (0, o.jsxs)("div", {
        className: tB.Qs,
        children: [
            (0, o.jsx)(J.D, {
                onClick: () => {
                    t(1);
                },
                children: (0, o.jsx)("div", {
                    className: q()(tB.vK, tB.Dg),
                    children: (0, o.jsx)(g.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Profile Effects",
                    }),
                }),
            }),
            (0, o.jsx)(J.D, {
                onClick: () => {
                    t(2);
                },
                children: (0, o.jsx)("div", {
                    className: q()(tB.vK, tB.st),
                    children: (0, o.jsx)(g.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Nameplates",
                    }),
                }),
            }),
            (0, o.jsx)(J.D, {
                onClick: () => {
                    t(3);
                },
                children: (0, o.jsx)("div", {
                    className: q()(tB.vK, tB.BW),
                    children: (0, o.jsx)(g.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Profile Frames",
                    }),
                }),
            }),
            (0, o.jsx)(J.D, {
                onClick: () => {
                    t(4);
                },
                children: (0, o.jsx)("div", {
                    className: q()(tB.vK, tB.IP),
                    children: (0, o.jsx)(g.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Products",
                    }),
                }),
            }),
            !n &&
                (0, o.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, o.jsx)(Q.w, {
                        type: "warning",
                        title: "Not enough space?",
                        message: "You can pop out the DevTools to see the full layout.",
                        action: {
                            text: "Popout DevTools",
                            onClick: () =>
                                Promise.all([a.e("868577"), a.e("253209")])
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
let tW = function () {
    let [e, t] = d.useState(() => {
        let e = ee.A.lastOpenSubTabId;
        return null != e && e in t$ ? t$[e] : 0;
    });
    return (
        d.useEffect(() => {
            null != ee.A.lastOpenSubTabId && (0, Z.Jt)({ lastOpenSubTabId: null });
        }, []),
        (0, o.jsxs)(v.Ip, {
            className: tB.iE,
            children: [
                (0, o.jsxs)("div", {
                    className: tB.C$,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                        0 !== e && (0, o.jsx)(p.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                    ],
                }),
                (function () {
                    switch (e) {
                        case 1:
                            return (0, o.jsx)(ts, {});
                        case 2:
                            return (0, o.jsx)(eN, {});
                        case 3:
                            return (0, o.jsx)(tN, {});
                        case 4:
                            return (0, o.jsx)(tF, {});
                        default:
                            return (0, o.jsx)(tV, { setTab: t });
                    }
                })(),
            ],
        })
    );
};
var tH = a(681154),
    tz = a(306264),
    tK = a(506774),
    tY = a(331322),
    tq = a(587895),
    tJ = a(429913),
    tQ = a(475825),
    tX = a(730441);
function tZ(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: i, selectedRowKey: s, rowHeight: r = 40 } = e,
        c = d.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, o.jsx)("div", {
        className: tX.CZ,
        children: (0, o.jsx)(tQ.OZ, {
            className: n,
            innerClassName: tX.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tX.ZR;
                return (0, o.jsx)(
                    "div",
                    {
                        className: n,
                        children: c.map((e) => {
                            let n = e.cellClassName,
                                l = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)` };
                            return (0, o.jsx)(
                                "div",
                                { className: n, style: l, children: e.renderHeader?.(e, a) },
                                `dev-tools-th-${t}-${e.key}`,
                            );
                        }),
                    },
                    `dev-tools-header-${t}`,
                );
            },
            rowHeight: r,
            renderRow: (e) => {
                let { rowIndex: t } = e,
                    n = a[t];
                if (null == n) return null;
                let d = n.key,
                    u = q()(tX.jD, { [tX.wD]: d === s, rowClassName: l });
                return (0, o.jsx)(
                    J.D,
                    {
                        className: u,
                        onClick: () => i?.(n),
                        children: c.map((e) => {
                            let a = e.cellClassName,
                                l = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)`, height: `calc(${r}px - 16px)` };
                            return (0, o.jsx)(
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
var t0 = a(409626),
    t1 = a(692969),
    t2 = a(760751),
    t3 = a(403362),
    t6 = a(435738),
    t5 = a(99753),
    t8 = a(402860),
    t4 = a(574520),
    t7 = a(808323),
    t9 = a(583846),
    ae = a(424994),
    at = a(14570);
function aa(e) {
    let { id: t } = e,
        a = (0, c.bG)([eo.default], () => eo.default.getUser(t));
    return null == a
        ? null
        : (0, o.jsx)(J.D, {
              className: at._,
              onClick: function () {
                  (0, t8.openUserProfileModal)({ sourceAnalyticsLocations: [tk.A.DEV_TOOLS], userId: t });
              },
              children: (0, o.jsx)(g.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function an() {
    let e = (0, c.bG)([t5.A], () => t5.A.getFeed(ae.X1.GLOBAL_FEED)),
        t = (0, c.bG)([t5.A], () => t5.A.getFilters()),
        a = (0, c.cf)(
            [t4.A],
            () => {
                let t = {};
                for (let a of e?.entries ?? []) t[(0, t4.$)(a.content)] = t4.A.canRenderContent(a.content);
                return t;
            },
            [e],
        ),
        n = (0, c.bG)([t6.A], () => t6.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, t7.l)(t, l)) return [];
        let i = a[(0, t4.$)(l)];
        return (0, o.jsxs)(
            "li",
            {
                className: at.p,
                children: [
                    (0, o.jsx)(aa, { type: l.author_type, id: l.author_id }),
                    !i && (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, t9.I5)(l) &&
                        (0, o.jsxs)(g.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, o.jsxs)("div", {
        children: [
            (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, o.jsx)("ul", { children: l }) : (0, o.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var al = a(576470),
    ai = a(693879);
function as() {
    let e = (0, c.bG)([t5.A], () => t5.A.getFeed(ae.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, c.cf)(
            [t5.A],
            () => t5.A.getFeedState(ae.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, c.bG)([t5.A], () => t5.A.getLastFeedFetchDate(ae.X1.GLOBAL_FEED));
    return (0, o.jsxs)("div", {
        children: [
            t
                ? (0, o.jsx)(g.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, o.jsxs)(g.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, o.jsx)(al.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, o.jsxs)(g.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, o.jsx)(ai.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var ar = a(225418);
let ao = [
    {
        key: "type",
        cellClassName: q()(ar.Hn, ar.T$),
        render(e) {
            let { type: t } = e;
            return (0, o.jsx)(g.E, { variant: "text-md/semibold", children: tH.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: q()(ar.Hn, ar.MX),
        render(e) {
            let { entries: t } = e;
            return (0, o.jsx)("div", { children: (0, o.jsx)(g.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: ar.Hn,
        render(e) {
            let { type: t } = e;
            return (0, o.jsx)(ad, { type: t });
        },
    },
];
function ad(e) {
    let { type: t } = e,
        a = (0, c.bG)([t5.A], () => t5.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, o.jsx)(h.d, {
        checked: n,
        onChange: function () {
            n
                ? tO.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tO.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function ac() {
    var e;
    let t,
        a = (0, c.bG)([t5.A], () => t5.A.getFeed(ae.X1.GLOBAL_FEED)),
        n = (0, c.bG)([t5.A], () => t5.A.getDebugImpressionCappingDisabled()),
        l = (0, c.bG)([t6.A], () => t6.A.getDebugFastImpressionCappingEnabled()),
        i =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = e1().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        s = (0, c.bG)([t5.A], () => t5.A.getFeedState(ae.X1.GLOBAL_FEED)?.loading === !0),
        [r, u] = d.useState(""),
        m = (0, c.bG)(
            [t2.A, tq.A],
            () => (parseInt(r) > 0 ? r : (t2.A.searchGamesByName(r)[0] ?? tq.A.getApplicationByName(r)?.id)),
            [r],
        ),
        h = (0, t1.A)({
            applicationId: m,
            location: "DevToolsContentInventory",
            source: t0.GameProfileSources.DevTools,
        }),
        x = Object.entries(tK.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        j = (0, tJ.A)(x).filter(t3.Vq);
    return (0, o.jsx)("div", {
        className: tX.nd,
        children: (0, o.jsxs)(v.Ip, {
            className: ar.Qs,
            children: [
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, o.jsx)(g.E, { variant: "text-md/semibold", children: "Inventory" }),
                        i.length > 0 && (0, o.jsx)(tZ, { columns: ao, data: i }),
                        (0, o.jsx)(as, {}),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                tO.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: ae.X1.GLOBAL_FEED,
                                    feature: tz.M.INBOX,
                                });
                            },
                            loading: s,
                        }),
                    ],
                }),
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, o.jsx)(g.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tO.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tO.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tO.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tO.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, o.jsx)(an, {}),
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, o.jsx)(g.E, { variant: "text-md/semibold", children: "Game Profile" }),
                        (0, o.jsx)(b.k, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && u(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key && (r === e.currentTarget.value ? h?.(e) : u(e.currentTarget.value));
                            },
                            error:
                                r.length > 0 && null == h ? `No game profile for ${m ?? r + " - try by id"}.` : void 0,
                            helperText: null != h ? "Game profile found" : void 0,
                        }),
                        (0, o.jsx)("ul", {
                            children: j.map((e) =>
                                (0, o.jsx)(
                                    "li",
                                    { children: (0, o.jsx)(au, { application: e }) },
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
function au(e) {
    let { application: t } = e,
        a = (0, t1.A)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: t0.GameProfileSources.DevTools,
        });
    return (0, o.jsx)(J.D, {
        onClick: a,
        children: (0, o.jsx)(g.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
}
var am = a(267355),
    ah = a(233741),
    ax = a(222506),
    ap = a(567249),
    ag = a(188321),
    av = a(25202);
function aj(e) {
    let { label: t, value: a } = e;
    return (0, o.jsxs)(tY.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            (0, o.jsx)(g.E, { variant: "text-md/normal", color: "text-muted", children: t }),
            (0, o.jsx)(g.E, { variant: "text-md/medium", children: a }),
        ],
    });
}
function af(e) {
    return e ? "yes" : "no";
}
function ab(e) {
    return e > 0 ? `${e} fps` : "uncapped";
}
function ay() {
    let e = (0, c.cf)([ag.A, ah.A, ax.A, ap.A], () => ({
            storedEnabledChoice: ag.A.getStoredEnabledChoice(),
            hasRunningGame: ag.A.hasRunningGame,
            isThrottling: ag.A.isThrottling,
            frameRate: (0, av.A)(),
            overlayFrameRate: (0, av.j)(),
            isOverlayOpen: (0, am.D)(),
            isDiscordFocused: ag.A.isDiscordFocused,
            isDiscordHovered: ag.A.isDiscordHovered,
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
    return (0, o.jsxs)(tY.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, o.jsxs)(tY.B, {
                gap: 8,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-md/bold", children: "Status" }),
                    (0, o.jsx)(aj, { label: "Throttling", value: af(e.isThrottling) }),
                    (0, o.jsx)(aj, { label: "Running game detected", value: af(e.hasRunningGame) }),
                    (0, o.jsx)(aj, { label: "Discord focused", value: af(e.isDiscordFocused) }),
                    (0, o.jsx)(aj, { label: "Discord hovered", value: af(e.isDiscordHovered) }),
                    null != t && (0, o.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: "Set a debug running game from the Detected Games tab to simulate a game.",
                    }),
                ],
            }),
            (0, o.jsx)(y.c, {}),
            (0, o.jsxs)(tY.B, {
                gap: 8,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-md/bold", children: "Applied Levers" }),
                    (0, o.jsx)(aj, { label: "Frame rate cap", value: ab(e.frameRate) }),
                    (0, o.jsx)(aj, { label: "Overlay frame rate cap", value: ab(e.overlayFrameRate) }),
                    (0, o.jsx)(aj, { label: "Reduce motion", value: af(e.isThrottling) }),
                    (0, o.jsx)(aj, { label: "Pause animated media", value: af(e.isThrottling) }),
                    (0, o.jsx)(aj, { label: "Overlay open", value: af(e.isOverlayOpen) }),
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children:
                            "Levers key off Throttling, except the frame rate caps: the main cap also lifts while the overlay is open, and the overlay cap holds whenever game mode is active, ignoring focus and hover. Values live in GameModeConstants.tsx.",
                    }),
                ],
            }),
        ],
    });
}
var aE = a(890497),
    aC = a(769015),
    aS = a(311043),
    a_ = a(454908),
    aN = a(282435);
function aA(e) {
    return aN.jN.get(e) ?? 0;
}
function ak(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, a_.I)(t),
        l = (0, c.bG)([aS.A], () => aS.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, o.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, o.jsxs)(g.E, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, o.jsxs)(tY.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, o.jsx)(aC.A, { game: a, size: aC.M.SMALL }),
                    (0, o.jsxs)(tY.B, {
                        gap: 0,
                        children: [
                            (0, o.jsx)(g.E, { variant: "text-md/semibold", children: a.name }),
                            (0, o.jsx)(g.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function aI() {
    let [e, t] = d.useState(null),
        [a, n] = d.useState(""),
        l = (0, c.bG)([t2.A], () => t2.A.games),
        i = d.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => aA(t.value) - aA(e.value)),
            [l],
        ),
        s = d.useMemo(() => ({ baseSort: (e, t) => aA(t.item.value) - aA(e.item.value), keys: ["label"] }), []),
        r = d.useCallback((e) => {
            (t(e), null != e && n(""));
        }, []),
        u = d.useCallback((e) => {
            (n(e), e.trim().length > 0 && t(null));
        }, []),
        m = a.trim(),
        h = m.length > 0 ? m : (e ?? void 0),
        x = (0, t1.A)({ gameId: h, location: "DevToolsGameProfile", source: t0.GameProfileSources.DevTools });
    return (0, o.jsx)("div", {
        className: tX.nd,
        children: (0, o.jsxs)(tY.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, o.jsxs)(tY.B, {
                    gap: 4,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-md/bold", children: "Game Profile" }),
                        (0, o.jsx)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, o.jsx)(aE.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: i,
                            value: m.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: r,
                            selectionMode: "single",
                            clearable: !0,
                            matchSorterOptions: s,
                        }),
                    ],
                }),
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, o.jsx)(b.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: u,
                        }),
                        m.length > 0 && (0, o.jsx)(ak, { gameId: m }),
                    ],
                }),
                (0, o.jsx)(p.$, {
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
var aD = a(923477),
    aT = a(750672);
function aR() {
    let e = (0, aD.O)((e) => e.requestHighlightFirstCard);
    return (0, o.jsxs)("div", {
        className: q()(tX.nd, aT.k),
        children: [
            (0, o.jsx)(X.D, { variant: "heading-lg/normal", children: "Game Server Hosting" }),
            (0, o.jsx)(g.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children:
                    'Replays the post-purchase scroll + highlight on the first card in the "Your game servers" list, exactly like clicking "View game server" after checkout. Open the Game Servers shop tab (/shop?tab=game-servers) with at least one owned server first.',
            }),
            (0, o.jsx)(p.$, { variant: "secondary", text: "Run post-purchase highlight (first card)", onClick: e }),
        ],
    });
}
var aO = a(554146),
    aw = a(594061),
    aM = a(617617),
    aP = a(355898),
    aL = a(644103),
    aU = a(574560),
    aG = a(434265);
let aF = [
        aO.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        aO.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
        aO.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
    ].map((e) => ({ id: String(e), label: aO.M[e], value: e })),
    aB = { "global-cooldown": "global cooldown", "per-game-cooldown": "per-game cooldown", disabled: "disabled" };
function a$() {
    let [e, t] = d.useState("dismissals"),
        [a, n] = d.useState(aO.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, c.bG)([aM.A], () => aM.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        i = (0, c.bG)([aU.A], () => aU.A.getAllGameUpsellDismissals(a)),
        s = d.useMemo(() => Object.keys(i ?? {}), [i]),
        r = (0, tJ.A)(s),
        [u, m] = d.useState(""),
        [h, x] = d.useState([]);
    d.useEffect(
        () =>
            (0, aL.Y)((e) => {
                x((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let v = d.useMemo(() => {
            let e = new Set();
            for (let t of h) for (let a of t.applicationIds) e.add(a);
            return [...e];
        }, [h]),
        j = (0, tJ.A)(v),
        E = d.useMemo(() => Object.fromEntries(v.map((e, t) => [e, j[t]])), [v, j]),
        C =
            l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
                ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
                : "Never";
    return (0, o.jsxs)("div", {
        className: aG.nd,
        children: [
            (0, o.jsxs)("div", {
                className: aG.$H,
                children: [
                    (0, o.jsx)(J.D, {
                        className: q()(aG.V3, { [aG.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, o.jsxs)(J.D, {
                        className: q()(aG.V3, { [aG.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", h.length > 0 ? `(${h.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, o.jsxs)("div", {
                      className: aG.Lj,
                      children: [
                          (0, o.jsx)("div", {
                              className: aG.uW,
                              children: (0, o.jsx)(f.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: aF,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, o.jsxs)("div", {
                              className: aG.uW,
                              children: [
                                  (0, o.jsx)(X.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, o.jsxs)(g.E, { variant: "text-sm/normal", children: ["Last dismissed: ", C] }),
                                  (0, o.jsxs)(g.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                                  (0, o.jsx)(p.$, {
                                      variant: "secondary",
                                      text: "Reset Global DCF State",
                                      onClick: () => (0, aw._N)(a),
                                  }),
                              ],
                          }),
                          (0, o.jsxs)("div", {
                              className: aG.uW,
                              children: [
                                  (0, o.jsx)(X.D, { variant: "heading-md/bold", children: "Mark as Dismissed" }),
                                  (0, o.jsx)(b.k, {
                                      label: "Game ID",
                                      value: u,
                                      onChange: (e) => m(e),
                                      placeholder: "Enter Game ID",
                                  }),
                                  (0, o.jsx)(p.$, {
                                      variant: "secondary",
                                      text: "Mark as Dismissed",
                                      disabled: "" === u.trim(),
                                      onClick: () => {
                                          ((0, aP.M)([u.trim()], a), m(""));
                                      },
                                  }),
                              ],
                          }),
                          (0, o.jsx)(y.c, {}),
                          (0, o.jsxs)("div", {
                              className: q()(aG.uW, aG.LY),
                              children: [
                                  (0, o.jsxs)(X.D, {
                                      variant: "heading-md/bold",
                                      children: ["Per-Game Dismissals (", s.length, ")"],
                                  }),
                                  0 === s.length
                                      ? (0, o.jsx)(g.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: "No dismissal data for this content type.",
                                        })
                                      : (0, o.jsxs)(o.Fragment, {
                                            children: [
                                                s.map((e, t) => {
                                                    let n = r[t],
                                                        l = i?.[e];
                                                    if (null == l) return null;
                                                    let s = n?.getIconURL(32);
                                                    return (0, o.jsxs)(
                                                        "div",
                                                        {
                                                            className: aG.Nr,
                                                            children: [
                                                                (0, o.jsxs)("div", {
                                                                    className: aG.MY,
                                                                    children: [
                                                                        null != s &&
                                                                            (0, o.jsx)("img", {
                                                                                src: s,
                                                                                alt: "",
                                                                                className: aG.Z2,
                                                                            }),
                                                                        (0, o.jsxs)("div", {
                                                                            className: aG.qi,
                                                                            children: [
                                                                                (0, o.jsx)(g.E, {
                                                                                    variant: "text-sm/semibold",
                                                                                    children: n?.name ?? "Unknown App",
                                                                                }),
                                                                                (0, o.jsx)(g.E, {
                                                                                    variant: "text-xs/normal",
                                                                                    color: "text-muted",
                                                                                    children: e,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, o.jsx)(p.$, {
                                                                            variant: "secondary",
                                                                            text: "Clear",
                                                                            onClick: () => (0, aP.e)(e, a),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, o.jsxs)(g.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: [
                                                                        "Last dismissed: ",
                                                                        new Date(l.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, o.jsxs)(g.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: ["Times dismissed: ", l.timesDismissed],
                                                                }),
                                                            ],
                                                        },
                                                        e,
                                                    );
                                                }),
                                                (0, o.jsx)(p.$, {
                                                    variant: "critical-primary",
                                                    text: "Clear All",
                                                    onClick: () => {
                                                        for (let e of s) (0, aP.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, o.jsx)("div", {
                      className: aG.Lj,
                      children: (0, o.jsxs)("div", {
                          className: aG.uW,
                          children: [
                              (0, o.jsxs)("div", {
                                  className: aG.aq,
                                  children: [
                                      (0, o.jsxs)(X.D, {
                                          variant: "heading-md/bold",
                                          children: ["Hook Calls (", h.length, ")"],
                                      }),
                                      (0, o.jsx)(p.$, { variant: "secondary", text: "Clear", onClick: () => x([]) }),
                                  ],
                              }),
                              0 === h.length
                                  ? (0, o.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "No calls recorded yet. Hook calls to useShouldShowGameUpsellForMultipleGames will appear here.",
                                    })
                                  : h.map((e, t) =>
                                        (0, o.jsxs)(
                                            "div",
                                            {
                                                className: aG.Nr,
                                                children: [
                                                    (0, o.jsxs)("div", {
                                                        className: aG.O9,
                                                        children: [
                                                            (0, o.jsx)(g.E, {
                                                                variant: "text-xs/semibold",
                                                                children: new Date(e.timestamp).toLocaleTimeString(),
                                                            }),
                                                            e.disabled &&
                                                                (0, o.jsx)("span", {
                                                                    className: aG.t7,
                                                                    children: "(disabled)",
                                                                }),
                                                            (0, o.jsx)(g.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: aO.M[e.dismissibleContent],
                                                            }),
                                                        ],
                                                    }),
                                                    0 === e.applicationIds.length
                                                        ? (0, o.jsx)(g.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: "No apps",
                                                          })
                                                        : e.applicationIds.map((t) => {
                                                              let a = E[t],
                                                                  n = a?.getIconURL(20),
                                                                  l = e.eligibleToShow.includes(t),
                                                                  i = e.excludedReasons[t];
                                                              return (0, o.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className: aG.Ss,
                                                                      children: [
                                                                          null != n &&
                                                                              (0, o.jsx)("img", {
                                                                                  src: n,
                                                                                  alt: "",
                                                                                  className: aG.rb,
                                                                              }),
                                                                          (0, o.jsx)("span", {
                                                                              className: aG.Jd,
                                                                              children: a?.name ?? t,
                                                                          }),
                                                                          l
                                                                              ? (0, o.jsx)("span", {
                                                                                    className: aG.OK,
                                                                                    children: "eligible",
                                                                                })
                                                                              : null != i
                                                                                ? (0, o.jsx)("span", {
                                                                                      className: aG.t7,
                                                                                      children: aB[i],
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
var aV = a(696986),
    aW = a(47167),
    aH = a(734057),
    az = a(994500),
    aK = a(310031),
    aY = a(394953),
    aq = a(618216);
let aJ = [
        {
            key: "channelName",
            cellClassName: q()(aq.Hn, aq.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, o.jsx)(g.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: q()(aq.Hn, aq.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, o.jsx)(g.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    aQ = [
        {
            key: "channelName",
            cellClassName: q()(aq.Hn, aq.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, o.jsx)(g.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: q()(aq.Hn, aq.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, o.jsx)(g.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: q()(aq.Hn, aq.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, o.jsx)(g.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function aX() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, aY.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: i,
            isLoadingComplete: s,
        } = (0, tA.cf)([aK.A], () => ({
            isLoading: aK.A.isLoading,
            hasLoadedEver: aK.A.hasLoadedEver,
            hasPreloaded: aK.A.hasPreloaded,
            hasMoreToLoad: aK.A.hasMoreToLoad,
            isLoadingComplete: aK.A.isLoadingComplete,
        })),
        r = (0, tA.bG)([aK.A], () => aK.A.currentRequestAnalyticsPayload),
        d = (0, tA.cf)([aK.A], () => aK.A.getChannelInfoMap()),
        c = (0, tA.cf)([aH.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = aH.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        u = (0, tA.cf)([aH.A], () =>
            t.reduce((e, t) => {
                let a = aH.A.getChannel(t);
                return ((e[t] = a ?? null), e);
            }, {}),
        ),
        m = (0, tA.bG)([aK.A], () => aK.A.getInboxMessages()),
        x = (0, tA.bG)([aK.A], () => aK.A.getDevOverrides().navOnClick);
    return (0, o.jsx)("div", {
        className: tX.nd,
        children: (0, o.jsxs)(v.Ip, {
            className: aq.Qs,
            children: [
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, o.jsxs)("div", { children: ["Inbox Message Count: ", m.length] }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, o.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, o.jsx)(h.d, {
                                label: "Nav On Click",
                                checked: !!x,
                                onChange: (e) => {
                                    tO.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, o.jsx)(aV.h, { size: 8 }),
                        (0, o.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, o.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, o.jsx)(tZ, {
                            columns: aJ,
                            data: Object.entries(u).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, aW.m1)(a, eo.default, az.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: "Store State" }),
                        (0, o.jsxs)("div", { children: ["Is Loading: ", a ? "\u2705" : "\u274C"] }),
                        (0, o.jsxs)("div", { children: ["Has Preloaded: ", l ? "\u2705" : "\u274C"] }),
                        (0, o.jsxs)("div", { children: ["Has Loaded Ever: ", n ? "\u2705" : "\u274C"] }),
                        (0, o.jsxs)("div", { children: ["Has More To Load: ", i ? "\u2705" : "\u274C"] }),
                        (0, o.jsxs)("div", { children: ["Is Loading Complete: ", s ? "\u2705" : "\u274C"] }),
                        (0, o.jsxs)("div", { children: ["Last Loading Trigger: ", r?.loadingTrigger] }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, o.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, o.jsx)(tZ, {
                            columns: aQ,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = c[a]) ? (0, aW.m1)(t, eo.default, az.A) : "",
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
var aZ = a(976860),
    a0 = a(396813),
    a1 = a(786800);
let a2 = function () {
    return (0, o.jsxs)("div", {
        className: a1.k,
        children: [
            (0, o.jsx)(g.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, o.jsx)(p.$, {
                onClick: () => {
                    ((0, a0.Ov)(), (0, aZ.pX)(em.BVt.QUEST_HOME));
                },
                text: "Clear History",
            }),
            (0, o.jsx)(g.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var a3 = a(271866),
    a6 = a(868511),
    a5 = a(147964),
    a8 = a(713913),
    a4 = a(13981),
    a7 = a(760716),
    a9 = a(115093),
    ne = a(970628);
let nt = window.GLOBAL_ENV.RELEASE_CHANNEL === a9.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function na() {
    let e = (0, a7.i)((e) => e.overrideApplicationId),
        t = (0, a7.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        n = (0, a7.i)((e) => e.overrideNitroEligibilityForSocialLayerStorefront),
        l = (0, a7.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
        i = (0, a7.i)((e) => e.isNitroEligibleForSocialLayerStorefront),
        s = (0, a7.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront),
        [r, u] = d.useState(nt),
        [m, x] = d.useState(em.FYj),
        g = d.useCallback(
            (e) => {
                e ? t(r) : t(null);
            },
            [r, t],
        ),
        v = d.useCallback(
            (e) => {
                (u(e), a && t(e));
            },
            [a, t],
        ),
        j = (0, a7.i)((e) => e.showSelfActivity),
        f = (0, a7.i)((e) => e.setShowSelfActivity),
        y = (0, a7.i)((e) => e.recommendationApplicationIds),
        E = (0, a7.i)((e) => e.setRecommendationApplicationIds),
        C = d.useCallback(
            (e) => {
                e ? E(m) : E(null);
            },
            [m, E],
        ),
        S = (0, c.bG)([a5.A], () => null != a5.A.testModeApplicationId),
        _ = d.useCallback((e) => {
            e ? (0, eY.openModal)((e) => (0, o.jsx)(a6.A, { ...e })) : a3.cL();
        }, []),
        N = (0, t1.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: r,
            source: t0.GameProfileSources.Embed,
            trackEntryPointImpression: !0,
        }),
        A = d.useCallback(
            (e) => {
                N?.(e);
            },
            [N],
        ),
        k = d.useCallback(() => {
            (0, aZ.pX)(em.BVt.COLLECTIBLES_SHOP_GAME_SHOP(r));
        }, [r]);
    return (0, o.jsx)("div", {
        className: q()(tX.nd, ne.n),
        children: (0, o.jsxs)("div", {
            className: ne.k,
            children: [
                (0, o.jsx)(b.k, { label: "Application ID", value: r, onChange: v }),
                (0, o.jsx)(X.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, o.jsx)(h.d, { label: "Override activity application ID", checked: a, onChange: g }),
                (0, o.jsx)(h.d, { label: "Show own voice activity (bypass self check)", checked: j, onChange: f }),
                (0, o.jsx)(h.d, { label: "Enable application test mode", checked: S, onChange: _ }),
                (0, o.jsx)(p.$, { text: "Open Game Profile Modal", onClick: A }),
                (0, o.jsx)(p.$, { text: "Navigate to App Game Shop", onClick: k }),
                (0, o.jsx)(X.D, { variant: "heading-lg/normal", children: "Game Exit Promo" }),
                Object.values(a8.U3).map((e) =>
                    (0, o.jsx)(
                        p.$,
                        {
                            text: "Preview",
                            onClick: () => {
                                ((0, a4.ik)({ type: "replaced" }), (0, a4.sC)(e.id, { isPreview: !0 }));
                            },
                        },
                        e.id,
                    ),
                ),
                (0, o.jsx)(X.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, o.jsx)(b.k, {
                    label: "Recommendation application IDs",
                    value: m,
                    onChange: x,
                    disabled: null == y,
                }),
                (0, o.jsx)(h.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != y,
                    onChange: C,
                }),
                (0, o.jsx)(h.d, {
                    label: "Override nitro eligibility for social layer storefront",
                    checked: n,
                    onChange: l,
                }),
                (0, o.jsx)(h.d, { label: "Is nitro eligible for social layer storefront", checked: i, onChange: s }),
            ],
        }),
    });
}
var nn = a(540999),
    nl = a(723702),
    ni = a(865116);
(a(79455), a(772958));
var ns = a(58736);
(a(558179), a(21574));
var nr = a(231545),
    no = a(761929),
    nd = a(180808);
function nc(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, no.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: no.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, o.jsx)("div", { onPointerDown: l, className: nd.Di });
}
function nu(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        i = d.useRef(null),
        [s, r] = d.useState(n);
    return (0, o.jsxs)("div", {
        ref: i,
        className: nd.kL,
        style: { minHeight: l, height: s },
        children: [
            (0, o.jsx)(nc, { resizableNode: i, minHeight: l, onResize: r }),
            (0, o.jsx)("div", { className: q()(nd.KZ, a), children: t }),
        ],
    });
}
var nm = a(231643),
    nh = a(362688);
(a(140346), nh.fu.NONE, nh.fu.NONE);
var nx = a(825484),
    np = a(688810),
    ng = a(975460),
    nv = a(206828),
    nj = a(487431),
    nf = a(712440),
    nb = a(733110),
    ny = a(134861),
    nE = a(71393),
    nC = a(967198),
    nS = a(942370),
    n_ = a(105292),
    nN = a(538524),
    nA = a(681135);
function nk() {
    var e;
    let t,
        a,
        n = d.useRef(null),
        { analyticsLocations: l } = (0, np.Ay)(tk.A.DEV_TOOLS),
        [i, s] = d.useState(""),
        r = (0, c.bG)([nC.A], () => nC.A.getGuildId()),
        u = (0, c.bG)([nE.A], () => nE.A.getGuild(r)),
        m = u?.gameApplicationIds ?? [],
        h = (0, tJ.A)(m).filter((e) => null != e),
        x = (0, c.bG)([C.Ay, N.A], () => (0, S.A)(C.Ay, N.A)),
        v = (0, tJ.h)(i),
        j = (0, ng.g)(v),
        f = (0, c.yK)(
            [tq.A],
            () => v?.linkedGames?.map((e) => tq.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        E = (0, nv.RD)(v, { allowedFlows: [nS._.RPC], debug: !0 }),
        _ = (0, nv.RD)(v, { allowedFlows: [nS._.WEB], debug: !0 }),
        A = (0, c.bG)([ny.A], () => null != j && ny.A.isConnected(j.id)),
        k = (0, nv.RD)(v, { debug: !0 }),
        { canDeauthorize: I, deauthorize: D } =
            ((e = k.connectionApp?.id),
            (t = (0, c.bG)([nb.default], () => nb.default.getNewestTokenForApplication(e))),
            (a = d.useCallback(() => {
                null != t && nf.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, o.jsxs)("div", {
        ref: n,
        className: q()(tX.nd, nA.nd),
        children: [
            (0, o.jsxs)("div", {
                className: nA.kL,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, o.jsx)(b.k, { label: "Application ID", value: i, onChange: s }),
                    null != x && null != x.id
                        ? (0, o.jsx)(p.$, {
                              onClick: () => s(x.id),
                              variant: "primary",
                              text: `Use detected game: ${x.name} (${x.id})`,
                          })
                        : null,
                    null != u
                        ? h.length > 0
                            ? (0, o.jsxs)("div", {
                                  className: nA.Mc,
                                  children: [
                                      (0, o.jsxs)(g.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: [u.name, " (", u.id, ") \xb7 Official games"],
                                      }),
                                      (0, o.jsx)(nx.e, {
                                          size: "sm",
                                          wrap: !0,
                                          children: h.map((e) =>
                                              (0, o.jsx)(
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
                            : (0, o.jsxs)(g.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  children: [u.name, " (", u.id, ") \xb7 No official games"],
                              })
                        : (0, o.jsx)(g.E, {
                              variant: "text-md/normal",
                              color: "text-subtle",
                              children: "No guild selected",
                          }),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsxs)("div", {
                        className: nA.J3,
                        children: [
                            (0, o.jsxs)(g.E, {
                                variant: "text-md/normal",
                                children: ["Application Name: ", null != v ? v.name : "N/A"],
                            }),
                            (0, o.jsxs)(g.E, {
                                variant: "text-md/normal",
                                children: [
                                    "Linked Games:",
                                    " ",
                                    f.length > 0
                                        ? f.map((e) => ((0, ng.t)(v)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                        : "N/A",
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, o.jsx)(y.c, {}),
            (0, o.jsxs)("div", {
                className: nA.kL,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-lg/normal", children: "Authorization status" }),
                    (0, o.jsx)(nj.VT, {
                        flow: nS._.RPC,
                        showGlobalFlowToggle: !0,
                        overallStatus: E.debug.isSubscribedToAuthorizeRequest
                            ? nj.nW.OVERALL_GOOD
                            : A
                              ? nj.nW.WARN
                              : nj.nW.OVERALL_BAD,
                        name: n_.intl.string(nN.default.AGLx00),
                        steps: [
                            {
                                status: A ? nj.nW.GOOD : nj.nW.BAD,
                                text: n_.intl.string(nN.default.kxF9br),
                                description: A ? null : n_.intl.string(nN.default.PFxxJa),
                                learnMoreLink: A
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: E.debug.isSubscribedToAuthorizeRequest
                                    ? nj.nW.GOOD
                                    : A
                                      ? nj.nW.WARN
                                      : nj.nW.BAD,
                                text: n_.intl.string(nN.default.S94dzs),
                                description:
                                    E.debug.isSubscribedToAuthorizeRequest || !A
                                        ? null
                                        : n_.intl.string(nN.default.aTULMB),
                                learnMoreLink:
                                    E.debug.isSubscribedToAuthorizeRequest || !A
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: k.chosenFlow === nS._.RPC,
                    }),
                    (0, o.jsx)(nj.VT, {
                        flow: nS._.WEB,
                        showGlobalFlowToggle: !0,
                        overallStatus: _.debug.hasConnectionEntrypointUrl ? nj.nW.OVERALL_GOOD : nj.nW.OVERALL_BAD,
                        name: n_.intl.string(nN.default.K3ObrU),
                        steps: [
                            {
                                status: _.debug.hasConnectionEntrypointUrl ? nj.nW.GOOD : nj.nW.BAD,
                                text: n_.intl.string(nN.default["8a7IrV"]),
                                description: _.debug.hasConnectionEntrypointUrl
                                    ? n_.intl.formatToPlainString(nN.default["9iLeL2"], {
                                          url: _.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: k.chosenFlow === nS._.WEB,
                    }),
                    (0, o.jsx)(nj.Sy, {
                        status: k.hasAlreadyLinked ? nj.nW.OVERALL_GOOD : nj.nW.OVERALL_BAD,
                        text: n_.intl.string(n_.t["Vu/zmQ"]),
                    }),
                    0 === k.debug.validFlows.length &&
                        (0, o.jsx)(g.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: n_.intl.string(nN.default.eg0mNa),
                        }),
                    (0, o.jsx)(p.$, {
                        disabled: !k.canStartAuthorization,
                        fullWidth: !0,
                        onClick: () => k.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, o.jsxs)(nx.e, {
                        fullWidth: !0,
                        children: [
                            (0, o.jsx)(p.$, {
                                disabled: !E.canStartAuthorization,
                                onClick: () => E.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start In-App Authorization",
                            }),
                            (0, o.jsx)(p.$, {
                                disabled: !_.canStartAuthorization,
                                onClick: () => _.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start Web Authorization",
                            }),
                        ],
                    }),
                    (0, o.jsx)(p.$, {
                        disabled: !I,
                        fullWidth: !0,
                        onClick: D,
                        variant: "critical-primary",
                        text: "Deauthorize",
                    }),
                ],
            }),
            v?.applicationAccountLinkBenefitConfig != null &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(y.c, {}),
                        (0, o.jsxs)("div", {
                            className: nA.kL,
                            children: [
                                (0, o.jsx)(X.D, { variant: "heading-lg/normal", children: "Benefit configuration" }),
                                (0, o.jsx)("div", {
                                    className: nA.Nr,
                                    children: (0, o.jsxs)("div", {
                                        className: nA.Tc,
                                        children: [
                                            null != v.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, o.jsx)("img", {
                                                    src: v.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: nA.L8,
                                                }),
                                            (0, o.jsx)(g.E, {
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
var nI = a(427358),
    nD = a(584454),
    nT = a(175452);
function nR() {
    let e = (0, c.bG)([nI.A], () => nI.A.getDevToolsOverride()),
        t = (0, c.bG)([eo.default], () => (null != e ? (eo.default.getUser(e.otherUserId) ?? null) : null), [e]),
        [a, n] = d.useState(t?.username ?? ""),
        [l, i] = d.useState(e?.communicationProbability ?? 1),
        [s, r] = d.useState(e?.vcProbability ?? 1),
        u = a.trim(),
        m = (0, c.bG)([eo.default], () => (u.length > 0 ? (eo.default.findByTag(u) ?? null) : null), [u]),
        h = u.length > 0 && null == m,
        x = null != m && null != l && null != s;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(tY.B, {
                gap: 8,
                padding: 8,
                children: [
                    (0, o.jsx)(g.E, { variant: "text-md/semibold", children: "User Affinity Override" }),
                    (0, o.jsx)(g.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: "Injects a temporary affinity entry for the given user, resets on reload or logout.",
                    }),
                    (0, o.jsx)(b.k, {
                        label: "Target username",
                        value: a,
                        onChange: n,
                        placeholder: "pomelo_name",
                        error: h ? "No local user matches that username." : void 0,
                    }),
                    (0, o.jsxs)(tY.B, {
                        gap: 8,
                        direction: "horizontal",
                        align: "end",
                        children: [
                            (0, o.jsx)(nD.Q, {
                                label: "Comm. affinity",
                                mode: "decimal",
                                min: 0,
                                max: 1,
                                step: 0.1,
                                value: l,
                                onChange: i,
                            }),
                            (0, o.jsx)(nD.Q, {
                                label: "Voice affinity",
                                mode: "decimal",
                                min: 0,
                                max: 1,
                                step: 0.1,
                                value: s,
                                onChange: r,
                            }),
                            (0, o.jsxs)(nx.e, {
                                children: [
                                    (0, o.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: null == e ? "Apply" : "Update",
                                        onClick: function () {
                                            x &&
                                                null != m &&
                                                null != l &&
                                                null != s &&
                                                (0, nT.C)({
                                                    userId: m.id,
                                                    communicationProbability: l,
                                                    vcProbability: s,
                                                });
                                        },
                                        disabled: !x,
                                    }),
                                    (0, o.jsx)(p.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: "Clear",
                                        onClick: function () {
                                            ((0, nT.C)(null), n(""), i(1), r(1));
                                        },
                                        disabled: null == e,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != e &&
                        (0, o.jsxs)(g.E, {
                            variant: "text-xs/normal",
                            color: "text-feedback-positive",
                            children: ["Active: user ", t?.username ?? "unknown"],
                        }),
                ],
            }),
            (0, o.jsx)(y.c, {}),
        ],
    });
}
var nO = a(541660);
function nw(e) {
    let { title: t, sortKey: a, activeSortKey: n, sortDir: l, onClick: i } = e,
        s = n === a ? ("desc" === l ? " \u25BC" : " \u25B2") : "";
    return (0, o.jsx)(J.D, {
        className: nO.K8,
        onClick: () => i(a),
        children: (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: t + s }),
    });
}
function nM() {
    let [e, t] = d.useState("affinity"),
        [a, n] = d.useState("desc"),
        l = d.useCallback(
            (a) => {
                e === a ? n((e) => ("asc" === e ? "desc" : "asc")) : (t(a), n("username" === a ? "asc" : "desc"));
            },
            [e],
        ),
        i = (0, c.yK)([nI.A, eo.default], () =>
            nI.A.getUserAffinities().map((e) => {
                let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
                return { user: eo.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
            }),
        ),
        s = d.useMemo(
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
        r = d.useMemo(
            () => [
                {
                    key: "user",
                    cellClassName: nO.iL,
                    renderHeader: () =>
                        (0, o.jsx)(nw, {
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
                        (0, o.jsx)(nw, {
                            title: "COMMUNICATION AFFINITY",
                            sortKey: "affinity",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nO.nz,
                    render(e) {
                        let { affinity: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "vcProbability",
                    renderHeader: () =>
                        (0, o.jsx)(nw, {
                            title: "VOICE AFFINITY",
                            sortKey: "vcProbability",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nO.nz,
                    render(e) {
                        let { vcProbability: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "isFriend",
                    renderHeader: () => (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
                    cellClassName: nO.nz,
                    render(e) {
                        let { isFriend: t } = e;
                        return t.toString();
                    },
                },
            ],
            [e, a, l],
        );
    return (0, o.jsxs)("div", {
        className: nO.nd,
        children: [(0, o.jsx)(nR, {}), i.length > 0 && (0, o.jsx)(tZ, { columns: r, rowClassName: nO.nM, data: s })],
    });
}
var nP = a(379257),
    nL = a(306537),
    nU = a(486866);
function nG() {
    return (0, o.jsx)("div", {
        className: q()(tX.nd, nU.k),
        children: (0, o.jsxs)("div", {
            children: [
                (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, o.jsx)(y.c, { gap: 16 }),
                (0, o.jsxs)("div", {
                    className: nU.h,
                    children: [
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, eY.openModalLazy)(
                                    async () => {
                                        let { default: e } = await a.e("629079").then(a.bind(a, 357578));
                                        return (t) => (0, o.jsx)(e, { ...t });
                                    },
                                    { onCloseCallback: void 0 },
                                ),
                            fullWidth: !0,
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Modal",
                            onClick: () =>
                                nP.A.showAgeVerificationGetStartedModal({ entryPoint: nL.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var nF = a(536637),
    nB = a.n(nF),
    n$ = a(862482),
    nV = a(624479),
    nW = a(555704),
    nH = a(285796),
    nz = a(241326),
    nK = a(683438),
    nY = a(297413),
    nq = a(379078),
    nJ = a(704554),
    nQ = a(957565),
    nX = a(58703),
    nZ = a(80703),
    n0 = a(280450);
let n1 = 0,
    n2 = [],
    n3 = 0,
    n6 = [],
    n5 = !1;
class n8 extends c.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(n0.default, nn.A);
    }
    get loggedEvents() {
        return n2;
    }
    get loggedEventsVersion() {
        return n3;
    }
    get loggedTriggers() {
        return n6;
    }
    get trackTriggers() {
        return n5;
    }
}
let n4 = new n8(tO.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        nn.A.isDeveloper &&
            (n2.push({
                key: (n1++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, nZ.d)(n) : n0.default.getId(),
                timestamp: new Date(),
            }),
            n3++,
            n2.length > 500 && (n2 = n2.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: i, previouslyTracked: s } = e;
        !nn.A.isDeveloper ||
            (n5 &&
                (n6 = [
                    ...n6,
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
                n6.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        n5 = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        ((n2 = []), n3++, (n6 = []));
    },
});
var n7 = a(658675);
function n9(e) {
    let { className: t, children: a } = e;
    return (0, o.jsx)("dl", { className: q()(tX.qo, t), children: a });
}
function le(e) {
    let { name: t, children: a, copyValue: n } = e,
        [l, i] = d.useState(!1);
    return (
        d.useEffect(() => {
            if (l) {
                let e = setTimeout(() => i(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)("dt", { className: tX.Bz, children: t }),
                (0, o.jsxs)("dd", {
                    className: tX.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, o.jsx)(J.D, {
                                  tag: "span",
                                  className: tX.nH,
                                  onClick: () => (0, nQ.C)(n, () => i(!0)),
                                  children: l
                                      ? (0, o.jsx)(tc.U, { color: "currentColor", size: "sm" })
                                      : (0, o.jsx)(nV.CopyIcon, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
}
function lt(e) {
    let { value: t } = e;
    return (0, o.jsx)(n7.P, { checked: t });
}
var la = a(412966);
let ln = [
    {
        key: "Event",
        cellClassName: la.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "Location",
        cellClassName: la.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function ll(e) {
    let { children: t } = e;
    return (0, o.jsx)(v.Ip, { orientation: "auto", className: la._D, children: (0, o.jsx)("dl", { children: t }) });
}
function li(e) {
    let { name: t, children: a, copyValue: n } = e,
        [l, i] = d.useState(!1);
    return (
        d.useEffect(() => {
            if (l) {
                let e = setTimeout(() => i(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, o.jsxs)("div", {
            className: la.fY,
            children: [
                (0, o.jsx)("dt", { className: la.m2, children: t }),
                (0, o.jsx)("dd", { children: a }),
                (0, o.jsx)(J.D, {
                    tag: "span",
                    className: la.nH,
                    onClick: () => (0, nQ.C)(JSON.stringify(n), () => i(!0)),
                    children: l
                        ? (0, o.jsx)(tc.U, { color: "currentColor", size: "sm" })
                        : (0, o.jsx)(nV.CopyIcon, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let ls = new Set(["client_performance_cpu", "client_performance_memory"]),
    lr = [
        {
            id: "details",
            name: "Details",
            group: nh.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: i,
                        filteredEvents: s,
                    } = e,
                    r = eo.default.getUser(l),
                    d = nB()(n);
                return (0, o.jsxs)("div", {
                    className: la.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, o.jsxs)(ns.Ay, {
                            className: q()(tX.jr, la.nZ),
                            children: [
                                (0, o.jsx)(ns.Ay.Icon, { icon: nW.U, tooltip: t }),
                                (0, o.jsxs)(ns.Ay.Title, {
                                    wrapperClassName: la.qd,
                                    children: [
                                        t,
                                        (0, o.jsx)(J.D, {
                                            tag: "span",
                                            className: la.KE,
                                            onClick: () => (0, nQ.C)(t),
                                            children: (0, o.jsx)(nV.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, o.jsx)(ns.Ay.Icon, {
                                    icon: nV.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nQ.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: r?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, o.jsx)(ns.Ay.Icon, { icon: nH.a, tooltip: "Close", onClick: i }),
                            ],
                        }),
                        (0, o.jsxs)(n9, {
                            className: la.ZK,
                            children: [
                                (0, o.jsx)(le, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, o.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nX.i$)(d, "LLLL"),
                                        children: ["(", nB().locale(), ") ", (0, nX.mk)(d)],
                                    }),
                                }),
                                null != r &&
                                    (0, o.jsx)(le, {
                                        name: "User",
                                        copyValue: r.id,
                                        children: (0, o.jsx)(nY.A, { user: r }),
                                    }),
                                (0, o.jsx)(le, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, o.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, o.jsx)(ll, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = ls.has(a)
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
                                return (0, o.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, o.jsx)(
                                                li,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, o.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, o.jsx)("code", {
                                                                  className: la.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, o.jsx)(
                                                    li,
                                                    {
                                                        name: `${a}_avg:`,
                                                        copyValue: { [a]: n || null },
                                                        children: (0, o.jsxs)("code", {
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
    lo = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(lo)
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
    ld = {
        searchType: nq.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function lc() {
    let e = d.useRef(null),
        [t, a] = d.useState(""),
        n = (0, c.bG)([n4], () => n4.loggedEventsVersion),
        [l, i] = d.useState(() => Object.keys(lo)),
        [s, r] = d.useState(n4.loggedEvents),
        u = d.useCallback((e) => {
            r(e);
        }, []);
    (0, nJ.RT)(t, n4.loggedEvents, u, ld, [n]);
    let m = s.filter((e) => {
            for (let t of l) if (lo[t].filter(e)) return !0;
            return !1;
        }),
        [h, x] = d.useState(void 0),
        p = m.find((e) => e.key === h),
        { TabBar: g, renderSelectedTab: v } = (0, nm.A)({ tabs: lr }, []);
    return (0, o.jsxs)("div", {
        ref: e,
        className: q()(tX.nd, la.nd),
        children: [
            (0, o.jsxs)("div", {
                className: la.rh,
                children: [
                    (0, o.jsx)(n$.$n, {
                        className: la.Q$,
                        look: n$.$n.Looks.BLANK,
                        size: n$.$n.Sizes.ICON,
                        onClick: Z.eY,
                        children: (0, o.jsx)("span", {
                            title: n_.intl.string(n_.t.VkKicb),
                            children: (0, o.jsx)(nz.TrashIcon, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": n_.intl.string(n_.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, o.jsx)("div", { className: la.Bi }),
                    (0, o.jsx)("div", {
                        className: la.uW,
                        children: Object.entries(lo).map((e) => {
                            let [t, a] = e;
                            return (0, o.jsx)(
                                J.D,
                                {
                                    className: q()(la.pb, l.includes(t) && la.bx),
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
            (0, o.jsx)("div", {
                className: la.rh,
                children: (0, o.jsx)(nK.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, o.jsx)(tZ, { columns: ln, data: m, selectedRowKey: h, onClickRow: (e) => x(e.key) }),
            null != p &&
                (0, o.jsxs)(nu, {
                    className: la.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, o.jsx)(g, {}), v({ loggedEvent: p, onClose: () => x(void 0), filteredEvents: m })],
                }),
        ],
    });
}
var lu = a(382483),
    lm = a(385113),
    lh = a(317672);
function lx(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, o.jsxs)(tY.B, {
        gap: 8,
        padding: 8,
        className: lh.lt,
        children: [
            (0, o.jsx)(g.E, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, o.jsxs)(g.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, o.jsxs)(g.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, o.jsxs)(g.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, o.jsxs)(g.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, o.jsxs)(g.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, o.jsx)(y.c, {}),
            (0, o.jsxs)(g.E, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, o.jsx)(g.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, o.jsxs)(
                          tY.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: lh.YL,
                              children: [
                                  (0, o.jsx)(g.E, { variant: "text-xs/semibold", color: "text-default", children: t }),
                                  (0, o.jsxs)(g.E, {
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
function lp(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, o.jsxs)(tY.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? lh.FM : lh.gt,
        children: [
            (0, o.jsx)(J.D, {
                className: lh.Av,
                onClick: n,
                children: (0, o.jsxs)(tY.B, {
                    gap: 4,
                    children: [
                        (0, o.jsx)(g.E, { variant: "text-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.config_id, " \xb7 ", t.application_id],
                        }),
                    ],
                }),
            }),
            (0, o.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Refetch",
                onClick: () => (0, lu.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function lg() {
    let e = (0, c.bG)([lm.A], () => lm.A.getFeaturedFetchState());
    return (0, o.jsxs)(tY.B, {
        gap: 8,
        children: [
            (0, o.jsxs)(tY.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, o.jsx)(g.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, o.jsxs)(g.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, o.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, lu.Wq)({ force: !0 }),
            }),
        ],
    });
}
function lv() {
    let e = (0, c.bG)([lm.A], () => lm.A.getDeveloperFetchState());
    return (0, o.jsxs)(tY.B, {
        gap: 8,
        children: [
            (0, o.jsxs)(tY.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, o.jsx)(g.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, o.jsxs)(g.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, o.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, lu.i$)({ force: !0 }),
            }),
        ],
    });
}
function lj() {
    let [e, t] = d.useState(""),
        a = (0, c.bG)([lm.A], () => (e.length > 0 ? lm.A.getFetchState(e) : null)),
        n = (0, c.bG)([lm.A], () => (e.length > 0 ? lm.A.getConfigs(e) : null));
    return (0, o.jsxs)(tY.B, {
        gap: 8,
        children: [
            (0, o.jsx)(g.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, o.jsx)(b.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, o.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, lu.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, o.jsxs)(g.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, o.jsx)(tY.B, { gap: 4, children: n.map((e) => (0, o.jsx)(lx, { config: e }, e.config_id)) }),
        ],
    });
}
function lf(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, c.bG)([lm.A], () => lm.A.getFeaturedFetchState());
    return (0, o.jsxs)(tY.B, {
        gap: 8,
        children: [
            (0, o.jsxs)(g.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === lm.e.FETCHING &&
                (0, o.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, o.jsx)(
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
function lb(e) {
    let { config: t } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(y.c, {}),
            (0, o.jsxs)(tY.B, {
                gap: 8,
                children: [
                    (0, o.jsx)(g.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, o.jsx)(lx, { config: t }),
                ],
            }),
        ],
    });
}
function ly() {
    let [e, t] = d.useState(null),
        a = Object.values((0, c.bG)([lm.A], () => lm.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, o.jsx)(v.Ar, {
        children: (0, o.jsxs)(tY.B, {
            gap: 16,
            padding: 8,
            className: lh.zr,
            children: [
                (0, o.jsx)(X.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, o.jsx)(p.$, {
                    size: "sm",
                    variant: "critical-secondary",
                    text: "Reset store",
                    onClick: () => tO.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEBUG_RESET" }),
                }),
                (0, o.jsx)(lg, {}),
                (0, o.jsx)(y.c, {}),
                (0, o.jsx)(lv, {}),
                (0, o.jsx)(y.c, {}),
                (0, o.jsx)(lj, {}),
                (0, o.jsx)(y.c, {}),
                (0, o.jsx)(lf, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, o.jsx)(lb, { config: n }),
            ],
        }),
    });
}
var lE = a(513520),
    lC = a(130100),
    lS = a(468747);
let l_ = [
    {
        key: "Channel",
        cellClassName: lS._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: lS.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function lN() {
    d.useEffect(() => {
        (0, lE.I)();
    }, []);
    let e = (0, c.yK)([lC.A, aH.A], () =>
        lC.A.getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: aH.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, o.jsx)(tZ, { className: tX.nd, columns: l_, rowClassName: lS.nM, data: e });
}
function lA() {
    return (0, o.jsxs)(g.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, o.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var lk = a(105565),
    lI = a(47899),
    lD = a(333714);
function lT(e) {
    switch (e) {
        case lk.r.DC_DISMISSED:
            return "DISMISS:";
        case lk.r.DC_SHOWN:
            return "SHOW:";
        case lk.r.DC_SHOW_REQUEST:
            return "REQUEST TO SHOW:";
        default:
            return "UNKNOWN TYPE:";
    }
}
let lR = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${aO.M[a]}`;
            },
        },
    ],
    lO = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${aO.M[t]}`;
            },
        },
    ];
function lw() {
    let e = (0, c.bG)([lk.A], () => lk.A.getDCFEvents()),
        t = (0, lI.Ay)((e) => e.candidates),
        a = (0, lI.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? nB()(a).fromNow() : "n/a",
        l = (0, lI.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        i = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: lT(t) + a.toString(), event: lT(t), dismissibleContent: a };
        }),
        s = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, o.jsxs)("div", {
        className: lD.KE,
        children: [
            (0, o.jsxs)("div", { className: lD.pq, children: ["Last winner time: ", n] }),
            (0, o.jsx)("br", {}),
            (0, o.jsxs)("div", { className: lD.pq, children: ["Last winner: ", null != l ? aO.M[l] : "None"] }),
            (0, o.jsx)("br", {}),
            (0, o.jsx)("div", {
                className: lD.uI,
                children: (0, o.jsx)(tZ, { className: lD.Th, columns: lO, data: s }),
            }),
            (0, o.jsx)("br", {}),
            (0, o.jsx)(tZ, { columns: lR, data: i }),
        ],
    });
}
var lM = a(689175),
    lP = a(541689),
    lL = a(199773);
function lU() {
    let e = (0, d.useCallback)((e) => {
        let t = new Set(lG());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        (a.unshift(e), tK.w.set("RecentDismissibleOverrides", a));
    }, []);
    return [lG(), e];
}
function lG() {
    return tK.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var lF = a(662546),
    lB = a(643278),
    l$ = a(256787),
    lV = a(20439);
let lW = d.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = aO.M[a],
        { isDismissed: i, handleToggleDismissState: s } = (0, lV.A)(l),
        [r, c] = d.useState(!1),
        u = d.useCallback(() => {
            (n?.(a), s());
        }, [n, s, a]),
        m = d.useCallback(
            (e) => {
                (e.preventDefault(), c(!0), navigator.clipboard.writeText(a.toLowerCase()));
            },
            [a],
        );
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(tY.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, o.jsx)(eH.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: r ? lF.O : lB.ClipboardListIcon,
                        onClick: m,
                        "aria-label": r ? "Copied" : "Copy",
                    }),
                    (0, o.jsx)(h.d, {
                        label: `${a.toLowerCase()} (${aO.M[a]})`,
                        description: (0, l$.Zm)(l)
                            ? (function (e) {
                                  let t = aM.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
            (0, o.jsx)(y.c, {}),
        ],
    });
});
function lH(e) {
    let { items: t, onChange: a } = e,
        [n, l] = lU(),
        i = (0, d.useCallback)(
            (e) => {
                (l(e), a?.(e));
            },
            [l, a],
        );
    return (0, o.jsx)(tY.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, o.jsx)(lW, { content: e, onChange: i }, e)),
    });
}
function lz(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lI.Ay)((e) => e.recentlyShown),
        [n, l] = lU(),
        i = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(aO.M[e]))
            .slice(0, 3);
    return 0 === i.length
        ? null
        : (0, o.jsx)(m.n, { label: "Recent Overrides", children: (0, o.jsx)(lH, { items: i }) });
}
function lK(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lI.Ay)((e) => e.recentlyShown)
            .map((e) => aO.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, o.jsx)(m.n, { label: "Recently Shown", children: (0, o.jsx)(lH, { items: a }) });
}
var lY = a(607734);
function lq() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
            upsellBackoffOverridden: n,
        } = (0, c.cf)([lL.A], () => ({
            dailyCapReached: lL.A.hasUserHitDCCap(),
            dailyCapOverridden: lL.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lL.A.newUserMinAgeRequiredOverridden,
            upsellBackoffOverridden: lL.A.upsellBackoffOverridden,
        })),
        [l, i] = d.useState(""),
        [s, r] = d.useState(20),
        u = d.useMemo(
            () =>
                Object.keys(aO.M)
                    .filter((e) => e.toLowerCase().includes(l.toLowerCase()))
                    .reverse(),
            [l],
        ),
        x = d.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < u.length && r((e) => e + 100);
            },
            [s, u.length],
        );
    return (0, o.jsx)(lM.Ch, {
        onScroll: x,
        children: (0, o.jsxs)("div", {
            className: lY.KE,
            children: [
                (0, o.jsxs)(m.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, o.jsxs)(tY.B, {
                            gap: 4,
                            children: [
                                (0, o.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, lP.Ab)(),
                                }),
                                (0, o.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, aw.nT)(),
                                }),
                                (0, o.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, aw.D1)(),
                                }),
                                (0, o.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, o.jsx)(h.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: lP.SE,
                        }),
                        (0, o.jsx)(h.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: lP.U$,
                        }),
                        (0, o.jsx)(h.d, {
                            label: "Override 60-Minute Backoff Between DC Displays",
                            checked: n,
                            onChange: lP.M1,
                        }),
                    ],
                }),
                (0, o.jsx)(lK, {}),
                (0, o.jsx)(lz, {}),
                (0, o.jsxs)(m.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, o.jsx)(nK.I, { query: l, onChange: i, onClear: () => i("") }),
                        (0, o.jsx)(lH, { items: u.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lJ = a(276086),
    lQ = a(154323),
    lX = a(504565);
function lZ() {
    let e = (0, c.bG)([lQ.A], () => lQ.A.allWithDescriptions(), [], c.My),
        t = d.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(
                                h.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lJ.L)(t, e) },
                                t,
                            ),
                            (0, o.jsx)(y.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, o.jsxs)("div", {
        className: lX.kL,
        children: [
            (0, o.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lX.x6,
                children: (0, o.jsx)(p.$, { variant: "primary", text: "Clear all", onClick: lJ.$, fullWidth: !0 }),
            }),
            (0, o.jsx)("div", { className: lX.vu, children: t }),
        ],
    });
}
var l0 = a(106839);
function l1() {
    let e = (0, c.bG)([t2.A], () => t2.A.detectableGamesEtag),
        t = (0, c.bG)([t2.A], () => t2.A.lastFetched),
        a = (0, c.bG)([t2.A], () => t2.A.games.length);
    return (0, o.jsxs)(tY.B, {
        gap: 4,
        children: [
            (0, o.jsx)(X.D, { variant: "heading-sm/bold", children: "Cache Status" }),
            (0, o.jsxs)(g.E, {
                variant: "text-sm/normal",
                children: [(0, o.jsx)("strong", { children: "Total games:" }), " ", a],
            }),
            (0, o.jsxs)(g.E, {
                variant: "text-sm/normal",
                children: [
                    (0, o.jsx)("strong", { children: "ETag:" }),
                    " ",
                    "" === e ? "(empty)" : (0, o.jsx)("span", { className: l0.ti, children: e }),
                ],
            }),
            (0, o.jsxs)(g.E, {
                variant: "text-sm/normal",
                children: [
                    (0, o.jsx)("strong", { children: "Last fetched:" }),
                    " ",
                    null == t ? "never" : new Date(t).toLocaleString(),
                ],
            }),
        ],
    });
}
function l2(e) {
    let { game: t } = e,
        { data: a } = (0, a_.I)(t.id),
        n = null != a && a.name !== t.name;
    return (0, o.jsxs)(tY.B, {
        gap: 12,
        className: l0.f_,
        children: [
            (0, o.jsxs)(tY.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                children: [
                    (0, o.jsx)(aC.A, { game: a, size: aC.M.LARGE }),
                    (0, o.jsxs)(tY.B, {
                        gap: 4,
                        children: [
                            (0, o.jsx)(X.D, { variant: "heading-lg/bold", children: t.name }),
                            (0, o.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: t.id }),
                        ],
                    }),
                ],
            }),
            (0, o.jsxs)(tY.B, {
                gap: 4,
                children: [
                    (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "GameStore" }),
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children:
                            null == a
                                ? "No record fetched. The icon above comes from here, not from the detectable payload, so it is blank."
                                : `name: ${a.name}`,
                    }),
                    n &&
                        (0, o.jsx)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            children: "Differs from the detectable name above.",
                        }),
                ],
            }),
            (0, o.jsxs)(tY.B, {
                gap: 4,
                className: l0.Uq,
                children: [
                    (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "DetectableGameStore" }),
                    (0, o.jsx)("pre", { className: l0.aY, children: JSON.stringify(t, null, 2) }),
                ],
            }),
        ],
    });
}
function l3() {
    let [e, t] = d.useState(null),
        [a, n] = d.useState(""),
        l = (0, c.bG)([t2.A], () => t2.A.games),
        i = d.useMemo(
            () =>
                l.filter((e) => null != e.name && "" !== e.name).map((e) => ({ id: e.id, value: e.id, label: e.name })),
            [l],
        ),
        s = d.useCallback((e) => {
            (t(e), null != e && n(""));
        }, []),
        r = d.useCallback((e) => {
            (n(e), e.trim().length > 0 && t(null));
        }, []),
        u = a.trim(),
        m = u.length > 0 ? u : (e ?? void 0),
        h = (0, c.bG)([t2.A], () => (null != m ? (t2.A.getDetectableGame(m) ?? null) : null), [m]);
    return (0, o.jsx)("div", {
        className: q()(tX.nd, l0.kL),
        children: (0, o.jsxs)(tY.B, {
            gap: 16,
            padding: 12,
            className: l0.rf,
            children: [
                (0, o.jsxs)(tY.B, {
                    gap: 4,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-md/bold", children: "Detectable Cache" }),
                        (0, o.jsx)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Inspect the local detectable games cache. Use this to verify whether a SKU or executable change has propagated to your client.",
                        }),
                    ],
                }),
                (0, o.jsx)(l1, {}),
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, o.jsx)(aE.Z, {
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
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, o.jsx)(b.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: r,
                        }),
                    ],
                }),
                null != m &&
                    (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(y.c, {}),
                            null != h
                                ? (0, o.jsx)(l2, { game: h })
                                : (0, o.jsxs)(g.E, {
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
var l6 = a(858899),
    l5 = a(123292),
    l8 = a(780907),
    l4 = a(56562);
let l7 = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
    { label: "World of Warcraft", value: "356875762940379136" },
];
function l9(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, a_.I)(t.id);
    return (0, o.jsxs)(tY.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, o.jsx)(aC.A, { game: n }),
            (0, o.jsxs)(tY.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, o.jsx)(g.E, { variant: "text-md/normal", children: n?.name }),
                    a && (0, o.jsx)(g.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function ie() {
    let e = (0, c.bG)([C.Ay], () => C.Ay.getRunningGames()),
        t = (0, c.bG)([C.Ay], () => C.Ay.getDebugRunningGame()),
        [a, n] = (0, d.useState)(t?.id ?? ""),
        l = (0, d.useMemo)(
            () =>
                l7.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        );
    function i(e) {
        if (null == e || "" === e) return void (0, l8.xt)(null);
        let t = t2.A.getDetectableGame(e),
            a = t?.executables[0],
            n = t?.thirdPartySkus[0]?.distributor;
        if (null == t || null == a) return (0, l6.P0)({ text: "Invalid Game ID", variant: "critical" });
        (0, l8.xt)({
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
            fullscreenType: l4.aI.UNKNOWN,
            cmdLine: "",
            nativeProcessObserverId: -1,
        });
    }
    return (0, o.jsxs)(tY.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, o.jsxs)(tY.B, {
                gap: 8,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, o.jsx)("div", {
                            children: e.map((e) =>
                                (0, o.jsx)(l9, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, o.jsx)(y.c, {}),
            (0, o.jsxs)(tY.B, {
                gap: 8,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, o.jsx)(b.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, o.jsx)(aE.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, o.jsxs)(tY.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, o.jsx)(l5.Q, { variant: "secondary", text: "Clear", onClick: () => i(null) }),
                            (0, o.jsx)(p.$, { variant: "primary", text: "Detect Game", onClick: () => i(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var it = a(636537),
    ia = a(240248),
    il = a(974009);
function ii() {
    let [e, t] = d.useState(!1),
        [a, n] = d.useState(null),
        [l, i] = d.useState(null),
        s = d.useCallback(async () => {
            try {
                (t(!0), n(null), i(null));
                let e = await it.Bo.put({
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
    return (0, o.jsxs)(tY.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, o.jsx)(p.$, { variant: "primary", onClick: s, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, ia.uJ)(a) && (0, o.jsx)(g.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, ia.uJ)(l) &&
                (0, o.jsx)(g.E, { variant: "text-md/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function is() {
    return (0, o.jsx)("div", {
        className: il.n,
        children: (0, o.jsx)(tY.B, { direction: "vertical", gap: 16, children: (0, o.jsx)(ii, {}) }),
    });
}
a(172879);
var ir = a(64015),
    io = a.n(ir),
    id = a(874804),
    ic = a(866665),
    iu = a(782134),
    im = a(113494),
    ih = a(603349),
    ix = a(108715);
function ip(e) {
    return parseFloat(e.toFixed(3));
}
let ig = [
    {
        key: "Store",
        cellClassName: ix.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "Time",
        cellClassName: ix.i7,
        render(e) {
            let { trace: t } = e;
            return `${ip(t.time)} ms`;
        },
    },
];
function iv(e) {
    let { actionLog: t } = e,
        a = d.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, o.jsx)(v.Ip, { children: (0, o.jsx)(tZ, { columns: ig, data: a }) });
}
let ij = [
    {
        id: "action",
        name: "Action",
        group: nh.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = nB()(t.createdAt);
            return (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsxs)(n9, {
                        className: ix.mP,
                        children: [
                            (0, o.jsx)(le, {
                                name: "Created at",
                                children: (0, o.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nX.i$)(a, "LLLL"),
                                    children: (0, nX.mk)(a),
                                }),
                            }),
                            (0, o.jsxs)(le, { name: "Total Time", children: [ip(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, o.jsx)(v.Ip, { className: ix.Dx, children: (0, o.jsx)(nr.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: nh.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, o.jsx)(iv, { actionLog: t });
        },
    },
];
function ib(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = d.useMemo(
            () =>
                t.error
                    ? [
                          ...ij,
                          {
                              id: "error",
                              name: (0, o.jsxs)(o.Fragment, {
                                  children: [(0, o.jsx)(ih.A, { className: ix.ik }), "Error"],
                              }),
                              group: nh.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, o.jsxs)(o.Fragment, {
                                      children: [
                                          (0, o.jsx)("div", {
                                              className: q()(ix.u4, tX.KE),
                                              children: (0, o.jsx)("div", {
                                                  className: tX.R5,
                                                  children: (0, o.jsx)(n$.$n, {
                                                      className: tX.Q$,
                                                      size: n$.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, o.jsx)(v.Ip, {
                                              className: ix.Dx,
                                              children: (0, o.jsx)(nr.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : ij,
            [t],
        ),
        { TabBar: l, renderSelectedTab: i } = (0, nm.A)({ tabs: n }, [n]);
    return (0, o.jsxs)(nu, {
        className: ix.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, o.jsx)(l, {}),
            (0, o.jsxs)(ns.Ay, {
                className: q()(tX.jr, ix.nZ),
                children: [
                    (0, o.jsx)(ns.Ay.Icon, { icon: id.K, tooltip: t.name }),
                    (0, o.jsx)(ns.Ay.Title, {
                        wrapperClassName: q()(tX.qd, tX.ZE),
                        className: tX.Pz,
                        children: t.name,
                    }),
                    (0, o.jsx)(ns.Ay.Icon, {
                        icon: nV.CopyIcon,
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
                            (0, nQ.C)(a, () =>
                                (0, l6.P0)({ text: "Copied action log data to clipboard", variant: "success" }),
                            );
                        },
                    }),
                ],
            }),
            i({ actionLog: t }),
        ],
    });
}
let iy = [
        {
            key: "Action",
            cellClassName: ix.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, o.jsxs)(o.Fragment, {
                    children: [t.error && (0, o.jsx)(ih.A, { className: ix.ik }), t.name],
                });
            },
        },
        {
            key: "Total Time",
            cellClassName: ix.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${ip(t.totalTime)} ms`;
            },
        },
        {
            key: "Timestamp",
            cellClassName: ix.i7,
            render(e) {
                let { actionLog: t } = e;
                return nB()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    iE = {
        searchType: nq.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function iC() {
    let e = d.useRef(null),
        [t, a] = d.useState(""),
        n = (function (e) {
            let [t, a] = d.useState(e.logs);
            return (
                d.useEffect(() => {
                    let t = io()(() => {
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
        })(tO.h.actionLogger),
        l = d.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [i, s] = d.useState(l),
        [r, c] = d.useState(l),
        [u, m] = d.useState(!1),
        [h, x] = d.useState(),
        p = d.useCallback((e) => {
            c(e);
        }, []);
    (0, nJ.RT)(t, u ? i : l, p, iE);
    let g = d.useCallback(
            (e) => {
                (s(l), m(e));
            },
            [l],
        ),
        v = t.trim().length > 0,
        j = d.useMemo(() => (v ? r : u ? i : l), [l, r, v, u, i]),
        f = u ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, o.jsxs)("div", {
        ref: e,
        className: q()(tX.nd, ix.nd),
        children: [
            (0, o.jsxs)("div", {
                className: ix.KE,
                children: [
                    (0, o.jsx)(ic.m, {
                        text: f,
                        children: (0, o.jsx)(eH.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? iu.PlayIcon : im.PauseIcon,
                            "aria-label": f,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, o.jsx)(nK.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, o.jsx)(tZ, {
                columns: iy,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, o.jsx)(ib, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var iS = a(936388),
    i_ = a(269248);
function iN() {
    let e = d.useRef(null);
    return (0, o.jsx)("div", {
        ref: e,
        className: q()(tX.nd, i_.n),
        children: (0, o.jsx)(p.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: iS.A.clearUploadedKeyVersions,
        }),
    });
}
var iA = a(409181),
    ik = a(881520),
    iI = a(670455),
    iD = a(932661);
let iT = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function iR() {
    let [e, t] = d.useState(null),
        [a, n] = d.useState(0),
        [l, i] = d.useState(1e3),
        [s, r] = d.useState(0),
        u = (0, c.bG)([ik.A], () => (null === e ? null : (ik.A.getFeedbackConfig(iI.MW[e]) ?? iA.u[iI.MW[e]]))),
        h = Object.entries(iI.MW),
        x = h.slice(h.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        v = d.useMemo(() => null != e && s >= 0 && s <= 100 && a >= 0, [e, s, a]);
    return (0, o.jsx)("div", {
        className: iD.kL,
        children: (0, o.jsxs)(tY.B, {
            gap: 32,
            children: [
                (0, o.jsx)(f.l, {
                    label: "Feedback Survey",
                    options: x,
                    value: e,
                    onSelectionChange: t,
                    placeholder: "Select Feedback Survey",
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, o.jsxs)(m.n, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != u &&
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, o.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, o.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, o.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, o.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, o.jsxs)(tY.B, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, o.jsx)(b.k, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: a.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => n(parseFloat(e)),
                                }),
                                (0, o.jsx)(f.l, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: iT,
                                    value: l,
                                    onSelectionChange: i,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, o.jsx)(y.c, {}),
                (0, o.jsx)(m.n, {
                    label: "Override Survey Chance",
                    children: (0, o.jsx)(b.k, {
                        label: "Override chance",
                        description: null != u ? `Current chance: ${100 * u.chance}%` : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: s.toString(),
                        type: "number",
                        onChange: (e) => r(parseFloat(e)),
                    }),
                }),
                (0, o.jsxs)(nx.e, {
                    children: [
                        (0, o.jsx)(p.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != u &&
                                    tO.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: u.feedbackType })
                                ),
                            disabled: !v,
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != u &&
                                    tO.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: u.feedbackType,
                                        cooldown: a * l,
                                        chance: s / 100,
                                    })
                                ),
                            disabled: !v,
                        }),
                    ],
                }),
                null == e &&
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(s >= 0 && s <= 100) &&
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, o.jsx)(g.E, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var iO = a(334279),
    iw = a(663417),
    iM = a(147925),
    iP = a(557009);
async function iL() {
    return (
        await it.Bo.get({
            url: em.Rsh.ENTITLEMENTS_FOR_APPLICATION(tM.tv),
            oldFormErrors: !0,
            query: { exclude_consumed: !0, exclude_ended: !0 },
            rejectWithError: !0,
        })
    ).body.map((e) => iP.A.createFromServer(e));
}
async function iU(e) {
    await it.Bo.post({
        url: "/debug/entitlements/fractional-premium",
        body: { count: 1, sku_id: e },
        rejectWithError: !1,
    });
}
async function iG(e) {
    let t = "/debug/entitlements/fractional-premium";
    (null != e && (t = `${t}/${e}`), await it.Bo.del({ url: t, rejectWithError: !0 }));
}
async function iF() {
    await it.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
}
function iB() {
    let [e, t] = d.useState([]),
        [a, n] = d.useState(!1),
        l = (0, d.useCallback)(async () => {
            try {
                n(!0);
                let e = await iL();
                t(e);
            } finally {
                n(!1);
            }
        }, []),
        i = (0, d.useCallback)(
            async (e) => {
                (await iU(e), await l());
            },
            [l],
        );
    return {
        grantFractionalPremium: i,
        deleteFractionalPremium: (0, d.useCallback)(
            async (e) => {
                (await iG(e), await l());
            },
            [l],
        ),
        triggerNextEntitlementFulfillment: (0, d.useCallback)(async () => {
            (await iF(), await l());
        }, [l]),
        refreshEntitlementList: l,
        entitlements: e,
        loading: a,
    };
}
var i$ = a(267577),
    iV = a(370109);
let iW = {
    [em.GD.QUEST_REWARD]: "Quest Reward",
    [em.GD.DEVELOPER_GIFT]: "Developer Gift",
    [em.GD.INVOICE]: "Invoice",
    [em.GD.REVERSE_TRIAL]: "Reverse Trial",
    [em.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    [em.GD.SUBSCRIPTION]: "Subscription",
    [em.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
};
function iH(e) {
    let t,
        { entitlement: a, active: n, onDelete: l } = e;
    function i(e) {
        return null != e ? (0, nX.i$)(e, "LLL") : "---";
    }
    return (0, o.jsxs)("div", {
        className: q()(i$.Nr, n ? iV.C1 : ""),
        children: [
            (0, o.jsxs)(g.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
            !n &&
                (0, o.jsxs)(g.E, {
                    variant: "text-md/normal",
                    children: ["SKU: ", iz.find((e) => e.value === a.skuId)?.label],
                }),
            null != a.startsAt &&
                null != a.endsAt &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsxs)(g.E, { variant: "text-md/normal", children: ["Start: ", i(a.startsAt), " "] }),
                        (0, o.jsxs)(g.E, { variant: "text-md/normal", children: ["End: ", i(a.endsAt), " "] }),
                    ],
                }),
            (0, o.jsxs)(g.E, {
                variant: "text-md/normal",
                children: [
                    "Entitlement source type: ",
                    null != (t = a.sourceType) && t in iW ? iW[t] : `Unknown source type ${t}`,
                ],
            }),
            n &&
                null != l &&
                (0, o.jsx)(n$.$n, {
                    className: i$.RW,
                    size: n$.$n.Sizes.TINY,
                    color: n$.$n.Colors.RED,
                    look: n$.$n.Looks.OUTLINED,
                    onClick: l,
                    children: "Delete",
                }),
        ],
    });
}
let iz = [
    { id: "1h", label: "1 hour", value: iO.j.PREMIUM_TIER_2_1_HOUR },
    { id: "1d", label: "1 day", value: iO.j.PREMIUM_TIER_2_1_DAY },
    { id: "3d", label: "3 days", value: iO.j.PREMIUM_TIER_2_3_DAY },
];
function iK() {
    let [e, t] = d.useState(!1),
        [a, n] = d.useState(iO.j.PREMIUM_TIER_2_1_HOUR),
        [l, i] = d.useState([]),
        [s, r] = d.useState([]),
        {
            refreshEntitlementList: c,
            grantFractionalPremium: u,
            deleteFractionalPremium: m,
            triggerNextEntitlementFulfillment: h,
            entitlements: x,
            loading: j,
        } = iB();
    return (
        d.useEffect(() => {
            c();
        }, [c]),
        d.useEffect(() => {
            (i(x.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === em.zF_.FRACTIONAL_REDEMPTION)),
                r(x.filter((e) => Object.values(iO.j).includes(e.skuId) && null == e.startsAt)));
        }, [x]),
        (0, o.jsx)(v.Ip, {
            className: tX.nd,
            children: (0, o.jsxs)("div", {
                className: iV.l$,
                children: [
                    (0, o.jsxs)("div", {
                        className: iV.dL,
                        children: [
                            (0, o.jsx)(g.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, o.jsxs)(J.D, {
                                onClick: () => t(!e),
                                className: i$.As,
                                children: [
                                    (0, o.jsx)("div", {
                                        children: (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, o.jsx)(iM.A, { direction: e ? iM.A.Directions.UP : iM.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, o.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, o.jsx)(g.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, o.jsx)("br", {}),
                                (0, o.jsx)(g.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed.",
                                }),
                            ],
                        }),
                    (0, o.jsxs)("section", {
                        style: { marginBottom: "8px" },
                        className: q()([i$.uW, iV.Uo]),
                        children: [
                            (0, o.jsx)(f.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: iz,
                                onSelectionChange: n,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, o.jsx)(p.$, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => u(a),
                            }),
                        ],
                    }),
                    (0, o.jsxs)("section", {
                        className: i$.uW,
                        children: [
                            (0, o.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: iV.dL,
                                children: [
                                    (0, o.jsx)(g.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, o.jsxs)("div", {
                                        className: i$.GC,
                                        children: [
                                            (0, o.jsx)(n$.$n, {
                                                disabled: j,
                                                size: n$.$n.Sizes.TINY,
                                                color: n$.$n.Colors.PRIMARY,
                                                look: n$.$n.Looks.OUTLINED,
                                                onClick: () => h(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, o.jsx)(n$.$n, {
                                                disabled: j,
                                                size: n$.$n.Sizes.TINY,
                                                color: n$.$n.Colors.RED,
                                                look: n$.$n.Looks.OUTLINED,
                                                onClick: () => m(),
                                                children: "Delete all",
                                            }),
                                            (0, o.jsx)(n$.$n, {
                                                disabled: j,
                                                look: n$.$n.Looks.BLANK,
                                                size: n$.$n.Sizes.ICON,
                                                onClick: c,
                                                children: (0, o.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, o.jsx)(iw.RefreshIcon, {
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
                                (0, o.jsxs)("div", {
                                    children: [
                                        (0, o.jsx)(g.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, o.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, o.jsx)(
                                                    iH,
                                                    { entitlement: e, active: !0, onDelete: () => m(e.id) },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            s.length > 0 &&
                                (0, o.jsxs)("div", {
                                    children: [
                                        (0, o.jsx)(g.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, o.jsx)("div", {
                                            children: s.map((e) => (0, o.jsx)(iH, { entitlement: e }, e.id)),
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
var iY = a(832604),
    iq = a(264572).Buffer;
let iJ = /[^a-zA-Z0-9_.-]+/g;
function iQ(e) {
    let { runningGame: t } = e,
        a = (0, iY.A)(t.pid, void 0),
        [n, l] = (0, d.useState)(!1),
        i = t.name ?? t.exeName ?? "",
        s = null != a && !n;
    async function r() {
        if (null != a) {
            l(!0);
            try {
                let e,
                    t = await E.A.fileManager.saveWithDialog2(
                        iq.from(a.slice(a.indexOf(",") + 1), "base64"),
                        ((e = i.trim().replace(iJ, "_")), `${e.length > 0 ? e : "icon"}.png`),
                        void 0,
                    );
                null == t ||
                    t.canceledByUser ||
                    (0, l6.P0)({ text: `Saved icon to ${t.directory}`, variant: "success" });
            } catch {
                (0, l6.P0)({ text: "Failed to save icon", variant: "critical" });
            } finally {
                l(!1);
            }
        }
    }
    return (0, o.jsxs)(tY.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 12,
        children: [
            (0, o.jsxs)(tY.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                fullWidth: !1,
                children: [
                    null != a
                        ? (0, o.jsx)("img", { src: a, alt: i, width: 48, height: 48 })
                        : (0, o.jsx)(g.E, { variant: "text-xxs/normal", color: "text-muted", children: "no icon" }),
                    (0, o.jsxs)(tY.B, {
                        direction: "vertical",
                        gap: 0,
                        fullWidth: !1,
                        children: [
                            (0, o.jsx)(g.E, { variant: "text-md/normal", children: i }),
                            (0, o.jsxs)(g.E, {
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
                            (0, o.jsx)(g.E, { variant: "text-xxs/normal", color: "text-muted", children: t.exePath }),
                        ],
                    }),
                ],
            }),
            (0, o.jsx)(p.$, { variant: "primary", text: "Save Icon", onClick: r, disabled: !s }),
        ],
    });
}
function iX() {
    let e = (0, c.bG)([C.Ay], () => C.Ay.getRunningGames());
    return (0, o.jsxs)(tY.B, {
        gap: 16,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, o.jsxs)(tY.B, {
                gap: 8,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-md/bold", children: "Game Icon Extractor" }),
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        children: "Save a running game's locally-detected icon as a PNG.",
                    }),
                ],
            }),
            (0, o.jsx)(y.c, {}),
            (0, o.jsxs)(tY.B, {
                gap: 12,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-sm/bold", children: "Running Games" }),
                    0 === e.length
                        ? (0, o.jsx)(g.E, {
                              variant: "text-sm/normal",
                              children: "No games detected. Launch a game first.",
                          })
                        : e.map((e) => (0, o.jsx)(iQ, { runningGame: e }, `${e.pid}-${e.exePath}`)),
                ],
            }),
        ],
    });
}
var iZ = a(390544),
    i0 = a(498480),
    i1 = a(475669),
    i2 = a(486223);
function i3() {
    let e = (0, c.bG)([nC.A], () => nC.A.getGuildId()),
        t = (0, c.bG)([nE.A], () => nE.A.getGuild(e)?.name),
        a = (0, c.bG)([i1.A], () => i1.A.getStateForGuild(e)?.instances),
        n = d.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = d.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    tO.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        i = d.useMemo(
            () =>
                Object.values(iZ.M).map((e) =>
                    (0, o.jsx)(
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
        s = d.useCallback(() => {
            null != n &&
                null != e &&
                tO.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, o.jsxs)(v.Ip, {
              className: i2.kL,
              children: [
                  (0, o.jsx)("div", {
                      className: i2.uW,
                      children: (0, o.jsx)(X.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, o.jsxs)("div", {
                      className: i2.uW,
                      children: [
                          (0, o.jsx)(g.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, o.jsx)("div", { className: i2.UD, children: i }),
                          (0, o.jsx)(g.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, o.jsx)("div", {
                              className: i2.UD,
                              children: (0, o.jsx)(p.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: s,
                              }),
                          }),
                          (0, o.jsx)(g.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, o.jsx)(p.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, i0.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function i6(e, t) {
    let a = "boolean" == typeof t ? t : !ni.Ay.get(e);
    tO.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var i5 = a(257446);
function i8(e) {
    let { devSettingsCategory: t } = e,
        a = (0, c.bG)([ni.Ay], () => ni.Ay.allByCategory(t), [t], c.My),
        n = d.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, o.jsx)(h.d, { label: n, description: t, checked: a, onChange: (e) => i6(t, e) }, t);
                }),
            [a],
        );
    return (0, o.jsx)("div", { className: q()(tX.nd, i5.n), children: n });
}
var i4 = a(950305),
    i7 = a(231483),
    i9 = a(597770),
    se = a(433492),
    st = a(695458),
    sa = a(796140),
    sn = a(268791),
    sl = a(836480),
    si = a(855473),
    ss = a(626258),
    sr = a(420854),
    so = a(373846),
    sd = a(657044),
    sc = a(141060),
    su = a(608599),
    sm = a(685761),
    sh = a(157225),
    sx = a(362704),
    sp = a(625903),
    sg = a(628284),
    sv = a(320448),
    sj = a(562708),
    sf = a(830215),
    sb = a(662502),
    sy = a(889227),
    sE = a(499785),
    sC = a(315069);
class sS extends sC.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        (super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids));
    }
    static fromServer(e) {
        return new sS(e);
    }
    setPassword(e) {
        return ((this.password = e), this);
    }
}
let s_ = { pools: null, users: null };
function sN(e) {
    (null == s_.users && (s_.users = new Map()), s_.users.set(e.id, new sy.A(e)));
}
class sA extends c.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (s_.pools = new Map(Object.entries(e.pools))),
            null != e.users && (s_.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != s_.pools ? Object.fromEntries(s_.pools) : null,
            users: null != s_.users ? Object.fromEntries(s_.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(s_.users?.values() ?? []).filter((t) => s_.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return s_.pools?.get(e) ?? null;
    }
    getUser(e) {
        return s_.users?.get(e) ?? null;
    }
    getPools() {
        return null === s_.pools ? null : Array.from(s_.pools.values());
    }
}
let sk = new sA(tO.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        (null == s_.pools && (s_.pools = new Map()), s_.pools.set(t.id, t), a.forEach(sN));
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = s_.pools?.get(t);
        if (null == a) return !1;
        (a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                s_.users?.delete(e);
            }),
            s_.pools?.delete(t));
    },
});
var sI = a(835002);
async function sD(e, t) {
    return await sE.A.get({
        url: em.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: sj.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void sb.A.showFailedToast(sI.OB.GENERIC_ERROR);
            let { generated_pool: l, users: i } = n;
            tO.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: sS.fromServer(l).setPassword(t),
                users: i.map((e) => new sy.A(e)),
            });
        })
        .catch(() => (sb.A.showFailedToast(sI.OB.GENERIC_ERROR), null));
}
var sT = a(844330),
    sR = a(157416);
let sO = [
        i4.UserIcon,
        i7.ShieldIcon,
        i9.GiftIcon,
        se.K,
        st.m,
        sa.c,
        sn.$,
        sl.CompassIcon,
        si.Z,
        ss.A,
        sr.E,
        so.C,
        sd._,
        sc.i,
        su.L,
        sm.f,
        sh.N,
        sx.Y,
        sp.SettingsIcon,
    ],
    sw = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ];
function sM() {
    let [e, t] = d.useState(""),
        [a, n] = d.useState(""),
        [l, i] = d.useState(!1);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)("form", {
                onSubmit: async (l) => {
                    (l.preventDefault(), i(!0));
                    try {
                        (await sD(e, a), t(""), n(""));
                    } finally {
                        i(!1);
                    }
                },
                children: (0, o.jsxs)(tY.B, {
                    direction: "vertical",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, o.jsxs)(tY.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, o.jsx)(b.k, {
                                    fullWidth: !0,
                                    value: e,
                                    onChange: t,
                                    placeholder: "Pool ID",
                                    disabled: l,
                                }),
                                (0, o.jsx)(b.k, {
                                    type: "password",
                                    fullWidth: !0,
                                    value: a,
                                    onChange: n,
                                    placeholder: "Password",
                                    disabled: l,
                                }),
                            ],
                        }),
                        (0, o.jsxs)(tY.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, o.jsx)(p.$, {
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
                                (0, o.jsx)(p.$, {
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
            (0, o.jsx)(y.c, { gap: 4 }),
        ],
    });
}
function sP(e) {
    let { pool: t } = e,
        { id: a, summary: n } = t,
        l = sk.getUsersForPool(a),
        i = (0, c.bG)([n0.default], () => n0.default.getId()),
        s = sO[Number(a) % sO.length],
        r = sw[Number(a) % sw.length],
        u = d.useCallback(() => {
            tO.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
        }, [a]);
    return (0, o.jsx)(tY.B, {
        direction: "horizontal",
        align: "start",
        justify: "space-between",
        children: (0, o.jsx)(sT.A, {
            icon: (0, o.jsx)(g.E, {
                variant: "text-md/medium",
                color: r,
                className: sR.td,
                children: (0, o.jsx)(s, { size: "custom", width: 24, height: 24, color: "currentColor" }),
            }),
            title: n,
            className: sR.JC,
            subtitle: `${l.length} users`,
            children: (0, o.jsxs)(tY.B, {
                direction: "vertical",
                gap: 4,
                padding: { left: 24, right: 8, bottom: 16 },
                fullWidth: !1,
                children: [
                    l.map((e, a) =>
                        (0, o.jsxs)(
                            d.Fragment,
                            {
                                children: [
                                    0 !== a && (0, o.jsx)(y.c, { gap: 4 }),
                                    (0, o.jsx)(
                                        J.D,
                                        {
                                            onClick: (a) => {
                                                (a.stopPropagation(),
                                                    (function (e, t) {
                                                        let a = sk.getUser(t);
                                                        if (null == a) throw Error("User not found");
                                                        let n = sk.getPool(e)?.password;
                                                        if (null == n) throw Error("Pool password not found");
                                                        if (null == a.email) throw Error("User email not found");
                                                        sf.A.login({
                                                            login: a.email,
                                                            password: n,
                                                            isMultiAccount: !0,
                                                            source: "generated_test_user",
                                                        }).catch(
                                                            () => (sb.A.showFailedToast(sI.OB.GENERIC_ERROR), null),
                                                        );
                                                    })(t.id, e.id));
                                            },
                                            "aria-disabled": i === e.id,
                                            className: q()(sR.vk, { [sR.Pe]: i === e.id }),
                                            children: (0, o.jsxs)(
                                                tY.B,
                                                {
                                                    direction: "horizontal",
                                                    align: "center",
                                                    justify: "space-between",
                                                    gap: 8,
                                                    padding: { right: 8 },
                                                    fullWidth: !1,
                                                    children: [
                                                        (0, o.jsxs)(tY.B, {
                                                            direction: "horizontal",
                                                            align: "center",
                                                            gap: 8,
                                                            fullWidth: !1,
                                                            className: q()({ [sR.WP]: i === e.id }),
                                                            children: [
                                                                (0, o.jsx)(i4.UserIcon, {
                                                                    size: "custom",
                                                                    width: 20,
                                                                    height: 20,
                                                                    color: "currentColor",
                                                                }),
                                                                (0, o.jsxs)("div", {
                                                                    children: [
                                                                        (0, o.jsx)(g.E, {
                                                                            variant: "text-sm/normal",
                                                                            color: "text-default",
                                                                            children: e.username,
                                                                        }),
                                                                        (0, o.jsx)(g.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: sR.c1,
                                                                            children: e.email,
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        i === e.id
                                                            ? (0, o.jsx)(g.E, {
                                                                  variant: "text-sm/normal",
                                                                  color: "text-feedback-positive",
                                                                  children: (0, o.jsx)(sg.y, {
                                                                      size: "sm",
                                                                      color: "currentColor",
                                                                  }),
                                                              })
                                                            : (0, o.jsx)(sv._, { size: "sm", color: "currentColor" }),
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
                    (0, o.jsx)("div", {
                        className: sR.UD,
                        children: (0, o.jsx)(p.$, {
                            icon: nz.TrashIcon,
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
function sL() {
    let e = (0, c.yK)([sk], () => sk.getPools() ?? []);
    return (0, o.jsxs)(tY.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: sR.kL,
        children: [
            (0, o.jsx)(sM, {}),
            (0, o.jsx)(v.Ip, { className: sR.Ik, children: e?.map((e) => (0, o.jsx)(sP, { pool: e }, e.id)) }),
        ],
    });
}
var sU = a(582306),
    sG = a(507104),
    sF = a(846466);
function sB(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function s$(e, t) {
    return null != t ? `/users/@me/gift-intents/dismissals/${e}/${t}` : `/users/@me/gift-intents/dismissals/${e}`;
}
let sV = tM.np.FRIEND_ANNIVERSARY;
function sW(e) {
    return 403 === e?.status
        ? "Forbidden (403). This account is likely not in the backend-persistence experiment; clearing also requires a staff account."
        : e instanceof Error
          ? e.message
          : String(e);
}
function sH() {
    let e = (0, c.bG)([sG.Ay], () => sG.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, c.bG)([sG.Ay], () => sG.Ay.getDevToolCurrentDate()),
        a = (0, c.bG)([sG.Ay], () => sG.Ay.getMessageGiftIntentLastShownMap()),
        n = (0, c.bG)([sG.Ay], () => sG.Ay.getHighestAffinityFriendAnniversaries()),
        l = (0, c.bG)([sG.Ay], () => sG.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, c.bG)([eo.default], () => eo.default.getCurrentUser()?.isStaff() ?? !1),
        s = (0, c.bG)(
            [az.A],
            () => az.A.getFriendIDs().filter((e) => !az.A.isIgnored(e) && null != az.A.getSince(e)).length,
        ),
        r = (0, c.bG)([aM.A], () => {
            let e = Number(aM.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
            return Number.isNaN(e) || 0 === e ? null : e;
        }),
        [u, m] = d.useState([]),
        [h, x] = d.useState(null),
        [j, b] = d.useState(!1),
        [y, E] = d.useState(!1),
        [C, S] = d.useState(!1),
        [_, N] = d.useState(void 0),
        A = d.useCallback(async () => {
            E(!0);
            try {
                let { body: e } = await it.Bo.get({ url: "/users/@me/gift-intent-dismissals", rejectWithError: !0 });
                (m(e.dismissals ?? []), x(null), b(!1));
            } catch (t) {
                let e = t.status;
                (x(sW(t)), b(403 === e), 403 === e && m([]));
            } finally {
                E(!1);
            }
        }, []);
    async function k(e) {
        S(!0);
        try {
            (await e(), x(null), await A());
        } catch (e) {
            x(sW(e));
        } finally {
            S(!1);
        }
    }
    d.useEffect(() => {
        A();
    }, [A, r]);
    let I = u.filter((e) => e.intent_type === sV),
        D = new Map(I.map((e) => [e.target_id, Number(e.dismissed_at_ms)])),
        T = Array.from(new Set([...Object.keys(a), ...D.keys()])),
        R = Array.from(new Set([...n, ...l])),
        O = R.map((e) => ({ id: e, value: e, label: eo.default.getUser(e)?.username ?? `Unknown User (${e})` })),
        w = y || C;
    function M(e) {
        tO.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
    }
    function P(e) {
        let t = nI.A.getUserAffinity(e);
        return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
    }
    return (0, o.jsx)(v.Ip, {
        className: tX.nd,
        children: (0, o.jsxs)("div", {
            className: sF.l$,
            children: [
                (0, o.jsx)(g.E, { className: sF.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, o.jsx)("div", {
                    className: sF.Pm,
                    children: (0, o.jsxs)(tY.B, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, o.jsx)(f.l, {
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
                            (0, o.jsx)(p.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Re-randomize",
                                disabled: null == e,
                                onClick: function () {
                                    tO.h.dispatch({ type: "DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES" });
                                },
                            }),
                            (0, o.jsx)(p.$, {
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
                    (0, o.jsx)("div", {
                        className: sF.Pm,
                        children: (0, o.jsxs)(tY.B, {
                            gap: 8,
                            children: [
                                0 === s
                                    ? (0, o.jsx)(g.E, {
                                          variant: "text-xs/normal",
                                          color: "text-feedback-warning",
                                          children:
                                              "No friends with an anniversary date, so no anniversaries can be generated.",
                                      })
                                    : (0, o.jsxs)(g.E, {
                                          variant: "text-xs/normal",
                                          children: [
                                              "Generated ",
                                              R.length,
                                              " of ",
                                              e,
                                              " requested",
                                              R.length < e
                                                  ? ` (only ${s} friend${1 === s ? "" : "s"} with an anniversary date).`
                                                  : ".",
                                          ],
                                      }),
                                (0, o.jsx)(g.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, o.jsx)(g.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                n.length > 0 &&
                                    (0, o.jsxs)(tY.B, {
                                        gap: 4,
                                        children: [
                                            (0, o.jsx)(g.E, {
                                                variant: "text-xs/semibold",
                                                children: "Highest Affinity Friend Anniversaries:",
                                            }),
                                            n.map((e) => {
                                                let t = eo.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, o.jsxs)(
                                                    g.E,
                                                    { variant: "text-xs/normal", children: [a, " (", P(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                l.length > 0 &&
                                    (0, o.jsxs)(tY.B, {
                                        gap: 4,
                                        children: [
                                            (0, o.jsx)(g.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            l.map((e) => {
                                                let t = eo.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, o.jsxs)(
                                                    g.E,
                                                    { variant: "text-xs/normal", children: [a, " (", P(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, o.jsx)("div", {
                    className: sF.Pm,
                    children: (0, o.jsxs)(tY.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, o.jsx)(sU.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? nB()(t) : void 0,
                                onSelect: function (e) {
                                    let t = nB()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    tO.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, o.jsx)(p.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: function () {
                                    tO.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, o.jsxs)("div", {
                    className: sF.Pm,
                    children: [
                        (0, o.jsx)(g.E, {
                            variant: "text-md/normal",
                            children: "Reset gift message cooldown (per-user, 14d)",
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: function () {
                                tO.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: sF.Pm,
                    children: [
                        (0, o.jsx)(g.E, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: function () {
                                tO.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: sF.Pm,
                    children: (0, o.jsxs)(tY.B, {
                        gap: 12,
                        fullWidth: !0,
                        children: [
                            (0, o.jsx)(g.E, { variant: "text-md/semibold", children: "Backend dismissal sync" }),
                            (0, o.jsxs)(tY.B, {
                                gap: 4,
                                children: [
                                    j &&
                                        (0, o.jsx)(g.E, {
                                            variant: "text-xs/normal",
                                            color: "text-feedback-warning",
                                            children:
                                                "This account is not in the backend-persistence experiment, so nothing here will persist to the server.",
                                        }),
                                    !i &&
                                        (0, o.jsx)(g.E, {
                                            variant: "text-xs/normal",
                                            color: "text-feedback-warning",
                                            children: "Clearing server dismissals requires a staff account.",
                                        }),
                                    (0, o.jsxs)(g.E, {
                                        variant: "text-xs/normal",
                                        children: [
                                            "Server last recorded a dismissal:",
                                            " ",
                                            null != r ? sB(r) : "never",
                                        ],
                                    }),
                                ],
                            }),
                            (0, o.jsxs)(tY.B, {
                                gap: 8,
                                direction: "horizontal",
                                align: "end",
                                children: [
                                    (0, o.jsx)(p.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        text: "Refresh",
                                        onClick: () => {
                                            A();
                                        },
                                        disabled: w,
                                    }),
                                    (0, o.jsx)(p.$, {
                                        size: "sm",
                                        variant: "primary",
                                        text: "Clear all",
                                        onClick: function () {
                                            k(() => it.Bo.del({ url: s$(sV), rejectWithError: !0 }));
                                        },
                                        disabled: w || !i || j || 0 === I.length,
                                    }),
                                ],
                            }),
                            (0, o.jsxs)(tY.B, {
                                gap: 8,
                                direction: "horizontal",
                                align: "end",
                                children: [
                                    (0, o.jsx)(f.l, {
                                        label: "Dismiss a generated anniversary on the server",
                                        selectionMode: "single",
                                        options: O,
                                        value: _,
                                        onSelectionChange: (e) => {
                                            N(e);
                                        },
                                    }),
                                    (0, o.jsx)(p.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        text: "Dismiss on server",
                                        onClick: function () {
                                            null != _ &&
                                                k(() =>
                                                    it.Bo.post({
                                                        url: "/users/@me/gift-intents/dismiss",
                                                        body: { intent_type: sV, target_id: _ },
                                                        rejectWithError: !0,
                                                    }),
                                                );
                                        },
                                        disabled: w || j || null == _,
                                    }),
                                ],
                            }),
                            0 === O.length &&
                                (0, o.jsx)(g.E, {
                                    variant: "text-xs/normal",
                                    children: "Generate friend anniversaries above to pick a target to dismiss.",
                                }),
                            null != h &&
                                (0, o.jsx)(g.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-critical",
                                    children: h,
                                }),
                            y && (0, o.jsx)(g.E, { variant: "text-xs/normal", children: "Loading..." }),
                            !y &&
                                0 === T.length &&
                                (0, o.jsx)(g.E, {
                                    variant: "text-xs/normal",
                                    children: "No dismissals recorded locally or on the server.",
                                }),
                            !y &&
                                T.length > 0 &&
                                (0, o.jsxs)(tY.B, {
                                    gap: 4,
                                    children: [
                                        (0, o.jsx)(g.E, {
                                            variant: "text-xs/semibold",
                                            children: "Local vs. server (per friend):",
                                        }),
                                        T.map((e) => {
                                            let t = eo.default.getUser(e),
                                                n = t?.username ?? `Unknown User (${e})`,
                                                l = a[e],
                                                s = D.get(e);
                                            return (0, o.jsxs)(
                                                tY.B,
                                                {
                                                    gap: 8,
                                                    direction: "horizontal",
                                                    justify: "space-between",
                                                    align: "center",
                                                    children: [
                                                        (0, o.jsxs)(g.E, {
                                                            variant: "text-xs/normal",
                                                            children: [
                                                                n,
                                                                ": local ",
                                                                null != l ? sB(l) : "none",
                                                                ", server",
                                                                " ",
                                                                null != s ? sB(s) : "none",
                                                            ],
                                                        }),
                                                        null != s &&
                                                            (0, o.jsx)(p.$, {
                                                                size: "sm",
                                                                variant: "secondary",
                                                                text: "Clear",
                                                                onClick: () => {
                                                                    k(() =>
                                                                        it.Bo.del({
                                                                            url: s$(sV, e),
                                                                            rejectWithError: !0,
                                                                        }),
                                                                    );
                                                                },
                                                                disabled: w || !i || j,
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
var sz = a(460890),
    sK = a(28863),
    sY = a(517461),
    sq = a(214947),
    sJ = a(403581),
    sQ = a(34188);
let sX = [
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
var sZ = a(277583);
let s0 = [0, 0.5, 1],
    s1 = ["Center", "Inner ring", "Outer ring"],
    s2 = s0.length,
    s3 = "ILLO_BLUE",
    s6 = "ILLO_BLUE_40",
    s5 = Array.from({ length: s2 }, () => s6),
    s8 = Array.from({ length: s2 }, () => s3),
    s4 = ["1", "0.5", "0"],
    s7 = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    s9 = [
        { label: "Light", value: em.NJ8.LIGHT, id: em.NJ8.LIGHT },
        { label: "Ash", value: em.NJ8.ASH, id: em.NJ8.ASH },
        { label: "Dark", value: em.NJ8.DARK, id: em.NJ8.DARK },
        { label: "Onyx", value: em.NJ8.ONYX, id: em.NJ8.ONYX },
    ],
    re = { [em.NJ8.ASH]: em.NJ8.DARK, [em.NJ8.ONYX]: em.NJ8.DARK, [em.NJ8.LIGHT]: em.NJ8.DARK },
    rt = { [em.NJ8.LIGHT]: "light", [em.NJ8.ASH]: "ash", [em.NJ8.DARK]: "dark", [em.NJ8.ONYX]: "onyx" },
    ra = [
        { id: "friends", icon: sq.$, text: "Friends" },
        { id: "nitro", icon: sJ.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: sQ.U, text: "Shop", useCustomGradient: !0 },
    ],
    rn = sX.map((e) => ({ label: e, value: e, id: e })),
    rl = Object.fromEntries(
        sX.map((e) => [
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
                        s = (0, o.jsx)("span", {
                            className: sZ.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${i.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: s };
                }),
        ]),
    );
var ri = a(306327);
function rs(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function rr(e, t) {
    let [a, n, l, i] = eq.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: i };
}
function ro(e, t) {
    let a = eq.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function rd(e) {
    let { yaml: t, label: a } = e,
        n = d.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, o.jsxs)(tY.B, {
        gap: 4,
        children: [
            (0, o.jsxs)(tY.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, o.jsx)(g.E, { variant: "text-md/semibold", children: a }),
                    (0, o.jsx)(eH.K, {
                        icon: nV.CopyIcon,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, o.jsx)("pre", { className: sZ.RP, children: t }),
        ],
    });
}
function rc(e) {
    let { allResolvedStops: t } = e,
        a = d.useMemo(
            () =>
                s1.map((e, a) => {
                    let n;
                    return (
                        (n = s9
                            .map((e) => {
                                let n,
                                    l,
                                    { value: i } = e,
                                    s = rt[i],
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
    return (0, o.jsxs)(tY.B, {
        gap: 16,
        children: [
            (0, o.jsx)(X.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            s1.map((e, t) => (0, o.jsx)(rd, { yaml: a[t], label: e }, e)),
        ],
    });
}
function ru(e, t, a) {
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
    return new ri.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + i * r) / 255,
    ]);
}
function rm(e, t, a) {
    var n;
    let l = a.map((e) => {
            let [t, a, n] = eq.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        i = 1 / 0;
    for (let a of l) (n = e.contrast(ru(t, l, a.position), "WCAG21")) < i && (i = n);
    for (let a = 0; a < l.length - 1; a++) {
        let { contrast: n } = (function (e, t, a, n, l) {
            let i = 1 / 0,
                s = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(ru(e, t, o), "WCAG21");
                d < i && ((i = d), (s = o));
            }
            return { contrast: i, position: s };
        })(t, l, e, l[a].position, l[a + 1].position);
        n < i && (i = n);
    }
    return Math.round(100 * i) / 100;
}
function rh(e) {
    let [t, a, n] = eq.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, i, s] = eq.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eq.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new ri.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: i * (1 - c) + o * c, b: s * (1 - c) + d * c },
    };
}
function rx() {
    return {
        colors: Array.from({ length: s2 }, () => void 0),
        scales: Array.from({ length: s2 }, () => void 0),
        opacities: Array.from({ length: s2 }, () => void 0),
    };
}
function rp() {
    return {
        [em.NJ8.LIGHT]: rx(),
        [em.NJ8.ASH]: { colors: [...s5], scales: [...s8], opacities: [...s4] },
        [em.NJ8.DARK]: rx(),
        [em.NJ8.ONYX]: rx(),
    };
}
function rg() {
    let e = (0, sz.G9)(),
        [t, a] = d.useState(em.NJ8.DARK),
        [n, l] = (0, sY.V)("DevToolsGradientContrastPanel_themeStops", rp()),
        i = n ?? rp(),
        [s, r] = d.useState(["", "", ""]),
        [c, u] = d.useState([null, null, null]),
        [m, h] = d.useState(null),
        { images: x, renderPickers: j } = (function () {
            let [e, t] = d.useState(null),
                a = d.useRef(null),
                n = d.useCallback((e) => {
                    let a = e.target.files?.[0];
                    if (null == a) return;
                    let n = new FileReader();
                    ((n.onload = () => t({ src: n.result, name: a.name })), n.readAsDataURL(a), (e.target.value = ""));
                }, []),
                l = d.useCallback(
                    () =>
                        (0, o.jsxs)(tY.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "center",
                            children: [
                                (0, o.jsx)("input", {
                                    ref: a,
                                    type: "file",
                                    accept: "image/jpeg,image/png,image/gif,image/webp,image/avif",
                                    onChange: n,
                                    style: { display: "none" },
                                }),
                                null != e
                                    ? (0, o.jsxs)(o.Fragment, {
                                          children: [
                                              (0, o.jsx)(g.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, o.jsx)(l5.Q, {
                                                  text: "Remove",
                                                  variant: "critical",
                                                  textVariant: "text-sm/medium",
                                                  onClick: () => t(null),
                                              }),
                                          ],
                                      })
                                    : (0, o.jsx)(p.$, {
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
        f = d.useMemo(
            () =>
                Object.fromEntries(
                    s9.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let i = 0; i < s2; i++) {
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
                                        d = re[d];
                                    }
                                    (a.push(s ?? s5[i]), n.push(r ?? s8[i]), l.push(o ?? s4[i]));
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(i, t),
                        ];
                    }),
                ),
            [i],
        ),
        y = f[t],
        E = d.useCallback(
            (e) => {
                l({ ...i, [t]: e(i[t]) });
            },
            [t, l, i],
        ),
        C = d.useMemo(() => rh({ theme: t, saturation: 1 }), [t]),
        S = d.useMemo(() => {
            let e = [];
            for (let t = 0; t < s2; t++) {
                let a = parseFloat(y.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: y.colors[t], opacity: a, position: s0[t] });
            }
            return e;
        }, [y]),
        _ = d.useMemo(() => {
            if (null == S) return null;
            let { text: e, background: t } = C;
            return s1.map((a, n) =>
                rl[y.scales[n]].map((a) => {
                    let l = rm(e, t, rs(S, n, { ...S[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [S, C, y.scales]),
        N = d.useMemo(() => {
            try {
                return s9.map((e) => {
                    let { value: t, label: a } = e,
                        n = f[t],
                        l = [];
                    for (let e = 0; e < s2; e++) {
                        let i = parseFloat(n.opacities[e]);
                        if (isNaN(i) || i < 0 || i > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: i, position: s0[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = rh(t),
                                i = rm(n, l, e),
                                s = i >= 4.5;
                            if (!s)
                                for (let t = 0; t < e.length; t++) {
                                    let i = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return sX.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == i) continue;
                                    let s = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of rl[i]) {
                                        if (o === e[t].color) continue;
                                        let i = rm(n, l, rs(e, t, { ...e[t], color: o }));
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
        }, [f]);
    return (0, o.jsx)(v.Ar, {
        className: sZ.XG,
        children: (0, o.jsxs)(tY.B, {
            gap: 24,
            padding: 8,
            className: sZ.zr,
            children: [
                (0, o.jsx)(X.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, o.jsx)(g.E, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, o.jsx)(g.E, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Onyx unless overridden.",
                        }),
                        (0, o.jsx)(g.E, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, o.jsx)(sK.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, o.jsx)(aE.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: s9,
                }),
                (0, o.jsxs)(tY.B, {
                    gap: 16,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, o.jsx)("div", {
                            className: sZ.G9,
                            children: s1.map((e, t) => {
                                let a = "" !== s[t];
                                return (0, o.jsxs)(
                                    d.Fragment,
                                    {
                                        children: [
                                            (0, o.jsxs)(tY.B, {
                                                gap: 0,
                                                className: sZ.hi,
                                                children: [
                                                    (0, o.jsx)(g.E, { variant: "text-md/medium", children: e }),
                                                    (0, o.jsx)(l5.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${ro(y.colors[t], parseFloat(y.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                ro(y.colors[t], parseFloat(y.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, o.jsx)(aE.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: y.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = rl[e][0]?.value;
                                                    E((n) => ({
                                                        ...n,
                                                        scales: rs(n.scales, t, e),
                                                        colors: null != a ? rs(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: rn,
                                            }),
                                            (0, o.jsx)(aE.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: y.colors[t],
                                                onSelectionChange: (e) =>
                                                    E((a) => ({ ...a, colors: rs(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: _?.[t] ?? rl[y.scales[t]],
                                            }),
                                            (0, o.jsx)(b.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: y.opacities[t],
                                                onChange: (e) => E((a) => ({ ...a, opacities: rs(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, o.jsx)(b.k, {
                                                label: `Hex${a && null != c[t] ? ` (dE: ${c[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: s[t],
                                                onChange: (e) => {
                                                    r((a) => rs(a, t, e));
                                                    let a = (function (e) {
                                                        if (!s7.test(e)) return null;
                                                        try {
                                                            return new ri.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = s6,
                                                                a = s3,
                                                                n = 1 / 0;
                                                            for (let l of sX)
                                                                for (let i of rl[l]) {
                                                                    let s = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eq.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new ri.A("srgb", [
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
                                                        (u((a) => rs(a, t, e.deltaE)),
                                                            E((a) => ({
                                                                ...a,
                                                                scales: rs(a.scales, t, e.scale),
                                                                colors: rs(a.colors, t, e.color),
                                                            })));
                                                    } else u((e) => rs(e, t, null));
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
                (0, o.jsx)(X.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, o.jsx)(sz.GE, {
                    value: { ...e, theme: t },
                    children: (0, o.jsx)(eK.N, {
                        theme: t,
                        children: (e) =>
                            (0, o.jsx)("div", {
                                className: e,
                                children: (0, o.jsx)(tY.B, {
                                    gap: 16,
                                    children: (0, o.jsx)("ul", {
                                        className: sZ.$8,
                                        style: { background: eq.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: ra.map((e, t) =>
                                            (0, o.jsx)(
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
                                                        hoverGradientStart: rr(y.colors[0], parseFloat(y.opacities[0])),
                                                        hoverGradientMiddle: rr(
                                                            y.colors[1],
                                                            parseFloat(y.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: rr(y.colors[2], parseFloat(y.opacities[2])),
                                                    }),
                                                    ...{ "data-list-item-id": `devtools-preview-${t}` },
                                                    children:
                                                        "useCustomGradient" in e &&
                                                        x.buttonBackground?.src != null &&
                                                        (0, o.jsx)("div", {
                                                            style: {
                                                                position: "absolute",
                                                                height: "100%",
                                                                bottom: 0,
                                                                insetInlineEnd: 0,
                                                                pointerEvents: "none",
                                                                borderRadius: "inherit",
                                                            },
                                                            children: (0, o.jsx)("img", {
                                                                src: x.buttonBackground.src,
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
                    (0, o.jsxs)(tY.B, {
                        gap: 16,
                        children: [
                            (0, o.jsx)(X.D, { variant: "heading-sm/semibold", children: "Results" }),
                            N.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, o.jsxs)(
                                          tY.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, o.jsx)(g.E, { variant: "text-md/semibold", children: a }),
                                                  (0, o.jsx)(Q.w, {
                                                      type: n.passes ? "success" : "critical",
                                                      message: `${n.passes ? "\u2713 Passes" : "\u2717 Fails"} WCAG AA \u{2014} Min contrast: ${n.minContrastRatio} : 1`,
                                                      role: "status",
                                                  }),
                                                  !n.passes &&
                                                      null != n.suggestion &&
                                                      (0, o.jsxs)(tY.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, o.jsx)(g.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, o.jsxs)(g.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      s1[n.suggestion.stopIndex],
                                                                      ": ",
                                                                      (0, o.jsx)("strong", {
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
                                                      (0, o.jsx)(g.E, {
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
                (0, o.jsx)(rc, { allResolvedStops: f }),
            ],
        }),
    });
}
var rv = a(820739),
    rj = a(230135),
    rf = a(45780),
    rb = a(868652),
    ry = a(859241);
let rE = [
        aO.M.GUILD_POWERUP_PERKS_COACHMARK,
        aO.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        aO.M.GUILD_POWERUP_NOTIFICATION,
        aO.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
        aO.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE,
    ],
    rC = [
        aO.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        aO.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        aO.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        aO.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        aO.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    rS = [aO.V.ADOPT_CLAN_IDENTITY_NOTICE];
function r_(e) {
    switch (e) {
        case aO.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case aO.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case aO.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case aO.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case aO.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case aO.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var rN = a(374336);
async function rA(e, t, a) {
    (await it.Bo.patch({
        url: em.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : nB()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, rv.VU)(e),
        (0, rb.Xd)(e, !0));
}
async function rk(e) {
    await it.Bo.post({ url: em.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function rI() {
    let e = (0, c.bG)([nC.A], () => nC.A.getGuildId()),
        t = (0, c.bG)([nE.A], () => nE.A.getGuild(e)?.name),
        a = (0, c.yK)([aM.A], () => [...rC, ...rS].filter((t) => null != e && (0, rf.zs)(t, e))),
        n = (0, c.yK)([ry.A], () => (null != e ? (ry.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, o.jsxs)(v.Ip, {
            className: rN.kL,
            children: [
                (0, o.jsx)("div", {
                    className: rN.uW,
                    children: (0, o.jsx)(X.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, o.jsxs)("div", {
                    className: rN.uW,
                    children: [
                        (0, o.jsx)(g.E, {
                            variant: "eyebrow",
                            className: rN.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, rb.qM)();
                            },
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: rN.uW,
                    children: [
                        (0, o.jsx)(g.E, { variant: "eyebrow", className: rN.wx, children: "Reset Progress Bar State" }),
                        (0, o.jsx)(p.$, { variant: "primary", text: "Reset", onClick: rj.O }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: rN.uW,
                    children: [
                        (0, o.jsx)(g.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, o.jsxs)("div", {
                            children: [
                                (0, o.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        rA(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, o.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        rA(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: rN.uW,
                    children: [
                        (0, o.jsx)(g.E, { variant: "eyebrow", className: rN.wx, children: "Reset User Level DCs" }),
                        (0, o.jsx)(tY.B, {
                            gap: 16,
                            children: rE.map((e) => (0, o.jsx)(lW, { className: rN.z6, content: aO.M[e] }, aO.M[e])),
                        }),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: rN.uW,
                    children: (0, o.jsx)(m.n, {
                        label: "Reset Guild Level DCs",
                        children: rC.map((t) =>
                            (0, o.jsx)(
                                h.d,
                                {
                                    label: r_(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rf._$)(t, e, !1)
                                            : ((0, aw._N)(aO.M.GUILD_POWERUP_NOTIFICATION), (0, rf.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, o.jsx)("div", {
                    className: rN.uW,
                    children: (0, o.jsx)(m.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: rS.map((t) =>
                            (0, o.jsx)(
                                h.d,
                                {
                                    label: r_(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rf._$)(t, e, !1)
                                            : ((0, aw._N)(aO.M.GUILD_POWERUP_NOTIFICATION), (0, rf.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, o.jsxs)("div", {
                    className: rN.uW,
                    children: [
                        (0, o.jsx)(g.E, {
                            variant: "eyebrow",
                            className: rN.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                rk(e);
                            },
                        }),
                    ],
                }),
                (0, o.jsx)(p.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, i0.Wp)(!1);
                    },
                }),
            ],
        });
}
var rD = a(450510),
    rT = a(648048);
function rR(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, c.yK)([rD.HP], () => [rD.HP.hasHotspot(t, !0), rD.HP.getHotspotOverride(t)]);
    return (0, o.jsx)(f.l, {
        label: t,
        errorMessage: a ? "Inactive" : void 0,
        successMessage: a ? "Active" : void 0,
        value: n,
        options: [
            { id: "none", value: void 0, label: "No Override" },
            { id: "active", value: !0, label: "Force Active" },
            { id: "inactive", value: !1, label: "Force Inactive" },
        ],
        onSelectionChange: (e) => (null != e ? (0, rD.Kl)(t, e) : (0, rD.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function rO() {
    return (0, o.jsx)(v.Ip, {
        className: tX.nd,
        children: (0, o.jsx)(m.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: rT.IN,
            children: (0, o.jsx)(tY.B, {
                gap: 20,
                children: Object.keys(rD._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, o.jsx)(rR, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var rw = a(632296),
    rM = a(855522),
    rP = a(37646),
    rL = a(773669);
function rU() {
    let e = (0, c.bG)([rL.default], () => rL.default.locale),
        [t, a] = d.useState(),
        n = (0, rw.runtimeHashMessageKey)(t ?? ""),
        l = d.useMemo(() => n_.t[n], [n]);
    return (0, o.jsxs)("div", {
        children: [
            (0, o.jsxs)(ns.Ay, {
                children: [
                    (0, o.jsx)(ns.Ay.Icon, { icon: rP.U, tooltip: "Locale" }),
                    (0, o.jsx)(ns.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, o.jsxs)(n9, {
                children: [
                    (0, o.jsx)(le, { name: "Active System", children: "@discord/intl" }),
                    (0, o.jsx)(le, { name: "App", children: e }),
                    (0, o.jsx)(le, { name: "System", children: n_.systemLocale }),
                    (0, o.jsx)(le, { name: "@discord/intl", children: n_.intl.currentLocale }),
                    (0, o.jsx)(le, { name: "common i18n", children: rM.A.getLocale() }),
                    (0, o.jsx)(le, { name: "Moment", children: nB().locale() }),
                ],
            }),
            (0, o.jsxs)(ns.Ay, {
                children: [
                    (0, o.jsx)(ns.Ay.Icon, { icon: rP.U, tooltip: "Messages" }),
                    (0, o.jsx)(ns.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, o.jsx)(n9, {
                children: (0, o.jsx)(le, { name: "Unique Rendered Main Messages", children: Object.keys(n_.t).length }),
            }),
            (0, o.jsx)("div", {
                style: { margin: 16 },
                children: (0, o.jsx)(b.k, {
                    onChange: function (e) {
                        a(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, o.jsxs)(n9, {
                children: [
                    (0, o.jsx)(le, { name: "Hashed key", children: n }),
                    (0, o.jsx)(le, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, o.jsx)(nr.A, { data: l?.(e) }),
        ],
    });
}
var rG = a(434404);
function rF() {
    let { node: e } = (0, es.Ay)(rG.F, "");
    return (0, o.jsx)(v.Ip, {
        className: tX.nd,
        children: (0, o.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, o.jsx)(ei.A, { node: e }, e.key),
        }),
    });
}
var rB = a(361158),
    r$ = a(80556),
    rV = a(219503),
    rW = a(665095),
    rH = a(87404);
function rz() {
    return (0, o.jsx)(v.Ip, {
        className: tX.nd,
        children: (0, o.jsxs)("div", {
            className: iV.l$,
            children: [
                (0, o.jsxs)("section", {
                    className: iV.uW,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, o.jsx)("div", {
                            className: iV.bd,
                            children: (0, o.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: function () {
                                    (0, rB.B8)(() => (0, o.jsx)(rW.A, {}), { layerKey: rH._s, Layer: r$.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, o.jsxs)("section", {
                    className: iV.uW,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, o.jsx)("div", {
                            className: iV.bd,
                            children: (0, o.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: function () {
                                    (0, rB.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, o.jsx)(rV.A, { onClose: t });
                                        },
                                        { layerKey: rH._s, Layer: r$.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, o.jsxs)("section", {
                    className: iV.uW,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, o.jsx)("div", {
                            className: iV.bd,
                            children: (0, o.jsx)(p.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: function () {
                                    rB.xr.setState({ fullScreenLayers: [] });
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
var rK = a(687813),
    rY = a(604121);
let rq = {
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
function rJ(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rK.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rK.he(n[t])) }), {}),
                            i = l["manifest.json"];
                        t(l[`animations/${i.animations[0].id}.json`]);
                    });
                }),
        );
}
function rQ() {
    let [e, t] = d.useState(void 0),
        [a, n] = d.useState(400),
        [l, i] = d.useState(400);
    return (0, o.jsx)("div", {
        style: { margin: 24 },
        children: (0, o.jsxs)(tY.B, {
            gap: 24,
            children: [
                (0, o.jsx)(aE.Z, {
                    options: Object.keys(rq).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, o.jsx)(b.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, o.jsx)(b.k, { value: l.toString(), onChange: (e) => i(Number(e)), label: "Height" }),
                    ],
                }),
                (0, o.jsx)(p.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = rq[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rJ).then(e1().cloneDeep)
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
                    (0, o.jsx)("div", {
                        style: { width: a, height: l },
                        children: (0, o.jsx)(
                            rY.a,
                            {
                                importData: () => {
                                    let t = rq[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rJ).then(e1().cloneDeep)
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
var rX = a(442433),
    rZ = a(395671);
let r0 = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("344751").then(a.bind(a, 575538));
            return (t) => (0, o.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("832986").then(a.bind(a, 728033)),
                t = new rZ.kJ({
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
            return () => (0, o.jsx)(e, { application: t, channelId: "987654321", onClose: rX.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("309004"), a.e("419690"), a.e("845322"), a.e("110758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(nE.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, o.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("876364"),
                    a.e("996907"),
                    a.e("8159"),
                    a.e("361922"),
                    a.e("403032"),
                    a.e("684290"),
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
                    a.e("304350"),
                    a.e("22865"),
                    a.e("173896"),
                    a.e("57358"),
                    a.e("722765"),
                    a.e("33909"),
                    a.e("754596"),
                    a.e("191601"),
                    a.e("401106"),
                    a.e("498589"),
                    a.e("21486"),
                    a.e("304419"),
                    a.e("45268"),
                    a.e("617281"),
                    a.e("733199"),
                    a.e("804510"),
                    a.e("655327"),
                    a.e("335532"),
                    a.e("138545"),
                    a.e("536490"),
                    a.e("771137"),
                    a.e("403655"),
                    a.e("212037"),
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
                    a.e("118203"),
                    a.e("331212"),
                    a.e("638259"),
                    a.e("635958"),
                    a.e("683621"),
                    a.e("711162"),
                    a.e("275179"),
                    a.e("289789"),
                    a.e("116125"),
                    a.e("977412"),
                    a.e("19385"),
                    a.e("692811"),
                    a.e("249681"),
                    a.e("996382"),
                    a.e("771657"),
                    a.e("122218"),
                    a.e("869047"),
                    a.e("449145"),
                    a.e("309004"),
                    a.e("356664"),
                    a.e("430997"),
                    a.e("728136"),
                    a.e("343116"),
                    a.e("216084"),
                    a.e("273669"),
                    a.e("284819"),
                    a.e("466147"),
                    a.e("50342"),
                    a.e("256373"),
                    a.e("387634"),
                    a.e("161058"),
                    a.e("333097"),
                    a.e("409391"),
                    a.e("479971"),
                    a.e("810262"),
                    a.e("346313"),
                    a.e("463726"),
                    a.e("553203"),
                    a.e("115368"),
                    a.e("343233"),
                    a.e("756684"),
                    a.e("419690"),
                    a.e("583827"),
                    a.e("806354"),
                    a.e("556026"),
                    a.e("416301"),
                    a.e("722191"),
                    a.e("225961"),
                    a.e("359702"),
                    a.e("708364"),
                    a.e("452823"),
                    a.e("8422"),
                    a.e("556967"),
                    a.e("647011"),
                    a.e("269178"),
                    a.e("553584"),
                    a.e("466913"),
                    a.e("583518"),
                    a.e("736621"),
                    a.e("752695"),
                    a.e("71719"),
                    a.e("893767"),
                    a.e("213848"),
                    a.e("588307"),
                    a.e("514878"),
                    a.e("676376"),
                    a.e("426508"),
                    a.e("361347"),
                    a.e("842935"),
                    a.e("73091"),
                    a.e("37786"),
                    a.e("886692"),
                    a.e("916373"),
                    a.e("528038"),
                    a.e("623522"),
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
                    a.e("637038"),
                    a.e("161309"),
                    a.e("694529"),
                    a.e("303807"),
                    a.e("995210"),
                    a.e("497743"),
                    a.e("784853"),
                    a.e("966016"),
                    a.e("218489"),
                    a.e("838336"),
                    a.e("317699"),
                    a.e("257032"),
                    a.e("772238"),
                    a.e("845322"),
                    a.e("945651"),
                    a.e("114748"),
                    a.e("426386"),
                    a.e("204665"),
                    a.e("652191"),
                    a.e("639855"),
                    a.e("214530"),
                    a.e("269786"),
                    a.e("149409"),
                    a.e("928246"),
                    a.e("632607"),
                    a.e("935277"),
                ]).then(a.bind(a, 237600)),
                t = Object.values(nE.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, o.jsx)(e, { ...a, guild: t });
        },
        GuildFolderContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("114748"), a.e("906240")]).then(a.bind(a, 595139));
            return (t) => (0, o.jsx)(e, { ...t, folderId: 1, folderColor: void 0, folderName: void 0, unread: !1 });
        },
        DeveloperContextMenu: async () => {
            let { default: e } = await a.e("715687").then(a.bind(a, 646938));
            return (t) => (0, o.jsx)(e, { ...t, id: "123456789", label: "Copy Test ID" });
        },
        UserSettingsMenu: async () => {
            let { default: e } = await Promise.all([a.e("594045"), a.e("926132"), a.e("44491")]).then(
                a.bind(a, 907206),
            );
            return (t) => (0, o.jsx)(e, { ...t, onClose: rX.Z_ });
        },
        ExpressionPickerContextMenu: async () => {
            let { default: e } = await a.e("446132").then(a.bind(a, 233503));
            return (t) => (0, o.jsx)(e, { ...t });
        },
        ForumTagContextMenu: async () => {
            let { default: e } = await a.e("432612").then(a.bind(a, 960015)),
                t = { id: "123456789", name: "Test Forum Tag" };
            return () => (0, o.jsx)(e, { tag: t });
        },
        GuildRoleConnectionsModalContextMenu: async () => {
            let { default: e } = await a.e("868001").then(a.bind(a, 699896));
            return (t) =>
                (0, o.jsx)(e, {
                    ...t,
                    roleId: "123456789",
                    onLeaveRole: () => {
                        (console.log("Leave role clicked"), (0, rX.Z_)());
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
            return () => (0, o.jsx)(e, { entry: i, requestId: "mock-request-123" });
        },
        AddQuestionsContextMenu: async () => {
            let { AddQuestionsContextMenu: e } = await Promise.all([
                    a.e("289789"),
                    a.e("722765"),
                    a.e("11810"),
                    a.e("838336"),
                    a.e("269786"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(nE.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, o.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              (console.log("Add form field:", e), (0, rX.Z_)());
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
                    a.e("285802"),
                    a.e("65200"),
                    a.e("703869"),
                    a.e("51212"),
                    a.e("584615"),
                ]).then(a.bind(a, 612826)),
                t = nE.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(aH.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = aH.A.getAllThreadsForParent(t.id);
                    if (e.length > 0) {
                        n = e[0];
                        break;
                    }
                }
                if (null != n) break;
            }
            return null == n
                ? (console.log("No thread channel found for ChannelListThreadContextMenu"), () => null)
                : (t) => (0, o.jsx)(e, { ...t, channel: n });
        },
        MembersTableSortContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("73091"), a.e("945651")]).then(a.bind(a, 779662)),
                t = Object.values(nE.A.getGuilds())[0];
            return null == t ? () => null : () => (0, o.jsx)(e, { guildId: t.id, onClose: rX.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("118203"),
                    a.e("71719"),
                    a.e("514878"),
                    a.e("966016"),
                    a.e("945651"),
                ]).then(a.bind(a, 316173)),
                t = Object.values(nE.A.getGuilds())[0];
            return null == t ? () => null : () => (0, o.jsx)(e, { guildId: t.id, onClose: rX.Z_ });
        },
    },
    r1 = {
        GuildShopSortOptions: d.lazy(async () => {
            let { default: e } = await Promise.all([a.e("583518"), a.e("255197"), a.e("250974")]).then(
                    a.bind(a, 324269),
                ),
                { default: t } = await a.e("255197").then(a.bind(a, 558060));
            return { default: () => (0, o.jsx)(t, { defaultSortOption: void 0, children: (0, o.jsx)(e, {}) }) };
        }),
    };
function r2() {
    let e = d.useMemo(
            () =>
                Object.keys(r0)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = d.useMemo(
            () =>
                Object.keys(r1)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = d.useState(null),
        [l, i] = d.useState(null),
        s = d.useCallback(
            (e) => {
                null != a && (0, rX.L3)(e, r0[a]);
            },
            [a],
        ),
        r = null != l ? r1[l] : null;
    return (0, o.jsx)(v.Ip, {
        className: tX.nd,
        children: (0, o.jsxs)(tY.B, {
            className: iV.l$,
            gap: 16,
            children: [
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, o.jsx)(g.E, { variant: "eyebrow", children: "Context Menus" }),
                        (0, o.jsx)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, o.jsxs)(tY.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, o.jsx)(aE.Z, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: a,
                            onSelectionChange: n,
                            selectionMode: "single",
                        }),
                        (0, o.jsx)(p.$, { variant: "primary", text: "Open", disabled: null == a, onClick: s }),
                    ],
                }),
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, o.jsx)(g.E, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, o.jsx)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, o.jsx)(tY.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, o.jsx)(aE.Z, {
                        label: "Render a Popout Menu",
                        placeholder: "Select a popout",
                        options: t,
                        value: l,
                        onSelectionChange: i,
                        selectionMode: "single",
                    }),
                }),
                null != r &&
                    (0, o.jsx)(d.Suspense, {
                        fallback: (0, o.jsx)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Loading...",
                        }),
                        children: (0, o.jsx)(r, {}),
                    }),
            ],
        }),
    });
}
var r3 = a(253506),
    r6 = a(665260),
    r5 = a(97808),
    r8 = a(778712),
    r4 = a(308528),
    r7 = a(148494),
    r9 = a(571694),
    oe = a(963852),
    ot = a(704844),
    oa = a(309010),
    on = a(645959),
    ol = a(716371),
    oi = a(32946);
let os = [
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
function or() {
    let [e, t] = d.useState(em.lAJ.USER_JOIN),
        a = (0, c.bG)([oa.Ay], () => oa.Ay.getChannelId(), []),
        n = d.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, oe.Ay)({ channelId: a, content: "", type: e, state: em.cmJ.SENT });
            r7.A.receiveMessage(a, t, !1);
        }, [a, e]),
        l = d.useCallback(() => {
            if (null != a)
                for (let { value: e } of os) {
                    let t = (0, oe.Ay)({ channelId: a, content: "", type: e, state: em.cmJ.SENT });
                    r7.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, o.jsxs)("div", {
        className: oi.gs,
        children: [
            (0, o.jsx)(aE.Z, {
                label: "Inject System Message",
                selectionMode: "single",
                options: os,
                placeholder: "Select type",
                value: e,
                onSelectionChange: t,
            }),
            (0, o.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Inject",
                onClick: n,
                disabled: null == a || null == e,
            }),
            (0, o.jsx)(p.$, { variant: "secondary", size: "sm", text: "Inject All", onClick: l, disabled: null == a }),
        ],
    });
}
function oo() {
    let e = (0, c.yK)([on.A], () => on.A.getSortedChannels()[1]),
        [t, a] = d.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, c.cf)([aH.A, eo.default, az.A], () => ({
            selectedChannel: aH.A.getChannel(t),
            options: e.map((e) => {
                let t = aH.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, aW.m1)(t, eo.default, az.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, o.jsx)(r5.eu, { src: (0, r9.Y)(t), "aria-hidden": !0, size: r8._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        i = d.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, r6.PQ)(n.recipientFlags ?? 0, r3.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            ot.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        s = !!n?.isPrivate() && (0, r6.Lt)(n.recipientFlags ?? 0, r3.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, o.jsxs)("div", {
        className: oi.gs,
        children: [
            (0, o.jsx)(aE.Z, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: l,
                placeholder: "Select DM",
                value: t,
                onSelectionChange: a,
            }),
            (0, o.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: s ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: i,
                disabled: null == t,
            }),
        ],
    });
}
function od() {
    let e = d.useCallback(() => {
        r4.A.openPrivateChannel({ recipientIds: [ol.K] });
    }, []);
    return (0, o.jsx)(p.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function oc() {
    let e = (0, c.bG)([ni.Ay], () => ni.Ay.allByCategory(ni.xW.MESSAGING), [], c.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, o.jsx)(h.d, { label: n, description: t, checked: a, onChange: (e) => i6(t, e) }, t);
    });
    return (0, o.jsxs)("div", {
        className: q()(tX.nd, oi.nd),
        children: [
            e,
            (0, o.jsx)("div", { className: oi.yF }),
            (0, o.jsx)(or, {}),
            (0, o.jsx)("div", { className: oi.yF }),
            (0, o.jsx)(oo, {}),
            (0, o.jsx)("div", { className: oi.yF }),
            (0, o.jsx)(od, {}),
        ],
    });
}
var ou = a(205693),
    om = a(772707),
    oh = a(150934),
    ox = a(598653),
    op = a(166403),
    og = a(625494),
    ov = a(204925),
    oj = a(325278);
let of = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("429232").then(a.bind(a, 180275));
        return (t) =>
            (0, o.jsx)(e, {
                ...t,
                headerText: n_.intl.string(n_.t.ZLRYGU),
                confirmButtonText: n_.intl.string(n_.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("919840").then(a.bind(a, 79779));
        return (t) =>
            (0, o.jsx)(e, {
                ...t,
                headerText: n_.intl.string(n_.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: n_.intl.string(n_.t["13ofGu"]),
                impression: { impressionName: sj.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("469663"), a.e("518467")]).then(a.bind(a, 297102));
        return (t) => (0, o.jsx)(e, { ...t, entryPoint: nL.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("533651"), a.e("682758"), a.e("280022"), a.e("810136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, o.jsx)(e, { ...t, source: ov.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e("280959").then(a.bind(a, 784578));
        return (t) => (0, o.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([
            a.e("533651"),
            a.e("682758"),
            a.e("319623"),
            a.e("280022"),
            a.e("401143"),
        ]).then(a.bind(a, 284778));
        return (t) => (0, o.jsx)(e, { ...t });
    },
    NUFModal: async () => {
        let { default: e } = await Promise.all([
            a.e("188406"),
            a.e("538288"),
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
        return (t) => (0, o.jsx)(e, { ...t, onSlideChange: () => {} });
    },
    ClaimAccountModal: async () => {
        let { default: e } = await Promise.all([a.e("213042"), a.e("319623"), a.e("121007")]).then(a.bind(a, 110744));
        return (t) => (0, o.jsx)(e, { claimRequired: !0, ...t });
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await Promise.all([a.e("51194"), a.e("909018")]).then(a.bind(a, 466702));
        return (t) => (0, o.jsx)(e, { ...t, classificationId: "123" });
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await Promise.all([a.e("513221"), a.e("273669"), a.e("307133")]).then(a.bind(a, 580812));
        return (t) => (0, o.jsx)(e, { ...t, guildId: "123", messageId: null });
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await a.e("452343").then(a.bind(a, 725034));
        return (t) => (0, o.jsx)(e, { ...t, guildId: "123" });
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.all([a.e("590275"), a.e("766806"), a.e("989545"), a.e("311493")]).then(
            a.bind(a, 914724),
        );
        return (t) => (0, o.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("796531").then(a.bind(a, 880510));
        return (t) => (0, o.jsx)(e, { ...t, mediaEngineContext: ou.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, o.jsx)(om.k, {
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
                children: (0, o.jsx)("div", {
                    children:
                        "This modal showcases the new dynamic graphics system where components can be loaded dynamically based on enum values, providing type safety while maintaining runtime flexibility.",
                }),
            });
    },
    OverlayDisabledSurveyModal: async () => {
        let { default: e } = await Promise.all([a.e("914052"), a.e("82318")]).then(a.bind(a, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(a.bind(a, 918825));
        return (a) => (0, o.jsx)(e, { ...a, clientSettingType: t.LEGACY_GAME, gameId: "123456789" });
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
            };
        function i(a) {
            let { ref: i, ...s } = a,
                [r, c] = d.useState(null),
                { onClose: u, transitionState: m } = s,
                h = d.useMemo(
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
                        pauseDuration: r,
                        setPauseDuration: c,
                    }),
                    [u, m, r],
                );
            return (0, o.jsx)(t.Provider, { value: h, children: (0, o.jsx)(e, {}) });
        }
        return ((i.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, o.jsx)(i, { ...e }));
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
            (0, o.jsx)(e, {
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
        let { default: e } = await Promise.all([a.e("187880"), a.e("465694"), a.e("398816")]).then(a.bind(a, 855170)),
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
                    r = t.default.getLastSelectedDeviceByPlatform,
                    d = t.default.getAwaitingRemoteSessionInfo;
                ((t.default.getDevicesForPlatform = (e) => (e === em.fg2.PLAYSTATION ? i : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== em.fg2.PLAYSTATION && s.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === em.fg2.PLAYSTATION ? "device-1" : r.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null));
                let c = a.onClose;
                return (
                    (a.onClose = async () => {
                        ((t.default.getDevicesForPlatform = n),
                            (t.default.getFetchingDevices = s),
                            (t.default.getLastSelectedDeviceByPlatform = r),
                            (t.default.getAwaitingRemoteSessionInfo = d),
                            await c());
                    }),
                    (0, o.jsx)(e, { ...a, channel: l, platform: em.fg2.PLAYSTATION })
                );
            };
        return ((s.displayName = "PlayStationModalWrapper"), s);
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([a.e("568035"), a.e("627495")]).then(a.bind(a, 651930));
        return (t) => (0, o.jsx)(e, { ...t, detected: { applicationId: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([a.e("726464"), a.e("292030"), a.e("51471")]).then(a.bind(a, 550560));
        return (t) => (0, o.jsx)(e, { ...t, classificationId: "123456789" });
    },
    CreateTagModal: async () => {
        let { default: e } = await Promise.all([a.e("143172"), a.e("347326")]).then(a.bind(a, 950989));
        return (t) => (0, o.jsx)(e, { ...t, channelId: "123456789", guildId: "987654321" });
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await Promise.all([a.e("143172"), a.e("347326")]).then(a.bind(a, 950989)),
            t = { id: "tag-123", name: "Bug Report", emojiId: "123456789", emojiName: "\uD83D\uDC1B", moderated: !0 };
        return (a) => (0, o.jsx)(e, { ...a, channelId: "123456789", guildId: "987654321", tag: t });
    },
    ConfirmModal: async () => {
        let { ConfirmModal: e } = await Promise.all([a.e("304823"), a.e("223976"), a.e("977260")]).then(
            a.bind(a, 397927),
        );
        return (t) =>
            (0, o.jsx)(e, {
                ...t,
                title: "Confirm Action",
                subtitle: "Are you sure you want to perform this action? This action cannot be undone.",
                confirmText: "Confirm",
                onConfirm: () => console.log("ConfirmModal: Confirmed"),
                onCancel: () => console.log("ConfirmModal: Cancelled"),
            });
    },
    AlertModal: async () => {
        let { Alert: e } = await Promise.all([a.e("844331"), a.e("21553")]).then(a.bind(a, 381512));
        return (t) =>
            (0, o.jsx)(e, {
                ...t,
                title: "Alert",
                body: "This is an alert message with a single action.",
                confirmText: "OK",
                onConfirm: () => console.log("AlertModal: Confirmed"),
            });
    },
    AlertModalWithCancel: async () => {
        let { Alert: e } = await Promise.all([a.e("844331"), a.e("21553")]).then(a.bind(a, 381512));
        return (t) =>
            (0, o.jsx)(e, {
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
        let { Alert: e } = await Promise.all([a.e("844331"), a.e("21553")]).then(a.bind(a, 381512));
        return (t) =>
            (0, o.jsx)(e, {
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
            } = await Promise.all([a.e("304823"), a.e("223976"), a.e("977260")]).then(a.bind(a, 397927)),
            { DisableCommunicationDuration: s, getFriendlyDurationString: r } = await Promise.resolve().then(
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
                    { value: s.DURATION_60_SEC, label: r(s.DURATION_60_SEC) },
                    { value: s.DURATION_5_MIN, label: r(s.DURATION_5_MIN) },
                    { value: s.DURATION_10_MIN, label: r(s.DURATION_10_MIN) },
                    { value: s.DURATION_1_HOUR, label: r(s.DURATION_1_HOUR) },
                    { value: s.DURATION_1_DAY, label: r(s.DURATION_1_DAY) },
                    { value: s.DURATION_1_WEEK, label: r(s.DURATION_1_WEEK) },
                ],
                b = d.useCallback(async () => {
                    (g(!0),
                        console.log("GuildDisableCommunicationModal: Timing out user", {
                            user: c,
                            duration: r(u),
                            reason: null != h ? h : "No reason provided",
                            resolveFlag: v,
                        }),
                        await new Promise((e) => setTimeout(e, 1e3)),
                        g(!1),
                        a.onClose());
                }, [u, h, v, a]);
            return (0, o.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, o.jsxs)(n, {
                        variant: "heading-lg/semibold",
                        className: "mb-2",
                        children: ["Disable Communication for ", c, "#", "0001"],
                    }),
                    (0, o.jsx)(t, {
                        variant: "text-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: "This will temporarily disable the user's ability to communicate in this server.",
                    }),
                    (0, o.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, o.jsx)(n, { variant: "heading-sm/semibold", className: "mb-2", children: "Duration" }),
                            (0, o.jsx)(i, {
                                children: f.map((t) =>
                                    (0, o.jsx)(
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
                    (0, o.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, o.jsx)(n, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Reason (Optional)",
                            }),
                            (0, o.jsx)("textarea", {
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
                    (0, o.jsx)("div", {
                        className: "mb-4",
                        children: (0, o.jsx)(l, { checked: v, onChange: j, label: "Resolve associated mod report" }),
                    }),
                    (0, o.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, o.jsx)(e, { variant: "secondary", text: "Cancel", onClick: a.onClose }),
                            (0, o.jsx)(e, { variant: "primary", text: "Timeout User", onClick: b, disabled: p }),
                        ],
                    }),
                ],
            });
        }
        return (e) => (0, o.jsx)(u, { ...e });
    },
    GuildPowerupDeactivateModal: async () => {
        let {
                Button: e,
                Text: t,
                Heading: n,
                Checkbox: l,
            } = await Promise.all([a.e("304823"), a.e("223976"), a.e("977260")]).then(a.bind(a, 397927)),
            i = await Promise.resolve().then(a.t.bind(a, 582128, 19)),
            s = "Level 3 Server Boost",
            r = 200,
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
            return (0, o.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, o.jsxs)(n, { variant: "heading-lg/semibold", className: "mb-2", children: ["Deactivate ", s] }),
                    (0, o.jsxs)(t, {
                        variant: "text-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: [
                            "This will remove the ",
                            s,
                            " from your server and disable all associated features.",
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: "mb-4",
                        style: {
                            backgroundColor: "var(--background-base-lower)",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-subtle)",
                        },
                        children: [
                            (0, o.jsx)(n, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Current Features",
                            }),
                            (0, o.jsxs)("div", {
                                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
                                children: [
                                    (0, o.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", r, " emoji slots"],
                                    }),
                                    (0, o.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", d, " sticker slots"],
                                    }),
                                    (0, o.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", c, " sound slots"],
                                    }),
                                    (0, o.jsx)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: "\u2022 Custom server banner",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: "mb-4",
                        style: {
                            backgroundColor: "var(--background-danger)",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-feedback-critical)",
                        },
                        children: [
                            (0, o.jsxs)(t, {
                                variant: "eyebrow",
                                color: "text-feedback-critical",
                                className: "mb-2",
                                children: [
                                    (0, o.jsx)("span", {
                                        role: "img",
                                        "aria-label": "Warning",
                                        children: "\u26A0\uFE0F",
                                    }),
                                    " ",
                                    "Warning",
                                ],
                            }),
                            (0, o.jsx)(t, {
                                variant: "text-sm/medium",
                                color: "text-feedback-critical",
                                children:
                                    "Deactivating this powerup will immediately remove all Level 3 features from your server. Members will lose access to custom emojis, stickers, and other premium features. This action cannot be undone.",
                            }),
                        ],
                    }),
                    (0, o.jsx)("div", {
                        className: "mb-4",
                        children: (0, o.jsx)(l, {
                            checked: u,
                            onChange: m,
                            label: "I understand that deactivating this powerup will remove all Level 3 features from my server",
                            labelType: "secondary",
                        }),
                    }),
                    (0, o.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, o.jsx)(e, { variant: "secondary", text: "Cancel", onClick: a.onClose }),
                            (0, o.jsx)(e, {
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
        return (e) => (0, o.jsx)(u, { ...e });
    },
    DataHarvestModal: async () => {
        let { default: e } = await a.e("292063").then(a.bind(a, 970018));
        return (t) =>
            (0, o.jsx)(e, {
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
        let { default: e } = await Promise.all([
            a.e("443159"),
            a.e("553203"),
            a.e("82721"),
            a.e("452823"),
            a.e("674832"),
        ]).then(a.bind(a, 709779));
        return (t) =>
            (0, o.jsx)(e, {
                ...t,
                onClose: async () => {
                    (console.log("EnableCommunityModal: Closed"), await t.onClose());
                },
            });
    },
    DeprivateModal: async () => {
        let e = (await Promise.all([a.e("315273"), a.e("254857")]).then(a.bind(a, 147696))).default;
        return (t) => (0, o.jsx)(e, { ...t, guildId: "123456789012345678", startingChannelId: "987654321098765432" });
    },
    CameraPreviewModal: async () => {
        let { default: e } = await Promise.all([a.e("650100"), a.e("410534")]).then(a.bind(a, 308229));
        return (t) => (0, o.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e("650100"), a.e("410534")]).then(a.bind(a, 308229));
        return (t) => (0, o.jsx)(e, { ...t, videoEnabled: !0, onEnable: () => console.log("Camera enabled") });
    },
    ModeratorReportResolveConfirmModal: async () => {
        let { default: e } = await Promise.resolve().then(a.bind(a, 390897));
        return (t) =>
            (0, o.jsx)(e, {
                ...t,
                handleResolveFlag: () => console.log("ModeratorReportResolveConfirmModal: Flag resolved"),
            });
    },
    SelectFriendsModal: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 303682));
        return (a) => {
            let { onClose: n, ...l } = a;
            return (0, o.jsx)(e, {
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
            return (0, o.jsx)(e, {
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
            a.e("866475"),
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
        return (t) => (0, o.jsx)(e, { ...t, parentId: null, source: "devtools" });
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([
            a.e("866475"),
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
            (0, o.jsx)(e, { ...t, applicationId: "123456789", mediaUrl: "https://picsum.photos/400/300.jpg" });
    },
    CallUserConfirmationModal: async () => {
        let { default: e } = await a.e("19106").then(a.bind(a, 502054));
        return (t) =>
            (0, o.jsx)(e, {
                ...t,
                onSubmit: () => {
                    (console.log("CallUserConfirmationModal: Call confirmed"), t.onClose());
                },
            });
    },
    OptInReorderAttemptModal: async () => {
        let { default: e } = await Promise.all([a.e("57729"), a.e("697585"), a.e("24848")]).then(a.bind(a, 354643));
        return (t) =>
            (0, o.jsx)(e, {
                ...t,
                onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()),
            });
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await Promise.all([a.e("273669"), a.e("364499")]).then(a.bind(a, 296222));
        return (t) =>
            (0, o.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose()),
            });
    },
    ConsentCheckBoxModal: async () => {
        let { ConfirmModal: e } = await Promise.all([a.e("304823"), a.e("223976"), a.e("977260")]).then(
                a.bind(a, 397927),
            ),
            { Text: t, Heading: n } = await Promise.all([a.e("304823"), a.e("223976"), a.e("977260")]).then(
                a.bind(a, 397927),
            ),
            l = await Promise.resolve().then(a.t.bind(a, 582128, 19));
        function i(a) {
            let [i, s] = l.useState(!1),
                [r, d] = l.useState(!1);
            return (0, o.jsx)(e, {
                ...a,
                title: "Consent CheckBox Examples",
                confirmText: "Close",
                cancelText: "",
                onConfirm: () => (console.log("ConsentCheckBoxModal: Modal closed"), a.onClose()),
                onCancel: () => {},
                children: (0, o.jsxs)("div", {
                    style: { padding: "20px", display: "flex", flexDirection: "column", gap: "20px" },
                    children: [
                        (0, o.jsxs)("div", {
                            children: [
                                (0, o.jsx)(n, {
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Terms of Service Consent",
                                }),
                                (0, o.jsx)(oh.S, {
                                    label: "I agree to Discord's Terms of Service and Privacy Policy",
                                    checked: i,
                                    onChange: (e) => s(e),
                                    labelType: "secondary",
                                }),
                                (0, o.jsxs)(t, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Consent status: ", i ? "Agreed" : "Not agreed"],
                                }),
                            ],
                        }),
                        (0, o.jsxs)("div", {
                            children: [
                                (0, o.jsx)(n, {
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Promotional Email Consent",
                                }),
                                (0, o.jsx)(oh.S, {
                                    label: "I would like to receive promotional emails from Discord about new features, events, and other updates.",
                                    checked: r,
                                    onChange: (e) => d(e),
                                    labelType: "secondary",
                                }),
                                (0, o.jsxs)(t, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Promo consent status: ", r ? "Opted in" : "Not opted in"],
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        return ((i.displayName = "ConsentCheckBoxModalContent"), (e) => (0, o.jsx)(i, { ...e }));
    },
    GuildRaidLockdownFeedbackModal: async () => {
        let { default: e } = await Promise.all([a.e("660608"), a.e("346313")]).then(a.bind(a, 336496));
        return (t) =>
            (0, o.jsx)(e, {
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
        return (t) => (0, o.jsx)(e, { ...t, guild: n });
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
        return (t) => (0, o.jsx)(e, { ...t, guild: l });
    },
    EmojiAddModal: async () => {
        let { EmojiAddModal: e } = await Promise.all([a.e("225560"), a.e("990410")]).then(a.bind(a, 126033));
        return (t) =>
            (0, o.jsx)(e, {
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
        return (t) => (0, o.jsx)(e, { ...t });
    },
    VoiceCallFeedback: async () => {
        let { default: e } = await Promise.all([
                a.e("36781"),
                a.e("713710"),
                a.e("803461"),
                a.e("155925"),
                a.e("137381"),
                a.e("259375"),
                a.e("64054"),
            ]).then(a.bind(a, 47893)),
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
        return (a) => (0, o.jsx)(e, { ...a, analyticsData: t });
    },
    StreamFeedback: async () => {
        let { default: e } = await Promise.all([
                a.e("36781"),
                a.e("713710"),
                a.e("803461"),
                a.e("155925"),
                a.e("137381"),
                a.e("259375"),
                a.e("617171"),
                a.e("862767"),
            ]).then(a.bind(a, 218738)),
            t = { ownerId: "987654321", guildId: "123456789", channelId: "123456789", streamType: oj.U4.GUILD },
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
        return (a) => (0, o.jsx)(e, { ...a, isStreamer: !1, stream: t, streamApplication: n, analyticsData: l });
    },
    FamilyCenterAcceptLinkModal: async () => {
        let e = eo.default.getUser("12345"),
            t = eo.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("916131"), a.e("155738"), a.e("331385")]).then(a.bind(a, 58144));
        return (a) => (0, o.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = eo.default.getUser("12345"),
            t = eo.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("916131"), a.e("155738"), a.e("384811")]).then(a.bind(a, 389094));
        return (a) => (0, o.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = eo.default.getUser("12345"),
            t = eo.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("916131"), a.e("155738"), a.e("817219")]).then(a.bind(a, 187278));
        return (a) => (0, o.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = eo.default.getUser("12345"),
            t = eo.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("321855"), a.e("943139")]).then(a.bind(a, 179950));
        return (a) => (0, o.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([a.e("683023"), a.e("272875")]).then(a.bind(a, 320742));
        return (t) => (0, o.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("634508"), a.e("485579")]).then(a.bind(a, 785606)),
            t = op.A.getPremiumGroupSubscription();
        return null == t ? () => null : (a) => (0, o.jsx)(e, { ...a, subscription: t });
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await Promise.all([a.e("56498"), a.e("399910")]).then(a.bind(a, 826181));
        return (t) =>
            (0, o.jsx)(e, {
                ...t,
                premiumGroupSubscriptionId: "1234567890",
                premiumGroupInviteId: "1234567890",
                isExistingSub: !1,
                premiumGroupPrimaryName: "Test User",
            });
    },
    QuarantineModeInfoModal: async () => {
        let { default: e } = await a.e("474575").then(a.bind(a, 218642));
        return (t) => (0, o.jsx)(e, { ...t });
    },
    CaptchaTestModal: async () => {
        let { default: e } = await a.e("417724").then(a.bind(a, 563255));
        return (t) => (0, o.jsx)(e, { ...t });
    },
    PasswordConfirm: async () => {
        let { default: e } = await Promise.resolve().then(a.bind(a, 662758));
        return (t) =>
            (0, o.jsx)(e, {
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
        return (t) => (0, o.jsx)(e, { ...t, url: "https://example-phishing-site.com/malicious-page" });
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await Promise.all([a.e("494150"), a.e("962684")]).then(a.bind(a, 228855)),
            t = Object.keys(nE.A.getGuilds())[0];
        return (a) => (0, o.jsx)(e, { ...a, guildId: t });
    },
    UrgentMessageModal: async () => {
        let { default: e } = await Promise.all([a.e("689913"), a.e("136724")]).then(a.bind(a, 531519));
        return (t) => (0, o.jsx)(e, { ...t });
    },
    UserAgreementsModal: async () => {
        let { default: e } = await Promise.all([a.e("50726"), a.e("482911"), a.e("922220")]).then(a.bind(a, 639719));
        return (t) => (0, o.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await Promise.all([a.e("796057"), a.e("553203"), a.e("452823"), a.e("971905")]).then(
                a.bind(a, 868952),
            ),
            t = Object.values(nE.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, o.jsx)(e, { ...a, guild: t });
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
        return (t) => (0, o.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("444038"),
            a.e("807432"),
            a.e("601495"),
            a.e("807265"),
            a.e("549106"),
            a.e("901352"),
            a.e("579023"),
            a.e("248672"),
        ]).then(a.bind(a, 777307));
        return (t) => (0, o.jsx)(e, { ...t });
    },
    PremiumGroupSubscribeModal: async () => {
        let { default: e } = await Promise.all([a.e("499709"), a.e("569595")]).then(a.bind(a, 526710));
        return (t) => (0, o.jsx)(e, { ...t });
    },
    NewUserOnboarding: async () => {
        let { default: e } = await Promise.all([
            a.e("188406"),
            a.e("538288"),
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
            a.e("908768"),
        ]).then(a.bind(a, 189411));
        return (t) => (0, o.jsx)(e, { ...t });
    },
};
function ob() {
    let e = d.useMemo(
            () =>
                Object.keys(of)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = d.useState(null);
    return (0, o.jsx)(v.Ip, {
        className: tX.nd,
        children: (0, o.jsxs)("div", {
            className: iV.l$,
            children: [
                (0, o.jsx)("section", {
                    className: iV.uW,
                    children: (0, o.jsxs)(tY.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, o.jsx)(aE.Z, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                onSelectionChange: a,
                                selectionMode: "single",
                            }),
                            (0, o.jsx)(p.$, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, eY.openModalLazy)(of[t]),
                            }),
                        ],
                    }),
                }),
                (0, o.jsxs)("section", {
                    className: iV.uW,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, o.jsx)("div", {
                            className: iV.bd,
                            children: (0, o.jsx)(p.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: function () {
                                    ((0, ox.o)(!0), og._.dispatch(em.jej.PREMIUM_SUBSCRIPTION_CREATED));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var oy = a(933832),
    oE = a(472229),
    oC = a(10392),
    oS = a(669316),
    o_ = a(959165),
    oN = a(354670),
    oA = a(158045);
async function ok() {
    try {
        let { body: e } = await it.Bo.get({ url: em.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
        return e;
    } catch (e) {
        return [];
    }
}
async function oI() {
    try {
        let { body: e } = await it.Bo.get({ url: em.Rsh.USER_OFFERS, rejectWithError: !0 });
        return { trial: e.trial.map(o_.A.createFromServer), discount: e.discount.map(oS.A.createFromServer) };
    } catch (e) {
        return { trial: [], discount: [] };
    }
}
async function oD(e, t) {
    try {
        await it.Bo.post({ url: em.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oC._D)();
    }
}
async function oT(e, t) {
    try {
        await it.Bo.del({ url: em.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oC._D)();
    }
}
async function oR() {
    try {
        await it.Bo.del({ url: em.Rsh.USER_OFFERS, rejectWithError: !0 });
    } catch {
    } finally {
        (await oN.A.forceReset(), await (0, oC._D)());
    }
}
async function oO(e) {
    await it.Bo.post({ url: em.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
}
function ow(e) {
    let { acked: t, expired: a, inStore: n, onClick: l, secondaryBadge: i } = e,
        s = "Created";
    return (
        a ? (s = "Expired") : t ? (s = "Acked") : n && (s = "Active"),
        (0, o.jsxs)("div", {
            className: iV.fC,
            children: [
                (0, o.jsx)(J.D, {
                    onClick: l,
                    className: q()(iV.qS, iV.vk, { [iV.vu]: n, [iV.R1]: t, [iV._7]: a }),
                    children: (0, o.jsxs)(g.E, {
                        variant: "eyebrow",
                        color: t ? void 0 : "text-overlay-light",
                        children: [s, n ? " *" : ""],
                    }),
                }),
                null != i &&
                    i.active &&
                    (0, o.jsx)("div", {
                        className: q()(iV.qS, iV.k3),
                        children: (0, o.jsx)(g.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: i.label,
                        }),
                    }),
            ],
        })
    );
}
function oM(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [i, s] = d.useState(!1),
        [r, c] = d.useState(!1),
        [u, m] = d.useState(!1),
        [h, x] = d.useState(!1);
    d.useEffect(() => {
        u && x(!0);
        let e = setTimeout(() => {
            x(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: p, expiresAt: v, trialId: j, subscriptionTrial: f, referrer: b } = t,
        y =
            a.find((e) => {
                let { value: t } = e;
                return t === j;
            })?.label ?? "Unknown";
    null != b && (y = `${y} from @${b.username}`);
    let E = null != v,
        C = t.hasExpired,
        S = t.isRedeemed,
        _ = f?.skuId === tM.pe.TIER_0;
    async function N() {
        (m(!0), E ? await A({ expiresAt: null }) : await (0, oC.u1)(t), n(), m(!1));
    }
    async function A(e) {
        m(!0);
        try {
            await it.Bo.patch({
                url: em.Rsh.UPDATE_USER_OFFER(p, "trial"),
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
        d.useEffect(() => {
            if (i) {
                let e = setTimeout(() => {
                    s(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
            if (r) {
                let e = setTimeout(() => {
                    c(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [i, r]),
        (0, o.jsxs)("div", {
            className: q()(iV.Nr, _ ? iV.Qf : iV.C1),
            children: [
                (0, o.jsx)("div", {
                    className: q()(iV.nM, iV.S7),
                    children: (0, o.jsx)(X.D, {
                        variant: "heading-lg/semibold",
                        color: "text-overlay-light",
                        children: y,
                    }),
                }),
                (0, o.jsxs)(J.D, {
                    className: q()(iV.nM, iV.QB),
                    onClick: () => {
                        (0, nQ.C)(p, () => s(!0));
                    },
                    children: [
                        (0, o.jsxs)(g.E, { variant: "eyebrow", color: "text-overlay-light", children: ["Offer: ", p] }),
                        i
                            ? (0, o.jsx)(oy.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: iV.Kk })
                            : (0, o.jsx)(nV.CopyIcon, { size: "xs", color: "currentColor", className: iV.Kk }),
                    ],
                }),
                (0, o.jsxs)(J.D, {
                    className: q()(iV.nM, iV.QB),
                    onClick: () => {
                        (0, nQ.C)(j, () => c(!0));
                    },
                    children: [
                        (0, o.jsxs)(g.E, { variant: "eyebrow", color: "text-overlay-light", children: ["Trial: ", j] }),
                        r
                            ? (0, o.jsx)(oy.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: iV.Kk })
                            : (0, o.jsx)(nV.CopyIcon, { size: "xs", color: "currentColor", className: iV.Kk }),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: iV.nM,
                    children: (0, o.jsxs)(g.E, {
                        variant: "eyebrow",
                        color: "text-overlay-light",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, oA.re)({
                                intervalType: f?.interval ?? tM.WT.MONTH,
                                intervalCount: f?.intervalCount ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, o.jsxs)("div", {
                    className: iV.nM,
                    children: [
                        (0, o.jsxs)(g.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, oE.A)(), "):"],
                        }),
                        (0, o.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nX.Xm)(v?.toISOString()),
                            onChange: (e) => {
                                A({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: iV.nM,
                    children: [
                        (0, o.jsx)(g.E, { variant: "eyebrow", color: "text-overlay-light", children: "Referrer ID:" }),
                        (0, o.jsx)("input", {
                            type: "text",
                            value: b?.id ?? "",
                            onChange: (e) => A({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, o.jsx)(ow, {
                    acked: E,
                    expired: C,
                    inStore: l,
                    onClick: N,
                    secondaryBadge: { active: S, label: "Redeemed" },
                }),
                (0, o.jsx)(J.D, {
                    onClick: async () => {
                        (m(!0), await oT(p, "trial"), n(), m(!1));
                    },
                    children: (0, o.jsx)(nz.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: q()(iV.Kk, iV.IT),
                    }),
                }),
                (0, o.jsx)("div", { className: q()(iV.g4, { [iV.VP]: u || h }), children: (0, o.jsx)(td.y, {}) }),
            ],
        })
    );
}
function oP(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [i, s] = d.useState(!1),
        [r, c] = d.useState(!1),
        [u, m] = d.useState(!1),
        [h, x] = d.useState(!1);
    d.useEffect(() => {
        u && x(!0);
        let e = setTimeout(() => {
            x(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: p, expiresAt: v, discountId: j, discount: f } = t,
        b =
            a.find((e) => {
                let { value: t } = e;
                return t === j;
            })?.label ?? "Unknown",
        y = null != v,
        E = t.hasExpired(),
        C = t.isApplied();
    async function S() {
        (m(!0), y ? await _({ expiresAt: null }) : await (0, oC.u1)(void 0, t), n(), m(!1));
    }
    async function _(e) {
        let { expiresAt: t } = e;
        m(!0);
        try {
            await it.Bo.patch({
                url: em.Rsh.UPDATE_USER_OFFER(p, "discount"),
                body: { expires_at: t },
                rejectWithError: !0,
            });
        } finally {
            (n(), m(!1));
        }
    }
    return (
        d.useEffect(() => {
            if (i) {
                let e = setTimeout(() => {
                    s(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
            if (r) {
                let e = setTimeout(() => {
                    c(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [i, r]),
        (0, o.jsxs)("div", {
            className: q()(iV.Nr, iV.id),
            children: [
                (0, o.jsx)("div", {
                    className: q()(iV.nM, iV.S7),
                    children: (0, o.jsx)(X.D, { variant: "heading-lg/semibold", color: "text-default", children: b }),
                }),
                (0, o.jsxs)(J.D, {
                    className: q()(iV.nM, iV.QB),
                    onClick: () => {
                        (0, nQ.C)(p, () => s(!0));
                    },
                    children: [
                        (0, o.jsxs)(g.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", p] }),
                        i
                            ? (0, o.jsx)(oy.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: q()(iV.Kk, iV.mK),
                              })
                            : (0, o.jsx)(nV.CopyIcon, { size: "xs", color: "currentColor", className: iV.Kk }),
                    ],
                }),
                (0, o.jsxs)(J.D, {
                    className: q()(iV.nM, iV.QB),
                    onClick: () => {
                        (0, nQ.C)(j, () => c(!0));
                    },
                    children: [
                        (0, o.jsxs)(g.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", j] }),
                        r
                            ? (0, o.jsx)(oy.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: q()(iV.Kk, iV.mK),
                              })
                            : (0, o.jsx)(nV.CopyIcon, { size: "xs", color: "currentColor", className: iV.Kk }),
                    ],
                }),
                f?.amount != null &&
                    (0, o.jsx)("div", {
                        children: (0, o.jsxs)(g.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [f.amount, "% off"],
                        }),
                    }),
                (0, o.jsxs)("div", {
                    className: iV.nM,
                    children: [
                        (0, o.jsxs)(g.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, oE.A)(), "):"],
                        }),
                        (0, o.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nX.Xm)(v?.toISOString()),
                            onChange: (e) =>
                                _({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, o.jsx)(ow, {
                    acked: y,
                    expired: E,
                    inStore: l,
                    onClick: S,
                    secondaryBadge: { active: C, label: "Applied" },
                }),
                (0, o.jsx)(J.D, {
                    className: iV.aR,
                    onClick: async () => {
                        (m(!0), await oT(p, "discount"), n(), m(!1));
                    },
                    children: (0, o.jsx)(nz.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: q()(iV.Kk, iV.fy),
                    }),
                }),
                (0, o.jsx)("div", { className: q()(iV.g4, { [iV.VP]: u || h }), children: (0, o.jsx)(td.y, {}) }),
            ],
        })
    );
}
function oL() {
    let [e, t] = d.useState([]),
        [a, n] = d.useState([]),
        [l, i] = d.useState(),
        [s, r] = d.useState(),
        [u, m] = d.useState(!0),
        { discountOffers: h, trialOffers: x } = (0, c.cf)([oN.A], () => ({
            discountOffers: Object.values(oN.A.getState().userDiscountOffers).sort((e, t) => e.id.localeCompare(t.id)),
            trialOffers: Object.values(oN.A.getState().userTrialOffers).sort((e, t) => e.id.localeCompare(t.id)),
        })),
        [j, b] = d.useState([]),
        [y, E] = d.useState([]),
        [C, S] = d.useState(10080),
        [_, N] = d.useState([]),
        A = d.useMemo(() => new Set([...x, ...h].map((e) => e.id)), [x, h]),
        k = d.useMemo(() => [...x, ...j.filter((e) => !A.has(e.id))], [x, j, A]),
        I = d.useMemo(() => [...h, ...y.filter((e) => !A.has(e.id))], [h, y, A]),
        { entitlements: D, deleteFractionalPremium: T, refreshEntitlementList: R } = iB();
    async function O() {
        null != l && (await oD(l, "trial"), m(!0));
    }
    async function w() {
        null != s && (await oD(s, "discount"), m(!0));
    }
    async function M() {
        (await oR(), m(!0));
    }
    async function P() {
        let e = new Date(Date.now() + 60 * C * 1e3).toISOString();
        (await oO(e), R());
    }
    return (
        d.useEffect(() => {
            R();
        }, [R]),
        d.useEffect(() => {
            N(D.filter((e) => e.sourceType === em.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [D]),
        d.useEffect(() => {
            (0 === e.length || 0 === a.length || u) &&
                ok().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        o = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    (t(a), n(o), null == l && i(a[0].value), null == s && r(o[0].value));
                });
        }, [e, a, l, s, u]),
        d.useEffect(() => {
            u &&
                (m(!1),
                oN.A.forceReset(),
                (0, oC._D)(),
                oI().then((e) => {
                    (b(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        E(e.discount.sort((e, t) => e.id.localeCompare(t.id))));
                }));
        }, [u]),
        (0, o.jsx)(v.Ip, {
            className: tX.nd,
            children: (0, o.jsxs)("div", {
                className: iV.l$,
                children: [
                    (0, o.jsxs)("section", {
                        className: iV.uW,
                        children: [
                            (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Utils" }),
                            (0, o.jsxs)("div", {
                                className: iV.Uo,
                                children: [
                                    (0, o.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear all User Offers",
                                        onClick: M,
                                    }),
                                    (0, o.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Mobile Trials DismissibleContent",
                                        onClick: () => (0, aw.xB)(aO.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    }),
                                    (0, o.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Offer Nagbar DismissibleContent",
                                        onClick: () => (0, aw._N)(aO.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                    }),
                                    (0, o.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Refresh DevTools",
                                        onClick: () => m(!0),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, o.jsx)("section", {
                        className: iV.uW,
                        children: (0, o.jsxs)("div", {
                            className: iV.bd,
                            children: [
                                (0, o.jsx)(f.l, {
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
                                (0, o.jsx)(p.$, { variant: "primary", text: "Create", onClick: O }),
                            ],
                        }),
                    }),
                    (0, o.jsx)("section", {
                        className: iV.uW,
                        children: (0, o.jsxs)("div", {
                            className: iV.bd,
                            children: [
                                (0, o.jsx)(f.l, {
                                    label: "Create a Discount Offer",
                                    options: a,
                                    formatOption: (e) => {
                                        let { label: t, value: a } = e;
                                        return { label: t, value: a, id: a };
                                    },
                                    value: s,
                                    placeholder: "Discount Type",
                                    onSelectionChange: r,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, o.jsx)(p.$, { variant: "primary", text: "Create", onClick: w }),
                            ],
                        }),
                    }),
                    k.length > 0 &&
                        (0, o.jsxs)("section", {
                            className: iV.uW,
                            children: [
                                (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                                (0, o.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                k.map((t) =>
                                    (0, o.jsx)(
                                        oM,
                                        { offer: t, offerOptions: e, forceRefetch: () => m(!0), inStore: A.has(t.id) },
                                        t.id,
                                    ),
                                ),
                            ],
                        }),
                    I.length > 0 &&
                        (0, o.jsxs)("section", {
                            className: iV.uW,
                            children: [
                                (0, o.jsx)(X.D, {
                                    variant: "heading-md/semibold",
                                    children: "Existing Discount Offers",
                                }),
                                (0, o.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                I.map((e) =>
                                    (0, o.jsx)(
                                        oP,
                                        { offer: e, offerOptions: a, forceRefetch: () => m(!0), inStore: A.has(e.id) },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    (0, o.jsx)("section", {
                        className: iV.uW,
                        children: (0, o.jsxs)("div", {
                            className: iV.bd,
                            children: [
                                (0, o.jsx)(f.l, {
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
                                (0, o.jsx)(p.$, { variant: "primary", text: "Create", onClick: P }),
                            ],
                        }),
                    }),
                    _.length > 0 &&
                        (0, o.jsxs)("div", {
                            children: [
                                (0, o.jsx)(g.E, {
                                    style: { marginTop: "15px" },
                                    variant: "text-md/bold",
                                    children: "Active reverse trial",
                                }),
                                (0, o.jsx)("div", {
                                    children: _.map((e) =>
                                        (0, o.jsx)(iH, { entitlement: e, active: !0, onDelete: () => T(e.id) }, e.id),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        })
    );
}
var oU = a(872162),
    oG = a(26279),
    oF = a(628577);
let oB = {
        [oG.Re.UNSPECIFIED]: "Unspecified",
        [oG.Re.DRAFT]: "Draft",
        [oG.Re.SIGNED]: "Signed",
        [oG.Re.DISCARDED]: "Discarded",
        [oG.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
        [oG.Re.SIGNING_FAILED]: "Signing Failed",
    },
    o$ = { [oG.BM.UNSPECIFIED]: "Unspecified", [oG.BM.ONE_TIME]: "One Time", [oG.BM.SUBSCRIPTION]: "Subscription" };
function oV() {
    let [e, t] = d.useState(null),
        [a, n] = d.useState(!0),
        [l, i] = d.useState(null),
        s = d.useCallback(async () => {
            (n(!0), i(null));
            try {
                let e = await it.Bo.get({ url: `${em.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
                t(e.body ?? []);
            } catch (e) {
                i(e instanceof Error ? e.message : "Failed to fetch orders");
            } finally {
                n(!1);
            }
        }, []);
    d.useEffect(() => {
        s();
    }, [s]);
    let [r, c] = d.useState(!1),
        [u, m] = d.useState(null),
        [h, x] = d.useState(() => {
            let e = oa.Ay.getChannelId();
            return null != e ? e : "";
        }),
        j = d.useCallback(async () => {
            (c(!0), m(null));
            try {
                let e = h.trim(),
                    t = await it.Bo.post({
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
    return (0, o.jsx)(v.Ip, {
        className: tX.nd,
        children: (0, o.jsxs)("div", {
            className: iV.l$,
            children: [
                (0, o.jsxs)("div", {
                    className: iV.dL,
                    style: { marginBottom: "16px" },
                    children: [
                        (0, o.jsxs)(g.E, { variant: "text-lg/bold", children: ["Orders (last ", 5, ")"] }),
                        (0, o.jsx)(p.$, { variant: "secondary", size: "sm", text: "Refresh", onClick: s, loading: a }),
                    ],
                }),
                null != l && (0, o.jsx)(Q.w, { type: "critical", message: l, role: "alert" }),
                !a &&
                    null != e &&
                    0 === e.length &&
                    (0, o.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: "No orders found." }),
                null != e && e.map((e) => (0, o.jsx)(oW, { order: e }, e.id)),
                (0, o.jsxs)(tY.B, {
                    direction: "vertical",
                    gap: 8,
                    style: { marginTop: "16px" },
                    children: [
                        (0, o.jsx)(b.k, {
                            fullWidth: !0,
                            value: h,
                            onChange: x,
                            placeholder: "Channel ID (blank to skip the message)",
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Run Temporal Infra Proof of Concept",
                            onClick: j,
                            loading: r,
                        }),
                        null != u && (0, o.jsx)(g.E, { variant: "text-xs/normal", color: "text-muted", children: u }),
                    ],
                }),
            ],
        }),
    });
}
function oW(e) {
    let { order: t } = e,
        [a, n] = d.useState(!1),
        [l, i] = d.useState(!1),
        s = oB[t.status] ?? `Unknown (${t.status})`,
        r = [
            { id: "status", label: `Status: ${s}`, isDisabled: !1 },
            { id: "revision", label: `Revision: ${t.revision}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = d.useCallback(() => {
            (navigator.clipboard.writeText(t.id), i(!0), setTimeout(() => i(!1), 2e3));
        }, [t.id]);
    return (0, o.jsxs)("div", {
        className: iV.Nr,
        children: [
            (0, o.jsxs)(tY.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, o.jsx)(g.E, { variant: "text-md/semibold", children: t.id }),
                    (0, o.jsx)(p.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, o.jsx)(oU.C, { items: r, label: "Order information", layout: "inline" }),
            (0, o.jsxs)(tY.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, o.jsx)(g.E, { variant: "text-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, o.jsxs)(
                                  tY.B,
                                  {
                                      direction: "horizontal",
                                      gap: 12,
                                      children: [
                                          (0, o.jsxs)(g.E, {
                                              variant: "text-xs/normal",
                                              children: ["SKU: ", e.sku_id],
                                          }),
                                          (0, o.jsxs)(g.E, {
                                              variant: "text-xs/normal",
                                              children: ["Qty: ", e.quantity],
                                          }),
                                          (0, o.jsxs)(g.E, {
                                              variant: "text-xs/normal",
                                              children: [
                                                  "Type: ",
                                                  o$[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
                                              ],
                                          }),
                                          null != e.subscription_plan_id &&
                                              (0, o.jsxs)(g.E, {
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
                (0, o.jsxs)("div", {
                    className: oF.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, o.jsxs)(J.D, {
                            onClick: () => n((e) => !e),
                            className: oF.Eh,
                            children: [
                                (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, o.jsx)(iM.A, { direction: a ? iM.A.Directions.UP : iM.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, o.jsxs)("ul", {
                                className: oF.j3,
                                children: [
                                    (0, o.jsxs)("li", {
                                        children: [
                                            (0, o.jsx)(g.E, {
                                                variant: "text-xs/semibold",
                                                children: "payment_gateway",
                                            }),
                                            (0, o.jsx)(g.E, {
                                                variant: "text-xs/normal",
                                                children: String(t.billing_facet.payment_gateway),
                                            }),
                                        ],
                                    }),
                                    null != t.billing_facet.payment_source_id &&
                                        (0, o.jsxs)("li", {
                                            children: [
                                                (0, o.jsx)(g.E, {
                                                    variant: "text-xs/semibold",
                                                    children: "payment_source_id",
                                                }),
                                                (0, o.jsx)(g.E, {
                                                    variant: "text-xs/normal",
                                                    children: t.billing_facet.payment_source_id,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.currency &&
                                        (0, o.jsxs)("li", {
                                            children: [
                                                (0, o.jsx)(g.E, {
                                                    variant: "text-xs/semibold",
                                                    children: "selected currency",
                                                }),
                                                (0, o.jsx)(g.E, {
                                                    variant: "text-xs/normal",
                                                    children: t.billing_facet.currency,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.invoice_preview &&
                                        (0, o.jsxs)(o.Fragment, {
                                            children: [
                                                (0, o.jsxs)("li", {
                                                    children: [
                                                        (0, o.jsx)(g.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "currency",
                                                        }),
                                                        (0, o.jsx)(g.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.currency,
                                                        }),
                                                    ],
                                                }),
                                                (0, o.jsxs)("li", {
                                                    children: [
                                                        (0, o.jsx)(g.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "subtotal",
                                                        }),
                                                        (0, o.jsx)(g.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.subtotal,
                                                        }),
                                                    ],
                                                }),
                                                (0, o.jsxs)("li", {
                                                    children: [
                                                        (0, o.jsx)(g.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "tax",
                                                        }),
                                                        (0, o.jsx)(g.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.tax,
                                                        }),
                                                    ],
                                                }),
                                                (0, o.jsxs)("li", {
                                                    children: [
                                                        (0, o.jsx)(g.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "total",
                                                        }),
                                                        (0, o.jsx)(g.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.total,
                                                        }),
                                                    ],
                                                }),
                                                t.billing_facet.invoice_preview.line_items.length > 0 &&
                                                    (0, o.jsxs)("li", {
                                                        children: [
                                                            (0, o.jsx)(g.E, {
                                                                variant: "text-xs/semibold",
                                                                children: "invoice line items",
                                                            }),
                                                            (0, o.jsx)(tY.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, o.jsxs)(
                                                                                tY.B,
                                                                                {
                                                                                    direction: "horizontal",
                                                                                    gap: 12,
                                                                                    children: [
                                                                                        (0, o.jsxs)(g.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "ref: ",
                                                                                                e.ref_order_line_item_id,
                                                                                            ],
                                                                                        }),
                                                                                        (0, o.jsxs)(g.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "unit: ",
                                                                                                e.unit_price,
                                                                                            ],
                                                                                        }),
                                                                                        (0, o.jsxs)(g.E, {
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
var oH = a(935462),
    oz = a(103557),
    oK = a(93688),
    oY = a(717400),
    oq = a(676955),
    oJ = a(31300),
    oQ = a(500060),
    oX = a(391973),
    oZ = a(684013),
    o0 = a(765671),
    o1 = a(235986),
    o2 = a(742589),
    o3 = a(41984),
    o6 = a(181435),
    o5 = a(435736),
    o8 = a(661886),
    o4 = a(296027),
    o7 = a(515183),
    o9 = a(127242),
    de = a(869014),
    dt = a(528772),
    da = a(32584),
    dn = a(532624),
    dl = a(773371),
    di = a(927813),
    ds = a(996439),
    dr = a(350535),
    dd = a(9302),
    dc = a(644434),
    du = a(998798);
let dm = {
        [em.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: em.uss.CLICK_ZONE_DEBUG,
            id: (0, ew.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...da.A.getWidgetDefaultSettings(em.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [em.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: em.uss.PERFORMANCE_DEBUG,
            id: (0, ew.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...da.A.getWidgetDefaultSettings(em.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    dh = {};
function dx(e) {
    let { id: t } = e,
        [a, n] = d.useState(!1);
    return (
        d.useEffect(() => {
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
        (0, o.jsxs)(n$.$n, {
            look: n$.$n.Looks.LINK,
            color: n$.$n.Colors.LINK,
            size: n$.$n.Sizes.MIN,
            onClick: function () {
                (0, nQ.C)(t, () => n(!0));
            },
            className: du.DT,
            children: ["Game Id: ", t, " ", a ? n_.intl.string(n_.t.t5VZ88) : null],
        })
    );
}
let dp = d.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, c.bG)([C.Ay], () => C.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, c.bG)([N.A], () => N.A.getGameForPID(t.pid)),
            { data: l } = (0, a_.I)(n?.id),
            i = (0, c.bG)([C.Ay], () => (null == a ? null : C.Ay.getGameOverlayStatus(a)));
        return (0, o.jsxs)("div", {
            className: du.st,
            children: [
                (0, o.jsx)(g.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, o.jsx)(g.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, o.jsx)(g.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, o.jsxs)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.gameId &&
                    (0, o.jsx)(g.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, o.jsx)(dx, { id: t.gameId }),
                    }),
                (0, o.jsxs)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, o7.wR)(t.fullscreenType)],
                }),
                (0, o.jsxs)(g.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, o.jsxs)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, o.jsxs)("div", {
                    className: du.st,
                    children: [
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, o7.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != i &&
                    (0, o.jsxs)("div", {
                        className: du.st,
                        children: [
                            (0, o.jsxs)(g.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", i.source],
                            }),
                            (0, o.jsxs)(g.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", i.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, o.jsxs)(g.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", i.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, o.jsxs)(g.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, o7.gK)(i.overlayMethod)],
                            }),
                        ],
                    }),
                (0, o.jsxs)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, o.jsxs)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", l?.hook ? "Yes" : "No"],
                }),
                (0, o.jsxs)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", l?.overlay ? "Yes" : "No"],
                }),
                (0, o.jsxs)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", l?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, o.jsxs)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", l?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    dg = d.memo(function (e) {
        let { pid: t } = e,
            a = (0, c.cf)([dl.default], () => dl.default.getOverlayPIDStatuses()),
            n = (0, c.cf)([o4.default], () => o4.default.getTrackedGames()),
            l = (0, c.bG)([dl.default], () => dl.default.isInputLocked(t), [t]),
            i = (0, c.bG)([dl.default], () => dl.default.DEV_isInputLockedV3(t), [t]),
            s = (0, c.bG)([dl.default], () => dl.default.DEV_isInputLocked(t), [t]),
            r = (0, c.bG)([dl.default], () => dl.default.isReady(t), [t]);
        return (0, o.jsxs)("div", {
            className: du.st,
            children: [
                (0, o.jsx)(g.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, o.jsxs)(g.E, {
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
                (0, o.jsxs)(g.E, {
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
                (0, o.jsxs)(g.E, {
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
                (0, o.jsxs)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, o.jsxs)(g.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, o.jsxs)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", i],
                }),
                (0, o.jsxs)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", s],
                }),
                (0, o.jsxs)(g.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", r] }),
            ],
        });
    });
function dv(e) {
    var t;
    let a =
        ((t = Object.values((0, c.yK)([da.A], () => da.A.getWidgetsForLayout(dc.GJ)))), t.find((t) => t.type === e));
    return [
        a,
        function () {
            if (null != a) (0, oX.uv)(a.id);
            else {
                let t = dm[e];
                if (null == t) return;
                let a = t(dc.GJ);
                (0, oX.jn)(a);
            }
        },
    ];
}
function dj(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nX.i$)(nB()(e), "h:mm:ss.SSS");
}
let df = d.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, c.bG)(
            [o4.default],
            () => {
                if (null == t) return "Unknown";
                let e = o4.default.getTrackedGameByPid(t)?.gameName;
                return null != e ? ((dh[t] = e), e) : (dh[t] ?? "Unknown");
            },
            [t],
        );
    return (0, o.jsx)(g.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function db() {
    let e = (0, c.bG)([o9.A], () => o9.A.hasRenderDebugMode(o3.x7.TrackFocusPIDs)),
        t = (0, c.yK)([o4.default], () => o4.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, o.jsxs)("div", {
        className: du.st,
        children: [
            (0, o.jsxs)("div", {
                className: du.Iv,
                children: [
                    (0, o.jsx)(h.d, {
                        checked: e,
                        onChange: () =>
                            void oZ.A.setRenderDebugMode(
                                !o9.A.hasRenderDebugMode(o3.x7.TrackFocusPIDs),
                                o3.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, o.jsx)(J.D, {
                        className: du.LL,
                        onClick: () => oZ.A.clearTrackedPids(),
                        children: (0, o.jsx)(nz.TrashIcon, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, o.jsxs)(v.Ip, {
                className: q()(du.st, du.XG),
                children: [
                    0 === t.length &&
                        (0, o.jsx)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, o.jsx)(
                            d.Fragment,
                            {
                                children: (0, o.jsx)(ic.m, {
                                    position: "left",
                                    text: n === o3.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, o.jsx)("div", {
                                        children: (0, o.jsxs)(g.E, {
                                            variant: "text-sm/medium",
                                            color: n === o3.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, o.jsx)(df, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                dj(t),
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
let dy = d.memo(function (e) {
        let { pid: t } = e,
            a = (0, c.bG)(
                [o4.default, C.Ay],
                () => {
                    if (null == t) return null;
                    let e = o4.default.getTrackedGameByPid(t)?.fullscreenType;
                    if (null != e) return e;
                    let a = C.Ay.getGameOrTransformedSubgameForPID(t);
                    return a?.fullscreenType ?? l4.aI.UNKNOWN;
                },
                [t],
            );
        return (0, o.jsxs)(g.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, o7.wR)(a) : "Unknown"],
        });
    }),
    dE = d.memo(function () {
        let e = (0, c.cf)([o4.default], () => o4.default.getTrackedGames()),
            [t, a] = d.useState({}),
            n = d.useRef(null);
        return (
            d.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = C.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, o7.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +di.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, o.jsx)(ic.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, o.jsx)("div", {
                    children: (0, o.jsxs)(v.Ip, {
                        className: q()(du.st, du.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, o.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, o.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, o.jsx)(df, { tag: "div", pid: e.pid }),
                                            (0, o.jsx)(dy, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, o.jsx)(
                                                        g.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, o7.wR)(a)} @ ${dj(n)}`,
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
    dC = d.memo(function () {
        let e = (0, c.cf)([o4.default], () => o4.default.getTrackedGames()),
            t = (0, dd.getPID)(),
            a = (0, c.bG)([o4.default], () => o4.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, c.yK)([dt.A], () => [dt.A.enabled, dt.A.keepOpen]),
            i = (0, c.bG)([dl.default], () => dl.default.getFocusedPID()),
            s = (0, c.bG)([dl.default], () => dl.default.isFocusedPidOutOfProcess());
        return (0, o.jsxs)("div", {
            className: du.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, o.jsx)(dg, { pid: e.pid }, e.pid)),
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", i?.toString() ?? "null"],
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", s ? "Yes" : "No"],
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    dS = [
        {
            mode: o3.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: o3.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: o3.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: o3.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: o3.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: o3.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: o3.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    d_ = d.memo(function () {
        let [e, t] = dv(em.uss.CLICK_ZONE_DEBUG),
            [a, n] = dv(em.uss.PERFORMANCE_DEBUG),
            l = (0, c.bG)([o9.A], () => o9.A.getRenderDebugModes()),
            [i, s] = d.useState({});
        return (
            d.useEffect(() => {
                let e = setInterval(() => {
                    s({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, o.jsx)("div", {
                className: du.st,
                children: dS.map((i) => {
                    let s =
                        i.mode === o3.x7.OverlayRafManagerForceEnabled
                            ? `${i.label} (${de.A.getLastRAFCallbackReason()})`
                            : i.label;
                    function r() {
                        return i.mode === o3.x7.ClickZones
                            ? null != e
                            : i.mode === o3.x7.WidgetAreas
                              ? null != a
                              : l.has(i.mode);
                    }
                    return (0, o.jsx)(
                        d.Fragment,
                        {
                            children: (0, o.jsx)(h.d, {
                                checked: r(),
                                onChange: function () {
                                    var e;
                                    let a = r();
                                    (i.mode === o3.x7.ClickZones && t(),
                                        i.mode === o3.x7.WidgetAreas && n(),
                                        (e = i.mode),
                                        oZ.A.setRenderDebugMode(!a, e));
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
    dN = d.memo(function () {
        let e = (0, c.cf)([o4.default], () => o4.default.getTrackedGames()),
            t = (0, c.bG)([C.Ay], () => C.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, o.jsxs)(o.Fragment, {
            children: [
                t.length > 0 &&
                    (0, o.jsx)(ic.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, o.jsx)("div", {
                            children: (0, o.jsxs)("div", {
                                className: du.st,
                                children: [
                                    (0, o.jsx)(g.E, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, o.jsxs)(o.Fragment, {
                                            children: [
                                                (0, o.jsx)(
                                                    g.E,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, o.jsx)(dy, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, o.jsx)(ic.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, o.jsx)("div", {
                        children: (0, o.jsxs)("div", {
                            className: du.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, o.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, o.jsx)(dp, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    dA = d.memo(function () {
        let e = (0, c.bG)([o4.default], () => o4.default.getForcedRenderMode()),
            [t, a] = d.useState(e),
            n = [
                { label: o3.V6.UNSET, value: o3.V6.UNSET, id: o3.V6.UNSET },
                { label: o3.V6.IN_PROCESS_V2, value: o3.V6.IN_PROCESS_V2, id: o3.V6.IN_PROCESS_V2 },
                { label: o3.V6.OUT_OF_PROCESS_V3, value: o3.V6.OUT_OF_PROCESS_V3, id: o3.V6.OUT_OF_PROCESS_V3 },
                {
                    label: o3.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: o3.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: o3.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, o.jsx)(f.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: function (e) {
                (a(e), oZ.A.forceRenderMode(e));
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function dk(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = d.useState(null);
    function i() {
        a(null);
    }
    return (0, o.jsxs)(oH.EO, {
        size: oH.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, o.jsxs)(oH.rQ, {
                align: o1.A.Align.CENTER,
                justify: o1.A.Justify.BETWEEN,
                children: [
                    (0, o.jsx)(g.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, o.jsx)(oH.s_, { onClick: i }),
                ],
            }),
            (0, o.jsx)(oH.$m, {
                children: (0, o.jsx)("div", {
                    className: du.st,
                    children: (0, o.jsx)(oz.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, o.jsx)(oH.jl, {
                children: (0, o.jsxs)(nx.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(n);
                            },
                        }),
                        (0, o.jsx)(p.$, { variant: "secondary", text: "Clear", onClick: i }),
                    ],
                }),
            }),
        ],
    });
}
let dI = {
    native: { label: "Native", filter: (e) => e.type === o6.ON.NativeLegacy || e.type === o6.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === o6.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === o6.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === o6.ON.OOPModule || e.type === o6.ON.LegacyModule },
};
function dD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o6.QJ.Info;
    if (t === o6.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case o6.ON.NativeLegacy:
            return "var(--yellow-500)";
        case o6.ON.NativeOOP:
            return "var(--green-500)";
        case o6.ON.Flux:
            return "var(--brand-400)";
        case o6.ON.Renderer:
            return "var(--brand-500)";
        case o6.ON.LegacyModule:
            return "var(--yellow-300)";
        case o6.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let dT = [
    {
        key: "type",
        cellClassName: du.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = dR(t);
            return (0, o.jsx)("div", {
                className: du.g$,
                style: { color: dD(t, a) },
                children: (0, o.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "Name",
        cellClassName: du.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)(g.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case o6.QJ.Info:
                                    return "text-strong";
                                case o6.QJ.Warning:
                                    return "text-feedback-warning";
                                case o6.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, o.jsxs)(g.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "Timestamp",
        cellClassName: du.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nX.i$)(nB()(t), "h:mm:ss.SSS");
        },
    },
];
function dR(e) {
    switch (e) {
        case o6.ON.NativeLegacy:
            return oK.W;
        case o6.ON.NativeOOP:
            return oY.q;
        case o6.ON.Renderer:
        case o6.ON.Flux:
            return oq.v;
        case o6.ON.LegacyModule:
            return oJ.k;
        case o6.ON.OOPModule:
            return oQ.o;
        default:
            return oJ.k;
    }
}
function dO(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let dw = ["__webpack_require__", "fn"],
    dM = ["web.js", "web.js.map"],
    dP = [
        {
            id: "details",
            name: "Details",
            group: nh.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: i, nativeId: s, stack: r, data: d, timestamp: c, pid: u } = t,
                    m = nB()(c),
                    h = dR(l);
                return (0, o.jsxs)(v.Ar, {
                    className: du.bW,
                    children: [
                        (0, o.jsxs)(o2.A, {
                            className: q()(tX.jr, du.nZ),
                            children: [
                                (0, o.jsx)("div", {
                                    style: { color: dD(l, i) },
                                    className: du.nr,
                                    children: (0, o.jsx)(h, { color: "currentColor", size: "sm" }),
                                }),
                                (0, o.jsxs)(o2.A.Title, {
                                    wrapperClassName: du.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, o.jsx)(J.D, {
                                            tag: "span",
                                            className: du.KE,
                                            onClick: () => (0, nQ.C)(n),
                                            children: (0, o.jsx)(nV.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, o.jsx)(o2.A.Icon, {
                                    icon: nV.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nQ.C)(dO(t));
                                    },
                                }),
                                (0, o.jsx)(o2.A.Icon, { icon: nH.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, o.jsxs)(n9, {
                            className: du.ZK,
                            children: [
                                (0, o.jsx)(le, {
                                    name: "Timestamp",
                                    copyValue: m.toISOString(),
                                    children: (0, o.jsx)("time", {
                                        dateTime: m.toISOString(),
                                        title: (0, nX.i$)(m, "LLLL"),
                                        children: (0, nX.i$)(m, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, o.jsx)(le, {
                                    name: "Log Type",
                                    copyValue: i,
                                    children: (0, o.jsx)("code", { children: i }),
                                }),
                                (0, o.jsx)(le, {
                                    name: "PID",
                                    copyValue: u?.toString() ?? "null",
                                    children: (0, o.jsx)("code", { children: u?.toString() ?? "null" }),
                                }),
                                (0, o.jsx)(le, {
                                    name: "Native ID",
                                    copyValue: s?.toString() ?? "null",
                                    children: (0, o.jsx)("code", { children: s?.toString() ?? "null" }),
                                }),
                                (0, o.jsx)(le, {
                                    name: "Data",
                                    copyValue: dO(d),
                                    children: (0, o.jsx)("code", { children: dO(d) }),
                                }),
                                null != r &&
                                    (0, o.jsx)(le, {
                                        name: "Stack Trace",
                                        copyValue: r,
                                        children: (0, o.jsx)("code", {
                                            children: r.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, i] = a,
                                                        s = n.split(/[\\/]/).pop();
                                                    return dw.includes(e.trim())
                                                        ? null
                                                        : (0, o.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, o.jsx)("span", {
                                                                          className: du.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !dM.includes(s ?? "") &&
                                                                          (0, o.jsxs)(o.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, o.jsxs)("span", {
                                                                                      className: du.lz,
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
                                                return (0, o.jsx)("div", { children: e }, t);
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
    dL = {
        searchType: nq.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                i = [t, a, JSON.stringify(l)];
            return (null != n && i.push(n), i);
        },
        throttleMs: 100,
    };
function dU() {
    let { ref: e, height: t } = (0, o0.Ay)(),
        a = (0, c.bG)([o9.A], () => o9.A.isModuleLoggingEnabled()),
        [n, l] = d.useState(a),
        [i, s] = d.useState(!1),
        [r, u] = d.useState(null),
        [m, h] = d.useState(Object.keys(dI)),
        [x, p] = (0, c.bG)([o9.A], () => o9.A.getOverlayLoggingBreadcrumbs(), [], ds.D),
        [v, j] = d.useState(null),
        f = v ?? x,
        b = null != v ? -1 : p;
    d.useEffect(() => {
        0 !== b &&
            (i
                ? u(f.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : u(null));
    }, [i, f, b]);
    let [y, E] = d.useState(""),
        C = d.useMemo(
            () =>
                0 === b
                    ? []
                    : f.filter((e) => {
                          if (i && null != r && e.timestamp < r) return !1;
                          for (let t of m) {
                              let { filter: a } = dI[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [f, m, r, i, b],
        ),
        [S, _] = d.useState(C),
        [N, A] = d.useState(null),
        k = d.useMemo(() => f.find((e) => e.key === N), [f, N]),
        I = d.useCallback((e) => {
            _(e);
        }, []),
        { renderSelectedTab: D } = (0, nm.A)({ tabs: dP }, []);
    (0, nJ.RT)(y, C, I, dL, [f]);
    let T = d.useCallback((e) => {
            (l(e), oZ.A.setModuleLogging(e));
        }, []),
        [R, O] = d.useState(!1),
        w = d.useRef(null),
        M = d.useCallback(() => {
            ((0, nQ.C)(JSON.stringify(C)), O(!0));
        }, [C]);
    d.useEffect(() => {
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
    let P = d.useCallback((e) => {
            j(null != e ? JSON.parse(e) : null);
        }, []),
        L = d.useCallback(
            (e) => {
                if (e) return j(null);
                (0, eY.openModal)(
                    (e) =>
                        (0, o.jsx)(dk, {
                            modalProps: e,
                            onClose: (t) => {
                                (P(t), e.onClose());
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    eJ.SY,
                );
            },
            [P],
        );
    return (0, o.jsxs)("div", {
        ref: e,
        className: du.rh,
        children: [
            (0, o.jsxs)("div", {
                className: du.st,
                children: [
                    (0, o.jsxs)("div", {
                        className: q()(du._V, du.XQ),
                        children: [
                            (0, o.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: du.iR,
                                children: (0, o.jsx)(oh.S, { label: "Poll Native", checked: n, onChange: (e) => T(e) }),
                            }),
                            (0, o.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: du.iR,
                                children: (0, o.jsx)(oh.S, {
                                    label: "Only Active Games",
                                    checked: i,
                                    onChange: (e) => s(e),
                                }),
                            }),
                            (0, o.jsxs)(J.D, {
                                className: du.ny,
                                onClick: M,
                                children: [
                                    (0, o.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: R ? "Copied" : "Copy All",
                                    }),
                                    R
                                        ? (0, o.jsx)(oy.CheckmarkLargeIcon, {
                                              size: "sm",
                                              color: eq.A.unsafe_rawColors.GREEN_330.css,
                                          })
                                        : (0, o.jsx)(nV.CopyIcon, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, o.jsx)(J.D, {
                                className: du.ny,
                                onClick: () => L(null != v),
                                children: (0, o.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != v ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, o.jsx)("div", {
                        className: q()(du._V, du.XQ),
                        children: Object.entries(dI).map((e) => {
                            let [t, a] = e;
                            return (0, o.jsx)(
                                J.D,
                                {
                                    className: q()(du.pb, m.includes(t) && du.bx),
                                    onClick: () => {
                                        h((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, o.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        color: "currentColor",
                                        children: a.label,
                                    }),
                                },
                                t,
                            );
                        }),
                    }),
                    (0, o.jsx)("div", {
                        className: du._V,
                        children: (0, o.jsx)(nK.I, {
                            query: y,
                            onChange: E,
                            onClear: () => E(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, o.jsx)("div", {
                className: q()(du.st, du.CZ),
                children: (0, o.jsx)(tZ, {
                    columns: dT,
                    data: S,
                    selectedRowKey: N ?? void 0,
                    onClickRow: (e) => A(e.key),
                }),
            }),
            null != k &&
                (0, o.jsx)(nu, {
                    className: q()(du.st, du.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: D({ breadcrumb: k, onClose: () => A(null) }),
                }),
        ],
    });
}
let dG = d.memo(function () {
        let e = (0, c.bG)([o8.A], () => o8.A.getPopoutInitializationStages());
        return (0, o.jsxs)("div", {
            className: du.st,
            children: [
                (0, o.jsx)("div", {
                    className: du.Iv,
                    children: (0, o.jsx)(g.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, o.jsx)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, o.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    dF = d.memo(function () {
        let e = (0, c.bG)([o9.A], () => o9.A.isStateDebuggingEnabled()),
            t = (0, c.bG)([o9.A], () => o9.A.getDebuggingState());
        return (
            d.useEffect(
                () => (
                    oZ.A.setStateDebugging(!0),
                    () => {
                        oZ.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, o.jsxs)("div", {
                className: du.st,
                children: [
                    (0, o.jsx)("div", {
                        className: du.Iv,
                        children: (0, o.jsx)(h.d, {
                            checked: e,
                            onChange: () => oZ.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, o.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function dB() {
    return (0, o.jsx)(v.Ar, {
        children: (0, o.jsxs)("div", {
            className: q()(tX.nd, du.rf),
            children: [
                (0, o.jsx)(d_, {}),
                (0, o.jsx)(dA, {}),
                (0, o.jsx)(dN, {}),
                (0, o.jsx)(dC, {}),
                (0, o.jsx)(db, {}),
                (0, o.jsx)(dE, {}),
                (0, o.jsx)(dG, {}),
                (0, o.jsx)(dF, {}),
            ],
        }),
    });
}
function d$(e) {
    switch (e) {
        case "Disabled":
            return;
        case "False":
            return !1;
        case "True":
            return !0;
    }
}
function dV(e) {
    return null == e ? "Disabled" : e ? "True" : "False";
}
let dW = d.memo(function () {
    let e = (0, o5.wW)(),
        t = (0, c.bG)([dn.Ay], () => dn.Ay.getOverlayKeybind());
    return (0, o.jsxs)("div", {
        className: du.st,
        children: [
            (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
            (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Experiment State" }),
            (0, o.jsx)(g.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: (0, o.jsx)("pre", {
                    children: JSON.stringify({ ...e, overlayKeybind: (0, dr.dI)(t.shortcut) }, void 0, 2),
                }),
            }),
            (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Overrides" }),
            (0, o.jsx)(f.l, {
                label: "Overlay User Status",
                description: "Override whether the current user was a new or existing user",
                value: dV(e.overrideIsNewOverlayUser),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Existing user", value: "False", id: "False" },
                    { label: "New user", value: "True", id: "True" },
                ],
                onSelectionChange: function (e) {
                    (0, o5.sw)(d$(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, o.jsx)(f.l, {
                label: "Override Previous Keybind Status",
                description: "Override whether the user's pre-experiment keybind was the default keybind",
                value: dV(e.overrideIsUsingDefaultOverlayKeybind),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Using default keybind", value: "True", id: "True" },
                    { label: "Not using default keybind", value: "False", id: "False" },
                ],
                onSelectionChange: function (e) {
                    (0, o5.C3)(d$(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Actions" }),
            (0, o.jsx)(p.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, o5.xc)() }),
            (0, o.jsx)(p.$, { size: "sm", text: "Reset isUsingDefaultOverlayKeybind", onClick: () => (0, o5.tM)() }),
        ],
    });
});
function dH() {
    return (0, o.jsx)(v.Ar, {
        children: (0, o.jsx)("div", { className: q()(tX.nd, du.rf), children: (0, o.jsx)(dW, {}) }),
    });
}
function dz() {
    let [e, t] = d.useState("state");
    return (
        d.useEffect(
            () => (
                tO.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    tO.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, o.jsxs)("div", {
            className: q()(tX.nd, du.nd),
            children: [
                (0, o.jsxs)("div", {
                    className: du._V,
                    children: [
                        (0, o.jsx)(J.D, {
                            className: q()(du.k0, "state" === e && du.a),
                            onClick: () => t("state"),
                            children: (0, o.jsx)(g.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, o.jsx)(J.D, {
                            className: q()(du.k0, "logging" === e && du.a),
                            onClick: () => t("logging"),
                            children: (0, o.jsx)(g.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, o.jsx)(J.D, {
                            className: q()(du.k0, "experiments" === e && du.a),
                            onClick: () => t("experiments"),
                            children: (0, o.jsx)(g.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, o.jsx)(dB, {}),
                "logging" === e && (0, o.jsx)(dU, {}),
                "experiments" === e && (0, o.jsx)(dH, {}),
            ],
        })
    );
}
var dK = a(25409);
let dY = { xbox_game_pass: "Xbox Game Pass" };
function dq(e) {
    return `/debug/partner-subs/${e}`;
}
async function dJ() {
    let { body: e } = await it.Bo.get({ url: "/debug/partner-subs", rejectWithError: !0 });
    return e;
}
async function dQ(e, t) {
    await it.Bo.post({ url: dq(e), body: t, rejectWithError: !0 });
}
async function dX(e, t) {
    await it.Bo.del({ url: dq(e), body: t, rejectWithError: !0 });
}
function dZ(e) {
    let { active: t } = e;
    return (0, o.jsx)("span", { className: `${dK.Od} ${t ? dK.xk : dK.kS}`, children: t ? "Active" : "Inactive" });
}
function d0(e) {
    let { partner: t, connectedAccount: a, onChanged: n } = e,
        [l, i] = d.useState(!1),
        s = { external_account_id: a.external_account_id },
        r = Object.keys(a.metadata).length > 0;
    async function c(e) {
        i(!0);
        try {
            await e();
        } finally {
            (await n(), i(!1));
        }
    }
    return (0, o.jsxs)(tY.B, {
        gap: 8,
        className: dK.nM,
        children: [
            (0, o.jsxs)(tY.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                children: [
                    (0, o.jsx)("div", { className: dK.un, children: a.external_account_id }),
                    (0, o.jsx)(dZ, { active: a.is_active }),
                    (0, o.jsxs)(tY.B, {
                        direction: "horizontal",
                        gap: 8,
                        fullWidth: !1,
                        className: dK.cm,
                        children: [
                            (0, o.jsx)(h.d, {
                                label: "",
                                checked: a.is_active,
                                onChange: (e) => c(() => dQ(t, { ...s, is_active: e })),
                                disabled: l,
                            }),
                            (0, o.jsx)(p.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Unlink",
                                onClick: () => c(() => dX(t, s)),
                                disabled: l,
                            }),
                        ],
                    }),
                ],
            }),
            r && (0, o.jsx)("div", { className: dK.en, children: JSON.stringify(a.metadata) }),
        ],
    });
}
function d1(e) {
    var t;
    let { listing: a, onChanged: n } = e,
        [l, i] = d.useState(""),
        [s, r] = d.useState(!0),
        [c, u] = d.useState(!1);
    async function m() {
        u(!0);
        try {
            let e = { is_active: s },
                t = l.trim();
            ("" !== t && (e.external_account_id = t), await dQ(a.partner, e), i(""));
        } finally {
            (await n(), u(!1));
        }
    }
    return (0, o.jsxs)(tY.B, {
        gap: 12,
        className: dK.ns,
        children: [
            (0, o.jsxs)("div", {
                className: dK.CM,
                children: [
                    "Leave the id blank for a per-Discord-user default. Set the same id on multiple Discord accounts to test cross-account dedup of the ",
                    dY[(t = a.partner)] ?? t,
                    " membership.",
                ],
            }),
            (0, o.jsx)(b.k, {
                label: "External account id",
                placeholder: a.default_external_account_id,
                value: l,
                onChange: i,
            }),
            (0, o.jsx)(h.d, { label: "Active on link", checked: s, onChange: r }),
            (0, o.jsx)(tY.B, {
                direction: "horizontal",
                justify: "start",
                children: (0, o.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    text: "Link account",
                    onClick: m,
                    disabled: c,
                }),
            }),
        ],
    });
}
function d2(e) {
    var t;
    let { listing: a, onChanged: n } = e;
    return (0, o.jsxs)(tY.B, {
        gap: 8,
        className: dK.Oy,
        children: [
            (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: dY[(t = a.partner)] ?? t }),
            (0, o.jsxs)(g.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: [
                    "Backed by the ",
                    (0, o.jsx)("code", { children: a.connection_type }),
                    " connected account.",
                ],
            }),
            (0, o.jsx)("div", { className: dK.U, children: "Linked accounts" }),
            0 === a.connected_accounts.length
                ? (0, o.jsx)("div", { className: dK.Ie, children: "None linked yet." })
                : a.connected_accounts.map((e) =>
                      (0, o.jsx)(d0, { partner: a.partner, connectedAccount: e, onChanged: n }, e.connection_id),
                  ),
            (0, o.jsx)("div", { className: dK.U, children: "Link a new account" }),
            (0, o.jsx)(d1, { listing: a, onChanged: n }),
        ],
    });
}
function d3() {
    let [e, t] = d.useState([]),
        [a, n] = d.useState(null),
        l = d.useCallback(async () => {
            try {
                let e = await dJ();
                (t(e), n(null));
            } catch (e) {
                n(e instanceof Error ? e.message : String(e));
            }
        }, []);
    return (
        (0, tr.Ay)(() => {
            l();
        }),
        (0, o.jsxs)(v.Ip, {
            className: q()(tX.nd, dK.kL),
            children: [
                (0, o.jsx)(X.D, { variant: "heading-lg/semibold", className: tX.wx, children: "Partner Perks" }),
                (0, o.jsxs)(tY.B, {
                    gap: 16,
                    children: [
                        null != a && (0, o.jsx)(g.E, { variant: "text-sm/normal", className: dK.kc, children: a }),
                        e.map((e) => (0, o.jsx)(d2, { listing: e, onChanged: l }, e.partner)),
                    ],
                }),
            ],
        })
    );
}
var d6 = a(488428),
    d5 = a(73825),
    d8 = a(277984),
    d4 = a(589078),
    d7 = a(944304),
    d9 = a(300233),
    ce = a(599941),
    ct = a(162093),
    ca = a(4630),
    cn = a(44120),
    cl = a(75678),
    ci = a(216678),
    cs = a(194509),
    cr = a(478996),
    co = a(37402),
    cd = a(397093);
function cc(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, ce.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, o.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, o.jsx)(ct.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let cu = function () {
    let [e, t] = d.useState(tM.pe.TIER_2),
        [a, n] = d.useState(null),
        l = (0, c.yK)([nE.A], () => nE.A.getGuildsArray()),
        [i] = (0, c.yK)([op.A], () => [op.A.getPremiumSubscription()]),
        s = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [r, u] = d.useState(s.length > 0 ? s[0].value : null),
        [h, x] = d.useState(""),
        [j, E] = d.useState({ plan_id: tM.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        C = "true" !== j.gift && null != i,
        [S, _] = d.useState(s.length > 0 ? s[0].value : null),
        { analyticsLocations: N } = (0, np.Ay)(tk.A.PAYMENT_FLOW_TEST_PAGE),
        [A, k] = d.useState(""),
        [I, D] = d.useState(em.dJq),
        { balance: T, isFetching: R, error: O } = (0, cr.W0)(),
        { isSubmitting: w, responseMessage: M, redeemVirtualCurrency: P } = (0, cr.Qr)(),
        [L, U] = d.useState(em.dJq),
        [G, F] = d.useState(""),
        [B, $] = d.useState(em.dJq),
        [V, W] = d.useState(em.dJq);
    return (0, o.jsx)(np.f5, {
        value: N,
        children: (0, o.jsx)(v.Ip, {
            className: cd.XG,
            children: (0, o.jsxs)(tY.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, o.jsxs)(tY.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, o.jsx)(f.l, {
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
                            (0, o.jsx)(cs.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: n$.XD.PRIMARY,
                                look: n$.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsxs)(tY.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, o.jsx)(f.l, {
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
                            (0, o.jsx)(p.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, cl.A)({ subscriptionTier: a, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsxs)(tY.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, o.jsx)(f.l, {
                                label: "Boost",
                                value: r,
                                options: s,
                                onSelectionChange: (e) => u(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != r
                                ? (0, o.jsx)(d7.A, { guild: r, analyticsLocation: {} })
                                : (0, o.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsxs)(tY.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, o.jsx)(sK.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, o.jsxs)(tY.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, o.jsx)(b.k, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: h,
                                        onChange: (e) => x(e),
                                    }),
                                    (0, o.jsx)(ic.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: h.length < 1,
                                        children: (0, o.jsx)(p.$, {
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
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsxs)(m.n, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, o.jsx)(f.l, {
                                label: "Plan",
                                value: j.plan_id,
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
                            (0, o.jsx)(f.l, {
                                label: "Type",
                                value: j.gift,
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
                    (0, o.jsx)(ic.m, {
                        text: "Already subscribed",
                        shouldShow: C,
                        children: (0, o.jsx)(p.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: C,
                            onClick: () => {
                                window.open(em.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + d6.stringify({ ...j }));
                            },
                        }),
                    }),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsxs)(m.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, o.jsxs)(tY.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, o.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    R
                                        ? (0, o.jsx)("div", {
                                              className: cd.wG,
                                              children: (0, o.jsx)(td.y, { type: td.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, o.jsxs)("div", {
                                              className: cd.dB,
                                              children: [
                                                  null !== O &&
                                                      (0, o.jsxs)(g.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              O.message,
                                                          ],
                                                      }),
                                                  (0, o.jsx)(co.Gy, {
                                                      balance: T ?? 0,
                                                      balanceWidgetMode: co.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, o.jsx)(b.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: L,
                                onChange: (e) => U(e),
                            }),
                            (0, o.jsx)(p.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: w,
                                onClick: () => P(L, (0, ew.A)()),
                            }),
                            null != M && (0, o.jsx)(g.E, { variant: "text-sm/normal", children: M }),
                        ],
                    }),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsxs)(m.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, o.jsx)(f.l, {
                                label: "Premium Server Subscription For",
                                value: S,
                                options: s,
                                onSelectionChange: (e) => _(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, o.jsx)(d9.H, {
                                guildId: S?.id,
                                children: (0, o.jsx)(cc, { selectedGuildForGuildSub: S }),
                            }),
                        ],
                    }),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsxs)(tY.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, o.jsxs)(m.n, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, o.jsx)(b.k, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: A,
                                        onChange: k,
                                    }),
                                    (0, o.jsx)(b.k, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: I,
                                        onChange: (e) => D(e),
                                    }),
                                ],
                            }),
                            (0, o.jsx)(p.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, ca.openIAPPurchaseModal)({
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
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsx)(tY.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, o.jsx)(m.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, o.jsxs)(tY.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, o.jsx)(b.k, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: G,
                                        onChange: F,
                                    }),
                                    (0, o.jsx)(b.k, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: B,
                                        onChange: (e) => $(e),
                                    }),
                                    (0, o.jsx)(p.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, ci.q)({
                                                applicationId: G,
                                                skuId: B,
                                                analyticsLocations: N,
                                                checkoutFlow: d4.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsxs)(tY.B, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, o.jsx)(b.k, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: V,
                                onChange: (e) => W(e),
                            }),
                            (0, o.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, cn.A)({ skuId: V, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsx)(m.n, {
                        label: "Helpers",
                        children: (0, o.jsxs)(tY.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, o.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, d5.YG)(),
                                }),
                                (0, o.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, d8.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, o.jsx)(y.c, {}),
                    (0, o.jsx)(m.n, {
                        label: "Dismissible Content Framework",
                        children: (0, o.jsx)(p.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, lP.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var cm = a(219887),
    ch = a(459357),
    cx = a(650314),
    cp = a(500380),
    cg = a(102609),
    cv = a(710195),
    cj = a(211287),
    cf = a(295405),
    cb = a(548185);
let cy = [
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
    cE = {
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
    cC = [
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
    cS = {
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
    c_ = [
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
    cN = {
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
function cA() {
    let [e, t] = d.useState("US"),
        [a, n] = d.useState(null),
        [l, i] = d.useState(null),
        [s, r] = d.useState(null),
        [c, u] = d.useState(null),
        [m, h] = d.useState("pm_card_us"),
        [x, j] = d.useState(!1),
        b = Object.values((0, tA.bG)([cf.A], () => cf.A.paymentSources)),
        y = cE[e];
    async function E() {
        let t = m;
        ("" === t && (t = "pm_card_us"),
            await it.Bo.post({
                url: "/debug/payment-source",
                body: { token: t, address: "US" === e ? l : "CA" === e ? c : null },
                rejectWithError: !1,
            }),
            await (0, d8.$o)());
    }
    async function C() {
        (await it.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, d8.$o)());
    }
    async function S() {
        (await it.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload());
    }
    return (
        d.useEffect(() => {
            (0, d8.$o)();
        }, []),
        (0, o.jsx)(v.Ip, {
            className: tX.nd,
            children: (0, o.jsxs)("div", {
                className: iV.l$,
                children: [
                    (0, o.jsxs)(g.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, o.jsxs)("div", {
                        className: iV.Uo,
                        children: [
                            (0, o.jsx)(aE.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: cy
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, o.jsx)("img", {
                                                alt: "",
                                                className: cb.bI,
                                                src: (0, cp.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: function (e) {
                                    (t(e), h(cE[e][0].value), j(1 === cE[e].length));
                                },
                            }),
                            "US" === e &&
                                (0, o.jsx)(f.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: cC.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (n(e), i(cS[e] ?? null));
                                    },
                                }),
                            "CA" === e &&
                                (0, o.jsx)(f.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: s,
                                    options: c_.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (r(e), u(cN[e] ?? null));
                                    },
                                }),
                            (0, o.jsx)(f.l, {
                                selectionMode: "single",
                                label: "Card Token",
                                hideLabel: !0,
                                value: m,
                                options: y.map((e) => {
                                    let { value: t, label: a } = e;
                                    return { id: t, value: t, label: a };
                                }),
                                onSelectionChange: h,
                                disabled: x,
                            }),
                            (0, o.jsx)(p.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Create Stripe Credit Card",
                                onClick: E,
                            }),
                            b.length > 0 &&
                                (0, o.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Delete All Payment Sources",
                                    onClick: C,
                                }),
                            (0, o.jsx)(p.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: S,
                            }),
                        ],
                    }),
                    (0, o.jsx)(g.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, o.jsx)(cP, {}),
                    (0, o.jsx)(g.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, o.jsx)(cO, {}),
                    (0, o.jsx)(g.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    b.map((e) => (0, o.jsx)(cL, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let ck = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    cI = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    cD = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ],
    cT = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Express checkout disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Express checkout enabled: Review Footer" },
        { id: "2", value: "2", label: "Treatment (2) \u2014 Express checkout enabled: Payment Select" },
    ];
function cR(e) {
    let { experimentName: t, options: a = ck } = e,
        n = (0, tA.bG)([cv.A, n0.default], () => {
            let e = n0.default.getId(),
                a = cv.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = d.useCallback(
            (e) => {
                (0, cg.t$)(cg.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, o.jsx)(f.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function cO() {
    return (0, o.jsxs)(tY.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, o.jsx)(cR, { experimentName: ch.A.definition.name, options: cI }),
            (0, o.jsx)(cR, { experimentName: cj.A.definition.name, options: cD }),
            (0, o.jsx)(cR, { experimentName: cx.I.definition.name, options: cT }),
        ],
    });
}
let cw = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    cM = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function cP() {
    let [e, t] = d.useState("US"),
        [a, n] = d.useState("500"),
        [l, i] = d.useState(null),
        [s, r] = d.useState(!1),
        [c, u] = d.useState(!1),
        [m, h] = d.useState(null),
        x = parseInt(a, 10),
        g = !isNaN(x) && x >= 500 && x <= 5e3;
    async function v() {
        if (g) {
            (r(!0), h(null), i(null), u(!1));
            try {
                let t = await it.Bo.post({
                    url: "/billing/gift-card/create-on-demand-pin",
                    body: { country: e, currency: cM[e], amount: x },
                    rejectWithError: !0,
                });
                i(t.body.pin);
            } catch (e) {
                h(e instanceof Error ? e.message : "Failed to generate PIN");
            } finally {
                r(!1);
            }
        }
    }
    return (0, o.jsxs)(tY.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, o.jsxs)(tY.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, o.jsx)(f.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: cw,
                        onSelectionChange: t,
                    }),
                    (0, o.jsx)(b.k, {
                        label: "Amount (500\u20135000)",
                        type: "number",
                        value: a,
                        onChange: n,
                        min: 500,
                        max: 5e3,
                    }),
                    (0, o.jsx)(p.$, {
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
                (0, o.jsxs)(tY.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, o.jsx)(b.k, { label: "Generated PIN", value: l, onChange: () => {}, readOnly: !0 }),
                        (0, o.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: c ? "Copied!" : "Copy",
                            onClick: () => {
                                (navigator.clipboard.writeText(l), u(!0), setTimeout(() => u(!1), 2e3));
                            },
                        }),
                    ],
                }),
            null != m && (0, o.jsx)(Q.w, { type: "critical", message: m, role: "alert" }),
        ],
    });
}
function cL(e) {
    let { paymentSource: t } = e;
    async function a() {
        (await it.Bo.patch({ url: em.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
            await (0, d8.$o)());
    }
    return (0, o.jsxs)("div", {
        className: iV.bd,
        children: [
            (0, o.jsx)(cm.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, o.jsx)("img", { alt: t.country, className: cb.bI, src: (0, cp.t)(t.country) }),
            t.isDefault
                ? (0, o.jsx)(g.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, o.jsx)(p.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var cU = a(706712),
    cG = a(441574),
    cF = a(501419),
    cB = a(349871),
    c$ = a(55373);
function cV() {
    return (0, o.jsxs)(v.Ip, { className: c$.kL, children: [(0, o.jsx)(cW, {}), (0, o.jsx)(cz, {})] });
}
function cW() {
    let e = (0, c.bG)([eo.default], () => eo.default.getCurrentUser()?.perks ?? null),
        t = d.useMemo(
            () =>
                null == e
                    ? []
                    : Object.values(cG.bb)
                          .filter((e) => "number" == typeof e && e !== cG.bb.UNSPECIFIED)
                          .filter((t) => (0, cB.Nh)(e, t))
                          .map((t) => ({
                              id: t,
                              name: cG.bb[t],
                              sources: (0, cB.kQ)(e, t)?.map((e) => cG.g$[e]) ?? [],
                          })),
            [e],
        );
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(X.D, { className: c$.wx, variant: "heading-lg/semibold", children: "Active Perks" }),
            (0, o.jsx)(cH, { perks: e, activePerks: t }),
            (0, o.jsx)(X.D, { className: c$.m_, variant: "heading-md/semibold", children: "Debug" }),
            (0, o.jsxs)("p", {
                children: [
                    (0, o.jsx)("strong", { children: "Rules version:" }),
                    " ",
                    null != e ? e.rulesVersion : "n/a",
                ],
            }),
            (0, o.jsxs)("p", {
                children: [
                    (0, o.jsx)("strong", { children: "Active perks bitmask:" }),
                    " ",
                    (0, o.jsx)("code", { children: null != e ? JSON.stringify(e.activePerksBitmask) : "n/a" }),
                ],
            }),
        ],
    });
}
function cH(e) {
    let { perks: t, activePerks: a } = e;
    return null == t
        ? (0, o.jsx)("p", { className: c$.Qb, children: "No perks data available on the current user." })
        : 0 === a.length
          ? (0, o.jsx)("p", { className: c$.Qb, children: "No active perks." })
          : (0, o.jsxs)("table", {
                className: c$.Q,
                children: [
                    (0, o.jsx)("thead", {
                        children: (0, o.jsxs)("tr", {
                            children: [
                                (0, o.jsx)("th", { className: c$.Ts, children: "Perk" }),
                                (0, o.jsx)("th", { className: c$.Ts, children: "Sources" }),
                            ],
                        }),
                    }),
                    (0, o.jsx)("tbody", {
                        children: a.map((e) =>
                            (0, o.jsxs)(
                                "tr",
                                {
                                    children: [
                                        (0, o.jsxs)("td", {
                                            className: c$.iH,
                                            children: [(0, o.jsx)("code", { children: e.name }), " (", e.id, ")"],
                                        }),
                                        (0, o.jsx)("td", {
                                            className: c$.iH,
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
function cz() {
    let e = d.useCallback(() => {
            (0, aw._N)(aO.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, cF.FZ)(aO.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(X.D, { className: c$.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, o.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, o.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, o.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, o.jsx)("div", {
                className: c$.PW,
                children: (0, o.jsx)(p.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var cK = a(136722),
    cY = a(576705),
    cq = a(558393),
    cJ = a(719366),
    cQ = a(643566);
function cX(e) {
    let { title: t, can: a } = e,
        n = a ? oy.CheckmarkLargeIcon : ea.P,
        l = (0, o.jsx)("div", {
            className: q()(cQ.v_, a ? cQ.uU : cQ.Ss),
            children: (0, o.jsx)(n, { className: cQ.Kk }),
        });
    return (0, o.jsxs)("div", {
        className: cQ.z8,
        children: [
            l,
            (0, o.jsx)("div", {
                className: cQ.rv,
                children: (0, o.jsx)(g.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function cZ() {
    let e = (0, c.bG)([oa.Ay], () => oa.Ay.getChannelId()),
        t = (0, c.bG)([nC.A], () => nC.A.getGuildId()),
        a = (0, c.bG)([aH.A], () => aH.A.getChannel(e)),
        n = (0, c.bG)([nE.A], () => nE.A.getGuild(t)),
        l = (0, c.bG)([cY.A], () => cY.A.computePermissions(a)),
        i = (0, c.bG)([cY.A], () => cY.A.computePermissions(n)),
        s = (0, aW.Ay)(a, !0),
        r = null != a ? (0, cJ.mW)(a, !1) : null,
        d = null != n ? cq.A.getGuildPermissionSpecMap(n) : null,
        u = Object.values(r ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cK.zy(l, a);
            return (0, o.jsx)(cX, { title: t, can: n }, t);
        }),
        m = Object.values(d ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cK.zy(i, a);
            return (0, o.jsx)(cX, { title: t, can: n }, t);
        });
    return (0, o.jsx)("div", {
        className: q()(tX.nd, cQ.nd),
        children: (0, o.jsxs)("div", {
            className: cQ.l$,
            children: [
                (0, o.jsxs)("section", {
                    className: cQ.uW,
                    children: [
                        (0, o.jsx)(X.D, {
                            variant: "heading-md/semibold",
                            children: null != s ? `Permissions in ${s}` : "No channel selected",
                        }),
                        u,
                    ],
                }),
                (0, o.jsxs)("section", {
                    className: cQ.uW,
                    children: [
                        (0, o.jsx)(X.D, {
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
var c0 = a(873298),
    c1 = a(775602),
    c2 = a(363195),
    c3 = a(885386),
    c6 = a(631670),
    c5 = a(817281),
    c8 = a(955572),
    c4 = a(56348),
    c7 = a(385803),
    c9 = a(381941);
let ue = [em.NJ8.ASH, em.NJ8.LIGHT, em.NJ8.DARK, em.NJ8.ONYX],
    ut = [c0.NS.COMPACT, c0.NS.COZY, c0.NS.DEFAULT];
function ua(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function un() {
    let e,
        t =
            ((e = eo.default.getCurrentUser()),
            oA.Ay.canUseClientThemes(e) ? Object.keys(c7.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = ua(a);
            if (null != n) {
                let t = c7.ag[n];
                e = t?.theme ?? em.NJ8.DARK;
            } else e = ua([em.NJ8.ASH, em.NJ8.DARK, em.NJ8.ONYX]);
            await c5.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                aw.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = ua(ue);
            await c5.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                aw.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function ul() {
    let e = tD.A.purchases,
        t = (0, eL.x9)(e),
        a = (0, eL.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            (n && (e.avatarDecoration = ua([...t, null])), l && (e.nameplate = ua([...a, null])), (0, tp.p)(e));
            let i = tg.A.getPendingChanges(),
                s = (0, c4.Sk)(i);
            await (0, c6._L)(s).finally(c6.pZ);
        } catch (e) {}
}
function ui() {
    try {
        let e = ua(em.hH7.FONT_SIZES);
        (0, c8.XS)(e);
        let t = ua(c9.qh);
        (0, c8.AC)(t);
        let a = ua(ut);
        c3.Xi.updateSetting(a);
    } catch (e) {}
}
function us() {
    (0, tf.Bf)();
    let e = (0, c.bG)([eo.default], () => eo.default.getCurrentUser()),
        t = c3.eh.useSetting(),
        a = (0, c.bG)([c2.A], () => c2.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, c.bG)([tD.A], () => tD.A.purchases),
        i = (0, eL.x9)(l),
        s = (0, eL.$W)(l),
        r = e?.avatarDecoration?.skuId,
        u = e?.collectibles?.nameplate?.skuId,
        m = null != r ? (i.find((e) => e.skuId === r) ?? null) : null,
        h = null != u ? (s.find((e) => e.skuId === u) ?? null) : null,
        x = (0, c.bG)([tI.A], () => tI.A.getProduct(m?.skuId)),
        v = (0, c.bG)([tI.A], () => tI.A.getProduct(h?.skuId)),
        j = (0, c.bG)([c1.Ay], () => c1.Ay.fontSize),
        f = (0, c.bG)([c1.Ay], () => c1.Ay.messageGroupSpacing),
        b = c3.Xi.useSetting();
    return (
        d.useEffect(() => {
            let e = eo.default.getCurrentUser(),
                t = c3.eh.getSetting(),
                a = tD.A.purchases,
                n = (0, eL.x9)(a),
                l = (0, eL.$W)(a),
                i = c2.A.theme,
                s = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = c1.Ay.fontSize,
                m = c1.Ay.messageGroupSpacing,
                h = c3.Xi.getSetting();
            return () => {
                try {
                    (c5.u_(
                        { theme: i, backgroundGradientPresetId: s ?? void 0, customUserThemeSettings: void 0 },
                        aw.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, tp.p)({ avatarDecoration: d, nameplate: c }));
                    let e = tg.A.getPendingChanges(),
                        t = (0, c4.Sk)(e);
                    ((0, c6._L)(t).finally(c6.pZ), (0, c8.XS)(u), (0, c8.AC)(m), c3.Xi.updateSetting(h));
                } catch (e) {}
            };
        }, []),
        (0, o.jsxs)("div", {
            className: lX.kL,
            children: [
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsx)(X.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, o.jsx)(g.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, o.jsx)(p.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: un }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: ul,
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: ui,
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, o.jsxs)(g.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? c7.ag[n]?.getName() : "None"],
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", x?.name ?? "None"],
                        }),
                        (0, o.jsxs)(g.E, { variant: "text-md/normal", children: ["Nameplate: ", v?.name ?? "None"] }),
                        (0, o.jsxs)(g.E, { variant: "text-md/normal", children: ["Font Size: ", j, "px"] }),
                        (0, o.jsxs)(g.E, { variant: "text-md/normal", children: ["Message Spacing: ", f] }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                b,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case c0.NS.COMPACT:
                                            return "Compact";
                                        case c0.NS.COZY:
                                            return "Cozy";
                                        case c0.NS.DEFAULT:
                                            return "Default";
                                        case c0.NS.RESPONSIVE:
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
var ur = a(656513),
    uo = a(885574),
    ud = a(508274),
    uc = a(837529);
let uu = [5793266, 2303016],
    um = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function uh() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, uc.Zt)(),
        l = (0, eg.Ay)(),
        i = (0, c.bG)([aM.A], () => aM.A.settings.appearance?.clientThemeSettings),
        s =
            i?.customUserThemeSettings != null &&
            null != i.customUserThemeSettings.colors &&
            i.customUserThemeSettings.colors.length > 0;
    function r() {
        null != a && ((0, c5.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, o.jsx)(v.Ar, {
        children: (0, o.jsxs)(tY.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, o.jsxs)("div", {
                    children: [
                        (0, o.jsx)(ur.N, {
                            collapsibleContent: (0, o.jsxs)(tY.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, o.jsx)(g.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, o.jsx)(g.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "The intended use case for this tool is to allow you to preview both Nitro and non-Nitro profile component styles across a variety of user profiles regardless of their Nitro status or chosen theme colors.",
                                    }),
                                ],
                            }),
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, o.jsx)(p.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "What is this?",
                                    icon: uo.CircleInformationIcon,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, o.jsx)(y.c, {}),
                    ],
                }),
                null == e
                    ? (0, o.jsx)(p.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: uu }),
                      })
                    : (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)(nx.e, {
                                  children: (0, o.jsx)(p.$, {
                                      variant: "critical-primary",
                                      text: "Clear Theme Override",
                                      onClick: function () {
                                          (r(), t(null));
                                      },
                                  }),
                              }),
                              (0, o.jsx)(f.l, {
                                  label: "Profile Type",
                                  selectionMode: "single",
                                  value: e.mode,
                                  options: um,
                                  onSelectionChange: (a) => t({ ...e, mode: a }),
                              }),
                              "nitro" === e.mode
                                  ? (0, o.jsxs)(o.Fragment, {
                                        children: [
                                            (0, o.jsx)(h.d, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (a) => t({ ...e, disableBanner: a }),
                                            }),
                                            (0, o.jsx)(p.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: uu }),
                                            }),
                                            (0, o.jsxs)(tY.B, {
                                                gap: 8,
                                                children: [
                                                    (0, o.jsx)(g.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, o.jsx)(ud.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, o.jsxs)(tY.B, {
                                                gap: 8,
                                                children: [
                                                    (0, o.jsx)(g.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, o.jsx)(ud.VN, {
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
                                  : (0, o.jsxs)(tY.B, {
                                        gap: 8,
                                        children: [
                                            (0, o.jsx)(f.l, {
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
                                                (0, o.jsxs)(o.Fragment, {
                                                    children: [
                                                        (0, o.jsx)(g.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, o.jsx)(g.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be saved and can be restored manually, or automatically when you clear the override.",
                                                        }),
                                                        (0, o.jsx)(p.$, {
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
                                                                    (0, c5.u_)({ theme: "system" }));
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, o.jsxs)(o.Fragment, {
                                                    children: [
                                                        (0, o.jsx)(g.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be automatically restored when you clear the override.",
                                                        }),
                                                        (0, o.jsx)(p.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Restore Custom Theme",
                                                            onClick: r,
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
var ux = a(141931),
    up = a(306173),
    ug = a(142617),
    uv = a(174459),
    uj = a(621466),
    uf = a(358618),
    ub = a(983851);
a(451909);
let uy = { voice: { totalVoiceMinutes: 54423, totalVoiceMinutesPercentile: 92 } },
    uE = {
        voice: { totalVoiceMinutes: 0, totalVoiceMinutesPercentile: 0 },
        messages: { numMessagesSent: 0, numMessagesSentPercentile: 0 },
        guilds: { guilds: [] },
        emojis: { numEmojisSent: 0, numEmojisSentPercentile: 0, emojis: [] },
        games: {
            totalGamesPlayed: 0,
            totalGamesPlayedPercentile: 0,
            games: [],
            totalDaysPlayed: 0,
            totalDaysPlayedPercentile: 0,
        },
        sidekick: null,
        users: [],
        power: { powerLevel: 0, powerLevelPercentile: 0 },
    };
var uC = a(149790),
    uS = a(935208);
function u_(e) {
    return null == e || e < 50 ? null : Math.max(1, Math.ceil(100 - e));
}
function uN(e) {
    let { voice: t, messages: a, guilds: n, emojis: l, games: i } = e;
    return {
        voice: { peakHourUtc: t.peak_hour_utc },
        messages: { numWordsSent: a.num_words_sent },
        guilds: {
            guildsByMembers: n.guilds_by_members.map((e) => {
                let { guild: t } = e;
                return (0, uC.yF)(t);
            }),
        },
        emojis: {
            numEmojisSent: l.num_emojis_sent,
            numReactionsAdded: l.num_reactions_added,
            emojis: l.emojis.map((e) => {
                let { emoji: t } = e;
                return t;
            }),
        },
        games: {
            gamesByPlayers: i.games_by_players.map((e) => {
                let { game: t } = e;
                return uA(t);
            }),
            newGamesByPlayers: i.new_games_by_players.map((e) => {
                let { game: t } = e;
                return uA(t);
            }),
            indieGamesByPlayers: i.indie_games_by_players.map((e) => {
                let { game: t } = e;
                return uA(t);
            }),
            gamesByStreamWatchMinutes: i.games_by_stream_watch_minutes.map((e) => {
                let { game: t } = e;
                return uA(t);
            }),
            gamesByCoplayUsers: i.games_by_coplay_users.map((e) => {
                let { game: t } = e;
                return uA(t);
            }),
            numUsersPlayedEveryDay: i.num_users_played_every_day,
        },
    };
}
function uA(e) {
    return {
        id: uS.default.cast(e.id),
        name: e.name,
        iconHash: e.icon_hash ?? void 0,
        bannerHash: e.banner_hash ?? void 0,
        coverImageHash: e.cover_image_hash ?? void 0,
    };
}
var uk =
    (((n = {})[(n.INIT = 0)] = "INIT"),
    (n[(n.FETCHING = 1)] = "FETCHING"),
    (n[(n.SUCCESS = 2)] = "SUCCESS"),
    (n[(n.ERROR = 3)] = "ERROR"),
    n);
let uI = { isMuted: !1 },
    uD = {},
    uT = { ...uI },
    uR = null,
    uO = null,
    uw = null,
    uM = 0,
    uP = null;
class uL extends c.Ay.PersistedStore {
    static displayName = "Checkpoint2026Store";
    static persistKey = "Checkpoint2026Store";
    getState() {
        return uT;
    }
    initialize(e) {
        null != e && (uT = { ...uT, ...e });
    }
    get isMuted() {
        return uT.isMuted;
    }
    get stats() {
        return uR;
    }
    get globalStats() {
        return uO;
    }
    get character() {
        return uw;
    }
    get fetchState() {
        return uM;
    }
    get selectedCharacterTraits() {
        return uP ?? uw ?? uD;
    }
}
let uU = new uL(tO.h, {
    CHECKPOINT_TOGGLE_MUTE: function () {
        uT.isMuted = !uT.isMuted;
    },
    CHECKPOINT_FETCH_START: function () {
        uM = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        ((uR = e.stats), (uO = e.globalStats), (uw = e.character), (uM = 2));
    },
    CHECKPOINT_FETCH_FAILED: function () {
        uM = 3;
    },
    CHECKPOINT_COMPLETE_SUCCESS: function (e) {
        ((uw = e.character), (uP = null));
    },
    CHECKPOINT_RESET_SUCCESS: function () {
        ((uw = null), (uP = null));
    },
    CHECKPOINT_SELECT_CHARACTER_TRAIT: function (e) {
        uP = { ...(uP ?? uw ?? uD), [e.trait]: e.optionId };
    },
    CHECKPOINT_RESET_EDITED_CHARACTER: function () {
        uP = null;
    },
    LOGOUT: function () {
        ((uT = { ...uI }), (uR = null), (uO = null), (uw = null), (uM = 0), (uP = null));
    },
});
function uG() {
    return tO.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
}
async function uF(e) {
    (uU.initializeIfNeeded(), tO.h.dispatch({ type: "CHECKPOINT_FETCH_START" }));
    try {
        let { body: t } = await it.Bo.get({ url: em.Rsh.CHECKPOINT, rejectWithError: !0 });
        if (null != e)
            return (
                tO.h.dispatch({
                    type: "CHECKPOINT_FETCH_SUCCESS",
                    stats: (function (e) {
                        switch (e) {
                            case 0:
                                return uy;
                            case 1:
                                return null;
                            case 2:
                                return uE;
                        }
                    })(e),
                    globalStats: uN(t.global_stats),
                    character: null,
                }),
                !0
            );
        return (
            tO.h.dispatch({
                type: "CHECKPOINT_FETCH_SUCCESS",
                stats:
                    null != t.stats
                        ? (function (e) {
                              let {
                                  voice: t,
                                  messages: a,
                                  guilds: n,
                                  emojis: l,
                                  games: i,
                                  sidekick: s,
                                  users: r,
                                  power: o,
                              } = e;
                              return {
                                  voice: {
                                      totalVoiceMinutes: t.total_voice_minutes,
                                      totalVoiceMinutesPercentile: t.total_voice_minutes_percentile,
                                  },
                                  messages: {
                                      numMessagesSent: a.num_messages_sent,
                                      numMessagesSentPercentile: a.num_messages_sent_percentile,
                                  },
                                  guilds: {
                                      guilds: n.guilds.map((e) => ({
                                          guild: (0, uC.yF)(e.guild),
                                          numMessagesSent: e.num_messages_sent,
                                          numVoiceMinutes: e.num_voice_minutes,
                                          numDaysInteracted: e.num_days_interacted,
                                          numDaysInteractedPercentile: e.num_days_interacted_percentile,
                                      })),
                                  },
                                  emojis: {
                                      numEmojisSent: l.num_emojis_sent,
                                      numEmojisSentPercentile: l.num_emojis_sent_percentile,
                                      emojis: l.emojis,
                                  },
                                  games: {
                                      totalGamesPlayed: i.total_games_played,
                                      totalGamesPlayedPercentile: i.total_games_played_percentile,
                                      games: i.games.map((e) => {
                                          let { game: t, num_sessions: a } = e;
                                          return { game: uA(t), numSessions: a };
                                      }),
                                      totalDaysPlayed: i.total_days_played,
                                      totalDaysPlayedPercentile: i.total_days_played_percentile,
                                  },
                                  sidekick:
                                      null != s
                                          ? {
                                                user: new sy.A(s.user),
                                                numMessagesSent: s.num_messages_sent,
                                                numVoiceMinutes: s.num_voice_minutes,
                                            }
                                          : null,
                                  users: r.map((e) => {
                                      let { user: t } = e;
                                      return new sy.A(t);
                                  }),
                                  power: { powerLevel: o.power_level, powerLevelPercentile: o.power_level_percentile },
                              };
                          })(t.stats)
                        : null,
                globalStats: uN(t.global_stats),
                character: t.character,
            }),
            !0
        );
    } catch {
        return (tO.h.dispatch({ type: "CHECKPOINT_FETCH_FAILED" }), !1);
    }
}
var uB = a(201779);
let u$ = [
        uB.gr.HOME,
        uB.gr.INTRODUCTION,
        uB.gr.VOICE_GENERAL,
        uB.gr.VOICE_FACE,
        uB.gr.MESSAGES_GENERAL,
        uB.gr.MESSAGES_OUTFIT,
        uB.gr.SERVERS_GENERAL,
        uB.gr.SERVERS_HEADWEAR,
        uB.gr.EMOJI_GENERAL,
        uB.gr.EMOJI_SHOES,
        uB.gr.GAMES_GENERAL,
        uB.gr.GAMES_WEARABLE,
        uB.gr.GAME_TIME_GENERAL,
        uB.gr.GAME_TIME_AURA,
        uB.gr.FINALIZE_CHARACTER,
        uB.gr.SUMMARY,
        uB.gr.PROFILE_WIDGET,
    ],
    uV = [
        uB.gr.HOME,
        uB.gr.INTRODUCTION,
        uB.gr.VOICE_STATS,
        uB.gr.VOICE_FACE,
        uB.gr.MESSAGES_STATS,
        uB.gr.MESSAGES_OUTFIT,
        uB.gr.SERVERS_INTRO,
        uB.gr.SERVERS_STATS,
        uB.gr.SERVERS_HEADWEAR,
        uB.gr.EMOJI_STATS,
        uB.gr.EMOJI_SHOES,
        uB.gr.GAMES_STATS,
        uB.gr.GAMES_WEARABLE,
        uB.gr.GAME_TIME_STATS,
        uB.gr.GAME_TIME_AURA,
        uB.gr.SQUAD_TRANSITION,
        uB.gr.SQUAD,
        uB.gr.SIDEKICK,
        uB.gr.SIDEKICK_LEAVE,
        uB.gr.FINALIZE_CHARACTER,
        uB.gr.SUMMARY,
        uB.gr.PROFILE_WIDGET,
    ],
    uW = { [uB.gr.SERVERS_INTRO]: (e) => !((e?.guilds?.guilds.length ?? 0) > 0) };
var uH = a(920495),
    uz = a(299619),
    uK = a(818348),
    uY = a(11435);
function uq(e) {
    let { isVisible: t } = e,
        a = d.useRef(null),
        n = (0, c.bG)([c1.Ay], () => c1.Ay.useReducedMotion),
        l = t && !n;
    return (
        d.useEffect(() => {
            let e = a.current;
            null != e && (l ? e.play().catch(uK.tE) : e.pause());
        }, [l]),
        d.useEffect(() => {
            n && null != a.current && (a.current.currentTime = 1);
        }, [n]),
        (0, o.jsxs)("div", {
            className: q()(uY.Tp, { [uY.R]: !t }),
            "aria-hidden": !0,
            children: [
                (0, o.jsx)(uz.A, {
                    ref: a,
                    className: uY.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, o.jsx)("div", { className: uY.D7 }),
            ],
        })
    );
}
var uJ = a(885619);
function uQ(e) {
    let { "aria-label": t, children: a, onClick: n, size: l, className: i } = e;
    return (0, o.jsx)(J.D, { className: q()(uJ.button, uJ[l], i), onClick: n, "aria-label": t, children: a });
}
function uX(e) {
    let { className: t, ...a } = e;
    return (0, o.jsx)(uQ, { ...a, className: q()(uJ.shadow, t) });
}
var uZ = a(477155),
    u0 = a(935286),
    u1 = a(753875);
function u2(e) {
    let { activeRoute: t, onBack: a, onNext: n } = e,
        l = t === uB.gr.HOME,
        i = l ? n_.t.I0v0Qv : t === uB.gr.PROFILE_WIDGET ? n_.t.i4jeWR : n_.t.PDTjLN;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            !l &&
                (0, o.jsx)(uQ, {
                    size: "md",
                    className: q()(u1.A4, u1.aX),
                    onClick: a,
                    "aria-label": n_.intl.string(n_.t["13/7kX"]),
                    children: (0, o.jsx)(uZ.r, { color: "currentColor" }),
                }),
            (0, o.jsx)(uX, {
                size: "md",
                className: q()(u1.A4, u1.K2),
                onClick: n,
                "aria-label": n_.intl.string(i),
                children: (0, o.jsx)(u0.E, { color: "currentColor" }),
            }),
        ],
    });
}
var u3 = a(771639);
function u6(e) {
    let { children: t } = e;
    return (0, o.jsx)("div", { className: u3.n, children: t });
}
var u5 = a(504736);
function u8(e) {
    let { children: t, className: a, ...n } = e;
    return (0, o.jsx)(g.E, { ...n, className: q()(u5.Q, a), color: "none", children: t });
}
var u4 = a(954874),
    u7 = a(225380);
function u9() {
    let e = (0, c.bG)([eo.default], () => eo.default.getCurrentUser()),
        t = (0, ex.tx)(e);
    return (0, o.jsxs)(u6, {
        children: [
            (0, o.jsx)(u8, { variant: "display-lg", children: n_.intl.string(u4.default["CdU/PF"]) }),
            (0, o.jsx)(u8, {
                variant: "heading-xxl/medium",
                children: n_.intl.formatToPlainString(u7.default.xhZ23b, { username: t }),
            }),
        ],
    });
}
function me(e) {
    let { name: t } = e;
    return (0, o.jsxs)(u6, {
        children: [
            (0, o.jsx)(u8, { variant: "eyebrow", children: "Stats screen" }),
            (0, o.jsx)(u8, { variant: "display-md", children: t }),
        ],
    });
}
function mt() {
    return (0, o.jsx)(me, { name: "Emoji" });
}
function ma() {
    return (0, o.jsx)(me, { name: "Friends" });
}
var mn = a(81466);
function ml(e) {
    let { src: t, className: a } = e,
        n = d.useRef(null);
    return (
        d.useEffect(() => {
            let e = new Image();
            return (
                (e.onload = () => {
                    let t = n.current,
                        a = t?.getContext("2d");
                    null != t &&
                        null != a &&
                        ((t.width = e.naturalWidth), (t.height = e.naturalHeight), a.drawImage(e, 0, 0));
                }),
                (e.src = t),
                () => {
                    e.onload = null;
                }
            );
        }, [t]),
        (0, o.jsx)("canvas", { ref: n, className: a, "aria-hidden": "true" })
    );
}
function mi(e) {
    let { src: t, className: a } = e;
    return (0, c.bG)([c1.Ay], () => c1.Ay.useReducedMotion)
        ? (0, o.jsx)(ml, { src: t, className: a })
        : (0, o.jsx)("img", { src: t, alt: "", className: a });
}
var ms = a(141881);
function mr(e) {
    let { children: t } = e;
    return (0, o.jsx)(u8, { tag: "span", variant: "experimental/mono-md/bold", className: ms.l, children: t });
}
var mo = a(677059);
function md(e) {
    let { children: t } = e;
    return (0, o.jsx)(u8, { variant: "heading-xxl/medium", className: mo.h, children: t });
}
var mc = a(100391);
function mu(e) {
    let { icon: t, children: a } = e;
    return (0, o.jsxs)("div", {
        className: mc.D,
        children: [
            (0, o.jsx)(t, { size: "md", color: "currentColor" }),
            (0, o.jsx)(u8, { variant: "heading-lg/extrabold", className: mc.Q, children: a }),
        ],
    });
}
var mm = a(590642),
    mh = a(362263),
    mx = a(140735),
    mp = a(998304),
    mg = a(309913),
    mv = a(406956);
let mj = (0, mp.j5)(mg.Kr);
function mf(e) {
    let { value: t, alignment: a = "left" } = e,
        n = (0, c.bG)([c1.Ay], () => c1.Ay.useReducedMotion),
        [l, i] = d.useState(0),
        s = n ? t : l;
    d.useEffect(() => {
        if (n) return;
        let e = performance.now(),
            a = requestAnimationFrame(function n(l) {
                let s = Math.min((l - e) / 500, 1);
                (i(Math.round(t * s)), s < 1 && (a = requestAnimationFrame(n)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, n]);
    let r = "center" === a ? mm.m : mh.w;
    return (0, o.jsxs)("div", {
        className: mv.l,
        children: [
            (0, o.jsx)(r, {
                className: mv.E,
                stateMachine: "State Machine 1",
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: s, TextColor: mj },
            }),
            (0, o.jsx)(mx.A, { children: t.toLocaleString(n_.intl.currentLocale) }),
        ],
    });
}
var mb = a(9767);
function my() {
    let e = (0, c.bG)([uU], () => uU.stats?.games),
        t = Math.round(e?.totalDaysPlayed ?? 0),
        a = u_(e?.totalDaysPlayedPercentile);
    return (0, o.jsx)(u6, {
        children: (0, o.jsxs)("div", {
            className: mb.kL,
            children: [
                (0, o.jsx)(mi, {
                    src: "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    className: mb.HW,
                }),
                (0, o.jsxs)("div", {
                    className: mb.C,
                    children: [
                        (0, o.jsxs)("div", {
                            className: mb.dJ,
                            children: [
                                (0, o.jsx)(mu, { icon: mn.CalendarIcon, children: n_.intl.string(u7.default.oAoYbN) }),
                                (0, o.jsx)(mf, { value: t }),
                            ],
                        }),
                        (0, o.jsx)(md, {
                            children:
                                null != a
                                    ? n_.intl.format(u7.default["4FXB/m"], {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, o.jsx)(mr, { children: e }, t),
                                      })
                                    : n_.intl.format(u7.default.iCKjh6, { numDays: t }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function mE() {
    return (0, o.jsx)(me, { name: "Games" });
}
var mC = a(534890),
    mS = a(167662);
function m_() {
    let e = (0, c.bG)([uU], () => uU.stats?.messages),
        t = Math.round(e?.numMessagesSent ?? 0),
        a = u_(e?.numMessagesSentPercentile);
    return (0, o.jsx)(u6, {
        children: (0, o.jsxs)("div", {
            className: mS.kL,
            children: [
                (0, o.jsx)(mi, {
                    src: "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    className: mS.HW,
                }),
                (0, o.jsxs)("div", {
                    className: mS.C,
                    children: [
                        (0, o.jsxs)("div", {
                            className: mS.dJ,
                            children: [
                                (0, o.jsx)(mu, { icon: mC.ChatIcon, children: n_.intl.string(u4.default.wWKySP) }),
                                (0, o.jsx)(mf, { value: t }),
                            ],
                        }),
                        (0, o.jsx)(md, {
                            children:
                                null != a
                                    ? n_.intl.format(u7.default.w2CanS, {
                                          numMessages: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, o.jsx)(mr, { children: e }, t),
                                      })
                                    : n_.intl.format(u7.default.cYCqz8, { numMessages: t }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var mN = a(831544),
    mA = a(664121),
    mk = a(548118),
    mI = a(224865);
let mD = mk.iu[mk.Ay.Sizes.XLARGE];
function mT(e) {
    let { guild: t, size: a } = e;
    return (0, o.jsx)(mk.Ay, {
        guild: t,
        size: mk.Ay.Sizes.XLARGE,
        iconSize: a,
        textScale: a / mD,
        className: mI.K,
        style: { width: a, height: a, borderRadius: 0 },
    });
}
var mR = a(883053);
function mO(e) {
    let { rank: t, className: a } = e;
    return (0, o.jsxs)(u8, { variant: "experimental/mono-md/bold", className: q()(mR.T, a), children: ["#", t] });
}
var mw = a(972106);
let mM = [];
function mP(e) {
    let { guild: t, rank: a, iconSize: n = 100, children: l } = e;
    return (0, o.jsxs)("div", {
        className: mw.w_,
        children: [
            (0, o.jsxs)("div", {
                className: mw.jj,
                children: [
                    (0, o.jsx)(mO, { rank: a }),
                    (0, o.jsxs)("div", {
                        className: mw.gI,
                        children: [
                            (0, o.jsx)(u8, {
                                variant: "heading-xxl/medium",
                                className: mw.J5,
                                lineClamp: 1,
                                children: t.name,
                            }),
                            l,
                        ],
                    }),
                ],
            }),
            (0, o.jsx)(mT, { guild: t, size: n }),
        ],
    });
}
function mL(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: n } = e,
        l = Math.round(a),
        i = Math.round(n);
    return (0, o.jsx)(mP, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, o.jsxs)("div", {
            className: mw.dX,
            children: [
                (0, o.jsxs)("div", {
                    className: mw.Em,
                    children: [
                        (0, o.jsx)(mN.MicrophoneIcon, { size: "md", color: "currentColor" }),
                        (0, o.jsx)(u8, { variant: "experimental/mono-md/bold", className: mw.jt, children: l }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: mw.Em,
                    children: [
                        (0, o.jsx)(mC.ChatIcon, { size: "md", color: "currentColor" }),
                        (0, o.jsx)(u8, { variant: "experimental/mono-md/bold", className: mw.jt, children: i }),
                    ],
                }),
            ],
        }),
    });
}
function mU() {
    let e = (0, c.bG)([uU], () => uU.stats?.guilds?.guilds ?? mM);
    return (0, o.jsx)(u6, {
        children: (0, o.jsxs)("div", {
            className: mw.kL,
            children: [
                (0, o.jsxs)("div", {
                    className: mw.wx,
                    children: [
                        (0, o.jsxs)("div", {
                            className: mw.R_,
                            children: [
                                (0, o.jsx)(mu, { icon: mA.R, children: n_.intl.string(u7.default.Mb5E6r) }),
                                (0, o.jsx)(u8, {
                                    variant: "display-lg",
                                    className: mw.Vy,
                                    children: n_.intl.string(u4.default.F0fkrh),
                                }),
                            ],
                        }),
                        (0, o.jsx)(md, { children: n_.intl.string(u7.default.RL2mWA) }),
                    ],
                }),
                (0, o.jsx)("div", {
                    className: mw.Pl,
                    children: e.map((e, t) => {
                        let { guild: a, numMessagesSent: n, numVoiceMinutes: l } = e;
                        return 0 === t
                            ? (0, o.jsx)(mL, { guild: a, numMessagesSent: n ?? 0, numVoiceMinutes: l ?? 0 }, a.id)
                            : (0, o.jsx)(mP, { guild: a, rank: t + 1 }, a.id);
                    }),
                }),
            ],
        }),
    });
}
function mG() {
    return (0, o.jsx)(me, { name: "Summary" });
}
var mF = a(270704);
function mB() {
    let e = (0, c.bG)([uU], () => uU.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0),
        a = u_(e?.totalVoiceMinutesPercentile);
    return (0, o.jsxs)(u6, {
        children: [
            (0, o.jsx)(mi, {
                src: "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                className: mF.Tp,
            }),
            (0, o.jsxs)("div", {
                className: mF.Qs,
                children: [
                    (0, o.jsxs)("div", {
                        className: mF.dJ,
                        children: [
                            (0, o.jsx)(mu, {
                                icon: mN.MicrophoneIcon,
                                children: n_.intl.formatToPlainString(u4.default.UZbUtl, { numMinutes: t }),
                            }),
                            (0, o.jsx)(mf, { value: t, alignment: "center" }),
                        ],
                    }),
                    (0, o.jsx)(md, {
                        children:
                            null != a
                                ? n_.intl.format(u7.default["7gtpnV"], {
                                      numMinutes: t,
                                      percent: a,
                                      percentHook: (e, t) => (0, o.jsx)(mr, { children: e }, t),
                                  })
                                : n_.intl.format(u7.default.Y3poDW, { numMinutes: t }),
                    }),
                ],
            }),
        ],
    });
}
function m$(e) {
    let { route: t } = e;
    if (t === uB.gr.HOME) return (0, o.jsx)(u9, {});
    let { statsScreen: a } = (0, uB.UG)(t);
    switch (a) {
        case uB.oI.VOICE:
            return (0, o.jsx)(mB, {});
        case uB.oI.MESSAGES:
            return (0, o.jsx)(m_, {});
        case uB.oI.SERVERS:
            return (0, o.jsx)(mU, {});
        case uB.oI.EMOJI:
            return (0, o.jsx)(mt, {});
        case uB.oI.GAMES:
            return (0, o.jsx)(mE, {});
        case uB.oI.GAME_TIME:
            return (0, o.jsx)(my, {});
        case uB.oI.SQUAD:
        case uB.oI.SIDEKICK:
            return (0, o.jsx)(ma, {});
        case uB.oI.SUMMARY:
            return (0, o.jsx)(mG, {});
        default:
            return null;
    }
}
function mV(e) {
    let { stage: t } = e;
    return (0, o.jsxs)(u6, {
        children: [
            (0, o.jsx)(g.E, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }),
            (0, o.jsx)(g.E, { color: "text-muted", variant: "text-md/medium", children: t }),
        ],
    });
}
var mW = a(517782);
let mH = {
    "--custom-checkpoint-primary": mg.Kr,
    "--custom-checkpoint-dark-cyan": mg.ow,
    "--custom-checkpoint-button-shadow": mg.zj,
    "--custom-checkpoint-white": mg.Ve,
    "--custom-checkpoint-guild-card-background": mg.LM,
};
function mz(e) {
    let t,
        a,
        { didPlayerShareDataWithDiscord: n, onClose: l } = e;
    ((0, c.bG)([uU], () => uU.fetchState),
        (t = (0, c.bG)([uU], () => uU.stats?.games?.games)),
        (a = (0, d.useMemo)(
            () =>
                t?.map((e) => {
                    let { game: t } = e;
                    return t.id;
                }) ?? [],
            [t],
        )),
        (0, d.useEffect)(() => {
            let { fetchState: e } = uU;
            (e === uk.INIT || e === uk.ERROR) && uF();
        }, []),
        (0, d.useEffect)(() => {
            (0, uH.E)(a);
        }, [a]));
    let i = n ? uB.Np.SHARED_DATA : uB.Np.NO_SHARED_DATA,
        [s, r] = d.useState(uB.gr.HOME),
        { characterStage: u, statsScreen: m } = (0, uB.UG)(s),
        h = s === uB.gr.HOME || null != m,
        x = (0, c.bG)([uU], () => uU.isMuted),
        p = x ? uf._ : ub.H,
        g = d.useCallback(
            (e) => {
                let t = (function (e, t, a) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        l = (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return (e === uB.Np.SHARED_DATA ? uV : u$).filter((e) => {
                                let a = uW[e];
                                return null == a || (null != t && a(t));
                            });
                        })(e, n),
                        i = l.indexOf(t);
                    return -1 === i ? uB.gr.INTRODUCTION : (l[i + a] ?? null);
                })(i, s, e);
                if (null == t) {
                    1 === e && l();
                    return;
                }
                r(t);
            },
            [s, i, l],
        ),
        v = d.useCallback(() => g(-1), [g]),
        j = d.useCallback(() => g(1), [g]);
    return (
        d.useEffect(() => {
            function e(e) {
                (0, uj.vq)(e.target, HTMLTextAreaElement) ||
                    (0, uj.vq)(e.target, HTMLInputElement) ||
                    ("ArrowRight" === e.key ? j() : "ArrowLeft" === e.key && v());
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [v, j]),
        (0, o.jsx)(eK.N, {
            theme: uK.NJ.DARK,
            children: (e) =>
                (0, o.jsxs)("div", {
                    className: q()(e, mW.kL),
                    style: mH,
                    "aria-label": n_.intl.string(u4.default["CdU/PF"]),
                    children: [
                        (0, o.jsx)(uq, { isVisible: h }),
                        (0, o.jsx)("div", {
                            className: q()(mW.qd, { [mW.R]: h }),
                            children: (0, o.jsx)(mV, { stage: u }),
                        }),
                        h && (0, o.jsx)("div", { className: mW.qd, children: (0, o.jsx)(m$, { route: s }) }),
                        (0, o.jsxs)("div", {
                            className: mW.$s,
                            children: [
                                (0, o.jsx)(uQ, {
                                    size: "sm",
                                    "aria-label": n_.intl.string(x ? n_.t.YqAjXy : n_.t.w4m945),
                                    onClick: uG,
                                    children: (0, o.jsx)(p, { size: "xs", color: "currentColor" }),
                                }),
                                (0, o.jsx)(uQ, {
                                    size: "sm",
                                    "aria-label": n_.intl.string(n_.t.cpT0Cq),
                                    onClick: l,
                                    children: (0, o.jsx)(ea.P, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        }),
                        (0, o.jsx)(u2, { activeRoute: s, onBack: v, onNext: j }),
                    ],
                }),
        })
    );
}
var mK = a(276602),
    mY = a(237984),
    mq = a(43203),
    mJ = a(349435),
    mQ = a(674272),
    mX = a(466034),
    mZ = a(10094),
    m0 = a(683760);
function m1() {
    let e = (0, c.bG)([eo.default], () => eo.default.getCurrentUser()),
        t = (0, c.bG)([m0.A], () => {
            let e = m0.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, c.bG)([m0.A], () => m0.A.getPremiumTypeOverride());
    return (0, o.jsxs)(tY.B, {
        gap: 16,
        children: [
            (0, o.jsx)(f.l, {
                label: "Override Client-Side Premium Type",
                options: tM.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, mZ.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, o.jsx)(l5.Q, {
                onClick: () => {
                    (0, mZ.O)(tM.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, o.jsx)(sU.J, {
                label: "Override Client-Side Account Created At Date",
                value: nB()(t),
                onSelect: (e) => {
                    var t;
                    return ((t = e.toISOString()), void (0, mZ.Y)(new Date(t)));
                },
            }),
            (0, o.jsx)(l5.Q, { onClick: () => (0, mZ.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
}
var m2 = a(19575),
    m3 = a(327337),
    m6 = a(431804),
    m5 = a(377722),
    m8 = a(221851);
function m4() {
    throw Error("Send help");
}
function m7() {
    let e = c3.j0.useSetting(),
        t = (0, ug.FX)("DevToolsQuickActions"),
        [n, l] = d.useState(!1);
    return n
        ? {}
        : (0, o.jsxs)(v.Ip, {
              children: [
                  (0, o.jsx)("div", { className: q()(m5.N, m8.SX), children: (0, o.jsx)(m1, {}) }),
                  (0, o.jsx)("div", {
                      className: q()(m5.N, m8.QB),
                      children: (0, o.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, mQ.A)({ source: m6.y.KEYBIND }),
                      }),
                  }),
                  (0, o.jsx)("div", {
                      className: q()(m5.N, m8.QB),
                      children: (0, o.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = oa.Ay.getChannelId() ?? "21154681615024128"),
                                  void (0, eY.openModalLazy)(
                                      async () => {
                                          let { default: t } = await Promise.all([
                                              a.e("456510"),
                                              a.e("770940"),
                                              a.e("302033"),
                                              a.e("882830"),
                                              a.e("623068"),
                                          ]).then(a.bind(a, 516567));
                                          return (a) =>
                                              (0, o.jsx)(t, {
                                                  otherUserId: "9876543210",
                                                  channelId: e,
                                                  warningId: "test-warning-id",
                                                  warningType: mJ._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: m3.V },
                                  )
                              );
                          },
                      }),
                  }),
                  t &&
                      (0, o.jsx)("div", {
                          className: q()(m5.N, m8.QB),
                          children: (0, o.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Launch Checkpoint",
                              onClick: () =>
                                  (function (e) {
                                      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                      (uv.default.track(em.HAw.CHECKPOINT_STARTED, { source: e }),
                                          (0, rB.B8)((e) => {
                                              let { closeLayer: a } = e;
                                              return (0, o.jsx)(mz, { didPlayerShareDataWithDiscord: t, onClose: a });
                                          }));
                                  })("devtools"),
                          }),
                      }),
                  (0, o.jsx)("div", {
                      className: q()(m5.N, m8.QB),
                      children: (0, o.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, eY.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("417724").then(a.bind(a, 563255));
                                      return (t) => (0, o.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, o.jsx)("div", {
                      className: q()(m5.N, m8.QB),
                      children: (0, o.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, mq.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, o.jsx)("div", {
                      className: q()(m5.N, m8.QB),
                      children: (0, o.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: up.Oy,
                      }),
                  }),
                  (0, o.jsx)("div", {
                      className: q()(m5.N, m8.QB),
                      children: (0, o.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = mK.A.getSocket();
                              tO.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, o.jsx)("div", {
                      className: q()(m5.N, m8.QB),
                      children: (0, o.jsx)(h.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => c3.j0.updateSetting(e),
                      }),
                  }),
                  (0, o.jsxs)("div", {
                      className: q()(m5.N, m8.QB),
                      children: [
                          (0, o.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, mY.o)(),
                          }),
                          (0, o.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  (mK.A.getSocket().close(), mK.A.getSocket().connect());
                              },
                          }),
                          (0, o.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  tO.h.dispatch({
                                      type: "CLEAR_CACHES",
                                      reason: "Requested by user",
                                      preventWritingCachesAgainThisSession: !0,
                                      resetSocket: !0,
                                  });
                              },
                          }),
                          (0, o.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, mX.sy)(!0),
                          }),
                          (0, o.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: function () {
                                  it.Bo.post({ url: em.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, o.jsxs)("div", {
                      className: q()(m5.N, m8.QB),
                      children: [
                          (0, o.jsx)(f.l, {
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
                              onSelectionChange: (e) => null != e && m2.Ay.crash(e),
                          }),
                          (0, o.jsx)(f.l, {
                              label: "Trigger JS crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  { label: "Native JS crash", value: void 0, id: "native_js_crash" },
                                  {
                                      label: "Delayed exception in renderer process",
                                      value: ux.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: ux.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: ux.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void m2.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, o.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => l(!0),
                          }),
                          (0, o.jsx)(p.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: m4 }),
                      ],
                  }),
              ],
          });
}
var m9 = a(617686),
    he = a(653887),
    ht = a(799226);
function ha() {
    let e = Object.keys(m9).map((e) => (0, o.jsx)(hi, { riveName: e }, e));
    return (0, o.jsx)(v.Ar, {
        style: { maxHeight: "100%" },
        children: (0, o.jsxs)(tY.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, o.jsx)(X.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, o.jsx)(g.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, o.jsx)(hn, {}),
                (0, o.jsx)(X.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, o.jsx)(g.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function hn() {
    let [e, t] = d.useState(null),
        [a, n] = d.useState(null),
        [l, i] = d.useState(null),
        [s, r] = d.useState([]),
        c = d.useRef(null),
        [u, m] = d.useState(400),
        [h, x] = d.useState(400),
        p = d.useCallback(() => {
            setTimeout(() => {
                (i(c.current?.getProperties() ?? {}), r(c.current?.getArtboards() ?? []), n({}));
            }, 1e3);
        }, []),
        g = d.useCallback(
            (e, t) => {
                null != a && n((a) => ({ ...a, [e]: { type: l?.[e]?.type, value: t } }));
            },
            [l, a],
        ),
        v = d.useCallback((e) => {
            (i(null), n(null), t(e));
        }, []);
    return (0, o.jsxs)(tY.B, {
        gap: 16,
        children: [
            (0, o.jsx)(hi, { riveName: "Rive inspector", onRiveLoad: v }),
            null != e &&
                (0, o.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, o.jsx)(he._, { src: e, ref: c, onLoad: p, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, o.jsx)(td.y, {}) : null,
            null != a &&
                (0, o.jsxs)(tY.B, {
                    children: [
                        (0, o.jsxs)(tY.B, {
                            gap: 8,
                            children: [
                                (0, o.jsx)(X.D, { variant: "heading-lg/medium", children: "Dimensions" }),
                                (0, o.jsx)(b.k, {
                                    type: "number",
                                    label: "width",
                                    value: u.toString(),
                                    onChange: (e) => m(parseInt(e)),
                                }),
                                (0, o.jsx)(b.k, {
                                    type: "number",
                                    label: "height",
                                    value: h.toString(),
                                    onChange: (e) => x(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, o.jsxs)(tY.B, {
                            gap: 8,
                            children: [
                                (0, o.jsx)(X.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, o.jsx)(
                                        hl,
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
function hl(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: i } = e;
    switch (a) {
        case "string":
            return (0, o.jsx)(b.k, { label: t, value: n, onChange: (e) => l(e) });
        case "number":
            return (0, o.jsx)(b.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) });
        case "boolean":
            return (0, o.jsx)(h.d, { label: t, checked: n, onChange: (e) => l(e) });
        case "trigger":
            return (0, o.jsx)(p.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) });
        case "image":
            return (0, o.jsx)(b.k, { label: t, value: n, onChange: (e) => l(e) });
        case "color":
            return (0, o.jsx)(aE.Z, {
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
            return (0, o.jsx)(aE.Z, {
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
function hi(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = m9[t]?.riveSrc,
        l = null == n,
        i = d.useRef(null),
        s = (0, ht.Gy)(n);
    return (0, o.jsxs)(
        tY.B,
        {
            gap: 8,
            children: [
                (0, o.jsx)("label", { children: t }),
                (0, o.jsxs)(tY.B, {
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    children: [
                        (0, o.jsx)("input", {
                            type: "file",
                            accept: ".riv",
                            onChange: function (e) {
                                let t = e.target.files?.[0];
                                if (null == t) return;
                                let l = new FileReader();
                                ((l.onload = (e) => {
                                    let t = e.target?.result;
                                    (null != n && (0, ht.DS)(n, t), a?.(t));
                                }),
                                    l.readAsArrayBuffer(t));
                            },
                            ref: i,
                        }),
                        (0, o.jsx)(eH.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: function () {
                                (null != i.current && (i.current.value = ""),
                                    null != n && (0, ht.DS)(n, null),
                                    a?.(null));
                            },
                            icon: nz.TrashIcon,
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
var hs = a(926919),
    hr = a(513521),
    ho = a(111162);
function hd() {
    let e = (0, c.bG)([ho.default], () => ho.default.routingKeyTags);
    return (0, o.jsx)(lM.Ch, {
        children: (0, o.jsx)("div", {
            style: { padding: "var(--space-16)" },
            children: (0, o.jsxs)(m.n, {
                label: "Routing Key",
                children: [
                    (0, o.jsx)(g.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children:
                            "A routing key is an opaque set of strings added to outbound network requests, which may be used for debugging and testing of the network path.",
                    }),
                    (0, o.jsxs)(tY.B, {
                        gap: 8,
                        children: [
                            (0, o.jsx)(X.D, { variant: "heading-md/medium", children: "Overrides" }),
                            (0, o.jsx)(g.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "Manually configure the routing key values",
                            }),
                            (0, o.jsx)(hr.A, {
                                tagsLabel: "Routing Key Values",
                                placeholder: "Enter new value...",
                                tags: e.map((e) => ({ id: e, label: e })),
                                onAddTag: function (t) {
                                    e.includes(t) || (0, hs.f)([...e, t]);
                                },
                                onRemoveTag: function (t) {
                                    (0, hs.f)(e.filter((e) => !t.has(e)));
                                },
                            }),
                            e.length > 0
                                ? (0, o.jsx)(p.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: "Clear all",
                                      onClick: () => (0, hs.f)([]),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        }),
    });
}
var hc = a(344292);
function hu(e) {
    let { game: t, meta: a } = e;
    return (0, o.jsxs)("div", {
        className: hc.nM,
        children: [
            (0, o.jsxs)("div", {
                className: hc.uV,
                children: [
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/semibold",
                        className: hc._k,
                        children: null == t.name || "" === t.name ? "(no name)" : t.name,
                    }),
                    null != a && (0, o.jsx)(g.E, { variant: "text-xs/normal", className: hc.Bq, children: a }),
                ],
            }),
            (0, o.jsx)(g.E, {
                variant: "text-xs/normal",
                className: hc.C0,
                children: null == t.exePath || "" === t.exePath ? "(no path)" : t.exePath,
            }),
            (0, o.jsxs)(g.E, {
                variant: "text-xs/normal",
                className: hc.en,
                children: ["pid ", t.pid, " \xb7 ", t.id ?? "(no id)"],
            }),
        ],
    });
}
function hm(e) {
    let { title: t, count: a, entries: n, renderMeta: l } = e;
    return (0, o.jsxs)(tY.B, {
        gap: 4,
        children: [
            (0, o.jsxs)(X.D, { variant: "heading-sm/bold", children: [t, " (", a, ")"] }),
            0 === n.length
                ? (0, o.jsx)(g.E, { variant: "text-sm/normal", className: hc.Ie, children: "none" })
                : (0, o.jsx)(tY.B, {
                      gap: 0,
                      children: n.map((e) =>
                          (0, o.jsx)(
                              hu,
                              { game: e.game, meta: l?.(e.outcome) },
                              `${e.game.pid}-${e.game.id ?? e.game.exeName}`,
                          ),
                      ),
                  }),
        ],
    });
}
function hh(e) {
    return "blocked" !== e.kind
        ? null
        : null != e.matchedExe
          ? (0, o.jsxs)(o.Fragment, {
                children: [
                    "blocked by exe substring ",
                    (0, o.jsx)("span", { className: hc.ti, children: e.matchedExe }),
                ],
            })
          : null != e.matchedPattern
            ? (0, o.jsxs)(o.Fragment, {
                  children: [
                      "blocked by pattern ",
                      (0, o.jsx)("span", { className: hc.ti, children: e.matchedPattern }),
                  ],
              })
            : "blocked (no reason captured)";
}
function hx(e) {
    return "observed_app" !== e.kind
        ? null
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  "matched observed app",
                  " ",
                  (0, o.jsxs)("span", {
                      className: hc.ti,
                      children: [e.appName, e.streamerTool ? " (streamer tool)" : ""],
                  }),
              ],
          });
}
function hp() {
    var e;
    let t = (0, c.bG)([C.Ay], () => C.Ay.getDetectionDebug()),
        a = d.useMemo(() => {
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
    return (0, o.jsx)("div", {
        className: q()(tX.nd, hc.kL),
        children: (0, o.jsxs)(tY.B, {
            gap: 16,
            padding: 12,
            className: hc.rf,
            children: [
                (0, o.jsxs)(tY.B, {
                    gap: 4,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-md/bold", children: "Running Game Detection" }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                "Inspect what native is reporting, which entries get filtered by the JS pipeline, and what ultimately lands in ",
                                (0, o.jsx)("code", { children: "RunningGameStore" }),
                                ". Updates whenever native reports a change.",
                            ],
                        }),
                    ],
                }),
                (0, o.jsxs)(tY.B, {
                    gap: 4,
                    children: [
                        (0, o.jsx)(X.D, { variant: "heading-sm/bold", children: "Status" }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, o.jsx)("strong", { children: "Last update:" }),
                                " ",
                                null == (e = t?.timestamp) ? "never" : new Date(e).toLocaleTimeString(),
                            ],
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, o.jsx)("strong", { children: "From native:" }),
                                " ",
                                t?.totalFromNative ?? 0,
                            ],
                        }),
                        (0, o.jsxs)(g.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, o.jsx)("strong", { children: "Passed to RunningGameStore:" }),
                                " ",
                                a.passed.length,
                            ],
                        }),
                    ],
                }),
                (0, o.jsx)(y.c, {}),
                (0, o.jsx)(hm, { title: "Running games", count: a.passed.length, entries: a.passed }),
                (0, o.jsx)(y.c, {}),
                (0, o.jsx)(hm, { title: "Filtered: non-game", count: a.nonGames.length, entries: a.nonGames }),
                (0, o.jsx)(y.c, {}),
                (0, o.jsx)(hm, {
                    title: "Filtered: matched a hardcoded observed app",
                    count: a.observedApps.length,
                    entries: a.observedApps,
                    renderMeta: hx,
                }),
                (0, o.jsx)(y.c, {}),
                (0, o.jsx)(hm, {
                    title: "Filtered: blocklist",
                    count: a.blocked.length,
                    entries: a.blocked,
                    renderMeta: hh,
                }),
            ],
        }),
    });
}
var hg = a(290136),
    hv = a(205513),
    hj = a(629584),
    hf = a(600239),
    hb = a(940622),
    hy = a(961895),
    hE = a(343991),
    hC = a(607027);
function hS() {
    (0, eY.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
            return (t) =>
                (0, o.jsx)(e, {
                    title: "No image or video files found!",
                    help: "Please drop one or more image or video files.",
                    ...t,
                });
        },
        { modalKey: hE.D },
    );
}
function h_(e) {
    (e.stopPropagation(), e.preventDefault());
}
let hN = (e) => {
    let { className: t, onDrop: a, children: n } = e,
        [l, i] = d.useState(!1),
        s = d.useRef(null),
        r = d.useCallback((e) => {
            (h_(e), i(!0), (0, eY.closeModal)(hE.D));
        }, []),
        c = d.useCallback((e) => {
            h_(e);
            let t = s.current,
                a = e.relatedTarget;
            (null != a && (null == t || t.contains(a))) || i(!1);
        }, []),
        u = d.useCallback(
            async (e) => {
                (h_(e), i(!1));
                let t = e.dataTransfer;
                if (null == t) return void hS();
                let n = await Promise.all(Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry())).then(
                    (e) => e.filter((e) => null != e),
                );
                n.length > 0 ? a(n) : hS();
            },
            [a],
        );
    return (0, o.jsxs)("div", {
        ref: s,
        className: q()(t, hC.iE),
        onDragEnter: r,
        onDragOver: h_,
        onDragLeave: c,
        onDrop: u,
        children: [
            n,
            l &&
                (0, o.jsx)("div", {
                    className: hC.d2,
                    children: (0, o.jsxs)("div", {
                        className: hC.vW,
                        children: [
                            (0, o.jsx)(hy.A, { icons: eS.ir }),
                            (0, o.jsx)(X.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                            (0, o.jsxs)("div", {
                                className: hC.GA,
                                children: [
                                    (0, o.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        children: "Drop file(s) into this panel to preview Shop assets!",
                                    }),
                                    (0, o.jsxs)(g.E, {
                                        variant: "text-sm/normal",
                                        children: [
                                            "Click",
                                            (0, o.jsx)(hg.CircleQuestionIcon, {
                                                className: hC.q4,
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
var hA = a(374380),
    hk = a(597404),
    hI = a(455256);
let hD = new Set([
        eG.RN.HERO_BANNER_STATIC,
        eG.RN.HERO_LOGO,
        eG.RN.PDP_BACKGROUND,
        eG.RN.LOGO,
        eG.RN.MOBILE_BANNER,
        eG.RN.MOBILE_BACKGROUND,
    ]),
    hT = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    hR = { max: 5e6, warn: 2e6 },
    hO = { max: 3e6, warn: 1e6 },
    hw = { max: 2e6, warn: 1e6 },
    hM = { max: 1e6, warn: 5e5 },
    hP = { max: 25e4, warn: 5e4 },
    hL = {
        [hI.J.PROFILE_EFFECT]: hR,
        [hI.J.AVATAR_DECORATION]: hO,
        [hI.J.PROFILE_FRAME]: hw,
        [eG.RN.HERO_BANNER_ANIMATED]: hR,
        [eG.RN.HERO_BANNER_RIVE]: hR,
        [eG.RN.CATALOG_BANNER_RIVE]: hR,
        [eG.RN.SHOP_BUTTON_BG_HOVER]: hO,
        [eG.RN.SHOP_BUTTON_BG_HOVER_DARK]: hO,
        [eG.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: hO,
        [eG.RN.SHOP_BUTTON_BG_RESTING]: hO,
        [eG.RN.SHOP_BUTTON_BG_RESTING_DARK]: hO,
        [eG.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: hO,
        [eG.RN.HERO_BANNER_STATIC]: hw,
        [eG.RN.UPSELL_BANNER]: hM,
        [eG.RN.UPSELL_BANNER_POPOUT]: hP,
        [eG.RN.MOBILE_BANNER]: hM,
        [eG.RN.MOBILE_BACKGROUND]: hP,
        [eG.RN.MOBILE_HERO]: hM,
        [eG.RN.PDP_BACKGROUND]: hP,
        [eG.RN.LOGO]: hP,
        [eG.RN.TAB_TOOLTIP]: hP,
    },
    hU = [eG.Kx.COLLECTION],
    hG = [eG.Kx.AVATAR_DECORATIONS, eG.Kx.FRAMES, eG.Kx.NAMEPLATES, eG.Kx.PROFILE_EFFECTS];
async function hF(e) {
    let t = e.createReader(),
        a = await new Promise((e) => t.readEntries(e)),
        n = new Set();
    for (let e of a) e.isDirectory && n.add(e.name);
    let l = hU.filter((e) => !n.has(e));
    return (hG.some((e) => n.has(e)) || l.push(`at least one of: ${hG.join(", ")}`), l);
}
let hB = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/;
function h$(e) {
    let { names: t, addError: a } = e,
        n = t.filter((e) => !hB.test(e));
    n.length > 0 && a("File names must be in lowercase snake case", n);
}
function hV(e, t, a, n, l) {
    let i = t.size,
        s = i > 1e6 ? `${(i / 1e6).toFixed(2)}MB` : `${(i / 1e3).toFixed(2)}KB`,
        r = `${l ?? t.name} - ${s}`;
    if (i > e.max) {
        let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
        a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
    } else i > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
}
function hW(e, t, a, n) {
    let l = hL[e];
    if (null != l) for (let e of t) e.name.endsWith(".txt") || hV(l, e, a, n);
}
function hH(e) {
    let t = eG.aL[e];
    return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
}
let hz = ["png", "jpg"];
async function hK(e) {
    let t = URL.createObjectURL(e);
    try {
        return await (0, eG.Lv)(t);
    } finally {
        URL.revokeObjectURL(t);
    }
}
async function hY(e, t) {
    if (e.length < 2) return null;
    let a = (
        await Promise.all(
            e.map(async (e) => {
                try {
                    return t(await hK(e));
                } catch {
                    return null;
                }
            }),
        )
    ).filter((e) => null != e);
    return a.length < 2 || new Set(a).size <= 1 ? null : a;
}
function hq(e) {
    return e.map((e) => `${e}px`).join(", ");
}
async function hJ(e, t) {
    for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
        let e = new Map();
        for (let { file: t } of n.layerFiles) {
            let { parsed: a } = (0, hk.Mf)(t.name);
            if (a?.type !== hA.O.STAPLE) continue;
            let n = e.get(a.anchor) ?? [];
            (n.push(t), e.set(a.anchor, n));
        }
        for (let [n, l] of e) {
            let e = await hY(l, (e) => e.height);
            null != e &&
                t("Staples with the same anchor (top/bottom) must all have the same height", [
                    `${a} (${String(n).toUpperCase()}) - ${hq(e)}`,
                ]);
        }
    }
}
async function hQ(e, t) {
    for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
        let e = n.layerFiles
                .filter((e) => {
                    let { file: t } = e,
                        { parsed: a } = (0, hk.Mf)(t.name);
                    return a?.type === hA.O.STAPLE || a?.type === hA.O.BORDER || a?.type === hA.O.RAIL;
                })
                .map((e) => {
                    let { file: t } = e;
                    return t;
                }),
            l = await hY(e, (e) => e.width);
        null != l && t("All layers (staples, borders, rails) must have the same width", [`${a} - ${hq(l)}`]);
    }
}
var hX = a(275537);
let hZ = d.createContext({ setDropHandler: () => {} }),
    h0 = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    h1 = { id: "none", label: "[none selected]", value: null };
function h2() {
    (0, eY.hasModalOpen)(hf.k)
        ? (0, eY.closeModal)(hf.k)
        : (0, eY.openModalLazy)(
              async () => {
                  let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, o.jsx)(e, { ...t });
              },
              { modalKey: hf.k, onCloseRequest: () => (0, eY.closeModal)(hf.k) },
          );
}
function h3() {
    (0, eY.hasModalOpen)(hf.g)
        ? (0, eY.closeModal)(hf.g)
        : (0, eY.openModalLazy)(
              async () => {
                  let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, o.jsx)(e, { ...t });
              },
              { modalKey: hf.g, onCloseRequest: () => (0, eY.closeModal)(hf.g) },
          );
}
function h6() {
    let e = (0, eF.pF)(),
        { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, hb.JE)(),
        n = d.useMemo(() => [h1, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
    return 0 === e.length
        ? null
        : (0, o.jsxs)("div", {
              className: hX.kO,
              children: [
                  (0, o.jsx)(aV.h, { size: 16 }),
                  (0, o.jsxs)("div", {
                      className: hX.wR,
                      children: [
                          (0, o.jsx)(X.D, {
                              variant: "heading-sm/semibold",
                              children: `Profile Effect (${e.length} to preview)`,
                          }),
                          (0, o.jsx)(eH.K, {
                              variant: "icon-only",
                              size: "sm",
                              onClick: h3,
                              icon: hg.CircleQuestionIcon,
                              "aria-label": "Open PFX preview instructions",
                          }),
                      ],
                  }),
                  (0, o.jsx)(f.l, {
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
function h5() {
    let e = (0, hb.bA)(),
        { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, hb.JE)(),
        n = d.useMemo(() => [h1, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
    return 0 === e.length
        ? null
        : (0, o.jsxs)("div", {
              className: hX.kO,
              children: [
                  (0, o.jsx)(aV.h, { size: 16 }),
                  (0, o.jsx)(X.D, {
                      variant: "heading-sm/semibold",
                      children: `Profile Frame (${e.length} to preview)`,
                  }),
                  (0, o.jsx)(f.l, {
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
function h8() {
    let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, hb.JE)(),
        { avatarDecorationAssets: a } = (0, hb.NE)(),
        n = d.useMemo(() => [h1, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
    return 0 === a.length
        ? null
        : (0, o.jsxs)("div", {
              className: hX.kO,
              children: [
                  (0, o.jsx)(aV.h, { size: 16 }),
                  (0, o.jsx)(X.D, {
                      variant: "heading-sm/semibold",
                      children: `Avatar Decorations (${a.length} to preview)`,
                  }),
                  (0, o.jsx)(f.l, {
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
let h4 = new Set([eG.RN.HERO_BANNER_STATIC, eG.RN.HERO_BANNER_ANIMATED, eG.RN.HERO_BANNER_RIVE]);
function h7(e) {
    let { clearAssets: t, clearIgnoredFiles: a } = e,
        { collectionAssets: n } = (0, hb.NE)(),
        {
            deleteCollectionAsset: l,
            clearAssets: i,
            heroLogoMaxHeight: s,
            setHeroLogoMaxHeight: r,
            heroResponsive: c,
            setHeroResponsive: u,
        } = (0, hb.JE)(),
        m = d.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
        x = m.some((e) => e.value === eG.RN.HERO_LOGO),
        v = m.some((e) => h4.has(e.value)),
        j = d.useCallback((e) => l(e), [l]),
        f = d.useCallback(() => {
            (i(), t(), a());
        }, [i, t, a]);
    return 0 === m.length
        ? null
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(aV.h, { size: 16 }),
                  (x || v) &&
                      (0, o.jsxs)("div", {
                          className: hX.v7,
                          children: [
                              x &&
                                  (0, o.jsxs)("div", {
                                      className: hX.cj,
                                      children: [
                                          (0, o.jsx)(g.E, {
                                              variant: "text-md/normal",
                                              className: hX.Me,
                                              children: "Logo size",
                                          }),
                                          (0, o.jsx)(hv.G, {
                                              className: hX.TQ,
                                              minValue: 90,
                                              maxValue: 200,
                                              initialValue: s ?? 90,
                                              handleSize: 10,
                                              onValueChange: (e) => r(Math.round(e)),
                                              onValueRender: (e) => `${Math.round(e)}px`,
                                              "aria-label": "Hero logo max height",
                                          }),
                                          (0, o.jsx)(g.E, { variant: "text-sm/normal", children: `${s ?? 90}px` }),
                                      ],
                                  }),
                              v &&
                                  (0, o.jsxs)("div", {
                                      className: hX.sy,
                                      children: [
                                          (0, o.jsx)(h.d, { checked: c, onChange: u }),
                                          (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Responsive Hero" }),
                                      ],
                                  }),
                          ],
                      }),
                  (0, o.jsx)(aV.h, { size: 16 }),
                  (0, o.jsxs)("div", {
                      className: hX.wR,
                      children: [
                          (0, o.jsx)(X.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                          (0, o.jsx)(p.$, { variant: "critical-primary", size: "sm", onClick: f, text: "Clear All" }),
                      ],
                  }),
                  (0, o.jsx)("ul", {
                      children: m.map((e) =>
                          (0, o.jsxs)(
                              "li",
                              {
                                  className: hX._0,
                                  children: [
                                      (0, o.jsx)(eH.K, {
                                          variant: "icon-only",
                                          size: "sm",
                                          onClick: () => j(e.value),
                                          icon: ea.P,
                                          "aria-label": "Remove asset",
                                      }),
                                      (0, o.jsx)(g.E, { variant: "text-md/normal", children: e.label }),
                                  ],
                              },
                              e.value,
                          ),
                      ),
                  }),
              ],
          });
}
function h9(e) {
    let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
    return 0 === t.length
        ? null
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(aV.h, { size: 16 }),
                  (0, o.jsxs)("div", {
                      className: hX.wR,
                      children: [
                          (0, o.jsx)(X.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                          (0, o.jsx)(p.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                      ],
                  }),
                  (0, o.jsx)("ul", {
                      children: t.map((e, t) =>
                          (0, o.jsx)(
                              "li",
                              {
                                  className: hX.yk,
                                  children: (0, o.jsx)(g.E, { variant: "text-md/normal", children: e }),
                              },
                              `${e}-${t}`,
                          ),
                      ),
                  }),
              ],
          });
}
function xe() {
    let {
            validateShopAssetPackage: e,
            reset: t,
            validationComplete: a,
            warnings: n,
            errors: l,
        } = (function () {
            let [e, t] = d.useState(!1),
                [a, n] = d.useState({}),
                [l, i] = d.useState({}),
                s = d.useCallback(function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    i((a) => {
                        let n = a[e] ?? [];
                        return { ...a, [e]: [...n, ...t] };
                    });
                }, []),
                r = d.useCallback(function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    n((a) => {
                        let n = a[e] ?? [];
                        return { ...a, [e]: [...n, ...t] };
                    });
                }, []),
                o = d.useCallback(() => {
                    (t(!1), i({}), n({}));
                }, []);
            return {
                validationComplete: e,
                errors: l,
                warnings: a,
                validateShopAssetPackage: d.useCallback(
                    async (e) => {
                        try {
                            if (0 === e.length) return void s("No files found");
                            if (e.length > 1) return void s("Uploaded multiple files. Expected 1 directory.");
                            let t = e[0];
                            if (!t.isDirectory) return void s("Uploaded a file. Expected a directory.");
                            let a = await hF(t);
                            a.length > 0 && s("Missing required directories", a);
                            let n = await (0, eG.eg)([t]);
                            ((function (e) {
                                let { files: t, addError: a, addWarning: n } = e;
                                for (let e of t.collectionFiles) {
                                    let t = (0, eG.pd)(e),
                                        l = null != t ? hL[t] : null;
                                    null != l && hV(l, e, a, n);
                                }
                                h$({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                let l = new Set(t.collectionFiles.map((e) => (0, eG.pd)(e)).filter((e) => null != e)),
                                    i = Array.from(hD)
                                        .filter((e) => !l.has(e))
                                        .map(hH);
                                i.length > 0 && a("Missing required files", i);
                                let s = Object.values(eG.RN)
                                    .filter((e) => !hD.has(e))
                                    .filter((e) => !l.has(e))
                                    .map(hH);
                                s.length > 0 && n("Missing optional assets", s);
                            })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (h$({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                        Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                            let [t, l] = e,
                                                i = l.map((e) => e.name);
                                            (h$({
                                                names: i.map((e) => {
                                                    let t = e.indexOf("-");
                                                    return e.substring(0, t > 0 ? t : e.length);
                                                }),
                                                addError: a,
                                            }),
                                                hW(hI.J.PROFILE_EFFECT, l, a, n));
                                            let s = hT
                                                .filter((e) => !i.some((t) => t.startsWith(e) && t.endsWith(".png")))
                                                .map((e) => `${t}/${e}`);
                                            (s.length > 0 && a("Missing required PFX files with prefix", s),
                                                i.some((e) => e.endsWith(".txt")) ||
                                                    a(
                                                        "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                        [t],
                                                    ));
                                            let r = i
                                                .filter((e) => !hT.some((t) => e.startsWith(t)) && !e.endsWith(".txt"))
                                                .map((e) => `${t}/${e}`);
                                            r.length > 0 && n("Contains unrecognized files", r);
                                        }));
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (h$({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                        hW(hI.J.AVATAR_DECORATION, t.avatarDecorationFiles, a, n));
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e,
                                        l = Object.keys(t.profileFrameDirsMap)
                                            .filter((e) => !hB.test(e))
                                            .map((e) => `${eG.Kx.FRAMES}/${e}`);
                                    l.length > 0 && a("File names must be in lowercase snake case", l);
                                    let i = hL[hI.J.PROFILE_FRAME];
                                    Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                        let [t, l] = e,
                                            s = `${eG.Kx.FRAMES}/${t}`,
                                            r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                        ((null != l.previewFile && null != r && hz.includes(r)) ||
                                            a(
                                                "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                [`${s}/preview.{${hz.join("|")}}`],
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
                                            hB.test(l.previewFile.name) ||
                                            o.push(`${s}/${l.previewFile.name}`),
                                        l.layerFiles))
                                            hB.test(e.name) || o.push(`${s}/${t}/${e.name}`);
                                        o.length > 0 && a("File names must be in lowercase snake case", o);
                                        let d = [];
                                        for (let { file: e, folder: t } of l.layerFiles) {
                                            let { parsed: a, errorType: n } = (0, hk.Mf)(e.name);
                                            if (null == a) {
                                                let a = null != n ? hk.h4[n] : "invalid";
                                                d.push(`${s}/${t}/${e.name}: ${a}`);
                                            }
                                        }
                                        if ((d.length > 0 && a("Invalid profile frame layer filenames", d), null != i))
                                            for (let { file: e, folder: t } of (null != l.previewFile &&
                                                hV(i, l.previewFile, a, n, `${s}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                hV(i, e, a, n, `${s}/${t}/${e.name}`);
                                    });
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addWarning: a } = e;
                                    t.ignoredFilenames.length > 0 &&
                                        a("Contains unrecognized files", t.ignoredFilenames);
                                })({ files: n, addError: s, addWarning: r }),
                                await Promise.all([hJ(n, s), hQ(n, s)]));
                        } finally {
                            t(!0);
                        }
                    },
                    [s, r],
                ),
                reset: o,
            };
        })(),
        i = Object.entries(l),
        s = Object.entries(n),
        r = i.length > 0,
        c = s.length > 0,
        { setDropHandler: u } = d.useContext(hZ),
        m = d.useCallback(
            (a) => {
                (t(), e(a));
            },
            [e, t],
        );
    return (
        d.useEffect(() => {
            u(m);
        }, [m, u]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                a
                    ? (0, o.jsxs)("div", {
                          className: hX._f,
                          children: [
                              (0, o.jsx)(g.E, {
                                  variant: "text-md/normal",
                                  color: r ? "text-feedback-critical" : "text-default",
                                  children: `${i.length} errors`,
                              }),
                              (0, o.jsx)(g.E, {
                                  variant: "text-md/normal",
                                  color: c ? "text-feedback-warning" : "text-default",
                                  children: `${s.length} warnings`,
                              }),
                              (0, o.jsx)(p.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                          ],
                      })
                    : (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                (0, o.jsx)(aV.h, { size: 16 }),
                r &&
                    (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(X.D, { variant: "heading-lg/bold", children: "Errors" }),
                            (0, o.jsx)(aV.h, { size: 8 }),
                            (0, o.jsx)("ul", {
                                className: hX.ck,
                                children: i.map((e, t) => {
                                    let [a, n] = e;
                                    return (0, o.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, o.jsx)(g.E, {
                                                    variant: "text-md/bold",
                                                    color: "text-feedback-critical",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, o.jsx)("ul", {
                                                        className: hX.ck,
                                                        children: n.map((e, t) =>
                                                            (0, o.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, o.jsx)(g.E, {
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
                    (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(X.D, { variant: "heading-lg/bold", children: "Warnings" }),
                            (0, o.jsx)(aV.h, { size: 8 }),
                            (0, o.jsx)("ul", {
                                className: hX.ck,
                                children: Object.entries(n).map((e, t) => {
                                    let [a, n] = e;
                                    return (0, o.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, o.jsx)(g.E, {
                                                    variant: "text-md/bold",
                                                    color: "text-feedback-warning",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, o.jsx)("ul", {
                                                        className: hX.ck,
                                                        children: n.map((e, t) =>
                                                            (0, o.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, o.jsx)(g.E, {
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
function xt() {
    let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, hb.JE)(),
        { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: i, processAndUpsertAssets: s } = (0, eG.ds)(),
        { setDropHandler: r } = d.useContext(hZ),
        c = d.useCallback(
            (e) => {
                (a(), s(e));
            },
            [s, a],
        );
    return (
        d.useEffect(() => {
            r(c);
        }, [c, r]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)("div", {
                    className: hX.sy,
                    children: [
                        (0, o.jsx)(h.d, { checked: e, onChange: (e) => t(e) }),
                        (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Enable Preview" }),
                        (0, o.jsx)(eH.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: h2,
                            icon: hg.CircleQuestionIcon,
                            "aria-label": "Open preview instructions",
                        }),
                    ],
                }),
                (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Drop files in this panel to begin preview." }),
                (0, o.jsx)(h6, {}),
                (0, o.jsx)(h5, {}),
                (0, o.jsx)(h8, {}),
                (0, o.jsx)(h7, { clearAssets: l, clearIgnoredFiles: i }),
                (0, o.jsx)(h9, { ignoredFiles: n, handleClearIgnoredFiles: i }),
            ],
        })
    );
}
function xa() {
    let [e, t] = d.useState("preview");
    return (0, o.jsxs)("div", {
        className: hX.kL,
        children: [
            (0, o.jsx)(hj.I, {
                options: h0,
                value: e,
                onChange: (e) => {
                    let { value: a } = e;
                    return t(a);
                },
                className: hX.Vj,
                optionClassName: hX.UK,
            }),
            (0, o.jsx)(aV.h, { size: 8 }),
            "preview" === e && (0, o.jsx)(xt, {}),
            "validate" === e && (0, o.jsx)(xe, {}),
            (0, o.jsx)(aV.h, { size: 16 }),
        ],
    });
}
let xn = (e) => {
    let { children: t, onDrop: a } = e,
        n = d.useRef(() => {}),
        l = d.useMemo(
            () => ({
                setDropHandler: (e) => {
                    n.current = e;
                },
            }),
            [],
        ),
        i = d.useCallback(
            (e) => {
                (a?.(e), n.current(e));
            },
            [a],
        );
    return (0, o.jsx)(hZ.Provider, { value: l, children: (0, o.jsx)(hN, { onDrop: i, children: t }) });
};
var xl = a(663803),
    xi = a(815996),
    xs = a(335032);
function xr() {
    let e = (0, c.bG)([tI.A], () => tI.A.skipNumCategories);
    return (0, o.jsxs)("div", {
        className: xs.k,
        children: [
            (0, o.jsx)(g.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, o.jsx)(xl.l, {
                value: e,
                onChange: (e) => {
                    (0, xi.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
}
var xo =
        (((l = {}).DEFAULT = "default"),
        (l.ORB_TAB = "orb_tab"),
        (l.FRAMES = "frames"),
        (l.FRAMES_PINNED = "frames_pinned"),
        l),
    xd = a(295811);
function xc() {
    let e = (0, c.bG)([xd.A], () => xd.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(xo).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, o.jsx)(f.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, xi.Or)(e);
        },
        selectionMode: "single",
    });
}
function xu(e) {
    let { className: t } = e,
        a = Object.keys(aO.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == a
        ? null
        : (0, o.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, o.jsx)(lH, { items: [a] }) });
}
var xm = a(291052);
function xh(e) {
    let { title: t, expanded: a, onToggle: n, children: l } = e,
        i = d.useId();
    return (0, o.jsx)(ur.N, {
        isExpanded: a,
        className: xm.uW,
        collapsibleContent: (0, o.jsx)("div", { id: i, className: xm.f5, children: l }),
        children: () =>
            (0, o.jsxs)("button", {
                type: "button",
                onClick: n,
                "aria-expanded": a,
                "aria-controls": i,
                className: xm.bV,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-md/bold", children: t }),
                    (0, o.jsx)(sv._, { size: "sm", color: "currentColor", className: q()(xm.ai, { [xm.hg]: a }) }),
                ],
            }),
    });
}
function xx() {
    let e = (0, c.bG)([lQ.A], () => lQ.A.get("shop_disable_cache")),
        t = (0, c.bG)([lQ.A], () => lQ.A.get("shop_include_unpublished")),
        [a, n] = d.useState(new Set()),
        l = d.useCallback((e) => {
            n((t) => {
                let a = new Set(t);
                return (a.has(e) ? a.delete(e) : a.add(e), a);
            });
        }, []),
        i = d.useCallback(() => {
            n((e) => {
                if (e.has("assets")) return e;
                let t = new Set(e);
                return (t.add("assets"), t);
            });
        }, []);
    return (0, o.jsx)(xn, {
        onDrop: i,
        children: (0, o.jsxs)("div", {
            className: xm.Lm,
            children: [
                (0, o.jsxs)("div", {
                    className: xm.dQ,
                    children: [
                        (0, o.jsx)(h.d, {
                            label: "Disable collectibles cache",
                            checked: e,
                            onChange: (e) => (0, lJ.L)("shop_disable_cache", e),
                        }),
                        (0, o.jsx)(h.d, {
                            label: "Show unpublished collectibles",
                            checked: t,
                            onChange: (e) => (0, lJ.L)("shop_include_unpublished", e),
                        }),
                    ],
                }),
                (0, o.jsxs)(xh, {
                    title: "Layouts",
                    expanded: a.has("layouts"),
                    onToggle: () => l("layouts"),
                    children: [(0, o.jsx)(xu, {}), (0, o.jsx)(xc, {}), (0, o.jsx)(xr, {})],
                }),
                (0, o.jsx)(xh, {
                    title: "Assets",
                    expanded: a.has("assets"),
                    onToggle: () => l("assets"),
                    children: (0, o.jsx)(xa, {}),
                }),
            ],
        }),
    });
}
let xp = [
    { id: "unset", label: "Unset", value: c0.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
    { id: "all", label: "All", value: c0.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
    { id: "usersWithGame", label: "Users With Game", value: c0.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
    { id: "none", label: "None", value: c0.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
];
function xg() {
    let e = d.useRef(null),
        t = c3.TA.useSetting();
    return (0, o.jsx)("div", {
        ref: e,
        className: q()(tX.nd, ne.n),
        children: (0, o.jsxs)("div", {
            className: ne.k,
            children: [
                (0, o.jsx)(X.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, o.jsx)(f.l, {
                    label: "Receive DMs In Game",
                    options: xp,
                    value: t,
                    onSelectionChange: c3.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var xv = a(828596),
    xj = a(937427),
    xf = a(213682);
function xb() {
    let e = (0, c.bG)([xj.A], () => xj.A.getPromotionIdOverride()),
        [t, a] = d.useState(e ?? ""),
        n = d.useCallback(() => {
            (a(""), (0, xv.J_)(void 0));
        }, []),
        l = d.useCallback(() => {
            let e = t.trim();
            (0, xv.J_)("" !== e ? e : void 0);
        }, [t]),
        i = d.useCallback((e) => {
            a(e);
        }, []);
    return (0, o.jsxs)("div", {
        className: xf.k,
        children: [
            (0, o.jsx)(b.k, {
                fullWidth: !0,
                label: `Promotion ID Override (staff)${null != e ? ` \u{2014} active: ${e}` : ""}`,
                value: t,
                onChange: i,
                placeholder: "Paste a storefront promotion id",
            }),
            (0, o.jsxs)("div", {
                className: xf.o,
                children: [
                    (0, o.jsx)(p.$, { variant: "critical-primary", text: "Clear", onClick: n }),
                    (0, o.jsx)(p.$, { variant: "primary", text: "Set", onClick: l }),
                ],
            }),
        ],
    });
}
var xy = a(209612);
function xE() {
    return (0, o.jsx)("div", { className: xy.n, children: (0, o.jsx)(xb, {}) });
}
var xC = a(278416),
    xS = a(53938);
function x_(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function xN(e) {
    let { store: t, dataGetter: a } = e,
        [n, l] = d.useState(a(t));
    return (
        d.useEffect(() => {
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
        (0, o.jsx)(v.Ip, { className: xS.Dx, children: (0, o.jsx)(nr.A, { data: n }) })
    );
}
function xA(e) {
    let { store: t } = e,
        [a, n] = d.useState(() => JSON.stringify(t.__getLocalVars(), null, 2)),
        [l, i] = d.useState(null),
        s = d.useCallback(() => {
            (n(JSON.stringify(t.__getLocalVars(), null, 2)), i(null));
        }, [t]);
    d.useEffect(() => (t.addChangeListener(s), () => t.removeChangeListener(s)), [t, s]);
    let r = d.useCallback(() => {
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
                for (let e of n.preDispatches ?? []) tO.h.dispatch(e);
                (tO.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), s());
            } catch (e) {
                i(e instanceof Error ? e.message : String(e));
            }
        }, [a, t, s]),
        c = d.useCallback(() => {
            let e = t.__getLocalVarsEditConfig?.();
            if (e?.getPurgeVars == null) return void i("Store does not support purge");
            i(null);
            try {
                let t = e.getPurgeVars();
                for (let t of e.preDispatches ?? []) tO.h.dispatch(t);
                (tO.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), s());
            } catch (e) {
                i(e instanceof Error ? e.message : String(e));
            }
        }, [t, s]);
    return (0, o.jsxs)("div", {
        className: q()(xS.Dx, xS.Ef),
        children: [
            (0, o.jsx)("textarea", {
                className: xS.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, o.jsx)("div", { className: xS.Xf, role: "alert", children: l }),
            (0, o.jsxs)("div", {
                className: xS.KA,
                children: [
                    (0, o.jsx)(p.$, { variant: "primary", size: "sm", text: "Apply", onClick: r }),
                    (0, o.jsx)(p.$, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: s }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, o.jsx)(p.$, { variant: "secondary", size: "sm", text: "Purge store", onClick: c }),
                ],
            }),
        ],
    });
}
let xk = [
    {
        key: "Name",
        cellClassName: xS.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function xI(e) {
    let { store: t, initialHeight: a } = e,
        n = d.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: nh.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, o.jsxs)("div", {
                                      className: xS.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, o.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, o.jsx)(xN, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: nh.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, o.jsx)(xN, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: nh.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, o.jsxs)("div", {
                                      className: xS.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, o.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, o.jsx)(xA, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: i } = (0, nm.A)({ tabs: n }, []);
    return (0, o.jsxs)(nu, {
        className: xS.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, o.jsx)(l, {}),
            (0, o.jsxs)(ns.Ay, {
                className: q()(tX.jr, xS.nZ),
                children: [
                    (0, o.jsx)(ns.Ay.Icon, { icon: xC.TagIcon, tooltip: t.getName() }),
                    (0, o.jsx)(ns.Ay.Title, { children: t.getName() }),
                ],
            }),
            i({ store: t }),
        ],
    });
}
function xD() {
    let e = d.useRef(null),
        [t, a] = d.useState(""),
        n = c.il.getAll(),
        l = d
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(x_), [n])
            .filter((e) =>
                (function (e, t) {
                    let { store: a } = e;
                    return a.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [i, s] = d.useState(),
        r = n.find((e) => e._dispatchToken === i);
    return (0, o.jsxs)("div", {
        ref: e,
        className: q()(tX.nd, xS.nd),
        children: [
            (0, o.jsx)("div", {
                className: xS.KE,
                children: (0, o.jsx)(nK.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, o.jsx)(tZ, { columns: xk, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != r &&
                (0, o.jsx)(xI, { store: r, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, i),
        ],
    });
}
var xT = a(435462),
    xR = a(176781),
    xO = a(173936),
    xw = a(292801),
    xM = a(849516),
    xP = a(606096),
    xL = a(406810),
    xU = a(152367),
    xG = a(27232),
    xF = a(8062),
    xB = a(739187),
    x$ = a(378604);
let xV = {
        message: {},
        success: { variant: "success" },
        failure: { variant: "critical" },
        clip: { icon: xR.x },
        link: { icon: xO.LinkIcon },
        forward: { icon: xw.t, iconColor: eq.A.colors.ICON_FEEDBACK_POSITIVE },
        invite: { icon: xM.u, iconColor: eq.A.colors.ICON_BRAND },
        bookmark: { icon: xP.BookmarkIcon },
        clock: { icon: xL.ClockIcon },
        ai: { icon: xU.D },
        favorite: { icon: xG.StarIcon },
    },
    xW = Object.keys(xV),
    xH = xW.map((e) => ({ label: e, value: e, id: e })),
    xz = [
        { label: "top", value: "top", id: "top" },
        { label: "bottom", value: "bottom", id: "bottom" },
    ],
    xK = Object.values(em.BRT).map((e) => ({ label: e, value: e, id: e }));
function xY(e) {
    let { name: t, currentText: a, queueLength: n } = e,
        l = null != a;
    return (0, o.jsxs)("div", {
        className: q()(x$.M_, { [x$.wl]: l }),
        children: [
            (0, o.jsx)(X.D, { variant: "heading-sm/semibold", children: t }),
            (0, o.jsx)(g.E, {
                variant: "text-sm/normal",
                color: l ? "text-feedback-positive" : "text-muted",
                children: l ? `showing: \u{201C}${a}\u{201D}` : "idle",
            }),
            (0, o.jsxs)(g.E, { variant: "text-sm/normal", color: "text-muted", children: ["queued: ", n] }),
        ],
    });
}
function xq() {
    let [e, t] = d.useState("The quick brown fox jumps over the lazy dog"),
        [a, n] = d.useState("success"),
        [l, i] = d.useState("top"),
        [s, r] = d.useState(em.BRT.APP),
        [c, u] = d.useState(String(3e3)),
        m = xF.a[s],
        h = (0, xT.WE)((e) => e.currentToastMap.get(m)?.toast),
        x = (0, xT.WE)((e) => e.queuedToastsMap.get(m)?.length ?? 0);
    function g(e, t) {
        return { ...xV[t], text: e, surface: m, position: l, duration: Number(c) > 0 ? Number(c) : 3e3 };
    }
    return (0, o.jsxs)(v.Ip, {
        className: x$.l$,
        children: [
            (0, o.jsxs)("section", {
                className: x$.uW,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Toast store" }),
                    (0, o.jsx)("div", {
                        className: x$.zQ,
                        children: (0, o.jsx)(xY, { name: "Mana store", currentText: h?.text, queueLength: x }),
                    }),
                ],
            }),
            (0, o.jsxs)("section", {
                className: x$.uW,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Config" }),
                    (0, o.jsxs)("div", {
                        className: x$.ne,
                        children: [
                            (0, o.jsx)(b.k, { label: "Text", value: e, onChange: t }),
                            (0, o.jsx)(aE.Z, {
                                label: "Type",
                                options: xH,
                                value: a,
                                onSelectionChange: n,
                                selectionMode: "single",
                            }),
                            (0, o.jsx)(aE.Z, {
                                label: "Position",
                                options: xz,
                                value: l,
                                onSelectionChange: i,
                                selectionMode: "single",
                            }),
                            (0, o.jsx)(aE.Z, {
                                label: "App context",
                                options: xK,
                                value: s,
                                onSelectionChange: r,
                                selectionMode: "single",
                            }),
                            (0, o.jsx)(b.k, { label: "Duration (ms)", value: c, onChange: u, type: "number" }),
                        ],
                    }),
                ],
            }),
            (0, o.jsxs)("section", {
                className: x$.uW,
                children: [
                    (0, o.jsx)(X.D, { variant: "heading-md/semibold", children: "Show" }),
                    (0, o.jsxs)("div", {
                        className: x$.Uo,
                        children: [
                            (0, o.jsx)(p.$, {
                                variant: "primary",
                                text: "Show toast",
                                onClick: () => (0, l6.P0)(g(e, a)),
                            }),
                            (0, o.jsx)(p.$, {
                                variant: "secondary",
                                text: "Queue 3",
                                onClick: () => {
                                    ((0, l6.P0)(g(`${e} (1 of 3)`, a)),
                                        (0, l6.P0)(g(`${e} (2 of 3)`, a)),
                                        (0, l6.P0)(g(`${e} (3 of 3)`, a)));
                                },
                            }),
                            (0, o.jsx)(p.$, {
                                variant: "secondary",
                                text: "Every type",
                                onClick: () => {
                                    for (let t of xW) (0, l6.P0)(g(`${t}: ${e}`, t));
                                },
                            }),
                            (0, o.jsx)(p.$, { variant: "secondary", text: "Pop current", onClick: () => (0, xB.V)(s) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var xJ = a(91871),
    xQ = a.n(xJ);
let xX = [
        {
            key: "ID",
            cellClassName: la.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "Bucket",
            cellClassName: la.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "Timestamp",
            cellClassName: la.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    xZ = [
        {
            id: "details",
            name: "Details",
            group: nh.fu.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: a,
                            exposureType: n,
                            excluded: l,
                            timestamp: i,
                            location: s,
                            previouslyTracked: r,
                        },
                    } = e,
                    d = nB()(i);
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsxs)(ns.Ay, {
                            className: q()(tX.jr, la.nZ),
                            children: [
                                (0, o.jsx)(ns.Ay.Icon, { icon: nW.U, tooltip: t }),
                                (0, o.jsx)(ns.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, o.jsxs)(n9, {
                            className: la.ZK,
                            children: [
                                (0, o.jsx)(le, {
                                    name: "Timestamp (local)",
                                    children: (0, o.jsx)("time", {
                                        dateTime: i.toISOString(),
                                        title: (0, nX.i$)(d, "LLLL"),
                                        children: (0, nX.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, o.jsx)(le, {
                                        name: "Guild ID",
                                        children: (0, o.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, o.jsx)(le, {
                                    name: "Bucket",
                                    children: (0, o.jsx)("code", { children: a.bucket }),
                                }),
                                (0, o.jsx)(le, {
                                    name: "Revision",
                                    children: (0, o.jsx)("code", { children: a.revision }),
                                }),
                                (0, o.jsx)(le, { name: "Override", children: (0, o.jsx)(lt, { value: a.override }) }),
                                (0, o.jsx)(le, {
                                    name: "Exposure type",
                                    children: (0, o.jsx)("code", { children: n }),
                                }),
                                (0, o.jsx)(le, { name: "Excluded", children: (0, o.jsx)(lt, { value: l }) }),
                                (0, o.jsx)(le, { name: "Previously tracked", children: (0, o.jsx)(lt, { value: r }) }),
                                (0, o.jsx)(le, { name: "Location", children: (0, o.jsx)("code", { children: s }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function x0() {
    let [e, t] = d.useState(""),
        a = d.useRef(null),
        n = (0, c.yK)([n4], () => n4.loggedTriggers),
        l = d.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || xQ()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [i, s] = d.useState(void 0),
        r = l.find((e) => e.key === i),
        { TabBar: u, renderSelectedTab: m } = (0, nm.A)({ tabs: xZ }, []),
        h = (0, c.bG)([n4], () => n4.trackTriggers),
        x = d.useCallback((e) => {
            tO.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        p = h ? "Stop Tracking" : "Start Tracking";
    return (0, o.jsxs)("div", {
        ref: a,
        className: q()(tX.nd, la.nd),
        children: [
            (0, o.jsxs)("div", {
                className: la.rh,
                children: [
                    (0, o.jsx)(ic.m, {
                        text: p,
                        children: (0, o.jsx)(eH.K, {
                            size: "sm",
                            variant: h ? "active" : "primary",
                            icon: h ? im.PauseIcon : iu.PlayIcon,
                            "aria-label": p,
                            onClick: () => x(!h),
                        }),
                    }),
                    (0, o.jsx)(nK.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, o.jsx)(eH.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": n_.intl.string(n_.t.VkKicb),
                        icon: nz.TrashIcon,
                        onClick: Z.eY,
                    }),
                ],
            }),
            (0, o.jsx)(tZ, { columns: xX, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != r &&
                (0, o.jsxs)(nu, {
                    className: la.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, o.jsx)(u, {}), m({ loggedTrigger: r })],
                }),
        ],
    });
}
var x1 = a(324861),
    x2 = a(903162);
let x3 = function () {
        let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, x1.A)();
        return (0, o.jsx)("div", {
            className: x2.k,
            children: (0, o.jsxs)(m.n, {
                label: "Virtual Currency Configuration",
                description: "Click the button below to reset your onboarding state for Virtual Currency.",
                children: [
                    (0, o.jsx)("div", {
                        children: (0, o.jsx)(p.$, {
                            text: "Reset Onboarding State",
                            onClick: () => {
                                (e(), t(), (0, aZ.pX)(em.BVt.APP));
                            },
                        }),
                    }),
                    (0, o.jsx)(Q.w, {
                        type: "info",
                        message:
                            "Your may have to refresh your client after being redirected to the main application in order to see these",
                        role: "none",
                    }),
                ],
            }),
        });
    },
    x6 = [
        ["codecH264", "H264"],
        ["codecH265", "H265"],
        ["codecAv1", "AV1"],
    ],
    x5 = [
        ["encNvidiaDx11", "nvidia-dx11"],
        ["encNvidiaCuda", "nvidia-cuda"],
        ["encAmdDx11", "amd-dx11"],
        ["encIntelDx11", "intel-dx11"],
        ["encIntelCpu", "intel-cpu"],
        ["encWmfCpu", "wmf-cpu"],
        ["encWmfGpu", "wmf-gpu"],
        ["encWmfDx11", "wmf-dx11"],
    ],
    x8 = [
        ["capGraphicsCapture", "deny-graphics-capture", "whenFalse"],
        ["capDxgi", "deny-dxgi", "whenFalse"],
        ["capGdi", "deny-gdi", "whenFalse"],
        ["capVideoHook", "deny-video-hook", "whenFalse"],
        ["gdiForceBitblt", "gdi-force-bitblt", "whenTrue"],
        ["bypassHybridGpuFpsRestriction", "bypass-hybrid-gpu-fps", "whenTrue"],
        ["allowHdr", "deny-hdr", "whenFalse"],
    ],
    x4 = {
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
    x7 = { ...x4 };
function x9(e, t) {
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
let pe = !1;
function pt() {
    if (pe) return !0;
    if (!_.Ay.isEnabled()) return !1;
    try {
        let e = _.Ay.getMediaEngine();
        return (
            e.on(ou.bg.Connection, () => {
                nn.A.isDeveloper && pa();
            }),
            e.once(ou.bg.Destroy, () => {
                pe = !1;
            }),
            (pe = !0),
            !0
        );
    } catch {
        return !1;
    }
}
function pa() {
    if (nn.A.isDeveloper && pt())
        try {
            var e;
            let t =
                ((e = x7),
                {
                    overrideDeniedVideoCodecs: x9(e, x6),
                    overrideDeniedVideoEncoders: x9(e, x5),
                    captureOverrides: x8
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
            _.Ay.getMediaEngine().eachConnection((e) => {
                e.setAudioVideoOverridesTransport(t);
            });
        } catch {}
}
class pn extends c.Ay.DeviceSettingsStore {
    static displayName = "AudioVideoOverridesStore";
    static persistKey = "AudioVideoOverridesStore";
    initialize(e) {
        (this.waitFor(nn.A),
            (x7 = null != e ? { ...x4, ...e } : { ...x4 }),
            pa(),
            pe ||
                _.Ay.addChangeListener(function e() {
                    pt() && (pa(), _.Ay.removeChangeListener(e));
                }));
    }
    getUserAgnosticState() {
        return x7;
    }
    getSnapshot() {
        return x7;
    }
}
let pl = new pn(tO.h, {
    AUDIO_VIDEO_OVERRIDES_UPDATE: function (e) {
        if (!nn.A.isDeveloper) return !1;
        ((x7 = { ...x7, ...e.partial }), pa());
    },
});
var pi = a(731854);
let ps = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    pr = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    po = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    pd = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function pc(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, o.jsxs)(tY.B, {
        gap: 8,
        children: [
            (0, o.jsx)(g.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, o.jsx)(
                    oh.S,
                    {
                        label: a,
                        checked: !!n[t],
                        onChange: () => {
                            var e;
                            return (
                                (e = { [t]: !n[t] }),
                                void tO.h.dispatch({ type: "AUDIO_VIDEO_OVERRIDES_UPDATE", partial: e })
                            );
                        },
                    },
                    t,
                );
            }),
        ],
    });
}
function pu() {
    let e = (0, c.bG)([pl], () => pl.getSnapshot()),
        t = (0, c.bG)([_.Ay], () => _.Ay.supports(pi.O5.VIDEO));
    return (0, o.jsxs)(v.Ip, {
        className: tX.nd,
        children: [
            (0, o.jsx)(y.c, { gap: 16 }),
            (0, o.jsx)(pc, { title: "Video Codecs (Sender)", toggles: ps, state: e }),
            t
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(y.c, { gap: 16 }),
                          (0, o.jsx)(pc, { title: "Video Encoders", toggles: pr, state: e }),
                          (0, o.jsx)(y.c, { gap: 16 }),
                          (0, o.jsx)(pc, { title: "Capture Sources", toggles: po, state: e }),
                          (0, o.jsx)(y.c, { gap: 16 }),
                          (0, o.jsx)(pc, { title: "Capture Options", toggles: pd, state: e }),
                      ],
                  })
                : null,
        ],
    });
}
var pm = a(109445);
function ph() {
    let [e, t] = d.useState(""),
        [a, n] = d.useState(""),
        [l, i] = d.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        s = "processing" === l.status;
    return (0, o.jsx)(v.Ip, {
        className: tX.nd,
        children: (0, o.jsxs)("div", {
            className: pm.l7,
            children: [
                (0, o.jsx)(g.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, o.jsx)(g.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, o.jsxs)(tY.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, o.jsx)(b.k, {
                            fullWidth: !0,
                            value: e,
                            onChange: t,
                            placeholder: "Input directory (wav files)",
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await E.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, o.jsxs)(tY.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, o.jsx)(b.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, o.jsx)(p.$, {
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
                (0, o.jsx)(p.$, {
                    variant: s ? "critical-primary" : "primary",
                    text: s ? "Cancel" : "Start Processing",
                    onClick: s
                        ? function () {
                              (_.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  i((e) => ({ ...e, status: "cancelled" })));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (i({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  _.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, o.jsxs)(tY.B, {
                        gap: 4,
                        children: [
                            (0, o.jsxs)(g.E, {
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
                                    (0, o.jsx)(
                                        "div",
                                        {
                                            className: pm.TZ,
                                            children: (0, o.jsxs)(g.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? pm.$D : pm.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, o.jsxs)(g.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var px = a(207898),
    pp = a.n(px),
    pg = a(32880),
    pv = a(827343),
    pj = a(964486),
    pf = a(602674),
    pb = a(625841),
    py = a(74848),
    pE = a(913367);
function pC(e) {
    let { recording: t } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(g.E, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, o.jsxs)(g.E, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, o.jsxs)(g.E, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, o.jsxs)(g.E, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, o.jsxs)(g.E, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, o.jsxs)(g.E, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function pS(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, o.jsx)(ur.N, {
        collapsibleContent: (0, o.jsx)(pC, { recording: t }),
        children: (e) => {
            let { onClick: i } = e;
            return (0, o.jsxs)(J.D, {
                onClick: i,
                children: [
                    (0, o.jsxs)(g.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, o.jsx)(J.D, {
                        tag: "span",
                        onClick: (e) => {
                            (e.stopPropagation(), a ? l() : n(t));
                        },
                        children: a
                            ? (0, o.jsx)(im.PauseIcon, { size: "xxs" })
                            : (0, o.jsx)(iu.PlayIcon, { size: "xxs" }),
                    }),
                    (0, o.jsx)(J.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            (e.stopPropagation(),
                                (a = new Blob([pp()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n));
                        },
                        children: (0, o.jsx)(pg.DownloadIcon, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function p_() {
    let { name: e } = (0, py.x5)(pi.oh.AUDIO_INPUT),
        [t, a] = d.useState(!1),
        [n, l] = d.useState([]),
        i = (0, c.bG)([_.Ay], () => _.Ay.getKrispSuppressionLevel()),
        [s, r] = d.useState(null),
        u = d.useRef(null),
        m = d.useRef(null),
        [x, p] = d.useState(0.5),
        {
            krispModels: j,
            krispModelOverride: b,
            inputMode: y,
            echoCancellation: E,
            autoThreshold: C,
            vadUseKrisp: S,
            vadKrispActivationThreshold: N,
            noiseCancellation: A,
            noiseSuppression: k,
            noiseSuppressionSupported: I,
            noiseCancellationSupported: D,
            noiseCancellationEnableStats: T,
        } = (0, c.cf)([_.Ay], () => ({
            krispModels: _.Ay.getKrispModels(),
            krispModelOverride: _.Ay.getKrispModelOverride(),
            echoCancellation: _.Ay.getEchoCancellation(),
            autoThreshold: _.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: _.Ay.getModeOptions().vadUseKrisp,
            inputMode: _.Ay.getMode(),
            vadKrispActivationThreshold: _.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: _.Ay.getNoiseCancellation(),
            noiseSuppression: _.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: _.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: _.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: _.Ay.getKrispEnableStats(),
        })),
        R = A ? "KRISP" : k ? "STANDARD" : "NONE",
        O = (0, pf.v)(),
        w = d.useCallback(() => {
            (u.current?.stop(), (u.current = null), r(null));
        }, []);
    function M() {
        _.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function P(e) {
        if ((t && M(), w(), null == O)) return;
        let a = O.createBufferSource();
        ((a.buffer = e.audioBuffer),
            (m.current = O.createGain()),
            (m.current.gain.value = x),
            a.connect(m.current),
            m.current.connect(O.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            r(e));
    }
    (d.useEffect(() => {
        w();
    }, [w]),
        (0, pj.l0)(() => {
            pv.default.setMode(_.Ay.getMode(), { vadKrispActivationThreshold: void 0 });
        }));
    let L = [];
    return (
        D && L.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        I && L.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        L.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, o.jsx)(v.Ip, {
            className: tX.nd,
            children: (0, o.jsxs)("div", {
                className: pE.l,
                children: [
                    (0, o.jsx)(g.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, o.jsx)(pb.U, {
                        label: "Input Device",
                        deviceType: pi.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, o.jsx)(f.l, {
                        label: "Noise Cancellation",
                        value: R,
                        onSelectionChange: (e) => {
                            (pv.default.setNoiseCancellation("KRISP" === e),
                                pv.default.setNoiseSuppression("STANDARD" === e));
                        },
                        options: L,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === R &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(hv.G, {
                                    label: "Krisp Suppression Level",
                                    initialValue: i,
                                    onValueChange: pv.default.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, o.jsx)(f.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: b,
                                    options: j.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        pv.default.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, o.jsx)(h.d, {
                                    label: "Enable Stats",
                                    checked: T,
                                    onChange: (e) => pv.default.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    y === pi.TB.VOICE_ACTIVITY &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(h.d, {
                                    label: "Auto Threshold",
                                    checked: C,
                                    onChange: (e) => pv.default.setMode(pi.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                C &&
                                    (0, o.jsxs)(o.Fragment, {
                                        children: [
                                            (0, o.jsx)(h.d, {
                                                label: "Use Krisp VAD",
                                                checked: S,
                                                onChange: (e) =>
                                                    pv.default.setMode(pi.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            S &&
                                                (0, o.jsx)(hv.G, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: N,
                                                    onValueChange: (e) =>
                                                        pv.default.setMode(pi.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    (0, o.jsx)(h.d, {
                        label: "Echo Cancellation",
                        checked: E,
                        onChange: (e) => pv.default.setEchoCancellation(e),
                    }),
                    (0, o.jsxs)(tY.B, {
                        gap: 4,
                        children: [
                            (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, o.jsx)(n$.$n, {
                                color: t ? n$.$n.Colors.RED : n$.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          (w(),
                                              a(!0),
                                              pv.default.setLoopback("krisp_test", !0),
                                              _.Ay.getMediaEngine().startRecordingRawSamples((t, n, s) => {
                                                  (a(!1), pv.default.setLoopback("krisp_test", !1));
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
                    (0, o.jsx)(hv.G, {
                        label: "Volume",
                        initialValue: x,
                        asValueChanges: function (e) {
                            null != m.current && ((m.current.gain.value = e), p(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, o.jsxs)(tY.B, {
                        gap: 4,
                        children: [
                            (0, o.jsx)(g.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, o.jsx)(pS, { recording: e, playing: e === s, onPlay: P, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var pN = a(237528),
    pA = a(833473),
    pk = a(738566),
    pI = a(829997),
    pD = a(598939);
let pT = {
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
    pR = Object.entries(pT).map((e) => {
        let [t, { label: a }] = e;
        return { id: t, value: t, label: a };
    }),
    pO = d.createContext(null);
function pw(e) {
    let t = d.useContext(pO);
    if (null == t) throw Error("useSpatialAudioField must be used inside SpatialAudioEditorContext");
    return {
        value: e1().get(t.resolved, e),
        overridden: t.isOverridden(e),
        set: (a) => t.set(e, a),
        reset: () => t.reset(e),
    };
}
function pM(e, t) {
    let a = e1().cloneDeep(e),
        n = e1().toPath(t);
    e1().unset(a, n);
    for (let e = n.length - 1; e > 0; e--) {
        let t = n.slice(0, e);
        if (!e1().isEmpty(e1().get(a, t))) break;
        e1().unset(a, t);
    }
    return a;
}
function pP(e) {
    let { label: t, description: a, value: n, overridden: l, onReset: i, children: s } = e;
    return (0, o.jsxs)("div", {
        className: q()(pD.nM, { [pD.Je]: l }),
        children: [
            (0, o.jsxs)("div", {
                className: pD.uV,
                children: [
                    (0, o.jsx)(g.E, { variant: "text-md/medium", color: "text-strong", className: pD.xZ, children: t }),
                    null != n ? (0, o.jsx)(g.E, { variant: "code", color: "text-muted", children: n }) : null,
                    (0, o.jsx)(pL, { overridden: l, onReset: i, label: t }),
                ],
            }),
            null != a ? (0, o.jsx)(g.E, { variant: "text-xs/normal", color: "text-subtle", children: a }) : null,
            s,
        ],
    });
}
function pL(e) {
    let { overridden: t, onReset: a, label: n } = e;
    return (0, o.jsx)("div", {
        className: q()(pD.cL, { [pD.YF]: !t }),
        "aria-hidden": !t,
        children: (0, o.jsx)(l5.Q, {
            variant: "secondary",
            textVariant: "text-xs/medium",
            text: "Reset",
            "aria-label": `Reset ${n}`,
            disabled: !t,
            onClick: a,
        }),
    });
}
function pU(e) {
    let { path: t, label: a, description: n } = e,
        l = pw(t);
    return (0, o.jsxs)("div", {
        className: q()(pD.nM, pD.jC, { [pD.Je]: l.overridden }),
        children: [
            (0, o.jsx)("div", {
                className: pD.L$,
                children: (0, o.jsx)(h.d, { label: a, description: n, checked: l.value, onChange: l.set }),
            }),
            (0, o.jsx)(pL, { overridden: l.overridden, onReset: l.reset, label: a }),
        ],
    });
}
function pG(e) {
    let { path: t, label: a, description: n, min: l, max: i, step: s, decimals: r, unit: c = "" } = e,
        u = pw(t),
        [m, h] = d.useState(null),
        [x, p] = d.useState(u.value);
    function g(e) {
        return e1().clamp(Math.round(e / s) * s, l, i);
    }
    function v(e) {
        return `${e.toFixed(r)}${c}`;
    }
    x !== u.value && (p(u.value), h(null));
    let j = m ?? u.value;
    return (0, o.jsx)(pP, {
        label: a,
        description: n,
        value: v(j),
        overridden: u.overridden,
        onReset: u.reset,
        children: (0, o.jsx)(hv.G, {
            className: pD.aw,
            initialValue: u.value,
            value: j,
            minValue: l,
            maxValue: i,
            keyboardStep: s,
            asValueChanges: (e) => h(g(e)),
            onValueChange: (e) => {
                (h(null), u.set(g(e)));
            },
            onValueRender: (e) => v(g(e)),
            "aria-label": a,
        }),
    });
}
function pF(e) {
    let { label: t, value: a, onChange: n, min: l, max: i, step: s } = e,
        [r, c] = d.useState(null),
        [u, m] = d.useState(a);
    u !== a && (m(a), c(null));
    let h = r?.value != null;
    return (0, o.jsx)(nD.Q, {
        label: t,
        mode: "decimal",
        value: null != r ? r.value : a,
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
function pB(e) {
    let { keys: t, labels: a, value: n, onChange: l, min: i, max: s, step: r } = e;
    return (0, o.jsx)("div", {
        className: pD.uY,
        children: t.map((e) =>
            (0, o.jsx)(
                pF,
                { label: a[e], value: n[e], min: i, max: s, step: r, onChange: (t) => l({ ...n, [e]: t }) },
                e,
            ),
        ),
    });
}
let p$ = ["low", "mid", "high"],
    pV = { low: "Low", mid: "Mid", high: "High" },
    pW = ["x", "y", "z"],
    pH = { x: "X (m)", y: "Y (m)", z: "Z (m)" };
function pz(e) {
    let { path: t, label: a, description: n } = e,
        l = pw(t);
    return (0, o.jsx)(pP, {
        label: a,
        description: n,
        overridden: l.overridden,
        onReset: l.reset,
        children: (0, o.jsx)(pB, { keys: p$, labels: pV, value: l.value, onChange: l.set, min: 0, step: 1e-4 }),
    });
}
function pK(e) {
    let { path: t, label: a, description: n } = e,
        l = pw(t);
    return (0, o.jsx)(pP, {
        label: a,
        description: n,
        overridden: l.overridden,
        onReset: l.reset,
        children: (0, o.jsx)(pB, { keys: pW, labels: pH, value: l.value, onChange: l.set, step: 0.5 }),
    });
}
let pY = ["low", "mid", "high", "scattering"],
    pq = { low: "Absorb low", mid: "Absorb mid", high: "Absorb high", scattering: "Scattering" };
function pJ(e) {
    var t;
    let { path: a, label: n } = e,
        l = pw(a),
        { absorption: i, scattering: s } = l.value,
        r = ((t = l.value), Object.keys(pT).find((e) => e1().isEqual(pT[e].material, t)));
    return (0, o.jsxs)(pP, {
        label: n,
        value: null != r ? pT[r].label : "Custom",
        overridden: l.overridden,
        onReset: l.reset,
        children: [
            (0, o.jsx)(f.l, {
                label: `${n} preset`,
                hideLabel: !0,
                placeholder: "Custom",
                selectionMode: "single",
                options: pR,
                value: r,
                onSelectionChange: (e) => l.set(pT[e].material),
                fullWidth: !0,
            }),
            (0, o.jsx)(pB, {
                keys: pY,
                labels: pq,
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
function pQ() {
    let { value: e } = pw("reflections.room.minCorner"),
        { value: t } = pw("reflections.room.maxCorner"),
        a = t.x - e.x,
        n = t.y - e.y,
        l = t.z - e.z,
        i = a > 0 && n > 0 && l > 0;
    return (0, o.jsx)(g.E, {
        variant: "text-sm/normal",
        color: i ? "text-muted" : "text-feedback-critical",
        children: i
            ? `${a.toFixed(1)} \xd7 ${n.toFixed(1)} \xd7 ${l.toFixed(1)} m \xb7 floor ${(a * l).toFixed(1)} m\xb2`
            : "Every axis of the max corner must be greater than the min corner.",
    });
}
function pX(e) {
    let t,
        { overrideCount: a, onResetAll: n } = e,
        { supported: l, active: i } = (0, c.cf)([_.Ay, pA.A], () => ({
            supported: _.Ay.supports(pi.O5.SPATIAL_AUDIO),
            active: pA.A.isSpatialAudioActive(),
        }));
    return (
        (t = l
            ? i
                ? (0, o.jsx)(pN.v, { text: "Spatial on", variant: "greenLight" })
                : (0, o.jsx)(pN.v, { text: "Spatial off", variant: "grayLight" })
            : (0, o.jsx)(pN.v, { text: "Unsupported", variant: "redLight" })),
        (0, o.jsxs)(tY.B, {
            gap: 8,
            children: [
                (0, o.jsxs)(tY.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    wrap: !0,
                    children: [
                        (0, o.jsxs)(tY.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 8,
                            children: [
                                (0, o.jsx)(X.D, { variant: "heading-lg/semibold", children: "Spatial Audio" }),
                                t,
                                a > 0 ? (0, o.jsx)(pN.v, { text: `${a} overridden`, variant: "blurpleLight" }) : null,
                            ],
                        }),
                        (0, o.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: "Reset all",
                            disabled: 0 === a,
                            onClick: n,
                        }),
                    ],
                }),
                (0, o.jsx)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children:
                        "Live spatial audio overrides, layered over the defaults and the voice settings toggle. A spatial Frame replaces them when it starts and clears them when it stops. Fields and Reset compare against the selected profile. They apply immediately and last until the client reloads.",
                }),
                l
                    ? null
                    : (0, o.jsx)(g.E, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          children: "This media engine does not support spatial audio; changes here have no effect.",
                      }),
            ],
        })
    );
}
let pZ = "DevToolsSpatialAudioProfiles",
    p0 = "Default",
    p1 = e1().omit(pI.X, "isSpatial");
function p2(e, t) {
    if (!e1().isPlainObject(e)) return {};
    let a = {};
    for (let [n, l] of Object.entries(t)) {
        let t = e[n];
        if (e1().isPlainObject(l)) {
            let e = p2(t, l);
            e1().isEmpty(e) || (a[n] = e);
        } else typeof t == typeof l && ("number" != typeof t || Number.isFinite(t)) && (a[n] = t);
    }
    return a;
}
function p3(e, t) {
    return e1().merge(e1().cloneDeep(pI.X), { isSpatial: t }, e);
}
function p6(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pI.X;
    return Object.entries(a).reduce((a, n) => {
        let [l, i] = n,
            s = e1().get(e, l),
            r = e1().get(t, l);
        return !e1().isPlainObject(i) || ["x", "low", "absorption"].some((e) => e in i)
            ? a + +!e1().isEqual(s, r)
            : a + p6(s ?? {}, r ?? {}, i);
    }, 0);
}
let p5 = {};
function p8(e) {
    let {
            overrides: t,
            modified: a,
            profiles: { profiles: n, names: l, activeName: i, editableName: s, select: r, save: c, remove: u, add: m },
        } = e,
        [h, x] = d.useState(null);
    function g(e) {
        (c(e), x(null));
    }
    async function v() {
        try {
            let { name: e, settings: t } = (function (e) {
                let t = Uint8Array.from(atob(e.trim()), (e) => e.charCodeAt(0)),
                    a = JSON.parse(new TextDecoder().decode(t));
                if (!e1().isPlainObject(a)) throw Error("Not an exported profile");
                let { name: n, settings: l } = a;
                if ("string" != typeof n || !e1().isPlainObject(l)) throw Error("Not an exported profile");
                return { name: n.trim(), settings: p2(l, pI.X) };
            })(
                await (nl.isPlatformEmbedded
                    ? Promise.resolve(m2.Ay.readClipboard())
                    : window.navigator.clipboard.readText()),
            );
            (0, l6.P0)({ text: `Switched to imported profile "${m(e, t)}"`, variant: "success" });
        } catch {
            (0, l6.P0)({ text: "Clipboard does not hold an exported spatial audio profile", variant: "critical" });
        }
    }
    if (null != h) {
        let e = h.trim(),
            t = e === p0;
        return (0, o.jsxs)(tY.B, {
            direction: "horizontal",
            align: "end",
            gap: 8,
            children: [
                (0, o.jsx)("div", {
                    className: pD.km,
                    children: (0, o.jsx)(b.k, {
                        label: "Profile name",
                        value: h,
                        onChange: x,
                        autoFocus: !0,
                        error: t ? `${p0} is built in and can't be overwritten` : void 0,
                        onKeyDown: (a) => {
                            ("Enter" === a.key && e.length > 0 && !t && g(e), "Escape" === a.key && x(null));
                        },
                    }),
                }),
                (0, o.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    text: e in n ? "Overwrite" : "Save",
                    disabled: 0 === e.length || t,
                    onClick: () => g(e),
                }),
                (0, o.jsx)(p.$, { variant: "secondary", size: "sm", text: "Cancel", onClick: () => x(null) }),
            ],
        });
    }
    return (0, o.jsxs)(tY.B, {
        direction: "horizontal",
        align: "end",
        gap: 8,
        wrap: !0,
        children: [
            (0, o.jsx)("div", {
                className: pD.km,
                children: (0, o.jsx)(f.l, {
                    label: null != i && a ? "Profile (modified)" : "Profile",
                    placeholder: "Unsaved settings",
                    selectionMode: "single",
                    options: l.map((e) => ({ id: e, value: e, label: e })),
                    value: i,
                    onSelectionChange: r,
                    fullWidth: !0,
                }),
            }),
            (0, o.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Save",
                disabled: null == s || !a,
                onClick: () => null != s && g(s),
            }),
            (0, o.jsx)(p.$, { variant: "secondary", size: "sm", text: "Save as\u2026", onClick: () => x(s ?? "") }),
            (0, o.jsx)(p.$, {
                variant: "critical-secondary",
                size: "sm",
                text: "Delete",
                disabled: null == s,
                onClick: () => null != s && u(s),
            }),
            (0, o.jsx)(p.$, { variant: "secondary", size: "sm", text: "Import", onClick: v }),
            (0, o.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Export",
                onClick: function () {
                    var e;
                    let a;
                    (0, nQ.C)(
                        ((e = i ?? "Untitled"),
                        (a = e1().merge(e1().cloneDeep(p1), p2(t, pI.X))),
                        btoa(
                            String.fromCharCode(...new TextEncoder().encode(JSON.stringify({ name: e, settings: a }))),
                        )),
                        () => (0, l6.P0)({ text: "Copied spatial audio profile to clipboard", variant: "success" }),
                        () => (0, l6.P0)({ text: "Could not copy to clipboard", variant: "critical" }),
                    );
                },
            }),
        ],
    });
}
function p4() {
    let { overrides: e, spatialEnabled: t } = (0, c.cf)([pA.A], () => ({
            overrides: pA.A.getSpatialAudioOverrides(),
            spatialEnabled: pA.A.isSpatialAudioEnabled(),
        })),
        { enabled: a } = pk.A.useConfig({ location: "DevToolsSpatialAudioPanel" }),
        n = t && a,
        l = (function (e, t) {
            let [a, n] = d.useState(() => e1().omit(tK.w.get(pZ) ?? {}, p0)),
                l = [p0, ...Object.keys(a).sort((e, t) => e.localeCompare(t))];
            function i(e) {
                return e === p0 ? p5 : a[e];
            }
            let [s, r] = d.useState(() => {
                let a = p3(e, t);
                return l.find((e) => 0 === p6(a, p3(i(e), t)));
            });
            function o(e) {
                (n(e), tK.w.set(pZ, e));
            }
            return {
                profiles: a,
                names: l,
                activeName: s,
                baseline: (null != s ? i(s) : void 0) ?? p5,
                editableName: s === p0 ? void 0 : s,
                select(e) {
                    (r(e), pv.default.setSpatialAudioOverrides(e1().cloneDeep(i(e))));
                },
                save(t) {
                    (o({ ...a, [t]: e1().cloneDeep(e) }), r(t));
                },
                remove(e) {
                    (o(e1().omit(a, e)), r(void 0));
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
                    return (o({ ...a, [n]: t }), r(n), pv.default.setSpatialAudioOverrides(e1().cloneDeep(t)), n);
                },
            };
        })(e, n),
        { baseline: i } = l,
        s = d.useMemo(() => p3(e, n), [e, n]),
        r = d.useMemo(() => p3(i, n), [i, n]),
        u = p6(s, r),
        h = d.useMemo(
            () => ({
                resolved: s,
                isOverridden: (e) => !e1().isEqual(e1().get(s, e), e1().get(r, e)),
                set: (t, a) =>
                    pv.default.setSpatialAudioOverrides(
                        "isSpatial" !== t || e1().has(i, t) || a !== e1().get(r, t)
                            ? e1().set(e1().cloneDeep(e), t, a)
                            : pM(e, t),
                    ),
                reset: (t) =>
                    pv.default.setSpatialAudioOverrides(
                        e1().has(i, t) ? e1().set(e1().cloneDeep(e), t, e1().cloneDeep(e1().get(i, t))) : pM(e, t),
                    ),
            }),
            [e, i, s, r],
        );
    return (0, o.jsx)(v.Ip, {
        className: tX.nd,
        children: (0, o.jsx)(pO.Provider, {
            value: h,
            children: (0, o.jsxs)("div", {
                className: pD.kL,
                children: [
                    (0, o.jsx)(p8, { overrides: e, modified: u > 0, profiles: l }),
                    (0, o.jsx)(pX, {
                        overrideCount: u,
                        onResetAll: () => pv.default.setSpatialAudioOverrides(e1().cloneDeep(i)),
                    }),
                    (0, o.jsxs)(m.n, {
                        label: "Output",
                        children: [
                            (0, o.jsx)(pU, {
                                path: "isSpatial",
                                label: "Spatial audio",
                                description:
                                    "Overrides the voice settings toggle without saving it, bypassing the experiment. Still needs a supporting media engine.",
                            }),
                            (0, o.jsx)(pU, {
                                path: "limiterEnabled",
                                label: "Limiter",
                                description: "Runs the WebRTC limiter on the mixed output to keep it from clipping.",
                            }),
                        ],
                    }),
                    (0, o.jsxs)(m.n, {
                        label: "Binaural rendering",
                        children: [
                            (0, o.jsx)(pG, {
                                path: "binaural.spatialBlend",
                                label: "Spatial blend",
                                description: "0 plays sources unspatialized, 1 fully through the HRTF.",
                                min: 0,
                                max: 1,
                                step: 0.01,
                                decimals: 2,
                            }),
                            (0, o.jsx)(pG, {
                                path: "binaural.hrtfVolume",
                                label: "HRTF volume",
                                description: "Linear gain applied to the HRTF data. Rebuilds the HRTF.",
                                min: 0,
                                max: 2,
                                step: 0.05,
                                decimals: 2,
                                unit: "\xd7",
                            }),
                            (0, o.jsx)(pU, {
                                path: "binaural.bilinearInterpolation",
                                label: "Bilinear interpolation",
                                description:
                                    "Interpolate between HRTF measurements instead of snapping to the nearest. Smoother moving sources, more CPU.",
                            }),
                            (0, o.jsx)(pU, {
                                path: "binaural.hrtfNormalization",
                                label: "HRTF normalization",
                                description: "RMS-normalize the HRTF frequency response. Rebuilds the HRTF.",
                            }),
                        ],
                    }),
                    (0, o.jsxs)(m.n, {
                        label: "Distance attenuation",
                        children: [
                            (0, o.jsx)(pU, {
                                path: "distanceAttenuation.enabled",
                                label: "Enabled",
                                description: "Inverse-distance falloff.",
                            }),
                            (0, o.jsx)(pG, {
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
                    (0, o.jsxs)(m.n, {
                        label: "Air absorption",
                        children: [
                            (0, o.jsx)(pU, {
                                path: "airAbsorption.enabled",
                                label: "Enabled",
                                description: "Frequency-dependent damping over distance.",
                            }),
                            (0, o.jsx)(pz, {
                                path: "airAbsorption.coefficients",
                                label: "Coefficients",
                                description: "Exponential decay per metre, per band.",
                            }),
                        ],
                    }),
                    (0, o.jsxs)(m.n, {
                        label: "Reflections",
                        children: [
                            (0, o.jsx)(pU, {
                                path: "reflections.enabled",
                                label: "Enabled",
                                description: "Simulate room reverb per source.",
                            }),
                            (0, o.jsx)(pG, {
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
                            (0, o.jsx)(pG, {
                                path: "reflections.durationSeconds",
                                label: "IR duration",
                                description: "Length of the simulated impulse response.",
                                min: 0.1,
                                max: 2,
                                step: 0.05,
                                decimals: 2,
                                unit: " s",
                            }),
                            (0, o.jsx)(pG, {
                                path: "reflections.numRays",
                                label: "Rays",
                                description: "Rays traced per simulation run.",
                                min: 64,
                                max: 4096,
                                step: 64,
                                decimals: 0,
                            }),
                            (0, o.jsx)(pG, {
                                path: "reflections.numBounces",
                                label: "Bounces",
                                description: "Reflections followed per ray.",
                                min: 1,
                                max: 64,
                                step: 1,
                                decimals: 0,
                            }),
                            (0, o.jsx)(pG, {
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
                            (0, o.jsx)(pU, {
                                path: "reflections.binauralDecode",
                                label: "Binaural decode",
                                description: "Decode the ambisonic reverb through the HRTF rather than panning it.",
                            }),
                        ],
                    }),
                    (0, o.jsxs)(m.n, {
                        label: "Room",
                        children: [
                            (0, o.jsx)(pQ, {}),
                            (0, o.jsx)(pK, { path: "reflections.room.minCorner", label: "Min corner" }),
                            (0, o.jsx)(pK, { path: "reflections.room.maxCorner", label: "Max corner" }),
                            (0, o.jsx)(pJ, { path: "reflections.room.floor", label: "Floor" }),
                            (0, o.jsx)(pJ, { path: "reflections.room.ceiling", label: "Ceiling" }),
                            (0, o.jsx)(pJ, { path: "reflections.room.walls", label: "Walls" }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var p7 = a(803306),
    p9 = a(243217),
    ge = a(189213),
    gt = a(543767),
    ga = a(19886);
let gn = [
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
function gl() {
    let [e, t] = d.useState(!1),
        a = (0, c.bG)([eo.default], () => eo.default.getCurrentUser()),
        n = (0, ga.Lh)(),
        l = (0, c.bG)([op.A], () => op.A.getPremiumTypeSubscription()),
        i = null != n ? (tM.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        s = d.useCallback(
            async (e) => {
                let n = new Date();
                (e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2));
                let i = {
                    subscription_status: em.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: uS.default.fromTimestamp(n.getTime()),
                };
                (t(!0),
                    await it.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: i, rejectWithError: (0, it.fT)() }),
                    await (0, p7.eO)(a.id),
                    await (0, d8.hP)(),
                    t(!1));
            },
            [l, a],
        );
    if (null != a && null != l)
        return (0, o.jsx)(f.l, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: e,
            value: i,
            options: gn,
            onSelectionChange: s,
        });
}
var gi =
        (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"),
        (i[(i.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (i[(i.FAILURE = 2)] = "FAILURE"),
        (i[(i.NONE = 3)] = "NONE"),
        i),
    gs =
        (((s = {})[(s.REWIND = 1)] = "REWIND"),
        (s[(s.RENEW = 2)] = "RENEW"),
        (s[(s.CANCEL = 3)] = "CANCEL"),
        (s[(s.UNCANCEL = 4)] = "UNCANCEL"),
        (s[(s.TIME_TRAVEL = 5)] = "TIME_TRAVEL"),
        (s[(s.RESET = 6)] = "RESET"),
        (s[(s.PAY_INVOICE = 7)] = "PAY_INVOICE"),
        (s[(s.END = 8)] = "END"),
        (s[(s.RESUME = 9)] = "RESUME"),
        s);
async function gr(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: i } = a;
    return (
        await it.Bo.post({
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
var go = a(601107);
let gd = {
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
    gc = {
        [go.qf.UNKNOWN]: "Unknown",
        [go.qf.ADMIN]: "Admin",
        [go.qf.USER]: "User",
        [go.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [go.qf.DEFERRED_START]: "Deferred Start",
        [go.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    gu = [
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
function gm(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [i, s] = d.useState(nB()()),
        [r, c] = d.useState(nB()().format("HH:mm")),
        [u, h] = d.useState(!1),
        [x, p] = d.useState(void 0);
    async function v() {
        if (null == i) return void p("Please select a target date");
        let [e, l] = r.split(":").map(Number),
            s = i.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
        (h(!0), p(void 0));
        try {
            (await gr(t.id, gs.TIME_TRAVEL, { targetDate: s, paymentType: gi.DEFAULT, sendReminderEmail: !1 }),
                n(),
                a());
        } catch (e) {
            p(e.body?.message || e.message || "Failed to time travel");
        } finally {
            h(!1);
        }
    }
    return (0, o.jsx)(ge.a, {
        transitionState: l,
        onClose: function () {
            return (a(), Promise.resolve());
        },
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: v, disabled: u || null == i },
        ],
        children: (0, o.jsxs)(tY.B, {
            gap: 16,
            children: [
                (0, o.jsx)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, o.jsx)(sU.J, { label: "Target Date", value: i, onSelect: s }),
                (0, o.jsx)(m.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, o.jsx)("input", {
                        type: "time",
                        value: r,
                        onChange: function (e) {
                            c(e.target.value);
                        },
                        className: oF.Qn,
                    }),
                }),
                (0, o.jsxs)(tY.B, {
                    gap: 8,
                    children: [
                        (0, o.jsx)(g.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, o.jsxs)(tY.B, {
                            gap: 4,
                            children: [
                                (0, o.jsxs)(g.E, {
                                    variant: "text-xs/normal",
                                    className: oF.JX,
                                    children: ["Start: ", nB()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, o.jsxs)(g.E, {
                                    variant: "text-xs/normal",
                                    className: oF.JX,
                                    children: ["End: ", nB()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != x && (0, o.jsx)(Q.w, { type: "critical", message: x, role: "alert" }),
            ],
        }),
    });
}
function gh(e) {
    let { subscription: t } = e,
        [a] = (0, gt.C8)({
            subscriptionId: null != t ? t.id : "",
            preventFetch: null == t || t.status !== em.Dmq.PAST_DUE,
        }),
        { analyticsLocations: n } = (0, np.Ay)(tk.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return t.status !== em.Dmq.PAST_DUE
        ? null
        : (0, o.jsx)(p.$, {
              variant: "critical-primary",
              text: "Open Past Due Checkout",
              size: "sm",
              disabled: null == a,
              onClick: () => {
                  null != a &&
                      (0, cl.A)({ initialPlanId: t.planIdFromItems, openInvoiceId: a.id, analyticsLocations: n });
              },
          });
}
let gx = [
    { id: "us", label: "United States (USD)", value: "US" },
    { id: "gb", label: "United Kingdom (GBP)", value: "GB" },
    { id: "de", label: "Germany (EUR)", value: "DE" },
    { id: "mx", label: "Mexico (MXN)", value: "MX" },
    { id: "jp", label: "Japan (JPY)", value: "JP" },
];
function gp(e) {
    let { subscription: t } = e,
        [a, n] = d.useState(!1),
        [l, i] = d.useState(null),
        [s, r] = d.useState("DE");
    if (t.status !== em.Dmq.PAST_DUE) return null;
    function c(e) {
        return e?.body?.message ?? e?.message ?? "Something went wrong";
    }
    async function u() {
        n(!0);
        try {
            (await it.Bo.post({ url: `/debug/subscriptions/${t.id}/send-past-due-email`, rejectWithError: !0 }),
                i({
                    type: "success",
                    message: "Dunning email sent, check your inbox and click the link there.",
                    role: "status",
                }));
        } catch (e) {
            i({ type: "critical", message: c(e), role: "alert" });
        }
        n(!1);
    }
    async function m() {
        n(!0);
        try {
            let { link: e } = (
                await it.Bo.post({ url: `/debug/subscriptions/${t.id}/past-due-magic-link`, rejectWithError: !0 })
            ).body;
            (await navigator.clipboard.writeText(e),
                i({ type: "success", message: "Link copied to clipboard.", role: "status" }));
        } catch (e) {
            i({ type: "critical", message: c(e), role: "alert" });
        }
        n(!1);
    }
    async function h() {
        n(!0);
        try {
            (await it.Bo.post({ url: "/debug/store-country", body: { country: s }, rejectWithError: !0 }),
                i({ type: "success", message: `Store country set to ${s}.`, role: "status" }));
        } catch (e) {
            i({ type: "critical", message: c(e), role: "alert" });
        }
        n(!1);
    }
    return (0, o.jsxs)(tY.B, {
        gap: 8,
        children: [
            (0, o.jsx)(g.E, { variant: "text-sm/bold", children: "Magic Link Testing" }),
            (0, o.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Send Dunning Email Now",
                disabled: a,
                onClick: u,
            }),
            (0, o.jsx)(p.$, { variant: "secondary", size: "sm", text: "Copy Link Instead", disabled: a, onClick: m }),
            (0, o.jsx)(f.l, {
                label: "Store Country",
                hideLabel: !0,
                value: s,
                options: gx,
                onSelectionChange: r,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, o.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Set Store Country (Void + Reissue Invoice)",
                disabled: a,
                onClick: h,
            }),
            null != l && (0, o.jsx)(Q.w, { type: l.type, message: l.message, role: l.role }),
        ],
    });
}
function gg(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [i, s] = d.useState(!1),
        [r, c] = d.useState(!1),
        [u, h] = d.useState(!1),
        [x, v] = d.useState(!1),
        [j, b] = d.useState(null);
    function y(e) {
        let t = new Date(e);
        return uS.default.fromTimestamp(t.getTime());
    }
    async function E(e) {
        let { status: t = n.status, premiumStreakStart: a, endedAt: i } = e,
            s = {
                subscription_status: t,
                ...(null != a ? { premium_streak_started_at: y(a) } : null),
                ...(null != i ? { ended_at: y(i) } : null),
            };
        (await it.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: s, rejectWithError: !1 }), l());
    }
    async function C() {
        try {
            await gr(n.id, gs.RENEW, { targetDate: nB()(new Date()), paymentType: gi.DEFAULT, sendReminderEmail: !1 });
        } catch (e) {
            b(e.body?.message || e.message || "Failed to renew subscription");
        }
        l();
    }
    async function S() {
        try {
            await gr(n.id, gs.RENEW, { targetDate: nB()(new Date()), paymentType: gi.FAILURE, sendReminderEmail: !1 });
        } catch (e) {
            b(e.body?.message || e.message || "Failed to simulate failed renewal");
        }
        l();
    }
    let _ = tM.hd[n.planIdFromItems]?.premiumType === tM.PremiumTypes.TIER_0,
        N = n.metadata?.ended_at,
        A = null != N ? new Date(N).toISOString().substring(0, 10) : "",
        k = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in gd) ? gd[t] : `Unknown status ${t}`}`,
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
                label: `Dates: ${(0, nX.i$)(n.createdAt, "LL")} - ${(0, nX.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === em.Dmq.PAUSED &&
            k.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in gc ? gc[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, o.jsx)("div", {
            className: q()(iV.Nr, _ ? iV.Qf : iV.C1),
            children: (0, o.jsxs)(m.n, {
                label: `Type: ${null == (a = n.planIdFromItems) ? "No plan id" : a in tM.hd ? tM.hd[a].name : `Unknown plan id ${a}`}`,
                className: oF.lI,
                children: [
                    (0, o.jsx)(oU.C, { items: k, label: "Subscription details" }),
                    I &&
                        (0, o.jsxs)("div", {
                            className: oF.VK,
                            children: [
                                (0, o.jsxs)(J.D, {
                                    onClick: function () {
                                        h(!u);
                                    },
                                    className: oF.Eh,
                                    children: [
                                        (0, o.jsx)("div", {
                                            children: (0, o.jsx)(g.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, o.jsx)(iM.A, { direction: u ? iM.A.Directions.UP : iM.A.Directions.DOWN }),
                                    ],
                                }),
                                u &&
                                    (0, o.jsxs)("ul", {
                                        className: oF.j3,
                                        children: [
                                            (0, o.jsxs)("li", {
                                                children: [
                                                    (0, o.jsx)(g.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, o.jsx)(g.E, { variant: "text-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, o.jsxs)("li", {
                                                children: [
                                                    (0, o.jsx)(g.E, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, o.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, nX.i$)(n.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    D &&
                        (0, o.jsxs)("div", {
                            className: oF.VK,
                            children: [
                                (0, o.jsxs)(J.D, {
                                    onClick: function () {
                                        v(!x);
                                    },
                                    className: oF.Eh,
                                    children: [
                                        (0, o.jsx)("div", {
                                            children: (0, o.jsx)(g.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, o.jsx)(iM.A, { direction: x ? iM.A.Directions.UP : iM.A.Directions.DOWN }),
                                    ],
                                }),
                                x &&
                                    (0, o.jsxs)("ul", {
                                        className: oF.j3,
                                        children: [
                                            (0, o.jsxs)("li", {
                                                children: [
                                                    (0, o.jsx)(g.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, o.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, o.jsxs)("li", {
                                                children: [
                                                    (0, o.jsx)(g.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, o.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, nX.i$)(
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
                        (0, o.jsxs)("div", {
                            className: oF.VK,
                            children: [
                                (0, o.jsxs)(J.D, {
                                    onClick: function () {
                                        s(!i);
                                    },
                                    className: oF.Eh,
                                    children: [
                                        (0, o.jsx)("div", {
                                            children: (0, o.jsx)(g.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, o.jsx)(iM.A, { direction: i ? iM.A.Directions.UP : iM.A.Directions.DOWN }),
                                    ],
                                }),
                                i &&
                                    (0, o.jsx)("ul", {
                                        className: oF.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, o.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, o.jsx)(g.E, { variant: "text-md/bold", children: t }),
                                                        (0, o.jsx)(g.E, { variant: "text-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, o.jsxs)("div", {
                        className: oF.VK,
                        children: [
                            (0, o.jsxs)(J.D, {
                                onClick: function () {
                                    c(!r);
                                },
                                className: oF.Eh,
                                children: [
                                    (0, o.jsx)("div", {
                                        children: (0, o.jsx)(g.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, o.jsx)(iM.A, { direction: r ? iM.A.Directions.UP : iM.A.Directions.DOWN }),
                                ],
                            }),
                            r &&
                                (0, o.jsxs)(tY.B, {
                                    gap: 24,
                                    children: [
                                        (0, o.jsx)(f.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: gu,
                                            onSelectionChange: (e) => {
                                                E({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, o.jsxs)("div", {
                                            children: [
                                                (0, o.jsxs)(tY.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, o.jsx)(p.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => C(),
                                                        }),
                                                        (0, o.jsx)(p.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Simulate Failed Renewal (Past Due)",
                                                            onClick: (e) => S(),
                                                        }),
                                                        (0, o.jsx)(gh, { subscription: n }),
                                                        (0, o.jsx)(gp, { subscription: n }),
                                                        (0, o.jsx)(p.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, eY.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, o.jsx)(gm, {
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
                                                null !== j &&
                                                    (0, o.jsx)("div", {
                                                        className: oF.z3,
                                                        children: (0, o.jsx)(Q.w, {
                                                            type: "critical",
                                                            message: j,
                                                            role: "alert",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, o.jsxs)(tY.B, {
                                            gap: 16,
                                            children: [
                                                (0, o.jsx)(sU.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: nB()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => E({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, o.jsx)(gl, {}),
                                            ],
                                        }),
                                        (0, o.jsx)(sU.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== A ? nB()(A) : void 0,
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
async function gv() {
    return (
        await it.Bo.get({
            url: em.Rsh.BILLING_SUBSCRIPTIONS,
            query: { include_inactive: !0, limit: 5 },
            rejectWithError: (0, it.fT)(),
        })
    ).body.map((e) => p9.A.createFromServer(e));
}
let gj = [
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
function gf() {
    let e = (0, c.bG)([op.A], () => op.A.getPremiumTypeSubscription()),
        t = (0, c.bG)([eo.default], () => eo.default.getCurrentUser()),
        [a, n] = d.useState("511651880837840896"),
        [l, i] = d.useState([]),
        [s, r] = d.useState(!1),
        u = d.useCallback(async () => {
            try {
                (r(!0), await (0, d8.hP)(), await (0, p7.eO)(t.id), i(await gv()));
            } finally {
                r(!1);
            }
        }, [t]);
    d.useEffect(() => {
        u();
    }, [u]);
    let m = d.useMemo(() => l.filter((e) => e.status !== em.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]);
    async function h() {
        (await it.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: (0, it.fT)() }),
            await u());
    }
    async function x() {
        (await it.Bo.del({ url: "/debug/subscription", rejectWithError: (0, it.fT)() }), await u());
    }
    return (0, o.jsx)(v.Ip, {
        className: tX.nd,
        children: (0, o.jsxs)("div", {
            className: iV.l$,
            children: [
                (0, o.jsxs)("div", {
                    className: iV.dL,
                    children: [
                        (0, o.jsx)(X.D, {
                            variant: "heading-lg/semibold",
                            className: tX.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, o.jsx)(eH.K, {
                            "aria-label": "Refresh",
                            icon: iw.RefreshIcon,
                            size: "sm",
                            variant: "icon-only",
                            disabled: s,
                            onClick: u,
                        }),
                    ],
                }),
                (0, o.jsx)("section", {
                    className: q()([iV.uW, iV.Uo]),
                    children:
                        null == e &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(f.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: gj,
                                    onSelectionChange: n,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, o.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: h,
                                }),
                            ],
                        }),
                }),
                null != e && (0, o.jsx)(gg, { subscription: e, onUpdated: u }),
                (0, o.jsx)(X.D, { variant: "heading-lg/semibold", className: tX.wx, children: "Bulk Actions" }),
                (0, o.jsx)("section", {
                    className: q()([iV.uW, iV.Uo]),
                    children: (0, o.jsx)(p.$, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: x,
                    }),
                }),
                m.length > 0 &&
                    (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(X.D, {
                                variant: "heading-lg/semibold",
                                className: tX.wx,
                                children: "Previous Subscriptions",
                            }),
                            m.map((e) => (0, o.jsx)(gg, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var gb = a(284009),
    gy = a.n(gb),
    gE = a(889137),
    gC = a(323889),
    gS = a(412703),
    g_ = a(440703),
    gN = a(267548),
    gA = a(668824),
    gk = a(695366),
    gI = a(993077),
    gD = a(738822),
    gT = a(801365),
    gR = a(792620),
    gO = a(557637),
    gw = a(875845),
    gM = a(717695),
    gP = a(322338),
    gL = a(127219),
    gU = a(262514),
    gG = a(976014),
    gF = a(317097),
    gB = a(452027),
    g$ = a(265872),
    gV = a(714385),
    gW = a(581244);
let gH = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        i = d.useRef(null);
    return (0, o.jsx)(gB.D, {
        label: l,
        children: (0, o.jsx)(g$.Y, {
            targetElementRef: i,
            renderPopout: (e) => (0, o.jsx)(ud.VN, { ...e, value: a, onChange: (e) => n(t, (0, gF.Hl)(e)) }),
            children: (e) =>
                (0, o.jsx)(J.D, {
                    ...e,
                    innerRef: i,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: gW.O6,
                    style: { backgroundColor: a },
                    children: (0, o.jsx)(gV.d, { size: "xs", color: "currentColor", className: gW.WY }),
                }),
        }),
    });
};
var gz = a(346055);
let gK = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, o.jsx)(gz.M, {
        children: (0, o.jsx)(gI.Z, {
            className: q()(gW.Rx, { [gW.aK]: n }),
            outline: n,
            children: (0, o.jsx)("div", {
                className: gW.AZ,
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
var gY = a(643374);
let gq = function (e) {
        let { assetKey: t, filters: a, initialValue: n, onFileChange: l, title: i } = e,
            [s, r] = d.useState(null),
            c = d.useRef(null);
        return (
            d.useEffect(
                () => () => {
                    null != c.current && URL.revokeObjectURL(c.current);
                },
                [],
            ),
            (0, o.jsx)(gB.D, {
                label: i,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, o.jsx)(gY.A, {
                    filename: s?.name ?? n ?? "",
                    filters: [{ name: i, extensions: a }],
                    buttonText: "Browse",
                    placeholder: "Select an asset",
                    onFileSelect: function (e) {
                        if ((r(e ?? null), null == e)) return;
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
    gJ = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: n, title: l } = e,
            [i, s] = d.useState("");
        return (
            d.useEffect(() => {
                s(a ?? "");
            }, [a]),
            (0, o.jsx)(b.k, {
                label: l,
                value: i,
                onChange: function (e) {
                    (s(e), n(t, e));
                },
            })
        );
    };
var gQ = a(77870);
let gX = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, gQ.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
        l = [
            { id: "none", label: "NONE", value: null },
            ...n.map((e) => ({ id: e.id, label: e.config.messages.questName, value: e })),
        ];
    return (0, o.jsx)(f.l, {
        label: "Prefill with Quest",
        options: l,
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
var gZ = a(843282),
    g0 = a(714269);
let g1 = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    g2 = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, o.jsxs)(tY.B, {
            gap: 20,
            children: [
                (0, o.jsx)(gZ.Pw, {
                    label: "Task Type(s)",
                    className: g0.Z,
                    placeholder: "Select Task Preset",
                    options: g1,
                    renderOptionValue: (e) => e.map((e) => (0, o.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, o.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, i, s, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = gS.n.PLAY_ON_PLAYSTATION in t || gS.n.PLAY_ON_XBOX in t),
                            (l = gS.n.PLAY_ON_DESKTOP in t),
                            (i = gS.n.STREAM_ON_DESKTOP in t),
                            (s = gS.n.WATCH_VIDEO in t),
                            (r = gS.n.PLAY_ACTIVITY in t),
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
                                        a[gS.n.STREAM_ON_DESKTOP] = { type: gS.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[gS.n.PLAY_ON_DESKTOP] = { type: gS.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        ((a[gS.n.PLAY_ON_PLAYSTATION] = {
                                            type: gS.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[gS.n.PLAY_ON_XBOX] = {
                                                type: gS.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 4:
                                        ((a[gS.n.PLAY_ON_DESKTOP] = { type: gS.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[gS.n.PLAY_ON_PLAYSTATION] = {
                                                type: gS.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[gS.n.PLAY_ON_XBOX] = {
                                                type: gS.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 2:
                                        a[gS.n.WATCH_VIDEO] = {
                                            type: gS.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[gS.n.PLAY_ACTIVITY] = { type: gS.n.PLAY_ACTIVITY, target: t };
                                }
                                return a;
                            })(e, a),
                        });
                    },
                    serialize: String,
                    "data-migration-pending": !0,
                }),
                (0, o.jsx)(b.k, {
                    label: "Task Duration",
                    value: String(a / di.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= di.A.Seconds.MINUTE;
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
    },
    g3 = function () {
        let e = (0, eg.Ay)();
        return (0, o.jsx)(gB.D, {
            label: "Theme",
            children: (0, o.jsxs)("div", {
                style: { display: "flex", justifyContent: "space-between" },
                children: [
                    (0, o.jsx)(ev.zy, {
                        theme: uK.NJ.LIGHT,
                        isSelected: e === uK.NJ.LIGHT,
                        onSelect: () => (0, c5.u_)({ theme: uK.NJ.LIGHT }),
                    }),
                    (0, o.jsx)(ev.zy, {
                        theme: uK.NJ.DARK,
                        isSelected: e === uK.NJ.DARK,
                        onSelect: () => (0, c5.u_)({ theme: uK.NJ.DARK }),
                    }),
                ],
            }),
        });
    };
var g6 =
    (((r = {})[(r.UNENROLLED = 0)] = "UNENROLLED"),
    (r[(r.ENROLLED = 1)] = "ENROLLED"),
    (r[(r.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (r[(r.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (r[(r.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (r[(r.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (r[(r.CLAIMED = 6)] = "CLAIMED"),
    r);
let g5 = function (e) {
    let { onChange: t, value: a } = e;
    return (0, o.jsx)(f.l, {
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
var g8 = a(617986);
let g4 = ["png", "gif", "webp"],
    g7 = [...g4, "jpg", "jpeg"],
    g9 = Array.from(new Set([...g7, "gif", "mp4", "webm"]));
function ve() {
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
let vt = "1193992107035983872",
    va = {
        id: vt,
        preview: !0,
        config: {
            id: vt,
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
                        type: g_.l.REWARD_CODE,
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
                joinOperator: gA.K.AND,
                tasks: {
                    [gS.n.PLAY_ON_DESKTOP]: { type: gS.n.PLAY_ON_DESKTOP, target: 300, applications: [{ id: "123" }] },
                },
            },
            features: [],
            sharePolicy: gN.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function vn() {
    var e;
    let [t, n] = d.useState(va),
        l = d.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [i, s] = d.useState(g6.UNENROLLED),
        [r, c] = d.useState(!1),
        [u, m] = d.useState(!1),
        [x, j] = d.useState(null),
        f =
            ((e = t.config),
            (0, gE.YW)(e)
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
                    (0, gE.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function y(e, a) {
        let n = t.config.taskConfigV2.tasks,
            i = n[gS.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [gS.n.WATCH_VIDEO]: { ...i, assets: s } } },
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
                    (0, gE.YW)(n)
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
                    (0, gE.YW)(i)
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
        (0, gT.tU)(t.config) && (0, g8.hJ)(t, gD.uF.GIFT_INVENTORY_FOR_YOU, gD.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = d.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * di.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = d.useMemo(() => gS.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    gy()(!1 !== t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[gS.n.WATCH_VIDEO];
    return (0, o.jsxs)(v.Ip, {
        className: gW.kL,
        children: [
            (0, o.jsx)(X.D, { variant: "heading-lg/bold", className: gW.R_, children: "Quest Preview Tool" }),
            (0, o.jsx)("div", {
                className: gW.OA,
                children: (0, o.jsx)(gX, {
                    onSelect: function (e) {
                        (j(e),
                            null == e ||
                                (s(
                                    (function (e) {
                                        if (null == e.userStatus) return g6.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return g6.CLAIMED;
                                        if (null != e.userStatus.completedAt) return g6.COMPLETED_100;
                                        let t = (0, gR.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? g6.COMPLETED_100
                                            : a / n >= 0.75
                                              ? g6.COMPLETED_75
                                              : a / n >= 0.5
                                                ? g6.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? g6.COMPLETED_25
                                                  : g6.ENROLLED;
                                    })(e),
                                ),
                                l(e)));
                    },
                    quest: x,
                }),
            }),
            (0, o.jsx)(X.D, { variant: "heading-md/semibold", className: gW.fV, children: "Task Config" }),
            (0, o.jsx)("div", {
                className: gW.OA,
                children: (0, o.jsx)(g2, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, o.jsx)(X.D, { variant: "heading-md/semibold", className: gW.fV, children: "Messages" }),
            (0, o.jsxs)("div", {
                className: gW.OA,
                children: [
                    (0, o.jsx)(gJ, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: E,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, o.jsx)(gJ, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: E,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, o.jsx)(gJ, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: E,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, o.jsx)(gJ, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    i = n[gS.n.WATCH_VIDEO];
                                if (null == i) return;
                                let s = { ...i.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [gS.n.WATCH_VIDEO]: { ...i, messages: s } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, o.jsx)(X.D, { variant: "heading-md/semibold", className: gW.fV, children: "Assets" }),
            (0, o.jsxs)("div", {
                className: gW.OA,
                children: [
                    (0, o.jsx)(gq, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: b,
                        filters: g9,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, o.jsx)(gq, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: b,
                        filters: g9,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, o.jsx)(gq, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: b,
                        filters: g9,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, o.jsx)(gq, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: b,
                        filters: g9,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, o.jsx)(gq, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: b,
                        filters: [...g7, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, o.jsx)(gq, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: b,
                        filters: [...g4, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(gq, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: y,
                                    filters: g9,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, o.jsx)(gq, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: y,
                                    filters: g9,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, o.jsx)(gq, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: y,
                                    filters: g7,
                                    initialValue: k?.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            f.map((e, a) =>
                (0, o.jsxs)(
                    "div",
                    {
                        children: [
                            (0, o.jsxs)(X.D, {
                                variant: "heading-md/semibold",
                                className: gW.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, o.jsxs)("div", {
                                className: gW.OA,
                                children: [
                                    (0, o.jsx)(gJ, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, o.jsx)(gJ, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== g_.l.VIRTUAL_CURRENCY &&
                                        (0, o.jsx)(gq, {
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
                                                                (0, gE.YW)(i)
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
                                            filters: g9,
                                            initialValue: e.asset,
                                        }),
                                    (0, o.jsxs)(tY.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, o.jsx)(X.D, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, o.jsx)(p.$, {
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
            (0, o.jsx)(X.D, { variant: "heading-md/semibold", className: gW.fV, children: "Colors & Quest States" }),
            (0, o.jsxs)("div", {
                className: gW.OA,
                children: [
                    (0, o.jsxs)("div", {
                        className: gW.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, o.jsx)(gH, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: S,
                                value: t.config.colors.primary,
                            }),
                            (0, o.jsx)(gH, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: S,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, o.jsx)("div", { className: gW.OA, children: (0, o.jsx)(g3, {}) }),
                    (0, o.jsx)(g5, {
                        onChange: function (e) {
                            switch ((s(e), e)) {
                                case g6.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case g6.ENROLLED:
                                    l({ ...t, userStatus: ve({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case g6.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: ve({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case g6.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: ve({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case g6.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: ve({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case g6.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: ve({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case g6.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: ve({
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
            (0, o.jsx)(X.D, { variant: "heading-lg/bold", className: gW.R_, children: "Component Previews" }),
            (0, o.jsxs)("div", {
                className: gW.$$,
                children: [
                    (0, o.jsxs)(gK, {
                        withBorder: !0,
                        children: [
                            (0, o.jsx)(X.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, o.jsxs)("div", {
                                className: gW.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, o.jsx)(g.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, o.jsx)("div", {
                                        className: gW.ok,
                                        children: (0, o.jsx)(gO.y5, {
                                            isPreview: !0,
                                            source: "preview",
                                            adCreativeId: "0",
                                            adCreativeType: gC.p.QUEST,
                                            children: (0, o.jsx)(gM.A, {
                                                children: (0, o.jsx)(gw.QuestBarQuestContent, { quest: t }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, o.jsxs)(gK, {
                        withBorder: !0,
                        children: [
                            (0, o.jsx)(X.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, o.jsx)(gO.y5, {
                                isPreview: !0,
                                source: "preview",
                                adCreativeId: "0",
                                adCreativeType: gC.p.QUEST,
                                children: (0, o.jsx)(gG.Ay, {
                                    quest: t,
                                    className: gW.d,
                                    questContent: gD.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: gD.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, o.jsxs)(gK, {
                        withBorder: !0,
                        children: [
                            (0, o.jsx)(X.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, o.jsx)(g.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, o.jsx)("div", {
                                className: gW.l4,
                                children: (0, o.jsx)(gO.y5, {
                                    isPreview: !0,
                                    source: "preview",
                                    adCreativeId: "0",
                                    adCreativeType: gC.p.QUEST,
                                    children: (0, o.jsx)("div", {
                                        className: gW.Jr,
                                        children: (0, o.jsx)(gP.A, {
                                            channelId: "123",
                                            previewQuest: t,
                                            isParticipatingOverride: r,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, o.jsx)("div", {
                        className: gW.NY,
                        children: (0, o.jsx)(h.d, {
                            label: "Is Participating:",
                            checked: r,
                            onChange: function (e) {
                                c(e);
                            },
                        }),
                    }),
                    (0, o.jsxs)(gK, {
                        withBorder: !0,
                        children: [
                            (0, o.jsx)(X.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            u
                                ? (0, o.jsx)(gL.l, { questId: t.id })
                                : (0, o.jsx)(
                                      gU.M,
                                      {
                                          quest: t,
                                          location: gD.uF.QUESTS_EMBED,
                                          sourceQuestContent: gD.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, o.jsx)("div", {
                        className: gW.NY,
                        children: (0, o.jsx)(h.d, { label: "Invalid Quests Embed:", checked: u, onChange: m }),
                    }),
                    A &&
                        (0, o.jsxs)(gK, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, o.jsx)(X.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, o.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, eY.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("651585"),
                                                a.e("955628"),
                                                a.e("382040"),
                                                a.e("36334"),
                                                a.e("974119"),
                                                a.e("392868"),
                                                a.e("258427"),
                                                a.e("263408"),
                                                a.e("77375"),
                                                a.e("182045"),
                                                a.e("479907"),
                                                a.e("119580"),
                                            ]).then(a.bind(a, 834135));
                                            return (a) =>
                                                (0, o.jsx)(n, {
                                                    ...a,
                                                    openStartClockTime: e,
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: gD.uF.INTERNAL_PREVIEW_TOOL,
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
class vl extends d.Component {
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
            ? (0, o.jsxs)("div", {
                  className: gW.TA,
                  children: [
                      (0, o.jsx)(gk.E, { className: gW.Yw }),
                      (0, o.jsx)(X.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, o.jsx)(p.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, o.jsx)(gI.Z, {
                              className: gW.Fx,
                              children: (0, o.jsx)("code", { className: gW.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, o.jsx)(vn, {}, t);
    }
}
var vi = a(913122),
    vs = a(839214),
    vr = a(108088),
    vo = a(450827),
    vd = a(626584),
    vc = a(174768),
    vu = a(205761),
    vm = a(860071),
    vh = a(696451),
    vx = a(926140);
let vp = new vd.A("SearchDebugUtils");
function vg() {
    vp.info("--------------------------");
}
function vv() {
    let e = vc.A.getProps();
    (vp.info("START Quick Switcher State"),
        vp.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((vp.info(`Result Type: ${e.type}`), e.type)) {
                case vx.rD.GUILD:
                    vp.info(`guild id: ${e.record.id}`);
                    break;
                case vx.rD.TEXT_CHANNEL:
                case vx.rD.VOICE_CHANNEL:
                    (vp.info(`channel type: ${e.record.type}`),
                        vp.info(`channel id: ${e.record.id}`),
                        vp.info(`name: ${e.record.name}`));
                    break;
                case vx.rD.DM:
                    (vp.info(`channel type: ${e.record.type}`),
                        vp.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (vp.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = eo.default.getUser(e);
                                null != t &&
                                    (vp.info(`recipient username: ${t.username}`),
                                    vp.info(`recipient global name: ${ex.Ay.getGlobalName(t)}`),
                                    vp.info(`recipient nickname: ${az.A.getNickname(t.id)}`));
                            })));
                    break;
                case vx.rD.GROUP_DM:
                    (vp.info(`channel type: ${e.record.type}`),
                        vp.info(`channel id: ${e.record.id}`),
                        vp.info(`name: ${(0, aW.m1)(e.record, eo.default, az.A)}`),
                        e.record.isGroupDM() &&
                            (vp.info(`default name: ${(0, aW.ks)(e.record, eo.default, az.A)}`),
                            vp.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = eo.default.getUser(e);
                                null != t &&
                                    (vp.info(`recipient username: ${t.username}`),
                                    vp.info(`recipient global name: ${ex.Ay.getGlobalName(t)}`),
                                    vp.info(`recipient nickname: ${az.A.getNickname(t.id)}`));
                            })));
                    break;
                case vx.rD.USER:
                    (vp.info(`user id: ${e.record.id}`),
                        vp.info(`username: ${e.record.username}`),
                        vp.info(`global name: ${ex.Ay.getGlobalName(e.record)}`),
                        vp.info(`nickname: ${az.A.getNickname(e.record.id)}`),
                        vp.info(`guild nicknames: ${vh.Ay.getNicknames(e.record.id)}`));
            }
            (vp.info(`frecency score: ${vu.A.getScoreWithoutFetchingLatest(e.record.id)}`), vg());
        }),
        vp.info("END Quick Switcher State\n"));
}
async function vj() {
    vp.info("START User Search Worker State");
    let e = await vo.A.requestDebugState();
    null == e
        ? vp.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              (vp.info(`id: ${t}`),
                  vp.info(`username: ${a.username}`),
                  vp.info(`global name: ${a.globalName}`),
                  vp.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      (vp.info(`guild id: ${t}`), vp.info(`guild nickname: ${a}`));
                  }),
                  vg());
          }),
          vp.info("END User Search Worker State\n"));
}
async function vf() {
    let e = await vo.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = eo.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = uS.default.keys(a),
        i = [];
    return (
        l.forEach((e) => {
            n.has(e) || i.push(e);
        }),
        i
    );
}
async function vb(e) {
    let t = await vo.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = nE.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = vh.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let i = vm.A.getDebugState(e);
    return { user: eo.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: i };
}
var vy = a(143919);
function vE(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: i } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(p.$, {
                variant: "primary",
                onClick: l,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : i,
            }),
            null != n &&
                (0, o.jsx)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: vy.qS,
                    children: n,
                }),
            a &&
                (0, o.jsx)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: vy.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let vC = (0, vs.D)(() => ({
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
function vS() {
    let e = vC.useField("includeFrecency"),
        t = vC.useField("includeFriends"),
        a = vC.useField("includeDMs"),
        n = vC.useField("includeGDMs"),
        l = vC.useField("includeQuickSwitcherState"),
        i = vC.useField("includeUserSearchWorkerState"),
        s = vC.useField("isUploading"),
        r = vC.useField("isSuccess"),
        c = vC.useField("errorMessage"),
        u = d.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: i,
                isUploading: s,
            } = vC.getState();
            if (!s)
                try {
                    let s, r, o, d, c, u, m, h, x, p, g, v;
                    (vC.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((s = az.A.getFriendIDs()),
                            vp.info("START Discord Friends"),
                            s.forEach((e) => {
                                let t = eo.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = ex.Ay.getGlobalName(t),
                                    l = az.A.getNickname(t.id),
                                    i = vh.Ay.getNicknames(t.id);
                                (vp.info(`username: ${a}`),
                                    vp.info(`global name: ${n}`),
                                    vp.info(`nickname: ${l}`),
                                    vp.info(`guild nicknames: ${i}`),
                                    vg());
                            }),
                            vp.info("END Discord Friends\n")),
                        a &&
                            ((r = aH.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                (e.isGroupDM() && o.push(e), e.isDM() && d.push(e));
                            }),
                            vp.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, aW.m1)(e, eo.default, az.A),
                                    a = (0, aW.ks)(e, eo.default, az.A);
                                (vp.info(`id: ${e.id}`),
                                    vp.info(`name: ${t}`),
                                    vp.info(`default name: ${a}`),
                                    vp.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = eo.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ex.Ay.getGlobalName(t),
                                            l = az.A.getNickname(t.id),
                                            i = vh.Ay.getNicknames(t.id);
                                        (vp.info(`username: ${a}`),
                                            vp.info(`global name: ${n}`),
                                            vp.info(`nickname: ${l}`),
                                            vp.info(`guild nicknames: ${i}`),
                                            vg());
                                    }));
                            }),
                            vp.info("END Logging Group DM Channels\n"),
                            vp.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, aW.m1)(e, eo.default, az.A);
                                (vp.info(`id: ${e.id}`), vp.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = eo.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = ex.Ay.getGlobalName(n),
                                    s = az.A.getNickname(n.id);
                                (vp.info(`username: ${l}`),
                                    vp.info(`global name: ${i}`),
                                    vp.info(`nickname: ${s}`),
                                    vg());
                            }),
                            vp.info("END Logging DM Channels\n")),
                        n &&
                            ((c = aH.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                (e.isGroupDM() && u.push(e), e.isDM() && m.push(e));
                            }),
                            vp.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, aW.m1)(e, eo.default, az.A),
                                    a = (0, aW.ks)(e, eo.default, az.A);
                                (vp.info(`id: ${e.id}`),
                                    vp.info(`name: ${t}`),
                                    vp.info(`default name: ${a}`),
                                    vp.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = eo.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ex.Ay.getGlobalName(t),
                                            l = az.A.getNickname(t.id),
                                            i = vh.Ay.getNicknames(t.id);
                                        (vp.info(`username: ${a}`),
                                            vp.info(`global name: ${n}`),
                                            vp.info(`nickname: ${l}`),
                                            vp.info(`guild nicknames: ${i}`),
                                            vg());
                                    }));
                            }),
                            vp.info("END Logging Group DM Channels\n"),
                            vp.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, aW.m1)(e, eo.default, az.A);
                                (vp.info(`id: ${e.id}`), vp.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = eo.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = ex.Ay.getGlobalName(n),
                                    s = az.A.getNickname(n.id);
                                (vp.info(`username: ${l}`),
                                    vp.info(`global name: ${i}`),
                                    vp.info(`nickname: ${s}`),
                                    vg());
                            }),
                            vp.info("END Logging DM Channels\n")),
                        e &&
                            ((h = vu.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, uC.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            vp.info("START Frecency"),
                            vp.info("Guilds"),
                            x.forEach((e) => {
                                let t = vu.A.getScoreWithoutFetchingLatest(e.id);
                                vp.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            vg(),
                            vp.info("DM Channels"),
                            g.forEach((e) => {
                                let t = vu.A.getScoreWithoutFetchingLatest(e.id);
                                vp.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            vg(),
                            vp.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = vu.A.getScoreWithoutFetchingLatest(e.id);
                                (vp.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    vp.info(`default name: ${(0, aW.ks)(e, eo.default, az.A)}`),
                                    vp.info(`name: ${(0, aW.m1)(e, eo.default, az.A)}`));
                            }),
                            vg(),
                            vp.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = vu.A.getScoreWithoutFetchingLatest(e.id);
                                vp.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            vg(),
                            vp.info("END Frecency\n")),
                        l && vv(),
                        i && vj(),
                        await (0, vr.a)(em.Umv.WEB_APP),
                        vC.setState({ isSuccess: !0, errorMessage: null }));
                } catch (t) {
                    let e = new vi.LG(t);
                    vC.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    vC.setState({ isUploading: !1 });
                }
        }, []);
    return (0, o.jsxs)(m.n, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, o.jsx)(h.d, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => vC.setState({ includeFrecency: !e }),
            }),
            (0, o.jsx)(h.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => vC.setState({ includeFriends: !t }),
            }),
            (0, o.jsx)(h.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => vC.setState({ includeDMs: !a }),
            }),
            (0, o.jsx)(h.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => vC.setState({ includeGDMs: !n }),
            }),
            (0, o.jsx)(h.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => vC.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, o.jsx)(h.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: i,
                onChange: () => vC.setState({ includeUserSearchWorkerState: !i }),
            }),
            (0, o.jsx)(vE, {
                isUploading: s,
                isSuccess: r,
                errorMessage: c,
                onClick: u,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let v_ = (0, vs.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function vN() {
    let e = v_.useField("userIds"),
        t = v_.useField("isLoading"),
        a = v_.useField("isSuccess"),
        n = v_.useField("errorMessage"),
        l = v_.useField("lastRunAt"),
        i = d.useCallback(async () => {
            v_.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await vf();
                v_.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                v_.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                v_.setState({ isLoading: !1 });
            }
        }, []),
        s = d.useMemo(
            () =>
                e.map((e) => {
                    let t = eo.default.getUser(e),
                        a = null != t ? ex.Ay.getName(t) : "Unknown";
                    return (0, o.jsx)(
                        "div",
                        {
                            className: vy.J1,
                            children: (0, o.jsx)(g.E, { variant: "text-md/normal", children: `${a} (${e})` }),
                        },
                        e,
                    );
                }),
            [e],
        );
    return (0, o.jsx)(m.n, {
        label: "Diff User State",
        description: "Click to generate a diff between the client user state and the user worker state.",
        children: (0, o.jsxs)("div", {
            children: [
                (0, o.jsx)(p.$, { onClick: i, text: "Diff User State", loading: t, disabled: t }),
                (0, o.jsxs)("div", {
                    className: vy.N6,
                    children: [
                        null != n &&
                            (0, o.jsx)(g.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: vy.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(g.E, { variant: "text-md/normal", children: `Last run at: ${l}` }),
                                    (0, o.jsx)(g.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, o.jsx)("div", { className: vy.uk, children: s }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, o.jsx)(g.E, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let vA = (0, vs.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function vk() {
    let e = vA.useField("isRecording"),
        t = vA.useField("isUploading"),
        a = vA.useField("isSuccess"),
        n = vA.useField("errorMessage"),
        l = d.useRef([]),
        i = d.useRef(""),
        s = d.useCallback(() => {
            let { results: e, query: t } = vc.A.getProps();
            (l.current !== e || i.current !== t) && ((l.current = e), (i.current = t), vv());
        }, []);
    d.useEffect(() => {
        if (e) return (vc.A.addChangeListener(s), () => vc.A.removeChangeListener(s));
    }, [s, e]);
    let r = d.useCallback(async () => {
        let { isUploading: e } = vA.getState();
        if (!e)
            try {
                (vA.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, vr.a)(em.Umv.WEB_APP),
                    vA.setState({ isSuccess: !0, errorMessage: null }));
            } catch (t) {
                let e = new vi.LG(t);
                vA.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                vA.setState({ isUploading: !1 });
            }
    }, []);
    return (0, o.jsxs)(m.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, o.jsx)(Q.w, {
                type: "info",
                message: "When you are done, please remember to upload the logs.",
                role: "none",
            }),
            (0, o.jsxs)(nx.e, {
                children: [
                    (0, o.jsx)(p.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => vA.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, o.jsx)(vE, {
                        isUploading: t,
                        isSuccess: a,
                        errorMessage: n,
                        onClick: r,
                        title: "Upload Session Logs",
                    }),
                ],
            }),
        ],
    });
}
var vI = a(145497);
let vD = (0, vs.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function vT(e) {
    let { title: t, guildIds: a } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)("div", {
                className: vy.J1,
                children: (0, o.jsx)(g.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, o.jsxs)("div", {
                className: vy.uk,
                children: [
                    0 === a.length &&
                        (0, o.jsx)("div", {
                            className: vy.J1,
                            children: (0, o.jsx)(g.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = nE.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, o.jsxs)(
                                  "div",
                                  {
                                      className: vy.J1,
                                      children: [
                                          (0, o.jsx)(vI.Ay, { guild: t, iconSize: 16 }),
                                          (0, o.jsx)(g.E, { variant: "text-sm/normal", children: t.name }),
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
function vR(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: i } = t,
        s = d.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, o.jsx)(sg.y, { size: "sm", color: eq.A.colors.STATUS_POSITIVE })
                : (0, o.jsx)(gk.E, { size: "sm", color: eq.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, o.jsxs)("div", {
        className: vy.N6,
        children: [
            (0, o.jsxs)("div", {
                className: vy.J1,
                children: [
                    s({ ok: null != a }),
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, o.jsx)("div", {
                    className: vy.uk,
                    children: (0, o.jsx)("div", {
                        className: vy.J1,
                        children: (0, o.jsx)(g.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, o.jsxs)("div", {
                className: vy.J1,
                children: [
                    s({ ok: null != n }),
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        children:
                            null != n
                                ? "User exists in User Search Worker"
                                : "User does not exist in User Search Worker",
                    }),
                ],
            }),
            null != n &&
                (0, o.jsxs)("div", {
                    className: vy.uk,
                    children: [
                        (0, o.jsx)("div", {
                            className: vy.J1,
                            children: (0, o.jsx)(g.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, o.jsx)("div", {
                            className: vy.J1,
                            children: (0, o.jsx)(g.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, o.jsx)("div", {
                            className: vy.J1,
                            children: (0, o.jsx)(g.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, o.jsxs)("div", {
                            className: vy.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, o.jsx)("div", {
                                        className: vy.J1,
                                        children: (0, o.jsx)(g.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = nE.A.getGuild(t),
                                        l = aH.A.getChannel(t);
                                    return (0, o.jsxs)(
                                        "div",
                                        {
                                            className: vy.J1,
                                            children: [
                                                null != n && (0, o.jsx)(vI.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, o.jsx)(g.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, o.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, aW.m1)(l, eo.default, az.A),
                                                    }),
                                                (0, o.jsx)(g.E, { variant: "text-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, o.jsx)(g.E, { variant: "text-sm/normal", children: ` - ${a}` }),
                                            ],
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    ],
                }),
            (0, o.jsxs)("div", {
                className: vy.J1,
                children: [
                    s({ ok: l.length > 0 }),
                    (0, o.jsx)(g.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, o.jsx)("div", {
                    className: vy.uk,
                    children: l.map((e) => {
                        let t = nE.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, o.jsxs)(
                            "div",
                            {
                                className: vy.J1,
                                children: [
                                    (0, o.jsx)(vI.Ay, { guild: t, iconSize: 16 }),
                                    (0, o.jsxs)(g.E, {
                                        variant: "text-sm/normal",
                                        children: [t.name, "" !== a ? ` - ${a}` : ""],
                                    }),
                                ],
                            },
                            `${e.guildId}`,
                        );
                    }),
                }),
            (0, o.jsxs)("div", {
                className: vy.J1,
                children: [
                    (0, o.jsx)(uo.CircleInformationIcon, { size: "sm" }),
                    (0, o.jsx)(g.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != i &&
                (0, o.jsxs)("div", {
                    className: vy.uk,
                    children: [
                        (0, o.jsx)(vT, { title: "Pending Guild Member Requests:", guildIds: i.pendingRequestGuildIds }),
                        (0, o.jsx)(vT, { title: "Sent Guild Member Requests:", guildIds: i.sentRequestGuildIds }),
                        (0, o.jsx)(vT, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: i.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function vO() {
    let e = d.useCallback((e) => {
            vD.setState({ userId: e, state: null });
        }, []),
        t = d.useCallback(async () => {
            let { userId: e, loading: t } = vD.getState();
            if (!t && null != e) {
                vD.setState({ loading: !0, error: null });
                try {
                    let t = await vb(e);
                    vD.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new vi.LG(t);
                    vD.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    vD.setState({ loading: !1 });
                }
            }
        }, []),
        a = vD.useField("loading");
    return (0, o.jsxs)("div", {
        className: vy.$n,
        children: [
            (0, o.jsx)(b.k, { placeholder: "User ID", onChange: e }),
            (0, o.jsx)(p.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function vw() {
    let e = vD.useField("state"),
        t = vD.useField("error");
    return (0, o.jsxs)(m.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, o.jsx)(vO, {}),
            null != t &&
                (0, o.jsx)(g.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: vy.qS,
                    children: t,
                }),
            null != e && (0, o.jsx)(vR, { userState: e }),
        ],
    });
}
function vM() {
    return (0, o.jsxs)(v.Ip, {
        className: vy.nd,
        children: [
            (0, o.jsx)(vk, {}),
            (0, o.jsx)(y.c, {}),
            (0, o.jsx)(vS, {}),
            (0, o.jsx)(y.c, {}),
            (0, o.jsx)(vw, {}),
            (0, o.jsx)(y.c, {}),
            (0, o.jsx)(vN, {}),
        ],
    });
}
var vP = a(761508),
    vL = a(599147),
    vU = a(808411),
    vG = a(624716),
    vF = a(398590),
    vB = a(101715),
    v$ = a(827703),
    vV = a(349738),
    vW = a(865868);
let vH = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    vz = {
        "virtual-currency": function () {
            return (0, o.jsxs)(vV.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, o.jsx)(g.E, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, o.jsx)(p.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = v$.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (vB.x.setState({ selectedCollection: e, selectedStory: null }),
                                (0, vF.id)(em.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: function () {
            return (0, o.jsxs)("div", { children: [(0, o.jsx)(vL.o, {}), (0, o.jsx)(vU.A, {}), (0, o.jsx)(vG.A, {})] });
        },
    };
function vK() {
    let [e, t] = d.useState("virtual-currency"),
        a = d.useMemo(() => vz[e], [e]);
    return (0, o.jsxs)("div", {
        className: q()(tX.nd, vW.kL),
        children: [
            (0, o.jsx)(vP.V, {
                className: vW.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: vH.map((e) => (0, o.jsx)(vP.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, o.jsx)(v.Ar, { children: (0, o.jsx)("div", { className: vW.Qs, children: (0, o.jsx)(a, {}) }) }),
        ],
    });
}
var vY = a(718446),
    vq = a(766075),
    vJ = a(355097);
let vQ = (0, vs.D)(() => ({ urlString: "", error: null })),
    vX = Object.entries(vJ.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function vZ() {
    let [e, t] = d.useState(),
        a = vQ.useField("urlString"),
        n = vQ.useField("error"),
        l = d.useCallback(() => {
            let e = vQ.getField("urlString");
            if (null == e || "" === e) return void vQ.setState({ error: "URL is required" });
            let t = (0, vY.parseSettingsUrl)({ path: e });
            ((0, vY.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? vQ.setState({ error: "String did not match expected format" })
                : (0, vq.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, o.jsxs)(m.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, o.jsx)(aE.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: vX,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = vJ.od[e].split("/");
                        vQ.setState({ urlString: em.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, o.jsx)(b.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => vQ.setState({ urlString: e, error: null }),
            }),
            (0, o.jsxs)(nx.e, {
                children: [
                    (0, o.jsx)(p.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, o.jsx)(p.$, {
                        variant: "secondary",
                        onClick: () => (0, nQ.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, o.jsx)(g.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var v0 = a(780964);
let v1 = (0, vs.D)(() => ({ setting: v0.X.ACCOUNT_PANEL }));
function v2() {
    let e = v1.useField("setting"),
        t = d.useCallback(() => {
            (0, vq.openUserSettings)(e);
        }, [e]),
        a = d.useMemo(() => Object.values(v0.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, o.jsxs)(m.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, o.jsx)(aE.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => v1.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, o.jsx)(p.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var v3 = a(963935),
    v6 = a(107145),
    v5 = a(555738);
function v8(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [i, s] = d.useState(a),
        r = d.useCallback(() => {
            s(!i);
        }, [i]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "text-feedback-warning";
    function u(e) {
        return (0, o.jsx)(g.E, { variant: e, color: c, children: t });
    }
    return null == l
        ? (0, o.jsx)("div", { className: v5.NF, children: u("text-md/normal") })
        : (0, o.jsxs)("div", {
              className: v5.NF,
              children: [
                  (0, o.jsxs)(J.D, {
                      className: v5.jr,
                      onClick: r,
                      children: [
                          u("text-md/bold"),
                          (0, o.jsx)(iM.A, {
                              direction: i ? iM.A.Directions.DOWN : iM.A.Directions.RIGHT,
                              className: v5.D,
                          }),
                      ],
                  }),
                  i && (0, o.jsx)("div", { className: v5.m4, children: l }),
              ],
          });
}
function v4(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case v3.Z6.ROOT:
                    return "migrated-root";
                case v3.Z6.SECTION:
                case v3.Z6.PANEL:
                case v3.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        i = "migrated" === l ? "migrated" : void 0,
        s = null;
    return (
        (0, v3.nW)(t) &&
            t.layout.length > 0 &&
            (s = t.layout.map((e) => (0, o.jsx)(v4, { setting: e, depth: a + 1, inheritedHighlightMode: i }, e.key))),
        (0, o.jsx)(v8, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: s })
    );
}
function v7() {
    let { node: e } = (0, es.Ay)(v6.D, ""),
        t = (0, es.KA)();
    return (0, o.jsxs)(m.n, {
        label: "Settings Tree",
        children: [
            (0, o.jsx)(h.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: es.jL,
            }),
            (0, o.jsx)(v4, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var v9 = a(728564);
function je() {
    return (0, o.jsxs)(v.Ip, {
        className: v9.n,
        children: [
            (0, o.jsx)(v2, {}),
            (0, o.jsx)(y.c, {}),
            (0, o.jsx)(vZ, {}),
            (0, o.jsx)(y.c, {}),
            (0, o.jsx)(v7, {}),
        ],
    });
}
function jt() {
    return d.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: nh.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, o.jsx)(lc, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: nh.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, o.jsx)(x0, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: nh.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, o.jsx)(xD, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: nh.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, o.jsx)(iC, {}),
            },
        ];
        return (
            nn.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: nh.fu.SHOP, render: () => (0, o.jsx)(xx, {}) }),
                e.push({
                    id: "storefront",
                    name: "Storefront Overrides",
                    group: nh.fu.STOREFRONT,
                    render: () => (0, o.jsx)(xE, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: nh.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, o.jsx)(cu, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: nh.fu.SHOP,
                    render: () => (0, o.jsx)(tW, {}),
                }),
                e.push({
                    id: "shop_game_server_hosting",
                    name: "GSH",
                    group: nh.fu.SHOP,
                    tags: ["game server", "gsh", "highlight", "checkout"],
                    render: () => (0, o.jsx)(aR, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: nh.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "checkpoint", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, o.jsx)(m7, {}),
                }),
                e.push({
                    id: "routing_key",
                    name: "Routing Key",
                    group: nh.fu.DEVELOPMENT,
                    tags: ["routing", "traffic", "routing-key", "network"],
                    render: () => (0, o.jsx)(hd, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: nh.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, o.jsx)(iN, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: nh.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, o.jsx)(cU.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: nh.fu.DEVELOPMENT,
                    render: () => (0, o.jsx)(nG, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: nh.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, o.jsx)(iR, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: nh.fu.GAMES, render: () => (0, o.jsx)(dz, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: nh.fu.DEVELOPMENT,
                    render: () => (0, o.jsx)(sL, {}),
                }),
                nl.isPlatformEmbedded &&
                    (e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: nh.fu.GAMES,
                        render: () => (0, o.jsx)(ie, {}),
                    }),
                    e.push({
                        id: "running_game_detection",
                        name: "Running Game Detection",
                        group: nh.fu.GAMES,
                        tags: ["detection", "filter", "blocklist", "native"],
                        render: () => (0, o.jsx)(hp, {}),
                    }),
                    e.push({
                        id: "game_icon_extractor",
                        name: "Game Icon Extractor",
                        group: nh.fu.GAMES,
                        tags: ["ico", "icon", "png", "rtc"],
                        render: () => (0, o.jsx)(iX, {}),
                    }),
                    e.push({
                        id: "game_mode",
                        name: "Game Mode",
                        group: nh.fu.GAMES,
                        tags: ["fps", "frame rate", "throttle", "performance", "reduce motion"],
                        render: () => (0, o.jsx)(ay, {}),
                    })),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: nh.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, o.jsx)(l3, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: nh.fu.GAMES, render: () => (0, o.jsx)(xg, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: nh.fu.GAMES,
                    render: () => (0, o.jsx)(nk, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: nh.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, o.jsx)(a$, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: nh.fu.GAMES,
                    render: () => (0, o.jsx)(na, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: nh.fu.GAMES,
                    render: () => (0, o.jsx)(aI, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: nh.fu.USERS,
                    render: () => (0, o.jsx)(vM, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: nh.fu.AUDIO_VIDEO, render: () => (0, o.jsx)(K, {}) })),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                e.push({
                    id: "partner_perks",
                    name: "Partner Perks",
                    group: nh.fu.PREMIUM,
                    tags: ["xgp"],
                    render: () => (0, o.jsx)(d3, {}),
                }),
            e.push({
                id: "rive",
                name: "Rive",
                group: nh.fu.UI,
                tags: ["animation"],
                render: () => (0, o.jsx)(ha, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: nh.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, o.jsx)(rg, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: nh.fu.UI,
                tags: ["animation"],
                render: () => (0, o.jsx)(rQ, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: nh.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, o.jsx)(rU, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: nh.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, o.jsx)(lA, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: nh.fu.UI, render: () => (0, o.jsx)(lZ, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: nh.fu.UI,
                render: () => (0, o.jsx)(us, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: nh.fu.DEVELOPMENT,
                render: () => (0, o.jsx)(i8, { devSettingsCategory: ni.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: nh.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, o.jsx)(oc, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: nh.fu.EXPERIMENTS,
                render: () => (0, o.jsx)(i8, { devSettingsCategory: ni.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: nh.fu.USERS, render: () => (0, o.jsx)(cZ, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: nh.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, o.jsx)(ob, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: nh.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, o.jsx)(r2, {}),
            }),
            e.push({
                id: "toasts",
                name: "Toasts",
                group: nh.fu.UI,
                tags: ["notifications", "snackbar", "mana"],
                render: () => (0, o.jsx)(xq, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: nh.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, o.jsx)(rz, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: nh.fu.USERS,
                tags: ["friends"],
                render: () => (0, o.jsx)(nM, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: nh.fu.USERS,
                tags: ["channels"],
                render: () => (0, o.jsx)(lN, {}),
            }),
            nn.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: nh.fu.USERS,
                    render: () => (0, o.jsx)(ac, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: nh.fu.USERS,
                    render: () => (0, o.jsx)(aX, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: nh.fu.DCF, render: () => (0, o.jsx)(lq, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: nh.fu.DCF, render: () => (0, o.jsx)(lw, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: nh.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, o.jsx)(rO, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: nh.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up", "perks", "sources", "bitmask"],
                render: () => (0, o.jsx)(cV, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: nh.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, o.jsx)(oL, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: nh.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, o.jsx)(cA, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: nh.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, o.jsx)(oV, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: nh.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, o.jsx)(gf, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: nh.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, o.jsx)(iK, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: nh.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, o.jsx)(sH, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: nh.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, o.jsx)(p_, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: nh.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, o.jsx)(pu, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: nh.fu.AUDIO_VIDEO,
                tags: ["steam audio", "hrtf", "binaural", "reflections", "reverb", "room", "spatial audio"],
                render: () => (0, o.jsx)(p4, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: nh.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, o.jsx)(ph, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: nh.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, o.jsx)(rI, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: nh.fu.BOOSTING, render: () => (0, o.jsx)(i3, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: nh.fu.UI,
                tags: ["locale"],
                render: () => (0, o.jsx)(rF, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: nh.fu.DEVELOPMENT,
                render: () => (0, o.jsx)(je, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: nh.fu.QUESTS,
                render: () => (0, o.jsx)(a2, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: nh.fu.QUESTS,
                render: () => (0, o.jsx)(x3, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: nh.fu.BILLING,
                render: () => (0, o.jsx)(vK, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: nh.fu.QUESTS,
                render: () => (0, o.jsx)(vl, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: nh.fu.USERS,
                render: () => (0, o.jsx)(uh, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: nh.fu.USERS,
                render: () => (0, o.jsx)(ly, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: nh.fu.DEVELOPMENT,
                render: () => (0, o.jsx)(is, {}),
            }),
            e
        );
    }, []);
}
