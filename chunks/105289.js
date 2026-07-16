a.d(t, { x: () => pj }), a(321073);
var n,
    l,
    s,
    i,
    r = a(627968),
    o = a(64700),
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
    f = a(292666),
    b = a(404778),
    y = a(77729),
    E = a(952818),
    _ = a(905552),
    C = a(186295),
    S = a(157257),
    N = a(915725),
    A = a(372684),
    k = a(430795),
    D = a(899396),
    I = a(227628),
    T = a(468550);
let R = (0, a(353640).v)(() => ({ enabled: !1, pending: null, lastResult: null }));
function O(e) {
    R.setState({ enabled: e });
}
function w(e) {
    R.setState({ pending: e });
}
function M(e) {
    R.setState({ lastResult: e });
}
var L = a(781710),
    P = a(696016),
    U = a(264572).Buffer;
function G() {
    let e = R((e) => e.enabled),
        t = R((e) => e.pending),
        a = R((e) => e.lastResult),
        n = o.useCallback(async (e, t, a, n) => {
            let l = C.Ay.getMediaEngine();
            if (null == l.setClipsPerfMonitoring) return M("setClipsPerfMonitoring unsupported in this build"), null;
            w(n);
            try {
                let n = await l.setClipsPerfMonitoring(e, t, a);
                return O(n.enabled), n;
            } catch (e) {
                return M(`${n} failed: ${e instanceof Error ? e.message : String(e)}`), null;
            } finally {
                w(null);
            }
        }, []),
        l = o.useCallback(
            async (t) => {
                O(t);
                let a = await n(t, !1, !1, t ? "enable" : "disable");
                null != a ? M(`recorder ${a.enabled ? "enabled" : "disabled"}`) : O(e);
            },
            [n, e],
        ),
        s = o.useCallback(async () => {
            let t = await n(e, !0, !1, "save");
            if (null == t) return;
            if ("" === t.html) return void M("save: server returned empty html");
            let a = `clips-perf-${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            try {
                let e = U.from(t.html, "utf8"),
                    n = await y.A.fileManager.saveWithDialog2(e, a);
                if (null != n && !0 === n.canceledByUser) return void M("save: canceled");
                M(`saved ${t.eventCount} events (${t.html.length} bytes)`);
            } catch (e) {
                M(`save failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, [n, e]),
        i = o.useCallback(async () => {
            let t = await n(e, !1, !0, "clear");
            null != t && M(`cleared ${t.eventCount} events`);
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
                    (0, r.jsx)(x.$, { text: "Save as file...", disabled: null != t, onClick: s }),
                    (0, r.jsx)(x.$, { text: "Clear recording", variant: "secondary", disabled: null != t, onClick: i }),
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
function F() {
    let e = (0, I.MZ)((e) => e.isOpen),
        t = (0, T.sY)((e) => e.isOpen),
        [a, n] = o.useState(3),
        l = o.useCallback((e) => {
            let t = Object.values(N.Ay.getClips()),
                a = t.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = t.filter((e) => e.applicationId === n).slice(0, e);
            N.Ay.devSetLastClipsSession({
                applicationName: a.applicationName,
                newClipIds: l.map((e) => e.id),
                ended: !0,
            }),
                (0, T.M8)(n);
        }, []),
        s = o.useCallback(
            (e) => {
                e ? l(a) : (0, T.kF)();
            },
            [l, a],
        ),
        i = o.useCallback(() => {
            let e = Object.values(N.Ay.getClips()),
                t = (0, _.A)(E.Ay, S.A),
                a =
                    (t?.id != null ? e.find((e) => e.applicationId === t.id) : void 0) ??
                    e.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = e.filter((e) => e.applicationId === n).slice(0, 10);
            N.Ay.devSetLastClipsSession({
                applicationName: a.applicationName,
                newClipIds: l.map((e) => e.id),
                ended: !0,
            }),
                (0, I.w9)();
        }, []),
        C = o.useCallback(
            (e) => {
                e ? i() : (0, I.yj)();
            },
            [i],
        ),
        R = o.useCallback(
            (e) => {
                n(e), t && l(e);
            },
            [l, t],
        ),
        [O, w] = o.useState(A.rb.KILL),
        [M, U] = o.useState(1),
        [F, B] = o.useState(""),
        [$, V] = o.useState(""),
        W = (0, d.bG)([N.Ay], () => N.Ay.isAutoStashEnabled()),
        z = o.useCallback((e) => {
            e
                ? (0, c.A)({
                      title: "Stash all gaming sessions?",
                      subtitle:
                          "Every gaming session will be stashed to your Desktop (inside the `decider_stash` folder) when it ends. This setting is not persistent \u2014 it resets to off each time Discord launches.",
                      confirmText: "Enable",
                      variant: "primary",
                      onConfirm: () => {
                          k.mN(!0);
                      },
                  })
                : k.mN(!1);
        }, []),
        [H, K] = o.useState([]),
        [Y, q] = o.useState(void 0),
        J = o.useCallback((e) => {
            K(e), q((t) => (null != t && e.includes(t) ? t : e[0]));
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
    let X = (0, d.bG)([N.Ay], () => N.Ay.getState().clipsSettings.enableAutoclipping),
        Z = (0, d.bG)([N.Ay], () => N.Ay.getEnableAutoclipping());
    return (0, r.jsx)(g.Ip, {
        children: (0, r.jsxs)(v.l, {
            children: [
                (0, r.jsx)(u.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(h.M, {
                        children: [
                            (0, r.jsx)(x.$, { text: "Manual", onClick: () => k.Ts({ type: A.Gy.MANUAL }) }),
                            (0, r.jsx)(x.$, {
                                text: "Distributed",
                                onClick: () =>
                                    k.Ts({
                                        type: A.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(x.$, {
                                text: "Shouting",
                                onClick: () => k.Ts({ type: A.Gy.SHOUTING, userId: "123", confidence: 1 }),
                            }),
                            (0, r.jsx)(x.$, {
                                text: "Laughter",
                                onClick: () => k.Ts({ type: A.Gy.LAUGHTER, userId: "123", confidence: 1 }),
                            }),
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
                                        { id: "kill", label: "Kill", value: A.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: A.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: A.rb.DEATH },
                                        { id: "assist", label: "Assist", value: A.rb.ASSIST },
                                        { id: "item", label: "Item", value: A.rb.ITEM },
                                        { id: "victory", label: "Victory", value: A.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: A.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: A.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: A.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: A.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Importance",
                                    value: M,
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
                            label: "Title (optional)",
                            value: F,
                            onChange: B,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, r.jsx)(f.k, {
                            label: "Description (optional)",
                            value: $,
                            onChange: V,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(x.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                k.Ts({ type: A.Gy.GAME_EVENT, eventType: O, importance: M, title: F, description: $ });
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
                                            P.nx.error("re-run ranking failed", e);
                                        });
                                    },
                                }),
                                (0, r.jsx)(x.$, {
                                    text: "refresh sessions",
                                    variant: "secondary",
                                    onClick: () => void Q(),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.n, { label: "Clip Metadata Tool", children: (0, r.jsx)(L.A, {}) }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(G, {}),
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
                            onChange: s,
                        }),
                        (0, r.jsx)(j.l, {
                            label: "Clip count",
                            value: a,
                            onSelectionChange: R,
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
                                        k.uL(void 0, !1);
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
var B = a(503698),
    $ = a.n(B),
    V = a(939249),
    W = a(683071),
    z = a(331322),
    H = a(811893),
    K = a(297264),
    Y = a(538064),
    q = a(265059),
    J = a(902592),
    Q = a(869146);
a(323874), a(14289), a(35956);
var X = a(789645),
    Z = a(589158),
    ee = a(65593),
    et = a(377980),
    ea = a(581298),
    en = a(98596),
    el = a(287809),
    es = a(901139),
    ei = a(641886),
    er = a(780898),
    eo = a(652215),
    ed = a(450340),
    ec = a(427262);
function eu(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([el.default], () => el.default.getCurrentUser()),
        n = ec.Ay.useName(a) ?? "";
    return (0, r.jsx)(ed.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: eo.clD.ONLINE,
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
var em = a(736653),
    eh = a(653523),
    ex = a(809948);
function ep(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, em.Ay)();
    return (0, r.jsxs)("div", {
        className: ex.N,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: ex.Z,
                children: ei.Z6.map((e) => {
                    let l = n !== eo.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        eh.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var eg = a(715069),
    ev = a(95701),
    ej = a(331884);
function ef(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, ej.i)(),
        l = new ev.cq({ id: "0", type: eo.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(eg.th, { selected: t, channel: l, user: n, nameplate: a });
}
var eb = a(698638),
    ey = a(877203);
function eE() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, s] = (0, o.useState)(null),
        { node: i } = (0, ea.Ay)(en.k, ""),
        d = (0, es.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, es.DE)(),
        { setImgCache: m } = (0, es.TW)(),
        h = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? s({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : s((t) =>
                          null == t ? { previewToolKey: e, palette: ei.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [d],
        ),
        g = (0, o.useCallback)((e) => {
            s((t) => (null == t ? null : { ...t, palette: e }));
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
                className: ey.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: ey.gO,
                        children: [
                            (0, r.jsx)(x.$, {
                                size: "sm",
                                onClick: () => {
                                    n(!1), t((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, r.jsx)(x.$, {
                                size: "sm",
                                onClick: () => {
                                    t(!1), n((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Gradients",
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: ey.uQ,
                        children: [
                            e && (0, r.jsx)(et.A, { node: i }),
                            a &&
                                (0, r.jsx)(ep, {
                                    selected: l?.palette?.name,
                                    onSelect: (e) => {
                                        l?.previewToolKey != null && c(l.previewToolKey, l.previewToolKey, e), g(e);
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: ey.iW,
                children: [
                    (0, r.jsx)(e_, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: ey.Uo,
                        children: [
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(ee.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eb.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    m(t, t, (0, er.nI)(n)), c(t, t, ei.Wj);
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: ey.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(eC, { src: t, onSetStatic: h, removeAsset: v }, t);
                                }),
                            }),
                            (0, r.jsx)(eN, {
                                label: "gradient override",
                                onChange: (e) => g({ name: ei.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(eS, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let { nameplate: t } = e,
        [a, n] = (0, o.useState)(320),
        l = (0, o.useRef)(null),
        s = (0, o.useRef)(null),
        i = (0, o.useRef)(null),
        d = (0, o.useRef)(document),
        c = (0, o.useCallback)((e) => {
            if (null != l.current) {
                let t = l.current.getBoundingClientRect();
                n(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        u = (0, o.useCallback)(
            (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = e.currentTarget.ownerDocument;
                function a(e) {
                    e.preventDefault(), c(e);
                }
                function n() {
                    null != s.current && (t.removeEventListener("mousemove", s.current), (s.current = null)),
                        null != i.current && (t.removeEventListener("mouseup", i.current), (i.current = null));
                }
                (d.current = t),
                    (s.current = a),
                    (i.current = n),
                    t.addEventListener("mousemove", a),
                    t.addEventListener("mouseup", n);
            },
            [c],
        );
    return (
        (0, o.useEffect)(
            () => () => {
                null != s.current && (d.current.removeEventListener("mousemove", s.current), (s.current = null)),
                    null != i.current && (d.current.removeEventListener("mouseup", i.current), (i.current = null));
            },
            [],
        ),
        (0, r.jsx)(g.Ip, {
            className: ey.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: ey.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(eA, { nameplate: t }),
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(ek, { nameplate: t }),
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(eD, { nameplate: t }),
                    (0, r.jsx)("div", { className: ey.Di, onMouseDown: u }),
                ],
            }),
        })
    );
}
function eC(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: ey.xO,
        children: [
            (0, r.jsx)(V.D, {
                onClick: () => n(t),
                className: ey.yV,
                children: (0, r.jsx)(X.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: ey.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: ey.Lu,
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
function eS(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: ey.Uu,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function eN(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: ey.Im,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: ey.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eA(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([el.default], () => el.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: ey.VH,
        children: (0, r.jsxs)("div", {
            className: ey.H1,
            children: [
                (0, r.jsx)(p.E, { className: ey.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(Z.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(p.E, { className: ey.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Z.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(Z.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function ek(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ey.VH,
        children: (0, r.jsxs)("div", {
            className: ey.H1,
            children: [
                (0, r.jsx)(p.E, { className: ey.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(ef, { nameplate: t }),
                (0, r.jsx)(p.E, { className: ey.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(ef, { selected: !0, nameplate: t }), (0, r.jsx)(ef, { selected: !0 })],
                }),
            ],
        }),
    });
}
function eD(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ey.VH,
        children: (0, r.jsx)("div", { className: ey.X2, children: (0, r.jsx)(eu, { nameplate: t }) }),
    });
}
a(508300);
var eI = a(132500),
    eT = a(157559),
    eR = a(780777),
    eO = a(993408),
    ew = a(579151),
    eM = a(25176),
    eL = a(816866),
    eP = a(87558),
    eU = a(575593),
    eG = a(631903),
    eF = a(224640),
    eB = a(408278),
    e$ = a(972213),
    eV = a(43990),
    eW = a(192308),
    ez = a(661531),
    eH = a(231723),
    eK = a(900686),
    eY = a(986687),
    eq = a(780385),
    eJ = a(435558),
    eQ = a.n(eJ),
    eX = a(855915),
    eZ = a(480335);
let e0 = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eJ.cloneDeep)(t), [t]),
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
        s = "debug",
        { layerData: i } = (0, eX.A)({ skuId: s, layers: l.effects });
    return (0, r.jsx)(eZ.p, { profileEffect: l, skuId: s, layerData: i });
};
var e1 = a(314485),
    e2 = a(778765);
let e3 =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    e6 = { [eP.qH.THUMBNAIL]: null, [eP.qH.STATIC]: null, [eP.qH.REDUCED_MOTION]: null },
    e8 = "debug",
    e5 = "reduced-motion-preview-modal";
function e9(e) {
    let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
    return (0, r.jsx)(eF.d, {
        transitionState: t,
        size: "md",
        onClose: a,
        maxHeight: "viewport",
        children: (0, r.jsxs)("div", {
            className: e1.Xd,
            children: [
                (0, r.jsx)("div", {
                    className: e1.y6,
                    children: (0, r.jsx)(eB.K, {
                        "aria-label": "Close",
                        onClick: a,
                        icon: e$.d,
                        variant: "overlay-secondary",
                        size: "sm",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: e1.rU,
                    children: [
                        (0, r.jsx)(eV.N, {
                            theme: l,
                            children: (e) =>
                                (0, r.jsx)("img", { src: e3, alt: "", className: $()(e1.aM, e), "aria-hidden": !0 }),
                        }),
                        null != n &&
                            "" !== n &&
                            (0, r.jsx)("img", { src: n, className: e1.SD, alt: "Reduced motion preview" }),
                    ],
                }),
            ],
        }),
    });
}
let e7 = (e) => {
        let { type: t, frame: a, theme: n, onClear: l } = e,
            s = t === eP.qH.REDUCED_MOTION,
            i = s ? e3 : e2.A,
            o = (0, r.jsx)(eV.N, {
                theme: n,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: i, alt: "", className: $()(e1.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, r.jsx)("img", { src: a.src, className: $()(e1.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, r.jsxs)("div", {
            className: e1.pK,
            children: [
                (0, r.jsx)(K.D, { variant: "heading-sm/bold", children: t }),
                s
                    ? (0, r.jsx)(V.D, {
                          className: $()(e1.zd, e1.eB),
                          onClick: () => {
                              (0, eW.hasModalOpen)(e5)
                                  ? (0, eW.closeModal)(e5)
                                  : (0, eW.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(e9, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                            ),
                                        { modalKey: e5, onCloseRequest: () => (0, eW.closeModal)(e5) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: e1.zd, children: o }),
                null != a && (0, r.jsx)(x.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
            ],
        });
    },
    e4 = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eL.wu)(),
            n = (0, d.bG)([el.default], () => el.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [c, u] = o.useState(!1),
            [m, h] = o.useState(!1),
            [g, v] = o.useState(8),
            [j, f] = o.useState([]),
            [b, y] = o.useState(e6),
            E = o.useRef([]),
            [_, C] = o.useState(t.name),
            S = _.toLowerCase().replace(/\s+/g, "_"),
            N = o.useMemo(
                () => ({
                    type: eU.R.PROFILE_EFFECT,
                    skuId: e8,
                    title: e8,
                    description: e8,
                    accessibilityLabel: e8,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: j,
                    animationType: eG.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [j],
            ),
            A = c ? ez.A.themes.DARKER : ez.A.themes.LIGHT;
        function k(e) {
            let t = e.currentTarget.files;
            return null == t ? null : t[0];
        }
        function D(e, t) {
            let a = k(t);
            null != a &&
                (0, eP.Mz)(a, (t) => {
                    y((n) => ({ ...n, [e]: (0, eP.GT)(t, a) }));
                });
        }
        o.useEffect(() => {
            let e = t.effects;
            e.length > 0 &&
                f(
                    e.map((e) => ({
                        ...e,
                        name: e.name ?? (0, eP.XG)(e.src),
                        randomizedSources: e.randomizedSources?.map((e) => ({
                            ...e,
                            filename: e.filename ?? (0, eP.XG)(e.src),
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
                                let e = (0, eP.fB)(a.base64);
                                (a.src = e), E.current.push(e), y((e) => ({ ...e, [t]: a }));
                            }
                        }
                    });
            }, [t.stillFrames]);
        let I = { profileEffect: t, upsertProfileEffect: a },
            T = o.useRef(I);
        return (o.useEffect(() => {
            T.current = I;
        }),
        o.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = T.current;
            e.readonly || t({ skuId: e.skuId, name: _, effects: j, stillFrames: b });
        }, [j, b, _]),
        o.useEffect(
            () => () => {
                E.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (E.current = []);
            },
            [],
        ),
        null == n)
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: e1.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eR.A, {
                                  ref: (e) => {
                                      i.current.animated = e;
                                  },
                                  onChange: function (e) {
                                      let t = k(e);
                                      null != t &&
                                          (0, eP.Mz)(t, async (e) => {
                                              let a = await (0, eP.Ay)(e, t, j.length);
                                              f((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eR.A, {
                                  ref: (e) => {
                                      i.current.thumbnail = e;
                                  },
                                  onChange: (e) => D(eP.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eR.A, {
                                  ref: (e) => {
                                      i.current.static = e;
                                  },
                                  onChange: (e) => D(eP.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eR.A, {
                                  ref: (e) => {
                                      i.current.reducedMotion = e;
                                  },
                                  onChange: (e) => D(eP.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: e1.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: $()(e1.nM, e1.uW),
                                  children: [
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: _,
                                          className: e1.hF,
                                          onChange: (e) => {
                                              C(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e1.nM,
                                  children: [
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: c,
                                          className: e1.OO,
                                          onChange: () => {
                                              u(!c);
                                          },
                                      }),
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: m,
                                          className: e1.OO,
                                          onChange: () => {
                                              h(!m);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e1.nM,
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
                                  className: $()(e1.nz, e1.VH),
                                  style: { borderRadius: g },
                                  children: [
                                      m
                                          ? (0, r.jsx)("div", {
                                                className: e1.jq,
                                                children: (0, r.jsx)(eq.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: eH.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: e1.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eV.N, {
                                                theme: A,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: $()(e1.aM, e),
                                                        children: (0, r.jsx)("img", { src: e2.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: e1.KJ,
                                              children: (0, r.jsx)(e0, { profileEffect: N }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      m &&
                                      (0, r.jsxs)("div", {
                                          className: $()(e1.f5, e1.VH),
                                          style: { borderRadius: g },
                                          children: [
                                              (0, r.jsx)(eY.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  hideProfileFrame: !0,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(e0, { profileEffect: N }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: e1.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: e1.nM,
                                          children: [
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => i.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(p.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: e1.nM,
                                          children: [
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => i.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => i.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => i.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)("div", {
                                          className: e1.q6,
                                          children: (0, r.jsx)("div", {
                                              className: e1.nM,
                                              children: (0, r.jsx)(x.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      s(!1), setTimeout(() => s(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: $()(e1.q6, e1.XA),
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
                                                  className: e1.nM,
                                                  children: [
                                                      (0, r.jsx)(eK.A, {
                                                          fileContents: () => (0, eP.rs)(j),
                                                          contentType: "text/plain",
                                                          fileName: `${S}_timing_config.txt`,
                                                          children: (0, r.jsx)(x.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eK.A, {
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
                                          className: e1.uW,
                                          children: [
                                              (0, r.jsx)(K.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: e1.mv,
                                                  children: Object.entries(b).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          e7,
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
                                              className: $()(e1.uW, e1.l7),
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
                                  className: $()(e1.Vg, e1.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: e1.cD,
                                          children: (0, r.jsx)(x.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: function () {
                                                  f([]), y(e6);
                                              },
                                          }),
                                      }),
                                      j.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: e1.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: e1.D1,
                                                          children: [
                                                              (0, r.jsx)(K.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: e1.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(K.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(K.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: e1.oq,
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
                                                          className: $()(e1.Vg, e1.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e1.nz,
                                                                  children: [
                                                                      (0, r.jsx)(p.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: e1.hF,
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
                                                                  className: e1.nz,
                                                                  children: [
                                                                      (0, r.jsx)(p.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: e1.hF,
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
                                                          className: $()(e1.Vg, e1.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e1.nz,
                                                                  children: [
                                                                      (0, r.jsx)(p.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: e1.OO,
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
                                                                  className: e1.nz,
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
                                                                                  className: e1.hF,
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
                                                          children: (0, r.jsx)(eR.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = k(e)) &&
                                                                      (0, eP.Mz)(a, (e) => {
                                                                          f((n) => {
                                                                              let l = [...n],
                                                                                  s = n[t];
                                                                              if (null == s) return n;
                                                                              let i = { ...s };
                                                                              return (
                                                                                  null == i.randomizedSources &&
                                                                                      (i.randomizedSources = []),
                                                                                  i.randomizedSources.push({
                                                                                      src: e,
                                                                                      filename: a.name,
                                                                                  }),
                                                                                  (l[t] = i),
                                                                                  l
                                                                              );
                                                                          });
                                                                      });
                                                              },
                                                              multiple: !1,
                                                          }),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: $()(e1.nM, e1._N),
                                                          children: [
                                                              (0, r.jsx)(x.$, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      i.current[
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
    te = "Make sure you're only uploading text files!";
function tt(e) {
    let { profileEffect: t, onClick: a } = e,
        { deleteProfileEffect: n } = (0, eL.wu)();
    return (0, r.jsxs)(V.D, {
        className: e1.B0,
        onClick: a,
        children: [
            (0, r.jsx)("div", { className: e1.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
            (0, r.jsxs)("div", {
                className: e1.eL,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/bold", children: t.name }),
                    (0, r.jsx)(x.$, {
                        variant: "critical-secondary",
                        text: "Delete",
                        onClick: (e) => {
                            e.preventDefault(), e.stopPropagation(), n(t.skuId);
                        },
                    }),
                ],
            }),
        ],
    });
}
function ta() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eL.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, ew.A)(),
        d = o.useMemo(() => (0, eO.Wj)(i), [i]),
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
                if (null == a || !e.type.startsWith("text/")) return (0, eM.Ni)(te);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eM.Ni)(te);
                let s = JSON.parse(atob(l));
                (s.skuId = (0, eI.A)()), t(s), (0, eM.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eM.Ni)("Error uploading file. Try again!")
                    : (0, eM.KE)(e.currentTarget.files, h, eM.Ni);
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: e1.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: e1.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: $()(e1.uW, e1.nM),
                                    children: [
                                        (0, r.jsx)(K.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(x.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await eT.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, eM.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: e1.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(tt, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: $()(e1.nM, e1._N, e1.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: e1.au,
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            variant: "text-md/normal",
                                            color: "text-overlay-light",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eR.A, { ref: s, onChange: g, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: function () {
                                        t({ skuId: (0, eI.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: e1.uW,
                            children: [
                                (0, r.jsx)(K.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(f.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: e1.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            V.D,
                                            {
                                                className: e1.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [eP.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eP.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eP.qH.REDUCED_MOTION]:
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
                                                    className: e1.Hd,
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
            null != n && (0, r.jsx)(e4, { profileEffect: n }),
        ],
    });
}
var tn = a(935399),
    tl = a(462887),
    ts = a(289873),
    ti = a(478016),
    tr = a(565645),
    to = a(7584),
    td = a(619499),
    tc = a(207803),
    tu = a(84540),
    tm = a(836602),
    th = a(999291),
    tx = a(903209),
    tp = a(841702),
    tg = a(892118),
    tv = a(744808),
    tj = a(725287),
    tf = a(626768),
    tb = a(464896);
function ty() {
    let e = (0, em.Ay)();
    return (0, r.jsxs)("div", {
        className: tj.z3,
        children: [
            (0, r.jsx)("img", { src: (0, tl.M)(e) ? tf : tb, alt: "" }),
            (0, r.jsx)(p.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tE() {
    let e = (0, d.bG)([el.default], () => el.default.getCurrentUser()),
        t = (0, th.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, tx.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, tp.Bf)(),
        l = o.useMemo(() => (0, eO.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, d.yK)([tm.A], () => [tm.A.getPendingChanges(), tm.A.showNotice()]),
        c = void 0 === s ? t?.profileFrame : s,
        u = null != c ? a.get(c.skuId) : void 0,
        m = (0, tg.s)(u?.items[0]) ? u.items[0] : void 0;
    return (
        (0, tn.l0)(tc.RE),
        (0, r.jsxs)("div", {
            className: tj.kL,
            children: [
                (0, r.jsxs)(K.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(tr.A, {
                            emojiName: to.Ay.getByName("frame_with_picture")?.surrogates,
                            className: tj.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(ts.y, {}),
                0 === l.length && !n && (0, r.jsx)(ty, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: tj.MK,
                        children: [
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: tj.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(x.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == c ? ti.U : void 0,
                                                disabled: null == c,
                                                onClick: () => (0, tu.p)({ profileFrame: null }),
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
                                                          icon: c?.skuId === e.skuId ? ti.U : void 0,
                                                          disabled: c?.skuId === e.skuId,
                                                          onClick: () => (0, tu.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            i && (0, r.jsx)(td.A, {}),
                            (0, r.jsxs)("div", {
                                className: tj.VH,
                                children: [
                                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: tj.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: e2.A, alt: "" }),
                                            null != m && (0, r.jsx)(tv.A, { frame: m }),
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
var t_ = a(702841),
    tC = a(793574),
    tS = a(590180),
    tN = a(4227),
    tA = a(828614),
    tk = a(61750),
    tD = a(328762);
let tI = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tN.A.getPurchase;
                return (
                    (tN.A.getPurchase = (e) => void 0),
                    tN.A.emitChange(),
                    a(1),
                    () => {
                        (tN.A.getPurchase = e), tN.A.emitChange();
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tD.Do, children: (0, r.jsx)(tA.A, { ...e }, t) })
        );
    },
    tT = () => {
        let e = (0, t_.bG)([el.default], () => el.default.getCurrentUser()),
            t = (0, t_.bG)([tS.A], () => tS.A.categories),
            a = (0, t_.bG)([tN.A], () => tN.A.purchases),
            n = (0, t_.bG)([tS.A], () => tS.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: s, categories: i } = (0, tp.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
            d = l ? t : i,
            c = l || (!s && d.size > 0),
            [u, m] = o.useState(""),
            [h, g] = o.useState(null),
            [v, j] = o.useState(null);
        return (o.useEffect(() => {
            if ("" === u.trim() || !c) {
                g(null), j(null);
                return;
            }
            let e = tS.A.getProduct(u),
                t = tS.A.getCategoryForProduct(u);
            null != e && null != t ? (g(e), j(t)) : (g(null), j(null));
        }, [u, c]),
        s)
            ? (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, r.jsx)(p.E, { variant: "text-md/normal", children: "No user found" })
              : (0, r.jsxs)("div", {
                    className: tD.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tD.uW,
                            children: [
                                (0, r.jsx)(K.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, r.jsxs)("div", {
                                    className: tD.qp,
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            variant: "text-md/semibold",
                                            className: tD.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(f.k, { value: u, onChange: m, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, r.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                className: tD.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == h &&
                                            (0, r.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                className: tD.kc,
                                                children: "Product not found",
                                            }),
                                        null != h &&
                                            (0, r.jsxs)(p.E, {
                                                variant: "text-sm/normal",
                                                className: tD.xT,
                                                children: ["Found: ", h.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tD.uW,
                            children: [
                                (0, r.jsx)(K.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != h && null != v
                                    ? (0, r.jsxs)("div", {
                                          className: tD.i1,
                                          children: [
                                              (0, r.jsx)(tI, { skuId: h.skuId }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != h &&
                                                          null != e &&
                                                          (0, tk.A)({
                                                              product: h,
                                                              analyticsLocations: [tC.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: tD.qf,
                                          children: (0, r.jsx)(p.E, {
                                              variant: "text-md/normal",
                                              className: tD.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
var tR = a(410724);
let tO = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 };
function tw(e) {
    let { setTab: t } = e,
        a = (0, d.bG)([Q.A], () => Q.A.getWindowOpen(eo.MLl.DEVTOOLS_POPOUT));
    return (0, r.jsxs)("div", {
        className: tR.Qs,
        children: [
            (0, r.jsx)(V.D, {
                onClick: () => {
                    t(1);
                },
                children: (0, r.jsx)("div", {
                    className: $()(tR.vK, tR.Dg),
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Profile Effects",
                    }),
                }),
            }),
            (0, r.jsx)(V.D, {
                onClick: () => {
                    t(2);
                },
                children: (0, r.jsx)("div", {
                    className: $()(tR.vK, tR.st),
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Nameplates",
                    }),
                }),
            }),
            (0, r.jsx)(V.D, {
                onClick: () => {
                    t(3);
                },
                children: (0, r.jsx)("div", {
                    className: $()(tR.vK, tR.BW),
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Profile Frames",
                    }),
                }),
            }),
            (0, r.jsx)(V.D, {
                onClick: () => {
                    t(4);
                },
                children: (0, r.jsx)("div", {
                    className: $()(tR.vK, tR.IP),
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
                    children: (0, r.jsx)(W.w, {
                        type: "warning",
                        children: (0, r.jsxs)(z.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    children: "You can pop out the DevTools to see the full layout.",
                                }),
                                (0, r.jsx)(x.$, {
                                    size: "sm",
                                    icon: H.t,
                                    variant: "secondary",
                                    onClick: J.openDevToolsPopout,
                                    text: "Popout DevTools",
                                }),
                            ],
                        }),
                    }),
                }),
        ],
    });
}
let tM = function () {
    let [e, t] = o.useState(() => {
        let e = q.A.lastOpenSubTabId;
        return null != e && e in tO ? tO[e] : 0;
    });
    return (
        o.useEffect(() => {
            null != q.A.lastOpenSubTabId && (0, Y.Jt)({ lastOpenSubTabId: null });
        }, []),
        (0, r.jsxs)(g.Ip, {
            className: tR.iE,
            children: [
                (0, r.jsxs)("div", {
                    className: tR.C$,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                        0 !== e && (0, r.jsx)(x.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                    ],
                }),
                (function () {
                    switch (e) {
                        case 1:
                            return (0, r.jsx)(ta, {});
                        case 2:
                            return (0, r.jsx)(eE, {});
                        case 3:
                            return (0, r.jsx)(tE, {});
                        case 4:
                            return (0, r.jsx)(tT, {});
                        default:
                            return (0, r.jsx)(tw, { setTab: t });
                    }
                })(),
            ],
        })
    );
};
var tL = a(681154),
    tP = a(306264),
    tU = a(506774),
    tG = a(228366),
    tF = a(587895),
    tB = a(429913),
    t$ = a(475825),
    tV = a(505206);
function tW(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: s, selectedRowKey: i, rowHeight: d = 40 } = e,
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
        className: tV.CZ,
        children: (0, r.jsx)(t$.OZ, {
            className: n,
            innerClassName: tV.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tV.ZR;
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
                    u = $()(tV.jD, { [tV.wD]: o === i, rowClassName: l });
                return (0, r.jsx)(
                    V.D,
                    {
                        className: u,
                        onClick: () => s?.(n),
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
var tz = a(409626),
    tH = a(692969),
    tK = a(760751),
    tY = a(403362),
    tq = a(435738),
    tJ = a(99753),
    tQ = a(975732),
    tX = a(352139),
    tZ = a(808323),
    t0 = a(583846),
    t1 = a(424994),
    t2 = a(330837);
function t3(e) {
    let { id: t } = e,
        a = (0, d.bG)([el.default], () => el.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(V.D, {
              className: t2._,
              onClick: function () {
                  (0, tQ.openUserProfileModal)({ sourceAnalyticsLocations: [tC.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function t6() {
    let e = (0, d.bG)([tJ.A], () => tJ.A.getFeed(t1.X1.GLOBAL_FEED)),
        t = (0, d.bG)([tJ.A], () => tJ.A.getFilters()),
        a = (0, d.cf)([tX.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, tX.$)(a.content)] = tX.A.canRenderContent(a.content);
            return t;
        }, [e]),
        n = (0, d.bG)([tq.A], () => tq.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, tZ.l)(t, l)) return [];
        let s = a[(0, tX.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: t2.p,
                children: [
                    (0, r.jsx)(t3, { type: l.author_type, id: l.author_id }),
                    !s && (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, t0.I5)(l) &&
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(K.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var t8 = a(576470),
    t5 = a(693879);
function t9() {
    let e = (0, d.bG)([tJ.A], () => tJ.A.getFeed(t1.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, d.cf)(
            [tJ.A],
            () => tJ.A.getFeedState(t1.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, d.bG)([tJ.A], () => tJ.A.getLastFeedFetchDate(t1.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(p.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(p.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(t8.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(p.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(t5.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var t7 = a(866839);
let t4 = [
    {
        key: "type",
        cellClassName: $()(t7.Hn, t7.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(p.E, { variant: "text-md/semibold", children: tL.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: $()(t7.Hn, t7.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: t7.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(ae, { type: t });
        },
    },
];
function ae(e) {
    let { type: t } = e,
        a = (0, d.bG)([tJ.A], () => tJ.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(m.d, {
        checked: n,
        onChange: function () {
            n
                ? tG.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tG.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function at() {
    var e;
    let t,
        a = (0, d.bG)([tJ.A], () => tJ.A.getFeed(t1.X1.GLOBAL_FEED)),
        n = (0, d.bG)([tJ.A], () => tJ.A.getDebugImpressionCappingDisabled()),
        l = (0, d.bG)([tq.A], () => tq.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eQ().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, d.bG)([tJ.A], () => tJ.A.getFeedState(t1.X1.GLOBAL_FEED)?.loading === !0),
        [c, u] = o.useState(""),
        m = (0, d.bG)(
            [tK.A, tF.A],
            () => (parseInt(c) > 0 ? c : (tK.A.searchGamesByName(c)[0] ?? tF.A.getApplicationByName(c)?.id)),
            [c],
        ),
        h = (0, tH.A)({
            applicationId: m,
            location: "DevToolsContentInventory",
            source: tz.GameProfileSources.DevTools,
        }),
        v = Object.entries(tU.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        j = (0, tB.A)(v).filter(tY.Vq);
    return (0, r.jsx)("div", {
        className: tV.nd,
        children: (0, r.jsxs)(g.Ip, {
            className: t7.Qs,
            children: [
                (0, r.jsxs)(z.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(tW, { columns: t4, data: s }),
                        (0, r.jsx)(t9, {}),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                tG.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: t1.X1.GLOBAL_FEED,
                                    feature: tP.M.INBOX,
                                });
                            },
                            loading: i,
                        }),
                    ],
                }),
                (0, r.jsxs)(z.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tG.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tG.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tG.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tG.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(t6, {}),
                (0, r.jsxs)(z.B, {
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
                                    { children: (0, r.jsx)(aa, { application: e }) },
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
function aa(e) {
    let { application: t } = e,
        a = (0, tH.A)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: tz.GameProfileSources.DevTools,
        });
    return (0, r.jsx)(V.D, {
        onClick: a,
        children: (0, r.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
}
var an = a(783878),
    al = a(769015),
    as = a(311043),
    ai = a(569926),
    ar = a(282435);
function ao(e) {
    return ar.Bf.get(e) ?? 0;
}
function ad(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, ai.I)(t),
        l = (0, d.bG)([as.A], () => as.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)(z.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(al.A, { game: a, size: al.M.SMALL }),
                    (0, r.jsxs)(z.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a.name }),
                            (0, r.jsx)(p.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function ac() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([tK.A], () => tK.A.games),
        s = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => ao(t.value) - ao(e.value)),
            [l],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => ao(t.item.value) - ao(e.item.value), keys: ["label"] }), []),
        c = o.useCallback((e) => {
            t(e), null != e && n("");
        }, []),
        u = o.useCallback((e) => {
            n(e), e.trim().length > 0 && t(null);
        }, []),
        m = a.trim(),
        h = m.length > 0 ? m : (e ?? void 0),
        g = (0, tH.A)({ gameId: h, location: "DevToolsGameProfile", source: tz.GameProfileSources.DevTools });
    return (0, r.jsx)("div", {
        className: tV.nd,
        children: (0, r.jsxs)(z.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(z.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-md/bold", children: "Game Profile" }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)(z.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(an.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: s,
                            value: m.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: c,
                            selectionMode: "single",
                            clearable: !0,
                            matchSorterOptions: i,
                        }),
                    ],
                }),
                (0, r.jsxs)(z.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(f.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: u,
                        }),
                        m.length > 0 && (0, r.jsx)(ad, { gameId: m }),
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
var au = a(554146),
    am = a(594061),
    ah = a(617617),
    ax = a(355898),
    ap = a(644103),
    ag = a(574560),
    av = a(994182);
let aj = [
        au.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        au.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
        au.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
    ].map((e) => ({ id: String(e), label: au.M[e], value: e })),
    af = { "global-cooldown": "global cooldown", "per-game-cooldown": "per-game cooldown", disabled: "disabled" };
function ab() {
    let [e, t] = o.useState("dismissals"),
        [a, n] = o.useState(au.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, d.bG)([ah.A], () => ah.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        s = (0, d.bG)([ag.A], () => ag.A.getAllGameUpsellDismissals(a)),
        i = o.useMemo(() => Object.keys(s ?? {}), [s]),
        c = (0, tB.A)(i),
        [u, m] = o.useState(""),
        [h, g] = o.useState([]);
    o.useEffect(
        () =>
            (0, ap.Y)((e) => {
                g((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let v = o.useMemo(() => {
            let e = new Set();
            for (let t of h) for (let a of t.applicationIds) e.add(a);
            return [...e];
        }, [h]),
        y = (0, tB.A)(v),
        E = o.useMemo(() => Object.fromEntries(v.map((e, t) => [e, y[t]])), [v, y]),
        _ =
            l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
                ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
                : "Never";
    return (0, r.jsxs)("div", {
        className: av.nd,
        children: [
            (0, r.jsxs)("div", {
                className: av.$H,
                children: [
                    (0, r.jsx)(V.D, {
                        className: $()(av.V3, { [av.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(V.D, {
                        className: $()(av.V3, { [av.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", h.length > 0 ? `(${h.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: av.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: av.uW,
                              children: (0, r.jsx)(j.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: aj,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: av.uW,
                              children: [
                                  (0, r.jsx)(K.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, r.jsxs)(p.E, { variant: "text-sm/normal", children: ["Last dismissed: ", _] }),
                                  (0, r.jsxs)(p.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                                  (0, r.jsx)(x.$, {
                                      variant: "secondary",
                                      text: "Reset Global DCF State",
                                      onClick: () => (0, am._N)(a),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: av.uW,
                              children: [
                                  (0, r.jsx)(K.D, { variant: "heading-md/bold", children: "Mark as Dismissed" }),
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
                                          (0, ax.M)([u.trim()], a), m("");
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(b.c, {}),
                          (0, r.jsxs)("div", {
                              className: $()(av.uW, av.LY),
                              children: [
                                  (0, r.jsxs)(K.D, {
                                      variant: "heading-md/bold",
                                      children: ["Per-Game Dismissals (", i.length, ")"],
                                  }),
                                  0 === i.length
                                      ? (0, r.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: "No dismissal data for this content type.",
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                i.map((e, t) => {
                                                    let n = c[t],
                                                        l = s?.[e];
                                                    if (null == l) return null;
                                                    let i = n?.getIconURL(32);
                                                    return (0, r.jsxs)(
                                                        "div",
                                                        {
                                                            className: av.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: av.MY,
                                                                    children: [
                                                                        null != i &&
                                                                            (0, r.jsx)("img", {
                                                                                src: i,
                                                                                alt: "",
                                                                                className: av.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: av.qi,
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
                                                                            onClick: () => (0, ax.e)(e, a),
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
                                                        for (let e of i) (0, ax.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: av.Lj,
                      children: (0, r.jsxs)("div", {
                          className: av.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: av.aq,
                                  children: [
                                      (0, r.jsxs)(K.D, {
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
                                                className: av.Nr,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: av.O9,
                                                        children: [
                                                            (0, r.jsx)(p.E, {
                                                                variant: "text-xs/semibold",
                                                                children: new Date(e.timestamp).toLocaleTimeString(),
                                                            }),
                                                            e.disabled &&
                                                                (0, r.jsx)("span", {
                                                                    className: av.t7,
                                                                    children: "(disabled)",
                                                                }),
                                                            (0, r.jsx)(p.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: au.M[e.dismissibleContent],
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
                                                                  s = e.excludedReasons[t];
                                                              return (0, r.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className: av.Ss,
                                                                      children: [
                                                                          null != n &&
                                                                              (0, r.jsx)("img", {
                                                                                  src: n,
                                                                                  alt: "",
                                                                                  className: av.rb,
                                                                              }),
                                                                          (0, r.jsx)("span", {
                                                                              className: av.Jd,
                                                                              children: a?.name ?? t,
                                                                          }),
                                                                          l
                                                                              ? (0, r.jsx)("span", {
                                                                                    className: av.OK,
                                                                                    children: "eligible",
                                                                                })
                                                                              : null != s
                                                                                ? (0, r.jsx)("span", {
                                                                                      className: av.t7,
                                                                                      children: af[s],
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
var ay = a(696986),
    aE = a(47167),
    a_ = a(734057),
    aC = a(994500),
    aS = a(310031),
    aN = a(394953),
    aA = a(732421);
let ak = [
        {
            key: "channelName",
            cellClassName: $()(aA.Hn, aA.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: $()(aA.Hn, aA.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    aD = [
        {
            key: "channelName",
            cellClassName: $()(aA.Hn, aA.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: $()(aA.Hn, aA.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: $()(aA.Hn, aA.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function aI() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, aN.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, t_.cf)([aS.A], () => ({
            isLoading: aS.A.isLoading,
            hasLoadedEver: aS.A.hasLoadedEver,
            hasPreloaded: aS.A.hasPreloaded,
            hasMoreToLoad: aS.A.hasMoreToLoad,
            isLoadingComplete: aS.A.isLoadingComplete,
        })),
        o = (0, t_.bG)([aS.A], () => aS.A.currentRequestAnalyticsPayload),
        d = (0, t_.cf)([aS.A], () => aS.A.getChannelInfoMap()),
        c = (0, t_.cf)([a_.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = a_.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        u = (0, t_.cf)([a_.A], () =>
            t.reduce((e, t) => {
                let a = a_.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, t_.bG)([aS.A], () => aS.A.getInboxMessages()),
        x = (0, t_.bG)([aS.A], () => aS.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tV.nd,
        children: (0, r.jsxs)(g.Ip, {
            className: aA.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(m.d, {
                                label: "Nav On Click",
                                checked: !!x,
                                onChange: (e) => {
                                    tG.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(ay.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(tW, {
                            columns: ak,
                            data: Object.entries(u).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, aE.m1)(a, el.default, aC.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-lg/semibold", children: "Store State" }),
                        (0, r.jsxs)("div", { children: ["Is Loading: ", a ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has Preloaded: ", l ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has Loaded Ever: ", n ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has More To Load: ", s ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Is Loading Complete: ", i ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Last Loading Trigger: ", o?.loadingTrigger] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(tW, {
                            columns: aD,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = c[a]) ? (0, aE.m1)(t, el.default, aC.A) : "",
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
var aT = a(976860),
    aR = a(340124),
    aO = a(988483);
let aw = function () {
    return (0, r.jsxs)("div", {
        className: aO.k,
        children: [
            (0, r.jsx)(p.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(x.$, {
                onClick: () => {
                    (0, aR.Ov)(), (0, aT.pX)(eo.BVt.QUEST_HOME);
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
var aM = a(271866),
    aL = a(868511),
    aP = a(147964),
    aU = a(760716),
    aG = a(115093),
    aF = a(11039);
let aB = window.GLOBAL_ENV.RELEASE_CHANNEL === aG.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function a$() {
    let e = (0, aU.i)((e) => e.overrideApplicationId),
        t = (0, aU.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        n = (0, aU.i)((e) => e.overrideNitroEligibilityForSocialLayerStorefront),
        l = (0, aU.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
        s = (0, aU.i)((e) => e.isNitroEligibleForSocialLayerStorefront),
        i = (0, aU.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront),
        [c, u] = o.useState(aB),
        [h, p] = o.useState(eo.FYj),
        g = o.useCallback(
            (e) => {
                e ? t(c) : t(null);
            },
            [c, t],
        ),
        v = o.useCallback(
            (e) => {
                u(e), a && t(e);
            },
            [a, t],
        ),
        j = (0, aU.i)((e) => e.showSelfActivity),
        b = (0, aU.i)((e) => e.setShowSelfActivity),
        y = (0, aU.i)((e) => e.recommendationApplicationIds),
        E = (0, aU.i)((e) => e.setRecommendationApplicationIds),
        _ = o.useCallback(
            (e) => {
                e ? E(h) : E(null);
            },
            [h, E],
        ),
        C = (0, d.bG)([aP.A], () => null != aP.A.testModeApplicationId),
        S = o.useCallback((e) => {
            e ? (0, eW.openModal)((e) => (0, r.jsx)(aL.A, { ...e })) : aM.cL();
        }, []),
        N = (0, tH.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: c,
            source: tz.GameProfileSources.Embed,
            trackEntryPointImpression: !0,
        }),
        A = o.useCallback(
            (e) => {
                N?.(e);
            },
            [N],
        ),
        k = o.useCallback(() => {
            (0, aT.pX)(eo.BVt.COLLECTIBLES_SHOP_GAME_SHOP(c));
        }, [c]);
    return (0, r.jsx)("div", {
        className: $()(tV.nd, aF.n),
        children: (0, r.jsxs)("div", {
            className: aF.k,
            children: [
                (0, r.jsx)(f.k, { label: "Application ID", value: c, onChange: v }),
                (0, r.jsx)(K.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(m.d, { label: "Override activity application ID", checked: a, onChange: g }),
                (0, r.jsx)(m.d, { label: "Show own voice activity (bypass self check)", checked: j, onChange: b }),
                (0, r.jsx)(m.d, { label: "Enable application test mode", checked: C, onChange: S }),
                (0, r.jsx)(x.$, { text: "Open Game Profile Modal", onClick: A }),
                (0, r.jsx)(x.$, { text: "Navigate to App Game Shop", onClick: k }),
                (0, r.jsx)(K.D, { variant: "heading-lg/normal", children: "Wishlists" }),
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
                (0, r.jsx)(m.d, { label: "Is nitro eligible for social layer storefront", checked: s, onChange: i }),
            ],
        }),
    });
}
var aV = a(540999),
    aW = a(723702),
    az = a(865116);
a(670812), a(772958);
var aH = a(58736);
a(558179), a(21574);
var aK = a(231545),
    aY = a(761929),
    aq = a(23599);
function aJ(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, aY.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: aY.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: aq.Di });
}
function aQ(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: aq.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(aJ, { resizableNode: s, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: $()(aq.KZ, a), children: t }),
        ],
    });
}
var aX = a(231643);
a(895017), aX.fu.NONE, aX.fu.NONE;
var aZ = a(825484),
    a0 = a(824552),
    a1 = a(688810),
    a2 = a(975460),
    a3 = a(206828),
    a6 = a(487431),
    a8 = a(546183),
    a5 = a(134861),
    a9 = a(71393),
    a7 = a(967198),
    a4 = a(942370),
    ne = a(375708),
    nt = a(311350),
    na = a(325126);
function nn() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, a1.Ay)(tC.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        c = (0, d.bG)([a7.A], () => a7.A.getGuildId()),
        u = (0, d.bG)([a9.A], () => a9.A.getGuild(c)),
        m = u?.gameApplicationIds ?? [],
        h = (0, tB.A)(m).filter((e) => null != e),
        g = (0, d.bG)([E.Ay, S.A], () => (0, _.A)(E.Ay, S.A)),
        v = (0, tB.h)(s),
        j = (0, a2.g)(v),
        y = (0, d.yK)(
            [tF.A],
            () => v?.linkedGames?.map((e) => tF.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        C = (0, a3.RD)(v, { allowedFlows: [a4._M.RPC], debug: !0 }),
        N = (0, a3.RD)(v, { allowedFlows: [a4._M.WEB], debug: !0 }),
        A = (0, d.bG)([a5.A], () => null != j && a5.A.isConnected(j.id)),
        k = (0, a3.RD)(v, { debug: !0 }),
        { canDeauthorize: D, deauthorize: I } =
            ((e = k.connectionApp?.id),
            (t = (0, d.bG)([a8.default], () => a8.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && a0.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: $()(tV.nd, na.nd),
        children: [
            (0, r.jsxs)("div", {
                className: na.kL,
                children: [
                    (0, r.jsx)(K.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(f.k, { label: "Application ID", value: s, onChange: i }),
                    null != g && null != g.id
                        ? (0, r.jsx)(x.$, {
                              onClick: () => i(g.id),
                              variant: "primary",
                              text: `Use detected game: ${g.name} (${g.id})`,
                          })
                        : null,
                    null != u
                        ? h.length > 0
                            ? (0, r.jsxs)("div", {
                                  className: na.Mc,
                                  children: [
                                      (0, r.jsxs)(p.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: [u.name, " (", u.id, ") \xb7 Official games"],
                                      }),
                                      (0, r.jsx)(aZ.e, {
                                          size: "sm",
                                          wrap: !0,
                                          children: h.map((e) =>
                                              (0, r.jsx)(
                                                  x.$,
                                                  {
                                                      onClick: () => i(e.id),
                                                      variant: s === e.id ? "primary" : "secondary",
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
                        className: na.J3,
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
                                        ? y.map((e) => ((0, a2.t)(v)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                        : "N/A",
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)("div", {
                className: na.kL,
                children: [
                    (0, r.jsx)(K.D, { variant: "heading-lg/normal", children: "Authorization status" }),
                    (0, r.jsx)(a6.VT, {
                        flow: a4._M.RPC,
                        showGlobalFlowToggle: !0,
                        overallStatus: C.debug.isSubscribedToAuthorizeRequest
                            ? a6.nW.OVERALL_GOOD
                            : A
                              ? a6.nW.WARN
                              : a6.nW.OVERALL_BAD,
                        name: ne.intl.string(nt.default.AGLx00),
                        steps: [
                            {
                                status: A ? a6.nW.GOOD : a6.nW.BAD,
                                text: ne.intl.string(nt.default.kxF9br),
                                description: A ? null : ne.intl.string(nt.default.PFxxJa),
                                learnMoreLink: A
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: C.debug.isSubscribedToAuthorizeRequest
                                    ? a6.nW.GOOD
                                    : A
                                      ? a6.nW.WARN
                                      : a6.nW.BAD,
                                text: ne.intl.string(nt.default.S94dzs),
                                description:
                                    C.debug.isSubscribedToAuthorizeRequest || !A
                                        ? null
                                        : ne.intl.string(nt.default.aTULMB),
                                learnMoreLink:
                                    C.debug.isSubscribedToAuthorizeRequest || !A
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: k.chosenFlow === a4._M.RPC,
                    }),
                    (0, r.jsx)(a6.VT, {
                        flow: a4._M.WEB,
                        showGlobalFlowToggle: !0,
                        overallStatus: N.debug.hasConnectionEntrypointUrl ? a6.nW.OVERALL_GOOD : a6.nW.OVERALL_BAD,
                        name: ne.intl.string(nt.default.K3ObrU),
                        steps: [
                            {
                                status: N.debug.hasConnectionEntrypointUrl ? a6.nW.GOOD : a6.nW.BAD,
                                text: ne.intl.string(nt.default["8a7IrV"]),
                                description: N.debug.hasConnectionEntrypointUrl
                                    ? ne.intl.formatToPlainString(nt.default["9iLeL2"], {
                                          url: N.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: k.chosenFlow === a4._M.WEB,
                    }),
                    (0, r.jsx)(a6.Sy, {
                        status: k.hasAlreadyLinked ? a6.nW.OVERALL_GOOD : a6.nW.OVERALL_BAD,
                        text: ne.intl.string(ne.t["Vu/zmQ"]),
                    }),
                    0 === k.debug.validFlows.length &&
                        (0, r.jsx)(p.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: ne.intl.string(nt.default.eg0mNa),
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
                    (0, r.jsxs)(aZ.e, {
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
                            className: na.kL,
                            children: [
                                (0, r.jsx)(K.D, { variant: "heading-lg/normal", children: "Benefit configuration" }),
                                (0, r.jsx)("div", {
                                    className: na.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: na.Tc,
                                        children: [
                                            null != v.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: v.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: na.L8,
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
var nl = a(427358),
    ns = a(465153);
function ni(e) {
    let { title: t, sortKey: a, activeSortKey: n, sortDir: l, onClick: s } = e,
        i = n === a ? ("desc" === l ? " \u25BC" : " \u25B2") : "";
    return (0, r.jsx)(V.D, {
        className: ns.K8,
        onClick: () => s(a),
        children: (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: t + i }),
    });
}
function nr() {
    let [e, t] = o.useState("affinity"),
        [a, n] = o.useState("desc"),
        l = o.useCallback(
            (a) => {
                e === a ? n((e) => ("asc" === e ? "desc" : "asc")) : (t(a), n("username" === a ? "asc" : "desc"));
            },
            [e],
        ),
        s = (0, d.yK)([nl.A, el.default], () =>
            nl.A.getUserAffinities().map((e) => {
                let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
                return { user: el.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
            }),
        ),
        i = o.useMemo(
            () =>
                [...s].sort((t, n) => {
                    let l;
                    if ("username" === e) {
                        let e = t.user?.username ?? t.key,
                            a = n.user?.username ?? n.key;
                        l = e.localeCompare(a);
                    } else l = t[e] - n[e];
                    return "desc" === a ? -l : l;
                }),
            [s, e, a],
        ),
        c = o.useMemo(
            () => [
                {
                    key: "user",
                    cellClassName: ns.iL,
                    renderHeader: () =>
                        (0, r.jsx)(ni, {
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
                        (0, r.jsx)(ni, {
                            title: "COMMUNICATION AFFINITY",
                            sortKey: "affinity",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: ns.nz,
                    render(e) {
                        let { affinity: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "vcProbability",
                    renderHeader: () =>
                        (0, r.jsx)(ni, {
                            title: "VOICE AFFINITY",
                            sortKey: "vcProbability",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: ns.nz,
                    render(e) {
                        let { vcProbability: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "isFriend",
                    renderHeader: () => (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
                    cellClassName: ns.nz,
                    render(e) {
                        let { isFriend: t } = e;
                        return t.toString();
                    },
                },
            ],
            [e, a, l],
        );
    return 0 === s.length ? null : (0, r.jsx)(tW, { className: tV.nd, columns: c, rowClassName: ns.nM, data: i });
}
var no = a(379257),
    nd = a(847599),
    nc = a(282621);
function nu() {
    return (0, r.jsx)("div", {
        className: $()(tV.nd, nc.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(K.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(b.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: nc.h,
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, eW.openModalLazy)(
                                    async () => {
                                        let { default: e } = await a.e("51460").then(a.bind(a, 357578));
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
                                no.A.showAgeVerificationGetStartedModal({ entryPoint: nd.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var nm = a(989349),
    nh = a.n(nm),
    nx = a(862482),
    np = a(624479),
    ng = a(555704),
    nv = a(285796),
    nj = a(241326),
    nf = a(892547),
    nb = a(297413),
    ny = a(379078),
    nE = a(704554),
    n_ = a(957565),
    nC = a(58703),
    nS = a(80703),
    nN = a(280450);
let nA = 0,
    nk = [],
    nD = 0,
    nI = [],
    nT = !1;
class nR extends d.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nN.default, aV.A);
    }
    get loggedEvents() {
        return nk;
    }
    get loggedEventsVersion() {
        return nD;
    }
    get loggedTriggers() {
        return nI;
    }
    get trackTriggers() {
        return nT;
    }
}
let nO = new nR(tG.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        aV.A.isDeveloper &&
            (nk.push({
                key: (nA++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, nS.d)(n) : nN.default.getId(),
                timestamp: new Date(),
            }),
            nD++,
            nk.length > 500 && (nk = nk.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !aV.A.isDeveloper ||
            (nT &&
                (nI = [
                    ...nI,
                    {
                        key: (0, eI.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                nI.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        nT = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (nk = []), nD++, (nI = []);
    },
});
var nw = a(658675);
function nM(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: $()(tV.qo, t), children: a });
}
function nL(e) {
    let { name: t, children: a, copyValue: n } = e,
        [l, s] = o.useState(!1);
    return (
        o.useEffect(() => {
            if (l) {
                let e = setTimeout(() => s(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("dt", { className: tV.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tV.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(V.D, {
                                  tag: "span",
                                  className: tV.nH,
                                  onClick: () => (0, n_.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(ti.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(np.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
}
function nP(e) {
    let { value: t } = e;
    return (0, r.jsx)(nw.P, { checked: t });
}
var nU = a(733657);
let nG = [
    {
        key: "event",
        cellClassName: nU.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: nU.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function nF(e) {
    let { children: t } = e;
    return (0, r.jsx)(g.Ip, { className: nU._D, children: (0, r.jsx)("dl", { children: t }) });
}
function nB(e) {
    let { name: t, children: a, copyValue: n } = e,
        [l, s] = o.useState(!1);
    return (
        o.useEffect(() => {
            if (l) {
                let e = setTimeout(() => s(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, r.jsxs)("div", {
            className: nU.fY,
            children: [
                (0, r.jsx)("dt", { className: nU.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(V.D, {
                    tag: "span",
                    className: nU.nH,
                    onClick: () => (0, n_.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(ti.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(np.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let n$ = new Set(["client_performance_cpu", "client_performance_memory"]),
    nV = [
        {
            id: "details",
            name: "Details",
            group: aX.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = el.default.getUser(l),
                    d = nh()(n);
                return (0, r.jsxs)("div", {
                    className: nU.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(aH.Ay, {
                            className: $()(tV.jr, nU.nZ),
                            children: [
                                (0, r.jsx)(aH.Ay.Icon, { icon: ng.U, tooltip: t }),
                                (0, r.jsxs)(aH.Ay.Title, {
                                    wrapperClassName: nU.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(V.D, {
                                            tag: "span",
                                            className: nU.KE,
                                            onClick: () => (0, n_.C)(t),
                                            children: (0, r.jsx)(np.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(aH.Ay.Icon, {
                                    icon: np.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, n_.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(aH.Ay.Icon, { icon: nv.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(nM, {
                            className: nU.ZK,
                            children: [
                                (0, r.jsx)(nL, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nC.i$)(d, "LLLL"),
                                        children: ["(", nh().locale(), ") ", (0, nC.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nL, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(nb.A, { user: o }),
                                    }),
                                (0, r.jsx)(nL, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(nF, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = n$.has(a)
                                        ? (function (e, t, a) {
                                              let n = e.filter((e) => e.event === t);
                                              if (0 === n.length) return { average: null, count: 0 };
                                              let l = null,
                                                  s = 0;
                                              for (let e of n) {
                                                  let t = e.properties[a];
                                                  "number" == typeof t && ((s += 1), null == l ? (l = t) : (l += t));
                                              }
                                              return { average: null !== l ? l / n.length : null, count: s };
                                          })(i, t, a)
                                        : null;
                                return (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(
                                                nB,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nU.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    nB,
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
    nW = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(nW)
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
    nz = {
        searchType: ny.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function nH() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, d.bG)([nO], () => nO.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(nW)),
        [i, c] = o.useState(nO.loggedEvents),
        u = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nE.RT)(t, nO.loggedEvents, u, nz, [n]);
    let m = i.filter((e) => {
            for (let t of l) if (nW[t].filter(e)) return !0;
            return !1;
        }),
        [h, x] = o.useState(void 0),
        p = m.find((e) => e.key === h),
        { TabBar: g, renderSelectedTab: v } = (0, aX.Ay)({ tabs: nV }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: $()(tV.nd, nU.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nU.rh,
                children: [
                    (0, r.jsx)(nx.$n, {
                        className: nU.Q$,
                        look: nx.$n.Looks.BLANK,
                        size: nx.$n.Sizes.ICON,
                        onClick: Y.eY,
                        children: (0, r.jsx)("span", {
                            title: ne.intl.string(ne.t.VkKicb),
                            children: (0, r.jsx)(nj.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": ne.intl.string(ne.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nU.Bi }),
                    (0, r.jsx)("div", {
                        className: nU.uW,
                        children: Object.entries(nW).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                V.D,
                                {
                                    className: $()(nU.pb, l.includes(t) && nU.bx),
                                    onClick: () => {
                                        s((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
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
                className: nU.rh,
                children: (0, r.jsx)(nf.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tW, { columns: nG, data: m, selectedRowKey: h, onClickRow: (e) => x(e.key) }),
            null != p &&
                (0, r.jsxs)(aQ, {
                    className: nU.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(g, {}), v({ loggedEvent: p, onClose: () => x(void 0), filteredEvents: m })],
                }),
        ],
    });
}
var nK = a(382483),
    nY = a(385113),
    nq = a(315117);
function nJ(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(z.B, {
        gap: 8,
        padding: 8,
        className: nq.lt,
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
                          z.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: nq.YL,
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
function nQ(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(z.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? nq.FM : nq.gt,
        children: [
            (0, r.jsx)(V.D, {
                className: nq.Av,
                onClick: n,
                children: (0, r.jsxs)(z.B, {
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
                onClick: () => (0, nK.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function nX() {
    let e = (0, d.bG)([nY.A], () => nY.A.getFeaturedFetchState());
    return (0, r.jsxs)(z.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(z.B, {
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
                onClick: () => (0, nK.Wq)({ force: !0 }),
            }),
        ],
    });
}
function nZ() {
    let e = (0, d.bG)([nY.A], () => nY.A.getDeveloperFetchState());
    return (0, r.jsxs)(z.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(z.B, {
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
                onClick: () => (0, nK.i$)({ force: !0 }),
            }),
        ],
    });
}
function n0() {
    let [e, t] = o.useState(""),
        a = (0, d.bG)([nY.A], () => (e.length > 0 ? nY.A.getFetchState(e) : null)),
        n = (0, d.bG)([nY.A], () => (e.length > 0 ? nY.A.getConfigs(e) : null));
    return (0, r.jsxs)(z.B, {
        gap: 8,
        children: [
            (0, r.jsx)(p.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(f.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, nK.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(p.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(z.B, { gap: 4, children: n.map((e) => (0, r.jsx)(nJ, { config: e }, e.config_id)) }),
        ],
    });
}
function n1(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, d.bG)([nY.A], () => nY.A.getFeaturedFetchState());
    return (0, r.jsxs)(z.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(p.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === nY.e.FETCHING &&
                (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    nQ,
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
function n2(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(z.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(nJ, { config: t }),
                ],
            }),
        ],
    });
}
function n3() {
    let [e, t] = o.useState(null),
        a = Object.values((0, d.bG)([nY.A], () => nY.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)(z.B, {
            gap: 16,
            padding: 8,
            className: nq.zr,
            children: [
                (0, r.jsx)(K.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(x.$, {
                    size: "sm",
                    variant: "critical-secondary",
                    text: "Reset store",
                    onClick: () => tG.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEBUG_RESET" }),
                }),
                (0, r.jsx)(nX, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(nZ, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(n0, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(n1, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(n2, { config: n }),
            ],
        }),
    });
}
var n6 = a(636537),
    n8 = a(153488),
    n5 = a(927813);
let n9 = 12 * n5.A.Millis.HOUR,
    n7 = new Map(),
    n4 = !1,
    le = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    lt = { ...le };
function la() {
    n7 = new Map(lt.channelAffinities.map((e) => [e.channelId, e]));
}
class ln extends d.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((lt.channelAffinities = e.channelAffinities), (lt.lastFetched = e.lastFetched), la());
    }
    shouldFetch() {
        if (!n4) return Date.now() - lt.lastFetched > n9;
    }
    isFetching() {
        return n4;
    }
    getChannelAffinities() {
        return lt.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return n7;
    }
    getChannelAffinity(e) {
        return n7.get(e);
    }
    compare(e, t) {
        return (n7.get(t)?.score ?? 0) - (n7.get(e)?.score ?? 0);
    }
    getState() {
        return lt;
    }
}
let ll = new ln(tG.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        n4 = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (lt.lastFetched = Date.now()), (n4 = !1), (lt.channelAffinities = t), la();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        n4 = !1;
    },
    LOGOUT: function () {
        (lt = { ...le }), (n7 = new Map()), (n4 = !1);
    },
});
var ls = a(907360);
let li = [
    {
        key: "channel",
        cellClassName: ls._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: ls.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function lr() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            ll.shouldFetch() && n8.A.hasConsented(eo.YAq.PERSONALIZATION)
                ? (tG.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  n6.Bo.get({
                      url: eo.Rsh.CHANNEL_AFFINITIES_V2,
                      retries: 3 * !!e,
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }).then(
                      (e) => {
                          let { body: t } = e;
                          tG.h.dispatch({
                              type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
                              affineChannels: t.channel_affinities.map((e) => ({
                                  channelId: e.channel_id,
                                  score: e.score ?? 0,
                              })),
                          });
                      },
                      () => {
                          tG.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
                      },
                  ))
                : Promise.resolve();
        })();
    }, []);
    let e = (0, d.yK)([ll, a_.A], () =>
        ll
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: a_.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tW, { className: tV.nd, columns: li, rowClassName: ls.nM, data: e });
}
function lo() {
    return (0, r.jsxs)(p.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var ld = a(105565),
    lc = a(558845),
    lu = a(193337);
function lm(e) {
    switch (e) {
        case ld.r.DC_DISMISSED:
            return "DISMISS:";
        case ld.r.DC_SHOWN:
            return "SHOW:";
        case ld.r.DC_SHOW_REQUEST:
            return "REQUEST TO SHOW:";
        default:
            return "UNKNOWN TYPE:";
    }
}
let lh = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${au.M[a]}`;
            },
        },
    ],
    lx = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${au.M[t]}`;
            },
        },
    ];
function lp() {
    let e = (0, d.bG)([ld.A], () => ld.A.getDCFEvents()),
        t = (0, lc.Ay)((e) => e.candidates),
        a = (0, lc.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? nh()(a).fromNow() : "n/a",
        l = (0, lc.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: lm(t) + a.toString(), event: lm(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: lu.KE,
        children: [
            (0, r.jsxs)("div", { className: lu.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: lu.pq, children: ["Last winner: ", null != l ? au.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: lu.uI,
                children: (0, r.jsx)(tW, { className: lu.Th, columns: lx, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tW, { columns: lh, data: s }),
        ],
    });
}
var lg = a(689175),
    lv = a(541689),
    lj = a(199773);
function lf() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(lb());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tU.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [lb(), e];
}
function lb() {
    return tU.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var ly = a(662546),
    lE = a(643278),
    l_ = a(256787),
    lC = a(20439);
let lS = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = au.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, lC.A)(l),
        [d, c] = o.useState(!1),
        u = o.useCallback(() => {
            n?.(a), i();
        }, [n, i, a]),
        h = o.useCallback(
            (e) => {
                e.preventDefault(), c(!0), navigator.clipboard.writeText(a.toLowerCase());
            },
            [a],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(z.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eB.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? ly.O : lE.s,
                        onClick: h,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(m.d, {
                        label: `${a.toLowerCase()} (${au.M[a]})`,
                        description: (0, l_.Zm)(l)
                            ? (function (e) {
                                  let t = ah.A.settings.userContent?.recurringDismissibleContentStates?.[e];
                                  if (null == t) return null;
                                  let a = [],
                                      { lastDismissedVersion: n, lastDismissedAtMs: l, lastDismissedObjectId: s } = t;
                                  if (
                                      (void 0 !== n && 0 !== n && a.push(`last_dismissed_version: ${n}`), void 0 !== l)
                                  ) {
                                      let e = Number(l),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      a.push(`last_dismissed_at: ${t}`);
                                  }
                                  return (void 0 !== s && "0" !== s && a.push(`last_dismissed_object_id: ${s}`),
                                  0 === a.length)
                                      ? null
                                      : a.join(", ");
                              })(l)
                            : null,
                        checked: s,
                        onChange: u,
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
        ],
    });
});
function lN(e) {
    let { items: t, onChange: a } = e,
        [n, l] = lf(),
        s = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)(z.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lS, { content: e, onChange: s }, e)),
    });
}
function lA(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lc.Ay)((e) => e.recentlyShown),
        [n, l] = lf(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(au.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(lN, { items: s }) });
}
function lk(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lc.Ay)((e) => e.recentlyShown)
            .map((e) => au.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(lN, { items: a }) });
}
var lD = a(268571);
function lI() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, d.cf)([lj.A], () => ({
            dailyCapReached: lj.A.hasUserHitDCCap(),
            dailyCapOverridden: lj.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lj.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [s, i] = o.useState(20),
        c = o.useMemo(
            () =>
                Object.keys(au.M)
                    .filter((e) => e.toLowerCase().includes(n.toLowerCase()))
                    .reverse(),
            [n],
        ),
        h = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < c.length && i((e) => e + 100);
            },
            [s, c.length],
        );
    return (0, r.jsx)(lg.Ch, {
        onScroll: h,
        children: (0, r.jsxs)("div", {
            className: lD.KE,
            children: [
                (0, r.jsxs)(u.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(z.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, lv.Ab)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, am.nT)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, am.D1)(),
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
                            onChange: lv.SE,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: lv.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(lk, {}),
                (0, r.jsx)(lA, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(nf.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(lN, { items: c.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lT = a(276086),
    lR = a(154323),
    lO = a(155248);
function lw() {
    let e = (0, d.bG)([lR.A], () => lR.A.allWithDescriptions(), [], d.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                m.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lT.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(b.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lO.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lO.x6,
                children: (0, r.jsx)(x.$, { variant: "primary", text: "Clear all", onClick: lT.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lO.vu, children: t }),
        ],
    });
}
var lM = a(881436);
function lL() {
    let e = (0, d.bG)([tK.A], () => tK.A.detectableGamesEtag),
        t = (0, d.bG)([tK.A], () => tK.A.lastFetched),
        a = (0, d.bG)([tK.A], () => tK.A.games.length);
    return (0, r.jsxs)(z.B, {
        gap: 4,
        children: [
            (0, r.jsx)(K.D, { variant: "heading-sm/bold", children: "Cache Status" }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: [(0, r.jsx)("strong", { children: "Total games:" }), " ", a],
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "ETag:" }),
                    " ",
                    "" === e ? "(empty)" : (0, r.jsx)("span", { className: lM.ti, children: e }),
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
function lP(e) {
    let { game: t } = e;
    return (0, r.jsxs)(z.B, {
        gap: 12,
        className: lM.f_,
        children: [
            (0, r.jsxs)(z.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                children: [
                    (0, r.jsx)(al.A, { game: t, size: al.M.LARGE }),
                    (0, r.jsxs)(z.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(K.D, { variant: "heading-lg/bold", children: t.name }),
                            (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t.id }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: lM.aY, children: JSON.stringify(t, null, 2) }),
        ],
    });
}
function lU() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([tK.A], () => tK.A.games),
        s = o.useMemo(
            () =>
                l.filter((e) => null != e.name && "" !== e.name).map((e) => ({ id: e.id, value: e.id, label: e.name })),
            [l],
        ),
        i = o.useCallback((e) => {
            t(e), null != e && n("");
        }, []),
        c = o.useCallback((e) => {
            n(e), e.trim().length > 0 && t(null);
        }, []),
        u = a.trim(),
        m = u.length > 0 ? u : (e ?? void 0),
        h = (0, d.bG)([tK.A], () => (null != m ? (tK.A.getDetectableGame(m) ?? null) : null), [m]);
    return (0, r.jsx)("div", {
        className: $()(tV.nd, lM.kL),
        children: (0, r.jsxs)(z.B, {
            gap: 16,
            padding: 12,
            className: lM.rf,
            children: [
                (0, r.jsxs)(z.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-md/bold", children: "Detectable Cache" }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Inspect the local detectable games cache. Use this to verify whether a SKU or executable change has propagated to your client.",
                        }),
                    ],
                }),
                (0, r.jsx)(lL, {}),
                (0, r.jsxs)(z.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(an.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: s,
                            value: u.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: i,
                            selectionMode: "single",
                            clearable: !0,
                        }),
                    ],
                }),
                (0, r.jsxs)(z.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-sm/bold", children: "Game ID" }),
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
                                ? (0, r.jsx)(lP, { game: h })
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
var lG = a(691540),
    lF = a(97483),
    lB = a(123292),
    l$ = a(780907),
    lV = a(56562);
let lW = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function lz(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, ai.I)(t.id);
    return (0, r.jsxs)(z.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(al.A, { game: n }),
            (0, r.jsxs)(z.B, {
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
function lH() {
    let e = (0, d.bG)([E.Ay], () => E.Ay.getRunningGames()),
        t = (0, d.bG)([E.Ay], () => E.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                lW.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        );
    function s(e) {
        if (null == e || "" === e) return void (0, l$.xt)(null);
        let t = tK.A.getDetectableGame(e),
            a = t?.executables[0],
            n = t?.thirdPartySkus[0]?.distributor;
        if (null == t || null == a)
            return (0, lG.P0)({ id: "devtools-set-debug-game-error", type: lF.Ck.FAILURE, message: "Invalid Game ID" });
        (0, l$.xt)({
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
            fullscreenType: lV.aI.UNKNOWN,
            cmdLine: "",
            nativeProcessObserverId: -1,
        });
    }
    return (0, r.jsxs)(z.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(z.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(K.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(lz, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(z.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(K.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(f.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(an.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: function (e) {
                            s(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(z.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(lB.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(x.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lK = a(240248),
    lY = a(769195);
function lq() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), n(null), s(null);
                let e = await n6.Bo.put({
                    url: "/users/@me/developer-portal/onboarding",
                    body: { completed: !1 },
                    rejectWithError: !0,
                });
                n(`${e.status}: ${e.text}`);
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            } finally {
                t(!1);
            }
        }, []);
    return (0, r.jsxs)(z.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(x.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lK.uJ)(a) && (0, r.jsx)(p.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lK.uJ)(l) &&
                (0, r.jsx)(p.E, { variant: "text-md/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function lJ() {
    return (0, r.jsx)("div", {
        className: lY.n,
        children: (0, r.jsx)(z.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lq, {}) }),
    });
}
a(172879);
var lQ = a(64015),
    lX = a.n(lQ),
    lZ = a(874804),
    l0 = a(866665),
    l1 = a(782134),
    l2 = a(113494),
    l3 = a(603349),
    l6 = a(155466);
function l8(e) {
    return parseFloat(e.toFixed(3));
}
let l5 = [
    {
        key: "store",
        cellClassName: l6.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: l6.i7,
        render(e) {
            let { trace: t } = e;
            return `${l8(t.time)} ms`;
        },
    },
];
function l9(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(g.Ip, { children: (0, r.jsx)(tW, { columns: l5, data: a }) });
}
let l7 = [
    {
        id: "action",
        name: "Action",
        group: aX.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = nh()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(nM, {
                        className: l6.mP,
                        children: [
                            (0, r.jsx)(nL, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nC.i$)(a, "LLLL"),
                                    children: (0, nC.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nL, { name: "Total Time", children: [l8(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(g.Ip, { className: l6.Dx, children: (0, r.jsx)(aK.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: aX.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(l9, { actionLog: t });
        },
    },
];
function l4(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...l7,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(l3.A, { className: l6.ik }), "Error"],
                              }),
                              group: aX.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: $()(l6.u4, tV.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tV.R5,
                                                  children: (0, r.jsx)(nx.$n, {
                                                      className: tV.Q$,
                                                      size: nx.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(g.Ip, {
                                              className: l6.Dx,
                                              children: (0, r.jsx)(aK.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : l7,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, aX.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(aQ, {
        className: l6.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aH.Ay, {
                className: $()(tV.jr, l6.nZ),
                children: [
                    (0, r.jsx)(aH.Ay.Icon, { icon: lZ.K, tooltip: t.name }),
                    (0, r.jsx)(aH.Ay.Title, {
                        wrapperClassName: $()(tV.qd, tV.ZE),
                        className: tV.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(aH.Ay.Icon, {
                        icon: np.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return (t[a] = ((n = e[a]), eo.AKn.test(n) ? "REDACTED" : n)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, n_.C)(a, () =>
                                (0, lG.P0)({
                                    id: "copy-action-log-name",
                                    type: lF.Ck.SUCCESS,
                                    message: "Copied action log data to clipboard",
                                }),
                            );
                        },
                    }),
                ],
            }),
            s({ actionLog: t }),
        ],
    });
}
let se = [
        {
            key: "action",
            cellClassName: l6.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(l3.A, { className: l6.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: l6.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${l8(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: l6.i7,
            render(e) {
                let { actionLog: t } = e;
                return nh()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    st = {
        searchType: ny.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function sa() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lX()(() => {
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
        })(tG.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [s, i] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nE.RT)(t, u ? s : l, p, st);
    let g = o.useCallback(
            (e) => {
                i(l), m(e);
            },
            [l],
        ),
        v = t.trim().length > 0,
        j = o.useMemo(() => (v ? d : u ? s : l), [l, d, v, u, s]),
        f = u ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, r.jsxs)("div", {
        ref: e,
        className: $()(tV.nd, l6.nd),
        children: [
            (0, r.jsxs)("div", {
                className: l6.KE,
                children: [
                    (0, r.jsx)(l0.m, {
                        text: f,
                        children: (0, r.jsx)(eB.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? l1.u : l2.E,
                            "aria-label": f,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(nf.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tW, {
                columns: se,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(l4, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var sn = a(936388),
    sl = a(132369);
function ss() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: $()(tV.nd, sl.n),
        children: (0, r.jsx)(x.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: sn.A.clearUploadedKeyVersions,
        }),
    });
}
var si = a(37962),
    sr = a(881520),
    so = a(670455),
    sd = a(861160);
let sc = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function su() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, s] = o.useState(1e3),
        [i, c] = o.useState(0),
        m = (0, d.bG)([sr.A], () => (null === e ? null : (sr.A.getFeedbackConfig(so.MW[e]) ?? si.u[so.MW[e]]))),
        h = Object.entries(so.MW),
        g = h.slice(h.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        v = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: sd.kL,
        children: (0, r.jsxs)(z.B, {
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
                        (0, r.jsxs)(z.B, {
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
                                    options: sc,
                                    value: l,
                                    onSelectionChange: s,
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
                        value: i.toString(),
                        type: "number",
                        onChange: (e) => c(parseFloat(e)),
                    }),
                }),
                (0, r.jsxs)(aZ.e, {
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != m &&
                                    tG.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: m.feedbackType })
                                ),
                            disabled: !v,
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != m &&
                                    tG.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: m.feedbackType,
                                        cooldown: a * l,
                                        chance: i / 100,
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
                !(i >= 0 && i <= 100) &&
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
var sm = a(334279),
    sh = a(663417),
    sx = a(147925),
    sp = a(557009),
    sg = a(202541);
async function sv() {
    return (
        await n6.Bo.get({
            url: eo.Rsh.ENTITLEMENTS_FOR_APPLICATION(sg.tv),
            oldFormErrors: !0,
            query: { exclude_consumed: !0, exclude_ended: !0 },
            rejectWithError: !0,
        })
    ).body.map((e) => sp.A.createFromServer(e));
}
async function sj(e) {
    await n6.Bo.post({
        url: "/debug/entitlements/fractional-premium",
        body: { count: 1, sku_id: e },
        rejectWithError: !1,
    });
}
async function sf(e) {
    let t = "/debug/entitlements/fractional-premium";
    null != e && (t = `${t}/${e}`), await n6.Bo.del({ url: t, rejectWithError: !0 });
}
async function sb() {
    await n6.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
}
function sy() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(!1),
        l = (0, o.useCallback)(async () => {
            try {
                n(!0);
                let e = await sv();
                t(e);
            } finally {
                n(!1);
            }
        }, []),
        s = (0, o.useCallback)(
            async (e) => {
                await sj(e), await l();
            },
            [l],
        );
    return {
        grantFractionalPremium: s,
        deleteFractionalPremium: (0, o.useCallback)(
            async (e) => {
                await sf(e), await l();
            },
            [l],
        ),
        triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
            await sb(), await l();
        }, [l]),
        refreshEntitlementList: l,
        entitlements: e,
        loading: a,
    };
}
var sE = a(51846),
    s_ = a(214868);
let sC = {
    [eo.GD.QUEST_REWARD]: "Quest Reward",
    [eo.GD.DEVELOPER_GIFT]: "Developer Gift",
    [eo.GD.INVOICE]: "Invoice",
    [eo.GD.REVERSE_TRIAL]: "Reverse Trial",
    [eo.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    [eo.GD.SUBSCRIPTION]: "Subscription",
    [eo.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
};
function sS(e) {
    let t,
        { entitlement: a, active: n, onDelete: l } = e;
    function s(e) {
        return null != e ? (0, nC.i$)(e, "LLL") : "---";
    }
    return (0, r.jsxs)("div", {
        className: $()(sE.Nr, n ? s_.C1 : ""),
        children: [
            (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
            !n &&
                (0, r.jsxs)(p.E, {
                    variant: "text-md/normal",
                    children: ["SKU: ", sN.find((e) => e.value === a.skuId)?.label],
                }),
            null != a.startsAt &&
                null != a.endsAt &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Start: ", s(a.startsAt), " "] }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["End: ", s(a.endsAt), " "] }),
                    ],
                }),
            (0, r.jsxs)(p.E, {
                variant: "text-md/normal",
                children: [
                    "Entitlement source type: ",
                    null != (t = a.sourceType) && t in sC ? sC[t] : `Unknown source type ${t}`,
                ],
            }),
            n &&
                null != l &&
                (0, r.jsx)(nx.$n, {
                    className: sE.RW,
                    size: nx.$n.Sizes.TINY,
                    color: nx.$n.Colors.RED,
                    look: nx.$n.Looks.OUTLINED,
                    onClick: l,
                    children: "Delete",
                }),
        ],
    });
}
let sN = [
    { id: "1h", label: "1 hour", value: sm.j.PREMIUM_TIER_2_1_HOUR },
    { id: "1d", label: "1 day", value: sm.j.PREMIUM_TIER_2_1_DAY },
    { id: "3d", label: "3 days", value: sm.j.PREMIUM_TIER_2_3_DAY },
];
function sA() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(sm.j.PREMIUM_TIER_2_1_HOUR),
        [l, s] = o.useState([]),
        [i, d] = o.useState([]),
        {
            refreshEntitlementList: c,
            grantFractionalPremium: u,
            deleteFractionalPremium: m,
            triggerNextEntitlementFulfillment: h,
            entitlements: v,
            loading: f,
        } = sy();
    return (
        o.useEffect(() => {
            c();
        }, [c]),
        o.useEffect(() => {
            s(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === eo.zF_.FRACTIONAL_REDEMPTION)),
                d(v.filter((e) => Object.values(sm.j).includes(e.skuId) && null == e.startsAt));
        }, [v]),
        (0, r.jsx)(g.Ip, {
            className: tV.nd,
            children: (0, r.jsxs)("div", {
                className: s_.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: s_.dL,
                        children: [
                            (0, r.jsx)(p.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(V.D, {
                                onClick: () => t(!e),
                                className: sE.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(sx.A, { direction: e ? sx.A.Directions.UP : sx.A.Directions.DOWN }),
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
                        className: $()([sE.uW, s_.Uo]),
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: sN,
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
                        className: sE.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: s_.dL,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: sE.GC,
                                        children: [
                                            (0, r.jsx)(nx.$n, {
                                                disabled: f,
                                                size: nx.$n.Sizes.TINY,
                                                color: nx.$n.Colors.PRIMARY,
                                                look: nx.$n.Looks.OUTLINED,
                                                onClick: () => h(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(nx.$n, {
                                                disabled: f,
                                                size: nx.$n.Sizes.TINY,
                                                color: nx.$n.Colors.RED,
                                                look: nx.$n.Looks.OUTLINED,
                                                onClick: () => m(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(nx.$n, {
                                                disabled: f,
                                                look: nx.$n.Looks.BLANK,
                                                size: nx.$n.Sizes.ICON,
                                                onClick: c,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(sh.f, { size: "xs", color: "currentColor" }),
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
                                                    sS,
                                                    { entitlement: e, active: !0, onDelete: () => m(e.id) },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            i.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: i.map((e) => (0, r.jsx)(sS, { entitlement: e }, e.id)),
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
var sk = a(832604),
    sD = a(264572).Buffer;
let sI = /[^a-zA-Z0-9_.-]+/g;
function sT(e) {
    let { runningGame: t } = e,
        a = (0, sk.A)(t.pid, void 0),
        [n, l] = (0, o.useState)(!1),
        s = t.name ?? t.exeName ?? "",
        i = null != a && !n,
        d = async () => {
            if (null != a) {
                l(!0);
                try {
                    let e,
                        t = await y.A.fileManager.saveWithDialog2(
                            sD.from(a.slice(a.indexOf(",") + 1), "base64"),
                            ((e = s.trim().replace(sI, "_")), `${e.length > 0 ? e : "icon"}.png`),
                            void 0,
                        );
                    null == t ||
                        t.canceledByUser ||
                        (0, lG.P0)({
                            id: "devtools-save-icon-success",
                            type: lF.Ck.SUCCESS,
                            message: `Saved icon to ${t.directory}`,
                        });
                } catch {
                    (0, lG.P0)({
                        id: "devtools-save-icon-failure",
                        type: lF.Ck.FAILURE,
                        message: "Failed to save icon",
                    });
                } finally {
                    l(!1);
                }
            }
        };
    return (0, r.jsxs)(z.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 12,
        children: [
            (0, r.jsxs)(z.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                fullWidth: !1,
                children: [
                    null != a
                        ? (0, r.jsx)("img", { src: a, alt: s, width: 48, height: 48 })
                        : (0, r.jsx)(p.E, { variant: "text-xxs/normal", color: "text-muted", children: "no icon" }),
                    (0, r.jsxs)(z.B, {
                        direction: "vertical",
                        gap: 0,
                        fullWidth: !1,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-md/normal", children: s }),
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
            (0, r.jsx)(x.$, { variant: "primary", text: "Save Icon", onClick: d, disabled: !i }),
        ],
    });
}
function sR() {
    let e = (0, d.bG)([E.Ay], () => E.Ay.getRunningGames());
    return (0, r.jsxs)(z.B, {
        gap: 16,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(z.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(K.D, { variant: "heading-md/bold", children: "Game Icon Extractor" }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        children: "Save a running game's locally-detected icon as a PNG.",
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(z.B, {
                gap: 12,
                children: [
                    (0, r.jsx)(K.D, { variant: "heading-sm/bold", children: "Running Games" }),
                    0 === e.length
                        ? (0, r.jsx)(p.E, {
                              variant: "text-sm/normal",
                              children: "No games detected. Launch a game first.",
                          })
                        : e.map((e) => (0, r.jsx)(sT, { runningGame: e }, `${e.pid}-${e.exePath}`)),
                ],
            }),
        ],
    });
}
var sO = a(390544),
    sw = a(396748),
    sM = a(522055),
    sL = a(661202);
function sP() {
    let e = (0, d.bG)([a7.A], () => a7.A.getGuildId()),
        t = (0, d.bG)([a9.A], () => a9.A.getGuild(e)?.name),
        a = (0, d.bG)([sM.A], () => sM.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    tG.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        s = o.useMemo(
            () =>
                Object.values(sO.M).map((e) =>
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
        i = o.useCallback(() => {
            null != n &&
                null != e &&
                tG.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(g.Ip, {
              className: sL.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sL.uW,
                      children: (0, r.jsx)(K.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sL.uW,
                      children: [
                          (0, r.jsx)(p.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sL.UD, children: s }),
                          (0, r.jsx)(p.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sL.UD,
                              children: (0, r.jsx)(x.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: i,
                              }),
                          }),
                          (0, r.jsx)(p.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, sw.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function sU(e, t) {
    let a = "boolean" == typeof t ? t : !az.Ay.get(e);
    tG.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sG = a(460281);
function sF(e) {
    let { devSettingsCategory: t } = e,
        a = (0, d.bG)([az.Ay], () => az.Ay.allByCategory(t), [t], d.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => sU(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: $()(tV.nd, sG.n), children: n });
}
var sB = a(950305),
    s$ = a(231483),
    sV = a(597770),
    sW = a(433492),
    sz = a(695458),
    sH = a(796140),
    sK = a(268791),
    sY = a(836480),
    sq = a(855473),
    sJ = a(626258),
    sQ = a(420854),
    sX = a(373846),
    sZ = a(657044),
    s0 = a(141060),
    s1 = a(608599),
    s2 = a(685761),
    s3 = a(157225),
    s6 = a(362704),
    s8 = a(625903),
    s5 = a(628284),
    s9 = a(320448),
    s7 = a(562708),
    s4 = a(830215),
    ie = a(381689),
    it = a(889227),
    ia = a(499785),
    il = a(315069);
class is extends il.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new is(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let ii = { pools: null, users: null };
function ir(e) {
    null == ii.users && (ii.users = new Map()), ii.users.set(e.id, new it.A(e));
}
class io extends d.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (ii.pools = new Map(Object.entries(e.pools))),
            null != e.users && (ii.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != ii.pools ? Object.fromEntries(ii.pools) : null,
            users: null != ii.users ? Object.fromEntries(ii.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(ii.users?.values() ?? []).filter((t) => ii.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return ii.pools?.get(e) ?? null;
    }
    getUser(e) {
        return ii.users?.get(e) ?? null;
    }
    getPools() {
        return null === ii.pools ? null : Array.from(ii.pools.values());
    }
}
let id = new io(tG.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == ii.pools && (ii.pools = new Map()), ii.pools.set(t.id, t), a.forEach(ir);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = ii.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                ii.users?.delete(e);
            }),
            ii.pools?.delete(t);
    },
});
var ic = a(835002);
async function iu(e, t) {
    return await ia.A.get({
        url: eo.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: s7.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void ie.A.showFailedToast(ic.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            tG.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: is.fromServer(l).setPassword(t),
                users: s.map((e) => new it.A(e)),
            });
        })
        .catch(() => (ie.A.showFailedToast(ic.OB.GENERIC_ERROR), null));
}
var im = a(844330),
    ih = a(277851);
let ix = [
        sB.n,
        s$.l,
        sV.o,
        sW.K,
        sz.m,
        sH.c,
        sK.$,
        sY.Q,
        sq.Z,
        sJ.A,
        sQ.E,
        sX.C,
        sZ._,
        s0.i,
        s1.L,
        s2.f,
        s3.N,
        s6.Y,
        s8.Z,
    ],
    ip = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ];
function ig() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("form", {
                onSubmit: async (l) => {
                    l.preventDefault(), s(!0);
                    try {
                        await iu(e, a), t(""), n("");
                    } finally {
                        s(!1);
                    }
                },
                children: (0, r.jsxs)(z.B, {
                    direction: "vertical",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, r.jsxs)(z.B, {
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
                        (0, r.jsxs)(z.B, {
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
                                        t(""), n("");
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
function iv(e) {
    let { pool: t } = e,
        { id: a, summary: n } = t,
        l = id.getUsersForPool(a),
        s = (0, d.bG)([nN.default], () => nN.default.getId()),
        i = ix[Number(a) % ix.length],
        c = ip[Number(a) % ip.length],
        u = o.useCallback(() => {
            tG.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
        }, [a]);
    return (0, r.jsx)(z.B, {
        direction: "horizontal",
        align: "start",
        justify: "space-between",
        children: (0, r.jsx)(im.A, {
            icon: (0, r.jsx)(p.E, {
                variant: "text-md/medium",
                color: c,
                className: ih.td,
                children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
            }),
            title: n,
            className: ih.JC,
            subtitle: `${l.length} users`,
            children: (0, r.jsxs)(z.B, {
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
                                        V.D,
                                        {
                                            onClick: (a) => {
                                                a.stopPropagation(),
                                                    (function (e, t) {
                                                        let a = id.getUser(t);
                                                        if (null == a) throw Error("User not found");
                                                        let n = id.getPool(e)?.password;
                                                        if (null == n) throw Error("Pool password not found");
                                                        if (null == a.email) throw Error("User email not found");
                                                        s4.A.login({
                                                            login: a.email,
                                                            password: n,
                                                            isMultiAccount: !0,
                                                            source: "generated_test_user",
                                                        }).catch(
                                                            () => (ie.A.showFailedToast(ic.OB.GENERIC_ERROR), null),
                                                        );
                                                    })(t.id, e.id);
                                            },
                                            "aria-disabled": s === e.id,
                                            className: $()(ih.vk, { [ih.Pe]: s === e.id }),
                                            children: (0, r.jsxs)(
                                                z.B,
                                                {
                                                    direction: "horizontal",
                                                    align: "center",
                                                    justify: "space-between",
                                                    gap: 8,
                                                    padding: { right: 8 },
                                                    fullWidth: !1,
                                                    children: [
                                                        (0, r.jsxs)(z.B, {
                                                            direction: "horizontal",
                                                            align: "center",
                                                            gap: 8,
                                                            fullWidth: !1,
                                                            className: $()({ [ih.WP]: s === e.id }),
                                                            children: [
                                                                (0, r.jsx)(sB.n, {
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
                                                                            className: ih.c1,
                                                                            children: e.email,
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        s === e.id
                                                            ? (0, r.jsx)(p.E, {
                                                                  variant: "text-sm/normal",
                                                                  color: "text-feedback-positive",
                                                                  children: (0, r.jsx)(s5.y, {
                                                                      size: "sm",
                                                                      color: "currentColor",
                                                                  }),
                                                              })
                                                            : (0, r.jsx)(s9._, { size: "sm", color: "currentColor" }),
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
                        className: ih.UD,
                        children: (0, r.jsx)(x.$, {
                            icon: nj.u,
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
function ij() {
    let e = (0, d.yK)([id], () => id.getPools() ?? []);
    return (0, r.jsxs)(z.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: ih.kL,
        children: [
            (0, r.jsx)(ig, {}),
            (0, r.jsx)(g.Ip, { className: ih.Ik, children: e?.map((e) => (0, r.jsx)(iv, { pool: e }, e.id)) }),
        ],
    });
}
var ib = a(582306),
    iy = a(507104),
    iE = a(888429);
function i_(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
let iC = (e, t) =>
        null != t ? `/users/@me/gift-intents/dismissals/${e}/${t}` : `/users/@me/gift-intents/dismissals/${e}`,
    iS = sg.np.FRIEND_ANNIVERSARY;
function iN(e) {
    return 403 === e?.status
        ? "Forbidden (403). This account is likely not in the backend-persistence experiment; clearing also requires a staff account."
        : e instanceof Error
          ? e.message
          : String(e);
}
function iA() {
    let e = (0, d.bG)([iy.Ay], () => iy.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, d.bG)([iy.Ay], () => iy.Ay.getDevToolCurrentDate()),
        a = (0, d.bG)([iy.Ay], () => iy.Ay.getMessageGiftIntentLastShownMap()),
        n = (0, d.bG)([iy.Ay], () => iy.Ay.getHighestAffinityFriendAnniversaries()),
        l = (0, d.bG)([iy.Ay], () => iy.Ay.getHighAffinityFriendAnniversaries()),
        s = (0, d.bG)([el.default], () => el.default.getCurrentUser()?.isStaff() ?? !1),
        i = (0, d.bG)(
            [aC.A],
            () => aC.A.getFriendIDs().filter((e) => !aC.A.isIgnored(e) && null != aC.A.getSince(e)).length,
        ),
        c = (0, d.bG)([ah.A], () => {
            let e = Number(ah.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
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
                let { body: e } = await n6.Bo.get({ url: "/users/@me/gift-intent-dismissals", rejectWithError: !0 });
                m(e.dismissals ?? []), v(null), b(!1);
            } catch (t) {
                let e = t.status;
                v(iN(t)), b(403 === e), 403 === e && m([]);
            } finally {
                E(!1);
            }
        }, []);
    o.useEffect(() => {
        A();
    }, [A, c]);
    let k = async (e) => {
            C(!0);
            try {
                await e(), v(null), await A();
            } catch (e) {
                v(iN(e));
            } finally {
                C(!1);
            }
        },
        D = u.filter((e) => e.intent_type === iS),
        I = new Map(D.map((e) => [e.target_id, Number(e.dismissed_at_ms)])),
        T = Array.from(new Set([...Object.keys(a), ...I.keys()])),
        R = Array.from(new Set([...n, ...l])),
        O = R.map((e) => ({ id: e, value: e, label: el.default.getUser(e)?.username ?? `Unknown User (${e})` })),
        w = y || _,
        M = (e) => {
            tG.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        };
    function L(e) {
        let t = nl.A.getUserAffinity(e);
        return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
    }
    return (0, r.jsx)(g.Ip, {
        className: tV.nd,
        children: (0, r.jsxs)("div", {
            className: iE.l$,
            children: [
                (0, r.jsx)(p.E, { className: iE.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: iE.Pm,
                    children: (0, r.jsxs)(z.B, {
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
                                    tG.h.dispatch({ type: "DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES" });
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
                        className: iE.Pm,
                        children: (0, r.jsxs)(z.B, {
                            gap: 8,
                            children: [
                                0 === i
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
                                              R.length,
                                              " of ",
                                              e,
                                              " requested",
                                              R.length < e
                                                  ? ` (only ${i} friend${1 === i ? "" : "s"} with an anniversary date).`
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
                                    (0, r.jsxs)(z.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                children: "Highest Affinity Friend Anniversaries:",
                                            }),
                                            n.map((e) => {
                                                let t = el.default.getUser(e),
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
                                    (0, r.jsxs)(z.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            l.map((e) => {
                                                let t = el.default.getUser(e),
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
                    className: iE.Pm,
                    children: (0, r.jsxs)(z.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(ib.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? nh()(t) : void 0,
                                onSelect: function (e) {
                                    let t = nh()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    tG.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: function () {
                                    tG.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: iE.Pm,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "text-md/normal",
                            children: "Reset gift message cooldown (per-user, 14d)",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: () => {
                                tG.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iE.Pm,
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
                                tG.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: iE.Pm,
                    children: (0, r.jsxs)(z.B, {
                        gap: 12,
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Backend dismissal sync" }),
                            (0, r.jsxs)(z.B, {
                                gap: 4,
                                children: [
                                    f &&
                                        (0, r.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "text-feedback-warning",
                                            children:
                                                "This account is not in the backend-persistence experiment, so nothing here will persist to the server.",
                                        }),
                                    !s &&
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
                                            null != c ? i_(c) : "never",
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(z.B, {
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
                                        onClick: () => {
                                            k(() => n6.Bo.del({ url: iC(iS), rejectWithError: !0 }));
                                        },
                                        disabled: w || !s || f || 0 === D.length,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(z.B, {
                                gap: 8,
                                direction: "horizontal",
                                align: "end",
                                children: [
                                    (0, r.jsx)(j.l, {
                                        label: "Dismiss a generated anniversary on the server",
                                        selectionMode: "single",
                                        options: O,
                                        value: S,
                                        onSelectionChange: (e) => {
                                            N(e);
                                        },
                                    }),
                                    (0, r.jsx)(x.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        text: "Dismiss on server",
                                        onClick: () => {
                                            null != S &&
                                                k(() =>
                                                    n6.Bo.post({
                                                        url: "/users/@me/gift-intents/dismiss",
                                                        body: { intent_type: iS, target_id: S },
                                                        rejectWithError: !0,
                                                    }),
                                                );
                                        },
                                        disabled: w || f || null == S,
                                    }),
                                ],
                            }),
                            0 === O.length &&
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
                                (0, r.jsxs)(z.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            variant: "text-xs/semibold",
                                            children: "Local vs. server (per friend):",
                                        }),
                                        T.map((e) => {
                                            let t = el.default.getUser(e),
                                                n = t?.username ?? `Unknown User (${e})`,
                                                l = a[e],
                                                i = I.get(e);
                                            return (0, r.jsxs)(
                                                z.B,
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
                                                                null != l ? i_(l) : "none",
                                                                ", server",
                                                                " ",
                                                                null != i ? i_(i) : "none",
                                                            ],
                                                        }),
                                                        null != i &&
                                                            (0, r.jsx)(x.$, {
                                                                size: "sm",
                                                                variant: "secondary",
                                                                text: "Clear",
                                                                onClick: () => {
                                                                    k(() =>
                                                                        n6.Bo.del({
                                                                            url: iC(iS, e),
                                                                            rejectWithError: !0,
                                                                        }),
                                                                    );
                                                                },
                                                                disabled: w || !s || f,
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
var ik = a(460890),
    iD = a(349288),
    iI = a(517461),
    iT = a(214947),
    iR = a(403581),
    iO = a(34188);
let iw = [
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
var iM = a(545406);
let iL = [0, 0.5, 1],
    iP = ["Center", "Inner ring", "Outer ring"],
    iU = iL.length,
    iG = "ILLO_BLUE",
    iF = "ILLO_BLUE_40",
    iB = Array.from({ length: iU }, () => iF),
    i$ = Array.from({ length: iU }, () => iG),
    iV = ["1", "0.5", "0"],
    iW = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    iz = [
        { label: "Light", value: eo.NJ8.LIGHT, id: eo.NJ8.LIGHT },
        { label: "Dark", value: eo.NJ8.DARK, id: eo.NJ8.DARK },
        { label: "Darker", value: eo.NJ8.DARKER, id: eo.NJ8.DARKER },
        { label: "Midnight", value: eo.NJ8.MIDNIGHT, id: eo.NJ8.MIDNIGHT },
    ],
    iH = { [eo.NJ8.MIDNIGHT]: eo.NJ8.DARKER, [eo.NJ8.DARKER]: eo.NJ8.DARK, [eo.NJ8.LIGHT]: eo.NJ8.DARK },
    iK = { [eo.NJ8.LIGHT]: "light", [eo.NJ8.DARK]: "ash", [eo.NJ8.DARKER]: "dark", [eo.NJ8.MIDNIGHT]: "onyx" },
    iY = [
        { id: "friends", icon: iT.$, text: "Friends" },
        { id: "nitro", icon: iR.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: iO.U, text: "Shop", useCustomGradient: !0 },
    ],
    iq = iw.map((e) => ({ label: e, value: e, id: e })),
    iJ = Object.fromEntries(
        iw.map((e) => [
            e,
            Object.keys(ez.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = ez.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? ez.A.unsafe_rawColors.OPACITY_BLACK_28
                                : ez.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: iM.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var iQ = a(306327);
function iX(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function iZ(e, t) {
    let [a, n, l, s] = ez.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function i0(e, t) {
    let a = ez.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function i1(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(z.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(z.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(eB.K, {
                        icon: np.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: iM.RP, children: t }),
        ],
    });
}
function i2(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                iP.map((e, a) => {
                    let n;
                    return (
                        (n = iz
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = iK[s],
                                    r = t[s];
                                return `  ${i}:
    color: ${-1 === ((l = (n = String(r.colors[a]).toLowerCase()).lastIndexOf("_"))) ? n.replace(/_/g, "-") : n.slice(0, l).replace(/_/g, "-") + "." + n.slice(l + 1)}
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
    return (0, r.jsxs)(z.B, {
        gap: 16,
        children: [
            (0, r.jsx)(K.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            iP.map((e, t) => (0, r.jsx)(i1, { yaml: a[t], label: e }, e)),
        ],
    });
}
function i3(e, t, a) {
    let {
            r: n,
            g: l,
            b: s,
            a: i,
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
        r = 0.5 * i;
    return new iQ.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function i6(e, t, a) {
    var n;
    let l = a.map((e) => {
            let [t, a, n] = ez.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        s = 1 / 0;
    for (let a of l) (n = e.contrast(i3(t, l, a.position), "WCAG21")) < s && (s = n);
    for (let a = 0; a < l.length - 1; a++) {
        let { contrast: n } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(i3(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, l, e, l[a].position, l[a + 1].position);
        n < s && (s = n);
    }
    return Math.round(100 * s) / 100;
}
function i8(e) {
    let [t, a, n] = ez.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = ez.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = ez.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new iQ.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function i5() {
    return {
        colors: Array.from({ length: iU }, () => void 0),
        scales: Array.from({ length: iU }, () => void 0),
        opacities: Array.from({ length: iU }, () => void 0),
    };
}
function i9() {
    return {
        [eo.NJ8.LIGHT]: i5(),
        [eo.NJ8.DARK]: { colors: [...iB], scales: [...i$], opacities: [...iV] },
        [eo.NJ8.DARKER]: i5(),
        [eo.NJ8.MIDNIGHT]: i5(),
    };
}
function i7() {
    let e = (0, ik.G9)(),
        [t, a] = o.useState(eo.NJ8.DARK),
        [n, l] = (0, iI.V)("DevToolsGradientContrastPanel_themeStops", i9()),
        s = n ?? i9(),
        [i, d] = o.useState(["", "", ""]),
        [c, u] = o.useState([null, null, null]),
        [m, h] = o.useState(null),
        { images: v, renderPickers: j } = (function () {
            let [e, t] = o.useState(null),
                a = o.useRef(null),
                n = o.useCallback((e) => {
                    let a = e.target.files?.[0];
                    if (null == a) return;
                    let n = new FileReader();
                    (n.onload = () => t({ src: n.result, name: a.name })), n.readAsDataURL(a), (e.target.value = "");
                }, []),
                l = o.useCallback(
                    () =>
                        (0, r.jsxs)(z.B, {
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
                                              (0, r.jsx)(lB.Q, {
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
                    iz.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let s = 0; s < iU; s++) {
                                    let i,
                                        r,
                                        o,
                                        d = t;
                                    for (; null != d; ) {
                                        let t = e[d];
                                        if (
                                            ((i ??= t.colors[s]),
                                            (r ??= t.scales[s]),
                                            (o ??= t.opacities[s]),
                                            null != i && null != r && null != o)
                                        )
                                            break;
                                        d = iH[d];
                                    }
                                    a.push(i ?? iB[s]), n.push(r ?? i$[s]), l.push(o ?? iV[s]);
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(s, t),
                        ];
                    }),
                ),
            [s],
        ),
        y = b[t],
        E = o.useCallback(
            (e) => {
                l({ ...s, [t]: e(s[t]) });
            },
            [t, l, s],
        ),
        _ = o.useMemo(() => i8({ theme: t, saturation: 1 }), [t]),
        C = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < iU; t++) {
                let a = parseFloat(y.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: y.colors[t], opacity: a, position: iL[t] });
            }
            return e;
        }, [y]),
        S = o.useMemo(() => {
            if (null == C) return null;
            let { text: e, background: t } = _;
            return iP.map((a, n) =>
                iJ[y.scales[n]].map((a) => {
                    let l = i6(e, t, iX(C, n, { ...C[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [C, _, y.scales]),
        N = o.useMemo(() => {
            try {
                return iz.map((e) => {
                    let { value: t, label: a } = e,
                        n = b[t],
                        l = [];
                    for (let e = 0; e < iU; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: iL[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = i8(t),
                                s = i6(n, l, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return iw.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of iJ[s]) {
                                        if (o === e[t].color) continue;
                                        let s = i6(n, l, iX(e, t, { ...e[t], color: o }));
                                        if (s >= 4.5) {
                                            let e = Math.abs(parseInt(String(o).split("_").pop() ?? "0", 10) - i);
                                            e < r &&
                                                ((r = e),
                                                (a = { stopIndex: t, suggestedColor: o, resultingMinContrast: s }));
                                        }
                                    }
                                }
                            return { passes: i, minContrastRatio: s, suggestion: a };
                        })(l, { theme: t, saturation: 1 }),
                    };
                });
            } catch {
                return null;
            }
        }, [b]);
    return (0, r.jsx)(g.Ar, {
        className: iM.XG,
        children: (0, r.jsxs)(z.B, {
            gap: 24,
            padding: 8,
            className: iM.zr,
            children: [
                (0, r.jsx)(K.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(z.B, {
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
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Midnight unless overridden.",
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
                                (0, r.jsx)(iD.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(an.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: iz,
                }),
                (0, r.jsxs)(z.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: iM.G9,
                            children: iP.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(z.B, {
                                                gap: 0,
                                                className: iM.hi,
                                                children: [
                                                    (0, r.jsx)(p.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lB.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${i0(y.colors[t], parseFloat(y.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                i0(y.colors[t], parseFloat(y.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(an.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: y.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = iJ[e][0]?.value;
                                                    E((n) => ({
                                                        ...n,
                                                        scales: iX(n.scales, t, e),
                                                        colors: null != a ? iX(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: iq,
                                            }),
                                            (0, r.jsx)(an.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: y.colors[t],
                                                onSelectionChange: (e) =>
                                                    E((a) => ({ ...a, colors: iX(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: S?.[t] ?? iJ[y.scales[t]],
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: y.opacities[t],
                                                onChange: (e) => E((a) => ({ ...a, opacities: iX(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: `Hex${a && null != c[t] ? ` (dE: ${c[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    d((a) => iX(a, t, e));
                                                    let a = (function (e) {
                                                        if (!iW.test(e)) return null;
                                                        try {
                                                            return new iQ.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = iF,
                                                                a = iG,
                                                                n = 1 / 0;
                                                            for (let l of iw)
                                                                for (let s of iJ[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = ez.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new iQ.A("srgb", [
                                                                                t / 255,
                                                                                a / 255,
                                                                                n / 255,
                                                                            ]);
                                                                        })(s.value),
                                                                        "2000",
                                                                    );
                                                                    i < n && ((n = i), (t = s.value), (a = l));
                                                                }
                                                            return {
                                                                color: t,
                                                                scale: a,
                                                                deltaE: Math.round(100 * n) / 100,
                                                            };
                                                        })(a);
                                                        u((a) => iX(a, t, e.deltaE)),
                                                            E((a) => ({
                                                                ...a,
                                                                scales: iX(a.scales, t, e.scale),
                                                                colors: iX(a.colors, t, e.color),
                                                            }));
                                                    } else u((e) => iX(e, t, null));
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
                (0, r.jsx)(K.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(ik.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eV.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(z.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: iM.$8,
                                        style: { background: ez.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iY.map((e, t) =>
                                            (0, r.jsx)(
                                                eg.z9,
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
                                                        hoverGradientStart: iZ(y.colors[0], parseFloat(y.opacities[0])),
                                                        hoverGradientMiddle: iZ(
                                                            y.colors[1],
                                                            parseFloat(y.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iZ(y.colors[2], parseFloat(y.opacities[2])),
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
                    (0, r.jsxs)(z.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(K.D, { variant: "heading-sm/semibold", children: "Results" }),
                            N.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          z.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(W.w, {
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
                                                      (0, r.jsxs)(z.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(p.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(p.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      iP[n.suggestion.stopIndex],
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
                (0, r.jsx)(i2, { allResolvedStops: b }),
            ],
        }),
    });
}
var i4 = a(820739),
    re = a(230135),
    rt = a(45780),
    ra = a(868652),
    rn = a(859241);
let rl = [
        au.M.GUILD_POWERUP_PERKS_COACHMARK,
        au.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        au.M.GUILD_POWERUP_NOTIFICATION,
        au.M.GUILD_TAG_AVAILABLE_COACHMARK,
        au.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
        au.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE,
    ],
    rs = [
        au.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        au.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        au.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        au.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        au.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    ri = [au.V.ADOPT_CLAN_IDENTITY_NOTICE],
    rr = [
        au.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        au.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        au.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function ro(e) {
    switch (e) {
        case au.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case au.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case au.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case au.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case au.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case au.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var rd = a(861671);
async function rc(e, t, a) {
    await n6.Bo.patch({
        url: eo.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : nh()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, i4.VU)(e),
        (0, ra.Xd)(e, !0);
}
async function ru(e) {
    await n6.Bo.post({ url: eo.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function rm() {
    let e = (0, d.bG)([a7.A], () => a7.A.getGuildId()),
        t = (0, d.bG)([a9.A], () => a9.A.getGuild(e)?.name),
        a = (0, d.yK)([ah.A], () => [...rs, ...ri].filter((t) => null != e && (0, rt.zs)(t, e))),
        n = (0, d.yK)([rn.A], () => (null != e ? (rn.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(g.Ip, {
            className: rd.kL,
            children: [
                (0, r.jsx)("div", {
                    className: rd.uW,
                    children: (0, r.jsx)(K.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: rd.uW,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "eyebrow",
                            className: rd.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, ra.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rd.uW,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", className: rd.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(x.$, { variant: "primary", text: "Reset", onClick: re.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rd.uW,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        rc(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        rc(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rd.uW,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", className: rd.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(z.B, {
                            gap: 16,
                            children: rl.map((e) => (0, r.jsx)(lS, { className: rd.z6, content: au.M[e] }, au.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: rd.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: rs.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: ro(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rt._$)(t, e, !1)
                                            : ((0, am._N)(au.M.GUILD_POWERUP_NOTIFICATION), (0, rt.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: rd.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: ri.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: ro(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rt._$)(t, e, !1)
                                            : ((0, am._N)(au.M.GUILD_POWERUP_NOTIFICATION), (0, rt.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: rd.uW,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "eyebrow",
                            className: rd.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        rr.map((e) => (0, r.jsx)(lS, { className: rd.z6, content: au.M[e] }, au.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rd.uW,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "eyebrow",
                            className: rd.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                ru(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(x.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, sw.Wp)(!1);
                    },
                }),
            ],
        });
}
var rh = a(450510),
    rx = a(320681);
function rp(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, d.yK)([rh.HP], () => [rh.HP.hasHotspot(t, !0), rh.HP.getHotspotOverride(t)]);
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
        onSelectionChange: (e) => (null != e ? (0, rh.Kl)(t, e) : (0, rh.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function rg() {
    return (0, r.jsx)(g.Ip, {
        className: tV.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: rx.IN,
            children: (0, r.jsx)(z.B, {
                gap: 20,
                children: Object.keys(rh._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(rp, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var rv = a(919523),
    rj = a(855522),
    rf = a(37646),
    rb = a(773669);
function ry() {
    let e = (0, d.bG)([rb.default], () => rb.default.locale),
        [t, a] = o.useState(),
        n = (0, rv.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => ne.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(aH.Ay, {
                children: [
                    (0, r.jsx)(aH.Ay.Icon, { icon: rf.U, tooltip: "Locale" }),
                    (0, r.jsx)(aH.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(nM, {
                children: [
                    (0, r.jsx)(nL, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nL, { name: "App", children: e }),
                    (0, r.jsx)(nL, { name: "System", children: ne.systemLocale }),
                    (0, r.jsx)(nL, { name: "@discord/intl", children: ne.intl.currentLocale }),
                    (0, r.jsx)(nL, { name: "common i18n", children: rj.A.getLocale() }),
                    (0, r.jsx)(nL, { name: "Moment", children: nh().locale() }),
                ],
            }),
            (0, r.jsxs)(aH.Ay, {
                children: [
                    (0, r.jsx)(aH.Ay.Icon, { icon: rf.U, tooltip: "Messages" }),
                    (0, r.jsx)(aH.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(nM, {
                children: (0, r.jsx)(nL, { name: "Unique Rendered Main Messages", children: Object.keys(ne.t).length }),
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
            (0, r.jsxs)(nM, {
                children: [
                    (0, r.jsx)(nL, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nL, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(aK.A, { data: l?.(e) }),
        ],
    });
}
var rE = a(434404);
function r_() {
    let { node: e } = (0, ea.Ay)(rE.F, "");
    return (0, r.jsx)(g.Ip, {
        className: tV.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(et.A, { node: e }, e.key),
        }),
    });
}
var rC = a(361158),
    rS = a(80556),
    rN = a(128846),
    rA = a(665095),
    rk = a(87404);
function rD() {
    return (0, r.jsx)(g.Ip, {
        className: tV.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: function () {
                                    (0, rC.B8)(() => (0, r.jsx)(rA.A, {}), { layerKey: rk._s, Layer: rS.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: function () {
                                    (0, rC.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rN.A, { onClose: t });
                                        },
                                        { layerKey: rk._s, Layer: rS.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: function () {
                                    rC.xr.setState({ fullScreenLayers: [] });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162);
var rI = a(687813),
    rT = a(604121);
let rR = {
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Messages_Opt.lottie":
        () => a.e("36508").then(a.t.bind(a, 655671, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Notifications_Opt.lottie":
        () => a.e("5252").then(a.t.bind(a, 323823, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_CombinedEE.lottie":
        () => a.e("65154").then(a.t.bind(a, 670649, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_Opt.lottie":
        () => a.e("77248").then(a.t.bind(a, 342787, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_You_Opt.lottie": () =>
        a.e("93401").then(a.t.bind(a, 959328, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Requests_Messages.lottie": () =>
        a.e("48614").then(a.t.bind(a, 713893, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Activities.lottie": () =>
        a.e("32431").then(a.t.bind(a, 857778, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/AppsIcon.lottie": () =>
        a.e("37415").then(a.t.bind(a, 996858, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Camera.lottie": () =>
        a.e("75913").then(a.t.bind(a, 999344, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Deafen.lottie": () =>
        a.e("83690").then(a.t.bind(a, 433356, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/EndCall.lottie": () =>
        a.e("27847").then(a.t.bind(a, 72922, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/GIF.lottie": () =>
        a.e("32886").then(a.t.bind(a, 456309, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Gift.lottie": () =>
        a.e("43734").then(a.t.bind(a, 733813, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Microphone.lottie": () =>
        a.e("26620").then(a.t.bind(a, 890007, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpend.lottie": () =>
        a.e("92568").then(a.t.bind(a, 149707, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpendLightTheme.lottie": () =>
        a.e("82715").then(a.t.bind(a, 147734, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Screenshare.lottie": () =>
        a.e("29721").then(a.t.bind(a, 218048, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Settings.lottie": () =>
        a.e("94483").then(a.t.bind(a, 155806, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Soundboard.lottie": () =>
        a.e("50115").then(a.t.bind(a, 535662, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Sticker.lottie": () =>
        a.e("97473").then(a.t.bind(a, 956248, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Waveform.lottie": () =>
        a.e("65373").then(a.t.bind(a, 914028, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge01.lottie":
        () => a.e("75199").then(a.t.bind(a, 904066, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge02.lottie":
        () => a.e("33900").then(a.t.bind(a, 185319, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge03.lottie":
        () => a.e("65405").then(a.t.bind(a, 743372, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge06.lottie":
        () => a.e("27648").then(a.t.bind(a, 195011, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge09.lottie":
        () => a.e("29095").then(a.t.bind(a, 619578, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge12.lottie":
        () => a.e("94131").then(a.t.bind(a, 676574, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge15.lottie":
        () => a.e("65404").then(a.t.bind(a, 384407, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge18.lottie":
        () => a.e("11817").then(a.t.bind(a, 110320, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge24.lottie":
        () => a.e("84996").then(a.t.bind(a, 248476, 17)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-action.lottiejson": () =>
        a.e("19534").then(a.t.bind(a, 87037, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-idle.lottiejson": () =>
        a.e("12250").then(a.t.bind(a, 553998, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-loop.lottiejson": () =>
        a.e("58526").then(a.t.bind(a, 138157, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-action.lottiejson": () =>
        a.e("64376").then(a.t.bind(a, 37259, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-idle.lottiejson": () =>
        a.e("30800").then(a.t.bind(a, 683891, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-loop.lottiejson": () =>
        a.e("52436").then(a.t.bind(a, 45887, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-action.lottiejson": () =>
        a.e("3086").then(a.t.bind(a, 118301, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-idle.lottiejson": () =>
        a.e("37690").then(a.t.bind(a, 733057, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-loop.lottiejson": () =>
        a.e("82078").then(a.t.bind(a, 553101, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-action.lottiejson": () =>
        a.e("51992").then(a.t.bind(a, 558251, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-idle.lottiejson": () =>
        a.e("64400").then(a.t.bind(a, 94995, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-loop.lottiejson": () =>
        a.e("17095").then(a.t.bind(a, 367327, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-action.lottiejson":
        () => a.e("27568").then(a.t.bind(a, 579571, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-loop.lottiejson":
        () => a.e("25676").then(a.t.bind(a, 322151, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-action.lottiejson":
        () => a.e("10803").then(a.t.bind(a, 805489, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-idle.lottiejson":
        () => a.e("10191").then(a.t.bind(a, 837074, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-loop.lottiejson":
        () => a.e("61223").then(a.t.bind(a, 547450, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-action.lottiejson": () =>
        a.e("69842").then(a.t.bind(a, 809865, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-idle.lottiejson": () =>
        a.e("99166").then(a.t.bind(a, 334829, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-action.lottiejson": () =>
        a.e("98287").then(a.t.bind(a, 380082, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-idle.lottiejson": () =>
        a.e("12427").then(a.t.bind(a, 676614, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-loop.lottiejson": () =>
        a.e("31939").then(a.t.bind(a, 900110, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-action.lottiejson": () =>
        a.e("71305").then(a.t.bind(a, 629456, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-idle.lottiejson": () =>
        a.e("70625").then(a.t.bind(a, 254424, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-loop.lottiejson": () =>
        a.e("33449").then(a.t.bind(a, 690576, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-action.lottiejson": () =>
        a.e("46791").then(a.t.bind(a, 690842, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-idle.lottiejson": () =>
        a.e("28115").then(a.t.bind(a, 755678, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-loop.lottiejson": () =>
        a.e("31272").then(a.t.bind(a, 778422, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-action.lottiejson": () =>
        a.e("58009").then(a.t.bind(a, 433504, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-idle.lottiejson": () =>
        a.e("2897").then(a.t.bind(a, 976584, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-loop.lottiejson": () =>
        a.e("52793").then(a.t.bind(a, 858464, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Anime_v01_Lottie.lottiejson": () =>
        a.e("74149").then(a.t.bind(a, 965892, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Arcade_v01.lottiejson": () =>
        a.e("17087").then(a.t.bind(a, 44194, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlackHoles_v01.lottiejson": () =>
        a.e("4289").then(a.t.bind(a, 141208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlastOff_v04.lottiejson": () =>
        a.e("77339").then(a.t.bind(a, 420054, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Crystal_v04.lottiejson": () =>
        a.e("66414").then(a.t.bind(a, 33565, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fireworks_v03.lottiejson": () =>
        a.e("31165").then(a.t.bind(a, 414956, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fusion_v03.lottiejson": () =>
        a.e("58541").then(a.t.bind(a, 221340, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Pop_v04.lottiejson": () =>
        a.e("10169").then(a.t.bind(a, 710208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_PowerUp_v05.lottiejson": () =>
        a.e("76601").then(a.t.bind(a, 333984, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Puzzle_v01_Lottie.lottiejson": () =>
        a.e("84163").then(a.t.bind(a, 211342, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Spotlight_v01_Lottie.lottiejson": () =>
        a.e("52029").then(a.t.bind(a, 714316, 19)),
    "discord_app/images/burst_reactions/BurstReaction_StarBlast_v03.lottiejson": () =>
        a.e("23997").then(a.t.bind(a, 851404, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Tube_v01_Lottie.lottiejson": () =>
        a.e("67133").then(a.t.bind(a, 821644, 19)),
    "discord_app/images/burst_reactions/BurstReaction_UFO_v01_Lottie.lottiejson": () =>
        a.e("84765").then(a.t.bind(a, 51244, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Whirlwind_v01_Lottie.lottiejson": () =>
        a.e("35583").then(a.t.bind(a, 668994, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Spotlight_v1.lottiejson": () =>
        a.e("47862").then(a.t.bind(a, 911573, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Anime_v1.lottiejson": () =>
        a.e("46711").then(a.t.bind(a, 23434, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Arcade_v1.lottiejson": () =>
        a.e("51153").then(a.t.bind(a, 743496, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlackHoles_v1.lottiejson": () =>
        a.e("32803").then(a.t.bind(a, 252462, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlastOff_v1.lottiejson": () =>
        a.e("19842").then(a.t.bind(a, 341529, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Crystal_v1.lottiejson": () =>
        a.e("85529").then(a.t.bind(a, 762464, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fireworks_v1.lottiejson": () =>
        a.e("97197").then(a.t.bind(a, 47036, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fusion_v1.lottiejson": () =>
        a.e("92933").then(a.t.bind(a, 279172, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Pop_v1.lottiejson": () =>
        a.e("5560").then(a.t.bind(a, 824888, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_PowerUp_v1.lottiejson": () =>
        a.e("63011").then(a.t.bind(a, 432302, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Puzzle_v1.lottiejson": () =>
        a.e("69845").then(a.t.bind(a, 854420, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Spotlight_v1.lottiejson": () =>
        a.e("88607").then(a.t.bind(a, 997730, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_StarBlast_v2.lottiejson": () =>
        a.e("74493").then(a.t.bind(a, 281073, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Tube_v1.lottiejson": () =>
        a.e("94147").then(a.t.bind(a, 192718, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_UFO_v2.lottiejson": () =>
        a.e("84992").then(a.t.bind(a, 513667, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Whirlwind_v1.lottiejson": () =>
        a.e("49693").then(a.t.bind(a, 754124, 19)),
    "discord_app/modules/guild_member_verification/images/islandMiddleAnimation.lottiejson": () =>
        a.e("44678").then(a.t.bind(a, 144759, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_dt.json": () =>
        a.e("15048").then(a.t.bind(a, 366043, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_lt.json": () =>
        a.e("12512").then(a.t.bind(a, 789091, 19)),
    "discord_common/js/shared/animations/app/activities/AppsIconWordlePromo.lottiejson": () =>
        a.e("73550").then(a.t.bind(a, 527613, 19)),
    "discord_common/js/shared/animations/app/nearby/nearby.lottiejson": () =>
        a.e("93780").then(a.t.bind(a, 957439, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/dark.lottiejson": () =>
        a.e("45470").then(a.t.bind(a, 622637, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/light.lottiejson": () =>
        a.e("23478").then(a.t.bind(a, 262037, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscription_system_message_easter_egg/index.lottiejson":
        () => a.e("98150").then(a.t.bind(a, 633343, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/hd_streaming.lottiejson": () =>
        a.e("20795").then(a.t.bind(a, 551574, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-2/index.lottiejson": () =>
        a.e("69421").then(a.t.bind(a, 548375, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Bubbles_v03.lottiejson": () =>
        a.e("91770").then(a.t.bind(a, 95553, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Portal_v03.lottiejson": () =>
        a.e("96515").then(a.t.bind(a, 178862, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Slime_v02.lottiejson": () =>
        a.e("9302").then(a.t.bind(a, 16341, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Slime_v1.lottiejson": () =>
        a.e("47554").then(a.t.bind(a, 748761, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Bubbles_v2.lottiejson": () =>
        a.e("7739").then(a.t.bind(a, 106870, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Portal_v1.lottiejson": () =>
        a.e("79067").then(a.t.bind(a, 458486, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Slime_v2.lottiejson": () =>
        a.e("24584").then(a.t.bind(a, 388059, 19)),
    "discord_app/modules/app_launcher/native/images/onboarding_glow.lottiejson": () =>
        a.e("7985").then(a.t.bind(a, 9640, 19)),
    "discord_app/modules/global_discovery_apps/discovering-dabatouille-animation.lottiejson": () =>
        a.e("95947").then(a.t.bind(a, 604902, 19)),
    "discord_app/modules/guild_boosting/animations/animated_guild_icon.lottiejson": () =>
        a.e("24645").then(a.t.bind(a, 624420, 19)),
    "discord_app/modules/guild_member_verification/images/wavingHandLottieAnimation.lottiejson": () =>
        a.e("15423").then(a.t.bind(a, 155147, 19)),
    "discord_app/modules/guild_onboarding/native/animations/landing.lottiejson": () =>
        a.e("24093").then(a.t.bind(a, 280780, 19)),
    "discord_app/modules/guild_onboarding/web/animations/balloon-dog.lottiejson": () =>
        a.e("25961").then(a.t.bind(a, 739408, 19)),
    "discord_app/modules/guild_onboarding/web/animations/bubble-island-02.lottiejson": () =>
        a.e("87356").then(a.t.bind(a, 194199, 19)),
    "discord_app/modules/guild_onboarding/web/animations/grilling-island-02.lottiejson": () =>
        a.e("56026").then(a.t.bind(a, 113473, 19)),
    "discord_app/modules/guild_onboarding/web/animations/main-island-02.lottiejson": () =>
        a.e("16301").then(a.t.bind(a, 694268, 19)),
    "discord_app/modules/guild_onboarding/web/animations/waffle-island-02.lottiejson": () =>
        a.e("22191").then(a.t.bind(a, 896018, 19)),
    "discord_app/modules/poggermode/images/enable_animation.lottiejson": () =>
        a.e("4660").then(a.t.bind(a, 662336, 19)),
    "discord_app/modules/premium/powerups/web/images/server_boost_highlight.json": () =>
        a.e("67807").then(a.t.bind(a, 217762, 19)),
    "discord_app/modules/quests/images/confetti.lottiejson": () => a.e("40119").then(a.t.bind(a, 718698, 19)),
    "discord_app/modules/quests/web/images/quest_bar_background.json": () => a.e("37316").then(a.t.bind(a, 599279, 19)),
    "discord_app/modules/quests/web/images/quest_bar_sparkle.json": () => a.e("97536").then(a.t.bind(a, 478979, 19)),
    "discord_app/modules/self_mod/inappropriate_conversation/images/vibing_wumpus.lottiejson": () =>
        a.e("14823").then(a.t.bind(a, 718074, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/dark.lottiejson": () =>
        a.e("80467").then(a.t.bind(a, 661022, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/light.lottiejson": () =>
        a.e("92705").then(a.t.bind(a, 111992, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/coachmark/seasonal-gifting-coachmark.lottiejson":
        () => a.e("61250").then(a.t.bind(a, 762361, 19)),
    "discord_common/js/shared/animations/app/playstation/playstation_connecting.lottiejson": () =>
        a.e("35066").then(a.t.bind(a, 844512, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/emoji.lottiejson": () =>
        a.e("17124").then(a.t.bind(a, 616175, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_dark.lottiejson": () =>
        a.e("94675").then(a.t.bind(a, 735678, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_light.lottiejson": () =>
        a.e("78465").then(a.t.bind(a, 247704, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/profile_customization.lottiejson": () =>
        a.e("62807").then(a.t.bind(a, 202282, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/unlock.lottiejson": () =>
        a.e("31838").then(a.t.bind(a, 650125, 19)),
    "discord_common/js/shared/animations/app/premium_marketing/index.lottiejson": () =>
        a.e("6954").then(a.t.bind(a, 964529, 19)),
    "discord_common/js/shared/animations/app/premium_payment_guild/index.lottiejson": () =>
        a.e("45870").then(a.t.bind(a, 738503, 19)),
    "discord_common/js/shared/animations/app/premium-activated-tier-1/premium-activated-tier-1.lottiejson": () =>
        a.e("5642").then(a.t.bind(a, 242993, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-0/index.lottiejson": () =>
        a.e("78503").then(a.t.bind(a, 635489, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-1/index.lottiejson": () =>
        a.e("19898").then(a.t.bind(a, 262546, 19)),
    "discord_common/js/shared/animations/app/xbox/voice_connect.lottiejson": () =>
        a.e("40348").then(a.t.bind(a, 971799, 19)),
    "discord_common/js/shared/animations/app/xbox/xbox_connecting.lottiejson": () =>
        a.e("76121").then(a.t.bind(a, 709376, 19)),
};
function rO(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rI.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rI.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rw() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(z.B, {
            gap: 24,
            children: [
                (0, r.jsx)(an.Z, {
                    options: Object.keys(rR).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(z.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(f.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, r.jsx)(f.k, { value: l.toString(), onChange: (e) => s(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(x.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = rR[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rO).then(eQ().cloneDeep)
                                            : await t().then((e) => eQ().cloneDeep(e.default)),
                                    ),
                                ],
                                { type: "application/json" },
                            ),
                            n = URL.createObjectURL(a),
                            l = document.createElement("a");
                        (l.href = n),
                            (l.download = `${e.split("/").pop()}.json`),
                            document.body.appendChild(l),
                            l.click(),
                            document.body.removeChild(l),
                            URL.revokeObjectURL(n);
                    },
                    text: "Download",
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        style: { width: a, height: l },
                        children: (0, r.jsx)(
                            rT.a,
                            {
                                importData: () => {
                                    let t = rR[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rO).then(eQ().cloneDeep)
                                        : t().then((e) => eQ().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rM = a(442433),
    rL = a(395671);
let rP = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 562733));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new rL.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rM.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("9004"), a.e("19690"), a.e("22941"), a.e("10758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(a9.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("47173"),
                    a.e("41831"),
                    a.e("87960"),
                    a.e("93200"),
                    a.e("90629"),
                    a.e("8886"),
                    a.e("6212"),
                    a.e("660"),
                    a.e("11262"),
                    a.e("37520"),
                    a.e("38759"),
                    a.e("17738"),
                    a.e("31463"),
                    a.e("44135"),
                    a.e("82393"),
                    a.e("48845"),
                    a.e("34383"),
                    a.e("41069"),
                    a.e("37261"),
                    a.e("69337"),
                    a.e("47587"),
                    a.e("78777"),
                    a.e("64379"),
                    a.e("79465"),
                    a.e("83314"),
                    a.e("32129"),
                    a.e("85776"),
                    a.e("83671"),
                    a.e("63980"),
                    a.e("62323"),
                    a.e("73099"),
                    a.e("47199"),
                    a.e("78381"),
                    a.e("62280"),
                    a.e("78230"),
                    a.e("11002"),
                    a.e("47170"),
                    a.e("39361"),
                    a.e("15079"),
                    a.e("70613"),
                    a.e("25870"),
                    a.e("76831"),
                    a.e("8177"),
                    a.e("41027"),
                    a.e("37351"),
                    a.e("22671"),
                    a.e("36518"),
                    a.e("79785"),
                    a.e("46757"),
                    a.e("90324"),
                    a.e("20578"),
                    a.e("36592"),
                    a.e("92430"),
                    a.e("54453"),
                    a.e("79254"),
                    a.e("38977"),
                    a.e("20802"),
                    a.e("91474"),
                    a.e("17566"),
                    a.e("49681"),
                    a.e("69047"),
                    a.e("96382"),
                    a.e("71657"),
                    a.e("22218"),
                    a.e("9004"),
                    a.e("49145"),
                    a.e("30997"),
                    a.e("28136"),
                    a.e("43116"),
                    a.e("16084"),
                    a.e("73669"),
                    a.e("61058"),
                    a.e("50342"),
                    a.e("33097"),
                    a.e("36624"),
                    a.e("10262"),
                    a.e("46313"),
                    a.e("22547"),
                    a.e("43233"),
                    a.e("63726"),
                    a.e("71329"),
                    a.e("56373"),
                    a.e("83827"),
                    a.e("42749"),
                    a.e("56026"),
                    a.e("16301"),
                    a.e("22191"),
                    a.e("25961"),
                    a.e("74333"),
                    a.e("8364"),
                    a.e("99108"),
                    a.e("66147"),
                    a.e("52823"),
                    a.e("56967"),
                    a.e("31203"),
                    a.e("66913"),
                    a.e("71719"),
                    a.e("19690"),
                    a.e("93767"),
                    a.e("13848"),
                    a.e("39214"),
                    a.e("88307"),
                    a.e("14878"),
                    a.e("26508"),
                    a.e("61347"),
                    a.e("91643"),
                    a.e("47011"),
                    a.e("42935"),
                    a.e("73091"),
                    a.e("69178"),
                    a.e("86692"),
                    a.e("83518"),
                    a.e("52695"),
                    a.e("16373"),
                    a.e("24484"),
                    a.e("44943"),
                    a.e("32347"),
                    a.e("8458"),
                    a.e("11810"),
                    a.e("91977"),
                    a.e("90152"),
                    a.e("46570"),
                    a.e("87973"),
                    a.e("57197"),
                    a.e("74337"),
                    a.e("14863"),
                    a.e("84951"),
                    a.e("60165"),
                    a.e("12390"),
                    a.e("71167"),
                    a.e("13446"),
                    a.e("61309"),
                    a.e("94529"),
                    a.e("68264"),
                    a.e("98919"),
                    a.e("66016"),
                    a.e("18489"),
                    a.e("17699"),
                    a.e("57032"),
                    a.e("72238"),
                    a.e("22941"),
                    a.e("94832"),
                    a.e("37038"),
                    a.e("26386"),
                    a.e("65338"),
                    a.e("52191"),
                    a.e("14656"),
                    a.e("39855"),
                    a.e("14530"),
                    a.e("45291"),
                    a.e("32607"),
                    a.e("65011"),
                ]).then(a.bind(a, 860417)),
                t = Object.values(a9.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildFolderContextMenu: async () => {
            let { default: e } = await a.e("32857").then(a.bind(a, 842112));
            return (t) => (0, r.jsx)(e, { ...t, folderId: 1, folderColor: void 0, folderName: void 0, unread: !1 });
        },
        DeveloperContextMenu: async () => {
            let { default: e } = await a.e("15687").then(a.bind(a, 646938));
            return (t) => (0, r.jsx)(e, { ...t, id: "123456789", label: "Copy Test ID" });
        },
        UserSettingsMenu: async () => {
            let { default: e } = await Promise.all([a.e("30006"), a.e("26132"), a.e("44491")]).then(a.bind(a, 907206));
            return (t) => (0, r.jsx)(e, { ...t, onClose: rM.Z_ });
        },
        ExpressionPickerContextMenu: async () => {
            let { default: e } = await a.e("46132").then(a.bind(a, 233503));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ForumTagContextMenu: async () => {
            let { default: e } = await a.e("32612").then(a.bind(a, 960015)),
                t = { id: "123456789", name: "Test Forum Tag" };
            return () => (0, r.jsx)(e, { tag: t });
        },
        GuildRoleConnectionsModalContextMenu: async () => {
            let { default: e } = await a.e("68001").then(a.bind(a, 699896));
            return (t) =>
                (0, r.jsx)(e, {
                    ...t,
                    roleId: "123456789",
                    onLeaveRole: () => {
                        console.log("Leave role clicked"), (0, rM.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e("86456"), a.e("89346")]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = el.default.getCurrentUser(),
                s = {
                    id: "mock-entry-123",
                    author_id: l?.id ?? "123456789",
                    author_type: n.USER,
                    content_type: t.PLAYED_GAME,
                    participants: [],
                    traits: [],
                    extra: { type: "played_game_extra", game_name: "Test Game", application_id: "123456789" },
                };
            return () => (0, r.jsx)(e, { entry: s, requestId: "mock-request-123" });
        },
        AddQuestionsContextMenu: async () => {
            let { AddQuestionsContextMenu: e } = await Promise.all([
                    a.e("38977"),
                    a.e("47587"),
                    a.e("11810"),
                    a.e("14656"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(a9.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, rM.Z_)();
                          },
                          guild: t,
                          allowTerms: !0,
                      });
        },
        ChannelListThreadContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("26132"),
                    a.e("38730"),
                    a.e("34971"),
                    a.e("43266"),
                    a.e("12255"),
                    a.e("40959"),
                    a.e("65200"),
                    a.e("85802"),
                    a.e("26250"),
                    a.e("51212"),
                    a.e("84615"),
                ]).then(a.bind(a, 612826)),
                t = a9.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(a_.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = a_.A.getAllThreadsForParent(t.id);
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
                t = Object.values(a9.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rM.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("46757"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(a9.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rM.Z_ });
        },
    },
    rU = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("83518"), a.e("55197"), a.e("50974")]).then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rG() {
    let e = o.useMemo(
            () =>
                Object.keys(rP)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rU)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rM.L3)(e, rP[a]);
            },
            [a],
        ),
        d = null != l ? rU[l] : null;
    return (0, r.jsx)(g.Ip, {
        className: tV.nd,
        children: (0, r.jsxs)(z.B, {
            className: s_.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(z.B, {
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
                (0, r.jsxs)(z.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(an.Z, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: a,
                            onSelectionChange: n,
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(x.$, { variant: "primary", text: "Open", disabled: null == a, onClick: i }),
                    ],
                }),
                (0, r.jsxs)(z.B, {
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
                (0, r.jsx)(z.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(an.Z, {
                        label: "Render a Popout Menu",
                        placeholder: "Select a popout",
                        options: t,
                        value: l,
                        onSelectionChange: s,
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
var rF = a(253506),
    rB = a(665260),
    r$ = a(97808),
    rV = a(778712),
    rW = a(308528),
    rz = a(493336),
    rH = a(571694),
    rK = a(963852),
    rY = a(704844),
    rq = a(309010),
    rJ = a(645959),
    rQ = a(716371),
    rX = a(825801);
let rZ = [
    { id: "USER_JOIN", value: eo.lAJ.USER_JOIN, label: "User Join" },
    { id: "CHANNEL_PINNED_MESSAGE", value: eo.lAJ.CHANNEL_PINNED_MESSAGE, label: "Channel Pinned Message" },
    { id: "GUILD_BOOST", value: eo.lAJ.GUILD_BOOST, label: "Guild Boost" },
    { id: "GUILD_BOOST_TIER_1", value: eo.lAJ.GUILD_BOOST_TIER_1, label: "Guild Boost Tier 1" },
    { id: "GUILD_BOOST_TIER_2", value: eo.lAJ.GUILD_BOOST_TIER_2, label: "Guild Boost Tier 2" },
    { id: "GUILD_BOOST_TIER_3", value: eo.lAJ.GUILD_BOOST_TIER_3, label: "Guild Boost Tier 3" },
    { id: "THREAD_CREATED", value: eo.lAJ.THREAD_CREATED, label: "Thread Created" },
    { id: "CHANNEL_FOLLOW_ADD", value: eo.lAJ.CHANNEL_FOLLOW_ADD, label: "Channel Follow Add" },
    { id: "STAGE_START", value: eo.lAJ.STAGE_START, label: "Stage Start" },
    { id: "STAGE_END", value: eo.lAJ.STAGE_END, label: "Stage End" },
    { id: "STAGE_SPEAKER", value: eo.lAJ.STAGE_SPEAKER, label: "Stage Speaker" },
    { id: "STAGE_RAISE_HAND", value: eo.lAJ.STAGE_RAISE_HAND, label: "Stage Raise Hand" },
    { id: "STAGE_TOPIC", value: eo.lAJ.STAGE_TOPIC, label: "Stage Topic" },
    { id: "VOICE_SESSION", value: eo.lAJ.VOICE_SESSION, label: "Voice Session" },
    { id: "FRIEND_REQUEST_ACCEPTED", value: eo.lAJ.FRIEND_REQUEST_ACCEPTED, label: "Friend Request Accepted" },
    { id: "GUILD_DISCOVERY_DISQUALIFIED", value: eo.lAJ.GUILD_DISCOVERY_DISQUALIFIED, label: "Discovery Disqualified" },
    { id: "GUILD_DISCOVERY_REQUALIFIED", value: eo.lAJ.GUILD_DISCOVERY_REQUALIFIED, label: "Discovery Requalified" },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",
        value: eo.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
        label: "Discovery Grace Initial Warning",
    },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",
        value: eo.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
        label: "Discovery Grace Final Warning",
    },
    { id: "RECIPIENT_ADD", value: eo.lAJ.RECIPIENT_ADD, label: "Recipient Add" },
    { id: "RECIPIENT_REMOVE", value: eo.lAJ.RECIPIENT_REMOVE, label: "Recipient Remove" },
    { id: "CALL", value: eo.lAJ.CALL, label: "Call" },
];
function r0() {
    let [e, t] = o.useState(eo.lAJ.USER_JOIN),
        a = (0, d.bG)([rq.Ay], () => rq.Ay.getChannelId(), []),
        n = o.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, rK.Ay)({ channelId: a, content: "", type: e, state: eo.cmJ.SENT });
            rz.A.receiveMessage(a, t, !1);
        }, [a, e]),
        l = o.useCallback(() => {
            if (null != a)
                for (let { value: e } of rZ) {
                    let t = (0, rK.Ay)({ channelId: a, content: "", type: e, state: eo.cmJ.SENT });
                    rz.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, r.jsxs)("div", {
        className: rX.gs,
        children: [
            (0, r.jsx)(an.Z, {
                label: "Inject System Message",
                selectionMode: "single",
                options: rZ,
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
function r1() {
    let e = (0, d.yK)([rJ.A], () => rJ.A.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, d.cf)([a_.A, el.default, aC.A], () => ({
            selectedChannel: a_.A.getChannel(t),
            options: e.map((e) => {
                let t = a_.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, aE.m1)(t, el.default, aC.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(r$.eu, { src: (0, rH.Y)(t), "aria-hidden": !0, size: rV._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rB.PQ)(n.recipientFlags ?? 0, rF.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rY.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, rB.Lt)(n.recipientFlags ?? 0, rF.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rX.gs,
        children: [
            (0, r.jsx)(an.Z, {
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
                text: i ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: s,
                disabled: null == t,
            }),
        ],
    });
}
function r2() {
    let e = o.useCallback(() => {
        rW.A.openPrivateChannel({ recipientIds: [rQ.K] });
    }, []);
    return (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function r3() {
    let e = (0, d.bG)([az.Ay], () => az.Ay.allByCategory(az.xW.MESSAGING), [], d.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => sU(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: $()(tV.nd, rX.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rX.yF }),
            (0, r.jsx)(r0, {}),
            (0, r.jsx)("div", { className: rX.yF }),
            (0, r.jsx)(r1, {}),
            (0, r.jsx)("div", { className: rX.yF }),
            (0, r.jsx)(r2, {}),
        ],
    });
}
var r6 = a(459838),
    r8 = a(772707),
    r5 = a(150934),
    r9 = a(598653),
    r7 = a(166403),
    r4 = a(625494),
    oe = a(204925),
    ot = a(325278);
let oa = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: ne.intl.string(ne.t.ZLRYGU),
                confirmButtonText: ne.intl.string(ne.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: ne.intl.string(ne.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: ne.intl.string(ne.t["13ofGu"]),
                impression: { impressionName: s7.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("54398"), a.e("34260"), a.e("18467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: nd.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("20969"), a.e("82758"), a.e("80022"), a.e("10136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: oe.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e("80959").then(a.bind(a, 784578));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([
            a.e("20969"),
            a.e("82758"),
            a.e("19623"),
            a.e("80022"),
            a.e("1143"),
        ]).then(a.bind(a, 284778));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NUFModal: async () => {
        let { default: e } = await Promise.all([
            a.e("7132"),
            a.e("78841"),
            a.e("66234"),
            a.e("20969"),
            a.e("59405"),
            a.e("19580"),
            a.e("97804"),
            a.e("56856"),
            a.e("82758"),
            a.e("99574"),
            a.e("80022"),
            a.e("50475"),
            a.e("93265"),
            a.e("58118"),
        ]).then(a.bind(a, 111185));
        return (t) => (0, r.jsx)(e, { ...t, onSlideChange: () => {} });
    },
    ClaimAccountModal: async () => {
        let { default: e } = await Promise.all([a.e("40933"), a.e("19623"), a.e("21007")]).then(a.bind(a, 888363));
        return (t) => (0, r.jsx)(e, { claimRequired: !0, ...t });
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await Promise.all([a.e("51194"), a.e("9018")]).then(a.bind(a, 244321));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123" });
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await Promise.all([a.e("65606"), a.e("73669"), a.e("7133")]).then(a.bind(a, 580812));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123", messageId: null });
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await a.e("52343").then(a.bind(a, 725034));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123" });
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.all([a.e("56643"), a.e("65264"), a.e("89545"), a.e("11493")]).then(
            a.bind(a, 914724),
        );
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("96531").then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: r6.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(r8.k, {
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
        let { default: e } = await Promise.all([a.e("76982"), a.e("82318")]).then(a.bind(a, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(a.bind(a, 810412));
        return (a) => (0, r.jsx)(e, { ...a, clientSettingType: t.LEGACY_GAME, gameId: "123456789" });
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await Promise.all([a.e("23866"), a.e("80347")]).then(
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
            s = o.forwardRef((a, s) => {
                let [i, d] = o.useState(null);
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
                        pauseDuration: i,
                        setPauseDuration: d,
                    },
                    children: (0, r.jsx)(e, {}),
                });
            });
        return (s.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, r.jsx)(s, { ...e });
    },
    NewMemberActionModal: async () => {
        let { default: e } = await Promise.all([
                a.e("58203"),
                a.e("87973"),
                a.e("52191"),
                a.e("13949"),
                a.e("54569"),
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
        let { default: e } = await Promise.all([a.e("25861"), a.e("38035")]).then(a.bind(a, 14860)),
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
            s = {
                "device-1": { id: "device-1", name: "PS5 - Living Room", platform: "playstation" },
                "device-2": { id: "device-2", name: "PS5 - Bedroom", platform: "playstation" },
                "device-3": { id: "device-3", name: "PS4 - Office", platform: "playstation" },
            },
            i = (a) => {
                let n = t.default.getDevicesForPlatform,
                    i = t.default.getFetchingDevices,
                    o = t.default.getLastSelectedDeviceByPlatform,
                    d = t.default.getAwaitingRemoteSessionInfo;
                (t.default.getDevicesForPlatform = (e) => (e === eo.fg2.PLAYSTATION ? s : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== eo.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === eo.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null);
                let c = a.onClose;
                return (
                    (a.onClose = async () => {
                        (t.default.getDevicesForPlatform = n),
                            (t.default.getFetchingDevices = i),
                            (t.default.getLastSelectedDeviceByPlatform = o),
                            (t.default.getAwaitingRemoteSessionInfo = d),
                            await c();
                    }),
                    (0, r.jsx)(e, { ...a, channel: l, platform: eo.fg2.PLAYSTATION })
                );
            };
        return (i.displayName = "PlayStationModalWrapper"), i;
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([a.e("56600"), a.e("27495")]).then(a.bind(a, 651930));
        return (t) => (0, r.jsx)(e, { ...t, detectedActivity: { application_id: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([
            a.e("97377"),
            a.e("17207"),
            a.e("5634"),
            a.e("92030"),
            a.e("51471"),
        ]).then(a.bind(a, 550560));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123456789" });
    },
    CreateTagModal: async () => {
        let { default: e } = await Promise.all([a.e("2225"), a.e("47326")]).then(a.bind(a, 950989));
        return (t) => (0, r.jsx)(e, { ...t, channelId: "123456789", guildId: "987654321" });
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await Promise.all([a.e("2225"), a.e("47326")]).then(a.bind(a, 950989)),
            t = { id: "tag-123", name: "Bug Report", emojiId: "123456789", emojiName: "\uD83D\uDC1B", moderated: !0 };
        return (a) => (0, r.jsx)(e, { ...a, channelId: "123456789", guildId: "987654321", tag: t });
    },
    ConfirmModal: async () => {
        let { ConfirmModal: e } = await a.e("4823").then(a.bind(a, 158954));
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
        let { default: e } = await Promise.all([a.e("31910"), a.e("10919")]).then(a.bind(a, 556506));
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
        let { default: e } = await Promise.all([a.e("31910"), a.e("10919")]).then(a.bind(a, 556506));
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
        let { default: e } = await Promise.all([a.e("31910"), a.e("10919")]).then(a.bind(a, 556506));
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
                ButtonGroup: s,
            } = await Promise.all([a.e("4823"), a.e("77260")]).then(a.bind(a, 397927)),
            { DisableCommunicationDuration: i, getFriendlyDurationString: o } = await Promise.resolve().then(
                a.bind(a, 200700),
            ),
            d = await Promise.resolve().then(a.t.bind(a, 64700, 19)),
            c = "TestUser";
        function u(a) {
            let [u, m] = d.useState(i.DURATION_60_SEC),
                [h, x] = d.useState(""),
                [p, g] = d.useState(!1),
                [v, j] = d.useState(!1),
                f = [
                    { value: i.DURATION_60_SEC, label: o(i.DURATION_60_SEC) },
                    { value: i.DURATION_5_MIN, label: o(i.DURATION_5_MIN) },
                    { value: i.DURATION_10_MIN, label: o(i.DURATION_10_MIN) },
                    { value: i.DURATION_1_HOUR, label: o(i.DURATION_1_HOUR) },
                    { value: i.DURATION_1_DAY, label: o(i.DURATION_1_DAY) },
                    { value: i.DURATION_1_WEEK, label: o(i.DURATION_1_WEEK) },
                ],
                b = d.useCallback(async () => {
                    g(!0),
                        console.log("GuildDisableCommunicationModal: Timing out user", {
                            user: c,
                            duration: o(u),
                            reason: null != h ? h : "No reason provided",
                            resolveFlag: v,
                        }),
                        await new Promise((e) => setTimeout(e, 1e3)),
                        g(!1),
                        a.onClose();
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
                            (0, r.jsx)(s, {
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
            } = await Promise.all([a.e("4823"), a.e("77260")]).then(a.bind(a, 397927)),
            s = await Promise.resolve().then(a.t.bind(a, 64700, 19)),
            i = "Level 3 Server Boost",
            o = 200,
            d = 60,
            c = 8;
        function u(a) {
            let [u, m] = s.useState(!1),
                [h, x] = s.useState(!1),
                p = s.useCallback(async () => {
                    x(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: i,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2e3)),
                        x(!1),
                        a.onClose();
                }, [a]);
            return (0, r.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, r.jsxs)(n, { variant: "heading-lg/semibold", className: "mb-2", children: ["Deactivate ", i] }),
                    (0, r.jsxs)(t, {
                        variant: "text-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: [
                            "This will remove the ",
                            i,
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
        let { default: e } = await a.e("92063").then(a.bind(a, 970018));
        return (t) =>
            (0, r.jsx)(e, {
                modalProps: t,
                onConfirm: (e) => {
                    console.log("DataHarvestModal: Requesting data export for:", e),
                        setTimeout(() => {
                            console.log("DataHarvestModal: Data export request submitted successfully");
                        }, 1e3);
                },
            });
    },
    EnableCommunityModal: async () => {
        let { default: e } = await Promise.all([a.e("1378"), a.e("82721"), a.e("52823"), a.e("74832")]).then(
            a.bind(a, 709779),
        );
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: async () => {
                    console.log("EnableCommunityModal: Closed"), await t.onClose();
                },
            });
    },
    DeprivateModal: async () => {
        let e = (await Promise.all([a.e("54545"), a.e("54857")]).then(a.bind(a, 147696))).default;
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123456789012345678", startingChannelId: "987654321098765432" });
    },
    CameraPreviewModal: async () => {
        let { default: e } = await Promise.all([a.e("66759"), a.e("10534")]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e("66759"), a.e("10534")]).then(a.bind(a, 308229));
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
                    console.log("SelectFriendsModal: Closed"), await n();
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
                    console.log("SelectFriendsModalReminder: Closed"), await n();
                },
                startingScreen: t.REMINDER,
                ...l,
            });
        };
    },
    AddFavoriteChannelModal: async () => {
        let { default: e } = await Promise.all([
            a.e("43880"),
            a.e("94635"),
            a.e("94494"),
            a.e("36946"),
            a.e("92639"),
            a.e("40963"),
            a.e("66031"),
            a.e("59839"),
        ]).then(a.bind(a, 889186));
        return (t) => (0, r.jsx)(e, { ...t, parentId: null });
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([
            a.e("94635"),
            a.e("43880"),
            a.e("8073"),
            a.e("22230"),
            a.e("36946"),
            a.e("92639"),
            a.e("40963"),
            a.e("90480"),
            a.e("66031"),
            a.e("94317"),
            a.e("21743"),
        ]).then(a.bind(a, 190930));
        return (t) =>
            (0, r.jsx)(e, { ...t, applicationId: "123456789", mediaUrl: "https://picsum.photos/400/300.jpg" });
    },
    CallUserConfirmationModal: async () => {
        let { default: e } = await a.e("19106").then(a.bind(a, 279673));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onSubmit: () => {
                    console.log("CallUserConfirmationModal: Call confirmed"), t.onClose();
                },
            });
    },
    OptInReorderAttemptModal: async () => {
        let { default: e } = await Promise.all([a.e("57729"), a.e("97585"), a.e("24848")]).then(a.bind(a, 354643));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()),
            });
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await Promise.all([a.e("73669"), a.e("64499")]).then(a.bind(a, 296222));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose()),
            });
    },
    ConsentCheckBoxModal: async () => {
        let { ConfirmModal: e } = await a.e("4823").then(a.bind(a, 158954)),
            { Text: t, Heading: n } = await Promise.all([a.e("4823"), a.e("77260")]).then(a.bind(a, 397927)),
            l = await Promise.resolve().then(a.t.bind(a, 64700, 19));
        function s(a) {
            let [s, i] = l.useState(!1),
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
                                (0, r.jsx)(r5.S, {
                                    label: "I agree to Discord's Terms of Service and Privacy Policy",
                                    checked: s,
                                    onChange: (e) => i(e),
                                    labelType: "secondary",
                                }),
                                (0, r.jsxs)(t, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Consent status: ", s ? "Agreed" : "Not agreed"],
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
                                (0, r.jsx)(r5.S, {
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
        return (s.displayName = "ConsentCheckBoxModalContent"), (e) => (0, r.jsx)(s, { ...e });
    },
    GuildRaidLockdownFeedbackModal: async () => {
        let { default: e } = await Promise.all([a.e("36518"), a.e("46313")]).then(a.bind(a, 336496));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
            });
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await Promise.all([a.e("83013"), a.e("78618"), a.e("70232")]).then(a.bind(a, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 860689)),
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
        let { default: e } = await Promise.all([a.e("83013"), a.e("78618"), a.e("70232")]).then(a.bind(a, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 860689)),
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
        let { EmojiAddModal: e } = await Promise.all([a.e("74585"), a.e("90410")]).then(a.bind(a, 126033));
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
        let { default: e } = await a.e("25894").then(a.bind(a, 166789));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    VoiceCallFeedback: async () => {
        let { default: e } = await Promise.all([
                a.e("33111"),
                a.e("22255"),
                a.e("55925"),
                a.e("37381"),
                a.e("59375"),
                a.e("31389"),
            ]).then(a.bind(a, 492)),
            t = {
                channel_id: "123456789",
                channel_type: eo.rbe.GUILD_VOICE,
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
                a.e("33111"),
                a.e("22255"),
                a.e("55925"),
                a.e("37381"),
                a.e("59375"),
                a.e("17171"),
                a.e("62767"),
            ]).then(a.bind(a, 218738)),
            t = { ownerId: "987654321", guildId: "123456789", channelId: "123456789", streamType: ot.U4.GUILD },
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
        let e = el.default.getUser("12345"),
            t = el.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("75419"), a.e("55738"), a.e("31385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = el.default.getUser("12345"),
            t = el.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("75419"), a.e("55738"), a.e("84811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = el.default.getUser("12345"),
            t = el.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("75419"), a.e("55738"), a.e("17219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = el.default.getUser("12345"),
            t = el.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("83528"), a.e("43139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([a.e("30244"), a.e("72875")]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("44616"), a.e("85579")]).then(a.bind(a, 785606)),
            t = r7.A.getPremiumGroupSubscription();
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, subscription: t });
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await Promise.all([a.e("65243"), a.e("99910")]).then(a.bind(a, 826181));
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
        let { default: e } = await a.e("74575").then(a.bind(a, 218642));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    CaptchaTestModal: async () => {
        let { default: e } = await a.e("17724").then(a.bind(a, 563255));
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
                    console.log("PasswordConfirm: Password submitted:", e),
                        await new Promise((e) => setTimeout(e, 1e3));
                },
            });
    },
    BlockedDomainModal: async () => {
        let { default: e } = await Promise.all([a.e("83307"), a.e("20577"), a.e("58062"), a.e("20723")]).then(
            a.bind(a, 667934),
        );
        return (t) => (0, r.jsx)(e, { ...t, url: "https://example-phishing-site.com/malicious-page" });
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await Promise.all([a.e("26065"), a.e("62684")]).then(a.bind(a, 228855)),
            t = Object.keys(a9.A.getGuilds())[0];
        return (a) => (0, r.jsx)(e, { ...a, guildId: t });
    },
    UrgentMessageModal: async () => {
        let { default: e } = await Promise.all([a.e("89913"), a.e("36724")]).then(a.bind(a, 531519));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    UserAgreementsModal: async () => {
        let { default: e } = await Promise.all([a.e("37777"), a.e("82911"), a.e("22220")]).then(a.bind(a, 639719));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await Promise.all([a.e("59066"), a.e("52823"), a.e("71905")]).then(a.bind(a, 868952)),
            t = Object.values(a9.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([
            a.e("21137"),
            a.e("24748"),
            a.e("27917"),
            a.e("73152"),
            a.e("25281"),
        ]).then(a.bind(a, 516259));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("65123"),
            a.e("35316"),
            a.e("2238"),
            a.e("7265"),
            a.e("81079"),
            a.e("1352"),
            a.e("79023"),
            a.e("48672"),
        ]).then(a.bind(a, 777307));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupSubscribeModal: async () => {
        let { default: e } = await Promise.all([a.e("99709"), a.e("69595")]).then(a.bind(a, 526710));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserOnboarding: async () => {
        let { default: e } = await Promise.all([
            a.e("7132"),
            a.e("78841"),
            a.e("66234"),
            a.e("7850"),
            a.e("16138"),
            a.e("19580"),
            a.e("82721"),
            a.e("97804"),
            a.e("56856"),
            a.e("19623"),
            a.e("99574"),
            a.e("57794"),
            a.e("29574"),
        ]).then(a.bind(a, 655045));
        return (t) => (0, r.jsx)(e, { ...t });
    },
};
function on() {
    let e = o.useMemo(
            () =>
                Object.keys(oa)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(g.Ip, {
        className: tV.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsx)("section", {
                    className: s_.uW,
                    children: (0, r.jsxs)(z.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(an.Z, {
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
                                onClick: () => null != t && (0, eW.openModalLazy)(oa[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: function () {
                                    (0, r9.o)(!0), r4._.dispatch(eo.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ol = a(933832),
    os = a(472229),
    oi = a(945960),
    or = a(669316),
    oo = a(354670),
    od = a(428262);
async function oc() {
    try {
        let { body: e } = await n6.Bo.get({ url: eo.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
        return e;
    } catch (e) {
        return [];
    }
}
async function ou() {
    try {
        let { body: e } = await n6.Bo.get({ url: eo.Rsh.USER_OFFERS, rejectWithError: !0 });
        return { trial: e.trial, discount: e.discount.map(or.A.createFromServer) };
    } catch (e) {
        return { trial: [], discount: [] };
    }
}
async function om(e, t) {
    try {
        await n6.Bo.post({ url: eo.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oi._D)();
    }
}
async function oh(e, t) {
    try {
        await n6.Bo.del({ url: eo.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oi._D)();
    }
}
async function ox() {
    try {
        await n6.Bo.del({ url: eo.Rsh.USER_OFFERS, rejectWithError: !0 });
    } catch {
    } finally {
        await oo.A.forceReset(), await (0, oi._D)();
    }
}
async function op(e) {
    await n6.Bo.post({ url: eo.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
}
function og(e) {
    let { acked: t, expired: a, inStore: n, onClick: l, secondaryBadge: s } = e,
        i = "Created";
    return (
        a ? (i = "Expired") : t ? (i = "Acked") : n && (i = "Active"),
        (0, r.jsxs)("div", {
            className: s_.fC,
            children: [
                (0, r.jsx)(V.D, {
                    onClick: l,
                    className: $()(s_.qS, s_.vk, { [s_.vu]: n, [s_.R1]: t, [s_._7]: a }),
                    children: (0, r.jsxs)(p.E, {
                        variant: "eyebrow",
                        color: t ? void 0 : "text-overlay-light",
                        children: [i, n ? " *" : ""],
                    }),
                }),
                null != s &&
                    s.active &&
                    (0, r.jsx)("div", {
                        className: $()(s_.qS, s_.k3),
                        children: (0, r.jsx)(p.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: s.label,
                        }),
                    }),
            ],
        })
    );
}
function ov(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [s, i] = o.useState(!1),
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
    let { id: g, expires_at: v, redeemed_at: j, trial_id: f, subscription_trial: b, referrer: y } = t,
        E =
            a.find((e) => {
                let { value: t } = e;
                return t === f;
            })?.label ?? "Unknown";
    null != y && (E = `${E} from @${y.username}`);
    let _ = null != v,
        C = null != v && new Date(v).getTime() < Date.now(),
        S = b?.sku_id === sg.pe.TIER_0;
    async function N() {
        m(!0), _ ? await A({ expiresAt: null }) : await (0, oi.u1)(t), n(), m(!1);
    }
    async function A(e) {
        m(!0);
        try {
            await n6.Bo.patch({
                url: eo.Rsh.UPDATE_USER_OFFER(g, "trial"),
                body: {
                    ...("expiresAt" in e && { expires_at: e.expiresAt }),
                    ...("referrerId" in e && { referrer_id: e.referrerId }),
                },
                rejectWithError: !0,
            });
        } finally {
            n(), m(!1);
        }
    }
    return (
        o.useEffect(() => {
            if (s) {
                let e = setTimeout(() => {
                    i(!1);
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
        }, [s, d]),
        (0, r.jsxs)("div", {
            className: $()(s_.Nr, S ? s_.Qf : s_.C1),
            children: [
                (0, r.jsx)("div", {
                    className: $()(s_.nM, s_.S7),
                    children: (0, r.jsx)(K.D, {
                        variant: "heading-lg/semibold",
                        color: "text-overlay-light",
                        children: E,
                    }),
                }),
                (0, r.jsxs)(V.D, {
                    className: $()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, n_.C)(g, () => i(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-overlay-light", children: ["Offer: ", g] }),
                        s
                            ? (0, r.jsx)(ol.A, { size: "md", color: "currentColor", className: s_.Kk })
                            : (0, r.jsx)(np.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                (0, r.jsxs)(V.D, {
                    className: $()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, n_.C)(f, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-overlay-light", children: ["Trial: ", f] }),
                        d
                            ? (0, r.jsx)(ol.A, { size: "md", color: "currentColor", className: s_.Kk })
                            : (0, r.jsx)(np.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: s_.nM,
                    children: (0, r.jsxs)(p.E, {
                        variant: "eyebrow",
                        color: "text-overlay-light",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, od.re)({
                                intervalType: b?.interval ?? sg.WT.MONTH,
                                intervalCount: b?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: s_.nM,
                    children: [
                        (0, r.jsxs)(p.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, os.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nC.Xm)(v),
                            onChange: (e) => {
                                A({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s_.nM,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", color: "text-overlay-light", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: y?.id ?? "",
                            onChange: (e) => A({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsx)(og, {
                    acked: _,
                    expired: C,
                    inStore: l,
                    onClick: N,
                    secondaryBadge: { active: null != j, label: "Redeemed" },
                }),
                (0, r.jsx)(V.D, {
                    onClick: async () => {
                        m(!0), await oh(g, "trial"), n(), m(!1);
                    },
                    children: (0, r.jsx)(nj.u, { size: "md", color: "currentColor", className: $()(s_.Kk, s_.IT) }),
                }),
                (0, r.jsx)("div", { className: $()(s_.g4, { [s_.VP]: u || h }), children: (0, r.jsx)(ts.y, {}) }),
            ],
        })
    );
}
function oj(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [s, i] = o.useState(!1),
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
        m(!0), y ? await S({ expiresAt: null }) : await (0, oi.u1)(void 0, t), n(), m(!1);
    }
    async function S(e) {
        let { expiresAt: t } = e;
        m(!0);
        try {
            await n6.Bo.patch({
                url: eo.Rsh.UPDATE_USER_OFFER(g, "discount"),
                body: { expires_at: t },
                rejectWithError: !0,
            });
        } finally {
            n(), m(!1);
        }
    }
    return (
        o.useEffect(() => {
            if (s) {
                let e = setTimeout(() => {
                    i(!1);
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
        }, [s, d]),
        (0, r.jsxs)("div", {
            className: $()(s_.Nr, s_.id),
            children: [
                (0, r.jsx)("div", {
                    className: $()(s_.nM, s_.S7),
                    children: (0, r.jsx)(K.D, { variant: "heading-lg/semibold", color: "text-default", children: b }),
                }),
                (0, r.jsxs)(V.D, {
                    className: $()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, n_.C)(g, () => i(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", g] }),
                        s
                            ? (0, r.jsx)(ol.A, { size: "md", color: "currentColor", className: $()(s_.Kk, s_.mK) })
                            : (0, r.jsx)(np.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                (0, r.jsxs)(V.D, {
                    className: $()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, n_.C)(j, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", j] }),
                        d
                            ? (0, r.jsx)(ol.A, { size: "md", color: "currentColor", className: $()(s_.Kk, s_.mK) })
                            : (0, r.jsx)(np.T, { size: "xs", color: "currentColor", className: s_.Kk }),
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
                    className: s_.nM,
                    children: [
                        (0, r.jsxs)(p.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, os.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nC.Xm)(v?.toISOString()),
                            onChange: (e) =>
                                S({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsx)(og, {
                    acked: y,
                    expired: E,
                    inStore: l,
                    onClick: C,
                    secondaryBadge: { active: _, label: "Applied" },
                }),
                (0, r.jsx)(V.D, {
                    className: s_.aR,
                    onClick: async () => {
                        m(!0), await oh(g, "discount"), n(), m(!1);
                    },
                    children: (0, r.jsx)(nj.u, { size: "md", color: "currentColor", className: $()(s_.Kk, s_.fy) }),
                }),
                (0, r.jsx)("div", { className: $()(s_.g4, { [s_.VP]: u || h }), children: (0, r.jsx)(ts.y, {}) }),
            ],
        })
    );
}
function of() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
        [i, c] = o.useState(),
        [u, m] = o.useState(!0),
        { discountOffers: h, trialOffers: v } = (0, d.cf)([oo.A], () => ({
            discountOffers: Object.values(oo.A.getState().userDiscountOffers).sort((e, t) => e.id.localeCompare(t.id)),
            trialOffers: Object.values(oo.A.getState().userTrialOffers).sort((e, t) => e.id.localeCompare(t.id)),
        })),
        [f, b] = o.useState([]),
        [y, E] = o.useState([]),
        [_, C] = o.useState(10080),
        [S, N] = o.useState([]),
        A = o.useMemo(() => new Set([...v, ...h].map((e) => e.id)), [v, h]),
        k = o.useMemo(() => [...v, ...f.filter((e) => !A.has(e.id))], [v, f, A]),
        D = o.useMemo(() => [...h, ...y.filter((e) => !A.has(e.id))], [h, y, A]),
        { entitlements: I, deleteFractionalPremium: T, refreshEntitlementList: R } = sy();
    o.useEffect(() => {
        R();
    }, [R]),
        o.useEffect(() => {
            N(I.filter((e) => e.sourceType === eo.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [I]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || u) &&
                oc().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && s(a[0].value), null == i && c(r[0].value);
                });
        }, [e, a, l, i, u]),
        o.useEffect(() => {
            u &&
                (m(!1),
                oo.A.forceReset(),
                (0, oi._D)(),
                ou().then((e) => {
                    b(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        E(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [u]);
    let O = async () => {
            null != l && (await om(l, "trial"), m(!0));
        },
        w = async () => {
            null != i && (await om(i, "discount"), m(!0));
        };
    async function M() {
        await ox(), m(!0);
    }
    async function L() {
        let e = new Date(Date.now() + 60 * _ * 1e3).toISOString();
        await op(e), R();
    }
    return (0, r.jsx)(g.Ip, {
        className: tV.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: s_.Uo,
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
                                    onClick: () => (0, am.xB)(au.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, am._N)(au.M.NAGBAR_NOTICE_OFFER_EXPIRING),
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
                    className: s_.uW,
                    children: (0, r.jsxs)("div", {
                        className: s_.bd,
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
                                onSelectionChange: s,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.$, { variant: "primary", text: "Create", onClick: O }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: s_.uW,
                    children: (0, r.jsxs)("div", {
                        className: s_.bd,
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Create a Discount Offer",
                                options: a,
                                formatOption: (e) => {
                                    let { label: t, value: a } = e;
                                    return { label: t, value: a, id: a };
                                },
                                value: i,
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
                        className: s_.uW,
                        children: [
                            (0, r.jsx)(K.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "* indicates the offer is currently in UserOfferStore.",
                            }),
                            k.map((t) =>
                                (0, r.jsx)(
                                    ov,
                                    { offer: t, offerOptions: e, forceRefetch: () => m(!0), inStore: A.has(t.id) },
                                    t.id,
                                ),
                            ),
                        ],
                    }),
                D.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: s_.uW,
                        children: [
                            (0, r.jsx)(K.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "* indicates the offer is currently in UserOfferStore.",
                            }),
                            D.map((e) =>
                                (0, r.jsx)(
                                    oj,
                                    { offer: e, offerOptions: a, forceRefetch: () => m(!0), inStore: A.has(e.id) },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: s_.uW,
                    children: (0, r.jsxs)("div", {
                        className: s_.bd,
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
                                    (0, r.jsx)(sS, { entitlement: e, active: !0, onDelete: () => T(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var ob = a(340351),
    oy = a(26279),
    oE = a(142798);
let o_ = {
        [oy.Re.UNSPECIFIED]: "Unspecified",
        [oy.Re.DRAFT]: "Draft",
        [oy.Re.SIGNED]: "Signed",
        [oy.Re.DISCARDED]: "Discarded",
        [oy.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
    },
    oC = { [oy.BM.UNSPECIFIED]: "Unspecified", [oy.BM.ONE_TIME]: "One Time", [oy.BM.SUBSCRIPTION]: "Subscription" };
function oS() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(!0),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            n(!0), s(null);
            try {
                let e = await n6.Bo.get({ url: `${eo.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
                t(e.body ?? []);
            } catch (e) {
                s(e instanceof Error ? e.message : "Failed to fetch orders");
            } finally {
                n(!1);
            }
        }, []);
    return (
        o.useEffect(() => {
            i();
        }, [i]),
        (0, r.jsx)(g.Ip, {
            className: tV.nd,
            children: (0, r.jsxs)("div", {
                className: s_.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: s_.dL,
                        style: { marginBottom: "16px" },
                        children: [
                            (0, r.jsxs)(p.E, { variant: "text-lg/bold", children: ["Orders (last ", 5, ")"] }),
                            (0, r.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Refresh",
                                onClick: i,
                                loading: a,
                            }),
                        ],
                    }),
                    null != l && (0, r.jsx)(W.w, { type: "critical", children: l }),
                    !a &&
                        null != e &&
                        0 === e.length &&
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "No orders found.",
                        }),
                    null != e && e.map((e) => (0, r.jsx)(oN, { order: e }, e.id)),
                ],
            }),
        })
    );
}
function oN(e) {
    let { order: t } = e,
        [a, n] = o.useState(!1),
        [l, s] = o.useState(!1),
        i = o_[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${i}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            navigator.clipboard.writeText(t.id), s(!0), setTimeout(() => s(!1), 2e3);
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: s_.Nr,
        children: [
            (0, r.jsxs)(z.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(ob.C, {
                items: d,
                label: "Order info",
                layout: "inline",
                selectionMode: "none",
                selectionBehavior: "replace",
                disabledKeys: new Set(),
            }),
            (0, r.jsxs)(z.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  z.B,
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
                                                  oC[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
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
                    className: oE.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(V.D, {
                            onClick: () => n((e) => !e),
                            className: oE.Eh,
                            children: [
                                (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(sx.A, { direction: a ? sx.A.Directions.UP : sx.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: oE.j3,
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
                                                            (0, r.jsx)(z.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                z.B,
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
var oA = a(935462),
    ok = a(260598),
    oD = a(93688),
    oI = a(717400),
    oT = a(676955),
    oR = a(31300),
    oO = a(500060),
    ow = a(391973),
    oM = a(684013),
    oL = a(765671),
    oP = a(235986),
    oU = a(742589),
    oG = a(41984),
    oF = a(181435),
    oB = a(435736),
    o$ = a(296027),
    oV = a(515183),
    oW = a(489277),
    oz = a(127242),
    oH = a(869014),
    oK = a(528772),
    oY = a(38502),
    oq = a(532624),
    oJ = a(773371),
    oQ = a(996439),
    oX = a(350535),
    oZ = a(9302),
    o0 = a(644434),
    o1 = a(618137);
let o2 = {
        [eo.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: eo.uss.CLICK_ZONE_DEBUG,
            id: (0, eI.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...oY.A.getWidgetDefaultSettings(eo.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [eo.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: eo.uss.PERFORMANCE_DEBUG,
            id: (0, eI.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...oY.A.getWidgetDefaultSettings(eo.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    o3 = {};
function o6(e) {
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
        (0, r.jsxs)(nx.$n, {
            look: nx.$n.Looks.LINK,
            color: nx.$n.Colors.LINK,
            size: nx.$n.Sizes.MIN,
            onClick: function () {
                (0, n_.C)(t, () => n(!0));
            },
            className: o1.DT,
            children: ["Application Id: ", t, " ", a ? ne.intl.string(ne.t.t5VZ88) : null],
        })
    );
}
let o8 = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.bG)([E.Ay], () => E.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, d.bG)([S.A], () => S.A.getGameForPID(t.pid)),
            l = (0, d.bG)([E.Ay], () => (null == a ? null : E.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: o1.st,
            children: [
                (0, r.jsx)(p.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(p.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, r.jsx)(o6, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, oV.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(p.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: o1.st,
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
                            children: ["overlayMethod: ", (0, oV.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsxs)("div", {
                        className: o1.st,
                        children: [
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", l.source],
                            }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, oV.gK)(l.overlayMethod)],
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
                    children: ["hook: ", n?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", n?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", n?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", n?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    o5 = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cf)([oJ.default], () => oJ.default.getOverlayPIDStatuses()),
            n = (0, d.cf)([o$.default], () => o$.default.getTrackedGames()),
            l = (0, d.bG)([oJ.default], () => oJ.default.isInputLocked(t), [t]),
            s = (0, d.bG)([oJ.default], () => oJ.default.DEV_isInputLockedV3(t), [t]),
            i = (0, d.bG)([oJ.default], () => oJ.default.DEV_isInputLocked(t), [t]),
            o = (0, d.bG)([oJ.default], () => oJ.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: o1.st,
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
                    children: ["isInputLockedV3: ", s],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", i],
                }),
                (0, r.jsxs)(p.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function o9(e) {
    var t;
    let a = ((t = Object.values((0, d.yK)([oY.A], () => oY.A.getWidgetsForLayout(o0.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, ow.uv)(a.id);
            else {
                let t = o2[e];
                if (null == t) return;
                let a = t(o0.G);
                (0, ow.jn)(a);
            }
        },
    ];
}
function o7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nC.i$)(nh()(e), "h:mm:ss.SSS");
}
let o4 = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, d.bG)([o$.default], () => {
            if (null == t) return "Unknown";
            let e = o$.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((o3[t] = e), e) : (o3[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(p.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function de() {
    let e = (0, d.bG)([oz.A], () => oz.A.hasRenderDebugMode(oG.x7.TrackFocusPIDs)),
        t = (0, d.yK)([o$.default], () => o$.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: o1.st,
        children: [
            (0, r.jsxs)("div", {
                className: o1.Iv,
                children: [
                    (0, r.jsx)(m.d, {
                        checked: e,
                        onChange: () =>
                            void oM.A.setRenderDebugMode(
                                !oz.A.hasRenderDebugMode(oG.x7.TrackFocusPIDs),
                                oG.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(V.D, {
                        className: o1.LL,
                        onClick: () => oM.A.clearTrackedPids(),
                        children: (0, r.jsx)(nj.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(g.Ip, {
                className: $()(o1.st, o1.XG),
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
                                children: (0, r.jsx)(l0.m, {
                                    position: "left",
                                    text: n === oG.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(p.E, {
                                            variant: "text-sm/medium",
                                            color: n === oG.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(o4, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                o7(t),
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
let dt = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.bG)([o$.default, E.Ay], () => {
                if (null == t) return null;
                let e = o$.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = E.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lV.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(p.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, oV.wR)(a) : "Unknown"],
        });
    }),
    da = o.memo(function () {
        let e = (0, d.cf)([o$.default], () => o$.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = E.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, oV.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
                        let l = await Promise.all(t);
                        a((e) =>
                            l.reduce(
                                (e, t) => {
                                    let [a, n, l] = t;
                                    if (null == n || null == a) return e;
                                    let s = e[a] ?? [],
                                        i = s[s.length - 1]?.screenType;
                                    return (
                                        (0 === s.length || i !== n) &&
                                            (e[a] = [...s, { pid: a, screenType: n, timestamp: l }]),
                                        e
                                    );
                                },
                                { ...e },
                            ),
                        );
                    }, +n5.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(l0.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(g.Ip, {
                        className: $()(o1.st, o1.XG),
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
                                            (0, r.jsx)(o4, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(dt, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        p.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, oV.wR)(a)} @ ${o7(n)}`,
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
    dn = o.memo(function () {
        let e = (0, d.cf)([o$.default], () => o$.default.getTrackedGames()),
            t = (0, oZ.getPID)(),
            a = (0, d.bG)([o$.default], () => o$.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, d.yK)([oK.A], () => [oK.A.enabled, oK.A.keepOpen]),
            s = (0, d.bG)([oJ.default], () => oJ.default.getFocusedPID()),
            i = (0, d.bG)([oJ.default], () => oJ.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: o1.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(o5, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", s?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", i ? "Yes" : "No"],
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
    dl = [
        {
            mode: oG.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: oG.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: oG.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: oG.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oG.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oG.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: oG.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    ds = o.memo(function () {
        let [e, t] = o9(eo.uss.CLICK_ZONE_DEBUG),
            [a, n] = o9(eo.uss.PERFORMANCE_DEBUG),
            l = (0, d.bG)([oz.A], () => oz.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: o1.st,
                children: dl.map((s) => {
                    let i =
                        s.mode === oG.x7.OverlayRafManagerForceEnabled
                            ? `${s.label} (${oH.A.getLastRAFCallbackReason()})`
                            : s.label;
                    function d() {
                        return s.mode === oG.x7.ClickZones
                            ? null != e
                            : s.mode === oG.x7.WidgetAreas
                              ? null != a
                              : l.has(s.mode);
                    }
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(m.d, {
                                checked: d(),
                                onChange: function () {
                                    var e;
                                    let a = d();
                                    s.mode === oG.x7.ClickZones && t(),
                                        s.mode === oG.x7.WidgetAreas && n(),
                                        (e = s.mode),
                                        oM.A.setRenderDebugMode(!a, e);
                                },
                                label: i,
                                description: s.tooltip,
                            }),
                        },
                        s.mode,
                    );
                }),
            })
        );
    }),
    di = o.memo(function () {
        let e = (0, d.cf)([o$.default], () => o$.default.getTrackedGames()),
            t = (0, d.bG)([E.Ay], () => E.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(l0.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: o1.st,
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
                                                (0, r.jsx)(dt, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(l0.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: o1.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(o8, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    dr = o.memo(function () {
        let e = (0, d.bG)([o$.default], () => o$.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: oG.V6.UNSET, value: oG.V6.UNSET, id: oG.V6.UNSET },
                { label: oG.V6.IN_PROCESS_V2, value: oG.V6.IN_PROCESS_V2, id: oG.V6.IN_PROCESS_V2 },
                { label: oG.V6.OUT_OF_PROCESS_V3, value: oG.V6.OUT_OF_PROCESS_V3, id: oG.V6.OUT_OF_PROCESS_V3 },
                {
                    label: oG.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: oG.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: oG.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(j.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: function (e) {
                a(e), oM.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function dd(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(oA.EO, {
        size: oA.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(oA.rQ, {
                align: oP.A.Align.CENTER,
                justify: oP.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(oA.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(oA.$m, {
                children: (0, r.jsx)("div", {
                    className: o1.st,
                    children: (0, r.jsx)(ok.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(oA.jl, {
                children: (0, r.jsxs)(aZ.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(n);
                            },
                        }),
                        (0, r.jsx)(x.$, { variant: "secondary", text: "Clear", onClick: s }),
                    ],
                }),
            }),
        ],
    });
}
let dc = {
    native: { label: "Native", filter: (e) => e.type === oF.ON.NativeLegacy || e.type === oF.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === oF.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === oF.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === oF.ON.OOPModule || e.type === oF.ON.LegacyModule },
};
function du(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oF.QJ.Info;
    if (t === oF.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case oF.ON.NativeLegacy:
            return "var(--yellow-500)";
        case oF.ON.NativeOOP:
            return "var(--green-500)";
        case oF.ON.Flux:
            return "var(--brand-400)";
        case oF.ON.Renderer:
            return "var(--brand-500)";
        case oF.ON.LegacyModule:
            return "var(--yellow-300)";
        case oF.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let dm = [
    {
        key: "type",
        cellClassName: o1.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = dh(t);
            return (0, r.jsx)("div", {
                className: o1.g$,
                style: { color: du(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: o1.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case oF.QJ.Info:
                                    return "text-strong";
                                case oF.QJ.Warning:
                                    return "text-feedback-warning";
                                case oF.QJ.Error:
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
        key: "timestamp",
        cellClassName: o1.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nC.i$)(nh()(t), "h:mm:ss.SSS");
        },
    },
];
function dh(e) {
    switch (e) {
        case oF.ON.NativeLegacy:
            return oD.W;
        case oF.ON.NativeOOP:
            return oI.q;
        case oF.ON.Renderer:
        case oF.ON.Flux:
            return oT.v;
        case oF.ON.LegacyModule:
            return oR.k;
        case oF.ON.OOPModule:
            return oO.o;
        default:
            return oR.k;
    }
}
function dx(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let dp = ["__webpack_require__", "fn"],
    dg = ["web.js", "web.js.map"],
    dv = [
        {
            id: "details",
            name: "Details",
            group: aX.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: d, timestamp: c, pid: u } = t,
                    m = nh()(c),
                    h = dh(l);
                return (0, r.jsxs)(g.Ar, {
                    className: o1.bW,
                    children: [
                        (0, r.jsxs)(oU.A, {
                            className: $()(tV.jr, o1.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: du(l, s) },
                                    className: o1.nr,
                                    children: (0, r.jsx)(h, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(oU.A.Title, {
                                    wrapperClassName: o1.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(V.D, {
                                            tag: "span",
                                            className: o1.KE,
                                            onClick: () => (0, n_.C)(n),
                                            children: (0, r.jsx)(np.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(oU.A.Icon, {
                                    icon: np.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, n_.C)(dx(t));
                                    },
                                }),
                                (0, r.jsx)(oU.A.Icon, { icon: nv.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(nM, {
                            className: o1.ZK,
                            children: [
                                (0, r.jsx)(nL, {
                                    name: "Timestamp",
                                    copyValue: m.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: m.toISOString(),
                                        title: (0, nC.i$)(m, "LLLL"),
                                        children: (0, nC.i$)(m, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nL, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(nL, {
                                    name: "PID",
                                    copyValue: u?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: u?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nL, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nL, {
                                    name: "Data",
                                    copyValue: dx(d),
                                    children: (0, r.jsx)("code", { children: dx(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nL, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, s] = a,
                                                        i = n.split(/[\\/]/).pop();
                                                    return dp.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: o1.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !dg.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: o1.lz,
                                                                                      title: n,
                                                                                      children: [i, ":", l, ":", s],
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
    dj = {
        searchType: ny.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return null != n && s.push(n), s;
        },
        throttleMs: 100,
    };
function df() {
    let { ref: e, height: t } = (0, oL.Ay)(),
        a = (0, d.bG)([oz.A], () => oz.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [c, u] = o.useState(null),
        [m, h] = o.useState(Object.keys(dc)),
        [x, g] = (0, d.bG)([oz.A], () => oz.A.getOverlayLoggingBreadcrumbs(), [], oQ.D),
        [v, j] = o.useState(null),
        f = v ?? x,
        b = null != v ? -1 : g;
    o.useEffect(() => {
        0 !== b &&
            (s
                ? u(f.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : u(null));
    }, [s, f, b]);
    let [y, E] = o.useState(""),
        _ = o.useMemo(
            () =>
                0 === b
                    ? []
                    : f.filter((e) => {
                          if (s && null != c && e.timestamp < c) return !1;
                          for (let t of m) {
                              let { filter: a } = dc[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [f, m, c, s, b],
        ),
        [C, S] = o.useState(_),
        [N, A] = o.useState(null),
        k = o.useMemo(() => f.find((e) => e.key === N), [f, N]),
        D = o.useCallback((e) => {
            S(e);
        }, []),
        { renderSelectedTab: I } = (0, aX.Ay)({ tabs: dv }, []);
    (0, nE.RT)(y, _, D, dj, [f]);
    let T = o.useCallback((e) => {
            l(e), oM.A.setModuleLogging(e);
        }, []),
        [R, O] = o.useState(!1),
        w = o.useRef(null),
        M = o.useCallback(() => {
            (0, n_.C)(JSON.stringify(_)), O(!0);
        }, [_]);
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
            j(null != e ? JSON.parse(e) : null);
        }, []),
        P = o.useCallback(
            (e) => {
                if (e) return j(null);
                (0, eW.openModal)(
                    (e) =>
                        (0, r.jsx)(dd, {
                            modalProps: e,
                            onClose: (t) => {
                                L(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    eH.SY,
                );
            },
            [L],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: o1.rh,
        children: [
            (0, r.jsxs)("div", {
                className: o1.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: $()(o1._V, o1.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: o1.iR,
                                children: (0, r.jsx)(r5.S, { label: "Poll Native", checked: n, onChange: (e) => T(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: o1.iR,
                                children: (0, r.jsx)(r5.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(V.D, {
                                className: o1.ny,
                                onClick: M,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: R ? "Copied" : "Copy All",
                                    }),
                                    R
                                        ? (0, r.jsx)(ol.A, { size: "sm", color: ez.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(np.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(V.D, {
                                className: o1.ny,
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
                        className: $()(o1._V, o1.XQ),
                        children: Object.entries(dc).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                V.D,
                                {
                                    className: $()(o1.pb, m.includes(t) && o1.bx),
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
                        className: o1._V,
                        children: (0, r.jsx)(nf.I, {
                            query: y,
                            onChange: E,
                            onClear: () => E(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: $()(o1.st, o1.CZ),
                children: (0, r.jsx)(tW, {
                    columns: dm,
                    data: C,
                    selectedRowKey: N ?? void 0,
                    onClickRow: (e) => A(e.key),
                }),
            }),
            null != k &&
                (0, r.jsx)(aQ, {
                    className: $()(o1.st, o1.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: I({ breadcrumb: k, onClose: () => A(null) }),
                }),
        ],
    });
}
let db = o.memo(function () {
        let e = (0, d.bG)([oW.A], () => oW.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: o1.st,
            children: [
                (0, r.jsx)("div", {
                    className: o1.Iv,
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
    dy = o.memo(function () {
        let e = (0, d.bG)([oz.A], () => oz.A.isStateDebuggingEnabled()),
            t = (0, d.bG)([oz.A], () => oz.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    oM.A.setStateDebugging(!0),
                    () => {
                        oM.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: o1.st,
                children: [
                    (0, r.jsx)("div", {
                        className: o1.Iv,
                        children: (0, r.jsx)(m.d, {
                            checked: e,
                            onChange: () => oM.A.setStateDebugging(!e),
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
function dE() {
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)("div", {
            className: $()(tV.nd, o1.rf),
            children: [
                (0, r.jsx)(ds, {}),
                (0, r.jsx)(dr, {}),
                (0, r.jsx)(di, {}),
                (0, r.jsx)(dn, {}),
                (0, r.jsx)(de, {}),
                (0, r.jsx)(da, {}),
                (0, r.jsx)(db, {}),
                (0, r.jsx)(dy, {}),
            ],
        }),
    });
}
function d_(e) {
    switch (e) {
        case "Disabled":
            return;
        case "False":
            return !1;
        case "True":
            return !0;
    }
}
function dC(e) {
    return null == e ? "Disabled" : e ? "True" : "False";
}
let dS = o.memo(function () {
    let e = (0, oB.wW)(),
        t = (0, d.bG)([oq.Ay], () => oq.Ay.getOverlayKeybind());
    return (0, r.jsxs)("div", {
        className: o1.st,
        children: [
            (0, r.jsx)(K.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
            (0, r.jsx)(K.D, { variant: "heading-md/semibold", children: "Experiment State" }),
            (0, r.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: (0, r.jsx)("pre", {
                    children: JSON.stringify({ ...e, overlayKeybind: (0, oX.dI)(t.shortcut) }, void 0, 2),
                }),
            }),
            (0, r.jsx)(K.D, { variant: "heading-md/semibold", children: "Overrides" }),
            (0, r.jsx)(j.l, {
                label: "Overlay User Status",
                description: "Override whether the current user was a new or existing user",
                value: dC(e.overrideIsNewOverlayUser),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Existing user", value: "False", id: "False" },
                    { label: "New user", value: "True", id: "True" },
                ],
                onSelectionChange: function (e) {
                    (0, oB.sw)(d_(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(j.l, {
                label: "Override Previous Keybind Status",
                description: "Override whether the user's pre-experiment keybind was the default keybind",
                value: dC(e.overrideIsUsingDefaultOverlayKeybind),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Using default keybind", value: "True", id: "True" },
                    { label: "Not using default keybind", value: "False", id: "False" },
                ],
                onSelectionChange: function (e) {
                    (0, oB.C3)(d_(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(K.D, { variant: "heading-md/semibold", children: "Actions" }),
            (0, r.jsx)(x.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oB.xc)() }),
            (0, r.jsx)(x.$, { size: "sm", text: "Reset isUsingDefaultOverlayKeybind", onClick: () => (0, oB.tM)() }),
        ],
    });
});
function dN() {
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsx)("div", { className: $()(tV.nd, o1.rf), children: (0, r.jsx)(dS, {}) }),
    });
}
function dA() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                tG.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    tG.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: $()(tV.nd, o1.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: o1._V,
                    children: [
                        (0, r.jsx)(V.D, {
                            className: $()(o1.k0, "state" === e && o1.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(p.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(V.D, {
                            className: $()(o1.k0, "logging" === e && o1.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(p.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(V.D, {
                            className: $()(o1.k0, "experiments" === e && o1.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(p.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(dE, {}),
                "logging" === e && (0, r.jsx)(df, {}),
                "experiments" === e && (0, r.jsx)(dN, {}),
            ],
        })
    );
}
var dk = a(255648);
let dD = { xbox_game_pass: "Xbox Game Pass" };
function dI(e) {
    return `/debug/partner-subs/${e}`;
}
async function dT() {
    let { body: e } = await n6.Bo.get({ url: "/debug/partner-subs", rejectWithError: !0 });
    return e;
}
async function dR(e, t) {
    await n6.Bo.post({ url: dI(e), body: t, rejectWithError: !0 });
}
async function dO(e, t) {
    await n6.Bo.del({ url: dI(e), body: t, rejectWithError: !0 });
}
function dw(e) {
    let { active: t } = e;
    return (0, r.jsx)("span", { className: `${dk.Od} ${t ? dk.xk : dk.kS}`, children: t ? "Active" : "Inactive" });
}
function dM(e) {
    let { partner: t, connectedAccount: a, onChanged: n } = e,
        [l, s] = o.useState(!1),
        i = { external_account_id: a.external_account_id },
        d = Object.keys(a.metadata).length > 0;
    async function c(e) {
        s(!0);
        try {
            await e();
        } finally {
            await n(), s(!1);
        }
    }
    return (0, r.jsxs)(z.B, {
        gap: 8,
        className: dk.nM,
        children: [
            (0, r.jsxs)(z.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                children: [
                    (0, r.jsx)("div", { className: dk.un, children: a.external_account_id }),
                    (0, r.jsx)(dw, { active: a.is_active }),
                    (0, r.jsxs)(z.B, {
                        direction: "horizontal",
                        gap: 8,
                        fullWidth: !1,
                        className: dk.cm,
                        children: [
                            (0, r.jsx)(m.d, {
                                label: "",
                                checked: a.is_active,
                                onChange: (e) => c(() => dR(t, { ...i, is_active: e })),
                                disabled: l,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Unlink",
                                onClick: () => c(() => dO(t, i)),
                                disabled: l,
                            }),
                        ],
                    }),
                ],
            }),
            d && (0, r.jsx)("div", { className: dk.en, children: JSON.stringify(a.metadata) }),
        ],
    });
}
function dL(e) {
    var t;
    let { listing: a, onChanged: n } = e,
        [l, s] = o.useState(""),
        [i, d] = o.useState(!0),
        [c, u] = o.useState(!1);
    async function h() {
        u(!0);
        try {
            let e = { is_active: i },
                t = l.trim();
            "" !== t && (e.external_account_id = t), await dR(a.partner, e), s("");
        } finally {
            await n(), u(!1);
        }
    }
    return (0, r.jsxs)(z.B, {
        gap: 12,
        className: dk.ns,
        children: [
            (0, r.jsxs)("div", {
                className: dk.CM,
                children: [
                    "Leave the id blank for a per-Discord-user default. Set the same id on multiple Discord accounts to test cross-account dedup of the ",
                    dD[(t = a.partner)] ?? t,
                    " membership.",
                ],
            }),
            (0, r.jsx)(f.k, {
                label: "External account id",
                placeholder: a.default_external_account_id,
                value: l,
                onChange: s,
            }),
            (0, r.jsx)(m.d, { label: "Active on link", checked: i, onChange: d }),
            (0, r.jsx)(z.B, {
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
function dP(e) {
    var t;
    let { listing: a, onChanged: n } = e;
    return (0, r.jsxs)(z.B, {
        gap: 8,
        className: dk.Oy,
        children: [
            (0, r.jsx)(K.D, { variant: "heading-lg/semibold", children: dD[(t = a.partner)] ?? t }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: [
                    "Backed by the ",
                    (0, r.jsx)("code", { children: a.connection_type }),
                    " connected account.",
                ],
            }),
            (0, r.jsx)("div", { className: dk.U, children: "Linked accounts" }),
            0 === a.connected_accounts.length
                ? (0, r.jsx)("div", { className: dk.Ie, children: "None linked yet." })
                : a.connected_accounts.map((e) =>
                      (0, r.jsx)(dM, { partner: a.partner, connectedAccount: e, onChanged: n }, e.connection_id),
                  ),
            (0, r.jsx)("div", { className: dk.U, children: "Link a new account" }),
            (0, r.jsx)(dL, { listing: a, onChanged: n }),
        ],
    });
}
function dU() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(null),
        l = o.useCallback(async () => {
            try {
                let e = await dT();
                t(e), n(null);
            } catch (e) {
                n(e instanceof Error ? e.message : String(e));
            }
        }, []);
    return (
        (0, tn.Ay)(() => {
            l();
        }),
        (0, r.jsxs)(g.Ip, {
            className: $()(tV.nd, dk.kL),
            children: [
                (0, r.jsx)(K.D, { variant: "heading-lg/semibold", className: tV.wx, children: "Partner Perks" }),
                (0, r.jsxs)(z.B, {
                    gap: 16,
                    children: [
                        null != a && (0, r.jsx)(p.E, { variant: "text-sm/normal", className: dk.kc, children: a }),
                        e.map((e) => (0, r.jsx)(dP, { listing: e, onChanged: l }, e.partner)),
                    ],
                }),
            ],
        })
    );
}
var dG = a(488428),
    dF = a(73825),
    dB = a(277984),
    d$ = a(529427),
    dV = a(944304),
    dW = a(300233),
    dz = a(599941),
    dH = a(162093),
    dK = a(4630),
    dY = a(44120),
    dq = a(532794),
    dJ = a(216678),
    dQ = a(194509),
    dX = a(761705),
    dZ = a(65738),
    d0 = a(265768);
function d1(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, dz.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(dH.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let d2 = function () {
    let [e, t] = o.useState(sg.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, d.yK)([a9.A], () => a9.A.getGuildsArray()),
        [s] = (0, d.yK)([r7.A], () => [r7.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(i.length > 0 ? i[0].value : null),
        [h, v] = o.useState(""),
        [y, E] = o.useState({ plan_id: sg.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        _ = "true" !== y.gift && null != s,
        [C, S] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: N } = (0, a1.Ay)(tC.A.PAYMENT_FLOW_TEST_PAGE),
        [A, k] = o.useState(""),
        [D, I] = o.useState(eo.dJq),
        { balance: T, isFetching: R, error: O } = (0, dX.W)(),
        { isSubmitting: w, responseMessage: M, redeemVirtualCurrency: L } = (0, dX.Q)(),
        [P, U] = o.useState(eo.dJq),
        [G, F] = o.useState(""),
        [B, $] = o.useState(eo.dJq),
        [V, W] = o.useState(eo.dJq);
    return (0, r.jsx)(a1.f5, {
        value: N,
        children: (0, r.jsx)(g.Ip, {
            className: d0.XG,
            children: (0, r.jsxs)(z.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(z.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: sg.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sg.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sg.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dQ.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: nx.XD.PRIMARY,
                                look: nx.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(z.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: sg.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sg.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sg.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, dq.A)({ subscriptionTier: a, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(z.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Boost",
                                value: c,
                                options: i,
                                onSelectionChange: (e) => m(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != c
                                ? (0, r.jsx)(dV.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(z.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(iD.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(z.B, {
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
                                    (0, r.jsx)(l0.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: h.length < 1,
                                        children: (0, r.jsx)(x.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: h.length < 1,
                                            onClick: () => {
                                                window.open(eo.BVt.BILLING_PROMOTION_REDEMPTION(h));
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
                                    { id: "tier_2", value: sg.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sg.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sg.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
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
                    (0, r.jsx)(l0.m, {
                        text: "Already subscribed",
                        shouldShow: _,
                        children: (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: _,
                            onClick: () => {
                                window.open(eo.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dG.stringify({ ...y }));
                            },
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(z.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    R
                                        ? (0, r.jsx)("div", {
                                              className: d0.wG,
                                              children: (0, r.jsx)(ts.y, { type: ts.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: d0.dB,
                                              children: [
                                                  null !== O &&
                                                      (0, r.jsxs)(p.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              O.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(dZ.Gy, {
                                                      balance: T ?? 0,
                                                      balanceWidgetMode: dZ.k7.SELECTED,
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
                                onClick: () => L(P, (0, eI.A)()),
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
                                options: i,
                                onSelectionChange: (e) => S(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dW.H, {
                                guildId: C?.id,
                                children: (0, r.jsx)(d1, { selectedGuildForGuildSub: C }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(z.B, {
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
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, dK.openIAPPurchaseModal)({
                                        applicationId: A,
                                        skuId: D,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: eo.liQ.IN_APP },
                                        context: eo.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(z.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(u.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(z.B, {
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
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, dJ.q)({
                                                applicationId: G,
                                                skuId: B,
                                                analyticsLocations: N,
                                                checkoutFlow: d$.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(z.B, {
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
                                onClick: () => (0, dY.A)({ skuId: V, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(z.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, dF.YG)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, dB.uZ)(),
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
                            onClick: () => (0, lv.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var d3 = a(219887),
    d6 = a(459357),
    d8 = a(885180),
    d5 = a(500380),
    d9 = a(102609),
    d7 = a(710195),
    d4 = a(211287),
    ce = a(295405),
    ct = a(188976);
let ca = [
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
    cn = {
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
    cl = [
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
    cs = {
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
    ci = [
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
    cr = {
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
function co() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState(null),
        [c, u] = o.useState(null),
        [m, h] = o.useState("pm_card_us"),
        [v, f] = o.useState(!1),
        b = Object.values((0, t_.bG)([ce.A], () => ce.A.paymentSources)),
        y = cn[e],
        E = async () => {
            let t = m;
            "" === t && (t = "pm_card_us"),
                await n6.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? c : null },
                    rejectWithError: !1,
                }),
                await (0, dB.$o)();
        };
    async function _() {
        await n6.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, dB.$o)();
    }
    async function C() {
        await n6.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
    }
    return (
        o.useEffect(() => {
            (0, dB.$o)();
        }, []),
        (0, r.jsx)(g.Ip, {
            className: tV.nd,
            children: (0, r.jsxs)("div", {
                className: s_.l$,
                children: [
                    (0, r.jsxs)(p.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: s_.Uo,
                        children: [
                            (0, r.jsx)(an.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: ca
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: ct.bI,
                                                src: (0, d5.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: function (e) {
                                    t(e), h(cn[e][0].value), f(1 === cn[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: cl.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        n(e), s(cs[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: ci.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        d(e), u(cr[e] ?? null);
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
                    (0, r.jsx)(cv, {}),
                    (0, r.jsx)(p.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(cx, {}),
                    (0, r.jsx)(p.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    b.map((e) => (0, r.jsx)(cj, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let cd = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    cc = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    cu = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Payment elements enabled" },
    ],
    cm = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function ch(e) {
    let { experimentName: t, options: a = cd } = e,
        n = (0, t_.bG)([d7.A, nN.default], () => {
            let e = nN.default.getId(),
                a = d7.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, d9.t$)(d9.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(j.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function cx() {
    return (0, r.jsxs)(z.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(ch, { experimentName: d6.A.definition.name, options: cc }),
            (0, r.jsx)(ch, { experimentName: d8._.definition.name, options: cu }),
            (0, r.jsx)(ch, { experimentName: d4.A.definition.name, options: cm }),
        ],
    });
}
let cp = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    cg = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function cv() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, s] = o.useState(null),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(null),
        p = parseInt(a, 10),
        g = !isNaN(p) && p >= 500 && p <= 5e3;
    async function v() {
        if (g) {
            d(!0), h(null), s(null), u(!1);
            try {
                let t = await n6.Bo.post({
                    url: "/billing/gift-card/create-on-demand-pin",
                    body: { country: e, currency: cg[e], amount: p },
                    rejectWithError: !0,
                });
                s(t.body.pin);
            } catch (e) {
                h(e instanceof Error ? e.message : "Failed to generate PIN");
            } finally {
                d(!1);
            }
        }
    }
    return (0, r.jsxs)(z.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(z.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(j.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: cp,
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
                        loading: i,
                        disabled: !g,
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(z.B, {
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
                                navigator.clipboard.writeText(l), u(!0), setTimeout(() => u(!1), 2e3);
                            },
                        }),
                    ],
                }),
            null != m && (0, r.jsx)(W.w, { type: "critical", children: m }),
        ],
    });
}
function cj(e) {
    let { paymentSource: t } = e;
    async function a() {
        await n6.Bo.patch({ url: eo.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
            await (0, dB.$o)();
    }
    return (0, r.jsxs)("div", {
        className: s_.bd,
        children: [
            (0, r.jsx)(d3.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: ct.bI, src: (0, d5.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(p.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var cf = a(706712),
    cb = a(441574),
    cy = a(367727),
    cE = a(349871),
    c_ = a(845886);
function cC() {
    return (0, r.jsxs)(g.Ip, { className: c_.kL, children: [(0, r.jsx)(cS, {}), (0, r.jsx)(cA, {})] });
}
function cS() {
    let e = (0, d.bG)([el.default], () => el.default.getCurrentUser()?.perks ?? null),
        t = o.useMemo(
            () =>
                null == e
                    ? []
                    : Object.values(cb.bb)
                          .filter((e) => "number" == typeof e && e !== cb.bb.UNSPECIFIED)
                          .filter((t) => (0, cE.Nh)(e, t))
                          .map((t) => ({
                              id: t,
                              name: cb.bb[t],
                              sources: (0, cE.kQ)(e, t)?.map((e) => cb.g$[e]) ?? [],
                          })),
            [e],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(K.D, { className: c_.wx, variant: "heading-lg/semibold", children: "Active Perks" }),
            (0, r.jsx)(cN, { perks: e, activePerks: t }),
            (0, r.jsx)(K.D, { className: c_.m_, variant: "heading-md/semibold", children: "Debug" }),
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
function cN(e) {
    let { perks: t, activePerks: a } = e;
    return null == t
        ? (0, r.jsx)("p", { className: c_.Qb, children: "No perks data available on the current user." })
        : 0 === a.length
          ? (0, r.jsx)("p", { className: c_.Qb, children: "No active perks." })
          : (0, r.jsxs)("table", {
                className: c_.Q,
                children: [
                    (0, r.jsx)("thead", {
                        children: (0, r.jsxs)("tr", {
                            children: [
                                (0, r.jsx)("th", { className: c_.Ts, children: "Perk" }),
                                (0, r.jsx)("th", { className: c_.Ts, children: "Sources" }),
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
                                            className: c_.iH,
                                            children: [(0, r.jsx)("code", { children: e.name }), " (", e.id, ")"],
                                        }),
                                        (0, r.jsx)("td", {
                                            className: c_.iH,
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
function cA() {
    let e = o.useCallback(() => {
            (0, am._N)(au.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, cy.FZ)(au.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(K.D, { className: c_.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: c_.PW,
                children: (0, r.jsx)(x.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var ck = a(136722),
    cD = a(576705),
    cI = a(558393),
    cT = a(719366),
    cR = a(842681);
function cO(e) {
    let { title: t, can: a } = e,
        n = a ? ol.A : X.P,
        l = (0, r.jsx)("div", {
            className: $()(cR.v_, a ? cR.uU : cR.Ss),
            children: (0, r.jsx)(n, { className: cR.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: cR.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: cR.rv,
                children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function cw() {
    let e = (0, d.bG)([rq.Ay], () => rq.Ay.getChannelId()),
        t = (0, d.bG)([a7.A], () => a7.A.getGuildId()),
        a = (0, d.bG)([a_.A], () => a_.A.getChannel(e)),
        n = (0, d.bG)([a9.A], () => a9.A.getGuild(t)),
        l = (0, d.bG)([cD.A], () => cD.A.computePermissions(a)),
        s = (0, d.bG)([cD.A], () => cD.A.computePermissions(n)),
        i = (0, aE.Ay)(a, !0),
        o = null != a ? (0, cT.mW)(a, !1) : null,
        c = null != n ? cI.A.getGuildPermissionSpecMap(n) : null,
        u = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = ck.zy(l, a);
            return (0, r.jsx)(cO, { title: t, can: n }, t);
        }),
        m = Object.values(c ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = ck.zy(s, a);
            return (0, r.jsx)(cO, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: $()(tV.nd, cR.nd),
        children: (0, r.jsxs)("div", {
            className: cR.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: cR.uW,
                    children: [
                        (0, r.jsx)(K.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        u,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: cR.uW,
                    children: [
                        (0, r.jsx)(K.D, {
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
var cM = a(873298),
    cL = a(775602),
    cP = a(363195),
    cU = a(885386),
    cG = a(631670),
    cF = a(817281),
    cB = a(955572),
    c$ = a(56348),
    cV = a(385803),
    cW = a(381941);
let cz = [eo.NJ8.DARK, eo.NJ8.LIGHT, eo.NJ8.DARKER, eo.NJ8.MIDNIGHT],
    cH = [cM.NS.COMPACT, cM.NS.COZY, cM.NS.DEFAULT];
function cK(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function cY() {
    let e,
        t =
            ((e = el.default.getCurrentUser()),
            od.Ay.canUseClientThemes(e) ? Object.keys(cV.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = cK(a);
            if (null != n) {
                let t = cV.ag[n];
                e = t?.theme ?? eo.NJ8.DARK;
            } else e = cK([eo.NJ8.DARK, eo.NJ8.DARKER, eo.NJ8.MIDNIGHT]);
            await cF.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                am.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = cK(cz);
            await cF.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                am.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function cq() {
    let e = tN.A.purchases,
        t = (0, eO.x9)(e),
        a = (0, eO.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = cK([...t, null])), l && (e.nameplate = cK([...a, null])), (0, tu.p)(e);
            let s = tm.A.getPendingChanges(),
                i = (0, c$.Sk)(s);
            await (0, cG._L)(i).finally(cG.pZ);
        } catch (e) {}
}
function cJ() {
    try {
        let e = cK(eo.hH7.FONT_SIZES);
        (0, cB.XS)(e);
        let t = cK(cW.qh);
        (0, cB.AC)(t);
        let a = cK(cH);
        cU.Xi.updateSetting(a);
    } catch (e) {}
}
function cQ() {
    (0, tp.Bf)();
    let e = (0, d.bG)([el.default], () => el.default.getCurrentUser()),
        t = cU.eh.useSetting(),
        a = (0, d.bG)([cP.A], () => cP.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, d.bG)([tN.A], () => tN.A.purchases),
        s = (0, eO.x9)(l),
        i = (0, eO.$W)(l),
        c = e?.avatarDecoration?.skuId,
        u = e?.collectibles?.nameplate?.skuId,
        m = null != c ? (s.find((e) => e.skuId === c) ?? null) : null,
        h = null != u ? (i.find((e) => e.skuId === u) ?? null) : null,
        g = (0, d.bG)([tS.A], () => tS.A.getProduct(m?.skuId)),
        v = (0, d.bG)([tS.A], () => tS.A.getProduct(h?.skuId)),
        j = (0, d.bG)([cL.Ay], () => cL.Ay.fontSize),
        f = (0, d.bG)([cL.Ay], () => cL.Ay.messageGroupSpacing),
        b = cU.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = el.default.getCurrentUser(),
                t = cU.eh.getSetting(),
                a = tN.A.purchases,
                n = (0, eO.x9)(a),
                l = (0, eO.$W)(a),
                s = cP.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = cL.Ay.fontSize,
                m = cL.Ay.messageGroupSpacing,
                h = cU.Xi.getSetting();
            return () => {
                try {
                    cF.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        am.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, tu.p)({ avatarDecoration: d, nameplate: c });
                    let e = tm.A.getPendingChanges(),
                        t = (0, c$.Sk)(e);
                    (0, cG._L)(t).finally(cG.pZ), (0, cB.XS)(u), (0, cB.AC)(m), cU.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lO.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(K.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(p.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: cY }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: cq,
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: cJ,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? cV.ag[n]?.getName() : "None"],
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
                                        case cM.NS.COMPACT:
                                            return "Compact";
                                        case cM.NS.COZY:
                                            return "Cozy";
                                        case cM.NS.DEFAULT:
                                            return "Default";
                                        case cM.NS.RESPONSIVE:
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
var cX = a(885574),
    cZ = a(656513),
    c0 = a(508274),
    c1 = a(837529);
let c2 = [5793266, 2303016],
    c3 = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function c6() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, c1.Zt)(),
        l = (0, em.Ay)(),
        s = (0, d.bG)([ah.A], () => ah.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, cF.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)(z.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(cZ.N, {
                            collapsibleContent: (0, r.jsxs)(z.B, {
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
                                    icon: cX.m,
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
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: c2 }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(aZ.e, {
                                  children: (0, r.jsx)(x.$, {
                                      variant: "critical-primary",
                                      text: "Clear Theme Override",
                                      onClick: function () {
                                          o(), t(null);
                                      },
                                  }),
                              }),
                              (0, r.jsx)(j.l, {
                                  label: "Profile Type",
                                  selectionMode: "single",
                                  value: e.mode,
                                  options: c3,
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
                                                onClick: () => t({ ...e, themeColors: c2 }),
                                            }),
                                            (0, r.jsxs)(z.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(c0.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(z.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(c0.VN, {
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
                                  : (0, r.jsxs)(z.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(j.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(eo.NJ8).map((e) => ({
                                                    id: e,
                                                    label: e,
                                                    value: e,
                                                })),
                                                onSelectionChange: (a) => t({ ...e, themeType: a }),
                                                clearable: !0,
                                                disabled: i,
                                            }),
                                            i &&
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
                                                                s?.customUserThemeSettings != null &&
                                                                    n({
                                                                        theme: l,
                                                                        customUserThemeSettings:
                                                                            s.customUserThemeSettings,
                                                                    }),
                                                                    (0, cF.u_)({ theme: "system" });
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
var c8 = a(141931),
    c5 = a(306173),
    c9 = a(617710),
    c7 = a(237984),
    c4 = a(43203),
    ue = a(349435),
    ut = a(674272),
    ua = a(466034),
    un = a(10094),
    ul = a(683760);
function us() {
    let e = (0, d.bG)([el.default], () => el.default.getCurrentUser()),
        t = (0, d.bG)([ul.A], () => {
            let e = ul.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, d.bG)([ul.A], () => ul.A.getPremiumTypeOverride());
    return (0, r.jsxs)(z.B, {
        gap: 16,
        children: [
            (0, r.jsx)(j.l, {
                label: "Override Client-Side Premium Type",
                options: sg.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, un.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(lB.Q, {
                onClick: () => {
                    (0, un.O)(sg.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(ib.J, {
                label: "Override Client-Side Account Created At Date",
                value: nh()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, un.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(lB.Q, { onClick: () => (0, un.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
}
var ui = a(19575),
    ur = a(327337),
    uo = a(431804),
    ud = a(865349),
    uc = a(818050);
function uu() {
    throw Error("Send help");
}
function um() {
    let e = cU.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(g.Ip, {
              children: [
                  (0, r.jsx)("div", { className: $()(ud.N, uc.SX), children: (0, r.jsx)(us, {}) }),
                  (0, r.jsx)("div", {
                      className: $()(ud.N, uc.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, ut.A)({ source: uo.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: $()(ud.N, uc.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = rq.Ay.getChannelId() ?? "21154681615024128"),
                                  void (0, eW.openModalLazy)(
                                      async () => {
                                          let { default: t } = await Promise.all([
                                              a.e("25028"),
                                              a.e("70940"),
                                              a.e("2033"),
                                              a.e("82830"),
                                              a.e("19959"),
                                          ]).then(a.bind(a, 131882));
                                          return (a) =>
                                              (0, r.jsx)(t, {
                                                  otherUserId: "9876543210",
                                                  channelId: e,
                                                  warningId: "test-warning-id",
                                                  warningType: ue._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: ur.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: $()(ud.N, uc.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, eW.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("17724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: $()(ud.N, uc.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, c4.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: $()(ud.N, uc.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: c5.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: $()(ud.N, uc.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = c9.A.getSocket();
                              tG.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: $()(ud.N, uc.QB),
                      children: (0, r.jsx)(m.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cU.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: $()(ud.N, uc.QB),
                      children: [
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, c7.o)(),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  c9.A.getSocket().close(), c9.A.getSocket().connect();
                              },
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  tG.h.dispatch({
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
                              onClick: () => (0, ua.sy)(!0),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: function () {
                                  n6.Bo.post({ url: eo.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: $()(ud.N, uc.QB),
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
                              onSelectionChange: (e) => null != e && ui.Ay.crash(e),
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
                                      value: c8.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: c8.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: c8.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void ui.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: uu }),
                      ],
                  }),
              ],
          });
}
var uh = a(593924),
    ux = a(653887),
    up = a(799226);
function ug() {
    let e = Object.keys(uh).map((e) => (0, r.jsx)(uf, { riveName: e }, e));
    return (0, r.jsx)(g.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(z.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(K.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(p.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(uv, {}),
                (0, r.jsx)(K.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
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
function uv() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, x] = o.useState(400),
        p = o.useCallback(() => {
            setTimeout(() => {
                s(c.current?.getProperties() ?? {}), d(c.current?.getArtboards() ?? []), n({});
            }, 1e3);
        }, []),
        g = o.useCallback(
            (e, t) => {
                null != a && n((a) => ({ ...a, [e]: { type: l?.[e]?.type, value: t } }));
            },
            [l, a],
        ),
        v = o.useCallback((e) => {
            s(null), n(null), t(e);
        }, []);
    return (0, r.jsxs)(z.B, {
        gap: 16,
        children: [
            (0, r.jsx)(uf, { riveName: "Rive inspector", onRiveLoad: v }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(ux._, { src: e, ref: c, onLoad: p, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(ts.y, {}) : null,
            null != a &&
                (0, r.jsxs)(z.B, {
                    children: [
                        (0, r.jsxs)(z.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(K.D, { variant: "heading-lg/medium", children: "Dimensions" }),
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
                        (0, r.jsxs)(z.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(K.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        uj,
                                        {
                                            property: e,
                                            type: l?.[e]?.type,
                                            value: a?.[e]?.value ?? l?.[e]?.value,
                                            onChange: (t) => g(e, t),
                                            artboards: i,
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
function uj(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: s } = e;
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
            return (0, r.jsx)(an.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select a color...",
                options: Object.entries(ez.A.colors).map((e) => {
                    let [t, a] = e;
                    return { label: t, value: a, id: t };
                }),
            });
        case "artboard":
            return (0, r.jsx)(an.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select an artboard...",
                options: s.map((e) => ({ label: e, value: e, id: e })),
            });
        default:
            return null;
    }
}
function uf(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = uh[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, up.Gy)(n);
    return (0, r.jsxs)(
        z.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(z.B, {
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    children: [
                        (0, r.jsx)("input", {
                            type: "file",
                            accept: ".riv",
                            onChange: (e) => {
                                let t = e.target.files?.[0];
                                if (null == t) return;
                                let l = new FileReader();
                                (l.onload = (e) => {
                                    let t = e.target?.result;
                                    null != n && (0, up.DS)(n, t), a?.(t);
                                }),
                                    l.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eB.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != n && (0, up.DS)(n, null),
                                    a?.(null);
                            },
                            icon: nj.u,
                            variant: "critical-primary",
                            size: "sm",
                            disabled: null == i && !l,
                        }),
                    ],
                }),
            ],
        },
        t,
    );
}
var ub = a(926919),
    uy = a(513521),
    uE = a(111162);
function u_() {
    let e = (0, d.bG)([uE.default], () => uE.default.routingKeyTags);
    return (0, r.jsx)(lg.Ch, {
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
                    (0, r.jsxs)(z.B, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(K.D, { variant: "heading-md/medium", children: "Overrides" }),
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "Manually configure the routing key values",
                            }),
                            (0, r.jsx)(uy.A, {
                                tagsLabel: "Routing Key Values",
                                placeholder: "Enter new value...",
                                tags: e.map((e) => ({ id: e, label: e })),
                                onAddTag: function (t) {
                                    e.includes(t) || (0, ub.f)([...e, t]);
                                },
                                onRemoveTag: function (t) {
                                    (0, ub.f)(e.filter((e) => !t.has(e)));
                                },
                            }),
                            e.length > 0
                                ? (0, r.jsx)(x.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: "Clear all",
                                      onClick: () => (0, ub.f)([]),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        }),
    });
}
var uC = a(455873);
function uS(e) {
    let { game: t, meta: a } = e;
    return (0, r.jsxs)("div", {
        className: uC.nM,
        children: [
            (0, r.jsxs)("div", {
                className: uC.uV,
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/semibold",
                        className: uC._k,
                        children: null == t.name || "" === t.name ? "(no name)" : t.name,
                    }),
                    null != a && (0, r.jsx)(p.E, { variant: "text-xs/normal", className: uC.Bq, children: a }),
                ],
            }),
            (0, r.jsx)(p.E, {
                variant: "text-xs/normal",
                className: uC.C0,
                children: null == t.exePath || "" === t.exePath ? "(no path)" : t.exePath,
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-xs/normal",
                className: uC.en,
                children: ["pid ", t.pid, " \xb7 ", t.id ?? "(no id)"],
            }),
        ],
    });
}
function uN(e) {
    let { title: t, count: a, entries: n, renderMeta: l } = e;
    return (0, r.jsxs)(z.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(K.D, { variant: "heading-sm/bold", children: [t, " (", a, ")"] }),
            0 === n.length
                ? (0, r.jsx)(p.E, { variant: "text-sm/normal", className: uC.Ie, children: "none" })
                : (0, r.jsx)(z.B, {
                      gap: 0,
                      children: n.map((e) =>
                          (0, r.jsx)(
                              uS,
                              { game: e.game, meta: l?.(e.outcome) },
                              `${e.game.pid}-${e.game.id ?? e.game.exeName}`,
                          ),
                      ),
                  }),
        ],
    });
}
function uA(e) {
    return "blocked" !== e.kind
        ? null
        : null != e.matchedExe
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    "blocked by exe substring ",
                    (0, r.jsx)("span", { className: uC.ti, children: e.matchedExe }),
                ],
            })
          : null != e.matchedPattern
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      "blocked by pattern ",
                      (0, r.jsx)("span", { className: uC.ti, children: e.matchedPattern }),
                  ],
              })
            : "blocked (no reason captured)";
}
function uk(e) {
    return "observed_app" !== e.kind
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  "matched observed app",
                  " ",
                  (0, r.jsxs)("span", {
                      className: uC.ti,
                      children: [e.appName, e.streamerTool ? " (streamer tool)" : ""],
                  }),
              ],
          });
}
function uD() {
    var e;
    let t = (0, d.bG)([E.Ay], () => E.Ay.getDetectionDebug()),
        a = o.useMemo(() => {
            let e = [],
                a = [],
                n = [],
                l = [];
            if (null != t)
                for (let s of t.entries)
                    switch (s.outcome.kind) {
                        case "passed":
                            e.push(s);
                            break;
                        case "non_game":
                            a.push(s);
                            break;
                        case "observed_app":
                            n.push(s);
                            break;
                        case "blocked":
                            l.push(s);
                    }
            return { passed: e, nonGames: a, observedApps: n, blocked: l };
        }, [t]);
    return (0, r.jsx)("div", {
        className: $()(tV.nd, uC.kL),
        children: (0, r.jsxs)(z.B, {
            gap: 16,
            padding: 12,
            className: uC.rf,
            children: [
                (0, r.jsxs)(z.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-md/bold", children: "Running Game Detection" }),
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
                (0, r.jsxs)(z.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(K.D, { variant: "heading-sm/bold", children: "Status" }),
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
                (0, r.jsx)(uN, { title: "Running games", count: a.passed.length, entries: a.passed }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(uN, { title: "Filtered: non-game", count: a.nonGames.length, entries: a.nonGames }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(uN, {
                    title: "Filtered: matched a hardcoded observed app",
                    count: a.observedApps.length,
                    entries: a.observedApps,
                    renderMeta: uk,
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(uN, {
                    title: "Filtered: blocklist",
                    count: a.blocked.length,
                    entries: a.blocked,
                    renderMeta: uA,
                }),
            ],
        }),
    });
}
var uI = a(290136),
    uT = a(106236),
    uR = a(629584),
    uO = a(600239),
    uw = a(940622),
    uM = a(961895),
    uL = a(343991),
    uP = a(699666);
function uU() {
    (0, eW.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
            return (t) =>
                (0, r.jsx)(e, {
                    title: "No image or video files found!",
                    help: "Please drop one or more image or video files.",
                    ...t,
                });
        },
        { modalKey: uL.D },
    );
}
function uG(e) {
    e.stopPropagation(), e.preventDefault();
}
let uF = (e) => {
    let { className: t, onDrop: a, children: n } = e,
        [l, s] = o.useState(!1),
        i = o.useRef(null),
        d = o.useCallback((e) => {
            uG(e), s(!0), (0, eW.closeModal)(uL.D);
        }, []),
        c = o.useCallback((e) => {
            uG(e);
            let t = i.current,
                a = e.relatedTarget;
            (null != a && (null == t || t.contains(a))) || s(!1);
        }, []),
        u = o.useCallback(
            async (e) => {
                uG(e), s(!1);
                let t = e.dataTransfer;
                if (null == t) return void uU();
                let n = await Promise.all(Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry())).then(
                    (e) => e.filter((e) => null != e),
                );
                n.length > 0 ? a(n) : uU();
            },
            [a],
        );
    return (0, r.jsxs)("div", {
        ref: i,
        className: $()(t, uP.iE),
        onDragEnter: d,
        onDragOver: uG,
        onDragLeave: c,
        onDrop: u,
        children: [
            n,
            l &&
                (0, r.jsx)("div", {
                    className: uP.d2,
                    children: (0, r.jsxs)("div", {
                        className: uP.vW,
                        children: [
                            (0, r.jsx)(uM.A, { icons: eb.ir }),
                            (0, r.jsx)(K.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                            (0, r.jsxs)("div", {
                                className: uP.GA,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: "Drop file(s) into this panel to preview Shop assets!",
                                    }),
                                    (0, r.jsxs)(p.E, {
                                        variant: "text-sm/normal",
                                        children: [
                                            "Click",
                                            (0, r.jsx)(uI.c, {
                                                className: uP.q4,
                                                size: "xs",
                                                color: ez.A.colors.TEXT_DEFAULT,
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
var uB = a(374380),
    u$ = a(597404);
let uV = new Set([
        eM.RN.HERO_BANNER_STATIC,
        eM.RN.HERO_LOGO,
        eM.RN.PDP_BACKGROUND,
        eM.RN.LOGO,
        eM.RN.MOBILE_BANNER,
        eM.RN.MOBILE_BACKGROUND,
    ]),
    uW = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    uz = { max: 5e6, warn: 2e6 },
    uH = { max: 3e6, warn: 1e6 },
    uK = { max: 2e6, warn: 1e6 },
    uY = { max: 1e6, warn: 5e5 },
    uq = { max: 25e4, warn: 5e4 },
    uJ = {
        [eM.Jn.PROFILE_EFFECT]: uz,
        [eM.Jn.AVATAR_DECORATION]: uH,
        [eM.Jn.PROFILE_FRAME]: uK,
        [eM.RN.HERO_BANNER_ANIMATED]: uz,
        [eM.RN.HERO_BANNER_RIVE]: uz,
        [eM.RN.CATALOG_BANNER_RIVE]: uz,
        [eM.RN.SHOP_BUTTON_BG_HOVER]: uH,
        [eM.RN.SHOP_BUTTON_BG_HOVER_DARK]: uH,
        [eM.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: uH,
        [eM.RN.SHOP_BUTTON_BG_RESTING]: uH,
        [eM.RN.SHOP_BUTTON_BG_RESTING_DARK]: uH,
        [eM.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: uH,
        [eM.RN.HERO_BANNER_STATIC]: uK,
        [eM.RN.UPSELL_BANNER]: uY,
        [eM.RN.UPSELL_BANNER_POPOUT]: uq,
        [eM.RN.MOBILE_BANNER]: uY,
        [eM.RN.MOBILE_BACKGROUND]: uq,
        [eM.RN.MOBILE_HERO]: uY,
        [eM.RN.PDP_BACKGROUND]: uq,
        [eM.RN.LOGO]: uq,
        [eM.RN.TAB_TOOLTIP]: uq,
    },
    uQ = [eM.Kx.COLLECTION],
    uX = [eM.Kx.AVATAR_DECORATIONS, eM.Kx.FRAMES, eM.Kx.NAMEPLATES, eM.Kx.PROFILE_EFFECTS];
async function uZ(e) {
    let t = e.createReader(),
        a = await new Promise((e) => t.readEntries(e)),
        n = new Set();
    for (let e of a) e.isDirectory && n.add(e.name);
    let l = uQ.filter((e) => !n.has(e));
    return uX.some((e) => n.has(e)) || l.push(`at least one of: ${uX.join(", ")}`), l;
}
let u0 = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/;
function u1(e) {
    let { names: t, addError: a } = e,
        n = t.filter((e) => !u0.test(e));
    n.length > 0 && a("File names must be in lowercase snake case", n);
}
let u2 = (e, t, a, n, l) => {
    let s = t.size,
        i = s > 1e6 ? `${(s / 1e6).toFixed(2)}MB` : `${(s / 1e3).toFixed(2)}KB`,
        r = `${l ?? t.name} - ${i}`;
    if (s > e.max) {
        let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
        a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
    } else s > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
};
function u3(e, t, a, n) {
    let l = uJ[e];
    if (null != l) for (let e of t) e.name.endsWith(".txt") || u2(l, e, a, n);
}
function u6(e) {
    let t = eM.aL[e];
    return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
}
let u8 = ["png", "jpg"];
async function u5(e) {
    let t = URL.createObjectURL(e);
    try {
        return await (0, eM.Lv)(t);
    } finally {
        URL.revokeObjectURL(t);
    }
}
async function u9(e, t) {
    if (e.length < 2) return null;
    let a = (
        await Promise.all(
            e.map(async (e) => {
                try {
                    return t(await u5(e));
                } catch {
                    return null;
                }
            }),
        )
    ).filter((e) => null != e);
    return a.length < 2 || new Set(a).size <= 1 ? null : a;
}
function u7(e) {
    return e.map((e) => `${e}px`).join(", ");
}
async function u4(e, t) {
    for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
        let e = new Map();
        for (let { file: t } of n.layerFiles) {
            let { parsed: a } = (0, u$.Mf)(t.name);
            if (a?.type !== uB.O.STAPLE) continue;
            let n = e.get(a.anchor) ?? [];
            n.push(t), e.set(a.anchor, n);
        }
        for (let [n, l] of e) {
            let e = await u9(l, (e) => e.height);
            null != e &&
                t("Staples with the same anchor (top/bottom) must all have the same height", [
                    `${a} (${String(n).toUpperCase()}) - ${u7(e)}`,
                ]);
        }
    }
}
async function me(e, t) {
    for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
        let e = n.layerFiles
                .filter((e) => {
                    let { file: t } = e,
                        { parsed: a } = (0, u$.Mf)(t.name);
                    return a?.type === uB.O.STAPLE || a?.type === uB.O.BORDER || a?.type === uB.O.RAIL;
                })
                .map((e) => {
                    let { file: t } = e;
                    return t;
                }),
            l = await u9(e, (e) => e.width);
        null != l && t("All layers (staples, borders, rails) must have the same width", [`${a} - ${u7(l)}`]);
    }
}
var mt = a(981388);
let ma = o.createContext({ setDropHandler: () => {} }),
    mn = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    ml = { id: "none", label: "[none selected]", value: null };
function ms() {
    (0, eW.hasModalOpen)(uO.k)
        ? (0, eW.closeModal)(uO.k)
        : (0, eW.openModalLazy)(
              async () => {
                  let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: uO.k, onCloseRequest: () => (0, eW.closeModal)(uO.k) },
          );
}
function mi() {
    (0, eW.hasModalOpen)(uO.g)
        ? (0, eW.closeModal)(uO.g)
        : (0, eW.openModalLazy)(
              async () => {
                  let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: uO.g, onCloseRequest: () => (0, eW.closeModal)(uO.g) },
          );
}
let mr = () => {
        let e = (0, eL.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, uw.JE)(),
            n = o.useMemo(() => [ml, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: mt.kO,
                  children: [
                      (0, r.jsx)(ay.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: mt.wR,
                          children: [
                              (0, r.jsx)(K.D, {
                                  variant: "heading-sm/semibold",
                                  children: `Profile Effect (${e.length} to preview)`,
                              }),
                              (0, r.jsx)(eB.K, {
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: mi,
                                  icon: uI.c,
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
    },
    mo = () => {
        let e = (0, uw.bA)(),
            { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, uw.JE)(),
            n = o.useMemo(() => [ml, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: mt.kO,
                  children: [
                      (0, r.jsx)(ay.h, { size: 16 }),
                      (0, r.jsx)(K.D, {
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
    },
    md = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, uw.JE)(),
            { avatarDecorationAssets: a } = (0, uw.NE)(),
            n = o.useMemo(() => [ml, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: mt.kO,
                  children: [
                      (0, r.jsx)(ay.h, { size: 16 }),
                      (0, r.jsx)(K.D, {
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
    },
    mc = new Set([eM.RN.HERO_BANNER_STATIC, eM.RN.HERO_BANNER_ANIMATED, eM.RN.HERO_BANNER_RIVE]),
    mu = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, uw.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: c,
                setHeroResponsive: u,
            } = (0, uw.JE)(),
            h = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            g = h.some((e) => e.value === eM.RN.HERO_LOGO),
            v = h.some((e) => mc.has(e.value)),
            j = o.useCallback((e) => l(e), [l]),
            f = o.useCallback(() => {
                s(), t(), a();
            }, [s, t, a]);
        return 0 === h.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ay.h, { size: 16 }),
                      (g || v) &&
                          (0, r.jsxs)("div", {
                              className: mt.v7,
                              children: [
                                  g &&
                                      (0, r.jsxs)("div", {
                                          className: mt.cj,
                                          children: [
                                              (0, r.jsx)(p.E, {
                                                  variant: "text-md/normal",
                                                  className: mt.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(uT.A, {
                                                  className: mt.TQ,
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  initialValue: i ?? 90,
                                                  handleSize: 10,
                                                  onValueChange: (e) => d(Math.round(e)),
                                                  onValueRender: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                              (0, r.jsx)(p.E, { variant: "text-sm/normal", children: `${i ?? 90}px` }),
                                          ],
                                      }),
                                  v &&
                                      (0, r.jsxs)("div", {
                                          className: mt.sy,
                                          children: [
                                              (0, r.jsx)(m.d, { checked: c, onChange: u }),
                                              (0, r.jsx)(p.E, {
                                                  variant: "text-md/normal",
                                                  children: "Responsive Hero",
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      (0, r.jsx)(ay.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: mt.wR,
                          children: [
                              (0, r.jsx)(K.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                              (0, r.jsx)(x.$, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  onClick: f,
                                  text: "Clear All",
                              }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: h.map((e) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: mt._0,
                                      children: [
                                          (0, r.jsx)(eB.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => j(e.value),
                                              icon: X.P,
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
    };
function mm(e) {
    let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(ay.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mt.wR,
                      children: [
                          (0, r.jsx)(K.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                          (0, r.jsx)(x.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              "li",
                              {
                                  className: mt.yk,
                                  children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: e }),
                              },
                              `${e}-${t}`,
                          ),
                      ),
                  }),
              ],
          });
}
function mh() {
    let {
            validateShopAssetPackage: e,
            reset: t,
            validationComplete: a,
            warnings: n,
            errors: l,
        } = (function () {
            let [e, t] = o.useState(!1),
                [a, n] = o.useState({}),
                [l, s] = o.useState({}),
                i = o.useCallback(function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    s((a) => {
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
                    t(!1), s({}), n({});
                }, []);
            return {
                validationComplete: e,
                errors: l,
                warnings: a,
                validateShopAssetPackage: o.useCallback(
                    async (e) => {
                        try {
                            if (0 === e.length) return void i("No files found");
                            if (e.length > 1) return void i("Uploaded multiple files. Expected 1 directory.");
                            let t = e[0];
                            if (!t.isDirectory) return void i("Uploaded a file. Expected a directory.");
                            let a = await uZ(t);
                            a.length > 0 && i("Missing required directories", a);
                            let n = await (0, eM.eg)([t]);
                            (function (e) {
                                let { files: t, addError: a, addWarning: n } = e;
                                for (let e of t.collectionFiles) {
                                    let t = (0, eM.pd)(e),
                                        l = null != t ? uJ[t] : null;
                                    null != l && u2(l, e, a, n);
                                }
                                u1({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                let l = new Set(t.collectionFiles.map((e) => (0, eM.pd)(e)).filter((e) => null != e)),
                                    s = Array.from(uV)
                                        .filter((e) => !l.has(e))
                                        .map(u6);
                                s.length > 0 && a("Missing required files", s);
                                let i = Object.values(eM.RN)
                                    .filter((e) => !uV.has(e))
                                    .filter((e) => !l.has(e))
                                    .map(u6);
                                i.length > 0 && n("Missing optional assets", i);
                            })({ files: n, addError: i, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    u1({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                        Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                            let [t, l] = e,
                                                s = l.map((e) => e.name);
                                            u1({
                                                names: s.map((e) => {
                                                    let t = e.indexOf("-");
                                                    return e.substring(0, t > 0 ? t : e.length);
                                                }),
                                                addError: a,
                                            }),
                                                u3(eM.Jn.PROFILE_EFFECT, l, a, n);
                                            let i = uW
                                                .filter((e) => !s.some((t) => t.startsWith(e) && t.endsWith(".png")))
                                                .map((e) => `${t}/${e}`);
                                            i.length > 0 && a("Missing required PFX files with prefix", i),
                                                s.some((e) => e.endsWith(".txt")) ||
                                                    a(
                                                        "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                        [t],
                                                    );
                                            let r = s
                                                .filter((e) => !uW.some((t) => e.startsWith(t)) && !e.endsWith(".txt"))
                                                .map((e) => `${t}/${e}`);
                                            r.length > 0 && n("Contains unrecognized files", r);
                                        });
                                })({ files: n, addError: i, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    u1({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                        u3(eM.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
                                })({ files: n, addError: i, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e,
                                        l = Object.keys(t.profileFrameDirsMap)
                                            .filter((e) => !u0.test(e))
                                            .map((e) => `${eM.Kx.FRAMES}/${e}`);
                                    l.length > 0 && a("File names must be in lowercase snake case", l);
                                    let s = uJ[eM.Jn.PROFILE_FRAME];
                                    Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                        let [t, l] = e,
                                            i = `${eM.Kx.FRAMES}/${t}`,
                                            r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                        (null != l.previewFile && null != r && u8.includes(r)) ||
                                            a(
                                                "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                [`${i}/preview.{${u8.join("|")}}`],
                                            ),
                                            0 === l.layerFiles.length &&
                                                a(
                                                    "Profile frame must contain at least one foreground or background layer",
                                                    [`${i}/{foreground|background}/...`],
                                                ),
                                            l.unrecognizedSubdirs.length > 0 &&
                                                n(
                                                    "Profile frame contains unrecognized folders (expected foreground/, background/, or preview.png)",
                                                    l.unrecognizedSubdirs.map((e) => `${i}/${e}/`),
                                                );
                                        let o = [];
                                        for (let { file: e, folder: t } of (null == l.previewFile ||
                                            u0.test(l.previewFile.name) ||
                                            o.push(`${i}/${l.previewFile.name}`),
                                        l.layerFiles))
                                            u0.test(e.name) || o.push(`${i}/${t}/${e.name}`);
                                        o.length > 0 && a("File names must be in lowercase snake case", o);
                                        let d = [];
                                        for (let { file: e, folder: t } of l.layerFiles) {
                                            let { parsed: a, errorType: n } = (0, u$.Mf)(e.name);
                                            if (null == a) {
                                                let a = null != n ? u$.h4[n] : "invalid";
                                                d.push(`${i}/${t}/${e.name}: ${a}`);
                                            }
                                        }
                                        if ((d.length > 0 && a("Invalid profile frame layer filenames", d), null != s))
                                            for (let { file: e, folder: t } of (null != l.previewFile &&
                                                u2(s, l.previewFile, a, n, `${i}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                u2(s, e, a, n, `${i}/${t}/${e.name}`);
                                    });
                                })({ files: n, addError: i, addWarning: r }),
                                (function (e) {
                                    let { files: t, addWarning: a } = e;
                                    t.ignoredFilenames.length > 0 &&
                                        a("Contains unrecognized files", t.ignoredFilenames);
                                })({ files: n, addError: i, addWarning: r }),
                                await Promise.all([u4(n, i), me(n, i)]);
                        } finally {
                            t(!0);
                        }
                    },
                    [i, r],
                ),
                reset: d,
            };
        })(),
        s = Object.entries(l),
        i = Object.entries(n),
        d = s.length > 0,
        c = i.length > 0,
        { setDropHandler: u } = o.useContext(ma),
        m = o.useCallback(
            (a) => {
                t(), e(a);
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
                          className: mt._f,
                          children: [
                              (0, r.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: d ? "text-feedback-critical" : "text-default",
                                  children: `${s.length} errors`,
                              }),
                              (0, r.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: c ? "text-feedback-warning" : "text-default",
                                  children: `${i.length} warnings`,
                              }),
                              (0, r.jsx)(x.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                          ],
                      })
                    : (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                (0, r.jsx)(ay.h, { size: 16 }),
                d &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(K.D, { variant: "heading-lg/bold", children: "Errors" }),
                            (0, r.jsx)(ay.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mt.ck,
                                children: s.map((e, t) => {
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
                                                        className: mt.ck,
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
                            (0, r.jsx)(K.D, { variant: "heading-lg/bold", children: "Warnings" }),
                            (0, r.jsx)(ay.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mt.ck,
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
                                                        className: mt.ck,
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
function mx() {
    let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, uw.JE)(),
        { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, eM.ds)(),
        { setDropHandler: d } = o.useContext(ma),
        c = o.useCallback(
            (e) => {
                a(), i(e);
            },
            [i, a],
        );
    return (
        o.useEffect(() => {
            d(c);
        }, [c, d]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: mt.sy,
                    children: [
                        (0, r.jsx)(m.d, { checked: e, onChange: (e) => t(e) }),
                        (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Enable Preview" }),
                        (0, r.jsx)(eB.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: ms,
                            icon: uI.c,
                            "aria-label": "Open preview instructions",
                        }),
                    ],
                }),
                (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Drop files in this panel to begin preview." }),
                (0, r.jsx)(mr, {}),
                (0, r.jsx)(mo, {}),
                (0, r.jsx)(md, {}),
                (0, r.jsx)(mu, { clearAssets: l, clearIgnoredFiles: s }),
                (0, r.jsx)(mm, { ignoredFiles: n, handleClearIgnoredFiles: s }),
            ],
        })
    );
}
function mp() {
    let [e, t] = o.useState("preview");
    return (0, r.jsxs)("div", {
        className: mt.kL,
        children: [
            (0, r.jsx)(uR.I, {
                options: mn,
                value: e,
                onChange: (e) => {
                    let { value: a } = e;
                    return t(a);
                },
                className: mt.Vj,
                optionClassName: mt.UK,
            }),
            (0, r.jsx)(ay.h, { size: 8 }),
            "preview" === e && (0, r.jsx)(mx, {}),
            "validate" === e && (0, r.jsx)(mh, {}),
            (0, r.jsx)(ay.h, { size: 16 }),
        ],
    });
}
let mg = (e) => {
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
        s = o.useCallback(
            (e) => {
                a?.(e), n.current(e);
            },
            [a],
        );
    return (0, r.jsx)(ma.Provider, { value: l, children: (0, r.jsx)(uF, { onDrop: s, children: t }) });
};
var mv = a(663803),
    mj = a(662388),
    mf = a(385815);
function mb() {
    let e = (0, d.bG)([tS.A], () => tS.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: mf.k,
        children: [
            (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(mv.l, {
                value: e,
                onChange: (e) => {
                    (0, mj.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
}
var my =
        (((n = {}).DEFAULT = "default"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    mE = a(295811);
function m_() {
    let e = (0, d.bG)([mE.A], () => mE.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(my).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(j.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, mj.Or)(e);
        },
        selectionMode: "single",
    });
}
var mC = a(172471);
function mS() {
    let [e, t] = o.useState(void 0);
    return (0, r.jsxs)("div", {
        className: $()(mC.kL, mC.fi),
        children: [
            (0, r.jsx)(f.k, {
                fullWidth: !0,
                label: "Shop Layout URL Override",
                value: e,
                onChange: (e) => ("" === e ? t(void 0) : t(e)),
                placeholder: "https://cdn.discordapp.com/assets/content/...",
            }),
            (0, r.jsxs)("div", {
                className: mC.o1,
                children: [
                    (0, r.jsx)(x.$, {
                        variant: "critical-primary",
                        text: "Clear",
                        onClick: () => {
                            t(void 0), (0, mj.Aq)(void 0);
                        },
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        text: "Set",
                        onClick: () => (0, mj.Aq)("" !== e ? e : void 0),
                    }),
                ],
            }),
        ],
    });
}
let mN = (e) => {
    let { className: t } = e,
        a = Object.keys(au.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == a
        ? null
        : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(lN, { items: [a] }) });
};
var mA = a(578797),
    mk = a(628917);
function mD(e) {
    let { title: t, expanded: a, onToggle: n, children: l } = e,
        s = o.useId();
    return (0, r.jsx)(cZ.N, {
        isExpanded: a,
        className: mk.uW,
        collapsibleContent: (0, r.jsx)("div", { id: s, className: mk.f5, children: l }),
        children: () =>
            (0, r.jsxs)("button", {
                type: "button",
                onClick: n,
                "aria-expanded": a,
                "aria-controls": s,
                className: mk.bV,
                children: [
                    (0, r.jsx)(K.D, { variant: "heading-md/bold", children: t }),
                    (0, r.jsx)(s9._, { size: "sm", color: "currentColor", className: $()(mk.ai, { [mk.hg]: a }) }),
                ],
            }),
    });
}
function mI() {
    let e = (0, d.bG)([lR.A], () => lR.A.get("shop_disable_cache")),
        t = (0, d.bG)([lR.A], () => lR.A.get("shop_include_unpublished")),
        a = (0, mA.U)("DevToolsShopPanel"),
        [n, l] = o.useState(new Set()),
        s = o.useCallback((e) => {
            l((t) => {
                let a = new Set(t);
                return a.has(e) ? a.delete(e) : a.add(e), a;
            });
        }, []),
        i = o.useCallback(() => {
            l((e) => {
                if (e.has("assets")) return e;
                let t = new Set(e);
                return t.add("assets"), t;
            });
        }, []);
    return (0, r.jsx)(mg, {
        onDrop: i,
        children: (0, r.jsxs)("div", {
            className: mk.Lm,
            children: [
                (0, r.jsxs)("div", {
                    className: mk.dQ,
                    children: [
                        (0, r.jsx)(m.d, {
                            label: "Disable collectibles cache",
                            checked: e,
                            onChange: (e) => (0, lT.L)("shop_disable_cache", e),
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Show unpublished collectibles",
                            checked: t,
                            onChange: (e) => (0, lT.L)("shop_include_unpublished", e),
                        }),
                    ],
                }),
                (0, r.jsxs)(mD, {
                    title: "Layouts",
                    expanded: n.has("layouts"),
                    onToggle: () => s("layouts"),
                    children: [(0, r.jsx)(mN, {}), (0, r.jsx)(m_, {}), a && (0, r.jsx)(mS, {}), (0, r.jsx)(mb, {})],
                }),
                (0, r.jsx)(mD, {
                    title: "Assets",
                    expanded: n.has("assets"),
                    onToggle: () => s("assets"),
                    children: (0, r.jsx)(mp, {}),
                }),
            ],
        }),
    });
}
let mT = [
    { id: "unset", label: "Unset", value: cM.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
    { id: "all", label: "All", value: cM.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
    { id: "usersWithGame", label: "Users With Game", value: cM.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
    { id: "none", label: "None", value: cM.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
];
function mR() {
    let e = o.useRef(null),
        t = cU.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: $()(tV.nd, aF.n),
        children: (0, r.jsxs)("div", {
            className: aF.k,
            children: [
                (0, r.jsx)(K.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(j.l, {
                    label: "Receive DMs In Game",
                    options: mT,
                    value: t,
                    onSelectionChange: cU.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var mO = a(758445),
    mw = a(937427),
    mM = a(340231);
function mL() {
    let e = (0, d.bG)([mw.A], () => mw.A.getPromotionIdOverride()),
        [t, a] = o.useState(e ?? ""),
        n = o.useCallback(() => {
            a(""), (0, mO.J_)(void 0);
        }, []),
        l = o.useCallback(() => {
            let e = t.trim();
            (0, mO.J_)("" !== e ? e : void 0);
        }, [t]),
        s = o.useCallback((e) => {
            a(e);
        }, []);
    return (0, r.jsxs)("div", {
        className: mM.k,
        children: [
            (0, r.jsx)(f.k, {
                fullWidth: !0,
                label: `Promotion ID Override (staff)${null != e ? ` \u{2014} active: ${e}` : ""}`,
                value: t,
                onChange: s,
                placeholder: "Paste a storefront promotion id",
            }),
            (0, r.jsxs)("div", {
                className: mM.o,
                children: [
                    (0, r.jsx)(x.$, { variant: "critical-primary", text: "Clear", onClick: n }),
                    (0, r.jsx)(x.$, { variant: "primary", text: "Set", onClick: l }),
                ],
            }),
        ],
    });
}
var mP = a(838857);
function mU() {
    return (0, r.jsx)("div", { className: mP.n, children: (0, r.jsx)(mL, {}) });
}
var mG = a(278416),
    mF = a(220631);
function mB(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function m$(e) {
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
        (0, r.jsx)(g.Ip, { className: mF.Dx, children: (0, r.jsx)(aK.A, { data: n }) })
    );
}
function mV(e) {
    let { store: t } = e,
        [a, n] = o.useState(() => JSON.stringify(t.__getLocalVars(), null, 2)),
        [l, s] = o.useState(null),
        i = o.useCallback(() => {
            n(JSON.stringify(t.__getLocalVars(), null, 2)), s(null);
        }, [t]);
    o.useEffect(() => (t.addChangeListener(i), () => t.removeChangeListener(i)), [t, i]);
    let d = o.useCallback(() => {
            let e;
            s(null);
            try {
                e = JSON.parse(a);
            } catch (e) {
                s(e instanceof SyntaxError ? e.message : "Invalid JSON");
                return;
            }
            let n = t.__getLocalVarsEditConfig?.();
            if (null == n) return void s("Store does not support editing");
            try {
                for (let e of n.preDispatches ?? []) tG.h.dispatch(e);
                tG.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), i();
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            }
        }, [a, t, i]),
        c = o.useCallback(() => {
            let e = t.__getLocalVarsEditConfig?.();
            if (e?.getPurgeVars == null) return void s("Store does not support purge");
            s(null);
            try {
                let t = e.getPurgeVars();
                for (let t of e.preDispatches ?? []) tG.h.dispatch(t);
                tG.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), i();
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            }
        }, [t, i]);
    return (0, r.jsxs)("div", {
        className: $()(mF.Dx, mF.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: mF.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: mF.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: mF.KA,
                children: [
                    (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "Apply", onClick: d }),
                    (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: i }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Purge store", onClick: c }),
                ],
            }),
        ],
    });
}
let mW = [
    {
        key: "name",
        cellClassName: mF.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function mz(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: aX.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: mF.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(m$, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aX.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(m$, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: aX.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: mF.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(mV, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, aX.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(aQ, {
        className: mF.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aH.Ay, {
                className: $()(tV.jr, mF.nZ),
                children: [
                    (0, r.jsx)(aH.Ay.Icon, { icon: mG.g, tooltip: t.getName() }),
                    (0, r.jsx)(aH.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function mH() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = d.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(mB), [n])
            .filter((e) =>
                (function (e, t) {
                    let { store: a } = e;
                    return a.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [s, i] = o.useState(),
        c = n.find((e) => e._dispatchToken === s);
    return (0, r.jsxs)("div", {
        ref: e,
        className: $()(tV.nd, mF.nd),
        children: [
            (0, r.jsx)("div", {
                className: mF.KE,
                children: (0, r.jsx)(nf.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tW, { columns: mW, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != c &&
                (0, r.jsx)(mz, { store: c, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var mK = a(91871),
    mY = a.n(mK);
let mq = [
        {
            key: "id",
            cellClassName: nU.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: nU.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: nU.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    mJ = [
        {
            id: "details",
            name: "Details",
            group: aX.fu.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: a,
                            exposureType: n,
                            excluded: l,
                            timestamp: s,
                            location: i,
                            previouslyTracked: o,
                        },
                    } = e,
                    d = nh()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(aH.Ay, {
                            className: $()(tV.jr, nU.nZ),
                            children: [
                                (0, r.jsx)(aH.Ay.Icon, { icon: ng.U, tooltip: t }),
                                (0, r.jsx)(aH.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(nM, {
                            className: nU.ZK,
                            children: [
                                (0, r.jsx)(nL, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, nC.i$)(d, "LLLL"),
                                        children: (0, nC.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nL, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nL, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nL, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nL, { name: "Override", children: (0, r.jsx)(nP, { value: a.override }) }),
                                (0, r.jsx)(nL, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nL, { name: "Excluded", children: (0, r.jsx)(nP, { value: l }) }),
                                (0, r.jsx)(nL, { name: "Previously tracked", children: (0, r.jsx)(nP, { value: o }) }),
                                (0, r.jsx)(nL, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function mQ() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, d.yK)([nO], () => nO.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || mY()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        c = l.find((e) => e.key === s),
        { TabBar: u, renderSelectedTab: m } = (0, aX.Ay)({ tabs: mJ }, []),
        h = (0, d.bG)([nO], () => nO.trackTriggers),
        x = o.useCallback((e) => {
            tG.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        p = h ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: $()(tV.nd, nU.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nU.rh,
                children: [
                    (0, r.jsx)(l0.m, {
                        text: p,
                        children: (0, r.jsx)(eB.K, {
                            size: "sm",
                            variant: h ? "active" : "primary",
                            icon: h ? l2.E : l1.u,
                            "aria-label": p,
                            onClick: () => x(!h),
                        }),
                    }),
                    (0, r.jsx)(nf.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eB.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": ne.intl.string(ne.t.VkKicb),
                        icon: nj.u,
                        onClick: Y.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tW, { columns: mq, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != c &&
                (0, r.jsxs)(aQ, {
                    className: nU.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(u, {}), m({ loggedTrigger: c })],
                }),
        ],
    });
}
var mX = a(512950),
    mZ = a(324861),
    m0 = a(243655);
let m1 = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, mZ.A)();
    return (0, r.jsx)("div", {
        className: m0.k,
        children: (0, r.jsxs)(u.n, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(x.$, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, aT.pX)(eo.BVt.APP);
                        },
                    }),
                }),
                (0, r.jsx)(mX.p, {
                    messageType: mX.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var m2 = a(899e3),
    m3 = a(731854);
let m6 = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    m8 = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    m5 = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    m9 = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function m7(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(z.B, {
        gap: 8,
        children: [
            (0, r.jsx)(p.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(r5.S, { label: a, checked: !!n[t], onChange: () => (0, m2.yn)({ [t]: !n[t] }) }, t);
            }),
        ],
    });
}
function m4() {
    let e = (0, d.bG)([m2.Ay], () => m2.Ay.getSnapshot()),
        t = (0, d.bG)([C.Ay], () => C.Ay.supports(m3.O5.VIDEO));
    return (0, r.jsxs)(g.Ip, {
        className: tV.nd,
        children: [
            (0, r.jsx)(b.c, { gap: 16 }),
            (0, r.jsx)(m7, { title: "Video Codecs (Sender)", toggles: m6, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(m7, { title: "Video Encoders", toggles: m8, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(m7, { title: "Capture Sources", toggles: m5, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(m7, { title: "Capture Options", toggles: m9, state: e }),
                      ],
                  })
                : null,
            (0, r.jsx)(b.c, { gap: 16 }),
            (0, r.jsx)(m7, {
                title: "Preview",
                toggles: [["alwaysShowCapturePreview", "Always Show (ignore main window focus)"]],
                state: e,
            }),
            (0, r.jsx)(b.c, { gap: 16 }),
        ],
    });
}
var he = a(36934);
function ht() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(g.Ip, {
        className: tV.nd,
        children: (0, r.jsxs)("div", {
            className: he.l7,
            children: [
                (0, r.jsx)(p.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(z.B, {
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
                (0, r.jsxs)(z.B, {
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
                    variant: i ? "critical-primary" : "primary",
                    text: i ? "Cancel" : "Start Processing",
                    onClick: i
                        ? function () {
                              C.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  C.Ay.getMediaEngine().processBatchAudioFiles(
                                      e,
                                      a,
                                      (e, t, a, n) => {
                                          s((l) => ({
                                              ...l,
                                              current: t,
                                              total: a,
                                              log: [...l.log, { filename: e, success: n }],
                                          }));
                                      },
                                      (e, t) => {
                                          s((a) => ({
                                              ...a,
                                              status: "processing" === a.status ? "complete" : "cancelled",
                                              processed: e,
                                              failed: t,
                                          }));
                                      },
                                  ));
                          },
                    disabled: !i && ("" === e || "" === a),
                }),
                "idle" !== l.status &&
                    (0, r.jsxs)(z.B, {
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
                                            className: he.TZ,
                                            children: (0, r.jsxs)(p.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? he.$D : he.uL,
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
var ha = a(207898),
    hn = a.n(ha),
    hl = a(32880),
    hs = a(827343),
    hi = a(964486),
    hr = a(602674),
    ho = a(625841),
    hd = a(74848),
    hc = a(573908);
function hu(e) {
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
function hm(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(cZ.N, {
        collapsibleContent: (0, r.jsx)(hu, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsxs)(V.D, {
                onClick: s,
                children: [
                    (0, r.jsxs)(p.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(V.D, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), a ? l() : n(t);
                        },
                        children: a ? (0, r.jsx)(l2.E, { size: "xxs" }) : (0, r.jsx)(l1.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(V.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([hn()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, r.jsx)(hl.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function hh() {
    let { name: e } = (0, hd.x5)(m3.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        s = (0, d.bG)([C.Ay], () => C.Ay.getKrispSuppressionLevel()),
        [i, c] = o.useState(null),
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
            noiseSuppressionSupported: D,
            noiseCancellationSupported: I,
            noiseCancellationEnableStats: T,
            vadDuringPreProcess: R,
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
            vadDuringPreProcess: C.Ay.getModeOptions().vadDuringPreProcess,
        })),
        O = A ? "KRISP" : k ? "STANDARD" : "NONE",
        w = (0, hr.v)(),
        M = o.useCallback(() => {
            u.current?.stop(), (u.current = null), c(null);
        }, []);
    function L() {
        C.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function P(e) {
        if ((t && L(), M(), null == w)) return;
        let a = w.createBufferSource();
        (a.buffer = e.audioBuffer),
            (h.current = w.createGain()),
            (h.current.gain.value = x),
            a.connect(h.current),
            h.current.connect(w.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            c(e);
    }
    o.useEffect(() => {
        M();
    }, [M]),
        (0, hi.l0)(() => {
            hs.A.setMode(C.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let U = [];
    return (
        I && U.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        D && U.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        U.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(g.Ip, {
            className: tV.nd,
            children: (0, r.jsxs)("div", {
                className: hc.l,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(ho.U, {
                        label: "Input Device",
                        deviceType: m3.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(j.l, {
                        label: "Noise Cancellation",
                        value: O,
                        onSelectionChange: (e) => {
                            hs.A.setNoiseCancellation("KRISP" === e), hs.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: U,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(uT.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: hs.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: b,
                                    options: f.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        hs.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(m.d, {
                                    label: "Enable Stats",
                                    checked: T,
                                    onChange: (e) => hs.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    y === m3.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.d, {
                                    label: "Auto Threshold",
                                    checked: _,
                                    onChange: (e) => hs.A.setMode(m3.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                _ &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(m.d, {
                                                label: "Use Krisp VAD",
                                                checked: S,
                                                onChange: (e) => hs.A.setMode(m3.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            S &&
                                                (0, r.jsx)(uT.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: N,
                                                    onValueChange: (e) =>
                                                        hs.A.setMode(m3.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, r.jsx)(m.d, {
                                    label: "Run Before Processing",
                                    checked: R ?? !1,
                                    onChange: (e) => hs.A.setMode(m3.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(m.d, {
                        label: "Echo Cancellation",
                        checked: E,
                        onChange: (e) => hs.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(z.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(nx.$n, {
                                color: t ? nx.$n.Colors.RED : nx.$n.Colors.BRAND,
                                onClick: t
                                    ? L
                                    : function () {
                                          M(),
                                              a(!0),
                                              hs.A.setLoopback("krisp_test", !0),
                                              C.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  a(!1), hs.A.setLoopback("krisp_test", !1);
                                                  let r = new AudioBuffer({
                                                      length: t.length,
                                                      sampleRate: i,
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
                                                          krispSuppressionLevel: s,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(uT.A, {
                        label: "Volume",
                        initialValue: x,
                        asValueChanges: function (e) {
                            null != h.current && ((h.current.gain.value = e), v(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)(z.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(hm, { recording: e, playing: e === i, onPlay: P, onStop: M }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var hx = a(803306),
    hp = a(243217),
    hg = a(189213),
    hv = a(543767),
    hj = a(935208),
    hf = a(878784);
let hb = [
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
function hy() {
    let [e, t] = o.useState(!1),
        a = (0, d.bG)([el.default], () => el.default.getCurrentUser()),
        n = (0, hf.Lh)(),
        l = (0, d.bG)([r7.A], () => r7.A.getPremiumTypeSubscription()),
        s = null != n ? (sg.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let s = {
                    subscription_status: eo.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: hj.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await n6.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: (0, n6.fT)() }),
                    await (0, hx.eO)(a.id),
                    await (0, dB.hP)(),
                    t(!1);
            },
            [l, a],
        );
    if (null != a && null != l)
        return (0, r.jsx)(j.l, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: e,
            value: s,
            options: hb,
            onSelectionChange: i,
        });
}
var hE =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    h_ =
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
async function hC(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await n6.Bo.post({
            url: `/debug/subscriptions/${e}/transition`,
            body: {
                target_datetime: n?.toISOString(),
                payment_type: l ?? 0,
                transition: t,
                send_reminder_email: s ?? !1,
            },
            rejectWithError: !0,
        })
    ).body;
}
var hS = a(601107);
let hN = {
        [eo.Dmq.UNPAID]: "Unpaid",
        [eo.Dmq.ACTIVE]: "Active",
        [eo.Dmq.PAST_DUE]: "Past Due",
        [eo.Dmq.CANCELED]: "Canceled",
        [eo.Dmq.ENDED]: "Ended",
        [eo.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [eo.Dmq.BILLING_RETRY]: "Billing Retry",
        [eo.Dmq.PAUSED]: "Paused",
        [eo.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    hA = {
        [hS.qf.UNKNOWN]: "Unknown",
        [hS.qf.ADMIN]: "Admin",
        [hS.qf.USER]: "User",
        [hS.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [hS.qf.DEFERRED_START]: "Deferred Start",
        [hS.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    hk = [
        { id: "unpaid", label: "Unpaid", value: eo.Dmq.UNPAID },
        { id: "active", label: "Active", value: eo.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: eo.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: eo.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: eo.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: eo.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: eo.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: eo.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: eo.Dmq.PAUSE_PENDING },
    ];
function hD(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(nh()()),
        [d, c] = o.useState(nh()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [x, g] = o.useState(void 0),
        v = async () => {
            if (null == s) return void g("Please select a target date");
            let [e, l] = d.split(":").map(Number),
                i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            h(!0), g(void 0);
            try {
                await hC(t.id, h_.TIME_TRAVEL, { targetDate: i, paymentType: hE.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                g(e.body?.message || e.message || "Failed to time travel");
            } finally {
                h(!1);
            }
        };
    return (0, r.jsx)(hg.Modal, {
        transitionState: l,
        onClose: function () {
            return a(), Promise.resolve();
        },
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: v, disabled: m || null == s },
        ],
        children: (0, r.jsxs)(z.B, {
            gap: 16,
            children: [
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(ib.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: function (e) {
                            c(e.target.value);
                        },
                        className: oE.Qn,
                    }),
                }),
                (0, r.jsxs)(z.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(z.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(p.E, {
                                    variant: "text-xs/normal",
                                    className: oE.JX,
                                    children: ["Start: ", nh()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(p.E, {
                                    variant: "text-xs/normal",
                                    className: oE.JX,
                                    children: ["End: ", nh()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != x && (0, r.jsx)(W.w, { type: "critical", children: x }),
            ],
        }),
    });
}
function hI(e) {
    let { subscription: t } = e,
        [a] = (0, hv.C8)({
            subscriptionId: null != t ? t.id : "",
            preventFetch: null == t || t.status !== eo.Dmq.PAST_DUE,
        }),
        { analyticsLocations: n } = (0, a1.Ay)(tC.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return t.status !== eo.Dmq.PAST_DUE
        ? null
        : (0, r.jsx)(x.$, {
              variant: "critical-primary",
              text: "Open Past Due Checkout",
              size: "sm",
              disabled: null == a,
              onClick: () => {
                  null != a &&
                      (0, dq.A)({ initialPlanId: t.planIdFromItems, openInvoiceId: a.id, analyticsLocations: n });
              },
          });
}
function hT(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [m, h] = o.useState(!1),
        [g, v] = o.useState(!1),
        [f, b] = o.useState(null);
    function y(e) {
        let t = new Date(e);
        return hj.default.fromTimestamp(t.getTime());
    }
    async function E(e) {
        let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
            i = {
                subscription_status: t,
                ...(null != a ? { premium_streak_started_at: y(a) } : null),
                ...(null != s ? { ended_at: y(s) } : null),
            };
        await n6.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l();
    }
    async function _() {
        try {
            await hC(n.id, h_.RENEW, { targetDate: nh()(new Date()), paymentType: hE.DEFAULT, sendReminderEmail: !1 });
        } catch (e) {
            b(e.body?.message || e.message || "Failed to renew subscription");
        }
        l();
    }
    async function C() {
        try {
            await hC(n.id, h_.RENEW, { targetDate: nh()(new Date()), paymentType: hE.FAILURE, sendReminderEmail: !1 });
        } catch (e) {
            b(e.body?.message || e.message || "Failed to simulate failed renewal");
        }
        l();
    }
    let S = sg.hd[n.planIdFromItems]?.premiumType === sg.PremiumTypes.TIER_0,
        N = n.metadata?.ended_at,
        A = null != N ? new Date(N).toISOString().substring(0, 10) : "",
        k = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in hN) ? hN[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        D = n.hasActiveTrial,
        I = n.metadata?.active_discount_id != null;
    return (
        D && k.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        I && k.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== eo.Dmq.ACTIVE &&
            k.push({
                id: "dates",
                label: `Dates: ${(0, nC.i$)(n.createdAt, "LL")} - ${(0, nC.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === eo.Dmq.PAUSED &&
            k.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in hA ? hA[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: $()(s_.Nr, S ? s_.Qf : s_.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in sg.hd ? sg.hd[a].name : `Unknown plan id ${a}`}`,
                className: oE.lI,
                children: [
                    (0, r.jsx)(ob.C, {
                        items: k,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    D &&
                        (0, r.jsxs)("div", {
                            className: oE.VK,
                            children: [
                                (0, r.jsxs)(V.D, {
                                    onClick: function () {
                                        h(!m);
                                    },
                                    className: oE.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(p.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sx.A, { direction: m ? sx.A.Directions.UP : sx.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: oE.j3,
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
                                                                ? (0, nC.i$)(n.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    I &&
                        (0, r.jsxs)("div", {
                            className: oE.VK,
                            children: [
                                (0, r.jsxs)(V.D, {
                                    onClick: function () {
                                        v(!g);
                                    },
                                    className: oE.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(p.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sx.A, { direction: g ? sx.A.Directions.UP : sx.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: oE.j3,
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
                                                                ? (0, nC.i$)(
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
                            className: oE.VK,
                            children: [
                                (0, r.jsxs)(V.D, {
                                    onClick: function () {
                                        i(!s);
                                    },
                                    className: oE.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(p.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(sx.A, { direction: s ? sx.A.Directions.UP : sx.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: oE.j3,
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
                        className: oE.VK,
                        children: [
                            (0, r.jsxs)(V.D, {
                                onClick: function () {
                                    c(!d);
                                },
                                className: oE.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(p.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(sx.A, { direction: d ? sx.A.Directions.UP : sx.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(z.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(j.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: hk,
                                            onSelectionChange: (e) => {
                                                E({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(z.B, {
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
                                                        (0, r.jsx)(hI, { subscription: n }),
                                                        (0, r.jsx)(x.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, eW.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(hD, {
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
                                                        className: oE.z3,
                                                        children: (0, r.jsx)(W.w, { type: "critical", children: f }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(z.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(ib.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: nh()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => E({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(hy, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(ib.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== A ? nh()(A) : void 0,
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
async function hR() {
    return (
        await n6.Bo.get({
            url: eo.Rsh.BILLING_SUBSCRIPTIONS,
            query: { include_inactive: !0, limit: 5 },
            rejectWithError: (0, n6.fT)(),
        })
    ).body.map((e) => hp.A.createFromServer(e));
}
let hO = [
    { id: "nitro-monthly", label: "Nitro Monthly", value: sg.gD.PREMIUM_MONTH_TIER_2 },
    { id: "nitro-yearly", label: "Nitro Yearly", value: sg.gD.PREMIUM_YEAR_TIER_2 },
    { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: sg.gD.PREMIUM_MONTH_TIER_1 },
    { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: sg.gD.PREMIUM_YEAR_TIER_1 },
    { id: "basic-monthly", label: "Basic Monthly", value: sg.gD.PREMIUM_MONTH_TIER_0 },
    { id: "basic-yearly", label: "Basic Yearly", value: sg.gD.PREMIUM_YEAR_TIER_0 },
    { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: sg.gd },
    { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: sg.Uk },
    { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: sg.gD.PREMIUM_GROUP_MONTH },
];
function hw() {
    let e = (0, d.bG)([r7.A], () => r7.A.getPremiumTypeSubscription()),
        t = (0, d.bG)([el.default], () => el.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
        [i, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                c(!0), await (0, dB.hP)(), await (0, hx.eO)(t.id), s(await hR());
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => l.filter((e) => e.status !== eo.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]);
    async function h() {
        await n6.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: (0, n6.fT)() }),
            await u();
    }
    async function p() {
        await n6.Bo.del({ url: "/debug/subscription", rejectWithError: (0, n6.fT)() }), await u();
    }
    return (0, r.jsx)(g.Ip, {
        className: tV.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: s_.dL,
                    children: [
                        (0, r.jsx)(K.D, {
                            variant: "heading-lg/semibold",
                            className: tV.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eB.K, {
                            "aria-label": "Refresh",
                            icon: sh.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: $()([s_.uW, s_.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: hO,
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
                null != e && (0, r.jsx)(hT, { subscription: e, onUpdated: u }),
                (0, r.jsx)(K.D, { variant: "heading-lg/semibold", className: tV.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: $()([s_.uW, s_.Uo]),
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
                            (0, r.jsx)(K.D, {
                                variant: "heading-lg/semibold",
                                className: tV.wx,
                                children: "Previous Subscriptions",
                            }),
                            m.map((e) => (0, r.jsx)(hT, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var hM = a(284009),
    hL = a.n(hM),
    hP = a(889137),
    hU = a(323889),
    hG = a(412703),
    hF = a(440703),
    hB = a(267548),
    h$ = a(668824),
    hV = a(695366),
    hW = a(993077),
    hz = a(24001),
    hH = a(801365),
    hK = a(792620),
    hY = a(557637),
    hq = a(242939),
    hJ = a(717695),
    hQ = a(527549),
    hX = a(127219),
    hZ = a(262514),
    h0 = a(382501),
    h1 = a(317097),
    h2 = a(452027),
    h3 = a(922016),
    h6 = a(714385),
    h8 = a(359923);
let h5 = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(h2.D, {
        label: l,
        children: (0, r.jsx)(h3.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(c0.VN, { ...e, value: a, onChange: (e) => n(t, (0, h1.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(V.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: h8.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(h6.d, { size: "xs", color: "currentColor", className: h8.WY }),
                }),
        }),
    });
};
var h9 = a(346055);
let h7 = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(h9.M, {
        children: (0, r.jsx)(hW.Z, {
            className: $()(h8.Rx, { [h8.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: h8.AZ,
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
var h4 = a(643374);
let xe = function (e) {
        let { assetKey: t, filters: a, initialValue: n, onFileChange: l, title: s } = e,
            [i, d] = o.useState(null),
            c = o.useRef(null);
        return (
            o.useEffect(
                () => () => {
                    null != c.current && URL.revokeObjectURL(c.current);
                },
                [],
            ),
            (0, r.jsx)(h2.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(h4.A, {
                    filename: i?.name ?? n ?? "",
                    filters: [{ name: s, extensions: a }],
                    buttonText: "Browse",
                    placeholder: "Select an asset",
                    onFileSelect: function (e) {
                        if ((d(e ?? null), null == e)) return;
                        let a = URL.createObjectURL(e);
                        c.current = a;
                        let n = new URL(a);
                        n.searchParams.append("mimetype", e.type),
                            n.searchParams.append("name", e.name),
                            l(t, n.toString());
                    },
                }),
            })
        );
    },
    xt = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: n, title: l } = e,
            [s, i] = o.useState("");
        return (
            o.useEffect(() => {
                i(a ?? "");
            }, [a]),
            (0, r.jsx)(f.k, {
                label: l,
                value: s,
                onChange: function (e) {
                    i(e), n(t, e);
                },
            })
        );
    };
var xa = a(574677);
let xn = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, xa.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
var xl = a(843282),
    xs = a(972886);
let xi = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    xr = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(z.B, {
            gap: 20,
            children: [
                (0, r.jsx)(xl.Pw, {
                    label: "Task Type(s)",
                    className: xs.Z,
                    placeholder: "Select Task Preset",
                    options: xi,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = hG.n.PLAY_ON_PLAYSTATION in t || hG.n.PLAY_ON_XBOX in t),
                            (l = hG.n.PLAY_ON_DESKTOP in t),
                            (s = hG.n.STREAM_ON_DESKTOP in t),
                            (i = hG.n.WATCH_VIDEO in t),
                            (r = hG.n.PLAY_ACTIVITY in t),
                            a && l ? 4 : a ? 3 : l ? 0 : s ? 1 : i ? 2 : r ? 5 : void 0)
                        );
                    },
                    select: (e) => {
                        t({
                            ...n,
                            tasks: (function (e, t) {
                                let a = {};
                                switch (e) {
                                    case 1:
                                        a[hG.n.STREAM_ON_DESKTOP] = { type: hG.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[hG.n.PLAY_ON_DESKTOP] = { type: hG.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[hG.n.PLAY_ON_PLAYSTATION] = {
                                            type: hG.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[hG.n.PLAY_ON_XBOX] = {
                                                type: hG.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[hG.n.PLAY_ON_DESKTOP] = { type: hG.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[hG.n.PLAY_ON_PLAYSTATION] = {
                                                type: hG.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[hG.n.PLAY_ON_XBOX] = {
                                                type: hG.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[hG.n.WATCH_VIDEO] = {
                                            type: hG.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[hG.n.PLAY_ACTIVITY] = { type: hG.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / n5.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= n5.A.Seconds.MINUTE;
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
var xo = a(818348);
let xd = function () {
    let e = (0, em.Ay)();
    return (0, r.jsx)(h2.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(eh.zy, {
                    theme: xo.NJ.LIGHT,
                    isSelected: e === xo.NJ.LIGHT,
                    onSelect: () => (0, cF.u_)({ theme: xo.NJ.LIGHT }),
                }),
                (0, r.jsx)(eh.zy, {
                    theme: xo.NJ.DARK,
                    isSelected: e === xo.NJ.DARK,
                    onSelect: () => (0, cF.u_)({ theme: xo.NJ.DARK }),
                }),
            ],
        }),
    });
};
var xc =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let xu = function (e) {
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
var xm = a(617986);
let xh = ["png", "gif", "webp"],
    xx = [...xh, "jpg", "jpeg"],
    xp = Array.from(new Set([...xx, "gif", "mp4", "webm"]));
function xg() {
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
let xv = "1193992107035983872",
    xj = {
        id: xv,
        preview: !0,
        config: {
            id: xv,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            application: { id: "123", name: "Sky Runners" },
            messages: { questName: "Sky Runners", gameTitle: "Sky Runners", gamePublisher: "Discord" },
            colors: { primary: "#B377F3", secondary: "#5865F2" },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: "",
                        asset: "reward.png",
                        assetVideo: null,
                        type: hF.l.REWARD_CODE,
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
                joinOperator: h$.K.AND,
                tasks: { [hG.n.PLAY_ON_DESKTOP]: { type: hG.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: hB.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function xf() {
    var e;
    let [t, n] = o.useState(xj),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(xc.UNENROLLED),
        [d, c] = o.useState(!1),
        [u, h] = o.useState(!1),
        [v, j] = o.useState(null),
        f =
            ((e = t.config),
            (0, hP.YW)(e)
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
            var n, s;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (s = { [e]: a }),
                    (0, hP.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function y(e, a) {
        let n = t.config.taskConfigV2.tasks,
            s = n[hG.n.WATCH_VIDEO];
        if (null == s) return;
        let i = { ...s.assets };
        switch (e) {
            case "videoPlayerVideo":
                i.video = { url: a };
                break;
            case "videoPlayerVideoLowRes":
                i.videoLowRes = { url: a };
                break;
            case "videoPlayerThumbnail":
                i.video = { ...i.video, thumbnail: a };
                break;
            default:
                return;
        }
        l({
            ...t,
            config: {
                ...t.config,
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [hG.n.WATCH_VIDEO]: { ...s, assets: i } } },
            },
        });
    }
    function E(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, s;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (s = { [e]: a }),
                    (0, hP.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function _(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var s, i;
            l({
                ...t,
                config:
                    ((s = t.config),
                    (i = { [e]: a }),
                    (0, hP.YW)(s)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, t) =>
                                    t === n ? { ...e, messages: { ...e.messages, ...i } } : e,
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
        (0, hH.tU)(t.config) && (0, xm.hJ)(t, hz.uF.GIFT_INVENTORY_FOR_YOU, hz.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * n5.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => hG.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    hL()(!1 !== t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[hG.n.WATCH_VIDEO];
    return (0, r.jsxs)(g.Ip, {
        className: h8.kL,
        children: [
            (0, r.jsx)(K.D, { variant: "heading-lg/bold", className: h8.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: h8.OA,
                children: (0, r.jsx)(xn, {
                    onSelect: function (e) {
                        j(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return xc.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return xc.CLAIMED;
                                        if (null != e.userStatus.completedAt) return xc.COMPLETED_100;
                                        let t = (0, hK.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? xc.COMPLETED_100
                                            : a / n >= 0.75
                                              ? xc.COMPLETED_75
                                              : a / n >= 0.5
                                                ? xc.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? xc.COMPLETED_25
                                                  : xc.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: v,
                }),
            }),
            (0, r.jsx)(K.D, { variant: "heading-md/semibold", className: h8.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: h8.OA,
                children: (0, r.jsx)(xr, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(K.D, { variant: "heading-md/semibold", className: h8.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: h8.OA,
                children: [
                    (0, r.jsx)(xt, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: E,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(xt, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: E,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(xt, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: E,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, r.jsx)(xt, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[hG.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [hG.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(K.D, { variant: "heading-md/semibold", className: h8.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: h8.OA,
                children: [
                    (0, r.jsx)(xe, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: b,
                        filters: xp,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(xe, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: b,
                        filters: xp,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(xe, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: b,
                        filters: xp,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(xe, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: b,
                        filters: xp,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(xe, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: b,
                        filters: [...xx, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(xe, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: b,
                        filters: [...xh, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(xe, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: y,
                                    filters: xp,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(xe, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: y,
                                    filters: xp,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(xe, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: y,
                                    filters: xx,
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
                            (0, r.jsxs)(K.D, {
                                variant: "heading-md/semibold",
                                className: h8.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: h8.OA,
                                children: [
                                    (0, r.jsx)(xt, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => _(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(xt, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => _(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== hF.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(xe, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, n) =>
                                                (function (e, a, n) {
                                                    if ("asset" === e) {
                                                        var s;
                                                        l({
                                                            ...t,
                                                            config:
                                                                ((s = t.config),
                                                                (0, hP.YW)(s)
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
                                            filters: xp,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(z.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(K.D, {
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
            (0, r.jsx)(K.D, { variant: "heading-md/semibold", className: h8.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: h8.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: h8.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(h5, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: C,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(h5, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: C,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: h8.OA, children: (0, r.jsx)(xd, {}) }),
                    (0, r.jsx)(xu, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case xc.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case xc.ENROLLED:
                                    l({ ...t, userStatus: xg({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case xc.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: xg({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case xc.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: xg({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case xc.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: xg({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case xc.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: xg({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case xc.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: xg({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                            }
                        },
                        value: s,
                    }),
                ],
            }),
            (0, r.jsx)(K.D, { variant: "heading-lg/bold", className: h8.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: h8.$$,
                children: [
                    (0, r.jsxs)(h7, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(K.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: h8.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(p.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: h8.ok,
                                        children: (0, r.jsx)(hY.y5, {
                                            isPreview: !0,
                                            source: "preview",
                                            adCreativeId: "0",
                                            adCreativeType: hU.p.QUEST,
                                            children: (0, r.jsx)(hJ.A, {
                                                children: (0, r.jsx)(hq.QuestBar, { quest: t }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(h7, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(K.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(hY.y5, {
                                isPreview: !0,
                                source: "preview",
                                adCreativeId: "0",
                                adCreativeType: hU.p.QUEST,
                                children: (0, r.jsx)(h0.Ay, {
                                    quest: t,
                                    className: h8.d,
                                    questContent: hz.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: hz.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(h7, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(K.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(p.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: h8.l4,
                                children: (0, r.jsx)(hY.y5, {
                                    isPreview: !0,
                                    source: "preview",
                                    adCreativeId: "0",
                                    adCreativeType: hU.p.QUEST,
                                    children: (0, r.jsx)("div", {
                                        className: h8.Jr,
                                        children: (0, r.jsx)(hQ.A, {
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
                        className: h8.NY,
                        children: (0, r.jsx)(m.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                c(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(h7, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(K.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            u
                                ? (0, r.jsx)(hX.l, { questId: t.id })
                                : (0, r.jsx)(
                                      hZ.M,
                                      {
                                          quest: t,
                                          location: hz.uF.QUESTS_EMBED,
                                          sourceQuestContent: hz.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: h8.NY,
                        children: (0, r.jsx)(m.d, { label: "Invalid Quests Embed:", checked: u, onChange: h }),
                    }),
                    A &&
                        (0, r.jsxs)(h7, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(K.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, eW.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("22448"),
                                                a.e("83485"),
                                                a.e("88147"),
                                                a.e("92868"),
                                                a.e("63408"),
                                                a.e("77375"),
                                                a.e("79907"),
                                                a.e("97199"),
                                            ]).then(a.bind(a, 834135));
                                            return (a) =>
                                                (0, r.jsx)(n, {
                                                    ...a,
                                                    openStartClockTime: e,
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: hz.uF.INTERNAL_PREVIEW_TOOL,
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
class xb extends o.Component {
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
                  className: h8.TA,
                  children: [
                      (0, r.jsx)(hV.E, { className: h8.Yw }),
                      (0, r.jsx)(K.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(x.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(hW.Z, {
                              className: h8.Fx,
                              children: (0, r.jsx)("code", { className: h8.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(xf, {}, t);
    }
}
var xy = a(913122),
    xE = a(839214),
    x_ = a(77138),
    xC = a(450827),
    xS = a(626584),
    xN = a(174768),
    xA = a(205761),
    xk = a(860071),
    xD = a(696451),
    xI = a(860689),
    xT = a(926140);
let xR = new xS.A("SearchDebugUtils");
function xO() {
    xR.info("--------------------------");
}
function xw() {
    let e = xN.A.getProps();
    xR.info("START Quick Switcher State"),
        xR.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((xR.info(`Result Type: ${e.type}`), e.type)) {
                case xT.rD.GUILD:
                    xR.info(`guild id: ${e.record.id}`);
                    break;
                case xT.rD.TEXT_CHANNEL:
                case xT.rD.VOICE_CHANNEL:
                    xR.info(`channel type: ${e.record.type}`),
                        xR.info(`channel id: ${e.record.id}`),
                        xR.info(`name: ${e.record.name}`);
                    break;
                case xT.rD.DM:
                    xR.info(`channel type: ${e.record.type}`),
                        xR.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (xR.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = el.default.getUser(e);
                                null != t &&
                                    (xR.info(`recipient username: ${t.username}`),
                                    xR.info(`recipient global name: ${ec.Ay.getGlobalName(t)}`),
                                    xR.info(`recipient nickname: ${aC.A.getNickname(t.id)}`));
                            }));
                    break;
                case xT.rD.GROUP_DM:
                    xR.info(`channel type: ${e.record.type}`),
                        xR.info(`channel id: ${e.record.id}`),
                        xR.info(`name: ${(0, aE.m1)(e.record, el.default, aC.A)}`),
                        e.record.isGroupDM() &&
                            (xR.info(`default name: ${(0, aE.ks)(e.record, el.default, aC.A)}`),
                            xR.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = el.default.getUser(e);
                                null != t &&
                                    (xR.info(`recipient username: ${t.username}`),
                                    xR.info(`recipient global name: ${ec.Ay.getGlobalName(t)}`),
                                    xR.info(`recipient nickname: ${aC.A.getNickname(t.id)}`));
                            }));
                    break;
                case xT.rD.USER:
                    xR.info(`user id: ${e.record.id}`),
                        xR.info(`username: ${e.record.username}`),
                        xR.info(`global name: ${ec.Ay.getGlobalName(e.record)}`),
                        xR.info(`nickname: ${aC.A.getNickname(e.record.id)}`),
                        xR.info(`guild nicknames: ${xD.Ay.getNicknames(e.record.id)}`);
            }
            xR.info(`frecency score: ${xA.A.getScoreWithoutFetchingLatest(e.record.id)}`), xO();
        }),
        xR.info("END Quick Switcher State\n");
}
async function xM() {
    xR.info("START User Search Worker State");
    let e = await xC.A.requestDebugState();
    null == e
        ? xR.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              xR.info(`id: ${t}`),
                  xR.info(`username: ${a.username}`),
                  xR.info(`global name: ${a.globalName}`),
                  xR.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      xR.info(`guild id: ${t}`), xR.info(`guild nickname: ${a}`);
                  }),
                  xO();
          }),
          xR.info("END User Search Worker State\n"));
}
async function xL() {
    let e = await xC.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = el.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = hj.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function xP(e) {
    let t = await xC.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = a9.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = xD.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = xk.A.getDebugState(e);
    return { user: el.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var xU = a(929948);
function xG(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(x.$, {
                variant: "primary",
                onClick: l,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : s,
            }),
            null != n &&
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: xU.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: xU.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let xF = (0, xE.D)(() => ({
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
function xB() {
    let e = xF.useField("includeFrecency"),
        t = xF.useField("includeFriends"),
        a = xF.useField("includeDMs"),
        n = xF.useField("includeGDMs"),
        l = xF.useField("includeQuickSwitcherState"),
        s = xF.useField("includeUserSearchWorkerState"),
        i = xF.useField("isUploading"),
        d = xF.useField("isSuccess"),
        c = xF.useField("errorMessage"),
        h = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = xF.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    xF.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = aC.A.getFriendIDs()),
                            xR.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = el.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = ec.Ay.getGlobalName(t),
                                    l = aC.A.getNickname(t.id),
                                    s = xD.Ay.getNicknames(t.id);
                                xR.info(`username: ${a}`),
                                    xR.info(`global name: ${n}`),
                                    xR.info(`nickname: ${l}`),
                                    xR.info(`guild nicknames: ${s}`),
                                    xO();
                            }),
                            xR.info("END Discord Friends\n")),
                        a &&
                            ((r = a_.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            xR.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, aE.m1)(e, el.default, aC.A),
                                    a = (0, aE.ks)(e, el.default, aC.A);
                                xR.info(`id: ${e.id}`),
                                    xR.info(`name: ${t}`),
                                    xR.info(`default name: ${a}`),
                                    xR.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = el.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ec.Ay.getGlobalName(t),
                                            l = aC.A.getNickname(t.id),
                                            s = xD.Ay.getNicknames(t.id);
                                        xR.info(`username: ${a}`),
                                            xR.info(`global name: ${n}`),
                                            xR.info(`nickname: ${l}`),
                                            xR.info(`guild nicknames: ${s}`),
                                            xO();
                                    });
                            }),
                            xR.info("END Logging Group DM Channels\n"),
                            xR.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, aE.m1)(e, el.default, aC.A);
                                xR.info(`id: ${e.id}`), xR.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = el.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = ec.Ay.getGlobalName(n),
                                    i = aC.A.getNickname(n.id);
                                xR.info(`username: ${l}`),
                                    xR.info(`global name: ${s}`),
                                    xR.info(`nickname: ${i}`),
                                    xO();
                            }),
                            xR.info("END Logging DM Channels\n")),
                        n &&
                            ((c = a_.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            xR.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, aE.m1)(e, el.default, aC.A),
                                    a = (0, aE.ks)(e, el.default, aC.A);
                                xR.info(`id: ${e.id}`),
                                    xR.info(`name: ${t}`),
                                    xR.info(`default name: ${a}`),
                                    xR.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = el.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ec.Ay.getGlobalName(t),
                                            l = aC.A.getNickname(t.id),
                                            s = xD.Ay.getNicknames(t.id);
                                        xR.info(`username: ${a}`),
                                            xR.info(`global name: ${n}`),
                                            xR.info(`nickname: ${l}`),
                                            xR.info(`guild nicknames: ${s}`),
                                            xO();
                                    });
                            }),
                            xR.info("END Logging Group DM Channels\n"),
                            xR.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, aE.m1)(e, el.default, aC.A);
                                xR.info(`id: ${e.id}`), xR.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = el.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = ec.Ay.getGlobalName(n),
                                    i = aC.A.getNickname(n.id);
                                xR.info(`username: ${l}`),
                                    xR.info(`global name: ${s}`),
                                    xR.info(`nickname: ${i}`),
                                    xO();
                            }),
                            xR.info("END Logging DM Channels\n")),
                        e &&
                            ((h = xA.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, xI.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            xR.info("START Frecency"),
                            xR.info("Guilds"),
                            x.forEach((e) => {
                                let t = xA.A.getScoreWithoutFetchingLatest(e.id);
                                xR.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            xO(),
                            xR.info("DM Channels"),
                            g.forEach((e) => {
                                let t = xA.A.getScoreWithoutFetchingLatest(e.id);
                                xR.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xO(),
                            xR.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = xA.A.getScoreWithoutFetchingLatest(e.id);
                                xR.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    xR.info(`default name: ${(0, aE.ks)(e, el.default, aC.A)}`),
                                    xR.info(`name: ${(0, aE.m1)(e, el.default, aC.A)}`);
                            }),
                            xO(),
                            xR.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = xA.A.getScoreWithoutFetchingLatest(e.id);
                                xR.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xO(),
                            xR.info("END Frecency\n")),
                        l && xw(),
                        s && xM(),
                        await (0, x_.a)(eo.Umv.WEB_APP),
                        xF.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new xy.LG(t);
                    xF.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    xF.setState({ isUploading: !1 });
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
                onChange: () => xF.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(m.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => xF.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(m.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => xF.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(m.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => xF.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(m.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => xF.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(m.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => xF.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(xG, {
                isUploading: i,
                isSuccess: d,
                errorMessage: c,
                onClick: h,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let x$ = (0, xE.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function xV() {
    let e = x$.useField("userIds"),
        t = x$.useField("isLoading"),
        a = x$.useField("isSuccess"),
        n = x$.useField("errorMessage"),
        l = x$.useField("lastRunAt"),
        s = o.useCallback(async () => {
            x$.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await xL();
                x$.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                x$.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                x$.setState({ isLoading: !1 });
            }
        }, []),
        i = o.useMemo(
            () =>
                e.map((e) => {
                    let t = el.default.getUser(e),
                        a = null != t ? ec.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: xU.J1,
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
                (0, r.jsx)(x.$, { onClick: s, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: xU.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: xU.qS,
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
                                    (0, r.jsx)("div", { className: xU.uk, children: i }),
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
let xW = (0, xE.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function xz() {
    let e = xW.useField("isRecording"),
        t = xW.useField("isUploading"),
        a = xW.useField("isSuccess"),
        n = xW.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = xN.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), xw());
        }, []);
    o.useEffect(() => {
        if (e) return xN.A.addChangeListener(i), () => xN.A.removeChangeListener(i);
    }, [i, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = xW.getState();
        if (!e)
            try {
                xW.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, x_.a)(eo.Umv.WEB_APP),
                    xW.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new xy.LG(t);
                xW.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                xW.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(mX.p, {
                messageType: mX.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(aZ.e, {
                children: [
                    (0, r.jsx)(x.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => xW.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(xG, {
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
var xH = a(145497);
let xK = (0, xE.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function xY(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: xU.J1,
                children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: xU.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: xU.J1,
                            children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = a9.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: xU.J1,
                                      children: [
                                          (0, r.jsx)(xH.Ay, { guild: t, iconSize: 16 }),
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
function xq(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(s5.y, { size: "sm", color: ez.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(hV.E, { size: "sm", color: ez.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: xU.N6,
        children: [
            (0, r.jsxs)("div", {
                className: xU.J1,
                children: [
                    i({ ok: null != a }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: xU.uk,
                    children: (0, r.jsx)("div", {
                        className: xU.J1,
                        children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: xU.J1,
                children: [
                    i({ ok: null != n }),
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
                    className: xU.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: xU.J1,
                            children: (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xU.J1,
                            children: (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xU.J1,
                            children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: xU.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: xU.J1,
                                        children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = a9.A.getGuild(t),
                                        l = a_.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: xU.J1,
                                            children: [
                                                null != n && (0, r.jsx)(xH.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, aE.m1)(l, el.default, aC.A),
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
                className: xU.J1,
                children: [
                    i({ ok: l.length > 0 }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: xU.uk,
                    children: l.map((e) => {
                        let t = a9.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: xU.J1,
                                children: [
                                    (0, r.jsx)(xH.Ay, { guild: t, iconSize: 16 }),
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
                className: xU.J1,
                children: [
                    (0, r.jsx)(cX.m, { size: "sm" }),
                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: xU.uk,
                    children: [
                        (0, r.jsx)(xY, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(xY, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(xY, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function xJ() {
    let e = o.useCallback((e) => {
            xK.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = xK.getState();
            if (!t && null != e) {
                xK.setState({ loading: !0, error: null });
                try {
                    let t = await xP(e);
                    xK.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new xy.LG(t);
                    xK.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    xK.setState({ loading: !1 });
                }
            }
        }, []),
        a = xK.useField("loading");
    return (0, r.jsxs)("div", {
        className: xU.$n,
        children: [
            (0, r.jsx)(f.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(x.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function xQ() {
    let e = xK.useField("state"),
        t = xK.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(xJ, {}),
            null != t &&
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: xU.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(xq, { userState: e }),
        ],
    });
}
function xX() {
    return (0, r.jsxs)(g.Ip, {
        className: xU.nd,
        children: [
            (0, r.jsx)(xz, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xB, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xQ, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xV, {}),
        ],
    });
}
var xZ = a(761508),
    x0 = a(599147),
    x1 = a(808411),
    x2 = a(624716),
    x3 = a(398590),
    x6 = a(764451),
    x8 = a(67956),
    x5 = a(52822),
    x9 = a(642153);
let x7 = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    x4 = {
        "virtual-currency": function () {
            return (0, r.jsxs)(x5.Hq, {
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
                                (e = x8.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (x6.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, x3.id)(eo.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: function () {
            return (0, r.jsxs)("div", { children: [(0, r.jsx)(x0.o, {}), (0, r.jsx)(x1.A, {}), (0, r.jsx)(x2.A, {})] });
        },
    };
function pe() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => x4[e], [e]);
    return (0, r.jsxs)("div", {
        className: $()(tV.nd, x9.kL),
        children: [
            (0, r.jsx)(xZ.V, {
                className: x9.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: x7.map((e) => (0, r.jsx)(xZ.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(g.Ar, { children: (0, r.jsx)("div", { className: x9.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var pt = a(718446),
    pa = a(766075),
    pn = a(355097);
let pl = (0, xE.D)(() => ({ urlString: "", error: null })),
    ps = Object.entries(pn.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function pi() {
    let [e, t] = o.useState(),
        a = pl.useField("urlString"),
        n = pl.useField("error"),
        l = o.useCallback(() => {
            let e = pl.getField("urlString");
            if (null == e || "" === e) return void pl.setState({ error: "URL is required" });
            let t = (0, pt.parseSettingsUrl)({ path: e });
            ((0, pt.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? pl.setState({ error: "String did not match expected format" })
                : (0, pa.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(an.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: ps,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = pn.od[e].split("/");
                        pl.setState({ urlString: eo.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(f.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => pl.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(aZ.e, {
                children: [
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "secondary",
                        onClick: () => (0, n_.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var pr = a(780964);
let po = (0, xE.D)(() => ({ setting: pr.X.ACCOUNT_PANEL }));
function pd() {
    let e = po.useField("setting"),
        t = o.useCallback(() => {
            (0, pa.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(pr.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(an.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => po.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(x.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var pc = a(963935),
    pu = a(357927),
    pm = a(53181);
function ph(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "text-feedback-warning",
        u = (e) => (0, r.jsx)(p.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: pm.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: pm.NF,
              children: [
                  (0, r.jsxs)(V.D, {
                      className: pm.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(sx.A, {
                              direction: s ? sx.A.Directions.DOWN : sx.A.Directions.RIGHT,
                              className: pm.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: pm.m4, children: l }),
              ],
          });
}
function px(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case pc.Z6.ROOT:
                    return "migrated-root";
                case pc.Z6.SECTION:
                case pc.Z6.PANEL:
                case pc.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, pc.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(px, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(ph, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function pp() {
    let { node: e } = (0, ea.Ay)(pu.D, ""),
        t = (0, ea.KA)();
    return (0, r.jsxs)(u.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(m.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: ea.jL,
            }),
            (0, r.jsx)(px, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var pg = a(168803);
function pv() {
    return (0, r.jsxs)(g.Ip, {
        className: pg.n,
        children: [
            (0, r.jsx)(pd, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(pi, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(pp, {}),
        ],
    });
}
function pj() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aX.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(nH, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aX.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(mQ, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aX.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(mH, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aX.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(sa, {}),
            },
        ];
        return (
            aV.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aX.fu.SHOP, render: () => (0, r.jsx)(mI, {}) }),
                e.push({
                    id: "storefront",
                    name: "Storefront Overrides",
                    group: aX.fu.STOREFRONT,
                    render: () => (0, r.jsx)(mU, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aX.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(d2, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aX.fu.SHOP,
                    render: () => (0, r.jsx)(tM, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aX.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(um, {}),
                }),
                e.push({
                    id: "routing_key",
                    name: "Routing Key",
                    group: aX.fu.DEVELOPMENT,
                    tags: ["routing", "traffic", "routing-key", "network"],
                    render: () => (0, r.jsx)(u_, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aX.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(ss, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aX.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(cf.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aX.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(nu, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aX.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(su, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aX.fu.GAMES, render: () => (0, r.jsx)(dA, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aX.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(ij, {}),
                }),
                aW.isPlatformEmbedded &&
                    (e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: aX.fu.GAMES,
                        render: () => (0, r.jsx)(lH, {}),
                    }),
                    e.push({
                        id: "running_game_detection",
                        name: "Running Game Detection",
                        group: aX.fu.GAMES,
                        tags: ["detection", "filter", "blocklist", "native"],
                        render: () => (0, r.jsx)(uD, {}),
                    }),
                    e.push({
                        id: "game_icon_extractor",
                        name: "Game Icon Extractor",
                        group: aX.fu.GAMES,
                        tags: ["ico", "icon", "png", "rtc"],
                        render: () => (0, r.jsx)(sR, {}),
                    })),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: aX.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, r.jsx)(lU, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aX.fu.GAMES, render: () => (0, r.jsx)(mR, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aX.fu.GAMES,
                    render: () => (0, r.jsx)(nn, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: aX.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(ab, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: aX.fu.GAMES,
                    render: () => (0, r.jsx)(a$, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: aX.fu.GAMES,
                    render: () => (0, r.jsx)(ac, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aX.fu.USERS,
                    render: () => (0, r.jsx)(xX, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aX.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(F, {}) })),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                e.push({
                    id: "partner_perks",
                    name: "Partner Perks",
                    group: aX.fu.PREMIUM,
                    tags: ["xgp"],
                    render: () => (0, r.jsx)(dU, {}),
                }),
            e.push({
                id: "rive",
                name: "Rive",
                group: aX.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(ug, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aX.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(i7, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aX.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rw, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aX.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(ry, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aX.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(lo, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aX.fu.UI, render: () => (0, r.jsx)(lw, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aX.fu.UI,
                render: () => (0, r.jsx)(cQ, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aX.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sF, { devSettingsCategory: az.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aX.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(r3, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aX.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sF, { devSettingsCategory: az.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aX.fu.USERS, render: () => (0, r.jsx)(cw, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aX.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(on, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aX.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rG, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aX.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rD, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aX.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(nr, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aX.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(lr, {}),
            }),
            aV.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: aX.fu.USERS,
                    render: () => (0, r.jsx)(at, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: aX.fu.USERS,
                    render: () => (0, r.jsx)(aI, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aX.fu.DCF, render: () => (0, r.jsx)(lI, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aX.fu.DCF, render: () => (0, r.jsx)(lp, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aX.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(rg, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aX.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up", "perks", "sources", "bitmask"],
                render: () => (0, r.jsx)(cC, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aX.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(of, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aX.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(co, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: aX.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(oS, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aX.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(hw, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aX.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sA, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aX.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(iA, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aX.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(hh, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: aX.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(m4, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aX.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(ht, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aX.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(rm, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aX.fu.BOOSTING, render: () => (0, r.jsx)(sP, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aX.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(r_, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aX.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(pv, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aX.fu.QUESTS,
                render: () => (0, r.jsx)(aw, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aX.fu.QUESTS,
                render: () => (0, r.jsx)(m1, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aX.fu.BILLING,
                render: () => (0, r.jsx)(pe, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aX.fu.QUESTS,
                render: () => (0, r.jsx)(xb, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aX.fu.USERS,
                render: () => (0, r.jsx)(c6, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aX.fu.USERS,
                render: () => (0, r.jsx)(n3, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aX.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lJ, {}),
            }),
            e
        );
    }, []);
}
