a.d(t, { x: () => pm }), a(321073);
var n,
    l,
    s,
    i,
    r = a(627968),
    o = a(64700),
    d = a(270003),
    c = a(243721),
    u = a(532446),
    m = a(821609),
    h = a(834730),
    x = a(364522),
    p = a(611677),
    g = a(691885),
    v = a(292666),
    j = a(404778),
    b = a(77729),
    f = a(952818),
    y = a(905552),
    E = a(941327),
    _ = a(157257),
    C = a(274372),
    S = a(372684),
    N = a(315240),
    A = a(257290),
    k = a(227628),
    I = a(468550);
let D = (0, a(353640).v)(() => ({ enabled: !1, pending: null, lastResult: null }));
function T(e) {
    D.setState({ enabled: e });
}
function O(e) {
    D.setState({ pending: e });
}
function R(e) {
    D.setState({ lastResult: e });
}
var w = a(781710),
    M = a(264572).Buffer;
function L() {
    let e = D((e) => e.enabled),
        t = D((e) => e.pending),
        a = D((e) => e.lastResult),
        n = o.useCallback(async (e, t, a, n) => {
            let l = E.Ay.getMediaEngine();
            if (null == l.setClipsPerfMonitoring) return R("setClipsPerfMonitoring unsupported in this build"), null;
            O(n);
            try {
                let n = await l.setClipsPerfMonitoring(e, t, a);
                return T(n.enabled), n;
            } catch (e) {
                return R(`${n} failed: ${e instanceof Error ? e.message : String(e)}`), null;
            } finally {
                O(null);
            }
        }, []),
        l = o.useCallback(
            async (t) => {
                T(t);
                let a = await n(t, !1, !1, t ? "enable" : "disable");
                null != a ? R(`recorder ${a.enabled ? "enabled" : "disabled"}`) : T(e);
            },
            [n, e],
        ),
        s = o.useCallback(async () => {
            let t = await n(e, !0, !1, "save");
            if (null == t) return;
            if ("" === t.html) return void R("save: server returned empty html");
            let a = `clips-perf-${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            try {
                let e = M.from(t.html, "utf8"),
                    n = await b.A.fileManager.saveWithDialog2(e, a);
                if (null != n && !0 === n.canceledByUser) return void R("save: canceled");
                R(`saved ${t.eventCount} events (${t.html.length} bytes)`);
            } catch (e) {
                R(`save failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, [n, e]),
        i = o.useCallback(async () => {
            let t = await n(e, !1, !0, "clear");
            null != t && R(`cleared ${t.eventCount} events`);
        }, [n, e]);
    return (0, r.jsxs)(d.n, {
        label: "Clips v3 Performance",
        children: [
            (0, r.jsx)(c.d, {
                label: "Record Clips v3 performance",
                description: "Toggles the in-process perf recorder inside discord_clips.exe.",
                checked: e,
                disabled: null != t,
                onChange: l,
            }),
            (0, r.jsxs)(u.M, {
                children: [
                    (0, r.jsx)(m.$, { text: "Save as file...", disabled: null != t, onClick: s }),
                    (0, r.jsx)(m.$, { text: "Clear recording", variant: "secondary", disabled: null != t, onClick: i }),
                ],
            }),
            (null != t || null != a) &&
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: null != t ? `working: ${t}...` : a,
                }),
        ],
    });
}
function P() {
    let e = (0, k.MZ)((e) => e.isOpen),
        t = (0, I.sY)((e) => e.isOpen),
        [a, n] = o.useState(3),
        l = o.useCallback((e) => {
            let t = Object.values(C.Ay.getClips()),
                a = t.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = t.filter((e) => e.applicationId === n).slice(0, e);
            C.Ay.devSetLastClipsSession({
                applicationName: a.applicationName,
                newClipIds: l.map((e) => e.id),
                ended: !0,
            }),
                (0, I.M8)(n);
        }, []),
        s = o.useCallback(
            (e) => {
                e ? l(a) : (0, I.kF)();
            },
            [l, a],
        ),
        i = o.useCallback(() => {
            let e = Object.values(C.Ay.getClips()),
                t = (0, y.A)(f.Ay, _.A),
                a =
                    (t?.id != null ? e.find((e) => e.applicationId === t.id) : void 0) ??
                    e.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = e.filter((e) => e.applicationId === n).slice(0, 10);
            C.Ay.devSetLastClipsSession({
                applicationName: a.applicationName,
                newClipIds: l.map((e) => e.id),
                ended: !0,
            }),
                (0, k.w9)();
        }, []),
        h = o.useCallback(
            (e) => {
                e ? i() : (0, k.yj)();
            },
            [i],
        ),
        b = o.useCallback(
            (e) => {
                n(e), t && l(e);
            },
            [l, t],
        ),
        [E, D] = o.useState(S.rb.KILL),
        [T, O] = o.useState(1),
        [R, M] = o.useState(""),
        [P, U] = o.useState("");
    return (0, r.jsx)(x.Ip, {
        children: (0, r.jsxs)(p.l, {
            children: [
                (0, r.jsx)(d.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(u.M, {
                        children: [
                            (0, r.jsx)(m.$, { text: "Manual", onClick: () => N.Ts({ type: S.Gy.MANUAL }) }),
                            (0, r.jsx)(m.$, {
                                text: "Distributed",
                                onClick: () =>
                                    N.Ts({
                                        type: S.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(m.$, {
                                text: "Yelling",
                                onClick: () => N.Ts({ type: S.Gy.YELLING, userId: "123" }),
                            }),
                            (0, r.jsx)(m.$, {
                                text: "Laughter",
                                onClick: () => N.Ts({ type: S.Gy.LAUGHTER, label: "laughter", confidence: 1 }),
                            }),
                            (0, r.jsx)(m.$, {
                                text: "Shouting",
                                onClick: () => N.Ts({ type: S.Gy.LAUGHTER, label: "shouting", confidence: 1 }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(d.n, {
                    label: "Game Event Creator",
                    children: [
                        (0, r.jsxs)(u.M, {
                            children: [
                                (0, r.jsx)(g.l, {
                                    label: "Event Type",
                                    value: E,
                                    onSelectionChange: (e) => D(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: S.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: S.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: S.rb.DEATH },
                                        { id: "assist", label: "Assist", value: S.rb.ASSIST },
                                        { id: "item", label: "Item", value: S.rb.ITEM },
                                        { id: "victory", label: "Victory", value: S.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: S.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: S.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: S.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: S.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(g.l, {
                                    label: "Importance",
                                    value: T,
                                    onSelectionChange: O,
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
                        (0, r.jsx)(v.k, {
                            label: "Title (optional)",
                            value: R,
                            onChange: M,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, r.jsx)(v.k, {
                            label: "Description (optional)",
                            value: P,
                            onChange: U,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(m.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                N.Ts({ type: S.Gy.GAME_EVENT, eventType: E, importance: T, title: R, description: P });
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            text: "stash decider data",
                            onClick: () => {
                                A.A.debugStashDeciderData();
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            text: "re-run ranking",
                            onClick: () => {
                                A.i.debugRerunRanking();
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(d.n, { label: "Clip Metadata Tool", children: (0, r.jsx)(w.A, {}) }),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(L, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsxs)(d.n, {
                    label: "Reminder UI",
                    children: [
                        (0, r.jsx)(c.d, {
                            label: "Clips Quick Bar",
                            description:
                                "Force-show the inline quick bar above the account panel. Fabricates a session (up to 10 clips) from your recent clips so it can be tested without capturing a real game session.",
                            checked: e,
                            onChange: h,
                        }),
                        (0, r.jsx)(c.d, {
                            label: "Clips Reminder",
                            description:
                                "Force-show the post-session ClipsReminder panel. Fabricates a session from your most recent clips (and game) so it can be tested without capturing a real game session.",
                            checked: t,
                            onChange: s,
                        }),
                        (0, r.jsx)(g.l, {
                            label: "Clip count",
                            value: a,
                            onSelectionChange: b,
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
    });
}
var U = a(503698),
    G = a.n(U),
    B = a(939249),
    F = a(683071),
    $ = a(331322),
    V = a(811893),
    W = a(534514),
    z = a(17928),
    H = a(538064),
    K = a(265059),
    Y = a(902592),
    q = a(869146);
a(323874), a(14289), a(35956);
var J = a(789645),
    Q = a(589158),
    X = a(65593),
    Z = a(377980),
    ee = a(581298),
    et = a(98596),
    ea = a(287809),
    en = a(901139),
    el = a(641886),
    es = a(780898),
    ei = a(652215),
    er = a(920196),
    eo = a(427262);
function ed(e) {
    let { nameplate: t } = e,
        a = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        n = eo.Ay.useName(a) ?? "";
    return (0, r.jsx)(er.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: ei.clD.ONLINE,
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
var ec = a(736653),
    eu = a(653523),
    em = a(809948);
function eh(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, ec.Ay)();
    return (0, r.jsxs)("div", {
        className: em.N,
        children: [
            (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: em.Z,
                children: el.Z6.map((e) => {
                    let l = n !== ei.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        eu.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var ex = a(724029),
    ep = a(95701),
    eg = a(331884);
function ev(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, eg.i)(),
        l = new ep.cq({ id: "0", type: ei.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(ex.th, { selected: t, channel: l, user: n, nameplate: a });
}
var ej = a(698638),
    eb = a(877203);
function ef() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, s] = (0, o.useState)(null),
        { node: i } = (0, ee.Ay)(et.k, ""),
        d = (0, en.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, en.DE)(),
        { setImgCache: x } = (0, en.TW)(),
        p = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? s({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : s((t) =>
                          null == t ? { previewToolKey: e, palette: el.Wj, skuId: "0" } : { ...t, previewToolKey: e },
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
                className: eb.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: eb.gO,
                        children: [
                            (0, r.jsx)(m.$, {
                                size: "sm",
                                onClick: () => {
                                    n(!1), t((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, r.jsx)(m.$, {
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
                        className: eb.uQ,
                        children: [
                            e && (0, r.jsx)(Z.A, { node: i }),
                            a &&
                                (0, r.jsx)(eh, {
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
                className: eb.iW,
                children: [
                    (0, r.jsx)(ey, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: eb.Uo,
                        children: [
                            (0, r.jsx)(h.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(X.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: ej.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    x(t, t, (0, es.nI)(n)), c(t, t, el.Wj);
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: eb.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(eE, { src: t, onSetStatic: p, removeAsset: v }, t);
                                }),
                            }),
                            (0, r.jsx)(eC, {
                                label: "gradient override",
                                onChange: (e) => g({ name: el.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(e_, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ey(e) {
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
                d.current = t;
                let a = (e) => {
                        e.preventDefault(), c(e);
                    },
                    n = () => {
                        null != s.current && (t.removeEventListener("mousemove", s.current), (s.current = null)),
                            null != i.current && (t.removeEventListener("mouseup", i.current), (i.current = null));
                    };
                (s.current = a), (i.current = n), t.addEventListener("mousemove", a), t.addEventListener("mouseup", n);
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
        (0, r.jsx)(x.Ip, {
            className: eb.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: eb.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(eS, { nameplate: t }),
                    (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(eN, { nameplate: t }),
                    (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(eA, { nameplate: t }),
                    (0, r.jsx)("div", { className: eb.Di, onMouseDown: u }),
                ],
            }),
        })
    );
}
function eE(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: eb.xO,
        children: [
            (0, r.jsx)(B.D, {
                onClick: () => n(t),
                className: eb.yV,
                children: (0, r.jsx)(J.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: eb.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: eb.Lu,
                children: (0, r.jsx)(m.$, {
                    onClick: () => a(t),
                    size: "sm",
                    variant: "secondary",
                    text: "set nameplate",
                }),
            }),
        ],
    });
}
function e_(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: eb.Uu,
        children: [
            (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function eC(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: eb.Im,
        children: [
            (0, r.jsx)(h.E, { variant: "text-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: eb.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eS(e) {
    let { nameplate: t } = e,
        a = (0, z.bG)([ea.default], () => ea.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: eb.VH,
        children: (0, r.jsxs)("div", {
            className: eb.H1,
            children: [
                (0, r.jsx)(h.E, { className: eb.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(Q.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(h.E, { className: eb.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Q.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(Q.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function eN(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eb.VH,
        children: (0, r.jsxs)("div", {
            className: eb.H1,
            children: [
                (0, r.jsx)(h.E, { className: eb.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(ev, { nameplate: t }),
                (0, r.jsx)(h.E, { className: eb.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(ev, { selected: !0, nameplate: t }), (0, r.jsx)(ev, { selected: !0 })],
                }),
            ],
        }),
    });
}
function eA(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eb.VH,
        children: (0, r.jsx)("div", { className: eb.X2, children: (0, r.jsx)(ed, { nameplate: t }) }),
    });
}
a(508300);
var ek = a(835245),
    eI = a(157559),
    eD = a(780777),
    eT = a(993408),
    eO = a(315949),
    eR = a(559474),
    ew = a(816866),
    eM = a(87558),
    eL = a(575593),
    eP = a(631903),
    eU = a(224640),
    eG = a(408278),
    eB = a(972213),
    eF = a(43990),
    e$ = a(192308),
    eV = a(661531),
    eW = a(231723),
    ez = a(900686),
    eH = a(986687),
    eK = a(600323),
    eY = a(735438),
    eq = a.n(eY),
    eJ = a(855915),
    eQ = a(480335);
let eX = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eY.cloneDeep)(t), [t]),
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
        { layerData: i } = (0, eJ.A)({ skuId: s, layers: l.effects });
    return (0, r.jsx)(eQ.p, { profileEffect: l, skuId: s, layerData: i });
};
var eZ = a(314485),
    e0 = a(778765);
let e1 =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    e2 = { [eM.qH.THUMBNAIL]: null, [eM.qH.STATIC]: null, [eM.qH.REDUCED_MOTION]: null },
    e3 = "debug",
    e8 = "reduced-motion-preview-modal",
    e6 = (e) => {
        let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
        return (0, r.jsx)(eU.d, {
            transitionState: t,
            size: "md",
            onClose: a,
            maxHeight: "viewport",
            children: (0, r.jsxs)("div", {
                className: eZ.Xd,
                children: [
                    (0, r.jsx)("div", {
                        className: eZ.y6,
                        children: (0, r.jsx)(eG.K, {
                            "aria-label": "Close",
                            onClick: a,
                            icon: eB.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eZ.rU,
                        children: [
                            (0, r.jsx)(eF.N, {
                                theme: l,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: e1,
                                        alt: "",
                                        className: G()(eZ.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)("img", { src: n, className: eZ.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    e5 = (e) => {
        let { type: t, frame: a, theme: n, onClear: l } = e,
            s = t === eM.qH.REDUCED_MOTION,
            i = s ? e1 : e0.A,
            o = (0, r.jsx)(eF.N, {
                theme: n,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: i, alt: "", className: G()(eZ.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, r.jsx)("img", { src: a.src, className: G()(eZ.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, r.jsxs)("div", {
            className: eZ.pK,
            children: [
                (0, r.jsx)(W.D, { variant: "heading-sm/bold", children: t }),
                s
                    ? (0, r.jsx)(B.D, {
                          className: G()(eZ.zd, eZ.eB),
                          onClick: () => {
                              (0, e$.hasModalOpen)(e8)
                                  ? (0, e$.closeModal)(e8)
                                  : (0, e$.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(e6, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                            ),
                                        { modalKey: e8, onCloseRequest: () => (0, e$.closeModal)(e8) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eZ.zd, children: o }),
                null != a && (0, r.jsx)(m.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
            ],
        });
    },
    e9 = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, ew.wu)(),
            n = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [d, c] = o.useState(!1),
            [u, x] = o.useState(!1),
            [p, g] = o.useState(8),
            [v, j] = o.useState([]),
            [b, f] = o.useState(e2),
            y = o.useRef([]),
            [E, _] = o.useState(t.name),
            C = E.toLowerCase().replace(/\s+/g, "_"),
            S = o.useMemo(
                () => ({
                    type: eL.R.PROFILE_EFFECT,
                    skuId: e3,
                    title: e3,
                    description: e3,
                    accessibilityLabel: e3,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: v,
                    animationType: eP.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [v],
            ),
            N = d ? eV.A.themes.DARKER : eV.A.themes.LIGHT,
            A = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            k = (e, t) => {
                let a = A(t);
                null != a &&
                    (0, eM.Mz)(a, (t) => {
                        f((n) => ({ ...n, [e]: (0, eM.GT)(t, a) }));
                    });
            };
        o.useEffect(() => {
            let e = t.effects;
            e.length > 0 && j(e);
        }, [t.effects]),
            o.useEffect(() => {
                let e = t.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, a] = e;
                        if (null != a) {
                            if ("" !== a.src && null != a.src && ("" === a.base64 || null == a.base64))
                                f((e) => ({ ...e, [t]: a }));
                            else if ("" !== a.base64 && null != a.base64) {
                                let e = (0, eM.fB)(a.base64);
                                (a.src = e), y.current.push(e), f((e) => ({ ...e, [t]: a }));
                            }
                        }
                    });
            }, [t.stillFrames]);
        let I = { profileEffect: t, upsertProfileEffect: a },
            D = o.useRef(I);
        return (o.useEffect(() => {
            D.current = I;
        }),
        o.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = D.current;
            e.readonly || t({ skuId: e.skuId, name: E, effects: v, stillFrames: b });
        }, [v, b, E]),
        o.useEffect(
            () => () => {
                y.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (y.current = []);
            },
            [],
        ),
        null == n)
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: eZ.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eD.A, {
                                  ref: (e) => {
                                      i.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = A(e);
                                      null != t &&
                                          (0, eM.Mz)(t, async (e) => {
                                              let a = await (0, eM.Ay)(e, t, v.length);
                                              j((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eD.A, {
                                  ref: (e) => {
                                      i.current.thumbnail = e;
                                  },
                                  onChange: (e) => k(eM.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eD.A, {
                                  ref: (e) => {
                                      i.current.static = e;
                                  },
                                  onChange: (e) => k(eM.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eD.A, {
                                  ref: (e) => {
                                      i.current.reducedMotion = e;
                                  },
                                  onChange: (e) => k(eM.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: eZ.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: G()(eZ.nM, eZ.uW),
                                  children: [
                                      (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: E,
                                          className: eZ.hF,
                                          onChange: (e) => {
                                              _(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eZ.nM,
                                  children: [
                                      (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: d,
                                          className: eZ.OO,
                                          onChange: () => {
                                              c(!d);
                                          },
                                      }),
                                      (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: u,
                                          className: eZ.OO,
                                          onChange: () => {
                                              x(!u);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eZ.nM,
                                  children: [
                                      (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: p,
                                          onChange: (e) => g(+e.target.value),
                                      }),
                                      (0, r.jsxs)(h.E, { variant: "text-sm/normal", children: [p, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: G()(eZ.nz, eZ.VH),
                                  style: { borderRadius: p },
                                  children: [
                                      u
                                          ? (0, r.jsx)("div", {
                                                className: eZ.jq,
                                                children: (0, r.jsx)(eK.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: eW.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: eZ.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eF.N, {
                                                theme: N,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: G()(eZ.aM, e),
                                                        children: (0, r.jsx)("img", { src: e0.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: eZ.KJ,
                                              children: (0, r.jsx)(eX, { profileEffect: S }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      u &&
                                      (0, r.jsxs)("div", {
                                          className: G()(eZ.f5, eZ.VH),
                                          style: { borderRadius: p },
                                          children: [
                                              (0, r.jsx)(eH.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  hideProfileFrame: !0,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(eX, { profileEffect: S }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: eZ.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: eZ.nM,
                                          children: [
                                              (0, r.jsx)(m.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => i.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(h.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: eZ.nM,
                                          children: [
                                              (0, r.jsx)(m.$, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => i.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(m.$, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => i.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(m.$, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => i.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)("div", {
                                          className: eZ.q6,
                                          children: (0, r.jsx)("div", {
                                              className: eZ.nM,
                                              children: (0, r.jsx)(m.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      s(!1), setTimeout(() => s(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: G()(eZ.q6, eZ.XA),
                                          children: [
                                              (0, r.jsx)(h.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(h.E, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: eZ.nM,
                                                  children: [
                                                      (0, r.jsx)(ez.A, {
                                                          fileContents: () => (0, eM.rs)(v),
                                                          contentType: "text/plain",
                                                          fileName: `${C}_timing_config.txt`,
                                                          children: (0, r.jsx)(m.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(ez.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: E,
                                                                  readonly: !1,
                                                                  effects: v,
                                                                  stillFrames: b,
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${C}_config.txt`,
                                                          children: (0, r.jsx)(m.$, {
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
                                          className: eZ.uW,
                                          children: [
                                              (0, r.jsx)(W.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: eZ.mv,
                                                  children: Object.entries(b).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          e5,
                                                          {
                                                              type: t,
                                                              frame: a,
                                                              theme: N,
                                                              onClear: () => {
                                                                  f((e) => ({ ...e, [t]: null }));
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      v.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, r.jsxs)("div", {
                                              className: G()(eZ.uW, eZ.l7),
                                              children: [
                                                  (0, r.jsx)(h.E, {
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
                                  className: G()(eZ.Vg, eZ.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eZ.cD,
                                          children: (0, r.jsx)(m.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  j([]), f(e2);
                                              },
                                          }),
                                      }),
                                      v.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: eZ.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: eZ.D1,
                                                          children: [
                                                              (0, r.jsx)(W.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: eZ.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(W.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(W.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: eZ.oq,
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
                                                          className: G()(eZ.Vg, eZ.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eZ.nz,
                                                                  children: [
                                                                      (0, r.jsx)(h.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: eZ.hF,
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
                                                                  className: eZ.nz,
                                                                  children: [
                                                                      (0, r.jsx)(h.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: eZ.hF,
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
                                                          className: G()(eZ.Vg, eZ.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eZ.nz,
                                                                  children: [
                                                                      (0, r.jsx)(h.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: eZ.OO,
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
                                                                  className: eZ.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(h.E, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: eZ.hF,
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
                                                          children: (0, r.jsx)(eD.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = A(e)) &&
                                                                      (0, eM.Mz)(a, (e) => {
                                                                          j((n) => {
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
                                                          className: G()(eZ.nM, eZ._N),
                                                          children: [
                                                              (0, r.jsx)(m.$, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      i.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, r.jsx)(m.$, {
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
    e4 = "Make sure you're only uploading text files!",
    e7 = (e) => {
        let { profileEffect: t, onClick: a } = e,
            { deleteProfileEffect: n } = (0, ew.wu)();
        return (0, r.jsxs)(B.D, {
            className: eZ.B0,
            onClick: a,
            children: [
                (0, r.jsx)("div", { className: eZ.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
                (0, r.jsxs)("div", {
                    className: eZ.eL,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-md/bold", children: t.name }),
                        (0, r.jsx)(m.$, {
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
    };
function te() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, ew.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, eO.A)(),
        d = o.useMemo(() => (0, eT.Wj)(i), [i]),
        [c, u] = o.useState(""),
        x = o.useMemo(
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
        p = o.useCallback(
            (e, a) => {
                if (null == a || !e.type.startsWith("text/")) return (0, eR.Ni)(e4);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eR.Ni)(e4);
                let s = JSON.parse(atob(l));
                (s.skuId = (0, ek.A)()), t(s), (0, eR.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eR.Ni)("Error uploading file. Try again!")
                    : (0, eR.KE)(e.currentTarget.files, p, eR.Ni);
            },
            [p],
        );
    return (0, r.jsxs)("div", {
        className: eZ.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eZ.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: G()(eZ.uW, eZ.nM),
                                    children: [
                                        (0, r.jsx)(W.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(m.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await eI.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, eR.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: eZ.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(e7, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: G()(eZ.nM, eZ._N, eZ.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eZ.au,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eD.A, { ref: s, onChange: g, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({ skuId: (0, ek.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: eZ.uW,
                            children: [
                                (0, r.jsx)(W.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(v.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: eZ.xm,
                                    children: x.map((e) =>
                                        (0, r.jsx)(
                                            B.D,
                                            {
                                                className: eZ.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [eM.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eM.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eM.qH.REDUCED_MOTION]:
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
                                                    className: eZ.Hd,
                                                    children: (0, r.jsx)(h.E, {
                                                        variant: "text-md/normal",
                                                        color: "always-white",
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
            null != n && (0, r.jsx)(e9, { profileEffect: n }),
        ],
    });
}
var tt = a(935399),
    ta = a(462887),
    tn = a(289873),
    tl = a(478016),
    ts = a(565645),
    ti = a(7584),
    tr = a(619499),
    to = a(207803),
    td = a(84540),
    tc = a(836602),
    tu = a(999291),
    tm = a(903209),
    th = a(841702),
    tx = a(892118),
    tp = a(744808),
    tg = a(725287),
    tv = a(626768),
    tj = a(464896);
function tb() {
    let e = (0, ec.Ay)();
    return (0, r.jsxs)("div", {
        className: tg.z3,
        children: [
            (0, r.jsx)("img", { src: (0, ta.M)(e) ? tv : tj, alt: "" }),
            (0, r.jsx)(h.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tf() {
    let e = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        t = (0, tu.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, tm.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, th.Bf)(),
        l = o.useMemo(() => (0, eT.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, z.yK)([tc.A], () => [tc.A.getPendingChanges(), tc.A.showNotice()]),
        d = void 0 === s ? t?.profileFrame : s,
        c = null != d ? a.get(d.skuId) : void 0,
        u = (0, tx.s)(c?.items[0]) ? c.items[0] : void 0;
    return (
        (0, tt.l0)(to.RE),
        (0, r.jsxs)("div", {
            className: tg.kL,
            children: [
                (0, r.jsxs)(W.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(ts.A, {
                            emojiName: ti.Ay.getByName("frame_with_picture")?.surrogates,
                            className: tg.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(tn.y, {}),
                0 === l.length && !n && (0, r.jsx)(tb, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: tg.MK,
                        children: [
                            (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: tg.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(m.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == d ? tl.U : void 0,
                                                disabled: null == d,
                                                onClick: () => (0, td.p)({ profileFrame: null }),
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
                                                      children: (0, r.jsx)(m.$, {
                                                          text: t.name,
                                                          variant: "secondary",
                                                          fullWidth: !0,
                                                          icon: d?.skuId === e.skuId ? tl.U : void 0,
                                                          disabled: d?.skuId === e.skuId,
                                                          onClick: () => (0, td.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            i && (0, r.jsx)(tr.A, {}),
                            (0, r.jsxs)("div", {
                                className: tg.VH,
                                children: [
                                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: tg.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: e0.A, alt: "" }),
                                            null != u && (0, r.jsx)(tp.A, { frame: u }),
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
var ty = a(702841),
    tE = a(793574),
    t_ = a(590180),
    tC = a(4227),
    tS = a(828614),
    tN = a(61750),
    tA = a(328762);
let tk = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tC.A.getPurchase;
                return (
                    (tC.A.getPurchase = (e) => void 0),
                    tC.A.emitChange(),
                    a(1),
                    () => {
                        (tC.A.getPurchase = e), tC.A.emitChange();
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tA.Do, children: (0, r.jsx)(tS.A, { ...e }, t) })
        );
    },
    tI = () => {
        let e = (0, ty.bG)([ea.default], () => ea.default.getCurrentUser()),
            t = (0, ty.bG)([t_.A], () => t_.A.categories),
            a = (0, ty.bG)([tC.A], () => tC.A.purchases),
            n = (0, ty.bG)([t_.A], () => t_.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: s, categories: i } = (0, th.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
            d = l ? t : i,
            c = l || (!s && d.size > 0),
            [u, x] = o.useState(""),
            [p, g] = o.useState(null),
            [j, b] = o.useState(null);
        return (o.useEffect(() => {
            if ("" === u.trim() || !c) {
                g(null), b(null);
                return;
            }
            let e = t_.A.getProduct(u),
                t = t_.A.getCategoryForProduct(u);
            null != e && null != t ? (g(e), b(t)) : (g(null), b(null));
        }, [u, c]),
        s)
            ? (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, r.jsx)(h.E, { variant: "text-md/normal", children: "No user found" })
              : (0, r.jsxs)("div", {
                    className: tA.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tA.uW,
                            children: [
                                (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, r.jsxs)("div", {
                                    className: tA.qp,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-md/semibold",
                                            className: tA.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(v.k, { value: u, onChange: x, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, r.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                className: tA.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == p &&
                                            (0, r.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                className: tA.kc,
                                                children: "Product not found",
                                            }),
                                        null != p &&
                                            (0, r.jsxs)(h.E, {
                                                variant: "text-sm/normal",
                                                className: tA.xT,
                                                children: ["Found: ", p.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tA.uW,
                            children: [
                                (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != p && null != j
                                    ? (0, r.jsxs)("div", {
                                          className: tA.i1,
                                          children: [
                                              (0, r.jsx)(tk, { skuId: p.skuId }),
                                              (0, r.jsx)(m.$, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != p &&
                                                          null != e &&
                                                          (0, tN.A)({
                                                              product: p,
                                                              analyticsLocations: [tE.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: tA.qf,
                                          children: (0, r.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              className: tA.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
var tD = a(410724);
let tT = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 },
    tO = (e) => {
        let { setTab: t } = e,
            a = (0, z.bG)([q.A], () => q.A.getWindowOpen(ei.MLl.DEVTOOLS_POPOUT));
        return (0, r.jsxs)("div", {
            className: tD.Qs,
            children: [
                (0, r.jsx)(B.D, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, r.jsx)("div", {
                        className: G()(tD.vK, tD.Dg),
                        children: (0, r.jsx)(h.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, r.jsx)(B.D, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, r.jsx)("div", {
                        className: G()(tD.vK, tD.st),
                        children: (0, r.jsx)(h.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, r.jsx)(B.D, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, r.jsx)("div", {
                        className: G()(tD.vK, tD.Dg),
                        children: (0, r.jsx)(h.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Frames",
                        }),
                    }),
                }),
                (0, r.jsx)(B.D, {
                    onClick: () => {
                        t(4);
                    },
                    children: (0, r.jsx)("div", {
                        className: G()(tD.vK, tD.IP),
                        children: (0, r.jsx)(h.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Products",
                        }),
                    }),
                }),
                !a &&
                    (0, r.jsx)("div", {
                        style: { marginTop: 16 },
                        children: (0, r.jsx)(F.w, {
                            type: "warning",
                            children: (0, r.jsxs)($.B, {
                                gap: 8,
                                children: [
                                    (0, r.jsx)(h.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, r.jsx)(m.$, {
                                        size: "sm",
                                        icon: V.t,
                                        variant: "secondary",
                                        onClick: Y.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    tR = () => {
        let [e, t] = o.useState(() => {
            let e = K.A.lastOpenSubTabId;
            return null != e && e in tT ? tT[e] : 0;
        });
        return (
            o.useEffect(() => {
                null != K.A.lastOpenSubTabId && (0, H.Jt)({ lastOpenSubTabId: null });
            }, []),
            (0, r.jsxs)(x.Ip, {
                className: tD.iE,
                children: [
                    (0, r.jsxs)("div", {
                        className: tD.C$,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                            0 !== e && (0, r.jsx)(m.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                        ],
                    }),
                    (() => {
                        switch (e) {
                            case 1:
                                return (0, r.jsx)(te, {});
                            case 2:
                                return (0, r.jsx)(ef, {});
                            case 3:
                                return (0, r.jsx)(tf, {});
                            case 4:
                                return (0, r.jsx)(tI, {});
                            default:
                                return (0, r.jsx)(tO, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
var tw = a(681154),
    tM = a(306264),
    tL = a(506774),
    tP = a(228366),
    tU = a(587895),
    tG = a(429913),
    tB = a(475825),
    tF = a(505206);
function t$(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: s, selectedRowKey: i, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: tF.CZ,
        children: (0, r.jsx)(tB.OZ, {
            className: n,
            innerClassName: tF.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tF.ZR;
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
                    u = G()(tF.jD, { [tF.wD]: o === i, rowClassName: l });
                return (0, r.jsx)(
                    B.D,
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
var tV = a(409626),
    tW = a(692969),
    tz = a(760751),
    tH = a(403362),
    tK = a(435738),
    tY = a(99753),
    tq = a(975732),
    tJ = a(352139),
    tQ = a(808323),
    tX = a(751765),
    tZ = a(424994),
    t0 = a(330837);
function t1(e) {
    let { id: t } = e,
        a = (0, z.bG)([ea.default], () => ea.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(B.D, {
              className: t0._,
              onClick: function () {
                  (0, tq.openUserProfileModal)({ sourceAnalyticsLocations: [tE.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(h.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function t2() {
    let e = (0, z.bG)([tY.A], () => tY.A.getFeed(tZ.X1.GLOBAL_FEED)),
        t = (0, z.bG)([tY.A], () => tY.A.getFilters()),
        a = (0, z.cf)([tJ.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, tJ.$)(a.content)] = tJ.A.canRenderContent(a.content);
            return t;
        }, [e]),
        n = (0, z.bG)([tK.A], () => tK.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, tQ.l)(t, l)) return [];
        let s = a[(0, tJ.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: t0.p,
                children: [
                    (0, r.jsx)(t1, { type: l.author_type, id: l.author_id }),
                    !s && (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, tX.I5)(l) &&
                        (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var t3 = a(576470),
    t8 = a(693879);
function t6() {
    let e = (0, z.bG)([tY.A], () => tY.A.getFeed(tZ.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, z.cf)(
            [tY.A],
            () => tY.A.getFeedState(tZ.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, z.bG)([tY.A], () => tY.A.getLastFeedFetchDate(tZ.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(h.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(h.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(t3.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(h.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(t8.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var t5 = a(866839);
let t9 = [
    {
        key: "type",
        cellClassName: G()(t5.Hn, t5.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(h.E, { variant: "text-md/semibold", children: tw.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: G()(t5.Hn, t5.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: t5.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(t4, { type: t });
        },
    },
];
function t4(e) {
    let { type: t } = e,
        a = (0, z.bG)([tY.A], () => tY.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(c.d, {
        checked: n,
        onChange: function () {
            n
                ? tP.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tP.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function t7() {
    var e;
    let t,
        a = (0, z.bG)([tY.A], () => tY.A.getFeed(tZ.X1.GLOBAL_FEED)),
        n = (0, z.bG)([tY.A], () => tY.A.getDebugImpressionCappingDisabled()),
        l = (0, z.bG)([tK.A], () => tK.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eq().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, z.bG)([tY.A], () => tY.A.getFeedState(tZ.X1.GLOBAL_FEED)?.loading === !0),
        [d, c] = o.useState(""),
        u = (0, z.bG)(
            [tz.A, tU.A],
            () => (parseInt(d) > 0 ? d : (tz.A.searchGamesByName(d)[0] ?? tU.A.getApplicationByName(d)?.id)),
            [d],
        ),
        p = (0, tW.A)({ applicationId: u, location: "DevToolsContentInventory", source: tV.Ob.DevTools }),
        g = Object.entries(tL.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        j = (0, tG.A)(g).filter(tH.Vq);
    return (0, r.jsx)("div", {
        className: tF.nd,
        children: (0, r.jsxs)(x.Ip, {
            className: t5.Qs,
            children: [
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(t$, { columns: t9, data: s }),
                        (0, r.jsx)(t6, {}),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                tP.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: tZ.X1.GLOBAL_FEED,
                                    feature: tM.M.INBOX,
                                });
                            },
                            loading: i,
                        }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tP.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tP.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tP.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tP.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(t2, {}),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-md/semibold", children: "Game Profile" }),
                        (0, r.jsx)(v.k, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && c(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key && (d === e.currentTarget.value ? p?.(e) : c(e.currentTarget.value));
                            },
                            error:
                                d.length > 0 && null == p ? `No game profile for ${u ?? d + " - try by id"}.` : void 0,
                            helperText: null != p ? "Game profile found" : void 0,
                        }),
                        (0, r.jsx)("ul", {
                            children: j.map((e) =>
                                (0, r.jsx)(
                                    "li",
                                    { children: (0, r.jsx)(ae, { application: e }) },
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
let ae = (e) => {
    let { application: t } = e,
        a = (0, tW.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: tV.Ob.DevTools });
    return (0, r.jsx)(B.D, {
        onClick: a,
        children: (0, r.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
var at = a(783878),
    aa = a(769015),
    an = a(311043),
    al = a(569926),
    as = a(282435);
function ai(e) {
    return as.Bf.get(e) ?? 0;
}
function ar(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, al.I)(t),
        l = (0, z.bG)([an.A], () => an.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(h.E, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(aa.A, { game: a, size: aa.M.SMALL }),
                    (0, r.jsxs)($.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(h.E, { variant: "text-md/semibold", children: a.name }),
                            (0, r.jsx)(h.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function ao() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, z.bG)([tz.A], () => tz.A.games),
        s = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => ai(t.value) - ai(e.value)),
            [l],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => ai(t.item.value) - ai(e.item.value), keys: ["label"] }), []),
        d = o.useCallback((e) => {
            t(e), null != e && n("");
        }, []),
        c = o.useCallback((e) => {
            n(e), e.trim().length > 0 && t(null);
        }, []),
        u = a.trim(),
        x = u.length > 0 ? u : (e ?? void 0),
        p = (0, tW.A)({ gameId: x, location: "DevToolsGameProfile", source: tV.Ob.DevTools });
    return (0, r.jsx)("div", {
        className: tF.nd,
        children: (0, r.jsxs)($.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)($.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/bold", children: "Game Profile" }),
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(at.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: s,
                            value: u.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: d,
                            selectionMode: "single",
                            clearable: !0,
                            matchSorterOptions: i,
                        }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(v.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: c,
                        }),
                        u.length > 0 && (0, r.jsx)(ar, { gameId: u }),
                    ],
                }),
                (0, r.jsx)(m.$, {
                    variant: "primary",
                    text: "Open Game Profile",
                    fullWidth: !0,
                    disabled: null == p,
                    onClick: p ?? void 0,
                }),
            ],
        }),
    });
}
var ad = a(554146),
    ac = a(594061),
    au = a(617617),
    am = a(355898),
    ah = a(644103),
    ax = a(574560),
    ap = a(994182);
let ag = [
        ad.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        ad.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
        ad.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
    ].map((e) => ({ id: String(e), label: ad.M[e], value: e })),
    av = { "global-cooldown": "global cooldown", "per-game-cooldown": "per-game cooldown", disabled: "disabled" };
function aj() {
    let [e, t] = o.useState("dismissals"),
        [a, n] = o.useState(ad.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, z.bG)([au.A], () => au.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        s = (0, z.bG)([ax.A], () => ax.A.getAllGameUpsellDismissals(a)),
        i = o.useMemo(() => Object.keys(s ?? {}), [s]),
        d = (0, tG.A)(i),
        [c, u] = o.useState(""),
        [x, p] = o.useState([]);
    o.useEffect(
        () =>
            (0, ah.Y)((e) => {
                p((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let b = o.useMemo(() => {
            let e = new Set();
            for (let t of x) for (let a of t.applicationIds) e.add(a);
            return [...e];
        }, [x]),
        f = (0, tG.A)(b),
        y = o.useMemo(() => Object.fromEntries(b.map((e, t) => [e, f[t]])), [b, f]),
        E =
            l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
                ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
                : "Never";
    return (0, r.jsxs)("div", {
        className: ap.nd,
        children: [
            (0, r.jsxs)("div", {
                className: ap.$H,
                children: [
                    (0, r.jsx)(B.D, {
                        className: G()(ap.V3, { [ap.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(B.D, {
                        className: G()(ap.V3, { [ap.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", x.length > 0 ? `(${x.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: ap.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: ap.uW,
                              children: (0, r.jsx)(g.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: ag,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: ap.uW,
                              children: [
                                  (0, r.jsx)(W.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, r.jsxs)(h.E, { variant: "text-sm/normal", children: ["Last dismissed: ", E] }),
                                  (0, r.jsxs)(h.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                                  (0, r.jsx)(m.$, {
                                      variant: "secondary",
                                      text: "Reset Global DCF State",
                                      onClick: () => (0, ac._N)(a),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: ap.uW,
                              children: [
                                  (0, r.jsx)(W.D, { variant: "heading-md/bold", children: "Mark as Dismissed" }),
                                  (0, r.jsx)(v.k, {
                                      label: "Game ID",
                                      value: c,
                                      onChange: (e) => u(e),
                                      placeholder: "Enter Game ID",
                                  }),
                                  (0, r.jsx)(m.$, {
                                      variant: "secondary",
                                      text: "Mark as Dismissed",
                                      disabled: "" === c.trim(),
                                      onClick: () => {
                                          (0, am.M)([c.trim()], a), u("");
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(j.c, {}),
                          (0, r.jsxs)("div", {
                              className: G()(ap.uW, ap.LY),
                              children: [
                                  (0, r.jsxs)(W.D, {
                                      variant: "heading-md/bold",
                                      children: ["Per-Game Dismissals (", i.length, ")"],
                                  }),
                                  0 === i.length
                                      ? (0, r.jsx)(h.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: "No dismissal data for this content type.",
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                i.map((e, t) => {
                                                    let n = d[t],
                                                        l = s?.[e];
                                                    if (null == l) return null;
                                                    let i = n?.getIconURL(32);
                                                    return (0, r.jsxs)(
                                                        "div",
                                                        {
                                                            className: ap.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: ap.MY,
                                                                    children: [
                                                                        null != i &&
                                                                            (0, r.jsx)("img", {
                                                                                src: i,
                                                                                alt: "",
                                                                                className: ap.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: ap.qi,
                                                                            children: [
                                                                                (0, r.jsx)(h.E, {
                                                                                    variant: "text-sm/semibold",
                                                                                    children: n?.name ?? "Unknown App",
                                                                                }),
                                                                                (0, r.jsx)(h.E, {
                                                                                    variant: "text-xs/normal",
                                                                                    color: "text-muted",
                                                                                    children: e,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, r.jsx)(m.$, {
                                                                            variant: "secondary",
                                                                            text: "Clear",
                                                                            onClick: () => (0, am.e)(e, a),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(h.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: [
                                                                        "Last dismissed: ",
                                                                        new Date(l.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(h.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: ["Times dismissed: ", l.timesDismissed],
                                                                }),
                                                            ],
                                                        },
                                                        e,
                                                    );
                                                }),
                                                (0, r.jsx)(m.$, {
                                                    variant: "critical-primary",
                                                    text: "Clear All",
                                                    onClick: () => {
                                                        for (let e of i) (0, am.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: ap.Lj,
                      children: (0, r.jsxs)("div", {
                          className: ap.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ap.aq,
                                  children: [
                                      (0, r.jsxs)(W.D, {
                                          variant: "heading-md/bold",
                                          children: ["Hook Calls (", x.length, ")"],
                                      }),
                                      (0, r.jsx)(m.$, { variant: "secondary", text: "Clear", onClick: () => p([]) }),
                                  ],
                              }),
                              0 === x.length
                                  ? (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "No calls recorded yet. Hook calls to useShouldShowGameUpsellForMultipleGames will appear here.",
                                    })
                                  : x.map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: ap.Nr,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: ap.O9,
                                                        children: [
                                                            (0, r.jsx)(h.E, {
                                                                variant: "text-xs/semibold",
                                                                children: new Date(e.timestamp).toLocaleTimeString(),
                                                            }),
                                                            e.disabled &&
                                                                (0, r.jsx)("span", {
                                                                    className: ap.t7,
                                                                    children: "(disabled)",
                                                                }),
                                                            (0, r.jsx)(h.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: ad.M[e.dismissibleContent],
                                                            }),
                                                        ],
                                                    }),
                                                    0 === e.applicationIds.length
                                                        ? (0, r.jsx)(h.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: "No apps",
                                                          })
                                                        : e.applicationIds.map((t) => {
                                                              let a = y[t],
                                                                  n = a?.getIconURL(20),
                                                                  l = e.eligibleToShow.includes(t),
                                                                  s = e.excludedReasons[t];
                                                              return (0, r.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className: ap.Ss,
                                                                      children: [
                                                                          null != n &&
                                                                              (0, r.jsx)("img", {
                                                                                  src: n,
                                                                                  alt: "",
                                                                                  className: ap.rb,
                                                                              }),
                                                                          (0, r.jsx)("span", {
                                                                              className: ap.Jd,
                                                                              children: a?.name ?? t,
                                                                          }),
                                                                          l
                                                                              ? (0, r.jsx)("span", {
                                                                                    className: ap.OK,
                                                                                    children: "eligible",
                                                                                })
                                                                              : null != s
                                                                                ? (0, r.jsx)("span", {
                                                                                      className: ap.t7,
                                                                                      children: av[s],
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
var ab = a(696986),
    af = a(47167),
    ay = a(734057),
    aE = a(994500),
    a_ = a(310031),
    aC = a(394953),
    aS = a(732421);
let aN = [
        {
            key: "channelName",
            cellClassName: G()(aS.Hn, aS.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: G()(aS.Hn, aS.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    aA = [
        {
            key: "channelName",
            cellClassName: G()(aS.Hn, aS.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: G()(aS.Hn, aS.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: G()(aS.Hn, aS.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function ak() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, aC.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, ty.cf)([a_.A], () => ({
            isLoading: a_.A.isLoading,
            hasLoadedEver: a_.A.hasLoadedEver,
            hasPreloaded: a_.A.hasPreloaded,
            hasMoreToLoad: a_.A.hasMoreToLoad,
            isLoadingComplete: a_.A.isLoadingComplete,
        })),
        o = (0, ty.bG)([a_.A], () => a_.A.currentRequestAnalyticsPayload),
        d = (0, ty.cf)([a_.A], () => a_.A.getChannelInfoMap()),
        u = (0, ty.cf)([ay.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = ay.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        m = (0, ty.cf)([ay.A], () =>
            t.reduce((e, t) => {
                let a = ay.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, ty.bG)([a_.A], () => a_.A.getInboxMessages()),
        p = (0, ty.bG)([a_.A], () => a_.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tF.nd,
        children: (0, r.jsxs)(x.Ip, {
            className: aS.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(c.d, {
                                label: "Nav On Click",
                                checked: !!p,
                                onChange: (e) => {
                                    tP.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(ab.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(t$, {
                            columns: aN,
                            data: Object.entries(m).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, af.m1)(a, ea.default, aE.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Store State" }),
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
                        (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(t$, {
                            columns: aA,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, af.m1)(t, ea.default, aE.A) : "",
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
var aI = a(976860),
    aD = a(340124),
    aT = a(988483);
let aO = function () {
    return (0, r.jsxs)("div", {
        className: aT.k,
        children: [
            (0, r.jsx)(h.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(m.$, {
                onClick: () => {
                    (0, aD.Ov)(), (0, aI.pX)(ei.BVt.QUEST_HOME);
                },
                text: "Clear History",
            }),
            (0, r.jsx)(h.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var aR = a(271866),
    aw = a(868511),
    aM = a(147964),
    aL = a(760716),
    aP = a(115093),
    aU = a(11039);
let aG = window.GLOBAL_ENV.RELEASE_CHANNEL === aP.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function aB() {
    let e = (0, aL.i)((e) => e.overrideApplicationId),
        t = (0, aL.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [n, l] = o.useState(aG),
        [s, i] = o.useState(ei.FYj),
        d = o.useCallback(
            (e) => {
                e ? t(n) : t(null);
            },
            [n, t],
        ),
        u = o.useCallback(
            (e) => {
                l(e), a && t(e);
            },
            [a, t],
        ),
        h = (0, aL.i)((e) => e.showSelfActivity),
        x = (0, aL.i)((e) => e.setShowSelfActivity),
        p = (0, aL.i)((e) => e.recommendationApplicationIds),
        g = (0, aL.i)((e) => e.setRecommendationApplicationIds),
        j = o.useCallback(
            (e) => {
                e ? g(s) : g(null);
            },
            [s, g],
        ),
        b = (0, z.bG)([aM.A], () => null != aM.A.testModeApplicationId),
        f = o.useCallback((e) => {
            e ? (0, e$.openModal)((e) => (0, r.jsx)(aw.A, { ...e })) : aR.cL();
        }, []),
        y = (0, tW.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: n,
            source: tV.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        E = o.useCallback(
            (e) => {
                y?.(e);
            },
            [y],
        ),
        _ = o.useCallback(() => {
            (0, aI.pX)(ei.BVt.COLLECTIBLES_SHOP_GAME_SHOP(n));
        }, [n]);
    return (0, r.jsx)("div", {
        className: G()(tF.nd, aU.n),
        children: (0, r.jsxs)("div", {
            className: aU.k,
            children: [
                (0, r.jsx)(v.k, { label: "Application ID", value: n, onChange: u }),
                (0, r.jsx)(W.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(c.d, { label: "Override activity application ID", checked: a, onChange: d }),
                (0, r.jsx)(c.d, { label: "Show own voice activity (bypass self check)", checked: h, onChange: x }),
                (0, r.jsx)(c.d, { label: "Enable application test mode", checked: b, onChange: f }),
                (0, r.jsx)(m.$, { text: "Open Game Profile Modal", onClick: E }),
                (0, r.jsx)(m.$, { text: "Navigate to App Game Shop", onClick: _ }),
                (0, r.jsx)(W.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, r.jsx)(v.k, {
                    label: "Recommendation application IDs",
                    value: s,
                    onChange: i,
                    disabled: null == p,
                }),
                (0, r.jsx)(c.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != p,
                    onChange: j,
                }),
            ],
        }),
    });
}
var aF = a(540999),
    a$ = a(723702),
    aV = a(865116);
a(670812), a(772958);
var aW = a(58736);
a(558179), a(21574);
var az = a(231545),
    aH = a(761929),
    aK = a(23599);
function aY(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, aH.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: aH.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: aK.Di });
}
function aq(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: aK.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(aY, { resizableNode: s, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: G()(aK.KZ, a), children: t }),
        ],
    });
}
var aJ = a(231643);
a(895017), aJ.fu.NONE, aJ.fu.NONE;
var aQ = a(825484),
    aX = a(824552),
    aZ = a(688810),
    a0 = a(975460),
    a1 = a(46225),
    a2 = a(487431),
    a3 = a(546183),
    a8 = a(134861),
    a6 = a(71393),
    a5 = a(967198),
    a9 = a(942370),
    a4 = a(375708),
    a7 = a(311350),
    ne = a(325126);
function nt() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, aZ.Ay)(tE.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        d = (0, z.bG)([a5.A], () => a5.A.getGuildId()),
        c = (0, z.bG)([a6.A], () => a6.A.getGuild(d)),
        u = c?.gameApplicationIds ?? [],
        x = (0, tG.A)(u).filter((e) => null != e),
        p = (0, z.bG)([f.Ay, _.A], () => (0, y.A)(f.Ay, _.A)),
        g = (0, tG.h)(s),
        b = (0, a0.g)(g),
        E = (0, z.yK)(
            [tU.A],
            () => g?.linkedGames?.map((e) => tU.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        C = (0, a1.RD)(g, { allowedFlows: [a9._M.RPC], debug: !0 }),
        S = (0, a1.RD)(g, { allowedFlows: [a9._M.WEB], debug: !0 }),
        N = (0, z.bG)([a8.A], () => null != b && a8.A.isConnected(b.id)),
        A = (0, a1.RD)(g, { debug: !0 }),
        { canDeauthorize: k, deauthorize: I } =
            ((e = A.connectionApp?.id),
            (t = (0, z.bG)([a3.default], () => a3.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aX.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: G()(tF.nd, ne.nd),
        children: [
            (0, r.jsxs)("div", {
                className: ne.kL,
                children: [
                    (0, r.jsx)(W.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(v.k, { label: "Application ID", value: s, onChange: i }),
                    null != p && null != p.id
                        ? (0, r.jsx)(m.$, {
                              onClick: () => i(p.id),
                              variant: "primary",
                              text: `Use detected game: ${p.name} (${p.id})`,
                          })
                        : null,
                    null != c
                        ? x.length > 0
                            ? (0, r.jsxs)("div", {
                                  className: ne.Mc,
                                  children: [
                                      (0, r.jsxs)(h.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: [c.name, " (", c.id, ") \xb7 Official games"],
                                      }),
                                      (0, r.jsx)(aQ.e, {
                                          size: "sm",
                                          wrap: !0,
                                          children: x.map((e) =>
                                              (0, r.jsx)(
                                                  m.$,
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
                            : (0, r.jsxs)(h.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  children: [c.name, " (", c.id, ") \xb7 No official games"],
                              })
                        : (0, r.jsx)(h.E, {
                              variant: "text-md/normal",
                              color: "text-subtle",
                              children: "No guild selected",
                          }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)("div", {
                        className: ne.J3,
                        children: [
                            (0, r.jsxs)(h.E, {
                                variant: "text-md/normal",
                                children: ["Application Name: ", null != g ? g.name : "N/A"],
                            }),
                            (0, r.jsxs)(h.E, {
                                variant: "text-md/normal",
                                children: [
                                    "Linked Games:",
                                    " ",
                                    E.length > 0
                                        ? E.map((e) => ((0, a0.t)(g)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                        : "N/A",
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)("div", {
                className: ne.kL,
                children: [
                    (0, r.jsx)(W.D, { variant: "heading-lg/normal", children: "Authorization status" }),
                    (0, r.jsx)(a2.VT, {
                        overallStatus: C.debug.isSubscribedToAuthorizeRequest
                            ? a2.nW.OVERALL_GOOD
                            : N
                              ? a2.nW.WARN
                              : a2.nW.OVERALL_BAD,
                        name: a4.intl.string(a7.default.AGLx00),
                        steps: [
                            {
                                status: N ? a2.nW.GOOD : a2.nW.BAD,
                                text: a4.intl.string(a7.default.kxF9br),
                                description: N ? null : a4.intl.string(a7.default.PFxxJa),
                                learnMoreLink: N
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: C.debug.isSubscribedToAuthorizeRequest
                                    ? a2.nW.GOOD
                                    : N
                                      ? a2.nW.WARN
                                      : a2.nW.BAD,
                                text: a4.intl.string(a7.default.S94dzs),
                                description:
                                    C.debug.isSubscribedToAuthorizeRequest || !N
                                        ? null
                                        : a4.intl.string(a7.default.aTULMB),
                                learnMoreLink:
                                    C.debug.isSubscribedToAuthorizeRequest || !N
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: A.chosenFlow === a9._M.RPC,
                    }),
                    (0, r.jsx)(a2.VT, {
                        overallStatus: S.debug.hasConnectionEntrypointUrl ? a2.nW.OVERALL_GOOD : a2.nW.OVERALL_BAD,
                        name: a4.intl.string(a7.default.K3ObrU),
                        steps: [
                            {
                                status: S.debug.hasConnectionEntrypointUrl ? a2.nW.GOOD : a2.nW.BAD,
                                text: a4.intl.string(a7.default["8a7IrV"]),
                                description: S.debug.hasConnectionEntrypointUrl
                                    ? a4.intl.formatToPlainString(a7.default["9iLeL2"], {
                                          url: S.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: A.chosenFlow === a9._M.WEB,
                    }),
                    (0, r.jsx)(a2.Sy, {
                        status: A.hasAlreadyLinked ? a2.nW.OVERALL_GOOD : a2.nW.OVERALL_BAD,
                        text: a4.intl.string(a4.t["Vu/zmQ"]),
                    }),
                    0 === A.debug.validFlows.length &&
                        (0, r.jsx)(h.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: a4.intl.string(a7.default.eg0mNa),
                        }),
                    (0, r.jsx)(m.$, {
                        disabled: !A.canStartAuthorization,
                        fullWidth: !0,
                        onClick: () => A.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsxs)(aQ.e, {
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(m.$, {
                                disabled: !C.canStartAuthorization,
                                onClick: () => C.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start In-App Authorization",
                            }),
                            (0, r.jsx)(m.$, {
                                disabled: !S.canStartAuthorization,
                                onClick: () => S.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start Web Authorization",
                            }),
                        ],
                    }),
                    (0, r.jsx)(m.$, {
                        disabled: !k,
                        fullWidth: !0,
                        onClick: I,
                        variant: "critical-primary",
                        text: "Deauthorize",
                    }),
                ],
            }),
            g?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(j.c, {}),
                        (0, r.jsxs)("div", {
                            className: ne.kL,
                            children: [
                                (0, r.jsx)(W.D, { variant: "heading-lg/normal", children: "Benefit configuration" }),
                                (0, r.jsx)("div", {
                                    className: ne.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: ne.Tc,
                                        children: [
                                            null != g.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: g.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: ne.L8,
                                                }),
                                            (0, r.jsx)(h.E, {
                                                variant: "text-md/semibold",
                                                children:
                                                    g.applicationAccountLinkBenefitConfig.reward_name ??
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
var na = a(427358),
    nn = a(465153);
function nl(e) {
    let { title: t, sortKey: a, activeSortKey: n, sortDir: l, onClick: s } = e,
        i = n === a ? ("desc" === l ? " \u25BC" : " \u25B2") : "";
    return (0, r.jsx)(B.D, {
        className: nn.K8,
        onClick: () => s(a),
        children: (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: t + i }),
    });
}
function ns() {
    let [e, t] = o.useState("affinity"),
        [a, n] = o.useState("desc"),
        l = o.useCallback(
            (a) => {
                e === a ? n((e) => ("asc" === e ? "desc" : "asc")) : (t(a), n("username" === a ? "asc" : "desc"));
            },
            [e],
        ),
        s = (0, z.yK)([na.A, ea.default], () =>
            na.A.getUserAffinities().map((e) => {
                let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
                return { user: ea.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
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
        d = o.useMemo(
            () => [
                {
                    key: "user",
                    cellClassName: nn.iL,
                    renderHeader: () =>
                        (0, r.jsx)(nl, {
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
                        (0, r.jsx)(nl, {
                            title: "COMMUNICATION AFFINITY",
                            sortKey: "affinity",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nn.nz,
                    render(e) {
                        let { affinity: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "vcProbability",
                    renderHeader: () =>
                        (0, r.jsx)(nl, {
                            title: "VOICE AFFINITY",
                            sortKey: "vcProbability",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nn.nz,
                    render(e) {
                        let { vcProbability: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "isFriend",
                    renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
                    cellClassName: nn.nz,
                    render(e) {
                        let { isFriend: t } = e;
                        return t.toString();
                    },
                },
            ],
            [e, a, l],
        );
    return 0 === s.length ? null : (0, r.jsx)(t$, { className: tF.nd, columns: d, rowClassName: nn.nM, data: i });
}
var ni = a(139716),
    nr = a(847599),
    no = a(282621);
function nd() {
    return (0, r.jsx)("div", {
        className: G()(tF.nd, no.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(j.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: no.h,
                    children: [
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, e$.openModalLazy)(
                                    async () => {
                                        let { default: e } = await a.e("29079").then(a.bind(a, 357578));
                                        return (t) => (0, r.jsx)(e, { ...t });
                                    },
                                    { onCloseCallback: void 0 },
                                ),
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Modal",
                            onClick: () =>
                                ni.A.showAgeVerificationGetStartedModal({ entryPoint: nr.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var nc = a(989349),
    nu = a.n(nc),
    nm = a(862482),
    nh = a(624479),
    nx = a(555704),
    np = a(285796),
    ng = a(241326),
    nv = a(892547),
    nj = a(297413),
    nb = a(379078),
    nf = a(704554),
    ny = a(957565),
    nE = a(58703),
    n_ = a(80703),
    nC = a(495544);
let nS = 0,
    nN = [],
    nA = 0,
    nk = [],
    nI = !1;
class nD extends z.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nC.default, aF.A);
    }
    get loggedEvents() {
        return nN;
    }
    get loggedEventsVersion() {
        return nA;
    }
    get loggedTriggers() {
        return nk;
    }
    get trackTriggers() {
        return nI;
    }
}
let nT = new nD(tP.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        aF.A.isDeveloper &&
            (nN.push({
                key: (nS++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, n_.d)(n) : nC.default.getId(),
                timestamp: new Date(),
            }),
            nA++,
            nN.length > 500 && (nN = nN.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !aF.A.isDeveloper ||
            (nI &&
                (nk = [
                    ...nk,
                    {
                        key: (0, ek.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                nk.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        nI = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (nN = []), nA++, (nk = []);
    },
});
var nO = a(658675);
function nR(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: G()(tF.qo, t), children: a });
}
let nw = (e) => {
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
                (0, r.jsx)("dt", { className: tF.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tF.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(B.D, {
                                  tag: "span",
                                  className: tF.nH,
                                  onClick: () => (0, ny.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(tl.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(nh.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function nM(e) {
    let { value: t } = e;
    return (0, r.jsx)(nO.P, { checked: t });
}
var nL = a(733657);
let nP = [
    {
        key: "event",
        cellClassName: nL.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: nL.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function nU(e) {
    let { children: t } = e;
    return (0, r.jsx)(x.Ip, { className: nL._D, children: (0, r.jsx)("dl", { children: t }) });
}
function nG(e) {
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
            className: nL.fY,
            children: [
                (0, r.jsx)("dt", { className: nL.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(B.D, {
                    tag: "span",
                    className: nL.nH,
                    onClick: () => (0, ny.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(tl.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(nh.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let nB = new Set(["client_performance_cpu", "client_performance_memory"]),
    nF = [
        {
            id: "details",
            name: "Details",
            group: aJ.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = ea.default.getUser(l),
                    d = nu()(n);
                return (0, r.jsxs)("div", {
                    className: nL.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(aW.Ay, {
                            className: G()(tF.jr, nL.nZ),
                            children: [
                                (0, r.jsx)(aW.Ay.Icon, { icon: nx.U, tooltip: t }),
                                (0, r.jsxs)(aW.Ay.Title, {
                                    wrapperClassName: nL.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(B.D, {
                                            tag: "span",
                                            className: nL.KE,
                                            onClick: () => (0, ny.C)(t),
                                            children: (0, r.jsx)(nh.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(aW.Ay.Icon, {
                                    icon: nh.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, ny.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(aW.Ay.Icon, { icon: np.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(nR, {
                            className: nL.ZK,
                            children: [
                                (0, r.jsx)(nw, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nE.i$)(d, "LLLL"),
                                        children: ["(", nu().locale(), ") ", (0, nE.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nw, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(nj.A, { user: o }),
                                    }),
                                (0, r.jsx)(nw, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(nU, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = nB.has(a)
                                        ? ((e, t, a) => {
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
                                                nG,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nL.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    nG,
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
    n$ = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(n$)
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
    nV = {
        searchType: nb.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function nW() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, z.bG)([nT], () => nT.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(n$)),
        [i, d] = o.useState(nT.loggedEvents),
        c = o.useCallback((e) => {
            d(e);
        }, []);
    (0, nf.RT)(t, nT.loggedEvents, c, nV, [n]);
    let u = i.filter((e) => {
            for (let t of l) if (n$[t].filter(e)) return !0;
            return !1;
        }),
        [m, h] = o.useState(void 0),
        x = u.find((e) => e.key === m),
        { TabBar: p, renderSelectedTab: g } = (0, aJ.Ay)({ tabs: nF }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: G()(tF.nd, nL.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nL.rh,
                children: [
                    (0, r.jsx)(nm.$n, {
                        className: nL.Q$,
                        look: nm.$n.Looks.BLANK,
                        size: nm.$n.Sizes.ICON,
                        onClick: H.eY,
                        children: (0, r.jsx)("span", {
                            title: a4.intl.string(a4.t.VkKicb),
                            children: (0, r.jsx)(ng.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": a4.intl.string(a4.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nL.Bi }),
                    (0, r.jsx)("div", {
                        className: nL.uW,
                        children: Object.entries(n$).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                B.D,
                                {
                                    className: G()(nL.pb, l.includes(t) && nL.bx),
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
                className: nL.rh,
                children: (0, r.jsx)(nv.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(t$, { columns: nP, data: u, selectedRowKey: m, onClickRow: (e) => h(e.key) }),
            null != x &&
                (0, r.jsxs)(aq, {
                    className: nL.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(p, {}), g({ loggedEvent: x, onClose: () => h(void 0), filteredEvents: u })],
                }),
        ],
    });
}
var nz = a(382483),
    nH = a(385113),
    nK = a(315117);
function nY(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)($.B, {
        gap: 8,
        padding: 8,
        className: nK.lt,
        children: [
            (0, r.jsx)(h.E, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(h.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(h.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(h.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)(h.E, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(h.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          $.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: nK.YL,
                              children: [
                                  (0, r.jsx)(h.E, { variant: "text-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(h.E, {
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
function nq(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)($.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? nK.FM : nK.gt,
        children: [
            (0, r.jsx)(B.D, {
                className: nK.Av,
                onClick: n,
                children: (0, r.jsxs)($.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.config_id, " \xb7 ", t.application_id],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(m.$, {
                variant: "secondary",
                size: "sm",
                text: "Refetch",
                onClick: () => (0, nz.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function nJ() {
    let e = (0, z.bG)([nH.A], () => nH.A.getFeaturedFetchState());
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(h.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(m.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nz.Wq)({ force: !0 }),
            }),
        ],
    });
}
function nQ() {
    let e = (0, z.bG)([nH.A], () => nH.A.getDeveloperFetchState());
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(h.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(m.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nz.i$)({ force: !0 }),
            }),
        ],
    });
}
function nX() {
    let [e, t] = o.useState(""),
        a = (0, z.bG)([nH.A], () => (e.length > 0 ? nH.A.getFetchState(e) : null)),
        n = (0, z.bG)([nH.A], () => (e.length > 0 ? nH.A.getConfigs(e) : null));
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(v.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(m.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, nz.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(h.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)($.B, { gap: 4, children: n.map((e) => (0, r.jsx)(nY, { config: e }, e.config_id)) }),
        ],
    });
}
function nZ(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, z.bG)([nH.A], () => nH.A.getFeaturedFetchState());
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(h.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === nH.e.FETCHING &&
                (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    nq,
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
function n0(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)($.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(nY, { config: t }),
                ],
            }),
        ],
    });
}
function n1() {
    let [e, t] = o.useState(null),
        a = Object.values((0, z.bG)([nH.A], () => nH.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)($.B, {
            gap: 16,
            padding: 8,
            className: nK.zr,
            children: [
                (0, r.jsx)(W.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(m.$, {
                    size: "sm",
                    variant: "critical-secondary",
                    text: "Reset store",
                    onClick: () => tP.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEBUG_RESET" }),
                }),
                (0, r.jsx)(nJ, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(nQ, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(nX, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(nZ, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(n0, { config: n }),
            ],
        }),
    });
}
var n2 = a(636537),
    n3 = a(153488),
    n8 = a(927813);
let n6 = 12 * n8.A.Millis.HOUR,
    n5 = new Map(),
    n9 = !1,
    n4 = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    n7 = { ...n4 };
function le() {
    n5 = new Map(n7.channelAffinities.map((e) => [e.channelId, e]));
}
class lt extends z.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((n7.channelAffinities = e.channelAffinities), (n7.lastFetched = e.lastFetched), le());
    }
    shouldFetch() {
        if (!n9) return Date.now() - n7.lastFetched > n6;
    }
    isFetching() {
        return n9;
    }
    getChannelAffinities() {
        return n7.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return n5;
    }
    getChannelAffinity(e) {
        return n5.get(e);
    }
    compare(e, t) {
        return (n5.get(t)?.score ?? 0) - (n5.get(e)?.score ?? 0);
    }
    getState() {
        return n7;
    }
}
let la = new lt(tP.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        n9 = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (n7.lastFetched = Date.now()), (n9 = !1), (n7.channelAffinities = t), le();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        n9 = !1;
    },
    LOGOUT: function () {
        (n7 = { ...n4 }), (n5 = new Map()), (n9 = !1);
    },
});
var ln = a(907360);
let ll = [
    {
        key: "channel",
        cellClassName: ln._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: ln.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function ls() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            la.shouldFetch() && n3.A.hasConsented(ei.YAq.PERSONALIZATION)
                ? (tP.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  n2.Bo.get({
                      url: ei.Rsh.CHANNEL_AFFINITIES_V2,
                      retries: 3 * !!e,
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }).then(
                      (e) => {
                          let { body: t } = e;
                          tP.h.dispatch({
                              type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
                              affineChannels: t.channel_affinities.map((e) => ({
                                  channelId: e.channel_id,
                                  score: e.score ?? 0,
                              })),
                          });
                      },
                      () => {
                          tP.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
                      },
                  ))
                : Promise.resolve();
        })();
    }, []);
    let e = (0, z.yK)([la, ay.A], () =>
        la
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: ay.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(t$, { className: tF.nd, columns: ll, rowClassName: ln.nM, data: e });
}
function li() {
    return (0, r.jsxs)(h.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var lr = a(105565),
    lo = a(558845),
    ld = a(193337);
let lc = (e) => {
        switch (e) {
            case lr.r.DC_DISMISSED:
                return "DISMISS:";
            case lr.r.DC_SHOWN:
                return "SHOW:";
            case lr.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    lu = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${ad.M[a]}`;
            },
        },
    ],
    lm = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${ad.M[t]}`;
            },
        },
    ];
function lh() {
    let e = (0, z.bG)([lr.A], () => lr.A.getDCFEvents()),
        t = (0, lo.Ay)((e) => e.candidates),
        a = (0, lo.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? nu()(a).fromNow() : "n/a",
        l = (0, lo.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: lc(t) + a.toString(), event: lc(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: ld.KE,
        children: [
            (0, r.jsxs)("div", { className: ld.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: ld.pq, children: ["Last winner: ", null != l ? ad.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: ld.uI,
                children: (0, r.jsx)(t$, { className: ld.Th, columns: lm, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(t$, { columns: lu, data: s }),
        ],
    });
}
var lx = a(689175),
    lp = a(541689),
    lg = a(199773);
function lv() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(lj());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tL.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [lj(), e];
}
function lj() {
    return tL.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var lb = a(662546),
    lf = a(643278),
    ly = a(256787),
    lE = a(20439);
let l_ = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = ad.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, lE.A)(l),
        [d, u] = o.useState(!1),
        m = o.useCallback(() => {
            n?.(a), i();
        }, [n, i, a]),
        h = o.useCallback(
            (e) => {
                e.preventDefault(), u(!0), navigator.clipboard.writeText(a.toLowerCase());
            },
            [a],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)($.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eG.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? lb.O : lf.s,
                        onClick: h,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(c.d, {
                        label: `${a.toLowerCase()} (${ad.M[a]})`,
                        description: (0, ly.Zm)(l)
                            ? (function (e) {
                                  let t = au.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
                        onChange: m,
                    }),
                ],
            }),
            (0, r.jsx)(j.c, {}),
        ],
    });
});
function lC(e) {
    let { items: t, onChange: a } = e,
        [n, l] = lv(),
        s = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)($.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(l_, { content: e, onChange: s }, e)),
    });
}
function lS(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lo.Ay)((e) => e.recentlyShown),
        [n, l] = lv(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(ad.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(d.n, { label: "Recent Overrides", children: (0, r.jsx)(lC, { items: s }) });
}
function lN(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lo.Ay)((e) => e.recentlyShown)
            .map((e) => ad.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(d.n, { label: "Recently Shown", children: (0, r.jsx)(lC, { items: a }) });
}
var lA = a(268571);
function lk() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, z.cf)([lg.A], () => ({
            dailyCapReached: lg.A.hasUserHitDCCap(),
            dailyCapOverridden: lg.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lg.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [s, i] = o.useState(20),
        u = o.useMemo(
            () =>
                Object.keys(ad.M)
                    .filter((e) => e.toLowerCase().includes(n.toLowerCase()))
                    .reverse(),
            [n],
        ),
        x = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < u.length && i((e) => e + 100);
            },
            [s, u.length],
        );
    return (0, r.jsx)(lx.Ch, {
        onScroll: x,
        children: (0, r.jsxs)("div", {
            className: lA.KE,
            children: [
                (0, r.jsxs)(d.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)($.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, lp.Ab)(),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, ac.nT)(),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, ac.D1)(),
                                }),
                                (0, r.jsx)(h.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(c.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: lp.SE,
                        }),
                        (0, r.jsx)(c.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: lp.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(lN, {}),
                (0, r.jsx)(lS, {}),
                (0, r.jsxs)(d.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(nv.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(lC, { items: u.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lI = a(276086),
    lD = a(154323),
    lT = a(155248);
function lO() {
    let e = (0, z.bG)([lD.A], () => lD.A.allWithDescriptions(), [], z.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                c.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lI.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(j.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lT.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lT.x6,
                children: (0, r.jsx)(m.$, { variant: "primary", text: "Clear all", onClick: lI.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lT.vu, children: t }),
        ],
    });
}
var lR = a(881436);
function lw() {
    let e = (0, z.bG)([tz.A], () => tz.A.detectableGamesEtag),
        t = (0, z.bG)([tz.A], () => tz.A.lastFetched),
        a = (0, z.bG)([tz.A], () => tz.A.games.length);
    return (0, r.jsxs)($.B, {
        gap: 4,
        children: [
            (0, r.jsx)(W.D, { variant: "heading-sm/bold", children: "Cache Status" }),
            (0, r.jsxs)(h.E, {
                variant: "text-sm/normal",
                children: [(0, r.jsx)("strong", { children: "Total games:" }), " ", a],
            }),
            (0, r.jsxs)(h.E, {
                variant: "text-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "ETag:" }),
                    " ",
                    "" === e ? "(empty)" : (0, r.jsx)("span", { className: lR.ti, children: e }),
                ],
            }),
            (0, r.jsxs)(h.E, {
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
function lM(e) {
    let { game: t } = e;
    return (0, r.jsxs)($.B, {
        gap: 12,
        className: lR.f_,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                children: [
                    (0, r.jsx)(aa.A, { game: t, size: aa.M.LARGE }),
                    (0, r.jsxs)($.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-lg/bold", children: t.name }),
                            (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: t.id }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: lR.aY, children: JSON.stringify(t, null, 2) }),
        ],
    });
}
function lL() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, z.bG)([tz.A], () => tz.A.games),
        s = o.useMemo(
            () =>
                l.filter((e) => null != e.name && "" !== e.name).map((e) => ({ id: e.id, value: e.id, label: e.name })),
            [l],
        ),
        i = o.useCallback((e) => {
            t(e), null != e && n("");
        }, []),
        d = o.useCallback((e) => {
            n(e), e.trim().length > 0 && t(null);
        }, []),
        c = a.trim(),
        u = c.length > 0 ? c : (e ?? void 0),
        m = (0, z.bG)([tz.A], () => (null != u ? (tz.A.getDetectableGame(u) ?? null) : null), [u]);
    return (0, r.jsx)("div", {
        className: G()(tF.nd, lR.kL),
        children: (0, r.jsxs)($.B, {
            gap: 16,
            padding: 12,
            className: lR.rf,
            children: [
                (0, r.jsxs)($.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/bold", children: "Detectable Cache" }),
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Inspect the local detectable games cache. Use this to verify whether a SKU or executable change has propagated to your client.",
                        }),
                    ],
                }),
                (0, r.jsx)(lw, {}),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(at.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: s,
                            value: c.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: i,
                            selectionMode: "single",
                            clearable: !0,
                        }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(v.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: d,
                        }),
                    ],
                }),
                null != u &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(j.c, {}),
                            null != m
                                ? (0, r.jsx)(lM, { game: m })
                                : (0, r.jsxs)(h.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-critical",
                                      children: ["No entry in cache for ID ", u, "."],
                                  }),
                        ],
                    }),
            ],
        }),
    });
}
var lP = a(691540),
    lU = a(97483),
    lG = a(123292),
    lB = a(780907),
    lF = a(56562);
let l$ = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function lV(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, al.I)(t.id);
    return (0, r.jsxs)($.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(aa.A, { game: n }),
            (0, r.jsxs)($.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/normal", children: n?.name }),
                    a && (0, r.jsx)(h.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function lW() {
    let e = (0, z.bG)([f.Ay], () => f.Ay.getRunningGames()),
        t = (0, z.bG)([f.Ay], () => f.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                l$.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, lB.xt)(null);
            let t = tz.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, lP.P0)({
                    id: "devtools-set-debug-game-error",
                    type: lU.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, lB.xt)({
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
                fullscreenType: lF.aI.UNKNOWN,
                cmdLine: "",
                nativeProcessObserverId: -1,
            });
        };
    return (0, r.jsxs)($.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)($.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(W.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(lV, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)($.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(W.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(v.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(at.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            s(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)($.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(lG.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(m.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lz = a(240248),
    lH = a(769195);
function lK() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), n(null), s(null);
                let e = await n2.Bo.put({
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
    return (0, r.jsxs)($.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(m.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lz.uJ)(a) && (0, r.jsx)(h.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lz.uJ)(l) && (0, r.jsx)(h.E, { variant: "text-md/normal", color: "status-danger", children: l }),
        ],
    });
}
function lY() {
    return (0, r.jsx)("div", {
        className: lH.n,
        children: (0, r.jsx)($.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lK, {}) }),
    });
}
a(172879);
var lq = a(985623),
    lJ = a.n(lq),
    lQ = a(990078),
    lX = a(874804),
    lZ = a(782134),
    l0 = a(113494),
    l1 = a(603349),
    l2 = a(155466);
function l3(e) {
    return parseFloat(e.toFixed(3));
}
let l8 = [
    {
        key: "store",
        cellClassName: l2.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: l2.i7,
        render(e) {
            let { trace: t } = e;
            return `${l3(t.time)} ms`;
        },
    },
];
function l6(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(x.Ip, { children: (0, r.jsx)(t$, { columns: l8, data: a }) });
}
let l5 = [
    {
        id: "action",
        name: "Action",
        group: aJ.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = nu()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(nR, {
                        className: l2.mP,
                        children: [
                            (0, r.jsx)(nw, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nE.i$)(a, "LLLL"),
                                    children: (0, nE.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nw, { name: "Total Time", children: [l3(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(x.Ip, { className: l2.Dx, children: (0, r.jsx)(az.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: aJ.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(l6, { actionLog: t });
        },
    },
];
function l9(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...l5,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(l1.A, { className: l2.ik }), "Error"],
                              }),
                              group: aJ.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: G()(l2.u4, tF.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tF.R5,
                                                  children: (0, r.jsx)(nm.$n, {
                                                      className: tF.Q$,
                                                      size: nm.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(x.Ip, {
                                              className: l2.Dx,
                                              children: (0, r.jsx)(az.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : l5,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, aJ.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(aq, {
        className: l2.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aW.Ay, {
                className: G()(tF.jr, l2.nZ),
                children: [
                    (0, r.jsx)(aW.Ay.Icon, { icon: lX.K, tooltip: t.name }),
                    (0, r.jsx)(aW.Ay.Title, {
                        wrapperClassName: G()(tF.qd, tF.ZE),
                        className: tF.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(aW.Ay.Icon, {
                        icon: nh.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return (t[a] = ((n = e[a]), ei.AKn.test(n) ? "REDACTED" : n)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, ny.C)(a, () =>
                                (0, lP.P0)({
                                    id: "copy-action-log-name",
                                    type: lU.Ck.SUCCESS,
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
let l4 = [
        {
            key: "action",
            cellClassName: l2.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(l1.A, { className: l2.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: l2.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${l3(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: l2.i7,
            render(e) {
                let { actionLog: t } = e;
                return nu()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    l7 = {
        searchType: nb.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function se() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lJ()(() => {
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
        })(tP.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [s, i] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nf.RT)(t, u ? s : l, p, l7);
    let g = o.useCallback(
            (e) => {
                i(l), m(e);
            },
            [l],
        ),
        v = t.trim().length > 0,
        j = o.useMemo(() => (v ? d : u ? s : l), [l, d, v, u, s]),
        b = u ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, r.jsxs)("div", {
        ref: e,
        className: G()(tF.nd, l2.nd),
        children: [
            (0, r.jsxs)("div", {
                className: l2.KE,
                children: [
                    (0, r.jsx)(lQ.m, {
                        text: b,
                        children: (0, r.jsx)(eG.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? lZ.u : l0.E,
                            "aria-label": b,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(nv.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(t$, {
                columns: l4,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(l9, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var st = a(936388),
    sa = a(132369);
function sn() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: G()(tF.nd, sa.n),
        children: (0, r.jsx)(m.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: st.A.clearUploadedKeyVersions,
        }),
    });
}
var sl = a(37962),
    ss = a(881520),
    si = a(670455),
    sr = a(861160);
let so = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function sd() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, s] = o.useState(1e3),
        [i, c] = o.useState(0),
        u = (0, z.bG)([ss.A], () => (null === e ? null : (ss.A.getFeedbackConfig(si.MW[e]) ?? sl.u[si.MW[e]]))),
        x = Object.entries(si.MW),
        p = x.slice(x.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        b = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: sr.kL,
        children: (0, r.jsxs)($.B, {
            gap: 32,
            children: [
                (0, r.jsx)(g.l, {
                    label: "Feedback Survey",
                    options: p,
                    value: e,
                    onSelectionChange: t,
                    placeholder: "Select Feedback Survey",
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsxs)(d.n, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != u &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)($.B, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, r.jsx)(v.k, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: a.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => n(parseFloat(e)),
                                }),
                                (0, r.jsx)(g.l, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: so,
                                    value: l,
                                    onSelectionChange: s,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(d.n, {
                    label: "Override Survey Chance",
                    children: (0, r.jsx)(v.k, {
                        label: "Override chance",
                        description: null != u ? `Current chance: ${100 * u.chance}%` : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: i.toString(),
                        type: "number",
                        onChange: (e) => c(parseFloat(e)),
                    }),
                }),
                (0, r.jsxs)(aQ.e, {
                    children: [
                        (0, r.jsx)(m.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != u &&
                                    tP.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: u.feedbackType })
                                ),
                            disabled: !b,
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != u &&
                                    tP.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: u.feedbackType,
                                        cooldown: a * l,
                                        chance: i / 100,
                                    })
                                ),
                            disabled: !b,
                        }),
                    ],
                }),
                null == e &&
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(i >= 0 && i <= 100) &&
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var sc = a(334279),
    su = a(663417),
    sm = a(147925),
    sh = a(557009),
    sx = a(788868);
let sp = async () =>
        (
            await n2.Bo.get({
                url: ei.Rsh.ENTITLEMENTS_FOR_APPLICATION(sx.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => sh.A.createFromServer(e)),
    sg = async (e) => {
        await n2.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    sv = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await n2.Bo.del({ url: t, rejectWithError: !0 });
    },
    sj = async () => {
        await n2.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    sb = () => {
        let [e, t] = o.useState([]),
            [a, n] = o.useState(!1),
            l = (0, o.useCallback)(async () => {
                try {
                    n(!0);
                    let e = await sp();
                    t(e);
                } finally {
                    n(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await sg(e), await l();
                },
                [l],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await sv(e), await l();
                },
                [l],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await sj(), await l();
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: a,
        };
    };
var sf = a(51846),
    sy = a(214868);
let sE = {
        [ei.GD.QUEST_REWARD]: "Quest Reward",
        [ei.GD.DEVELOPER_GIFT]: "Developer Gift",
        [ei.GD.INVOICE]: "Invoice",
        [ei.GD.REVERSE_TRIAL]: "Reverse Trial",
        [ei.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [ei.GD.SUBSCRIPTION]: "Subscription",
        [ei.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    s_ = (e) => {
        let t,
            { entitlement: a, active: n, onDelete: l } = e,
            s = (e) => (null != e ? (0, nE.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: G()(sf.Nr, n ? sy.C1 : ""),
            children: [
                (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !n &&
                    (0, r.jsxs)(h.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", sC.find((e) => e.value === a.skuId)?.label],
                    }),
                null != a.startsAt &&
                    null != a.endsAt &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["Start: ", s(a.startsAt), " "] }),
                            (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["End: ", s(a.endsAt), " "] }),
                        ],
                    }),
                (0, r.jsxs)(h.E, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        null != (t = a.sourceType) && t in sE ? sE[t] : `Unknown source type ${t}`,
                    ],
                }),
                n &&
                    null != l &&
                    (0, r.jsx)(nm.$n, {
                        className: sf.RW,
                        size: nm.$n.Sizes.TINY,
                        color: nm.$n.Colors.RED,
                        look: nm.$n.Looks.OUTLINED,
                        onClick: l,
                        children: "Delete",
                    }),
            ],
        });
    },
    sC = [
        { id: "1h", label: "1 hour", value: sc.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: sc.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: sc.j.PREMIUM_TIER_2_3_DAY },
    ];
function sS() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(sc.j.PREMIUM_TIER_2_1_HOUR),
        [l, s] = o.useState([]),
        [i, d] = o.useState([]),
        {
            refreshEntitlementList: c,
            grantFractionalPremium: u,
            deleteFractionalPremium: p,
            triggerNextEntitlementFulfillment: v,
            entitlements: j,
            loading: b,
        } = sb();
    return (
        o.useEffect(() => {
            c();
        }, [c]),
        o.useEffect(() => {
            s(j.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === ei.zF_.FRACTIONAL_REDEMPTION)),
                d(j.filter((e) => Object.values(sc.j).includes(e.skuId) && null == e.startsAt));
        }, [j]),
        (0, r.jsx)(x.Ip, {
            className: tF.nd,
            children: (0, r.jsxs)("div", {
                className: sy.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: sy.dL,
                        children: [
                            (0, r.jsx)(h.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(B.D, {
                                onClick: () => t(!e),
                                className: sf.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(sm.A, { direction: e ? sm.A.Directions.UP : sm.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(h.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(h.E, {
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
                        className: G()([sf.uW, sy.Uo]),
                        children: [
                            (0, r.jsx)(g.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: sC,
                                onSelectionChange: n,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => u(a),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("section", {
                        className: sf.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: sy.dL,
                                children: [
                                    (0, r.jsx)(h.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: sf.GC,
                                        children: [
                                            (0, r.jsx)(nm.$n, {
                                                disabled: b,
                                                size: nm.$n.Sizes.TINY,
                                                color: nm.$n.Colors.PRIMARY,
                                                look: nm.$n.Looks.OUTLINED,
                                                onClick: () => v(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(nm.$n, {
                                                disabled: b,
                                                size: nm.$n.Sizes.TINY,
                                                color: nm.$n.Colors.RED,
                                                look: nm.$n.Looks.OUTLINED,
                                                onClick: () => p(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(nm.$n, {
                                                disabled: b,
                                                look: nm.$n.Looks.BLANK,
                                                size: nm.$n.Sizes.ICON,
                                                onClick: c,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(su.f, { size: "xs", color: "currentColor" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            l.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    s_,
                                                    { entitlement: e, active: !0, onDelete: () => p(e.id) },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            i.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: i.map((e) => (0, r.jsx)(s_, { entitlement: e }, e.id)),
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
var sN = a(832604),
    sA = a(264572).Buffer;
let sk = /[^a-zA-Z0-9_.-]+/g;
function sI(e) {
    let { runningGame: t } = e,
        a = (0, sN.A)(t.pid, void 0),
        [n, l] = (0, o.useState)(!1),
        s = t.name ?? t.exeName ?? "",
        i = null != a && !n,
        d = async () => {
            if (null != a) {
                l(!0);
                try {
                    let e,
                        t = await b.A.fileManager.saveWithDialog2(
                            sA.from(a.slice(a.indexOf(",") + 1), "base64"),
                            ((e = s.trim().replace(sk, "_")), `${e.length > 0 ? e : "icon"}.png`),
                            void 0,
                        );
                    null == t ||
                        t.canceledByUser ||
                        (0, lP.P0)({
                            id: "devtools-save-icon-success",
                            type: lU.Ck.SUCCESS,
                            message: `Saved icon to ${t.directory}`,
                        });
                } catch {
                    (0, lP.P0)({
                        id: "devtools-save-icon-failure",
                        type: lU.Ck.FAILURE,
                        message: "Failed to save icon",
                    });
                } finally {
                    l(!1);
                }
            }
        };
    return (0, r.jsxs)($.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 12,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                fullWidth: !1,
                children: [
                    null != a
                        ? (0, r.jsx)("img", { src: a, alt: s, width: 48, height: 48 })
                        : (0, r.jsx)(h.E, { variant: "text-xxs/normal", color: "text-muted", children: "no icon" }),
                    (0, r.jsxs)($.B, {
                        direction: "vertical",
                        gap: 0,
                        fullWidth: !1,
                        children: [
                            (0, r.jsx)(h.E, { variant: "text-md/normal", children: s }),
                            (0, r.jsxs)(h.E, {
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
                            (0, r.jsx)(h.E, { variant: "text-xxs/normal", color: "text-muted", children: t.exePath }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(m.$, { variant: "primary", text: "Save Icon", onClick: d, disabled: !i }),
        ],
    });
}
function sD() {
    let e = (0, z.bG)([f.Ay], () => f.Ay.getRunningGames());
    return (0, r.jsxs)($.B, {
        gap: 16,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)($.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(W.D, { variant: "heading-md/bold", children: "Game Icon Extractor" }),
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        children: "Save a running game's locally-detected icon as a PNG.",
                    }),
                ],
            }),
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)($.B, {
                gap: 12,
                children: [
                    (0, r.jsx)(W.D, { variant: "heading-sm/bold", children: "Running Games" }),
                    0 === e.length
                        ? (0, r.jsx)(h.E, {
                              variant: "text-sm/normal",
                              children: "No games detected. Launch a game first.",
                          })
                        : e.map((e) => (0, r.jsx)(sI, { runningGame: e }, `${e.pid}-${e.exePath}`)),
                ],
            }),
        ],
    });
}
var sT = a(390544),
    sO = a(396748),
    sR = a(522055),
    sw = a(661202);
function sM() {
    let e = (0, z.bG)([a5.A], () => a5.A.getGuildId()),
        t = (0, z.bG)([a6.A], () => a6.A.getGuild(e)?.name),
        a = (0, z.bG)([sR.A], () => sR.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    tP.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        s = o.useMemo(
            () =>
                Object.values(sT.M).map((e) =>
                    (0, r.jsx)(
                        m.$,
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
                tP.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(x.Ip, {
              className: sw.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sw.uW,
                      children: (0, r.jsx)(W.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sw.uW,
                      children: [
                          (0, r.jsx)(h.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sw.UD, children: s }),
                          (0, r.jsx)(h.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sw.UD,
                              children: (0, r.jsx)(m.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: i,
                              }),
                          }),
                          (0, r.jsx)(h.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, sO.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function sL(e, t) {
    let a = "boolean" == typeof t ? t : !aV.Ay.get(e);
    tP.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sP = a(460281);
function sU(e) {
    let { devSettingsCategory: t } = e,
        a = (0, z.bG)([aV.Ay], () => aV.Ay.allByCategory(t), [t], z.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(c.d, { label: n, description: t, checked: a, onChange: (e) => sL(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: G()(tF.nd, sP.n), children: n });
}
var sG = a(950305),
    sB = a(231483),
    sF = a(597770),
    s$ = a(433492),
    sV = a(695458),
    sW = a(796140),
    sz = a(268791),
    sH = a(836480),
    sK = a(855473),
    sY = a(626258),
    sq = a(420854),
    sJ = a(373846),
    sQ = a(657044),
    sX = a(141060),
    sZ = a(608599),
    s0 = a(685761),
    s1 = a(157225),
    s2 = a(362704),
    s3 = a(625903),
    s8 = a(628284),
    s6 = a(320448),
    s5 = a(562708),
    s9 = a(830215),
    s4 = a(381689),
    s7 = a(889227),
    ie = a(499785),
    it = a(315069);
class ia extends it.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new ia(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let il = { pools: null, users: null };
function is(e) {
    null == il.users && (il.users = new Map()), il.users.set(e.id, new s7.A(e));
}
class ii extends z.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (il.pools = new Map(Object.entries(e.pools))),
            null != e.users && (il.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != il.pools ? Object.fromEntries(il.pools) : null,
            users: null != il.users ? Object.fromEntries(il.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(il.users?.values() ?? []).filter((t) => il.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return il.pools?.get(e) ?? null;
    }
    getUser(e) {
        return il.users?.get(e) ?? null;
    }
    getPools() {
        return null === il.pools ? null : Array.from(il.pools.values());
    }
}
let ir = new ii(tP.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == il.pools && (il.pools = new Map()), il.pools.set(t.id, t), a.forEach(is);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = il.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                il.users?.delete(e);
            }),
            il.pools?.delete(t);
    },
});
var io = a(835002);
async function id(e, t) {
    return await ie.A.get({
        url: ei.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: s5.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void s4.A.showFailedToast(io.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            tP.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: ia.fromServer(l).setPassword(t),
                users: s.map((e) => new s7.A(e)),
            });
        })
        .catch(() => (s4.A.showFailedToast(io.OB.GENERIC_ERROR), null));
}
var ic = a(844330),
    iu = a(277851);
let im = [
        sG.n,
        sB.l,
        sF.o,
        s$.K,
        sV.m,
        sW.c,
        sz.$,
        sH.Q,
        sK.Z,
        sY.A,
        sq.E,
        sJ.C,
        sQ._,
        sX.i,
        sZ.L,
        s0.f,
        s1.N,
        s2.Y,
        s3.Z,
    ],
    ih = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    ix = () => {
        let [e, t] = o.useState(""),
            [a, n] = o.useState(""),
            [l, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (l) => {
                        l.preventDefault(), s(!0);
                        try {
                            await id(e, a), t(""), n("");
                        } finally {
                            s(!1);
                        }
                    },
                    children: (0, r.jsxs)($.B, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, r.jsxs)($.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, r.jsx)(v.k, {
                                        fullWidth: !0,
                                        value: e,
                                        onChange: t,
                                        placeholder: "Pool ID",
                                        disabled: l,
                                    }),
                                    (0, r.jsx)(v.k, {
                                        type: "password",
                                        fullWidth: !0,
                                        value: a,
                                        onChange: n,
                                        placeholder: "Password",
                                        disabled: l,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)($.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, r.jsx)(m.$, {
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
                                    (0, r.jsx)(m.$, {
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
                (0, r.jsx)(j.c, { gap: 4 }),
            ],
        });
    },
    ip = (e) => {
        let { pool: t } = e,
            { id: a, summary: n } = t,
            l = ir.getUsersForPool(a),
            s = (0, z.bG)([nC.default], () => nC.default.getId()),
            i = im[Number(a) % im.length],
            d = ih[Number(a) % ih.length],
            c = o.useCallback(() => {
                tP.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)($.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(ic.A, {
                icon: (0, r.jsx)(h.E, {
                    variant: "text-md/medium",
                    color: d,
                    className: iu.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: n,
                className: iu.JC,
                subtitle: `${l.length} users`,
                children: (0, r.jsxs)($.B, {
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
                                        0 !== a && (0, r.jsx)(j.c, { gap: 4 }),
                                        (0, r.jsx)(
                                            B.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(),
                                                        (function (e, t) {
                                                            let a = ir.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let n = ir.getPool(e)?.password;
                                                            if (null == n) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            s9.A.login({
                                                                login: a.email,
                                                                password: n,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (s4.A.showFailedToast(io.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: G()(iu.vk, { [iu.Pe]: s === e.id }),
                                                children: (0, r.jsxs)(
                                                    $.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, r.jsxs)($.B, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: G()({ [iu.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sG.n, {
                                                                        size: "custom",
                                                                        width: 20,
                                                                        height: 20,
                                                                        color: "currentColor",
                                                                    }),
                                                                    (0, r.jsxs)("div", {
                                                                        children: [
                                                                            (0, r.jsx)(h.E, {
                                                                                variant: "text-sm/normal",
                                                                                color: "text-default",
                                                                                children: e.username,
                                                                            }),
                                                                            (0, r.jsx)(h.E, {
                                                                                variant: "text-xs/normal",
                                                                                color: "text-muted",
                                                                                className: iu.c1,
                                                                                children: e.email,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            s === e.id
                                                                ? (0, r.jsx)(h.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-feedback-positive",
                                                                      children: (0, r.jsx)(s8.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(s6._, {
                                                                      size: "sm",
                                                                      color: "currentColor",
                                                                  }),
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
                            className: iu.UD,
                            children: (0, r.jsx)(m.$, {
                                icon: ng.u,
                                text: "",
                                size: "sm",
                                variant: "secondary",
                                onClick: c,
                            }),
                        }),
                    ],
                }),
            }),
        });
    };
function ig() {
    let e = (0, z.yK)([ir], () => ir.getPools() ?? []);
    return (0, r.jsxs)($.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: iu.kL,
        children: [
            (0, r.jsx)(ix, {}),
            (0, r.jsx)(x.Ip, { className: iu.Ik, children: e?.map((e) => (0, r.jsx)(ip, { pool: e }, e.id)) }),
        ],
    });
}
var iv = a(582306),
    ij = a(528153),
    ib = a(44862),
    iy = a(888429);
function iE(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function i_() {
    let e = (0, z.bG)([ib.Ay], () => ib.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, z.bG)([ib.Ay], () => ib.Ay.getDevToolCurrentDate()),
        a = (0, z.bG)([ib.Ay], () => ib.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        n = (0, z.bG)([ib.Ay], () => ib.Ay.getMessageGiftIntentLastShownMap()),
        l = (0, z.bG)([ib.Ay], () => ib.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, z.bG)([ib.Ay], () => ib.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, z.bG)([ib.Ay], () => ib.Ay.getProfilePopoutGiftIntentsDismissMap()),
        o = (0, z.bG)([au.A], () => {
            let e =
                au.A.settings.userContent?.recurringDismissibleContentStates[ad.M.GIFT_INTENT_MESSAGE]
                    ?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        d = (e) => {
            tP.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        c = (e) => {
            let t = na.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(x.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: iy.l$,
            children: [
                (0, r.jsx)(h.E, { className: iy.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: iy.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, r.jsx)(g.l, {
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
                                    d(e);
                                },
                            }),
                            (0, r.jsx)(m.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Re-randomize",
                                disabled: null == e,
                                onClick: () => {
                                    tP.h.dispatch({ type: "DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES" });
                                },
                            }),
                            (0, r.jsx)(m.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    d(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: iy.Pm,
                        children: (0, r.jsxs)($.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(h.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(h.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                l.length > 0 &&
                                    (0, r.jsxs)($.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(h.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            l.map((e) => {
                                                let t = ea.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    h.E,
                                                    { variant: "text-xs/normal", children: [a, " (", c(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                s.length > 0 &&
                                    (0, r.jsxs)($.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(h.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            s.map((e) => {
                                                let t = ea.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    h.E,
                                                    { variant: "text-xs/normal", children: [a, " (", c(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: iy.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(iv.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? nu()(t) : void 0,
                                onSelect: (e) => {
                                    let t = nu()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    tP.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    tP.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: iy.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)($.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(h.E, {
                                        variant: "text-md/normal",
                                        children: "Reset DCF gift intent cooldown (global, 24h)",
                                    }),
                                    (0, r.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            (0, ac._N)(ad.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(h.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${iE(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: iy.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)($.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(h.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown (per-user, 14d)",
                                    }),
                                    (0, r.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tP.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(n).length > 0 &&
                                (0, r.jsxs)($.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(n).map((e) => {
                                            let [t, a] = e,
                                                n = ea.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                h.E,
                                                { variant: "text-xs/normal", children: [l, ": ", iE(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: iy.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)($.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(h.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, r.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tP.h.dispatch({
                                                type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            a.length > 0 &&
                                (0, r.jsxs)($.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        a.map((e, t) =>
                                            (0, r.jsx)(h.E, { variant: "text-xs/normal", children: iE(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: iy.Pm,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                ij.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iy.Pm,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: () => {
                                tP.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: iy.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)($.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(h.E, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, r.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tP.h.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(i).length > 0 &&
                                (0, r.jsxs)($.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(i).map((e) => {
                                            let [t, a] = e,
                                                n = ea.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                h.E,
                                                { variant: "text-xs/normal", children: [l, ": ", iE(a)] },
                                                t,
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
var iC = a(460890),
    iS = a(349288),
    iN = a(517461),
    iA = a(214947),
    ik = a(403581),
    iI = a(34188);
let iD = [
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
var iT = a(545406);
let iO = [0, 0.5, 1],
    iR = ["Center", "Inner ring", "Outer ring"],
    iw = iO.length,
    iM = "ILLO_BLUE",
    iL = "ILLO_BLUE_40",
    iP = Array.from({ length: iw }, () => iL),
    iU = Array.from({ length: iw }, () => iM),
    iG = ["1", "0.5", "0"],
    iB = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    iF = [
        { label: "Light", value: ei.NJ8.LIGHT, id: ei.NJ8.LIGHT },
        { label: "Dark", value: ei.NJ8.DARK, id: ei.NJ8.DARK },
        { label: "Darker", value: ei.NJ8.DARKER, id: ei.NJ8.DARKER },
        { label: "Midnight", value: ei.NJ8.MIDNIGHT, id: ei.NJ8.MIDNIGHT },
    ],
    i$ = { [ei.NJ8.MIDNIGHT]: ei.NJ8.DARKER, [ei.NJ8.DARKER]: ei.NJ8.DARK, [ei.NJ8.LIGHT]: ei.NJ8.DARK },
    iV = { [ei.NJ8.LIGHT]: "light", [ei.NJ8.DARK]: "ash", [ei.NJ8.DARKER]: "dark", [ei.NJ8.MIDNIGHT]: "onyx" },
    iW = [
        { id: "friends", icon: iA.$, text: "Friends" },
        { id: "nitro", icon: ik.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: iI.U, text: "Shop", useCustomGradient: !0 },
    ],
    iz = iD.map((e) => ({ label: e, value: e, id: e })),
    iH = Object.fromEntries(
        iD.map((e) => [
            e,
            Object.keys(eV.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eV.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eV.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eV.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: iT.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var iK = a(306327);
function iY(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function iq(e, t) {
    let [a, n, l, s] = eV.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function iJ(e, t) {
    let a = eV.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iQ(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)($.B, {
        gap: 4,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(eG.K, {
                        icon: nh.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: iT.RP, children: t }),
        ],
    });
}
function iX(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                iR.map((e, a) => {
                    let n;
                    return (
                        (n = iF
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = iV[s],
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
    return (0, r.jsxs)($.B, {
        gap: 16,
        children: [
            (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            iR.map((e, t) => (0, r.jsx)(iQ, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iZ(e, t, a) {
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
    return new iK.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function i0(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = eV.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        l = 1 / 0,
        s = (e) => {
            e < l && (l = e);
        };
    for (let a of n) s(e.contrast(iZ(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(iZ(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, n, e, n[a].position, n[a + 1].position);
        s(l);
    }
    return Math.round(100 * l) / 100;
}
function i1(e) {
    let [t, a, n] = eV.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = eV.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eV.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new iK.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function i2() {
    return {
        colors: Array.from({ length: iw }, () => void 0),
        scales: Array.from({ length: iw }, () => void 0),
        opacities: Array.from({ length: iw }, () => void 0),
    };
}
function i3() {
    return {
        [ei.NJ8.LIGHT]: i2(),
        [ei.NJ8.DARK]: { colors: [...iP], scales: [...iU], opacities: [...iG] },
        [ei.NJ8.DARKER]: i2(),
        [ei.NJ8.MIDNIGHT]: i2(),
    };
}
function i8() {
    let e = (0, iC.G9)(),
        [t, a] = o.useState(ei.NJ8.DARK),
        [n, l] = (0, iN.V)("DevToolsGradientContrastPanel_themeStops", i3()),
        s = n ?? i3(),
        [i, d] = o.useState(["", "", ""]),
        [c, u] = o.useState([null, null, null]),
        [p, g] = o.useState(null),
        { images: j, renderPickers: b } = (function () {
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
                        (0, r.jsxs)($.B, {
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
                                              (0, r.jsx)(h.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, r.jsx)(lG.Q, {
                                                  text: "Remove",
                                                  variant: "critical",
                                                  textVariant: "text-sm/medium",
                                                  onClick: () => t(null),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(m.$, {
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
        f = o.useMemo(
            () =>
                Object.fromEntries(
                    iF.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let s = 0; s < iw; s++) {
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
                                        d = i$[d];
                                    }
                                    a.push(i ?? iP[s]), n.push(r ?? iU[s]), l.push(o ?? iG[s]);
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(s, t),
                        ];
                    }),
                ),
            [s],
        ),
        y = f[t],
        E = o.useCallback(
            (e) => {
                l({ ...s, [t]: e(s[t]) });
            },
            [t, l, s],
        ),
        _ = o.useMemo(() => i1({ theme: t, saturation: 1 }), [t]),
        C = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < iw; t++) {
                let a = parseFloat(y.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: y.colors[t], opacity: a, position: iO[t] });
            }
            return e;
        }, [y]),
        S = o.useMemo(() => {
            if (null == C) return null;
            let { text: e, background: t } = _;
            return iR.map((a, n) =>
                iH[y.scales[n]].map((a) => {
                    let l = i0(e, t, iY(C, n, { ...C[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [C, _, y.scales]),
        N = o.useMemo(() => {
            try {
                return iF.map((e) => {
                    let { value: t, label: a } = e,
                        n = f[t],
                        l = [];
                    for (let e = 0; e < iw; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: iO[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = i1(t),
                                s = i0(n, l, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return iD.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of iH[s]) {
                                        if (o === e[t].color) continue;
                                        let s = i0(n, l, iY(e, t, { ...e[t], color: o }));
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
        }, [f]);
    return (0, r.jsx)(x.Ar, {
        className: iT.XG,
        children: (0, r.jsxs)($.B, {
            gap: 24,
            padding: 8,
            className: iT.zr,
            children: [
                (0, r.jsx)(W.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Midnight unless overridden.",
                        }),
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(iS.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(at.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: iF,
                }),
                (0, r.jsxs)($.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: iT.G9,
                            children: iR.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)($.B, {
                                                gap: 0,
                                                className: iT.hi,
                                                children: [
                                                    (0, r.jsx)(h.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lG.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${iJ(y.colors[t], parseFloat(y.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                iJ(y.colors[t], parseFloat(y.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(at.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: y.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = iH[e][0]?.value;
                                                    E((n) => ({
                                                        ...n,
                                                        scales: iY(n.scales, t, e),
                                                        colors: null != a ? iY(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: iz,
                                            }),
                                            (0, r.jsx)(at.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: y.colors[t],
                                                onSelectionChange: (e) =>
                                                    E((a) => ({ ...a, colors: iY(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: S?.[t] ?? iH[y.scales[t]],
                                            }),
                                            (0, r.jsx)(v.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: y.opacities[t],
                                                onChange: (e) => E((a) => ({ ...a, opacities: iY(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(v.k, {
                                                label: `Hex${a && null != c[t] ? ` (dE: ${c[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    d((a) => iY(a, t, e));
                                                    let a = (function (e) {
                                                        if (!iB.test(e)) return null;
                                                        try {
                                                            return new iK.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = iL,
                                                                a = iM,
                                                                n = 1 / 0;
                                                            for (let l of iD)
                                                                for (let s of iH[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eV.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new iK.A("srgb", [
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
                                                        u((a) => iY(a, t, e.deltaE)),
                                                            E((a) => ({
                                                                ...a,
                                                                scales: iY(a.scales, t, e.scale),
                                                                colors: iY(a.colors, t, e.color),
                                                            }));
                                                    } else u((e) => iY(e, t, null));
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
                b(),
                (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(iC.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eF.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)($.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: iT.$8,
                                        style: { background: eV.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iW.map((e, t) =>
                                            (0, r.jsx)(
                                                ex.z9,
                                                {
                                                    route: "",
                                                    selected: p === e.id,
                                                    onClick: () => g(e.id),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: iq(y.colors[0], parseFloat(y.opacities[0])),
                                                        hoverGradientMiddle: iq(
                                                            y.colors[1],
                                                            parseFloat(y.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iq(y.colors[2], parseFloat(y.opacities[2])),
                                                    }),
                                                    ...{ "data-list-item-id": `devtools-preview-${t}` },
                                                    children:
                                                        "useCustomGradient" in e &&
                                                        j.buttonBackground?.src != null &&
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
                                                                src: j.buttonBackground.src,
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
                    (0, r.jsxs)($.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Results" }),
                            N.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          $.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(h.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(F.w, {
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
                                                      (0, r.jsxs)($.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(h.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(h.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      iR[n.suggestion.stopIndex],
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
                                                      (0, r.jsx)(h.E, {
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
                (0, r.jsx)(iX, { allResolvedStops: f }),
            ],
        }),
    });
}
var i6 = a(820739),
    i5 = a(230135),
    i9 = a(45780),
    i4 = a(868652),
    i7 = a(859241);
let re = [
        ad.M.GUILD_POWERUP_PERKS_COACHMARK,
        ad.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        ad.M.GUILD_POWERUP_NOTIFICATION,
        ad.M.GUILD_TAG_AVAILABLE_COACHMARK,
        ad.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    rt = [
        ad.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        ad.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        ad.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        ad.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        ad.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    ra = [ad.V.ADOPT_CLAN_IDENTITY_NOTICE],
    rn = [
        ad.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        ad.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        ad.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function rl(e) {
    switch (e) {
        case ad.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case ad.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case ad.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case ad.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case ad.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case ad.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var rs = a(861671);
async function ri(e, t, a) {
    await n2.Bo.patch({
        url: ei.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : nu()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, i6.VU)(e),
        (0, i4.Xd)(e, !0);
}
async function rr(e) {
    await n2.Bo.post({ url: ei.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function ro() {
    let e = (0, z.bG)([a5.A], () => a5.A.getGuildId()),
        t = (0, z.bG)([a6.A], () => a6.A.getGuild(e)?.name),
        a = (0, z.yK)([au.A], () => [...rt, ...ra].filter((t) => null != e && (0, i9.zs)(t, e))),
        n = (0, z.yK)([i7.A], () => (null != e ? (i7.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(x.Ip, {
            className: rs.kL,
            children: [
                (0, r.jsx)("div", {
                    className: rs.uW,
                    children: (0, r.jsx)(W.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: rs.uW,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "eyebrow",
                            className: rs.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, i4.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rs.uW,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", className: rs.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(m.$, { variant: "primary", text: "Reset", onClick: i5.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rs.uW,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        ri(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        ri(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rs.uW,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", className: rs.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)($.B, {
                            gap: 16,
                            children: re.map((e) => (0, r.jsx)(l_, { className: rs.z6, content: ad.M[e] }, ad.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: rs.uW,
                    children: (0, r.jsx)(d.n, {
                        label: "Reset Guild Level DCs",
                        children: rt.map((t) =>
                            (0, r.jsx)(
                                c.d,
                                {
                                    label: rl(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, i9._$)(t, e, !1)
                                            : ((0, ac._N)(ad.M.GUILD_POWERUP_NOTIFICATION), (0, i9.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: rs.uW,
                    children: (0, r.jsx)(d.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: ra.map((t) =>
                            (0, r.jsx)(
                                c.d,
                                {
                                    label: rl(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, i9._$)(t, e, !1)
                                            : ((0, ac._N)(ad.M.GUILD_POWERUP_NOTIFICATION), (0, i9.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: rs.uW,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "eyebrow",
                            className: rs.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        rn.map((e) => (0, r.jsx)(l_, { className: rs.z6, content: ad.M[e] }, ad.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rs.uW,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "eyebrow",
                            className: rs.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                rr(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(m.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, sO.Wp)(!1);
                    },
                }),
            ],
        });
}
var rd = a(450510),
    rc = a(320681);
function ru(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, z.yK)([rd.HP], () => [rd.HP.hasHotspot(t, !0), rd.HP.getHotspotOverride(t)]);
    return (0, r.jsx)(g.l, {
        label: t,
        errorMessage: a ? "Inactive" : void 0,
        successMessage: a ? "Active" : void 0,
        value: n,
        options: [
            { id: "none", value: void 0, label: "No Override" },
            { id: "active", value: !0, label: "Force Active" },
            { id: "inactive", value: !1, label: "Force Inactive" },
        ],
        onSelectionChange: (e) => (null != e ? (0, rd.Kl)(t, e) : (0, rd.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function rm() {
    return (0, r.jsx)(x.Ip, {
        className: tF.nd,
        children: (0, r.jsx)(d.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: rc.IN,
            children: (0, r.jsx)($.B, {
                gap: 20,
                children: Object.keys(rd._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(ru, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var rh = a(919523),
    rx = a(855522),
    rp = a(37646),
    rg = a(773669);
function rv() {
    let e = (0, z.bG)([rg.default], () => rg.default.locale),
        [t, a] = o.useState(),
        n = (0, rh.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => a4.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(aW.Ay, {
                children: [
                    (0, r.jsx)(aW.Ay.Icon, { icon: rp.U, tooltip: "Locale" }),
                    (0, r.jsx)(aW.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(nR, {
                children: [
                    (0, r.jsx)(nw, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nw, { name: "App", children: e }),
                    (0, r.jsx)(nw, { name: "System", children: a4.systemLocale }),
                    (0, r.jsx)(nw, { name: "@discord/intl", children: a4.intl.currentLocale }),
                    (0, r.jsx)(nw, { name: "common i18n", children: rx.A.getLocale() }),
                    (0, r.jsx)(nw, { name: "Moment", children: nu().locale() }),
                ],
            }),
            (0, r.jsxs)(aW.Ay, {
                children: [
                    (0, r.jsx)(aW.Ay.Icon, { icon: rp.U, tooltip: "Messages" }),
                    (0, r.jsx)(aW.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(nR, {
                children: (0, r.jsx)(nw, { name: "Unique Rendered Main Messages", children: Object.keys(a4.t).length }),
            }),
            (0, r.jsx)("div", {
                style: { margin: 16 },
                children: (0, r.jsx)(v.k, {
                    onChange: function (e) {
                        a(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, r.jsxs)(nR, {
                children: [
                    (0, r.jsx)(nw, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nw, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(az.A, { data: l?.(e) }),
        ],
    });
}
var rj = a(434404);
function rb() {
    let { node: e } = (0, ee.Ay)(rj.F, "");
    return (0, r.jsx)(x.Ip, {
        className: tF.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(Z.A, { node: e }, e.key),
        }),
    });
}
var rf = a(663066),
    ry = a(80556),
    rE = a(907135),
    r_ = a(665095),
    rC = a(87404);
function rS() {
    return (0, r.jsx)(x.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: sy.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: sy.uW,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: sy.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, rf.B8)(() => (0, r.jsx)(r_.A, {}), { layerKey: rC._s, Layer: ry.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sy.uW,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: sy.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, rf.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rE.A, { onClose: t });
                                        },
                                        { layerKey: rC._s, Layer: ry.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sy.uW,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: sy.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    rf.xr.setState({ fullScreenLayers: [] });
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
var rN = a(687813),
    rA = a(604121);
let rk = {
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
        a.e("39476").then(a.t.bind(a, 367327, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-action.lottiejson":
        () => a.e("27568").then(a.t.bind(a, 801952, 19)),
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
        a.e("96874").then(a.t.bind(a, 281073, 19)),
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
function rI(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rN.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rN.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rD() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)($.B, {
            gap: 24,
            children: [
                (0, r.jsx)(at.Z, {
                    options: Object.keys(rk).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(v.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, r.jsx)(v.k, { value: l.toString(), onChange: (e) => s(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(m.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = rk[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rI).then(eq().cloneDeep)
                                            : await t().then((e) => eq().cloneDeep(e.default)),
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
                            rA.a,
                            {
                                importData: () => {
                                    let t = rk[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rI).then(eq().cloneDeep)
                                        : t().then((e) => eq().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rT = a(442433),
    rO = a(395671);
let rR = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 562733));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new rO.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rT.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("9004"), a.e("19690"), a.e("45322"), a.e("10758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(a6.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("43683"),
                    a.e("76486"),
                    a.e("88014"),
                    a.e("76821"),
                    a.e("67696"),
                    a.e("90629"),
                    a.e("8886"),
                    a.e("6212"),
                    a.e("53637"),
                    a.e("39655"),
                    a.e("11262"),
                    a.e("37520"),
                    a.e("44125"),
                    a.e("17738"),
                    a.e("61312"),
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
                    a.e("54210"),
                    a.e("73099"),
                    a.e("47199"),
                    a.e("78381"),
                    a.e("8794"),
                    a.e("98824"),
                    a.e("78230"),
                    a.e("11002"),
                    a.e("47170"),
                    a.e("33174"),
                    a.e("84923"),
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
                    a.e("82314"),
                    a.e("80339"),
                    a.e("38977"),
                    a.e("20802"),
                    a.e("91474"),
                    a.e("17566"),
                    a.e("49681"),
                    a.e("96382"),
                    a.e("22687"),
                    a.e("63202"),
                    a.e("82596"),
                    a.e("9004"),
                    a.e("49145"),
                    a.e("30997"),
                    a.e("28136"),
                    a.e("16084"),
                    a.e("43116"),
                    a.e("73669"),
                    a.e("36624"),
                    a.e("61058"),
                    a.e("50342"),
                    a.e("33097"),
                    a.e("22547"),
                    a.e("10262"),
                    a.e("46313"),
                    a.e("87995"),
                    a.e("91643"),
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
                    a.e("66147"),
                    a.e("74337"),
                    a.e("52823"),
                    a.e("56967"),
                    a.e("47011"),
                    a.e("31203"),
                    a.e("66913"),
                    a.e("71719"),
                    a.e("19690"),
                    a.e("93767"),
                    a.e("13848"),
                    a.e("39214"),
                    a.e("99108"),
                    a.e("88307"),
                    a.e("14878"),
                    a.e("26508"),
                    a.e("61347"),
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
                    a.e("14863"),
                    a.e("84951"),
                    a.e("60165"),
                    a.e("71167"),
                    a.e("12390"),
                    a.e("13446"),
                    a.e("61309"),
                    a.e("94529"),
                    a.e("39799"),
                    a.e("21300"),
                    a.e("66016"),
                    a.e("17699"),
                    a.e("57032"),
                    a.e("72238"),
                    a.e("45322"),
                    a.e("94832"),
                    a.e("26386"),
                    a.e("65338"),
                    a.e("52191"),
                    a.e("14656"),
                    a.e("39855"),
                    a.e("37038"),
                    a.e("6435"),
                    a.e("32607"),
                    a.e("65011"),
                ]).then(a.bind(a, 860417)),
                t = Object.values(a6.A.getGuilds())[0];
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
            return (t) => (0, r.jsx)(e, { ...t, onClose: rT.Z_ });
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
                        console.log("Leave role clicked"), (0, rT.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e("86456"), a.e("89346")]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = ea.default.getCurrentUser(),
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
                t = Object.values(a6.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, rT.Z_)();
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
                    a.e("85802"),
                    a.e("65200"),
                    a.e("26250"),
                    a.e("51212"),
                    a.e("84615"),
                ]).then(a.bind(a, 612826)),
                t = a6.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(ay.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = ay.A.getAllThreadsForParent(t.id);
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
                t = Object.values(a6.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rT.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("46757"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(a6.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rT.Z_ });
        },
    },
    rw = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("83518"), a.e("55197"), a.e("50974")]).then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rM() {
    let e = o.useMemo(
            () =>
                Object.keys(rR)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rw)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rT.L3)(e, rR[a]);
            },
            [a],
        ),
        d = null != l ? rw[l] : null;
    return (0, r.jsx)(x.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)($.B, {
            className: sy.l$,
            gap: 16,
            children: [
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", children: "Context Menus" }),
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(at.Z, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: a,
                            onSelectionChange: n,
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(m.$, { variant: "primary", text: "Open", disabled: null == a, onClick: i }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)($.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(at.Z, {
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
                        fallback: (0, r.jsx)(h.E, {
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
var rL = a(253506),
    rP = a(665260),
    rU = a(97808),
    rG = a(778712),
    rB = a(308528),
    rF = a(493336),
    r$ = a(571694),
    rV = a(963852),
    rW = a(704844),
    rz = a(309010),
    rH = a(567761),
    rK = a(716371),
    rY = a(825801);
let rq = [
    { id: "USER_JOIN", value: ei.lAJ.USER_JOIN, label: "User Join" },
    { id: "CHANNEL_PINNED_MESSAGE", value: ei.lAJ.CHANNEL_PINNED_MESSAGE, label: "Channel Pinned Message" },
    { id: "GUILD_BOOST", value: ei.lAJ.GUILD_BOOST, label: "Guild Boost" },
    { id: "GUILD_BOOST_TIER_1", value: ei.lAJ.GUILD_BOOST_TIER_1, label: "Guild Boost Tier 1" },
    { id: "GUILD_BOOST_TIER_2", value: ei.lAJ.GUILD_BOOST_TIER_2, label: "Guild Boost Tier 2" },
    { id: "GUILD_BOOST_TIER_3", value: ei.lAJ.GUILD_BOOST_TIER_3, label: "Guild Boost Tier 3" },
    { id: "THREAD_CREATED", value: ei.lAJ.THREAD_CREATED, label: "Thread Created" },
    { id: "CHANNEL_FOLLOW_ADD", value: ei.lAJ.CHANNEL_FOLLOW_ADD, label: "Channel Follow Add" },
    { id: "STAGE_START", value: ei.lAJ.STAGE_START, label: "Stage Start" },
    { id: "STAGE_END", value: ei.lAJ.STAGE_END, label: "Stage End" },
    { id: "STAGE_SPEAKER", value: ei.lAJ.STAGE_SPEAKER, label: "Stage Speaker" },
    { id: "STAGE_RAISE_HAND", value: ei.lAJ.STAGE_RAISE_HAND, label: "Stage Raise Hand" },
    { id: "STAGE_TOPIC", value: ei.lAJ.STAGE_TOPIC, label: "Stage Topic" },
    { id: "VOICE_SESSION", value: ei.lAJ.VOICE_SESSION, label: "Voice Session" },
    { id: "FRIEND_REQUEST_ACCEPTED", value: ei.lAJ.FRIEND_REQUEST_ACCEPTED, label: "Friend Request Accepted" },
    { id: "GUILD_DISCOVERY_DISQUALIFIED", value: ei.lAJ.GUILD_DISCOVERY_DISQUALIFIED, label: "Discovery Disqualified" },
    { id: "GUILD_DISCOVERY_REQUALIFIED", value: ei.lAJ.GUILD_DISCOVERY_REQUALIFIED, label: "Discovery Requalified" },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",
        value: ei.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
        label: "Discovery Grace Initial Warning",
    },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",
        value: ei.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
        label: "Discovery Grace Final Warning",
    },
    { id: "RECIPIENT_ADD", value: ei.lAJ.RECIPIENT_ADD, label: "Recipient Add" },
    { id: "RECIPIENT_REMOVE", value: ei.lAJ.RECIPIENT_REMOVE, label: "Recipient Remove" },
    { id: "CALL", value: ei.lAJ.CALL, label: "Call" },
];
function rJ() {
    let [e, t] = o.useState(ei.lAJ.USER_JOIN),
        a = (0, z.bG)([rz.A], () => rz.A.getChannelId(), []),
        n = o.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, rV.Ay)({ channelId: a, content: "", type: e, state: ei.cmJ.SENT });
            rF.A.receiveMessage(a, t, !1);
        }, [a, e]),
        l = o.useCallback(() => {
            if (null != a)
                for (let { value: e } of rq) {
                    let t = (0, rV.Ay)({ channelId: a, content: "", type: e, state: ei.cmJ.SENT });
                    rF.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, r.jsxs)("div", {
        className: rY.gs,
        children: [
            (0, r.jsx)(at.Z, {
                label: "Inject System Message",
                selectionMode: "single",
                options: rq,
                placeholder: "Select type",
                value: e,
                onSelectionChange: t,
            }),
            (0, r.jsx)(m.$, {
                variant: "primary",
                size: "sm",
                text: "Inject",
                onClick: n,
                disabled: null == a || null == e,
            }),
            (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: "Inject All", onClick: l, disabled: null == a }),
        ],
    });
}
function rQ() {
    let e = (0, z.yK)([rH.default], () => rH.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, z.cf)([ay.A, ea.default, aE.A], () => ({
            selectedChannel: ay.A.getChannel(t),
            options: e.map((e) => {
                let t = ay.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, af.m1)(t, ea.default, aE.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rU.eu, { src: (0, r$.Y)(t), "aria-hidden": !0, size: rG._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rP.PQ)(n.recipientFlags ?? 0, rL.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rW.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, rP.Lt)(n.recipientFlags ?? 0, rL.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rY.gs,
        children: [
            (0, r.jsx)(at.Z, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: l,
                placeholder: "Select DM",
                value: t,
                onSelectionChange: a,
            }),
            (0, r.jsx)(m.$, {
                variant: "primary",
                size: "sm",
                text: i ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: s,
                disabled: null == t,
            }),
        ],
    });
}
function rX() {
    let e = o.useCallback(() => {
        rB.A.openPrivateChannel({ recipientIds: [rK.K] });
    }, []);
    return (0, r.jsx)(m.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rZ() {
    let e = (0, z.bG)([aV.Ay], () => aV.Ay.allByCategory(aV.xW.MESSAGING), [], z.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(c.d, { label: n, description: t, checked: a, onChange: (e) => sL(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: G()(tF.nd, rY.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rY.yF }),
            (0, r.jsx)(rJ, {}),
            (0, r.jsx)("div", { className: rY.yF }),
            (0, r.jsx)(rQ, {}),
            (0, r.jsx)("div", { className: rY.yF }),
            (0, r.jsx)(rX, {}),
        ],
    });
}
var r0 = a(459838),
    r1 = a(772707),
    r2 = a(150934),
    r3 = a(598653),
    r8 = a(166403),
    r6 = a(625494),
    r5 = a(204925),
    r9 = a(325278);
let r4 = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: a4.intl.string(a4.t.ZLRYGU),
                confirmButtonText: a4.intl.string(a4.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: a4.intl.string(a4.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: a4.intl.string(a4.t["13ofGu"]),
                impression: { impressionName: s5.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("54398"), a.e("34260"), a.e("18467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: nr.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("20969"), a.e("82758"), a.e("80022"), a.e("10136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: r5.w_.NSFW_SERVER });
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
            a.e("97199"),
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
        let { default: e } = await Promise.all([a.e("56643"), a.e("82662"), a.e("89545"), a.e("11493")]).then(
            a.bind(a, 914724),
        );
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("96531").then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: r0.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(r1.k, {
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
            { PremiumTypes: n } = await Promise.resolve().then(a.bind(a, 788868)),
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
                (t.default.getDevicesForPlatform = (e) => (e === ei.fg2.PLAYSTATION ? s : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== ei.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === ei.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                    (0, r.jsx)(e, { ...a, channel: l, platform: ei.fg2.PLAYSTATION })
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
            a.e("66434"),
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
            } = await Promise.all([a.e("4823"), a.e("88017")]).then(a.bind(a, 844616)),
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
                b = [
                    { value: i.DURATION_60_SEC, label: o(i.DURATION_60_SEC) },
                    { value: i.DURATION_5_MIN, label: o(i.DURATION_5_MIN) },
                    { value: i.DURATION_10_MIN, label: o(i.DURATION_10_MIN) },
                    { value: i.DURATION_1_HOUR, label: o(i.DURATION_1_HOUR) },
                    { value: i.DURATION_1_DAY, label: o(i.DURATION_1_DAY) },
                    { value: i.DURATION_1_WEEK, label: o(i.DURATION_1_WEEK) },
                ],
                f = d.useCallback(async () => {
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
                                children: b.map((t) =>
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
                            (0, r.jsx)(e, { variant: "primary", text: "Timeout User", onClick: f, disabled: p }),
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
            } = await Promise.all([a.e("4823"), a.e("88017")]).then(a.bind(a, 844616)),
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
        let { default: e } = await Promise.all([a.e("1378"), a.e("52823"), a.e("82721"), a.e("74832")]).then(
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
            a.e("62279"),
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
            { Text: t, Heading: n } = await Promise.all([a.e("4823"), a.e("88017")]).then(a.bind(a, 844616)),
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
                                (0, r.jsx)(r2.S, {
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
                                (0, r.jsx)(r2.S, {
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
                channel_type: ei.rbe.GUILD_VOICE,
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
            t = { ownerId: "987654321", guildId: "123456789", channelId: "123456789", streamType: r9.U4.GUILD },
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
        let e = ea.default.getUser("12345"),
            t = ea.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("31385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = ea.default.getUser("12345"),
            t = ea.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("84811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = ea.default.getUser("12345"),
            t = ea.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("17219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = ea.default.getUser("12345"),
            t = ea.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("43139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([a.e("40859"), a.e("88905"), a.e("48370"), a.e("72875")]).then(
            a.bind(a, 320742),
        );
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("44616"), a.e("85579")]).then(a.bind(a, 785606)),
            t = r8.A.getPremiumGroupSubscription();
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
            t = Object.keys(a6.A.getGuilds())[0];
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
            t = Object.values(a6.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([
            a.e("61312"),
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
            a.e("24292"),
            a.e("86283"),
            a.e("2238"),
            a.e("48745"),
            a.e("91643"),
            a.e("74337"),
            a.e("7265"),
            a.e("86454"),
            a.e("25505"),
            a.e("83295"),
            a.e("55540"),
            a.e("79023"),
            a.e("6534"),
        ]).then(a.bind(a, 57375));
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
            a.e("97199"),
            a.e("97804"),
            a.e("56856"),
            a.e("82721"),
            a.e("19623"),
            a.e("99574"),
            a.e("57794"),
            a.e("29574"),
        ]).then(a.bind(a, 655045));
        return (t) => (0, r.jsx)(e, { ...t });
    },
};
function r7() {
    let e = o.useMemo(
            () =>
                Object.keys(r4)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(x.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: sy.l$,
            children: [
                (0, r.jsx)("section", {
                    className: sy.uW,
                    children: (0, r.jsxs)($.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(at.Z, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                onSelectionChange: a,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, e$.openModalLazy)(r4[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: sy.uW,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: sy.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, r3.o)(!0), r6._.dispatch(ei.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var oe = a(933832),
    ot = a(472229),
    oa = a(945960),
    on = a(669316),
    ol = a(354670),
    os = a(428262);
let oi = async () => {
        try {
            let { body: e } = await n2.Bo.get({ url: ei.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    or = async () => {
        try {
            let { body: e } = await n2.Bo.get({ url: ei.Rsh.USER_OFFERS, rejectWithError: !0 });
            return { trial: e.trial, discount: e.discount.map(on.A.createFromServer) };
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    oo = async (e, t) => {
        try {
            await n2.Bo.post({ url: ei.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, oa._D)();
        }
    },
    od = async (e, t) => {
        try {
            await n2.Bo.del({ url: ei.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, oa._D)();
        }
    },
    oc = async () => {
        try {
            await n2.Bo.del({ url: ei.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await ol.A.forceReset(), await (0, oa._D)();
        }
    },
    ou = async (e) => {
        await n2.Bo.post({ url: ei.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function om(e) {
    let { acked: t, expired: a, inStore: n, onClick: l, secondaryBadge: s } = e,
        i = "Created";
    return (
        a ? (i = "Expired") : t ? (i = "Acked") : n && (i = "Active"),
        (0, r.jsxs)("div", {
            className: sy.fC,
            children: [
                (0, r.jsx)(B.D, {
                    onClick: l,
                    className: G()(sy.qS, sy.vk, { [sy.vu]: n, [sy.R1]: t, [sy._7]: a }),
                    children: (0, r.jsxs)(h.E, {
                        variant: "eyebrow",
                        color: t ? void 0 : "always-white",
                        children: [i, n ? " *" : ""],
                    }),
                }),
                null != s &&
                    s.active &&
                    (0, r.jsx)("div", {
                        className: G()(sy.qS, sy.k3),
                        children: (0, r.jsx)(h.E, { variant: "eyebrow", color: "always-white", children: s.label }),
                    }),
            ],
        })
    );
}
function oh(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, m] = o.useState(!1),
        [x, p] = o.useState(!1);
    o.useEffect(() => {
        u && p(!0);
        let e = setTimeout(() => {
            p(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: g, expires_at: v, redeemed_at: j, trial_id: b, subscription_trial: f, referrer: y } = t,
        E =
            a.find((e) => {
                let { value: t } = e;
                return t === b;
            })?.label ?? "Unknown";
    null != y && (E = `${E} from @${y.username}`);
    let _ = null != v,
        C = null != v && new Date(v).getTime() < Date.now(),
        S = f?.sku_id === sx.pe.TIER_0,
        N = async () => {
            m(!0), _ ? await A({ expiresAt: null }) : await (0, oa.u1)(t), n(), m(!1);
        },
        A = async (e) => {
            m(!0);
            try {
                await n2.Bo.patch({
                    url: ei.Rsh.UPDATE_USER_OFFER(g, "trial"),
                    body: {
                        ...("expiresAt" in e && { expires_at: e.expiresAt }),
                        ...("referrerId" in e && { referrer_id: e.referrerId }),
                    },
                    rejectWithError: !0,
                });
            } finally {
                n(), m(!1);
            }
        };
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
            className: G()(sy.Nr, S ? sy.Qf : sy.C1),
            children: [
                (0, r.jsx)("div", {
                    className: G()(sy.nM, sy.S7),
                    children: (0, r.jsx)(W.D, { variant: "heading-lg/semibold", color: "always-white", children: E }),
                }),
                (0, r.jsxs)(B.D, {
                    className: G()(sy.nM, sy.QB),
                    onClick: () => {
                        (0, ny.C)(g, () => i(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", g] }),
                        s
                            ? (0, r.jsx)(oe.A, { size: "md", color: "currentColor", className: sy.Kk })
                            : (0, r.jsx)(nh.T, { size: "xs", color: "currentColor", className: sy.Kk }),
                    ],
                }),
                (0, r.jsxs)(B.D, {
                    className: G()(sy.nM, sy.QB),
                    onClick: () => {
                        (0, ny.C)(b, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", b] }),
                        d
                            ? (0, r.jsx)(oe.A, { size: "md", color: "currentColor", className: sy.Kk })
                            : (0, r.jsx)(nh.T, { size: "xs", color: "currentColor", className: sy.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: sy.nM,
                    children: (0, r.jsxs)(h.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, os.re)({
                                intervalType: f?.interval ?? sx.WT.MONTH,
                                intervalCount: f?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: sy.nM,
                    children: [
                        (0, r.jsxs)(h.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, ot.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nE.Xm)(v),
                            onChange: (e) => {
                                A({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sy.nM,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", color: "always-white", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: y?.id ?? "",
                            onChange: (e) => A({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsx)(om, {
                    acked: _,
                    expired: C,
                    inStore: l,
                    onClick: N,
                    secondaryBadge: { active: null != j, label: "Redeemed" },
                }),
                (0, r.jsx)(B.D, {
                    onClick: async () => {
                        m(!0), await od(g, "trial"), n(), m(!1);
                    },
                    children: (0, r.jsx)(ng.u, { size: "md", color: "currentColor", className: G()(sy.Kk, sy.IT) }),
                }),
                (0, r.jsx)("div", { className: G()(sy.g4, { [sy.VP]: u || x }), children: (0, r.jsx)(tn.y, {}) }),
            ],
        })
    );
}
function ox(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, m] = o.useState(!1),
        [x, p] = o.useState(!1);
    o.useEffect(() => {
        u && p(!0);
        let e = setTimeout(() => {
            p(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: g, expiresAt: v, discountId: j, discount: b } = t,
        f =
            a.find((e) => {
                let { value: t } = e;
                return t === j;
            })?.label ?? "Unknown",
        y = null != v,
        E = t.hasExpired(),
        _ = t.isApplied(),
        C = async () => {
            m(!0), y ? await S({ expiresAt: null }) : await (0, oa.u1)(void 0, t), n(), m(!1);
        },
        S = async (e) => {
            let { expiresAt: t } = e;
            m(!0);
            try {
                await n2.Bo.patch({
                    url: ei.Rsh.UPDATE_USER_OFFER(g, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                n(), m(!1);
            }
        };
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
            className: G()(sy.Nr, sy.id),
            children: [
                (0, r.jsx)("div", {
                    className: G()(sy.nM, sy.S7),
                    children: (0, r.jsx)(W.D, { variant: "heading-lg/semibold", color: "text-default", children: f }),
                }),
                (0, r.jsxs)(B.D, {
                    className: G()(sy.nM, sy.QB),
                    onClick: () => {
                        (0, ny.C)(g, () => i(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", g] }),
                        s
                            ? (0, r.jsx)(oe.A, { size: "md", color: "currentColor", className: G()(sy.Kk, sy.mK) })
                            : (0, r.jsx)(nh.T, { size: "xs", color: "currentColor", className: sy.Kk }),
                    ],
                }),
                (0, r.jsxs)(B.D, {
                    className: G()(sy.nM, sy.QB),
                    onClick: () => {
                        (0, ny.C)(j, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", j] }),
                        d
                            ? (0, r.jsx)(oe.A, { size: "md", color: "currentColor", className: G()(sy.Kk, sy.mK) })
                            : (0, r.jsx)(nh.T, { size: "xs", color: "currentColor", className: sy.Kk }),
                    ],
                }),
                b?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(h.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [b.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: sy.nM,
                    children: [
                        (0, r.jsxs)(h.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, ot.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nE.Xm)(v?.toISOString()),
                            onChange: (e) =>
                                S({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsx)(om, {
                    acked: y,
                    expired: E,
                    inStore: l,
                    onClick: C,
                    secondaryBadge: { active: _, label: "Applied" },
                }),
                (0, r.jsx)(B.D, {
                    className: sy.aR,
                    onClick: async () => {
                        m(!0), await od(g, "discount"), n(), m(!1);
                    },
                    children: (0, r.jsx)(ng.u, { size: "md", color: "currentColor", className: G()(sy.Kk, sy.fy) }),
                }),
                (0, r.jsx)("div", { className: G()(sy.g4, { [sy.VP]: u || x }), children: (0, r.jsx)(tn.y, {}) }),
            ],
        })
    );
}
function op() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
        [i, d] = o.useState(),
        [c, u] = o.useState(!0),
        { discountOffers: p, trialOffers: v } = (0, z.cf)([ol.A], () => ({
            discountOffers: Object.values(ol.A.getState().userDiscountOffers).sort((e, t) => e.id.localeCompare(t.id)),
            trialOffers: Object.values(ol.A.getState().userTrialOffers).sort((e, t) => e.id.localeCompare(t.id)),
        })),
        [j, b] = o.useState([]),
        [f, y] = o.useState([]),
        [E, _] = o.useState(10080),
        [C, S] = o.useState([]),
        N = o.useMemo(() => new Set([...v, ...p].map((e) => e.id)), [v, p]),
        A = o.useMemo(() => [...v, ...j.filter((e) => !N.has(e.id))], [v, j, N]),
        k = o.useMemo(() => [...p, ...f.filter((e) => !N.has(e.id))], [p, f, N]),
        { entitlements: I, deleteFractionalPremium: D, refreshEntitlementList: T } = sb();
    o.useEffect(() => {
        T();
    }, [T]),
        o.useEffect(() => {
            S(I.filter((e) => e.sourceType === ei.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [I]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || c) &&
                oi().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && s(a[0].value), null == i && d(r[0].value);
                });
        }, [e, a, l, i, c]),
        o.useEffect(() => {
            c &&
                (u(!1),
                ol.A.forceReset(),
                (0, oa._D)(),
                or().then((e) => {
                    b(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        y(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [c]);
    let O = async () => {
            null != l && (await oo(l, "trial"), u(!0));
        },
        R = async () => {
            null != i && (await oo(i, "discount"), u(!0));
        },
        w = async () => {
            await oc(), u(!0);
        },
        M = async () => {
            let e = new Date(Date.now() + 60 * E * 1e3).toISOString();
            await ou(e), T();
        };
    return (0, r.jsx)(x.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: sy.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: sy.uW,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: sy.Uo,
                            children: [
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: w,
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, ac.xB)(ad.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, ac._N)(ad.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Refresh DevTools",
                                    onClick: () => u(!0),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: sy.uW,
                    children: (0, r.jsxs)("div", {
                        className: sy.bd,
                        children: [
                            (0, r.jsx)(g.l, {
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
                            (0, r.jsx)(m.$, { variant: "primary", text: "Create", onClick: O }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: sy.uW,
                    children: (0, r.jsxs)("div", {
                        className: sy.bd,
                        children: [
                            (0, r.jsx)(g.l, {
                                label: "Create a Discount Offer",
                                options: a,
                                formatOption: (e) => {
                                    let { label: t, value: a } = e;
                                    return { label: t, value: a, id: a };
                                },
                                value: i,
                                placeholder: "Discount Type",
                                onSelectionChange: d,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(m.$, { variant: "primary", text: "Create", onClick: R }),
                        ],
                    }),
                }),
                A.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: sy.uW,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "* indicates the offer is currently in UserOfferStore.",
                            }),
                            A.map((t) =>
                                (0, r.jsx)(
                                    oh,
                                    { offer: t, offerOptions: e, forceRefetch: () => u(!0), inStore: N.has(t.id) },
                                    t.id,
                                ),
                            ),
                        ],
                    }),
                k.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: sy.uW,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "* indicates the offer is currently in UserOfferStore.",
                            }),
                            k.map((e) =>
                                (0, r.jsx)(
                                    ox,
                                    { offer: e, offerOptions: a, forceRefetch: () => u(!0), inStore: N.has(e.id) },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: sy.uW,
                    children: (0, r.jsxs)("div", {
                        className: sy.bd,
                        children: [
                            (0, r.jsx)(g.l, {
                                label: "Create a Reverse Trial Entitlement",
                                options: [
                                    { id: "5min", label: "5 minutes", value: 5 },
                                    { id: "1hour", label: "1 hour", value: 60 },
                                    { id: "1day", label: "1 day", value: 1440 },
                                    { id: "1week", label: "1 week", value: 10080 },
                                ],
                                value: E,
                                placeholder: "Reverse Trial Length",
                                onSelectionChange: _,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(m.$, { variant: "primary", text: "Create", onClick: M }),
                        ],
                    }),
                }),
                C.length > 0 &&
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(h.E, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, r.jsx)("div", {
                                children: C.map((e) =>
                                    (0, r.jsx)(s_, { entitlement: e, active: !0, onDelete: () => D(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var og = a(528265),
    ov = a(26279),
    oj = a(142798);
let ob = {
        [ov.Re.UNSPECIFIED]: "Unspecified",
        [ov.Re.DRAFT]: "Draft",
        [ov.Re.SIGNED]: "Signed",
        [ov.Re.DISCARDED]: "Discarded",
        [ov.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
    },
    of = { [ov.BM.UNSPECIFIED]: "Unspecified", [ov.BM.ONE_TIME]: "One Time", [ov.BM.SUBSCRIPTION]: "Subscription" };
function oy() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(!0),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            n(!0), s(null);
            try {
                let e = await n2.Bo.get({ url: `${ei.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
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
        (0, r.jsx)(x.Ip, {
            className: tF.nd,
            children: (0, r.jsxs)("div", {
                className: sy.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: sy.dL,
                        style: { marginBottom: "16px" },
                        children: [
                            (0, r.jsxs)(h.E, { variant: "text-lg/bold", children: ["Orders (last ", 5, ")"] }),
                            (0, r.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Refresh",
                                onClick: i,
                                loading: a,
                            }),
                        ],
                    }),
                    null != l && (0, r.jsx)(F.w, { type: "critical", children: l }),
                    !a &&
                        null != e &&
                        0 === e.length &&
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "No orders found.",
                        }),
                    null != e && e.map((e) => (0, r.jsx)(oE, { order: e }, e.id)),
                ],
            }),
        })
    );
}
function oE(e) {
    let { order: t } = e,
        [a, n] = o.useState(!1),
        [l, s] = o.useState(!1),
        i = ob[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${i}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            navigator.clipboard.writeText(t.id), s(!0), setTimeout(() => s(!1), 2e3);
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: sy.Nr,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(og.C, {
                items: d,
                label: "Order info",
                layout: "inline",
                selectionMode: "none",
                selectionBehavior: "replace",
                disabledKeys: new Set(),
            }),
            (0, r.jsxs)($.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  $.B,
                                  {
                                      direction: "horizontal",
                                      gap: 12,
                                      children: [
                                          (0, r.jsxs)(h.E, {
                                              variant: "text-xs/normal",
                                              children: ["SKU: ", e.sku_id],
                                          }),
                                          (0, r.jsxs)(h.E, {
                                              variant: "text-xs/normal",
                                              children: ["Qty: ", e.quantity],
                                          }),
                                          (0, r.jsxs)(h.E, {
                                              variant: "text-xs/normal",
                                              children: [
                                                  "Type: ",
                                                  of[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
                                              ],
                                          }),
                                          null != e.subscription_plan_id &&
                                              (0, r.jsxs)(h.E, {
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
                    className: oj.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(B.D, {
                            onClick: () => n((e) => !e),
                            className: oj.Eh,
                            children: [
                                (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(sm.A, { direction: a ? sm.A.Directions.UP : sm.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: oj.j3,
                                children: [
                                    (0, r.jsxs)("li", {
                                        children: [
                                            (0, r.jsx)(h.E, {
                                                variant: "text-xs/semibold",
                                                children: "payment_gateway",
                                            }),
                                            (0, r.jsx)(h.E, {
                                                variant: "text-xs/normal",
                                                children: String(t.billing_facet.payment_gateway),
                                            }),
                                        ],
                                    }),
                                    null != t.billing_facet.payment_source_id &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(h.E, {
                                                    variant: "text-xs/semibold",
                                                    children: "payment_source_id",
                                                }),
                                                (0, r.jsx)(h.E, {
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
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "currency",
                                                        }),
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.currency,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "subtotal",
                                                        }),
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.subtotal,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "tax",
                                                        }),
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.tax,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "total",
                                                        }),
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.total,
                                                        }),
                                                    ],
                                                }),
                                                t.billing_facet.invoice_preview.line_items.length > 0 &&
                                                    (0, r.jsxs)("li", {
                                                        children: [
                                                            (0, r.jsx)(h.E, {
                                                                variant: "text-xs/semibold",
                                                                children: "invoice line items",
                                                            }),
                                                            (0, r.jsx)($.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                $.B,
                                                                                {
                                                                                    direction: "horizontal",
                                                                                    gap: 12,
                                                                                    children: [
                                                                                        (0, r.jsxs)(h.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "ref: ",
                                                                                                e.ref_order_line_item_id,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(h.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "unit: ",
                                                                                                e.unit_price,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(h.E, {
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
var o_ = a(935462),
    oC = a(260598),
    oS = a(93688),
    oN = a(717400),
    oA = a(676955),
    ok = a(31300),
    oI = a(500060),
    oD = a(391973),
    oT = a(684013),
    oO = a(765671),
    oR = a(235986),
    ow = a(742589),
    oM = a(41984),
    oL = a(181435),
    oP = a(435736),
    oU = a(296027),
    oG = a(515183),
    oB = a(489277),
    oF = a(127242),
    o$ = a(869014),
    oV = a(528772),
    oW = a(38502),
    oz = a(532624),
    oH = a(773371),
    oK = a(996439),
    oY = a(350535),
    oq = a(9302),
    oJ = a(644434),
    oQ = a(618137);
let oX = {
        [ei.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: ei.uss.CLICK_ZONE_DEBUG,
            id: (0, ek.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...oW.A.getWidgetDefaultSettings(ei.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [ei.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: ei.uss.PERFORMANCE_DEBUG,
            id: (0, ek.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...oW.A.getWidgetDefaultSettings(ei.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    oZ = {};
function o0(e) {
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
        (0, r.jsxs)(nm.$n, {
            look: nm.$n.Looks.LINK,
            color: nm.$n.Colors.LINK,
            size: nm.$n.Sizes.MIN,
            onClick: function () {
                (0, ny.C)(t, () => n(!0));
            },
            className: oQ.DT,
            children: ["Application Id: ", t, " ", a ? a4.intl.string(a4.t.t5VZ88) : null],
        })
    );
}
let o1 = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, z.bG)([f.Ay], () => f.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, z.bG)([_.A], () => _.A.getGameForPID(t.pid)),
            l = (0, z.bG)([f.Ay], () => (null == a ? null : f.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: oQ.st,
            children: [
                (0, r.jsx)(h.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(h.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, r.jsx)(h.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, r.jsx)(o0, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, oG.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(h.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: oQ.st,
                    children: [
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, oG.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsxs)("div", {
                        className: oQ.st,
                        children: [
                            (0, r.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", l.source],
                            }),
                            (0, r.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, oG.gK)(l.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", n?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", n?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", n?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", n?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    o2 = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, z.cf)([oH.default], () => oH.default.getOverlayPIDStatuses()),
            n = (0, z.cf)([oU.default], () => oU.default.getTrackedGames()),
            l = (0, z.bG)([oH.default], () => oH.default.isInputLocked(t), [t]),
            s = (0, z.bG)([oH.default], () => oH.default.DEV_isInputLockedV3(t), [t]),
            i = (0, z.bG)([oH.default], () => oH.default.DEV_isInputLocked(t), [t]),
            o = (0, z.bG)([oH.default], () => oH.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: oQ.st,
            children: [
                (0, r.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Screen Type Resolution: ",
                        ((e) => {
                            let t = n[e]?.timer;
                            if (null == t || null == t.screenTypeResolutionTimestamp) return "...";
                            let a = t.screenTypeResolutionTimestamp - t.startTrackingTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Window Creation: ",
                        ((e) => {
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
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Rendering: ",
                        ((e) => {
                            let t = n[e]?.timer;
                            if (null == t || null == t.overlayRenderingTimestamp || null == t.moduleTrackingTimestamp)
                                return "...";
                            let a = t.overlayRenderingTimestamp - t.moduleTrackingTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(h.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", s],
                }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", i],
                }),
                (0, r.jsxs)(h.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function o3(e) {
    let t,
        a = ((t = Object.values((0, z.yK)([oW.A], () => oW.A.getWidgetsForLayout(oJ.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, oD.uv)(a.id);
            else {
                let t = oX[e];
                if (null == t) return;
                let a = t(oJ.G);
                (0, oD.jn)(a);
            }
        },
    ];
}
function o8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nE.i$)(nu()(e), "h:mm:ss.SSS");
}
let o6 = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, z.bG)([oU.default], () => {
            if (null == t) return "Unknown";
            let e = oU.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((oZ[t] = e), e) : (oZ[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(h.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function o5() {
    let e = (0, z.bG)([oF.A], () => oF.A.hasRenderDebugMode(oM.x7.TrackFocusPIDs)),
        t = (0, z.yK)([oU.default], () => oU.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: oQ.st,
        children: [
            (0, r.jsxs)("div", {
                className: oQ.Iv,
                children: [
                    (0, r.jsx)(c.d, {
                        checked: e,
                        onChange: () =>
                            void oT.A.setRenderDebugMode(
                                !oF.A.hasRenderDebugMode(oM.x7.TrackFocusPIDs),
                                oM.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(B.D, {
                        className: oQ.LL,
                        onClick: () => oT.A.clearTrackedPids(),
                        children: (0, r.jsx)(ng.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(x.Ip, {
                className: G()(oQ.st, oQ.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(lQ.m, {
                                    position: "left",
                                    text: n === oM.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(h.E, {
                                            variant: "text-sm/medium",
                                            color: n === oM.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(o6, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                o8(t),
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
let o9 = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, z.bG)([oU.default, f.Ay], () => {
                if (null == t) return null;
                let e = oU.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = f.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lF.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(h.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, oG.wR)(a) : "Unknown"],
        });
    }),
    o4 = o.memo(function () {
        let e = (0, z.cf)([oU.default], () => oU.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = f.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, oG.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +n8.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(lQ.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(x.Ip, {
                        className: G()(oQ.st, oQ.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(h.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(o6, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(o9, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        h.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, oG.wR)(a)} @ ${o8(n)}`,
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
    o7 = o.memo(function () {
        let e = (0, z.cf)([oU.default], () => oU.default.getTrackedGames()),
            t = (0, oq.getPID)(),
            a = (0, z.bG)([oU.default], () => oU.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, z.yK)([oV.A], () => [oV.A.enabled, oV.A.keepOpen]),
            s = (0, z.bG)([oH.default], () => oH.default.getFocusedPID()),
            i = (0, z.bG)([oH.default], () => oH.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: oQ.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(o2, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", s?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", i ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    de = [
        {
            mode: oM.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: oM.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: oM.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: oM.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oM.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oM.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: oM.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    dt = o.memo(function () {
        let [e, t] = o3(ei.uss.CLICK_ZONE_DEBUG),
            [a, n] = o3(ei.uss.PERFORMANCE_DEBUG),
            l = (0, z.bG)([oF.A], () => oF.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: oQ.st,
                children: de.map((s) => {
                    let i =
                            s.mode === oM.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${o$.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === oM.x7.ClickZones
                                ? null != e
                                : s.mode === oM.x7.WidgetAreas
                                  ? null != a
                                  : l.has(s.mode);
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(c.d, {
                                checked: d(),
                                onChange: () => {
                                    var e;
                                    let a = d();
                                    s.mode === oM.x7.ClickZones && t(),
                                        s.mode === oM.x7.WidgetAreas && n(),
                                        (e = s.mode),
                                        oT.A.setRenderDebugMode(!a, e);
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
    da = o.memo(function () {
        let e = (0, z.cf)([oU.default], () => oU.default.getTrackedGames()),
            t = (0, z.bG)([f.Ay], () => f.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(lQ.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: oQ.st,
                                children: [
                                    (0, r.jsx)(h.E, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    h.E,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(o9, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(lQ.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: oQ.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(o1, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    dn = o.memo(function () {
        let e = (0, z.bG)([oU.default], () => oU.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: oM.V6.UNSET, value: oM.V6.UNSET, id: oM.V6.UNSET },
                { label: oM.V6.IN_PROCESS_V2, value: oM.V6.IN_PROCESS_V2, id: oM.V6.IN_PROCESS_V2 },
                { label: oM.V6.OUT_OF_PROCESS_V3, value: oM.V6.OUT_OF_PROCESS_V3, id: oM.V6.OUT_OF_PROCESS_V3 },
                {
                    label: oM.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: oM.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: oM.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(g.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: (e) => {
                a(e), oT.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function dl(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(o_.EO, {
        size: o_.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(o_.rQ, {
                align: oR.A.Align.CENTER,
                justify: oR.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(o_.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(o_.$m, {
                children: (0, r.jsx)("div", {
                    className: oQ.st,
                    children: (0, r.jsx)(oC.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(o_.jl, {
                children: (0, r.jsxs)(aQ.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(n);
                            },
                        }),
                        (0, r.jsx)(m.$, { variant: "secondary", text: "Clear", onClick: s }),
                    ],
                }),
            }),
        ],
    });
}
let ds = {
    native: { label: "Native", filter: (e) => e.type === oL.ON.NativeLegacy || e.type === oL.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === oL.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === oL.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === oL.ON.OOPModule || e.type === oL.ON.LegacyModule },
};
function di(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oL.QJ.Info;
    if (t === oL.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case oL.ON.NativeLegacy:
            return "var(--yellow-500)";
        case oL.ON.NativeOOP:
            return "var(--green-500)";
        case oL.ON.Flux:
            return "var(--brand-400)";
        case oL.ON.Renderer:
            return "var(--brand-500)";
        case oL.ON.LegacyModule:
            return "var(--yellow-300)";
        case oL.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let dr = [
    {
        key: "type",
        cellClassName: oQ.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = dd(t);
            return (0, r.jsx)("div", {
                className: oQ.g$,
                style: { color: di(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: oQ.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case oL.QJ.Info:
                                    return "text-strong";
                                case oL.QJ.Warning:
                                    return "text-feedback-warning";
                                case oL.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: oQ.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nE.i$)(nu()(t), "h:mm:ss.SSS");
        },
    },
];
function dd(e) {
    switch (e) {
        case oL.ON.NativeLegacy:
            return oS.W;
        case oL.ON.NativeOOP:
            return oN.q;
        case oL.ON.Renderer:
        case oL.ON.Flux:
            return oA.v;
        case oL.ON.LegacyModule:
            return ok.k;
        case oL.ON.OOPModule:
            return oI.o;
        default:
            return ok.k;
    }
}
function dc(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let du = ["__webpack_require__", "fn"],
    dm = ["web.js", "web.js.map"],
    dh = [
        {
            id: "details",
            name: "Details",
            group: aJ.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: d, timestamp: c, pid: u } = t,
                    m = nu()(c),
                    h = dd(l);
                return (0, r.jsxs)(x.Ar, {
                    className: oQ.bW,
                    children: [
                        (0, r.jsxs)(ow.A, {
                            className: G()(tF.jr, oQ.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: di(l, s) },
                                    className: oQ.nr,
                                    children: (0, r.jsx)(h, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(ow.A.Title, {
                                    wrapperClassName: oQ.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(B.D, {
                                            tag: "span",
                                            className: oQ.KE,
                                            onClick: () => (0, ny.C)(n),
                                            children: (0, r.jsx)(nh.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(ow.A.Icon, {
                                    icon: nh.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, ny.C)(dc(t));
                                    },
                                }),
                                (0, r.jsx)(ow.A.Icon, { icon: np.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(nR, {
                            className: oQ.ZK,
                            children: [
                                (0, r.jsx)(nw, {
                                    name: "Timestamp",
                                    copyValue: m.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: m.toISOString(),
                                        title: (0, nE.i$)(m, "LLLL"),
                                        children: (0, nE.i$)(m, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nw, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(nw, {
                                    name: "PID",
                                    copyValue: u?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: u?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nw, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nw, {
                                    name: "Data",
                                    copyValue: dc(d),
                                    children: (0, r.jsx)("code", { children: dc(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nw, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, s] = a,
                                                        i = n.split(/[\\/]/).pop();
                                                    return du.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: oQ.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !dm.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: oQ.lz,
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
    dx = {
        searchType: nb.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return null != n && s.push(n), s;
        },
        throttleMs: 100,
    };
function dp() {
    let { ref: e, height: t } = (0, oO.Ay)(),
        a = (0, z.bG)([oF.A], () => oF.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [d, c] = o.useState(null),
        [u, m] = o.useState(Object.keys(ds)),
        [x, p] = (0, z.bG)([oF.A], () => oF.A.getOverlayLoggingBreadcrumbs(), [], oK.D),
        [g, v] = o.useState(null),
        j = g ?? x,
        b = null != g ? -1 : p;
    o.useEffect(() => {
        0 !== b &&
            (s
                ? c(j.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : c(null));
    }, [s, j, b]);
    let [f, y] = o.useState(""),
        E = o.useMemo(
            () =>
                0 === b
                    ? []
                    : j.filter((e) => {
                          if (s && null != d && e.timestamp < d) return !1;
                          for (let t of u) {
                              let { filter: a } = ds[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [j, u, d, s, b],
        ),
        [_, C] = o.useState(E),
        [S, N] = o.useState(null),
        A = o.useMemo(() => j.find((e) => e.key === S), [j, S]),
        k = o.useCallback((e) => {
            C(e);
        }, []),
        { renderSelectedTab: I } = (0, aJ.Ay)({ tabs: dh }, []);
    (0, nf.RT)(f, E, k, dx, [j]);
    let D = o.useCallback((e) => {
            l(e), oT.A.setModuleLogging(e);
        }, []),
        [T, O] = o.useState(!1),
        R = o.useRef(null),
        w = o.useCallback(() => {
            (0, ny.C)(JSON.stringify(E)), O(!0);
        }, [E]);
    o.useEffect(() => {
        if (T)
            return (
                (R.current = setTimeout(() => {
                    O(!1);
                }, 4e3)),
                () => {
                    null != R.current && clearTimeout(R.current);
                }
            );
    }, [T]);
    let M = o.useCallback((e) => {
            v(null != e ? JSON.parse(e) : null);
        }, []),
        L = o.useCallback(
            (e) => {
                if (e) return v(null);
                (0, e$.openModal)(
                    (e) =>
                        (0, r.jsx)(dl, {
                            modalProps: e,
                            onClose: (t) => {
                                M(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    eW.SY,
                );
            },
            [M],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: oQ.rh,
        children: [
            (0, r.jsxs)("div", {
                className: oQ.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: G()(oQ._V, oQ.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: oQ.iR,
                                children: (0, r.jsx)(r2.S, { label: "Poll Native", checked: n, onChange: (e) => D(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: oQ.iR,
                                children: (0, r.jsx)(r2.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(B.D, {
                                className: oQ.ny,
                                onClick: w,
                                children: [
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: T ? "Copied" : "Copy All",
                                    }),
                                    T
                                        ? (0, r.jsx)(oe.A, { size: "sm", color: eV.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(nh.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(B.D, {
                                className: oQ.ny,
                                onClick: () => L(null != g),
                                children: (0, r.jsx)(h.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != g ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: G()(oQ._V, oQ.XQ),
                        children: Object.entries(ds).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                B.D,
                                {
                                    className: G()(oQ.pb, u.includes(t) && oQ.bx),
                                    onClick: () => {
                                        m((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(h.E, {
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
                        className: oQ._V,
                        children: (0, r.jsx)(nv.I, {
                            query: f,
                            onChange: y,
                            onClear: () => y(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: G()(oQ.st, oQ.CZ),
                children: (0, r.jsx)(t$, {
                    columns: dr,
                    data: _,
                    selectedRowKey: S ?? void 0,
                    onClickRow: (e) => N(e.key),
                }),
            }),
            null != A &&
                (0, r.jsx)(aq, {
                    className: G()(oQ.st, oQ.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: I({ breadcrumb: A, onClose: () => N(null) }),
                }),
        ],
    });
}
let dg = o.memo(function () {
        let e = (0, z.bG)([oB.A], () => oB.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: oQ.st,
            children: [
                (0, r.jsx)("div", {
                    className: oQ.Iv,
                    children: (0, r.jsx)(h.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    dv = o.memo(function () {
        let e = (0, z.bG)([oF.A], () => oF.A.isStateDebuggingEnabled()),
            t = (0, z.bG)([oF.A], () => oF.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    oT.A.setStateDebugging(!0),
                    () => {
                        oT.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: oQ.st,
                children: [
                    (0, r.jsx)("div", {
                        className: oQ.Iv,
                        children: (0, r.jsx)(c.d, {
                            checked: e,
                            onChange: () => oT.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function dj() {
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)("div", {
            className: G()(tF.nd, oQ.rf),
            children: [
                (0, r.jsx)(dt, {}),
                (0, r.jsx)(dn, {}),
                (0, r.jsx)(da, {}),
                (0, r.jsx)(o7, {}),
                (0, r.jsx)(o5, {}),
                (0, r.jsx)(o4, {}),
                (0, r.jsx)(dg, {}),
                (0, r.jsx)(dv, {}),
            ],
        }),
    });
}
let db = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    df = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    dy = o.memo(function () {
        let e = (0, oP.wW)(),
            t = (0, z.bG)([oz.Ay], () => oz.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: oQ.st,
            children: [
                (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, oY.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(g.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: df(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oP.sw)(db(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(g.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: df(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oP.C3)(db(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(m.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oP.xc)() }),
                (0, r.jsx)(m.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, oP.tM)(),
                }),
            ],
        });
    });
function dE() {
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsx)("div", { className: G()(tF.nd, oQ.rf), children: (0, r.jsx)(dy, {}) }),
    });
}
function d_() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                tP.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    tP.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: G()(tF.nd, oQ.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: oQ._V,
                    children: [
                        (0, r.jsx)(B.D, {
                            className: G()(oQ.k0, "state" === e && oQ.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(B.D, {
                            className: G()(oQ.k0, "logging" === e && oQ.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(B.D, {
                            className: G()(oQ.k0, "experiments" === e && oQ.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(dj, {}),
                "logging" === e && (0, r.jsx)(dp, {}),
                "experiments" === e && (0, r.jsx)(dE, {}),
            ],
        })
    );
}
var dC = a(255648);
let dS = { xbox_game_pass: "Xbox Game Pass" },
    dN = (e) => dS[e] ?? e,
    dA = (e) => `/debug/partner-subs/${e}`,
    dk = async () => {
        let { body: e } = await n2.Bo.get({ url: "/debug/partner-subs", rejectWithError: !0 });
        return e;
    },
    dI = async (e, t) => {
        await n2.Bo.post({ url: dA(e), body: t, rejectWithError: !0 });
    },
    dD = async (e, t) => {
        await n2.Bo.del({ url: dA(e), body: t, rejectWithError: !0 });
    };
function dT(e) {
    let { active: t } = e;
    return (0, r.jsx)("span", { className: `${dC.Od} ${t ? dC.xk : dC.kS}`, children: t ? "Active" : "Inactive" });
}
function dO(e) {
    let { partner: t, connectedAccount: a, onChanged: n } = e,
        [l, s] = o.useState(!1),
        i = { external_account_id: a.external_account_id },
        d = Object.keys(a.metadata).length > 0,
        u = async (e) => {
            s(!0);
            try {
                await e();
            } finally {
                await n(), s(!1);
            }
        };
    return (0, r.jsxs)($.B, {
        gap: 8,
        className: dC.nM,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                children: [
                    (0, r.jsx)("div", { className: dC.un, children: a.external_account_id }),
                    (0, r.jsx)(dT, { active: a.is_active }),
                    (0, r.jsxs)($.B, {
                        direction: "horizontal",
                        gap: 8,
                        fullWidth: !1,
                        className: dC.cm,
                        children: [
                            (0, r.jsx)(c.d, {
                                label: "",
                                checked: a.is_active,
                                onChange: (e) => u(() => dI(t, { ...i, is_active: e })),
                                disabled: l,
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Unlink",
                                onClick: () => u(() => dD(t, i)),
                                disabled: l,
                            }),
                        ],
                    }),
                ],
            }),
            d && (0, r.jsx)("div", { className: dC.en, children: JSON.stringify(a.metadata) }),
        ],
    });
}
function dR(e) {
    let { listing: t, onChanged: a } = e,
        [n, l] = o.useState(""),
        [s, i] = o.useState(!0),
        [d, u] = o.useState(!1),
        h = async () => {
            u(!0);
            try {
                let e = { is_active: s },
                    a = n.trim();
                "" !== a && (e.external_account_id = a), await dI(t.partner, e), l("");
            } finally {
                await a(), u(!1);
            }
        };
    return (0, r.jsxs)($.B, {
        gap: 12,
        className: dC.ns,
        children: [
            (0, r.jsxs)("div", {
                className: dC.CM,
                children: [
                    "Leave the id blank for a per-Discord-user default. Set the same id on multiple Discord accounts to test cross-account dedup of the ",
                    dN(t.partner),
                    " membership.",
                ],
            }),
            (0, r.jsx)(v.k, {
                label: "External account id",
                placeholder: t.default_external_account_id,
                value: n,
                onChange: l,
            }),
            (0, r.jsx)(c.d, { label: "Active on link", checked: s, onChange: i }),
            (0, r.jsx)($.B, {
                direction: "horizontal",
                justify: "start",
                children: (0, r.jsx)(m.$, {
                    variant: "primary",
                    size: "sm",
                    text: "Link account",
                    onClick: h,
                    disabled: d,
                }),
            }),
        ],
    });
}
function dw(e) {
    let { listing: t, onChanged: a } = e;
    return (0, r.jsxs)($.B, {
        gap: 8,
        className: dC.Oy,
        children: [
            (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: dN(t.partner) }),
            (0, r.jsxs)(h.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: [
                    "Backed by the ",
                    (0, r.jsx)("code", { children: t.connection_type }),
                    " connected account.",
                ],
            }),
            (0, r.jsx)("div", { className: dC.U, children: "Linked accounts" }),
            0 === t.connected_accounts.length
                ? (0, r.jsx)("div", { className: dC.Ie, children: "None linked yet." })
                : t.connected_accounts.map((e) =>
                      (0, r.jsx)(dO, { partner: t.partner, connectedAccount: e, onChanged: a }, e.connection_id),
                  ),
            (0, r.jsx)("div", { className: dC.U, children: "Link a new account" }),
            (0, r.jsx)(dR, { listing: t, onChanged: a }),
        ],
    });
}
function dM() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(null),
        l = o.useCallback(async () => {
            try {
                let e = await dk();
                t(e), n(null);
            } catch (e) {
                n(e instanceof Error ? e.message : String(e));
            }
        }, []);
    return (
        (0, tt.Ay)(() => {
            l();
        }),
        (0, r.jsxs)(x.Ip, {
            className: G()(tF.nd, dC.kL),
            children: [
                (0, r.jsx)(W.D, { variant: "heading-lg/semibold", className: tF.wx, children: "Partner Perks" }),
                (0, r.jsxs)($.B, {
                    gap: 16,
                    children: [
                        null != a && (0, r.jsx)(h.E, { variant: "text-sm/normal", className: dC.kc, children: a }),
                        e.map((e) => (0, r.jsx)(dw, { listing: e, onChanged: l }, e.partner)),
                    ],
                }),
            ],
        })
    );
}
var dL = a(488428),
    dP = a(73825),
    dU = a(753390),
    dG = a(529427),
    dB = a(944304),
    dF = a(300233),
    d$ = a(599941),
    dV = a(162093),
    dW = a(4630),
    dz = a(44120),
    dH = a(532794),
    dK = a(216678),
    dY = a(194509),
    dq = a(761705),
    dJ = a(65738),
    dQ = a(265768);
function dX(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, d$.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(dV.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let dZ = function () {
    let [e, t] = o.useState(sx.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, z.yK)([a6.A], () => a6.A.getGuildsArray()),
        [s] = (0, z.yK)([r8.A], () => [r8.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, u] = o.useState(i.length > 0 ? i[0].value : null),
        [p, b] = o.useState(""),
        [f, y] = o.useState({ plan_id: sx.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        E = "true" !== f.gift && null != s,
        [_, C] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: S } = (0, aZ.Ay)(tE.A.PAYMENT_FLOW_TEST_PAGE),
        [N, A] = o.useState(""),
        [k, I] = o.useState(ei.dJq),
        { balance: D, isFetching: T, error: O } = (0, dq.W)(),
        { isSubmitting: R, responseMessage: w, redeemVirtualCurrency: M } = (0, dq.Q)(),
        [L, P] = o.useState(ei.dJq),
        [U, G] = o.useState(""),
        [B, F] = o.useState(ei.dJq),
        [V, W] = o.useState(ei.dJq);
    return (0, r.jsx)(aZ.f5, {
        value: S,
        children: (0, r.jsx)(x.Ip, {
            className: dQ.XG,
            children: (0, r.jsxs)($.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)($.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(g.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: sx.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sx.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sx.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dY.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: nm.XD.PRIMARY,
                                look: nm.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)($.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(g.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: sx.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sx.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sx.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, dH.A)({ subscriptionTier: a, analyticsLocations: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)($.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(g.l, {
                                label: "Boost",
                                value: c,
                                options: i,
                                onSelectionChange: (e) => u(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != c
                                ? (0, r.jsx)(dB.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)($.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(iS.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)($.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(v.k, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: p,
                                        onChange: (e) => b(e),
                                    }),
                                    (0, r.jsx)(lQ.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: p.length < 1,
                                        children: (0, r.jsx)(m.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: p.length < 1,
                                            onClick: () => {
                                                window.open(ei.BVt.BILLING_PROMOTION_REDEMPTION(p));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)(d.n, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, r.jsx)(g.l, {
                                label: "Plan",
                                value: f.plan_id,
                                options: [
                                    { id: "tier_2", value: sx.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sx.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sx.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    y((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(g.l, {
                                label: "Type",
                                value: f.gift,
                                options: [
                                    { id: "gift", value: "true", label: "Gift" },
                                    { id: "not_gift", value: "false", label: "Not Gift" },
                                ],
                                onSelectionChange: (e) => {
                                    y((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, r.jsx)(lQ.m, {
                        text: "Already subscribed",
                        shouldShow: E,
                        children: (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: E,
                            onClick: () => {
                                window.open(ei.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dL.stringify({ ...f }));
                            },
                        }),
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)(d.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)($.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    T
                                        ? (0, r.jsx)("div", {
                                              className: dQ.wG,
                                              children: (0, r.jsx)(tn.y, { type: tn.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: dQ.dB,
                                              children: [
                                                  null !== O &&
                                                      (0, r.jsxs)(h.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              O.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(dJ.Gy, {
                                                      balance: D ?? 0,
                                                      balanceWidgetMode: dJ.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsx)(v.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: L,
                                onChange: (e) => P(e),
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: R,
                                onClick: () => M(L, (0, ek.A)()),
                            }),
                            null != w && (0, r.jsx)(h.E, { variant: "text-sm/normal", children: w }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)(d.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, r.jsx)(g.l, {
                                label: "Premium Server Subscription For",
                                value: _,
                                options: i,
                                onSelectionChange: (e) => C(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dF.H, {
                                guildId: _?.id,
                                children: (0, r.jsx)(dX, { selectedGuildForGuildSub: _ }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)($.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(d.n, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, r.jsx)(v.k, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: N,
                                        onChange: A,
                                    }),
                                    (0, r.jsx)(v.k, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: k,
                                        onChange: (e) => I(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, dW.openIAPPurchaseModal)({
                                        applicationId: N,
                                        skuId: k,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: ei.liQ.IN_APP },
                                        context: ei.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsx)($.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(d.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)($.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(v.k, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: U,
                                        onChange: G,
                                    }),
                                    (0, r.jsx)(v.k, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: B,
                                        onChange: (e) => F(e),
                                    }),
                                    (0, r.jsx)(m.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, dK.q)({
                                                applicationId: U,
                                                skuId: B,
                                                analyticsLocations: S,
                                                checkoutFlow: dG.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)($.B, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, r.jsx)(v.k, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: V,
                                onChange: (e) => W(e),
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, dz.A)({ skuId: V, analyticsLocations: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsx)(d.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)($.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, dP.YG)(),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, dU.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsx)(d.n, {
                        label: "Dismissible Content Framework",
                        children: (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, lp.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var d0 = a(219887),
    d1 = a(459357),
    d2 = a(885180),
    d3 = a(500380),
    d8 = a(102609),
    d6 = a(710195),
    d5 = a(211287),
    d9 = a(295405),
    d4 = a(188976);
let d7 = [
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
    ce = {
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
    ct = [
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
    ca = {
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
    cn = [
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
    cl = {
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
function cs() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState(null),
        [c, u] = o.useState(null),
        [p, v] = o.useState("pm_card_us"),
        [j, b] = o.useState(!1),
        f = Object.values((0, ty.bG)([d9.A], () => d9.A.paymentSources)),
        y = ce[e],
        E = async () => {
            let t = p;
            "" === t && (t = "pm_card_us"),
                await n2.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? c : null },
                    rejectWithError: !1,
                }),
                await (0, dU.$o)();
        },
        _ = async () => {
            await n2.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, dU.$o)();
        },
        C = async () => {
            await n2.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, dU.$o)();
        }, []),
        (0, r.jsx)(x.Ip, {
            className: tF.nd,
            children: (0, r.jsxs)("div", {
                className: sy.l$,
                children: [
                    (0, r.jsxs)(h.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: sy.Uo,
                        children: [
                            (0, r.jsx)(at.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: d7
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: d4.bI,
                                                src: (0, d3.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), v(ce[e][0].value), b(1 === ce[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(g.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: ct.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        n(e), s(ca[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(g.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: cn.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        d(e), u(cl[e] ?? null);
                                    },
                                }),
                            (0, r.jsx)(g.l, {
                                selectionMode: "single",
                                label: "Card Token",
                                hideLabel: !0,
                                value: p,
                                options: y.map((e) => {
                                    let { value: t, label: a } = e;
                                    return { id: t, value: t, label: a };
                                }),
                                onSelectionChange: v,
                                disabled: j,
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Create Stripe Credit Card",
                                onClick: E,
                            }),
                            f.length > 0 &&
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Delete All Payment Sources",
                                    onClick: _,
                                }),
                            (0, r.jsx)(m.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: C,
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(cx, {}),
                    (0, r.jsx)(h.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(cu, {}),
                    (0, r.jsx)(h.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    f.map((e) => (0, r.jsx)(cp, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let ci = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    cr = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    co = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Payment elements enabled" },
    ],
    cd = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function cc(e) {
    let { experimentName: t, options: a = ci } = e,
        n = (0, ty.bG)([d6.A, nC.default], () => {
            let e = nC.default.getId(),
                a = d6.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, d8.t$)(d8.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(g.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function cu() {
    return (0, r.jsxs)($.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(cc, { experimentName: d1.A.definition.name, options: cr }),
            (0, r.jsx)(cc, { experimentName: d2._.definition.name, options: co }),
            (0, r.jsx)(cc, { experimentName: d5.A.definition.name, options: cd }),
        ],
    });
}
let cm = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    ch = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function cx() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, s] = o.useState(null),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [h, x] = o.useState(null),
        p = parseInt(a, 10),
        j = !isNaN(p) && p >= 500 && p <= 5e3,
        b = async () => {
            if (j) {
                d(!0), x(null), s(null), u(!1);
                try {
                    let t = await n2.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: ch[e], amount: p },
                        rejectWithError: !0,
                    });
                    s(t.body.pin);
                } catch (e) {
                    x(e instanceof Error ? e.message : "Failed to generate PIN");
                } finally {
                    d(!1);
                }
            }
        };
    return (0, r.jsxs)($.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(g.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: cm,
                        onSelectionChange: t,
                    }),
                    (0, r.jsx)(v.k, {
                        label: "Amount (500\u20135000)",
                        type: "number",
                        value: a,
                        onChange: n,
                        min: 500,
                        max: 5e3,
                    }),
                    (0, r.jsx)(m.$, {
                        variant: "primary",
                        size: "sm",
                        text: "Generate Gift Card PIN",
                        onClick: b,
                        loading: i,
                        disabled: !j,
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)($.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(v.k, { label: "Generated PIN", value: l, onChange: () => {}, readOnly: !0 }),
                        (0, r.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            text: c ? "Copied!" : "Copy",
                            onClick: () => {
                                navigator.clipboard.writeText(l), u(!0), setTimeout(() => u(!1), 2e3);
                            },
                        }),
                    ],
                }),
            null != h && (0, r.jsx)(F.w, { type: "critical", children: h }),
        ],
    });
}
function cp(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await n2.Bo.patch({ url: ei.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, dU.$o)();
        };
    return (0, r.jsxs)("div", {
        className: sy.bd,
        children: [
            (0, r.jsx)(d0.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: d4.bI, src: (0, d3.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(h.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var cg = a(706712),
    cv = a(441574),
    cj = a(367727),
    cb = a(349871),
    cf = a(845886);
function cy() {
    return (0, r.jsxs)(x.Ip, { className: cf.kL, children: [(0, r.jsx)(cE, {}), (0, r.jsx)(cC, {})] });
}
function cE() {
    let e = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()?.perks ?? null),
        t = o.useMemo(
            () =>
                null == e
                    ? []
                    : Object.values(cv.bb)
                          .filter((e) => "number" == typeof e && e !== cv.bb.UNSPECIFIED)
                          .filter((t) => (0, cb.Nh)(e, t))
                          .map((t) => ({
                              id: t,
                              name: cv.bb[t],
                              sources: (0, cb.kQ)(e, t)?.map((e) => cv.g$[e]) ?? [],
                          })),
            [e],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(W.D, { className: cf.wx, variant: "heading-lg/semibold", children: "Active Perks" }),
            (0, r.jsx)(c_, { perks: e, activePerks: t }),
            (0, r.jsx)(W.D, { className: cf.m_, variant: "heading-md/semibold", children: "Debug" }),
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
function c_(e) {
    let { perks: t, activePerks: a } = e;
    return null == t
        ? (0, r.jsx)("p", { className: cf.Qb, children: "No perks data available on the current user." })
        : 0 === a.length
          ? (0, r.jsx)("p", { className: cf.Qb, children: "No active perks." })
          : (0, r.jsxs)("table", {
                className: cf.Q,
                children: [
                    (0, r.jsx)("thead", {
                        children: (0, r.jsxs)("tr", {
                            children: [
                                (0, r.jsx)("th", { className: cf.Ts, children: "Perk" }),
                                (0, r.jsx)("th", { className: cf.Ts, children: "Sources" }),
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
                                            className: cf.iH,
                                            children: [(0, r.jsx)("code", { children: e.name }), " (", e.id, ")"],
                                        }),
                                        (0, r.jsx)("td", {
                                            className: cf.iH,
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
function cC() {
    let e = o.useCallback(() => {
            (0, ac._N)(ad.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, cj.FZ)(ad.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(W.D, { className: cf.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: cf.PW,
                children: (0, r.jsx)(m.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var cS = a(136722),
    cN = a(576705),
    cA = a(558393),
    ck = a(719366),
    cI = a(842681);
function cD(e) {
    let { title: t, can: a } = e,
        n = a ? oe.A : J.P,
        l = (0, r.jsx)("div", {
            className: G()(cI.v_, a ? cI.uU : cI.Ss),
            children: (0, r.jsx)(n, { className: cI.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: cI.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: cI.rv,
                children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function cT() {
    let e = (0, z.bG)([rz.A], () => rz.A.getChannelId()),
        t = (0, z.bG)([a5.A], () => a5.A.getGuildId()),
        a = (0, z.bG)([ay.A], () => ay.A.getChannel(e)),
        n = (0, z.bG)([a6.A], () => a6.A.getGuild(t)),
        l = (0, z.bG)([cN.A], () => cN.A.computePermissions(a)),
        s = (0, z.bG)([cN.A], () => cN.A.computePermissions(n)),
        i = (0, af.Ay)(a, !0),
        o = null != a ? (0, ck.mW)(a, !1) : null,
        d = null != n ? cA.A.getGuildPermissionSpecMap(n) : null,
        c = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cS.zy(l, a);
            return (0, r.jsx)(cD, { title: t, can: n }, t);
        }),
        u = Object.values(d ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cS.zy(s, a);
            return (0, r.jsx)(cD, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: G()(tF.nd, cI.nd),
        children: (0, r.jsxs)("div", {
            className: cI.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: cI.uW,
                    children: [
                        (0, r.jsx)(W.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        c,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: cI.uW,
                    children: [
                        (0, r.jsx)(W.D, {
                            variant: "heading-md/semibold",
                            children: null != n ? `Permissions in ${n.name}` : "No guild selected",
                        }),
                        u,
                    ],
                }),
            ],
        }),
    });
}
var cO = a(873298),
    cR = a(775602),
    cw = a(363195),
    cM = a(885386),
    cL = a(631670),
    cP = a(817281),
    cU = a(955572),
    cG = a(56348),
    cB = a(385803),
    cF = a(381941);
let c$ = [ei.NJ8.DARK, ei.NJ8.LIGHT, ei.NJ8.DARKER, ei.NJ8.MIDNIGHT],
    cV = [cO.NS.COMPACT, cO.NS.COZY, cO.NS.DEFAULT];
function cW(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function cz() {
    let e,
        t =
            ((e = ea.default.getCurrentUser()),
            os.Ay.canUseClientThemes(e) ? Object.keys(cB.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = cW(a);
            if (null != n) {
                let t = cB.ag[n];
                e = t?.theme ?? ei.NJ8.DARK;
            } else e = cW([ei.NJ8.DARK, ei.NJ8.DARKER, ei.NJ8.MIDNIGHT]);
            await cP.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                ac.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = cW(c$);
            await cP.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                ac.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function cH() {
    let e = tC.A.purchases,
        t = (0, eT.x9)(e),
        a = (0, eT.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = cW([...t, null])), l && (e.nameplate = cW([...a, null])), (0, td.p)(e);
            let s = tc.A.getPendingChanges(),
                i = (0, cG.Sk)(s);
            await (0, cL._L)(i).finally(cL.pZ);
        } catch (e) {}
}
function cK() {
    try {
        let e = cW(ei.hH7.FONT_SIZES);
        (0, cU.XS)(e);
        let t = cW(cF.qh);
        (0, cU.AC)(t);
        let a = cW(cV);
        cM.Xi.updateSetting(a);
    } catch (e) {}
}
function cY() {
    (0, th.Bf)();
    let e = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        t = cM.eh.useSetting(),
        a = (0, z.bG)([cw.A], () => cw.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, z.bG)([tC.A], () => tC.A.purchases),
        s = (0, eT.x9)(l),
        i = (0, eT.$W)(l),
        d = e?.avatarDecoration?.skuId,
        c = e?.collectibles?.nameplate?.skuId,
        u = null != d ? (s.find((e) => e.skuId === d) ?? null) : null,
        x = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        p = (0, z.bG)([t_.A], () => t_.A.getProduct(u?.skuId)),
        g = (0, z.bG)([t_.A], () => t_.A.getProduct(x?.skuId)),
        v = (0, z.bG)([cR.Ay], () => cR.Ay.fontSize),
        j = (0, z.bG)([cR.Ay], () => cR.Ay.messageGroupSpacing),
        b = cM.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = ea.default.getCurrentUser(),
                t = cM.eh.getSetting(),
                a = tC.A.purchases,
                n = (0, eT.x9)(a),
                l = (0, eT.$W)(a),
                s = cw.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = cR.Ay.fontSize,
                m = cR.Ay.messageGroupSpacing,
                h = cM.Xi.getSetting();
            return () => {
                try {
                    cP.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        ac.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, td.p)({ avatarDecoration: d, nameplate: c });
                    let e = tc.A.getPendingChanges(),
                        t = (0, cG.Sk)(e);
                    (0, cL._L)(t).finally(cL.pZ), (0, cU.XS)(u), (0, cU.AC)(m), cM.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lT.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(W.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(h.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(m.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: cz }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: cH,
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: cK,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? cB.ag[n]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", p?.name ?? "None"],
                        }),
                        (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["Nameplate: ", g?.name ?? "None"] }),
                        (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["Font Size: ", v, "px"] }),
                        (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["Message Spacing: ", j] }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                b,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case cO.NS.COMPACT:
                                            return "Compact";
                                        case cO.NS.COZY:
                                            return "Cozy";
                                        case cO.NS.DEFAULT:
                                            return "Default";
                                        case cO.NS.RESPONSIVE:
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
var cq = a(885574),
    cJ = a(656513),
    cQ = a(508274),
    cX = a(837529);
let cZ = [5793266, 2303016],
    c0 = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function c1() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, cX.Zt)(),
        l = (0, ec.Ay)(),
        s = (0, z.bG)([au.A], () => au.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, cP.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)($.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(cJ.N, {
                            collapsibleContent: (0, r.jsxs)($.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(h.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(h.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "The intended use case for this tool is to allow you to preview both Nitro and non-Nitro profile component styles across a variety of user profiles regardless of their Nitro status or chosen theme colors.",
                                    }),
                                ],
                            }),
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, r.jsx)(m.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "What is this?",
                                    icon: cq.m,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, r.jsx)(j.c, {}),
                    ],
                }),
                null == e
                    ? (0, r.jsx)(m.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: cZ }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(aQ.e, {
                                  children: (0, r.jsx)(m.$, {
                                      variant: "critical-primary",
                                      text: "Clear Theme Override",
                                      onClick: function () {
                                          o(), t(null);
                                      },
                                  }),
                              }),
                              (0, r.jsx)(g.l, {
                                  label: "Profile Type",
                                  selectionMode: "single",
                                  value: e.mode,
                                  options: c0,
                                  onSelectionChange: (a) => t({ ...e, mode: a }),
                              }),
                              "nitro" === e.mode
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.d, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (a) => t({ ...e, disableBanner: a }),
                                            }),
                                            (0, r.jsx)(m.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: cZ }),
                                            }),
                                            (0, r.jsxs)($.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(cQ.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)($.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(cQ.VN, {
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
                                  : (0, r.jsxs)($.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(g.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(ei.NJ8).map((e) => ({
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
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be saved and can be restored manually, or automatically when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(m.$, {
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
                                                                    (0, cP.u_)({ theme: "system" });
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be automatically restored when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(m.$, {
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
var c2 = a(141931),
    c3 = a(306173),
    c8 = a(617710),
    c6 = a(237984),
    c5 = a(43203),
    c9 = a(349435),
    c4 = a(674272),
    c7 = a(466034),
    ue = a(10094),
    ut = a(683760);
let ua = () => {
    let e = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        t = (0, z.bG)([ut.A], () => {
            let e = ut.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, z.bG)([ut.A], () => ut.A.getPremiumTypeOverride());
    return (0, r.jsxs)($.B, {
        gap: 16,
        children: [
            (0, r.jsx)(g.l, {
                label: "Override Client-Side Premium Type",
                options: sx.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, ue.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(lG.Q, {
                onClick: () => {
                    (0, ue.O)(sx.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(iv.J, {
                label: "Override Client-Side Account Created At Date",
                value: nu()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, ue.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(lG.Q, { onClick: () => (0, ue.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var un = a(19575),
    ul = a(327337),
    us = a(431804),
    ui = a(865349),
    ur = a(818050);
function uo() {
    throw Error("Send help");
}
function ud() {
    let e = cM.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(x.Ip, {
              children: [
                  (0, r.jsx)("div", { className: G()(ui.N, ur.SX), children: (0, r.jsx)(ua, {}) }),
                  (0, r.jsx)("div", {
                      className: G()(ui.N, ur.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, c4.A)({ source: us.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: G()(ui.N, ur.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = rz.A.getChannelId() ?? "21154681615024128"),
                                  void (0, e$.openModalLazy)(
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
                                                  warningType: c9._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: ul.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: G()(ui.N, ur.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, e$.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("17724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: G()(ui.N, ur.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, c5.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: G()(ui.N, ur.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: c3.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: G()(ui.N, ur.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = c8.A.getSocket();
                              tP.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: G()(ui.N, ur.QB),
                      children: (0, r.jsx)(c.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cM.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: G()(ui.N, ur.QB),
                      children: [
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, c6.o)(),
                          }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  c8.A.getSocket().close(), c8.A.getSocket().connect();
                              },
                          }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  tP.h.dispatch({
                                      type: "CLEAR_CACHES",
                                      reason: "Requested by user",
                                      preventWritingCachesAgainThisSession: !0,
                                      resetSocket: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, c7.sy)(!0),
                          }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  n2.Bo.post({ url: ei.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: G()(ui.N, ur.QB),
                      children: [
                          (0, r.jsx)(g.l, {
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
                              onSelectionChange: (e) => null != e && un.Ay.crash(e),
                          }),
                          (0, r.jsx)(g.l, {
                              label: "Trigger JS crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  { label: "Native JS crash", value: void 0, id: "native_js_crash" },
                                  {
                                      label: "Delayed exception in renderer process",
                                      value: c2.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: c2.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: c2.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void un.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(m.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: uo }),
                      ],
                  }),
              ],
          });
}
var uc = a(593924),
    uu = a(653887),
    um = a(105596);
function uh() {
    let e = Object.keys(uc).map((e) => (0, r.jsx)(ug, { riveName: e }, e));
    return (0, r.jsx)(x.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)($.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(W.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(h.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(ux, {}),
                (0, r.jsx)(W.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(h.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function ux() {
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
        j = o.useCallback((e) => {
            s(null), n(null), t(e);
        }, []);
    return (0, r.jsxs)($.B, {
        gap: 16,
        children: [
            (0, r.jsx)(ug, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(uu._, { src: e, ref: c, onLoad: p, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(tn.y, {}) : null,
            null != a &&
                (0, r.jsxs)($.B, {
                    children: [
                        (0, r.jsxs)($.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(W.D, { variant: "heading-lg/medium", children: "Dimensions" }),
                                (0, r.jsx)(v.k, {
                                    type: "number",
                                    label: "width",
                                    value: u.toString(),
                                    onChange: (e) => m(parseInt(e)),
                                }),
                                (0, r.jsx)(v.k, {
                                    type: "number",
                                    label: "height",
                                    value: h.toString(),
                                    onChange: (e) => x(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, r.jsxs)($.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(W.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        up,
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
function up(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: s } = e;
    return "string" === a
        ? (0, r.jsx)(v.k, { label: t, value: n, onChange: (e) => l(e) })
        : "number" === a
          ? (0, r.jsx)(v.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) })
          : "boolean" === a
            ? (0, r.jsx)(c.d, { label: t, checked: n, onChange: (e) => l(e) })
            : "trigger" === a
              ? (0, r.jsx)(m.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) })
              : "image" === a
                ? (0, r.jsx)(v.k, { label: t, value: n, onChange: (e) => l(e) })
                : "color" === a
                  ? (0, r.jsx)(at.Z, {
                        selectionMode: "single",
                        label: t,
                        value: n,
                        onSelectionChange: (e) => l(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(eV.A.colors).map((e) => {
                            let [t, a] = e;
                            return { label: t, value: a, id: t };
                        }),
                    })
                  : "artboard" === a
                    ? (0, r.jsx)(at.Z, {
                          selectionMode: "single",
                          label: t,
                          value: n,
                          onSelectionChange: (e) => l(e),
                          closeOnSelect: !0,
                          placeholder: "Select an artboard...",
                          options: s.map((e) => ({ label: e, value: e, id: e })),
                      })
                    : null;
}
function ug(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = uc[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, um.Gy)(n);
    return (0, r.jsxs)(
        $.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)($.B, {
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
                                    null != n && (0, um.DS)(n, t), a?.(t);
                                }),
                                    l.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eG.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != n && (0, um.DS)(n, null),
                                    a?.(null);
                            },
                            icon: ng.u,
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
var uv = a(926919),
    uj = a(513521),
    ub = a(111162);
function uf() {
    let e = (0, z.bG)([ub.default], () => ub.default.routingKeyTags);
    return (0, r.jsx)(lx.Ch, {
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-16)" },
            children: (0, r.jsxs)(d.n, {
                label: "Routing Key",
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children:
                            "A routing key is an opaque set of strings added to outbound network requests, which may be used for debugging and testing of the network path.",
                    }),
                    (0, r.jsxs)($.B, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-md/medium", children: "Overrides" }),
                            (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "Manually configure the routing key values",
                            }),
                            (0, r.jsx)(uj.A, {
                                tagsLabel: "Routing Key Values",
                                placeholder: "Enter new value...",
                                tags: e.map((e) => ({ id: e, label: e })),
                                onAddTag: (t) => {
                                    e.includes(t) || (0, uv.f)([...e, t]);
                                },
                                onRemoveTag: (t) => {
                                    (0, uv.f)(e.filter((e) => !t.has(e)));
                                },
                            }),
                            e.length > 0
                                ? (0, r.jsx)(m.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: "Clear all",
                                      onClick: () => (0, uv.f)([]),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        }),
    });
}
var uy = a(455873);
function uE(e) {
    let { game: t, meta: a } = e;
    return (0, r.jsxs)("div", {
        className: uy.nM,
        children: [
            (0, r.jsxs)("div", {
                className: uy.uV,
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/semibold",
                        className: uy._k,
                        children: null == t.name || "" === t.name ? "(no name)" : t.name,
                    }),
                    null != a && (0, r.jsx)(h.E, { variant: "text-xs/normal", className: uy.Bq, children: a }),
                ],
            }),
            (0, r.jsx)(h.E, {
                variant: "text-xs/normal",
                className: uy.C0,
                children: null == t.exePath || "" === t.exePath ? "(no path)" : t.exePath,
            }),
            (0, r.jsxs)(h.E, {
                variant: "text-xs/normal",
                className: uy.en,
                children: ["pid ", t.pid, " \xb7 ", t.id ?? "(no id)"],
            }),
        ],
    });
}
function u_(e) {
    let { title: t, count: a, entries: n, renderMeta: l } = e;
    return (0, r.jsxs)($.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(W.D, { variant: "heading-sm/bold", children: [t, " (", a, ")"] }),
            0 === n.length
                ? (0, r.jsx)(h.E, { variant: "text-sm/normal", className: uy.Ie, children: "none" })
                : (0, r.jsx)($.B, {
                      gap: 0,
                      children: n.map((e) =>
                          (0, r.jsx)(
                              uE,
                              { game: e.game, meta: l?.(e.outcome) },
                              `${e.game.pid}-${e.game.id ?? e.game.exeName}`,
                          ),
                      ),
                  }),
        ],
    });
}
function uC(e) {
    return "blocked" !== e.kind
        ? null
        : null != e.matchedExe
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    "blocked by exe substring ",
                    (0, r.jsx)("span", { className: uy.ti, children: e.matchedExe }),
                ],
            })
          : null != e.matchedPattern
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      "blocked by pattern ",
                      (0, r.jsx)("span", { className: uy.ti, children: e.matchedPattern }),
                  ],
              })
            : "blocked (no reason captured)";
}
function uS(e) {
    return "observed_app" !== e.kind
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  "matched observed app",
                  " ",
                  (0, r.jsxs)("span", {
                      className: uy.ti,
                      children: [e.appName, e.streamerTool ? " (streamer tool)" : ""],
                  }),
              ],
          });
}
function uN() {
    var e;
    let t = (0, z.bG)([f.Ay], () => f.Ay.getDetectionDebug()),
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
        className: G()(tF.nd, uy.kL),
        children: (0, r.jsxs)($.B, {
            gap: 16,
            padding: 12,
            className: uy.rf,
            children: [
                (0, r.jsxs)($.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/bold", children: "Running Game Detection" }),
                        (0, r.jsxs)(h.E, {
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
                (0, r.jsxs)($.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-sm/bold", children: "Status" }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "Last update:" }),
                                " ",
                                null == (e = t?.timestamp) ? "never" : new Date(e).toLocaleTimeString(),
                            ],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "From native:" }),
                                " ",
                                t?.totalFromNative ?? 0,
                            ],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "Passed to RunningGameStore:" }),
                                " ",
                                a.passed.length,
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(u_, { title: "Running games", count: a.passed.length, entries: a.passed }),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(u_, { title: "Filtered: non-game", count: a.nonGames.length, entries: a.nonGames }),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(u_, {
                    title: "Filtered: matched a hardcoded observed app",
                    count: a.observedApps.length,
                    entries: a.observedApps,
                    renderMeta: uS,
                }),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(u_, {
                    title: "Filtered: blocklist",
                    count: a.blocked.length,
                    entries: a.blocked,
                    renderMeta: uC,
                }),
            ],
        }),
    });
}
var uA = a(290136),
    uk = a(106236),
    uI = a(629584),
    uD = a(600239),
    uT = a(940622),
    uO = a(961895),
    uR = a(343991),
    uw = a(699666);
let uM = () => {
        (0, e$.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
                return (t) =>
                    (0, r.jsx)(e, {
                        title: "No image or video files found!",
                        help: "Please drop one or more image or video files.",
                        ...t,
                    });
            },
            { modalKey: uR.D },
        );
    },
    uL = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    uP = (e) => {
        let { className: t, onDrop: a, children: n } = e,
            [l, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                uL(e), s(!0), (0, e$.closeModal)(uR.D);
            }, []),
            c = o.useCallback((e) => {
                uL(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    uL(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void uM();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : uM();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: G()(t, uw.iE),
            onDragEnter: d,
            onDragOver: uL,
            onDragLeave: c,
            onDrop: u,
            children: [
                n,
                l &&
                    (0, r.jsx)("div", {
                        className: uw.d2,
                        children: (0, r.jsxs)("div", {
                            className: uw.vW,
                            children: [
                                (0, r.jsx)(uO.A, { icons: ej.ir }),
                                (0, r.jsx)(W.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: uw.GA,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(h.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(uA.c, {
                                                    className: uw.q4,
                                                    size: "xs",
                                                    color: eV.A.colors.TEXT_DEFAULT,
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
var uU = a(374380),
    uG = a(572868);
let uB = new Set([
        eR.RN.HERO_BANNER_STATIC,
        eR.RN.HERO_LOGO,
        eR.RN.PDP_BACKGROUND,
        eR.RN.LOGO,
        eR.RN.MOBILE_BANNER,
        eR.RN.MOBILE_BACKGROUND,
    ]),
    uF = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    u$ = { max: 5e6, warn: 2e6 },
    uV = { max: 3e6, warn: 1e6 },
    uW = { max: 2e6, warn: 1e6 },
    uz = { max: 1e6, warn: 5e5 },
    uH = { max: 25e4, warn: 5e4 },
    uK = {
        [eR.Jn.PROFILE_EFFECT]: u$,
        [eR.Jn.AVATAR_DECORATION]: uV,
        [eR.Jn.PROFILE_FRAME]: uW,
        [eR.RN.HERO_BANNER_ANIMATED]: u$,
        [eR.RN.HERO_BANNER_RIVE]: u$,
        [eR.RN.CATALOG_BANNER_RIVE]: u$,
        [eR.RN.SHOP_BUTTON_BG_HOVER]: uV,
        [eR.RN.SHOP_BUTTON_BG_HOVER_DARK]: uV,
        [eR.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: uV,
        [eR.RN.SHOP_BUTTON_BG_RESTING]: uV,
        [eR.RN.SHOP_BUTTON_BG_RESTING_DARK]: uV,
        [eR.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: uV,
        [eR.RN.HERO_BANNER_STATIC]: uW,
        [eR.RN.UPSELL_BANNER]: uz,
        [eR.RN.UPSELL_BANNER_POPOUT]: uH,
        [eR.RN.MOBILE_BANNER]: uz,
        [eR.RN.MOBILE_BACKGROUND]: uH,
        [eR.RN.MOBILE_HERO]: uz,
        [eR.RN.PDP_BACKGROUND]: uH,
        [eR.RN.LOGO]: uH,
        [eR.RN.TAB_TOOLTIP]: uH,
    },
    uY = [eR.Kx.COLLECTION],
    uq = [eR.Kx.AVATAR_DECORATIONS, eR.Kx.FRAMES, eR.Kx.NAMEPLATES, eR.Kx.PROFILE_EFFECTS],
    uJ = async (e) => {
        let t = e.createReader(),
            a = await new Promise((e) => t.readEntries(e)),
            n = new Set();
        for (let e of a) e.isDirectory && n.add(e.name);
        let l = uY.filter((e) => !n.has(e));
        return uq.some((e) => n.has(e)) || l.push(`at least one of: ${uq.join(", ")}`), l;
    },
    uQ = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
    uX = (e) => {
        let { names: t, addError: a } = e,
            n = t.filter((e) => !uQ.test(e));
        n.length > 0 && a("File names must be in lowercase snake case", n);
    },
    uZ = (e, t, a, n, l) => {
        let s = t.size,
            i = s > 1e6 ? `${(s / 1e6).toFixed(2)}MB` : `${(s / 1e3).toFixed(2)}KB`,
            r = `${l ?? t.name} - ${i}`;
        if (s > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
        } else s > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
    },
    u0 = (e, t, a, n) => {
        let l = uK[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || uZ(l, e, a, n);
    },
    u1 = (e) => {
        let t = eR.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    },
    u2 = ["png", "jpg"],
    u3 = async (e) => {
        let t = URL.createObjectURL(e);
        try {
            return await (0, eR.Lv)(t);
        } finally {
            URL.revokeObjectURL(t);
        }
    },
    u8 = async (e, t) => {
        if (e.length < 2) return null;
        let a = (
            await Promise.all(
                e.map(async (e) => {
                    try {
                        return t(await u3(e));
                    } catch {
                        return null;
                    }
                }),
            )
        ).filter((e) => null != e);
        return a.length < 2 || new Set(a).size <= 1 ? null : a;
    },
    u6 = (e) => e.map((e) => `${e}px`).join(", "),
    u5 = async (e, t) => {
        for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
            let e = new Map();
            for (let { file: t } of n.layerFiles) {
                let { parsed: a } = (0, uG.Mf)(t.name);
                if (a?.type !== uU.O.STAPLE) continue;
                let n = e.get(a.anchor) ?? [];
                n.push(t), e.set(a.anchor, n);
            }
            for (let [n, l] of e) {
                let e = await u8(l, (e) => e.height);
                null != e &&
                    t("Staples with the same anchor (top/bottom) must all have the same height", [
                        `${a} (${String(n).toUpperCase()}) - ${u6(e)}`,
                    ]);
            }
        }
    },
    u9 = async (e, t) => {
        for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
            let e = n.layerFiles
                    .filter((e) => {
                        let { file: t } = e,
                            { parsed: a } = (0, uG.Mf)(t.name);
                        return a?.type === uU.O.BORDER || a?.type === uU.O.RAIL;
                    })
                    .map((e) => {
                        let { file: t } = e;
                        return t;
                    }),
                l = await u8(e, (e) => e.width);
            null != l && t("Borders and rails must all have the same width", [`${a} - ${u6(l)}`]);
        }
    };
var u4 = a(981388);
let u7 = o.createContext({ setDropHandler: () => {} }),
    me = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    mt = { id: "none", label: "[none selected]", value: null },
    ma = () => {
        (0, e$.hasModalOpen)(uD.k)
            ? (0, e$.closeModal)(uD.k)
            : (0, e$.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: uD.k, onCloseRequest: () => (0, e$.closeModal)(uD.k) },
              );
    },
    mn = () => {
        (0, e$.hasModalOpen)(uD.g)
            ? (0, e$.closeModal)(uD.g)
            : (0, e$.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: uD.g, onCloseRequest: () => (0, e$.closeModal)(uD.g) },
              );
    },
    ml = () => {
        let e = (0, ew.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, uT.JE)(),
            n = o.useMemo(() => [mt, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: u4.kO,
                  children: [
                      (0, r.jsx)(ab.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: u4.wR,
                          children: [
                              (0, r.jsx)(W.D, {
                                  variant: "heading-sm/semibold",
                                  children: `Profile Effect (${e.length} to preview)`,
                              }),
                              (0, r.jsx)(eG.K, {
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: mn,
                                  icon: uA.c,
                                  "aria-label": "Open PFX preview instructions",
                              }),
                          ],
                      }),
                      (0, r.jsx)(g.l, {
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
    ms = () => {
        let e = (0, uT.bA)(),
            { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, uT.JE)(),
            n = o.useMemo(() => [mt, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: u4.kO,
                  children: [
                      (0, r.jsx)(ab.h, { size: 16 }),
                      (0, r.jsx)(W.D, {
                          variant: "heading-sm/semibold",
                          children: `Profile Frame (${e.length} to preview)`,
                      }),
                      (0, r.jsx)(g.l, {
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
    mi = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, uT.JE)(),
            { avatarDecorationAssets: a } = (0, uT.NE)(),
            n = o.useMemo(() => [mt, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: u4.kO,
                  children: [
                      (0, r.jsx)(ab.h, { size: 16 }),
                      (0, r.jsx)(W.D, {
                          variant: "heading-sm/semibold",
                          children: `Avatar Decorations (${a.length} to preview)`,
                      }),
                      (0, r.jsx)(g.l, {
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
    mr = new Set([eR.RN.HERO_BANNER_STATIC, eR.RN.HERO_BANNER_ANIMATED, eR.RN.HERO_BANNER_RIVE]),
    mo = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, uT.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: u,
                setHeroResponsive: x,
            } = (0, uT.JE)(),
            p = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            g = p.some((e) => e.value === eR.RN.HERO_LOGO),
            v = p.some((e) => mr.has(e.value)),
            j = o.useCallback((e) => l(e), [l]),
            b = o.useCallback(() => {
                s(), t(), a();
            }, [s, t, a]);
        return 0 === p.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ab.h, { size: 16 }),
                      (g || v) &&
                          (0, r.jsxs)("div", {
                              className: u4.v7,
                              children: [
                                  g &&
                                      (0, r.jsxs)("div", {
                                          className: u4.cj,
                                          children: [
                                              (0, r.jsx)(h.E, {
                                                  variant: "text-md/normal",
                                                  className: u4.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(uk.A, {
                                                  className: u4.TQ,
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  initialValue: i ?? 90,
                                                  handleSize: 10,
                                                  onValueChange: (e) => d(Math.round(e)),
                                                  onValueRender: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                              (0, r.jsx)(h.E, { variant: "text-sm/normal", children: `${i ?? 90}px` }),
                                          ],
                                      }),
                                  v &&
                                      (0, r.jsxs)("div", {
                                          className: u4.sy,
                                          children: [
                                              (0, r.jsx)(c.d, { checked: u, onChange: x }),
                                              (0, r.jsx)(h.E, {
                                                  variant: "text-md/normal",
                                                  children: "Responsive Hero",
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      (0, r.jsx)(ab.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: u4.wR,
                          children: [
                              (0, r.jsx)(W.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                              (0, r.jsx)(m.$, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  onClick: b,
                                  text: "Clear All",
                              }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: p.map((e) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: u4._0,
                                      children: [
                                          (0, r.jsx)(eG.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => j(e.value),
                                              icon: J.P,
                                              "aria-label": "Remove asset",
                                          }),
                                          (0, r.jsx)(h.E, { variant: "text-md/normal", children: e.label }),
                                      ],
                                  },
                                  e.value,
                              ),
                          ),
                      }),
                  ],
              });
    },
    md = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ab.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: u4.wR,
                          children: [
                              (0, r.jsx)(W.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                              (0, r.jsx)(m.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: t.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: u4.yk,
                                      children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    mc = () => {
        let {
                validateShopAssetPackage: e,
                reset: t,
                validationComplete: a,
                warnings: n,
                errors: l,
            } = (() => {
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
                                let a = await uJ(t);
                                a.length > 0 && i("Missing required directories", a);
                                let n = await (0, eR.eg)([t]);
                                ((e) => {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    for (let e of t.collectionFiles) {
                                        let t = (0, eR.pd)(e),
                                            l = null != t ? uK[t] : null;
                                        null != l && uZ(l, e, a, n);
                                    }
                                    uX({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                    let l = new Set(
                                            t.collectionFiles.map((e) => (0, eR.pd)(e)).filter((e) => null != e),
                                        ),
                                        s = Array.from(uB)
                                            .filter((e) => !l.has(e))
                                            .map(u1);
                                    s.length > 0 && a("Missing required files", s);
                                    let i = Object.values(eR.RN)
                                        .filter((e) => !uB.has(e))
                                        .filter((e) => !l.has(e))
                                        .map(u1);
                                    i.length > 0 && n("Missing optional assets", i);
                                })({ files: n, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        uX({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, l] = e,
                                                    s = l.map((e) => e.name);
                                                uX({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    u0(eR.Jn.PROFILE_EFFECT, l, a, n);
                                                let i = uF
                                                    .filter(
                                                        (e) => !s.some((t) => t.startsWith(e) && t.endsWith(".png")),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                i.length > 0 && a("Missing required PFX files with prefix", i),
                                                    s.some((e) => e.endsWith(".txt")) ||
                                                        a(
                                                            "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                            [t],
                                                        );
                                                let r = s
                                                    .filter(
                                                        (e) => !uF.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && n("Contains unrecognized files", r);
                                            });
                                    })({ files: n, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        uX({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            u0(eR.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
                                    })({ files: n, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e,
                                            l = Object.keys(t.profileFrameDirsMap)
                                                .filter((e) => !uQ.test(e))
                                                .map((e) => `${eR.Kx.FRAMES}/${e}`);
                                        l.length > 0 && a("File names must be in lowercase snake case", l);
                                        let s = uK[eR.Jn.PROFILE_FRAME];
                                        Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                            let [t, l] = e,
                                                i = `${eR.Kx.FRAMES}/${t}`,
                                                r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                            (null != l.previewFile && null != r && u2.includes(r)) ||
                                                a(
                                                    "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                    [`${i}/preview.{${u2.join("|")}}`],
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
                                                uQ.test(l.previewFile.name) ||
                                                o.push(`${i}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                uQ.test(e.name) || o.push(`${i}/${t}/${e.name}`);
                                            o.length > 0 && a("File names must be in lowercase snake case", o);
                                            let d = [];
                                            for (let { file: e, folder: t } of l.layerFiles) {
                                                let { parsed: a, errorType: n } = (0, uG.Mf)(e.name);
                                                if (null == a) {
                                                    let a = null != n ? uG.h4[n] : "invalid";
                                                    d.push(`${i}/${t}/${e.name}: ${a}`);
                                                }
                                            }
                                            if (
                                                (d.length > 0 && a("Invalid profile frame layer filenames", d),
                                                null != s)
                                            )
                                                for (let { file: e, folder: t } of (null != l.previewFile &&
                                                    uZ(s, l.previewFile, a, n, `${i}/${l.previewFile.name}`),
                                                l.layerFiles))
                                                    uZ(s, e, a, n, `${i}/${t}/${e.name}`);
                                        });
                                    })({ files: n, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addWarning: a } = e;
                                        t.ignoredFilenames.length > 0 &&
                                            a("Contains unrecognized files", t.ignoredFilenames);
                                    })({ files: n, addError: i, addWarning: r }),
                                    await Promise.all([u5(n, i), u9(n, i)]);
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
            { setDropHandler: u } = o.useContext(u7),
            x = o.useCallback(
                (a) => {
                    t(), e(a);
                },
                [e, t],
            );
        return (
            o.useEffect(() => {
                u(x);
            }, [x, u]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    a
                        ? (0, r.jsxs)("div", {
                              className: u4._f,
                              children: [
                                  (0, r.jsx)(h.E, {
                                      variant: "text-md/normal",
                                      color: d ? "text-feedback-critical" : "text-default",
                                      children: `${s.length} errors`,
                                  }),
                                  (0, r.jsx)(h.E, {
                                      variant: "text-md/normal",
                                      color: c ? "text-feedback-warning" : "text-default",
                                      children: `${i.length} warnings`,
                                  }),
                                  (0, r.jsx)(m.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                              ],
                          })
                        : (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                    (0, r.jsx)(ab.h, { size: 16 }),
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(W.D, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, r.jsx)(ab.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: u4.ck,
                                    children: s.map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: u4.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(h.E, {
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
                                (0, r.jsx)(W.D, { variant: "heading-lg/bold", children: "Warnings" }),
                                (0, r.jsx)(ab.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: u4.ck,
                                    children: Object.entries(n).map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: u4.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(h.E, {
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
    },
    mu = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, uT.JE)(),
            { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, eR.ds)(),
            { setDropHandler: d } = o.useContext(u7),
            u = o.useCallback(
                (e) => {
                    a(), i(e);
                },
                [i, a],
            );
        return (
            o.useEffect(() => {
                d(u);
            }, [u, d]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: u4.sy,
                        children: [
                            (0, r.jsx)(c.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eG.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: ma,
                                icon: uA.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, r.jsx)(ml, {}),
                    (0, r.jsx)(ms, {}),
                    (0, r.jsx)(mi, {}),
                    (0, r.jsx)(mo, { clearAssets: l, clearIgnoredFiles: s }),
                    (0, r.jsx)(md, { ignoredFiles: n, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    mm = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: u4.kL,
            children: [
                (0, r.jsx)(uI.I, {
                    options: me,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: u4.Vj,
                    optionClassName: u4.UK,
                }),
                (0, r.jsx)(ab.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(mu, {}),
                "validate" === e && (0, r.jsx)(mc, {}),
                (0, r.jsx)(ab.h, { size: 16 }),
            ],
        });
    },
    mh = (e) => {
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
        return (0, r.jsx)(u7.Provider, { value: l, children: (0, r.jsx)(uP, { onDrop: s, children: t }) });
    };
var mx = a(663803),
    mp = a(564064),
    mg = a(385815);
let mv = () => {
    let e = (0, z.bG)([t_.A], () => t_.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: mg.k,
        children: [
            (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(mx.l, {
                value: e,
                onChange: (e) => {
                    (0, mp.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var mj =
        (((n = {}).DEFAULT = "default"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    mb = a(295811);
let mf = () => {
    let e = (0, z.bG)([mb.A], () => mb.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(mj).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(g.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, mp.Or)(e);
        },
        selectionMode: "single",
    });
};
var my = a(172471);
let mE = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: G()(my.kL, my.fi),
            children: [
                (0, r.jsx)(v.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: my.o1,
                    children: [
                        (0, r.jsx)(m.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, mp.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, mp.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    m_ = (e) => {
        let { className: t } = e,
            a = Object.keys(ad.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(lC, { items: [a] }) });
    };
var mC = a(578797),
    mS = a(628917);
let mN = (e) => {
        let { title: t, expanded: a, onToggle: n, children: l } = e,
            s = o.useId();
        return (0, r.jsx)(cJ.N, {
            isExpanded: a,
            className: mS.uW,
            collapsibleContent: (0, r.jsx)("div", { id: s, className: mS.f5, children: l }),
            children: () =>
                (0, r.jsxs)("button", {
                    type: "button",
                    onClick: n,
                    "aria-expanded": a,
                    "aria-controls": s,
                    className: mS.bV,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/bold", children: t }),
                        (0, r.jsx)(s6._, { size: "sm", color: "currentColor", className: G()(mS.ai, { [mS.hg]: a }) }),
                    ],
                }),
        });
    },
    mA = () => {
        let e = (0, z.bG)([lD.A], () => lD.A.get("shop_disable_cache")),
            t = (0, z.bG)([lD.A], () => lD.A.get("shop_include_unpublished")),
            a = (0, mC.U)("DevToolsShopPanel"),
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
        return (0, r.jsx)(mh, {
            onDrop: i,
            children: (0, r.jsxs)("div", {
                className: mS.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: mS.dQ,
                        children: [
                            (0, r.jsx)(c.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, lI.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(c.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, lI.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(mN, {
                        title: "Layouts",
                        expanded: n.has("layouts"),
                        onToggle: () => s("layouts"),
                        children: [(0, r.jsx)(m_, {}), (0, r.jsx)(mf, {}), a && (0, r.jsx)(mE, {}), (0, r.jsx)(mv, {})],
                    }),
                    (0, r.jsx)(mN, {
                        title: "Assets",
                        expanded: n.has("assets"),
                        onToggle: () => s("assets"),
                        children: (0, r.jsx)(mm, {}),
                    }),
                ],
            }),
        });
    },
    mk = [
        { id: "unset", label: "Unset", value: cO.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: cO.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: cO.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: cO.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function mI() {
    let e = o.useRef(null),
        t = cM.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: G()(tF.nd, aU.n),
        children: (0, r.jsxs)("div", {
            className: aU.k,
            children: [
                (0, r.jsx)(W.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(g.l, {
                    label: "Receive DMs In Game",
                    options: mk,
                    value: t,
                    onSelectionChange: cM.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var mD = a(894307),
    mT = a(937427),
    mO = a(340231);
let mR = () => {
    let e = (0, z.bG)([mT.A], () => mT.A.getPromotionIdOverride()),
        [t, a] = o.useState(e ?? ""),
        n = o.useCallback(() => {
            a(""), (0, mD.J_)(void 0);
        }, []),
        l = o.useCallback(() => {
            let e = t.trim();
            (0, mD.J_)("" !== e ? e : void 0);
        }, [t]),
        s = o.useCallback((e) => {
            a(e);
        }, []);
    return (0, r.jsxs)("div", {
        className: mO.k,
        children: [
            (0, r.jsx)(v.k, {
                fullWidth: !0,
                label: `Promotion ID Override (staff)${null != e ? ` \u{2014} active: ${e}` : ""}`,
                value: t,
                onChange: s,
                placeholder: "Paste a storefront promotion id",
            }),
            (0, r.jsxs)("div", {
                className: mO.o,
                children: [
                    (0, r.jsx)(m.$, { variant: "critical-primary", text: "Clear", onClick: n }),
                    (0, r.jsx)(m.$, { variant: "primary", text: "Set", onClick: l }),
                ],
            }),
        ],
    });
};
var mw = a(838857);
let mM = () => (0, r.jsx)("div", { className: mw.n, children: (0, r.jsx)(mR, {}) });
var mL = a(278416),
    mP = a(220631);
function mU(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function mG(e) {
    let { store: t, dataGetter: a } = e,
        [n, l] = o.useState(a(t));
    return (
        o.useEffect(() => {
            let e = () => l(a(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, a]),
        (0, r.jsx)(x.Ip, { className: mP.Dx, children: (0, r.jsx)(az.A, { data: n }) })
    );
}
function mB(e) {
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
                for (let e of n.preDispatches ?? []) tP.h.dispatch(e);
                tP.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), i();
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
                for (let t of e.preDispatches ?? []) tP.h.dispatch(t);
                tP.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), i();
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            }
        }, [t, i]);
    return (0, r.jsxs)("div", {
        className: G()(mP.Dx, mP.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: mP.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: mP.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: mP.KA,
                children: [
                    (0, r.jsx)(m.$, { variant: "primary", size: "sm", text: "Apply", onClick: d }),
                    (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: i }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: "Purge store", onClick: c }),
                ],
            }),
        ],
    });
}
let mF = [
    {
        key: "name",
        cellClassName: mP.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function m$(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: aJ.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: mP.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(mG, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aJ.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(mG, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: aJ.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: mP.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(mB, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, aJ.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(aq, {
        className: mP.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aW.Ay, {
                className: G()(tF.jr, mP.nZ),
                children: [
                    (0, r.jsx)(aW.Ay.Icon, { icon: mL.g, tooltip: t.getName() }),
                    (0, r.jsx)(aW.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function mV() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = z.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(mU), [n])
            .filter((e) =>
                (function (e, t) {
                    let { store: a } = e;
                    return a.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [s, i] = o.useState(),
        d = n.find((e) => e._dispatchToken === s);
    return (0, r.jsxs)("div", {
        ref: e,
        className: G()(tF.nd, mP.nd),
        children: [
            (0, r.jsx)("div", {
                className: mP.KE,
                children: (0, r.jsx)(nv.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(t$, { columns: mF, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsx)(m$, { store: d, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var mW = a(91871),
    mz = a.n(mW);
let mH = [
        {
            key: "id",
            cellClassName: nL.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: nL.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: nL.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    mK = [
        {
            id: "details",
            name: "Details",
            group: aJ.fu.NONE,
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
                    d = nu()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(aW.Ay, {
                            className: G()(tF.jr, nL.nZ),
                            children: [
                                (0, r.jsx)(aW.Ay.Icon, { icon: nx.U, tooltip: t }),
                                (0, r.jsx)(aW.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(nR, {
                            className: nL.ZK,
                            children: [
                                (0, r.jsx)(nw, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, nE.i$)(d, "LLLL"),
                                        children: (0, nE.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nw, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nw, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nw, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nw, { name: "Override", children: (0, r.jsx)(nM, { value: a.override }) }),
                                (0, r.jsx)(nw, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nw, { name: "Excluded", children: (0, r.jsx)(nM, { value: l }) }),
                                (0, r.jsx)(nw, { name: "Previously tracked", children: (0, r.jsx)(nM, { value: o }) }),
                                (0, r.jsx)(nw, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function mY() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, z.yK)([nT], () => nT.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || mz()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        d = l.find((e) => e.key === s),
        { TabBar: c, renderSelectedTab: u } = (0, aJ.Ay)({ tabs: mK }, []),
        m = (0, z.bG)([nT], () => nT.trackTriggers),
        h = o.useCallback((e) => {
            tP.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = m ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: G()(tF.nd, nL.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nL.rh,
                children: [
                    (0, r.jsx)(lQ.m, {
                        text: x,
                        children: (0, r.jsx)(eG.K, {
                            size: "sm",
                            variant: m ? "active" : "primary",
                            icon: m ? l0.E : lZ.u,
                            "aria-label": x,
                            onClick: () => h(!m),
                        }),
                    }),
                    (0, r.jsx)(nv.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eG.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": a4.intl.string(a4.t.VkKicb),
                        icon: ng.u,
                        onClick: H.eY,
                    }),
                ],
            }),
            (0, r.jsx)(t$, { columns: mH, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsxs)(aq, {
                    className: nL.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(c, {}), u({ loggedTrigger: d })],
                }),
        ],
    });
}
var mq = a(512950),
    mJ = a(324861),
    mQ = a(243655);
let mX = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, mJ.A)();
    return (0, r.jsx)("div", {
        className: mQ.k,
        children: (0, r.jsxs)(d.n, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(m.$, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, aI.pX)(ei.BVt.APP);
                        },
                    }),
                }),
                (0, r.jsx)(mq.p, {
                    messageType: mq.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var mZ = a(899e3),
    m0 = a(731854);
let m1 = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    m2 = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    m3 = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    m8 = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function m6(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsx)(h.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(r2.S, { label: a, checked: !!n[t], onChange: () => (0, mZ.yn)({ [t]: !n[t] }) }, t);
            }),
        ],
    });
}
function m5() {
    let e = (0, z.bG)([mZ.Ay], () => mZ.Ay.getSnapshot()),
        t = (0, z.bG)([E.Ay], () => E.Ay.supports(m0.O5.VIDEO));
    return (0, r.jsxs)(x.Ip, {
        className: tF.nd,
        children: [
            (0, r.jsx)(j.c, { gap: 16 }),
            (0, r.jsx)(m6, { title: "Video Codecs (Sender)", toggles: m1, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(j.c, { gap: 16 }),
                          (0, r.jsx)(m6, { title: "Video Encoders", toggles: m2, state: e }),
                          (0, r.jsx)(j.c, { gap: 16 }),
                          (0, r.jsx)(m6, { title: "Capture Sources", toggles: m3, state: e }),
                          (0, r.jsx)(j.c, { gap: 16 }),
                          (0, r.jsx)(m6, { title: "Capture Options", toggles: m8, state: e }),
                      ],
                  })
                : null,
            (0, r.jsx)(j.c, { gap: 16 }),
            (0, r.jsx)(m6, {
                title: "Preview",
                toggles: [["alwaysShowCapturePreview", "Always Show (ignore main window focus)"]],
                state: e,
            }),
            (0, r.jsx)(j.c, { gap: 16 }),
        ],
    });
}
var m9 = a(36934);
function m4() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(x.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: m9.l7,
            children: [
                (0, r.jsx)(h.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)($.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(v.k, {
                            fullWidth: !0,
                            value: e,
                            onChange: t,
                            placeholder: "Input directory (wav files)",
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await b.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(v.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(m.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await b.A.fileManager.showOpenDialog({
                                    properties: ["openDirectory", "createDirectory"],
                                });
                                e.length > 0 && n(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(m.$, {
                    variant: i ? "critical-primary" : "primary",
                    text: i ? "Cancel" : "Start Processing",
                    onClick: i
                        ? function () {
                              E.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  E.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)($.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(h.E, {
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
                                            className: m9.TZ,
                                            children: (0, r.jsxs)(h.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? m9.$D : m9.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(h.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var m7 = a(207898),
    he = a.n(m7),
    ht = a(32880),
    ha = a(827343),
    hn = a(964486),
    hl = a(602674),
    hs = a(625841),
    hi = a(74848),
    hr = a(573908);
function ho(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(h.E, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(h.E, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(h.E, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(h.E, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(h.E, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(h.E, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function hd(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(cJ.N, {
        collapsibleContent: (0, r.jsx)(ho, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsxs)(B.D, {
                onClick: s,
                children: [
                    (0, r.jsxs)(h.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(B.D, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), a ? l() : n(t);
                        },
                        children: a ? (0, r.jsx)(l0.E, { size: "xxs" }) : (0, r.jsx)(lZ.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(B.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([he()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, r.jsx)(ht.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function hc() {
    let { name: e } = (0, hi.x5)(m0.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        s = (0, z.bG)([E.Ay], () => E.Ay.getKrispSuppressionLevel()),
        [i, d] = o.useState(null),
        u = o.useRef(null),
        m = o.useRef(null),
        [p, v] = o.useState(0.5),
        {
            krispModels: j,
            krispModelOverride: b,
            inputMode: f,
            echoCancellation: y,
            autoThreshold: _,
            vadUseKrisp: C,
            vadKrispActivationThreshold: S,
            noiseCancellation: N,
            noiseSuppression: A,
            noiseSuppressionSupported: k,
            noiseCancellationSupported: I,
            noiseCancellationEnableStats: D,
            vadDuringPreProcess: T,
        } = (0, z.cf)([E.Ay], () => ({
            krispModels: E.Ay.getKrispModels(),
            krispModelOverride: E.Ay.getKrispModelOverride(),
            echoCancellation: E.Ay.getEchoCancellation(),
            autoThreshold: E.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: E.Ay.getModeOptions().vadUseKrisp,
            inputMode: E.Ay.getMode(),
            vadKrispActivationThreshold: E.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: E.Ay.getNoiseCancellation(),
            noiseSuppression: E.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: E.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: E.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: E.Ay.getKrispEnableStats(),
            vadDuringPreProcess: E.Ay.getModeOptions().vadDuringPreProcess,
        })),
        O = N ? "KRISP" : A ? "STANDARD" : "NONE",
        R = (0, hl.v)(),
        w = o.useCallback(() => {
            u.current?.stop(), (u.current = null), d(null);
        }, []);
    function M() {
        E.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function L(e) {
        if ((t && M(), w(), null == R)) return;
        let a = R.createBufferSource();
        (a.buffer = e.audioBuffer),
            (m.current = R.createGain()),
            (m.current.gain.value = p),
            a.connect(m.current),
            m.current.connect(R.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            d(e);
    }
    o.useEffect(() => {
        w();
    }, [w]),
        (0, hn.l0)(() => {
            ha.A.setMode(E.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let P = [];
    return (
        I && P.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        k && P.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        P.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(x.Ip, {
            className: tF.nd,
            children: (0, r.jsxs)("div", {
                className: hr.l,
                children: [
                    (0, r.jsx)(h.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(hs.U, {
                        label: "Input Device",
                        deviceType: m0.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(g.l, {
                        label: "Noise Cancellation",
                        value: O,
                        onSelectionChange: (e) => {
                            ha.A.setNoiseCancellation("KRISP" === e), ha.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: P,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(uk.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: ha.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(g.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: b,
                                    options: j.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        ha.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(c.d, {
                                    label: "Enable Stats",
                                    checked: D,
                                    onChange: (e) => ha.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    f === m0.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.d, {
                                    label: "Auto Threshold",
                                    checked: _,
                                    onChange: (e) => ha.A.setMode(m0.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                _ &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.d, {
                                                label: "Use Krisp VAD",
                                                checked: C,
                                                onChange: (e) => ha.A.setMode(m0.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            C &&
                                                (0, r.jsx)(uk.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: S,
                                                    onValueChange: (e) =>
                                                        ha.A.setMode(m0.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, r.jsx)(c.d, {
                                    label: "Run Before Processing",
                                    checked: T ?? !1,
                                    onChange: (e) => ha.A.setMode(m0.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(c.d, {
                        label: "Echo Cancellation",
                        checked: y,
                        onChange: (e) => ha.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)($.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(nm.$n, {
                                color: t ? nm.$n.Colors.RED : nm.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          w(),
                                              a(!0),
                                              ha.A.setLoopback("krisp_test", !0),
                                              E.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  a(!1), ha.A.setLoopback("krisp_test", !1);
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
                                                          echoCancellation: y,
                                                          krispSuppressionLevel: s,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(uk.A, {
                        label: "Volume",
                        initialValue: p,
                        asValueChanges: function (e) {
                            null != m.current && ((m.current.gain.value = e), v(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)($.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(hd, { recording: e, playing: e === i, onPlay: L, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var hu = a(803306),
    hm = a(243217),
    hh = a(189213),
    hx = a(935208),
    hp = a(878784);
let hg = [
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
function hv() {
    let [e, t] = o.useState(!1),
        a = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        n = (0, hp.Lh)(),
        l = (0, z.bG)([r8.A], () => r8.A.getPremiumTypeSubscription()),
        s = null != n ? (sx.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let s = {
                    subscription_status: ei.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: hx.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await n2.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: !1 }),
                    await (0, hu.eO)(a.id),
                    await (0, dU.hP)(),
                    t(!1);
            },
            [l, a],
        );
    if (null != a && null != l)
        return (0, r.jsx)(g.l, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: e,
            value: s,
            options: hg,
            onSelectionChange: i,
        });
}
var hj =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    hb =
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
async function hf(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await n2.Bo.post({
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
var hy = a(601107);
let hE = {
        [ei.Dmq.UNPAID]: "Unpaid",
        [ei.Dmq.ACTIVE]: "Active",
        [ei.Dmq.PAST_DUE]: "Past Due",
        [ei.Dmq.CANCELED]: "Canceled",
        [ei.Dmq.ENDED]: "Ended",
        [ei.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [ei.Dmq.BILLING_RETRY]: "Billing Retry",
        [ei.Dmq.PAUSED]: "Paused",
        [ei.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    h_ = {
        [hy.qf.UNKNOWN]: "Unknown",
        [hy.qf.ADMIN]: "Admin",
        [hy.qf.USER]: "User",
        [hy.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [hy.qf.DEFERRED_START]: "Deferred Start",
        [hy.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    hC = [
        { id: "unpaid", label: "Unpaid", value: ei.Dmq.UNPAID },
        { id: "active", label: "Active", value: ei.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: ei.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: ei.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: ei.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: ei.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: ei.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: ei.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: ei.Dmq.PAUSE_PENDING },
    ];
function hS(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(nu()()),
        [c, u] = o.useState(nu()().format("HH:mm")),
        [m, x] = o.useState(!1),
        [p, g] = o.useState(void 0),
        v = async () => {
            if (null == s) return void g("Please select a target date");
            let [e, l] = c.split(":").map(Number),
                i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            x(!0), g(void 0);
            try {
                await hf(t.id, hb.TIME_TRAVEL, { targetDate: i, paymentType: hj.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                g(e.body?.message || e.message || "Failed to time travel");
            } finally {
                x(!1);
            }
        };
    return (0, r.jsx)(hh.Modal, {
        transitionState: l,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: v, disabled: m || null == s },
        ],
        children: (0, r.jsxs)($.B, {
            gap: 16,
            children: [
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(iv.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(d.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: c,
                        onChange: (e) => {
                            u(e.target.value);
                        },
                        className: oj.Qn,
                    }),
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)($.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(h.E, {
                                    variant: "text-xs/normal",
                                    className: oj.JX,
                                    children: ["Start: ", nu()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(h.E, {
                                    variant: "text-xs/normal",
                                    className: oj.JX,
                                    children: ["End: ", nu()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != p && (0, r.jsx)(F.w, { type: "critical", children: p }),
            ],
        }),
    });
}
function hN(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [s, i] = o.useState(!1),
        [c, u] = o.useState(!1),
        [x, p] = o.useState(!1),
        [v, j] = o.useState(!1),
        [b, f] = o.useState(null),
        y = (e) => {
            let t = new Date(e);
            return hx.default.fromTimestamp(t.getTime());
        },
        E = async (e) => {
            let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: y(a) } : null),
                    ...(null != s ? { ended_at: y(s) } : null),
                };
            await n2.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l();
        },
        _ = async () => {
            try {
                await hf(n.id, hb.RENEW, {
                    targetDate: nu()(new Date()),
                    paymentType: hj.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                f(e.body?.message || e.message || "Failed to renew subscription");
            }
            l();
        },
        C = sx.hd[n.planIdFromItems]?.premiumType === sx.PremiumTypes.TIER_0,
        S = n.metadata?.ended_at,
        N = null != S ? new Date(S).toISOString().substring(0, 10) : "",
        A = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in hE) ? hE[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        k = n.hasActiveTrial,
        I = n.metadata?.active_discount_id != null;
    return (
        k && A.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        I && A.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== ei.Dmq.ACTIVE &&
            A.push({
                id: "dates",
                label: `Dates: ${(0, nE.i$)(n.createdAt, "LL")} - ${(0, nE.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === ei.Dmq.PAUSED &&
            A.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in h_ ? h_[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: G()(sy.Nr, C ? sy.Qf : sy.C1),
            children: (0, r.jsxs)(d.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in sx.hd ? sx.hd[a].name : `Unknown plan id ${a}`}`,
                className: oj.lI,
                children: [
                    (0, r.jsx)(og.C, {
                        items: A,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    k &&
                        (0, r.jsxs)("div", {
                            className: oj.VK,
                            children: [
                                (0, r.jsxs)(B.D, {
                                    onClick: () => {
                                        p(!x);
                                    },
                                    className: oj.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(h.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sm.A, { direction: x ? sm.A.Directions.UP : sm.A.Directions.DOWN }),
                                    ],
                                }),
                                x &&
                                    (0, r.jsxs)("ul", {
                                        className: oj.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(h.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, nE.i$)(n.trialEndsAt, "LL")
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
                            className: oj.VK,
                            children: [
                                (0, r.jsxs)(B.D, {
                                    onClick: () => {
                                        j(!v);
                                    },
                                    className: oj.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(h.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sm.A, { direction: v ? sm.A.Directions.UP : sm.A.Directions.DOWN }),
                                    ],
                                }),
                                v &&
                                    (0, r.jsxs)("ul", {
                                        className: oj.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, nE.i$)(
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
                            className: oj.VK,
                            children: [
                                (0, r.jsxs)(B.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: oj.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(h.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(sm.A, { direction: s ? sm.A.Directions.UP : sm.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: oj.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(h.E, { variant: "text-md/bold", children: t }),
                                                        (0, r.jsx)(h.E, { variant: "text-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: oj.VK,
                        children: [
                            (0, r.jsxs)(B.D, {
                                onClick: () => {
                                    u(!c);
                                },
                                className: oj.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(h.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(sm.A, { direction: c ? sm.A.Directions.UP : sm.A.Directions.DOWN }),
                                ],
                            }),
                            c &&
                                (0, r.jsxs)($.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(g.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: hC,
                                            onSelectionChange: (e) => {
                                                E({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)($.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(m.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => _(),
                                                        }),
                                                        (0, r.jsx)(m.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, e$.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(hS, {
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
                                                        className: oj.z3,
                                                        children: (0, r.jsx)(F.w, { type: "critical", children: b }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)($.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(iv.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: nu()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => E({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(hv, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(iv.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== N ? nu()(N) : void 0,
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
let hA = async () =>
        (
            await n2.Bo.get({
                url: ei.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => hm.A.createFromServer(e)),
    hk = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: sx.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: sx.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: sx.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: sx.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: sx.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: sx.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: sx.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: sx.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: sx.gD.PREMIUM_GROUP_MONTH },
    ];
function hI() {
    let e = (0, z.bG)([r8.A], () => r8.A.getPremiumTypeSubscription()),
        t = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
        [i, d] = o.useState(!1),
        c = o.useCallback(async () => {
            try {
                d(!0), await (0, dU.hP)(), await (0, hu.eO)(t.id), s(await hA());
            } finally {
                d(!1);
            }
        }, [t]);
    o.useEffect(() => {
        c();
    }, [c]);
    let u = o.useMemo(() => l.filter((e) => e.status !== ei.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]),
        h = async () => {
            await n2.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await c();
        },
        p = async () => {
            await n2.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await c();
        };
    return (0, r.jsx)(x.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: sy.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: sy.dL,
                    children: [
                        (0, r.jsx)(W.D, {
                            variant: "heading-lg/semibold",
                            className: tF.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eG.K, {
                            "aria-label": "Refresh",
                            icon: su.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: c,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: G()([sy.uW, sy.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(g.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: hk,
                                    onSelectionChange: n,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: h,
                                }),
                            ],
                        }),
                }),
                null != e && (0, r.jsx)(hN, { subscription: e, onUpdated: c }),
                (0, r.jsx)(W.D, { variant: "heading-lg/semibold", className: tF.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: G()([sy.uW, sy.Uo]),
                    children: (0, r.jsx)(m.$, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: p,
                    }),
                }),
                u.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(W.D, {
                                variant: "heading-lg/semibold",
                                className: tF.wx,
                                children: "Previous Subscriptions",
                            }),
                            u.map((e) => (0, r.jsx)(hN, { subscription: e, onUpdated: c }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var hD = a(284009),
    hT = a.n(hD),
    hO = a(889137),
    hR = a(412703),
    hw = a(440703),
    hM = a(267548),
    hL = a(668824),
    hP = a(695366),
    hU = a(993077),
    hG = a(507107),
    hB = a(801365),
    hF = a(792620),
    h$ = a(241124),
    hV = a(242939),
    hW = a(717695),
    hz = a(961974),
    hH = a(127219),
    hK = a(262514),
    hY = a(19809),
    hq = a(317097),
    hJ = a(452027),
    hQ = a(922016),
    hX = a(714385),
    hZ = a(359923);
let h0 = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(hJ.D, {
        label: l,
        children: (0, r.jsx)(hQ.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(cQ.VN, { ...e, value: a, onChange: (e) => n(t, (0, hq.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(B.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: hZ.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(hX.d, { size: "xs", color: "currentColor", className: hZ.WY }),
                }),
        }),
    });
};
var h1 = a(346055);
let h2 = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(h1.M, {
        children: (0, r.jsx)(hU.Z, {
            className: G()(hZ.Rx, { [hZ.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: hZ.AZ,
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
var h3 = a(643374);
let h8 = function (e) {
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
            (0, r.jsx)(hJ.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(h3.A, {
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
    h6 = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: n, title: l } = e,
            [s, i] = o.useState("");
        return (
            o.useEffect(() => {
                i(a ?? "");
            }, [a]),
            (0, r.jsx)(v.k, {
                label: l,
                value: s,
                onChange: function (e) {
                    i(e), n(t, e);
                },
            })
        );
    };
var h5 = a(347135);
let h9 = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, h5.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
        l = [
            { id: "none", label: "NONE", value: null },
            ...n.map((e) => ({ id: e.id, label: e.config.messages.questName, value: e })),
        ];
    return (0, r.jsx)(g.l, {
        label: "Prefill with Quest",
        options: l,
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
var h4 = a(843282),
    h7 = a(972886);
let xe = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    xt = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)($.B, {
            gap: 20,
            children: [
                (0, r.jsx)(h4.Pw, {
                    label: "Task Type(s)",
                    className: h7.Z,
                    placeholder: "Select Task Preset",
                    options: xe,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = hR.n.PLAY_ON_PLAYSTATION in t || hR.n.PLAY_ON_XBOX in t),
                            (l = hR.n.PLAY_ON_DESKTOP in t),
                            (s = hR.n.STREAM_ON_DESKTOP in t),
                            (i = hR.n.WATCH_VIDEO in t),
                            (r = hR.n.PLAY_ACTIVITY in t),
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
                                        a[hR.n.STREAM_ON_DESKTOP] = { type: hR.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[hR.n.PLAY_ON_DESKTOP] = { type: hR.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[hR.n.PLAY_ON_PLAYSTATION] = {
                                            type: hR.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[hR.n.PLAY_ON_XBOX] = {
                                                type: hR.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[hR.n.PLAY_ON_DESKTOP] = { type: hR.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[hR.n.PLAY_ON_PLAYSTATION] = {
                                                type: hR.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[hR.n.PLAY_ON_XBOX] = {
                                                type: hR.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[hR.n.WATCH_VIDEO] = {
                                            type: hR.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[hR.n.PLAY_ACTIVITY] = { type: hR.n.PLAY_ACTIVITY, target: t };
                                }
                                return a;
                            })(e, a),
                        });
                    },
                    serialize: String,
                    "data-migration-pending": !0,
                }),
                (0, r.jsx)(v.k, {
                    label: "Task Duration",
                    value: String(a / n8.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= n8.A.Seconds.MINUTE;
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
var xa = a(818348);
let xn = function () {
    let e = (0, ec.Ay)();
    return (0, r.jsx)(hJ.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(eu.zy, {
                    theme: xa.NJ.LIGHT,
                    isSelected: e === xa.NJ.LIGHT,
                    onSelect: () => (0, cP.u_)({ theme: xa.NJ.LIGHT }),
                }),
                (0, r.jsx)(eu.zy, {
                    theme: xa.NJ.DARK,
                    isSelected: e === xa.NJ.DARK,
                    onSelect: () => (0, cP.u_)({ theme: xa.NJ.DARK }),
                }),
            ],
        }),
    });
};
var xl =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let xs = function (e) {
    let { onChange: t, value: a } = e;
    return (0, r.jsx)(g.l, {
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
var xi = a(617986);
let xr = ["png", "gif", "webp"],
    xo = [...xr, "jpg", "jpeg"],
    xd = Array.from(new Set([...xo, "gif", "mp4", "webm"]));
function xc() {
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
let xu = "1193992107035983872",
    xm = {
        id: xu,
        preview: !0,
        config: {
            id: xu,
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
                        type: hw.l.REWARD_CODE,
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
                joinOperator: hL.K.AND,
                tasks: { [hR.n.PLAY_ON_DESKTOP]: { type: hR.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: hM.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function xh() {
    var e;
    let [t, n] = o.useState(xm),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(xl.UNENROLLED),
        [d, u] = o.useState(!1),
        [p, g] = o.useState(!1),
        [v, j] = o.useState(null),
        b =
            ((e = t.config),
            (0, hO.YW)(e)
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
            var n, s;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (s = { [e]: a }),
                    (0, hO.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function y(e, a) {
        let n = t.config.taskConfigV2.tasks,
            s = n[hR.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [hR.n.WATCH_VIDEO]: { ...s, assets: i } } },
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
                    (0, hO.YW)(n)
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
                    (0, hO.YW)(s)
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
        (0, hB.tU)(t.config) && (0, xi.hJ)(t, hG.uF.GIFT_INVENTORY_FOR_YOU, hG.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * n8.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => hR.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    hT()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[hR.n.WATCH_VIDEO];
    return (0, r.jsxs)(x.Ip, {
        className: hZ.kL,
        children: [
            (0, r.jsx)(W.D, { variant: "heading-lg/bold", className: hZ.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: hZ.OA,
                children: (0, r.jsx)(h9, {
                    onSelect: function (e) {
                        j(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return xl.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return xl.CLAIMED;
                                        if (null != e.userStatus.completedAt) return xl.COMPLETED_100;
                                        let t = (0, hF.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? xl.COMPLETED_100
                                            : a / n >= 0.75
                                              ? xl.COMPLETED_75
                                              : a / n >= 0.5
                                                ? xl.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? xl.COMPLETED_25
                                                  : xl.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: v,
                }),
            }),
            (0, r.jsx)(W.D, { variant: "heading-md/semibold", className: hZ.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: hZ.OA,
                children: (0, r.jsx)(xt, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(W.D, { variant: "heading-md/semibold", className: hZ.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: hZ.OA,
                children: [
                    (0, r.jsx)(h6, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: E,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(h6, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: E,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(h6, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: E,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, r.jsx)(h6, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[hR.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [hR.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(W.D, { variant: "heading-md/semibold", className: hZ.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: hZ.OA,
                children: [
                    (0, r.jsx)(h8, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: f,
                        filters: xd,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(h8, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: f,
                        filters: xd,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(h8, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: f,
                        filters: xd,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(h8, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: f,
                        filters: xd,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(h8, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: f,
                        filters: [...xo, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(h8, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: f,
                        filters: [...xr, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h8, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: y,
                                    filters: xd,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(h8, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: y,
                                    filters: xd,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(h8, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: y,
                                    filters: xo,
                                    initialValue: k?.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            b.map((e, a) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(W.D, {
                                variant: "heading-md/semibold",
                                className: hZ.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: hZ.OA,
                                children: [
                                    (0, r.jsx)(h6, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => _(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(h6, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => _(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== hw.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(h8, {
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
                                                                (0, hO.YW)(s)
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
                                            filters: xd,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)($.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(W.D, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, r.jsx)(m.$, {
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
            (0, r.jsx)(W.D, { variant: "heading-md/semibold", className: hZ.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: hZ.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: hZ.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(h0, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: C,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(h0, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: C,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: hZ.OA, children: (0, r.jsx)(xn, {}) }),
                    (0, r.jsx)(xs, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case xl.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case xl.ENROLLED:
                                    l({ ...t, userStatus: xc({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case xl.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: xc({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case xl.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: xc({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case xl.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: xc({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case xl.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: xc({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case xl.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: xc({
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
            (0, r.jsx)(W.D, { variant: "heading-lg/bold", className: hZ.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: hZ.$$,
                children: [
                    (0, r.jsxs)(h2, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: hZ.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(h.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: hZ.ok,
                                        children: (0, r.jsx)(h$.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(hW.A, { children: (0, r.jsx)(hV.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(h2, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(h$.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(hY.Ay, {
                                    quest: t,
                                    className: hZ.d,
                                    questContent: hG.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: hG.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(h2, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(h.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: hZ.l4,
                                children: (0, r.jsx)(h$.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: hZ.Jr,
                                        children: (0, r.jsx)(hz.A, {
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
                        className: hZ.NY,
                        children: (0, r.jsx)(c.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(h2, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            p
                                ? (0, r.jsx)(hH.l, { questId: t.id })
                                : (0, r.jsx)(
                                      hK.M,
                                      {
                                          quest: t,
                                          location: hG.uF.QUESTS_EMBED,
                                          sourceQuestContent: hG.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: hZ.NY,
                        children: (0, r.jsx)(c.d, { label: "Invalid Quests Embed:", checked: p, onChange: g }),
                    }),
                    A &&
                        (0, r.jsxs)(h2, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, e$.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("22448"),
                                                a.e("83485"),
                                                a.e("88147"),
                                                a.e("92868"),
                                                a.e("63408"),
                                                a.e("77375"),
                                                a.e("19580"),
                                            ]).then(a.bind(a, 834135));
                                            return (a) =>
                                                (0, r.jsx)(n, {
                                                    ...a,
                                                    openStartClockTime: e,
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: hG.uF.INTERNAL_PREVIEW_TOOL,
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
class xx extends o.Component {
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
                  className: hZ.TA,
                  children: [
                      (0, r.jsx)(hP.E, { className: hZ.Yw }),
                      (0, r.jsx)(W.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(m.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(hU.Z, {
                              className: hZ.Fx,
                              children: (0, r.jsx)("code", { className: hZ.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(xh, {}, t);
    }
}
var xp = a(913122),
    xg = a(839214),
    xv = a(77138),
    xj = a(450827),
    xb = a(626584),
    xf = a(174768),
    xy = a(205761),
    xE = a(860071),
    x_ = a(696451),
    xC = a(860689),
    xS = a(926140);
let xN = new xb.A("SearchDebugUtils");
function xA() {
    xN.info("--------------------------");
}
function xk() {
    let e = xf.A.getProps();
    xN.info("START Quick Switcher State"),
        xN.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((xN.info(`Result Type: ${e.type}`), e.type)) {
                case xS.rD.GUILD:
                    xN.info(`guild id: ${e.record.id}`);
                    break;
                case xS.rD.TEXT_CHANNEL:
                case xS.rD.VOICE_CHANNEL:
                    xN.info(`channel type: ${e.record.type}`),
                        xN.info(`channel id: ${e.record.id}`),
                        xN.info(`name: ${e.record.name}`);
                    break;
                case xS.rD.DM:
                    xN.info(`channel type: ${e.record.type}`),
                        xN.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (xN.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = ea.default.getUser(e);
                                null != t &&
                                    (xN.info(`recipient username: ${t.username}`),
                                    xN.info(`recipient global name: ${eo.Ay.getGlobalName(t)}`),
                                    xN.info(`recipient nickname: ${aE.A.getNickname(t.id)}`));
                            }));
                    break;
                case xS.rD.GROUP_DM:
                    xN.info(`channel type: ${e.record.type}`),
                        xN.info(`channel id: ${e.record.id}`),
                        xN.info(`name: ${(0, af.m1)(e.record, ea.default, aE.A)}`),
                        e.record.isGroupDM() &&
                            (xN.info(`default name: ${(0, af.ks)(e.record, ea.default, aE.A)}`),
                            xN.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = ea.default.getUser(e);
                                null != t &&
                                    (xN.info(`recipient username: ${t.username}`),
                                    xN.info(`recipient global name: ${eo.Ay.getGlobalName(t)}`),
                                    xN.info(`recipient nickname: ${aE.A.getNickname(t.id)}`));
                            }));
                    break;
                case xS.rD.USER:
                    xN.info(`user id: ${e.record.id}`),
                        xN.info(`username: ${e.record.username}`),
                        xN.info(`global name: ${eo.Ay.getGlobalName(e.record)}`),
                        xN.info(`nickname: ${aE.A.getNickname(e.record.id)}`),
                        xN.info(`guild nicknames: ${x_.Ay.getNicknames(e.record.id)}`);
            }
            xN.info(`frecency score: ${xy.A.getScoreWithoutFetchingLatest(e.record.id)}`), xA();
        }),
        xN.info("END Quick Switcher State\n");
}
async function xI() {
    xN.info("START User Search Worker State");
    let e = await xj.A.requestDebugState();
    null == e
        ? xN.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              xN.info(`id: ${t}`),
                  xN.info(`username: ${a.username}`),
                  xN.info(`global name: ${a.globalName}`),
                  xN.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      xN.info(`guild id: ${t}`), xN.info(`guild nickname: ${a}`);
                  }),
                  xA();
          }),
          xN.info("END User Search Worker State\n"));
}
async function xD() {
    let e = await xj.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = ea.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = hx.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function xT(e) {
    let t = await xj.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = a6.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = x_.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = xE.A.getDebugState(e);
    return { user: ea.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var xO = a(929948);
function xR(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.$, {
                variant: "primary",
                onClick: l,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : s,
            }),
            null != n &&
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: xO.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: xO.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let xw = (0, xg.D)(() => ({
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
function xM() {
    let e = xw.useField("includeFrecency"),
        t = xw.useField("includeFriends"),
        a = xw.useField("includeDMs"),
        n = xw.useField("includeGDMs"),
        l = xw.useField("includeQuickSwitcherState"),
        s = xw.useField("includeUserSearchWorkerState"),
        i = xw.useField("isUploading"),
        u = xw.useField("isSuccess"),
        m = xw.useField("errorMessage"),
        h = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = xw.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    xw.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = aE.A.getFriendIDs()),
                            xN.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = ea.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = eo.Ay.getGlobalName(t),
                                    l = aE.A.getNickname(t.id),
                                    s = x_.Ay.getNicknames(t.id);
                                xN.info(`username: ${a}`),
                                    xN.info(`global name: ${n}`),
                                    xN.info(`nickname: ${l}`),
                                    xN.info(`guild nicknames: ${s}`),
                                    xA();
                            }),
                            xN.info("END Discord Friends\n")),
                        a &&
                            ((r = ay.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            xN.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, af.m1)(e, ea.default, aE.A),
                                    a = (0, af.ks)(e, ea.default, aE.A);
                                xN.info(`id: ${e.id}`),
                                    xN.info(`name: ${t}`),
                                    xN.info(`default name: ${a}`),
                                    xN.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ea.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = eo.Ay.getGlobalName(t),
                                            l = aE.A.getNickname(t.id),
                                            s = x_.Ay.getNicknames(t.id);
                                        xN.info(`username: ${a}`),
                                            xN.info(`global name: ${n}`),
                                            xN.info(`nickname: ${l}`),
                                            xN.info(`guild nicknames: ${s}`),
                                            xA();
                                    });
                            }),
                            xN.info("END Logging Group DM Channels\n"),
                            xN.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, af.m1)(e, ea.default, aE.A);
                                xN.info(`id: ${e.id}`), xN.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = ea.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = eo.Ay.getGlobalName(n),
                                    i = aE.A.getNickname(n.id);
                                xN.info(`username: ${l}`),
                                    xN.info(`global name: ${s}`),
                                    xN.info(`nickname: ${i}`),
                                    xA();
                            }),
                            xN.info("END Logging DM Channels\n")),
                        n &&
                            ((c = ay.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            xN.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, af.m1)(e, ea.default, aE.A),
                                    a = (0, af.ks)(e, ea.default, aE.A);
                                xN.info(`id: ${e.id}`),
                                    xN.info(`name: ${t}`),
                                    xN.info(`default name: ${a}`),
                                    xN.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ea.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = eo.Ay.getGlobalName(t),
                                            l = aE.A.getNickname(t.id),
                                            s = x_.Ay.getNicknames(t.id);
                                        xN.info(`username: ${a}`),
                                            xN.info(`global name: ${n}`),
                                            xN.info(`nickname: ${l}`),
                                            xN.info(`guild nicknames: ${s}`),
                                            xA();
                                    });
                            }),
                            xN.info("END Logging Group DM Channels\n"),
                            xN.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, af.m1)(e, ea.default, aE.A);
                                xN.info(`id: ${e.id}`), xN.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = ea.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = eo.Ay.getGlobalName(n),
                                    i = aE.A.getNickname(n.id);
                                xN.info(`username: ${l}`),
                                    xN.info(`global name: ${s}`),
                                    xN.info(`nickname: ${i}`),
                                    xA();
                            }),
                            xN.info("END Logging DM Channels\n")),
                        e &&
                            ((h = xy.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, xC.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            xN.info("START Frecency"),
                            xN.info("Guilds"),
                            x.forEach((e) => {
                                let t = xy.A.getScoreWithoutFetchingLatest(e.id);
                                xN.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            xA(),
                            xN.info("DM Channels"),
                            g.forEach((e) => {
                                let t = xy.A.getScoreWithoutFetchingLatest(e.id);
                                xN.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xA(),
                            xN.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = xy.A.getScoreWithoutFetchingLatest(e.id);
                                xN.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    xN.info(`default name: ${(0, af.ks)(e, ea.default, aE.A)}`),
                                    xN.info(`name: ${(0, af.m1)(e, ea.default, aE.A)}`);
                            }),
                            xA(),
                            xN.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = xy.A.getScoreWithoutFetchingLatest(e.id);
                                xN.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xA(),
                            xN.info("END Frecency\n")),
                        l && xk(),
                        s && xI(),
                        await (0, xv.a)(ei.Umv.WEB_APP),
                        xw.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new xp.LG(t);
                    xw.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    xw.setState({ isUploading: !1 });
                }
        }, []);
    return (0, r.jsxs)(d.n, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, r.jsx)(c.d, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => xw.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(c.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => xw.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(c.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => xw.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(c.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => xw.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(c.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => xw.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(c.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => xw.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(xR, {
                isUploading: i,
                isSuccess: u,
                errorMessage: m,
                onClick: h,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let xL = (0, xg.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function xP() {
    let e = xL.useField("userIds"),
        t = xL.useField("isLoading"),
        a = xL.useField("isSuccess"),
        n = xL.useField("errorMessage"),
        l = xL.useField("lastRunAt"),
        s = o.useCallback(async () => {
            xL.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await xD();
                xL.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                xL.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                xL.setState({ isLoading: !1 });
            }
        }, []),
        i = o.useMemo(
            () =>
                e.map((e) => {
                    let t = ea.default.getUser(e),
                        a = null != t ? eo.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: xO.J1,
                            children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: `${a} (${e})` }),
                        },
                        e,
                    );
                }),
            [e],
        );
    return (0, r.jsx)(d.n, {
        label: "Diff User State",
        description: "Click to generate a diff between the client user state and the user worker state.",
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(m.$, { onClick: s, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: xO.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: xO.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(h.E, { variant: "text-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(h.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: xO.uk, children: i }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(h.E, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let xU = (0, xg.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function xG() {
    let e = xU.useField("isRecording"),
        t = xU.useField("isUploading"),
        a = xU.useField("isSuccess"),
        n = xU.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = xf.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), xk());
        }, []);
    o.useEffect(() => {
        if (e) return xf.A.addChangeListener(i), () => xf.A.removeChangeListener(i);
    }, [i, e]);
    let c = o.useCallback(async () => {
        let { isUploading: e } = xU.getState();
        if (!e)
            try {
                xU.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, xv.a)(ei.Umv.WEB_APP),
                    xU.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new xp.LG(t);
                xU.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                xU.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(d.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(mq.p, {
                messageType: mq.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(aQ.e, {
                children: [
                    (0, r.jsx)(m.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => xU.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(xR, {
                        isUploading: t,
                        isSuccess: a,
                        errorMessage: n,
                        onClick: c,
                        title: "Upload Session Logs",
                    }),
                ],
            }),
        ],
    });
}
var xB = a(145497);
let xF = (0, xg.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function x$(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: xO.J1,
                children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: xO.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: xO.J1,
                            children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = a6.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: xO.J1,
                                      children: [
                                          (0, r.jsx)(xB.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(h.E, { variant: "text-sm/normal", children: t.name }),
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
function xV(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(s8.y, { size: "sm", color: eV.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(hP.E, { size: "sm", color: eV.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: xO.N6,
        children: [
            (0, r.jsxs)("div", {
                className: xO.J1,
                children: [
                    i({ ok: null != a }),
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: xO.uk,
                    children: (0, r.jsx)("div", {
                        className: xO.J1,
                        children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: xO.J1,
                children: [
                    i({ ok: null != n }),
                    (0, r.jsx)(h.E, {
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
                    className: xO.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: xO.J1,
                            children: (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xO.J1,
                            children: (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xO.J1,
                            children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: xO.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: xO.J1,
                                        children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = a6.A.getGuild(t),
                                        l = ay.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: xO.J1,
                                            children: [
                                                null != n && (0, r.jsx)(xB.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, af.m1)(l, ea.default, aE.A),
                                                    }),
                                                (0, r.jsx)(h.E, { variant: "text-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: ` - ${a}` }),
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
                className: xO.J1,
                children: [
                    i({ ok: l.length > 0 }),
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: xO.uk,
                    children: l.map((e) => {
                        let t = a6.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: xO.J1,
                                children: [
                                    (0, r.jsx)(xB.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(h.E, {
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
                className: xO.J1,
                children: [
                    (0, r.jsx)(cq.m, { size: "sm" }),
                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: xO.uk,
                    children: [
                        (0, r.jsx)(x$, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(x$, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(x$, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function xW() {
    let e = o.useCallback((e) => {
            xF.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = xF.getState();
            if (!t && null != e) {
                xF.setState({ loading: !0, error: null });
                try {
                    let t = await xT(e);
                    xF.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new xp.LG(t);
                    xF.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    xF.setState({ loading: !1 });
                }
            }
        }, []),
        a = xF.useField("loading");
    return (0, r.jsxs)("div", {
        className: xO.$n,
        children: [
            (0, r.jsx)(v.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(m.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function xz() {
    let e = xF.useField("state"),
        t = xF.useField("error");
    return (0, r.jsxs)(d.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(xW, {}),
            null != t &&
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: xO.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(xV, { userState: e }),
        ],
    });
}
function xH() {
    return (0, r.jsxs)(x.Ip, {
        className: xO.nd,
        children: [
            (0, r.jsx)(xG, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(xM, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(xz, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(xP, {}),
        ],
    });
}
var xK = a(761508),
    xY = a(599147),
    xq = a(808411),
    xJ = a(624716),
    xQ = a(398590),
    xX = a(764451),
    xZ = a(67956),
    x0 = a(52822),
    x1 = a(642153);
let x2 = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    x3 = {
        "virtual-currency": function () {
            return (0, r.jsxs)(x0.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(m.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = xZ.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (xX.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, xQ.id)(ei.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(xY.o, {}), (0, r.jsx)(xq.A, {}), (0, r.jsx)(xJ.A, {})] }),
    };
function x8() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => x3[e], [e]);
    return (0, r.jsxs)("div", {
        className: G()(tF.nd, x1.kL),
        children: [
            (0, r.jsx)(xK.V, {
                className: x1.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: x2.map((e) => (0, r.jsx)(xK.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(x.Ar, { children: (0, r.jsx)("div", { className: x1.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var x6 = a(718446),
    x5 = a(766075),
    x9 = a(355097);
let x4 = (0, xg.D)(() => ({ urlString: "", error: null })),
    x7 = Object.entries(x9.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function pe() {
    let [e, t] = o.useState(),
        a = x4.useField("urlString"),
        n = x4.useField("error"),
        l = o.useCallback(() => {
            let e = x4.getField("urlString");
            if (null == e || "" === e) return void x4.setState({ error: "URL is required" });
            let t = (0, x6.parseSettingsUrl)({ path: e });
            ((0, x6.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? x4.setState({ error: "String did not match expected format" })
                : (0, x5.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(d.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(at.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: x7,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = x9.od[e].split("/");
                        x4.setState({ urlString: ei.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(v.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => x4.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(aQ.e, {
                children: [
                    (0, r.jsx)(m.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(m.$, {
                        variant: "secondary",
                        onClick: () => (0, ny.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var pt = a(780964);
let pa = (0, xg.D)(() => ({ setting: pt.X.ACCOUNT_PANEL }));
function pn() {
    let e = pa.useField("setting"),
        t = o.useCallback(() => {
            (0, x5.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(pt.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(d.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(at.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => pa.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(m.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var pl = a(963935),
    ps = a(429987),
    pi = a(53181);
function pr(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(h.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: pi.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: pi.NF,
              children: [
                  (0, r.jsxs)(B.D, {
                      className: pi.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(sm.A, {
                              direction: s ? sm.A.Directions.DOWN : sm.A.Directions.RIGHT,
                              className: pi.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: pi.m4, children: l }),
              ],
          });
}
function po(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case pl.Z6.ROOT:
                    return "migrated-root";
                case pl.Z6.SECTION:
                case pl.Z6.PANEL:
                case pl.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, pl.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(po, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(pr, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function pd() {
    let { node: e } = (0, ee.Ay)(ps.D, ""),
        t = (0, ee.KA)();
    return (0, r.jsxs)(d.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(c.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: ee.jL,
            }),
            (0, r.jsx)(po, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var pc = a(168803);
function pu() {
    return (0, r.jsxs)(x.Ip, {
        className: pc.n,
        children: [
            (0, r.jsx)(pn, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(pe, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(pd, {}),
        ],
    });
}
function pm() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aJ.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(nW, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aJ.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(mY, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aJ.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(mV, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aJ.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(se, {}),
            },
        ];
        return (
            aF.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aJ.fu.SHOP, render: () => (0, r.jsx)(mA, {}) }),
                e.push({
                    id: "storefront",
                    name: "Storefront Overrides",
                    group: aJ.fu.STOREFRONT,
                    render: () => (0, r.jsx)(mM, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aJ.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(dZ, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aJ.fu.SHOP,
                    render: () => (0, r.jsx)(tR, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aJ.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(ud, {}),
                }),
                e.push({
                    id: "routing_key",
                    name: "Routing Key",
                    group: aJ.fu.DEVELOPMENT,
                    tags: ["routing", "traffic", "routing-key", "network"],
                    render: () => (0, r.jsx)(uf, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aJ.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(sn, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aJ.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(cg.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aJ.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(nd, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aJ.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(sd, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aJ.fu.GAMES, render: () => (0, r.jsx)(d_, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aJ.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(ig, {}),
                }),
                a$.isPlatformEmbedded &&
                    (e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: aJ.fu.GAMES,
                        render: () => (0, r.jsx)(lW, {}),
                    }),
                    e.push({
                        id: "running_game_detection",
                        name: "Running Game Detection",
                        group: aJ.fu.GAMES,
                        tags: ["detection", "filter", "blocklist", "native"],
                        render: () => (0, r.jsx)(uN, {}),
                    }),
                    e.push({
                        id: "game_icon_extractor",
                        name: "Game Icon Extractor",
                        group: aJ.fu.GAMES,
                        tags: ["ico", "icon", "png", "rtc"],
                        render: () => (0, r.jsx)(sD, {}),
                    })),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: aJ.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, r.jsx)(lL, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aJ.fu.GAMES, render: () => (0, r.jsx)(mI, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aJ.fu.GAMES,
                    render: () => (0, r.jsx)(nt, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: aJ.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(aj, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: aJ.fu.GAMES,
                    render: () => (0, r.jsx)(aB, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: aJ.fu.GAMES,
                    render: () => (0, r.jsx)(ao, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aJ.fu.USERS,
                    render: () => (0, r.jsx)(xH, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aJ.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(P, {}) })),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                e.push({
                    id: "partner_perks",
                    name: "Partner Perks",
                    group: aJ.fu.PREMIUM,
                    tags: ["xgp"],
                    render: () => (0, r.jsx)(dM, {}),
                }),
            e.push({
                id: "rive",
                name: "Rive",
                group: aJ.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(uh, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aJ.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(i8, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aJ.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rD, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aJ.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(rv, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aJ.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(li, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aJ.fu.UI, render: () => (0, r.jsx)(lO, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aJ.fu.UI,
                render: () => (0, r.jsx)(cY, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aJ.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sU, { devSettingsCategory: aV.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aJ.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rZ, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aJ.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sU, { devSettingsCategory: aV.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aJ.fu.USERS, render: () => (0, r.jsx)(cT, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aJ.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(r7, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aJ.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rM, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aJ.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rS, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aJ.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(ns, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aJ.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(ls, {}),
            }),
            aF.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: aJ.fu.USERS,
                    render: () => (0, r.jsx)(t7, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: aJ.fu.USERS,
                    render: () => (0, r.jsx)(ak, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aJ.fu.DCF, render: () => (0, r.jsx)(lk, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aJ.fu.DCF, render: () => (0, r.jsx)(lh, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aJ.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(rm, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aJ.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up", "perks", "sources", "bitmask"],
                render: () => (0, r.jsx)(cy, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aJ.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(op, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aJ.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(cs, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: aJ.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(oy, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aJ.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(hI, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aJ.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sS, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aJ.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(i_, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aJ.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(hc, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: aJ.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(m5, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aJ.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(m4, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aJ.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(ro, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aJ.fu.BOOSTING, render: () => (0, r.jsx)(sM, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aJ.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rb, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aJ.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(pu, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aJ.fu.QUESTS,
                render: () => (0, r.jsx)(aO, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aJ.fu.QUESTS,
                render: () => (0, r.jsx)(mX, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aJ.fu.BILLING,
                render: () => (0, r.jsx)(x8, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aJ.fu.QUESTS,
                render: () => (0, r.jsx)(xx, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aJ.fu.USERS,
                render: () => (0, r.jsx)(c1, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aJ.fu.USERS,
                render: () => (0, r.jsx)(n1, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aJ.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lY, {}),
            }),
            e
        );
    }, []);
}
