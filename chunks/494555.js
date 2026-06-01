a.d(t, { x: () => xL }), a(321073);
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
    _ = a(761853),
    y = a(274372),
    E = a(372684),
    C = a(61302),
    S = a(871421),
    A = a(227628),
    N = a(468550);
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
        l = o.useCallback(async (e, t, a, l) => {
            let n = _.Ay.getMediaEngine();
            if (null == n.setClipsPerfMonitoring) return T("setClipsPerfMonitoring unsupported in this build"), null;
            D(l);
            try {
                let l = await n.setClipsPerfMonitoring(e, t, a);
                return I(l.enabled), l;
            } catch (e) {
                return T(`${l} failed: ${e instanceof Error ? e.message : String(e)}`), null;
            } finally {
                D(null);
            }
        }, []),
        n = o.useCallback(
            async (t) => {
                I(t);
                let a = await l(t, !1, !1, t ? "enable" : "disable");
                null != a ? T(`recorder ${a.enabled ? "enabled" : "disabled"}`) : I(e);
            },
            [l, e],
        ),
        s = o.useCallback(async () => {
            let t = await l(e, !0, !1, "save");
            if (null == t) return;
            if ("" === t.html) return void T("save: server returned empty html");
            let a = `clips-perf-${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            try {
                let e = O.from(t.html, "utf8"),
                    l = await b.A.fileManager.saveWithDialog2(e, a);
                if (null != l && !0 === l.canceledByUser) return void T("save: canceled");
                T(`saved ${t.eventCount} events (${t.html.length} bytes)`);
            } catch (e) {
                T(`save failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, [l, e]),
        i = o.useCallback(async () => {
            let t = await l(e, !1, !0, "clear");
            null != t && T(`cleared ${t.eventCount} events`);
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
function M() {
    let e = (0, A.MZ)((e) => e.isOpen),
        t = (0, N.sY)((e) => e.isOpen),
        a = o.useCallback((e) => {
            if (!e) return void (0, N.kF)();
            let t = f.Ay.getVisibleGame()?.id,
                a = y.Ay.getLastClipsSession()?.newClipIds[0],
                l = (null != a ? y.Ay.getClipById(a)?.applicationId : null) ?? y.Ay.getClips()[0]?.applicationId,
                n = t ?? l;
            null != n && (0, N.M8)(n);
        }, []),
        [l, n] = o.useState(E.rb.KILL),
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
                                    value: l,
                                    onSelectionChange: (e) => n(e),
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
                                C.Ts({ type: E.Gy.GAME_EVENT, eventType: l, importance: s, title: h, description: _ });
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
                            onChange: (e) => (e ? (0, A.w9)() : (0, A.yj)()),
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
    Q = a(740572),
    X = a(581298),
    Z = a(98596),
    ee = a(287809),
    et = a(901139),
    ea = a(641886),
    el = a(780898),
    en = a(652215),
    es = a(249637),
    ei = a(427262);
function er(e) {
    let { nameplate: t } = e,
        a = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
        l = ei.Ay.useName(a) ?? "";
    return (0, r.jsx)(es.g, {
        username: l,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: en.clD.ONLINE,
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
        l = (0, eo.Ay)();
    return (0, r.jsxs)("div", {
        className: ec.N,
        children: [
            (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: ec.Z,
                children: ea.Z6.map((e) => {
                    let n = l !== en.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        ed.S4,
                        { onSelect: () => a(e), style: { background: n }, name: e.name, isSelected: s },
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
        l = (0, ex.i)(),
        n = new eh.cq({ id: "0", type: en.rbe.DM, name: "self", guild_id: "0", recipients: [l.id] });
    return (0, r.jsx)(em.th, { selected: t, channel: n, user: l, nameplate: a });
}
var eg = a(698638),
    ev = a(877203);
function ej() {
    let [e, t] = (0, o.useState)(!1),
        [a, l] = (0, o.useState)(!1),
        [n, s] = (0, o.useState)(null),
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
                        className: ev.uQ,
                        children: [
                            e && (0, r.jsx)(Q.A, { node: i }),
                            a &&
                                (0, r.jsx)(eu, {
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
                className: ev.iW,
                children: [
                    (0, r.jsx)(eb, { nameplate: n }, n?.palette?.name),
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
                                        l = await a.arrayBuffer();
                                    x(t, t, (0, el.nI)(l)), c(t, t, ea.Wj);
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
            className: ev.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: n,
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
    let { src: t, onSetStatic: a, removeAsset: l } = e;
    return (0, r.jsxs)("div", {
        className: ev.xO,
        children: [
            (0, r.jsx)(U.D, {
                onClick: () => l(t),
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
var eA = a(835245),
    eN = a(157559),
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
    ez = a(228537),
    eH = a(735438),
    eK = a.n(eH),
    eY = a(219220),
    eq = a(480335);
let eJ = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eH.cloneDeep)(t), [t]),
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
        { layerData: s } = (0, eY.A)({ skuId: "debug", layers: n.effects });
    return (0, r.jsx)(eq.p, { profileEffect: n, layerData: s, skuId: "debug" });
};
var eQ = a(314485),
    eX = a(778765);
let eZ =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    e0 = { [eO.qH.THUMBNAIL]: null, [eO.qH.STATIC]: null, [eO.qH.REDUCED_MOTION]: null },
    e1 = "debug",
    e2 = "reduced-motion-preview-modal",
    e3 = (e) => {
        let { transitionState: t, onClose: a, frameSrc: l, theme: n } = e;
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
                                theme: n,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: eZ,
                                        alt: "",
                                        className: P()(eQ.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != l &&
                                "" !== l &&
                                (0, r.jsx)("img", { src: l, className: eQ.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    e8 = (e) => {
        let { type: t, frame: a, theme: l, onClear: n } = e,
            s = t === eO.qH.REDUCED_MOTION,
            i = s ? eZ : eX.A,
            o = (0, r.jsx)(eG.N, {
                theme: l,
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
                                                (0, r.jsx)(e3, { ...e, frameSrc: a?.src ?? null, theme: l }),
                                            ),
                                        { modalKey: e2, onCloseRequest: () => (0, eF.closeModal)(e2) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eQ.zd, children: o }),
                null != a && (0, r.jsx)(m.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: n }),
            ],
        });
    },
    e6 = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eR.wu)(),
            l = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
            [n, s] = o.useState(!0),
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
            A = d ? eB.A.themes.DARKER : eB.A.themes.LIGHT,
            N = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            k = (e, t) => {
                let a = N(t);
                null != a &&
                    (0, eO.Mz)(a, (t) => {
                        f((l) => ({ ...l, [e]: (0, eO.GT)(t, a) }));
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
        null == l)
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
                                      let t = N(e);
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
                                                    user: l,
                                                    currentUser: l,
                                                    transitionState: e$.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: eQ.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eG.N, {
                                                theme: A,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: P()(eQ.aM, e),
                                                        children: (0, r.jsx)("img", { src: eX.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      n &&
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
                                                  user: l,
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
                                                          e8,
                                                          {
                                                              type: t,
                                                              frame: a,
                                                              theme: A,
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
                                                          children: (0, r.jsx)(ek.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = N(e)) &&
                                                                      (0, eO.Mz)(a, (e) => {
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
            { deleteProfileEffect: l } = (0, eR.wu)();
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
                                e.preventDefault(), e.stopPropagation(), l(t.skuId);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
function e4() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eR.wu)(),
        [l, n] = o.useState(),
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
                              l = e.description?.toLowerCase() ?? "";
                          return a.includes(t) || l.includes(t);
                      }),
            [c, d],
        ),
        p = o.useCallback(
            (e, a) => {
                if (null == a || !e.type.startsWith("text/")) return (0, eT.Ni)(e5);
                let [l, n] = a.split(",");
                if (!l.includes("text/plain")) return (0, eT.Ni)(e5);
                let s = JSON.parse(atob(n));
                (s.skuId = (0, eA.A)()), t(s), (0, eT.GF)("Profile Effect (maybe??) imported!");
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
            null == l &&
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
                                                (await eN.A.confirm({
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
                                        (0, r.jsx)(e9, { profileEffect: e, onClick: () => n(e) }, e.skuId),
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
                                        t({ skuId: (0, eA.A)(), name: "New Profile Effect", effects: [] });
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
                                                    n({
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
            null != l && (0, r.jsx)(e6, { profileEffect: l }),
        ],
    });
}
var e7 = a(935399),
    te = a(462887),
    tt = a(289873),
    ta = a(478016),
    tl = a(565645),
    tn = a(7584),
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
    let { purchases: a, isFetchingPurchases: l } = (0, tu.Bf)(),
        n = o.useMemo(() => (0, eI.MG)(a, new Map()), [a]),
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
                        (0, r.jsx)(tl.A, {
                            emojiName: tn.Ay.getByName("frame_with_picture")?.surrogates,
                            className: tx.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === n.length && l && (0, r.jsx)(tt.y, {}),
                0 === n.length && !l && (0, r.jsx)(tv, {}),
                n.length > 0 &&
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
let tA = (e) => {
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
    tN = () => {
        let e = (0, tb.bG)([ee.default], () => ee.default.getCurrentUser()),
            t = (0, tb.bG)([t_.A], () => t_.A.categories),
            a = (0, tb.bG)([ty.A], () => ty.A.purchases),
            l = (0, tb.bG)([t_.A], () => t_.A.lastSuccessfulFetch),
            n = t.size > 0 && a.size > 0 && null != l,
            { isFetching: s, categories: i } = (0, tu.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: n }),
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
                                              (0, r.jsx)(tA, { skuId: p.skuId }),
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
            a = (0, V.bG)([K.A], () => K.A.getWindowOpen(en.MLl.DEVTOOLS_POPOUT));
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
                                return (0, r.jsx)(tN, {});
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
        className: tG.CZ,
        children: (0, r.jsx)(tU.OZ, {
            className: l,
            innerClassName: tG.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    l = tG.ZR;
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
                    u = P()(tG.jD, { [tG.wD]: o === i, rowClassName: n });
                return (0, r.jsx)(
                    U.D,
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
        l = (0, V.bG)([tz.A], () => tz.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let n = e?.entries?.flatMap((e) => {
        let { content: n } = e;
        if (!(0, tq.l)(t, n)) return [];
        let s = a[(0, tY.$)(n)];
        return (0, r.jsxs)(
            "li",
            {
                className: tX.p,
                children: [
                    (0, r.jsx)(tZ, { type: n.author_type, id: n.author_id }),
                    !s && (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, tJ.I5)(n) &&
                        (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["Expired at ", n.expires_at] }),
                    l.has(n.id) && (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            n.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != n ? (0, r.jsx)("ul", { children: n }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var t1 = a(576470),
    t2 = a(85451);
function t3() {
    let e = (0, V.bG)([tH.A], () => tH.A.getFeed(tQ.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, V.cf)(
            [tH.A],
            () => tH.A.getFeedState(tQ.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        l = (0, V.bG)([tH.A], () => tH.A.getLastFeedFetchDate(tQ.X1.GLOBAL_FEED));
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
                    null != l ? (0, r.jsx)(t2.z, { inline: !0, entry: { start: l.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var t8 = a(866839);
let t6 = [
    {
        key: "type",
        cellClassName: P()(t8.Hn, t8.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(h.E, { variant: "text-md/semibold", children: tR.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: P()(t8.Hn, t8.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: t8.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(t5, { type: t });
        },
    },
];
function t5(e) {
    let { type: t } = e,
        a = (0, V.bG)([tH.A], () => tH.A.getFilters()),
        l = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(c.d, {
        checked: l,
        onChange: function () {
            l
                ? tM.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tM.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function t9() {
    var e;
    let t,
        a = (0, V.bG)([tH.A], () => tH.A.getFeed(tQ.X1.GLOBAL_FEED)),
        l = (0, V.bG)([tH.A], () => tH.A.getDebugImpressionCappingDisabled()),
        n = (0, V.bG)([tz.A], () => tz.A.getDebugFastImpressionCappingEnabled()),
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
            className: t8.Qs,
            children: [
                (0, r.jsxs)(F.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(tF, { columns: t6, data: s }),
                        (0, r.jsx)(t3, {}),
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
                            text: l ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tM.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: n ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
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
    al = a(282435);
function an(e) {
    return al.Bf.get(e) ?? 0;
}
function as(e) {
    let { gameId: t } = e,
        { data: a, isLoading: l } = (0, aa.I)(t),
        n = (0, V.bG)([at.A], () => at.A.hasNoData(t), [t]);
    return l || (null == a && !n)
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
        [a, l] = o.useState(""),
        n = (0, V.bG)([tV.A], () => tV.A.games),
        s = o.useMemo(
            () =>
                n
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => an(t.value) - an(e.value)),
            [n],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => an(t.item.value) - an(e.item.value), keys: ["label"] }), []),
        d = o.useCallback((e) => {
            t(e), null != e && l("");
        }, []),
        c = o.useCallback((e) => {
            l(e), e.trim().length > 0 && t(null);
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
    ao = a(617617),
    ad = a(355898),
    ac = a(644103),
    au = a(574560),
    am = a(994182);
let ah = [ar.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL, ar.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK].map((e) => ({
    id: String(e),
    label: ar.M[e],
    value: e,
}));
function ax() {
    let [e, t] = o.useState("dismissals"),
        [a, l] = o.useState(ar.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        n = (0, V.bG)([ao.A], () => ao.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        s = (0, V.bG)([au.A], () => au.A.getAllGameUpsellDismissals(a)),
        i = o.useMemo(() => Object.keys(s ?? {}), [s]),
        d = (0, tP.A)(i),
        [c, u] = o.useState(""),
        [x, p] = o.useState([]);
    o.useEffect(
        () =>
            (0, ac.Y)((e) => {
                p((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let b =
        n?.lastDismissedAtMs != null && "0" !== n.lastDismissedAtMs
            ? new Date(Number(n.lastDismissedAtMs)).toLocaleString()
            : "Never";
    return (0, r.jsxs)("div", {
        className: am.nd,
        children: [
            (0, r.jsxs)("div", {
                className: am.$H,
                children: [
                    (0, r.jsx)(U.D, {
                        className: P()(am.V3, { [am.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(U.D, {
                        className: P()(am.V3, { [am.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", x.length > 0 ? `(${x.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: am.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: am.uW,
                              children: (0, r.jsx)(g.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => l(e),
                                  options: ah,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: am.uW,
                              children: [
                                  (0, r.jsx)($.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, r.jsxs)(h.E, { variant: "text-sm/normal", children: ["Last dismissed: ", b] }),
                                  (0, r.jsxs)(h.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", n?.numTimesDismissed ?? 0],
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: am.uW,
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
                                          (0, ad.M)([c.trim()], a), u("");
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(j.c, {}),
                          (0, r.jsxs)("div", {
                              className: P()(am.uW, am.LY),
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
                                                    let l = d[t],
                                                        n = s?.[e];
                                                    if (null == n) return null;
                                                    let i = l?.getIconURL(32);
                                                    return (0, r.jsxs)(
                                                        "div",
                                                        {
                                                            className: am.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: am.MY,
                                                                    children: [
                                                                        null != i &&
                                                                            (0, r.jsx)("img", {
                                                                                src: i,
                                                                                alt: "",
                                                                                className: am.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: am.qi,
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
                                                                            onClick: () => (0, ad.e)(e, a),
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
                                                        for (let e of i) (0, ad.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: am.Lj,
                      children: (0, r.jsxs)("div", {
                          className: am.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: am.aq,
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
                                                className: am.Nr,
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-xs/semibold",
                                                        children: new Date(e.timestamp).toLocaleTimeString(),
                                                    }),
                                                    (0, r.jsxs)(h.E, {
                                                        variant: "text-xs/normal",
                                                        children: ["DC: ", ar.M[e.dismissibleContent]],
                                                    }),
                                                    (0, r.jsxs)(h.E, {
                                                        variant: "text-xs/normal",
                                                        children: [
                                                            "Apps: ",
                                                            e.applicationIds.length > 0
                                                                ? e.applicationIds.join(", ")
                                                                : "none",
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(h.E, {
                                                        variant: "text-xs/normal",
                                                        children: [
                                                            "Eligible:",
                                                            " ",
                                                            e.eligibleToShow.length > 0
                                                                ? (0, r.jsx)("span", {
                                                                      className: am.OK,
                                                                      children: e.eligibleToShow.join(", "),
                                                                  })
                                                                : "none",
                                                        ],
                                                    }),
                                                    e.disabled &&
                                                        (0, r.jsx)(h.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-muted",
                                                            children: "(disabled)",
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
var ap = a(696986),
    ag = a(47167),
    av = a(734057),
    aj = a(994500),
    ab = a(310031),
    af = a(394953),
    a_ = a(732421);
let ay = [
        {
            key: "channelName",
            cellClassName: P()(a_.Hn, a_.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: P()(a_.Hn, a_.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    aE = [
        {
            key: "channelName",
            cellClassName: P()(a_.Hn, a_.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: P()(a_.Hn, a_.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: P()(a_.Hn, a_.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(h.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function aC() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, af.U4)(),
        {
            isLoading: a,
            hasLoadedEver: l,
            hasPreloaded: n,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, tb.cf)([ab.A], () => ({
            isLoading: ab.A.isLoading,
            hasLoadedEver: ab.A.hasLoadedEver,
            hasPreloaded: ab.A.hasPreloaded,
            hasMoreToLoad: ab.A.hasMoreToLoad,
            isLoadingComplete: ab.A.isLoadingComplete,
        })),
        o = (0, tb.bG)([ab.A], () => ab.A.currentRequestAnalyticsPayload),
        d = (0, tb.cf)([ab.A], () => ab.A.getChannelInfoMap()),
        u = (0, tb.cf)([av.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        l = av.A.getChannel(a);
                    e[a] = l ?? null;
                }),
                e
            );
        }),
        m = (0, tb.cf)([av.A], () =>
            t.reduce((e, t) => {
                let a = av.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, tb.bG)([ab.A], () => ab.A.getInboxMessages()),
        p = (0, tb.bG)([ab.A], () => ab.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tG.nd,
        children: (0, r.jsxs)(x.Ip, {
            className: a_.Qs,
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
                        (0, r.jsx)(ap.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(tF, {
                            columns: ay,
                            data: Object.entries(m).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, ag.m1)(a, ee.default, aj.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Store State" }),
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
                        (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(tF, {
                            columns: aE,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, l] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, ag.m1)(t, ee.default, aj.A) : "",
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
var aS = a(976860),
    aA = a(340124),
    aN = a(988483);
let ak = function () {
    return (0, r.jsxs)("div", {
        className: aN.k,
        children: [
            (0, r.jsx)(h.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(m.$, {
                onClick: () => {
                    (0, aA.Ov)(), (0, aS.pX)(en.BVt.QUEST_HOME);
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
var aI = a(271866),
    aD = a(868511),
    aT = a(147964),
    aR = a(760716),
    aO = a(115093),
    aw = a(11039);
let aM = window.GLOBAL_ENV.RELEASE_CHANNEL === aO.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function aL() {
    let e = (0, aR.i)((e) => e.overrideApplicationId),
        t = (0, aR.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [l, n] = o.useState(aM),
        [s, i] = o.useState(en.FYj),
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
        h = (0, aR.i)((e) => e.showSelfActivity),
        x = (0, aR.i)((e) => e.setShowSelfActivity),
        p = (0, aR.i)((e) => e.recommendationApplicationIds),
        g = (0, aR.i)((e) => e.setRecommendationApplicationIds),
        j = o.useCallback(
            (e) => {
                e ? g(s) : g(null);
            },
            [s, g],
        ),
        b = (0, V.bG)([aT.A], () => null != aT.A.testModeApplicationId),
        f = o.useCallback((e) => {
            e ? (0, eF.openModal)((e) => (0, r.jsx)(aD.A, { ...e })) : aI.cL();
        }, []),
        _ = (0, t$.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: l,
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
            (0, aS.pX)(en.BVt.COLLECTIBLES_SHOP_GAME_SHOP(l));
        }, [l]);
    return (0, r.jsx)("div", {
        className: P()(tG.nd, aw.n),
        children: (0, r.jsxs)("div", {
            className: aw.k,
            children: [
                (0, r.jsx)(v.k, { label: "Application ID", value: l, onChange: u }),
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
var aP = a(540999),
    aU = a(723702),
    aG = a(865116);
a(670812), a(772958);
var aF = a(58736);
a(558179), a(21574);
var aB = a(231545),
    a$ = a(761929),
    aV = a(23599);
function aW(e) {
    let { resizableNode: t, minHeight: a, onResize: l } = e,
        n = (0, a$.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: l,
            orientation: a$.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: n, className: aV.Di });
}
function az(e) {
    let { children: t, className: a, initialHeight: l, minHeight: n } = e,
        s = o.useRef(null),
        [i, d] = o.useState(l);
    return (0, r.jsxs)("div", {
        ref: s,
        className: aV.kL,
        style: { minHeight: n, height: i },
        children: [
            (0, r.jsx)(aW, { resizableNode: s, minHeight: n, onResize: d }),
            (0, r.jsx)("div", { className: P()(aV.KZ, a), children: t }),
        ],
    });
}
var aH = a(231643);
a(895017), aH.fu.NONE, aH.fu.NONE;
var aK = a(824552),
    aY = a(688810),
    aq = a(975460),
    aJ = a(46225),
    aQ = a(487431),
    aX = a(905552),
    aZ = a(546183),
    a0 = a(134861),
    a1 = a(71393),
    a2 = a(967198),
    a3 = a(157257),
    a8 = a(942370),
    a6 = a(375708),
    a5 = a(311350),
    a9 = a(325126);
function a4() {
    var e;
    let t,
        a,
        l = o.useRef(null),
        { analyticsLocations: n } = (0, aY.Ay)(tf.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        d = (0, V.bG)([a2.A], () => a2.A.getGuildId()),
        c = (0, V.bG)([a1.A], () => a1.A.getGuild(d)),
        u = c?.gameApplicationIds ?? [],
        x = (0, tP.A)(u).filter((e) => null != e),
        p = (0, V.bG)([f.Ay, a3.A], () => (0, aX.A)(f.Ay, a3.A)),
        g = (0, tP.h)(s),
        b = (0, aq.g)(g),
        _ = (0, V.yK)(
            [tL.A],
            () => g?.linkedGames?.map((e) => tL.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        y = (0, aJ.RD)(g, { allowedFlows: [a8._M.RPC], debug: !0 }),
        E = (0, aJ.RD)(g, { allowedFlows: [a8._M.WEB], debug: !0 }),
        C = (0, V.bG)([a0.A], () => null != b && a0.A.isConnected(b.id)),
        S = (0, aJ.RD)(g, { debug: !0 }),
        { canDeauthorize: A, deauthorize: N } =
            ((e = S.connectionApp?.id),
            (t = (0, V.bG)([aZ.default], () => aZ.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aK.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: l,
        className: P()(tG.nd, a9.nd),
        children: [
            (0, r.jsxs)("div", {
                className: a9.kL,
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
                className: a9.kL,
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
                                ? _.map((e) => ((0, aq.t)(g)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)("div", {
                className: a9.kL,
                children: [
                    (0, r.jsx)($.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(aQ.VT, {
                        overallStatus: y.debug.isSubscribedToAuthorizeRequest
                            ? aQ.nW.OVERALL_GOOD
                            : C
                              ? aQ.nW.WARN
                              : aQ.nW.OVERALL_BAD,
                        name: a6.intl.string(a5.default.AGLx00),
                        steps: [
                            {
                                status: C ? aQ.nW.GOOD : aQ.nW.BAD,
                                text: a6.intl.string(a5.default.kxF9br),
                                description: C ? null : a6.intl.string(a5.default.PFxxJa),
                                learnMoreLink: C
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: y.debug.isSubscribedToAuthorizeRequest
                                    ? aQ.nW.GOOD
                                    : C
                                      ? aQ.nW.WARN
                                      : aQ.nW.BAD,
                                text: a6.intl.string(a5.default.S94dzs),
                                description:
                                    y.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : a6.intl.string(a5.default.aTULMB),
                                learnMoreLink:
                                    y.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: S.chosenFlow === a8._M.RPC,
                    }),
                    (0, r.jsx)(aQ.VT, {
                        overallStatus: E.debug.hasConnectionEntrypointUrl ? aQ.nW.OVERALL_GOOD : aQ.nW.OVERALL_BAD,
                        name: a6.intl.string(a5.default.K3ObrU),
                        steps: [
                            {
                                status: E.debug.hasConnectionEntrypointUrl ? aQ.nW.GOOD : aQ.nW.BAD,
                                text: a6.intl.string(a5.default["8a7IrV"]),
                                description: E.debug.hasConnectionEntrypointUrl
                                    ? a6.intl.formatToPlainString(a5.default["9iLeL2"], {
                                          url: E.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: S.chosenFlow === a8._M.WEB,
                    }),
                    (0, r.jsx)(aQ.Sy, {
                        status: S.hasAlreadyLinked ? aQ.nW.OVERALL_GOOD : aQ.nW.OVERALL_BAD,
                        text: a6.intl.string(a6.t["Vu/zmQ"]),
                    }),
                    0 === S.debug.validFlows.length &&
                        (0, r.jsx)(h.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: a6.intl.string(a5.default.eg0mNa),
                        }),
                    (0, r.jsx)(m.$, {
                        disabled: !S.canStartAuthorization,
                        onClick: () => S.startAuthorization({ analyticsLocations: n }),
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
                        onClick: () => y.startAuthorization({ analyticsLocations: n }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, r.jsx)(m.$, {
                        disabled: !E.canStartAuthorization,
                        onClick: () => E.startAuthorization({ analyticsLocations: n }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, r.jsx)(m.$, { disabled: !A, onClick: N, variant: "critical-primary", text: "Deauthorize" }),
                ],
            }),
            g?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(j.c, {}),
                        (0, r.jsxs)("div", {
                            className: a9.kL,
                            children: [
                                (0, r.jsx)($.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, r.jsx)("div", {
                                    className: a9.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: a9.Tc,
                                        children: [
                                            null != g.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: g.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: a9.L8,
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
var a7 = a(427358),
    le = a(465153);
let lt = [
    {
        key: "user",
        cellClassName: le.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: le.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: le.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: le.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function la() {
    let e = (0, V.yK)([a7.A, ee.default], () =>
        a7.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: l, isFriend: n } = e;
            return { user: ee.default.getUser(t), affinity: a, vcProbability: l, isFriend: n, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tF, { className: tG.nd, columns: lt, rowClassName: le.nM, data: e });
}
var ll = a(139716),
    ln = a(847599),
    ls = a(282621);
function li() {
    return (0, r.jsx)("div", {
        className: P()(tG.nd, ls.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(j.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: ls.h,
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
                                ll.A.showAgeVerificationGetStartedModal({ entryPoint: ln.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var lr = a(989349),
    lo = a.n(lr),
    ld = a(862482),
    lc = a(624479),
    lu = a(555704),
    lm = a(285796),
    lh = a(241326),
    lx = a(892547),
    lp = a(297413),
    lg = a(379078),
    lv = a(704554),
    lj = a(957565),
    lb = a(58703),
    lf = a(80703),
    l_ = a(495544);
let ly = 0,
    lE = [],
    lC = 0,
    lS = [],
    lA = !1;
class lN extends V.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(l_.default, aP.A);
    }
    get loggedEvents() {
        return lE;
    }
    get loggedEventsVersion() {
        return lC;
    }
    get loggedTriggers() {
        return lS;
    }
    get trackTriggers() {
        return lA;
    }
}
let lk = new lN(tM.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: l } = e;
        aP.A.isDeveloper &&
            (lE.push({
                key: (ly++).toString(),
                event: t,
                properties: a,
                fingerprint: null != l ? (0, lf.d)(l) : l_.default.getId(),
                timestamp: new Date(),
            }),
            lC++,
            lE.length > 500 && (lE = lE.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: l, excluded: n, location: s, previouslyTracked: i } = e;
        !aP.A.isDeveloper ||
            (lA &&
                (lS = [
                    ...lS,
                    {
                        key: (0, eA.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: l,
                        excluded: n,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                lS.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        lA = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (lE = []), lC++, (lS = []);
    },
});
var lI = a(658675);
function lD(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: P()(tG.qo, t), children: a });
}
let lT = (e) => {
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
                (0, r.jsx)("dt", { className: tG.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tG.Nw,
                    children: [
                        a,
                        null != l
                            ? (0, r.jsx)(U.D, {
                                  tag: "span",
                                  className: tG.nH,
                                  onClick: () => (0, lj.C)(l, () => s(!0)),
                                  children: n
                                      ? (0, r.jsx)(ta.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(lc.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function lR(e) {
    let { value: t } = e;
    return (0, r.jsx)(lI.P, { checked: t });
}
var lO = a(733657);
let lw = [
    {
        key: "event",
        cellClassName: lO.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: lO.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function lM(e) {
    let { children: t } = e;
    return (0, r.jsx)(x.Ip, { className: lO._D, children: (0, r.jsx)("dl", { children: t }) });
}
function lL(e) {
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
            className: lO.fY,
            children: [
                (0, r.jsx)("dt", { className: lO.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(U.D, {
                    tag: "span",
                    className: lO.nH,
                    onClick: () => (0, lj.C)(JSON.stringify(l), () => s(!0)),
                    children: n
                        ? (0, r.jsx)(ta.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(lc.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let lP = new Set(["client_performance_cpu", "client_performance_memory"]),
    lU = [
        {
            id: "details",
            name: "Details",
            group: aH.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: l, fingerprint: n },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = ee.default.getUser(n),
                    d = lo()(l);
                return (0, r.jsxs)("div", {
                    className: lO.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(aF.Ay, {
                            className: P()(tG.jr, lO.nZ),
                            children: [
                                (0, r.jsx)(aF.Ay.Icon, { icon: lu.U, tooltip: t }),
                                (0, r.jsxs)(aF.Ay.Title, {
                                    wrapperClassName: lO.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(U.D, {
                                            tag: "span",
                                            className: lO.KE,
                                            onClick: () => (0, lj.C)(t),
                                            children: (0, r.jsx)(lc.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(aF.Ay.Icon, {
                                    icon: lc.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, lj.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: l, fingerprint: n, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(aF.Ay.Icon, { icon: lm.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(lD, {
                            className: lO.ZK,
                            children: [
                                (0, r.jsx)(lT, {
                                    name: "Timestamp (local)",
                                    copyValue: l.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: l.toISOString(),
                                        title: (0, lb.i$)(d, "LLLL"),
                                        children: ["(", lo().locale(), ") ", (0, lb.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(lT, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(lp.A, { user: o }),
                                    }),
                                (0, r.jsx)(lT, {
                                    name: "Fingerprint",
                                    copyValue: n,
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(lM, {
                            children: Object.entries(a).map((e) => {
                                let [a, l] = e,
                                    n = lP.has(a)
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
                                                lL,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: l || null },
                                                    children:
                                                        null != l
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(l) })
                                                            : (0, r.jsx)("code", {
                                                                  className: lO.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== n &&
                                                null !== n.average &&
                                                (0, r.jsx)(
                                                    lL,
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
    lG = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(lG)
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
    lF = {
        searchType: lg.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function lB() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        l = (0, V.bG)([lk], () => lk.loggedEventsVersion),
        [n, s] = o.useState(() => Object.keys(lG)),
        [i, d] = o.useState(lk.loggedEvents),
        c = o.useCallback((e) => {
            d(e);
        }, []);
    (0, lv.RT)(t, lk.loggedEvents, c, lF, [l]);
    let u = i.filter((e) => {
            for (let t of n) if (lG[t].filter(e)) return !0;
            return !1;
        }),
        [m, h] = o.useState(void 0),
        x = u.find((e) => e.key === m),
        { TabBar: p, renderSelectedTab: g } = (0, aH.Ay)({ tabs: lU }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: P()(tG.nd, lO.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lO.rh,
                children: [
                    (0, r.jsx)(ld.$n, {
                        className: lO.Q$,
                        look: ld.$n.Looks.BLANK,
                        size: ld.$n.Sizes.ICON,
                        onClick: W.eY,
                        children: (0, r.jsx)("span", {
                            title: a6.intl.string(a6.t.VkKicb),
                            children: (0, r.jsx)(lh.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": a6.intl.string(a6.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: lO.Bi }),
                    (0, r.jsx)("div", {
                        className: lO.uW,
                        children: Object.entries(lG).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                U.D,
                                {
                                    className: P()(lO.pb, n.includes(t) && lO.bx),
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
                className: lO.rh,
                children: (0, r.jsx)(lx.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tF, { columns: lw, data: u, selectedRowKey: m, onClickRow: (e) => h(e.key) }),
            null != x &&
                (0, r.jsxs)(az, {
                    className: lO.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(p, {}), g({ loggedEvent: x, onClose: () => h(void 0), filteredEvents: u })],
                }),
        ],
    });
}
var l$ = a(382483),
    lV = a(385113),
    lW = a(315117);
function lz(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(F.B, {
        gap: 8,
        padding: 8,
        className: lW.lt,
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
                              className: lW.YL,
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
function lH(e) {
    let { config: t, isSelected: a, onSelect: l } = e;
    return (0, r.jsxs)(F.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? lW.FM : lW.gt,
        children: [
            (0, r.jsx)(U.D, {
                className: lW.Av,
                onClick: l,
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
                onClick: () => (0, l$.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function lK() {
    let e = (0, V.bG)([lV.A], () => lV.A.getFeaturedFetchState());
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
                onClick: () => (0, l$.Wq)({ force: !0 }),
            }),
        ],
    });
}
function lY() {
    let e = (0, V.bG)([lV.A], () => lV.A.getDeveloperFetchState());
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
                onClick: () => (0, l$.i$)({ force: !0 }),
            }),
        ],
    });
}
function lq() {
    let [e, t] = o.useState(""),
        a = (0, V.bG)([lV.A], () => (e.length > 0 ? lV.A.getFetchState(e) : null)),
        l = (0, V.bG)([lV.A], () => (e.length > 0 ? lV.A.getConfigs(e) : null));
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
                onClick: () => (0, l$.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(h.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != l &&
                l.length > 0 &&
                (0, r.jsx)(F.B, { gap: 4, children: l.map((e) => (0, r.jsx)(lz, { config: e }, e.config_id)) }),
        ],
    });
}
function lJ(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: l } = e,
        n = (0, V.bG)([lV.A], () => lV.A.getFeaturedFetchState());
    return (0, r.jsxs)(F.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(h.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            n === lV.e.FETCHING &&
                (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    lH,
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
function lQ(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)(F.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(lz, { config: t }),
                ],
            }),
        ],
    });
}
function lX() {
    let [e, t] = o.useState(null),
        a = Object.values((0, V.bG)([lV.A], () => lV.A.getAllConfigsByApplication())).flat(),
        l = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)(F.B, {
            gap: 16,
            padding: 8,
            className: lW.zr,
            children: [
                (0, r.jsx)($.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(lK, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(lY, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(lq, {}),
                (0, r.jsx)(j.c, {}),
                (0, r.jsx)(lJ, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != l && (0, r.jsx)(lQ, { config: l }),
            ],
        }),
    });
}
var lZ = a(636537),
    l0 = a(153488),
    l1 = a(927813);
let l2 = 12 * l1.A.Millis.HOUR,
    l3 = new Map(),
    l8 = !1,
    l6 = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    l5 = { ...l6 };
function l9() {
    l3 = new Map(l5.channelAffinities.map((e) => [e.channelId, e]));
}
class l4 extends V.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((l5.channelAffinities = e.channelAffinities), (l5.lastFetched = e.lastFetched), l9());
    }
    shouldFetch() {
        if (!l8) return Date.now() - l5.lastFetched > l2;
    }
    isFetching() {
        return l8;
    }
    getChannelAffinities() {
        return l5.channelAffinities;
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
        return l5;
    }
}
let l7 = new l4(tM.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        l8 = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (l5.lastFetched = Date.now()), (l8 = !1), (l5.channelAffinities = t), l9();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        l8 = !1;
    },
    LOGOUT: function () {
        (l5 = { ...l6 }), (l3 = new Map()), (l8 = !1);
    },
});
var ne = a(907360);
let nt = [
    {
        key: "channel",
        cellClassName: ne._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: ne.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function na() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            l7.shouldFetch() && l0.A.hasConsented(en.YAq.PERSONALIZATION)
                ? (tM.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  lZ.Bo.get({
                      url: en.Rsh.CHANNEL_AFFINITIES_V2,
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
    let e = (0, V.yK)([l7, av.A], () =>
        l7
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: av.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tF, { className: tG.nd, columns: nt, rowClassName: ne.nM, data: e });
}
function nl() {
    return (0, r.jsxs)(h.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var nn = a(105565),
    ns = a(558845),
    ni = a(193337);
let nr = (e) => {
        switch (e) {
            case nn.r.DC_DISMISSED:
                return "DISMISS:";
            case nn.r.DC_SHOWN:
                return "SHOW:";
            case nn.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    no = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${ar.M[a]}`;
            },
        },
    ],
    nd = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${ar.M[t]}`;
            },
        },
    ];
function nc() {
    let e = (0, V.bG)([nn.A], () => nn.A.getDCFEvents()),
        t = (0, ns.Ay)((e) => e.candidates),
        a = (0, ns.Ay)((e) => e.lastWinnerTime),
        l = 0 !== a ? lo()(a).fromNow() : "n/a",
        n = (0, ns.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: nr(t) + a.toString(), event: nr(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: ni.KE,
        children: [
            (0, r.jsxs)("div", { className: ni.pq, children: ["Last winner time: ", l] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: ni.pq, children: ["Last winner: ", null != n ? ar.M[n] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: ni.uI,
                children: (0, r.jsx)(tF, { className: ni.Th, columns: nd, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tF, { columns: no, data: s }),
        ],
    });
}
var nu = a(689175),
    nm = a(541689),
    nh = a(199773);
function nx() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(np());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tw.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [np(), e];
}
function np() {
    return tw.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var ng = a(662546),
    nv = a(643278),
    nj = a(256787),
    nb = a(20439);
let nf = o.memo(function (e) {
    let { className: t, content: a, onChange: l } = e,
        n = ar.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, nb.A)(n),
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
            (0, r.jsxs)(F.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eP.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? ng.O : nv.s,
                        onClick: h,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(c.d, {
                        label: `${a.toLowerCase()} (${ar.M[a]})`,
                        description: (0, nj.Zm)(n)
                            ? (function (e) {
                                  let t = ao.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
function n_(e) {
    let { items: t, onChange: a } = e,
        [l, n] = nx(),
        s = (0, o.useCallback)(
            (e) => {
                n(e), a?.(e);
            },
            [n, a],
        );
    return (0, r.jsx)(F.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(nf, { content: e, onChange: s }, e)),
    });
}
function ny(e) {
    let { searchQuery: t = "" } = e,
        a = (0, ns.Ay)((e) => e.recentlyShown),
        [l, n] = nx(),
        s = l
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(ar.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(d.n, { label: "Recent Overrides", children: (0, r.jsx)(n_, { items: s }) });
}
function nE(e) {
    let { searchQuery: t = "" } = e,
        a = (0, ns.Ay)((e) => e.recentlyShown)
            .map((e) => ar.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(d.n, { label: "Recently Shown", children: (0, r.jsx)(n_, { items: a }) });
}
var nC = a(594061),
    nS = a(268571);
function nA() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, V.cf)([nh.A], () => ({
            dailyCapReached: nh.A.hasUserHitDCCap(),
            dailyCapOverridden: nh.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: nh.A.newUserMinAgeRequiredOverridden,
        })),
        [l, n] = o.useState(""),
        [s, i] = o.useState(20),
        u = o.useMemo(
            () =>
                Object.keys(ar.M)
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
    return (0, r.jsx)(nu.Ch, {
        onScroll: x,
        children: (0, r.jsxs)("div", {
            className: nS.KE,
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
                                    onClick: () => (0, nm.Ab)(),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, nC.nT)(),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, nC.D1)(),
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
                            onChange: nm.SE,
                        }),
                        (0, r.jsx)(c.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: nm.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(nE, {}),
                (0, r.jsx)(ny, {}),
                (0, r.jsxs)(d.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(lx.I, { query: l, onChange: n, onClear: () => n("") }),
                        (0, r.jsx)(n_, { items: u.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var nN = a(276086),
    nk = a(154323),
    nI = a(155248);
function nD() {
    let e = (0, V.bG)([nk.A], () => nk.A.allWithDescriptions(), [], V.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, l] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                c.d,
                                { label: l, description: t, checked: a, onChange: (e) => (0, nN.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(j.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: nI.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: nI.x6,
                children: (0, r.jsx)(m.$, { variant: "primary", text: "Clear all", onClick: nN.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: nI.vu, children: t }),
        ],
    });
}
var nT = a(881436);
function nR() {
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
                    "" === e ? "(empty)" : (0, r.jsx)("span", { className: nT.ti, children: e }),
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
function nO(e) {
    let { game: t } = e;
    return (0, r.jsxs)(F.B, {
        gap: 12,
        className: nT.f_,
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
            (0, r.jsx)("pre", { className: nT.aY, children: JSON.stringify(t, null, 2) }),
        ],
    });
}
function nw() {
    let [e, t] = o.useState(null),
        [a, l] = o.useState(""),
        n = (0, V.bG)([tV.A], () => tV.A.games),
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
        m = (0, V.bG)([tV.A], () => (null != u ? (tV.A.getDetectableGame(u) ?? null) : null), [u]);
    return (0, r.jsx)("div", {
        className: P()(tG.nd, nT.kL),
        children: (0, r.jsxs)(F.B, {
            gap: 16,
            padding: 12,
            className: nT.rf,
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
                (0, r.jsx)(nR, {}),
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
                                ? (0, r.jsx)(nO, { game: m })
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
var nM = a(691540),
    nL = a(97483),
    nP = a(123292),
    nU = a(780907),
    nG = a(56562);
let nF = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function nB(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: l } = (0, aa.I)(t.id);
    return (0, r.jsxs)(F.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != l && (0, r.jsx)(ae.A, { game: l }),
            (0, r.jsxs)(F.B, {
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
function n$() {
    let e = (0, V.bG)([f.Ay], () => f.Ay.getRunningGames()),
        t = (0, V.bG)([f.Ay], () => f.Ay.getDebugRunningGame()),
        [a, l] = (0, o.useState)(t?.id ?? ""),
        n = (0, o.useMemo)(
            () =>
                nF.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, nU.xt)(null);
            let t = tV.A.getDetectableGame(e),
                a = t?.executables[0],
                l = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, nM.P0)({
                    id: "devtools-set-debug-game-error",
                    type: nL.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, nU.xt)({
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
                fullscreenType: nG.aI.UNKNOWN,
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
                                (0, r.jsx)(nB, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(j.c, {}),
            (0, r.jsxs)(F.B, {
                gap: 8,
                children: [
                    (0, r.jsx)($.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(v.k, { label: "Custom Game ID", value: a, onChange: l }),
                    (0, r.jsx)(t7.Z, {
                        label: "Pick a Preset Game",
                        options: n,
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
                                (0, r.jsx)(nP.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(m.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var nV = a(240248),
    nW = a(769195);
function nz() {
    let [e, t] = o.useState(!1),
        [a, l] = o.useState(null),
        [n, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), l(null), s(null);
                let e = await lZ.Bo.put({
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
    return (0, r.jsxs)(F.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(m.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, nV.uJ)(a) && (0, r.jsx)(h.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, nV.uJ)(n) && (0, r.jsx)(h.E, { variant: "text-md/normal", color: "status-danger", children: n }),
        ],
    });
}
function nH() {
    return (0, r.jsx)("div", {
        className: nW.n,
        children: (0, r.jsx)(F.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(nz, {}) }),
    });
}
a(172879);
var nK = a(985623),
    nY = a.n(nK),
    nq = a(990078),
    nJ = a(874804),
    nQ = a(782134),
    nX = a(113494),
    nZ = a(603349),
    n0 = a(155466);
function n1(e) {
    return parseFloat(e.toFixed(3));
}
let n2 = [
    {
        key: "store",
        cellClassName: n0.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: n0.i7,
        render(e) {
            let { trace: t } = e;
            return `${n1(t.time)} ms`;
        },
    },
];
function n3(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(x.Ip, { children: (0, r.jsx)(tF, { columns: n2, data: a }) });
}
let n8 = [
    {
        id: "action",
        name: "Action",
        group: aH.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = lo()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(lD, {
                        className: n0.mP,
                        children: [
                            (0, r.jsx)(lT, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, lb.i$)(a, "LLLL"),
                                    children: (0, lb.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(lT, { name: "Total Time", children: [n1(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(x.Ip, { className: n0.Dx, children: (0, r.jsx)(aB.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: aH.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(n3, { actionLog: t });
        },
    },
];
function n6(e) {
    let { actionLog: t, initialHeight: a } = e,
        l = o.useMemo(
            () =>
                t.error
                    ? [
                          ...n8,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(nZ.A, { className: n0.ik }), "Error"],
                              }),
                              group: aH.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: P()(n0.u4, tG.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tG.R5,
                                                  children: (0, r.jsx)(ld.$n, {
                                                      className: tG.Q$,
                                                      size: ld.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(x.Ip, {
                                              className: n0.Dx,
                                              children: (0, r.jsx)(aB.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : n8,
            [t],
        ),
        { TabBar: n, renderSelectedTab: s } = (0, aH.Ay)({ tabs: l }, [l]);
    return (0, r.jsxs)(az, {
        className: n0.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(n, {}),
            (0, r.jsxs)(aF.Ay, {
                className: P()(tG.jr, n0.nZ),
                children: [
                    (0, r.jsx)(aF.Ay.Icon, { icon: nJ.K, tooltip: t.name }),
                    (0, r.jsx)(aF.Ay.Title, {
                        wrapperClassName: P()(tG.qd, tG.ZE),
                        className: tG.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(aF.Ay.Icon, {
                        icon: lc.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var l;
                                    return (t[a] = ((l = e[a]), en.AKn.test(l) ? "REDACTED" : l)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, lj.C)(a, () =>
                                (0, nM.P0)({
                                    id: "copy-action-log-name",
                                    type: nL.Ck.SUCCESS,
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
let n5 = [
        {
            key: "action",
            cellClassName: n0.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(nZ.A, { className: n0.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: n0.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${n1(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: n0.i7,
            render(e) {
                let { actionLog: t } = e;
                return lo()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    n9 = {
        searchType: lg.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function n4() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        l = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = nY()(() => {
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
        n = o.useMemo(() => l.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [l]),
        [s, i] = o.useState(n),
        [d, c] = o.useState(n),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, lv.RT)(t, u ? s : n, p, n9);
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
        className: P()(tG.nd, n0.nd),
        children: [
            (0, r.jsxs)("div", {
                className: n0.KE,
                children: [
                    (0, r.jsx)(nq.m, {
                        text: b,
                        children: (0, r.jsx)(eP.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? nQ.u : nX.E,
                            "aria-label": b,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(lx.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tF, {
                columns: n5,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(n6, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var n7 = a(936388),
    se = a(132369);
function st() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: P()(tG.nd, se.n),
        children: (0, r.jsx)(m.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: n7.A.clearUploadedKeyVersions,
        }),
    });
}
var sa = a(825484),
    sl = a(37962),
    sn = a(881520),
    ss = a(670455),
    si = a(861160);
let sr = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function so() {
    let [e, t] = o.useState(null),
        [a, l] = o.useState(0),
        [n, s] = o.useState(1e3),
        [i, c] = o.useState(0),
        u = (0, V.bG)([sn.A], () => (null === e ? null : (sn.A.getFeedbackConfig(ss.MW[e]) ?? sl.u[ss.MW[e]]))),
        x = Object.entries(ss.MW),
        p = x.slice(x.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        b = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: si.kL,
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
                                    onChange: (e) => l(parseFloat(e)),
                                }),
                                (0, r.jsx)(g.l, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: sr,
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
                (0, r.jsxs)(sa.e, {
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
var sd = a(334279),
    sc = a(663417),
    su = a(147925),
    sm = a(557009),
    sh = a(788868);
let sx = async () =>
        (
            await lZ.Bo.get({
                url: en.Rsh.ENTITLEMENTS_FOR_APPLICATION(sh.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => sm.A.createFromServer(e)),
    sp = async (e) => {
        await lZ.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    sg = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await lZ.Bo.del({ url: t, rejectWithError: !0 });
    },
    sv = async () => {
        await lZ.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    sj = () => {
        let [e, t] = o.useState([]),
            [a, l] = o.useState(!1),
            n = (0, o.useCallback)(async () => {
                try {
                    l(!0);
                    let e = await sx();
                    t(e);
                } finally {
                    l(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await sp(e), await n();
                },
                [n],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await sg(e), await n();
                },
                [n],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await sv(), await n();
            }, [n]),
            refreshEntitlementList: n,
            entitlements: e,
            loading: a,
        };
    };
var sb = a(51846),
    sf = a(214868);
let s_ = {
        [en.GD.QUEST_REWARD]: "Quest Reward",
        [en.GD.DEVELOPER_GIFT]: "Developer Gift",
        [en.GD.INVOICE]: "Invoice",
        [en.GD.REVERSE_TRIAL]: "Reverse Trial",
        [en.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [en.GD.SUBSCRIPTION]: "Subscription",
        [en.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    sy = (e) => {
        let t,
            { entitlement: a, active: l, onDelete: n } = e,
            s = (e) => (null != e ? (0, lb.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: P()(sb.Nr, l ? sf.C1 : ""),
            children: [
                (0, r.jsxs)(h.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !l &&
                    (0, r.jsxs)(h.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", sE.find((e) => e.value === a.skuId)?.label],
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
                        null != (t = a.sourceType) && t in s_ ? s_[t] : `Unknown source type ${t}`,
                    ],
                }),
                l &&
                    null != n &&
                    (0, r.jsx)(ld.$n, {
                        className: sb.RW,
                        size: ld.$n.Sizes.TINY,
                        color: ld.$n.Colors.RED,
                        look: ld.$n.Looks.OUTLINED,
                        onClick: n,
                        children: "Delete",
                    }),
            ],
        });
    },
    sE = [
        { id: "1h", label: "1 hour", value: sd.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: sd.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: sd.j.PREMIUM_TIER_2_3_DAY },
    ];
function sC() {
    let [e, t] = o.useState(!1),
        [a, l] = o.useState(sd.j.PREMIUM_TIER_2_1_HOUR),
        [n, s] = o.useState([]),
        [i, d] = o.useState([]),
        {
            refreshEntitlementList: c,
            grantFractionalPremium: u,
            deleteFractionalPremium: p,
            triggerNextEntitlementFulfillment: v,
            entitlements: j,
            loading: b,
        } = sj();
    return (
        o.useEffect(() => {
            c();
        }, [c]),
        o.useEffect(() => {
            s(j.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === en.zF_.FRACTIONAL_REDEMPTION)),
                d(j.filter((e) => Object.values(sd.j).includes(e.skuId) && null == e.startsAt));
        }, [j]),
        (0, r.jsx)(x.Ip, {
            className: tG.nd,
            children: (0, r.jsxs)("div", {
                className: sf.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: sf.dL,
                        children: [
                            (0, r.jsx)(h.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(U.D, {
                                onClick: () => t(!e),
                                className: sb.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(su.A, { direction: e ? su.A.Directions.UP : su.A.Directions.DOWN }),
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
                        className: P()([sb.uW, sf.Uo]),
                        children: [
                            (0, r.jsx)(g.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: sE,
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
                        className: sb.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: sf.dL,
                                children: [
                                    (0, r.jsx)(h.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: sb.GC,
                                        children: [
                                            (0, r.jsx)(ld.$n, {
                                                disabled: b,
                                                size: ld.$n.Sizes.TINY,
                                                color: ld.$n.Colors.PRIMARY,
                                                look: ld.$n.Looks.OUTLINED,
                                                onClick: () => v(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(ld.$n, {
                                                disabled: b,
                                                size: ld.$n.Sizes.TINY,
                                                color: ld.$n.Colors.RED,
                                                look: ld.$n.Looks.OUTLINED,
                                                onClick: () => p(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(ld.$n, {
                                                disabled: b,
                                                look: ld.$n.Looks.BLANK,
                                                size: ld.$n.Sizes.ICON,
                                                onClick: c,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(sc.f, { size: "xs", color: "currentColor" }),
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
                                                    sy,
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
                                            children: i.map((e) => (0, r.jsx)(sy, { entitlement: e }, e.id)),
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
var sS = a(390544),
    sA = a(396748),
    sN = a(522055),
    sk = a(661202);
function sI() {
    let e = (0, V.bG)([a2.A], () => a2.A.getGuildId()),
        t = (0, V.bG)([a1.A], () => a1.A.getGuild(e)?.name),
        a = (0, V.bG)([sN.A], () => sN.A.getStateForGuild(e)?.instances),
        l = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        n = o.useCallback(
            (t) => {
                null != l &&
                    null != e &&
                    tM.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...l, status: t },
                    });
            },
            [l, e],
        ),
        s = o.useMemo(
            () =>
                Object.values(sS.M).map((e) =>
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
                tM.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...l, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [l, e]);
    return null == e
        ? null
        : (0, r.jsxs)(x.Ip, {
              className: sk.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sk.uW,
                      children: (0, r.jsx)($.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sk.uW,
                      children: [
                          (0, r.jsx)(h.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${l?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sk.UD, children: s }),
                          (0, r.jsx)(h.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sk.UD,
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
function sD(e, t) {
    let a = "boolean" == typeof t ? t : !aG.Ay.get(e);
    tM.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sT = a(460281);
function sR(e) {
    let { devSettingsCategory: t } = e,
        a = (0, V.bG)([aG.Ay], () => aG.Ay.allByCategory(t), [t], V.My),
        l = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: l }] = e;
                    return (0, r.jsx)(c.d, { label: l, description: t, checked: a, onChange: (e) => sD(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: P()(tG.nd, sT.n), children: l });
}
var sO = a(950305),
    sw = a(231483),
    sM = a(597770),
    sL = a(433492),
    sP = a(695458),
    sU = a(796140),
    sG = a(268791),
    sF = a(836480),
    sB = a(855473),
    s$ = a(626258),
    sV = a(420854),
    sW = a(373846),
    sz = a(657044),
    sH = a(141060),
    sK = a(608599),
    sY = a(685761),
    sq = a(157225),
    sJ = a(362704),
    sQ = a(625903),
    sX = a(628284),
    sZ = a(320448),
    s0 = a(562708),
    s1 = a(830215),
    s2 = a(381689),
    s3 = a(889227),
    s8 = a(499785),
    s6 = a(315069);
class s5 extends s6.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new s5(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let s9 = { pools: null, users: null };
function s4(e) {
    null == s9.users && (s9.users = new Map()), s9.users.set(e.id, new s3.A(e));
}
class s7 extends V.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (s9.pools = new Map(Object.entries(e.pools))),
            null != e.users && (s9.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != s9.pools ? Object.fromEntries(s9.pools) : null,
            users: null != s9.users ? Object.fromEntries(s9.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(s9.users?.values() ?? []).filter((t) => s9.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return s9.pools?.get(e) ?? null;
    }
    getUser(e) {
        return s9.users?.get(e) ?? null;
    }
    getPools() {
        return null === s9.pools ? null : Array.from(s9.pools.values());
    }
}
let ie = new s7(tM.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == s9.pools && (s9.pools = new Map()), s9.pools.set(t.id, t), a.forEach(s4);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = s9.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                s9.users?.delete(e);
            }),
            s9.pools?.delete(t);
    },
});
var it = a(835002);
async function ia(e, t) {
    return await s8.A.get({
        url: en.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: s0.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: l } = e;
            if (!a) return void s2.A.showFailedToast(it.OB.GENERIC_ERROR);
            let { generated_pool: n, users: s } = l;
            tM.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: s5.fromServer(n).setPassword(t),
                users: s.map((e) => new s3.A(e)),
            });
        })
        .catch(() => (s2.A.showFailedToast(it.OB.GENERIC_ERROR), null));
}
var il = a(844330),
    is = a(277851);
let ii = [
        sO.n,
        sw.l,
        sM.o,
        sL.K,
        sP.m,
        sU.c,
        sG.$,
        sF.Q,
        sB.Z,
        s$.A,
        sV.E,
        sW.C,
        sz._,
        sH.i,
        sK.L,
        sY.f,
        sq.N,
        sJ.Y,
        sQ.Z,
    ],
    ir = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    io = () => {
        let [e, t] = o.useState(""),
            [a, l] = o.useState(""),
            [n, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (n) => {
                        n.preventDefault(), s(!0);
                        try {
                            await ia(e, a), t(""), l("");
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
    id = (e) => {
        let { pool: t } = e,
            { id: a, summary: l } = t,
            n = ie.getUsersForPool(a),
            s = (0, V.bG)([l_.default], () => l_.default.getId()),
            i = ii[Number(a) % ii.length],
            d = ir[Number(a) % ir.length],
            c = o.useCallback(() => {
                tM.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)(F.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(il.A, {
                icon: (0, r.jsx)(h.E, {
                    variant: "text-md/medium",
                    color: d,
                    className: is.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: l,
                className: is.JC,
                subtitle: `${n.length} users`,
                children: (0, r.jsxs)(F.B, {
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
                                            U.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(),
                                                        (function (e, t) {
                                                            let a = ie.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let l = ie.getPool(e)?.password;
                                                            if (null == l) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            s1.A.login({
                                                                login: a.email,
                                                                password: l,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (s2.A.showFailedToast(it.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: P()(is.vk, { [is.Pe]: s === e.id }),
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
                                                                className: P()({ [is.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sO.n, {
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
                                                                                className: is.c1,
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
                                                                      children: (0, r.jsx)(sX.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(sZ._, {
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
                            className: is.UD,
                            children: (0, r.jsx)(m.$, {
                                icon: lh.u,
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
function ic() {
    let e = (0, V.yK)([ie], () => ie.getPools() ?? []);
    return (0, r.jsxs)(F.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: is.kL,
        children: [
            (0, r.jsx)(io, {}),
            (0, r.jsx)(x.Ip, { className: is.Ik, children: e?.map((e) => (0, r.jsx)(id, { pool: e }, e.id)) }),
        ],
    });
}
var iu = a(582306),
    im = a(528153),
    ih = a(275759),
    ix = a(888429);
function ip(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function ig() {
    let e = (0, V.bG)([ih.Ay], () => ih.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, V.bG)([ih.Ay], () => ih.Ay.getDevToolCurrentDate()),
        a = (0, V.bG)([ih.Ay], () => ih.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        l = (0, V.bG)([ih.Ay], () => ih.Ay.getMessageGiftIntentLastShownMap()),
        n = (0, V.bG)([ih.Ay], () => ih.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, V.bG)([ih.Ay], () => ih.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, V.bG)([ih.Ay], () => ih.Ay.getProfilePopoutGiftIntentsDismissMap()),
        o = (0, V.bG)([ao.A], () => {
            let e =
                ao.A.settings.userContent?.recurringDismissibleContentStates[ar.M.GIFT_INTENT_MESSAGE]
                    ?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        d = (e) => {
            tM.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        c = (e) => {
            let t = a7.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: ix.l$,
            children: [
                (0, r.jsx)(h.E, { className: ix.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: ix.Pm,
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
                        className: ix.Pm,
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
                                n.length > 0 &&
                                    (0, r.jsxs)(F.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(h.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            n.map((e) => {
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
                    className: ix.Pm,
                    children: (0, r.jsxs)(F.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(iu.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? lo()(t) : void 0,
                                onSelect: (e) => {
                                    let t = lo()(),
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
                    className: ix.Pm,
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
                                            (0, nC._N)(ar.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(h.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${ip(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ix.Pm,
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
                            Object.keys(l).length > 0 &&
                                (0, r.jsxs)(F.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(l).map((e) => {
                                            let [t, a] = e,
                                                l = ee.default.getUser(t),
                                                n = l?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                h.E,
                                                { variant: "text-xs/normal", children: [n, ": ", ip(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ix.Pm,
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
                                            (0, r.jsx)(h.E, { variant: "text-xs/normal", children: ip(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: ix.Pm,
                    children: [
                        (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                im.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ix.Pm,
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
                    className: ix.Pm,
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
                                                l = ee.default.getUser(t),
                                                n = l?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                h.E,
                                                { variant: "text-xs/normal", children: [n, ": ", ip(a)] },
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
var iv = a(460890),
    ij = a(349288),
    ib = a(517461),
    i_ = a(214947),
    iy = a(403581),
    iE = a(34188);
let iC = [
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
var iS = a(545406);
let iA = [0, 0.5, 1],
    iN = ["Center", "Inner ring", "Outer ring"],
    ik = iA.length,
    iI = "ILLO_BLUE",
    iD = "ILLO_BLUE_40",
    iT = Array.from({ length: ik }, () => iD),
    iR = Array.from({ length: ik }, () => iI),
    iO = ["1", "0.5", "0"],
    iw = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    iM = [
        { label: "Light", value: en.NJ8.LIGHT, id: en.NJ8.LIGHT },
        { label: "Dark", value: en.NJ8.DARK, id: en.NJ8.DARK },
        { label: "Darker", value: en.NJ8.DARKER, id: en.NJ8.DARKER },
        { label: "Midnight", value: en.NJ8.MIDNIGHT, id: en.NJ8.MIDNIGHT },
    ],
    iL = { [en.NJ8.MIDNIGHT]: en.NJ8.DARKER, [en.NJ8.DARKER]: en.NJ8.DARK, [en.NJ8.LIGHT]: en.NJ8.DARK },
    iP = { [en.NJ8.LIGHT]: "light", [en.NJ8.DARK]: "ash", [en.NJ8.DARKER]: "dark", [en.NJ8.MIDNIGHT]: "onyx" },
    iU = [
        { id: "friends", icon: i_.$, text: "Friends" },
        { id: "nitro", icon: iy.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: iE.U, text: "Shop", useCustomGradient: !0 },
    ],
    iG = iC.map((e) => ({ label: e, value: e, id: e })),
    iF = Object.fromEntries(
        iC.map((e) => [
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
                        [a, l, n] = eB.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * l + 0.114 * n) / 255 > 0.5
                                ? eB.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eB.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: iS.oP,
                            style: { background: `rgb(${a}, ${l}, ${n})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var iB = a(306327);
function i$(e, t, a) {
    return e.map((e, l) => (l === t ? a : e));
}
function iV(e, t) {
    let [a, l, n, s] = eB.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: l, b: n, a: s };
}
function iW(e, t) {
    let a = eB.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iz(e) {
    let { yaml: t, label: a } = e,
        l = o.useCallback(() => {
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
                        icon: lc.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: l,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: iS.RP, children: t }),
        ],
    });
}
function iH(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                iN.map((e, a) => {
                    let l;
                    return (
                        (l = iM
                            .map((e) => {
                                let l,
                                    n,
                                    { value: s } = e,
                                    i = iP[s],
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
    return (0, r.jsxs)(F.B, {
        gap: 16,
        children: [
            (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            iN.map((e, t) => (0, r.jsx)(iz, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iK(e, t, a) {
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
    return new iB.A("srgb", [
        (e.r * (1 - r) + l * r) / 255,
        (e.g * (1 - r) + n * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function iY(e, t, a) {
    let l = a.map((e) => {
            let [t, a, l] = eB.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: l, opacity: e.opacity, position: e.position };
        }),
        n = 1 / 0,
        s = (e) => {
            e < n && (n = e);
        };
    for (let a of l) s(e.contrast(iK(t, l, a.position), "WCAG21"));
    for (let a = 0; a < l.length - 1; a++) {
        let { contrast: n } = (function (e, t, a, l, n) {
            let s = 1 / 0,
                i = l;
            for (let r = 0; r <= 100; r++) {
                let o = l + (r / 100) * (n - l),
                    d = a.contrast(iK(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, l, e, l[a].position, l[a + 1].position);
        s(n);
    }
    return Math.round(100 * n) / 100;
}
function iq(e) {
    let [t, a, l] = eB.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [n, s, i] = eB.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eB.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new iB.A("srgb", [t / 255, a / 255, l / 255]),
        background: { r: n * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function iJ() {
    return {
        colors: Array.from({ length: ik }, () => void 0),
        scales: Array.from({ length: ik }, () => void 0),
        opacities: Array.from({ length: ik }, () => void 0),
    };
}
function iQ() {
    return {
        [en.NJ8.LIGHT]: iJ(),
        [en.NJ8.DARK]: { colors: [...iT], scales: [...iR], opacities: [...iO] },
        [en.NJ8.DARKER]: iJ(),
        [en.NJ8.MIDNIGHT]: iJ(),
    };
}
function iX() {
    let e = (0, iv.G9)(),
        [t, a] = o.useState(en.NJ8.DARK),
        [l, n] = (0, ib.V)("DevToolsGradientContrastPanel_themeStops", iQ()),
        s = l ?? iQ(),
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
                        (0, r.jsxs)(F.B, {
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
                                              (0, r.jsx)(nP.Q, {
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
                    iM.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    l = [],
                                    n = [];
                                for (let s = 0; s < ik; s++) {
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
                                        d = iL[d];
                                    }
                                    a.push(i ?? iT[s]), l.push(r ?? iR[s]), n.push(o ?? iO[s]);
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
        E = o.useMemo(() => iq({ theme: t, saturation: 1 }), [t]),
        C = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < ik; t++) {
                let a = parseFloat(_.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: _.colors[t], opacity: a, position: iA[t] });
            }
            return e;
        }, [_]),
        S = o.useMemo(() => {
            if (null == C) return null;
            let { text: e, background: t } = E;
            return iN.map((a, l) =>
                iF[_.scales[l]].map((a) => {
                    let n = iY(e, t, i$(C, l, { ...C[l], color: a.value }));
                    return { ...a, trailing: `(${n}:1)` };
                }),
            );
        }, [C, E, _.scales]),
        A = o.useMemo(() => {
            try {
                return iM.map((e) => {
                    let { value: t, label: a } = e,
                        l = f[t],
                        n = [];
                    for (let e = 0; e < ik; e++) {
                        let s = parseFloat(l.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        n.push({ color: l.colors[e], opacity: s, position: iA[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: l, background: n } = iq(t),
                                s = iY(l, n, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return iC.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of iF[s]) {
                                        if (o === e[t].color) continue;
                                        let s = iY(l, n, i$(e, t, { ...e[t], color: o }));
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
        className: iS.XG,
        children: (0, r.jsxs)(F.B, {
            gap: 24,
            padding: 8,
            className: iS.zr,
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
                                (0, r.jsx)(ij.Anchor, {
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
                    options: iM,
                }),
                (0, r.jsxs)(F.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: iS.G9,
                            children: iN.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(F.B, {
                                                gap: 0,
                                                className: iS.hi,
                                                children: [
                                                    (0, r.jsx)(h.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(nP.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${iW(_.colors[t], parseFloat(_.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                iW(_.colors[t], parseFloat(_.opacities[t])),
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
                                                    let a = iF[e][0]?.value;
                                                    y((l) => ({
                                                        ...l,
                                                        scales: i$(l.scales, t, e),
                                                        colors: null != a ? i$(l.colors, t, a) : l.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: iG,
                                            }),
                                            (0, r.jsx)(t7.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: _.colors[t],
                                                onSelectionChange: (e) =>
                                                    y((a) => ({ ...a, colors: i$(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: S?.[t] ?? iF[_.scales[t]],
                                            }),
                                            (0, r.jsx)(v.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: _.opacities[t],
                                                onChange: (e) => y((a) => ({ ...a, opacities: i$(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(v.k, {
                                                label: `Hex${a && null != c[t] ? ` (dE: ${c[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    d((a) => i$(a, t, e));
                                                    let a = (function (e) {
                                                        if (!iw.test(e)) return null;
                                                        try {
                                                            return new iB.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = iD,
                                                                a = iI,
                                                                l = 1 / 0;
                                                            for (let n of iC)
                                                                for (let s of iF[n]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, l] = eB.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new iB.A("srgb", [
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
                                                        u((a) => i$(a, t, e.deltaE)),
                                                            y((a) => ({
                                                                ...a,
                                                                scales: i$(a.scales, t, e.scale),
                                                                colors: i$(a.colors, t, e.color),
                                                            }));
                                                    } else u((e) => i$(e, t, null));
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
                (0, r.jsx)(iv.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eG.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(F.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: iS.$8,
                                        style: { background: eB.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iU.map((e, t) =>
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
                                                        hoverGradientStart: iV(_.colors[0], parseFloat(_.opacities[0])),
                                                        hoverGradientMiddle: iV(
                                                            _.colors[1],
                                                            parseFloat(_.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iV(_.colors[2], parseFloat(_.opacities[2])),
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
                null != A &&
                    (0, r.jsxs)(F.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Results" }),
                            A.map((e) => {
                                let { theme: t, label: a, result: l } = e;
                                return null != l
                                    ? (0, r.jsxs)(
                                          F.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(h.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(G.w, {
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
                                                                      iN[l.suggestion.stopIndex],
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
                (0, r.jsx)(iH, { allResolvedStops: f }),
            ],
        }),
    });
}
var iZ = a(820739),
    i0 = a(230135),
    i1 = a(45780),
    i2 = a(868652),
    i3 = a(859241);
let i8 = [
        ar.M.GUILD_POWERUP_PERKS_COACHMARK,
        ar.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        ar.M.GUILD_POWERUP_NOTIFICATION,
        ar.M.GUILD_TAG_AVAILABLE_COACHMARK,
        ar.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    i6 = [
        ar.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        ar.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        ar.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        ar.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        ar.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    i5 = [ar.V.ADOPT_CLAN_IDENTITY_NOTICE],
    i9 = [
        ar.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        ar.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        ar.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function i4(e) {
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
var i7 = a(861671);
async function re(e, t, a) {
    await lZ.Bo.patch({
        url: en.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : lo()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, iZ.VU)(e),
        (0, i2.Xd)(e, !0);
}
async function rt(e) {
    await lZ.Bo.post({ url: en.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function ra() {
    let e = (0, V.bG)([a2.A], () => a2.A.getGuildId()),
        t = (0, V.bG)([a1.A], () => a1.A.getGuild(e)?.name),
        a = (0, V.yK)([ao.A], () => [...i6, ...i5].filter((t) => null != e && (0, i1.zs)(t, e))),
        l = (0, V.yK)([i3.A], () => (null != e ? (i3.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(x.Ip, {
            className: i7.kL,
            children: [
                (0, r.jsx)("div", {
                    className: i7.uW,
                    children: (0, r.jsx)($.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: i7.uW,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "eyebrow",
                            className: i7.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, i2.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i7.uW,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", className: i7.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(m.$, { variant: "primary", text: "Reset", onClick: i0.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i7.uW,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        re(e, l.slice(Math.floor(l.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        re(e, l, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i7.uW,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", className: i7.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(F.B, {
                            gap: 16,
                            children: i8.map((e) => (0, r.jsx)(nf, { className: i7.z6, content: ar.M[e] }, ar.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: i7.uW,
                    children: (0, r.jsx)(d.n, {
                        label: "Reset Guild Level DCs",
                        children: i6.map((t) =>
                            (0, r.jsx)(
                                c.d,
                                {
                                    label: i4(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, i1._$)(t, e, !1)
                                            : ((0, nC._N)(ar.M.GUILD_POWERUP_NOTIFICATION), (0, i1.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: i7.uW,
                    children: (0, r.jsx)(d.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: i5.map((t) =>
                            (0, r.jsx)(
                                c.d,
                                {
                                    label: i4(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, i1._$)(t, e, !1)
                                            : ((0, nC._N)(ar.M.GUILD_POWERUP_NOTIFICATION), (0, i1.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: i7.uW,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "eyebrow",
                            className: i7.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        i9.map((e) => (0, r.jsx)(nf, { className: i7.z6, content: ar.M[e] }, ar.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i7.uW,
                    children: [
                        (0, r.jsx)(h.E, {
                            variant: "eyebrow",
                            className: i7.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                rt(e);
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
    rn = a(320681);
function rs(e) {
    let { hotspotLocation: t } = e,
        [a, l] = (0, V.yK)([rl.HP], () => [rl.HP.hasHotspot(t, !0), rl.HP.getHotspotOverride(t)]);
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
        onSelectionChange: (e) => (null != e ? (0, rl.Kl)(t, e) : (0, rl.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function ri() {
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsx)(d.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: rn.IN,
            children: (0, r.jsx)(F.B, {
                gap: 20,
                children: Object.keys(rl._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(rs, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var rr = a(919523),
    ro = a(855522),
    rd = a(37646),
    rc = a(773669);
function ru() {
    let e = (0, V.bG)([rc.default], () => rc.default.locale),
        [t, a] = o.useState(),
        l = (0, rr.runtimeHashMessageKey)(t ?? ""),
        n = o.useMemo(() => a6.t[l], [l]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(aF.Ay, {
                children: [
                    (0, r.jsx)(aF.Ay.Icon, { icon: rd.U, tooltip: "Locale" }),
                    (0, r.jsx)(aF.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(lD, {
                children: [
                    (0, r.jsx)(lT, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(lT, { name: "App", children: e }),
                    (0, r.jsx)(lT, { name: "System", children: a6.systemLocale }),
                    (0, r.jsx)(lT, { name: "@discord/intl", children: a6.intl.currentLocale }),
                    (0, r.jsx)(lT, { name: "common i18n", children: ro.A.getLocale() }),
                    (0, r.jsx)(lT, { name: "Moment", children: lo().locale() }),
                ],
            }),
            (0, r.jsxs)(aF.Ay, {
                children: [
                    (0, r.jsx)(aF.Ay.Icon, { icon: rd.U, tooltip: "Messages" }),
                    (0, r.jsx)(aF.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(lD, {
                children: (0, r.jsx)(lT, { name: "Unique Rendered Main Messages", children: Object.keys(a6.t).length }),
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
            (0, r.jsxs)(lD, {
                children: [
                    (0, r.jsx)(lT, { name: "Hashed key", children: l }),
                    (0, r.jsx)(lT, { name: "Exists?", children: null != n ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(aB.A, { data: n?.(e) }),
        ],
    });
}
var rm = a(434404);
function rh() {
    let { node: e } = (0, X.Ay)(rm.F, "");
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(Q.A, { node: e }, e.key),
        }),
    });
}
var rx = a(663066),
    rp = a(80556),
    rg = a(907135),
    rv = a(665095),
    rj = a(87404);
function rb() {
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: sf.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: sf.uW,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: sf.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, rx.B8)(() => (0, r.jsx)(rv.A, {}), { layerKey: rj._s, Layer: rp.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sf.uW,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: sf.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, rx.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rg.A, { onClose: t });
                                        },
                                        { layerKey: rj._s, Layer: rp.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sf.uW,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: sf.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    rx.xr.setState({ fullScreenLayers: [] });
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
var rf = a(687813),
    r_ = a(604121);
let ry = {
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
function rE(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let l = new Uint8Array(e);
                    rf.$1(l, (e, l) => {
                        null != e && a(e);
                        let n = Object.keys(l).reduce((e, t) => ({ ...e, [t]: JSON.parse(rf.he(l[t])) }), {}),
                            s = n["manifest.json"];
                        t(n[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rC() {
    let [e, t] = o.useState(void 0),
        [a, l] = o.useState(400),
        [n, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(F.B, {
            gap: 24,
            children: [
                (0, r.jsx)(t7.Z, {
                    options: Object.keys(ry).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(F.B, {
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
                        let t = ry[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rE).then(eK().cloneDeep)
                                            : await t().then((e) => eK().cloneDeep(e.default)),
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
                            r_.a,
                            {
                                importData: () => {
                                    let t = ry[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rE).then(eK().cloneDeep)
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
var rS = a(442433),
    rA = a(395671);
let rN = {
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rS.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("9004"), a.e("19690"), a.e("22941"), a.e("10758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(a1.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("28149"),
                    a.e("14947"),
                    a.e("1258"),
                    a.e("53586"),
                    a.e("87845"),
                    a.e("45317"),
                    a.e("66161"),
                    a.e("71192"),
                    a.e("78230"),
                    a.e("38937"),
                    a.e("61175"),
                    a.e("63434"),
                    a.e("4974"),
                    a.e("89694"),
                    a.e("31953"),
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
                t = Object.values(a1.A.getGuilds())[0];
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
            let { default: e } = await Promise.all([a.e("66161"), a.e("26132"), a.e("44491")]).then(a.bind(a, 907206));
            return (t) => (0, r.jsx)(e, { ...t, onClose: rS.Z_ });
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
                        console.log("Leave role clicked"), (0, rS.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e("86456"), a.e("89346")]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: l } = await Promise.resolve().then(a.bind(a, 6161)),
                n = ee.default.getCurrentUser(),
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
                    a.e("63434"),
                    a.e("53586"),
                    a.e("11810"),
                    a.e("14656"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(a1.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, rS.Z_)();
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
                t = a1.A.getGuilds(),
                l = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(av.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = av.A.getAllThreadsForParent(t.id);
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
                t = Object.values(a1.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rS.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("4974"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(a1.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rS.Z_ });
        },
    },
    rk = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("83518"), a.e("55197"), a.e("50974")]).then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rI() {
    let e = o.useMemo(
            () =>
                Object.keys(rN)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rk)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, l] = o.useState(null),
        [n, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rS.L3)(e, rN[a]);
            },
            [a],
        ),
        d = null != n ? rk[n] : null;
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)(F.B, {
            className: sf.l$,
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
                            onSelectionChange: l,
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
var rD = a(253506),
    rT = a(665260),
    rR = a(97808),
    rO = a(778712),
    rw = a(308528),
    rM = a(720149),
    rL = a(571694),
    rP = a(963852),
    rU = a(704844),
    rG = a(309010),
    rF = a(567761),
    rB = a(716371),
    r$ = a(825801);
let rV = [
    { id: "USER_JOIN", value: en.lAJ.USER_JOIN, label: "User Join" },
    { id: "CHANNEL_PINNED_MESSAGE", value: en.lAJ.CHANNEL_PINNED_MESSAGE, label: "Channel Pinned Message" },
    { id: "GUILD_BOOST", value: en.lAJ.GUILD_BOOST, label: "Guild Boost" },
    { id: "GUILD_BOOST_TIER_1", value: en.lAJ.GUILD_BOOST_TIER_1, label: "Guild Boost Tier 1" },
    { id: "GUILD_BOOST_TIER_2", value: en.lAJ.GUILD_BOOST_TIER_2, label: "Guild Boost Tier 2" },
    { id: "GUILD_BOOST_TIER_3", value: en.lAJ.GUILD_BOOST_TIER_3, label: "Guild Boost Tier 3" },
    { id: "THREAD_CREATED", value: en.lAJ.THREAD_CREATED, label: "Thread Created" },
    { id: "CHANNEL_FOLLOW_ADD", value: en.lAJ.CHANNEL_FOLLOW_ADD, label: "Channel Follow Add" },
    { id: "STAGE_START", value: en.lAJ.STAGE_START, label: "Stage Start" },
    { id: "STAGE_END", value: en.lAJ.STAGE_END, label: "Stage End" },
    { id: "STAGE_SPEAKER", value: en.lAJ.STAGE_SPEAKER, label: "Stage Speaker" },
    { id: "STAGE_RAISE_HAND", value: en.lAJ.STAGE_RAISE_HAND, label: "Stage Raise Hand" },
    { id: "STAGE_TOPIC", value: en.lAJ.STAGE_TOPIC, label: "Stage Topic" },
    { id: "VOICE_SESSION", value: en.lAJ.VOICE_SESSION, label: "Voice Session" },
    { id: "FRIEND_REQUEST_ACCEPTED", value: en.lAJ.FRIEND_REQUEST_ACCEPTED, label: "Friend Request Accepted" },
    { id: "GUILD_DISCOVERY_DISQUALIFIED", value: en.lAJ.GUILD_DISCOVERY_DISQUALIFIED, label: "Discovery Disqualified" },
    { id: "GUILD_DISCOVERY_REQUALIFIED", value: en.lAJ.GUILD_DISCOVERY_REQUALIFIED, label: "Discovery Requalified" },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",
        value: en.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
        label: "Discovery Grace Initial Warning",
    },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",
        value: en.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
        label: "Discovery Grace Final Warning",
    },
    { id: "RECIPIENT_ADD", value: en.lAJ.RECIPIENT_ADD, label: "Recipient Add" },
    { id: "RECIPIENT_REMOVE", value: en.lAJ.RECIPIENT_REMOVE, label: "Recipient Remove" },
    { id: "CALL", value: en.lAJ.CALL, label: "Call" },
];
function rW() {
    let [e, t] = o.useState(en.lAJ.USER_JOIN),
        a = (0, V.bG)([rG.A], () => rG.A.getChannelId(), []),
        l = o.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, rP.Ay)({ channelId: a, content: "", type: e, state: en.cmJ.SENT });
            rM.A.receiveMessage(a, t, !1);
        }, [a, e]),
        n = o.useCallback(() => {
            if (null != a)
                for (let { value: e } of rV) {
                    let t = (0, rP.Ay)({ channelId: a, content: "", type: e, state: en.cmJ.SENT });
                    rM.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, r.jsxs)("div", {
        className: r$.gs,
        children: [
            (0, r.jsx)(t7.Z, {
                label: "Inject System Message",
                selectionMode: "single",
                options: rV,
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
function rz() {
    let e = (0, V.yK)([rF.default], () => rF.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: l, options: n } = (0, V.cf)([av.A, ee.default, aj.A], () => ({
            selectedChannel: av.A.getChannel(t),
            options: e.map((e) => {
                let t = av.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, ag.m1)(t, ee.default, aj.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rR.eu, { src: (0, rL.Y)(t), "aria-hidden": !0, size: rO._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == l || !l.isPrivate()) return;
            let e = (0, rT.PQ)(l.recipientFlags ?? 0, rD.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rU.A.updatePrivateChannelRecipientFlags(l.id, e);
        }, [l]),
        i = !!l?.isPrivate() && (0, rT.Lt)(l.recipientFlags ?? 0, rD.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: r$.gs,
        children: [
            (0, r.jsx)(t7.Z, {
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
function rH() {
    let e = o.useCallback(() => {
        rw.A.openPrivateChannel({ recipientIds: [rB.K] });
    }, []);
    return (0, r.jsx)(m.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rK() {
    let e = (0, V.bG)([aG.Ay], () => aG.Ay.allByCategory(aG.xW.MESSAGING), [], V.My).map((e) => {
        let [t, a, { label: l }] = e;
        return (0, r.jsx)(c.d, { label: l, description: t, checked: a, onChange: (e) => sD(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: P()(tG.nd, r$.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: r$.yF }),
            (0, r.jsx)(rW, {}),
            (0, r.jsx)("div", { className: r$.yF }),
            (0, r.jsx)(rz, {}),
            (0, r.jsx)("div", { className: r$.yF }),
            (0, r.jsx)(rH, {}),
        ],
    });
}
var rY = a(459838),
    rq = a(772707),
    rJ = a(150934),
    rQ = a(598653),
    rX = a(166403),
    rZ = a(625494),
    r0 = a(204925),
    r1 = a(325278);
let r2 = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: a6.intl.string(a6.t.ZLRYGU),
                confirmButtonText: a6.intl.string(a6.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: a6.intl.string(a6.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: a6.intl.string(a6.t["13ofGu"]),
                impression: { impressionName: s0.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("54398"), a.e("34260"), a.e("18467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: ln.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("25226"), a.e("82758"), a.e("80022"), a.e("10136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: r0.w_.NSFW_SERVER });
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
            a.e("65424"),
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
        let { default: e } = await Promise.all([a.e("58735"), a.e("4782"), a.e("89545"), a.e("11493")]).then(
            a.bind(a, 914724),
        );
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("96531").then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: rY.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(rq.k, {
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
        let { PremiumSubscriptionPauseModalSelect: e } = await Promise.all([a.e("34218"), a.e("80347")]).then(
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
                (t.default.getDevicesForPlatform = (e) => (e === en.fg2.PLAYSTATION ? s : l.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== en.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === en.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                    (0, r.jsx)(e, { ...a, channel: n, platform: en.fg2.PLAYSTATION })
                );
            };
        return (i.displayName = "PlayStationModalWrapper"), i;
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([a.e("56600"), a.e("27495")]).then(a.bind(a, 651930));
        return (t) => (0, r.jsx)(e, { ...t, detectedActivity: { application_id: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([a.e("39492"), a.e("38937"), a.e("92030"), a.e("51471")]).then(
            a.bind(a, 550560),
        );
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
        let { default: e } = await Promise.all([a.e("53586"), a.e("10534")]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e("53586"), a.e("10534")]).then(a.bind(a, 308229));
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
            a.e("49589"),
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
                                (0, r.jsx)(rJ.S, {
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
                                (0, r.jsx)(rJ.S, {
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
        let { default: e } = await Promise.all([a.e("63434"), a.e("46313")]).then(a.bind(a, 336496));
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
                a.e("33111"),
                a.e("22255"),
                a.e("55925"),
                a.e("37381"),
                a.e("59375"),
                a.e("31389"),
            ]).then(a.bind(a, 492)),
            t = {
                channel_id: "123456789",
                channel_type: en.rbe.GUILD_VOICE,
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
            t = { ownerId: "987654321", guildId: "123456789", channelId: "123456789", streamType: r1.U4.GUILD },
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
        let e = ee.default.getUser("12345"),
            t = ee.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await Promise.all([a.e("53385"), a.e("55738"), a.e("31385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(l, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = ee.default.getUser("12345"),
            t = ee.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await Promise.all([a.e("53385"), a.e("55738"), a.e("84811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(l, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = ee.default.getUser("12345"),
            t = ee.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await Promise.all([a.e("53385"), a.e("55738"), a.e("17219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(l, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = ee.default.getUser("12345"),
            t = ee.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await Promise.all([a.e("53385"), a.e("55738"), a.e("43139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(l, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([
            a.e("58735"),
            a.e("30244"),
            a.e("88905"),
            a.e("48370"),
            a.e("72875"),
        ]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("44616"), a.e("85579")]).then(a.bind(a, 785606)),
            t = rX.A.getPremiumGroupSubscription();
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
            t = Object.keys(a1.A.getGuilds())[0];
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
            t = Object.values(a1.A.getGuilds())[0];
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
            a.e("65923"),
            a.e("35316"),
            a.e("74275"),
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
            a.e("65424"),
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
                Object.keys(r2)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: sf.l$,
            children: [
                (0, r.jsx)("section", {
                    className: sf.uW,
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
                                onClick: () => null != t && (0, eF.openModalLazy)(r2[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: sf.uW,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: sf.bd,
                            children: (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rQ.o)(!0), rZ._.dispatch(en.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var r8 = a(933832),
    r6 = a(472229),
    r5 = a(694080),
    r9 = a(669316),
    r4 = a(354670),
    r7 = a(428262);
let oe = async () => {
        try {
            let { body: e } = await lZ.Bo.get({ url: en.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    ot = async (e, t) => {
        try {
            await lZ.Bo.post({ url: en.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r5._D)();
        }
    },
    oa = async (e, t) => {
        try {
            await lZ.Bo.del({ url: en.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r5._D)();
        }
    },
    ol = async () => {
        try {
            let { body: e } = await lZ.Bo.get({ url: en.Rsh.USER_OFFERS, rejectWithError: !0 });
            return { trial: e.trial, discount: e.discount.map(r9.A.createFromServer) };
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    on = async () => {
        try {
            await lZ.Bo.del({ url: en.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await r4.A.forceReset(), await (0, r5._D)();
        }
    },
    os = async (e) => {
        await lZ.Bo.post({ url: en.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function oi(e) {
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
        C = b?.sku_id === sh.pe.TIER_0,
        S = async () => {
            u(!0), y ? await A({ expiresAt: null }) : await (0, r5.u1)(t), l(), u(!1);
        },
        A = async (e) => {
            u(!0);
            try {
                await lZ.Bo.patch({
                    url: en.Rsh.UPDATE_USER_OFFER(p, "trial"),
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
    let N = "Active";
    return (
        y && (N = "Acked"),
        E && (N = "Expired"),
        (0, r.jsxs)("div", {
            className: P()(sf.Nr, C ? sf.Qf : sf.C1),
            children: [
                (0, r.jsx)("div", {
                    className: P()(sf.nM, sf.S7),
                    children: (0, r.jsx)($.D, { variant: "heading-lg/semibold", color: "always-white", children: _ }),
                }),
                (0, r.jsxs)(U.D, {
                    className: P()(sf.nM, sf.QB),
                    onClick: () => {
                        (0, lj.C)(p, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", p] }),
                        n
                            ? (0, r.jsx)(r8.A, { size: "md", color: "currentColor", className: sf.Kk })
                            : (0, r.jsx)(lc.T, { size: "xs", color: "currentColor", className: sf.Kk }),
                    ],
                }),
                (0, r.jsxs)(U.D, {
                    className: P()(sf.nM, sf.QB),
                    onClick: () => {
                        (0, lj.C)(j, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", j] }),
                        i
                            ? (0, r.jsx)(r8.A, { size: "md", color: "currentColor", className: sf.Kk })
                            : (0, r.jsx)(lc.T, { size: "xs", color: "currentColor", className: sf.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: sf.nM,
                    children: (0, r.jsxs)(h.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, r7.re)({
                                intervalType: b?.interval ?? sh.WT.MONTH,
                                intervalCount: b?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: sf.nM,
                    children: [
                        (0, r.jsxs)(h.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, r6.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, lb.Xm)(g),
                            onChange: (e) => {
                                A({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sf.nM,
                    children: [
                        (0, r.jsx)(h.E, { variant: "eyebrow", color: "always-white", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: f?.id ?? "",
                            onChange: (e) => A({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sf.fC,
                    children: [
                        (0, r.jsx)(U.D, {
                            onClick: S,
                            className: P()(sf.qS, sf.vk, { [sf.R1]: y, [sf._7]: E }),
                            children: (0, r.jsx)(h.E, {
                                variant: "eyebrow",
                                color: "Acked" === N ? void 0 : "always-white",
                                children: N,
                            }),
                        }),
                        null != v &&
                            (0, r.jsx)("div", {
                                className: P()(sf.qS, sf.k3),
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
                        u(!0), await oa(p, "trial"), l(), u(!1);
                    },
                    children: (0, r.jsx)(lh.u, { size: "md", color: "currentColor", className: P()(sf.Kk, sf.IT) }),
                }),
                (0, r.jsx)("div", { className: P()(sf.g4, { [sf.VP]: c || m }), children: (0, r.jsx)(tt.y, {}) }),
            ],
        })
    );
}
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
            u(!0), f ? await C({ expiresAt: null }) : await (0, r5.u1)(void 0, t), l(), u(!1);
        },
        C = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await lZ.Bo.patch({
                    url: en.Rsh.UPDATE_USER_OFFER(p, "discount"),
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
            className: P()(sf.Nr, sf.id),
            children: [
                (0, r.jsx)("div", {
                    className: P()(sf.nM, sf.S7),
                    children: (0, r.jsx)($.D, { variant: "heading-lg/semibold", color: "text-default", children: b }),
                }),
                (0, r.jsxs)(U.D, {
                    className: P()(sf.nM, sf.QB),
                    onClick: () => {
                        (0, lj.C)(p, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", p] }),
                        n
                            ? (0, r.jsx)(r8.A, { size: "md", color: "currentColor", className: P()(sf.Kk, sf.mK) })
                            : (0, r.jsx)(lc.T, { size: "xs", color: "currentColor", className: sf.Kk }),
                    ],
                }),
                (0, r.jsxs)(U.D, {
                    className: P()(sf.nM, sf.QB),
                    onClick: () => {
                        (0, lj.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(h.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", v] }),
                        i
                            ? (0, r.jsx)(r8.A, { size: "md", color: "currentColor", className: P()(sf.Kk, sf.mK) })
                            : (0, r.jsx)(lc.T, { size: "xs", color: "currentColor", className: sf.Kk }),
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
                    className: sf.nM,
                    children: [
                        (0, r.jsxs)(h.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, r6.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, lb.Xm)(g?.toISOString()),
                            onChange: (e) =>
                                C({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sf.fC,
                    children: [
                        (0, r.jsx)(U.D, {
                            onClick: E,
                            className: P()(sf.qS, sf.vk, { [sf.R1]: f, [sf._7]: _ }),
                            children: (0, r.jsx)(h.E, {
                                variant: "eyebrow",
                                color: "Acked" === S ? void 0 : "always-white",
                                children: S,
                            }),
                        }),
                        y &&
                            (0, r.jsx)("div", {
                                className: P()(sf.qS, sf.k3),
                                children: (0, r.jsx)(h.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(U.D, {
                    className: sf.aR,
                    onClick: async () => {
                        u(!0), await oa(p, "discount"), l(), u(!1);
                    },
                    children: (0, r.jsx)(lh.u, { size: "md", color: "currentColor", className: P()(sf.Kk, sf.fy) }),
                }),
                (0, r.jsx)("div", { className: P()(sf.g4, { [sf.VP]: c || m }), children: (0, r.jsx)(tt.y, {}) }),
            ],
        })
    );
}
function oo() {
    let [e, t] = o.useState([]),
        [a, l] = o.useState([]),
        [n, s] = o.useState(),
        [i, d] = o.useState(),
        [c, u] = o.useState([]),
        [p, v] = o.useState([]),
        [j, b] = o.useState(!0),
        [f, _] = o.useState(10080),
        [y, E] = o.useState([]),
        { entitlements: C, deleteFractionalPremium: S, refreshEntitlementList: A } = sj();
    o.useEffect(() => {
        A();
    }, [A]),
        o.useEffect(() => {
            E(C.filter((e) => e.sourceType === en.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [C]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || j) &&
                oe().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), l(r), null == n && s(a[0].value), null == i && d(r[0].value);
                });
        }, [e, a, n, i, j]),
        o.useEffect(() => {
            j &&
                (b(!1),
                r4.A.forceReset(),
                (0, r5._D)(),
                ol().then((e) => {
                    u(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        v(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [j]);
    let N = async () => {
            null != n && (await ot(n, "trial"), b(!0));
        },
        k = async () => {
            null != i && (await ot(i, "discount"), b(!0));
        },
        I = async () => {
            await on(), b(!0);
        },
        D = async () => {
            let e = new Date(Date.now() + 60 * f * 1e3).toISOString();
            await os(e), A();
        };
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: sf.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: sf.uW,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: sf.Uo,
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
                                    onClick: () => (0, nC.xB)(ar.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, nC._N)(ar.M.NAGBAR_NOTICE_OFFER_EXPIRING),
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
                    className: sf.uW,
                    children: (0, r.jsxs)("div", {
                        className: sf.bd,
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
                            (0, r.jsx)(m.$, { variant: "primary", text: "Create", onClick: N }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: sf.uW,
                    children: (0, r.jsxs)("div", {
                        className: sf.bd,
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
                        className: sf.uW,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            c.map((t) =>
                                (0, r.jsx)(oi, { offer: t, offerOptions: e, forceRefetch: () => b(!0) }, t.id),
                            ),
                        ],
                    }),
                p.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: sf.uW,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            p.map((e) =>
                                (0, r.jsx)(or, { offer: e, offerOptions: a, forceRefetch: () => b(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: sf.uW,
                    children: (0, r.jsxs)("div", {
                        className: sf.bd,
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
                                    (0, r.jsx)(sy, { entitlement: e, active: !0, onDelete: () => S(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var od = a(528265),
    oc = a(26279),
    ou = a(142798);
let om = {
        [oc.Re.UNSPECIFIED]: "Unspecified",
        [oc.Re.DRAFT]: "Draft",
        [oc.Re.SIGNED]: "Signed",
        [oc.Re.DISCARDED]: "Discarded",
        [oc.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
    },
    oh = { [oc.BM.UNSPECIFIED]: "Unspecified", [oc.BM.ONE_TIME]: "One Time", [oc.BM.SUBSCRIPTION]: "Subscription" };
function ox() {
    let [e, t] = o.useState(null),
        [a, l] = o.useState(!0),
        [n, s] = o.useState(null),
        i = o.useCallback(async () => {
            l(!0), s(null);
            try {
                let e = await lZ.Bo.get({ url: `${en.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
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
            className: tG.nd,
            children: (0, r.jsxs)("div", {
                className: sf.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: sf.dL,
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
                    null != n && (0, r.jsx)(G.w, { type: "critical", children: n }),
                    !a &&
                        null != e &&
                        0 === e.length &&
                        (0, r.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "No orders found.",
                        }),
                    null != e && e.map((e) => (0, r.jsx)(op, { order: e }, e.id)),
                ],
            }),
        })
    );
}
function op(e) {
    let { order: t } = e,
        [a, l] = o.useState(!1),
        [n, s] = o.useState(!1),
        i = om[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${i}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            navigator.clipboard.writeText(t.id), s(!0), setTimeout(() => s(!1), 2e3);
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: sf.Nr,
        children: [
            (0, r.jsxs)(F.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: n ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(od.C, {
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
                                                  oh[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
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
                    className: ou.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(U.D, {
                            onClick: () => l((e) => !e),
                            className: ou.Eh,
                            children: [
                                (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(su.A, { direction: a ? su.A.Directions.UP : su.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: ou.j3,
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
var og = a(935462),
    ov = a(260598),
    oj = a(93688),
    ob = a(717400),
    of = a(676955),
    o_ = a(31300),
    oy = a(500060),
    oE = a(391973),
    oC = a(684013),
    oS = a(765671),
    oA = a(235986),
    oN = a(742589),
    ok = a(41984),
    oI = a(181435),
    oD = a(435736),
    oT = a(296027),
    oR = a(515183),
    oO = a(489277),
    ow = a(127242),
    oM = a(869014),
    oL = a(528772),
    oP = a(38502),
    oU = a(532624),
    oG = a(773371),
    oF = a(996439),
    oB = a(350535),
    o$ = a(9302),
    oV = a(644434),
    oW = a(618137);
let oz = {
        [en.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: en.uss.CLICK_ZONE_DEBUG,
            id: (0, eA.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...oP.A.getWidgetDefaultSettings(en.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [en.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: en.uss.PERFORMANCE_DEBUG,
            id: (0, eA.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...oP.A.getWidgetDefaultSettings(en.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    oH = {};
function oK(e) {
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
        (0, r.jsxs)(ld.$n, {
            look: ld.$n.Looks.LINK,
            color: ld.$n.Colors.LINK,
            size: ld.$n.Sizes.MIN,
            onClick: function () {
                (0, lj.C)(t, () => l(!0));
            },
            className: oW.DT,
            children: ["Application Id: ", t, " ", a ? a6.intl.string(a6.t.t5VZ88) : null],
        })
    );
}
let oY = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, V.bG)([f.Ay], () => f.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            l = (0, V.bG)([a3.A], () => a3.A.getGameForPID(t.pid)),
            n = (0, V.bG)([f.Ay], () => (null == a ? null : f.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: oW.st,
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
                        children: (0, r.jsx)(oK, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, oR.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(h.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: oW.st,
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
                            children: ["overlayMethod: ", (0, oR.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != n &&
                    (0, r.jsxs)("div", {
                        className: oW.st,
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
                                children: ["raw overlayMethod: ", (0, oR.gK)(n.overlayMethod)],
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
    oq = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, V.cf)([oG.default], () => oG.default.getOverlayPIDStatuses()),
            l = (0, V.cf)([oT.default], () => oT.default.getTrackedGames()),
            n = (0, V.bG)([oG.default], () => oG.default.isInputLocked(t), [t]),
            s = (0, V.bG)([oG.default], () => oG.default.DEV_isInputLockedV3(t), [t]),
            i = (0, V.bG)([oG.default], () => oG.default.DEV_isInputLocked(t), [t]),
            o = (0, V.bG)([oG.default], () => oG.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: oW.st,
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
function oJ(e) {
    let t,
        a = ((t = Object.values((0, V.yK)([oP.A], () => oP.A.getWidgetsForLayout(oV.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, oE.uv)(a.id);
            else {
                let t = oz[e];
                if (null == t) return;
                let a = t(oV.G);
                (0, oE.jn)(a);
            }
        },
    ];
}
function oQ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, lb.i$)(lo()(e), "h:mm:ss.SSS");
}
let oX = o.memo(function (e) {
    let { pid: t, ...a } = e,
        l = (0, V.bG)([oT.default], () => {
            if (null == t) return "Unknown";
            let e = oT.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((oH[t] = e), e) : (oH[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(h.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: l });
});
function oZ() {
    let e = (0, V.bG)([ow.A], () => ow.A.hasRenderDebugMode(ok.x7.TrackFocusPIDs)),
        t = (0, V.yK)([oT.default], () => oT.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: oW.st,
        children: [
            (0, r.jsxs)("div", {
                className: oW.Iv,
                children: [
                    (0, r.jsx)(c.d, {
                        checked: e,
                        onChange: () =>
                            void oC.A.setRenderDebugMode(
                                !ow.A.hasRenderDebugMode(ok.x7.TrackFocusPIDs),
                                ok.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(U.D, {
                        className: oW.LL,
                        onClick: () => oC.A.clearTrackedPids(),
                        children: (0, r.jsx)(lh.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(x.Ip, {
                className: P()(oW.st, oW.XG),
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
                                children: (0, r.jsx)(nq.m, {
                                    position: "left",
                                    text: l === ok.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(h.E, {
                                            variant: "text-sm/medium",
                                            color: l === ok.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(oX, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                oQ(t),
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
let o0 = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, V.bG)([oT.default, f.Ay], () => {
                if (null == t) return null;
                let e = oT.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = f.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? nG.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(h.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, oR.wR)(a) : "Unknown"],
        });
    }),
    o1 = o.memo(function () {
        let e = (0, V.cf)([oT.default], () => oT.default.getTrackedGames()),
            [t, a] = o.useState({}),
            l = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (l.current = setInterval(async () => {
                        let e = f.Ay.getRunningGames(),
                            t = [],
                            l = Date.now();
                        for (let a of e) t.push((0, oR.E1)(a.pid, 0).then((e) => [a.pid, e, l]));
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
                    }, +l1.A.Millis.SECOND)),
                    () => clearInterval(l.current)
                ),
                [],
            ),
            (0, r.jsx)(nq.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(x.Ip, {
                        className: P()(oW.st, oW.XG),
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
                                            (0, r.jsx)(oX, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(o0, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: l } = t;
                                                    return (0, r.jsx)(
                                                        h.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, oR.wR)(a)} @ ${oQ(l)}`,
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
    o2 = o.memo(function () {
        let e = (0, V.cf)([oT.default], () => oT.default.getTrackedGames()),
            t = (0, o$.getPID)(),
            a = (0, V.bG)([oT.default], () => oT.default.isOverlayOOPEnabledForPid(t), [t]),
            [l, n] = (0, V.yK)([oL.A], () => [oL.A.enabled, oL.A.keepOpen]),
            s = (0, V.bG)([oG.default], () => oG.default.getFocusedPID()),
            i = (0, V.bG)([oG.default], () => oG.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: oW.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(oq, { pid: e.pid }, e.pid)),
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
    o3 = [
        {
            mode: ok.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: ok.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: ok.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: ok.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: ok.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: ok.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: ok.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    o8 = o.memo(function () {
        let [e, t] = oJ(en.uss.CLICK_ZONE_DEBUG),
            [a, l] = oJ(en.uss.PERFORMANCE_DEBUG),
            n = (0, V.bG)([ow.A], () => ow.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: oW.st,
                children: o3.map((s) => {
                    let i =
                            s.mode === ok.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${oM.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === ok.x7.ClickZones
                                ? null != e
                                : s.mode === ok.x7.WidgetAreas
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
                                    s.mode === ok.x7.ClickZones && t(),
                                        s.mode === ok.x7.WidgetAreas && l(),
                                        (e = s.mode),
                                        oC.A.setRenderDebugMode(!a, e);
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
    o6 = o.memo(function () {
        let e = (0, V.cf)([oT.default], () => oT.default.getTrackedGames()),
            t = (0, V.bG)([f.Ay], () => f.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(nq.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: oW.st,
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
                                                (0, r.jsx)(o0, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(nq.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: oW.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(oY, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    o5 = o.memo(function () {
        let e = (0, V.bG)([oT.default], () => oT.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            l = [
                { label: ok.V6.UNSET, value: ok.V6.UNSET, id: ok.V6.UNSET },
                { label: ok.V6.IN_PROCESS_V2, value: ok.V6.IN_PROCESS_V2, id: ok.V6.IN_PROCESS_V2 },
                { label: ok.V6.OUT_OF_PROCESS_V3, value: ok.V6.OUT_OF_PROCESS_V3, id: ok.V6.OUT_OF_PROCESS_V3 },
                {
                    label: ok.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: ok.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: ok.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(g.l, {
            label: "Override the overlay render mode",
            value: t,
            options: l,
            onSelectionChange: (e) => {
                a(e), oC.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function o9(e) {
    let { modalProps: t, onClose: a } = e,
        [l, n] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(og.EO, {
        size: og.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(og.rQ, {
                align: oA.A.Align.CENTER,
                justify: oA.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(og.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(og.$m, {
                children: (0, r.jsx)("div", {
                    className: oW.st,
                    children: (0, r.jsx)(ov.f, { label: "Paste JSON Here", onChange: n, value: l ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(og.jl, {
                children: (0, r.jsxs)(sa.e, {
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
let o4 = {
    native: { label: "Native", filter: (e) => e.type === oI.ON.NativeLegacy || e.type === oI.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === oI.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === oI.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === oI.ON.OOPModule || e.type === oI.ON.LegacyModule },
};
function o7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oI.QJ.Info;
    if (t === oI.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case oI.ON.NativeLegacy:
            return "var(--yellow-500)";
        case oI.ON.NativeOOP:
            return "var(--green-500)";
        case oI.ON.Flux:
            return "var(--brand-400)";
        case oI.ON.Renderer:
            return "var(--brand-500)";
        case oI.ON.LegacyModule:
            return "var(--yellow-300)";
        case oI.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let de = [
    {
        key: "type",
        cellClassName: oW.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                l = dt(t);
            return (0, r.jsx)("div", {
                className: oW.g$,
                style: { color: o7(t, a) },
                children: (0, r.jsx)(l, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: oW.Cm,
        render(e) {
            let { name: t, type: a, logType: l } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(h.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case oI.QJ.Info:
                                    return "text-strong";
                                case oI.QJ.Warning:
                                    return "text-feedback-warning";
                                case oI.QJ.Error:
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
        cellClassName: oW.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, lb.i$)(lo()(t), "h:mm:ss.SSS");
        },
    },
];
function dt(e) {
    switch (e) {
        case oI.ON.NativeLegacy:
            return oj.W;
        case oI.ON.NativeOOP:
            return ob.q;
        case oI.ON.Renderer:
        case oI.ON.Flux:
            return of.v;
        case oI.ON.LegacyModule:
            return o_.k;
        case oI.ON.OOPModule:
            return oy.o;
        default:
            return o_.k;
    }
}
function da(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let dl = ["__webpack_require__", "fn"],
    dn = ["web.js", "web.js.map"],
    ds = [
        {
            id: "details",
            name: "Details",
            group: aH.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: l, type: n, logType: s, nativeId: i, stack: o, data: d, timestamp: c, pid: u } = t,
                    m = lo()(c),
                    h = dt(n);
                return (0, r.jsxs)(x.Ar, {
                    className: oW.bW,
                    children: [
                        (0, r.jsxs)(oN.A, {
                            className: P()(tG.jr, oW.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: o7(n, s) },
                                    className: oW.nr,
                                    children: (0, r.jsx)(h, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(oN.A.Title, {
                                    wrapperClassName: oW.qd,
                                    children: [
                                        l,
                                        " (",
                                        n,
                                        ")",
                                        (0, r.jsx)(U.D, {
                                            tag: "span",
                                            className: oW.KE,
                                            onClick: () => (0, lj.C)(l),
                                            children: (0, r.jsx)(lc.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(oN.A.Icon, {
                                    icon: lc.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, lj.C)(da(t));
                                    },
                                }),
                                (0, r.jsx)(oN.A.Icon, { icon: lm.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(lD, {
                            className: oW.ZK,
                            children: [
                                (0, r.jsx)(lT, {
                                    name: "Timestamp",
                                    copyValue: m.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: m.toISOString(),
                                        title: (0, lb.i$)(m, "LLLL"),
                                        children: (0, lb.i$)(m, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(lT, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(lT, {
                                    name: "PID",
                                    copyValue: u?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: u?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(lT, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(lT, {
                                    name: "Data",
                                    copyValue: da(d),
                                    children: (0, r.jsx)("code", { children: da(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(lT, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, l, n, s] = a,
                                                        i = l.split(/[\\/]/).pop();
                                                    return dl.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: oW.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !dn.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: oW.lz,
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
    di = {
        searchType: lg.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: l, data: n } = e,
                s = [t, a, JSON.stringify(n)];
            return null != l && s.push(l), s;
        },
        throttleMs: 100,
    };
function dr() {
    let { ref: e, height: t } = (0, oS.Ay)(),
        a = (0, V.bG)([ow.A], () => ow.A.isModuleLoggingEnabled()),
        [l, n] = o.useState(a),
        [s, i] = o.useState(!1),
        [d, c] = o.useState(null),
        [u, m] = o.useState(Object.keys(o4)),
        [x, p] = (0, V.bG)([ow.A], () => ow.A.getOverlayLoggingBreadcrumbs(), [], oF.D),
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
                              let { filter: a } = o4[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [j, u, d, s, b],
        ),
        [E, C] = o.useState(y),
        [S, A] = o.useState(null),
        N = o.useMemo(() => j.find((e) => e.key === S), [j, S]),
        k = o.useCallback((e) => {
            C(e);
        }, []),
        { renderSelectedTab: I } = (0, aH.Ay)({ tabs: ds }, []);
    (0, lv.RT)(f, y, k, di, [j]);
    let D = o.useCallback((e) => {
            n(e), oC.A.setModuleLogging(e);
        }, []),
        [T, R] = o.useState(!1),
        O = o.useRef(null),
        w = o.useCallback(() => {
            (0, lj.C)(JSON.stringify(y)), R(!0);
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
                        (0, r.jsx)(o9, {
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
        className: oW.rh,
        children: [
            (0, r.jsxs)("div", {
                className: oW.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: P()(oW._V, oW.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: oW.iR,
                                children: (0, r.jsx)(rJ.S, { label: "Poll Native", checked: l, onChange: (e) => D(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: oW.iR,
                                children: (0, r.jsx)(rJ.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(U.D, {
                                className: oW.ny,
                                onClick: w,
                                children: [
                                    (0, r.jsx)(h.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: T ? "Copied" : "Copy All",
                                    }),
                                    T
                                        ? (0, r.jsx)(r8.A, { size: "sm", color: eB.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(lc.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(U.D, {
                                className: oW.ny,
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
                        className: P()(oW._V, oW.XQ),
                        children: Object.entries(o4).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                U.D,
                                {
                                    className: P()(oW.pb, u.includes(t) && oW.bx),
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
                        className: oW._V,
                        children: (0, r.jsx)(lx.I, {
                            query: f,
                            onChange: _,
                            onClear: () => _(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: P()(oW.st, oW.CZ),
                children: (0, r.jsx)(tF, {
                    columns: de,
                    data: E,
                    selectedRowKey: S ?? void 0,
                    onClickRow: (e) => A(e.key),
                }),
            }),
            null != N &&
                (0, r.jsx)(az, {
                    className: P()(oW.st, oW.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: I({ breadcrumb: N, onClose: () => A(null) }),
                }),
        ],
    });
}
let dd = o.memo(function () {
        let e = (0, V.bG)([oO.A], () => oO.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: oW.st,
            children: [
                (0, r.jsx)("div", {
                    className: oW.Iv,
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
    dc = o.memo(function () {
        let e = (0, V.bG)([ow.A], () => ow.A.isStateDebuggingEnabled()),
            t = (0, V.bG)([ow.A], () => ow.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    oC.A.setStateDebugging(!0),
                    () => {
                        oC.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: oW.st,
                children: [
                    (0, r.jsx)("div", {
                        className: oW.Iv,
                        children: (0, r.jsx)(c.d, {
                            checked: e,
                            onChange: () => oC.A.setStateDebugging(!e),
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
function du() {
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)("div", {
            className: P()(tG.nd, oW.rf),
            children: [
                (0, r.jsx)(o8, {}),
                (0, r.jsx)(o5, {}),
                (0, r.jsx)(o6, {}),
                (0, r.jsx)(o2, {}),
                (0, r.jsx)(oZ, {}),
                (0, r.jsx)(o1, {}),
                (0, r.jsx)(dd, {}),
                (0, r.jsx)(dc, {}),
            ],
        }),
    });
}
let dm = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    dh = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    dx = o.memo(function () {
        let e = (0, oD.wW)(),
            t = (0, V.bG)([oU.Ay], () => oU.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: oW.st,
            children: [
                (0, r.jsx)($.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, oB.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(g.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: dh(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oD.sw)(dm(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(g.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: dh(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oD.C3)(dm(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)($.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(m.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oD.xc)() }),
                (0, r.jsx)(m.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, oD.tM)(),
                }),
            ],
        });
    });
function dp() {
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsx)("div", { className: P()(tG.nd, oW.rf), children: (0, r.jsx)(dx, {}) }),
    });
}
function dg() {
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
            className: P()(tG.nd, oW.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: oW._V,
                    children: [
                        (0, r.jsx)(U.D, {
                            className: P()(oW.k0, "state" === e && oW.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(U.D, {
                            className: P()(oW.k0, "logging" === e && oW.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(U.D, {
                            className: P()(oW.k0, "experiments" === e && oW.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(h.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(du, {}),
                "logging" === e && (0, r.jsx)(dr, {}),
                "experiments" === e && (0, r.jsx)(dp, {}),
            ],
        })
    );
}
var dv = a(488428),
    dj = a(73825),
    db = a(753390),
    df = a(892656),
    d_ = a(944304),
    dy = a(300233),
    dE = a(599941),
    dC = a(817649),
    dS = a(4630),
    dA = a(44120),
    dN = a(532794),
    dk = a(216678),
    dI = a(194509),
    dD = a(761705),
    dT = a(65738),
    dR = a(265768);
function dO(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, dE.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(dC.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let dw = function () {
    let [e, t] = o.useState(sh.pe.TIER_2),
        [a, l] = o.useState(null),
        n = (0, V.yK)([a1.A], () => a1.A.getGuildsArray()),
        [s] = (0, V.yK)([rX.A], () => [rX.A.getPremiumSubscription()]),
        i = n.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, u] = o.useState(i.length > 0 ? i[0].value : null),
        [p, b] = o.useState(""),
        [f, _] = o.useState({ plan_id: sh.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        y = "true" !== f.gift && null != s,
        [E, C] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: S } = (0, aY.Ay)(tf.A.PAYMENT_FLOW_TEST_PAGE),
        [A, N] = o.useState(""),
        [k, I] = o.useState(en.dJq),
        { balance: D, isFetching: T, error: R } = (0, dD.W)(),
        { isSubmitting: O, responseMessage: w, redeemVirtualCurrency: M } = (0, dD.Q)(),
        [L, P] = o.useState(en.dJq),
        [U, G] = o.useState(""),
        [B, $] = o.useState(en.dJq),
        [W, z] = o.useState(en.dJq);
    return (0, r.jsx)(aY.f5, {
        value: S,
        children: (0, r.jsx)(x.Ip, {
            className: dR.XG,
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
                                    { id: "tier_2", value: sh.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sh.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sh.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dI.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: ld.XD.PRIMARY,
                                look: ld.pR.FILLED,
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
                                    { id: "tier_2", value: sh.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sh.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sh.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => l(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(m.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, dN.A)({ subscriptionTier: a, analyticsLocations: S }),
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
                                ? (0, r.jsx)(d_.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(j.c, {}),
                    (0, r.jsxs)(F.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(ij.Anchor, {
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
                                    (0, r.jsx)(nq.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: p.length < 1,
                                        children: (0, r.jsx)(m.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: p.length < 1,
                                            onClick: () => {
                                                window.open(en.BVt.BILLING_PROMOTION_REDEMPTION(p));
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
                                    { id: "tier_2", value: sh.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sh.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sh.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
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
                    (0, r.jsx)(nq.m, {
                        text: "Already subscribed",
                        shouldShow: y,
                        children: (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: y,
                            onClick: () => {
                                window.open(en.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dv.stringify({ ...f }));
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
                                              className: dR.wG,
                                              children: (0, r.jsx)(tt.y, { type: tt.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: dR.dB,
                                              children: [
                                                  null !== R &&
                                                      (0, r.jsxs)(h.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              R.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(dT.Gy, {
                                                      balance: D ?? 0,
                                                      balanceWidgetMode: dT.k7.SELECTED,
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
                                onClick: () => M(L, (0, eA.A)()),
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
                            (0, r.jsx)(dy.H, {
                                guildId: E?.id,
                                children: (0, r.jsx)(dO, { selectedGuildForGuildSub: E }),
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
                                        value: A,
                                        onChange: N,
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
                                    (0, dS.openIAPPurchaseModal)({
                                        applicationId: A,
                                        skuId: k,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: en.liQ.IN_APP },
                                        context: en.BRT.APP,
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
                                            (0, dk.q)({
                                                applicationId: U,
                                                skuId: B,
                                                analyticsLocations: S,
                                                checkoutFlow: df.CL.PREMIUM_APPS_OTP_CHECKOUT,
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
                                    onClick: () => (0, dj.YG)(),
                                }),
                                (0, r.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, db.uZ)(),
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
                            onClick: () => (0, nm.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var dM = a(219887),
    dL = a(459357),
    dP = a(885180),
    dU = a(742810),
    dG = a(500380),
    dF = a(102609),
    dB = a(710195),
    d$ = a(211287),
    dV = a(295405),
    dW = a(188976);
let dz = [
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
    dH = {
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
    dK = [
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
    dY = {
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
    dq = [
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
    dJ = {
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
function dQ() {
    let [e, t] = o.useState("US"),
        [a, l] = o.useState(null),
        [n, s] = o.useState(null),
        [i, d] = o.useState(null),
        [c, u] = o.useState(null),
        [p, v] = o.useState("pm_card_us"),
        [j, b] = o.useState(!1),
        f = Object.values((0, tb.bG)([dV.A], () => dV.A.paymentSources)),
        _ = dH[e],
        y = async () => {
            let t = p;
            "" === t && (t = "pm_card_us"),
                await lZ.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? n : "CA" === e ? c : null },
                    rejectWithError: !1,
                }),
                await (0, db.$o)();
        },
        E = async () => {
            await lZ.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, db.$o)();
        },
        C = async () => {
            await lZ.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, db.$o)();
        }, []),
        (0, r.jsx)(x.Ip, {
            className: tG.nd,
            children: (0, r.jsxs)("div", {
                className: sf.l$,
                children: [
                    (0, r.jsxs)(h.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: sf.Uo,
                        children: [
                            (0, r.jsx)(t7.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: dz
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: dW.bI,
                                                src: (0, dG.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), v(dH[e][0].value), b(1 === dH[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(g.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: dK.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        l(e), s(dY[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(g.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: dq.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        d(e), u(dJ[e] ?? null);
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
                    (0, r.jsx)(d9, {}),
                    (0, r.jsx)(h.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(d8, {}),
                    (0, r.jsx)(h.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    f.map((e) => (0, r.jsx)(d4, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let dX = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    dZ = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Unified checkout" },
    ],
    d0 = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    d1 = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Payment elements enabled" },
    ],
    d2 = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function d3(e) {
    let { experimentName: t, options: a = dX } = e,
        l = (0, tb.bG)([dB.A, l_.default], () => {
            let e = l_.default.getId(),
                a = dB.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        n = o.useCallback(
            (e) => {
                (0, dF.t$)(dF.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(g.l, { selectionMode: "single", label: t, value: l, options: [...a], onSelectionChange: n });
}
function d8() {
    return (0, r.jsxs)(F.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(d3, { experimentName: dU.W2.definition.name, options: dZ }),
            (0, r.jsx)(d3, { experimentName: dU._$.definition.name, options: dZ }),
            (0, r.jsx)(d3, { experimentName: dL.A.definition.name, options: d0 }),
            (0, r.jsx)(d3, { experimentName: dP._.definition.name, options: d1 }),
            (0, r.jsx)(d3, { experimentName: d$.A.definition.name, options: d2 }),
        ],
    });
}
let d6 = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    d5 = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function d9() {
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
                    let t = await lZ.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: d5[e], amount: p },
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
                        options: d6,
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
                (0, r.jsxs)(F.B, {
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
            null != h && (0, r.jsx)(G.w, { type: "critical", children: h }),
        ],
    });
}
function d4(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await lZ.Bo.patch({ url: en.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, db.$o)();
        };
    return (0, r.jsxs)("div", {
        className: sf.bd,
        children: [
            (0, r.jsx)(dM.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: dW.bI, src: (0, dG.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(h.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(m.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var d7 = a(706712),
    ce = a(367727),
    ct = a(845886);
function ca() {
    return (0, r.jsx)(x.Ip, { className: ct.kL, children: (0, r.jsx)(cl, {}) });
}
function cl() {
    let e = o.useCallback(() => {
            (0, nC._N)(ar.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, ce.FZ)(ar.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)($.D, { className: ct.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: ct.PW,
                children: (0, r.jsx)(m.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var cn = a(136722),
    cs = a(576705),
    ci = a(558393),
    cr = a(719366),
    co = a(842681);
function cd(e) {
    let { title: t, can: a } = e,
        l = a ? r8.A : Y.P,
        n = (0, r.jsx)("div", {
            className: P()(co.v_, a ? co.uU : co.Ss),
            children: (0, r.jsx)(l, { className: co.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: co.z8,
        children: [
            n,
            (0, r.jsx)("div", {
                className: co.rv,
                children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function cc() {
    let e = (0, V.bG)([rG.A], () => rG.A.getChannelId()),
        t = (0, V.bG)([a2.A], () => a2.A.getGuildId()),
        a = (0, V.bG)([av.A], () => av.A.getChannel(e)),
        l = (0, V.bG)([a1.A], () => a1.A.getGuild(t)),
        n = (0, V.bG)([cs.A], () => cs.A.computePermissions(a)),
        s = (0, V.bG)([cs.A], () => cs.A.computePermissions(l)),
        i = (0, ag.Ay)(a, !0),
        o = null != a ? (0, cr.mW)(a, !1) : null,
        d = null != l ? ci.A.getGuildPermissionSpecMap(l) : null,
        c = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                l = cn.zy(n, a);
            return (0, r.jsx)(cd, { title: t, can: l }, t);
        }),
        u = Object.values(d ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                l = cn.zy(s, a);
            return (0, r.jsx)(cd, { title: t, can: l }, t);
        });
    return (0, r.jsx)("div", {
        className: P()(tG.nd, co.nd),
        children: (0, r.jsxs)("div", {
            className: co.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: co.uW,
                    children: [
                        (0, r.jsx)($.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        c,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: co.uW,
                    children: [
                        (0, r.jsx)($.D, {
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
var cu = a(873298),
    cm = a(775602),
    ch = a(363195),
    cx = a(885386),
    cp = a(631670),
    cg = a(817281),
    cv = a(955572),
    cj = a(56348),
    cb = a(385803),
    cf = a(381941);
let c_ = [en.NJ8.DARK, en.NJ8.LIGHT, en.NJ8.DARKER, en.NJ8.MIDNIGHT],
    cy = [cu.NS.COMPACT, cu.NS.COZY, cu.NS.DEFAULT];
function cE(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function cC() {
    let e,
        t =
            ((e = ee.default.getCurrentUser()),
            r7.Ay.canUseClientThemes(e) ? Object.keys(cb.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                l = cE(a);
            if (null != l) {
                let t = cb.ag[l];
                e = t?.theme ?? en.NJ8.DARK;
            } else e = cE([en.NJ8.DARK, en.NJ8.DARKER, en.NJ8.MIDNIGHT]);
            await cg.u_(
                { theme: e, backgroundGradientPresetId: l ?? void 0, customUserThemeSettings: void 0 },
                nC.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = cE(c_);
            await cg.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                nC.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function cS() {
    let e = ty.A.purchases,
        t = (0, eI.x9)(e),
        a = (0, eI.$W)(e),
        l = t.length > 0,
        n = a.length > 0;
    if (l || n)
        try {
            let e = {};
            l && (e.avatarDecoration = cE([...t, null])), n && (e.nameplate = cE([...a, null])), (0, tr.p)(e);
            let s = to.A.getPendingChanges(),
                i = (0, cj.Sk)(s);
            await (0, cp._L)(i).finally(cp.pZ);
        } catch (e) {}
}
function cA() {
    try {
        let e = cE(en.hH7.FONT_SIZES);
        (0, cv.XS)(e);
        let t = cE(cf.qh);
        (0, cv.AC)(t);
        let a = cE(cy);
        cx.Xi.updateSetting(a);
    } catch (e) {}
}
function cN() {
    (0, tu.Bf)();
    let e = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
        t = cx.eh.useSetting(),
        a = (0, V.bG)([ch.A], () => ch.A.theme),
        l = t.backgroundGradientPresetId,
        n = (0, V.bG)([ty.A], () => ty.A.purchases),
        s = (0, eI.x9)(n),
        i = (0, eI.$W)(n),
        d = e?.avatarDecoration?.skuId,
        c = e?.collectibles?.nameplate?.skuId,
        u = null != d ? (s.find((e) => e.skuId === d) ?? null) : null,
        x = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        p = (0, V.bG)([t_.A], () => t_.A.getProduct(u?.skuId)),
        g = (0, V.bG)([t_.A], () => t_.A.getProduct(x?.skuId)),
        v = (0, V.bG)([cm.A], () => cm.A.fontSize),
        j = (0, V.bG)([cm.A], () => cm.A.messageGroupSpacing),
        b = cx.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = ee.default.getCurrentUser(),
                t = cx.eh.getSetting(),
                a = ty.A.purchases,
                l = (0, eI.x9)(a),
                n = (0, eI.$W)(a),
                s = ch.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (l.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (n.find((e) => e.skuId === o) ?? null) : null,
                u = cm.A.fontSize,
                m = cm.A.messageGroupSpacing,
                h = cx.Xi.getSetting();
            return () => {
                try {
                    cg.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        nC.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, tr.p)({ avatarDecoration: d, nameplate: c });
                    let e = to.A.getPendingChanges(),
                        t = (0, cj.Sk)(e);
                    (0, cp._L)(t).finally(cp.pZ), (0, cv.XS)(u), (0, cv.AC)(m), cx.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: nI.kL,
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
                        (0, r.jsx)(m.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: cC }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: cS,
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
                            children: ["Client Theme ID:", " ", null != l ? cb.ag[l]?.getName() : "None"],
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
                                        case cu.NS.COMPACT:
                                            return "Compact";
                                        case cu.NS.COZY:
                                            return "Cozy";
                                        case cu.NS.DEFAULT:
                                            return "Default";
                                        case cu.NS.RESPONSIVE:
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
var ck = a(885574),
    cI = a(311678),
    cD = a(508274),
    cT = a(837529);
let cR = [5793266, 2303016],
    cO = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function cw() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: l } = (0, cT.Zt)(),
        n = (0, eo.Ay)(),
        s = (0, V.bG)([ao.A], () => ao.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, cg.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), l(null));
    }
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)(F.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(cI.N, {
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
                                    icon: ck.m,
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
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: cR }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(sa.e, {
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
                                  options: cO,
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
                                                onClick: () => t({ ...e, themeColors: cR }),
                                            }),
                                            (0, r.jsxs)(F.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(cD.VN, {
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
                                                    (0, r.jsx)(cD.VN, {
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
                                                options: Object.values(en.NJ8).map((e) => ({
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
                                                                    (0, cg.u_)({ theme: "system" });
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
var cM = a(141931),
    cL = a(306173),
    cP = a(587626),
    cU = a(237984),
    cG = a(43203),
    cF = a(349435),
    cB = a(674272),
    c$ = a(466034),
    cV = a(10094),
    cW = a(683760);
let cz = () => {
    let e = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
        t = (0, V.bG)([cW.A], () => {
            let e = cW.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, V.bG)([cW.A], () => cW.A.getPremiumTypeOverride());
    return (0, r.jsxs)(F.B, {
        gap: 16,
        children: [
            (0, r.jsx)(g.l, {
                label: "Override Client-Side Premium Type",
                options: sh.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, cV.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(nP.Q, {
                onClick: () => {
                    (0, cV.O)(sh.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(iu.J, {
                label: "Override Client-Side Account Created At Date",
                value: lo()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, cV.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(nP.Q, { onClick: () => (0, cV.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var cH = a(19575),
    cK = a(327337),
    cY = a(431804),
    cq = a(865349),
    cJ = a(818050);
function cQ() {
    throw Error("Send help");
}
function cX() {
    let e = cx.j0.useSetting(),
        [t, l] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(x.Ip, {
              children: [
                  (0, r.jsx)("div", { className: P()(cq.N, cJ.SX), children: (0, r.jsx)(cz, {}) }),
                  (0, r.jsx)("div", {
                      className: P()(cq.N, cJ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, cB.A)({ source: cY.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: P()(cq.N, cJ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = rG.A.getChannelId() ?? "21154681615024128"),
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
                                                  warningType: cF._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: cK.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: P()(cq.N, cJ.QB),
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
                      className: P()(cq.N, cJ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, cG.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: P()(cq.N, cJ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: cL.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: P()(cq.N, cJ.QB),
                      children: (0, r.jsx)(m.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = cP.A.getSocket();
                              tM.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: P()(cq.N, cJ.QB),
                      children: (0, r.jsx)(c.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cx.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: P()(cq.N, cJ.QB),
                      children: [
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, cU.o)(),
                          }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  cP.A.getSocket().close(), cP.A.getSocket().connect();
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
                              onClick: () => (0, c$.sy)(!0),
                          }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  lZ.Bo.post({ url: en.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: P()(cq.N, cJ.QB),
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
                              onSelectionChange: (e) => null != e && cH.Ay.crash(e),
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
                                      value: cM.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: cM.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: cM.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void cH.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => l(!0),
                          }),
                          (0, r.jsx)(m.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: cQ }),
                      ],
                  }),
              ],
          });
}
var cZ = a(593924),
    c0 = a(653887),
    c1 = a(105596);
function c2() {
    let e = Object.keys(cZ).map((e) => (0, r.jsx)(c6, { riveName: e }, e));
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
    return (0, r.jsxs)(F.B, {
        gap: 16,
        children: [
            (0, r.jsx)(c6, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(c0._, { src: e, ref: c, onLoad: p, dynamicDataBinding: a ?? {} }),
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
                                Object.keys(n ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        c8,
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
function c8(e) {
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
                  ? (0, r.jsx)(t7.Z, {
                        selectionMode: "single",
                        label: t,
                        value: l,
                        onSelectionChange: (e) => n(e),
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
                          value: l,
                          onSelectionChange: (e) => n(e),
                          closeOnSelect: !0,
                          placeholder: "Select an artboard...",
                          options: s.map((e) => ({ label: e, value: e, id: e })),
                      })
                    : null;
}
function c6(e) {
    let { riveName: t, onRiveLoad: a } = e,
        l = cZ[t]?.riveSrc,
        n = null == l,
        s = o.useRef(null),
        i = (0, c1.Gy)(l);
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
                                let n = new FileReader();
                                (n.onload = (e) => {
                                    let t = e.target?.result;
                                    null != l && (0, c1.DS)(l, t), a?.(t);
                                }),
                                    n.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eP.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != l && (0, c1.DS)(l, null),
                                    a?.(null);
                            },
                            icon: lh.u,
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
var c5 = a(290136),
    c9 = a(106236),
    c4 = a(629584),
    c7 = a(600239),
    ue = a(940622),
    ut = a(961895),
    ua = a(343991),
    ul = a(699666);
let un = () => {
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
            { modalKey: ua.D },
        );
    },
    us = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    ui = (e) => {
        let { className: t, onDrop: a, children: l } = e,
            [n, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                us(e), s(!0), (0, eF.closeModal)(ua.D);
            }, []),
            c = o.useCallback((e) => {
                us(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    us(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void un();
                    let l = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    l.length > 0 ? a(l) : un();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: P()(t, ul.iE),
            onDragEnter: d,
            onDragOver: us,
            onDragLeave: c,
            onDrop: u,
            children: [
                l,
                n &&
                    (0, r.jsx)("div", {
                        className: ul.d2,
                        children: (0, r.jsxs)("div", {
                            className: ul.vW,
                            children: [
                                (0, r.jsx)(ut.A, { icons: eg.ir }),
                                (0, r.jsx)($.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: ul.GA,
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(h.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(c5.c, {
                                                    className: ul.q4,
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
var ur = a(559095);
let uo = new Set([
        eT.RN.HERO_BANNER_STATIC,
        eT.RN.HERO_LOGO,
        eT.RN.PDP_BACKGROUND,
        eT.RN.LOGO,
        eT.RN.MOBILE_BANNER,
        eT.RN.MOBILE_BACKGROUND,
    ]),
    ud = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    uc = { max: 5e6, warn: 2e6 },
    uu = { max: 3e6, warn: 1e6 },
    um = { max: 2e6, warn: 1e6 },
    uh = { max: 1e6, warn: 5e5 },
    ux = { max: 25e4, warn: 5e4 },
    up = {
        [eT.Jn.PROFILE_EFFECT]: uc,
        [eT.Jn.AVATAR_DECORATION]: uu,
        [eT.Jn.PROFILE_FRAME]: um,
        [eT.RN.HERO_BANNER_ANIMATED]: uc,
        [eT.RN.HERO_BANNER_RIVE]: uc,
        [eT.RN.CATALOG_BANNER_RIVE]: uc,
        [eT.RN.SHOP_BUTTON_BG_HOVER]: uu,
        [eT.RN.SHOP_BUTTON_BG_HOVER_DARK]: uu,
        [eT.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: uu,
        [eT.RN.SHOP_BUTTON_BG_RESTING]: uu,
        [eT.RN.SHOP_BUTTON_BG_RESTING_DARK]: uu,
        [eT.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: uu,
        [eT.RN.HERO_BANNER_STATIC]: um,
        [eT.RN.UPSELL_BANNER]: uh,
        [eT.RN.UPSELL_BANNER_POPOUT]: ux,
        [eT.RN.MOBILE_BANNER]: uh,
        [eT.RN.MOBILE_BACKGROUND]: ux,
        [eT.RN.MOBILE_HERO]: uh,
        [eT.RN.PDP_BACKGROUND]: ux,
        [eT.RN.LOGO]: ux,
        [eT.RN.TAB_TOOLTIP]: ux,
    },
    ug = [eT.Kx.COLLECTION],
    uv = [eT.Kx.AVATAR_DECORATIONS, eT.Kx.FRAMES, eT.Kx.NAMEPLATES, eT.Kx.PROFILE_EFFECTS],
    uj = async (e) => {
        let t = e.createReader(),
            a = await new Promise((e) => t.readEntries(e)),
            l = new Set();
        for (let e of a) e.isDirectory && l.add(e.name);
        let n = ug.filter((e) => !l.has(e));
        return uv.some((e) => l.has(e)) || n.push(`at least one of: ${uv.join(", ")}`), n;
    },
    ub = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
    uf = (e) => {
        let { names: t, addError: a } = e,
            l = t.filter((e) => !ub.test(e));
        l.length > 0 && a("File names must be in lowercase snake case", l);
    },
    u_ = (e, t, a, l, n) => {
        let s = t.size,
            i = s > 1e6 ? `${(s / 1e6).toFixed(2)}MB` : `${(s / 1e3).toFixed(2)}KB`,
            r = `${n ?? t.name} - ${i}`;
        if (s > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
        } else s > e.warn && l("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
    },
    uy = (e, t, a, l) => {
        let n = up[e];
        if (null != n) for (let e of t) e.name.endsWith(".txt") || u_(n, e, a, l);
    },
    uE = (e) => {
        let t = eT.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    },
    uC = ["png", "jpg"];
var uS = a(981388);
let uA = o.createContext({ setDropHandler: () => {} }),
    uN = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    uk = { id: "none", label: "[none selected]", value: null },
    uI = () => {
        (0, eF.hasModalOpen)(c7.k)
            ? (0, eF.closeModal)(c7.k)
            : (0, eF.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: c7.k, onCloseRequest: () => (0, eF.closeModal)(c7.k) },
              );
    },
    uD = () => {
        (0, eF.hasModalOpen)(c7.g)
            ? (0, eF.closeModal)(c7.g)
            : (0, eF.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: c7.g, onCloseRequest: () => (0, eF.closeModal)(c7.g) },
              );
    },
    uT = () => {
        let e = (0, eR.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, ue.JE)(),
            l = o.useMemo(() => [uk, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uS.kO,
                  children: [
                      (0, r.jsx)(ap.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uS.wR,
                          children: [
                              (0, r.jsx)($.D, {
                                  variant: "heading-sm/semibold",
                                  children: `Profile Effect (${e.length} to preview)`,
                              }),
                              (0, r.jsx)(eP.K, {
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: uD,
                                  icon: c5.c,
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
    uR = () => {
        let e = (0, ue.bA)(),
            { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, ue.JE)(),
            l = o.useMemo(() => [uk, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uS.kO,
                  children: [
                      (0, r.jsx)(ap.h, { size: 16 }),
                      (0, r.jsx)($.D, {
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
    uO = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, ue.JE)(),
            { avatarDecorationAssets: a } = (0, ue.NE)(),
            l = o.useMemo(() => [uk, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uS.kO,
                  children: [
                      (0, r.jsx)(ap.h, { size: 16 }),
                      (0, r.jsx)($.D, {
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
    uw = new Set([eT.RN.HERO_BANNER_STATIC, eT.RN.HERO_BANNER_ANIMATED, eT.RN.HERO_BANNER_RIVE]),
    uM = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: l } = (0, ue.NE)(),
            {
                deleteCollectionAsset: n,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: u,
                setHeroResponsive: x,
            } = (0, ue.JE)(),
            p = o.useMemo(() => Object.values(l).map((e) => ({ label: e.name, value: e.type })), [l]),
            g = p.some((e) => e.value === eT.RN.HERO_LOGO),
            v = p.some((e) => uw.has(e.value)),
            j = o.useCallback((e) => n(e), [n]),
            b = o.useCallback(() => {
                s(), t(), a();
            }, [s, t, a]);
        return 0 === p.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ap.h, { size: 16 }),
                      (g || v) &&
                          (0, r.jsxs)("div", {
                              className: uS.v7,
                              children: [
                                  g &&
                                      (0, r.jsxs)("div", {
                                          className: uS.cj,
                                          children: [
                                              (0, r.jsx)(h.E, {
                                                  variant: "text-md/normal",
                                                  className: uS.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(c9.A, {
                                                  className: uS.TQ,
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
                                          className: uS.sy,
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
                      (0, r.jsx)(ap.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uS.wR,
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
                                      className: uS._0,
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
    uL = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ap.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uS.wR,
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
                                      className: uS.yk,
                                      children: (0, r.jsx)(h.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    uP = () => {
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
                                let l = await uj(t);
                                l.length > 0 && i("Missing required directories", l),
                                    (a = await (0, eT.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, eT.pd)(e),
                                                n = null != t ? up[t] : null;
                                            null != n && u_(n, e, a, l);
                                        }
                                        uf({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let n = new Set(
                                                t.collectionFiles.map((e) => (0, eT.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(uo)
                                                .filter((e) => !n.has(e))
                                                .map(uE);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(eT.RN)
                                            .filter((e) => !uo.has(e))
                                            .filter((e) => !n.has(e))
                                            .map(uE);
                                        i.length > 0 && l("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e;
                                        uf({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, n] = e,
                                                    s = n.map((e) => e.name);
                                                uf({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    uy(eT.Jn.PROFILE_EFFECT, n, a, l);
                                                let i = ud
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
                                                        (e) => !ud.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && l("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e;
                                        uf({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            uy(eT.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, l);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e,
                                            n = Object.keys(t.profileFrameDirsMap)
                                                .filter((e) => !ub.test(e))
                                                .map((e) => `${eT.Kx.FRAMES}/${e}`);
                                        n.length > 0 && a("File names must be in lowercase snake case", n);
                                        let s = up[eT.Jn.PROFILE_FRAME];
                                        Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                            let [t, n] = e,
                                                i = `${eT.Kx.FRAMES}/${t}`,
                                                r = n.previewFile?.name.split(".").pop()?.toLowerCase();
                                            (null != n.previewFile && null != r && uC.includes(r)) ||
                                                a(
                                                    "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                    [`${i}/preview.{${uC.join("|")}}`],
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
                                                ub.test(n.previewFile.name) ||
                                                o.push(`${i}/${n.previewFile.name}`),
                                            n.layerFiles))
                                                ub.test(e.name) || o.push(`${i}/${t}/${e.name}`);
                                            o.length > 0 && a("File names must be in lowercase snake case", o);
                                            let d = [];
                                            for (let { file: e, folder: t } of n.layerFiles) {
                                                let { parsed: a, errorType: l } = (0, ur.Mf)(e.name);
                                                if (null == a) {
                                                    let a = null != l ? ur.h4[l] : "invalid";
                                                    d.push(`${i}/${t}/${e.name}: ${a}`);
                                                }
                                            }
                                            if (
                                                (d.length > 0 && a("Invalid profile frame layer filenames", d),
                                                null != s)
                                            )
                                                for (let { file: e, folder: t } of (null != n.previewFile &&
                                                    u_(s, n.previewFile, a, l, `${i}/${n.previewFile.name}`),
                                                n.layerFiles))
                                                    u_(s, e, a, l, `${i}/${t}/${e.name}`);
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
            { setDropHandler: u } = o.useContext(uA),
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
                              className: uS._f,
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
                    (0, r.jsx)(ap.h, { size: 16 }),
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)($.D, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, r.jsx)(ap.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: uS.ck,
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
                                                            className: uS.ck,
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
                                (0, r.jsx)($.D, { variant: "heading-lg/bold", children: "Warnings" }),
                                (0, r.jsx)(ap.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: uS.ck,
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
                                                            className: uS.ck,
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
    uU = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, ue.JE)(),
            { ignoredFilenames: l, clearAssets: n, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, eT.ds)(),
            { setDropHandler: d } = o.useContext(uA),
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
                        className: uS.sy,
                        children: [
                            (0, r.jsx)(c.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eP.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: uI,
                                icon: c5.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, r.jsx)(uT, {}),
                    (0, r.jsx)(uR, {}),
                    (0, r.jsx)(uO, {}),
                    (0, r.jsx)(uM, { clearAssets: n, clearIgnoredFiles: s }),
                    (0, r.jsx)(uL, { ignoredFiles: l, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    uG = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: uS.kL,
            children: [
                (0, r.jsx)(c4.I, {
                    options: uN,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: uS.Vj,
                    optionClassName: uS.UK,
                }),
                (0, r.jsx)(ap.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(uU, {}),
                "validate" === e && (0, r.jsx)(uP, {}),
                (0, r.jsx)(ap.h, { size: 16 }),
            ],
        });
    },
    uF = (e) => {
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
        return (0, r.jsx)(uA.Provider, { value: n, children: (0, r.jsx)(ui, { onDrop: s, children: t }) });
    };
var uB = a(663803),
    u$ = a(859040),
    uV = a(385815);
let uW = () => {
    let e = (0, V.bG)([t_.A], () => t_.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: uV.k,
        children: [
            (0, r.jsx)(h.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(uB.l, {
                value: e,
                onChange: (e) => {
                    (0, u$.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var uz =
        (((l = {}).DEFAULT = "default"),
        (l.DEFAULT_WITH_ORB_SHELF = "default_with_orb_shelf"),
        (l.ORB_TAB = "orb_tab"),
        (l.FRAMES = "frames"),
        (l.FRAMES_PINNED = "frames_pinned"),
        l),
    uH = a(295811);
let uK = () => {
    let e = (0, V.bG)([uH.A], () => uH.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(uz).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(g.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, u$.Or)(e);
        },
        selectionMode: "single",
    });
};
var uY = a(172471);
let uq = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: P()(uY.kL, uY.fi),
            children: [
                (0, r.jsx)(v.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: uY.o1,
                    children: [
                        (0, r.jsx)(m.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, u$.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, u$.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    uJ = (e) => {
        let { className: t } = e,
            a = Object.keys(ar.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(n_, { items: [a] }) });
    };
var uQ = a(578797),
    uX = a(628917);
let uZ = (e) => {
        let { title: t, expanded: a, onToggle: l, children: n } = e,
            s = o.useId();
        return (0, r.jsx)(cI.N, {
            isExpanded: a,
            className: uX.uW,
            collapsibleContent: (0, r.jsx)("div", { id: s, className: uX.f5, children: n }),
            children: () =>
                (0, r.jsxs)("button", {
                    type: "button",
                    onClick: l,
                    "aria-expanded": a,
                    "aria-controls": s,
                    className: uX.bV,
                    children: [
                        (0, r.jsx)($.D, { variant: "heading-md/bold", children: t }),
                        (0, r.jsx)(sZ._, { size: "sm", color: "currentColor", className: P()(uX.ai, { [uX.hg]: a }) }),
                    ],
                }),
        });
    },
    u0 = () => {
        let e = (0, V.bG)([nk.A], () => nk.A.get("shop_disable_cache")),
            t = (0, V.bG)([nk.A], () => nk.A.get("shop_include_unpublished")),
            a = (0, uQ.U)("DevToolsShopPanel"),
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
        return (0, r.jsx)(uF, {
            onDrop: i,
            children: (0, r.jsxs)("div", {
                className: uX.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: uX.dQ,
                        children: [
                            (0, r.jsx)(c.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, nN.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(c.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, nN.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(uZ, {
                        title: "Layouts",
                        expanded: l.has("layouts"),
                        onToggle: () => s("layouts"),
                        children: [(0, r.jsx)(uJ, {}), (0, r.jsx)(uK, {}), a && (0, r.jsx)(uq, {}), (0, r.jsx)(uW, {})],
                    }),
                    (0, r.jsx)(uZ, {
                        title: "Assets",
                        expanded: l.has("assets"),
                        onToggle: () => s("assets"),
                        children: (0, r.jsx)(uG, {}),
                    }),
                ],
            }),
        });
    },
    u1 = [
        { id: "unset", label: "Unset", value: cu.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: cu.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: cu.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: cu.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function u2() {
    let e = o.useRef(null),
        t = cx.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: P()(tG.nd, aw.n),
        children: (0, r.jsxs)("div", {
            className: aw.k,
            children: [
                (0, r.jsx)($.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(g.l, {
                    label: "Receive DMs In Game",
                    options: u1,
                    value: t,
                    onSelectionChange: cx.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var u3 = a(278416),
    u8 = a(220631);
function u6(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function u5(e) {
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
        (0, r.jsx)(x.Ip, { className: u8.Dx, children: (0, r.jsx)(aB.A, { data: l }) })
    );
}
function u9(e) {
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
                for (let e of l.preDispatches ?? []) tM.h.dispatch(e);
                tM.h.dispatch({ ...l.buildPayload(e), type: l.actionType }), i();
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
        className: P()(u8.Dx, u8.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: u8.Vz,
                value: a,
                onChange: (e) => l(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != n && (0, r.jsx)("div", { className: u8.Xf, role: "alert", children: n }),
            (0, r.jsxs)("div", {
                className: u8.KA,
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
let u4 = [
    {
        key: "name",
        cellClassName: u8.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function u7(e) {
    let { store: t, initialHeight: a } = e,
        l = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: aH.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: u8.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(u5, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aH.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(u5, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: aH.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: u8.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(u9, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: n, renderSelectedTab: s } = (0, aH.Ay)({ tabs: l }, []);
    return (0, r.jsxs)(az, {
        className: u8.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(n, {}),
            (0, r.jsxs)(aF.Ay, {
                className: P()(tG.jr, u8.nZ),
                children: [
                    (0, r.jsx)(aF.Ay.Icon, { icon: u3.g, tooltip: t.getName() }),
                    (0, r.jsx)(aF.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function me() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        l = V.il.getAll(),
        n = o
            .useMemo(() => l.map((e) => ({ key: e._dispatchToken, store: e })).sort(u6), [l])
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
        className: P()(tG.nd, u8.nd),
        children: [
            (0, r.jsx)("div", {
                className: u8.KE,
                children: (0, r.jsx)(lx.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tF, { columns: u4, data: n, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsx)(u7, { store: d, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var mt = a(91871),
    ma = a.n(mt);
let ml = [
        {
            key: "id",
            cellClassName: lO.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: lO.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: lO.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    mn = [
        {
            id: "details",
            name: "Details",
            group: aH.fu.NONE,
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
                    d = lo()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(aF.Ay, {
                            className: P()(tG.jr, lO.nZ),
                            children: [
                                (0, r.jsx)(aF.Ay.Icon, { icon: lu.U, tooltip: t }),
                                (0, r.jsx)(aF.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(lD, {
                            className: lO.ZK,
                            children: [
                                (0, r.jsx)(lT, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, lb.i$)(d, "LLLL"),
                                        children: (0, lb.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(lT, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(lT, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(lT, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(lT, { name: "Override", children: (0, r.jsx)(lR, { value: a.override }) }),
                                (0, r.jsx)(lT, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                                (0, r.jsx)(lT, { name: "Excluded", children: (0, r.jsx)(lR, { value: n }) }),
                                (0, r.jsx)(lT, { name: "Previously tracked", children: (0, r.jsx)(lR, { value: o }) }),
                                (0, r.jsx)(lT, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function ms() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        l = (0, V.yK)([lk], () => lk.loggedTriggers),
        n = o.useMemo(
            () =>
                l
                    .filter((t) => 0 === e.length || ma()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [l, e],
        ),
        [s, i] = o.useState(void 0),
        d = n.find((e) => e.key === s),
        { TabBar: c, renderSelectedTab: u } = (0, aH.Ay)({ tabs: mn }, []),
        m = (0, V.bG)([lk], () => lk.trackTriggers),
        h = o.useCallback((e) => {
            tM.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = m ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: P()(tG.nd, lO.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lO.rh,
                children: [
                    (0, r.jsx)(nq.m, {
                        text: x,
                        children: (0, r.jsx)(eP.K, {
                            size: "sm",
                            variant: m ? "active" : "primary",
                            icon: m ? nX.E : nQ.u,
                            "aria-label": x,
                            onClick: () => h(!m),
                        }),
                    }),
                    (0, r.jsx)(lx.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eP.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": a6.intl.string(a6.t.VkKicb),
                        icon: lh.u,
                        onClick: W.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tF, { columns: ml, data: n, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsxs)(az, {
                    className: lO.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(c, {}), u({ loggedTrigger: d })],
                }),
        ],
    });
}
var mi = a(512950),
    mr = a(324861),
    mo = a(243655);
let md = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, mr.A)();
    return (0, r.jsx)("div", {
        className: mo.k,
        children: (0, r.jsxs)(d.n, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(m.$, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, aS.pX)(en.BVt.APP);
                        },
                    }),
                }),
                (0, r.jsx)(mi.p, {
                    messageType: mi.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var mc = a(899e3),
    mu = a(731854);
let mm = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    mh = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    mx = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    mp = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function mg(e) {
    let { title: t, toggles: a, state: l } = e;
    return (0, r.jsxs)(F.B, {
        gap: 8,
        children: [
            (0, r.jsx)(h.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(rJ.S, { label: a, checked: !!l[t], onChange: () => (0, mc.yn)({ [t]: !l[t] }) }, t);
            }),
        ],
    });
}
function mv() {
    let e = (0, V.bG)([mc.Ay], () => mc.Ay.getSnapshot()),
        t = (0, V.bG)([_.Ay], () => _.Ay.supports(mu.O5.VIDEO));
    return (0, r.jsxs)(x.Ip, {
        className: tG.nd,
        children: [
            (0, r.jsx)(j.c, { gap: 16 }),
            (0, r.jsx)(mg, { title: "Video Codecs (Sender)", toggles: mm, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(j.c, { gap: 16 }),
                          (0, r.jsx)(mg, { title: "Video Encoders", toggles: mh, state: e }),
                          (0, r.jsx)(j.c, { gap: 16 }),
                          (0, r.jsx)(mg, { title: "Capture Sources", toggles: mx, state: e }),
                          (0, r.jsx)(j.c, { gap: 16 }),
                          (0, r.jsx)(mg, { title: "Capture Options", toggles: mp, state: e }),
                      ],
                  })
                : null,
            (0, r.jsx)(j.c, { gap: 16 }),
            (0, r.jsx)(mg, {
                title: "Preview",
                toggles: [["alwaysShowCapturePreview", "Always Show (ignore main window focus)"]],
                state: e,
            }),
            (0, r.jsx)(j.c, { gap: 16 }),
        ],
    });
}
var mj = a(36934);
function mb() {
    let [e, t] = o.useState(""),
        [a, l] = o.useState(""),
        [n, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === n.status;
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: mj.l7,
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
                    (0, r.jsxs)(F.B, {
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
                                            className: mj.TZ,
                                            children: (0, r.jsxs)(h.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? mj.$D : mj.uL,
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
var mf = a(207898),
    m_ = a.n(mf),
    my = a(32880),
    mE = a(827343),
    mC = a(964486),
    mS = a(602674),
    mA = a(625841),
    mN = a(74848),
    mk = a(573908);
function mI(e) {
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
function mD(e) {
    let { recording: t, playing: a, onPlay: l, onStop: n } = e;
    return (0, r.jsx)(cI.N, {
        collapsibleContent: (0, r.jsx)(mI, { recording: t }),
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
                            e.stopPropagation(), a ? n() : l(t);
                        },
                        children: a ? (0, r.jsx)(nX.E, { size: "xxs" }) : (0, r.jsx)(nQ.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(U.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, l, n;
                            e.stopPropagation(),
                                (a = new Blob([m_()(t.audioBuffer)], { type: "audio/wav" })),
                                (l = URL.createObjectURL(a)),
                                ((n = document.createElement("a")).href = l),
                                (n.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                n.click(),
                                URL.revokeObjectURL(l);
                        },
                        children: (0, r.jsx)(my.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function mT() {
    let { name: e } = (0, mN.x5)(mu.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [l, n] = o.useState([]),
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
            noiseCancellation: A,
            noiseSuppression: N,
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
        R = A ? "KRISP" : N ? "STANDARD" : "NONE",
        O = (0, mS.v)(),
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
        (0, mC.l0)(() => {
            mE.A.setMode(_.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let P = [];
    return (
        I && P.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        k && P.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        P.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(x.Ip, {
            className: tG.nd,
            children: (0, r.jsxs)("div", {
                className: mk.l,
                children: [
                    (0, r.jsx)(h.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(mA.U, {
                        label: "Input Device",
                        deviceType: mu.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(g.l, {
                        label: "Noise Cancellation",
                        value: R,
                        onSelectionChange: (e) => {
                            mE.A.setNoiseCancellation("KRISP" === e), mE.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: P,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c9.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: mE.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(g.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: b,
                                    options: j.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        mE.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(c.d, {
                                    label: "Enable Stats",
                                    checked: D,
                                    onChange: (e) => mE.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    f === mu.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.d, {
                                    label: "Auto Threshold",
                                    checked: E,
                                    onChange: (e) => mE.A.setMode(mu.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                E &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.d, {
                                                label: "Use Krisp VAD",
                                                checked: C,
                                                onChange: (e) => mE.A.setMode(mu.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            C &&
                                                (0, r.jsx)(c9.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: S,
                                                    onValueChange: (e) =>
                                                        mE.A.setMode(mu.TB.VOICE_ACTIVITY, {
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
                                    onChange: (e) => mE.A.setMode(mu.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(c.d, {
                        label: "Echo Cancellation",
                        checked: y,
                        onChange: (e) => mE.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(F.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(h.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(ld.$n, {
                                color: t ? ld.$n.Colors.RED : ld.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          w(),
                                              a(!0),
                                              mE.A.setLoopback("krisp_test", !0),
                                              _.Ay.getMediaEngine().startRecordingRawSamples((t, l, i) => {
                                                  a(!1), mE.A.setLoopback("krisp_test", !1);
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
                    (0, r.jsx)(c9.A, {
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
                            l.map((e, t) =>
                                (0, r.jsx)(mD, { recording: e, playing: e === i, onPlay: L, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var mR = a(874003),
    mO = a(329139);
function mw() {
    return _.Ay.getMediaEngine().supports(mu.O5.SPATIAL_AUDIO)
        ? (0, r.jsx)(x.Ip, { className: tG.nd, children: (0, r.jsx)(mR.A, {}) })
        : (0, r.jsx)(x.Ip, {
              className: tG.nd,
              children: (0, r.jsxs)("div", {
                  style: { padding: 16 },
                  children: [
                      (0, r.jsx)($.D, {
                          variant: "heading-lg/semibold",
                          style: { marginBottom: 16 },
                          children: a6.intl.string(mO.default.EWQJcc),
                      }),
                      (0, r.jsx)(h.E, { variant: "text-md/normal", children: a6.intl.string(mO.default["9qCMXb"]) }),
                  ],
              }),
          });
}
var mM = a(803306),
    mL = a(243217),
    mP = a(189213),
    mU = a(935208),
    mG = a(878784);
let mF = [
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
function mB() {
    let [e, t] = o.useState(!1),
        a = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
        l = (0, mG.Lh)(),
        n = (0, V.bG)([rX.A], () => rX.A.getPremiumTypeSubscription()),
        s = null != l ? (sh.VD[l]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let l = new Date();
                e > 0 ? l.setMonth(l.getMonth() - e) : l.setDate(l.getDate() - 7), l.setDate(l.getDate() - 2);
                let s = {
                    subscription_status: en.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: mU.default.fromTimestamp(l.getTime()),
                };
                t(!0),
                    await lZ.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: s, rejectWithError: !1 }),
                    await (0, mM.eO)(a.id),
                    await (0, db.hP)(),
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
            options: mF,
            onSelectionChange: i,
        });
}
var m$ =
        (((n = {})[(n.DEFAULT = 0)] = "DEFAULT"),
        (n[(n.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (n[(n.FAILURE = 2)] = "FAILURE"),
        (n[(n.NONE = 3)] = "NONE"),
        n),
    mV =
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
async function mW(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: l, paymentType: n, sendReminderEmail: s } = a;
    return (
        await lZ.Bo.post({
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
var mz = a(601107);
let mH = {
        [en.Dmq.UNPAID]: "Unpaid",
        [en.Dmq.ACTIVE]: "Active",
        [en.Dmq.PAST_DUE]: "Past Due",
        [en.Dmq.CANCELED]: "Canceled",
        [en.Dmq.ENDED]: "Ended",
        [en.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [en.Dmq.BILLING_RETRY]: "Billing Retry",
        [en.Dmq.PAUSED]: "Paused",
        [en.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    mK = {
        [mz.qf.UNKNOWN]: "Unknown",
        [mz.qf.ADMIN]: "Admin",
        [mz.qf.USER]: "User",
        [mz.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [mz.qf.DEFERRED_START]: "Deferred Start",
        [mz.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    mY = [
        { id: "unpaid", label: "Unpaid", value: en.Dmq.UNPAID },
        { id: "active", label: "Active", value: en.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: en.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: en.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: en.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: en.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: en.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: en.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: en.Dmq.PAUSE_PENDING },
    ];
function mq(e) {
    let { subscription: t, onClose: a, onUpdated: l, transitionState: n } = e,
        [s, i] = o.useState(lo()()),
        [c, u] = o.useState(lo()().format("HH:mm")),
        [m, x] = o.useState(!1),
        [p, g] = o.useState(void 0),
        v = async () => {
            if (null == s) return void g("Please select a target date");
            let [e, n] = c.split(":").map(Number),
                i = s.clone().hours(e).minutes(n).seconds(0).milliseconds(0);
            x(!0), g(void 0);
            try {
                await mW(t.id, mV.TIME_TRAVEL, { targetDate: i, paymentType: m$.DEFAULT, sendReminderEmail: !1 }),
                    l(),
                    a();
            } catch (e) {
                g(e.body?.message || e.message || "Failed to time travel");
            } finally {
                x(!1);
            }
        };
    return (0, r.jsx)(mP.Modal, {
        transitionState: n,
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
                (0, r.jsx)(iu.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(d.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: c,
                        onChange: (e) => {
                            u(e.target.value);
                        },
                        className: ou.Qn,
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
                                    className: ou.JX,
                                    children: ["Start: ", lo()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(h.E, {
                                    variant: "text-xs/normal",
                                    className: ou.JX,
                                    children: ["End: ", lo()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
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
function mJ(e) {
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
            return mU.default.fromTimestamp(t.getTime());
        },
        y = async (e) => {
            let { status: t = l.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: _(a) } : null),
                    ...(null != s ? { ended_at: _(s) } : null),
                };
            await lZ.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: i, rejectWithError: !1 }), n();
        },
        E = async () => {
            try {
                await mW(l.id, mV.RENEW, {
                    targetDate: lo()(new Date()),
                    paymentType: m$.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                f(e.body?.message || e.message || "Failed to renew subscription");
            }
            n();
        },
        C = sh.hd[l.planIdFromItems]?.premiumType === sh.PremiumTypes.TIER_0,
        S = l.metadata?.ended_at,
        A = null != S ? new Date(S).toISOString().substring(0, 10) : "",
        N = [
            { id: "id", label: `ID: ${l.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = l.status), t in mH) ? mH[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        k = l.hasActiveTrial,
        I = l.metadata?.active_discount_id != null;
    return (
        k && N.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        I && N.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        l.status !== en.Dmq.ACTIVE &&
            N.push({
                id: "dates",
                label: `Dates: ${(0, lb.i$)(l.createdAt, "LL")} - ${(0, lb.i$)(l.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        l.status === en.Dmq.PAUSED &&
            N.push({
                id: "pause-reason",
                label: `Pause Reason: ${l.pauseReason in mK ? mK[l.pauseReason] : `Unknown pause reason ${l.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: P()(sf.Nr, C ? sf.Qf : sf.C1),
            children: (0, r.jsxs)(d.n, {
                label: `Type: ${null == ((a = l.planIdFromItems)) ? "No plan id" : a in sh.hd ? sh.hd[a].name : `Unknown plan id ${a}`}`,
                className: ou.lI,
                children: [
                    (0, r.jsx)(od.C, {
                        items: N,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    k &&
                        (0, r.jsxs)("div", {
                            className: ou.VK,
                            children: [
                                (0, r.jsxs)(U.D, {
                                    onClick: () => {
                                        p(!x);
                                    },
                                    className: ou.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(h.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(su.A, { direction: x ? su.A.Directions.UP : su.A.Directions.DOWN }),
                                    ],
                                }),
                                x &&
                                    (0, r.jsxs)("ul", {
                                        className: ou.j3,
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
                                                                ? (0, lb.i$)(l.trialEndsAt, "LL")
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
                            className: ou.VK,
                            children: [
                                (0, r.jsxs)(U.D, {
                                    onClick: () => {
                                        j(!v);
                                    },
                                    className: ou.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(h.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(su.A, { direction: v ? su.A.Directions.UP : su.A.Directions.DOWN }),
                                    ],
                                }),
                                v &&
                                    (0, r.jsxs)("ul", {
                                        className: ou.j3,
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
                                                                ? (0, lb.i$)(
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
                            className: ou.VK,
                            children: [
                                (0, r.jsxs)(U.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: ou.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(h.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(su.A, { direction: s ? su.A.Directions.UP : su.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: ou.j3,
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
                        className: ou.VK,
                        children: [
                            (0, r.jsxs)(U.D, {
                                onClick: () => {
                                    u(!c);
                                },
                                className: ou.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(h.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(su.A, { direction: c ? su.A.Directions.UP : su.A.Directions.DOWN }),
                                ],
                            }),
                            c &&
                                (0, r.jsxs)(F.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(g.l, {
                                            label: "Status",
                                            value: l.status,
                                            options: mY,
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
                                                                        (0, r.jsx)(mq, {
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
                                                        className: ou.z3,
                                                        children: (0, r.jsx)(G.w, { type: "critical", children: b }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(F.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(iu.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: lo()(l.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => y({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(mB, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(iu.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== A ? lo()(A) : void 0,
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
let mQ = async () =>
        (
            await lZ.Bo.get({
                url: en.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => mL.A.createFromServer(e)),
    mX = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: sh.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: sh.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: sh.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: sh.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: sh.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: sh.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: sh.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: sh.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: sh.gD.PREMIUM_GROUP_MONTH },
    ];
function mZ() {
    let e = (0, V.bG)([rX.A], () => rX.A.getPremiumTypeSubscription()),
        t = (0, V.bG)([ee.default], () => ee.default.getCurrentUser()),
        [a, l] = o.useState("511651880837840896"),
        [n, s] = o.useState([]),
        [i, d] = o.useState(!1),
        c = o.useCallback(async () => {
            try {
                d(!0), await (0, db.hP)(), await (0, mM.eO)(t.id), s(await mQ());
            } finally {
                d(!1);
            }
        }, [t]);
    o.useEffect(() => {
        c();
    }, [c]);
    let u = o.useMemo(() => n.filter((e) => e.status !== en.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [n]),
        h = async () => {
            await lZ.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await c();
        },
        p = async () => {
            await lZ.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await c();
        };
    return (0, r.jsx)(x.Ip, {
        className: tG.nd,
        children: (0, r.jsxs)("div", {
            className: sf.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: sf.dL,
                    children: [
                        (0, r.jsx)($.D, {
                            variant: "heading-lg/semibold",
                            className: tG.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eP.K, {
                            "aria-label": "Refresh",
                            icon: sc.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: c,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: P()([sf.uW, sf.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(g.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: mX,
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
                null != e && (0, r.jsx)(mJ, { subscription: e, onUpdated: c }),
                (0, r.jsx)($.D, { variant: "heading-lg/semibold", className: tG.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: P()([sf.uW, sf.Uo]),
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
                            u.map((e) => (0, r.jsx)(mJ, { subscription: e, onUpdated: c }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var m0 = a(284009),
    m1 = a.n(m0),
    m2 = a(889137),
    m3 = a(412703),
    m8 = a(440703),
    m6 = a(267548),
    m5 = a(668824),
    m9 = a(695366),
    m4 = a(359778),
    m7 = a(507107),
    he = a(801365),
    ht = a(792620),
    ha = a(241124),
    hl = a(743407),
    hn = a(717695),
    hs = a(961974),
    hi = a(127219),
    hr = a(262514),
    ho = a(19809),
    hd = a(317097),
    hc = a(452027),
    hu = a(922016),
    hm = a(714385),
    hh = a(359923);
let hx = function (e) {
    let { colorKey: t, value: a, onChange: l, title: n } = e,
        s = o.useRef(null);
    return (0, r.jsx)(hc.D, {
        label: n,
        children: (0, r.jsx)(hu.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(cD.VN, { ...e, value: a, onChange: (e) => l(t, (0, hd.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(U.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: hh.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(hm.d, { size: "xs", color: "currentColor", className: hh.WY }),
                }),
        }),
    });
};
var hp = a(247928);
let hg = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: l = !1 } = e;
    return (0, r.jsx)(hp.M, {
        children: (0, r.jsx)(m4.Z, {
            className: P()(hh.Rx, { [hh.aK]: l }),
            outline: l,
            children: (0, r.jsx)("div", {
                className: hh.AZ,
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
var hv = a(643374);
let hj = function (e) {
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
            (0, r.jsx)(hc.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(hv.A, {
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
    hb = function (e) {
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
var hf = a(31587);
let h_ = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: l } = (0, hf.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
var hy = a(843282),
    hE = a(972886);
let hC = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    hS = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: l } = e;
        return (0, r.jsxs)(F.B, {
            gap: 20,
            children: [
                (0, r.jsx)(hy.Pw, {
                    label: "Task Type(s)",
                    className: hE.Z,
                    placeholder: "Select Task Preset",
                    options: hC,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, n, s, i, r;
                        return (
                            e ===
                            ((t = l.tasks),
                            (a = m3.n.PLAY_ON_PLAYSTATION in t || m3.n.PLAY_ON_XBOX in t),
                            (n = m3.n.PLAY_ON_DESKTOP in t),
                            (s = m3.n.STREAM_ON_DESKTOP in t),
                            (i = m3.n.WATCH_VIDEO in t),
                            (r = m3.n.PLAY_ACTIVITY in t),
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
                                        a[m3.n.STREAM_ON_DESKTOP] = { type: m3.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[m3.n.PLAY_ON_DESKTOP] = { type: m3.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[m3.n.PLAY_ON_PLAYSTATION] = {
                                            type: m3.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[m3.n.PLAY_ON_XBOX] = {
                                                type: m3.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[m3.n.PLAY_ON_DESKTOP] = { type: m3.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[m3.n.PLAY_ON_PLAYSTATION] = {
                                                type: m3.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[m3.n.PLAY_ON_XBOX] = {
                                                type: m3.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[m3.n.WATCH_VIDEO] = {
                                            type: m3.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[m3.n.PLAY_ACTIVITY] = { type: m3.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / l1.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= l1.A.Seconds.MINUTE;
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
var hA = a(818348);
let hN = function () {
    let e = (0, eo.Ay)();
    return (0, r.jsx)(hc.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(ed.zy, {
                    theme: hA.NJ.LIGHT,
                    isSelected: e === hA.NJ.LIGHT,
                    onSelect: () => (0, cg.u_)({ theme: hA.NJ.LIGHT }),
                }),
                (0, r.jsx)(ed.zy, {
                    theme: hA.NJ.DARK,
                    isSelected: e === hA.NJ.DARK,
                    onSelect: () => (0, cg.u_)({ theme: hA.NJ.DARK }),
                }),
            ],
        }),
    });
};
var hk =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let hI = function (e) {
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
var hD = a(617986);
let hT = ["png", "gif", "webp"],
    hR = [...hT, "jpg", "jpeg"],
    hO = Array.from(new Set([...hR, "gif", "mp4", "webm"]));
function hw() {
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
let hM = "1193992107035983872",
    hL = {
        id: hM,
        preview: !0,
        config: {
            id: hM,
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
                        type: m8.l.REWARD_CODE,
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
                joinOperator: m5.K.AND,
                tasks: { [m3.n.PLAY_ON_DESKTOP]: { type: m3.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: m6.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function hP() {
    var e;
    let [t, l] = o.useState(hL),
        n = o.useCallback((e) => {
            l({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(hk.UNENROLLED),
        [d, u] = o.useState(!1),
        [p, g] = o.useState(!1),
        [v, j] = o.useState(null),
        b =
            ((e = t.config),
            (0, m2.YW)(e)
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
                    (0, m2.YW)(l)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function _(e, a) {
        let l = t.config.taskConfigV2.tasks,
            s = l[m3.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...l, [m3.n.WATCH_VIDEO]: { ...s, assets: i } } },
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
                    (0, m2.YW)(l)
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
                    (0, m2.YW)(s)
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
        (0, he.tU)(t.config) && (0, hD.hJ)(t, m7.uF.GIFT_INVENTORY_FOR_YOU, m7.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let A = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * l1.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        N = o.useMemo(() => m3.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    m1()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[m3.n.WATCH_VIDEO];
    return (0, r.jsxs)(x.Ip, {
        className: hh.kL,
        children: [
            (0, r.jsx)($.D, { variant: "heading-lg/bold", className: hh.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: hh.OA,
                children: (0, r.jsx)(h_, {
                    onSelect: function (e) {
                        j(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return hk.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return hk.CLAIMED;
                                        if (null != e.userStatus.completedAt) return hk.COMPLETED_100;
                                        let t = (0, ht.Yh)(e),
                                            a = t.progressSeconds,
                                            l = t.targetSeconds;
                                        return a / l >= 1
                                            ? hk.COMPLETED_100
                                            : a / l >= 0.75
                                              ? hk.COMPLETED_75
                                              : a / l >= 0.5
                                                ? hk.COMPLETED_50
                                                : a / l >= 0.25
                                                  ? hk.COMPLETED_25
                                                  : hk.ENROLLED;
                                    })(e),
                                ),
                                n(e));
                    },
                    quest: v,
                }),
            }),
            (0, r.jsx)($.D, { variant: "heading-md/semibold", className: hh.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: hh.OA,
                children: (0, r.jsx)(hS, {
                    taskDuration: A,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        n({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)($.D, { variant: "heading-md/semibold", className: hh.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: hh.OA,
                children: [
                    (0, r.jsx)(hb, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: y,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(hb, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: y,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(hb, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: y,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    N &&
                        (0, r.jsx)(hb, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let l = t.config.taskConfigV2.tasks,
                                    s = l[m3.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                n({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...l, [m3.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)($.D, { variant: "heading-md/semibold", className: hh.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: hh.OA,
                children: [
                    (0, r.jsx)(hj, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: f,
                        filters: hO,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(hj, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: f,
                        filters: hO,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hj, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: f,
                        filters: hO,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(hj, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: f,
                        filters: hO,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hj, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: f,
                        filters: [...hR, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(hj, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: f,
                        filters: [...hT, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    N &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(hj, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: _,
                                    filters: hO,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(hj, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: _,
                                    filters: hO,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(hj, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: _,
                                    filters: hR,
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
                                className: hh.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: hh.OA,
                                children: [
                                    (0, r.jsx)(hb, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => E(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(hb, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => E(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== m8.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(hj, {
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
                                                                (0, m2.YW)(s)
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
                                            filters: hO,
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
            (0, r.jsx)($.D, { variant: "heading-md/semibold", className: hh.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: hh.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: hh.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(hx, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: C,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(hx, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: C,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: hh.OA, children: (0, r.jsx)(hN, {}) }),
                    (0, r.jsx)(hI, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case hk.UNENROLLED:
                                    n({ ...t, userStatus: null });
                                    break;
                                case hk.ENROLLED:
                                    n({ ...t, userStatus: hw({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case hk.COMPLETED_25:
                                    n({
                                        ...t,
                                        userStatus: hw({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * A,
                                        }),
                                    });
                                    break;
                                case hk.COMPLETED_50:
                                    n({
                                        ...t,
                                        userStatus: hw({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * A,
                                        }),
                                    });
                                    break;
                                case hk.COMPLETED_75:
                                    n({
                                        ...t,
                                        userStatus: hw({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * A,
                                        }),
                                    });
                                    break;
                                case hk.COMPLETED_100:
                                    n({
                                        ...t,
                                        userStatus: hw({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: A,
                                        }),
                                    });
                                    break;
                                case hk.CLAIMED:
                                    n({
                                        ...t,
                                        userStatus: hw({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: A,
                                        }),
                                    });
                            }
                        },
                        value: s,
                    }),
                ],
            }),
            (0, r.jsx)($.D, { variant: "heading-lg/bold", className: hh.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: hh.$$,
                children: [
                    (0, r.jsxs)(hg, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: hh.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(h.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: hh.ok,
                                        children: (0, r.jsx)(ha.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(hn.A, { children: (0, r.jsx)(hl.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hg, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(ha.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(ho.Ay, {
                                    quest: t,
                                    className: hh.d,
                                    questContent: m7.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: m7.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hg, {
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
                                className: hh.l4,
                                children: (0, r.jsx)(ha.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: hh.Jr,
                                        children: (0, r.jsx)(hs.A, {
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
                        className: hh.NY,
                        children: (0, r.jsx)(c.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(hg, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)($.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            p
                                ? (0, r.jsx)(hi.l, { questId: t.id })
                                : (0, r.jsx)(
                                      hr.M,
                                      {
                                          quest: t,
                                          location: m7.uF.QUESTS_EMBED,
                                          sourceQuestContent: m7.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: hh.NY,
                        children: (0, r.jsx)(c.d, { label: "Invalid Quests Embed:", checked: p, onChange: g }),
                    }),
                    N &&
                        (0, r.jsxs)(hg, {
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
                                            let { default: l } = await Promise.all([
                                                a.e("22448"),
                                                a.e("36532"),
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
                                                    sourceQuestContent: m7.uF.INTERNAL_PREVIEW_TOOL,
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
class hU extends o.Component {
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
                  className: hh.TA,
                  children: [
                      (0, r.jsx)(m9.E, { className: hh.Yw }),
                      (0, r.jsx)($.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(m.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(m4.Z, {
                              className: hh.Fx,
                              children: (0, r.jsx)("code", { className: hh.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(hP, {}, t);
    }
}
var hG = a(913122),
    hF = a(839214),
    hB = a(77138),
    h$ = a(450827),
    hV = a(626584),
    hW = a(174768),
    hz = a(205761),
    hH = a(860071),
    hK = a(696451),
    hY = a(860689),
    hq = a(926140);
let hJ = new hV.A("SearchDebugUtils");
function hQ() {
    hJ.info("--------------------------");
}
function hX() {
    let e = hW.A.getProps();
    hJ.info("START Quick Switcher State"),
        hJ.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((hJ.info(`Result Type: ${e.type}`), e.type)) {
                case hq.rD.GUILD:
                    hJ.info(`guild id: ${e.record.id}`);
                    break;
                case hq.rD.TEXT_CHANNEL:
                case hq.rD.VOICE_CHANNEL:
                    hJ.info(`channel type: ${e.record.type}`),
                        hJ.info(`channel id: ${e.record.id}`),
                        hJ.info(`name: ${e.record.name}`);
                    break;
                case hq.rD.DM:
                    hJ.info(`channel type: ${e.record.type}`),
                        hJ.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (hJ.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = ee.default.getUser(e);
                                null != t &&
                                    (hJ.info(`recipient username: ${t.username}`),
                                    hJ.info(`recipient global name: ${ei.Ay.getGlobalName(t)}`),
                                    hJ.info(`recipient nickname: ${aj.A.getNickname(t.id)}`));
                            }));
                    break;
                case hq.rD.GROUP_DM:
                    hJ.info(`channel type: ${e.record.type}`),
                        hJ.info(`channel id: ${e.record.id}`),
                        hJ.info(`name: ${(0, ag.m1)(e.record, ee.default, aj.A)}`),
                        e.record.isGroupDM() &&
                            (hJ.info(`default name: ${(0, ag.ks)(e.record, ee.default, aj.A)}`),
                            hJ.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = ee.default.getUser(e);
                                null != t &&
                                    (hJ.info(`recipient username: ${t.username}`),
                                    hJ.info(`recipient global name: ${ei.Ay.getGlobalName(t)}`),
                                    hJ.info(`recipient nickname: ${aj.A.getNickname(t.id)}`));
                            }));
                    break;
                case hq.rD.USER:
                    hJ.info(`user id: ${e.record.id}`),
                        hJ.info(`username: ${e.record.username}`),
                        hJ.info(`global name: ${ei.Ay.getGlobalName(e.record)}`),
                        hJ.info(`nickname: ${aj.A.getNickname(e.record.id)}`),
                        hJ.info(`guild nicknames: ${hK.Ay.getNicknames(e.record.id)}`);
            }
            hJ.info(`frecency score: ${hz.A.getScoreWithoutFetchingLatest(e.record.id)}`), hQ();
        }),
        hJ.info("END Quick Switcher State\n");
}
async function hZ() {
    hJ.info("START User Search Worker State");
    let e = await h$.A.requestDebugState();
    null == e
        ? hJ.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              hJ.info(`id: ${t}`),
                  hJ.info(`username: ${a.username}`),
                  hJ.info(`global name: ${a.globalName}`),
                  hJ.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      hJ.info(`guild id: ${t}`), hJ.info(`guild nickname: ${a}`);
                  }),
                  hQ();
          }),
          hJ.info("END User Search Worker State\n"));
}
async function h0() {
    let e = await h$.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = ee.default.getUsers(),
        l = new Set(Object.keys(t)),
        n = mU.default.keys(a),
        s = [];
    return (
        n.forEach((e) => {
            l.has(e) || s.push(e);
        }),
        s
    );
}
async function h1(e) {
    let t = await h$.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        l = a1.A.getGuildIds(),
        n = [];
    l.forEach((t) => {
        let a = hK.Ay.getMember(t, e);
        null != a && n.push(a);
    });
    let s = hH.A.getDebugState(e);
    return { user: ee.default.getUser(e), searchWorkerUser: a, guildMembers: n, guildMemberRequests: s };
}
var h2 = a(929948);
function h3(e) {
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
                    className: h2.qS,
                    children: l,
                }),
            a &&
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: h2.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let h8 = (0, hF.D)(() => ({
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
function h6() {
    let e = h8.useField("includeFrecency"),
        t = h8.useField("includeFriends"),
        a = h8.useField("includeDMs"),
        l = h8.useField("includeGDMs"),
        n = h8.useField("includeQuickSwitcherState"),
        s = h8.useField("includeUserSearchWorkerState"),
        i = h8.useField("isUploading"),
        u = h8.useField("isSuccess"),
        m = h8.useField("errorMessage"),
        h = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: l,
                includeQuickSwitcherState: n,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = h8.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    h8.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = aj.A.getFriendIDs()),
                            hJ.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = ee.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    l = ei.Ay.getGlobalName(t),
                                    n = aj.A.getNickname(t.id),
                                    s = hK.Ay.getNicknames(t.id);
                                hJ.info(`username: ${a}`),
                                    hJ.info(`global name: ${l}`),
                                    hJ.info(`nickname: ${n}`),
                                    hJ.info(`guild nicknames: ${s}`),
                                    hQ();
                            }),
                            hJ.info("END Discord Friends\n")),
                        a &&
                            ((r = av.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            hJ.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, ag.m1)(e, ee.default, aj.A),
                                    a = (0, ag.ks)(e, ee.default, aj.A);
                                hJ.info(`id: ${e.id}`),
                                    hJ.info(`name: ${t}`),
                                    hJ.info(`default name: ${a}`),
                                    hJ.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ee.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            l = ei.Ay.getGlobalName(t),
                                            n = aj.A.getNickname(t.id),
                                            s = hK.Ay.getNicknames(t.id);
                                        hJ.info(`username: ${a}`),
                                            hJ.info(`global name: ${l}`),
                                            hJ.info(`nickname: ${n}`),
                                            hJ.info(`guild nicknames: ${s}`),
                                            hQ();
                                    });
                            }),
                            hJ.info("END Logging Group DM Channels\n"),
                            hJ.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, ag.m1)(e, ee.default, aj.A);
                                hJ.info(`id: ${e.id}`), hJ.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    l = ee.default.getUser(a);
                                if (null == l) return;
                                let n = l.username,
                                    s = ei.Ay.getGlobalName(l),
                                    i = aj.A.getNickname(l.id);
                                hJ.info(`username: ${n}`),
                                    hJ.info(`global name: ${s}`),
                                    hJ.info(`nickname: ${i}`),
                                    hQ();
                            }),
                            hJ.info("END Logging DM Channels\n")),
                        l &&
                            ((c = av.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            hJ.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, ag.m1)(e, ee.default, aj.A),
                                    a = (0, ag.ks)(e, ee.default, aj.A);
                                hJ.info(`id: ${e.id}`),
                                    hJ.info(`name: ${t}`),
                                    hJ.info(`default name: ${a}`),
                                    hJ.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ee.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            l = ei.Ay.getGlobalName(t),
                                            n = aj.A.getNickname(t.id),
                                            s = hK.Ay.getNicknames(t.id);
                                        hJ.info(`username: ${a}`),
                                            hJ.info(`global name: ${l}`),
                                            hJ.info(`nickname: ${n}`),
                                            hJ.info(`guild nicknames: ${s}`),
                                            hQ();
                                    });
                            }),
                            hJ.info("END Logging Group DM Channels\n"),
                            hJ.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, ag.m1)(e, ee.default, aj.A);
                                hJ.info(`id: ${e.id}`), hJ.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    l = ee.default.getUser(a);
                                if (null == l) return;
                                let n = l.username,
                                    s = ei.Ay.getGlobalName(l),
                                    i = aj.A.getNickname(l.id);
                                hJ.info(`username: ${n}`),
                                    hJ.info(`global name: ${s}`),
                                    hJ.info(`nickname: ${i}`),
                                    hQ();
                            }),
                            hJ.info("END Logging DM Channels\n")),
                        e &&
                            ((h = hz.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, hY.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            hJ.info("START Frecency"),
                            hJ.info("Guilds"),
                            x.forEach((e) => {
                                let t = hz.A.getScoreWithoutFetchingLatest(e.id);
                                hJ.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            hQ(),
                            hJ.info("DM Channels"),
                            g.forEach((e) => {
                                let t = hz.A.getScoreWithoutFetchingLatest(e.id);
                                hJ.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hQ(),
                            hJ.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = hz.A.getScoreWithoutFetchingLatest(e.id);
                                hJ.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    hJ.info(`default name: ${(0, ag.ks)(e, ee.default, aj.A)}`),
                                    hJ.info(`name: ${(0, ag.m1)(e, ee.default, aj.A)}`);
                            }),
                            hQ(),
                            hJ.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = hz.A.getScoreWithoutFetchingLatest(e.id);
                                hJ.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hQ(),
                            hJ.info("END Frecency\n")),
                        n && hX(),
                        s && hZ(),
                        await (0, hB.a)(en.Umv.WEB_APP),
                        h8.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new hG.LG(t);
                    h8.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    h8.setState({ isUploading: !1 });
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
                onChange: () => h8.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(c.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => h8.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(c.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => h8.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(c.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: l,
                onChange: () => h8.setState({ includeGDMs: !l }),
            }),
            (0, r.jsx)(c.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: n,
                onChange: () => h8.setState({ includeQuickSwitcherState: !n }),
            }),
            (0, r.jsx)(c.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => h8.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(h3, {
                isUploading: i,
                isSuccess: u,
                errorMessage: m,
                onClick: h,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let h5 = (0, hF.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function h9() {
    let e = h5.useField("userIds"),
        t = h5.useField("isLoading"),
        a = h5.useField("isSuccess"),
        l = h5.useField("errorMessage"),
        n = h5.useField("lastRunAt"),
        s = o.useCallback(async () => {
            h5.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await h0();
                h5.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                h5.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                h5.setState({ isLoading: !1 });
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
                            className: h2.J1,
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
                    className: h2.N6,
                    children: [
                        null != l &&
                            (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: h2.qS,
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
                                    (0, r.jsx)("div", { className: h2.uk, children: i }),
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
let h4 = (0, hF.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function h7() {
    let e = h4.useField("isRecording"),
        t = h4.useField("isUploading"),
        a = h4.useField("isSuccess"),
        l = h4.useField("errorMessage"),
        n = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = hW.A.getProps();
            (n.current !== e || s.current !== t) && ((n.current = e), (s.current = t), hX());
        }, []);
    o.useEffect(() => {
        if (e) return hW.A.addChangeListener(i), () => hW.A.removeChangeListener(i);
    }, [i, e]);
    let c = o.useCallback(async () => {
        let { isUploading: e } = h4.getState();
        if (!e)
            try {
                h4.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, hB.a)(en.Umv.WEB_APP),
                    h4.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new hG.LG(t);
                h4.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                h4.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(d.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(mi.p, {
                messageType: mi.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(sa.e, {
                children: [
                    (0, r.jsx)(m.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => h4.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(h3, {
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
var xe = a(145497);
let xt = (0, hF.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function xa(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: h2.J1,
                children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: h2.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: h2.J1,
                            children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = a1.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: h2.J1,
                                      children: [
                                          (0, r.jsx)(xe.Ay, { guild: t, iconSize: 16 }),
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
function xl(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: l, guildMembers: n, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sX.y, { size: "sm", color: eB.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(m9.E, { size: "sm", color: eB.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: h2.N6,
        children: [
            (0, r.jsxs)("div", {
                className: h2.J1,
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
                    className: h2.uk,
                    children: (0, r.jsx)("div", {
                        className: h2.J1,
                        children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: h2.J1,
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
                    className: h2.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: h2.J1,
                            children: (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                children: `username: ${l.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: h2.J1,
                            children: (0, r.jsx)(h.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${l.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: h2.J1,
                            children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: h2.uk,
                            children: [
                                0 === Object.keys(l.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: h2.J1,
                                        children: (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(l.nicknames).map((e) => {
                                    let [t, a] = e,
                                        l = a1.A.getGuild(t),
                                        n = av.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: h2.J1,
                                            children: [
                                                null != l && (0, r.jsx)(xe.Ay, { guild: l, iconSize: 16 }),
                                                null != l &&
                                                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: l.name }),
                                                null == l &&
                                                    null != n &&
                                                    (0, r.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, ag.m1)(n, ee.default, aj.A),
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
                className: h2.J1,
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
                    className: h2.uk,
                    children: n.map((e) => {
                        let t = a1.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: h2.J1,
                                children: [
                                    (0, r.jsx)(xe.Ay, { guild: t, iconSize: 16 }),
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
                className: h2.J1,
                children: [
                    (0, r.jsx)(ck.m, { size: "sm" }),
                    (0, r.jsx)(h.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: h2.uk,
                    children: [
                        (0, r.jsx)(xa, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(xa, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(xa, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function xn() {
    let e = o.useCallback((e) => {
            xt.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = xt.getState();
            if (!t && null != e) {
                xt.setState({ loading: !0, error: null });
                try {
                    let t = await h1(e);
                    xt.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new hG.LG(t);
                    xt.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    xt.setState({ loading: !1 });
                }
            }
        }, []),
        a = xt.useField("loading");
    return (0, r.jsxs)("div", {
        className: h2.$n,
        children: [
            (0, r.jsx)(v.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(m.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function xs() {
    let e = xt.useField("state"),
        t = xt.useField("error");
    return (0, r.jsxs)(d.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(xn, {}),
            null != t &&
                (0, r.jsx)(h.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: h2.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(xl, { userState: e }),
        ],
    });
}
function xi() {
    return (0, r.jsxs)(x.Ip, {
        className: h2.nd,
        children: [
            (0, r.jsx)(h7, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(h6, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(xs, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(h9, {}),
        ],
    });
}
var xr = a(761508),
    xo = a(599147),
    xd = a(808411),
    xc = a(624716),
    xu = a(398590),
    xm = a(764451),
    xh = a(784957),
    xx = a(52822),
    xp = a(642153);
let xg = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    xv = {
        "virtual-currency": function () {
            return (0, r.jsxs)(xx.Hq, {
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
                                (e = xh.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (xm.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, xu.id)(en.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(xo.o, {}), (0, r.jsx)(xd.A, {}), (0, r.jsx)(xc.A, {})] }),
    };
function xj() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => xv[e], [e]);
    return (0, r.jsxs)("div", {
        className: P()(tG.nd, xp.kL),
        children: [
            (0, r.jsx)(xr.V, {
                className: xp.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: xg.map((e) => (0, r.jsx)(xr.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(x.Ar, { children: (0, r.jsx)("div", { className: xp.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var xb = a(718446),
    xf = a(766075),
    x_ = a(355097);
let xy = (0, hF.D)(() => ({ urlString: "", error: null })),
    xE = Object.entries(x_.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function xC() {
    let [e, t] = o.useState(),
        a = xy.useField("urlString"),
        l = xy.useField("error"),
        n = o.useCallback(() => {
            let e = xy.getField("urlString");
            if (null == e || "" === e) return void xy.setState({ error: "URL is required" });
            let t = (0, xb.parseSettingsUrl)({ path: e });
            ((0, xb.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? xy.setState({ error: "String did not match expected format" })
                : (0, xf.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(d.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(t7.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xE,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = x_.od[e].split("/");
                        xy.setState({ urlString: en.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(v.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => xy.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(sa.e, {
                children: [
                    (0, r.jsx)(m.$, {
                        variant: "primary",
                        onClick: n,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(m.$, {
                        variant: "secondary",
                        onClick: () => (0, lj.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != l && (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
var xS = a(780964);
let xA = (0, hF.D)(() => ({ setting: xS.X.ACCOUNT_PANEL }));
function xN() {
    let e = xA.useField("setting"),
        t = o.useCallback(() => {
            (0, xf.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(xS.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(d.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(t7.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => xA.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(m.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var xk = a(963935),
    xI = a(513009),
    xD = a(53181);
function xT(e) {
    let { title: t, initExpanded: a, highlightMode: l = "none", children: n } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === l || "migrated-root" === l ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(h.E, { variant: e, color: c, children: t });
    return null == n
        ? (0, r.jsx)("div", { className: xD.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: xD.NF,
              children: [
                  (0, r.jsxs)(U.D, {
                      className: xD.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(su.A, {
                              direction: s ? su.A.Directions.DOWN : su.A.Directions.RIGHT,
                              className: xD.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: xD.m4, children: n }),
              ],
          });
}
function xR(e) {
    let { setting: t, depth: a, inheritedHighlightMode: l } = e,
        n = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case xk.Z6.ROOT:
                    return "migrated-root";
                case xk.Z6.SECTION:
                case xk.Z6.PANEL:
                case xk.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, l),
        s = "migrated" === n ? "migrated" : void 0,
        i = null;
    return (
        (0, xk.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(xR, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(xT, { title: t.key, initExpanded: a <= 2, highlightMode: n, children: i })
    );
}
function xO() {
    let { node: e } = (0, X.Ay)(xI.D, ""),
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
            (0, r.jsx)(xR, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var xw = a(168803);
function xM() {
    return (0, r.jsxs)(x.Ip, {
        className: xw.n,
        children: [
            (0, r.jsx)(xN, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(xC, {}),
            (0, r.jsx)(j.c, {}),
            (0, r.jsx)(xO, {}),
        ],
    });
}
function xL() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aH.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(lB, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aH.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(ms, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aH.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(me, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aH.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(n4, {}),
            },
        ];
        return (
            aP.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aH.fu.SHOP, render: () => (0, r.jsx)(u0, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aH.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(dw, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aH.fu.SHOP,
                    render: () => (0, r.jsx)(tT, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aH.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cX, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aH.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(st, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aH.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(d7.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aH.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(li, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aH.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(so, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aH.fu.GAMES, render: () => (0, r.jsx)(dg, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aH.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(ic, {}),
                }),
                aU.isPlatformEmbedded &&
                    e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: aH.fu.GAMES,
                        render: () => (0, r.jsx)(n$, {}),
                    }),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: aH.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, r.jsx)(nw, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aH.fu.GAMES, render: () => (0, r.jsx)(u2, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aH.fu.GAMES,
                    render: () => (0, r.jsx)(a4, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: aH.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(ax, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: aH.fu.GAMES,
                    render: () => (0, r.jsx)(aL, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: aH.fu.GAMES,
                    render: () => (0, r.jsx)(ai, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aH.fu.USERS,
                    render: () => (0, r.jsx)(xi, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aH.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(M, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aH.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(c2, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aH.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(iX, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aH.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rC, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aH.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(ru, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aH.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(nl, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aH.fu.UI, render: () => (0, r.jsx)(nD, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aH.fu.UI,
                render: () => (0, r.jsx)(cN, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aH.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sR, { devSettingsCategory: aG.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aH.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rK, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aH.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sR, { devSettingsCategory: aG.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aH.fu.USERS, render: () => (0, r.jsx)(cc, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aH.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(r3, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aH.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rI, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aH.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rb, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aH.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(la, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aH.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(na, {}),
            }),
            aP.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: aH.fu.USERS,
                    render: () => (0, r.jsx)(t9, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: aH.fu.USERS,
                    render: () => (0, r.jsx)(aC, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aH.fu.DCF, render: () => (0, r.jsx)(nA, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aH.fu.DCF, render: () => (0, r.jsx)(nc, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aH.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(ri, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aH.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(ca, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aH.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(oo, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aH.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dQ, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: aH.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(ox, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aH.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(mZ, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aH.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sC, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aH.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(ig, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: aH.fu.AUDIO_VIDEO,
                tags: ["spatial", "hrtf", "steam audio", "3d"],
                render: () => (0, r.jsx)(mw, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aH.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(mT, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: aH.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(mv, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aH.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(mb, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aH.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(ra, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aH.fu.BOOSTING, render: () => (0, r.jsx)(sI, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aH.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rh, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aH.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(xM, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aH.fu.QUESTS,
                render: () => (0, r.jsx)(ak, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aH.fu.QUESTS,
                render: () => (0, r.jsx)(md, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aH.fu.BILLING,
                render: () => (0, r.jsx)(xj, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aH.fu.QUESTS,
                render: () => (0, r.jsx)(hU, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aH.fu.USERS,
                render: () => (0, r.jsx)(cw, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aH.fu.USERS,
                render: () => (0, r.jsx)(lX, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aH.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(nH, {}),
            }),
            e
        );
    }, []);
}
