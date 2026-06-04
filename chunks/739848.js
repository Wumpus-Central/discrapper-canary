a.d(t, { x: () => xF }), a(321073);
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
    _ = a(555975),
    y = a(274372),
    E = a(372684),
    C = a(877575),
    S = a(871421),
    N = a(227628),
    A = a(468550);
let k = (0, a(353640).v)(() => ({ enabled: !1, pending: null, lastResult: null }));
function I(e) {
    k.setState({ enabled: e });
}
function D(e) {
    k.setState({ pending: e });
}
function T(e) {
    k.setState({ lastResult: e });
}
var R = a(781710),
    O = a(264572).Buffer;
function w() {
    let e = k((e) => e.enabled),
        t = k((e) => e.pending),
        a = k((e) => e.lastResult),
        n = o.useCallback(async (e, t, a, n) => {
            let l = _.Ay.getMediaEngine();
            if (null == l.setClipsPerfMonitoring) return T("setClipsPerfMonitoring unsupported in this build"), null;
            D(n);
            try {
                let n = await l.setClipsPerfMonitoring(e, t, a);
                return I(n.enabled), n;
            } catch (e) {
                return T(`${n} failed: ${e instanceof Error ? e.message : String(e)}`), null;
            } finally {
                D(null);
            }
        }, []),
        l = o.useCallback(
            async (t) => {
                I(t);
                let a = await n(t, !1, !1, t ? "enable" : "disable");
                null != a ? T(`recorder ${a.enabled ? "enabled" : "disabled"}`) : I(e);
            },
            [n, e],
        ),
        s = o.useCallback(async () => {
            let t = await n(e, !0, !1, "save");
            if (null == t) return;
            if ("" === t.html) return void T("save: server returned empty html");
            let a = `clips-perf-${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            try {
                let e = O.from(t.html, "utf8"),
                    n = await b.A.fileManager.saveWithDialog2(e, a);
                if (null != n && !0 === n.canceledByUser) return void T("save: canceled");
                T(`saved ${t.eventCount} events (${t.html.length} bytes)`);
            } catch (e) {
                T(`save failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, [n, e]),
        i = o.useCallback(async () => {
            let t = await n(e, !1, !0, "clear");
            null != t && T(`cleared ${t.eventCount} events`);
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
function M() {
    let e = (0, N.MZ)((e) => e.isOpen),
        t = (0, A.sY)((e) => e.isOpen),
        a = o.useCallback((e) => {
            if (!e) return void (0, A.kF)();
            let t = f.Ay.getVisibleGame()?.id,
                a = y.Ay.getLastClipsSession()?.newClipIds[0],
                n = (null != a ? y.Ay.getClipById(a)?.applicationId : null) ?? y.Ay.getClips()[0]?.applicationId,
                l = t ?? n;
            null != l && (0, A.M8)(l);
        }, []),
        [n, l] = o.useState(E.rb.KILL),
        [s, i] = o.useState(1),
        [h, b] = o.useState(""),
        [_, k] = o.useState("");
    return (0, r.jsx)(x.Ip, {
        children: (0, r.jsxs)(p.l, {
            children: [
                (0, r.jsx)(d.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(u.M, {
                        children: [
                            (0, r.jsx)(m.$, { text: "Manual", onClick: () => C.Ts({ type: E.Gy.MANUAL }) }),
                            (0, r.jsx)(m.$, {
                                text: "Distributed",
                                onClick: () =>
                                    C.Ts({
                                        type: E.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(m.$, {
                                text: "Phrase: Clip",
                                onClick: () => C.Ts({ type: E.Gy.PHRASE, text: "clip" }),
                            }),
                            (0, r.jsx)(m.$, {
                                text: "Yelling",
                                onClick: () => C.Ts({ type: E.Gy.YELLING, userId: "123" }),
                            }),
                            (0, r.jsx)(m.$, {
                                text: "Laughter",
                                onClick: () => C.Ts({ type: E.Gy.LAUGHTER, label: "laughter", confidence: 1 }),
                            }),
                            (0, r.jsx)(m.$, {
                                text: "Shouting",
                                onClick: () => C.Ts({ type: E.Gy.LAUGHTER, label: "shouting", confidence: 1 }),
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
                                    value: n,
                                    onSelectionChange: (e) => l(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: E.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: E.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: E.rb.DEATH },
                                        { id: "assist", label: "Assist", value: E.rb.ASSIST },
                                        { id: "item", label: "Item", value: E.rb.ITEM },
                                        { id: "victory", label: "Victory", value: E.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: E.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: E.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: E.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: E.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(g.l, {
                                    label: "Importance",
                                    value: s,
                                    onSelectionChange: i,
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
                            value: h,
                            onChange: b,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, r.jsx)(v.k, {
                            label: "Description (optional)",
                            value: _,
                            onChange: k,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(m.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                C.Ts({ type: E.Gy.GAME_EVENT, eventType: n, importance: s, title: h, description: _ });
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            text: "stash decider data",
                            onClick: () => {
                                S.A.debugStashDeciderData();
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            text: "re-run ranking",
                            onClick: () => {
                                S.i.debugRerunRanking();
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(d.n, { label: "Clip Metadata Tool", children: (0, r.jsx)(R.A, {}) }),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(w, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsxs)(d.n, {
                    label: "Reminder UI",
                    children: [
                        (0, r.jsx)(c.d, {
                            label: "Clips Quick Bar",
                            description: "Toggle the inline reminder quick bar above the account panel.",
                            checked: e,
                            onChange: (e) => (e ? (0, N.w9)() : (0, N.yj)()),
                        }),
                        (0, r.jsx)(c.d, {
                            label: "Clips Reminder",
                            description:
                                "Force-show the post-session ClipsReminder panel. Uses the running game's id if available, otherwise falls back to the most recent clip's application id.",
                            checked: t,
                            onChange: a,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var L = a(503698),
    P = a.n(L),
    U = a(939249),
    G = a(683071),
    F = a(331322),
    B = a(811893),
    $ = a(534514),
    V = a(17928),
    W = a(538064),
    z = a(265059),
    H = a(902592),
    K = a(869146);
a(323874), a(14289), a(35956);
var Y = a(789645),
    q = a(589158),
    J = a(65593),
    Q = a(377980),
    X = a(581298),
    Z = a(98596),
    ee = a(287809),
    et = a(901139),
    ea = a(641886),
    en = a(780898),
    el = a(652215),
    es = a(527699),
    ei = a(427262);
function er(e) {
    let { nameplate: t } = e,
        a = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
        n = ei.Ay.useName(a) ?? "";
    return (0, r.jsx)(es.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: el.clD.ONLINE,
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
var eo = a(736653),
    ed = a(653523),
    ec = a(809948);
function eu(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, eo.Ay)();
    return (0, r.jsxs)("div", {
        className: ec.N,
        children: [
            (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: ec.Z,
                children: ea.Z6.map((e) => {
                    let l = n !== el.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        ed.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var em = a(808166),
    eh = a(95701),
    ex = a(331884);
function ep(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, ex.i)(),
        l = new eh.cq({ id: "0", type: el.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(em.th, { selected: t, channel: l, user: n, nameplate: a });
}
var eg = a(698638),
    ev = a(877203);
function ej() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, s] = (0, o.useState)(null),
        { node: i } = (0, X.Ay)(Z.k, ""),
        d = (0, et.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, et.DE)(),
        { setImgCache: x } = (0, et.TW)(),
        p = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? s({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : s((t) =>
                          null == t ? { previewToolKey: e, palette: ea.Wj, skuId: "0" } : { ...t, previewToolKey: e },
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
                className: ev.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: ev.gO,
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
                        className: ev.uQ,
                        children: [
                            e && (0, r.jsx)(Q.A, { node: i }),
                            a &&
                                (0, r.jsx)(eu, {
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
                className: ev.iW,
                children: [
                    (0, r.jsx)(eb, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: ev.Uo,
                        children: [
                            (0, r.jsx)(h.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(J.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eg.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    x(t, t, (0, en.nI)(n)), c(t, t, ea.Wj);
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: ev.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(ef, { src: t, onSetStatic: p, removeAsset: v }, t);
                                }),
                            }),
                            (0, r.jsx)(ey, {
                                label: "gradient override",
                                onChange: (e) => g({ name: ea.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(e_, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eb(e) {
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
            className: ev.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: ev.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(eE, { nameplate: t }),
                    (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(eC, { nameplate: t }),
                    (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(eS, { nameplate: t }),
                    (0, r.jsx)("div", { className: ev.Di, onMouseDown: u }),
                ],
            }),
        })
    );
}
function ef(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: ev.xO,
        children: [
            (0, r.jsx)(U.D, {
                onClick: () => n(t),
                className: ev.yV,
                children: (0, r.jsx)(Y.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: ev.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: ev.Lu,
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
        className: ev.Uu,
        children: [
            (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function ey(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: ev.Im,
        children: [
            (0, r.jsx)(h.E, { variant: "text-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: ev.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eE(e) {
    let { nameplate: t } = e,
        a = (0, V.bG)([ee.default], () => ee.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: ev.VH,
        children: (0, r.jsxs)("div", {
            className: ev.H1,
            children: [
                (0, r.jsx)(h.E, { className: ev.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(q.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(h.E, { className: ev.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(q.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(q.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function eC(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ev.VH,
        children: (0, r.jsxs)("div", {
            className: ev.H1,
            children: [
                (0, r.jsx)(h.E, { className: ev.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(ep, { nameplate: t }),
                (0, r.jsx)(h.E, { className: ev.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(ep, { selected: !0, nameplate: t }), (0, r.jsx)(ep, { selected: !0 })],
                }),
            ],
        }),
    });
}
function eS(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ev.VH,
        children: (0, r.jsx)("div", { className: ev.X2, children: (0, r.jsx)(er, { nameplate: t }) }),
    });
}
a(508300);
var eN = a(835245),
    eA = a(157559),
    ek = a(780777),
    eI = a(993408),
    eD = a(579151),
    eT = a(559474),
    eR = a(816866),
    eO = a(87558),
    ew = a(575593),
    eM = a(631903),
    eL = a(224640),
    eP = a(408278),
    eU = a(972213),
    eG = a(43990),
    eF = a(192308),
    eB = a(661531),
    e$ = a(231723),
    eV = a(900686),
    eW = a(986687),
    ez = a(656017),
    eH = a(735438),
    eK = a.n(eH),
    eY = a(219220),
    eq = a(480335);
let eJ = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eH.cloneDeep)(t), [t]),
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
        { layerData: s } = (0, eY.A)({ skuId: "debug", layers: l.effects });
    return (0, r.jsx)(eq.p, { profileEffect: l, layerData: s, skuId: "debug" });
};
var eQ = a(314485),
    eX = a(778765);
let eZ =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    e0 = { [eO.qH.THUMBNAIL]: null, [eO.qH.STATIC]: null, [eO.qH.REDUCED_MOTION]: null },
    e1 = "debug",
    e2 = "reduced-motion-preview-modal",
    e8 = (e) => {
        let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
        return (0, r.jsx)(eL.d, {
            transitionState: t,
            size: "md",
            onClose: a,
            maxHeight: "viewport",
            children: (0, r.jsxs)("div", {
                className: eQ.Xd,
                children: [
                    (0, r.jsx)("div", {
                        className: eQ.y6,
                        children: (0, r.jsx)(eP.K, {
                            "aria-label": "Close",
                            onClick: a,
                            icon: eU.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eQ.rU,
                        children: [
                            (0, r.jsx)(eG.N, {
                                theme: l,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: eZ,
                                        alt: "",
                                        className: P()(eQ.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)("img", { src: n, className: eQ.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    e3 = (e) => {
        let { type: t, frame: a, theme: n, onClear: l } = e,
            s = t === eO.qH.REDUCED_MOTION,
            i = s ? eZ : eX.A,
            o = (0, r.jsx)(eG.N, {
                theme: n,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: i, alt: "", className: P()(eQ.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, r.jsx)("img", { src: a.src, className: P()(eQ.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, r.jsxs)("div", {
            className: eQ.pK,
            children: [
                (0, r.jsx)($.D, { variant: "heading-sm/bold", children: t }),
                s
                    ? (0, r.jsx)(U.D, {
                          className: P()(eQ.zd, eQ.eB),
                          onClick: () => {
                              (0, eF.hasModalOpen)(e2)
                                  ? (0, eF.closeModal)(e2)
                                  : (0, eF.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(e8, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                            ),
                                        { modalKey: e2, onCloseRequest: () => (0, eF.closeModal)(e2) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eQ.zd, children: o }),
                null != a && (0, r.jsx)(m.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
            ],
        });
    },
    e6 = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eR.wu)(),
            n = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [d, c] = o.useState(!1),
            [u, x] = o.useState(!1),
            [p, g] = o.useState(8),
            [v, j] = o.useState([]),
            [b, f] = o.useState(e0),
            _ = o.useRef([]),
            [y, E] = o.useState(t.name),
            C = y.toLowerCase().replace(/\s+/g, "_"),
            S = o.useMemo(
                () => ({
                    type: ew.R.PROFILE_EFFECT,
                    skuId: e1,
                    title: e1,
                    description: e1,
                    accessibilityLabel: e1,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: v,
                    animationType: eM.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [v],
            ),
            N = d ? eB.A.themes.DARKER : eB.A.themes.LIGHT,
            A = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            k = (e, t) => {
                let a = A(t);
                null != a &&
                    (0, eO.Mz)(a, (t) => {
                        f((n) => ({ ...n, [e]: (0, eO.GT)(t, a) }));
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
                                let e = (0, eO.fB)(a.base64);
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
        null == n)
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: eQ.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(ek.A, {
                                  ref: (e) => {
                                      i.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = A(e);
                                      null != t &&
                                          (0, eO.Mz)(t, async (e) => {
                                              let a = await (0, eO.Ay)(e, t, v.length);
                                              j((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(ek.A, {
                                  ref: (e) => {
                                      i.current.thumbnail = e;
                                  },
                                  onChange: (e) => k(eO.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(ek.A, {
                                  ref: (e) => {
                                      i.current.static = e;
                                  },
                                  onChange: (e) => k(eO.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(ek.A, {
                                  ref: (e) => {
                                      i.current.reducedMotion = e;
                                  },
                                  onChange: (e) => k(eO.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: eQ.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: P()(eQ.nM, eQ.uW),
                                  children: [
                                      (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: y,
                                          className: eQ.hF,
                                          onChange: (e) => {
                                              E(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eQ.nM,
                                  children: [
                                      (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: d,
                                          className: eQ.OO,
                                          onChange: () => {
                                              c(!d);
                                          },
                                      }),
                                      (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: u,
                                          className: eQ.OO,
                                          onChange: () => {
                                              x(!u);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eQ.nM,
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
                                  className: P()(eQ.nz, eQ.VH),
                                  style: { borderRadius: p },
                                  children: [
                                      u
                                          ? (0, r.jsx)("div", {
                                                className: eQ.jq,
                                                children: (0, r.jsx)(ez.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: e$.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: eQ.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eG.N, {
                                                theme: N,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: P()(eQ.aM, e),
                                                        children: (0, r.jsx)("img", { src: eX.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: eQ.KJ,
                                              children: (0, r.jsx)(eJ, { profileEffect: S }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      u &&
                                      (0, r.jsxs)("div", {
                                          className: P()(eQ.f5, eQ.VH),
                                          style: { borderRadius: p },
                                          children: [
                                              (0, r.jsx)(eW.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  hideProfileFrame: !0,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(eJ, { profileEffect: S }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: eQ.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: eQ.nM,
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
                                          className: eQ.nM,
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
                                          className: eQ.q6,
                                          children: (0, r.jsx)("div", {
                                              className: eQ.nM,
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
                                          className: P()(eQ.q6, eQ.XA),
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
                                                  className: eQ.nM,
                                                  children: [
                                                      (0, r.jsx)(eV.A, {
                                                          fileContents: () => (0, eO.rs)(v),
                                                          contentType: "text/plain",
                                                          fileName: `${C}_timing_config.txt`,
                                                          children: (0, r.jsx)(m.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eV.A, {
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
                                          className: eQ.uW,
                                          children: [
                                              (0, r.jsx)($.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: eQ.mv,
                                                  children: Object.entries(b).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          e3,
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
                                              className: P()(eQ.uW, eQ.l7),
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
                                  className: P()(eQ.Vg, eQ.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eQ.cD,
                                          children: (0, r.jsx)(m.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  j([]), f(e0);
                                              },
                                          }),
                                      }),
                                      v.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: eQ.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: eQ.D1,
                                                          children: [
                                                              (0, r.jsx)($.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: eQ.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)($.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)($.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: eQ.oq,
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
                                                          className: P()(eQ.Vg, eQ.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eQ.nz,
                                                                  children: [
                                                                      (0, r.jsx)(h.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: eQ.hF,
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
                                                                  className: eQ.nz,
                                                                  children: [
                                                                      (0, r.jsx)(h.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: eQ.hF,
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
                                                          className: P()(eQ.Vg, eQ.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eQ.nz,
                                                                  children: [
                                                                      (0, r.jsx)(h.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: eQ.OO,
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
                                                                  className: eQ.nz,
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
                                                                                  className: eQ.hF,
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
                                                          children: (0, r.jsx)(ek.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = A(e)) &&
                                                                      (0, eO.Mz)(a, (e) => {
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
                                                          className: P()(eQ.nM, eQ._N),
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
    e5 = "Make sure you're only uploading text files!",
    e9 = (e) => {
        let { profileEffect: t, onClick: a } = e,
            { deleteProfileEffect: n } = (0, eR.wu)();
        return (0, r.jsxs)(U.D, {
            className: eQ.B0,
            onClick: a,
            children: [
                (0, r.jsx)("div", { className: eQ.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
                (0, r.jsxs)("div", {
                    className: eQ.eL,
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
function e4() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eR.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, eD.A)(),
        d = o.useMemo(() => (0, eI.Wj)(i), [i]),
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
                if (null == a || !e.type.startsWith("text/")) return (0, eT.Ni)(e5);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eT.Ni)(e5);
                let s = JSON.parse(atob(l));
                (s.skuId = (0, eN.A)()), t(s), (0, eT.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eT.Ni)("Error uploading file. Try again!")
                    : (0, eT.KE)(e.currentTarget.files, p, eT.Ni);
            },
            [p],
        );
    return (0, r.jsxs)("div", {
        className: eQ.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eQ.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: P()(eQ.uW, eQ.nM),
                                    children: [
                                        (0, r.jsx)($.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(m.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await eA.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, eT.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: eQ.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(e9, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: P()(eQ.nM, eQ._N, eQ.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eQ.au,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(ek.A, { ref: s, onChange: g, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({ skuId: (0, eN.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: eQ.uW,
                            children: [
                                (0, r.jsx)($.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(v.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: eQ.xm,
                                    children: x.map((e) =>
                                        (0, r.jsx)(
                                            U.D,
                                            {
                                                className: eQ.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [eO.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eO.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eO.qH.REDUCED_MOTION]:
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
                                                    className: eQ.Hd,
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
            null != n && (0, r.jsx)(e6, { profileEffect: n }),
        ],
    });
}
var e7 = a(935399),
    te = a(462887),
    tt = a(289873),
    ta = a(478016),
    tn = a(565645),
    tl = a(7584),
    ts = a(619499),
    ti = a(207803),
    tr = a(84540),
    to = a(836602),
    td = a(999291),
    tc = a(903209),
    tu = a(841702),
    tm = a(892118),
    th = a(744808),
    tx = a(725287),
    tp = a(626768),
    tg = a(464896);
function tv() {
    let e = (0, eo.Ay)();
    return (0, r.jsxs)("div", {
        className: tx.z3,
        children: [
            (0, r.jsx)("img", { src: (0, te.M)(e) ? tp : tg, alt: "" }),
            (0, r.jsx)(h.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tj() {
    let e = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
        t = (0, td.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, tc.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, tu.Bf)(),
        l = o.useMemo(() => (0, eI.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, V.yK)([to.A], () => [to.A.getPendingChanges(), to.A.showNotice()]),
        d = void 0 === s ? t?.profileFrame : s,
        c = null != d ? a.get(d.skuId) : void 0,
        u = (0, tm.s)(c?.items[0]) ? c.items[0] : void 0;
    return (
        (0, e7.l0)(ti.RE),
        (0, r.jsxs)("div", {
            className: tx.kL,
            children: [
                (0, r.jsxs)($.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(tn.A, {
                            emojiName: tl.Ay.getByName("frame_with_picture")?.surrogates,
                            className: tx.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(tt.y, {}),
                0 === l.length && !n && (0, r.jsx)(tv, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: tx.MK,
                        children: [
                            (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: tx.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(m.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == d ? ta.U : void 0,
                                                disabled: null == d,
                                                onClick: () => (0, tr.p)({ profileFrame: null }),
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
                                                          icon: d?.skuId === e.skuId ? ta.U : void 0,
                                                          disabled: d?.skuId === e.skuId,
                                                          onClick: () => (0, tr.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            i && (0, r.jsx)(ts.A, {}),
                            (0, r.jsxs)("div", {
                                className: tx.VH,
                                children: [
                                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: tx.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: eX.A, alt: "" }),
                                            null != u && (0, r.jsx)(th.A, { frame: u }),
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
var tb = a(702841),
    tf = a(793574),
    t_ = a(590180),
    ty = a(4227),
    tE = a(828614),
    tC = a(61750),
    tS = a(328762);
let tN = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = ty.A.getPurchase;
                return (
                    (ty.A.getPurchase = (e) => void 0),
                    ty.A.emitChange(),
                    a(1),
                    () => {
                        (ty.A.getPurchase = e), ty.A.emitChange();
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tS.Do, children: (0, r.jsx)(tE.A, { ...e }, t) })
        );
    },
    tA = () => {
        let e = (0, tb.bG)([ee.default], () => ee.default.getCurrentUser()),
            t = (0, tb.bG)([t_.A], () => t_.A.categories),
            a = (0, tb.bG)([ty.A], () => ty.A.purchases),
            n = (0, tb.bG)([t_.A], () => t_.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: s, categories: i } = (0, tu.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
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
                    className: tS.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tS.uW,
                            children: [
                                (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, r.jsxs)("div", {
                                    className: tS.qp,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-md/semibold",
                                            className: tS.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(v.k, { value: u, onChange: x, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, r.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                className: tS.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == p &&
                                            (0, r.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                className: tS.kc,
                                                children: "Product not found",
                                            }),
                                        null != p &&
                                            (0, r.jsxs)(h.E, {
                                                variant: "text-sm/normal",
                                                className: tS.xT,
                                                children: ["Found: ", p.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tS.uW,
                            children: [
                                (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != p && null != j
                                    ? (0, r.jsxs)("div", {
                                          className: tS.i1,
                                          children: [
                                              (0, r.jsx)(tN, { skuId: p.skuId }),
                                              (0, r.jsx)(m.$, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != p &&
                                                          null != e &&
                                                          (0, tC.A)({
                                                              product: p,
                                                              analyticsLocations: [tf.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: tS.qf,
                                          children: (0, r.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              className: tS.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
var tk = a(410724);
let tI = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 },
    tD = (e) => {
        let { setTab: t } = e,
            a = (0, V.bG)([K.A], () => K.A.getWindowOpen(el.MLl.DEVTOOLS_POPOUT));
        return (0, r.jsxs)("div", {
            className: tk.Qs,
            children: [
                (0, r.jsx)(U.D, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, r.jsx)("div", {
                        className: P()(tk.vK, tk.Dg),
                        children: (0, r.jsx)(h.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, r.jsx)(U.D, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, r.jsx)("div", {
                        className: P()(tk.vK, tk.st),
                        children: (0, r.jsx)(h.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, r.jsx)(U.D, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, r.jsx)("div", {
                        className: P()(tk.vK, tk.Dg),
                        children: (0, r.jsx)(h.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Frames",
                        }),
                    }),
                }),
                (0, r.jsx)(U.D, {
                    onClick: () => {
                        t(4);
                    },
                    children: (0, r.jsx)("div", {
                        className: P()(tk.vK, tk.IP),
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
                        children: (0, r.jsx)(G.w, {
                            type: "warning",
                            children: (0, r.jsxs)(F.B, {
                                gap: 8,
                                children: [
                                    (0, r.jsx)(h.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, r.jsx)(m.$, {
                                        size: "sm",
                                        icon: B.t,
                                        variant: "secondary",
                                        onClick: H.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    tT = () => {
        let [e, t] = o.useState(() => {
            let e = z.A.lastOpenSubTabId;
            return null != e && e in tI ? tI[e] : 0;
        });
        return (
            o.useEffect(() => {
                null != z.A.lastOpenSubTabId && (0, W.Jt)({ lastOpenSubTabId: null });
            }, []),
            (0, r.jsxs)(x.Ip, {
                className: tk.iE,
                children: [
                    (0, r.jsxs)("div", {
                        className: tk.C$,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                            0 !== e && (0, r.jsx)(m.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                        ],
                    }),
                    (() => {
                        switch (e) {
                            case 1:
                                return (0, r.jsx)(e4, {});
                            case 2:
                                return (0, r.jsx)(ej, {});
                            case 3:
                                return (0, r.jsx)(tj, {});
                            case 4:
                                return (0, r.jsx)(tA, {});
                            default:
                                return (0, r.jsx)(tD, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
var tR = a(681154),
    tO = a(306264),
    tw = a(506774),
    tM = a(228366),
    tL = a(587895),
    tP = a(429913),
    tU = a(475825),
    tG = a(505206);
function tF(e) {
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
        className: tG.CZ,
        children: (0, r.jsx)(tU.OZ, {
            className: n,
            innerClassName: tG.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tG.ZR;
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
                    u = P()(tG.jD, { [tG.wD]: o === i, rowClassName: l });
                return (0, r.jsx)(
                    U.D,
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
var tB = a(409626),
    t$ = a(692969),
    tV = a(760751),
    tW = a(403362),
    tz = a(435738),
    tH = a(99753),
    tK = a(975732),
    tY = a(574520),
    tq = a(808323),
    tJ = a(832384),
    tQ = a(424994),
    tX = a(330837);
function tZ(e) {
    let { id: t } = e,
        a = (0, V.bG)([ee.default], () => ee.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(U.D, {
              className: tX._,
              onClick: function () {
                  (0, tK.openUserProfileModal)({ sourceAnalyticsLocations: [tf.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(h.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function t0() {
    let e = (0, V.bG)([tH.A], () => tH.A.getFeed(tQ.X1.GLOBAL_FEED)),
        t = (0, V.bG)([tH.A], () => tH.A.getFilters()),
        a = (0, V.cf)([tY.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, tY.$)(a.content)] = tY.A.canRenderContent(a.content);
            return t;
        }, [e]),
        n = (0, V.bG)([tz.A], () => tz.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, tq.l)(t, l)) return [];
        let s = a[(0, tY.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: tX.p,
                children: [
                    (0, r.jsx)(tZ, { type: l.author_type, id: l.author_id }),
                    !s && (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, tJ.I5)(l) &&
                        (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var t1 = a(576470),
    t2 = a(693879);
function t8() {
    let e = (0, V.bG)([tH.A], () => tH.A.getFeed(tQ.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, V.cf)(
            [tH.A],
            () => tH.A.getFeedState(tQ.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, V.bG)([tH.A], () => tH.A.getLastFeedFetchDate(tQ.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(h.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(h.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(t1.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(h.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(t2.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var t3 = a(866839);
let t6 = [
    {
        key: "type",
        cellClassName: P()(t3.Hn, t3.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(h.E, { variant: "text-md/semibold", children: tR.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: P()(t3.Hn, t3.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: t3.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(t5, { type: t });
        },
    },
];
function t5(e) {
    let { type: t } = e,
        a = (0, V.bG)([tH.A], () => tH.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(c.d, {
        checked: n,
        onChange: function () {
            n
                ? tM.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tM.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function t9() {
    var e;
    let t,
        a = (0, V.bG)([tH.A], () => tH.A.getFeed(tQ.X1.GLOBAL_FEED)),
        n = (0, V.bG)([tH.A], () => tH.A.getDebugImpressionCappingDisabled()),
        l = (0, V.bG)([tz.A], () => tz.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eK().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, V.bG)([tH.A], () => tH.A.getFeedState(tQ.X1.GLOBAL_FEED)?.loading === !0),
        [d, c] = o.useState(""),
        u = (0, V.bG)(
            [tV.A, tL.A],
            () => (parseInt(d) > 0 ? d : (tV.A.searchGamesByName(d)[0] ?? tL.A.getApplicationByName(d)?.id)),
            [d],
        ),
        p = (0, t$.A)({ applicationId: u, location: "DevToolsContentInventory", source: tB.Ob.DevTools }),
        g = Object.entries(tw.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        j = (0, tP.A)(g).filter(tW.Vq);
    return (0, r.jsx)("div", {
        className: tG.nd,
        children: (0, r.jsxs)(x.Ip, {
            className: t3.Qs,
            children: [
                (0, r.jsxs)(F.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(tF, { columns: t6, data: s }),
                        (0, r.jsx)(t8, {}),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                tM.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: tQ.X1.GLOBAL_FEED,
                                    feature: tO.M.INBOX,
                                });
                            },
                            loading: i,
                        }),
                    ],
                }),
                (0, r.jsxs)(F.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tM.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tM.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tM.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tM.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(t0, {}),
                (0, r.jsxs)(F.B, {
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
                                    { children: (0, r.jsx)(t4, { application: e }) },
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
let t4 = (e) => {
    let { application: t } = e,
        a = (0, t$.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: tB.Ob.DevTools });
    return (0, r.jsx)(U.D, {
        onClick: a,
        children: (0, r.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
var t7 = a(783878),
    ae = a(137177),
    at = a(311043),
    aa = a(569926),
    an = a(282435);
function al(e) {
    return an.Bf.get(e) ?? 0;
}
function as(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, aa.I)(t),
        l = (0, V.bG)([at.A], () => at.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(h.E, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)(F.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(ae.A, { game: a, size: ae.M.SMALL }),
                    (0, r.jsxs)(F.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(h.E, { variant: "text-md/semibold", children: a.name }),
                            (0, r.jsx)(h.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function ai() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, V.bG)([tV.A], () => tV.A.games),
        s = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => al(t.value) - al(e.value)),
            [l],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => al(t.item.value) - al(e.item.value), keys: ["label"] }), []),
        d = o.useCallback((e) => {
            t(e), null != e && n("");
        }, []),
        c = o.useCallback((e) => {
            n(e), e.trim().length > 0 && t(null);
        }, []),
        u = a.trim(),
        x = u.length > 0 ? u : (e ?? void 0),
        p = (0, t$.A)({ gameId: x, location: "DevToolsGameProfile", source: tB.Ob.DevTools });
    return (0, r.jsx)("div", {
        className: tG.nd,
        children: (0, r.jsxs)(F.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(F.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/bold", children: "Game Profile" }),
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)(F.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(t7.Z, {
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
                (0, r.jsxs)(F.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(v.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: c,
                        }),
                        u.length > 0 && (0, r.jsx)(as, { gameId: u }),
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
var ar = a(554146),
    ao = a(594061),
    ad = a(617617),
    ac = a(355898),
    au = a(644103),
    am = a(574560),
    ah = a(994182);
let ax = [
        ar.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        ar.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
        ar.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
    ].map((e) => ({ id: String(e), label: ar.M[e], value: e })),
    ap = { "global-cooldown": "global cooldown", "per-game-cooldown": "per-game cooldown", disabled: "disabled" };
function ag() {
    let [e, t] = o.useState("dismissals"),
        [a, n] = o.useState(ar.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, V.bG)([ad.A], () => ad.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        s = (0, V.bG)([am.A], () => am.A.getAllGameUpsellDismissals(a)),
        i = o.useMemo(() => Object.keys(s ?? {}), [s]),
        d = (0, tP.A)(i),
        [c, u] = o.useState(""),
        [x, p] = o.useState([]);
    o.useEffect(
        () =>
            (0, au.Y)((e) => {
                p((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let b = o.useMemo(() => {
            let e = new Set();
            for (let t of x) for (let a of t.applicationIds) e.add(a);
            return [...e];
        }, [x]),
        f = (0, tP.A)(b),
        _ = o.useMemo(() => Object.fromEntries(b.map((e, t) => [e, f[t]])), [b, f]),
        y =
            l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
                ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
                : "Never";
    return (0, r.jsxs)("div", {
        className: ah.nd,
        children: [
            (0, r.jsxs)("div", {
                className: ah.$H,
                children: [
                    (0, r.jsx)(U.D, {
                        className: P()(ah.V3, { [ah.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(U.D, {
                        className: P()(ah.V3, { [ah.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", x.length > 0 ? `(${x.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: ah.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: ah.uW,
                              children: (0, r.jsx)(g.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: ax,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: ah.uW,
                              children: [
                                  (0, r.jsx)($.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, r.jsxs)(h.E, { variant: "text-sm/normal", children: ["Last dismissed: ", y] }),
                                  (0, r.jsxs)(h.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                                  (0, r.jsx)(m.$, {
                                      variant: "secondary",
                                      text: "Reset Global DCF State",
                                      onClick: () => (0, ao._N)(a),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: ah.uW,
                              children: [
                                  (0, r.jsx)($.D, { variant: "heading-md/bold", children: "Mark as Dismissed" }),
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
                                          (0, ac.M)([c.trim()], a), u("");
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(j.c, {}),
                          (0, r.jsxs)("div", {
                              className: P()(ah.uW, ah.LY),
                              children: [
                                  (0, r.jsxs)($.D, {
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
                                                            className: ah.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: ah.MY,
                                                                    children: [
                                                                        null != i &&
                                                                            (0, r.jsx)("img", {
                                                                                src: i,
                                                                                alt: "",
                                                                                className: ah.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: ah.qi,
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
                                                                            onClick: () => (0, ac.e)(e, a),
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
                                                        for (let e of i) (0, ac.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: ah.Lj,
                      children: (0, r.jsxs)("div", {
                          className: ah.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ah.aq,
                                  children: [
                                      (0, r.jsxs)($.D, {
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
                                                className: ah.Nr,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: ah.O9,
                                                        children: [
                                                            (0, r.jsx)(h.E, {
                                                                variant: "text-xs/semibold",
                                                                children: new Date(e.timestamp).toLocaleTimeString(),
                                                            }),
                                                            e.disabled &&
                                                                (0, r.jsx)("span", {
                                                                    className: ah.t7,
                                                                    children: "(disabled)",
                                                                }),
                                                            (0, r.jsx)(h.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: ar.M[e.dismissibleContent],
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
                                                                  n = a?.getIconURL(20),
                                                                  l = e.eligibleToShow.includes(t),
                                                                  s = e.excludedReasons[t];
                                                              return (0, r.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className: ah.Ss,
                                                                      children: [
                                                                          null != n &&
                                                                              (0, r.jsx)("img", {
                                                                                  src: n,
                                                                                  alt: "",
                                                                                  className: ah.rb,
                                                                              }),
                                                                          (0, r.jsx)("span", {
                                                                              className: ah.Jd,
                                                                              children: a?.name ?? t,
                                                                          }),
                                                                          l
                                                                              ? (0, r.jsx)("span", {
                                                                                    className: ah.OK,
                                                                                    children: "eligible",
                                                                                })
                                                                              : null != s
                                                                                ? (0, r.jsx)("span", {
                                                                                      className: ah.t7,
                                                                                      children: ap[s],
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
var av = a(696986),
    aj = a(47167),
    ab = a(734057),
    af = a(994500),
    a_ = a(310031),
    ay = a(394953),
    aE = a(732421);
let aC = [
        {
            key: "channelName",
            cellClassName: P()(aE.Hn, aE.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: P()(aE.Hn, aE.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    aS = [
        {
            key: "channelName",
            cellClassName: P()(aE.Hn, aE.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: P()(aE.Hn, aE.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: P()(aE.Hn, aE.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function aN() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, ay.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, tb.cf)([a_.A], () => ({
            isLoading: a_.A.isLoading,
            hasLoadedEver: a_.A.hasLoadedEver,
            hasPreloaded: a_.A.hasPreloaded,
            hasMoreToLoad: a_.A.hasMoreToLoad,
            isLoadingComplete: a_.A.isLoadingComplete,
        })),
        o = (0, tb.bG)([a_.A], () => a_.A.currentRequestAnalyticsPayload),
        d = (0, tb.cf)([a_.A], () => a_.A.getChannelInfoMap()),
        u = (0, tb.cf)([ab.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = ab.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        m = (0, tb.cf)([ab.A], () =>
            t.reduce((e, t) => {
                let a = ab.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, tb.bG)([a_.A], () => a_.A.getInboxMessages()),
        p = (0, tb.bG)([a_.A], () => a_.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tG.nd,
        children: (0, r.jsxs)(x.Ip, {
            className: aE.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(c.d, {
                                label: "Nav On Click",
                                checked: !!p,
                                onChange: (e) => {
                                    tM.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(av.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(tF, {
                            columns: aC,
                            data: Object.entries(m).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, aj.m1)(a, ee.default, af.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Store State" }),
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
                        (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(tF, {
                            columns: aS,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, aj.m1)(t, ee.default, af.A) : "",
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
var aA = a(976860),
    ak = a(340124),
    aI = a(988483);
let aD = function () {
    return (0, r.jsxs)("div", {
        className: aI.k,
        children: [
            (0, r.jsx)(h.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(m.$, {
                onClick: () => {
                    (0, ak.Ov)(), (0, aA.pX)(el.BVt.QUEST_HOME);
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
var aT = a(271866),
    aR = a(868511),
    aO = a(147964),
    aw = a(760716),
    aM = a(115093),
    aL = a(11039);
let aP = window.GLOBAL_ENV.RELEASE_CHANNEL === aM.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function aU() {
    let e = (0, aw.i)((e) => e.overrideApplicationId),
        t = (0, aw.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [n, l] = o.useState(aP),
        [s, i] = o.useState(el.FYj),
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
        h = (0, aw.i)((e) => e.showSelfActivity),
        x = (0, aw.i)((e) => e.setShowSelfActivity),
        p = (0, aw.i)((e) => e.recommendationApplicationIds),
        g = (0, aw.i)((e) => e.setRecommendationApplicationIds),
        j = o.useCallback(
            (e) => {
                e ? g(s) : g(null);
            },
            [s, g],
        ),
        b = (0, V.bG)([aO.A], () => null != aO.A.testModeApplicationId),
        f = o.useCallback((e) => {
            e ? (0, eF.openModal)((e) => (0, r.jsx)(aR.A, { ...e })) : aT.cL();
        }, []),
        _ = (0, t$.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: n,
            source: tB.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        y = o.useCallback(
            (e) => {
                _?.(e);
            },
            [_],
        ),
        E = o.useCallback(() => {
            (0, aA.pX)(el.BVt.COLLECTIBLES_SHOP_GAME_SHOP(n));
        }, [n]);
    return (0, r.jsx)("div", {
        className: P()(tG.nd, aL.n),
        children: (0, r.jsxs)("div", {
            className: aL.k,
            children: [
                (0, r.jsx)(v.k, { label: "Application ID", value: n, onChange: u }),
                (0, r.jsx)($.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(c.d, { label: "Override activity application ID", checked: a, onChange: d }),
                (0, r.jsx)(c.d, { label: "Show own voice activity (bypass self check)", checked: h, onChange: x }),
                (0, r.jsx)(c.d, { label: "Enable application test mode", checked: b, onChange: f }),
                (0, r.jsx)(m.$, { text: "Open Game Profile Modal", onClick: y }),
                (0, r.jsx)(m.$, { text: "Navigate to App Game Shop", onClick: E }),
                (0, r.jsx)($.D, { variant: "heading-lg/normal", children: "Wishlists" }),
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
var aG = a(540999),
    aF = a(723702),
    aB = a(865116);
a(670812), a(772958);
var a$ = a(58736);
a(558179), a(21574);
var aV = a(231545),
    aW = a(761929),
    az = a(23599);
function aH(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, aW.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: aW.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: az.Di });
}
function aK(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: az.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(aH, { resizableNode: s, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: P()(az.KZ, a), children: t }),
        ],
    });
}
var aY = a(231643);
a(895017), aY.fu.NONE, aY.fu.NONE;
var aq = a(824552),
    aJ = a(688810),
    aQ = a(975460),
    aX = a(46225),
    aZ = a(487431),
    a0 = a(905552),
    a1 = a(546183),
    a2 = a(134861),
    a8 = a(71393),
    a3 = a(967198),
    a6 = a(157257),
    a5 = a(942370),
    a9 = a(375708),
    a4 = a(311350),
    a7 = a(325126);
function ne() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, aJ.Ay)(tf.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        d = (0, V.bG)([a3.A], () => a3.A.getGuildId()),
        c = (0, V.bG)([a8.A], () => a8.A.getGuild(d)),
        u = c?.gameApplicationIds ?? [],
        x = (0, tP.A)(u).filter((e) => null != e),
        p = (0, V.bG)([f.Ay, a6.A], () => (0, a0.A)(f.Ay, a6.A)),
        g = (0, tP.h)(s),
        b = (0, aQ.g)(g),
        _ = (0, V.yK)(
            [tL.A],
            () => g?.linkedGames?.map((e) => tL.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        y = (0, aX.RD)(g, { allowedFlows: [a5._M.RPC], debug: !0 }),
        E = (0, aX.RD)(g, { allowedFlows: [a5._M.WEB], debug: !0 }),
        C = (0, V.bG)([a2.A], () => null != b && a2.A.isConnected(b.id)),
        S = (0, aX.RD)(g, { debug: !0 }),
        { canDeauthorize: N, deauthorize: A } =
            ((e = S.connectionApp?.id),
            (t = (0, V.bG)([a1.default], () => a1.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aq.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: P()(tG.nd, a7.nd),
        children: [
            (0, r.jsxs)("div", {
                className: a7.kL,
                children: [
                    (0, r.jsx)($.D, { variant: "heading-lg/normal", children: "Guild Official Games" }),
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
                    (0, r.jsx)($.D, { variant: "heading-lg/normal", children: "Application" }),
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
                            _.length > 0
                                ? _.map((e) => ((0, aQ.t)(g)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)("div", {
                className: a7.kL,
                children: [
                    (0, r.jsx)($.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(aZ.VT, {
                        overallStatus: y.debug.isSubscribedToAuthorizeRequest
                            ? aZ.nW.OVERALL_GOOD
                            : C
                              ? aZ.nW.WARN
                              : aZ.nW.OVERALL_BAD,
                        name: a9.intl.string(a4.default.AGLx00),
                        steps: [
                            {
                                status: C ? aZ.nW.GOOD : aZ.nW.BAD,
                                text: a9.intl.string(a4.default.kxF9br),
                                description: C ? null : a9.intl.string(a4.default.PFxxJa),
                                learnMoreLink: C
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: y.debug.isSubscribedToAuthorizeRequest
                                    ? aZ.nW.GOOD
                                    : C
                                      ? aZ.nW.WARN
                                      : aZ.nW.BAD,
                                text: a9.intl.string(a4.default.S94dzs),
                                description:
                                    y.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : a9.intl.string(a4.default.aTULMB),
                                learnMoreLink:
                                    y.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: S.chosenFlow === a5._M.RPC,
                    }),
                    (0, r.jsx)(aZ.VT, {
                        overallStatus: E.debug.hasConnectionEntrypointUrl ? aZ.nW.OVERALL_GOOD : aZ.nW.OVERALL_BAD,
                        name: a9.intl.string(a4.default.K3ObrU),
                        steps: [
                            {
                                status: E.debug.hasConnectionEntrypointUrl ? aZ.nW.GOOD : aZ.nW.BAD,
                                text: a9.intl.string(a4.default["8a7IrV"]),
                                description: E.debug.hasConnectionEntrypointUrl
                                    ? a9.intl.formatToPlainString(a4.default["9iLeL2"], {
                                          url: E.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: S.chosenFlow === a5._M.WEB,
                    }),
                    (0, r.jsx)(aZ.Sy, {
                        status: S.hasAlreadyLinked ? aZ.nW.OVERALL_GOOD : aZ.nW.OVERALL_BAD,
                        text: a9.intl.string(a9.t["Vu/zmQ"]),
                    }),
                    0 === S.debug.validFlows.length &&
                        (0, r.jsx)(h.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: a9.intl.string(a4.default.eg0mNa),
                        }),
                    (0, r.jsx)(m.$, {
                        disabled: !S.canStartAuthorization,
                        onClick: () => S.startAuthorization({ analyticsLocations: l }),
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
                        disabled: !y.canStartAuthorization,
                        onClick: () => y.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, r.jsx)(m.$, {
                        disabled: !E.canStartAuthorization,
                        onClick: () => E.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, r.jsx)(m.$, { disabled: !N, onClick: A, variant: "critical-primary", text: "Deauthorize" }),
                ],
            }),
            g?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(j.c, {}),
                        (0, r.jsxs)("div", {
                            className: a7.kL,
                            children: [
                                (0, r.jsx)($.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
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
var nt = a(427358),
    na = a(465153);
let nn = [
    {
        key: "user",
        cellClassName: na.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: na.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: na.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: na.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function nl() {
    let e = (0, V.yK)([nt.A, ee.default], () =>
        nt.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
            return { user: ee.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tF, { className: tG.nd, columns: nn, rowClassName: na.nM, data: e });
}
var ns = a(139716),
    ni = a(847599),
    nr = a(282621);
function no() {
    return (0, r.jsx)("div", {
        className: P()(tG.nd, nr.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(j.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: nr.h,
                    children: [
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, eF.openModalLazy)(
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
                                ns.A.showAgeVerificationGetStartedModal({ entryPoint: ni.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var nd = a(989349),
    nc = a.n(nd),
    nu = a(862482),
    nm = a(624479),
    nh = a(555704),
    nx = a(285796),
    np = a(241326),
    ng = a(892547),
    nv = a(297413),
    nj = a(379078),
    nb = a(704554),
    nf = a(957565),
    n_ = a(58703),
    ny = a(80703),
    nE = a(495544);
let nC = 0,
    nS = [],
    nN = 0,
    nA = [],
    nk = !1;
class nI extends V.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nE.default, aG.A);
    }
    get loggedEvents() {
        return nS;
    }
    get loggedEventsVersion() {
        return nN;
    }
    get loggedTriggers() {
        return nA;
    }
    get trackTriggers() {
        return nk;
    }
}
let nD = new nI(tM.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        aG.A.isDeveloper &&
            (nS.push({
                key: (nC++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, ny.d)(n) : nE.default.getId(),
                timestamp: new Date(),
            }),
            nN++,
            nS.length > 500 && (nS = nS.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !aG.A.isDeveloper ||
            (nk &&
                (nA = [
                    ...nA,
                    {
                        key: (0, eN.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                nA.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        nk = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (nS = []), nN++, (nA = []);
    },
});
var nT = a(658675);
function nR(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: P()(tG.qo, t), children: a });
}
let nO = (e) => {
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
                (0, r.jsx)("dt", { className: tG.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tG.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(U.D, {
                                  tag: "span",
                                  className: tG.nH,
                                  onClick: () => (0, nf.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(ta.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(nm.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function nw(e) {
    let { value: t } = e;
    return (0, r.jsx)(nT.P, { checked: t });
}
var nM = a(733657);
let nL = [
    {
        key: "event",
        cellClassName: nM.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: nM.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function nP(e) {
    let { children: t } = e;
    return (0, r.jsx)(x.Ip, { className: nM._D, children: (0, r.jsx)("dl", { children: t }) });
}
function nU(e) {
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
            className: nM.fY,
            children: [
                (0, r.jsx)("dt", { className: nM.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(U.D, {
                    tag: "span",
                    className: nM.nH,
                    onClick: () => (0, nf.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(ta.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(nm.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let nG = new Set(["client_performance_cpu", "client_performance_memory"]),
    nF = [
        {
            id: "details",
            name: "Details",
            group: aY.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = ee.default.getUser(l),
                    d = nc()(n);
                return (0, r.jsxs)("div", {
                    className: nM.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(a$.Ay, {
                            className: P()(tG.jr, nM.nZ),
                            children: [
                                (0, r.jsx)(a$.Ay.Icon, { icon: nh.U, tooltip: t }),
                                (0, r.jsxs)(a$.Ay.Title, {
                                    wrapperClassName: nM.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(U.D, {
                                            tag: "span",
                                            className: nM.KE,
                                            onClick: () => (0, nf.C)(t),
                                            children: (0, r.jsx)(nm.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(a$.Ay.Icon, {
                                    icon: nm.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nf.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(a$.Ay.Icon, { icon: nx.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(nR, {
                            className: nM.ZK,
                            children: [
                                (0, r.jsx)(nO, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, n_.i$)(d, "LLLL"),
                                        children: ["(", nc().locale(), ") ", (0, n_.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nO, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(nv.A, { user: o }),
                                    }),
                                (0, r.jsx)(nO, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(nP, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = nG.has(a)
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
                                                nU,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nM.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    nU,
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
    nB = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(nB)
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
    n$ = {
        searchType: nj.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function nV() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, V.bG)([nD], () => nD.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(nB)),
        [i, d] = o.useState(nD.loggedEvents),
        c = o.useCallback((e) => {
            d(e);
        }, []);
    (0, nb.RT)(t, nD.loggedEvents, c, n$, [n]);
    let u = i.filter((e) => {
            for (let t of l) if (nB[t].filter(e)) return !0;
            return !1;
        }),
        [m, h] = o.useState(void 0),
        x = u.find((e) => e.key === m),
        { TabBar: p, renderSelectedTab: g } = (0, aY.Ay)({ tabs: nF }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: P()(tG.nd, nM.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nM.rh,
                children: [
                    (0, r.jsx)(nu.$n, {
                        className: nM.Q$,
                        look: nu.$n.Looks.BLANK,
                        size: nu.$n.Sizes.ICON,
                        onClick: W.eY,
                        children: (0, r.jsx)("span", {
                            title: a9.intl.string(a9.t.VkKicb),
                            children: (0, r.jsx)(np.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": a9.intl.string(a9.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nM.Bi }),
                    (0, r.jsx)("div", {
                        className: nM.uW,
                        children: Object.entries(nB).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                U.D,
                                {
                                    className: P()(nM.pb, l.includes(t) && nM.bx),
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
                className: nM.rh,
                children: (0, r.jsx)(ng.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tF, { columns: nL, data: u, selectedRowKey: m, onClickRow: (e) => h(e.key) }),
            null != x &&
                (0, r.jsxs)(aK, {
                    className: nM.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(p, {}), g({ loggedEvent: x, onClose: () => h(void 0), filteredEvents: u })],
                }),
        ],
    });
}
var nW = a(382483),
    nz = a(385113),
    nH = a(315117);
function nK(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(F.B, {
        gap: 8,
        padding: 8,
        className: nH.lt,
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
                          F.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: nH.YL,
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
function nY(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(F.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? nH.FM : nH.gt,
        children: [
            (0, r.jsx)(U.D, {
                className: nH.Av,
                onClick: n,
                children: (0, r.jsxs)(F.B, {
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
                onClick: () => (0, nW.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function nq() {
    let e = (0, V.bG)([nz.A], () => nz.A.getFeaturedFetchState());
    return (0, r.jsxs)(F.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(F.B, {
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
                onClick: () => (0, nW.Wq)({ force: !0 }),
            }),
        ],
    });
}
function nJ() {
    let e = (0, V.bG)([nz.A], () => nz.A.getDeveloperFetchState());
    return (0, r.jsxs)(F.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(F.B, {
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
                onClick: () => (0, nW.i$)({ force: !0 }),
            }),
        ],
    });
}
function nQ() {
    let [e, t] = o.useState(""),
        a = (0, V.bG)([nz.A], () => (e.length > 0 ? nz.A.getFetchState(e) : null)),
        n = (0, V.bG)([nz.A], () => (e.length > 0 ? nz.A.getConfigs(e) : null));
    return (0, r.jsxs)(F.B, {
        gap: 8,
        children: [
            (0, r.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(v.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(m.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, nW.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(h.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(F.B, { gap: 4, children: n.map((e) => (0, r.jsx)(nK, { config: e }, e.config_id)) }),
        ],
    });
}
function nX(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, V.bG)([nz.A], () => nz.A.getFeaturedFetchState());
    return (0, r.jsxs)(F.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(h.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === nz.e.FETCHING &&
                (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    nY,
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
function nZ(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)(F.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(nK, { config: t }),
                ],
            }),
        ],
    });
}
function n0() {
    let [e, t] = o.useState(null),
        a = Object.values((0, V.bG)([nz.A], () => nz.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)(F.B, {
            gap: 16,
            padding: 8,
            className: nH.zr,
            children: [
                (0, r.jsx)($.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(nq, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(nJ, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(nQ, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(nX, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(nZ, { config: n }),
            ],
        }),
    });
}
var n1 = a(636537),
    n2 = a(153488),
    n8 = a(927813);
let n3 = 12 * n8.A.Millis.HOUR,
    n6 = new Map(),
    n5 = !1,
    n9 = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    n4 = { ...n9 };
function n7() {
    n6 = new Map(n4.channelAffinities.map((e) => [e.channelId, e]));
}
class le extends V.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((n4.channelAffinities = e.channelAffinities), (n4.lastFetched = e.lastFetched), n7());
    }
    shouldFetch() {
        if (!n5) return Date.now() - n4.lastFetched > n3;
    }
    isFetching() {
        return n5;
    }
    getChannelAffinities() {
        return n4.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return n6;
    }
    getChannelAffinity(e) {
        return n6.get(e);
    }
    compare(e, t) {
        return (n6.get(t)?.score ?? 0) - (n6.get(e)?.score ?? 0);
    }
    getState() {
        return n4;
    }
}
let lt = new le(tM.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        n5 = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (n4.lastFetched = Date.now()), (n5 = !1), (n4.channelAffinities = t), n7();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        n5 = !1;
    },
    LOGOUT: function () {
        (n4 = { ...n9 }), (n6 = new Map()), (n5 = !1);
    },
});
var la = a(907360);
let ln = [
    {
        key: "channel",
        cellClassName: la._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: la.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function ll() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            lt.shouldFetch() && n2.A.hasConsented(el.YAq.PERSONALIZATION)
                ? (tM.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  n1.Bo.get({
                      url: el.Rsh.CHANNEL_AFFINITIES_V2,
                      retries: 3 * !!e,
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }).then(
                      (e) => {
                          let { body: t } = e;
                          tM.h.dispatch({
                              type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
                              affineChannels: t.channel_affinities.map((e) => ({
                                  channelId: e.channel_id,
                                  score: e.score ?? 0,
                              })),
                          });
                      },
                      () => {
                          tM.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
                      },
                  ))
                : Promise.resolve();
        })();
    }, []);
    let e = (0, V.yK)([lt, ab.A], () =>
        lt
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: ab.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tF, { className: tG.nd, columns: ln, rowClassName: la.nM, data: e });
}
function ls() {
    return (0, r.jsxs)(h.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var li = a(105565),
    lr = a(558845),
    lo = a(193337);
let ld = (e) => {
        switch (e) {
            case li.r.DC_DISMISSED:
                return "DISMISS:";
            case li.r.DC_SHOWN:
                return "SHOW:";
            case li.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    lc = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${ar.M[a]}`;
            },
        },
    ],
    lu = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${ar.M[t]}`;
            },
        },
    ];
function lm() {
    let e = (0, V.bG)([li.A], () => li.A.getDCFEvents()),
        t = (0, lr.Ay)((e) => e.candidates),
        a = (0, lr.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? nc()(a).fromNow() : "n/a",
        l = (0, lr.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: ld(t) + a.toString(), event: ld(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: lo.KE,
        children: [
            (0, r.jsxs)("div", { className: lo.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: lo.pq, children: ["Last winner: ", null != l ? ar.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: lo.uI,
                children: (0, r.jsx)(tF, { className: lo.Th, columns: lu, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tF, { columns: lc, data: s }),
        ],
    });
}
var lh = a(689175),
    lx = a(541689),
    lp = a(199773);
function lg() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(lv());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tw.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [lv(), e];
}
function lv() {
    return tw.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var lj = a(662546),
    lb = a(643278),
    lf = a(256787),
    l_ = a(20439);
let ly = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = ar.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, l_.A)(l),
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
            (0, r.jsxs)(F.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eP.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? lj.O : lb.s,
                        onClick: h,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(c.d, {
                        label: `${a.toLowerCase()} (${ar.M[a]})`,
                        description: (0, lf.Zm)(l)
                            ? (function (e) {
                                  let t = ad.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
function lE(e) {
    let { items: t, onChange: a } = e,
        [n, l] = lg(),
        s = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)(F.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(ly, { content: e, onChange: s }, e)),
    });
}
function lC(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lr.Ay)((e) => e.recentlyShown),
        [n, l] = lg(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(ar.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(d.n, { label: "Recent Overrides", children: (0, r.jsx)(lE, { items: s }) });
}
function lS(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lr.Ay)((e) => e.recentlyShown)
            .map((e) => ar.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(d.n, { label: "Recently Shown", children: (0, r.jsx)(lE, { items: a }) });
}
var lN = a(268571);
function lA() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, V.cf)([lp.A], () => ({
            dailyCapReached: lp.A.hasUserHitDCCap(),
            dailyCapOverridden: lp.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lp.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [s, i] = o.useState(20),
        u = o.useMemo(
            () =>
                Object.keys(ar.M)
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
    return (0, r.jsx)(lh.Ch, {
        onScroll: x,
        children: (0, r.jsxs)("div", {
            className: lN.KE,
            children: [
                (0, r.jsxs)(d.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(F.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, lx.Ab)(),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, ao.nT)(),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, ao.D1)(),
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
                            onChange: lx.SE,
                        }),
                        (0, r.jsx)(c.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: lx.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(lS, {}),
                (0, r.jsx)(lC, {}),
                (0, r.jsxs)(d.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(ng.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(lE, { items: u.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lk = a(276086),
    lI = a(154323),
    lD = a(155248);
function lT() {
    let e = (0, V.bG)([lI.A], () => lI.A.allWithDescriptions(), [], V.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                c.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lk.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(j.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lD.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lD.x6,
                children: (0, r.jsx)(m.$, { variant: "primary", text: "Clear all", onClick: lk.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lD.vu, children: t }),
        ],
    });
}
var lR = a(881436);
function lO() {
    let e = (0, V.bG)([tV.A], () => tV.A.detectableGamesEtag),
        t = (0, V.bG)([tV.A], () => tV.A.lastFetched),
        a = (0, V.bG)([tV.A], () => tV.A.games.length);
    return (0, r.jsxs)(F.B, {
        gap: 4,
        children: [
            (0, r.jsx)($.D, { variant: "heading-sm/bold", children: "Cache Status" }),
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
function lw(e) {
    let { game: t } = e;
    return (0, r.jsxs)(F.B, {
        gap: 12,
        className: lR.f_,
        children: [
            (0, r.jsxs)(F.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                children: [
                    (0, r.jsx)(ae.A, { game: t, size: ae.M.LARGE }),
                    (0, r.jsxs)(F.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-lg/bold", children: t.name }),
                            (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: t.id }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: lR.aY, children: JSON.stringify(t, null, 2) }),
        ],
    });
}
function lM() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, V.bG)([tV.A], () => tV.A.games),
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
        m = (0, V.bG)([tV.A], () => (null != u ? (tV.A.getDetectableGame(u) ?? null) : null), [u]);
    return (0, r.jsx)("div", {
        className: P()(tG.nd, lR.kL),
        children: (0, r.jsxs)(F.B, {
            gap: 16,
            padding: 12,
            className: lR.rf,
            children: [
                (0, r.jsxs)(F.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/bold", children: "Detectable Cache" }),
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Inspect the local detectable games cache. Use this to verify whether a SKU or executable change has propagated to your client.",
                        }),
                    ],
                }),
                (0, r.jsx)(lO, {}),
                (0, r.jsxs)(F.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(t7.Z, {
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
                (0, r.jsxs)(F.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-sm/bold", children: "Game ID" }),
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
                                ? (0, r.jsx)(lw, { game: m })
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
var lL = a(691540),
    lP = a(97483),
    lU = a(123292),
    lG = a(780907),
    lF = a(56562);
let lB = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function l$(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, aa.I)(t.id);
    return (0, r.jsxs)(F.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(ae.A, { game: n }),
            (0, r.jsxs)(F.B, {
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
function lV() {
    let e = (0, V.bG)([f.Ay], () => f.Ay.getRunningGames()),
        t = (0, V.bG)([f.Ay], () => f.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                lB.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, lG.xt)(null);
            let t = tV.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, lL.P0)({
                    id: "devtools-set-debug-game-error",
                    type: lP.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, lG.xt)({
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
    return (0, r.jsxs)(F.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(F.B, {
                gap: 8,
                children: [
                    (0, r.jsx)($.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(l$, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)(F.B, {
                gap: 8,
                children: [
                    (0, r.jsx)($.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(v.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(t7.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            s(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(F.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(lU.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(m.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lW = a(240248),
    lz = a(769195);
function lH() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), n(null), s(null);
                let e = await n1.Bo.put({
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
    return (0, r.jsxs)(F.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(m.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lW.uJ)(a) && (0, r.jsx)(h.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lW.uJ)(l) && (0, r.jsx)(h.E, { variant: "text-md/normal", color: "status-danger", children: l }),
        ],
    });
}
function lK() {
    return (0, r.jsx)("div", {
        className: lz.n,
        children: (0, r.jsx)(F.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lH, {}) }),
    });
}
a(172879);
var lY = a(985623),
    lq = a.n(lY),
    lJ = a(990078),
    lQ = a(874804),
    lX = a(782134),
    lZ = a(113494),
    l0 = a(603349),
    l1 = a(155466);
function l2(e) {
    return parseFloat(e.toFixed(3));
}
let l8 = [
    {
        key: "store",
        cellClassName: l1.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: l1.i7,
        render(e) {
            let { trace: t } = e;
            return `${l2(t.time)} ms`;
        },
    },
];
function l3(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(x.Ip, { children: (0, r.jsx)(tF, { columns: l8, data: a }) });
}
let l6 = [
    {
        id: "action",
        name: "Action",
        group: aY.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = nc()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(nR, {
                        className: l1.mP,
                        children: [
                            (0, r.jsx)(nO, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, n_.i$)(a, "LLLL"),
                                    children: (0, n_.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nO, { name: "Total Time", children: [l2(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(x.Ip, { className: l1.Dx, children: (0, r.jsx)(aV.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: aY.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(l3, { actionLog: t });
        },
    },
];
function l5(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...l6,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(l0.A, { className: l1.ik }), "Error"],
                              }),
                              group: aY.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: P()(l1.u4, tG.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tG.R5,
                                                  children: (0, r.jsx)(nu.$n, {
                                                      className: tG.Q$,
                                                      size: nu.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(x.Ip, {
                                              className: l1.Dx,
                                              children: (0, r.jsx)(aV.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : l6,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, aY.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(aK, {
        className: l1.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(a$.Ay, {
                className: P()(tG.jr, l1.nZ),
                children: [
                    (0, r.jsx)(a$.Ay.Icon, { icon: lQ.K, tooltip: t.name }),
                    (0, r.jsx)(a$.Ay.Title, {
                        wrapperClassName: P()(tG.qd, tG.ZE),
                        className: tG.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(a$.Ay.Icon, {
                        icon: nm.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return (t[a] = ((n = e[a]), el.AKn.test(n) ? "REDACTED" : n)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, nf.C)(a, () =>
                                (0, lL.P0)({
                                    id: "copy-action-log-name",
                                    type: lP.Ck.SUCCESS,
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
let l9 = [
        {
            key: "action",
            cellClassName: l1.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(l0.A, { className: l1.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: l1.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${l2(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: l1.i7,
            render(e) {
                let { actionLog: t } = e;
                return nc()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    l4 = {
        searchType: nj.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function l7() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lq()(() => {
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
        })(tM.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [s, i] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nb.RT)(t, u ? s : l, p, l4);
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
        className: P()(tG.nd, l1.nd),
        children: [
            (0, r.jsxs)("div", {
                className: l1.KE,
                children: [
                    (0, r.jsx)(lJ.m, {
                        text: b,
                        children: (0, r.jsx)(eP.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? lX.u : lZ.E,
                            "aria-label": b,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(ng.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tF, {
                columns: l9,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(l5, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var se = a(936388),
    st = a(132369);
function sa() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: P()(tG.nd, st.n),
        children: (0, r.jsx)(m.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: se.A.clearUploadedKeyVersions,
        }),
    });
}
var sn = a(825484),
    sl = a(37962),
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
        u = (0, V.bG)([ss.A], () => (null === e ? null : (ss.A.getFeedbackConfig(si.MW[e]) ?? sl.u[si.MW[e]]))),
        x = Object.entries(si.MW),
        p = x.slice(x.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        b = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: sr.kL,
        children: (0, r.jsxs)(F.B, {
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
                        (0, r.jsxs)(F.B, {
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
                (0, r.jsxs)(sn.e, {
                    children: [
                        (0, r.jsx)(m.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != u &&
                                    tM.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: u.feedbackType })
                                ),
                            disabled: !b,
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != u &&
                                    tM.h.dispatch({
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
            await n1.Bo.get({
                url: el.Rsh.ENTITLEMENTS_FOR_APPLICATION(sx.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => sh.A.createFromServer(e)),
    sg = async (e) => {
        await n1.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    sv = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await n1.Bo.del({ url: t, rejectWithError: !0 });
    },
    sj = async () => {
        await n1.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
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
    s_ = a(214868);
let sy = {
        [el.GD.QUEST_REWARD]: "Quest Reward",
        [el.GD.DEVELOPER_GIFT]: "Developer Gift",
        [el.GD.INVOICE]: "Invoice",
        [el.GD.REVERSE_TRIAL]: "Reverse Trial",
        [el.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [el.GD.SUBSCRIPTION]: "Subscription",
        [el.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    sE = (e) => {
        let t,
            { entitlement: a, active: n, onDelete: l } = e,
            s = (e) => (null != e ? (0, n_.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: P()(sf.Nr, n ? s_.C1 : ""),
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
                        null != (t = a.sourceType) && t in sy ? sy[t] : `Unknown source type ${t}`,
                    ],
                }),
                n &&
                    null != l &&
                    (0, r.jsx)(nu.$n, {
                        className: sf.RW,
                        size: nu.$n.Sizes.TINY,
                        color: nu.$n.Colors.RED,
                        look: nu.$n.Looks.OUTLINED,
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
            s(j.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === el.zF_.FRACTIONAL_REDEMPTION)),
                d(j.filter((e) => Object.values(sc.j).includes(e.skuId) && null == e.startsAt));
        }, [j]),
        (0, r.jsx)(x.Ip, {
            className: tG.nd,
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
                            (0, r.jsxs)(U.D, {
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
                        className: P()([sf.uW, s_.Uo]),
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
                                            (0, r.jsx)(nu.$n, {
                                                disabled: b,
                                                size: nu.$n.Sizes.TINY,
                                                color: nu.$n.Colors.PRIMARY,
                                                look: nu.$n.Looks.OUTLINED,
                                                onClick: () => v(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(nu.$n, {
                                                disabled: b,
                                                size: nu.$n.Sizes.TINY,
                                                color: nu.$n.Colors.RED,
                                                look: nu.$n.Looks.OUTLINED,
                                                onClick: () => p(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(nu.$n, {
                                                disabled: b,
                                                look: nu.$n.Looks.BLANK,
                                                size: nu.$n.Sizes.ICON,
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
    let e = (0, V.bG)([a3.A], () => a3.A.getGuildId()),
        t = (0, V.bG)([a8.A], () => a8.A.getGuild(e)?.name),
        a = (0, V.bG)([sk.A], () => sk.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    tM.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
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
                tM.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(x.Ip, {
              className: sI.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sI.uW,
                      children: (0, r.jsx)($.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sI.uW,
                      children: [
                          (0, r.jsx)(h.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
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
    let a = "boolean" == typeof t ? t : !aB.Ay.get(e);
    tM.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sR = a(460281);
function sO(e) {
    let { devSettingsCategory: t } = e,
        a = (0, V.bG)([aB.Ay], () => aB.Ay.allByCategory(t), [t], V.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(c.d, { label: n, description: t, checked: a, onChange: (e) => sT(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: P()(tG.nd, sR.n), children: n });
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
    s3 = a(889227),
    s6 = a(499785),
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
    null == s4.users && (s4.users = new Map()), s4.users.set(e.id, new s3.A(e));
}
class ie extends V.Ay.PersistedStore {
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
let it = new ie(tM.h, {
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
    return await s6.A.get({
        url: el.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: s1.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void s8.A.showFailedToast(ia.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            tM.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: s9.fromServer(l).setPassword(t),
                users: s.map((e) => new s3.A(e)),
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
            [a, n] = o.useState(""),
            [l, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (l) => {
                        l.preventDefault(), s(!0);
                        try {
                            await il(e, a), t(""), n("");
                        } finally {
                            s(!1);
                        }
                    },
                    children: (0, r.jsxs)(F.B, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(F.B, {
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
                            (0, r.jsxs)(F.B, {
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
    ic = (e) => {
        let { pool: t } = e,
            { id: a, summary: n } = t,
            l = it.getUsersForPool(a),
            s = (0, V.bG)([nE.default], () => nE.default.getId()),
            i = ir[Number(a) % ir.length],
            d = io[Number(a) % io.length],
            c = o.useCallback(() => {
                tM.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)(F.B, {
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
                title: n,
                className: ii.JC,
                subtitle: `${l.length} users`,
                children: (0, r.jsxs)(F.B, {
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
                                            U.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(),
                                                        (function (e, t) {
                                                            let a = it.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let n = it.getPool(e)?.password;
                                                            if (null == n) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            s2.A.login({
                                                                login: a.email,
                                                                password: n,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (s8.A.showFailedToast(ia.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: P()(ii.vk, { [ii.Pe]: s === e.id }),
                                                children: (0, r.jsxs)(
                                                    F.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, r.jsxs)(F.B, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: P()({ [ii.WP]: s === e.id }),
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
                                icon: np.u,
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
    let e = (0, V.yK)([it], () => it.getPools() ?? []);
    return (0, r.jsxs)(F.B, {
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
    let e = (0, V.bG)([ix.Ay], () => ix.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, V.bG)([ix.Ay], () => ix.Ay.getDevToolCurrentDate()),
        a = (0, V.bG)([ix.Ay], () => ix.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        n = (0, V.bG)([ix.Ay], () => ix.Ay.getMessageGiftIntentLastShownMap()),
        l = (0, V.bG)([ix.Ay], () => ix.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, V.bG)([ix.Ay], () => ix.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, V.bG)([ix.Ay], () => ix.Ay.getProfilePopoutGiftIntentsDismissMap()),
        o = (0, V.bG)([ad.A], () => {
            let e =
                ad.A.settings.userContent?.recurringDismissibleContentStates[ar.M.GIFT_INTENT_MESSAGE]
                    ?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        d = (e) => {
            tM.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        c = (e) => {
            let t = nt.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: ip.l$,
            children: [
                (0, r.jsx)(h.E, { className: ip.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: ip.Pm,
                    children: (0, r.jsxs)(F.B, {
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
                                    tM.h.dispatch({ type: "DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES" });
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
                        children: (0, r.jsxs)(F.B, {
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
                                    (0, r.jsxs)(F.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(h.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            l.map((e) => {
                                                let t = ee.default.getUser(e),
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
                                    (0, r.jsxs)(F.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(h.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            s.map((e) => {
                                                let t = ee.default.getUser(e),
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
                    children: (0, r.jsxs)(F.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(im.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? nc()(t) : void 0,
                                onSelect: (e) => {
                                    let t = nc()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    tM.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    tM.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ip.Pm,
                    children: (0, r.jsxs)(F.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(F.B, {
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
                                            (0, ao._N)(ar.M.GIFT_INTENT_MESSAGE);
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
                    children: (0, r.jsxs)(F.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(F.B, {
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
                                            tM.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(n).length > 0 &&
                                (0, r.jsxs)(F.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(n).map((e) => {
                                            let [t, a] = e,
                                                n = ee.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                h.E,
                                                { variant: "text-xs/normal", children: [l, ": ", ig(a)] },
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
                    children: (0, r.jsxs)(F.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(F.B, {
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
                                            tM.h.dispatch({
                                                type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            a.length > 0 &&
                                (0, r.jsxs)(F.B, {
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
                                tM.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: ip.Pm,
                    children: (0, r.jsxs)(F.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(F.B, {
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
                                            tM.h.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(i).length > 0 &&
                                (0, r.jsxs)(F.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(i).map((e) => {
                                            let [t, a] = e,
                                                n = ee.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                h.E,
                                                { variant: "text-xs/normal", children: [l, ": ", ig(a)] },
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
        { label: "Light", value: el.NJ8.LIGHT, id: el.NJ8.LIGHT },
        { label: "Dark", value: el.NJ8.DARK, id: el.NJ8.DARK },
        { label: "Darker", value: el.NJ8.DARKER, id: el.NJ8.DARKER },
        { label: "Midnight", value: el.NJ8.MIDNIGHT, id: el.NJ8.MIDNIGHT },
    ],
    iP = { [el.NJ8.MIDNIGHT]: el.NJ8.DARKER, [el.NJ8.DARKER]: el.NJ8.DARK, [el.NJ8.LIGHT]: el.NJ8.DARK },
    iU = { [el.NJ8.LIGHT]: "light", [el.NJ8.DARK]: "ash", [el.NJ8.DARKER]: "dark", [el.NJ8.MIDNIGHT]: "onyx" },
    iG = [
        { id: "friends", icon: iy.$, text: "Friends" },
        { id: "nitro", icon: iE.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: iC.U, text: "Shop", useCustomGradient: !0 },
    ],
    iF = iS.map((e) => ({ label: e, value: e, id: e })),
    iB = Object.fromEntries(
        iS.map((e) => [
            e,
            Object.keys(eB.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eB.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eB.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eB.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: iN.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var i$ = a(306327);
function iV(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function iW(e, t) {
    let [a, n, l, s] = eB.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function iz(e, t) {
    let a = eB.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iH(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(F.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(F.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(eP.K, {
                        icon: nm.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
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
                    let n;
                    return (
                        (n = iL
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = iU[s],
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
    return (0, r.jsxs)(F.B, {
        gap: 16,
        children: [
            (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            ik.map((e, t) => (0, r.jsx)(iH, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iY(e, t, a) {
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
    return new i$.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function iq(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = eB.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        l = 1 / 0,
        s = (e) => {
            e < l && (l = e);
        };
    for (let a of n) s(e.contrast(iY(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(iY(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, n, e, n[a].position, n[a + 1].position);
        s(l);
    }
    return Math.round(100 * l) / 100;
}
function iJ(e) {
    let [t, a, n] = eB.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = eB.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eB.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new i$.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
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
        [el.NJ8.LIGHT]: iQ(),
        [el.NJ8.DARK]: { colors: [...iR], scales: [...iO], opacities: [...iw] },
        [el.NJ8.DARKER]: iQ(),
        [el.NJ8.MIDNIGHT]: iQ(),
    };
}
function iZ() {
    let e = (0, ij.G9)(),
        [t, a] = o.useState(el.NJ8.DARK),
        [n, l] = (0, i_.V)("DevToolsGradientContrastPanel_themeStops", iX()),
        s = n ?? iX(),
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
                        (0, r.jsxs)(F.B, {
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
                                              (0, r.jsx)(lU.Q, {
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
                    iL.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
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
                                    a.push(i ?? iR[s]), n.push(r ?? iO[s]), l.push(o ?? iw[s]);
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(s, t),
                        ];
                    }),
                ),
            [s],
        ),
        _ = f[t],
        y = o.useCallback(
            (e) => {
                l({ ...s, [t]: e(s[t]) });
            },
            [t, l, s],
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
            return ik.map((a, n) =>
                iB[_.scales[n]].map((a) => {
                    let l = iq(e, t, iV(C, n, { ...C[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [C, E, _.scales]),
        N = o.useMemo(() => {
            try {
                return iL.map((e) => {
                    let { value: t, label: a } = e,
                        n = f[t],
                        l = [];
                    for (let e = 0; e < iI; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: iA[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = iJ(t),
                                s = iq(n, l, e),
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
                                        let s = iq(n, l, iV(e, t, { ...e[t], color: o }));
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
        className: iN.XG,
        children: (0, r.jsxs)(F.B, {
            gap: 24,
            padding: 8,
            className: iN.zr,
            children: [
                (0, r.jsx)($.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(F.B, {
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
                (0, r.jsx)(t7.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: iL,
                }),
                (0, r.jsxs)(F.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: iN.G9,
                            children: ik.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(F.B, {
                                                gap: 0,
                                                className: iN.hi,
                                                children: [
                                                    (0, r.jsx)(h.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lU.Q, {
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
                                            (0, r.jsx)(t7.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: _.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = iB[e][0]?.value;
                                                    y((n) => ({
                                                        ...n,
                                                        scales: iV(n.scales, t, e),
                                                        colors: null != a ? iV(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: iF,
                                            }),
                                            (0, r.jsx)(t7.Z, {
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
                                                                n = 1 / 0;
                                                            for (let l of iS)
                                                                for (let s of iB[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eB.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new i$.A("srgb", [
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
                (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(ij.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eG.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(F.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: iN.$8,
                                        style: { background: eB.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iG.map((e, t) =>
                                            (0, r.jsx)(
                                                em.z9,
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
                    (0, r.jsxs)(F.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Results" }),
                            N.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          F.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(h.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(G.w, {
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
                                                      (0, r.jsxs)(F.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(h.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(h.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      ik[n.suggestion.stopIndex],
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
                (0, r.jsx)(iK, { allResolvedStops: f }),
            ],
        }),
    });
}
var i0 = a(820739),
    i1 = a(230135),
    i2 = a(45780),
    i8 = a(868652),
    i3 = a(859241);
let i6 = [
        ar.M.GUILD_POWERUP_PERKS_COACHMARK,
        ar.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        ar.M.GUILD_POWERUP_NOTIFICATION,
        ar.M.GUILD_TAG_AVAILABLE_COACHMARK,
        ar.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    i5 = [
        ar.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        ar.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        ar.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        ar.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        ar.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    i9 = [ar.V.ADOPT_CLAN_IDENTITY_NOTICE],
    i4 = [
        ar.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        ar.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        ar.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function i7(e) {
    switch (e) {
        case ar.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case ar.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case ar.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case ar.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case ar.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case ar.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var re = a(861671);
async function rt(e, t, a) {
    await n1.Bo.patch({
        url: el.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : nc()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, i0.VU)(e),
        (0, i8.Xd)(e, !0);
}
async function ra(e) {
    await n1.Bo.post({ url: el.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function rn() {
    let e = (0, V.bG)([a3.A], () => a3.A.getGuildId()),
        t = (0, V.bG)([a8.A], () => a8.A.getGuild(e)?.name),
        a = (0, V.yK)([ad.A], () => [...i5, ...i9].filter((t) => null != e && (0, i2.zs)(t, e))),
        n = (0, V.yK)([i3.A], () => (null != e ? (i3.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(x.Ip, {
            className: re.kL,
            children: [
                (0, r.jsx)("div", {
                    className: re.uW,
                    children: (0, r.jsx)($.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
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
                                        rt(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        rt(e, n, !0);
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
                        (0, r.jsx)(F.B, {
                            gap: 16,
                            children: i6.map((e) => (0, r.jsx)(ly, { className: re.z6, content: ar.M[e] }, ar.M[e])),
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
                                            : ((0, ao._N)(ar.M.GUILD_POWERUP_NOTIFICATION), (0, i2.hk)(t, e));
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
                                            : ((0, ao._N)(ar.M.GUILD_POWERUP_NOTIFICATION), (0, i2.hk)(t, e));
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
                        i4.map((e) => (0, r.jsx)(ly, { className: re.z6, content: ar.M[e] }, ar.M[e])),
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
var rl = a(450510),
    rs = a(320681);
function ri(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, V.yK)([rl.HP], () => [rl.HP.hasHotspot(t, !0), rl.HP.getHotspotOverride(t)]);
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
        onSelectionChange: (e) => (null != e ? (0, rl.Kl)(t, e) : (0, rl.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function rr() {
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsx)(d.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: rs.IN,
            children: (0, r.jsx)(F.B, {
                gap: 20,
                children: Object.keys(rl._2)
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
    let e = (0, V.bG)([ru.default], () => ru.default.locale),
        [t, a] = o.useState(),
        n = (0, ro.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => a9.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(a$.Ay, {
                children: [
                    (0, r.jsx)(a$.Ay.Icon, { icon: rc.U, tooltip: "Locale" }),
                    (0, r.jsx)(a$.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(nR, {
                children: [
                    (0, r.jsx)(nO, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nO, { name: "App", children: e }),
                    (0, r.jsx)(nO, { name: "System", children: a9.systemLocale }),
                    (0, r.jsx)(nO, { name: "@discord/intl", children: a9.intl.currentLocale }),
                    (0, r.jsx)(nO, { name: "common i18n", children: rd.A.getLocale() }),
                    (0, r.jsx)(nO, { name: "Moment", children: nc().locale() }),
                ],
            }),
            (0, r.jsxs)(a$.Ay, {
                children: [
                    (0, r.jsx)(a$.Ay.Icon, { icon: rc.U, tooltip: "Messages" }),
                    (0, r.jsx)(a$.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(nR, {
                children: (0, r.jsx)(nO, { name: "Unique Rendered Main Messages", children: Object.keys(a9.t).length }),
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
                    (0, r.jsx)(nO, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nO, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(aV.A, { data: l?.(e) }),
        ],
    });
}
var rh = a(434404);
function rx() {
    let { node: e } = (0, X.Ay)(rh.F, "");
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(Q.A, { node: e }, e.key),
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
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
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
                        (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
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
                        (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
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
                    let n = new Uint8Array(e);
                    r_.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(r_.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rS() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(F.B, {
            gap: 24,
            children: [
                (0, r.jsx)(t7.Z, {
                    options: Object.keys(rE).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(F.B, {
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
                        let t = rE[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rC).then(eK().cloneDeep)
                                            : await t().then((e) => eK().cloneDeep(e.default)),
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
                            ry.a,
                            {
                                importData: () => {
                                    let t = rE[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rC).then(eK().cloneDeep)
                                        : t().then((e) => eK().cloneDeep(e.default));
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
                t = Object.values(a8.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("72899"),
                    a.e("66641"),
                    a.e("8886"),
                    a.e("11085"),
                    a.e("94258"),
                    a.e("17953"),
                    a.e("6354"),
                    a.e("77377"),
                    a.e("93064"),
                    a.e("99794"),
                    a.e("45970"),
                    a.e("25870"),
                    a.e("95709"),
                    a.e("52848"),
                    a.e("4974"),
                    a.e("22575"),
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
                t = Object.values(a8.A.getGuilds())[0];
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
            let { default: e } = await Promise.all([a.e("99794"), a.e("26132"), a.e("44491")]).then(a.bind(a, 907206));
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
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = ee.default.getCurrentUser(),
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
                    a.e("73839"),
                    a.e("6354"),
                    a.e("11810"),
                    a.e("14656"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(a8.A.getGuilds())[0];
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
                t = a8.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(ab.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = ab.A.getAllThreadsForParent(t.id);
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
                t = Object.values(a8.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rN.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("4974"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(a8.A.getGuilds())[0];
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
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rN.L3)(e, rk[a]);
            },
            [a],
        ),
        d = null != l ? rI[l] : null;
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)(F.B, {
            className: s_.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(F.B, {
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
                (0, r.jsxs)(F.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(t7.Z, {
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
                (0, r.jsxs)(F.B, {
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
                (0, r.jsx)(F.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(t7.Z, {
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
    { id: "USER_JOIN", value: el.lAJ.USER_JOIN, label: "User Join" },
    { id: "CHANNEL_PINNED_MESSAGE", value: el.lAJ.CHANNEL_PINNED_MESSAGE, label: "Channel Pinned Message" },
    { id: "GUILD_BOOST", value: el.lAJ.GUILD_BOOST, label: "Guild Boost" },
    { id: "GUILD_BOOST_TIER_1", value: el.lAJ.GUILD_BOOST_TIER_1, label: "Guild Boost Tier 1" },
    { id: "GUILD_BOOST_TIER_2", value: el.lAJ.GUILD_BOOST_TIER_2, label: "Guild Boost Tier 2" },
    { id: "GUILD_BOOST_TIER_3", value: el.lAJ.GUILD_BOOST_TIER_3, label: "Guild Boost Tier 3" },
    { id: "THREAD_CREATED", value: el.lAJ.THREAD_CREATED, label: "Thread Created" },
    { id: "CHANNEL_FOLLOW_ADD", value: el.lAJ.CHANNEL_FOLLOW_ADD, label: "Channel Follow Add" },
    { id: "STAGE_START", value: el.lAJ.STAGE_START, label: "Stage Start" },
    { id: "STAGE_END", value: el.lAJ.STAGE_END, label: "Stage End" },
    { id: "STAGE_SPEAKER", value: el.lAJ.STAGE_SPEAKER, label: "Stage Speaker" },
    { id: "STAGE_RAISE_HAND", value: el.lAJ.STAGE_RAISE_HAND, label: "Stage Raise Hand" },
    { id: "STAGE_TOPIC", value: el.lAJ.STAGE_TOPIC, label: "Stage Topic" },
    { id: "VOICE_SESSION", value: el.lAJ.VOICE_SESSION, label: "Voice Session" },
    { id: "FRIEND_REQUEST_ACCEPTED", value: el.lAJ.FRIEND_REQUEST_ACCEPTED, label: "Friend Request Accepted" },
    { id: "GUILD_DISCOVERY_DISQUALIFIED", value: el.lAJ.GUILD_DISCOVERY_DISQUALIFIED, label: "Discovery Disqualified" },
    { id: "GUILD_DISCOVERY_REQUALIFIED", value: el.lAJ.GUILD_DISCOVERY_REQUALIFIED, label: "Discovery Requalified" },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",
        value: el.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
        label: "Discovery Grace Initial Warning",
    },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",
        value: el.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
        label: "Discovery Grace Final Warning",
    },
    { id: "RECIPIENT_ADD", value: el.lAJ.RECIPIENT_ADD, label: "Recipient Add" },
    { id: "RECIPIENT_REMOVE", value: el.lAJ.RECIPIENT_REMOVE, label: "Recipient Remove" },
    { id: "CALL", value: el.lAJ.CALL, label: "Call" },
];
function rz() {
    let [e, t] = o.useState(el.lAJ.USER_JOIN),
        a = (0, V.bG)([rF.A], () => rF.A.getChannelId(), []),
        n = o.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, rU.Ay)({ channelId: a, content: "", type: e, state: el.cmJ.SENT });
            rL.A.receiveMessage(a, t, !1);
        }, [a, e]),
        l = o.useCallback(() => {
            if (null != a)
                for (let { value: e } of rW) {
                    let t = (0, rU.Ay)({ channelId: a, content: "", type: e, state: el.cmJ.SENT });
                    rL.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, r.jsxs)("div", {
        className: rV.gs,
        children: [
            (0, r.jsx)(t7.Z, {
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
                onClick: n,
                disabled: null == a || null == e,
            }),
            (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: "Inject All", onClick: l, disabled: null == a }),
        ],
    });
}
function rH() {
    let e = (0, V.yK)([rB.default], () => rB.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, V.cf)([ab.A, ee.default, af.A], () => ({
            selectedChannel: ab.A.getChannel(t),
            options: e.map((e) => {
                let t = ab.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, aj.m1)(t, ee.default, af.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rO.eu, { src: (0, rP.Y)(t), "aria-hidden": !0, size: rw._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rR.PQ)(n.recipientFlags ?? 0, rT.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rG.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, rR.Lt)(n.recipientFlags ?? 0, rT.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rV.gs,
        children: [
            (0, r.jsx)(t7.Z, {
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
function rK() {
    let e = o.useCallback(() => {
        rM.A.openPrivateChannel({ recipientIds: [r$.K] });
    }, []);
    return (0, r.jsx)(m.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rY() {
    let e = (0, V.bG)([aB.Ay], () => aB.Ay.allByCategory(aB.xW.MESSAGING), [], V.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(c.d, { label: n, description: t, checked: a, onChange: (e) => sT(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: P()(tG.nd, rV.nd),
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
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: ni.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
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
            a.e("89156"),
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
        let { default: e } = await Promise.all([a.e("22575"), a.e("4782"), a.e("89545"), a.e("11493")]).then(
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
        let { PremiumSubscriptionPauseModalSelect: e } = await Promise.all([a.e("96"), a.e("80347")]).then(
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
        let { default: e } = await Promise.all([a.e("11085"), a.e("38035")]).then(a.bind(a, 14860)),
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
                (t.default.getDevicesForPlatform = (e) => (e === el.fg2.PLAYSTATION ? s : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== el.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === el.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                    (0, r.jsx)(e, { ...a, channel: l, platform: el.fg2.PLAYSTATION })
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
        let { default: e } = await Promise.all([a.e("6354"), a.e("10534")]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e("6354"), a.e("10534")]).then(a.bind(a, 308229));
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
            a.e("93064"),
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
                                (0, r.jsx)(n, {
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
        let { default: e } = await Promise.all([a.e("95709"), a.e("46313")]).then(a.bind(a, 336496));
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
                a.e("99794"),
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
                channel_type: el.rbe.GUILD_VOICE,
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
                a.e("99794"),
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
        let e = ee.default.getUser("12345"),
            t = ee.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("31385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = ee.default.getUser("12345"),
            t = ee.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("84811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = ee.default.getUser("12345"),
            t = ee.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("17219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = ee.default.getUser("12345"),
            t = ee.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("43139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([
            a.e("22575"),
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
            t = Object.keys(a8.A.getGuilds())[0];
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
            t = Object.values(a8.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([a.e("88843"), a.e("27917"), a.e("73152"), a.e("25281")]).then(
            a.bind(a, 516259),
        );
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("88843"),
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
            a.e("89156"),
            a.e("25226"),
            a.e("7850"),
            a.e("16138"),
            a.e("19580"),
            a.e("97804"),
            a.e("56856"),
            a.e("19623"),
            a.e("82721"),
            a.e("99574"),
            a.e("57794"),
            a.e("29574"),
        ]).then(a.bind(a, 655045));
        return (t) => (0, r.jsx)(e, { ...t });
    },
};
function r3() {
    let e = o.useMemo(
            () =>
                Object.keys(r8)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsx)("section", {
                    className: s_.uW,
                    children: (0, r.jsxs)(F.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(t7.Z, {
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
                                onClick: () => null != t && (0, eF.openModalLazy)(r8[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rX.o)(!0), r0._.dispatch(el.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var r6 = a(933832),
    r5 = a(472229),
    r9 = a(945960),
    r4 = a(669316),
    r7 = a(354670),
    oe = a(428262);
let ot = async () => {
        try {
            let { body: e } = await n1.Bo.get({ url: el.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    oa = async (e, t) => {
        try {
            await n1.Bo.post({ url: el.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r9._D)();
        }
    },
    on = async (e, t) => {
        try {
            await n1.Bo.del({ url: el.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r9._D)();
        }
    },
    ol = async () => {
        try {
            let { body: e } = await n1.Bo.get({ url: el.Rsh.USER_OFFERS, rejectWithError: !0 });
            return { trial: e.trial, discount: e.discount.map(r4.A.createFromServer) };
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    os = async () => {
        try {
            await n1.Bo.del({ url: el.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await r7.A.forceReset(), await (0, r9._D)();
        }
    },
    oi = async (e) => {
        await n1.Bo.post({ url: el.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function or(e) {
    let { offer: t, offerOptions: a, forceRefetch: n } = e,
        [l, s] = o.useState(!1),
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
            u(!0), y ? await N({ expiresAt: null }) : await (0, r9.u1)(t), n(), u(!1);
        },
        N = async (e) => {
            u(!0);
            try {
                await n1.Bo.patch({
                    url: el.Rsh.UPDATE_USER_OFFER(p, "trial"),
                    body: {
                        ...("expiresAt" in e && { expires_at: e.expiresAt }),
                        ...("referrerId" in e && { referrer_id: e.referrerId }),
                    },
                    rejectWithError: !0,
                });
            } finally {
                n(), u(!1);
            }
        };
    o.useEffect(() => {
        if (l) {
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
    }, [l, i]);
    let A = "Active";
    return (
        y && (A = "Acked"),
        E && (A = "Expired"),
        (0, r.jsxs)("div", {
            className: P()(s_.Nr, C ? s_.Qf : s_.C1),
            children: [
                (0, r.jsx)("div", {
                    className: P()(s_.nM, s_.S7),
                    children: (0, r.jsx)($.D, { variant: "heading-lg/semibold", color: "always-white", children: _ }),
                }),
                (0, r.jsxs)(U.D, {
                    className: P()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, nf.C)(p, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", p] }),
                        l
                            ? (0, r.jsx)(r6.A, { size: "md", color: "currentColor", className: s_.Kk })
                            : (0, r.jsx)(nm.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                (0, r.jsxs)(U.D, {
                    className: P()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, nf.C)(j, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", j] }),
                        i
                            ? (0, r.jsx)(r6.A, { size: "md", color: "currentColor", className: s_.Kk })
                            : (0, r.jsx)(nm.T, { size: "xs", color: "currentColor", className: s_.Kk }),
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
                            value: (0, n_.Xm)(g),
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
                        (0, r.jsx)(U.D, {
                            onClick: S,
                            className: P()(s_.qS, s_.vk, { [s_.R1]: y, [s_._7]: E }),
                            children: (0, r.jsx)(h.E, {
                                variant: "eyebrow",
                                color: "Acked" === A ? void 0 : "always-white",
                                children: A,
                            }),
                        }),
                        null != v &&
                            (0, r.jsx)("div", {
                                className: P()(s_.qS, s_.k3),
                                children: (0, r.jsx)(h.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(U.D, {
                    onClick: async () => {
                        u(!0), await on(p, "trial"), n(), u(!1);
                    },
                    children: (0, r.jsx)(np.u, { size: "md", color: "currentColor", className: P()(s_.Kk, s_.IT) }),
                }),
                (0, r.jsx)("div", { className: P()(s_.g4, { [s_.VP]: c || m }), children: (0, r.jsx)(tt.y, {}) }),
            ],
        })
    );
}
function oo(e) {
    let { offer: t, offerOptions: a, forceRefetch: n } = e,
        [l, s] = o.useState(!1),
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
            u(!0), f ? await C({ expiresAt: null }) : await (0, r9.u1)(void 0, t), n(), u(!1);
        },
        C = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await n1.Bo.patch({
                    url: el.Rsh.UPDATE_USER_OFFER(p, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                n(), u(!1);
            }
        };
    o.useEffect(() => {
        if (l) {
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
    }, [l, i]);
    let S = "Active";
    return (
        _ && (S = "Expired"),
        f && (S = "Acked"),
        (0, r.jsxs)("div", {
            className: P()(s_.Nr, s_.id),
            children: [
                (0, r.jsx)("div", {
                    className: P()(s_.nM, s_.S7),
                    children: (0, r.jsx)($.D, { variant: "heading-lg/semibold", color: "text-default", children: b }),
                }),
                (0, r.jsxs)(U.D, {
                    className: P()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, nf.C)(p, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", p] }),
                        l
                            ? (0, r.jsx)(r6.A, { size: "md", color: "currentColor", className: P()(s_.Kk, s_.mK) })
                            : (0, r.jsx)(nm.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                (0, r.jsxs)(U.D, {
                    className: P()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, nf.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", v] }),
                        i
                            ? (0, r.jsx)(r6.A, { size: "md", color: "currentColor", className: P()(s_.Kk, s_.mK) })
                            : (0, r.jsx)(nm.T, { size: "xs", color: "currentColor", className: s_.Kk }),
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
                            value: (0, n_.Xm)(g?.toISOString()),
                            onChange: (e) =>
                                C({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s_.fC,
                    children: [
                        (0, r.jsx)(U.D, {
                            onClick: E,
                            className: P()(s_.qS, s_.vk, { [s_.R1]: f, [s_._7]: _ }),
                            children: (0, r.jsx)(h.E, {
                                variant: "eyebrow",
                                color: "Acked" === S ? void 0 : "always-white",
                                children: S,
                            }),
                        }),
                        y &&
                            (0, r.jsx)("div", {
                                className: P()(s_.qS, s_.k3),
                                children: (0, r.jsx)(h.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(U.D, {
                    className: s_.aR,
                    onClick: async () => {
                        u(!0), await on(p, "discount"), n(), u(!1);
                    },
                    children: (0, r.jsx)(np.u, { size: "md", color: "currentColor", className: P()(s_.Kk, s_.fy) }),
                }),
                (0, r.jsx)("div", { className: P()(s_.g4, { [s_.VP]: c || m }), children: (0, r.jsx)(tt.y, {}) }),
            ],
        })
    );
}
function od() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
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
            E(C.filter((e) => e.sourceType === el.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [C]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || j) &&
                ot().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && s(a[0].value), null == i && d(r[0].value);
                });
        }, [e, a, l, i, j]),
        o.useEffect(() => {
            j &&
                (b(!1),
                r7.A.forceReset(),
                (0, r9._D)(),
                ol().then((e) => {
                    u(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        v(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [j]);
    let A = async () => {
            null != l && (await oa(l, "trial"), b(!0));
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
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Utils" }),
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
                                    onClick: () => (0, ao.xB)(ar.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, ao._N)(ar.M.NAGBAR_NOTICE_OFFER_EXPIRING),
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
                                value: l,
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
                            (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            c.map((t) =>
                                (0, r.jsx)(or, { offer: t, offerOptions: e, forceRefetch: () => b(!0) }, t.id),
                            ),
                        ],
                    }),
                p.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: s_.uW,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
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
        [a, n] = o.useState(!0),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            n(!0), s(null);
            try {
                let e = await n1.Bo.get({ url: `${el.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
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
            className: tG.nd,
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
                    null != l && (0, r.jsx)(G.w, { type: "critical", children: l }),
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
        [a, n] = o.useState(!1),
        [l, s] = o.useState(!1),
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
            (0, r.jsxs)(F.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
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
            (0, r.jsxs)(F.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  F.B,
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
                        (0, r.jsxs)(U.D, {
                            onClick: () => n((e) => !e),
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
                                                            (0, r.jsx)(F.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                F.B,
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
        [el.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: el.uss.CLICK_ZONE_DEBUG,
            id: (0, eN.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...oU.A.getWidgetDefaultSettings(el.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [el.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: el.uss.PERFORMANCE_DEBUG,
            id: (0, eN.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...oU.A.getWidgetDefaultSettings(el.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    oK = {};
function oY(e) {
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
        (0, r.jsxs)(nu.$n, {
            look: nu.$n.Looks.LINK,
            color: nu.$n.Colors.LINK,
            size: nu.$n.Sizes.MIN,
            onClick: function () {
                (0, nf.C)(t, () => n(!0));
            },
            className: oz.DT,
            children: ["Application Id: ", t, " ", a ? a9.intl.string(a9.t.t5VZ88) : null],
        })
    );
}
let oq = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, V.bG)([f.Ay], () => f.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, V.bG)([a6.A], () => a6.A.getGameForPID(t.pid)),
            l = (0, V.bG)([f.Ay], () => (null == a ? null : f.Ay.getGameOverlayStatus(a)));
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
                null != l &&
                    (0, r.jsxs)("div", {
                        className: oz.st,
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
                                children: ["raw overlayMethod: ", (0, oO.gK)(l.overlayMethod)],
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
    oJ = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, V.cf)([oF.default], () => oF.default.getOverlayPIDStatuses()),
            n = (0, V.cf)([oR.default], () => oR.default.getTrackedGames()),
            l = (0, V.bG)([oF.default], () => oF.default.isInputLocked(t), [t]),
            s = (0, V.bG)([oF.default], () => oF.default.DEV_isInputLockedV3(t), [t]),
            i = (0, V.bG)([oF.default], () => oF.default.DEV_isInputLocked(t), [t]),
            o = (0, V.bG)([oF.default], () => oF.default.isReady(t), [t]);
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
function oQ(e) {
    let t,
        a = ((t = Object.values((0, V.yK)([oU.A], () => oU.A.getWidgetsForLayout(oW.G)))), t.find((t) => t.type === e));
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
    return t ? `${e.toFixed(2)}ms` : (0, n_.i$)(nc()(e), "h:mm:ss.SSS");
}
let oZ = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, V.bG)([oR.default], () => {
            if (null == t) return "Unknown";
            let e = oR.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((oK[t] = e), e) : (oK[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(h.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function o0() {
    let e = (0, V.bG)([oM.A], () => oM.A.hasRenderDebugMode(oI.x7.TrackFocusPIDs)),
        t = (0, V.yK)([oR.default], () => oR.default.getDevToolsFocusedPidsWithTimestamp());
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
                    (0, r.jsx)(U.D, {
                        className: oz.LL,
                        onClick: () => oS.A.clearTrackedPids(),
                        children: (0, r.jsx)(np.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(x.Ip, {
                className: P()(oz.st, oz.XG),
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
                                children: (0, r.jsx)(lJ.m, {
                                    position: "left",
                                    text: n === oI.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(h.E, {
                                            variant: "text-sm/medium",
                                            color: n === oI.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
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
            a = (0, V.bG)([oR.default, f.Ay], () => {
                if (null == t) return null;
                let e = oR.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = f.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lF.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(h.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, oO.wR)(a) : "Unknown"],
        });
    }),
    o2 = o.memo(function () {
        let e = (0, V.cf)([oR.default], () => oR.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = f.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, oO.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
            (0, r.jsx)(lJ.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(x.Ip, {
                        className: P()(oz.st, oz.XG),
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
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        h.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, oO.wR)(a)} @ ${oX(n)}`,
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
    o8 = o.memo(function () {
        let e = (0, V.cf)([oR.default], () => oR.default.getTrackedGames()),
            t = (0, oV.getPID)(),
            a = (0, V.bG)([oR.default], () => oR.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, V.yK)([oP.A], () => [oP.A.enabled, oP.A.keepOpen]),
            s = (0, V.bG)([oF.default], () => oF.default.getFocusedPID()),
            i = (0, V.bG)([oF.default], () => oF.default.isFocusedPidOutOfProcess());
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
    o3 = [
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
    o6 = o.memo(function () {
        let [e, t] = oQ(el.uss.CLICK_ZONE_DEBUG),
            [a, n] = oQ(el.uss.PERFORMANCE_DEBUG),
            l = (0, V.bG)([oM.A], () => oM.A.getRenderDebugModes()),
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
                children: o3.map((s) => {
                    let i =
                            s.mode === oI.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${oL.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === oI.x7.ClickZones
                                ? null != e
                                : s.mode === oI.x7.WidgetAreas
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
                                    s.mode === oI.x7.ClickZones && t(),
                                        s.mode === oI.x7.WidgetAreas && n(),
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
        let e = (0, V.cf)([oR.default], () => oR.default.getTrackedGames()),
            t = (0, V.bG)([f.Ay], () => f.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(lJ.m, {
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
                (0, r.jsx)(lJ.m, {
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
        let e = (0, V.bG)([oR.default], () => oR.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
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
            options: n,
            onSelectionChange: (e) => {
                a(e), oS.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function o4(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
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
                    children: (0, r.jsx)(oj.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(ov.jl, {
                children: (0, r.jsxs)(sn.e, {
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
                n = da(t);
            return (0, r.jsx)("div", {
                className: oz.g$,
                style: { color: de(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: oz.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
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
        cellClassName: oz.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, n_.i$)(nc()(t), "h:mm:ss.SSS");
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
function dn(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let dl = ["__webpack_require__", "fn"],
    ds = ["web.js", "web.js.map"],
    di = [
        {
            id: "details",
            name: "Details",
            group: aY.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: d, timestamp: c, pid: u } = t,
                    m = nc()(c),
                    h = da(l);
                return (0, r.jsxs)(x.Ar, {
                    className: oz.bW,
                    children: [
                        (0, r.jsxs)(ok.A, {
                            className: P()(tG.jr, oz.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: de(l, s) },
                                    className: oz.nr,
                                    children: (0, r.jsx)(h, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(ok.A.Title, {
                                    wrapperClassName: oz.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(U.D, {
                                            tag: "span",
                                            className: oz.KE,
                                            onClick: () => (0, nf.C)(n),
                                            children: (0, r.jsx)(nm.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(ok.A.Icon, {
                                    icon: nm.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nf.C)(dn(t));
                                    },
                                }),
                                (0, r.jsx)(ok.A.Icon, { icon: nx.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(nR, {
                            className: oz.ZK,
                            children: [
                                (0, r.jsx)(nO, {
                                    name: "Timestamp",
                                    copyValue: m.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: m.toISOString(),
                                        title: (0, n_.i$)(m, "LLLL"),
                                        children: (0, n_.i$)(m, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nO, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(nO, {
                                    name: "PID",
                                    copyValue: u?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: u?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nO, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nO, {
                                    name: "Data",
                                    copyValue: dn(d),
                                    children: (0, r.jsx)("code", { children: dn(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nO, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, s] = a,
                                                        i = n.split(/[\\/]/).pop();
                                                    return dl.includes(e.trim())
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
    dr = {
        searchType: nj.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return null != n && s.push(n), s;
        },
        throttleMs: 100,
    };
function dd() {
    let { ref: e, height: t } = (0, oN.Ay)(),
        a = (0, V.bG)([oM.A], () => oM.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [d, c] = o.useState(null),
        [u, m] = o.useState(Object.keys(o7)),
        [x, p] = (0, V.bG)([oM.A], () => oM.A.getOverlayLoggingBreadcrumbs(), [], oB.D),
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
        { renderSelectedTab: I } = (0, aY.Ay)({ tabs: di }, []);
    (0, nb.RT)(f, y, k, dr, [j]);
    let D = o.useCallback((e) => {
            l(e), oS.A.setModuleLogging(e);
        }, []),
        [T, R] = o.useState(!1),
        O = o.useRef(null),
        w = o.useCallback(() => {
            (0, nf.C)(JSON.stringify(y)), R(!0);
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
                (0, eF.openModal)(
                    (e) =>
                        (0, r.jsx)(o4, {
                            modalProps: e,
                            onClose: (t) => {
                                M(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    e$.SY,
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
                        className: P()(oz._V, oz.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: oz.iR,
                                children: (0, r.jsx)(rQ.S, { label: "Poll Native", checked: n, onChange: (e) => D(e) }),
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
                            (0, r.jsxs)(U.D, {
                                className: oz.ny,
                                onClick: w,
                                children: [
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: T ? "Copied" : "Copy All",
                                    }),
                                    T
                                        ? (0, r.jsx)(r6.A, { size: "sm", color: eB.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(nm.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(U.D, {
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
                        className: P()(oz._V, oz.XQ),
                        children: Object.entries(o7).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                U.D,
                                {
                                    className: P()(oz.pb, u.includes(t) && oz.bx),
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
                        children: (0, r.jsx)(ng.I, {
                            query: f,
                            onChange: _,
                            onClear: () => _(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: P()(oz.st, oz.CZ),
                children: (0, r.jsx)(tF, {
                    columns: dt,
                    data: E,
                    selectedRowKey: S ?? void 0,
                    onClickRow: (e) => N(e.key),
                }),
            }),
            null != A &&
                (0, r.jsx)(aK, {
                    className: P()(oz.st, oz.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: I({ breadcrumb: A, onClose: () => N(null) }),
                }),
        ],
    });
}
let dc = o.memo(function () {
        let e = (0, V.bG)([ow.A], () => ow.A.getPopoutInitializationStages());
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
        let e = (0, V.bG)([oM.A], () => oM.A.isStateDebuggingEnabled()),
            t = (0, V.bG)([oM.A], () => oM.A.getDebuggingState());
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
            className: P()(tG.nd, oz.rf),
            children: [
                (0, r.jsx)(o6, {}),
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
            t = (0, V.bG)([oG.Ay], () => oG.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: oz.st,
            children: [
                (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, o$.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Overrides" }),
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
                (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Actions" }),
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
        children: (0, r.jsx)("div", { className: P()(tG.nd, oz.rf), children: (0, r.jsx)(dp, {}) }),
    });
}
function dv() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                tM.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    tM.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: P()(tG.nd, oz.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: oz._V,
                    children: [
                        (0, r.jsx)(U.D, {
                            className: P()(oz.k0, "state" === e && oz.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(U.D, {
                            className: P()(oz.k0, "logging" === e && oz.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(U.D, {
                            className: P()(oz.k0, "experiments" === e && oz.a),
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
        [a, n] = o.useState(null),
        l = (0, V.yK)([a8.A], () => a8.A.getGuildsArray()),
        [s] = (0, V.yK)([rZ.A], () => [rZ.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, u] = o.useState(i.length > 0 ? i[0].value : null),
        [p, b] = o.useState(""),
        [f, _] = o.useState({ plan_id: sx.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        y = "true" !== f.gift && null != s,
        [E, C] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: S } = (0, aJ.Ay)(tf.A.PAYMENT_FLOW_TEST_PAGE),
        [N, A] = o.useState(""),
        [k, I] = o.useState(el.dJq),
        { balance: D, isFetching: T, error: R } = (0, dT.W)(),
        { isSubmitting: O, responseMessage: w, redeemVirtualCurrency: M } = (0, dT.Q)(),
        [L, P] = o.useState(el.dJq),
        [U, G] = o.useState(""),
        [B, $] = o.useState(el.dJq),
        [W, z] = o.useState(el.dJq);
    return (0, r.jsx)(aJ.f5, {
        value: S,
        children: (0, r.jsx)(x.Ip, {
            className: dO.XG,
            children: (0, r.jsxs)(F.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(F.B, {
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
                                color: nu.XD.PRIMARY,
                                look: nu.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)(F.B, {
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
                                onClick: () => (0, dk.A)({ subscriptionTier: a, analyticsLocations: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)(F.B, {
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
                    (0, r.jsxs)(F.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(ib.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(F.B, {
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
                                    (0, r.jsx)(lJ.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: p.length < 1,
                                        children: (0, r.jsx)(m.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: p.length < 1,
                                            onClick: () => {
                                                window.open(el.BVt.BILLING_PROMOTION_REDEMPTION(p));
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
                    (0, r.jsx)(lJ.m, {
                        text: "Already subscribed",
                        shouldShow: y,
                        children: (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: y,
                            onClick: () => {
                                window.open(el.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dj.stringify({ ...f }));
                            },
                        }),
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)(d.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(F.B, {
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
                                              children: (0, r.jsx)(tt.y, { type: tt.t.SPINNING_CIRCLE }),
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
                                onClick: () => M(L, (0, eN.A)()),
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
                    (0, r.jsxs)(F.B, {
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
                                        analyticsLocationObject: { page: el.liQ.IN_APP },
                                        context: el.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsx)(F.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(d.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(F.B, {
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
                                        onChange: (e) => $(e),
                                    }),
                                    (0, r.jsx)(m.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, dI.q)({
                                                applicationId: U,
                                                skuId: B,
                                                analyticsLocations: S,
                                                checkoutFlow: d_.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)(F.B, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, r.jsx)(v.k, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: W,
                                onChange: (e) => z(e),
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, dA.A)({ skuId: W, analyticsLocations: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsx)(d.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(F.B, {
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
                            onClick: () => (0, lx.Ab)(),
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
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState(null),
        [c, u] = o.useState(null),
        [p, v] = o.useState("pm_card_us"),
        [j, b] = o.useState(!1),
        f = Object.values((0, tb.bG)([dW.A], () => dW.A.paymentSources)),
        _ = dK[e],
        y = async () => {
            let t = p;
            "" === t && (t = "pm_card_us"),
                await n1.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? c : null },
                    rejectWithError: !1,
                }),
                await (0, df.$o)();
        },
        E = async () => {
            await n1.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, df.$o)();
        },
        C = async () => {
            await n1.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, df.$o)();
        }, []),
        (0, r.jsx)(x.Ip, {
            className: tG.nd,
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
                            (0, r.jsx)(t7.Z, {
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
                                        n(e), s(dq[e] ?? null);
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
                    (0, r.jsx)(d6, {}),
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
function d3(e) {
    let { experimentName: t, options: a = dZ } = e,
        n = (0, tb.bG)([d$.A, nE.default], () => {
            let e = nE.default.getId(),
                a = d$.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, dB.t$)(dB.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(g.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function d6() {
    return (0, r.jsxs)(F.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(d3, { experimentName: dG.W2.definition.name, options: d0 }),
            (0, r.jsx)(d3, { experimentName: dG._$.definition.name, options: d0 }),
            (0, r.jsx)(d3, { experimentName: dP.A.definition.name, options: d1 }),
            (0, r.jsx)(d3, { experimentName: dU._.definition.name, options: d2 }),
            (0, r.jsx)(d3, { experimentName: dV.A.definition.name, options: d8 }),
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
                    let t = await n1.Bo.post({
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
    return (0, r.jsxs)(F.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(F.B, {
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
                (0, r.jsxs)(F.B, {
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
            null != h && (0, r.jsx)(G.w, { type: "critical", children: h }),
        ],
    });
}
function d7(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await n1.Bo.patch({ url: el.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
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
function cn() {
    return (0, r.jsx)(x.Ip, { className: ca.kL, children: (0, r.jsx)(cl, {}) });
}
function cl() {
    let e = o.useCallback(() => {
            (0, ao._N)(ar.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, ct.FZ)(ar.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)($.D, { className: ca.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
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
        n = a ? r6.A : Y.P,
        l = (0, r.jsx)("div", {
            className: P()(cd.v_, a ? cd.uU : cd.Ss),
            children: (0, r.jsx)(n, { className: cd.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: cd.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: cd.rv,
                children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function cu() {
    let e = (0, V.bG)([rF.A], () => rF.A.getChannelId()),
        t = (0, V.bG)([a3.A], () => a3.A.getGuildId()),
        a = (0, V.bG)([ab.A], () => ab.A.getChannel(e)),
        n = (0, V.bG)([a8.A], () => a8.A.getGuild(t)),
        l = (0, V.bG)([ci.A], () => ci.A.computePermissions(a)),
        s = (0, V.bG)([ci.A], () => ci.A.computePermissions(n)),
        i = (0, aj.Ay)(a, !0),
        o = null != a ? (0, co.mW)(a, !1) : null,
        d = null != n ? cr.A.getGuildPermissionSpecMap(n) : null,
        c = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cs.zy(l, a);
            return (0, r.jsx)(cc, { title: t, can: n }, t);
        }),
        u = Object.values(d ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cs.zy(s, a);
            return (0, r.jsx)(cc, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: P()(tG.nd, cd.nd),
        children: (0, r.jsxs)("div", {
            className: cd.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: cd.uW,
                    children: [
                        (0, r.jsx)($.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        c,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: cd.uW,
                    children: [
                        (0, r.jsx)($.D, {
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
let cy = [el.NJ8.DARK, el.NJ8.LIGHT, el.NJ8.DARKER, el.NJ8.MIDNIGHT],
    cE = [cm.NS.COMPACT, cm.NS.COZY, cm.NS.DEFAULT];
function cC(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function cS() {
    let e,
        t =
            ((e = ee.default.getCurrentUser()),
            oe.Ay.canUseClientThemes(e) ? Object.keys(cf.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = cC(a);
            if (null != n) {
                let t = cf.ag[n];
                e = t?.theme ?? el.NJ8.DARK;
            } else e = cC([el.NJ8.DARK, el.NJ8.DARKER, el.NJ8.MIDNIGHT]);
            await cv.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                ao.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = cC(cy);
            await cv.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                ao.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function cN() {
    let e = ty.A.purchases,
        t = (0, eI.x9)(e),
        a = (0, eI.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = cC([...t, null])), l && (e.nameplate = cC([...a, null])), (0, tr.p)(e);
            let s = to.A.getPendingChanges(),
                i = (0, cb.Sk)(s);
            await (0, cg._L)(i).finally(cg.pZ);
        } catch (e) {}
}
function cA() {
    try {
        let e = cC(el.hH7.FONT_SIZES);
        (0, cj.XS)(e);
        let t = cC(c_.qh);
        (0, cj.AC)(t);
        let a = cC(cE);
        cp.Xi.updateSetting(a);
    } catch (e) {}
}
function ck() {
    (0, tu.Bf)();
    let e = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
        t = cp.eh.useSetting(),
        a = (0, V.bG)([cx.A], () => cx.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, V.bG)([ty.A], () => ty.A.purchases),
        s = (0, eI.x9)(l),
        i = (0, eI.$W)(l),
        d = e?.avatarDecoration?.skuId,
        c = e?.collectibles?.nameplate?.skuId,
        u = null != d ? (s.find((e) => e.skuId === d) ?? null) : null,
        x = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        p = (0, V.bG)([t_.A], () => t_.A.getProduct(u?.skuId)),
        g = (0, V.bG)([t_.A], () => t_.A.getProduct(x?.skuId)),
        v = (0, V.bG)([ch.A], () => ch.A.fontSize),
        j = (0, V.bG)([ch.A], () => ch.A.messageGroupSpacing),
        b = cp.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = ee.default.getCurrentUser(),
                t = cp.eh.getSetting(),
                a = ty.A.purchases,
                n = (0, eI.x9)(a),
                l = (0, eI.$W)(a),
                s = cx.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = ch.A.fontSize,
                m = ch.A.messageGroupSpacing,
                h = cp.Xi.getSetting();
            return () => {
                try {
                    cv.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        ao.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, tr.p)({ avatarDecoration: d, nameplate: c });
                    let e = to.A.getPendingChanges(),
                        t = (0, cb.Sk)(e);
                    (0, cg._L)(t).finally(cg.pZ), (0, cj.XS)(u), (0, cj.AC)(m), cp.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lD.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)($.D, {
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
                        (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(h.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? cf.ag[n]?.getName() : "None"],
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
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, cR.Zt)(),
        l = (0, eo.Ay)(),
        s = (0, V.bG)([ad.A], () => ad.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, cv.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)(F.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(cD.N, {
                            collapsibleContent: (0, r.jsxs)(F.B, {
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
                              (0, r.jsx)(sn.e, {
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
                                            (0, r.jsxs)(F.B, {
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
                                            (0, r.jsxs)(F.B, {
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
                                  : (0, r.jsxs)(F.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(g.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(el.NJ8).map((e) => ({
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
    let e = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
        t = (0, V.bG)([cz.A], () => {
            let e = cz.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, V.bG)([cz.A], () => cz.A.getPremiumTypeOverride());
    return (0, r.jsxs)(F.B, {
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
            (0, r.jsx)(lU.Q, {
                onClick: () => {
                    (0, cW.O)(sx.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(im.J, {
                label: "Override Client-Side Account Created At Date",
                value: nc()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, cW.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(lU.Q, { onClick: () => (0, cW.Y)(void 0), text: "Reset account created at override" }),
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
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(x.Ip, {
              children: [
                  (0, r.jsx)("div", { className: P()(cJ.N, cQ.SX), children: (0, r.jsx)(cH, {}) }),
                  (0, r.jsx)("div", {
                      className: P()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, c$.A)({ source: cq.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: P()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = rF.A.getChannelId() ?? "21154681615024128"),
                                  void (0, eF.openModalLazy)(
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
                      className: P()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, eF.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("17724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: P()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, cF.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: P()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: cP.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: P()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = cU.A.getSocket();
                              tM.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: P()(cJ.N, cQ.QB),
                      children: (0, r.jsx)(c.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cp.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: P()(cJ.N, cQ.QB),
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
                                  tM.h.dispatch({
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
                                  n1.Bo.post({ url: el.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: P()(cJ.N, cQ.QB),
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
                              onClick: () => n(!0),
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
        children: (0, r.jsxs)(F.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)($.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(h.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(c3, {}),
                (0, r.jsx)($.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
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
function c3() {
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
    return (0, r.jsxs)(F.B, {
        gap: 16,
        children: [
            (0, r.jsx)(c5, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(c1._, { src: e, ref: c, onLoad: p, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(tt.y, {}) : null,
            null != a &&
                (0, r.jsxs)(F.B, {
                    children: [
                        (0, r.jsxs)(F.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)($.D, { variant: "heading-lg/medium", children: "Dimensions" }),
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
                        (0, r.jsxs)(F.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)($.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        c6,
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
function c6(e) {
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
                  ? (0, r.jsx)(t7.Z, {
                        selectionMode: "single",
                        label: t,
                        value: n,
                        onSelectionChange: (e) => l(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(eB.A.colors).map((e) => {
                            let [t, a] = e;
                            return { label: t, value: a, id: t };
                        }),
                    })
                  : "artboard" === a
                    ? (0, r.jsx)(t7.Z, {
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
function c5(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = c0[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, c2.Gy)(n);
    return (0, r.jsxs)(
        F.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(F.B, {
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
                                    null != n && (0, c2.DS)(n, t), a?.(t);
                                }),
                                    l.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eP.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != n && (0, c2.DS)(n, null),
                                    a?.(null);
                            },
                            icon: np.u,
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
    let { title: t, count: a, entries: n, renderMeta: l } = e;
    return (0, r.jsxs)(F.B, {
        gap: 4,
        children: [
            (0, r.jsxs)($.D, { variant: "heading-sm/bold", children: [t, " (", a, ")"] }),
            0 === n.length
                ? (0, r.jsx)(h.E, { variant: "text-sm/normal", className: c9.Ie, children: "none" })
                : (0, r.jsx)(F.B, {
                      gap: 0,
                      children: n.map((e) =>
                          (0, r.jsx)(
                              c4,
                              { game: e.game, meta: l?.(e.outcome) },
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
    let t = (0, V.bG)([f.Ay], () => f.Ay.getDetectionDebug()),
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
        className: P()(tG.nd, c9.kL),
        children: (0, r.jsxs)(F.B, {
            gap: 16,
            padding: 12,
            className: c9.rf,
            children: [
                (0, r.jsxs)(F.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/bold", children: "Running Game Detection" }),
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
                (0, r.jsxs)(F.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-sm/bold", children: "Status" }),
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
var un = a(290136),
    ul = a(106236),
    us = a(629584),
    ui = a(600239),
    ur = a(940622),
    uo = a(961895),
    ud = a(343991),
    uc = a(699666);
let uu = () => {
        (0, eF.openModalLazy)(
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
        let { className: t, onDrop: a, children: n } = e,
            [l, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                um(e), s(!0), (0, eF.closeModal)(ud.D);
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
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : uu();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: P()(t, uc.iE),
            onDragEnter: d,
            onDragOver: um,
            onDragLeave: c,
            onDrop: u,
            children: [
                n,
                l &&
                    (0, r.jsx)("div", {
                        className: uc.d2,
                        children: (0, r.jsxs)("div", {
                            className: uc.vW,
                            children: [
                                (0, r.jsx)(uo.A, { icons: eg.ir }),
                                (0, r.jsx)($.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
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
                                                (0, r.jsx)(un.c, {
                                                    className: uc.q4,
                                                    size: "xs",
                                                    color: eB.A.colors.TEXT_DEFAULT,
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
        eT.RN.HERO_BANNER_STATIC,
        eT.RN.HERO_LOGO,
        eT.RN.PDP_BACKGROUND,
        eT.RN.LOGO,
        eT.RN.MOBILE_BANNER,
        eT.RN.MOBILE_BACKGROUND,
    ]),
    ug = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    uv = { max: 5e6, warn: 2e6 },
    uj = { max: 3e6, warn: 1e6 },
    ub = { max: 2e6, warn: 1e6 },
    uf = { max: 1e6, warn: 5e5 },
    u_ = { max: 25e4, warn: 5e4 },
    uy = {
        [eT.Jn.PROFILE_EFFECT]: uv,
        [eT.Jn.AVATAR_DECORATION]: uj,
        [eT.Jn.PROFILE_FRAME]: ub,
        [eT.RN.HERO_BANNER_ANIMATED]: uv,
        [eT.RN.HERO_BANNER_RIVE]: uv,
        [eT.RN.CATALOG_BANNER_RIVE]: uv,
        [eT.RN.SHOP_BUTTON_BG_HOVER]: uj,
        [eT.RN.SHOP_BUTTON_BG_HOVER_DARK]: uj,
        [eT.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: uj,
        [eT.RN.SHOP_BUTTON_BG_RESTING]: uj,
        [eT.RN.SHOP_BUTTON_BG_RESTING_DARK]: uj,
        [eT.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: uj,
        [eT.RN.HERO_BANNER_STATIC]: ub,
        [eT.RN.UPSELL_BANNER]: uf,
        [eT.RN.UPSELL_BANNER_POPOUT]: u_,
        [eT.RN.MOBILE_BANNER]: uf,
        [eT.RN.MOBILE_BACKGROUND]: u_,
        [eT.RN.MOBILE_HERO]: uf,
        [eT.RN.PDP_BACKGROUND]: u_,
        [eT.RN.LOGO]: u_,
        [eT.RN.TAB_TOOLTIP]: u_,
    },
    uE = [eT.Kx.COLLECTION],
    uC = [eT.Kx.AVATAR_DECORATIONS, eT.Kx.FRAMES, eT.Kx.NAMEPLATES, eT.Kx.PROFILE_EFFECTS],
    uS = async (e) => {
        let t = e.createReader(),
            a = await new Promise((e) => t.readEntries(e)),
            n = new Set();
        for (let e of a) e.isDirectory && n.add(e.name);
        let l = uE.filter((e) => !n.has(e));
        return uC.some((e) => n.has(e)) || l.push(`at least one of: ${uC.join(", ")}`), l;
    },
    uN = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
    uA = (e) => {
        let { names: t, addError: a } = e,
            n = t.filter((e) => !uN.test(e));
        n.length > 0 && a("File names must be in lowercase snake case", n);
    },
    uk = (e, t, a, n, l) => {
        let s = t.size,
            i = s > 1e6 ? `${(s / 1e6).toFixed(2)}MB` : `${(s / 1e3).toFixed(2)}KB`,
            r = `${l ?? t.name} - ${i}`;
        if (s > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
        } else s > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
    },
    uI = (e, t, a, n) => {
        let l = uy[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || uk(l, e, a, n);
    },
    uD = (e) => {
        let t = eT.aL[e];
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
        (0, eF.hasModalOpen)(ui.k)
            ? (0, eF.closeModal)(ui.k)
            : (0, eF.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: ui.k, onCloseRequest: () => (0, eF.closeModal)(ui.k) },
              );
    },
    uP = () => {
        (0, eF.hasModalOpen)(ui.g)
            ? (0, eF.closeModal)(ui.g)
            : (0, eF.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: ui.g, onCloseRequest: () => (0, eF.closeModal)(ui.g) },
              );
    },
    uU = () => {
        let e = (0, eR.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, ur.JE)(),
            n = o.useMemo(() => [uM, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uR.kO,
                  children: [
                      (0, r.jsx)(av.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uR.wR,
                          children: [
                              (0, r.jsx)($.D, {
                                  variant: "heading-sm/semibold",
                                  children: `Profile Effect (${e.length} to preview)`,
                              }),
                              (0, r.jsx)(eP.K, {
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: uP,
                                  icon: un.c,
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
    uG = () => {
        let e = (0, ur.bA)(),
            { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, ur.JE)(),
            n = o.useMemo(() => [uM, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uR.kO,
                  children: [
                      (0, r.jsx)(av.h, { size: 16 }),
                      (0, r.jsx)($.D, {
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
    uF = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, ur.JE)(),
            { avatarDecorationAssets: a } = (0, ur.NE)(),
            n = o.useMemo(() => [uM, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uR.kO,
                  children: [
                      (0, r.jsx)(av.h, { size: 16 }),
                      (0, r.jsx)($.D, {
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
    uB = new Set([eT.RN.HERO_BANNER_STATIC, eT.RN.HERO_BANNER_ANIMATED, eT.RN.HERO_BANNER_RIVE]),
    u$ = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, ur.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: u,
                setHeroResponsive: x,
            } = (0, ur.JE)(),
            p = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            g = p.some((e) => e.value === eT.RN.HERO_LOGO),
            v = p.some((e) => uB.has(e.value)),
            j = o.useCallback((e) => l(e), [l]),
            b = o.useCallback(() => {
                s(), t(), a();
            }, [s, t, a]);
        return 0 === p.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(av.h, { size: 16 }),
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
                                              (0, r.jsx)(ul.A, {
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
                      (0, r.jsx)(av.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uR.wR,
                          children: [
                              (0, r.jsx)($.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
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
                                          (0, r.jsx)(eP.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => j(e.value),
                                              icon: Y.P,
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
                      (0, r.jsx)(av.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uR.wR,
                          children: [
                              (0, r.jsx)($.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
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
                                var a;
                                if (0 === e.length) return void i("No files found");
                                if (e.length > 1) return void i("Uploaded multiple files. Expected 1 directory.");
                                let t = e[0];
                                if (!t.isDirectory) return void i("Uploaded a file. Expected a directory.");
                                let n = await uS(t);
                                n.length > 0 && i("Missing required directories", n),
                                    (a = await (0, eT.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, eT.pd)(e),
                                                l = null != t ? uy[t] : null;
                                            null != l && uk(l, e, a, n);
                                        }
                                        uA({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let l = new Set(
                                                t.collectionFiles.map((e) => (0, eT.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(up)
                                                .filter((e) => !l.has(e))
                                                .map(uD);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(eT.RN)
                                            .filter((e) => !up.has(e))
                                            .filter((e) => !l.has(e))
                                            .map(uD);
                                        i.length > 0 && n("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        uA({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, l] = e,
                                                    s = l.map((e) => e.name);
                                                uA({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    uI(eT.Jn.PROFILE_EFFECT, l, a, n);
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
                                                r.length > 0 && n("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        uA({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            uI(eT.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e,
                                            l = Object.keys(t.profileFrameDirsMap)
                                                .filter((e) => !uN.test(e))
                                                .map((e) => `${eT.Kx.FRAMES}/${e}`);
                                        l.length > 0 && a("File names must be in lowercase snake case", l);
                                        let s = uy[eT.Jn.PROFILE_FRAME];
                                        Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                            let [t, l] = e,
                                                i = `${eT.Kx.FRAMES}/${t}`,
                                                r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                            (null != l.previewFile && null != r && uT.includes(r)) ||
                                                a(
                                                    "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                    [`${i}/preview.{${uT.join("|")}}`],
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
                                                uN.test(l.previewFile.name) ||
                                                o.push(`${i}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                uN.test(e.name) || o.push(`${i}/${t}/${e.name}`);
                                            o.length > 0 && a("File names must be in lowercase snake case", o);
                                            let d = [];
                                            for (let { file: e, folder: t } of l.layerFiles) {
                                                let { parsed: a, errorType: n } = (0, ux.Mf)(e.name);
                                                if (null == a) {
                                                    let a = null != n ? ux.h4[n] : "invalid";
                                                    d.push(`${i}/${t}/${e.name}: ${a}`);
                                                }
                                            }
                                            if (
                                                (d.length > 0 && a("Invalid profile frame layer filenames", d),
                                                null != s)
                                            )
                                                for (let { file: e, folder: t } of (null != l.previewFile &&
                                                    uk(s, l.previewFile, a, n, `${i}/${l.previewFile.name}`),
                                                l.layerFiles))
                                                    uk(s, e, a, n, `${i}/${t}/${e.name}`);
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
            s = Object.entries(l),
            i = Object.entries(n),
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
                    (0, r.jsx)(av.h, { size: 16 }),
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)($.D, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, r.jsx)(av.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: uR.ck,
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
                                                            className: uR.ck,
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
                                (0, r.jsx)($.D, { variant: "heading-lg/bold", children: "Warnings" }),
                                (0, r.jsx)(av.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: uR.ck,
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
                                                            className: uR.ck,
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
    uz = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, ur.JE)(),
            { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, eT.ds)(),
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
                            (0, r.jsx)(eP.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: uL,
                                icon: un.c,
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
                    (0, r.jsx)(u$, { clearAssets: l, clearIgnoredFiles: s }),
                    (0, r.jsx)(uV, { ignoredFiles: n, handleClearIgnoredFiles: s }),
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
                (0, r.jsx)(av.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(uz, {}),
                "validate" === e && (0, r.jsx)(uW, {}),
                (0, r.jsx)(av.h, { size: 16 }),
            ],
        });
    },
    uK = (e) => {
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
        return (0, r.jsx)(uO.Provider, { value: l, children: (0, r.jsx)(uh, { onDrop: s, children: t }) });
    };
var uY = a(663803),
    uq = a(859040),
    uJ = a(385815);
let uQ = () => {
    let e = (0, V.bG)([t_.A], () => t_.A.skipNumCategories);
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
        (((n = {}).DEFAULT = "default"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    uZ = a(295811);
let u0 = () => {
    let e = (0, V.bG)([uZ.A], () => uZ.A.getShopHomeConfigOverride()),
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
            className: P()(u1.kL, u1.fi),
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
            a = Object.keys(ar.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(lE, { items: [a] }) });
    };
var u3 = a(578797),
    u6 = a(628917);
let u5 = (e) => {
        let { title: t, expanded: a, onToggle: n, children: l } = e,
            s = o.useId();
        return (0, r.jsx)(cD.N, {
            isExpanded: a,
            className: u6.uW,
            collapsibleContent: (0, r.jsx)("div", { id: s, className: u6.f5, children: l }),
            children: () =>
                (0, r.jsxs)("button", {
                    type: "button",
                    onClick: n,
                    "aria-expanded": a,
                    "aria-controls": s,
                    className: u6.bV,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/bold", children: t }),
                        (0, r.jsx)(s0._, { size: "sm", color: "currentColor", className: P()(u6.ai, { [u6.hg]: a }) }),
                    ],
                }),
        });
    },
    u9 = () => {
        let e = (0, V.bG)([lI.A], () => lI.A.get("shop_disable_cache")),
            t = (0, V.bG)([lI.A], () => lI.A.get("shop_include_unpublished")),
            a = (0, u3.U)("DevToolsShopPanel"),
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
        return (0, r.jsx)(uK, {
            onDrop: i,
            children: (0, r.jsxs)("div", {
                className: u6.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: u6.dQ,
                        children: [
                            (0, r.jsx)(c.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, lk.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(c.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, lk.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u5, {
                        title: "Layouts",
                        expanded: n.has("layouts"),
                        onToggle: () => s("layouts"),
                        children: [(0, r.jsx)(u8, {}), (0, r.jsx)(u0, {}), a && (0, r.jsx)(u2, {}), (0, r.jsx)(uQ, {})],
                    }),
                    (0, r.jsx)(u5, {
                        title: "Assets",
                        expanded: n.has("assets"),
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
        className: P()(tG.nd, aL.n),
        children: (0, r.jsxs)("div", {
            className: aL.k,
            children: [
                (0, r.jsx)($.D, { variant: "heading-lg/normal", children: "Settings" }),
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
function mn(e) {
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
        (0, r.jsx)(x.Ip, { className: mt.Dx, children: (0, r.jsx)(aV.A, { data: n }) })
    );
}
function ml(e) {
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
                for (let e of n.preDispatches ?? []) tM.h.dispatch(e);
                tM.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), i();
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
                for (let t of e.preDispatches ?? []) tM.h.dispatch(t);
                tM.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), i();
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            }
        }, [t, i]);
    return (0, r.jsxs)("div", {
        className: P()(mt.Dx, mt.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: mt.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: mt.Xf, role: "alert", children: l }),
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
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: aY.fu.NONE,
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
                                : (0, r.jsx)(mn, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aY.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(mn, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: aY.fu.NONE,
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
                                : (0, r.jsx)(ml, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, aY.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(aK, {
        className: mt.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(a$.Ay, {
                className: P()(tG.jr, mt.nZ),
                children: [
                    (0, r.jsx)(a$.Ay.Icon, { icon: me.g, tooltip: t.getName() }),
                    (0, r.jsx)(a$.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function mr() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = V.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(ma), [n])
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
        className: P()(tG.nd, mt.nd),
        children: [
            (0, r.jsx)("div", {
                className: mt.KE,
                children: (0, r.jsx)(ng.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tF, { columns: ms, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
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
            cellClassName: nM.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: nM.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: nM.QN,
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
            group: aY.fu.NONE,
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
                    d = nc()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(a$.Ay, {
                            className: P()(tG.jr, nM.nZ),
                            children: [
                                (0, r.jsx)(a$.Ay.Icon, { icon: nh.U, tooltip: t }),
                                (0, r.jsx)(a$.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(nR, {
                            className: nM.ZK,
                            children: [
                                (0, r.jsx)(nO, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, n_.i$)(d, "LLLL"),
                                        children: (0, n_.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nO, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nO, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nO, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nO, { name: "Override", children: (0, r.jsx)(nw, { value: a.override }) }),
                                (0, r.jsx)(nO, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nO, { name: "Excluded", children: (0, r.jsx)(nw, { value: l }) }),
                                (0, r.jsx)(nO, { name: "Previously tracked", children: (0, r.jsx)(nw, { value: o }) }),
                                (0, r.jsx)(nO, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
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
        n = (0, V.yK)([nD], () => nD.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || md()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        d = l.find((e) => e.key === s),
        { TabBar: c, renderSelectedTab: u } = (0, aY.Ay)({ tabs: mu }, []),
        m = (0, V.bG)([nD], () => nD.trackTriggers),
        h = o.useCallback((e) => {
            tM.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = m ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: P()(tG.nd, nM.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nM.rh,
                children: [
                    (0, r.jsx)(lJ.m, {
                        text: x,
                        children: (0, r.jsx)(eP.K, {
                            size: "sm",
                            variant: m ? "active" : "primary",
                            icon: m ? lZ.E : lX.u,
                            "aria-label": x,
                            onClick: () => h(!m),
                        }),
                    }),
                    (0, r.jsx)(ng.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eP.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": a9.intl.string(a9.t.VkKicb),
                        icon: np.u,
                        onClick: W.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tF, { columns: mc, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsxs)(aK, {
                    className: nM.rf,
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
                            e(), t(), (0, aA.pX)(el.BVt.APP);
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
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(F.B, {
        gap: 8,
        children: [
            (0, r.jsx)(h.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(rQ.S, { label: a, checked: !!n[t], onChange: () => (0, mv.yn)({ [t]: !n[t] }) }, t);
            }),
        ],
    });
}
function mC() {
    let e = (0, V.bG)([mv.Ay], () => mv.Ay.getSnapshot()),
        t = (0, V.bG)([_.Ay], () => _.Ay.supports(mj.O5.VIDEO));
    return (0, r.jsxs)(x.Ip, {
        className: tG.nd,
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
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: mS.l7,
            children: [
                (0, r.jsx)(h.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(F.B, {
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
                (0, r.jsxs)(F.B, {
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
                              _.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  _.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)(F.B, {
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
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(cD.N, {
        collapsibleContent: (0, r.jsx)(mL, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsxs)(U.D, {
                onClick: s,
                children: [
                    (0, r.jsxs)(h.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(U.D, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), a ? l() : n(t);
                        },
                        children: a ? (0, r.jsx)(lZ.E, { size: "xxs" }) : (0, r.jsx)(lX.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(U.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([mk()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
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
        [n, l] = o.useState([]),
        s = (0, V.bG)([_.Ay], () => _.Ay.getKrispSuppressionLevel()),
        [i, d] = o.useState(null),
        u = o.useRef(null),
        m = o.useRef(null),
        [p, v] = o.useState(0.5),
        {
            krispModels: j,
            krispModelOverride: b,
            inputMode: f,
            echoCancellation: y,
            autoThreshold: E,
            vadUseKrisp: C,
            vadKrispActivationThreshold: S,
            noiseCancellation: N,
            noiseSuppression: A,
            noiseSuppressionSupported: k,
            noiseCancellationSupported: I,
            noiseCancellationEnableStats: D,
            vadDuringPreProcess: T,
        } = (0, V.cf)([_.Ay], () => ({
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
            vadDuringPreProcess: _.Ay.getModeOptions().vadDuringPreProcess,
        })),
        R = N ? "KRISP" : A ? "STANDARD" : "NONE",
        O = (0, mR.v)(),
        w = o.useCallback(() => {
            u.current?.stop(), (u.current = null), d(null);
        }, []);
    function M() {
        _.Ay.getMediaEngine().stopRecordingRawSamples();
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
            mD.A.setMode(_.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let P = [];
    return (
        I && P.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        k && P.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        P.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(x.Ip, {
            className: tG.nd,
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
                                (0, r.jsx)(ul.A, {
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
                                                (0, r.jsx)(ul.A, {
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
                        checked: y,
                        onChange: (e) => mD.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(F.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(nu.$n, {
                                color: t ? nu.$n.Colors.RED : nu.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          w(),
                                              a(!0),
                                              mD.A.setLoopback("krisp_test", !0),
                                              _.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  a(!1), mD.A.setLoopback("krisp_test", !1);
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
                                                          suppression: R,
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
                    (0, r.jsx)(ul.A, {
                        label: "Volume",
                        initialValue: p,
                        asValueChanges: function (e) {
                            null != m.current && ((m.current.gain.value = e), v(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)(F.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
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
        a = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
        n = (0, mV.Lh)(),
        l = (0, V.bG)([rZ.A], () => rZ.A.getPremiumTypeSubscription()),
        s = null != n ? (sx.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let s = {
                    subscription_status: el.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: m$.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await n1.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: !1 }),
                    await (0, mG.eO)(a.id),
                    await (0, df.hP)(),
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
            options: mW,
            onSelectionChange: i,
        });
}
var mH =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
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
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await n1.Bo.post({
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
var mq = a(601107);
let mJ = {
        [el.Dmq.UNPAID]: "Unpaid",
        [el.Dmq.ACTIVE]: "Active",
        [el.Dmq.PAST_DUE]: "Past Due",
        [el.Dmq.CANCELED]: "Canceled",
        [el.Dmq.ENDED]: "Ended",
        [el.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [el.Dmq.BILLING_RETRY]: "Billing Retry",
        [el.Dmq.PAUSED]: "Paused",
        [el.Dmq.PAUSE_PENDING]: "Pause Pending",
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
        { id: "unpaid", label: "Unpaid", value: el.Dmq.UNPAID },
        { id: "active", label: "Active", value: el.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: el.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: el.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: el.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: el.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: el.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: el.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: el.Dmq.PAUSE_PENDING },
    ];
function mZ(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(nc()()),
        [c, u] = o.useState(nc()().format("HH:mm")),
        [m, x] = o.useState(!1),
        [p, g] = o.useState(void 0),
        v = async () => {
            if (null == s) return void g("Please select a target date");
            let [e, l] = c.split(":").map(Number),
                i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            x(!0), g(void 0);
            try {
                await mY(t.id, mK.TIME_TRAVEL, { targetDate: i, paymentType: mH.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                g(e.body?.message || e.message || "Failed to time travel");
            } finally {
                x(!1);
            }
        };
    return (0, r.jsx)(mB.Modal, {
        transitionState: l,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: v, disabled: m || null == s },
        ],
        children: (0, r.jsxs)(F.B, {
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
                (0, r.jsxs)(F.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(F.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(h.E, {
                                    variant: "text-xs/normal",
                                    className: om.JX,
                                    children: ["Start: ", nc()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(h.E, {
                                    variant: "text-xs/normal",
                                    className: om.JX,
                                    children: ["End: ", nc()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != p && (0, r.jsx)(G.w, { type: "critical", children: p }),
            ],
        }),
    });
}
function m0(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
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
            let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: _(a) } : null),
                    ...(null != s ? { ended_at: _(s) } : null),
                };
            await n1.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l();
        },
        E = async () => {
            try {
                await mY(n.id, mK.RENEW, {
                    targetDate: nc()(new Date()),
                    paymentType: mH.DEFAULT,
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
                label: `Status: ${(null == t && (t = n.status), t in mJ) ? mJ[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        k = n.hasActiveTrial,
        I = n.metadata?.active_discount_id != null;
    return (
        k && A.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        I && A.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== el.Dmq.ACTIVE &&
            A.push({
                id: "dates",
                label: `Dates: ${(0, n_.i$)(n.createdAt, "LL")} - ${(0, n_.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === el.Dmq.PAUSED &&
            A.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in mQ ? mQ[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: P()(s_.Nr, C ? s_.Qf : s_.C1),
            children: (0, r.jsxs)(d.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in sx.hd ? sx.hd[a].name : `Unknown plan id ${a}`}`,
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
                                (0, r.jsxs)(U.D, {
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
                                                                ? (0, n_.i$)(n.trialEndsAt, "LL")
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
                                (0, r.jsxs)(U.D, {
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
                                                                ? (0, n_.i$)(
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
                            className: om.VK,
                            children: [
                                (0, r.jsxs)(U.D, {
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
                        className: om.VK,
                        children: [
                            (0, r.jsxs)(U.D, {
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
                                (0, r.jsxs)(F.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(g.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: mX,
                                            onSelectionChange: (e) => {
                                                y({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(F.B, {
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
                                                                (0, eF.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(mZ, {
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
                                                        className: om.z3,
                                                        children: (0, r.jsx)(G.w, { type: "critical", children: b }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(F.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(im.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: nc()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => y({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(mz, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(im.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== N ? nc()(N) : void 0,
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
            await n1.Bo.get({
                url: el.Rsh.BILLING_SUBSCRIPTIONS,
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
    let e = (0, V.bG)([rZ.A], () => rZ.A.getPremiumTypeSubscription()),
        t = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
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
    let u = o.useMemo(() => l.filter((e) => e.status !== el.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]),
        h = async () => {
            await n1.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await c();
        },
        p = async () => {
            await n1.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await c();
        };
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: s_.dL,
                    children: [
                        (0, r.jsx)($.D, {
                            variant: "heading-lg/semibold",
                            className: tG.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eP.K, {
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
                    className: P()([s_.uW, s_.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(g.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: m2,
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
                null != e && (0, r.jsx)(m0, { subscription: e, onUpdated: c }),
                (0, r.jsx)($.D, { variant: "heading-lg/semibold", className: tG.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: P()([s_.uW, s_.Uo]),
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
                            (0, r.jsx)($.D, {
                                variant: "heading-lg/semibold",
                                className: tG.wx,
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
var m3 = a(284009),
    m6 = a.n(m3),
    m5 = a(889137),
    m9 = a(412703),
    m4 = a(440703),
    m7 = a(267548),
    he = a(668824),
    ht = a(695366),
    ha = a(359778),
    hn = a(507107),
    hl = a(801365),
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
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(hx.D, {
        label: l,
        children: (0, r.jsx)(hp.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(cT.VN, { ...e, value: a, onChange: (e) => n(t, (0, hh.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(U.D, {
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
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(hb.M, {
        children: (0, r.jsx)(ha.Z, {
            className: P()(hv.Rx, { [hv.aK]: n }),
            outline: n,
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
            (0, r.jsx)(hx.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(h_.A, {
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
    hE = function (e) {
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
var hC = a(31587);
let hS = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, hC.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(F.B, {
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
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = m9.n.PLAY_ON_PLAYSTATION in t || m9.n.PLAY_ON_XBOX in t),
                            (l = m9.n.PLAY_ON_DESKTOP in t),
                            (s = m9.n.STREAM_ON_DESKTOP in t),
                            (i = m9.n.WATCH_VIDEO in t),
                            (r = m9.n.PLAY_ACTIVITY in t),
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
var hD = a(818348);
let hT = function () {
    let e = (0, eo.Ay)();
    return (0, r.jsx)(hx.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(ed.zy, {
                    theme: hD.NJ.LIGHT,
                    isSelected: e === hD.NJ.LIGHT,
                    onSelect: () => (0, cv.u_)({ theme: hD.NJ.LIGHT }),
                }),
                (0, r.jsx)(ed.zy, {
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
    let [t, n] = o.useState(hF),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
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
            var n, s;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (s = { [e]: a }),
                    (0, m5.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function _(e, a) {
        let n = t.config.taskConfigV2.tasks,
            s = n[m9.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [m9.n.WATCH_VIDEO]: { ...s, assets: i } } },
            },
        });
    }
    function y(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, s;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (s = { [e]: a }),
                    (0, m5.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function E(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var s, i;
            l({
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
        (0, hl.tU)(t.config) && (0, hw.hJ)(t, hn.uF.GIFT_INVENTORY_FOR_YOU, hn.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * n8.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => m9.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    m6()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[m9.n.WATCH_VIDEO];
    return (0, r.jsxs)(x.Ip, {
        className: hv.kL,
        children: [
            (0, r.jsx)($.D, { variant: "heading-lg/bold", className: hv.R_, children: "Quest Preview Tool" }),
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
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? hR.COMPLETED_100
                                            : a / n >= 0.75
                                              ? hR.COMPLETED_75
                                              : a / n >= 0.5
                                                ? hR.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? hR.COMPLETED_25
                                                  : hR.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: v,
                }),
            }),
            (0, r.jsx)($.D, { variant: "heading-md/semibold", className: hv.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: hv.OA,
                children: (0, r.jsx)(hI, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)($.D, { variant: "heading-md/semibold", className: hv.fV, children: "Messages" }),
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
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[m9.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [m9.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)($.D, { variant: "heading-md/semibold", className: hv.fV, children: "Assets" }),
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
                            (0, r.jsxs)($.D, {
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
                                            onFileChange: (e, n) =>
                                                (function (e, a, n) {
                                                    if ("asset" === e) {
                                                        var s;
                                                        l({
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
                                            filters: hP,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(F.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)($.D, {
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
            (0, r.jsx)($.D, { variant: "heading-md/semibold", className: hv.fV, children: "Colors & Quest States" }),
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
                                    l({ ...t, userStatus: null });
                                    break;
                                case hR.ENROLLED:
                                    l({ ...t, userStatus: hU({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case hR.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: hU({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case hR.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: hU({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case hR.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: hU({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case hR.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: hU({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case hR.CLAIMED:
                                    l({
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
            (0, r.jsx)($.D, { variant: "heading-lg/bold", className: hv.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: hv.$$,
                children: [
                    (0, r.jsxs)(hf, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
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
                            (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(hi.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(hm.Ay, {
                                    quest: t,
                                    className: hv.d,
                                    questContent: hn.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: hn.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hf, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
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
                            (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            p
                                ? (0, r.jsx)(hc.l, { questId: t.id })
                                : (0, r.jsx)(
                                      hu.M,
                                      {
                                          quest: t,
                                          location: hn.uF.QUESTS_EMBED,
                                          sourceQuestContent: hn.uF.INTERNAL_PREVIEW_TOOL,
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
                                (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, eF.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("99488"),
                                                a.e("88843"),
                                                a.e("92868"),
                                                a.e("63408"),
                                                a.e("77375"),
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
                                                    sourceQuestContent: hn.uF.INTERNAL_PREVIEW_TOOL,
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
                      (0, r.jsx)($.D, {
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
                                let t = ee.default.getUser(e);
                                null != t &&
                                    (h0.info(`recipient username: ${t.username}`),
                                    h0.info(`recipient global name: ${ei.Ay.getGlobalName(t)}`),
                                    h0.info(`recipient nickname: ${af.A.getNickname(t.id)}`));
                            }));
                    break;
                case hZ.rD.GROUP_DM:
                    h0.info(`channel type: ${e.record.type}`),
                        h0.info(`channel id: ${e.record.id}`),
                        h0.info(`name: ${(0, aj.m1)(e.record, ee.default, af.A)}`),
                        e.record.isGroupDM() &&
                            (h0.info(`default name: ${(0, aj.ks)(e.record, ee.default, af.A)}`),
                            h0.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = ee.default.getUser(e);
                                null != t &&
                                    (h0.info(`recipient username: ${t.username}`),
                                    h0.info(`recipient global name: ${ei.Ay.getGlobalName(t)}`),
                                    h0.info(`recipient nickname: ${af.A.getNickname(t.id)}`));
                            }));
                    break;
                case hZ.rD.USER:
                    h0.info(`user id: ${e.record.id}`),
                        h0.info(`username: ${e.record.username}`),
                        h0.info(`global name: ${ei.Ay.getGlobalName(e.record)}`),
                        h0.info(`nickname: ${af.A.getNickname(e.record.id)}`),
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
async function h3() {
    let e = await hH.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = ee.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = m$.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function h6(e) {
    let t = await hH.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = a8.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = hQ.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = hJ.A.getDebugState(e);
    return { user: ee.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var h5 = a(929948);
function h9(e) {
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
                    className: h5.qS,
                    children: n,
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
        n = h4.useField("includeGDMs"),
        l = h4.useField("includeQuickSwitcherState"),
        s = h4.useField("includeUserSearchWorkerState"),
        i = h4.useField("isUploading"),
        u = h4.useField("isSuccess"),
        m = h4.useField("errorMessage"),
        h = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = h4.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    h4.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = af.A.getFriendIDs()),
                            h0.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = ee.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = ei.Ay.getGlobalName(t),
                                    l = af.A.getNickname(t.id),
                                    s = hQ.Ay.getNicknames(t.id);
                                h0.info(`username: ${a}`),
                                    h0.info(`global name: ${n}`),
                                    h0.info(`nickname: ${l}`),
                                    h0.info(`guild nicknames: ${s}`),
                                    h1();
                            }),
                            h0.info("END Discord Friends\n")),
                        a &&
                            ((r = ab.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            h0.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, aj.m1)(e, ee.default, af.A),
                                    a = (0, aj.ks)(e, ee.default, af.A);
                                h0.info(`id: ${e.id}`),
                                    h0.info(`name: ${t}`),
                                    h0.info(`default name: ${a}`),
                                    h0.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ee.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ei.Ay.getGlobalName(t),
                                            l = af.A.getNickname(t.id),
                                            s = hQ.Ay.getNicknames(t.id);
                                        h0.info(`username: ${a}`),
                                            h0.info(`global name: ${n}`),
                                            h0.info(`nickname: ${l}`),
                                            h0.info(`guild nicknames: ${s}`),
                                            h1();
                                    });
                            }),
                            h0.info("END Logging Group DM Channels\n"),
                            h0.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, aj.m1)(e, ee.default, af.A);
                                h0.info(`id: ${e.id}`), h0.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = ee.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = ei.Ay.getGlobalName(n),
                                    i = af.A.getNickname(n.id);
                                h0.info(`username: ${l}`),
                                    h0.info(`global name: ${s}`),
                                    h0.info(`nickname: ${i}`),
                                    h1();
                            }),
                            h0.info("END Logging DM Channels\n")),
                        n &&
                            ((c = ab.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            h0.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, aj.m1)(e, ee.default, af.A),
                                    a = (0, aj.ks)(e, ee.default, af.A);
                                h0.info(`id: ${e.id}`),
                                    h0.info(`name: ${t}`),
                                    h0.info(`default name: ${a}`),
                                    h0.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ee.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ei.Ay.getGlobalName(t),
                                            l = af.A.getNickname(t.id),
                                            s = hQ.Ay.getNicknames(t.id);
                                        h0.info(`username: ${a}`),
                                            h0.info(`global name: ${n}`),
                                            h0.info(`nickname: ${l}`),
                                            h0.info(`guild nicknames: ${s}`),
                                            h1();
                                    });
                            }),
                            h0.info("END Logging Group DM Channels\n"),
                            h0.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, aj.m1)(e, ee.default, af.A);
                                h0.info(`id: ${e.id}`), h0.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = ee.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = ei.Ay.getGlobalName(n),
                                    i = af.A.getNickname(n.id);
                                h0.info(`username: ${l}`),
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
                                    h0.info(`default name: ${(0, aj.ks)(e, ee.default, af.A)}`),
                                    h0.info(`name: ${(0, aj.m1)(e, ee.default, af.A)}`);
                            }),
                            h1(),
                            h0.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = hq.A.getScoreWithoutFetchingLatest(e.id);
                                h0.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            h1(),
                            h0.info("END Frecency\n")),
                        l && h2(),
                        s && h8(),
                        await (0, hz.a)(el.Umv.WEB_APP),
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
                checked: n,
                onChange: () => h4.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(c.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => h4.setState({ includeQuickSwitcherState: !l }),
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
        n = xe.useField("errorMessage"),
        l = xe.useField("lastRunAt"),
        s = o.useCallback(async () => {
            xe.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await h3();
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
                    let t = ee.default.getUser(e),
                        a = null != t ? ei.Ay.getName(t) : "Unknown";
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
                        null != n &&
                            (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: h5.qS,
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
function xn() {
    let e = xa.useField("isRecording"),
        t = xa.useField("isUploading"),
        a = xa.useField("isSuccess"),
        n = xa.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = hY.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), h2());
        }, []);
    o.useEffect(() => {
        if (e) return hY.A.addChangeListener(i), () => hY.A.removeChangeListener(i);
    }, [i, e]);
    let c = o.useCallback(async () => {
        let { isUploading: e } = xa.getState();
        if (!e)
            try {
                xa.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, hz.a)(el.Umv.WEB_APP),
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
            (0, r.jsxs)(sn.e, {
                children: [
                    (0, r.jsx)(m.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => xa.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(h9, {
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
var xl = a(145497);
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
                        let t = a8.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: h5.J1,
                                      children: [
                                          (0, r.jsx)(xl.Ay, { guild: t, iconSize: 16 }),
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
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sZ.y, { size: "sm", color: eB.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(ht.E, { size: "sm", color: eB.A.colors.ICON_FEEDBACK_CRITICAL });
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
                    className: h5.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: h5.J1,
                            children: (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: h5.J1,
                            children: (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: h5.J1,
                            children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: h5.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: h5.J1,
                                        children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = a8.A.getGuild(t),
                                        l = ab.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: h5.J1,
                                            children: [
                                                null != n && (0, r.jsx)(xl.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, aj.m1)(l, ee.default, af.A),
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
                    i({ ok: l.length > 0 }),
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: h5.uk,
                    children: l.map((e) => {
                        let t = a8.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: h5.J1,
                                children: [
                                    (0, r.jsx)(xl.Ay, { guild: t, iconSize: 16 }),
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
                    let t = await h6(e);
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
            (0, r.jsx)(xn, {}),
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
                                (0, xp.id)(el.zgK.COMPONENT_PLAYGROUND))
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
        className: P()(tG.nd, xb.kL),
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
        n = xN.useField("error"),
        l = o.useCallback(() => {
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
            (0, r.jsx)(t7.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xA,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = xS.od[e].split("/");
                        xN.setState({ urlString: el.BVt.SETTINGS(t, a), error: null });
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
            (0, r.jsxs)(sn.e, {
                children: [
                    (0, r.jsx)(m.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(m.$, {
                        variant: "secondary",
                        onClick: () => (0, nf.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
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
            (0, r.jsx)(t7.Z, {
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
    xO = a(861283),
    xw = a(53181);
function xM(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(h.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: xw.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: xw.NF,
              children: [
                  (0, r.jsxs)(U.D, {
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
                  s && (0, r.jsx)("div", { className: xw.m4, children: l }),
              ],
          });
}
function xL(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
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
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, xR.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(xL, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(xM, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function xP() {
    let { node: e } = (0, X.Ay)(xO.D, ""),
        t = (0, X.KA)();
    return (0, r.jsxs)(d.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(c.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: X.jL,
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
                group: aY.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(nV, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aY.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(mm, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aY.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(mr, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aY.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(l7, {}),
            },
        ];
        return (
            aG.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aY.fu.SHOP, render: () => (0, r.jsx)(u9, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aY.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(dM, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aY.fu.SHOP,
                    render: () => (0, r.jsx)(tT, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aY.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cZ, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aY.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(sa, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aY.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(ce.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aY.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(no, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aY.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(sd, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aY.fu.GAMES, render: () => (0, r.jsx)(dv, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aY.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(iu, {}),
                }),
                aF.isPlatformEmbedded &&
                    (e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: aY.fu.GAMES,
                        render: () => (0, r.jsx)(lV, {}),
                    }),
                    e.push({
                        id: "running_game_detection",
                        name: "Running Game Detection",
                        group: aY.fu.GAMES,
                        tags: ["detection", "filter", "blocklist", "native"],
                        render: () => (0, r.jsx)(ua, {}),
                    })),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: aY.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, r.jsx)(lM, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aY.fu.GAMES, render: () => (0, r.jsx)(u7, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aY.fu.GAMES,
                    render: () => (0, r.jsx)(ne, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: aY.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(ag, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: aY.fu.GAMES,
                    render: () => (0, r.jsx)(aU, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: aY.fu.GAMES,
                    render: () => (0, r.jsx)(ai, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aY.fu.USERS,
                    render: () => (0, r.jsx)(xc, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aY.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(M, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aY.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(c8, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aY.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(iZ, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aY.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rS, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aY.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(rm, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aY.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(ls, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aY.fu.UI, render: () => (0, r.jsx)(lT, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aY.fu.UI,
                render: () => (0, r.jsx)(ck, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aY.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sO, { devSettingsCategory: aB.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aY.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rY, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aY.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sO, { devSettingsCategory: aB.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aY.fu.USERS, render: () => (0, r.jsx)(cu, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aY.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(r3, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aY.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rD, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aY.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rf, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aY.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(nl, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aY.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(ll, {}),
            }),
            aG.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: aY.fu.USERS,
                    render: () => (0, r.jsx)(t9, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: aY.fu.USERS,
                    render: () => (0, r.jsx)(aN, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aY.fu.DCF, render: () => (0, r.jsx)(lA, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aY.fu.DCF, render: () => (0, r.jsx)(lm, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aY.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(rr, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aY.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(cn, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aY.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(od, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aY.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dX, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: aY.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(op, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aY.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(m8, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aY.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sS, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aY.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(iv, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aY.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(mU, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: aY.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(mC, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aY.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(mN, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aY.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(rn, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aY.fu.BOOSTING, render: () => (0, r.jsx)(sD, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aY.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rx, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aY.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(xG, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aY.fu.QUESTS,
                render: () => (0, r.jsx)(aD, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aY.fu.QUESTS,
                render: () => (0, r.jsx)(mg, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aY.fu.BILLING,
                render: () => (0, r.jsx)(xy, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aY.fu.QUESTS,
                render: () => (0, r.jsx)(h$, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aY.fu.USERS,
                render: () => (0, r.jsx)(cM, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aY.fu.USERS,
                render: () => (0, r.jsx)(n0, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aY.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lK, {}),
            }),
            e
        );
    }, []);
}
