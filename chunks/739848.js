a.d(t, { x: () => xF }), a(321073);
var l,
    n,
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
    _ = a(905552),
    y = a(555975),
    E = a(157257),
    C = a(274372),
    S = a(372684),
    N = a(315240),
    A = a(871421),
    k = a(227628),
    I = a(468550);
let D = (0, a(353640).v)(() => ({ enabled: !1, pending: null, lastResult: null }));
function T(e) {
    D.setState({ enabled: e });
}
function R(e) {
    D.setState({ pending: e });
}
function O(e) {
    D.setState({ lastResult: e });
}
var w = a(781710),
    M = a(264572).Buffer;
function L() {
    let e = D((e) => e.enabled),
        t = D((e) => e.pending),
        a = D((e) => e.lastResult),
        l = o.useCallback(async (e, t, a, l) => {
            let n = y.Ay.getMediaEngine();
            if (null == n.setClipsPerfMonitoring) return O("setClipsPerfMonitoring unsupported in this build"), null;
            R(l);
            try {
                let l = await n.setClipsPerfMonitoring(e, t, a);
                return T(l.enabled), l;
            } catch (e) {
                return O(`${l} failed: ${e instanceof Error ? e.message : String(e)}`), null;
            } finally {
                R(null);
            }
        }, []),
        n = o.useCallback(
            async (t) => {
                T(t);
                let a = await l(t, !1, !1, t ? "enable" : "disable");
                null != a ? O(`recorder ${a.enabled ? "enabled" : "disabled"}`) : T(e);
            },
            [l, e],
        ),
        s = o.useCallback(async () => {
            let t = await l(e, !0, !1, "save");
            if (null == t) return;
            if ("" === t.html) return void O("save: server returned empty html");
            let a = `clips-perf-${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            try {
                let e = M.from(t.html, "utf8"),
                    l = await b.A.fileManager.saveWithDialog2(e, a);
                if (null != l && !0 === l.canceledByUser) return void O("save: canceled");
                O(`saved ${t.eventCount} events (${t.html.length} bytes)`);
            } catch (e) {
                O(`save failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, [l, e]),
        i = o.useCallback(async () => {
            let t = await l(e, !1, !0, "clear");
            null != t && O(`cleared ${t.eventCount} events`);
        }, [l, e]);
    return (0, r.jsxs)(d.n, {
        label: "Clips v3 Performance",
        children: [
            (0, r.jsx)(c.d, {
                label: "Record Clips v3 performance",
                description: "Toggles the in-process perf recorder inside discord_clips.exe.",
                checked: e,
                disabled: null != t,
                onChange: n,
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
        [a, l] = o.useState(3),
        n = o.useCallback((e) => {
            let t = C.Ay.getClips(),
                a = t.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let l = a.applicationId,
                n = t.filter((e) => e.applicationId === l).slice(0, e);
            C.Ay.devSetLastClipsSession({
                applicationName: a.applicationName,
                newClipIds: n.map((e) => e.id),
                ended: !0,
            }),
                (0, I.M8)(l);
        }, []),
        s = o.useCallback(
            (e) => {
                e ? n(a) : (0, I.kF)();
            },
            [n, a],
        ),
        i = o.useCallback(() => {
            let e = C.Ay.getClips(),
                t = (0, _.A)(f.Ay, E.A),
                a =
                    (t?.id != null ? e.find((e) => e.applicationId === t.id) : void 0) ??
                    e.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let l = a.applicationId,
                n = e.filter((e) => e.applicationId === l).slice(0, 10);
            C.Ay.devSetLastClipsSession({
                applicationName: a.applicationName,
                newClipIds: n.map((e) => e.id),
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
                l(e), t && n(e);
            },
            [n, t],
        ),
        [y, D] = o.useState(S.rb.KILL),
        [T, R] = o.useState(1),
        [O, M] = o.useState(""),
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
                                text: "Phrase: Clip",
                                onClick: () => N.Ts({ type: S.Gy.PHRASE, text: "clip" }),
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
                                    value: y,
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
                        (0, r.jsx)(v.k, {
                            label: "Title (optional)",
                            value: O,
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
                                N.Ts({ type: S.Gy.GAME_EVENT, eventType: y, importance: T, title: O, description: P });
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
    F = a(939249),
    B = a(683071),
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
    el = a(901139),
    en = a(641886),
    es = a(780898),
    ei = a(652215),
    er = a(537127),
    eo = a(427262);
function ed(e) {
    let { nameplate: t } = e,
        a = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        l = eo.Ay.useName(a) ?? "";
    return (0, r.jsx)(er.g, {
        username: l,
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
        l = (0, ec.Ay)();
    return (0, r.jsxs)("div", {
        className: em.N,
        children: [
            (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: em.Z,
                children: en.Z6.map((e) => {
                    let n = l !== ei.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        eu.S4,
                        { onSelect: () => a(e), style: { background: n }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var ex = a(808166),
    ep = a(95701),
    eg = a(331884);
function ev(e) {
    let { selected: t, nameplate: a } = e,
        l = (0, eg.i)(),
        n = new ep.cq({ id: "0", type: ei.rbe.DM, name: "self", guild_id: "0", recipients: [l.id] });
    return (0, r.jsx)(ex.th, { selected: t, channel: n, user: l, nameplate: a });
}
var ej = a(698638),
    eb = a(877203);
function ef() {
    let [e, t] = (0, o.useState)(!1),
        [a, l] = (0, o.useState)(!1),
        [n, s] = (0, o.useState)(null),
        { node: i } = (0, ee.Ay)(et.k, ""),
        d = (0, el.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, el.DE)(),
        { setImgCache: x } = (0, el.TW)(),
        p = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? s({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : s((t) =>
                          null == t ? { previewToolKey: e, palette: en.Wj, skuId: "0" } : { ...t, previewToolKey: e },
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
                                    l(!1), t((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, r.jsx)(m.$, {
                                size: "sm",
                                onClick: () => {
                                    t(!1), l((e) => !e);
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
                                    selected: n?.palette?.name,
                                    onSelect: (e) => {
                                        n?.previewToolKey != null && c(n.previewToolKey, n.previewToolKey, e), g(e);
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: eb.iW,
                children: [
                    (0, r.jsx)(e_, { nameplate: n }, n?.palette?.name),
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
                                        l = await a.arrayBuffer();
                                    x(t, t, (0, es.nI)(l)), c(t, t, en.Wj);
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: eb.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(ey, { src: t, onSetStatic: p, removeAsset: v }, t);
                                }),
                            }),
                            (0, r.jsx)(eC, {
                                label: "gradient override",
                                onChange: (e) => g({ name: en.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(eE, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let { nameplate: t } = e,
        [a, l] = (0, o.useState)(320),
        n = (0, o.useRef)(null),
        s = (0, o.useRef)(null),
        i = (0, o.useRef)(null),
        d = (0, o.useRef)(document),
        c = (0, o.useCallback)((e) => {
            if (null != n.current) {
                let t = n.current.getBoundingClientRect();
                l(Math.max(264, Math.min(432, e.clientX - t.left)));
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
                    l = () => {
                        null != s.current && (t.removeEventListener("mousemove", s.current), (s.current = null)),
                            null != i.current && (t.removeEventListener("mouseup", i.current), (i.current = null));
                    };
                (s.current = a), (i.current = l), t.addEventListener("mousemove", a), t.addEventListener("mouseup", l);
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
                ref: n,
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
function ey(e) {
    let { src: t, onSetStatic: a, removeAsset: l } = e;
    return (0, r.jsxs)("div", {
        className: eb.xO,
        children: [
            (0, r.jsx)(F.D, {
                onClick: () => l(t),
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
function eE(e) {
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
    eR = a(579151),
    eO = a(559474),
    ew = a(816866),
    eM = a(87558),
    eL = a(575593),
    eP = a(631903),
    eU = a(224640),
    eG = a(408278),
    eF = a(972213),
    eB = a(43990),
    e$ = a(192308),
    eV = a(661531),
    eW = a(231723),
    ez = a(900686),
    eH = a(986687),
    eK = a(656017),
    eY = a(735438),
    eq = a.n(eY),
    eJ = a(219220),
    eQ = a(480335);
let eX = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eY.cloneDeep)(t), [t]),
        l = o.useMemo(
            () => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0),
            [t.effects],
        ),
        n = o.useMemo(() => {
            if (l) {
                var e;
                let l =
                    1 ===
                    (e = a.effects.reduce((e, t) => {
                        let a = 1 + (t.randomizedSources ?? []).length;
                        return a > 1 ? (1 === e ? a : Math.min(a, e)) : e;
                    }, 1))
                        ? -1
                        : Math.floor(Math.random() * e);
                l > 0 &&
                    t.effects.forEach((e, t) => {
                        null != e.randomizedSources &&
                            e.randomizedSources.length > 0 &&
                            (a.effects[t].src = e.randomizedSources[l - 1].src);
                    });
            }
            return a;
        }, [t.effects, a, l]),
        { layerData: s } = (0, eJ.A)({ skuId: "debug", layers: n.effects });
    return (0, r.jsx)(eQ.p, { profileEffect: n, layerData: s, skuId: "debug" });
};
var eZ = a(314485),
    e0 = a(778765);
let e1 =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    e2 = { [eM.qH.THUMBNAIL]: null, [eM.qH.STATIC]: null, [eM.qH.REDUCED_MOTION]: null },
    e8 = "debug",
    e6 = "reduced-motion-preview-modal",
    e3 = (e) => {
        let { transitionState: t, onClose: a, frameSrc: l, theme: n } = e;
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
                            icon: eF.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eZ.rU,
                        children: [
                            (0, r.jsx)(eB.N, {
                                theme: n,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: e1,
                                        alt: "",
                                        className: G()(eZ.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != l &&
                                "" !== l &&
                                (0, r.jsx)("img", { src: l, className: eZ.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    e5 = (e) => {
        let { type: t, frame: a, theme: l, onClear: n } = e,
            s = t === eM.qH.REDUCED_MOTION,
            i = s ? e1 : e0.A,
            o = (0, r.jsx)(eB.N, {
                theme: l,
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
                    ? (0, r.jsx)(F.D, {
                          className: G()(eZ.zd, eZ.eB),
                          onClick: () => {
                              (0, e$.hasModalOpen)(e6)
                                  ? (0, e$.closeModal)(e6)
                                  : (0, e$.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(e3, { ...e, frameSrc: a?.src ?? null, theme: l }),
                                            ),
                                        { modalKey: e6, onCloseRequest: () => (0, e$.closeModal)(e6) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eZ.zd, children: o }),
                null != a && (0, r.jsx)(m.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: n }),
            ],
        });
    },
    e9 = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, ew.wu)(),
            l = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
            [n, s] = o.useState(!0),
            i = o.useRef({}),
            [d, c] = o.useState(!1),
            [u, x] = o.useState(!1),
            [p, g] = o.useState(8),
            [v, j] = o.useState([]),
            [b, f] = o.useState(e2),
            _ = o.useRef([]),
            [y, E] = o.useState(t.name),
            C = y.toLowerCase().replace(/\s+/g, "_"),
            S = o.useMemo(
                () => ({
                    type: eL.R.PROFILE_EFFECT,
                    skuId: e8,
                    title: e8,
                    description: e8,
                    accessibilityLabel: e8,
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
                        f((l) => ({ ...l, [e]: (0, eM.GT)(t, a) }));
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
                                (a.src = e), _.current.push(e), f((e) => ({ ...e, [t]: a }));
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
            e.readonly || t({ skuId: e.skuId, name: y, effects: v, stillFrames: b });
        }, [v, b, y]),
        o.useEffect(
            () => () => {
                _.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (_.current = []);
            },
            [],
        ),
        null == l)
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
                                          value: y,
                                          className: eZ.hF,
                                          onChange: (e) => {
                                              E(e.target.value);
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
                                                    user: l,
                                                    currentUser: l,
                                                    transitionState: eW.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: eZ.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eB.N, {
                                                theme: N,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: G()(eZ.aM, e),
                                                        children: (0, r.jsx)("img", { src: e0.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      n &&
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
                                                  user: l,
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
                                                                  name: y,
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
                                                                                  let l = [...a],
                                                                                      n = a[t];
                                                                                  return (
                                                                                      (n.start = +e.target.value),
                                                                                      (l[t] = n),
                                                                                      l
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
                                                                                  let l = [...a],
                                                                                      n = a[t];
                                                                                  return (
                                                                                      (n.duration = +e.target.value),
                                                                                      (l[t] = n),
                                                                                      l
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
                                                                                  let l = [...a],
                                                                                      n = a[t];
                                                                                  return (
                                                                                      (n.loop = e.target.checked),
                                                                                      (l[t] = n),
                                                                                      l
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
                                                                                          let l = [...a],
                                                                                              n = a[t];
                                                                                          return (
                                                                                              (n.loopDelay =
                                                                                                  +e.target.value),
                                                                                              (l[t] = n),
                                                                                              l
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
                                                                          j((l) => {
                                                                              let n = [...l],
                                                                                  s = l[t];
                                                                              if (null == s) return l;
                                                                              let i = { ...s };
                                                                              return (
                                                                                  null == i.randomizedSources &&
                                                                                      (i.randomizedSources = []),
                                                                                  i.randomizedSources.push({
                                                                                      src: e,
                                                                                      filename: a.name,
                                                                                  }),
                                                                                  (n[t] = i),
                                                                                  n
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
            { deleteProfileEffect: l } = (0, ew.wu)();
        return (0, r.jsxs)(F.D, {
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
                                e.preventDefault(), e.stopPropagation(), l(t.skuId);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
function te() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, ew.wu)(),
        [l, n] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, eR.A)(),
        d = o.useMemo(() => (0, eT.Wj)(i), [i]),
        [c, u] = o.useState(""),
        x = o.useMemo(
            () =>
                "" === c
                    ? d
                    : d.filter((e) => {
                          let t = c.toLowerCase(),
                              a = e.title?.toLowerCase() ?? "",
                              l = e.description?.toLowerCase() ?? "";
                          return a.includes(t) || l.includes(t);
                      }),
            [c, d],
        ),
        p = o.useCallback(
            (e, a) => {
                if (null == a || !e.type.startsWith("text/")) return (0, eO.Ni)(e4);
                let [l, n] = a.split(",");
                if (!l.includes("text/plain")) return (0, eO.Ni)(e4);
                let s = JSON.parse(atob(n));
                (s.skuId = (0, ek.A)()), t(s), (0, eO.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eO.Ni)("Error uploading file. Try again!")
                    : (0, eO.KE)(e.currentTarget.files, p, eO.Ni);
            },
            [p],
        );
    return (0, r.jsxs)("div", {
        className: eZ.zr,
        children: [
            null == l &&
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
                                                })) && (a(), (0, eO.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: eZ.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(e7, { profileEffect: e, onClick: () => n(e) }, e.skuId),
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
                                            F.D,
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
                                                    n({
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
            null != l && (0, r.jsx)(e9, { profileEffect: l }),
        ],
    });
}
var tt = a(935399),
    ta = a(462887),
    tl = a(289873),
    tn = a(478016),
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
    let { purchases: a, isFetchingPurchases: l } = (0, th.Bf)(),
        n = o.useMemo(() => (0, eT.MG)(a, new Map()), [a]),
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
                0 === n.length && l && (0, r.jsx)(tl.y, {}),
                0 === n.length && !l && (0, r.jsx)(tb, {}),
                n.length > 0 &&
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
                                                icon: null == d ? tn.U : void 0,
                                                disabled: null == d,
                                                onClick: () => (0, td.p)({ profileFrame: null }),
                                            }),
                                        },
                                        "none",
                                    ),
                                    n.map((e) => {
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
                                                          icon: d?.skuId === e.skuId ? tn.U : void 0,
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
var t_ = a(702841),
    ty = a(793574),
    tE = a(590180),
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
        let e = (0, t_.bG)([ea.default], () => ea.default.getCurrentUser()),
            t = (0, t_.bG)([tE.A], () => tE.A.categories),
            a = (0, t_.bG)([tC.A], () => tC.A.purchases),
            l = (0, t_.bG)([tE.A], () => tE.A.lastSuccessfulFetch),
            n = t.size > 0 && a.size > 0 && null != l,
            { isFetching: s, categories: i } = (0, th.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: n }),
            d = n ? t : i,
            c = n || (!s && d.size > 0),
            [u, x] = o.useState(""),
            [p, g] = o.useState(null),
            [j, b] = o.useState(null);
        return (o.useEffect(() => {
            if ("" === u.trim() || !c) {
                g(null), b(null);
                return;
            }
            let e = tE.A.getProduct(u),
                t = tE.A.getCategoryForProduct(u);
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
                                                              analyticsLocations: [ty.A.COLLECTIBLES_SHOP_CARD],
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
    tR = (e) => {
        let { setTab: t } = e,
            a = (0, z.bG)([q.A], () => q.A.getWindowOpen(ei.MLl.DEVTOOLS_POPOUT));
        return (0, r.jsxs)("div", {
            className: tD.Qs,
            children: [
                (0, r.jsx)(F.D, {
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
                (0, r.jsx)(F.D, {
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
                (0, r.jsx)(F.D, {
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
                (0, r.jsx)(F.D, {
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
                        children: (0, r.jsx)(B.w, {
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
    tO = () => {
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
                                return (0, r.jsx)(tR, { setTab: t });
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
    tF = a(475825),
    tB = a(505206);
function t$(e) {
    let { columns: t, data: a, className: l, rowClassName: n, onClickRow: s, selectedRowKey: i, rowHeight: d = 40 } = e,
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
        className: tB.CZ,
        children: (0, r.jsx)(tF.OZ, {
            className: l,
            innerClassName: tB.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    l = tB.ZR;
                return (0, r.jsx)(
                    "div",
                    {
                        className: l,
                        children: c.map((e) => {
                            let l = e.cellClassName,
                                n = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)` };
                            return (0, r.jsx)(
                                "div",
                                { className: l, style: n, children: e.renderHeader?.(e, a) },
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
                    l = a[t];
                if (null == l) return null;
                let o = l.key,
                    u = G()(tB.jD, { [tB.wD]: o === i, rowClassName: n });
                return (0, r.jsx)(
                    F.D,
                    {
                        className: u,
                        onClick: () => s?.(l),
                        children: c.map((e) => {
                            let a = e.cellClassName,
                                n = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)`, height: `calc(${d}px - 16px)` };
                            return (0, r.jsx)(
                                "div",
                                { className: a, style: n, children: e.render?.(l, void 0, t) },
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
    tJ = a(574520),
    tQ = a(808323),
    tX = a(832384),
    tZ = a(424994),
    t0 = a(330837);
function t1(e) {
    let { id: t } = e,
        a = (0, z.bG)([ea.default], () => ea.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(F.D, {
              className: t0._,
              onClick: function () {
                  (0, tq.openUserProfileModal)({ sourceAnalyticsLocations: [ty.A.DEV_TOOLS], userId: t });
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
        l = (0, z.bG)([tK.A], () => tK.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let n = e?.entries?.flatMap((e) => {
        let { content: n } = e;
        if (!(0, tQ.l)(t, n)) return [];
        let s = a[(0, tJ.$)(n)];
        return (0, r.jsxs)(
            "li",
            {
                className: t0.p,
                children: [
                    (0, r.jsx)(t1, { type: n.author_type, id: n.author_id }),
                    !s && (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, tX.I5)(n) &&
                        (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["Expired at ", n.expires_at] }),
                    l.has(n.id) && (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            n.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != n ? (0, r.jsx)("ul", { children: n }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var t8 = a(576470),
    t6 = a(693879);
function t3() {
    let e = (0, z.bG)([tY.A], () => tY.A.getFeed(tZ.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, z.cf)(
            [tY.A],
            () => tY.A.getFeedState(tZ.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        l = (0, z.bG)([tY.A], () => tY.A.getLastFeedFetchDate(tZ.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(h.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(h.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(t8.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(h.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != l ? (0, r.jsx)(t6.z, { inline: !0, entry: { start: l.getTime() } }) : "(never)",
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
        l = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(c.d, {
        checked: l,
        onChange: function () {
            l
                ? tP.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tP.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function t7() {
    var e;
    let t,
        a = (0, z.bG)([tY.A], () => tY.A.getFeed(tZ.X1.GLOBAL_FEED)),
        l = (0, z.bG)([tY.A], () => tY.A.getDebugImpressionCappingDisabled()),
        n = (0, z.bG)([tK.A], () => tK.A.getDebugFastImpressionCappingEnabled()),
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
        className: tB.nd,
        children: (0, r.jsxs)(x.Ip, {
            className: t5.Qs,
            children: [
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(t$, { columns: t9, data: s }),
                        (0, r.jsx)(t3, {}),
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
                            text: l ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tP.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: n ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
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
    return (0, r.jsx)(F.D, {
        onClick: a,
        children: (0, r.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
var at = a(783878),
    aa = a(137177),
    al = a(311043),
    an = a(569926),
    as = a(282435);
function ai(e) {
    return as.Bf.get(e) ?? 0;
}
function ar(e) {
    let { gameId: t } = e,
        { data: a, isLoading: l } = (0, an.I)(t),
        n = (0, z.bG)([al.A], () => al.A.hasNoData(t), [t]);
    return l || (null == a && !n)
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
        [a, l] = o.useState(""),
        n = (0, z.bG)([tz.A], () => tz.A.games),
        s = o.useMemo(
            () =>
                n
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => ai(t.value) - ai(e.value)),
            [n],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => ai(t.item.value) - ai(e.item.value), keys: ["label"] }), []),
        d = o.useCallback((e) => {
            t(e), null != e && l("");
        }, []),
        c = o.useCallback((e) => {
            l(e), e.trim().length > 0 && t(null);
        }, []),
        u = a.trim(),
        x = u.length > 0 ? u : (e ?? void 0),
        p = (0, tW.A)({ gameId: x, location: "DevToolsGameProfile", source: tV.Ob.DevTools });
    return (0, r.jsx)("div", {
        className: tB.nd,
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
        [a, l] = o.useState(ad.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        n = (0, z.bG)([au.A], () => au.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
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
        _ = o.useMemo(() => Object.fromEntries(b.map((e, t) => [e, f[t]])), [b, f]),
        y =
            n?.lastDismissedAtMs != null && "0" !== n.lastDismissedAtMs
                ? new Date(Number(n.lastDismissedAtMs)).toLocaleString()
                : "Never";
    return (0, r.jsxs)("div", {
        className: ap.nd,
        children: [
            (0, r.jsxs)("div", {
                className: ap.$H,
                children: [
                    (0, r.jsx)(F.D, {
                        className: G()(ap.V3, { [ap.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(F.D, {
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
                                  onSelectionChange: (e) => l(e),
                                  options: ag,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: ap.uW,
                              children: [
                                  (0, r.jsx)(W.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, r.jsxs)(h.E, { variant: "text-sm/normal", children: ["Last dismissed: ", y] }),
                                  (0, r.jsxs)(h.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", n?.numTimesDismissed ?? 0],
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
                                                    let l = d[t],
                                                        n = s?.[e];
                                                    if (null == n) return null;
                                                    let i = l?.getIconURL(32);
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
                                                                                    children: l?.name ?? "Unknown App",
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
                                                                        new Date(n.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(h.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: ["Times dismissed: ", n.timesDismissed],
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
                                                              let a = _[t],
                                                                  l = a?.getIconURL(20),
                                                                  n = e.eligibleToShow.includes(t),
                                                                  s = e.excludedReasons[t];
                                                              return (0, r.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className: ap.Ss,
                                                                      children: [
                                                                          null != l &&
                                                                              (0, r.jsx)("img", {
                                                                                  src: l,
                                                                                  alt: "",
                                                                                  className: ap.rb,
                                                                              }),
                                                                          (0, r.jsx)("span", {
                                                                              className: ap.Jd,
                                                                              children: a?.name ?? t,
                                                                          }),
                                                                          n
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
    a_ = a(734057),
    ay = a(994500),
    aE = a(310031),
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
            hasLoadedEver: l,
            hasPreloaded: n,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, t_.cf)([aE.A], () => ({
            isLoading: aE.A.isLoading,
            hasLoadedEver: aE.A.hasLoadedEver,
            hasPreloaded: aE.A.hasPreloaded,
            hasMoreToLoad: aE.A.hasMoreToLoad,
            isLoadingComplete: aE.A.isLoadingComplete,
        })),
        o = (0, t_.bG)([aE.A], () => aE.A.currentRequestAnalyticsPayload),
        d = (0, t_.cf)([aE.A], () => aE.A.getChannelInfoMap()),
        u = (0, t_.cf)([a_.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        l = a_.A.getChannel(a);
                    e[a] = l ?? null;
                }),
                e
            );
        }),
        m = (0, t_.cf)([a_.A], () =>
            t.reduce((e, t) => {
                let a = a_.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, t_.bG)([aE.A], () => aE.A.getInboxMessages()),
        p = (0, t_.bG)([aE.A], () => aE.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tB.nd,
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
                                    channelName: null != a ? (0, af.m1)(a, ea.default, ay.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Store State" }),
                        (0, r.jsxs)("div", { children: ["Is Loading: ", a ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has Preloaded: ", n ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has Loaded Ever: ", l ? "\u2705" : "\u274C"] }),
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
                                    [a, l] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, af.m1)(t, ea.default, ay.A) : "",
                                    loadState: l.loadState,
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
let aR = function () {
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
var aO = a(271866),
    aw = a(868511),
    aM = a(147964),
    aL = a(760716),
    aP = a(115093),
    aU = a(11039);
let aG = window.GLOBAL_ENV.RELEASE_CHANNEL === aP.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function aF() {
    let e = (0, aL.i)((e) => e.overrideApplicationId),
        t = (0, aL.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [l, n] = o.useState(aG),
        [s, i] = o.useState(ei.FYj),
        d = o.useCallback(
            (e) => {
                e ? t(l) : t(null);
            },
            [l, t],
        ),
        u = o.useCallback(
            (e) => {
                n(e), a && t(e);
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
            e ? (0, e$.openModal)((e) => (0, r.jsx)(aw.A, { ...e })) : aO.cL();
        }, []),
        _ = (0, tW.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: l,
            source: tV.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        y = o.useCallback(
            (e) => {
                _?.(e);
            },
            [_],
        ),
        E = o.useCallback(() => {
            (0, aI.pX)(ei.BVt.COLLECTIBLES_SHOP_GAME_SHOP(l));
        }, [l]);
    return (0, r.jsx)("div", {
        className: G()(tB.nd, aU.n),
        children: (0, r.jsxs)("div", {
            className: aU.k,
            children: [
                (0, r.jsx)(v.k, { label: "Application ID", value: l, onChange: u }),
                (0, r.jsx)(W.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(c.d, { label: "Override activity application ID", checked: a, onChange: d }),
                (0, r.jsx)(c.d, { label: "Show own voice activity (bypass self check)", checked: h, onChange: x }),
                (0, r.jsx)(c.d, { label: "Enable application test mode", checked: b, onChange: f }),
                (0, r.jsx)(m.$, { text: "Open Game Profile Modal", onClick: y }),
                (0, r.jsx)(m.$, { text: "Navigate to App Game Shop", onClick: E }),
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
var aB = a(540999),
    a$ = a(723702),
    aV = a(865116);
a(670812), a(772958);
var aW = a(58736);
a(558179), a(21574);
var az = a(231545),
    aH = a(761929),
    aK = a(23599);
function aY(e) {
    let { resizableNode: t, minHeight: a, onResize: l } = e,
        n = (0, aH.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: l,
            orientation: aH.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: n, className: aK.Di });
}
function aq(e) {
    let { children: t, className: a, initialHeight: l, minHeight: n } = e,
        s = o.useRef(null),
        [i, d] = o.useState(l);
    return (0, r.jsxs)("div", {
        ref: s,
        className: aK.kL,
        style: { minHeight: n, height: i },
        children: [
            (0, r.jsx)(aY, { resizableNode: s, minHeight: n, onResize: d }),
            (0, r.jsx)("div", { className: G()(aK.KZ, a), children: t }),
        ],
    });
}
var aJ = a(231643);
a(895017), aJ.fu.NONE, aJ.fu.NONE;
var aQ = a(824552),
    aX = a(688810),
    aZ = a(975460),
    a0 = a(46225),
    a1 = a(487431),
    a2 = a(546183),
    a8 = a(134861),
    a6 = a(71393),
    a3 = a(967198),
    a5 = a(942370),
    a9 = a(375708),
    a4 = a(311350),
    a7 = a(325126);
function le() {
    var e;
    let t,
        a,
        l = o.useRef(null),
        { analyticsLocations: n } = (0, aX.Ay)(ty.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        d = (0, z.bG)([a3.A], () => a3.A.getGuildId()),
        c = (0, z.bG)([a6.A], () => a6.A.getGuild(d)),
        u = c?.gameApplicationIds ?? [],
        x = (0, tG.A)(u).filter((e) => null != e),
        p = (0, z.bG)([f.Ay, E.A], () => (0, _.A)(f.Ay, E.A)),
        g = (0, tG.h)(s),
        b = (0, aZ.g)(g),
        y = (0, z.yK)(
            [tU.A],
            () => g?.linkedGames?.map((e) => tU.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        C = (0, a0.RD)(g, { allowedFlows: [a5._M.RPC], debug: !0 }),
        S = (0, a0.RD)(g, { allowedFlows: [a5._M.WEB], debug: !0 }),
        N = (0, z.bG)([a8.A], () => null != b && a8.A.isConnected(b.id)),
        A = (0, a0.RD)(g, { debug: !0 }),
        { canDeauthorize: k, deauthorize: I } =
            ((e = A.connectionApp?.id),
            (t = (0, z.bG)([a2.default], () => a2.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aQ.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: l,
        className: G()(tB.nd, a7.nd),
        children: [
            (0, r.jsxs)("div", {
                className: a7.kL,
                children: [
                    (0, r.jsx)(W.D, { variant: "heading-lg/normal", children: "Guild Official Games" }),
                    null != c
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(h.E, { variant: "text-md/normal", children: [c.name, " (", c.id, ")"] }),
                                  x.length > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(h.E, {
                                                    variant: "text-sm/semibold",
                                                    children: "Official Games",
                                                }),
                                                x.map((e) =>
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
                                            ],
                                        })
                                      : (0, r.jsx)(h.E, { variant: "text-md/normal", children: "No official games" }),
                              ],
                          })
                        : (0, r.jsx)(h.E, { variant: "text-md/normal", children: "No guild selected" }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a7.kL,
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
                    (0, r.jsxs)(h.E, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != g ? g.name : "N/A"],
                    }),
                    (0, r.jsxs)(h.E, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            y.length > 0
                                ? y.map((e) => ((0, aZ.t)(g)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)("div", {
                className: a7.kL,
                children: [
                    (0, r.jsx)(W.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(a1.VT, {
                        overallStatus: C.debug.isSubscribedToAuthorizeRequest
                            ? a1.nW.OVERALL_GOOD
                            : N
                              ? a1.nW.WARN
                              : a1.nW.OVERALL_BAD,
                        name: a9.intl.string(a4.default.AGLx00),
                        steps: [
                            {
                                status: N ? a1.nW.GOOD : a1.nW.BAD,
                                text: a9.intl.string(a4.default.kxF9br),
                                description: N ? null : a9.intl.string(a4.default.PFxxJa),
                                learnMoreLink: N
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: C.debug.isSubscribedToAuthorizeRequest
                                    ? a1.nW.GOOD
                                    : N
                                      ? a1.nW.WARN
                                      : a1.nW.BAD,
                                text: a9.intl.string(a4.default.S94dzs),
                                description:
                                    C.debug.isSubscribedToAuthorizeRequest || !N
                                        ? null
                                        : a9.intl.string(a4.default.aTULMB),
                                learnMoreLink:
                                    C.debug.isSubscribedToAuthorizeRequest || !N
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: A.chosenFlow === a5._M.RPC,
                    }),
                    (0, r.jsx)(a1.VT, {
                        overallStatus: S.debug.hasConnectionEntrypointUrl ? a1.nW.OVERALL_GOOD : a1.nW.OVERALL_BAD,
                        name: a9.intl.string(a4.default.K3ObrU),
                        steps: [
                            {
                                status: S.debug.hasConnectionEntrypointUrl ? a1.nW.GOOD : a1.nW.BAD,
                                text: a9.intl.string(a4.default["8a7IrV"]),
                                description: S.debug.hasConnectionEntrypointUrl
                                    ? a9.intl.formatToPlainString(a4.default["9iLeL2"], {
                                          url: S.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: A.chosenFlow === a5._M.WEB,
                    }),
                    (0, r.jsx)(a1.Sy, {
                        status: A.hasAlreadyLinked ? a1.nW.OVERALL_GOOD : a1.nW.OVERALL_BAD,
                        text: a9.intl.string(a9.t["Vu/zmQ"]),
                    }),
                    0 === A.debug.validFlows.length &&
                        (0, r.jsx)(h.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: a9.intl.string(a4.default.eg0mNa),
                        }),
                    (0, r.jsx)(m.$, {
                        disabled: !A.canStartAuthorization,
                        onClick: () => A.startAuthorization({ analyticsLocations: n }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsx)(m.$, {
                        disabled: !C.canStartAuthorization,
                        onClick: () => C.startAuthorization({ analyticsLocations: n }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, r.jsx)(m.$, {
                        disabled: !S.canStartAuthorization,
                        onClick: () => S.startAuthorization({ analyticsLocations: n }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, r.jsx)(m.$, { disabled: !k, onClick: I, variant: "critical-primary", text: "Deauthorize" }),
                ],
            }),
            g?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(j.c, {}),
                        (0, r.jsxs)("div", {
                            className: a7.kL,
                            children: [
                                (0, r.jsx)(W.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, r.jsx)("div", {
                                    className: a7.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: a7.Tc,
                                        children: [
                                            null != g.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: g.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: a7.L8,
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
var lt = a(427358),
    la = a(465153);
let ll = [
    {
        key: "user",
        cellClassName: la.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: la.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: la.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: la.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function ln() {
    let e = (0, z.yK)([lt.A, ea.default], () =>
        lt.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: l, isFriend: n } = e;
            return { user: ea.default.getUser(t), affinity: a, vcProbability: l, isFriend: n, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(t$, { className: tB.nd, columns: ll, rowClassName: la.nM, data: e });
}
var ls = a(139716),
    li = a(847599),
    lr = a(282621);
function lo() {
    return (0, r.jsx)("div", {
        className: G()(tB.nd, lr.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(j.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: lr.h,
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
                                ls.A.showAgeVerificationGetStartedModal({ entryPoint: li.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ld = a(989349),
    lc = a.n(ld),
    lu = a(862482),
    lm = a(624479),
    lh = a(555704),
    lx = a(285796),
    lp = a(241326),
    lg = a(892547),
    lv = a(297413),
    lj = a(379078),
    lb = a(704554),
    lf = a(957565),
    l_ = a(58703),
    ly = a(80703),
    lE = a(495544);
let lC = 0,
    lS = [],
    lN = 0,
    lA = [],
    lk = !1;
class lI extends z.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(lE.default, aB.A);
    }
    get loggedEvents() {
        return lS;
    }
    get loggedEventsVersion() {
        return lN;
    }
    get loggedTriggers() {
        return lA;
    }
    get trackTriggers() {
        return lk;
    }
}
let lD = new lI(tP.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: l } = e;
        aB.A.isDeveloper &&
            (lS.push({
                key: (lC++).toString(),
                event: t,
                properties: a,
                fingerprint: null != l ? (0, ly.d)(l) : lE.default.getId(),
                timestamp: new Date(),
            }),
            lN++,
            lS.length > 500 && (lS = lS.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: l, excluded: n, location: s, previouslyTracked: i } = e;
        !aB.A.isDeveloper ||
            (lk &&
                (lA = [
                    ...lA,
                    {
                        key: (0, ek.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: l,
                        excluded: n,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                lA.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        lk = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (lS = []), lN++, (lA = []);
    },
});
var lT = a(658675);
function lR(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: G()(tB.qo, t), children: a });
}
let lO = (e) => {
    let { name: t, children: a, copyValue: l } = e,
        [n, s] = o.useState(!1);
    return (
        o.useEffect(() => {
            if (n) {
                let e = setTimeout(() => s(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [n]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("dt", { className: tB.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tB.Nw,
                    children: [
                        a,
                        null != l
                            ? (0, r.jsx)(F.D, {
                                  tag: "span",
                                  className: tB.nH,
                                  onClick: () => (0, lf.C)(l, () => s(!0)),
                                  children: n
                                      ? (0, r.jsx)(tn.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(lm.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function lw(e) {
    let { value: t } = e;
    return (0, r.jsx)(lT.P, { checked: t });
}
var lM = a(733657);
let lL = [
    {
        key: "event",
        cellClassName: lM.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: lM.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function lP(e) {
    let { children: t } = e;
    return (0, r.jsx)(x.Ip, { className: lM._D, children: (0, r.jsx)("dl", { children: t }) });
}
function lU(e) {
    let { name: t, children: a, copyValue: l } = e,
        [n, s] = o.useState(!1);
    return (
        o.useEffect(() => {
            if (n) {
                let e = setTimeout(() => s(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [n]),
        (0, r.jsxs)("div", {
            className: lM.fY,
            children: [
                (0, r.jsx)("dt", { className: lM.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(F.D, {
                    tag: "span",
                    className: lM.nH,
                    onClick: () => (0, lf.C)(JSON.stringify(l), () => s(!0)),
                    children: n
                        ? (0, r.jsx)(tn.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(lm.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let lG = new Set(["client_performance_cpu", "client_performance_memory"]),
    lF = [
        {
            id: "details",
            name: "Details",
            group: aJ.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: l, fingerprint: n },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = ea.default.getUser(n),
                    d = lc()(l);
                return (0, r.jsxs)("div", {
                    className: lM.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(aW.Ay, {
                            className: G()(tB.jr, lM.nZ),
                            children: [
                                (0, r.jsx)(aW.Ay.Icon, { icon: lh.U, tooltip: t }),
                                (0, r.jsxs)(aW.Ay.Title, {
                                    wrapperClassName: lM.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(F.D, {
                                            tag: "span",
                                            className: lM.KE,
                                            onClick: () => (0, lf.C)(t),
                                            children: (0, r.jsx)(lm.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(aW.Ay.Icon, {
                                    icon: lm.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, lf.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: l, fingerprint: n, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(aW.Ay.Icon, { icon: lx.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(lR, {
                            className: lM.ZK,
                            children: [
                                (0, r.jsx)(lO, {
                                    name: "Timestamp (local)",
                                    copyValue: l.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: l.toISOString(),
                                        title: (0, l_.i$)(d, "LLLL"),
                                        children: ["(", lc().locale(), ") ", (0, l_.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(lO, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(lv.A, { user: o }),
                                    }),
                                (0, r.jsx)(lO, {
                                    name: "Fingerprint",
                                    copyValue: n,
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(lP, {
                            children: Object.entries(a).map((e) => {
                                let [a, l] = e,
                                    n = lG.has(a)
                                        ? ((e, t, a) => {
                                              let l = e.filter((e) => e.event === t);
                                              if (0 === l.length) return { average: null, count: 0 };
                                              let n = null,
                                                  s = 0;
                                              for (let e of l) {
                                                  let t = e.properties[a];
                                                  "number" == typeof t && ((s += 1), null == n ? (n = t) : (n += t));
                                              }
                                              return { average: null !== n ? n / l.length : null, count: s };
                                          })(i, t, a)
                                        : null;
                                return (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(
                                                lU,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: l || null },
                                                    children:
                                                        null != l
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(l) })
                                                            : (0, r.jsx)("code", {
                                                                  className: lM.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== n &&
                                                null !== n.average &&
                                                (0, r.jsx)(
                                                    lU,
                                                    {
                                                        name: `${a}_avg:`,
                                                        copyValue: { [a]: l || null },
                                                        children: (0, r.jsxs)("code", {
                                                            children: [n.average.toFixed(3), " (", n.count, ")"],
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
    lB = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(lB)
                    .filter((e) => {
                        let [t] = e;
                        return "events" !== t;
                    })
                    .map((t) => {
                        let [a, { filter: l }] = t;
                        return !l(e);
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
    l$ = {
        searchType: lj.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function lV() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        l = (0, z.bG)([lD], () => lD.loggedEventsVersion),
        [n, s] = o.useState(() => Object.keys(lB)),
        [i, d] = o.useState(lD.loggedEvents),
        c = o.useCallback((e) => {
            d(e);
        }, []);
    (0, lb.RT)(t, lD.loggedEvents, c, l$, [l]);
    let u = i.filter((e) => {
            for (let t of n) if (lB[t].filter(e)) return !0;
            return !1;
        }),
        [m, h] = o.useState(void 0),
        x = u.find((e) => e.key === m),
        { TabBar: p, renderSelectedTab: g } = (0, aJ.Ay)({ tabs: lF }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: G()(tB.nd, lM.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lM.rh,
                children: [
                    (0, r.jsx)(lu.$n, {
                        className: lM.Q$,
                        look: lu.$n.Looks.BLANK,
                        size: lu.$n.Sizes.ICON,
                        onClick: H.eY,
                        children: (0, r.jsx)("span", {
                            title: a9.intl.string(a9.t.VkKicb),
                            children: (0, r.jsx)(lp.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": a9.intl.string(a9.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: lM.Bi }),
                    (0, r.jsx)("div", {
                        className: lM.uW,
                        children: Object.entries(lB).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                F.D,
                                {
                                    className: G()(lM.pb, n.includes(t) && lM.bx),
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
                className: lM.rh,
                children: (0, r.jsx)(lg.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(t$, { columns: lL, data: u, selectedRowKey: m, onClickRow: (e) => h(e.key) }),
            null != x &&
                (0, r.jsxs)(aq, {
                    className: lM.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(p, {}), g({ loggedEvent: x, onClose: () => h(void 0), filteredEvents: u })],
                }),
        ],
    });
}
var lW = a(382483),
    lz = a(385113),
    lH = a(315117);
function lK(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)($.B, {
        gap: 8,
        padding: 8,
        className: lH.lt,
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
                              className: lH.YL,
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
function lY(e) {
    let { config: t, isSelected: a, onSelect: l } = e;
    return (0, r.jsxs)($.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? lH.FM : lH.gt,
        children: [
            (0, r.jsx)(F.D, {
                className: lH.Av,
                onClick: l,
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
                onClick: () => (0, lW.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function lq() {
    let e = (0, z.bG)([lz.A], () => lz.A.getFeaturedFetchState());
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
                onClick: () => (0, lW.Wq)({ force: !0 }),
            }),
        ],
    });
}
function lJ() {
    let e = (0, z.bG)([lz.A], () => lz.A.getDeveloperFetchState());
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
                onClick: () => (0, lW.i$)({ force: !0 }),
            }),
        ],
    });
}
function lQ() {
    let [e, t] = o.useState(""),
        a = (0, z.bG)([lz.A], () => (e.length > 0 ? lz.A.getFetchState(e) : null)),
        l = (0, z.bG)([lz.A], () => (e.length > 0 ? lz.A.getConfigs(e) : null));
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
                onClick: () => (0, lW.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(h.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != l &&
                l.length > 0 &&
                (0, r.jsx)($.B, { gap: 4, children: l.map((e) => (0, r.jsx)(lK, { config: e }, e.config_id)) }),
        ],
    });
}
function lX(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: l } = e,
        n = (0, z.bG)([lz.A], () => lz.A.getFeaturedFetchState());
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(h.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            n === lz.e.FETCHING &&
                (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    lY,
                    {
                        config: e,
                        isSelected: a === e.config_id,
                        onSelect: () => l(a === e.config_id ? null : e.config_id),
                    },
                    e.config_id,
                ),
            ),
        ],
    });
}
function lZ(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)($.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(lK, { config: t }),
                ],
            }),
        ],
    });
}
function l0() {
    let [e, t] = o.useState(null),
        a = Object.values((0, z.bG)([lz.A], () => lz.A.getAllConfigsByApplication())).flat(),
        l = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)($.B, {
            gap: 16,
            padding: 8,
            className: lH.zr,
            children: [
                (0, r.jsx)(W.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(lq, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(lJ, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(lQ, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(lX, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != l && (0, r.jsx)(lZ, { config: l }),
            ],
        }),
    });
}
var l1 = a(636537),
    l2 = a(153488),
    l8 = a(927813);
let l6 = 12 * l8.A.Millis.HOUR,
    l3 = new Map(),
    l5 = !1,
    l9 = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    l4 = { ...l9 };
function l7() {
    l3 = new Map(l4.channelAffinities.map((e) => [e.channelId, e]));
}
class ne extends z.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((l4.channelAffinities = e.channelAffinities), (l4.lastFetched = e.lastFetched), l7());
    }
    shouldFetch() {
        if (!l5) return Date.now() - l4.lastFetched > l6;
    }
    isFetching() {
        return l5;
    }
    getChannelAffinities() {
        return l4.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return l3;
    }
    getChannelAffinity(e) {
        return l3.get(e);
    }
    compare(e, t) {
        return (l3.get(t)?.score ?? 0) - (l3.get(e)?.score ?? 0);
    }
    getState() {
        return l4;
    }
}
let nt = new ne(tP.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        l5 = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (l4.lastFetched = Date.now()), (l5 = !1), (l4.channelAffinities = t), l7();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        l5 = !1;
    },
    LOGOUT: function () {
        (l4 = { ...l9 }), (l3 = new Map()), (l5 = !1);
    },
});
var na = a(907360);
let nl = [
    {
        key: "channel",
        cellClassName: na._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: na.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function nn() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            nt.shouldFetch() && l2.A.hasConsented(ei.YAq.PERSONALIZATION)
                ? (tP.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  l1.Bo.get({
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
    let e = (0, z.yK)([nt, a_.A], () =>
        nt
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: a_.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(t$, { className: tB.nd, columns: nl, rowClassName: na.nM, data: e });
}
function ns() {
    return (0, r.jsxs)(h.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var ni = a(105565),
    nr = a(558845),
    no = a(193337);
let nd = (e) => {
        switch (e) {
            case ni.r.DC_DISMISSED:
                return "DISMISS:";
            case ni.r.DC_SHOWN:
                return "SHOW:";
            case ni.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    nc = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${ad.M[a]}`;
            },
        },
    ],
    nu = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${ad.M[t]}`;
            },
        },
    ];
function nm() {
    let e = (0, z.bG)([ni.A], () => ni.A.getDCFEvents()),
        t = (0, nr.Ay)((e) => e.candidates),
        a = (0, nr.Ay)((e) => e.lastWinnerTime),
        l = 0 !== a ? lc()(a).fromNow() : "n/a",
        n = (0, nr.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: nd(t) + a.toString(), event: nd(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: no.KE,
        children: [
            (0, r.jsxs)("div", { className: no.pq, children: ["Last winner time: ", l] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: no.pq, children: ["Last winner: ", null != n ? ad.M[n] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: no.uI,
                children: (0, r.jsx)(t$, { className: no.Th, columns: nu, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(t$, { columns: nc, data: s }),
        ],
    });
}
var nh = a(689175),
    nx = a(541689),
    np = a(199773);
function ng() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(nv());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tL.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [nv(), e];
}
function nv() {
    return tL.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var nj = a(662546),
    nb = a(643278),
    nf = a(256787),
    n_ = a(20439);
let ny = o.memo(function (e) {
    let { className: t, content: a, onChange: l } = e,
        n = ad.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, n_.A)(n),
        [d, u] = o.useState(!1),
        m = o.useCallback(() => {
            l?.(a), i();
        }, [l, i, a]),
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
                        icon: d ? nj.O : nb.s,
                        onClick: h,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(c.d, {
                        label: `${a.toLowerCase()} (${ad.M[a]})`,
                        description: (0, nf.Zm)(n)
                            ? (function (e) {
                                  let t = au.A.settings.userContent?.recurringDismissibleContentStates?.[e];
                                  if (null == t) return null;
                                  let a = [],
                                      { lastDismissedVersion: l, lastDismissedAtMs: n, lastDismissedObjectId: s } = t;
                                  if (
                                      (void 0 !== l && 0 !== l && a.push(`last_dismissed_version: ${l}`), void 0 !== n)
                                  ) {
                                      let e = Number(n),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      a.push(`last_dismissed_at: ${t}`);
                                  }
                                  return (void 0 !== s && "0" !== s && a.push(`last_dismissed_object_id: ${s}`),
                                  0 === a.length)
                                      ? null
                                      : a.join(", ");
                              })(n)
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
function nE(e) {
    let { items: t, onChange: a } = e,
        [l, n] = ng(),
        s = (0, o.useCallback)(
            (e) => {
                n(e), a?.(e);
            },
            [n, a],
        );
    return (0, r.jsx)($.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(ny, { content: e, onChange: s }, e)),
    });
}
function nC(e) {
    let { searchQuery: t = "" } = e,
        a = (0, nr.Ay)((e) => e.recentlyShown),
        [l, n] = ng(),
        s = l
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(ad.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(d.n, { label: "Recent Overrides", children: (0, r.jsx)(nE, { items: s }) });
}
function nS(e) {
    let { searchQuery: t = "" } = e,
        a = (0, nr.Ay)((e) => e.recentlyShown)
            .map((e) => ad.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(d.n, { label: "Recently Shown", children: (0, r.jsx)(nE, { items: a }) });
}
var nN = a(268571);
function nA() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, z.cf)([np.A], () => ({
            dailyCapReached: np.A.hasUserHitDCCap(),
            dailyCapOverridden: np.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: np.A.newUserMinAgeRequiredOverridden,
        })),
        [l, n] = o.useState(""),
        [s, i] = o.useState(20),
        u = o.useMemo(
            () =>
                Object.keys(ad.M)
                    .filter((e) => e.toLowerCase().includes(l.toLowerCase()))
                    .reverse(),
            [l],
        ),
        x = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < u.length && i((e) => e + 100);
            },
            [s, u.length],
        );
    return (0, r.jsx)(nh.Ch, {
        onScroll: x,
        children: (0, r.jsxs)("div", {
            className: nN.KE,
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
                                    onClick: () => (0, nx.Ab)(),
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
                            onChange: nx.SE,
                        }),
                        (0, r.jsx)(c.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: nx.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(nS, {}),
                (0, r.jsx)(nC, {}),
                (0, r.jsxs)(d.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(lg.I, { query: l, onChange: n, onClear: () => n("") }),
                        (0, r.jsx)(nE, { items: u.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var nk = a(276086),
    nI = a(154323),
    nD = a(155248);
function nT() {
    let e = (0, z.bG)([nI.A], () => nI.A.allWithDescriptions(), [], z.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, l] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                c.d,
                                { label: l, description: t, checked: a, onChange: (e) => (0, nk.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(j.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: nD.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: nD.x6,
                children: (0, r.jsx)(m.$, { variant: "primary", text: "Clear all", onClick: nk.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: nD.vu, children: t }),
        ],
    });
}
var nR = a(881436);
function nO() {
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
                    "" === e ? "(empty)" : (0, r.jsx)("span", { className: nR.ti, children: e }),
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
function nw(e) {
    let { game: t } = e;
    return (0, r.jsxs)($.B, {
        gap: 12,
        className: nR.f_,
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
            (0, r.jsx)("pre", { className: nR.aY, children: JSON.stringify(t, null, 2) }),
        ],
    });
}
function nM() {
    let [e, t] = o.useState(null),
        [a, l] = o.useState(""),
        n = (0, z.bG)([tz.A], () => tz.A.games),
        s = o.useMemo(
            () =>
                n.filter((e) => null != e.name && "" !== e.name).map((e) => ({ id: e.id, value: e.id, label: e.name })),
            [n],
        ),
        i = o.useCallback((e) => {
            t(e), null != e && l("");
        }, []),
        d = o.useCallback((e) => {
            l(e), e.trim().length > 0 && t(null);
        }, []),
        c = a.trim(),
        u = c.length > 0 ? c : (e ?? void 0),
        m = (0, z.bG)([tz.A], () => (null != u ? (tz.A.getDetectableGame(u) ?? null) : null), [u]);
    return (0, r.jsx)("div", {
        className: G()(tB.nd, nR.kL),
        children: (0, r.jsxs)($.B, {
            gap: 16,
            padding: 12,
            className: nR.rf,
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
                (0, r.jsx)(nO, {}),
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
                                ? (0, r.jsx)(nw, { game: m })
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
var nL = a(691540),
    nP = a(97483),
    nU = a(123292),
    nG = a(780907),
    nF = a(56562);
let nB = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function n$(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: l } = (0, an.I)(t.id);
    return (0, r.jsxs)($.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != l && (0, r.jsx)(aa.A, { game: l }),
            (0, r.jsxs)($.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/normal", children: l?.name }),
                    a && (0, r.jsx)(h.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function nV() {
    let e = (0, z.bG)([f.Ay], () => f.Ay.getRunningGames()),
        t = (0, z.bG)([f.Ay], () => f.Ay.getDebugRunningGame()),
        [a, l] = (0, o.useState)(t?.id ?? ""),
        n = (0, o.useMemo)(
            () =>
                nB.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, nG.xt)(null);
            let t = tz.A.getDetectableGame(e),
                a = t?.executables[0],
                l = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, nL.P0)({
                    id: "devtools-set-debug-game-error",
                    type: nP.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, nG.xt)({
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
                distributor: l,
                windowHandle: void 0,
                fullscreenType: nF.aI.UNKNOWN,
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
                                (0, r.jsx)(n$, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)($.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(W.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(v.k, { label: "Custom Game ID", value: a, onChange: l }),
                    (0, r.jsx)(at.Z, {
                        label: "Pick a Preset Game",
                        options: n,
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
                                (0, r.jsx)(nU.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(m.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var nW = a(240248),
    nz = a(769195);
function nH() {
    let [e, t] = o.useState(!1),
        [a, l] = o.useState(null),
        [n, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), l(null), s(null);
                let e = await l1.Bo.put({
                    url: "/users/@me/developer-portal/onboarding",
                    body: { completed: !1 },
                    rejectWithError: !0,
                });
                l(`${e.status}: ${e.text}`);
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
            !(0, nW.uJ)(a) && (0, r.jsx)(h.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, nW.uJ)(n) && (0, r.jsx)(h.E, { variant: "text-md/normal", color: "status-danger", children: n }),
        ],
    });
}
function nK() {
    return (0, r.jsx)("div", {
        className: nz.n,
        children: (0, r.jsx)($.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(nH, {}) }),
    });
}
a(172879);
var nY = a(985623),
    nq = a.n(nY),
    nJ = a(990078),
    nQ = a(874804),
    nX = a(782134),
    nZ = a(113494),
    n0 = a(603349),
    n1 = a(155466);
function n2(e) {
    return parseFloat(e.toFixed(3));
}
let n8 = [
    {
        key: "store",
        cellClassName: n1.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: n1.i7,
        render(e) {
            let { trace: t } = e;
            return `${n2(t.time)} ms`;
        },
    },
];
function n6(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(x.Ip, { children: (0, r.jsx)(t$, { columns: n8, data: a }) });
}
let n3 = [
    {
        id: "action",
        name: "Action",
        group: aJ.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = lc()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(lR, {
                        className: n1.mP,
                        children: [
                            (0, r.jsx)(lO, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, l_.i$)(a, "LLLL"),
                                    children: (0, l_.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(lO, { name: "Total Time", children: [n2(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(x.Ip, { className: n1.Dx, children: (0, r.jsx)(az.A, { data: t.action }) }),
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
            return (0, r.jsx)(n6, { actionLog: t });
        },
    },
];
function n5(e) {
    let { actionLog: t, initialHeight: a } = e,
        l = o.useMemo(
            () =>
                t.error
                    ? [
                          ...n3,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(n0.A, { className: n1.ik }), "Error"],
                              }),
                              group: aJ.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: G()(n1.u4, tB.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tB.R5,
                                                  children: (0, r.jsx)(lu.$n, {
                                                      className: tB.Q$,
                                                      size: lu.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(x.Ip, {
                                              className: n1.Dx,
                                              children: (0, r.jsx)(az.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : n3,
            [t],
        ),
        { TabBar: n, renderSelectedTab: s } = (0, aJ.Ay)({ tabs: l }, [l]);
    return (0, r.jsxs)(aq, {
        className: n1.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(n, {}),
            (0, r.jsxs)(aW.Ay, {
                className: G()(tB.jr, n1.nZ),
                children: [
                    (0, r.jsx)(aW.Ay.Icon, { icon: nQ.K, tooltip: t.name }),
                    (0, r.jsx)(aW.Ay.Title, {
                        wrapperClassName: G()(tB.qd, tB.ZE),
                        className: tB.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(aW.Ay.Icon, {
                        icon: lm.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var l;
                                    return (t[a] = ((l = e[a]), ei.AKn.test(l) ? "REDACTED" : l)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, lf.C)(a, () =>
                                (0, nL.P0)({
                                    id: "copy-action-log-name",
                                    type: nP.Ck.SUCCESS,
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
let n9 = [
        {
            key: "action",
            cellClassName: n1.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(n0.A, { className: n1.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: n1.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${n2(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: n1.i7,
            render(e) {
                let { actionLog: t } = e;
                return lc()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    n4 = {
        searchType: lj.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function n7() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        l = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = nq()(() => {
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
        n = o.useMemo(() => l.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [l]),
        [s, i] = o.useState(n),
        [d, c] = o.useState(n),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, lb.RT)(t, u ? s : n, p, n4);
    let g = o.useCallback(
            (e) => {
                i(n), m(e);
            },
            [n],
        ),
        v = t.trim().length > 0,
        j = o.useMemo(() => (v ? d : u ? s : n), [n, d, v, u, s]),
        b = u ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, r.jsxs)("div", {
        ref: e,
        className: G()(tB.nd, n1.nd),
        children: [
            (0, r.jsxs)("div", {
                className: n1.KE,
                children: [
                    (0, r.jsx)(nJ.m, {
                        text: b,
                        children: (0, r.jsx)(eG.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? nX.u : nZ.E,
                            "aria-label": b,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(lg.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(t$, {
                columns: n9,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(n5, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var se = a(936388),
    st = a(132369);
function sa() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: G()(tB.nd, st.n),
        children: (0, r.jsx)(m.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: se.A.clearUploadedKeyVersions,
        }),
    });
}
var sl = a(825484),
    sn = a(37962),
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
        [a, l] = o.useState(0),
        [n, s] = o.useState(1e3),
        [i, c] = o.useState(0),
        u = (0, z.bG)([ss.A], () => (null === e ? null : (ss.A.getFeedbackConfig(si.MW[e]) ?? sn.u[si.MW[e]]))),
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
                                    onChange: (e) => l(parseFloat(e)),
                                }),
                                (0, r.jsx)(g.l, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: so,
                                    value: n,
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
                (0, r.jsxs)(sl.e, {
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
                                        cooldown: a * n,
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
            await l1.Bo.get({
                url: ei.Rsh.ENTITLEMENTS_FOR_APPLICATION(sx.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => sh.A.createFromServer(e)),
    sg = async (e) => {
        await l1.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    sv = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await l1.Bo.del({ url: t, rejectWithError: !0 });
    },
    sj = async () => {
        await l1.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    sb = () => {
        let [e, t] = o.useState([]),
            [a, l] = o.useState(!1),
            n = (0, o.useCallback)(async () => {
                try {
                    l(!0);
                    let e = await sp();
                    t(e);
                } finally {
                    l(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await sg(e), await n();
                },
                [n],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await sv(e), await n();
                },
                [n],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await sj(), await n();
            }, [n]),
            refreshEntitlementList: n,
            entitlements: e,
            loading: a,
        };
    };
var sf = a(51846),
    s_ = a(214868);
let sy = {
        [ei.GD.QUEST_REWARD]: "Quest Reward",
        [ei.GD.DEVELOPER_GIFT]: "Developer Gift",
        [ei.GD.INVOICE]: "Invoice",
        [ei.GD.REVERSE_TRIAL]: "Reverse Trial",
        [ei.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [ei.GD.SUBSCRIPTION]: "Subscription",
        [ei.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    sE = (e) => {
        let t,
            { entitlement: a, active: l, onDelete: n } = e,
            s = (e) => (null != e ? (0, l_.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: G()(sf.Nr, l ? s_.C1 : ""),
            children: [
                (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !l &&
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
                        null != (t = a.sourceType) && t in sy ? sy[t] : `Unknown source type ${t}`,
                    ],
                }),
                l &&
                    null != n &&
                    (0, r.jsx)(lu.$n, {
                        className: sf.RW,
                        size: lu.$n.Sizes.TINY,
                        color: lu.$n.Colors.RED,
                        look: lu.$n.Looks.OUTLINED,
                        onClick: n,
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
        [a, l] = o.useState(sc.j.PREMIUM_TIER_2_1_HOUR),
        [n, s] = o.useState([]),
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
            className: tB.nd,
            children: (0, r.jsxs)("div", {
                className: s_.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: s_.dL,
                        children: [
                            (0, r.jsx)(h.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(F.D, {
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
                        className: G()([sf.uW, s_.Uo]),
                        children: [
                            (0, r.jsx)(g.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: sC,
                                onSelectionChange: l,
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
                                className: s_.dL,
                                children: [
                                    (0, r.jsx)(h.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: sf.GC,
                                        children: [
                                            (0, r.jsx)(lu.$n, {
                                                disabled: b,
                                                size: lu.$n.Sizes.TINY,
                                                color: lu.$n.Colors.PRIMARY,
                                                look: lu.$n.Looks.OUTLINED,
                                                onClick: () => v(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(lu.$n, {
                                                disabled: b,
                                                size: lu.$n.Sizes.TINY,
                                                color: lu.$n.Colors.RED,
                                                look: lu.$n.Looks.OUTLINED,
                                                onClick: () => p(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(lu.$n, {
                                                disabled: b,
                                                look: lu.$n.Looks.BLANK,
                                                size: lu.$n.Sizes.ICON,
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
                            n.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: n.map((e) =>
                                                (0, r.jsx)(
                                                    sE,
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
                                            children: i.map((e) => (0, r.jsx)(sE, { entitlement: e }, e.id)),
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
var sN = a(390544),
    sA = a(396748),
    sk = a(522055),
    sI = a(661202);
function sD() {
    let e = (0, z.bG)([a3.A], () => a3.A.getGuildId()),
        t = (0, z.bG)([a6.A], () => a6.A.getGuild(e)?.name),
        a = (0, z.bG)([sk.A], () => sk.A.getStateForGuild(e)?.instances),
        l = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        n = o.useCallback(
            (t) => {
                null != l &&
                    null != e &&
                    tP.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...l, status: t },
                    });
            },
            [l, e],
        ),
        s = o.useMemo(
            () =>
                Object.values(sN.M).map((e) =>
                    (0, r.jsx)(
                        m.$,
                        {
                            variant: "primary",
                            text: e,
                            onClick: () => {
                                n(e);
                            },
                        },
                        e,
                    ),
                ),
            [n],
        ),
        i = o.useCallback(() => {
            null != l &&
                null != e &&
                tP.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...l, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [l, e]);
    return null == e
        ? null
        : (0, r.jsxs)(x.Ip, {
              className: sI.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sI.uW,
                      children: (0, r.jsx)(W.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sI.uW,
                      children: [
                          (0, r.jsx)(h.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${l?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sI.UD, children: s }),
                          (0, r.jsx)(h.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sI.UD,
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
                                  (0, sA.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function sT(e, t) {
    let a = "boolean" == typeof t ? t : !aV.Ay.get(e);
    tP.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sR = a(460281);
function sO(e) {
    let { devSettingsCategory: t } = e,
        a = (0, z.bG)([aV.Ay], () => aV.Ay.allByCategory(t), [t], z.My),
        l = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: l }] = e;
                    return (0, r.jsx)(c.d, { label: l, description: t, checked: a, onChange: (e) => sT(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: G()(tB.nd, sR.n), children: l });
}
var sw = a(950305),
    sM = a(231483),
    sL = a(597770),
    sP = a(433492),
    sU = a(695458),
    sG = a(796140),
    sF = a(268791),
    sB = a(836480),
    s$ = a(855473),
    sV = a(626258),
    sW = a(420854),
    sz = a(373846),
    sH = a(657044),
    sK = a(141060),
    sY = a(608599),
    sq = a(685761),
    sJ = a(157225),
    sQ = a(362704),
    sX = a(625903),
    sZ = a(628284),
    s0 = a(320448),
    s1 = a(562708),
    s2 = a(830215),
    s8 = a(381689),
    s6 = a(889227),
    s3 = a(499785),
    s5 = a(315069);
class s9 extends s5.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new s9(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let s4 = { pools: null, users: null };
function s7(e) {
    null == s4.users && (s4.users = new Map()), s4.users.set(e.id, new s6.A(e));
}
class ie extends z.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (s4.pools = new Map(Object.entries(e.pools))),
            null != e.users && (s4.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != s4.pools ? Object.fromEntries(s4.pools) : null,
            users: null != s4.users ? Object.fromEntries(s4.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(s4.users?.values() ?? []).filter((t) => s4.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return s4.pools?.get(e) ?? null;
    }
    getUser(e) {
        return s4.users?.get(e) ?? null;
    }
    getPools() {
        return null === s4.pools ? null : Array.from(s4.pools.values());
    }
}
let it = new ie(tP.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == s4.pools && (s4.pools = new Map()), s4.pools.set(t.id, t), a.forEach(s7);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = s4.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                s4.users?.delete(e);
            }),
            s4.pools?.delete(t);
    },
});
var ia = a(835002);
async function il(e, t) {
    return await s3.A.get({
        url: ei.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: s1.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: l } = e;
            if (!a) return void s8.A.showFailedToast(ia.OB.GENERIC_ERROR);
            let { generated_pool: n, users: s } = l;
            tP.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: s9.fromServer(n).setPassword(t),
                users: s.map((e) => new s6.A(e)),
            });
        })
        .catch(() => (s8.A.showFailedToast(ia.OB.GENERIC_ERROR), null));
}
var is = a(844330),
    ii = a(277851);
let ir = [
        sw.n,
        sM.l,
        sL.o,
        sP.K,
        sU.m,
        sG.c,
        sF.$,
        sB.Q,
        s$.Z,
        sV.A,
        sW.E,
        sz.C,
        sH._,
        sK.i,
        sY.L,
        sq.f,
        sJ.N,
        sQ.Y,
        sX.Z,
    ],
    io = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    id = () => {
        let [e, t] = o.useState(""),
            [a, l] = o.useState(""),
            [n, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (n) => {
                        n.preventDefault(), s(!0);
                        try {
                            await il(e, a), t(""), l("");
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
                                        disabled: n,
                                    }),
                                    (0, r.jsx)(v.k, {
                                        type: "password",
                                        fullWidth: !0,
                                        value: a,
                                        onChange: l,
                                        placeholder: "Password",
                                        disabled: n,
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
                                            t(""), l("");
                                        },
                                        disabled: 0 === e.length || 0 === a.length || n,
                                    }),
                                    (0, r.jsx)(m.$, {
                                        type: "submit",
                                        size: "md",
                                        fullWidth: !0,
                                        variant: "primary",
                                        text: "Add Pool",
                                        disabled: 0 === e.length || 0 === a.length || n,
                                        loading: n,
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
    ic = (e) => {
        let { pool: t } = e,
            { id: a, summary: l } = t,
            n = it.getUsersForPool(a),
            s = (0, z.bG)([lE.default], () => lE.default.getId()),
            i = ir[Number(a) % ir.length],
            d = io[Number(a) % io.length],
            c = o.useCallback(() => {
                tP.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)($.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(is.A, {
                icon: (0, r.jsx)(h.E, {
                    variant: "text-md/medium",
                    color: d,
                    className: ii.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: l,
                className: ii.JC,
                subtitle: `${n.length} users`,
                children: (0, r.jsxs)($.B, {
                    direction: "vertical",
                    gap: 4,
                    padding: { left: 24, right: 8, bottom: 16 },
                    fullWidth: !1,
                    children: [
                        n.map((e, a) =>
                            (0, r.jsxs)(
                                o.Fragment,
                                {
                                    children: [
                                        0 !== a && (0, r.jsx)(j.c, { gap: 4 }),
                                        (0, r.jsx)(
                                            F.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(),
                                                        (function (e, t) {
                                                            let a = it.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let l = it.getPool(e)?.password;
                                                            if (null == l) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            s2.A.login({
                                                                login: a.email,
                                                                password: l,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (s8.A.showFailedToast(ia.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: G()(ii.vk, { [ii.Pe]: s === e.id }),
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
                                                                className: G()({ [ii.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sw.n, {
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
                                                                                className: ii.c1,
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
                                                                      children: (0, r.jsx)(sZ.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(s0._, {
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
                            className: ii.UD,
                            children: (0, r.jsx)(m.$, {
                                icon: lp.u,
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
function iu() {
    let e = (0, z.yK)([it], () => it.getPools() ?? []);
    return (0, r.jsxs)($.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: ii.kL,
        children: [
            (0, r.jsx)(id, {}),
            (0, r.jsx)(x.Ip, { className: ii.Ik, children: e?.map((e) => (0, r.jsx)(ic, { pool: e }, e.id)) }),
        ],
    });
}
var im = a(582306),
    ih = a(528153),
    ix = a(275759),
    ip = a(888429);
function ig(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function iv() {
    let e = (0, z.bG)([ix.Ay], () => ix.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, z.bG)([ix.Ay], () => ix.Ay.getDevToolCurrentDate()),
        a = (0, z.bG)([ix.Ay], () => ix.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        l = (0, z.bG)([ix.Ay], () => ix.Ay.getMessageGiftIntentLastShownMap()),
        n = (0, z.bG)([ix.Ay], () => ix.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, z.bG)([ix.Ay], () => ix.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, z.bG)([ix.Ay], () => ix.Ay.getProfilePopoutGiftIntentsDismissMap()),
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
            let t = lt.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(x.Ip, {
        className: tB.nd,
        children: (0, r.jsxs)("div", {
            className: ip.l$,
            children: [
                (0, r.jsx)(h.E, { className: ip.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: ip.Pm,
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
                        className: ip.Pm,
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
                                n.length > 0 &&
                                    (0, r.jsxs)($.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(h.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            n.map((e) => {
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
                    className: ip.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(im.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? lc()(t) : void 0,
                                onSelect: (e) => {
                                    let t = lc()(),
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
                    className: ip.Pm,
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
                                children: null != o ? `Dismissed at: ${ig(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ip.Pm,
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
                            Object.keys(l).length > 0 &&
                                (0, r.jsxs)($.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(l).map((e) => {
                                            let [t, a] = e,
                                                l = ea.default.getUser(t),
                                                n = l?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                h.E,
                                                { variant: "text-xs/normal", children: [n, ": ", ig(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ip.Pm,
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
                                            (0, r.jsx)(h.E, { variant: "text-xs/normal", children: ig(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: ip.Pm,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                ih.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ip.Pm,
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
                    className: ip.Pm,
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
                                                l = ea.default.getUser(t),
                                                n = l?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                h.E,
                                                { variant: "text-xs/normal", children: [n, ": ", ig(a)] },
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
var ij = a(460890),
    ib = a(349288),
    i_ = a(517461),
    iy = a(214947),
    iE = a(403581),
    iC = a(34188);
let iS = [
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
var iN = a(545406);
let iA = [0, 0.5, 1],
    ik = ["Center", "Inner ring", "Outer ring"],
    iI = iA.length,
    iD = "ILLO_BLUE",
    iT = "ILLO_BLUE_40",
    iR = Array.from({ length: iI }, () => iT),
    iO = Array.from({ length: iI }, () => iD),
    iw = ["1", "0.5", "0"],
    iM = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    iL = [
        { label: "Light", value: ei.NJ8.LIGHT, id: ei.NJ8.LIGHT },
        { label: "Dark", value: ei.NJ8.DARK, id: ei.NJ8.DARK },
        { label: "Darker", value: ei.NJ8.DARKER, id: ei.NJ8.DARKER },
        { label: "Midnight", value: ei.NJ8.MIDNIGHT, id: ei.NJ8.MIDNIGHT },
    ],
    iP = { [ei.NJ8.MIDNIGHT]: ei.NJ8.DARKER, [ei.NJ8.DARKER]: ei.NJ8.DARK, [ei.NJ8.LIGHT]: ei.NJ8.DARK },
    iU = { [ei.NJ8.LIGHT]: "light", [ei.NJ8.DARK]: "ash", [ei.NJ8.DARKER]: "dark", [ei.NJ8.MIDNIGHT]: "onyx" },
    iG = [
        { id: "friends", icon: iy.$, text: "Friends" },
        { id: "nitro", icon: iE.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: iC.U, text: "Shop", useCustomGradient: !0 },
    ],
    iF = iS.map((e) => ({ label: e, value: e, id: e })),
    iB = Object.fromEntries(
        iS.map((e) => [
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
                        [a, l, n] = eV.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * l + 0.114 * n) / 255 > 0.5
                                ? eV.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eV.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: iN.oP,
                            style: { background: `rgb(${a}, ${l}, ${n})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var i$ = a(306327);
function iV(e, t, a) {
    return e.map((e, l) => (l === t ? a : e));
}
function iW(e, t) {
    let [a, l, n, s] = eV.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: l, b: n, a: s };
}
function iz(e, t) {
    let a = eV.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iH(e) {
    let { yaml: t, label: a } = e,
        l = o.useCallback(() => {
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
                        icon: lm.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: l,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: iN.RP, children: t }),
        ],
    });
}
function iK(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                ik.map((e, a) => {
                    let l;
                    return (
                        (l = iL
                            .map((e) => {
                                let l,
                                    n,
                                    { value: s } = e,
                                    i = iU[s],
                                    r = t[s];
                                return `  ${i}:
    color: ${-1 === ((n = (l = String(r.colors[a]).toLowerCase()).lastIndexOf("_"))) ? l.replace(/_/g, "-") : l.slice(0, n).replace(/_/g, "-") + "." + l.slice(n + 1)}
    opacity: ${r.opacities[a]}`;
                            })
                            .join("\n")),
                        `type: background
colors:
${l}
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
            ik.map((e, t) => (0, r.jsx)(iH, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iY(e, t, a) {
    let {
            r: l,
            g: n,
            b: s,
            a: i,
        } = (function (e, t) {
            if (t <= e[0].position) {
                let t = e[0];
                return { r: t.r, g: t.g, b: t.b, a: t.opacity };
            }
            for (let a = 0; a < e.length - 1; a++) {
                let l = e[a],
                    n = e[a + 1];
                if (t <= n.position) {
                    if (n.position === l.position) return { r: l.r, g: l.g, b: l.b, a: l.opacity };
                    let e = (t - l.position) / (n.position - l.position);
                    return {
                        r: l.r + (n.r - l.r) * e,
                        g: l.g + (n.g - l.g) * e,
                        b: l.b + (n.b - l.b) * e,
                        a: l.opacity + (n.opacity - l.opacity) * e,
                    };
                }
            }
            let a = e[e.length - 1];
            return { r: a.r, g: a.g, b: a.b, a: a.opacity };
        })(t, a),
        r = 0.5 * i;
    return new i$.A("srgb", [
        (e.r * (1 - r) + l * r) / 255,
        (e.g * (1 - r) + n * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function iq(e, t, a) {
    let l = a.map((e) => {
            let [t, a, l] = eV.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: l, opacity: e.opacity, position: e.position };
        }),
        n = 1 / 0,
        s = (e) => {
            e < n && (n = e);
        };
    for (let a of l) s(e.contrast(iY(t, l, a.position), "WCAG21"));
    for (let a = 0; a < l.length - 1; a++) {
        let { contrast: n } = (function (e, t, a, l, n) {
            let s = 1 / 0,
                i = l;
            for (let r = 0; r <= 100; r++) {
                let o = l + (r / 100) * (n - l),
                    d = a.contrast(iY(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, l, e, l[a].position, l[a + 1].position);
        s(n);
    }
    return Math.round(100 * n) / 100;
}
function iJ(e) {
    let [t, a, l] = eV.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [n, s, i] = eV.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eV.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new i$.A("srgb", [t / 255, a / 255, l / 255]),
        background: { r: n * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function iQ() {
    return {
        colors: Array.from({ length: iI }, () => void 0),
        scales: Array.from({ length: iI }, () => void 0),
        opacities: Array.from({ length: iI }, () => void 0),
    };
}
function iX() {
    return {
        [ei.NJ8.LIGHT]: iQ(),
        [ei.NJ8.DARK]: { colors: [...iR], scales: [...iO], opacities: [...iw] },
        [ei.NJ8.DARKER]: iQ(),
        [ei.NJ8.MIDNIGHT]: iQ(),
    };
}
function iZ() {
    let e = (0, ij.G9)(),
        [t, a] = o.useState(ei.NJ8.DARK),
        [l, n] = (0, i_.V)("DevToolsGradientContrastPanel_themeStops", iX()),
        s = l ?? iX(),
        [i, d] = o.useState(["", "", ""]),
        [c, u] = o.useState([null, null, null]),
        [p, g] = o.useState(null),
        { images: j, renderPickers: b } = (function () {
            let [e, t] = o.useState(null),
                a = o.useRef(null),
                l = o.useCallback((e) => {
                    let a = e.target.files?.[0];
                    if (null == a) return;
                    let l = new FileReader();
                    (l.onload = () => t({ src: l.result, name: a.name })), l.readAsDataURL(a), (e.target.value = "");
                }, []),
                n = o.useCallback(
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
                                    onChange: l,
                                    style: { display: "none" },
                                }),
                                null != e
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(h.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, r.jsx)(nU.Q, {
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
                    [e, l],
                );
            return { images: { buttonBackground: e }, renderPickers: n };
        })(),
        f = o.useMemo(
            () =>
                Object.fromEntries(
                    iL.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    l = [],
                                    n = [];
                                for (let s = 0; s < iI; s++) {
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
                                        d = iP[d];
                                    }
                                    a.push(i ?? iR[s]), l.push(r ?? iO[s]), n.push(o ?? iw[s]);
                                }
                                return { colors: a, scales: l, opacities: n };
                            })(s, t),
                        ];
                    }),
                ),
            [s],
        ),
        _ = f[t],
        y = o.useCallback(
            (e) => {
                n({ ...s, [t]: e(s[t]) });
            },
            [t, n, s],
        ),
        E = o.useMemo(() => iJ({ theme: t, saturation: 1 }), [t]),
        C = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < iI; t++) {
                let a = parseFloat(_.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: _.colors[t], opacity: a, position: iA[t] });
            }
            return e;
        }, [_]),
        S = o.useMemo(() => {
            if (null == C) return null;
            let { text: e, background: t } = E;
            return ik.map((a, l) =>
                iB[_.scales[l]].map((a) => {
                    let n = iq(e, t, iV(C, l, { ...C[l], color: a.value }));
                    return { ...a, trailing: `(${n}:1)` };
                }),
            );
        }, [C, E, _.scales]),
        N = o.useMemo(() => {
            try {
                return iL.map((e) => {
                    let { value: t, label: a } = e,
                        l = f[t],
                        n = [];
                    for (let e = 0; e < iI; e++) {
                        let s = parseFloat(l.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        n.push({ color: l.colors[e], opacity: s, position: iA[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: l, background: n } = iJ(t),
                                s = iq(l, n, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return iS.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of iB[s]) {
                                        if (o === e[t].color) continue;
                                        let s = iq(l, n, iV(e, t, { ...e[t], color: o }));
                                        if (s >= 4.5) {
                                            let e = Math.abs(parseInt(String(o).split("_").pop() ?? "0", 10) - i);
                                            e < r &&
                                                ((r = e),
                                                (a = { stopIndex: t, suggestedColor: o, resultingMinContrast: s }));
                                        }
                                    }
                                }
                            return { passes: i, minContrastRatio: s, suggestion: a };
                        })(n, { theme: t, saturation: 1 }),
                    };
                });
            } catch {
                return null;
            }
        }, [f]);
    return (0, r.jsx)(x.Ar, {
        className: iN.XG,
        children: (0, r.jsxs)($.B, {
            gap: 24,
            padding: 8,
            className: iN.zr,
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
                                (0, r.jsx)(ib.Anchor, {
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
                    options: iL,
                }),
                (0, r.jsxs)($.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: iN.G9,
                            children: ik.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)($.B, {
                                                gap: 0,
                                                className: iN.hi,
                                                children: [
                                                    (0, r.jsx)(h.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(nU.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${iz(_.colors[t], parseFloat(_.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                iz(_.colors[t], parseFloat(_.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(at.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: _.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = iB[e][0]?.value;
                                                    y((l) => ({
                                                        ...l,
                                                        scales: iV(l.scales, t, e),
                                                        colors: null != a ? iV(l.colors, t, a) : l.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: iF,
                                            }),
                                            (0, r.jsx)(at.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: _.colors[t],
                                                onSelectionChange: (e) =>
                                                    y((a) => ({ ...a, colors: iV(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: S?.[t] ?? iB[_.scales[t]],
                                            }),
                                            (0, r.jsx)(v.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: _.opacities[t],
                                                onChange: (e) => y((a) => ({ ...a, opacities: iV(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(v.k, {
                                                label: `Hex${a && null != c[t] ? ` (dE: ${c[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    d((a) => iV(a, t, e));
                                                    let a = (function (e) {
                                                        if (!iM.test(e)) return null;
                                                        try {
                                                            return new i$.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = iT,
                                                                a = iD,
                                                                l = 1 / 0;
                                                            for (let n of iS)
                                                                for (let s of iB[n]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, l] = eV.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new i$.A("srgb", [
                                                                                t / 255,
                                                                                a / 255,
                                                                                l / 255,
                                                                            ]);
                                                                        })(s.value),
                                                                        "2000",
                                                                    );
                                                                    i < l && ((l = i), (t = s.value), (a = n));
                                                                }
                                                            return {
                                                                color: t,
                                                                scale: a,
                                                                deltaE: Math.round(100 * l) / 100,
                                                            };
                                                        })(a);
                                                        u((a) => iV(a, t, e.deltaE)),
                                                            y((a) => ({
                                                                ...a,
                                                                scales: iV(a.scales, t, e.scale),
                                                                colors: iV(a.colors, t, e.color),
                                                            }));
                                                    } else u((e) => iV(e, t, null));
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
                (0, r.jsx)(ij.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eB.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)($.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: iN.$8,
                                        style: { background: eV.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iG.map((e, t) =>
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
                                                        hoverGradientStart: iW(_.colors[0], parseFloat(_.opacities[0])),
                                                        hoverGradientMiddle: iW(
                                                            _.colors[1],
                                                            parseFloat(_.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iW(_.colors[2], parseFloat(_.opacities[2])),
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
                                let { theme: t, label: a, result: l } = e;
                                return null != l
                                    ? (0, r.jsxs)(
                                          $.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(h.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(B.w, {
                                                      type: l.passes ? "success" : "critical",
                                                      children: [
                                                          l.passes ? "\u2713 Passes" : "\u2717 Fails",
                                                          " WCAG AA \u2014 Min contrast: ",
                                                          l.minContrastRatio,
                                                          " : 1",
                                                      ],
                                                  }),
                                                  !l.passes &&
                                                      null != l.suggestion &&
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
                                                                      ik[l.suggestion.stopIndex],
                                                                      ": ",
                                                                      (0, r.jsx)("strong", {
                                                                          children: l.suggestion.suggestedColor,
                                                                      }),
                                                                      " \u2192",
                                                                      " ",
                                                                      l.suggestion.resultingMinContrast,
                                                                      " : 1",
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  !l.passes &&
                                                      null == l.suggestion &&
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
                (0, r.jsx)(iK, { allResolvedStops: f }),
            ],
        }),
    });
}
var i0 = a(820739),
    i1 = a(230135),
    i2 = a(45780),
    i8 = a(868652),
    i6 = a(859241);
let i3 = [
        ad.M.GUILD_POWERUP_PERKS_COACHMARK,
        ad.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        ad.M.GUILD_POWERUP_NOTIFICATION,
        ad.M.GUILD_TAG_AVAILABLE_COACHMARK,
        ad.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    i5 = [
        ad.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        ad.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        ad.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        ad.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        ad.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    i9 = [ad.V.ADOPT_CLAN_IDENTITY_NOTICE],
    i4 = [
        ad.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        ad.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        ad.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function i7(e) {
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
var re = a(861671);
async function rt(e, t, a) {
    await l1.Bo.patch({
        url: ei.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : lc()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, i0.VU)(e),
        (0, i8.Xd)(e, !0);
}
async function ra(e) {
    await l1.Bo.post({ url: ei.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function rl() {
    let e = (0, z.bG)([a3.A], () => a3.A.getGuildId()),
        t = (0, z.bG)([a6.A], () => a6.A.getGuild(e)?.name),
        a = (0, z.yK)([au.A], () => [...i5, ...i9].filter((t) => null != e && (0, i2.zs)(t, e))),
        l = (0, z.yK)([i6.A], () => (null != e ? (i6.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(x.Ip, {
            className: re.kL,
            children: [
                (0, r.jsx)("div", {
                    className: re.uW,
                    children: (0, r.jsx)(W.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: re.uW,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "eyebrow",
                            className: re.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, i8.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: re.uW,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", className: re.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(m.$, { variant: "primary", text: "Reset", onClick: i1.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: re.uW,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        rt(e, l.slice(Math.floor(l.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        rt(e, l, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: re.uW,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", className: re.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)($.B, {
                            gap: 16,
                            children: i3.map((e) => (0, r.jsx)(ny, { className: re.z6, content: ad.M[e] }, ad.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: re.uW,
                    children: (0, r.jsx)(d.n, {
                        label: "Reset Guild Level DCs",
                        children: i5.map((t) =>
                            (0, r.jsx)(
                                c.d,
                                {
                                    label: i7(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, i2._$)(t, e, !1)
                                            : ((0, ac._N)(ad.M.GUILD_POWERUP_NOTIFICATION), (0, i2.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: re.uW,
                    children: (0, r.jsx)(d.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: i9.map((t) =>
                            (0, r.jsx)(
                                c.d,
                                {
                                    label: i7(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, i2._$)(t, e, !1)
                                            : ((0, ac._N)(ad.M.GUILD_POWERUP_NOTIFICATION), (0, i2.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: re.uW,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "eyebrow",
                            className: re.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        i4.map((e) => (0, r.jsx)(ny, { className: re.z6, content: ad.M[e] }, ad.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: re.uW,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "eyebrow",
                            className: re.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                ra(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(m.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, sA.Wp)(!1);
                    },
                }),
            ],
        });
}
var rn = a(450510),
    rs = a(320681);
function ri(e) {
    let { hotspotLocation: t } = e,
        [a, l] = (0, z.yK)([rn.HP], () => [rn.HP.hasHotspot(t, !0), rn.HP.getHotspotOverride(t)]);
    return (0, r.jsx)(g.l, {
        label: t,
        errorMessage: a ? "Inactive" : void 0,
        successMessage: a ? "Active" : void 0,
        value: l,
        options: [
            { id: "none", value: void 0, label: "No Override" },
            { id: "active", value: !0, label: "Force Active" },
            { id: "inactive", value: !1, label: "Force Inactive" },
        ],
        onSelectionChange: (e) => (null != e ? (0, rn.Kl)(t, e) : (0, rn.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function rr() {
    return (0, r.jsx)(x.Ip, {
        className: tB.nd,
        children: (0, r.jsx)(d.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: rs.IN,
            children: (0, r.jsx)($.B, {
                gap: 20,
                children: Object.keys(rn._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(ri, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var ro = a(919523),
    rd = a(855522),
    rc = a(37646),
    ru = a(773669);
function rm() {
    let e = (0, z.bG)([ru.default], () => ru.default.locale),
        [t, a] = o.useState(),
        l = (0, ro.runtimeHashMessageKey)(t ?? ""),
        n = o.useMemo(() => a9.t[l], [l]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(aW.Ay, {
                children: [
                    (0, r.jsx)(aW.Ay.Icon, { icon: rc.U, tooltip: "Locale" }),
                    (0, r.jsx)(aW.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(lR, {
                children: [
                    (0, r.jsx)(lO, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(lO, { name: "App", children: e }),
                    (0, r.jsx)(lO, { name: "System", children: a9.systemLocale }),
                    (0, r.jsx)(lO, { name: "@discord/intl", children: a9.intl.currentLocale }),
                    (0, r.jsx)(lO, { name: "common i18n", children: rd.A.getLocale() }),
                    (0, r.jsx)(lO, { name: "Moment", children: lc().locale() }),
                ],
            }),
            (0, r.jsxs)(aW.Ay, {
                children: [
                    (0, r.jsx)(aW.Ay.Icon, { icon: rc.U, tooltip: "Messages" }),
                    (0, r.jsx)(aW.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(lR, {
                children: (0, r.jsx)(lO, { name: "Unique Rendered Main Messages", children: Object.keys(a9.t).length }),
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
            (0, r.jsxs)(lR, {
                children: [
                    (0, r.jsx)(lO, { name: "Hashed key", children: l }),
                    (0, r.jsx)(lO, { name: "Exists?", children: null != n ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(az.A, { data: n?.(e) }),
        ],
    });
}
var rh = a(434404);
function rx() {
    let { node: e } = (0, ee.Ay)(rh.F, "");
    return (0, r.jsx)(x.Ip, {
        className: tB.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(Z.A, { node: e }, e.key),
        }),
    });
}
var rp = a(663066),
    rg = a(80556),
    rv = a(907135),
    rj = a(665095),
    rb = a(87404);
function rf() {
    return (0, r.jsx)(x.Ip, {
        className: tB.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, rp.B8)(() => (0, r.jsx)(rj.A, {}), { layerKey: rb._s, Layer: rg.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, rp.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rv.A, { onClose: t });
                                        },
                                        { layerKey: rb._s, Layer: rg.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    rp.xr.setState({ fullScreenLayers: [] });
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
var r_ = a(687813),
    ry = a(604121);
let rE = {
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
        a.e("7910").then(a.t.bind(a, 762464, 19)),
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
function rC(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let l = new Uint8Array(e);
                    r_.$1(l, (e, l) => {
                        null != e && a(e);
                        let n = Object.keys(l).reduce((e, t) => ({ ...e, [t]: JSON.parse(r_.he(l[t])) }), {}),
                            s = n["manifest.json"];
                        t(n[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rS() {
    let [e, t] = o.useState(void 0),
        [a, l] = o.useState(400),
        [n, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)($.B, {
            gap: 24,
            children: [
                (0, r.jsx)(at.Z, {
                    options: Object.keys(rE).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(v.k, { value: a.toString(), onChange: (e) => l(Number(e)), label: "Width" }),
                        (0, r.jsx)(v.k, { value: n.toString(), onChange: (e) => s(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(m.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = rE[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rC).then(eq().cloneDeep)
                                            : await t().then((e) => eq().cloneDeep(e.default)),
                                    ),
                                ],
                                { type: "application/json" },
                            ),
                            l = URL.createObjectURL(a),
                            n = document.createElement("a");
                        (n.href = l),
                            (n.download = `${e.split("/").pop()}.json`),
                            document.body.appendChild(n),
                            n.click(),
                            document.body.removeChild(n),
                            URL.revokeObjectURL(l);
                    },
                    text: "Download",
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        style: { width: a, height: n },
                        children: (0, r.jsx)(
                            ry.a,
                            {
                                importData: () => {
                                    let t = rE[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rC).then(eq().cloneDeep)
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
var rN = a(442433),
    rA = a(395671);
let rk = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 562733));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new rA.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rN.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("9004"), a.e("19690"), a.e("22941"), a.e("10758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(a6.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("72899"),
                    a.e("66641"),
                    a.e("45143"),
                    a.e("44143"),
                    a.e("16086"),
                    a.e("19185"),
                    a.e("56961"),
                    a.e("50862"),
                    a.e("83671"),
                    a.e("63980"),
                    a.e("9546"),
                    a.e("47199"),
                    a.e("29169"),
                    a.e("45970"),
                    a.e("25870"),
                    a.e("20315"),
                    a.e("56574"),
                    a.e("16404"),
                    a.e("4974"),
                    a.e("95788"),
                    a.e("73839"),
                    a.e("80186"),
                    a.e("91402"),
                    a.e("49681"),
                    a.e("96382"),
                    a.e("22687"),
                    a.e("63202"),
                    a.e("82596"),
                    a.e("49145"),
                    a.e("9004"),
                    a.e("30997"),
                    a.e("28136"),
                    a.e("43116"),
                    a.e("16084"),
                    a.e("73669"),
                    a.e("36624"),
                    a.e("61058"),
                    a.e("50342"),
                    a.e("33097"),
                    a.e("22547"),
                    a.e("10262"),
                    a.e("46313"),
                    a.e("43233"),
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
                    a.e("30501"),
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
                    a.e("26918"),
                    a.e("21300"),
                    a.e("66016"),
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
            let { default: e } = await Promise.all([a.e("29169"), a.e("26132"), a.e("44491")]).then(a.bind(a, 907206));
            return (t) => (0, r.jsx)(e, { ...t, onClose: rN.Z_ });
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
                        console.log("Leave role clicked"), (0, rN.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e("86456"), a.e("89346")]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: l } = await Promise.resolve().then(a.bind(a, 6161)),
                n = ea.default.getCurrentUser(),
                s = {
                    id: "mock-entry-123",
                    author_id: n?.id ?? "123456789",
                    author_type: l.USER,
                    content_type: t.PLAYED_GAME,
                    participants: [],
                    traits: [],
                    extra: { type: "played_game_extra", game_name: "Test Game", application_id: "123456789" },
                };
            return () => (0, r.jsx)(e, { entry: s, requestId: "mock-request-123" });
        },
        AddQuestionsContextMenu: async () => {
            let { AddQuestionsContextMenu: e } = await Promise.all([
                    a.e("73839"),
                    a.e("44143"),
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
                              console.log("Add form field:", e), (0, rN.Z_)();
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
                l = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(a_.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = a_.A.getAllThreadsForParent(t.id);
                    if (e.length > 0) {
                        l = e[0];
                        break;
                    }
                }
                if (null != l) break;
            }
            return null == l
                ? (console.log("No thread channel found for ChannelListThreadContextMenu"), () => null)
                : (t) => (0, r.jsx)(e, { ...t, channel: l });
        },
        MembersTableSortContextMenu: async () => {
            let { default: e } = await a.e("73091").then(a.bind(a, 779662)),
                t = Object.values(a6.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rN.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("4974"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(a6.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rN.Z_ });
        },
    },
    rI = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("83518"), a.e("55197"), a.e("50974")]).then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rD() {
    let e = o.useMemo(
            () =>
                Object.keys(rk)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rI)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, l] = o.useState(null),
        [n, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rN.L3)(e, rk[a]);
            },
            [a],
        ),
        d = null != n ? rI[n] : null;
    return (0, r.jsx)(x.Ip, {
        className: tB.nd,
        children: (0, r.jsxs)($.B, {
            className: s_.l$,
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
                            onSelectionChange: l,
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
                        value: n,
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
var rT = a(253506),
    rR = a(665260),
    rO = a(97808),
    rw = a(778712),
    rM = a(308528),
    rL = a(720149),
    rP = a(571694),
    rU = a(963852),
    rG = a(704844),
    rF = a(309010),
    rB = a(567761),
    r$ = a(716371),
    rV = a(825801);
let rW = [
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
function rz() {
    let [e, t] = o.useState(ei.lAJ.USER_JOIN),
        a = (0, z.bG)([rF.A], () => rF.A.getChannelId(), []),
        l = o.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, rU.Ay)({ channelId: a, content: "", type: e, state: ei.cmJ.SENT });
            rL.A.receiveMessage(a, t, !1);
        }, [a, e]),
        n = o.useCallback(() => {
            if (null != a)
                for (let { value: e } of rW) {
                    let t = (0, rU.Ay)({ channelId: a, content: "", type: e, state: ei.cmJ.SENT });
                    rL.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, r.jsxs)("div", {
        className: rV.gs,
        children: [
            (0, r.jsx)(at.Z, {
                label: "Inject System Message",
                selectionMode: "single",
                options: rW,
                placeholder: "Select type",
                value: e,
                onSelectionChange: t,
            }),
            (0, r.jsx)(m.$, {
                variant: "primary",
                size: "sm",
                text: "Inject",
                onClick: l,
                disabled: null == a || null == e,
            }),
            (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: "Inject All", onClick: n, disabled: null == a }),
        ],
    });
}
function rH() {
    let e = (0, z.yK)([rB.default], () => rB.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: l, options: n } = (0, z.cf)([a_.A, ea.default, ay.A], () => ({
            selectedChannel: a_.A.getChannel(t),
            options: e.map((e) => {
                let t = a_.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, af.m1)(t, ea.default, ay.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rO.eu, { src: (0, rP.Y)(t), "aria-hidden": !0, size: rw._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == l || !l.isPrivate()) return;
            let e = (0, rR.PQ)(l.recipientFlags ?? 0, rT.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rG.A.updatePrivateChannelRecipientFlags(l.id, e);
        }, [l]),
        i = !!l?.isPrivate() && (0, rR.Lt)(l.recipientFlags ?? 0, rT.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rV.gs,
        children: [
            (0, r.jsx)(at.Z, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: n,
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
function rK() {
    let e = o.useCallback(() => {
        rM.A.openPrivateChannel({ recipientIds: [r$.K] });
    }, []);
    return (0, r.jsx)(m.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rY() {
    let e = (0, z.bG)([aV.Ay], () => aV.Ay.allByCategory(aV.xW.MESSAGING), [], z.My).map((e) => {
        let [t, a, { label: l }] = e;
        return (0, r.jsx)(c.d, { label: l, description: t, checked: a, onChange: (e) => sT(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: G()(tB.nd, rV.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rV.yF }),
            (0, r.jsx)(rz, {}),
            (0, r.jsx)("div", { className: rV.yF }),
            (0, r.jsx)(rH, {}),
            (0, r.jsx)("div", { className: rV.yF }),
            (0, r.jsx)(rK, {}),
        ],
    });
}
var rq = a(459838),
    rJ = a(772707),
    rQ = a(150934),
    rX = a(598653),
    rZ = a(166403),
    r0 = a(625494),
    r1 = a(204925),
    r2 = a(325278);
let r8 = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: a9.intl.string(a9.t.ZLRYGU),
                confirmButtonText: a9.intl.string(a9.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: a9.intl.string(a9.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: a9.intl.string(a9.t["13ofGu"]),
                impression: { impressionName: s1.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("54398"), a.e("34260"), a.e("18467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: li.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("25226"), a.e("82758"), a.e("80022"), a.e("10136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: r1.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e("80959").then(a.bind(a, 784578));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([
            a.e("25226"),
            a.e("82758"),
            a.e("19623"),
            a.e("80022"),
            a.e("1143"),
        ]).then(a.bind(a, 284778));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NUFModal: async () => {
        let { default: e } = await Promise.all([
            a.e("70686"),
            a.e("25226"),
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
        let { default: e } = await Promise.all([a.e("95788"), a.e("4782"), a.e("89545"), a.e("11493")]).then(
            a.bind(a, 914724),
        );
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("96531").then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: rq.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(rJ.k, {
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
        let { PremiumSubscriptionPauseModalSelect: e } = await Promise.all([a.e("92460"), a.e("80347")]).then(
                a.bind(a, 318998),
            ),
            { CancellationContext: t } = await Promise.resolve().then(a.bind(a, 916974)),
            { PremiumTypes: l } = await Promise.resolve().then(a.bind(a, 788868)),
            n = {
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
                        premiumType: l.TIER_2,
                        onClose: a.onClose,
                        transitionState: a.transitionState,
                        premiumSubscription: n,
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
            l = {
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
                action: l,
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
            { createChannelRecord: l } = await Promise.resolve().then(a.bind(a, 95701)),
            n = l({
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
                let l = t.default.getDevicesForPlatform,
                    i = t.default.getFetchingDevices,
                    o = t.default.getLastSelectedDeviceByPlatform,
                    d = t.default.getAwaitingRemoteSessionInfo;
                (t.default.getDevicesForPlatform = (e) => (e === ei.fg2.PLAYSTATION ? s : l.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== ei.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === ei.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null);
                let c = a.onClose;
                return (
                    (a.onClose = async () => {
                        (t.default.getDevicesForPlatform = l),
                            (t.default.getFetchingDevices = i),
                            (t.default.getLastSelectedDeviceByPlatform = o),
                            (t.default.getAwaitingRemoteSessionInfo = d),
                            await c();
                    }),
                    (0, r.jsx)(e, { ...a, channel: n, platform: ei.fg2.PLAYSTATION })
                );
            };
        return (i.displayName = "PlayStationModalWrapper"), i;
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([a.e("56600"), a.e("27495")]).then(a.bind(a, 651930));
        return (t) => (0, r.jsx)(e, { ...t, detectedActivity: { application_id: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([a.e("57352"), a.e("92030"), a.e("51471")]).then(a.bind(a, 550560));
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
                Heading: l,
                Checkbox: n,
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
                    (0, r.jsxs)(l, {
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
                            (0, r.jsx)(l, { variant: "heading-sm/semibold", className: "mb-2", children: "Duration" }),
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
                            (0, r.jsx)(l, {
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
                        children: (0, r.jsx)(n, { checked: v, onChange: j, label: "Resolve associated mod report" }),
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
                Heading: l,
                Checkbox: n,
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
                    (0, r.jsxs)(l, { variant: "heading-lg/semibold", className: "mb-2", children: ["Deactivate ", i] }),
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
                            (0, r.jsx)(l, {
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
                        children: (0, r.jsx)(n, {
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
            let { onClose: l, ...n } = a;
            return (0, r.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModal: Closed"), await l();
                },
                startingScreen: t.SELECT_FRIENDS,
                ...n,
            });
        };
    },
    SelectFriendsModalReminder: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 212737));
        return (a) => {
            let { onClose: l, ...n } = a;
            return (0, r.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModalReminder: Closed"), await l();
                },
                startingScreen: t.REMINDER,
                ...n,
            });
        };
    },
    AddFavoriteChannelModal: async () => {
        let { default: e } = await Promise.all([
            a.e("46776"),
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
            a.e("46776"),
            a.e("2871"),
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
            { Text: t, Heading: l } = await Promise.all([a.e("4823"), a.e("88017")]).then(a.bind(a, 844616)),
            n = await Promise.resolve().then(a.t.bind(a, 64700, 19));
        function s(a) {
            let [s, i] = n.useState(!1),
                [o, d] = n.useState(!1);
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
                                (0, r.jsx)(l, {
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Terms of Service Consent",
                                }),
                                (0, r.jsx)(rQ.S, {
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
                                (0, r.jsx)(l, {
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Promotional Email Consent",
                                }),
                                (0, r.jsx)(rQ.S, {
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
        let { default: e } = await Promise.all([a.e("20315"), a.e("46313")]).then(a.bind(a, 336496));
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
            l = t({
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
        return (t) => (0, r.jsx)(e, { ...t, guild: l });
    },
    GuildVerificationLevelModalCommunity: async () => {
        let { default: e } = await Promise.all([a.e("83013"), a.e("78618"), a.e("70232")]).then(a.bind(a, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 860689)),
            { GuildFeatures: l } = await Promise.resolve().then(a.bind(a, 652215)),
            n = t({
                id: "123456789",
                name: "Test Community Server",
                description: "A test community server for development",
                ownerId: "987654321",
                icon: null,
                splash: null,
                banner: null,
                homeHeader: null,
                features: [l.COMMUNITY],
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
        return (t) => (0, r.jsx)(e, { ...t, guild: n });
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
                a.e("29169"),
                a.e("24627"),
                a.e("67829"),
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
                a.e("29169"),
                a.e("24627"),
                a.e("67829"),
                a.e("22255"),
                a.e("55925"),
                a.e("37381"),
                a.e("59375"),
                a.e("17171"),
                a.e("62767"),
            ]).then(a.bind(a, 218738)),
            t = { ownerId: "987654321", guildId: "123456789", channelId: "123456789", streamType: r2.U4.GUILD },
            l = { id: "123456789", name: "Test Game" },
            n = {
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
        return (a) => (0, r.jsx)(e, { ...a, isStreamer: !1, stream: t, streamApplication: l, analyticsData: n });
    },
    FamilyCenterAcceptLinkModal: async () => {
        let e = ea.default.getUser("12345"),
            t = ea.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await Promise.all([a.e("53385"), a.e("55738"), a.e("31385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(l, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = ea.default.getUser("12345"),
            t = ea.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await Promise.all([a.e("53385"), a.e("55738"), a.e("84811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(l, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = ea.default.getUser("12345"),
            t = ea.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await Promise.all([a.e("53385"), a.e("55738"), a.e("17219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(l, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = ea.default.getUser("12345"),
            t = ea.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await Promise.all([a.e("53385"), a.e("55738"), a.e("43139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(l, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([
            a.e("95788"),
            a.e("30244"),
            a.e("88905"),
            a.e("48370"),
            a.e("72875"),
        ]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("44616"), a.e("85579")]).then(a.bind(a, 785606)),
            t = rZ.A.getPremiumGroupSubscription();
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
        let { default: e } = await Promise.all([a.e("92460"), a.e("82911"), a.e("22220")]).then(a.bind(a, 639719));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await Promise.all([a.e("59066"), a.e("52823"), a.e("71905")]).then(a.bind(a, 868952)),
            t = Object.values(a6.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([a.e("48757"), a.e("27917"), a.e("73152"), a.e("25281")]).then(
            a.bind(a, 516259),
        );
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("78496"),
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
            a.e("70686"),
            a.e("25226"),
            a.e("7850"),
            a.e("16138"),
            a.e("19580"),
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
function r6() {
    let e = o.useMemo(
            () =>
                Object.keys(r8)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(x.Ip, {
        className: tB.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsx)("section", {
                    className: s_.uW,
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
                                onClick: () => null != t && (0, e$.openModalLazy)(r8[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rX.o)(!0), r0._.dispatch(ei.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var r3 = a(933832),
    r5 = a(472229),
    r9 = a(945960),
    r4 = a(669316),
    r7 = a(354670),
    oe = a(428262);
let ot = async () => {
        try {
            let { body: e } = await l1.Bo.get({ url: ei.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    oa = async (e, t) => {
        try {
            await l1.Bo.post({ url: ei.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r9._D)();
        }
    },
    ol = async (e, t) => {
        try {
            await l1.Bo.del({ url: ei.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r9._D)();
        }
    },
    on = async () => {
        try {
            let { body: e } = await l1.Bo.get({ url: ei.Rsh.USER_OFFERS, rejectWithError: !0 });
            return { trial: e.trial, discount: e.discount.map(r4.A.createFromServer) };
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    os = async () => {
        try {
            await l1.Bo.del({ url: ei.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await r7.A.forceReset(), await (0, r9._D)();
        }
    },
    oi = async (e) => {
        await l1.Bo.post({ url: ei.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function or(e) {
    let { offer: t, offerOptions: a, forceRefetch: l } = e,
        [n, s] = o.useState(!1),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, x] = o.useState(!1);
    o.useEffect(() => {
        c && x(!0);
        let e = setTimeout(() => {
            x(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [c]);
    let { id: p, expires_at: g, redeemed_at: v, trial_id: j, subscription_trial: b, referrer: f } = t,
        _ =
            a.find((e) => {
                let { value: t } = e;
                return t === j;
            })?.label ?? "Unknown";
    null != f && (_ = `${_} from @${f.username}`);
    let y = null != g,
        E = null != g && new Date(g).getTime() < Date.now(),
        C = b?.sku_id === sx.pe.TIER_0,
        S = async () => {
            u(!0), y ? await N({ expiresAt: null }) : await (0, r9.u1)(t), l(), u(!1);
        },
        N = async (e) => {
            u(!0);
            try {
                await l1.Bo.patch({
                    url: ei.Rsh.UPDATE_USER_OFFER(p, "trial"),
                    body: {
                        ...("expiresAt" in e && { expires_at: e.expiresAt }),
                        ...("referrerId" in e && { referrer_id: e.referrerId }),
                    },
                    rejectWithError: !0,
                });
            } finally {
                l(), u(!1);
            }
        };
    o.useEffect(() => {
        if (n) {
            let e = setTimeout(() => {
                s(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
        if (i) {
            let e = setTimeout(() => {
                d(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
    }, [n, i]);
    let A = "Active";
    return (
        y && (A = "Acked"),
        E && (A = "Expired"),
        (0, r.jsxs)("div", {
            className: G()(s_.Nr, C ? s_.Qf : s_.C1),
            children: [
                (0, r.jsx)("div", {
                    className: G()(s_.nM, s_.S7),
                    children: (0, r.jsx)(W.D, { variant: "heading-lg/semibold", color: "always-white", children: _ }),
                }),
                (0, r.jsxs)(F.D, {
                    className: G()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, lf.C)(p, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", p] }),
                        n
                            ? (0, r.jsx)(r3.A, { size: "md", color: "currentColor", className: s_.Kk })
                            : (0, r.jsx)(lm.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                (0, r.jsxs)(F.D, {
                    className: G()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, lf.C)(j, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", j] }),
                        i
                            ? (0, r.jsx)(r3.A, { size: "md", color: "currentColor", className: s_.Kk })
                            : (0, r.jsx)(lm.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: s_.nM,
                    children: (0, r.jsxs)(h.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, oe.re)({
                                intervalType: b?.interval ?? sx.WT.MONTH,
                                intervalCount: b?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: s_.nM,
                    children: [
                        (0, r.jsxs)(h.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, r5.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, l_.Xm)(g),
                            onChange: (e) => {
                                N({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s_.nM,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", color: "always-white", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: f?.id ?? "",
                            onChange: (e) => N({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s_.fC,
                    children: [
                        (0, r.jsx)(F.D, {
                            onClick: S,
                            className: G()(s_.qS, s_.vk, { [s_.R1]: y, [s_._7]: E }),
                            children: (0, r.jsx)(h.E, {
                                variant: "eyebrow",
                                color: "Acked" === A ? void 0 : "always-white",
                                children: A,
                            }),
                        }),
                        null != v &&
                            (0, r.jsx)("div", {
                                className: G()(s_.qS, s_.k3),
                                children: (0, r.jsx)(h.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(F.D, {
                    onClick: async () => {
                        u(!0), await ol(p, "trial"), l(), u(!1);
                    },
                    children: (0, r.jsx)(lp.u, { size: "md", color: "currentColor", className: G()(s_.Kk, s_.IT) }),
                }),
                (0, r.jsx)("div", { className: G()(s_.g4, { [s_.VP]: c || m }), children: (0, r.jsx)(tl.y, {}) }),
            ],
        })
    );
}
function oo(e) {
    let { offer: t, offerOptions: a, forceRefetch: l } = e,
        [n, s] = o.useState(!1),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, x] = o.useState(!1);
    o.useEffect(() => {
        c && x(!0);
        let e = setTimeout(() => {
            x(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [c]);
    let { id: p, expiresAt: g, discountId: v, discount: j } = t,
        b =
            a.find((e) => {
                let { value: t } = e;
                return t === v;
            })?.label ?? "Unknown",
        f = null != g,
        _ = t.hasExpired(),
        y = t.isApplied(),
        E = async () => {
            u(!0), f ? await C({ expiresAt: null }) : await (0, r9.u1)(void 0, t), l(), u(!1);
        },
        C = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await l1.Bo.patch({
                    url: ei.Rsh.UPDATE_USER_OFFER(p, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                l(), u(!1);
            }
        };
    o.useEffect(() => {
        if (n) {
            let e = setTimeout(() => {
                s(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
        if (i) {
            let e = setTimeout(() => {
                d(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
    }, [n, i]);
    let S = "Active";
    return (
        _ && (S = "Expired"),
        f && (S = "Acked"),
        (0, r.jsxs)("div", {
            className: G()(s_.Nr, s_.id),
            children: [
                (0, r.jsx)("div", {
                    className: G()(s_.nM, s_.S7),
                    children: (0, r.jsx)(W.D, { variant: "heading-lg/semibold", color: "text-default", children: b }),
                }),
                (0, r.jsxs)(F.D, {
                    className: G()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, lf.C)(p, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", p] }),
                        n
                            ? (0, r.jsx)(r3.A, { size: "md", color: "currentColor", className: G()(s_.Kk, s_.mK) })
                            : (0, r.jsx)(lm.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                (0, r.jsxs)(F.D, {
                    className: G()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, lf.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", v] }),
                        i
                            ? (0, r.jsx)(r3.A, { size: "md", color: "currentColor", className: G()(s_.Kk, s_.mK) })
                            : (0, r.jsx)(lm.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                j?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(h.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [j.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: s_.nM,
                    children: [
                        (0, r.jsxs)(h.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, r5.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, l_.Xm)(g?.toISOString()),
                            onChange: (e) =>
                                C({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s_.fC,
                    children: [
                        (0, r.jsx)(F.D, {
                            onClick: E,
                            className: G()(s_.qS, s_.vk, { [s_.R1]: f, [s_._7]: _ }),
                            children: (0, r.jsx)(h.E, {
                                variant: "eyebrow",
                                color: "Acked" === S ? void 0 : "always-white",
                                children: S,
                            }),
                        }),
                        y &&
                            (0, r.jsx)("div", {
                                className: G()(s_.qS, s_.k3),
                                children: (0, r.jsx)(h.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(F.D, {
                    className: s_.aR,
                    onClick: async () => {
                        u(!0), await ol(p, "discount"), l(), u(!1);
                    },
                    children: (0, r.jsx)(lp.u, { size: "md", color: "currentColor", className: G()(s_.Kk, s_.fy) }),
                }),
                (0, r.jsx)("div", { className: G()(s_.g4, { [s_.VP]: c || m }), children: (0, r.jsx)(tl.y, {}) }),
            ],
        })
    );
}
function od() {
    let [e, t] = o.useState([]),
        [a, l] = o.useState([]),
        [n, s] = o.useState(),
        [i, d] = o.useState(),
        [c, u] = o.useState([]),
        [p, v] = o.useState([]),
        [j, b] = o.useState(!0),
        [f, _] = o.useState(10080),
        [y, E] = o.useState([]),
        { entitlements: C, deleteFractionalPremium: S, refreshEntitlementList: N } = sb();
    o.useEffect(() => {
        N();
    }, [N]),
        o.useEffect(() => {
            E(C.filter((e) => e.sourceType === ei.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [C]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || j) &&
                ot().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), l(r), null == n && s(a[0].value), null == i && d(r[0].value);
                });
        }, [e, a, n, i, j]),
        o.useEffect(() => {
            j &&
                (b(!1),
                r7.A.forceReset(),
                (0, r9._D)(),
                on().then((e) => {
                    u(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        v(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [j]);
    let A = async () => {
            null != n && (await oa(n, "trial"), b(!0));
        },
        k = async () => {
            null != i && (await oa(i, "discount"), b(!0));
        },
        I = async () => {
            await os(), b(!0);
        },
        D = async () => {
            let e = new Date(Date.now() + 60 * f * 1e3).toISOString();
            await oi(e), N();
        };
    return (0, r.jsx)(x.Ip, {
        className: tB.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: s_.Uo,
                            children: [
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: I,
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
                                    onClick: () => b(!0),
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
                            (0, r.jsx)(g.l, {
                                label: "Create a Trial Offer",
                                options: e,
                                formatOption: (e) => {
                                    let { label: t, value: a } = e;
                                    return { label: t, value: a, id: a };
                                },
                                value: n,
                                placeholder: "Trial Type",
                                onSelectionChange: s,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(m.$, { variant: "primary", text: "Create", onClick: A }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: s_.uW,
                    children: (0, r.jsxs)("div", {
                        className: s_.bd,
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
                            (0, r.jsx)(m.$, { variant: "primary", text: "Create", onClick: k }),
                        ],
                    }),
                }),
                c.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: s_.uW,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            c.map((t) =>
                                (0, r.jsx)(or, { offer: t, offerOptions: e, forceRefetch: () => b(!0) }, t.id),
                            ),
                        ],
                    }),
                p.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: s_.uW,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            p.map((e) =>
                                (0, r.jsx)(oo, { offer: e, offerOptions: a, forceRefetch: () => b(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: s_.uW,
                    children: (0, r.jsxs)("div", {
                        className: s_.bd,
                        children: [
                            (0, r.jsx)(g.l, {
                                label: "Create a Reverse Trial Entitlement",
                                options: [
                                    { id: "5min", label: "5 minutes", value: 5 },
                                    { id: "1hour", label: "1 hour", value: 60 },
                                    { id: "1day", label: "1 day", value: 1440 },
                                    { id: "1week", label: "1 week", value: 10080 },
                                ],
                                value: f,
                                placeholder: "Reverse Trial Length",
                                onSelectionChange: _,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(m.$, { variant: "primary", text: "Create", onClick: D }),
                        ],
                    }),
                }),
                y.length > 0 &&
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(h.E, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, r.jsx)("div", {
                                children: y.map((e) =>
                                    (0, r.jsx)(sE, { entitlement: e, active: !0, onDelete: () => S(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var oc = a(528265),
    ou = a(26279),
    om = a(142798);
let oh = {
        [ou.Re.UNSPECIFIED]: "Unspecified",
        [ou.Re.DRAFT]: "Draft",
        [ou.Re.SIGNED]: "Signed",
        [ou.Re.DISCARDED]: "Discarded",
        [ou.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
    },
    ox = { [ou.BM.UNSPECIFIED]: "Unspecified", [ou.BM.ONE_TIME]: "One Time", [ou.BM.SUBSCRIPTION]: "Subscription" };
function op() {
    let [e, t] = o.useState(null),
        [a, l] = o.useState(!0),
        [n, s] = o.useState(null),
        i = o.useCallback(async () => {
            l(!0), s(null);
            try {
                let e = await l1.Bo.get({ url: `${ei.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
                t(e.body ?? []);
            } catch (e) {
                s(e instanceof Error ? e.message : "Failed to fetch orders");
            } finally {
                l(!1);
            }
        }, []);
    return (
        o.useEffect(() => {
            i();
        }, [i]),
        (0, r.jsx)(x.Ip, {
            className: tB.nd,
            children: (0, r.jsxs)("div", {
                className: s_.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: s_.dL,
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
                    null != n && (0, r.jsx)(B.w, { type: "critical", children: n }),
                    !a &&
                        null != e &&
                        0 === e.length &&
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "No orders found.",
                        }),
                    null != e && e.map((e) => (0, r.jsx)(og, { order: e }, e.id)),
                ],
            }),
        })
    );
}
function og(e) {
    let { order: t } = e,
        [a, l] = o.useState(!1),
        [n, s] = o.useState(!1),
        i = oh[t.status] ?? `Unknown (${t.status})`,
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
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: n ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(oc.C, {
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
                                                  ox[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
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
                    className: om.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(F.D, {
                            onClick: () => l((e) => !e),
                            className: om.Eh,
                            children: [
                                (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(sm.A, { direction: a ? sm.A.Directions.UP : sm.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: om.j3,
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
var ov = a(935462),
    oj = a(260598),
    ob = a(93688),
    of = a(717400),
    o_ = a(676955),
    oy = a(31300),
    oE = a(500060),
    oC = a(391973),
    oS = a(684013),
    oN = a(765671),
    oA = a(235986),
    ok = a(742589),
    oI = a(41984),
    oD = a(181435),
    oT = a(435736),
    oR = a(296027),
    oO = a(515183),
    ow = a(489277),
    oM = a(127242),
    oL = a(869014),
    oP = a(528772),
    oU = a(38502),
    oG = a(532624),
    oF = a(773371),
    oB = a(996439),
    o$ = a(350535),
    oV = a(9302),
    oW = a(644434),
    oz = a(618137);
let oH = {
        [ei.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: ei.uss.CLICK_ZONE_DEBUG,
            id: (0, ek.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...oU.A.getWidgetDefaultSettings(ei.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [ei.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: ei.uss.PERFORMANCE_DEBUG,
            id: (0, ek.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...oU.A.getWidgetDefaultSettings(ei.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    oK = {};
function oY(e) {
    let { id: t } = e,
        [a, l] = o.useState(!1);
    return (
        o.useEffect(() => {
            let e;
            return (
                a &&
                    (e = setTimeout(() => {
                        l(!1);
                    }, 1e3)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [a]),
        (0, r.jsxs)(lu.$n, {
            look: lu.$n.Looks.LINK,
            color: lu.$n.Colors.LINK,
            size: lu.$n.Sizes.MIN,
            onClick: function () {
                (0, lf.C)(t, () => l(!0));
            },
            className: oz.DT,
            children: ["Application Id: ", t, " ", a ? a9.intl.string(a9.t.t5VZ88) : null],
        })
    );
}
let oq = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, z.bG)([f.Ay], () => f.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            l = (0, z.bG)([E.A], () => E.A.getGameForPID(t.pid)),
            n = (0, z.bG)([f.Ay], () => (null == a ? null : f.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: oz.st,
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
                        children: (0, r.jsx)(oY, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, oO.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(h.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: oz.st,
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
                            children: ["overlayMethod: ", (0, oO.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != n &&
                    (0, r.jsxs)("div", {
                        className: oz.st,
                        children: [
                            (0, r.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", n.source],
                            }),
                            (0, r.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", n.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", n.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, oO.gK)(n.overlayMethod)],
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
                    children: ["hook: ", l?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", l?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", l?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", l?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    oJ = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, z.cf)([oF.default], () => oF.default.getOverlayPIDStatuses()),
            l = (0, z.cf)([oR.default], () => oR.default.getTrackedGames()),
            n = (0, z.bG)([oF.default], () => oF.default.isInputLocked(t), [t]),
            s = (0, z.bG)([oF.default], () => oF.default.DEV_isInputLockedV3(t), [t]),
            i = (0, z.bG)([oF.default], () => oF.default.DEV_isInputLocked(t), [t]),
            o = (0, z.bG)([oF.default], () => oF.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: oz.st,
            children: [
                (0, r.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Screen Type Resolution: ",
                        ((e) => {
                            let t = l[e]?.timer;
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
                            let t = l[e]?.timer;
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
                            let t = l[e]?.timer;
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
                (0, r.jsxs)(h.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", n] }),
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
function oQ(e) {
    let t,
        a = ((t = Object.values((0, z.yK)([oU.A], () => oU.A.getWidgetsForLayout(oW.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, oC.uv)(a.id);
            else {
                let t = oH[e];
                if (null == t) return;
                let a = t(oW.G);
                (0, oC.jn)(a);
            }
        },
    ];
}
function oX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, l_.i$)(lc()(e), "h:mm:ss.SSS");
}
let oZ = o.memo(function (e) {
    let { pid: t, ...a } = e,
        l = (0, z.bG)([oR.default], () => {
            if (null == t) return "Unknown";
            let e = oR.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((oK[t] = e), e) : (oK[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(h.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: l });
});
function o0() {
    let e = (0, z.bG)([oM.A], () => oM.A.hasRenderDebugMode(oI.x7.TrackFocusPIDs)),
        t = (0, z.yK)([oR.default], () => oR.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: oz.st,
        children: [
            (0, r.jsxs)("div", {
                className: oz.Iv,
                children: [
                    (0, r.jsx)(c.d, {
                        checked: e,
                        onChange: () =>
                            void oS.A.setRenderDebugMode(
                                !oM.A.hasRenderDebugMode(oI.x7.TrackFocusPIDs),
                                oI.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(F.D, {
                        className: oz.LL,
                        onClick: () => oS.A.clearTrackedPids(),
                        children: (0, r.jsx)(lp.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(x.Ip, {
                className: G()(oz.st, oz.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, l] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(nJ.m, {
                                    position: "left",
                                    text: l === oI.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(h.E, {
                                            variant: "text-sm/medium",
                                            color: l === oI.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(oZ, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                oX(t),
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
let o1 = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, z.bG)([oR.default, f.Ay], () => {
                if (null == t) return null;
                let e = oR.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = f.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? nF.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(h.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, oO.wR)(a) : "Unknown"],
        });
    }),
    o2 = o.memo(function () {
        let e = (0, z.cf)([oR.default], () => oR.default.getTrackedGames()),
            [t, a] = o.useState({}),
            l = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (l.current = setInterval(async () => {
                        let e = f.Ay.getRunningGames(),
                            t = [],
                            l = Date.now();
                        for (let a of e) t.push((0, oO.E1)(a.pid, 0).then((e) => [a.pid, e, l]));
                        let n = await Promise.all(t);
                        a((e) =>
                            n.reduce(
                                (e, t) => {
                                    let [a, l, n] = t;
                                    if (null == l || null == a) return e;
                                    let s = e[a] ?? [],
                                        i = s[s.length - 1]?.screenType;
                                    return (
                                        (0 === s.length || i !== l) &&
                                            (e[a] = [...s, { pid: a, screenType: l, timestamp: n }]),
                                        e
                                    );
                                },
                                { ...e },
                            ),
                        );
                    }, +l8.A.Millis.SECOND)),
                    () => clearInterval(l.current)
                ),
                [],
            ),
            (0, r.jsx)(nJ.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(x.Ip, {
                        className: G()(oz.st, oz.XG),
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
                                            (0, r.jsx)(oZ, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(o1, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: l } = t;
                                                    return (0, r.jsx)(
                                                        h.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, oO.wR)(a)} @ ${oX(l)}`,
                                                        },
                                                        `${e.pid}-${a}-${l}`,
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
    o8 = o.memo(function () {
        let e = (0, z.cf)([oR.default], () => oR.default.getTrackedGames()),
            t = (0, oV.getPID)(),
            a = (0, z.bG)([oR.default], () => oR.default.isOverlayOOPEnabledForPid(t), [t]),
            [l, n] = (0, z.yK)([oP.A], () => [oP.A.enabled, oP.A.keepOpen]),
            s = (0, z.bG)([oF.default], () => oF.default.getFocusedPID()),
            i = (0, z.bG)([oF.default], () => oF.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: oz.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(oJ, { pid: e.pid }, e.pid)),
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
                            children: ["SoundboardOverlay.enabled: ", l ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", n ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    o6 = [
        {
            mode: oI.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: oI.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: oI.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: oI.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oI.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oI.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: oI.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    o3 = o.memo(function () {
        let [e, t] = oQ(ei.uss.CLICK_ZONE_DEBUG),
            [a, l] = oQ(ei.uss.PERFORMANCE_DEBUG),
            n = (0, z.bG)([oM.A], () => oM.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: oz.st,
                children: o6.map((s) => {
                    let i =
                            s.mode === oI.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${oL.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === oI.x7.ClickZones
                                ? null != e
                                : s.mode === oI.x7.WidgetAreas
                                  ? null != a
                                  : n.has(s.mode);
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(c.d, {
                                checked: d(),
                                onChange: () => {
                                    var e;
                                    let a = d();
                                    s.mode === oI.x7.ClickZones && t(),
                                        s.mode === oI.x7.WidgetAreas && l(),
                                        (e = s.mode),
                                        oS.A.setRenderDebugMode(!a, e);
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
    o5 = o.memo(function () {
        let e = (0, z.cf)([oR.default], () => oR.default.getTrackedGames()),
            t = (0, z.bG)([f.Ay], () => f.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(nJ.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: oz.st,
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
                                                (0, r.jsx)(o1, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(nJ.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: oz.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(oq, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    o9 = o.memo(function () {
        let e = (0, z.bG)([oR.default], () => oR.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            l = [
                { label: oI.V6.UNSET, value: oI.V6.UNSET, id: oI.V6.UNSET },
                { label: oI.V6.IN_PROCESS_V2, value: oI.V6.IN_PROCESS_V2, id: oI.V6.IN_PROCESS_V2 },
                { label: oI.V6.OUT_OF_PROCESS_V3, value: oI.V6.OUT_OF_PROCESS_V3, id: oI.V6.OUT_OF_PROCESS_V3 },
                {
                    label: oI.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: oI.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: oI.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(g.l, {
            label: "Override the overlay render mode",
            value: t,
            options: l,
            onSelectionChange: (e) => {
                a(e), oS.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function o4(e) {
    let { modalProps: t, onClose: a } = e,
        [l, n] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(ov.EO, {
        size: ov.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(ov.rQ, {
                align: oA.A.Align.CENTER,
                justify: oA.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(ov.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(ov.$m, {
                children: (0, r.jsx)("div", {
                    className: oz.st,
                    children: (0, r.jsx)(oj.f, { label: "Paste JSON Here", onChange: n, value: l ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(ov.jl, {
                children: (0, r.jsxs)(sl.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(l);
                            },
                        }),
                        (0, r.jsx)(m.$, { variant: "secondary", text: "Clear", onClick: s }),
                    ],
                }),
            }),
        ],
    });
}
let o7 = {
    native: { label: "Native", filter: (e) => e.type === oD.ON.NativeLegacy || e.type === oD.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === oD.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === oD.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === oD.ON.OOPModule || e.type === oD.ON.LegacyModule },
};
function de(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oD.QJ.Info;
    if (t === oD.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case oD.ON.NativeLegacy:
            return "var(--yellow-500)";
        case oD.ON.NativeOOP:
            return "var(--green-500)";
        case oD.ON.Flux:
            return "var(--brand-400)";
        case oD.ON.Renderer:
            return "var(--brand-500)";
        case oD.ON.LegacyModule:
            return "var(--yellow-300)";
        case oD.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let dt = [
    {
        key: "type",
        cellClassName: oz.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                l = da(t);
            return (0, r.jsx)("div", {
                className: oz.g$,
                style: { color: de(t, a) },
                children: (0, r.jsx)(l, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: oz.Cm,
        render(e) {
            let { name: t, type: a, logType: l } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case oD.QJ.Info:
                                    return "text-strong";
                                case oD.QJ.Warning:
                                    return "text-feedback-warning";
                                case oD.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(l),
                        children: t,
                    }),
                    (0, r.jsxs)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: oz.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, l_.i$)(lc()(t), "h:mm:ss.SSS");
        },
    },
];
function da(e) {
    switch (e) {
        case oD.ON.NativeLegacy:
            return ob.W;
        case oD.ON.NativeOOP:
            return of.q;
        case oD.ON.Renderer:
        case oD.ON.Flux:
            return o_.v;
        case oD.ON.LegacyModule:
            return oy.k;
        case oD.ON.OOPModule:
            return oE.o;
        default:
            return oy.k;
    }
}
function dl(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let dn = ["__webpack_require__", "fn"],
    ds = ["web.js", "web.js.map"],
    di = [
        {
            id: "details",
            name: "Details",
            group: aJ.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: l, type: n, logType: s, nativeId: i, stack: o, data: d, timestamp: c, pid: u } = t,
                    m = lc()(c),
                    h = da(n);
                return (0, r.jsxs)(x.Ar, {
                    className: oz.bW,
                    children: [
                        (0, r.jsxs)(ok.A, {
                            className: G()(tB.jr, oz.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: de(n, s) },
                                    className: oz.nr,
                                    children: (0, r.jsx)(h, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(ok.A.Title, {
                                    wrapperClassName: oz.qd,
                                    children: [
                                        l,
                                        " (",
                                        n,
                                        ")",
                                        (0, r.jsx)(F.D, {
                                            tag: "span",
                                            className: oz.KE,
                                            onClick: () => (0, lf.C)(l),
                                            children: (0, r.jsx)(lm.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(ok.A.Icon, {
                                    icon: lm.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, lf.C)(dl(t));
                                    },
                                }),
                                (0, r.jsx)(ok.A.Icon, { icon: lx.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(lR, {
                            className: oz.ZK,
                            children: [
                                (0, r.jsx)(lO, {
                                    name: "Timestamp",
                                    copyValue: m.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: m.toISOString(),
                                        title: (0, l_.i$)(m, "LLLL"),
                                        children: (0, l_.i$)(m, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(lO, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(lO, {
                                    name: "PID",
                                    copyValue: u?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: u?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(lO, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(lO, {
                                    name: "Data",
                                    copyValue: dl(d),
                                    children: (0, r.jsx)("code", { children: dl(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(lO, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, l, n, s] = a,
                                                        i = l.split(/[\\/]/).pop();
                                                    return dn.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: oz.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !ds.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: oz.lz,
                                                                                      title: l,
                                                                                      children: [i, ":", n, ":", s],
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
    dr = {
        searchType: lj.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: l, data: n } = e,
                s = [t, a, JSON.stringify(n)];
            return null != l && s.push(l), s;
        },
        throttleMs: 100,
    };
function dd() {
    let { ref: e, height: t } = (0, oN.Ay)(),
        a = (0, z.bG)([oM.A], () => oM.A.isModuleLoggingEnabled()),
        [l, n] = o.useState(a),
        [s, i] = o.useState(!1),
        [d, c] = o.useState(null),
        [u, m] = o.useState(Object.keys(o7)),
        [x, p] = (0, z.bG)([oM.A], () => oM.A.getOverlayLoggingBreadcrumbs(), [], oB.D),
        [g, v] = o.useState(null),
        j = g ?? x,
        b = null != g ? -1 : p;
    o.useEffect(() => {
        0 !== b &&
            (s
                ? c(j.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : c(null));
    }, [s, j, b]);
    let [f, _] = o.useState(""),
        y = o.useMemo(
            () =>
                0 === b
                    ? []
                    : j.filter((e) => {
                          if (s && null != d && e.timestamp < d) return !1;
                          for (let t of u) {
                              let { filter: a } = o7[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [j, u, d, s, b],
        ),
        [E, C] = o.useState(y),
        [S, N] = o.useState(null),
        A = o.useMemo(() => j.find((e) => e.key === S), [j, S]),
        k = o.useCallback((e) => {
            C(e);
        }, []),
        { renderSelectedTab: I } = (0, aJ.Ay)({ tabs: di }, []);
    (0, lb.RT)(f, y, k, dr, [j]);
    let D = o.useCallback((e) => {
            n(e), oS.A.setModuleLogging(e);
        }, []),
        [T, R] = o.useState(!1),
        O = o.useRef(null),
        w = o.useCallback(() => {
            (0, lf.C)(JSON.stringify(y)), R(!0);
        }, [y]);
    o.useEffect(() => {
        if (T)
            return (
                (O.current = setTimeout(() => {
                    R(!1);
                }, 4e3)),
                () => {
                    null != O.current && clearTimeout(O.current);
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
                        (0, r.jsx)(o4, {
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
        className: oz.rh,
        children: [
            (0, r.jsxs)("div", {
                className: oz.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: G()(oz._V, oz.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: oz.iR,
                                children: (0, r.jsx)(rQ.S, { label: "Poll Native", checked: l, onChange: (e) => D(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: oz.iR,
                                children: (0, r.jsx)(rQ.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(F.D, {
                                className: oz.ny,
                                onClick: w,
                                children: [
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: T ? "Copied" : "Copy All",
                                    }),
                                    T
                                        ? (0, r.jsx)(r3.A, { size: "sm", color: eV.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(lm.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(F.D, {
                                className: oz.ny,
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
                        className: G()(oz._V, oz.XQ),
                        children: Object.entries(o7).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                F.D,
                                {
                                    className: G()(oz.pb, u.includes(t) && oz.bx),
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
                        className: oz._V,
                        children: (0, r.jsx)(lg.I, {
                            query: f,
                            onChange: _,
                            onClear: () => _(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: G()(oz.st, oz.CZ),
                children: (0, r.jsx)(t$, {
                    columns: dt,
                    data: E,
                    selectedRowKey: S ?? void 0,
                    onClickRow: (e) => N(e.key),
                }),
            }),
            null != A &&
                (0, r.jsx)(aq, {
                    className: G()(oz.st, oz.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: I({ breadcrumb: A, onClose: () => N(null) }),
                }),
        ],
    });
}
let dc = o.memo(function () {
        let e = (0, z.bG)([ow.A], () => ow.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: oz.st,
            children: [
                (0, r.jsx)("div", {
                    className: oz.Iv,
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
    du = o.memo(function () {
        let e = (0, z.bG)([oM.A], () => oM.A.isStateDebuggingEnabled()),
            t = (0, z.bG)([oM.A], () => oM.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    oS.A.setStateDebugging(!0),
                    () => {
                        oS.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: oz.st,
                children: [
                    (0, r.jsx)("div", {
                        className: oz.Iv,
                        children: (0, r.jsx)(c.d, {
                            checked: e,
                            onChange: () => oS.A.setStateDebugging(!e),
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
function dm() {
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)("div", {
            className: G()(tB.nd, oz.rf),
            children: [
                (0, r.jsx)(o3, {}),
                (0, r.jsx)(o9, {}),
                (0, r.jsx)(o5, {}),
                (0, r.jsx)(o8, {}),
                (0, r.jsx)(o0, {}),
                (0, r.jsx)(o2, {}),
                (0, r.jsx)(dc, {}),
                (0, r.jsx)(du, {}),
            ],
        }),
    });
}
let dh = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    dx = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    dp = o.memo(function () {
        let e = (0, oT.wW)(),
            t = (0, z.bG)([oG.Ay], () => oG.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: oz.st,
            children: [
                (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, o$.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(g.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: dx(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oT.sw)(dh(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(g.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: dx(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oT.C3)(dh(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(W.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(m.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oT.xc)() }),
                (0, r.jsx)(m.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, oT.tM)(),
                }),
            ],
        });
    });
function dg() {
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsx)("div", { className: G()(tB.nd, oz.rf), children: (0, r.jsx)(dp, {}) }),
    });
}
function dv() {
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
            className: G()(tB.nd, oz.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: oz._V,
                    children: [
                        (0, r.jsx)(F.D, {
                            className: G()(oz.k0, "state" === e && oz.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(F.D, {
                            className: G()(oz.k0, "logging" === e && oz.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(F.D, {
                            className: G()(oz.k0, "experiments" === e && oz.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(dm, {}),
                "logging" === e && (0, r.jsx)(dd, {}),
                "experiments" === e && (0, r.jsx)(dg, {}),
            ],
        })
    );
}
var dj = a(488428),
    db = a(73825),
    df = a(753390),
    d_ = a(813730),
    dy = a(944304),
    dE = a(300233),
    dC = a(599941),
    dS = a(817649),
    dN = a(4630),
    dA = a(44120),
    dk = a(532794),
    dI = a(216678),
    dD = a(194509),
    dT = a(761705),
    dR = a(65738),
    dO = a(265768);
function dw(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, dC.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(dS.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let dM = function () {
    let [e, t] = o.useState(sx.pe.TIER_2),
        [a, l] = o.useState(null),
        n = (0, z.yK)([a6.A], () => a6.A.getGuildsArray()),
        [s] = (0, z.yK)([rZ.A], () => [rZ.A.getPremiumSubscription()]),
        i = n.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, u] = o.useState(i.length > 0 ? i[0].value : null),
        [p, b] = o.useState(""),
        [f, _] = o.useState({ plan_id: sx.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        y = "true" !== f.gift && null != s,
        [E, C] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: S } = (0, aX.Ay)(ty.A.PAYMENT_FLOW_TEST_PAGE),
        [N, A] = o.useState(""),
        [k, I] = o.useState(ei.dJq),
        { balance: D, isFetching: T, error: R } = (0, dT.W)(),
        { isSubmitting: O, responseMessage: w, redeemVirtualCurrency: M } = (0, dT.Q)(),
        [L, P] = o.useState(ei.dJq),
        [U, G] = o.useState(""),
        [F, B] = o.useState(ei.dJq),
        [V, W] = o.useState(ei.dJq);
    return (0, r.jsx)(aX.f5, {
        value: S,
        children: (0, r.jsx)(x.Ip, {
            className: dO.XG,
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
                            (0, r.jsx)(dD.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: lu.XD.PRIMARY,
                                look: lu.pR.FILLED,
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
                                onSelectionChange: (e) => l(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, dk.A)({ subscriptionTier: a, analyticsLocations: S }),
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
                                ? (0, r.jsx)(dy.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)($.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(ib.Anchor, {
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
                                    (0, r.jsx)(nJ.m, {
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
                                    _((t) => ({ ...t, plan_id: e }));
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
                                    _((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, r.jsx)(nJ.m, {
                        text: "Already subscribed",
                        shouldShow: y,
                        children: (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: y,
                            onClick: () => {
                                window.open(ei.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dj.stringify({ ...f }));
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
                                              className: dO.wG,
                                              children: (0, r.jsx)(tl.y, { type: tl.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: dO.dB,
                                              children: [
                                                  null !== R &&
                                                      (0, r.jsxs)(h.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              R.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(dR.Gy, {
                                                      balance: D ?? 0,
                                                      balanceWidgetMode: dR.k7.SELECTED,
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
                                loading: O,
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
                                value: E,
                                options: i,
                                onSelectionChange: (e) => C(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dE.H, {
                                guildId: E?.id,
                                children: (0, r.jsx)(dw, { selectedGuildForGuildSub: E }),
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
                                    (0, dN.openIAPPurchaseModal)({
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
                                        value: F,
                                        onChange: (e) => B(e),
                                    }),
                                    (0, r.jsx)(m.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, dI.q)({
                                                applicationId: U,
                                                skuId: F,
                                                analyticsLocations: S,
                                                checkoutFlow: d_.CL.PREMIUM_APPS_OTP_CHECKOUT,
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
                                onClick: () => (0, dA.A)({ skuId: V, analyticsLocations: S }),
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
                                    onClick: () => (0, db.YG)(),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, df.uZ)(),
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
                            onClick: () => (0, nx.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var dL = a(219887),
    dP = a(459357),
    dU = a(885180),
    dG = a(742810),
    dF = a(500380),
    dB = a(102609),
    d$ = a(710195),
    dV = a(211287),
    dW = a(295405),
    dz = a(188976);
let dH = [
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
    dK = {
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
    dY = [
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
    dq = {
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
    dJ = [
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
    dQ = {
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
function dX() {
    let [e, t] = o.useState("US"),
        [a, l] = o.useState(null),
        [n, s] = o.useState(null),
        [i, d] = o.useState(null),
        [c, u] = o.useState(null),
        [p, v] = o.useState("pm_card_us"),
        [j, b] = o.useState(!1),
        f = Object.values((0, t_.bG)([dW.A], () => dW.A.paymentSources)),
        _ = dK[e],
        y = async () => {
            let t = p;
            "" === t && (t = "pm_card_us"),
                await l1.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? n : "CA" === e ? c : null },
                    rejectWithError: !1,
                }),
                await (0, df.$o)();
        },
        E = async () => {
            await l1.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, df.$o)();
        },
        C = async () => {
            await l1.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, df.$o)();
        }, []),
        (0, r.jsx)(x.Ip, {
            className: tB.nd,
            children: (0, r.jsxs)("div", {
                className: s_.l$,
                children: [
                    (0, r.jsxs)(h.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: s_.Uo,
                        children: [
                            (0, r.jsx)(at.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: dH
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: dz.bI,
                                                src: (0, dF.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), v(dK[e][0].value), b(1 === dK[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(g.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: dY.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        l(e), s(dq[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(g.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: dJ.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        d(e), u(dQ[e] ?? null);
                                    },
                                }),
                            (0, r.jsx)(g.l, {
                                selectionMode: "single",
                                label: "Card Token",
                                hideLabel: !0,
                                value: p,
                                options: _.map((e) => {
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
                                onClick: y,
                            }),
                            f.length > 0 &&
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Delete All Payment Sources",
                                    onClick: E,
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
                    (0, r.jsx)(d4, {}),
                    (0, r.jsx)(h.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(d3, {}),
                    (0, r.jsx)(h.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    f.map((e) => (0, r.jsx)(d7, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let dZ = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    d0 = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Unified checkout" },
    ],
    d1 = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    d2 = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Payment elements enabled" },
    ],
    d8 = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function d6(e) {
    let { experimentName: t, options: a = dZ } = e,
        l = (0, t_.bG)([d$.A, lE.default], () => {
            let e = lE.default.getId(),
                a = d$.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        n = o.useCallback(
            (e) => {
                (0, dB.t$)(dB.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(g.l, { selectionMode: "single", label: t, value: l, options: [...a], onSelectionChange: n });
}
function d3() {
    return (0, r.jsxs)($.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(d6, { experimentName: dG.W2.definition.name, options: d0 }),
            (0, r.jsx)(d6, { experimentName: dG._$.definition.name, options: d0 }),
            (0, r.jsx)(d6, { experimentName: dP.A.definition.name, options: d1 }),
            (0, r.jsx)(d6, { experimentName: dU._.definition.name, options: d2 }),
            (0, r.jsx)(d6, { experimentName: dV.A.definition.name, options: d8 }),
        ],
    });
}
let d5 = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    d9 = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function d4() {
    let [e, t] = o.useState("US"),
        [a, l] = o.useState("500"),
        [n, s] = o.useState(null),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [h, x] = o.useState(null),
        p = parseInt(a, 10),
        j = !isNaN(p) && p >= 500 && p <= 5e3,
        b = async () => {
            if (j) {
                d(!0), x(null), s(null), u(!1);
                try {
                    let t = await l1.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: d9[e], amount: p },
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
                        options: d5,
                        onSelectionChange: t,
                    }),
                    (0, r.jsx)(v.k, {
                        label: "Amount (500\u20135000)",
                        type: "number",
                        value: a,
                        onChange: l,
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
            null != n &&
                (0, r.jsxs)($.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(v.k, { label: "Generated PIN", value: n, onChange: () => {}, readOnly: !0 }),
                        (0, r.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            text: c ? "Copied!" : "Copy",
                            onClick: () => {
                                navigator.clipboard.writeText(n), u(!0), setTimeout(() => u(!1), 2e3);
                            },
                        }),
                    ],
                }),
            null != h && (0, r.jsx)(B.w, { type: "critical", children: h }),
        ],
    });
}
function d7(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await l1.Bo.patch({ url: ei.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, df.$o)();
        };
    return (0, r.jsxs)("div", {
        className: s_.bd,
        children: [
            (0, r.jsx)(dL.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: dz.bI, src: (0, dF.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(h.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var ce = a(706712),
    ct = a(367727),
    ca = a(845886);
function cl() {
    return (0, r.jsx)(x.Ip, { className: ca.kL, children: (0, r.jsx)(cn, {}) });
}
function cn() {
    let e = o.useCallback(() => {
            (0, ac._N)(ad.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, ct.FZ)(ad.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(W.D, { className: ca.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: ca.PW,
                children: (0, r.jsx)(m.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var cs = a(136722),
    ci = a(576705),
    cr = a(558393),
    co = a(719366),
    cd = a(842681);
function cc(e) {
    let { title: t, can: a } = e,
        l = a ? r3.A : J.P,
        n = (0, r.jsx)("div", {
            className: G()(cd.v_, a ? cd.uU : cd.Ss),
            children: (0, r.jsx)(l, { className: cd.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: cd.z8,
        children: [
            n,
            (0, r.jsx)("div", {
                className: cd.rv,
                children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function cu() {
    let e = (0, z.bG)([rF.A], () => rF.A.getChannelId()),
        t = (0, z.bG)([a3.A], () => a3.A.getGuildId()),
        a = (0, z.bG)([a_.A], () => a_.A.getChannel(e)),
        l = (0, z.bG)([a6.A], () => a6.A.getGuild(t)),
        n = (0, z.bG)([ci.A], () => ci.A.computePermissions(a)),
        s = (0, z.bG)([ci.A], () => ci.A.computePermissions(l)),
        i = (0, af.Ay)(a, !0),
        o = null != a ? (0, co.mW)(a, !1) : null,
        d = null != l ? cr.A.getGuildPermissionSpecMap(l) : null,
        c = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                l = cs.zy(n, a);
            return (0, r.jsx)(cc, { title: t, can: l }, t);
        }),
        u = Object.values(d ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                l = cs.zy(s, a);
            return (0, r.jsx)(cc, { title: t, can: l }, t);
        });
    return (0, r.jsx)("div", {
        className: G()(tB.nd, cd.nd),
        children: (0, r.jsxs)("div", {
            className: cd.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: cd.uW,
                    children: [
                        (0, r.jsx)(W.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        c,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: cd.uW,
                    children: [
                        (0, r.jsx)(W.D, {
                            variant: "heading-md/semibold",
                            children: null != l ? `Permissions in ${l.name}` : "No guild selected",
                        }),
                        u,
                    ],
                }),
            ],
        }),
    });
}
var cm = a(873298),
    ch = a(775602),
    cx = a(363195),
    cp = a(885386),
    cg = a(631670),
    cv = a(817281),
    cj = a(955572),
    cb = a(56348),
    cf = a(385803),
    c_ = a(381941);
let cy = [ei.NJ8.DARK, ei.NJ8.LIGHT, ei.NJ8.DARKER, ei.NJ8.MIDNIGHT],
    cE = [cm.NS.COMPACT, cm.NS.COZY, cm.NS.DEFAULT];
function cC(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function cS() {
    let e,
        t =
            ((e = ea.default.getCurrentUser()),
            oe.Ay.canUseClientThemes(e) ? Object.keys(cf.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                l = cC(a);
            if (null != l) {
                let t = cf.ag[l];
                e = t?.theme ?? ei.NJ8.DARK;
            } else e = cC([ei.NJ8.DARK, ei.NJ8.DARKER, ei.NJ8.MIDNIGHT]);
            await cv.u_(
                { theme: e, backgroundGradientPresetId: l ?? void 0, customUserThemeSettings: void 0 },
                ac.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = cC(cy);
            await cv.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                ac.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function cN() {
    let e = tC.A.purchases,
        t = (0, eT.x9)(e),
        a = (0, eT.$W)(e),
        l = t.length > 0,
        n = a.length > 0;
    if (l || n)
        try {
            let e = {};
            l && (e.avatarDecoration = cC([...t, null])), n && (e.nameplate = cC([...a, null])), (0, td.p)(e);
            let s = tc.A.getPendingChanges(),
                i = (0, cb.Sk)(s);
            await (0, cg._L)(i).finally(cg.pZ);
        } catch (e) {}
}
function cA() {
    try {
        let e = cC(ei.hH7.FONT_SIZES);
        (0, cj.XS)(e);
        let t = cC(c_.qh);
        (0, cj.AC)(t);
        let a = cC(cE);
        cp.Xi.updateSetting(a);
    } catch (e) {}
}
function ck() {
    (0, th.Bf)();
    let e = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        t = cp.eh.useSetting(),
        a = (0, z.bG)([cx.A], () => cx.A.theme),
        l = t.backgroundGradientPresetId,
        n = (0, z.bG)([tC.A], () => tC.A.purchases),
        s = (0, eT.x9)(n),
        i = (0, eT.$W)(n),
        d = e?.avatarDecoration?.skuId,
        c = e?.collectibles?.nameplate?.skuId,
        u = null != d ? (s.find((e) => e.skuId === d) ?? null) : null,
        x = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        p = (0, z.bG)([tE.A], () => tE.A.getProduct(u?.skuId)),
        g = (0, z.bG)([tE.A], () => tE.A.getProduct(x?.skuId)),
        v = (0, z.bG)([ch.A], () => ch.A.fontSize),
        j = (0, z.bG)([ch.A], () => ch.A.messageGroupSpacing),
        b = cp.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = ea.default.getCurrentUser(),
                t = cp.eh.getSetting(),
                a = tC.A.purchases,
                l = (0, eT.x9)(a),
                n = (0, eT.$W)(a),
                s = cx.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (l.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (n.find((e) => e.skuId === o) ?? null) : null,
                u = ch.A.fontSize,
                m = ch.A.messageGroupSpacing,
                h = cp.Xi.getSetting();
            return () => {
                try {
                    cv.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        ac.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, td.p)({ avatarDecoration: d, nameplate: c });
                    let e = tc.A.getPendingChanges(),
                        t = (0, cb.Sk)(e);
                    (0, cg._L)(t).finally(cg.pZ), (0, cj.XS)(u), (0, cj.AC)(m), cp.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: nD.kL,
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
                        (0, r.jsx)(m.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: cS }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: cN,
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: cA,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != l ? cf.ag[l]?.getName() : "None"],
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
                                        case cm.NS.COMPACT:
                                            return "Compact";
                                        case cm.NS.COZY:
                                            return "Cozy";
                                        case cm.NS.DEFAULT:
                                            return "Default";
                                        case cm.NS.RESPONSIVE:
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
var cI = a(885574),
    cD = a(311678),
    cT = a(508274),
    cR = a(837529);
let cO = [5793266, 2303016],
    cw = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function cM() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: l } = (0, cR.Zt)(),
        n = (0, ec.Ay)(),
        s = (0, z.bG)([au.A], () => au.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, cv.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), l(null));
    }
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)($.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(cD.N, {
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
                                    icon: cI.m,
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
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: cO }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(sl.e, {
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
                                  options: cw,
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
                                                onClick: () => t({ ...e, themeColors: cO }),
                                            }),
                                            (0, r.jsxs)($.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(cT.VN, {
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
                                                    (0, r.jsx)(cT.VN, {
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
                                                                    l({
                                                                        theme: n,
                                                                        customUserThemeSettings:
                                                                            s.customUserThemeSettings,
                                                                    }),
                                                                    (0, cv.u_)({ theme: "system" });
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
var cL = a(141931),
    cP = a(306173),
    cU = a(587626),
    cG = a(237984),
    cF = a(43203),
    cB = a(349435),
    c$ = a(674272),
    cV = a(466034),
    cW = a(10094),
    cz = a(683760);
let cH = () => {
    let e = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        t = (0, z.bG)([cz.A], () => {
            let e = cz.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, z.bG)([cz.A], () => cz.A.getPremiumTypeOverride());
    return (0, r.jsxs)($.B, {
        gap: 16,
        children: [
            (0, r.jsx)(g.l, {
                label: "Override Client-Side Premium Type",
                options: sx.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, cW.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(nU.Q, {
                onClick: () => {
                    (0, cW.O)(sx.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(im.J, {
                label: "Override Client-Side Account Created At Date",
                value: lc()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, cW.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(nU.Q, { onClick: () => (0, cW.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var cK = a(19575),
    cY = a(327337),
    cq = a(431804),
    cJ = a(865349),
    cQ = a(818050);
function cX() {
    throw Error("Send help");
}
function cZ() {
    let e = cp.j0.useSetting(),
        [t, l] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(x.Ip, {
              children: [
                  (0, r.jsx)("div", { className: G()(cJ.N, cQ.SX), children: (0, r.jsx)(cH, {}) }),
                  (0, r.jsx)("div", {
                      className: G()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, c$.A)({ source: cq.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: G()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = rF.A.getChannelId() ?? "21154681615024128"),
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
                                                  warningType: cB._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: cY.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: G()(cJ.N, cQ.QB),
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
                      className: G()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, cF.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: G()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: cP.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: G()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = cU.A.getSocket();
                              tP.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: G()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(c.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cp.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: G()(cJ.N, cQ.QB),
                      children: [
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, cG.o)(),
                          }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  cU.A.getSocket().close(), cU.A.getSocket().connect();
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
                              onClick: () => (0, cV.sy)(!0),
                          }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  l1.Bo.post({ url: ei.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: G()(cJ.N, cQ.QB),
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
                              onSelectionChange: (e) => null != e && cK.Ay.crash(e),
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
                                      value: cL.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: cL.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: cL.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void cK.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => l(!0),
                          }),
                          (0, r.jsx)(m.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: cX }),
                      ],
                  }),
              ],
          });
}
var c0 = a(593924),
    c1 = a(653887),
    c2 = a(105596);
function c8() {
    let e = Object.keys(c0).map((e) => (0, r.jsx)(c5, { riveName: e }, e));
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
                (0, r.jsx)(c6, {}),
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
function c6() {
    let [e, t] = o.useState(null),
        [a, l] = o.useState(null),
        [n, s] = o.useState(null),
        [i, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, x] = o.useState(400),
        p = o.useCallback(() => {
            setTimeout(() => {
                s(c.current?.getProperties() ?? {}), d(c.current?.getArtboards() ?? []), l({});
            }, 1e3);
        }, []),
        g = o.useCallback(
            (e, t) => {
                null != a && l((a) => ({ ...a, [e]: { type: n?.[e]?.type, value: t } }));
            },
            [n, a],
        ),
        j = o.useCallback((e) => {
            s(null), l(null), t(e);
        }, []);
    return (0, r.jsxs)($.B, {
        gap: 16,
        children: [
            (0, r.jsx)(c5, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(c1._, { src: e, ref: c, onLoad: p, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(tl.y, {}) : null,
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
                                Object.keys(n ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        c3,
                                        {
                                            property: e,
                                            type: n?.[e]?.type,
                                            value: a?.[e]?.value ?? n?.[e]?.value,
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
function c3(e) {
    let { property: t, type: a, value: l, onChange: n, artboards: s } = e;
    return "string" === a
        ? (0, r.jsx)(v.k, { label: t, value: l, onChange: (e) => n(e) })
        : "number" === a
          ? (0, r.jsx)(v.k, { type: "number", label: t, value: l, onChange: (e) => n(parseInt(e)) })
          : "boolean" === a
            ? (0, r.jsx)(c.d, { label: t, checked: l, onChange: (e) => n(e) })
            : "trigger" === a
              ? (0, r.jsx)(m.$, { text: `Trigger ${t}`, onClick: () => n(Number.isSafeInteger(l) ? l + 1 : 1) })
              : "image" === a
                ? (0, r.jsx)(v.k, { label: t, value: l, onChange: (e) => n(e) })
                : "color" === a
                  ? (0, r.jsx)(at.Z, {
                        selectionMode: "single",
                        label: t,
                        value: l,
                        onSelectionChange: (e) => n(e),
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
                          value: l,
                          onSelectionChange: (e) => n(e),
                          closeOnSelect: !0,
                          placeholder: "Select an artboard...",
                          options: s.map((e) => ({ label: e, value: e, id: e })),
                      })
                    : null;
}
function c5(e) {
    let { riveName: t, onRiveLoad: a } = e,
        l = c0[t]?.riveSrc,
        n = null == l,
        s = o.useRef(null),
        i = (0, c2.Gy)(l);
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
                                let n = new FileReader();
                                (n.onload = (e) => {
                                    let t = e.target?.result;
                                    null != l && (0, c2.DS)(l, t), a?.(t);
                                }),
                                    n.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eG.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != l && (0, c2.DS)(l, null),
                                    a?.(null);
                            },
                            icon: lp.u,
                            variant: "critical-primary",
                            size: "sm",
                            disabled: null == i && !n,
                        }),
                    ],
                }),
            ],
        },
        t,
    );
}
var c9 = a(455873);
function c4(e) {
    let { game: t, meta: a } = e;
    return (0, r.jsxs)("div", {
        className: c9.nM,
        children: [
            (0, r.jsxs)("div", {
                className: c9.uV,
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/semibold",
                        className: c9._k,
                        children: null == t.name || "" === t.name ? "(no name)" : t.name,
                    }),
                    null != a && (0, r.jsx)(h.E, { variant: "text-xs/normal", className: c9.Bq, children: a }),
                ],
            }),
            (0, r.jsx)(h.E, {
                variant: "text-xs/normal",
                className: c9.C0,
                children: null == t.exePath || "" === t.exePath ? "(no path)" : t.exePath,
            }),
            (0, r.jsxs)(h.E, {
                variant: "text-xs/normal",
                className: c9.en,
                children: ["pid ", t.pid, " \xb7 ", t.id ?? "(no id)"],
            }),
        ],
    });
}
function c7(e) {
    let { title: t, count: a, entries: l, renderMeta: n } = e;
    return (0, r.jsxs)($.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(W.D, { variant: "heading-sm/bold", children: [t, " (", a, ")"] }),
            0 === l.length
                ? (0, r.jsx)(h.E, { variant: "text-sm/normal", className: c9.Ie, children: "none" })
                : (0, r.jsx)($.B, {
                      gap: 0,
                      children: l.map((e) =>
                          (0, r.jsx)(
                              c4,
                              { game: e.game, meta: n?.(e.outcome) },
                              `${e.game.pid}-${e.game.id ?? e.game.exeName}`,
                          ),
                      ),
                  }),
        ],
    });
}
function ue(e) {
    return "blocked" !== e.kind
        ? null
        : null != e.matchedExe
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    "blocked by exe substring ",
                    (0, r.jsx)("span", { className: c9.ti, children: e.matchedExe }),
                ],
            })
          : null != e.matchedPattern
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      "blocked by pattern ",
                      (0, r.jsx)("span", { className: c9.ti, children: e.matchedPattern }),
                  ],
              })
            : "blocked (no reason captured)";
}
function ut(e) {
    return "observed_app" !== e.kind
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  "matched observed app",
                  " ",
                  (0, r.jsxs)("span", {
                      className: c9.ti,
                      children: [e.appName, e.streamerTool ? " (streamer tool)" : ""],
                  }),
              ],
          });
}
function ua() {
    var e;
    let t = (0, z.bG)([f.Ay], () => f.Ay.getDetectionDebug()),
        a = o.useMemo(() => {
            let e = [],
                a = [],
                l = [],
                n = [];
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
                            l.push(s);
                            break;
                        case "blocked":
                            n.push(s);
                    }
            return { passed: e, nonGames: a, observedApps: l, blocked: n };
        }, [t]);
    return (0, r.jsx)("div", {
        className: G()(tB.nd, c9.kL),
        children: (0, r.jsxs)($.B, {
            gap: 16,
            padding: 12,
            className: c9.rf,
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
                (0, r.jsx)(c7, { title: "Running games", count: a.passed.length, entries: a.passed }),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(c7, { title: "Filtered: non-game", count: a.nonGames.length, entries: a.nonGames }),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(c7, {
                    title: "Filtered: matched a hardcoded observed app",
                    count: a.observedApps.length,
                    entries: a.observedApps,
                    renderMeta: ut,
                }),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(c7, {
                    title: "Filtered: blocklist",
                    count: a.blocked.length,
                    entries: a.blocked,
                    renderMeta: ue,
                }),
            ],
        }),
    });
}
var ul = a(290136),
    un = a(106236),
    us = a(629584),
    ui = a(600239),
    ur = a(940622),
    uo = a(961895),
    ud = a(343991),
    uc = a(699666);
let uu = () => {
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
            { modalKey: ud.D },
        );
    },
    um = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    uh = (e) => {
        let { className: t, onDrop: a, children: l } = e,
            [n, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                um(e), s(!0), (0, e$.closeModal)(ud.D);
            }, []),
            c = o.useCallback((e) => {
                um(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    um(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void uu();
                    let l = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    l.length > 0 ? a(l) : uu();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: G()(t, uc.iE),
            onDragEnter: d,
            onDragOver: um,
            onDragLeave: c,
            onDrop: u,
            children: [
                l,
                n &&
                    (0, r.jsx)("div", {
                        className: uc.d2,
                        children: (0, r.jsxs)("div", {
                            className: uc.vW,
                            children: [
                                (0, r.jsx)(uo.A, { icons: ej.ir }),
                                (0, r.jsx)(W.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: uc.GA,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(h.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(ul.c, {
                                                    className: uc.q4,
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
var ux = a(572868);
let up = new Set([
        eO.RN.HERO_BANNER_STATIC,
        eO.RN.HERO_LOGO,
        eO.RN.PDP_BACKGROUND,
        eO.RN.LOGO,
        eO.RN.MOBILE_BANNER,
        eO.RN.MOBILE_BACKGROUND,
    ]),
    ug = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    uv = { max: 5e6, warn: 2e6 },
    uj = { max: 3e6, warn: 1e6 },
    ub = { max: 2e6, warn: 1e6 },
    uf = { max: 1e6, warn: 5e5 },
    u_ = { max: 25e4, warn: 5e4 },
    uy = {
        [eO.Jn.PROFILE_EFFECT]: uv,
        [eO.Jn.AVATAR_DECORATION]: uj,
        [eO.Jn.PROFILE_FRAME]: ub,
        [eO.RN.HERO_BANNER_ANIMATED]: uv,
        [eO.RN.HERO_BANNER_RIVE]: uv,
        [eO.RN.CATALOG_BANNER_RIVE]: uv,
        [eO.RN.SHOP_BUTTON_BG_HOVER]: uj,
        [eO.RN.SHOP_BUTTON_BG_HOVER_DARK]: uj,
        [eO.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: uj,
        [eO.RN.SHOP_BUTTON_BG_RESTING]: uj,
        [eO.RN.SHOP_BUTTON_BG_RESTING_DARK]: uj,
        [eO.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: uj,
        [eO.RN.HERO_BANNER_STATIC]: ub,
        [eO.RN.UPSELL_BANNER]: uf,
        [eO.RN.UPSELL_BANNER_POPOUT]: u_,
        [eO.RN.MOBILE_BANNER]: uf,
        [eO.RN.MOBILE_BACKGROUND]: u_,
        [eO.RN.MOBILE_HERO]: uf,
        [eO.RN.PDP_BACKGROUND]: u_,
        [eO.RN.LOGO]: u_,
        [eO.RN.TAB_TOOLTIP]: u_,
    },
    uE = [eO.Kx.COLLECTION],
    uC = [eO.Kx.AVATAR_DECORATIONS, eO.Kx.FRAMES, eO.Kx.NAMEPLATES, eO.Kx.PROFILE_EFFECTS],
    uS = async (e) => {
        let t = e.createReader(),
            a = await new Promise((e) => t.readEntries(e)),
            l = new Set();
        for (let e of a) e.isDirectory && l.add(e.name);
        let n = uE.filter((e) => !l.has(e));
        return uC.some((e) => l.has(e)) || n.push(`at least one of: ${uC.join(", ")}`), n;
    },
    uN = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
    uA = (e) => {
        let { names: t, addError: a } = e,
            l = t.filter((e) => !uN.test(e));
        l.length > 0 && a("File names must be in lowercase snake case", l);
    },
    uk = (e, t, a, l, n) => {
        let s = t.size,
            i = s > 1e6 ? `${(s / 1e6).toFixed(2)}MB` : `${(s / 1e3).toFixed(2)}KB`,
            r = `${n ?? t.name} - ${i}`;
        if (s > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
        } else s > e.warn && l("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
    },
    uI = (e, t, a, l) => {
        let n = uy[e];
        if (null != n) for (let e of t) e.name.endsWith(".txt") || uk(n, e, a, l);
    },
    uD = (e) => {
        let t = eO.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    },
    uT = ["png", "jpg"];
var uR = a(981388);
let uO = o.createContext({ setDropHandler: () => {} }),
    uw = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    uM = { id: "none", label: "[none selected]", value: null },
    uL = () => {
        (0, e$.hasModalOpen)(ui.k)
            ? (0, e$.closeModal)(ui.k)
            : (0, e$.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: ui.k, onCloseRequest: () => (0, e$.closeModal)(ui.k) },
              );
    },
    uP = () => {
        (0, e$.hasModalOpen)(ui.g)
            ? (0, e$.closeModal)(ui.g)
            : (0, e$.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: ui.g, onCloseRequest: () => (0, e$.closeModal)(ui.g) },
              );
    },
    uU = () => {
        let e = (0, ew.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, ur.JE)(),
            l = o.useMemo(() => [uM, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uR.kO,
                  children: [
                      (0, r.jsx)(ab.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uR.wR,
                          children: [
                              (0, r.jsx)(W.D, {
                                  variant: "heading-sm/semibold",
                                  children: `Profile Effect (${e.length} to preview)`,
                              }),
                              (0, r.jsx)(eG.K, {
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: uP,
                                  icon: ul.c,
                                  "aria-label": "Open PFX preview instructions",
                              }),
                          ],
                      }),
                      (0, r.jsx)(g.l, {
                          label: "Profile Effect",
                          hideLabel: !0,
                          selectionMode: "single",
                          options: l,
                          value: t,
                          maxOptionsVisible: 50,
                          onSelectionChange: a,
                      }),
                  ],
              });
    },
    uG = () => {
        let e = (0, ur.bA)(),
            { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, ur.JE)(),
            l = o.useMemo(() => [uM, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uR.kO,
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
                          options: l,
                          value: t,
                          maxOptionsVisible: 50,
                          onSelectionChange: a,
                      }),
                  ],
              });
    },
    uF = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, ur.JE)(),
            { avatarDecorationAssets: a } = (0, ur.NE)(),
            l = o.useMemo(() => [uM, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uR.kO,
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
                          options: l,
                          value: e,
                          maxOptionsVisible: 50,
                          onSelectionChange: t,
                      }),
                  ],
              });
    },
    uB = new Set([eO.RN.HERO_BANNER_STATIC, eO.RN.HERO_BANNER_ANIMATED, eO.RN.HERO_BANNER_RIVE]),
    u$ = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: l } = (0, ur.NE)(),
            {
                deleteCollectionAsset: n,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: u,
                setHeroResponsive: x,
            } = (0, ur.JE)(),
            p = o.useMemo(() => Object.values(l).map((e) => ({ label: e.name, value: e.type })), [l]),
            g = p.some((e) => e.value === eO.RN.HERO_LOGO),
            v = p.some((e) => uB.has(e.value)),
            j = o.useCallback((e) => n(e), [n]),
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
                              className: uR.v7,
                              children: [
                                  g &&
                                      (0, r.jsxs)("div", {
                                          className: uR.cj,
                                          children: [
                                              (0, r.jsx)(h.E, {
                                                  variant: "text-md/normal",
                                                  className: uR.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(un.A, {
                                                  className: uR.TQ,
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
                                          className: uR.sy,
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
                          className: uR.wR,
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
                                      className: uR._0,
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
    uV = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ab.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uR.wR,
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
                                      className: uR.yk,
                                      children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    uW = () => {
        let {
                validateShopAssetPackage: e,
                reset: t,
                validationComplete: a,
                warnings: l,
                errors: n,
            } = (() => {
                let [e, t] = o.useState(!1),
                    [a, l] = o.useState({}),
                    [n, s] = o.useState({}),
                    i = o.useCallback(function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        s((a) => {
                            let l = a[e] ?? [];
                            return { ...a, [e]: [...l, ...t] };
                        });
                    }, []),
                    r = o.useCallback(function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        l((a) => {
                            let l = a[e] ?? [];
                            return { ...a, [e]: [...l, ...t] };
                        });
                    }, []),
                    d = o.useCallback(() => {
                        t(!1), s({}), l({});
                    }, []);
                return {
                    validationComplete: e,
                    errors: n,
                    warnings: a,
                    validateShopAssetPackage: o.useCallback(
                        async (e) => {
                            try {
                                var a;
                                if (0 === e.length) return void i("No files found");
                                if (e.length > 1) return void i("Uploaded multiple files. Expected 1 directory.");
                                let t = e[0];
                                if (!t.isDirectory) return void i("Uploaded a file. Expected a directory.");
                                let l = await uS(t);
                                l.length > 0 && i("Missing required directories", l),
                                    (a = await (0, eO.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, eO.pd)(e),
                                                n = null != t ? uy[t] : null;
                                            null != n && uk(n, e, a, l);
                                        }
                                        uA({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let n = new Set(
                                                t.collectionFiles.map((e) => (0, eO.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(up)
                                                .filter((e) => !n.has(e))
                                                .map(uD);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(eO.RN)
                                            .filter((e) => !up.has(e))
                                            .filter((e) => !n.has(e))
                                            .map(uD);
                                        i.length > 0 && l("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e;
                                        uA({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, n] = e,
                                                    s = n.map((e) => e.name);
                                                uA({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    uI(eO.Jn.PROFILE_EFFECT, n, a, l);
                                                let i = ug
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
                                                        (e) => !ug.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && l("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e;
                                        uA({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            uI(eO.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, l);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e,
                                            n = Object.keys(t.profileFrameDirsMap)
                                                .filter((e) => !uN.test(e))
                                                .map((e) => `${eO.Kx.FRAMES}/${e}`);
                                        n.length > 0 && a("File names must be in lowercase snake case", n);
                                        let s = uy[eO.Jn.PROFILE_FRAME];
                                        Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                            let [t, n] = e,
                                                i = `${eO.Kx.FRAMES}/${t}`,
                                                r = n.previewFile?.name.split(".").pop()?.toLowerCase();
                                            (null != n.previewFile && null != r && uT.includes(r)) ||
                                                a(
                                                    "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                    [`${i}/preview.{${uT.join("|")}}`],
                                                ),
                                                0 === n.layerFiles.length &&
                                                    a(
                                                        "Profile frame must contain at least one foreground or background layer",
                                                        [`${i}/{foreground|background}/...`],
                                                    ),
                                                n.unrecognizedSubdirs.length > 0 &&
                                                    l(
                                                        "Profile frame contains unrecognized folders (expected foreground/, background/, or preview.png)",
                                                        n.unrecognizedSubdirs.map((e) => `${i}/${e}/`),
                                                    );
                                            let o = [];
                                            for (let { file: e, folder: t } of (null == n.previewFile ||
                                                uN.test(n.previewFile.name) ||
                                                o.push(`${i}/${n.previewFile.name}`),
                                            n.layerFiles))
                                                uN.test(e.name) || o.push(`${i}/${t}/${e.name}`);
                                            o.length > 0 && a("File names must be in lowercase snake case", o);
                                            let d = [];
                                            for (let { file: e, folder: t } of n.layerFiles) {
                                                let { parsed: a, errorType: l } = (0, ux.Mf)(e.name);
                                                if (null == a) {
                                                    let a = null != l ? ux.h4[l] : "invalid";
                                                    d.push(`${i}/${t}/${e.name}: ${a}`);
                                                }
                                            }
                                            if (
                                                (d.length > 0 && a("Invalid profile frame layer filenames", d),
                                                null != s)
                                            )
                                                for (let { file: e, folder: t } of (null != n.previewFile &&
                                                    uk(s, n.previewFile, a, l, `${i}/${n.previewFile.name}`),
                                                n.layerFiles))
                                                    uk(s, e, a, l, `${i}/${t}/${e.name}`);
                                        });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addWarning: a } = e;
                                        t.ignoredFilenames.length > 0 &&
                                            a("Contains unrecognized files", t.ignoredFilenames);
                                    })({ files: a, addError: i, addWarning: r });
                            } finally {
                                t(!0);
                            }
                        },
                        [i, r],
                    ),
                    reset: d,
                };
            })(),
            s = Object.entries(n),
            i = Object.entries(l),
            d = s.length > 0,
            c = i.length > 0,
            { setDropHandler: u } = o.useContext(uO),
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
                              className: uR._f,
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
                                    className: uR.ck,
                                    children: s.map((e, t) => {
                                        let [a, l] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: a,
                                                    }),
                                                    l.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: uR.ck,
                                                            children: l.map((e, t) =>
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
                                    className: uR.ck,
                                    children: Object.entries(l).map((e, t) => {
                                        let [a, l] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: a,
                                                    }),
                                                    l.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: uR.ck,
                                                            children: l.map((e, t) =>
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
    uz = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, ur.JE)(),
            { ignoredFilenames: l, clearAssets: n, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, eO.ds)(),
            { setDropHandler: d } = o.useContext(uO),
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
                        className: uR.sy,
                        children: [
                            (0, r.jsx)(c.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eG.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: uL,
                                icon: ul.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, r.jsx)(uU, {}),
                    (0, r.jsx)(uG, {}),
                    (0, r.jsx)(uF, {}),
                    (0, r.jsx)(u$, { clearAssets: n, clearIgnoredFiles: s }),
                    (0, r.jsx)(uV, { ignoredFiles: l, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    uH = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: uR.kL,
            children: [
                (0, r.jsx)(us.I, {
                    options: uw,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: uR.Vj,
                    optionClassName: uR.UK,
                }),
                (0, r.jsx)(ab.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(uz, {}),
                "validate" === e && (0, r.jsx)(uW, {}),
                (0, r.jsx)(ab.h, { size: 16 }),
            ],
        });
    },
    uK = (e) => {
        let { children: t, onDrop: a } = e,
            l = o.useRef(() => {}),
            n = o.useMemo(
                () => ({
                    setDropHandler: (e) => {
                        l.current = e;
                    },
                }),
                [],
            ),
            s = o.useCallback(
                (e) => {
                    a?.(e), l.current(e);
                },
                [a],
            );
        return (0, r.jsx)(uO.Provider, { value: n, children: (0, r.jsx)(uh, { onDrop: s, children: t }) });
    };
var uY = a(663803),
    uq = a(859040),
    uJ = a(385815);
let uQ = () => {
    let e = (0, z.bG)([tE.A], () => tE.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: uJ.k,
        children: [
            (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(uY.l, {
                value: e,
                onChange: (e) => {
                    (0, uq.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var uX =
        (((l = {}).DEFAULT = "default"),
        (l.ORB_TAB = "orb_tab"),
        (l.FRAMES = "frames"),
        (l.FRAMES_PINNED = "frames_pinned"),
        l),
    uZ = a(295811);
let u0 = () => {
    let e = (0, z.bG)([uZ.A], () => uZ.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(uX).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(g.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, uq.Or)(e);
        },
        selectionMode: "single",
    });
};
var u1 = a(172471);
let u2 = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: G()(u1.kL, u1.fi),
            children: [
                (0, r.jsx)(v.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: u1.o1,
                    children: [
                        (0, r.jsx)(m.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, uq.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, uq.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    u8 = (e) => {
        let { className: t } = e,
            a = Object.keys(ad.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(nE, { items: [a] }) });
    };
var u6 = a(578797),
    u3 = a(628917);
let u5 = (e) => {
        let { title: t, expanded: a, onToggle: l, children: n } = e,
            s = o.useId();
        return (0, r.jsx)(cD.N, {
            isExpanded: a,
            className: u3.uW,
            collapsibleContent: (0, r.jsx)("div", { id: s, className: u3.f5, children: n }),
            children: () =>
                (0, r.jsxs)("button", {
                    type: "button",
                    onClick: l,
                    "aria-expanded": a,
                    "aria-controls": s,
                    className: u3.bV,
                    children: [
                        (0, r.jsx)(W.D, { variant: "heading-md/bold", children: t }),
                        (0, r.jsx)(s0._, { size: "sm", color: "currentColor", className: G()(u3.ai, { [u3.hg]: a }) }),
                    ],
                }),
        });
    },
    u9 = () => {
        let e = (0, z.bG)([nI.A], () => nI.A.get("shop_disable_cache")),
            t = (0, z.bG)([nI.A], () => nI.A.get("shop_include_unpublished")),
            a = (0, u6.U)("DevToolsShopPanel"),
            [l, n] = o.useState(new Set()),
            s = o.useCallback((e) => {
                n((t) => {
                    let a = new Set(t);
                    return a.has(e) ? a.delete(e) : a.add(e), a;
                });
            }, []),
            i = o.useCallback(() => {
                n((e) => {
                    if (e.has("assets")) return e;
                    let t = new Set(e);
                    return t.add("assets"), t;
                });
            }, []);
        return (0, r.jsx)(uK, {
            onDrop: i,
            children: (0, r.jsxs)("div", {
                className: u3.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: u3.dQ,
                        children: [
                            (0, r.jsx)(c.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, nk.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(c.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, nk.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u5, {
                        title: "Layouts",
                        expanded: l.has("layouts"),
                        onToggle: () => s("layouts"),
                        children: [(0, r.jsx)(u8, {}), (0, r.jsx)(u0, {}), a && (0, r.jsx)(u2, {}), (0, r.jsx)(uQ, {})],
                    }),
                    (0, r.jsx)(u5, {
                        title: "Assets",
                        expanded: l.has("assets"),
                        onToggle: () => s("assets"),
                        children: (0, r.jsx)(uH, {}),
                    }),
                ],
            }),
        });
    },
    u4 = [
        { id: "unset", label: "Unset", value: cm.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: cm.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: cm.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: cm.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function u7() {
    let e = o.useRef(null),
        t = cp.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: G()(tB.nd, aU.n),
        children: (0, r.jsxs)("div", {
            className: aU.k,
            children: [
                (0, r.jsx)(W.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(g.l, {
                    label: "Receive DMs In Game",
                    options: u4,
                    value: t,
                    onSelectionChange: cp.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var me = a(278416),
    mt = a(220631);
function ma(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function ml(e) {
    let { store: t, dataGetter: a } = e,
        [l, n] = o.useState(a(t));
    return (
        o.useEffect(() => {
            let e = () => n(a(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, a]),
        (0, r.jsx)(x.Ip, { className: mt.Dx, children: (0, r.jsx)(az.A, { data: l }) })
    );
}
function mn(e) {
    let { store: t } = e,
        [a, l] = o.useState(() => JSON.stringify(t.__getLocalVars(), null, 2)),
        [n, s] = o.useState(null),
        i = o.useCallback(() => {
            l(JSON.stringify(t.__getLocalVars(), null, 2)), s(null);
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
            let l = t.__getLocalVarsEditConfig?.();
            if (null == l) return void s("Store does not support editing");
            try {
                for (let e of l.preDispatches ?? []) tP.h.dispatch(e);
                tP.h.dispatch({ ...l.buildPayload(e), type: l.actionType }), i();
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
        className: G()(mt.Dx, mt.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: mt.Vz,
                value: a,
                onChange: (e) => l(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != n && (0, r.jsx)("div", { className: mt.Xf, role: "alert", children: n }),
            (0, r.jsxs)("div", {
                className: mt.KA,
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
let ms = [
    {
        key: "name",
        cellClassName: mt.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function mi(e) {
    let { store: t, initialHeight: a } = e,
        l = o.useMemo(() => {
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
                                      className: mt.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(ml, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aJ.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(ml, { store: t, dataGetter: (e) => e });
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
                                      className: mt.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(mn, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: n, renderSelectedTab: s } = (0, aJ.Ay)({ tabs: l }, []);
    return (0, r.jsxs)(aq, {
        className: mt.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(n, {}),
            (0, r.jsxs)(aW.Ay, {
                className: G()(tB.jr, mt.nZ),
                children: [
                    (0, r.jsx)(aW.Ay.Icon, { icon: me.g, tooltip: t.getName() }),
                    (0, r.jsx)(aW.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function mr() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        l = z.il.getAll(),
        n = o
            .useMemo(() => l.map((e) => ({ key: e._dispatchToken, store: e })).sort(ma), [l])
            .filter((e) =>
                (function (e, t) {
                    let { store: a } = e;
                    return a.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [s, i] = o.useState(),
        d = l.find((e) => e._dispatchToken === s);
    return (0, r.jsxs)("div", {
        ref: e,
        className: G()(tB.nd, mt.nd),
        children: [
            (0, r.jsx)("div", {
                className: mt.KE,
                children: (0, r.jsx)(lg.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(t$, { columns: ms, data: n, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsx)(mi, { store: d, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var mo = a(91871),
    md = a.n(mo);
let mc = [
        {
            key: "id",
            cellClassName: lM.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: lM.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: lM.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    mu = [
        {
            id: "details",
            name: "Details",
            group: aJ.fu.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: a,
                            exposureType: l,
                            excluded: n,
                            timestamp: s,
                            location: i,
                            previouslyTracked: o,
                        },
                    } = e,
                    d = lc()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(aW.Ay, {
                            className: G()(tB.jr, lM.nZ),
                            children: [
                                (0, r.jsx)(aW.Ay.Icon, { icon: lh.U, tooltip: t }),
                                (0, r.jsx)(aW.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(lR, {
                            className: lM.ZK,
                            children: [
                                (0, r.jsx)(lO, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, l_.i$)(d, "LLLL"),
                                        children: (0, l_.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(lO, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(lO, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(lO, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(lO, { name: "Override", children: (0, r.jsx)(lw, { value: a.override }) }),
                                (0, r.jsx)(lO, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                                (0, r.jsx)(lO, { name: "Excluded", children: (0, r.jsx)(lw, { value: n }) }),
                                (0, r.jsx)(lO, { name: "Previously tracked", children: (0, r.jsx)(lw, { value: o }) }),
                                (0, r.jsx)(lO, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function mm() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        l = (0, z.yK)([lD], () => lD.loggedTriggers),
        n = o.useMemo(
            () =>
                l
                    .filter((t) => 0 === e.length || md()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [l, e],
        ),
        [s, i] = o.useState(void 0),
        d = n.find((e) => e.key === s),
        { TabBar: c, renderSelectedTab: u } = (0, aJ.Ay)({ tabs: mu }, []),
        m = (0, z.bG)([lD], () => lD.trackTriggers),
        h = o.useCallback((e) => {
            tP.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = m ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: G()(tB.nd, lM.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lM.rh,
                children: [
                    (0, r.jsx)(nJ.m, {
                        text: x,
                        children: (0, r.jsx)(eG.K, {
                            size: "sm",
                            variant: m ? "active" : "primary",
                            icon: m ? nZ.E : nX.u,
                            "aria-label": x,
                            onClick: () => h(!m),
                        }),
                    }),
                    (0, r.jsx)(lg.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eG.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": a9.intl.string(a9.t.VkKicb),
                        icon: lp.u,
                        onClick: H.eY,
                    }),
                ],
            }),
            (0, r.jsx)(t$, { columns: mc, data: n, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsxs)(aq, {
                    className: lM.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(c, {}), u({ loggedTrigger: d })],
                }),
        ],
    });
}
var mh = a(512950),
    mx = a(324861),
    mp = a(243655);
let mg = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, mx.A)();
    return (0, r.jsx)("div", {
        className: mp.k,
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
                (0, r.jsx)(mh.p, {
                    messageType: mh.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var mv = a(899e3),
    mj = a(731854);
let mb = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    mf = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    m_ = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    my = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function mE(e) {
    let { title: t, toggles: a, state: l } = e;
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsx)(h.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(rQ.S, { label: a, checked: !!l[t], onChange: () => (0, mv.yn)({ [t]: !l[t] }) }, t);
            }),
        ],
    });
}
function mC() {
    let e = (0, z.bG)([mv.Ay], () => mv.Ay.getSnapshot()),
        t = (0, z.bG)([y.Ay], () => y.Ay.supports(mj.O5.VIDEO));
    return (0, r.jsxs)(x.Ip, {
        className: tB.nd,
        children: [
            (0, r.jsx)(j.c, { gap: 16 }),
            (0, r.jsx)(mE, { title: "Video Codecs (Sender)", toggles: mb, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(j.c, { gap: 16 }),
                          (0, r.jsx)(mE, { title: "Video Encoders", toggles: mf, state: e }),
                          (0, r.jsx)(j.c, { gap: 16 }),
                          (0, r.jsx)(mE, { title: "Capture Sources", toggles: m_, state: e }),
                          (0, r.jsx)(j.c, { gap: 16 }),
                          (0, r.jsx)(mE, { title: "Capture Options", toggles: my, state: e }),
                      ],
                  })
                : null,
            (0, r.jsx)(j.c, { gap: 16 }),
            (0, r.jsx)(mE, {
                title: "Preview",
                toggles: [["alwaysShowCapturePreview", "Always Show (ignore main window focus)"]],
                state: e,
            }),
            (0, r.jsx)(j.c, { gap: 16 }),
        ],
    });
}
var mS = a(36934);
function mN() {
    let [e, t] = o.useState(""),
        [a, l] = o.useState(""),
        [n, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === n.status;
    return (0, r.jsx)(x.Ip, {
        className: tB.nd,
        children: (0, r.jsxs)("div", {
            className: mS.l7,
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
                        (0, r.jsx)(v.k, { fullWidth: !0, value: a, onChange: l, placeholder: "Output directory" }),
                        (0, r.jsx)(m.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await b.A.fileManager.showOpenDialog({
                                    properties: ["openDirectory", "createDirectory"],
                                });
                                e.length > 0 && l(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(m.$, {
                    variant: i ? "critical-primary" : "primary",
                    text: i ? "Cancel" : "Start Processing",
                    onClick: i
                        ? function () {
                              y.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  y.Ay.getMediaEngine().processBatchAudioFiles(
                                      e,
                                      a,
                                      (e, t, a, l) => {
                                          s((n) => ({
                                              ...n,
                                              current: t,
                                              total: a,
                                              log: [...n.log, { filename: e, success: l }],
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
                "idle" !== n.status &&
                    (0, r.jsxs)($.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(h.E, {
                                variant: "text-sm/semibold",
                                children: [
                                    "processing" === n.status && `Processing: ${n.current}/${n.total}`,
                                    "complete" === n.status && `Complete: ${n.processed} processed, ${n.failed} failed`,
                                    "cancelled" === n.status &&
                                        `Cancelled: ${n.processed} processed, ${n.failed} failed`,
                                ],
                            }),
                            n.log
                                .slice(-20)
                                .reverse()
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: mS.TZ,
                                            children: (0, r.jsxs)(h.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? mS.$D : mS.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            n.log.length > 20 &&
                                (0, r.jsxs)(h.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", n.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var mA = a(207898),
    mk = a.n(mA),
    mI = a(32880),
    mD = a(827343),
    mT = a(964486),
    mR = a(602674),
    mO = a(625841),
    mw = a(74848),
    mM = a(573908);
function mL(e) {
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
function mP(e) {
    let { recording: t, playing: a, onPlay: l, onStop: n } = e;
    return (0, r.jsx)(cD.N, {
        collapsibleContent: (0, r.jsx)(mL, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsxs)(F.D, {
                onClick: s,
                children: [
                    (0, r.jsxs)(h.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(F.D, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), a ? n() : l(t);
                        },
                        children: a ? (0, r.jsx)(nZ.E, { size: "xxs" }) : (0, r.jsx)(nX.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(F.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, l, n;
                            e.stopPropagation(),
                                (a = new Blob([mk()(t.audioBuffer)], { type: "audio/wav" })),
                                (l = URL.createObjectURL(a)),
                                ((n = document.createElement("a")).href = l),
                                (n.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                n.click(),
                                URL.revokeObjectURL(l);
                        },
                        children: (0, r.jsx)(mI.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function mU() {
    let { name: e } = (0, mw.x5)(mj.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [l, n] = o.useState([]),
        s = (0, z.bG)([y.Ay], () => y.Ay.getKrispSuppressionLevel()),
        [i, d] = o.useState(null),
        u = o.useRef(null),
        m = o.useRef(null),
        [p, v] = o.useState(0.5),
        {
            krispModels: j,
            krispModelOverride: b,
            inputMode: f,
            echoCancellation: _,
            autoThreshold: E,
            vadUseKrisp: C,
            vadKrispActivationThreshold: S,
            noiseCancellation: N,
            noiseSuppression: A,
            noiseSuppressionSupported: k,
            noiseCancellationSupported: I,
            noiseCancellationEnableStats: D,
            vadDuringPreProcess: T,
        } = (0, z.cf)([y.Ay], () => ({
            krispModels: y.Ay.getKrispModels(),
            krispModelOverride: y.Ay.getKrispModelOverride(),
            echoCancellation: y.Ay.getEchoCancellation(),
            autoThreshold: y.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: y.Ay.getModeOptions().vadUseKrisp,
            inputMode: y.Ay.getMode(),
            vadKrispActivationThreshold: y.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: y.Ay.getNoiseCancellation(),
            noiseSuppression: y.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: y.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: y.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: y.Ay.getKrispEnableStats(),
            vadDuringPreProcess: y.Ay.getModeOptions().vadDuringPreProcess,
        })),
        R = N ? "KRISP" : A ? "STANDARD" : "NONE",
        O = (0, mR.v)(),
        w = o.useCallback(() => {
            u.current?.stop(), (u.current = null), d(null);
        }, []);
    function M() {
        y.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function L(e) {
        if ((t && M(), w(), null == O)) return;
        let a = O.createBufferSource();
        (a.buffer = e.audioBuffer),
            (m.current = O.createGain()),
            (m.current.gain.value = p),
            a.connect(m.current),
            m.current.connect(O.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            d(e);
    }
    o.useEffect(() => {
        w();
    }, [w]),
        (0, mT.l0)(() => {
            mD.A.setMode(y.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let P = [];
    return (
        I && P.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        k && P.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        P.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(x.Ip, {
            className: tB.nd,
            children: (0, r.jsxs)("div", {
                className: mM.l,
                children: [
                    (0, r.jsx)(h.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(mO.U, {
                        label: "Input Device",
                        deviceType: mj.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(g.l, {
                        label: "Noise Cancellation",
                        value: R,
                        onSelectionChange: (e) => {
                            mD.A.setNoiseCancellation("KRISP" === e), mD.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: P,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(un.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: mD.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(g.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: b,
                                    options: j.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        mD.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(c.d, {
                                    label: "Enable Stats",
                                    checked: D,
                                    onChange: (e) => mD.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    f === mj.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.d, {
                                    label: "Auto Threshold",
                                    checked: E,
                                    onChange: (e) => mD.A.setMode(mj.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                E &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.d, {
                                                label: "Use Krisp VAD",
                                                checked: C,
                                                onChange: (e) => mD.A.setMode(mj.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            C &&
                                                (0, r.jsx)(un.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: S,
                                                    onValueChange: (e) =>
                                                        mD.A.setMode(mj.TB.VOICE_ACTIVITY, {
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
                                    onChange: (e) => mD.A.setMode(mj.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(c.d, {
                        label: "Echo Cancellation",
                        checked: _,
                        onChange: (e) => mD.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)($.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(lu.$n, {
                                color: t ? lu.$n.Colors.RED : lu.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          w(),
                                              a(!0),
                                              mD.A.setLoopback("krisp_test", !0),
                                              y.Ay.getMediaEngine().startRecordingRawSamples((t, l, i) => {
                                                  a(!1), mD.A.setLoopback("krisp_test", !1);
                                                  let r = new AudioBuffer({
                                                      length: t.length,
                                                      sampleRate: i,
                                                      numberOfChannels: l,
                                                  });
                                                  for (let e = 0; e < l; e++) {
                                                      let a = new Float32Array(t.length / l);
                                                      for (let n = 0; n < t.length / l; n++)
                                                          a[n] = t[n * l + e] / 32768;
                                                      r.copyToChannel(a, e);
                                                  }
                                                  n((t) => [
                                                      ...t,
                                                      {
                                                          inputName: e,
                                                          audioBuffer: r,
                                                          createdAt: Date.now(),
                                                          suppression: R,
                                                          echoCancellation: _,
                                                          krispSuppressionLevel: s,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(un.A, {
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
                            l.map((e, t) =>
                                (0, r.jsx)(mP, { recording: e, playing: e === i, onPlay: L, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var mG = a(803306),
    mF = a(243217),
    mB = a(189213),
    m$ = a(935208),
    mV = a(878784);
let mW = [
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
function mz() {
    let [e, t] = o.useState(!1),
        a = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        l = (0, mV.Lh)(),
        n = (0, z.bG)([rZ.A], () => rZ.A.getPremiumTypeSubscription()),
        s = null != l ? (sx.VD[l]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let l = new Date();
                e > 0 ? l.setMonth(l.getMonth() - e) : l.setDate(l.getDate() - 7), l.setDate(l.getDate() - 2);
                let s = {
                    subscription_status: ei.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: m$.default.fromTimestamp(l.getTime()),
                };
                t(!0),
                    await l1.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: s, rejectWithError: !1 }),
                    await (0, mG.eO)(a.id),
                    await (0, df.hP)(),
                    t(!1);
            },
            [n, a],
        );
    if (null != a && null != n)
        return (0, r.jsx)(g.l, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: e,
            value: s,
            options: mW,
            onSelectionChange: i,
        });
}
var mH =
        (((n = {})[(n.DEFAULT = 0)] = "DEFAULT"),
        (n[(n.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (n[(n.FAILURE = 2)] = "FAILURE"),
        (n[(n.NONE = 3)] = "NONE"),
        n),
    mK =
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
async function mY(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: l, paymentType: n, sendReminderEmail: s } = a;
    return (
        await l1.Bo.post({
            url: `/debug/subscriptions/${e}/transition`,
            body: {
                target_datetime: l?.toISOString(),
                payment_type: n ?? 0,
                transition: t,
                send_reminder_email: s ?? !1,
            },
            rejectWithError: !0,
        })
    ).body;
}
var mq = a(601107);
let mJ = {
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
    mQ = {
        [mq.qf.UNKNOWN]: "Unknown",
        [mq.qf.ADMIN]: "Admin",
        [mq.qf.USER]: "User",
        [mq.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [mq.qf.DEFERRED_START]: "Deferred Start",
        [mq.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    mX = [
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
function mZ(e) {
    let { subscription: t, onClose: a, onUpdated: l, transitionState: n } = e,
        [s, i] = o.useState(lc()()),
        [c, u] = o.useState(lc()().format("HH:mm")),
        [m, x] = o.useState(!1),
        [p, g] = o.useState(void 0),
        v = async () => {
            if (null == s) return void g("Please select a target date");
            let [e, n] = c.split(":").map(Number),
                i = s.clone().hours(e).minutes(n).seconds(0).milliseconds(0);
            x(!0), g(void 0);
            try {
                await mY(t.id, mK.TIME_TRAVEL, { targetDate: i, paymentType: mH.DEFAULT, sendReminderEmail: !1 }),
                    l(),
                    a();
            } catch (e) {
                g(e.body?.message || e.message || "Failed to time travel");
            } finally {
                x(!1);
            }
        };
    return (0, r.jsx)(mB.Modal, {
        transitionState: n,
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
                (0, r.jsx)(im.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(d.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: c,
                        onChange: (e) => {
                            u(e.target.value);
                        },
                        className: om.Qn,
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
                                    className: om.JX,
                                    children: ["Start: ", lc()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(h.E, {
                                    variant: "text-xs/normal",
                                    className: om.JX,
                                    children: ["End: ", lc()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != p && (0, r.jsx)(B.w, { type: "critical", children: p }),
            ],
        }),
    });
}
function m0(e) {
    var t;
    let a,
        { subscription: l, onUpdated: n } = e,
        [s, i] = o.useState(!1),
        [c, u] = o.useState(!1),
        [x, p] = o.useState(!1),
        [v, j] = o.useState(!1),
        [b, f] = o.useState(null),
        _ = (e) => {
            let t = new Date(e);
            return m$.default.fromTimestamp(t.getTime());
        },
        y = async (e) => {
            let { status: t = l.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: _(a) } : null),
                    ...(null != s ? { ended_at: _(s) } : null),
                };
            await l1.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: i, rejectWithError: !1 }), n();
        },
        E = async () => {
            try {
                await mY(l.id, mK.RENEW, {
                    targetDate: lc()(new Date()),
                    paymentType: mH.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                f(e.body?.message || e.message || "Failed to renew subscription");
            }
            n();
        },
        C = sx.hd[l.planIdFromItems]?.premiumType === sx.PremiumTypes.TIER_0,
        S = l.metadata?.ended_at,
        N = null != S ? new Date(S).toISOString().substring(0, 10) : "",
        A = [
            { id: "id", label: `ID: ${l.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = l.status), t in mJ) ? mJ[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        k = l.hasActiveTrial,
        I = l.metadata?.active_discount_id != null;
    return (
        k && A.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        I && A.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        l.status !== ei.Dmq.ACTIVE &&
            A.push({
                id: "dates",
                label: `Dates: ${(0, l_.i$)(l.createdAt, "LL")} - ${(0, l_.i$)(l.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        l.status === ei.Dmq.PAUSED &&
            A.push({
                id: "pause-reason",
                label: `Pause Reason: ${l.pauseReason in mQ ? mQ[l.pauseReason] : `Unknown pause reason ${l.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: G()(s_.Nr, C ? s_.Qf : s_.C1),
            children: (0, r.jsxs)(d.n, {
                label: `Type: ${null == ((a = l.planIdFromItems)) ? "No plan id" : a in sx.hd ? sx.hd[a].name : `Unknown plan id ${a}`}`,
                className: om.lI,
                children: [
                    (0, r.jsx)(oc.C, {
                        items: A,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    k &&
                        (0, r.jsxs)("div", {
                            className: om.VK,
                            children: [
                                (0, r.jsxs)(F.D, {
                                    onClick: () => {
                                        p(!x);
                                    },
                                    className: om.Eh,
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
                                        className: om.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(h.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: l.trialId }),
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
                                                            null != l.trialEndsAt
                                                                ? (0, l_.i$)(l.trialEndsAt, "LL")
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
                            className: om.VK,
                            children: [
                                (0, r.jsxs)(F.D, {
                                    onClick: () => {
                                        j(!v);
                                    },
                                    className: om.Eh,
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
                                        className: om.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        children: l.metadata?.active_discount_id,
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
                                                            l.metadata?.active_discount_expires_at != null
                                                                ? (0, l_.i$)(
                                                                      new Date(l.metadata?.active_discount_expires_at),
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
                    null != l.metadata &&
                        (0, r.jsxs)("div", {
                            className: om.VK,
                            children: [
                                (0, r.jsxs)(F.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: om.Eh,
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
                                        className: om.j3,
                                        children: Object.entries(l.metadata).map((e) => {
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
                        className: om.VK,
                        children: [
                            (0, r.jsxs)(F.D, {
                                onClick: () => {
                                    u(!c);
                                },
                                className: om.Eh,
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
                                            value: l.status,
                                            options: mX,
                                            onSelectionChange: (e) => {
                                                y({ status: e });
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
                                                            onClick: (e) => E(),
                                                        }),
                                                        (0, r.jsx)(m.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, e$.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(mZ, {
                                                                            subscription: l,
                                                                            onUpdated: n,
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
                                                        className: om.z3,
                                                        children: (0, r.jsx)(B.w, { type: "critical", children: b }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)($.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(im.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: lc()(l.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => y({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(mz, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(im.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== N ? lc()(N) : void 0,
                                            onSelect: (e) => y({ endedAt: e.toISOString() }),
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
let m1 = async () =>
        (
            await l1.Bo.get({
                url: ei.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => mF.A.createFromServer(e)),
    m2 = [
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
function m8() {
    let e = (0, z.bG)([rZ.A], () => rZ.A.getPremiumTypeSubscription()),
        t = (0, z.bG)([ea.default], () => ea.default.getCurrentUser()),
        [a, l] = o.useState("511651880837840896"),
        [n, s] = o.useState([]),
        [i, d] = o.useState(!1),
        c = o.useCallback(async () => {
            try {
                d(!0), await (0, df.hP)(), await (0, mG.eO)(t.id), s(await m1());
            } finally {
                d(!1);
            }
        }, [t]);
    o.useEffect(() => {
        c();
    }, [c]);
    let u = o.useMemo(() => n.filter((e) => e.status !== ei.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [n]),
        h = async () => {
            await l1.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await c();
        },
        p = async () => {
            await l1.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await c();
        };
    return (0, r.jsx)(x.Ip, {
        className: tB.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: s_.dL,
                    children: [
                        (0, r.jsx)(W.D, {
                            variant: "heading-lg/semibold",
                            className: tB.wx,
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
                    className: G()([s_.uW, s_.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(g.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: m2,
                                    onSelectionChange: l,
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
                null != e && (0, r.jsx)(m0, { subscription: e, onUpdated: c }),
                (0, r.jsx)(W.D, { variant: "heading-lg/semibold", className: tB.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: G()([s_.uW, s_.Uo]),
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
                                className: tB.wx,
                                children: "Previous Subscriptions",
                            }),
                            u.map((e) => (0, r.jsx)(m0, { subscription: e, onUpdated: c }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var m6 = a(284009),
    m3 = a.n(m6),
    m5 = a(889137),
    m9 = a(412703),
    m4 = a(440703),
    m7 = a(267548),
    he = a(668824),
    ht = a(695366),
    ha = a(359778),
    hl = a(507107),
    hn = a(801365),
    hs = a(792620),
    hi = a(241124),
    hr = a(743407),
    ho = a(717695),
    hd = a(961974),
    hc = a(127219),
    hu = a(262514),
    hm = a(19809),
    hh = a(317097),
    hx = a(452027),
    hp = a(922016),
    hg = a(714385),
    hv = a(359923);
let hj = function (e) {
    let { colorKey: t, value: a, onChange: l, title: n } = e,
        s = o.useRef(null);
    return (0, r.jsx)(hx.D, {
        label: n,
        children: (0, r.jsx)(hp.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(cT.VN, { ...e, value: a, onChange: (e) => l(t, (0, hh.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(F.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: hv.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(hg.d, { size: "xs", color: "currentColor", className: hv.WY }),
                }),
        }),
    });
};
var hb = a(247928);
let hf = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: l = !1 } = e;
    return (0, r.jsx)(hb.M, {
        children: (0, r.jsx)(ha.Z, {
            className: G()(hv.Rx, { [hv.aK]: l }),
            outline: l,
            children: (0, r.jsx)("div", {
                className: hv.AZ,
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
var h_ = a(643374);
let hy = function (e) {
        let { assetKey: t, filters: a, initialValue: l, onFileChange: n, title: s } = e,
            [i, d] = o.useState(null),
            c = o.useRef(null);
        return (
            o.useEffect(
                () => () => {
                    null != c.current && URL.revokeObjectURL(c.current);
                },
                [],
            ),
            (0, r.jsx)(hx.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(h_.A, {
                    filename: i?.name ?? l ?? "",
                    filters: [{ name: s, extensions: a }],
                    buttonText: "Browse",
                    placeholder: "Select an asset",
                    onFileSelect: function (e) {
                        if ((d(e ?? null), null == e)) return;
                        let a = URL.createObjectURL(e);
                        c.current = a;
                        let l = new URL(a);
                        l.searchParams.append("mimetype", e.type),
                            l.searchParams.append("name", e.name),
                            n(t, l.toString());
                    },
                }),
            })
        );
    },
    hE = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: l, title: n } = e,
            [s, i] = o.useState("");
        return (
            o.useEffect(() => {
                i(a ?? "");
            }, [a]),
            (0, r.jsx)(v.k, {
                label: n,
                value: s,
                onChange: function (e) {
                    i(e), l(t, e);
                },
            })
        );
    };
var hC = a(31587);
let hS = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: l } = (0, hC.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
        n = [
            { id: "none", label: "NONE", value: null },
            ...l.map((e) => ({ id: e.id, label: e.config.messages.questName, value: e })),
        ];
    return (0, r.jsx)(g.l, {
        label: "Prefill with Quest",
        options: n,
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
var hN = a(843282),
    hA = a(972886);
let hk = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    hI = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: l } = e;
        return (0, r.jsxs)($.B, {
            gap: 20,
            children: [
                (0, r.jsx)(hN.Pw, {
                    label: "Task Type(s)",
                    className: hA.Z,
                    placeholder: "Select Task Preset",
                    options: hk,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, n, s, i, r;
                        return (
                            e ===
                            ((t = l.tasks),
                            (a = m9.n.PLAY_ON_PLAYSTATION in t || m9.n.PLAY_ON_XBOX in t),
                            (n = m9.n.PLAY_ON_DESKTOP in t),
                            (s = m9.n.STREAM_ON_DESKTOP in t),
                            (i = m9.n.WATCH_VIDEO in t),
                            (r = m9.n.PLAY_ACTIVITY in t),
                            a && n ? 4 : a ? 3 : n ? 0 : s ? 1 : i ? 2 : r ? 5 : void 0)
                        );
                    },
                    select: (e) => {
                        t({
                            ...l,
                            tasks: (function (e, t) {
                                let a = {};
                                switch (e) {
                                    case 1:
                                        a[m9.n.STREAM_ON_DESKTOP] = { type: m9.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[m9.n.PLAY_ON_DESKTOP] = { type: m9.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[m9.n.PLAY_ON_PLAYSTATION] = {
                                            type: m9.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[m9.n.PLAY_ON_XBOX] = {
                                                type: m9.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[m9.n.PLAY_ON_DESKTOP] = { type: m9.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[m9.n.PLAY_ON_PLAYSTATION] = {
                                                type: m9.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[m9.n.PLAY_ON_XBOX] = {
                                                type: m9.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[m9.n.WATCH_VIDEO] = {
                                            type: m9.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[m9.n.PLAY_ACTIVITY] = { type: m9.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / l8.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= l8.A.Seconds.MINUTE;
                        let n = Object.fromEntries(
                            Object.entries(l.tasks).map((e) => {
                                let [t, l] = e;
                                return [t, { ...l, target: a }];
                            }),
                        );
                        t({ ...l, tasks: n });
                    },
                }),
            ],
        });
    };
var hD = a(818348);
let hT = function () {
    let e = (0, ec.Ay)();
    return (0, r.jsx)(hx.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(eu.zy, {
                    theme: hD.NJ.LIGHT,
                    isSelected: e === hD.NJ.LIGHT,
                    onSelect: () => (0, cv.u_)({ theme: hD.NJ.LIGHT }),
                }),
                (0, r.jsx)(eu.zy, {
                    theme: hD.NJ.DARK,
                    isSelected: e === hD.NJ.DARK,
                    onSelect: () => (0, cv.u_)({ theme: hD.NJ.DARK }),
                }),
            ],
        }),
    });
};
var hR =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let hO = function (e) {
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
var hw = a(617986);
let hM = ["png", "gif", "webp"],
    hL = [...hM, "jpg", "jpeg"],
    hP = Array.from(new Set([...hL, "gif", "mp4", "webm"]));
function hU() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: a = null, enrolledAt: l = null, claimedAt: n = null } = e;
    return {
        userId: "123",
        questId: "1193992107035983872",
        enrolledAt: l,
        completedAt: a,
        claimedAt: n,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let hG = "1193992107035983872",
    hF = {
        id: hG,
        preview: !0,
        config: {
            id: hG,
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
                        type: m4.l.REWARD_CODE,
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
                joinOperator: he.K.AND,
                tasks: { [m9.n.PLAY_ON_DESKTOP]: { type: m9.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: m7.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function hB() {
    var e;
    let [t, l] = o.useState(hF),
        n = o.useCallback((e) => {
            l({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(hR.UNENROLLED),
        [d, u] = o.useState(!1),
        [p, g] = o.useState(!1),
        [v, j] = o.useState(null),
        b =
            ((e = t.config),
            (0, m5.YW)(e)
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
            var l, s;
            n({
                ...t,
                config:
                    ((l = t.config),
                    (s = { [e]: a }),
                    (0, m5.YW)(l)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function _(e, a) {
        let l = t.config.taskConfigV2.tasks,
            s = l[m9.n.WATCH_VIDEO];
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
        n({
            ...t,
            config: {
                ...t.config,
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...l, [m9.n.WATCH_VIDEO]: { ...s, assets: i } } },
            },
        });
    }
    function y(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var l, s;
            n({
                ...t,
                config:
                    ((l = t.config),
                    (s = { [e]: a }),
                    (0, m5.YW)(l)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function E(e, a, l) {
        if ("name" === e || "nameWithArticle" === e) {
            var s, i;
            n({
                ...t,
                config:
                    ((s = t.config),
                    (i = { [e]: a }),
                    (0, m5.YW)(s)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, t) =>
                                    t === l ? { ...e, messages: { ...e.messages, ...i } } : e,
                                ),
                            },
                        }))
                        .exhaustive()),
            });
        }
    }
    function C(e, a) {
        n({ ...t, config: { ...t.config, colors: { ...t.config.colors, [e]: a } } });
    }
    function S() {
        (0, hn.tU)(t.config) && (0, hw.hJ)(t, hl.uF.GIFT_INVENTORY_FOR_YOU, hl.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * l8.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => m9.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    m3()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[m9.n.WATCH_VIDEO];
    return (0, r.jsxs)(x.Ip, {
        className: hv.kL,
        children: [
            (0, r.jsx)(W.D, { variant: "heading-lg/bold", className: hv.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: hv.OA,
                children: (0, r.jsx)(hS, {
                    onSelect: function (e) {
                        j(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return hR.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return hR.CLAIMED;
                                        if (null != e.userStatus.completedAt) return hR.COMPLETED_100;
                                        let t = (0, hs.Yh)(e),
                                            a = t.progressSeconds,
                                            l = t.targetSeconds;
                                        return a / l >= 1
                                            ? hR.COMPLETED_100
                                            : a / l >= 0.75
                                              ? hR.COMPLETED_75
                                              : a / l >= 0.5
                                                ? hR.COMPLETED_50
                                                : a / l >= 0.25
                                                  ? hR.COMPLETED_25
                                                  : hR.ENROLLED;
                                    })(e),
                                ),
                                n(e));
                    },
                    quest: v,
                }),
            }),
            (0, r.jsx)(W.D, { variant: "heading-md/semibold", className: hv.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: hv.OA,
                children: (0, r.jsx)(hI, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        n({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(W.D, { variant: "heading-md/semibold", className: hv.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: hv.OA,
                children: [
                    (0, r.jsx)(hE, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: y,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(hE, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: y,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(hE, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: y,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, r.jsx)(hE, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let l = t.config.taskConfigV2.tasks,
                                    s = l[m9.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                n({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...l, [m9.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(W.D, { variant: "heading-md/semibold", className: hv.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: hv.OA,
                children: [
                    (0, r.jsx)(hy, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: f,
                        filters: hP,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(hy, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: f,
                        filters: hP,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hy, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: f,
                        filters: hP,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(hy, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: f,
                        filters: hP,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hy, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: f,
                        filters: [...hL, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(hy, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: f,
                        filters: [...hM, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(hy, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: _,
                                    filters: hP,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(hy, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: _,
                                    filters: hP,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(hy, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: _,
                                    filters: hL,
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
                                className: hv.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: hv.OA,
                                children: [
                                    (0, r.jsx)(hE, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => E(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(hE, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => E(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== m4.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(hy, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, l) =>
                                                (function (e, a, l) {
                                                    if ("asset" === e) {
                                                        var s;
                                                        n({
                                                            ...t,
                                                            config:
                                                                ((s = t.config),
                                                                (0, m5.YW)(s)
                                                                    .with({ configVersion: 2 }, (e) => ({
                                                                        ...e,
                                                                        rewardsConfig: {
                                                                            ...e.rewardsConfig,
                                                                            rewards: e.rewardsConfig.rewards.map(
                                                                                (e, t) =>
                                                                                    t === l
                                                                                        ? { ...e, asset: a, skuId: "" }
                                                                                        : e,
                                                                            ),
                                                                        },
                                                                    }))
                                                                    .exhaustive()),
                                                        });
                                                    }
                                                })(e, l, a),
                                            filters: hP,
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
            (0, r.jsx)(W.D, { variant: "heading-md/semibold", className: hv.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: hv.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: hv.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(hj, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: C,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(hj, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: C,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: hv.OA, children: (0, r.jsx)(hT, {}) }),
                    (0, r.jsx)(hO, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case hR.UNENROLLED:
                                    n({ ...t, userStatus: null });
                                    break;
                                case hR.ENROLLED:
                                    n({ ...t, userStatus: hU({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case hR.COMPLETED_25:
                                    n({
                                        ...t,
                                        userStatus: hU({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case hR.COMPLETED_50:
                                    n({
                                        ...t,
                                        userStatus: hU({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case hR.COMPLETED_75:
                                    n({
                                        ...t,
                                        userStatus: hU({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case hR.COMPLETED_100:
                                    n({
                                        ...t,
                                        userStatus: hU({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case hR.CLAIMED:
                                    n({
                                        ...t,
                                        userStatus: hU({
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
            (0, r.jsx)(W.D, { variant: "heading-lg/bold", className: hv.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: hv.$$,
                children: [
                    (0, r.jsxs)(hf, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: hv.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(h.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: hv.ok,
                                        children: (0, r.jsx)(hi.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(ho.A, { children: (0, r.jsx)(hr.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hf, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(hi.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(hm.Ay, {
                                    quest: t,
                                    className: hv.d,
                                    questContent: hl.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: hl.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hf, {
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
                                className: hv.l4,
                                children: (0, r.jsx)(hi.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: hv.Jr,
                                        children: (0, r.jsx)(hd.A, {
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
                        className: hv.NY,
                        children: (0, r.jsx)(c.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(hf, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(W.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            p
                                ? (0, r.jsx)(hc.l, { questId: t.id })
                                : (0, r.jsx)(
                                      hu.M,
                                      {
                                          quest: t,
                                          location: hl.uF.QUESTS_EMBED,
                                          sourceQuestContent: hl.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: hv.NY,
                        children: (0, r.jsx)(c.d, { label: "Invalid Quests Embed:", checked: p, onChange: g }),
                    }),
                    A &&
                        (0, r.jsxs)(hf, {
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
                                            let { default: l } = await Promise.all([
                                                a.e("22448"),
                                                a.e("78496"),
                                                a.e("92868"),
                                                a.e("63408"),
                                                a.e("77375"),
                                                a.e("97199"),
                                            ]).then(a.bind(a, 834135));
                                            return (a) =>
                                                (0, r.jsx)(l, {
                                                    ...a,
                                                    openStartClockTime: e,
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: hl.uF.INTERNAL_PREVIEW_TOOL,
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
class h$ extends o.Component {
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
                  className: hv.TA,
                  children: [
                      (0, r.jsx)(ht.E, { className: hv.Yw }),
                      (0, r.jsx)(W.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(m.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(ha.Z, {
                              className: hv.Fx,
                              children: (0, r.jsx)("code", { className: hv.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(hB, {}, t);
    }
}
var hV = a(913122),
    hW = a(839214),
    hz = a(77138),
    hH = a(450827),
    hK = a(626584),
    hY = a(174768),
    hq = a(205761),
    hJ = a(860071),
    hQ = a(696451),
    hX = a(860689),
    hZ = a(926140);
let h0 = new hK.A("SearchDebugUtils");
function h1() {
    h0.info("--------------------------");
}
function h2() {
    let e = hY.A.getProps();
    h0.info("START Quick Switcher State"),
        h0.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((h0.info(`Result Type: ${e.type}`), e.type)) {
                case hZ.rD.GUILD:
                    h0.info(`guild id: ${e.record.id}`);
                    break;
                case hZ.rD.TEXT_CHANNEL:
                case hZ.rD.VOICE_CHANNEL:
                    h0.info(`channel type: ${e.record.type}`),
                        h0.info(`channel id: ${e.record.id}`),
                        h0.info(`name: ${e.record.name}`);
                    break;
                case hZ.rD.DM:
                    h0.info(`channel type: ${e.record.type}`),
                        h0.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (h0.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = ea.default.getUser(e);
                                null != t &&
                                    (h0.info(`recipient username: ${t.username}`),
                                    h0.info(`recipient global name: ${eo.Ay.getGlobalName(t)}`),
                                    h0.info(`recipient nickname: ${ay.A.getNickname(t.id)}`));
                            }));
                    break;
                case hZ.rD.GROUP_DM:
                    h0.info(`channel type: ${e.record.type}`),
                        h0.info(`channel id: ${e.record.id}`),
                        h0.info(`name: ${(0, af.m1)(e.record, ea.default, ay.A)}`),
                        e.record.isGroupDM() &&
                            (h0.info(`default name: ${(0, af.ks)(e.record, ea.default, ay.A)}`),
                            h0.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = ea.default.getUser(e);
                                null != t &&
                                    (h0.info(`recipient username: ${t.username}`),
                                    h0.info(`recipient global name: ${eo.Ay.getGlobalName(t)}`),
                                    h0.info(`recipient nickname: ${ay.A.getNickname(t.id)}`));
                            }));
                    break;
                case hZ.rD.USER:
                    h0.info(`user id: ${e.record.id}`),
                        h0.info(`username: ${e.record.username}`),
                        h0.info(`global name: ${eo.Ay.getGlobalName(e.record)}`),
                        h0.info(`nickname: ${ay.A.getNickname(e.record.id)}`),
                        h0.info(`guild nicknames: ${hQ.Ay.getNicknames(e.record.id)}`);
            }
            h0.info(`frecency score: ${hq.A.getScoreWithoutFetchingLatest(e.record.id)}`), h1();
        }),
        h0.info("END Quick Switcher State\n");
}
async function h8() {
    h0.info("START User Search Worker State");
    let e = await hH.A.requestDebugState();
    null == e
        ? h0.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              h0.info(`id: ${t}`),
                  h0.info(`username: ${a.username}`),
                  h0.info(`global name: ${a.globalName}`),
                  h0.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      h0.info(`guild id: ${t}`), h0.info(`guild nickname: ${a}`);
                  }),
                  h1();
          }),
          h0.info("END User Search Worker State\n"));
}
async function h6() {
    let e = await hH.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = ea.default.getUsers(),
        l = new Set(Object.keys(t)),
        n = m$.default.keys(a),
        s = [];
    return (
        n.forEach((e) => {
            l.has(e) || s.push(e);
        }),
        s
    );
}
async function h3(e) {
    let t = await hH.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        l = a6.A.getGuildIds(),
        n = [];
    l.forEach((t) => {
        let a = hQ.Ay.getMember(t, e);
        null != a && n.push(a);
    });
    let s = hJ.A.getDebugState(e);
    return { user: ea.default.getUser(e), searchWorkerUser: a, guildMembers: n, guildMemberRequests: s };
}
var h5 = a(929948);
function h9(e) {
    let { isUploading: t, isSuccess: a, errorMessage: l, onClick: n, title: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.$, {
                variant: "primary",
                onClick: n,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : s,
            }),
            null != l &&
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: h5.qS,
                    children: l,
                }),
            a &&
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: h5.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let h4 = (0, hW.D)(() => ({
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
function h7() {
    let e = h4.useField("includeFrecency"),
        t = h4.useField("includeFriends"),
        a = h4.useField("includeDMs"),
        l = h4.useField("includeGDMs"),
        n = h4.useField("includeQuickSwitcherState"),
        s = h4.useField("includeUserSearchWorkerState"),
        i = h4.useField("isUploading"),
        u = h4.useField("isSuccess"),
        m = h4.useField("errorMessage"),
        h = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: l,
                includeQuickSwitcherState: n,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = h4.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    h4.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = ay.A.getFriendIDs()),
                            h0.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = ea.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    l = eo.Ay.getGlobalName(t),
                                    n = ay.A.getNickname(t.id),
                                    s = hQ.Ay.getNicknames(t.id);
                                h0.info(`username: ${a}`),
                                    h0.info(`global name: ${l}`),
                                    h0.info(`nickname: ${n}`),
                                    h0.info(`guild nicknames: ${s}`),
                                    h1();
                            }),
                            h0.info("END Discord Friends\n")),
                        a &&
                            ((r = a_.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            h0.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, af.m1)(e, ea.default, ay.A),
                                    a = (0, af.ks)(e, ea.default, ay.A);
                                h0.info(`id: ${e.id}`),
                                    h0.info(`name: ${t}`),
                                    h0.info(`default name: ${a}`),
                                    h0.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ea.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            l = eo.Ay.getGlobalName(t),
                                            n = ay.A.getNickname(t.id),
                                            s = hQ.Ay.getNicknames(t.id);
                                        h0.info(`username: ${a}`),
                                            h0.info(`global name: ${l}`),
                                            h0.info(`nickname: ${n}`),
                                            h0.info(`guild nicknames: ${s}`),
                                            h1();
                                    });
                            }),
                            h0.info("END Logging Group DM Channels\n"),
                            h0.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, af.m1)(e, ea.default, ay.A);
                                h0.info(`id: ${e.id}`), h0.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    l = ea.default.getUser(a);
                                if (null == l) return;
                                let n = l.username,
                                    s = eo.Ay.getGlobalName(l),
                                    i = ay.A.getNickname(l.id);
                                h0.info(`username: ${n}`),
                                    h0.info(`global name: ${s}`),
                                    h0.info(`nickname: ${i}`),
                                    h1();
                            }),
                            h0.info("END Logging DM Channels\n")),
                        l &&
                            ((c = a_.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            h0.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, af.m1)(e, ea.default, ay.A),
                                    a = (0, af.ks)(e, ea.default, ay.A);
                                h0.info(`id: ${e.id}`),
                                    h0.info(`name: ${t}`),
                                    h0.info(`default name: ${a}`),
                                    h0.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ea.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            l = eo.Ay.getGlobalName(t),
                                            n = ay.A.getNickname(t.id),
                                            s = hQ.Ay.getNicknames(t.id);
                                        h0.info(`username: ${a}`),
                                            h0.info(`global name: ${l}`),
                                            h0.info(`nickname: ${n}`),
                                            h0.info(`guild nicknames: ${s}`),
                                            h1();
                                    });
                            }),
                            h0.info("END Logging Group DM Channels\n"),
                            h0.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, af.m1)(e, ea.default, ay.A);
                                h0.info(`id: ${e.id}`), h0.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    l = ea.default.getUser(a);
                                if (null == l) return;
                                let n = l.username,
                                    s = eo.Ay.getGlobalName(l),
                                    i = ay.A.getNickname(l.id);
                                h0.info(`username: ${n}`),
                                    h0.info(`global name: ${s}`),
                                    h0.info(`nickname: ${i}`),
                                    h1();
                            }),
                            h0.info("END Logging DM Channels\n")),
                        e &&
                            ((h = hq.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, hX.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            h0.info("START Frecency"),
                            h0.info("Guilds"),
                            x.forEach((e) => {
                                let t = hq.A.getScoreWithoutFetchingLatest(e.id);
                                h0.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            h1(),
                            h0.info("DM Channels"),
                            g.forEach((e) => {
                                let t = hq.A.getScoreWithoutFetchingLatest(e.id);
                                h0.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            h1(),
                            h0.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = hq.A.getScoreWithoutFetchingLatest(e.id);
                                h0.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    h0.info(`default name: ${(0, af.ks)(e, ea.default, ay.A)}`),
                                    h0.info(`name: ${(0, af.m1)(e, ea.default, ay.A)}`);
                            }),
                            h1(),
                            h0.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = hq.A.getScoreWithoutFetchingLatest(e.id);
                                h0.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            h1(),
                            h0.info("END Frecency\n")),
                        n && h2(),
                        s && h8(),
                        await (0, hz.a)(ei.Umv.WEB_APP),
                        h4.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new hV.LG(t);
                    h4.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    h4.setState({ isUploading: !1 });
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
                onChange: () => h4.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(c.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => h4.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(c.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => h4.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(c.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: l,
                onChange: () => h4.setState({ includeGDMs: !l }),
            }),
            (0, r.jsx)(c.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: n,
                onChange: () => h4.setState({ includeQuickSwitcherState: !n }),
            }),
            (0, r.jsx)(c.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => h4.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(h9, {
                isUploading: i,
                isSuccess: u,
                errorMessage: m,
                onClick: h,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let xe = (0, hW.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function xt() {
    let e = xe.useField("userIds"),
        t = xe.useField("isLoading"),
        a = xe.useField("isSuccess"),
        l = xe.useField("errorMessage"),
        n = xe.useField("lastRunAt"),
        s = o.useCallback(async () => {
            xe.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await h6();
                xe.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                xe.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                xe.setState({ isLoading: !1 });
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
                            className: h5.J1,
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
                    className: h5.N6,
                    children: [
                        null != l &&
                            (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: h5.qS,
                                children: l,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(h.E, { variant: "text-md/normal", children: `Last run at: ${n}` }),
                                    (0, r.jsx)(h.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: h5.uk, children: i }),
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
let xa = (0, hW.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function xl() {
    let e = xa.useField("isRecording"),
        t = xa.useField("isUploading"),
        a = xa.useField("isSuccess"),
        l = xa.useField("errorMessage"),
        n = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = hY.A.getProps();
            (n.current !== e || s.current !== t) && ((n.current = e), (s.current = t), h2());
        }, []);
    o.useEffect(() => {
        if (e) return hY.A.addChangeListener(i), () => hY.A.removeChangeListener(i);
    }, [i, e]);
    let c = o.useCallback(async () => {
        let { isUploading: e } = xa.getState();
        if (!e)
            try {
                xa.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, hz.a)(ei.Umv.WEB_APP),
                    xa.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new hV.LG(t);
                xa.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                xa.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(d.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(mh.p, {
                messageType: mh.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(sl.e, {
                children: [
                    (0, r.jsx)(m.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => xa.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(h9, {
                        isUploading: t,
                        isSuccess: a,
                        errorMessage: l,
                        onClick: c,
                        title: "Upload Session Logs",
                    }),
                ],
            }),
        ],
    });
}
var xn = a(145497);
let xs = (0, hW.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function xi(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: h5.J1,
                children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: h5.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: h5.J1,
                            children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = a6.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: h5.J1,
                                      children: [
                                          (0, r.jsx)(xn.Ay, { guild: t, iconSize: 16 }),
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
function xr(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: l, guildMembers: n, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sZ.y, { size: "sm", color: eV.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(ht.E, { size: "sm", color: eV.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: h5.N6,
        children: [
            (0, r.jsxs)("div", {
                className: h5.J1,
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
                    className: h5.uk,
                    children: (0, r.jsx)("div", {
                        className: h5.J1,
                        children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: h5.J1,
                children: [
                    i({ ok: null != l }),
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        children:
                            null != l
                                ? "User exists in User Search Worker"
                                : "User does not exist in User Search Worker",
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)("div", {
                    className: h5.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: h5.J1,
                            children: (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                children: `username: ${l.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: h5.J1,
                            children: (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${l.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: h5.J1,
                            children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: h5.uk,
                            children: [
                                0 === Object.keys(l.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: h5.J1,
                                        children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(l.nicknames).map((e) => {
                                    let [t, a] = e,
                                        l = a6.A.getGuild(t),
                                        n = a_.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: h5.J1,
                                            children: [
                                                null != l && (0, r.jsx)(xn.Ay, { guild: l, iconSize: 16 }),
                                                null != l &&
                                                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: l.name }),
                                                null == l &&
                                                    null != n &&
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, af.m1)(n, ea.default, ay.A),
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
                className: h5.J1,
                children: [
                    i({ ok: n.length > 0 }),
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        children: n.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            n.length > 0 &&
                (0, r.jsx)("div", {
                    className: h5.uk,
                    children: n.map((e) => {
                        let t = a6.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: h5.J1,
                                children: [
                                    (0, r.jsx)(xn.Ay, { guild: t, iconSize: 16 }),
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
                className: h5.J1,
                children: [
                    (0, r.jsx)(cI.m, { size: "sm" }),
                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: h5.uk,
                    children: [
                        (0, r.jsx)(xi, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(xi, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(xi, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function xo() {
    let e = o.useCallback((e) => {
            xs.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = xs.getState();
            if (!t && null != e) {
                xs.setState({ loading: !0, error: null });
                try {
                    let t = await h3(e);
                    xs.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new hV.LG(t);
                    xs.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    xs.setState({ loading: !1 });
                }
            }
        }, []),
        a = xs.useField("loading");
    return (0, r.jsxs)("div", {
        className: h5.$n,
        children: [
            (0, r.jsx)(v.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(m.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function xd() {
    let e = xs.useField("state"),
        t = xs.useField("error");
    return (0, r.jsxs)(d.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(xo, {}),
            null != t &&
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: h5.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(xr, { userState: e }),
        ],
    });
}
function xc() {
    return (0, r.jsxs)(x.Ip, {
        className: h5.nd,
        children: [
            (0, r.jsx)(xl, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(h7, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(xd, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(xt, {}),
        ],
    });
}
var xu = a(761508),
    xm = a(599147),
    xh = a(808411),
    xx = a(624716),
    xp = a(398590),
    xg = a(764451),
    xv = a(67956),
    xj = a(52822),
    xb = a(642153);
let xf = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    x_ = {
        "virtual-currency": function () {
            return (0, r.jsxs)(xj.Hq, {
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
                                (e = xv.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (xg.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, xp.id)(ei.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(xm.o, {}), (0, r.jsx)(xh.A, {}), (0, r.jsx)(xx.A, {})] }),
    };
function xy() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => x_[e], [e]);
    return (0, r.jsxs)("div", {
        className: G()(tB.nd, xb.kL),
        children: [
            (0, r.jsx)(xu.V, {
                className: xb.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: xf.map((e) => (0, r.jsx)(xu.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(x.Ar, { children: (0, r.jsx)("div", { className: xb.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var xE = a(718446),
    xC = a(766075),
    xS = a(355097);
let xN = (0, hW.D)(() => ({ urlString: "", error: null })),
    xA = Object.entries(xS.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function xk() {
    let [e, t] = o.useState(),
        a = xN.useField("urlString"),
        l = xN.useField("error"),
        n = o.useCallback(() => {
            let e = xN.getField("urlString");
            if (null == e || "" === e) return void xN.setState({ error: "URL is required" });
            let t = (0, xE.parseSettingsUrl)({ path: e });
            ((0, xE.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? xN.setState({ error: "String did not match expected format" })
                : (0, xC.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(d.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(at.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xA,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = xS.od[e].split("/");
                        xN.setState({ urlString: ei.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(v.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => xN.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(sl.e, {
                children: [
                    (0, r.jsx)(m.$, {
                        variant: "primary",
                        onClick: n,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(m.$, {
                        variant: "secondary",
                        onClick: () => (0, lf.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != l && (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
var xI = a(780964);
let xD = (0, hW.D)(() => ({ setting: xI.X.ACCOUNT_PANEL }));
function xT() {
    let e = xD.useField("setting"),
        t = o.useCallback(() => {
            (0, xC.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(xI.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(d.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(at.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => xD.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(m.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var xR = a(963935),
    xO = a(349655),
    xw = a(53181);
function xM(e) {
    let { title: t, initExpanded: a, highlightMode: l = "none", children: n } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === l || "migrated-root" === l ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(h.E, { variant: e, color: c, children: t });
    return null == n
        ? (0, r.jsx)("div", { className: xw.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: xw.NF,
              children: [
                  (0, r.jsxs)(F.D, {
                      className: xw.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(sm.A, {
                              direction: s ? sm.A.Directions.DOWN : sm.A.Directions.RIGHT,
                              className: xw.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: xw.m4, children: n }),
              ],
          });
}
function xL(e) {
    let { setting: t, depth: a, inheritedHighlightMode: l } = e,
        n = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case xR.Z6.ROOT:
                    return "migrated-root";
                case xR.Z6.SECTION:
                case xR.Z6.PANEL:
                case xR.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, l),
        s = "migrated" === n ? "migrated" : void 0,
        i = null;
    return (
        (0, xR.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(xL, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(xM, { title: t.key, initExpanded: a <= 2, highlightMode: n, children: i })
    );
}
function xP() {
    let { node: e } = (0, ee.Ay)(xO.D, ""),
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
            (0, r.jsx)(xL, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var xU = a(168803);
function xG() {
    return (0, r.jsxs)(x.Ip, {
        className: xU.n,
        children: [
            (0, r.jsx)(xT, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(xk, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(xP, {}),
        ],
    });
}
function xF() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aJ.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(lV, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aJ.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(mm, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aJ.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(mr, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aJ.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(n7, {}),
            },
        ];
        return (
            aB.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aJ.fu.SHOP, render: () => (0, r.jsx)(u9, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aJ.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(dM, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aJ.fu.SHOP,
                    render: () => (0, r.jsx)(tO, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aJ.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cZ, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aJ.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(sa, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aJ.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(ce.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aJ.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(lo, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aJ.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(sd, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aJ.fu.GAMES, render: () => (0, r.jsx)(dv, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aJ.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(iu, {}),
                }),
                a$.isPlatformEmbedded &&
                    (e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: aJ.fu.GAMES,
                        render: () => (0, r.jsx)(nV, {}),
                    }),
                    e.push({
                        id: "running_game_detection",
                        name: "Running Game Detection",
                        group: aJ.fu.GAMES,
                        tags: ["detection", "filter", "blocklist", "native"],
                        render: () => (0, r.jsx)(ua, {}),
                    })),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: aJ.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, r.jsx)(nM, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aJ.fu.GAMES, render: () => (0, r.jsx)(u7, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aJ.fu.GAMES,
                    render: () => (0, r.jsx)(le, {}),
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
                    render: () => (0, r.jsx)(aF, {}),
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
                    render: () => (0, r.jsx)(xc, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aJ.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(P, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aJ.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(c8, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aJ.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(iZ, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aJ.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rS, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aJ.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(rm, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aJ.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(ns, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aJ.fu.UI, render: () => (0, r.jsx)(nT, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aJ.fu.UI,
                render: () => (0, r.jsx)(ck, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aJ.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sO, { devSettingsCategory: aV.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aJ.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rY, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aJ.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sO, { devSettingsCategory: aV.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aJ.fu.USERS, render: () => (0, r.jsx)(cu, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aJ.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(r6, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aJ.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rD, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aJ.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rf, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aJ.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(ln, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aJ.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(nn, {}),
            }),
            aB.A.isDeveloper &&
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
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aJ.fu.DCF, render: () => (0, r.jsx)(nA, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aJ.fu.DCF, render: () => (0, r.jsx)(nm, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aJ.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(rr, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aJ.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(cl, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aJ.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(od, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aJ.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dX, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: aJ.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(op, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aJ.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(m8, {}),
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
                render: () => (0, r.jsx)(iv, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aJ.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(mU, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: aJ.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(mC, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aJ.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(mN, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aJ.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(rl, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aJ.fu.BOOSTING, render: () => (0, r.jsx)(sD, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aJ.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rx, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aJ.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(xG, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aJ.fu.QUESTS,
                render: () => (0, r.jsx)(aR, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aJ.fu.QUESTS,
                render: () => (0, r.jsx)(mg, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aJ.fu.BILLING,
                render: () => (0, r.jsx)(xy, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aJ.fu.QUESTS,
                render: () => (0, r.jsx)(h$, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aJ.fu.USERS,
                render: () => (0, r.jsx)(cM, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aJ.fu.USERS,
                render: () => (0, r.jsx)(l0, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aJ.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(nK, {}),
            }),
            e
        );
    }, []);
}
